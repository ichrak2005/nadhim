// ══════════════════════════════════════════════════════════
//  TAB: جدول التوقيت — نسخة محسّنة (Supabase بدل localStorage)
// ══════════════════════════════════════════════════════════

'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Teacher, Mosque, ScheduleRow, SentSchedule, Notif } from '../../types';
import { supabase } from '../../lib/supabase';

// ── localStorage helpers (للإشعارات المحلية المؤقتة فقط) ──
function gst<T>(k: string, d: T): T {
  try { return JSON.parse(localStorage.getItem(k)!) ?? d; } catch { return d; }
}
function sst<T>(k: string, v: T) {
  localStorage.setItem(k, JSON.stringify(v));
  window.dispatchEvent(new StorageEvent('storage', { key: k }));
}

const SEMESTERS = [
  { id: 1, label: 'الفصل الأول',  range: 'جانفي – أفريل'    },
  { id: 2, label: 'الفصل الثاني', range: 'ماي – أوت'        },
  { id: 3, label: 'الفصل الثالث', range: 'سبتمبر – ديسمبر'  },
] as const;

const DAYS_AR    = ['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعة','السبت'];
const DAYS_ORDER = ['السبت','الجمعة','الخميس','الاربعاء','الثلاثاء','الاثنين','الاحد'];

function useToast() {
  const [t, sT] = useState('');
  const show = useCallback((m: string) => { sT(m); setTimeout(() => sT(''), 2500); }, []);
  return { toast: t, show };
}

// ── بطاقة حصة صغيرة في الجدول ──
function SessionPill({ row, onRemove }: { row: ScheduleRow; onRemove?: () => void }) {
  return (
    <div style={{
      background: 'var(--g)',
      color: '#fff',
      borderRadius: 6,
      padding: '4px 8px',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      marginBottom: 3,
    }}>
      <span style={{ whiteSpace: 'nowrap' }}>{row.startTime}–{row.endTime}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          style={{
            background: 'rgba(255,255,255,0.25)',
            border: 'none',
            borderRadius: 4,
            color: '#fff',
            cursor: 'pointer',
            fontSize: 11,
            lineHeight: 1,
            padding: '1px 5px',
          }}
        >✕</button>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
export default function ScheduleTab({
  teacher,
  myMosque,
}: {
  teacher: Teacher;
  myMosque: Mosque | undefined;
}) {
  const [sem, setSem]           = useState<1 | 2 | 3>(1);
  const [rows, setRows]         = useState<ScheduleRow[]>([]);
  const [sent, setSent]         = useState(false);
  const [sentDate, setSentDate] = useState('');
  const [loading, setLoading]   = useState(false);
  const [loadErr, setLoadErr]   = useState('');  // ✅ FIX: نبين خطأ بدل دوران للأبد
  const [dbId, setDbId]         = useState<number | null>(null);

  const [newDay,   setNewDay]   = useState('الاحد');
  const [newStart, setNewStart] = useState('08:00');
  const [newEnd,   setNewEnd]   = useState('10:00');
  const [addErr,   setAddErr]   = useState('');

  const { toast, show } = useToast();

  // ── تحميل الجدول من Supabase ──
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setLoadErr('');

      // ✅ FIX: try-catch-finally يضمن setLoading(false) حتى لو Supabase throw exception
      try {
        const { data, error } = await supabase
          .from('sent_schedules')
          .select('*')
          .eq('teacher_id', teacher.id)
          .eq('sem', sem)
          .maybeSingle();

        if (error) throw error;

        if (data) {
          setRows(data.rows ?? []);
          setSent(data.sent ?? false);
          setSentDate(data.sent_date ?? '');
          setDbId(data.id);
        } else {
          setRows([]);
          setSent(false);
          setSentDate('');
          setDbId(null);
        }
      } catch (err: any) {
        console.error('ScheduleTab load error:', err);
        setLoadErr('تعذّر تحميل الجدول. تحقق من الاتصال وأعد المحاولة.');
        // نفضي البيانات بدل ما نترك القديم
        setRows([]);
        setSent(false);
        setSentDate('');
        setDbId(null);
      } finally {
        // ✅ هذا يشتغل دائماً حتى لو كانت exception
        setLoading(false);
      }
    };

    load();
  }, [teacher.id, sem]);

  // ── حفظ في Supabase ──
  const persistToSupabase = useCallback(async (
    newRows: ScheduleRow[],
    isSent = false,
    date = ''
  ) => {
    const payload = {
      teacher_id: teacher.id,
      mosque_id: teacher.mosqueId,
      sem,
      rows: newRows,
      sent: isSent,
      sent_date: date,
    };

    try {
      if (dbId) {
        await supabase.from('sent_schedules').update(payload).eq('id', dbId);
      } else {
        const { data } = await supabase.from('sent_schedules').insert(payload).select().single();
        if (data) setDbId(data.id);
      }
    } catch (err) {
      console.error('persistToSupabase error:', err);
      show('⚠️ فشل الحفظ. تحقق من الاتصال');
    }
  }, [teacher.id, teacher.mosqueId, sem, dbId]);

  const addRow = async () => {
    setAddErr('');
    if (!newStart || !newEnd) { setAddErr('⚠️ حدد وقت البداية والنهاية'); return; }
    if (newStart >= newEnd)   { setAddErr('⚠️ وقت البداية يجب أن يكون قبل النهاية'); return; }
    const row: ScheduleRow = {
      id: Date.now(),
      day: newDay,
      startTime: newStart,
      endTime: newEnd,
      note: '',
    };
    const updated = [...rows, row];
    setRows(updated);
    await persistToSupabase(updated, false);
    show('✅ تمت إضافة الحصة');
  };

  const removeRow = async (id: number) => {
    const updated = rows.filter(r => r.id !== id);
    setRows(updated);
    await persistToSupabase(updated, sent, sentDate);
  };

  const saveDraft = async () => {
    await persistToSupabase(rows, false);
    setSent(false);
    show('💾 تم حفظ المسودة');
  };

  const sendToAll = async () => {
    if (rows.length === 0) { show('⚠️ أضف حصة واحدة على الأقل'); return; }
    const date = new Date().toLocaleString('ar-DZ', { numberingSystem: 'latn' });

    await persistToSupabase(rows, true, date);
    setSent(true);
    setSentDate(date);

    // إشعار الأدمن
    await supabase.from('notifications').insert({
      teacher_id: teacher.id,
      mosque_id: teacher.mosqueId,
      msg: `📅 جدول توقيت — ${teacher.name} / ${teacher.mosqueName ?? myMosque?.name}`,
      time: date,
      read: false,
      type: 'schedule',
      target: 'admin',
    });

    // إشعار أولياء الأمور
    await supabase.from('notifications').insert({
      teacher_id: teacher.id,
      msg: `📅 المؤطر ${teacher.name} أرسل جدول الحصص الجديد`,
      time: date,
      read: false,
      type: 'schedule',
      target: 'guardian',
    });

    // localStorage fallback
    const an = gst<Notif[]>('adminNotifs', []);
    an.unshift({
      id: Date.now(), teacherId: teacher.id, mosqueId: teacher.mosqueId,
      msg: `📅 جدول توقيت — ${teacher.name}`, time: date, read: false, type: 'schedule',
    });
    sst('adminNotifs', an);

    show('✅ تم الإرسال للأدمن وأولياء الأمور');
  };

  const resetSchedule = async () => {
    await persistToSupabase(rows, false, '');
    setSent(false);
    setSentDate('');
  };

  // ── بناء الجدول الأسبوعي ──
  const byDay: Record<string, ScheduleRow[]> = {};
  DAYS_ORDER.forEach(d => (byDay[d] = []));
  rows.forEach(r => { if (byDay[r.day]) byDay[r.day].push(r); });
  const maxRows = Math.max(1, ...Object.values(byDay).map(a => a.length));

  return (
    <div style={{ padding: '14px', direction: 'rtl' }}>

      {/* مؤشر التحميل */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '30px', color: 'var(--txt3)', fontSize: 13 }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>⏳</div>
          جاري تحميل الجدول...
        </div>
      )}

      {/* ✅ FIX: رسالة خطأ بدل دوران للأبد */}
      {!loading && loadErr && (
        <div style={{
          background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 10,
          padding: '14px 16px', color: '#dc2626', fontSize: 13, marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ fontSize: 20 }}>⚠️</span>
          <div style={{ flex: 1 }}>{loadErr}</div>
          <button
            onClick={() => { setLoadErr(''); setSem(sem); }} // إعادة تشغيل useEffect
            style={{
              padding: '6px 12px', borderRadius: 8, border: '1px solid #fca5a5',
              background: 'white', cursor: 'pointer', fontSize: 12, color: '#dc2626',
              fontFamily: 'Cairo,sans-serif',
            }}
          >إعادة المحاولة</button>
        </div>
      )}

      {!loading && !loadErr && (
        <>
          {/* ══ شريط الفصول ══ */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
            {SEMESTERS.map(s => (
              <button
                key={s.id}
                onClick={() => setSem(s.id as 1 | 2 | 3)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 20,
                  border: `1.5px solid ${sem === s.id ? 'var(--g)' : 'var(--brd)'}`,
                  background: sem === s.id ? 'var(--g)' : 'var(--card)',
                  color: sem === s.id ? '#fff' : 'var(--txt2)',
                  cursor: 'pointer',
                  fontFamily: 'Cairo,sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  transition: 'all 0.2s',
                  textAlign: 'center',
                }}
              >
                <div>{s.label}</div>
                <div style={{ fontSize: 10, opacity: 0.8, fontWeight: 400 }}>{s.range}</div>
              </button>
            ))}
          </div>

          {/* ══ إشعار الإرسال ══ */}
          {sent && (
            <div style={{
              background: '#f0fdf4', border: '2px solid #86efac', borderRadius: 10,
              padding: '12px 16px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontSize: 20 }}>✅</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: '#2d8a48', fontSize: 13 }}>
                  تم إرسال الجدول للأدمن وأولياء الأمور
                </div>
                <div style={{ fontSize: 11, color: 'var(--txt3)', marginTop: 2 }}>{sentDate}</div>
              </div>
              <button
                onClick={resetSchedule}
                style={{
                  padding: '6px 14px', borderRadius: 8, border: '1px solid var(--brd)',
                  background: 'var(--gp)', cursor: 'pointer', fontSize: 12,
                  fontFamily: 'Cairo,sans-serif', color: 'var(--txt)',
                }}
              >تعديل</button>
            </div>
          )}

          {/* ══ نموذج إضافة حصة ══ */}
          <div style={{
            background: 'var(--card)', border: '1.5px solid var(--brd)', borderRadius: 12,
            padding: '14px', marginBottom: 14, boxShadow: 'var(--sh)',
          }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--g)', marginBottom: 10 }}>
              ➕ إضافة حصة جديدة
            </div>

            {/* اليوم */}
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: 'var(--txt3)', display: 'block', marginBottom: 4 }}>اليوم</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {DAYS_AR.map(d => (
                  <button
                    key={d}
                    onClick={() => setNewDay(d)}
                    style={{
                      padding: '5px 12px', borderRadius: 16,
                      border: `1.5px solid ${newDay === d ? 'var(--g)' : 'var(--brd)'}`,
                      background: newDay === d ? 'var(--g)' : 'transparent',
                      color: newDay === d ? '#fff' : 'var(--txt2)',
                      cursor: 'pointer', fontFamily: 'Cairo,sans-serif', fontSize: 12,
                      fontWeight: newDay === d ? 700 : 400, transition: 'all 0.15s',
                    }}
                  >{d}</button>
                ))}
              </div>
            </div>

            {/* الوقت */}
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 110 }}>
                <label style={{ fontSize: 12, color: 'var(--txt3)', display: 'block', marginBottom: 4 }}>من</label>
                <input
                  type="time" value={newStart}
                  onChange={e => setNewStart(e.target.value)}
                  className="sinp" style={{ width: '100%', fontFamily: 'Cairo,sans-serif' }}
                />
              </div>
              <div style={{ paddingTop: 22, color: 'var(--txt3)', fontSize: 16 }}>—</div>
              <div style={{ flex: 1, minWidth: 110 }}>
                <label style={{ fontSize: 12, color: 'var(--txt3)', display: 'block', marginBottom: 4 }}>إلى</label>
                <input
                  type="time" value={newEnd}
                  onChange={e => setNewEnd(e.target.value)}
                  className="sinp" style={{ width: '100%', fontFamily: 'Cairo,sans-serif' }}
                />
              </div>
            </div>

            {addErr && (
              <div style={{ color: '#dc2626', fontSize: 12, marginBottom: 8 }}>{addErr}</div>
            )}

            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={addRow} className="btn btn-gold" style={{ flex: 2 }}>
                ➕ إضافة الحصة
              </button>
              {rows.length > 0 && (
                <button onClick={saveDraft} className="btn btn-gold" style={{ flex: 1 }}>
                  💾 حفظ مسودة
                </button>
              )}
            </div>
          </div>

          {/* ══ الجدول الأسبوعي ══ */}
          <div style={{
            background: 'var(--card)', border: '1.5px solid var(--brd)',
            borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--sh)',
          }}>
            <div style={{
              background: 'var(--g)', padding: '10px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>جدول التوقيت الأسبوعي</span>
              {sent && (
                <span style={{
                  background: 'rgba(255,255,255,0.2)', color: '#fff',
                  fontSize: 11, borderRadius: 10, padding: '2px 10px',
                }}>تم الإرسال ✓</span>
              )}
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%', borderCollapse: 'collapse', minWidth: 420, direction: 'rtl',
              }}>
                <thead>
                  <tr>
                    {DAYS_ORDER.map(d => (
                      <th key={d} style={{
                        border: '1px solid var(--brd)', padding: '10px 6px', fontSize: 12,
                        fontWeight: 700, textAlign: 'center', background: 'var(--gp)', color: 'var(--txt)',
                      }}>{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: maxRows }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                      {DAYS_ORDER.map(d => {
                        const cell = byDay[d][rowIdx];
                        return (
                          <td key={d} style={{
                            border: '1px solid var(--brd)', padding: '4px',
                            verticalAlign: 'top', width: `${100 / 7}%`,
                          }}>
                            {cell && (
                              <SessionPill
                                row={cell}
                                onRemove={!sent ? () => removeRow(cell.id) : undefined}
                              />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {rows.length === 0 && (
              <div style={{ textAlign: 'center', padding: '30px', color: 'var(--txt3)', fontSize: 13 }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>📭</div>
                لم تضف حصة بعد
              </div>
            )}
          </div>

          {!sent && rows.length > 0 && (
            <button
              onClick={sendToAll}
              className="btn btn-gold"
              style={{ width: '100%', marginTop: 12, fontSize: 14, padding: '12px' }}
            >
              📤 إرسال الجدول للأدمن وولي الأمر
            </button>
          )}

          {toast && <div className="toast" style={{ fontSize: 12 }}>{toast}</div>}
        </>
      )}
    </div>
  );
}