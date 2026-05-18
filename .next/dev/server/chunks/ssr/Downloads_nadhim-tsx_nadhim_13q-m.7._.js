module.exports = [
"[project]/Downloads/nadhim-tsx/nadhim/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
// lib/supabase.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Supabase غير مضبوط! أضف NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_ANON_KEY في Vercel Environment Variables');
}
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl ?? '', supabaseKey ?? '');
}),
"[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ROLES = [
    {
        key: 'admin',
        label: 'المسؤول',
        img: '/Admin.png'
    },
    {
        key: 'teacher',
        label: 'المؤطر',
        img: '/teacher.png'
    },
    {
        key: 'guardian',
        label: 'ولي الأمر',
        img: '/father.png'
    }
];
function LoginPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('admin');
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPass, setShowPass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.removeItem('user');
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    }, []);
    const handleLogin = async ()=>{
        setError('');
        if (!username || !password) {
            setError('يرجى إدخال اسم المستخدم وكلمة المرور');
            return;
        }
        setLoading(true);
        const { data, error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('app_users').select('*').eq('username', username).eq('password', password).eq('role', role).single();
        if (dbError || !data) {
            setError('بيانات غير صحيحة أو الدور غير مطابق');
            setLoading(false);
            return;
        }
        const user = {
            id: data.id,
            username: data.username,
            password: data.password,
            role: data.role,
            name: data.name,
            teacherId: data.teacher_id,
            studentIds: data.student_ids
        };
        localStorage.setItem('user', JSON.stringify(user));
        router.push(user.role === 'guardian' ? '/guardian' : `/${user.role}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-bg"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 1,
                    background: 'rgba(242,237,227,0.45)'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lcard",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/Logo.png",
                                    alt: "ناظم",
                                    style: {
                                        width: 100,
                                        height: 100,
                                        display: 'block',
                                        margin: '0 auto -20px'
                                    },
                                    className: "ico-logo",
                                    onError: (e)=>{
                                        e.target.style.display = 'none';
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Amiri,serif',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'var(--g)',
                                        lineHeight: 1
                                    },
                                    children: "ناظم"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'var(--g)',
                                        fontSize: 12,
                                        marginTop: 6
                                    },
                                    children: "لإدارة بيانات وأداء التعليم القرآني"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "roles",
                            children: ROLES.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `role-b ${role === r.key ? 'on' : ''}`,
                                    onClick: ()=>setRole(r.key),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: r.img,
                                            alt: r.label,
                                            onError: (e)=>{
                                                e.target.style.display = 'none';
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        r.label
                                    ]
                                }, r.key, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fld",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "اسم المستخدم"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    type: "text",
                                    placeholder: "ادخل اسم المستخدم",
                                    value: username,
                                    autoComplete: "off",
                                    onChange: (e)=>setUsername(e.target.value),
                                    onKeyDown: (e)=>e.key === 'Enter' && handleLogin()
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fld",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "كلمة المرور"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "sinp",
                                            style: {
                                                paddingLeft: 42
                                            },
                                            type: showPass ? 'text' : 'password',
                                            placeholder: "ادخل كلمة المرور",
                                            value: password,
                                            autoComplete: "new-password",
                                            onChange: (e)=>setPassword(e.target.value),
                                            onKeyDown: (e)=>e.key === 'Enter' && handleLogin()
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPass((v)=>!v),
                                            style: {
                                                position: 'absolute',
                                                left: 10,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: 16,
                                                color: '#888',
                                                padding: 4
                                            },
                                            "aria-label": showPass ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور',
                                            children: showPass ? '🙈' : '👁️'
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#fef2f2',
                                border: '1px solid #fca5a5',
                                borderRadius: 8,
                                padding: '8px 14px',
                                color: '#dc2626',
                                fontSize: 13,
                                marginBottom: 12,
                                textAlign: 'center'
                            },
                            children: [
                                "⚠️ ",
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-solid",
                            onClick: handleLogin,
                            disabled: loading,
                            style: {
                                width: '100%',
                                fontSize: 15,
                                padding: '12px',
                                borderRadius: 10
                            },
                            children: loading ? '⏳ جاري الدخول...' : 'الدخول إلى النظام'
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Downloads_nadhim-tsx_nadhim_13q-m.7._.js.map