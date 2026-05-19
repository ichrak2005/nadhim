(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/nadhim-tsx/nadhim/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Layout({ children, tab, setTab, user, notifSlot, subNav }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [drop, setDrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layout.useEffect": ()=>{
            const t = localStorage.getItem('theme') || '';
            if (t === 'dark') {
                setDark(true);
                document.documentElement.setAttribute('data-theme', 'dark');
            }
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
            const fn = {
                "Layout.useEffect.fn": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setDrop(false);
                }
            }["Layout.useEffect.fn"];
            document.addEventListener('mousedown', fn);
            return ({
                "Layout.useEffect": ()=>document.removeEventListener('mousedown', fn)
            })["Layout.useEffect"];
        }
    }["Layout.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-bg"
            }, void 0, false, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "hdr",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hdr-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-r",
                                    ref: ref,
                                    children: [
                                        notifSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginLeft: 4
                                            },
                                            children: notifSlot
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "gear",
                                            onClick: ()=>setDrop((v)=>!v),
                                            "aria-label": "إعدادات",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rtag",
                                            children: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        drop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "drop",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drop-hd",
                                                    children: user?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "drop-it",
                                                    onClick: toggleDark,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: dark ? '☀️' : '🌙'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 21
                                                        }, this),
                                                        dark ? L.lt : L.dk
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drop-sep"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "drop-it red",
                                                    onClick: logout,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🚪"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 21
                                                        }, this),
                                                        L.lo
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: L.title
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                            lineNumber: 76,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: L.sub
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                            lineNumber: 76,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-l",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/Logo.png",
                                        alt: "ناظم",
                                        onError: (e)=>{
                                            const img = e.target;
                                            if (img.src.includes('/Logo.png')) img.src = '/Logo.png';
                                            else if (img.src.includes('/Logo.png')) img.src = '/Logo.png';
                                            else img.style.display = 'none';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    tabs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-in",
                            children: tabs.map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `nb ${tab === key ? 'on' : ''}`,
                                    onClick: ()=>setTab(key),
                                    children: label
                                }, key, false, {
                                    fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    subNav && subNav,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "page-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                paddingLeft: 40,
                                paddingRight: 40,
                                paddingTop: 24
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/nadhim-tsx/nadhim/app/layout.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Layout, "8mvsBTZy7CmXpAV18HbTJu0KIYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$nadhim$2d$tsx$2f$nadhim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_nadhim-tsx_nadhim_app_layout_tsx_04u.55o._.js.map