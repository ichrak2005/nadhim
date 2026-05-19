'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { AppUser } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  tab: string;
  setTab: (t: string) => void;
  user: AppUser;
  notifSlot?: React.ReactNode;
  subNav?: React.ReactNode;
}

export default function Layout({ children, tab, setTab, user, notifSlot, subNav }: LayoutProps) {
  const router = useRouter();
  const [drop, setDrop] = useState(false);
  const [dark, setDark] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = localStorage.getItem('theme') || '';
    if (t === 'dark') { setDark(true); document.documentElement.setAttribute('data-theme', 'dark'); }
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';

    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setDrop(false);
    };
    document.addEventListener('mousedown', fn);

    // ✅ FIX زر الرجوع: نمنع التنقل للوراء بدل ما يسجل خروج
    // نحط state حالي ونضيف entry إضافي حتى زر الرجوع ما يخرج من التطبيق
    window.history.replaceState({ page: 'app' }, '');
    window.history.pushState({ page: 'app' }, '');

    const handlePopState = (e: PopStateEvent) => {
      // كل مرة المستخدم يضغط رجوع، نرجع للأمام بدل الخروج
      if (e.state?.page === 'app' || !e.state) {
        window.history.pushState({ page: 'app' }, '');
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mousedown', fn);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const toggleDark = () => {
    const n = !dark; setDark(n);
    document.documentElement.setAttribute('data-theme', n ? 'dark' : '');
    localStorage.setItem('theme', n ? 'dark' : '');
    setDrop(false);
  };

  const logout = () => { localStorage.removeItem('user'); router.push('/'); };

  const T = {
    ms: 'المساجد', tc: 'المؤطرون', st: 'الطلبة', sc: 'الجداول',
    dk: 'الوضع المظلم', lt: 'الوضع الفاتح', lo: 'تسجيل الخروج',
    admin: 'المسؤول العام', teacher: 'المؤطر', guardian: 'ولي الامر',
    title: 'ناظم إدارة مساجد الولاية',
    sub: 'إدارة شاملة للمؤطرين والطلبة والجداول الزمنية',
  };

  const TABS: Record<string, [string, string][]> = {
    admin: [['ms', T.ms], ['tc', T.tc], ['st', T.st], ['sc', T.sc], ['rp', 'التقارير']],
    teacher: [],
    guardian: [],
  };

  const tabs = TABS[user?.role] ?? TABS.admin;
  const displayName = user?.name || T[user?.role] || T.admin;

  return (
    <>
      <div className="page-bg" />
      <div className="page-wrap">

        {/* ─── HEADER ─── */}
        <header className="hdr">
          <div className="hdr-in">

            {/* يمين: إعدادات + اسم */}
            <div className="hdr-r" ref={ref}>
              {notifSlot && <div style={{ marginLeft: 4 }}>{notifSlot}</div>}
              <button className="gear" onClick={() => setDrop(v => !v)} aria-label="إعدادات">⚙️</button>
              <span className="rtag">{displayName}</span>
              {drop && (
                <div className="drop">
                  <div className="drop-hd">{user?.name}</div>
                  <button className="drop-it" onClick={toggleDark}>
                    <span>{dark ? '☀️' : '🌙'}</span>{dark ? T.lt : T.dk}
                  </button>
                  <div className="drop-sep" />
                  <button className="drop-it red" onClick={logout}>
                    <span>🚪</span>{T.lo}
                  </button>
                </div>
              )}
            </div>

            {/* وسط: عنوان */}
            <div className="hdr-c">
              <h1>{T.title}</h1>
              <p>{T.sub}</p>
            </div>

            {/* يسار: لوغو
                ✅ FIX: حذفنا margin-top و position:relative و z-index من هنا
                CSS يتكفل بالتحكم في الحجم عبر .hdr-l img
                ✅ FIX: أضفنا width/height attributes صريحة لمنع layout shift */}
            <div className="hdr-l">
              <img
                src="/Logo.png"
                alt="ناظم"
                width={56}
                height={56}
                onError={e => {
                  // ✅ FIX: بدل ما نخبي اللوغو، نبدله بنص بديل
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                  const span = document.createElement('span');
                  span.textContent = 'ناظم';
                  span.style.cssText = 'font-family:Amiri,serif;font-size:18px;font-weight:700;color:var(--g)';
                  el.parentNode?.appendChild(span);
                }}
              />
            </div>

          </div>
        </header>

        {/* ─── TABS NAV ─── */}
        {tabs.length > 0 && (
          <div className="nav">
            <div className="nav-in">
              {tabs.map(([key, label]) => (
                <button key={key} className={`nb ${tab === key ? 'on' : ''}`} onClick={() => setTab(key)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {subNav && subNav}

        {/* ─── MAIN CONTENT ───
            ✅ FIX: أزلنا className="page-wrap" من main (كان يخرب positioning)
            ✅ FIX: استخدمنا className="main-content" بدل inline padding ثابت */}
        <main className="main-content">
          {children}
        </main>

      </div>
    </>
  );
}