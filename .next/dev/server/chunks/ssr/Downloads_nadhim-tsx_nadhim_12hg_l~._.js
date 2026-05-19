module.exports = [
"[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Layout({ children, tab, setTab, user, notifSlot, subNav }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [drop, setDrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = localStorage.getItem('theme') || '';
        if (t === 'dark') {
            setDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        const fn = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) setDrop(false);
        };
        document.addEventListener('mousedown', fn);
        return ()=>document.removeEventListener('mousedown', fn);
    }, []);
    const toggleDark = ()=>{
        const n = !dark;
        setDark(n);
        document.documentElement.setAttribute('data-theme', n ? 'dark' : '');
        localStorage.setItem('theme', n ? 'dark' : '');
        setDrop(false);
    };
    // Language toggle removed — app is Arabic only
    const logout = ()=>{
        localStorage.removeItem('user');
        router.push('/');
    };
    const T = {
        ms: 'المساجد',
        tc: 'المؤطرون',
        st: 'الطلبة',
        sc: 'الجداول',
        dk: 'الوضع المظلم',
        lt: 'الوضع الفاتح',
        lo: 'تسجيل الخروج',
        admin: 'المسؤول العام',
        teacher: 'المؤطر',
        guardian: 'ولي الامر',
        title: 'ناظم إدارة مساجد الولاية',
        sub: 'إدارة شاملة للمؤطرين والطلبة والجداول الزمنية'
    };
    const L = T;
    const TABS = {
        admin: [
            [
                'ms',
                L.ms
            ],
            [
                'tc',
                L.tc
            ],
            [
                'st',
                L.st
            ],
            [
                'sc',
                L.sc
            ],
            [
                'rp',
                'التقارير'
            ]
        ],
        teacher: [],
        guardian: []
    };
    const tabs = TABS[user?.role] ?? TABS.admin;
    const displayName = user?.name || L[user?.role] || L.admin;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-bg"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "hdr",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hdr-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-r",
                                    ref: ref,
                                    children: [
                                        notifSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginLeft: 4
                                            },
                                            children: notifSlot
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "gear",
                                            onClick: ()=>setDrop((v)=>!v),
                                            "aria-label": "إعدادات",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rtag",
                                            children: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        drop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "drop",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drop-hd",
                                                    children: user?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "drop-it",
                                                    onClick: toggleDark,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: dark ? '☀️' : '🌙'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 21
                                                        }, this),
                                                        dark ? L.lt : L.dk
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drop-sep"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "drop-it red",
                                                    onClick: logout,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🚪"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 21
                                                        }, this),
                                                        L.lo
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: L.title
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                            lineNumber: 76,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: L.sub
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                            lineNumber: 76,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-l",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "ناظم",
                                        onError: (e)=>{
                                            e.target.src = '/logo2.png';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    tabs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-in",
                            children: tabs.map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `nb ${tab === key ? 'on' : ''}`,
                                    onClick: ()=>setTab(key),
                                    children: label
                                }, key, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    subNav && subNav,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "page-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                paddingLeft: 40,
                                paddingRight: 40,
                                paddingTop: 24
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
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
"[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$components$2f$Layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/components/Layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
let initialMosques = [];
let initialTeachers = [];
let initialStudents = [];
let _dataPromise = null;
function getDataPromise() {
    if (_dataPromise) return _dataPromise;
    _dataPromise = Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('mosques').select('*').order('id'),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').select('*').order('id'),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('*').order('id')
    ]).then(([{ data: mData }, { data: tData }, { data: sData }])=>{
        if (mData) initialMosques = mData.map((m)=>({
                id: m.id,
                name: m.name,
                municipality: m.municipality,
                imam: m.imam || '',
                teachersCount: m.teachers_count || 0,
                studentsCount: m.students_count || 0,
                progress: m.progress || 0
            }));
        if (tData) initialTeachers = tData.map((t)=>({
                id: t.id,
                name: t.name,
                rank: t.rank || '',
                role: t.role || 'موظف',
                dob: t.dob || '',
                education: t.education || '',
                generation: t.generation || '',
                phone: t.phone || '',
                municipality: t.municipality || 'الأغواط',
                mosqueId: t.mosque_id || 0,
                mosqueName: t.mosque_name || ''
            }));
        if (sData) initialStudents = sData.map((s)=>({
                id: s.id,
                name: s.name,
                fatherName: s.father_name || '',
                dob: s.dob || '',
                gender: s.gender || 'ذكر',
                teacherId: s.teacher_id || 0,
                teacherName: s.teacher_name || '',
                mosqueId: s.mosque_id || 0,
                mosqueName: s.mosque_name || '',
                surah: s.surah || '',
                part: s.part || '',
                grade: s.grade || '',
                progress: s.progress || 0
            }));
    }).catch(()=>{});
    return _dataPromise;
}
function gst(k, d) {
    try {
        const v = localStorage.getItem(k);
        return v ? JSON.parse(v) : d;
    } catch  {
        return d;
    }
}
function sst(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
    window.dispatchEvent(new StorageEvent('storage', {
        key: k
    }));
}
function useDataReady() {
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getDataPromise().then(()=>setReady(true));
    }, []);
    return ready;
}
const DAYS = [
    'الاحد',
    'الاثنين',
    'الثلاثاء',
    'الاربعاء',
    'الخميس',
    'الجمعة',
    'السبت'
];
function Ring({ pct, size = 64 }) {
    const r = (size - 8) / 2, c = 2 * Math.PI * r, off = c - pct / 100 * c;
    const col = pct >= 70 ? '#2d8a48' : pct >= 40 ? '#b8872a' : '#dc2626';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        style: {
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: size / 2,
                cy: size / 2,
                r: r,
                fill: "none",
                stroke: "var(--brd)",
                strokeWidth: 7
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: size / 2,
                cy: size / 2,
                r: r,
                fill: "none",
                stroke: col,
                strokeWidth: 7,
                strokeDasharray: c,
                strokeDashoffset: off,
                strokeLinecap: "round",
                transform: `rotate(-90 ${size / 2} ${size / 2})`
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: size / 2,
                y: size / 2 + 1,
                textAnchor: "middle",
                dominantBaseline: "middle",
                style: {
                    fontSize: 11,
                    fontWeight: 700,
                    fill: col,
                    fontFamily: 'Cairo,sans-serif'
                },
                children: [
                    pct,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function Modal({ title, onClose, children, wide }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mbg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mbox",
            style: wide ? {
                maxWidth: 600
            } : {},
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mhd",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mtit",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 62,
                            columnNumber: 30
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "mcls",
                            onClick: onClose,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 62,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function F({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fld",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 69,
                columnNumber: 31
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
function useToast() {
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const show = (msg)=>{
        setToast(msg);
        setTimeout(()=>setToast(''), 3000);
    };
    return {
        toast,
        show
    };
}
function AdminNotifBell() {
    const [notifs, setNotifs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const load = ()=>setNotifs(gst('adminNotifs', []));
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, []);
    const unread = notifs.filter((n)=>!n.read).length;
    const markRead = ()=>{
        const u = notifs.map((n)=>({
                ...n,
                read: true
            }));
        sst('adminNotifs', u);
        setNotifs(u);
    };
    const clear = ()=>{
        sst('adminNotifs', []);
        setNotifs([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setOpen((v)=>!v);
                    if (unread > 0) markRead();
                },
                style: {
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 10,
                    cursor: 'pointer',
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: 'var(--txt)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 18,
                        position: 'relative'
                    },
                    children: [
                        "🔔",
                        unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: 'absolute',
                                top: -4,
                                right: -4,
                                background: '#dc2626',
                                color: '#fff',
                                borderRadius: '50%',
                                width: 14,
                                height: 14,
                                fontSize: 9,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700
                            },
                            children: unread
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 95,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    right: 0,
                    top: '110%',
                    width: 'min(340px,92vw)',
                    background: 'var(--card)',
                    border: '1.5px solid var(--brd)',
                    borderRadius: 12,
                    boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
                    minWidth: 320,
                    zIndex: 300,
                    padding: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 10,
                            borderBottom: '1px solid var(--brd)',
                            paddingBottom: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: 13
                                },
                                children: "🔔 إشعارات المسؤول"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            notifs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clear,
                                style: {
                                    fontSize: 11,
                                    color: '#dc2626',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer'
                                },
                                children: "مسح الكل"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 102,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    notifs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'var(--txt3)',
                            textAlign: 'center',
                            padding: 16,
                            fontSize: 13
                        },
                        children: "لا توجد إشعارات"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 104,
                        columnNumber: 35
                    }, this),
                    notifs.slice(0, 12).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '9px 0',
                                borderBottom: '1px solid var(--brd)',
                                fontSize: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontWeight: n.read ? 400 : 700,
                                        fontSize: 13
                                    },
                                    children: n.msg
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--txt3)',
                                        fontSize: 11,
                                        marginTop: 2
                                    },
                                    children: n.time
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, n.id, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function StudentsDetailTab({ mS, mT, allStudents }) {
    const [semF, setSemF] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('');
    const [teachF, setTeachF] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('');
    const [hifzData, setHifzData] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const load = ()=>{
            try {
                setHifzData(JSON.parse(localStorage.getItem('hifzRecords') || '{}'));
            } catch  {}
        };
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, []);
    const [evalData, setEvalData] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const load = ()=>{
            try {
                setEvalData(JSON.parse(localStorage.getItem('semEvals') || '{}'));
            } catch  {}
        };
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, []);
    const filtered = !semF || !teachF ? [] : mS.filter((s)=>s.teacherId === parseInt(teachF));
    const getGrade = (sid)=>{
        if (!semF) return '';
        const ev = evalData[`${sid}_${semF}`];
        return ev?.grade || '';
    };
    const gradeCounts = {};
    if (semF) {
        filtered.forEach((s)=>{
            const g = getGrade(s.id);
            if (g) gradeCounts[g] = (gradeCounts[g] || 0) + 1;
        });
    }
    const gradeGroups = [
        {
            key: 'ممتاز',
            color: '#2d8a48',
            count: gradeCounts['ممتاز'] || 0,
            label: 'ممتاز'
        },
        {
            key: 'جيد',
            color: '#b8872a',
            count: gradeCounts['جيد'] || 0,
            label: 'جيد'
        },
        {
            key: 'متوسط',
            color: '#ef6c00',
            count: gradeCounts['متوسط'] || 0,
            label: 'متوسط'
        },
        {
            key: 'ضعيف',
            color: '#dc2626',
            count: gradeCounts['ضعيف'] || 0,
            label: 'ضعيف'
        }
    ];
    const maxCount = Math.max(1, ...gradeGroups.map((g)=>g.count));
    const SEMESTERS = [
        {
            id: '1',
            label: 'الفصل الأول'
        },
        {
            id: '2',
            label: 'الفصل الثاني'
        },
        {
            id: '3',
            label: 'الفصل الثالث'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 10,
                    marginBottom: 16,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "sel",
                        style: {
                            minWidth: 140
                        },
                        value: semF,
                        onChange: (e)=>setSemF(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "كل الفصول"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            SEMESTERS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: s.id,
                                    children: s.label
                                }, s.id, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 31
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "sel",
                        style: {
                            minWidth: 160
                        },
                        value: teachF,
                        onChange: (e)=>setTeachF(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "كل المؤطرين"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            mT.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: t.id,
                                    children: t.name
                                }, t.id, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 24
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 12,
                            color: 'var(--txt3)',
                            alignSelf: 'center'
                        },
                        children: [
                            filtered.length,
                            " طالب"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            filtered.length > 0 && semF && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--card)',
                    border: '2px solid var(--brd)',
                    borderRadius: 'var(--r)',
                    padding: '20px 24px',
                    marginBottom: 16,
                    boxShadow: 'var(--sh)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 0,
                        direction: 'rtl',
                        alignItems: 'stretch'
                    },
                    children: gradeGroups.map((g, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                padding: '0 20px',
                                borderLeft: idx < gradeGroups.length - 1 ? '1px solid var(--brd)' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontWeight: 700,
                                        fontSize: 14,
                                        color: 'var(--txt)',
                                        textAlign: 'right'
                                    },
                                    children: g.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--brd)',
                                        borderRadius: 4,
                                        height: 8,
                                        overflow: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '100%',
                                            borderRadius: 4,
                                            background: g.count > 0 ? g.color : 'transparent',
                                            width: g.count > 0 ? `${Math.round(g.count / maxCount * 100)}%` : '0%',
                                            transition: 'width 0.4s ease'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: 'var(--txt3)',
                                        textAlign: 'right'
                                    },
                                    children: [
                                        g.count,
                                        " طالب"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, g.key, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 10,
                    color: 'var(--g)'
                },
                children: "قائمة الطلبة"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            filtered.map((s)=>{
                const grade = getGrade(s.id);
                const gradeCol = grade === 'ممتاز' || grade === 'جيد جداً' ? '#2d8a48' : grade === 'جيد' || grade === 'متوسط' ? '#b8872a' : '#dc2626';
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'var(--card)',
                        border: '2px solid var(--brd)',
                        borderRadius: 'var(--r)',
                        padding: 14,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 14,
                        boxShadow: 'var(--sh)',
                        marginBottom: 10,
                        direction: 'rtl'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                textAlign: 'right'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontWeight: 700,
                                        fontSize: 14,
                                        marginBottom: 3
                                    },
                                    children: s.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--txt3)',
                                        fontSize: 11,
                                        marginBottom: 3
                                    },
                                    children: [
                                        "المؤطر: ",
                                        s.teacherName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this),
                                semF && evalData[`${s.id}_${semF}`]?.surah && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: 'var(--g)'
                                    },
                                    children: [
                                        "📖 ",
                                        evalData[`${s.id}_${semF}`].surah
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                semF && evalData[`${s.id}_${semF}`]?.attendance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: 'var(--txt3)'
                                    },
                                    children: [
                                        "📊 الحضور: ",
                                        evalData[`${s.id}_${semF}`].attendance,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 6,
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Ring, {
                                    pct: semF && grade ? grade === 'ممتاز' ? 90 : grade === 'جيد جداً' ? 80 : grade === 'جيد' ? 70 : grade === 'متوسط' ? 50 : 30 : 0
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                "                ",
                                semF && grade ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: `${gradeCol}18`,
                                        color: gradeCol,
                                        border: `1px solid ${gradeCol}40`,
                                        borderRadius: 12,
                                        padding: '2px 10px',
                                        fontWeight: 700,
                                        fontSize: 11
                                    },
                                    children: grade
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 17
                                }, this) : semF ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--txt3)',
                                        fontSize: 10
                                    },
                                    children: "لم يُقيَّم"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 26
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    ]
                }, s.id, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this);
            }),
            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    color: 'var(--txt3)',
                    padding: 40
                },
                children: "لا يوجد طلبة"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 200,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
function MosquesTab() {
    const ready = useDataReady();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [list, setList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dtab, setDtab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [addM, setAddM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editM, setEditM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        imam: ''
    });
    const [allTeachers, setAllTeachers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allStudents, setAllStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast, show } = useToast();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready) return;
        setList(initialMosques);
        const load = ()=>{
            const dynT = gst('dynamicTeachers', []);
            const dynS = gst('dynamicStudents', []);
            setAllTeachers([
                ...initialTeachers,
                ...dynT
            ]);
            setAllStudents([
                ...initialStudents,
                ...dynS
            ]);
        };
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, [
        ready
    ]);
    if (!ready) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            padding: 60,
            color: 'var(--txt3)'
        },
        children: "⏳ جاري تحميل البيانات..."
    }, void 0, false, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 229,
        columnNumber: 22
    }, this);
    const filtered = list.filter((m)=>m.name.includes(search) || m.imam?.includes(search));
    if (detail) {
        const mT = allTeachers.filter((t)=>t.mosqueId === detail.id);
        const mS = allStudents.filter((s)=>s.mosqueId === detail.id);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main pgin",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "back",
                    onClick: ()=>{
                        setDetail(null);
                        setDtab('overview');
                    },
                    children: "← العودة للقائمة"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'var(--card)',
                        border: '2px solid var(--brd)',
                        borderRadius: 'var(--r)',
                        padding: 18,
                        textAlign: 'center',
                        marginBottom: 16,
                        boxShadow: 'var(--sh)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 20,
                                fontWeight: 700
                            },
                            children: detail.name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: 'var(--txt3)',
                                fontSize: 13,
                                marginTop: 3
                            },
                            children: detail.municipality
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pills",
                    children: [
                        'overview',
                        'teachers',
                        'students'
                    ].map((k)=>{
                        const labels = {
                            overview: 'نظرة عامة',
                            teachers: 'المؤطرون',
                            students: 'الطلبة'
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `pill ${dtab === k ? 'on' : ''}`,
                            onClick: ()=>setDtab(k),
                            children: labels[k]
                        }, k, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 244,
                            columnNumber: 20
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                dtab === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "icard",
                    children: [
                        [
                            [
                                'اسم الإمام',
                                detail.imam || '—'
                            ],
                            [
                                'البلدية',
                                detail.municipality || 'الأغواط'
                            ],
                            [
                                'عدد المؤطرين',
                                mT.length
                            ],
                            [
                                'عدد الطلبة',
                                mS.length
                            ]
                        ].map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "irow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ilbl",
                                        children: l
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ival",
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 78
                                    }, this)
                                ]
                            }, l, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mapph",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/map.png",
                                    alt: "خريطة",
                                    className: "ico"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 36
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "عرض موقع المسجد على الخريطة"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 85
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, this),
                dtab === 'teachers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "g2",
                    children: [
                        mT.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                gridColumn: '1/-1',
                                textAlign: 'center',
                                color: 'var(--txt3)',
                                padding: 40
                            },
                            children: "لا يوجد مؤطرون"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 257,
                            columnNumber: 33
                        }, this),
                        mT.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--card)',
                                    border: '2px solid var(--brd)',
                                    borderRadius: 'var(--r)',
                                    padding: 16,
                                    boxShadow: 'var(--sh)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 14,
                                            marginBottom: 3
                                        },
                                        children: t.name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--txt3)',
                                            fontSize: 12,
                                            marginBottom: 10
                                        },
                                        children: t.rank
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mcard-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcard-row-v",
                                                children: allStudents.filter((s)=>s.teacherId === t.id).length
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcard-row-l",
                                                children: "عدد الطلبة"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 135
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, t.id, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this),
                dtab === 'students' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsDetailTab, {
                    mS: mS,
                    mT: mT,
                    allStudents: allStudents
                }, void 0, false, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 267,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 235,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main pgin",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bism",
                children: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats",
                children: [
                    {
                        l: 'اجمالي المساجد',
                        v: list.length,
                        img: '/mosque.png'
                    },
                    {
                        l: 'المؤطرون',
                        v: allTeachers.length,
                        img: '/teacher.png'
                    },
                    {
                        l: 'الطلبة',
                        v: allStudents.length,
                        img: '/student.png'
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: s.img,
                                alt: s.l,
                                className: "ico",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-lbl",
                                        children: s.l
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-val",
                                        children: s.v
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 77
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.l, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fgap",
                style: {
                    marginBottom: 14
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-solid",
                    onClick: ()=>setAddM(true),
                    children: "+ إضافة مسجد جديد"
                }, void 0, false, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sw",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "sinp",
                        placeholder: "البحث عن مسجد",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "sico",
                        src: "/Searchh.png",
                        alt: "بحث"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mcards",
                children: filtered.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mcard",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mcard-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/mosque.png",
                                        alt: "مسجد",
                                        className: "ico"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mcard-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mcard-nm",
                                                children: m.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mcard-sb",
                                                children: m.municipality
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 83
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mcard-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcard-row-v",
                                        children: allTeachers.filter((t)=>t.mosqueId === m.id).length
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcard-row-l",
                                        children: "عدد المؤطرين"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 130
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mcard-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcard-row-v",
                                        children: allStudents.filter((s)=>s.mosqueId === m.id).length
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mcard-row-l",
                                        children: "عدد الطلبة"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 130
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 7,
                                    marginTop: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn",
                                        style: {
                                            flex: 1
                                        },
                                        onClick: ()=>setDetail(m),
                                        children: "عرض التفاصيل"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-gold",
                                        onClick: ()=>setEditM({
                                                ...m
                                            }),
                                        children: "تعديل"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.id, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            addM && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "إضافة مسجد جديد",
                onClose: ()=>setAddM(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                        label: "اسم المسجد *",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "sinp",
                            style: {
                                paddingLeft: 16
                            },
                            value: form.name,
                            onChange: (e)=>setForm((p)=>({
                                        ...p,
                                        name: e.target.value
                                    })),
                            placeholder: "اسم المسجد"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 307,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                        label: "اسم الإمام",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "sinp",
                            style: {
                                paddingLeft: 16
                            },
                            value: form.imam,
                            onChange: (e)=>setForm((p)=>({
                                        ...p,
                                        imam: e.target.value
                                    })),
                            placeholder: "اسم الإمام"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 308,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 9,
                            justifyContent: 'flex-end',
                            marginTop: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-gold",
                                onClick: ()=>setAddM(false),
                                children: "إلغاء"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-solid",
                                onClick: ()=>{
                                    if (!form.name) return;
                                    setList((p)=>[
                                            ...p,
                                            {
                                                ...form,
                                                id: Date.now(),
                                                municipality: 'الأغواط',
                                                teachersCount: 0,
                                                studentsCount: 0,
                                                progress: 0
                                            }
                                        ]);
                                    setAddM(false);
                                    setForm({
                                        name: '',
                                        imam: ''
                                    });
                                    show('✅ تمت إضافة المسجد');
                                },
                                children: "حفظ"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, this),
            editM && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "تعديل المسجد",
                onClose: ()=>setEditM(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                        label: "اسم المسجد",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "sinp",
                            style: {
                                paddingLeft: 16
                            },
                            value: editM.name,
                            onChange: (e)=>setEditM((p)=>p ? {
                                        ...p,
                                        name: e.target.value
                                    } : p)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 317,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                        label: "اسم الإمام",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "sinp",
                            style: {
                                paddingLeft: 16
                            },
                            value: editM.imam || '',
                            onChange: (e)=>setEditM((p)=>p ? {
                                        ...p,
                                        imam: e.target.value
                                    } : p)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 318,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 9,
                            justifyContent: 'flex-end',
                            marginTop: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-gold",
                                onClick: ()=>setEditM(null),
                                children: "إلغاء"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-solid",
                                onClick: ()=>{
                                    if (!editM) return;
                                    setList((p)=>p.map((m)=>m.id === editM.id ? editM : m));
                                    setEditM(null);
                                    show('✅ تم التعديل');
                                },
                                children: "حفظ التعديلات"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                children: toast
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 325,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
function TeachersTab() {
    const ready = useDataReady();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mF, setMF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rF, setRF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [list, setList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [addM, setAddM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editT, setEditT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newAccount, setNewAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        rank: '',
        role: 'موظف',
        dob: '',
        education: '',
        phone: '',
        mosqueId: '',
        generation: '',
        username: '',
        password: ''
    });
    const { toast, show } = useToast();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready) return;
        const load = ()=>{
            const dyn = gst('dynamicTeachers', []);
            setList([
                ...initialTeachers,
                ...dyn
            ]);
        };
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, [
        ready
    ]);
    const mList = [
        ...new Set(list.map((t)=>t.mosqueName).filter(Boolean))
    ].sort();
    const rList = [
        ...new Set(list.map((t)=>t.rank).filter(Boolean))
    ].sort();
    const filtered = list.filter((t)=>(!search || t.name.includes(search) || t.rank.includes(search)) && (!mF || t.mosqueName === mF) && (!rF || t.rank === rF));
    const EDUCATION_LEVELS = [
        'ابتدائي',
        'متوسط',
        'ثانوي',
        'جامعي',
        'ليسانس',
        'ماستر',
        'دكتوراه'
    ];
    const AR = {
        'ا': 'a',
        'أ': 'a',
        'إ': 'a',
        'آ': 'a',
        'ب': 'b',
        'ت': 't',
        'ث': 'th',
        'ج': 'j',
        'ح': 'h',
        'خ': 'kh',
        'د': 'd',
        'ذ': 'dh',
        'ر': 'r',
        'ز': 'z',
        'س': 's',
        'ش': 'sh',
        'ص': 's',
        'ض': 'd',
        'ط': 't',
        'ظ': 'z',
        'ع': 'a',
        'غ': 'gh',
        'ف': 'f',
        'ق': 'q',
        'ك': 'k',
        'ل': 'l',
        'م': 'm',
        'ن': 'n',
        'ه': 'h',
        'و': 'w',
        'ي': 'y',
        'ى': 'a',
        'ة': 'a',
        'ء': '',
        'ئ': 'y',
        'ؤ': 'w'
    };
    const toEn = (s)=>s.split('').map((c)=>AR[c] ?? '').join('').replace(/[^a-z0-9]/g, '');
    const genUsername = (fullName)=>{
        const parts = fullName.trim().split(/\s+/);
        if (!parts.length) return 'user';
        const firstChar = toEn(parts[0][0]) || 'x';
        const family = toEn(parts[parts.length - 1]) || 'tc';
        return `${firstChar}.${family}`;
    };
    const saveNewTeacher = async ()=>{
        if (!form.name) {
            show('⚠️ الاسم مطلوب');
            return;
        }
        const dynT = gst('dynamicTeachers', []);
        const allIds = [
            ...initialTeachers.map((t)=>t.id),
            ...dynT.map((t)=>t.id)
        ];
        const newId = Math.max(...allIds, 170) + 1;
        let username = genUsername(form.name);
        const dynU = gst('dynamicUsers', []);
        let suffix = 0, candidate = username;
        while(dynU.some((u)=>u.username === candidate)){
            suffix++;
            candidate = username + suffix;
        }
        username = candidate;
        const password = 'pass123';
        const mq = initialMosques.find((m)=>m.id === parseInt(form.mosqueId));
        const newT = {
            id: newId,
            name: form.name,
            rank: form.rank,
            role: form.role,
            dob: form.dob,
            education: form.education,
            generation: form.generation,
            phone: form.phone,
            municipality: 'الأغواط',
            mosqueId: parseInt(form.mosqueId) || 1,
            mosqueName: mq?.name || ''
        };
        // حفظ في Supabase
        await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('app_users').insert({
            id: newId + 1000,
            username,
            password,
            role: 'teacher',
            name: form.name,
            teacher_id: newId,
            student_ids: null
        });
        // حفظ في localStorage
        sst('dynamicTeachers', [
            ...dynT,
            newT
        ]);
        dynU.push({
            id: newId + 1000,
            username,
            password,
            role: 'teacher',
            name: form.name,
            teacherId: newId
        });
        sst('dynamicUsers', dynU);
        setNewAccount({
            username,
            password,
            name: form.name
        });
        setAddM(false);
        setForm({
            name: '',
            rank: '',
            role: 'موظف',
            dob: '',
            education: '',
            phone: '',
            mosqueId: '',
            generation: '',
            username: '',
            password: ''
        });
        const an = gst('adminNotifs', []);
        an.unshift({
            id: Date.now(),
            msg: `👤 تم إضافة مؤطر: ${form.name} — المستخدم: ${username}`,
            time: new Date().toLocaleString('ar'),
            read: false
        });
        sst('adminNotifs', an);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main pgin",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stitle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/teacher.png",
                                alt: "",
                                className: "ico",
                                style: {
                                    width: 40,
                                    height: 40
                                },
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            "المؤطرون ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    color: 'var(--txt3)',
                                    fontWeight: 400
                                },
                                children: [
                                    "(",
                                    filtered.length,
                                    "/",
                                    list.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 396,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-solid",
                        onClick: ()=>setAddM(true),
                        children: "+ إضافة مؤطر"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fgap",
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sw",
                        style: {
                            flex: 2,
                            minWidth: 200,
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "sinp",
                                placeholder: "البحث عن مؤطر",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "sico",
                                src: "/Searchh.png",
                                alt: "بحث"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "sel",
                        value: mF,
                        onChange: (e)=>setMF(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "المسجد"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 406,
                                columnNumber: 3
                            }, this),
                            initialMosques.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: m.name,
                                    children: m.name
                                }, m.id, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 28
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 405,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "sel",
                        value: rF,
                        onChange: (e)=>setRF(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "الرتبة"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 409,
                                columnNumber: 81
                            }, this),
                            rList.slice(0, 20).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: r
                                }, r, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 141
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 409,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tw",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "tbl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "#"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "الاسم واللقب"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "الرتبة"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 53
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "hm",
                                            children: "الصفة"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 68
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "hm",
                                            children: "الهاتف"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 97
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "hm",
                                            children: "المستوى"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 127
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "المسجد"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 158
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "الاجراءات"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 173
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: filtered.slice(0, 200).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    color: 'var(--txt3)'
                                                },
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontWeight: 600
                                                },
                                                children: t.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontSize: 11
                                                },
                                                children: t.rank
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "hm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `bdg ${t.role === 'موظف' ? 'bdg-g' : 'bdg-gld'}`,
                                                    children: t.role
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 36
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "hm",
                                                style: {
                                                    direction: 'ltr',
                                                    fontSize: 12
                                                },
                                                children: t.phone || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "hm",
                                                style: {
                                                    fontSize: 12
                                                },
                                                children: t.education || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontSize: 12
                                                },
                                                children: t.mosqueName
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 5,
                                                    padding: '8px 14px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-sm",
                                                        onClick: ()=>setEditT({
                                                                ...t
                                                            }),
                                                        children: "تعديل"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-sm",
                                                        style: {
                                                            borderColor: '#dc2626',
                                                            color: '#dc2626'
                                                        },
                                                        onClick: ()=>{
                                                            if (!confirm(`حذف ${t.name}؟`)) return;
                                                            const dynT = gst('dynamicTeachers', []);
                                                            sst('dynamicTeachers', dynT.filter((x)=>x.id !== t.id));
                                                            setList((p)=>p.filter((x)=>x.id !== t.id));
                                                        },
                                                        children: "حذف"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            padding: 40,
                            color: 'var(--txt3)'
                        },
                        children: "لا توجد نتائج"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 432,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            addM && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "إضافة مؤطر جديد",
                onClose: ()=>setAddM(false),
                wide: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "الاسم واللقب *",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: form.name,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                name: e.target.value
                                            })),
                                    placeholder: "الاسم الكامل"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 39
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "الرتبة",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: form.rank,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                rank: e.target.value
                                            })),
                                    placeholder: "مثال: إمام أستاذ"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "الصفة",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "sel",
                                    style: {
                                        width: '100%'
                                    },
                                    value: form.role,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                role: e.target.value
                                            })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "موظف"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 154
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "متطوع"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 175
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "تاريخ الميلاد",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    type: "date",
                                    value: form.dob,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                dob: e.target.value
                                            }))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "المستوى الدراسي",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "sel",
                                    style: {
                                        width: '100%'
                                    },
                                    value: form.education,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                education: e.target.value
                                            })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "اختر"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 443,
                                            columnNumber: 174
                                        }, this),
                                        EDUCATION_LEVELS.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: v
                                            }, v, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 231
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "رقم الهاتف",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: form.phone,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                phone: e.target.value
                                            })),
                                    placeholder: "06 XX XX XX XX"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 35
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "البنوة",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: form.generation,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                generation: e.target.value
                                            })),
                                    placeholder: "مثال: 1 أو 2"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "المسجد",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "sel",
                                    style: {
                                        width: '100%'
                                    },
                                    value: form.mosqueId,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                mosqueId: e.target.value
                                            })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "اختر المسجد"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this),
                                        initialMosques.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m.id,
                                                children: m.name
                                            }, m.id, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 42
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 9,
                            justifyContent: 'flex-end',
                            marginTop: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-gold",
                                onClick: ()=>setAddM(false),
                                children: "إلغاء"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-solid",
                                onClick: saveNewTeacher,
                                children: "✅ حفظ وإنشاء الحساب"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 437,
                columnNumber: 9
            }, this),
            newAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "✅ تم إنشاء حساب المؤطر",
                onClose: ()=>setNewAccount(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontWeight: 700,
                                fontSize: 16,
                                marginBottom: 4
                            },
                            children: newAccount.name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 468,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#f0fdf4',
                                border: '2px solid #86efac',
                                borderRadius: 10,
                                padding: '16px 20px',
                                margin: '16px 0',
                                textAlign: 'right'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 10,
                                        fontSize: 13
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--txt3)'
                                            },
                                            children: "اسم المستخدم: "
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 58
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                fontFamily: 'monospace',
                                                fontSize: 16,
                                                color: '#2d8a48'
                                            },
                                            children: newAccount.username
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 115
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--txt3)'
                                            },
                                            children: "كلمة المرور: "
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 42
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                fontFamily: 'monospace',
                                                fontSize: 16,
                                                color: '#2d8a48'
                                            },
                                            children: newAccount.password
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 98
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-solid",
                            style: {
                                width: '100%'
                            },
                            onClick: ()=>{
                                setNewAccount(null);
                                show('✅ تمت إضافة المؤطر بنجاح');
                            },
                            children: "حسناً، تم الحفظ"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 467,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 466,
                columnNumber: 9
            }, this),
            editT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: `تعديل: ${editT.name}`,
                onClose: ()=>setEditT(null),
                wide: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "الاسم واللقب",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: editT.name,
                                    onChange: (e)=>setEditT((p)=>p ? {
                                                ...p,
                                                name: e.target.value
                                            } : p)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "الرتبة",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: editT.rank,
                                    onChange: (e)=>setEditT((p)=>p ? {
                                                ...p,
                                                rank: e.target.value
                                            } : p)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "الصفة",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "sel",
                                    style: {
                                        width: '100%'
                                    },
                                    value: editT.role,
                                    onChange: (e)=>setEditT((p)=>p ? {
                                                ...p,
                                                role: e.target.value
                                            } : p),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "موظف"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 158
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "متطوع"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 179
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "تاريخ الميلاد",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    type: "date",
                                    value: editT.dob || '',
                                    onChange: (e)=>setEditT((p)=>p ? {
                                                ...p,
                                                dob: e.target.value
                                            } : p)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "المستوى الدراسي",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "sel",
                                    style: {
                                        width: '100%'
                                    },
                                    value: editT.education || '',
                                    onChange: (e)=>setEditT((p)=>p ? {
                                                ...p,
                                                education: e.target.value
                                            } : p),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "اختر"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 182
                                        }, this),
                                        [
                                            'ابتدائي',
                                            'متوسط',
                                            'ثانوي',
                                            'جامعي',
                                            'ليسانس',
                                            'ماستر',
                                            'دكتوراه'
                                        ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: v
                                            }, v, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 285
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "رقم الهاتف",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: editT.phone || '',
                                    onChange: (e)=>setEditT((p)=>p ? {
                                                ...p,
                                                phone: e.target.value
                                            } : p)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 35
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 487,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "البنوة",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "sinp",
                                    style: {
                                        paddingLeft: 16
                                    },
                                    value: editT.generation || '',
                                    onChange: (e)=>setEditT((p)=>p ? {
                                                ...p,
                                                generation: e.target.value
                                            } : p),
                                    placeholder: "مثال: 1 أو 2"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                                label: "المسجد",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "sel",
                                    style: {
                                        width: '100%'
                                    },
                                    value: String(editT.mosqueId),
                                    onChange: (e)=>{
                                        const mq = initialMosques.find((m)=>m.id === parseInt(e.target.value));
                                        setEditT((p)=>p ? {
                                                ...p,
                                                mosqueId: parseInt(e.target.value),
                                                mosqueName: mq?.name || ''
                                            } : p);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "اختر المسجد"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this),
                                        initialMosques.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m.id,
                                                children: m.name
                                            }, m.id, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 42
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 9,
                            justifyContent: 'flex-end',
                            marginTop: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-gold",
                                onClick: ()=>setEditT(null),
                                children: "إلغاء"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-solid",
                                onClick: ()=>{
                                    if (!editT) return;
                                    const dynT = gst('dynamicTeachers', []);
                                    const isInDyn = dynT.some((t)=>t.id === editT.id);
                                    if (isInDyn) sst('dynamicTeachers', dynT.map((t)=>t.id === editT.id ? editT : t));
                                    setList((p)=>p.map((t)=>t.id === editT.id ? {
                                                ...editT
                                            } : t));
                                    setEditT(null);
                                    show('✅ تم تعديل بيانات المؤطر');
                                },
                                children: "حفظ التعديلات"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 480,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                children: toast
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 507,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 392,
        columnNumber: 5
    }, this);
}
function StudentsTab() {
    const ready = useDataReady();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mF, setMF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [tF, setTF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [gF, setGF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [allStudents, setAllStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allTeachers, setAllTeachers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready) return;
        const load = ()=>{
            const dynS = gst('dynamicStudents', []);
            const dynT = gst('dynamicTeachers', []);
            setAllStudents([
                ...initialStudents,
                ...dynS
            ]);
            setAllTeachers([
                ...initialTeachers,
                ...dynT
            ]);
        };
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, [
        ready
    ]);
    if (!ready) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            padding: 60,
            color: 'var(--txt3)'
        },
        children: "⏳ جاري تحميل البيانات..."
    }, void 0, false, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 526,
        columnNumber: 22
    }, this);
    const filtered = allStudents.filter((s)=>(!search || s.name.includes(search) || s.fatherName.includes(search)) && (!mF || s.mosqueName === mF) && (!tF || s.teacherName === tF) && (!gF || s.gender === gF));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main pgin",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/student.png",
                        alt: "",
                        className: "ico",
                        style: {
                            width: 40,
                            height: 40
                        },
                        onError: (e)=>{
                            e.target.style.display = 'none';
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    "الطلبة ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 13,
                            color: 'var(--txt3)',
                            fontWeight: 400
                        },
                        children: [
                            "(",
                            filtered.length,
                            "/",
                            allStudents.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 532,
                        columnNumber: 16
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sw",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "sinp",
                        placeholder: "البحث عن طالب",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 534,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "sico",
                        src: "/Searchh.png",
                        alt: "بحث"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 534,
                        columnNumber: 137
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fgap",
                style: {
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "sel",
                        value: mF,
                        onChange: (e)=>setMF(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "المسجد"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 537,
                                columnNumber: 3
                            }, this),
                            initialMosques.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: m.name,
                                    children: m.name
                                }, m.id, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 538,
                                    columnNumber: 28
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "sel",
                        value: tF,
                        onChange: (e)=>setTF(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "المؤطر"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 541,
                                columnNumber: 3
                            }, this),
                            allTeachers.filter((t)=>!mF || t.mosqueName === mF).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: t.name,
                                    children: t.name
                                }, t.id, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 542,
                                    columnNumber: 65
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 540,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tw",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "tbl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "#"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "الاسم واللقب"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "تاريخ الميلاد"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 53
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "الجنس"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 75
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "اسم الأب"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 89
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "المؤطر"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 106
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "المسجد"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 121
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 547,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: filtered.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    color: 'var(--txt3)'
                                                },
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontWeight: 600
                                                },
                                                children: s.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: s.dob
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `bdg ${s.gender === 'ذكر' ? 'bdg-g' : 'bdg-gld'}`,
                                                    children: s.gender
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: s.fatherName
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: s.teacherName
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: s.mosqueName
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            padding: 40,
                            color: 'var(--txt3)'
                        },
                        children: "لا توجد نتائج"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 562,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
function SchedulesTab() {
    const [scheduleData, setScheduleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sem, setSem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const { toast } = useToast();
    const SEMESTERS = [
        {
            id: 1,
            label: 'الفصل الأول',
            range: 'جانفي – أفريل'
        },
        {
            id: 2,
            label: 'الفصل الثاني',
            range: 'ماي – أوت'
        },
        {
            id: 3,
            label: 'الفصل الثالث',
            range: 'سبتمبر – ديسمبر'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const load = ()=>{
            const sent = {};
            [
                1,
                2,
                3
            ].forEach((sem)=>{
                initialTeachers.concat(gst('dynamicTeachers', [])).forEach((t)=>{
                    const key = `sentSchedules_t${t.id}_s${sem}`;
                    const data = gst(key, null);
                    if (data) sent[t.id] = data;
                });
            });
            const fromSent = Object.entries(sent).filter(([, v])=>v.sent).flatMap(([tid, data])=>{
                const allT = [
                    ...initialTeachers,
                    ...gst('dynamicTeachers', [])
                ];
                const tch = allT.find((t)=>t.id === parseInt(tid));
                const scheduleSem = data.sem ?? 1;
                return data.rows.map((r, i)=>({
                        id: parseInt(tid) * 1000 + i,
                        teacherId: parseInt(tid),
                        teacherName: tch?.name || '',
                        mosqueId: tch?.mosqueId || 0,
                        mosqueName: tch?.mosqueName || '',
                        sem: scheduleSem,
                        ...r
                    }));
            });
            const sentTids = fromSent.map((s)=>s.teacherId);
            setScheduleData(fromSent);
        };
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, []);
    const trimmed = search.trim();
    const matchedMosque = trimmed ? initialMosques.find((m)=>m.name.includes(trimmed)) : null;
    const filtered = matchedMosque ? scheduleData.filter((s)=>(s.mosqueId === matchedMosque.id || s.mosqueName === matchedMosque.name) && s.sem === sem) : [];
    const maxRows = Math.max(4, ...DAYS.map((d)=>filtered.filter((s)=>s.day === d).length));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main pgin",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stitle",
                        children: "📅 الجداول الزمنية"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-gold",
                        onClick: ()=>window.print(),
                        children: "🖨️ طباعة الجدول"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 6,
                    marginBottom: 16,
                    flexWrap: 'wrap'
                },
                children: SEMESTERS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSem(s.id),
                        style: {
                            padding: '7px 16px',
                            borderRadius: 20,
                            border: '1.5px solid',
                            fontSize: 12,
                            cursor: 'pointer',
                            fontFamily: 'Cairo,sans-serif',
                            transition: 'all 0.2s',
                            background: sem === s.id ? 'var(--g)' : 'var(--card)',
                            color: sem === s.id ? '#fff' : 'var(--txt2)',
                            borderColor: sem === s.id ? 'var(--g)' : 'var(--brd)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 700
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 612,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 10,
                                    opacity: 0.8
                                },
                                children: s.range
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 613,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.id, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 609,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sw",
                style: {
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "sinp",
                        placeholder: "ابحث باسم المسجد...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 618,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "sico",
                        src: "/Searchh.png",
                        alt: "بحث",
                        onError: (e)=>{
                            e.target.style.display = 'none';
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 617,
                columnNumber: 7
            }, this),
            matchedMosque && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--gp)',
                    border: '1.5px solid var(--gs)',
                    borderRadius: 'var(--r)',
                    padding: '11px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 14,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 623,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: 700,
                            fontSize: 15,
                            color: 'var(--g)'
                        },
                        children: matchedMosque.name
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 624,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 12,
                            color: 'var(--txt3)',
                            marginRight: 'auto'
                        },
                        children: [
                            filtered.length,
                            " حصة مسجلة"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 622,
                columnNumber: 9
            }, this),
            trimmed && !matchedMosque && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#fef2f2',
                    border: '1px solid #fca5a5',
                    borderRadius: 'var(--r)',
                    padding: '10px 16px',
                    marginBottom: 14,
                    fontSize: 13,
                    color: '#dc2626',
                    textAlign: 'center'
                },
                children: "لا يوجد مسجد بهذا الاسم"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 629,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: 'auto',
                    borderRadius: 'var(--r)',
                    border: '2px solid var(--brd)',
                    boxShadow: 'var(--sh)',
                    background: 'var(--card)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse',
                        minWidth: 560,
                        direction: 'rtl'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: DAYS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            background: 'var(--g)',
                                            color: '#fff',
                                            fontFamily: 'Cairo,sans-serif',
                                            fontWeight: 700,
                                            fontSize: 13,
                                            padding: '13px 8px',
                                            textAlign: 'center',
                                            borderLeft: '1px solid rgba(255,255,255,0.15)'
                                        },
                                        children: day
                                    }, day, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 634,
                                        columnNumber: 32
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 634,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 633,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: Array.from({
                                length: maxRows
                            }).map((_, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: DAYS.map((day)=>{
                                        const cell = filtered.filter((s)=>s.day === day)[rowIdx];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                border: '1px solid var(--brd)',
                                                padding: '8px 6px',
                                                verticalAlign: 'middle',
                                                textAlign: 'center',
                                                minWidth: 95,
                                                height: 72,
                                                background: rowIdx % 2 === 0 ? 'var(--card)' : 'rgba(234,245,238,0.3)'
                                            },
                                            children: cell && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--gp)',
                                                    border: '1px solid var(--gs)',
                                                    borderRadius: 8,
                                                    padding: '7px 6px',
                                                    lineHeight: 1.6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            color: 'var(--txt)',
                                                            fontSize: 12,
                                                            marginBottom: 2
                                                        },
                                                        children: cell.teacherName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: 'var(--gold)',
                                                            fontWeight: 700,
                                                            fontSize: 11,
                                                            direction: 'ltr'
                                                        },
                                                        children: [
                                                            cell.startTime,
                                                            "-",
                                                            cell.endTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 25
                                            }, this)
                                        }, day, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, rowIdx, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                    lineNumber: 638,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 636,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, this),
            !trimmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    color: 'var(--txt3)',
                    marginTop: 14,
                    fontSize: 12
                },
                children: "ابحث عن مسجد لعرض جدوله الأسبوعي"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 657,
                columnNumber: 20
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                children: toast
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 658,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 604,
        columnNumber: 5
    }, this);
}
function ReportsTab() {
    const [yearF, setYearF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mosqueS, setMosqueS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const load = ()=>setRecords(gst('khatmRecords', []));
        load();
        window.addEventListener('storage', load);
        return ()=>window.removeEventListener('storage', load);
    }, []);
    const filteredByYear = yearF.trim() ? records.filter((r)=>r.year === yearF.trim()) : records;
    const mosqueCount = {};
    filteredByYear.forEach((r)=>{
        mosqueCount[r.mosqueName] = (mosqueCount[r.mosqueName] || 0) + 1;
    });
    const bME = Object.entries(mosqueCount).sort((a, b)=>b[1] - a[1])[0];
    const bestMosque = bME ? {
        name: bME[0],
        count: bME[1]
    } : null;
    const teacherCount = {};
    filteredByYear.forEach((r)=>{
        teacherCount[r.teacherName] = (teacherCount[r.teacherName] || 0) + 1;
    });
    const bTE = Object.entries(teacherCount).sort((a, b)=>b[1] - a[1])[0];
    const bestTeacher = bTE ? {
        name: bTE[0],
        count: bTE[1]
    } : null;
    const filtered = filteredByYear.filter((r)=>(!mosqueS.trim() || r.mosqueName.includes(mosqueS.trim())) && (!search.trim() || r.studentName.includes(search) || r.teacherName.includes(search)));
    const byYear = {};
    filtered.forEach((r)=>{
        if (!byYear[r.year]) byYear[r.year] = [];
        byYear[r.year].push(r);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main pgin",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stitle",
                children: "🏆 تقارير خاتمي القرآن"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats",
                style: {
                    marginBottom: 30
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        style: {
                            padding: '10px 14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/student.png",
                                alt: "",
                                className: "ico",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 701,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-lbl",
                                        children: yearF.trim() ? `إجمالي خاتمي ${yearF.trim()}` : 'إجمالي الخاتمين'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 703,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-val",
                                        children: filteredByYear.length
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 702,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 700,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        style: {
                            padding: '10px 14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/mosque.png",
                                alt: "",
                                className: "ico",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 708,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-lbl",
                                        children: "أفضل مسجد"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-val",
                                        style: {
                                            fontSize: bestMosque?.name && bestMosque.name.length > 10 ? 15 : 24
                                        },
                                        children: bestMosque?.name || 'لا يوجد'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 709,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        style: {
                            padding: '10px 14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/teacher.png",
                                alt: "",
                                className: "ico",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 715,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-lbl",
                                        children: "أفضل مؤطر"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 717,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-val",
                                        style: {
                                            fontSize: bestTeacher?.name && bestTeacher.name.length > 10 ? 15 : 24
                                        },
                                        children: bestTeacher?.name || 'لا يوجد'
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 716,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 714,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 699,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fgap",
                style: {
                    marginBottom: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "sinp",
                        style: {
                            width: 130
                        },
                        placeholder: "اكتب السنة",
                        value: yearF,
                        onChange: (e)=>setYearF(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sw",
                        style: {
                            flex: 1,
                            minWidth: 160,
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "sinp",
                                placeholder: "بحث باسم المسجد",
                                value: mosqueS,
                                onChange: (e)=>setMosqueS(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 725,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "sico",
                                src: "/Searchh.png",
                                alt: "بحث",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 726,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sw",
                        style: {
                            flex: 2,
                            minWidth: 180,
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "sinp",
                                placeholder: "بحث باسم الطالب أو المؤطر",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 729,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "sico",
                                src: "/Searchh.png",
                                alt: "بحث",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 730,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this),
            Object.keys(byYear).sort((a, b)=>b.localeCompare(a)).map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                margin: '16px 0 8px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: 15
                                },
                                children: [
                                    "سنة ",
                                    year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 736,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this),
                        byYear[year].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--card)',
                                    border: '2px solid var(--brd)',
                                    borderRadius: 'var(--r)',
                                    padding: 14,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14,
                                    boxShadow: 'var(--sh)',
                                    marginBottom: 8,
                                    direction: 'rtl'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 44,
                                            height: 44,
                                            borderRadius: '50%',
                                            background: '#fef9c3',
                                            border: '1.5px solid #fbbf24',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 20,
                                            flexShrink: 0
                                        },
                                        children: "🏆"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 14,
                                                    marginBottom: 3
                                                },
                                                children: r.studentName
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: 'var(--txt3)',
                                                    marginBottom: 3
                                                },
                                                children: [
                                                    "المؤطر: ",
                                                    r.teacherName,
                                                    " — ",
                                                    r.mosqueName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 743,
                                                columnNumber: 17
                                            }, this),
                                            r.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: 'var(--g)'
                                                },
                                                children: r.notes
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 744,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 741,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            gap: 5,
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bdg bdg-g",
                                                children: r.khatmType
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 747,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: '#f0fdf4',
                                                    border: '1px solid #86efac',
                                                    borderRadius: 8,
                                                    padding: '2px 10px',
                                                    fontSize: 11,
                                                    color: '#166534',
                                                    fontWeight: 700
                                                },
                                                children: r.date
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, r.id, true, {
                                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                                lineNumber: 739,
                                columnNumber: 13
                            }, this))
                    ]
                }, year, true, {
                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                    lineNumber: 734,
                    columnNumber: 9
                }, this)),
            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    color: 'var(--txt3)',
                    padding: 40
                },
                children: records.length === 0 ? 'لا يوجد خاتمون بعد' : 'لا توجد نتائج'
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
                lineNumber: 755,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 697,
        columnNumber: 5
    }, this);
}
function AdminPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ms');
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const u = localStorage.getItem('user');
        if (!u) {
            router.replace('/');
            return;
        }
        const p = JSON.parse(u);
        if (p.role !== 'admin') {
            router.replace('/');
            return;
        }
        setUser(p);
        const t = localStorage.getItem('theme');
        if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    }, []);
    if (!user) return null;
    const tabMap = {
        ms: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MosquesTab, {}, void 0, false, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 781,
            columnNumber: 9
        }, this),
        tc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeachersTab, {}, void 0, false, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 782,
            columnNumber: 9
        }, this),
        st: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsTab, {}, void 0, false, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 783,
            columnNumber: 9
        }, this),
        sc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SchedulesTab, {}, void 0, false, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 784,
            columnNumber: 9
        }, this),
        rp: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportsTab, {}, void 0, false, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 785,
            columnNumber: 9
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$components$2f$Layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        tab: tab,
        setTab: setTab,
        user: user,
        notifSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminNotifBell, {}, void 0, false, {
            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
            lineNumber: 789,
            columnNumber: 62
        }, this),
        children: tabMap[tab]
    }, void 0, false, {
        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/admin/page.tsx",
        lineNumber: 789,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_nadhim-tsx_nadhim_12hg_l~._.js.map