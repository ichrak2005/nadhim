'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { AppUser } from '../types';
import { supabase } from '../lib/supabase';

const ROLES = [
  { key: 'admin'    as const, label: 'المسؤول',   img: '/Admin.png'   },
  { key: 'teacher'  as const, label: 'المؤطر',    img: '/teacher.png' },
  { key: 'guardian' as const, label: 'ولي الأمر', img: '/father.png'  },
];

export default function LoginPage() {
  const router = useRouter();
  const [role,     setRole]     = useState<AppUser['role']>('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);

  useEffect(() => {
    // ✅ FIX زر الرجوع: إذا المستخدم بقى logged in (جاء من زر رجوع)
    // نعيد توجيهه للوحة الخاصة به بدل ما يبقى في صفحة Login
    try {
      const stored = localStorage.getItem('user');
      if (stored) {
        const u: AppUser = JSON.parse(stored);
        if (u?.role) {
          router.replace(u.role === 'guardian' ? '/guardian' : `/${u.role}`);
          return;
        }
      }
    } catch {
      localStorage.removeItem('user');
    }

    // تطبيق الثيم
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  }, [router]);

  const handleLogin = async () => {
    setError('');
    if (!username || !password) {
      setError('يرجى إدخال اسم المستخدم وكلمة المرور');
      return;
    }
    setLoading(true);

    try {
      const { data, error: dbError } = await supabase
        .from('app_users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .eq('role', role)
        .single();

      if (dbError || !data) {
        setError('بيانات غير صحيحة أو الدور غير مطابق');
        return;
      }

      const user: AppUser = {
        id: data.id,
        username: data.username,
        password: data.password,
        role: data.role,
        name: data.name,
        teacherId: data.teacher_id,
        studentIds: data.student_ids,
      };

      localStorage.setItem('user', JSON.stringify(user));
      router.push(user.role === 'guardian' ? '/guardian' : `/${user.role}`);
    } catch {
      setError('حدث خطأ في الاتصال. تحقق من الإنترنت وحاول مجدداً');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-bg" />
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, background: 'rgba(242,237,227,0.45)' }} />
      <div className="login-wrap">
        <div className="lcard">
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            {/* ✅ FIX اللوغو: أزلنا ico-logo (mix-blend-mode: multiply يخفيه على خلفية فاتحة)
                استخدمنا object-fit: contain فقط */}
            <img
              src="/Logo.png"
              alt="ناظم"
              style={{
                width: 100, height: 100,
                display: 'block',
                margin: '0 auto -20px',
                objectFit: 'contain',
              }}
              onError={e => { (e.target as HTMLImageElement).style.visibility = 'hidden'; }}
            />
            <div style={{ fontFamily: 'Amiri,serif', fontSize: 30, fontWeight: 700, color: 'var(--g)', lineHeight: 1 }}>
              ناظم
            </div>
            <p style={{ color: 'var(--g)', fontSize: 12, marginTop: 6 }}>
              لإدارة بيانات وأداء التعليم القرآني
            </p>
          </div>

          <div className="roles">
            {ROLES.map(r => (
              <button key={r.key} className={`role-b ${role === r.key ? 'on' : ''}`} onClick={() => setRole(r.key)}>
                <img
                  src={r.img}
                  alt={r.label}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {r.label}
              </button>
            ))}
          </div>

          <div className="fld">
            <label>اسم المستخدم</label>
            <input
              className="sinp"
              style={{ paddingLeft: 16 }}
              type="text"
              placeholder="ادخل اسم المستخدم"
              value={username}
              autoComplete="off"
              onChange={e => setUsername(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
            />
          </div>

          <div className="fld">
            <label>كلمة المرور</label>
            <div style={{ position: 'relative' }}>
              <input
                className="sinp"
                style={{ paddingLeft: 42 }}
                type={showPass ? 'text' : 'password'}
                placeholder="ادخل كلمة المرور"
                value={password}
                autoComplete="new-password"
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
              />
              <button
                type="button"
                onClick={() => setShowPass(v => !v)}
                style={{
                  position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', fontSize: 16,
                  color: '#888', padding: 4,
                }}
                aria-label={showPass ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && (
            <div style={{
              background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8,
              padding: '8px 14px', color: '#dc2626', fontSize: 13, marginBottom: 12, textAlign: 'center',
            }}>
              ⚠️ {error}
            </div>
          )}

          <button
            className="btn btn-solid"
            onClick={handleLogin}
            disabled={loading}
            style={{ width: '100%', fontSize: 15, padding: '12px', borderRadius: 10 }}
          >
            {loading ? '⏳ جاري الدخول...' : 'الدخول إلى النظام'}
          </button>
        </div>
      </div>
    </>
  );
}