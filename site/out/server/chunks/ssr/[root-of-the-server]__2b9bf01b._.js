module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ThemeProvider({ children, defaultTheme = "system" }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTheme);
    const [resolvedTheme, setResolvedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize theme from localStorage and check current DOM state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem("theme");
        // Determine initial theme
        let initialTheme = defaultTheme;
        if (savedTheme && [
            "light",
            "dark",
            "system"
        ].includes(savedTheme)) {
            initialTheme = savedTheme;
        }
        // Check current DOM state to determine resolved theme
        const root = window.document.documentElement;
        const isCurrentlyDark = root.classList.contains("dark");
        // Set initial resolved theme based on current DOM state or system preference
        if (initialTheme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setResolvedTheme(systemTheme);
        } else {
            setResolvedTheme(initialTheme);
        }
        setTheme(initialTheme);
        setMounted(true);
    }, [
        defaultTheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const root = window.document.documentElement;
        // Remove existing theme classes
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
            setResolvedTheme(systemTheme);
        } else {
            root.classList.add(theme);
            setResolvedTheme(theme);
        }
        // Save to localStorage
        localStorage.setItem("theme", theme);
    }, [
        theme,
        mounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = ()=>{
            if (theme === "system") {
                const systemTheme = mediaQuery.matches ? "dark" : "light";
                const root = window.document.documentElement;
                root.classList.remove("light", "dark");
                root.classList.add(systemTheme);
                setResolvedTheme(systemTheme);
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return ()=>mediaQuery.removeEventListener("change", handleChange);
    }, [
        theme,
        mounted
    ]);
    const value = {
        theme,
        setTheme,
        resolvedTheme
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/providers/ClientThemeProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientThemeProvider",
    ()=>ClientThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function ClientThemeProvider({ children, defaultTheme = "system" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        defaultTheme: defaultTheme,
        children: children
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/providers/ClientThemeProvider.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimpleThemeToggle",
    ()=>SimpleThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SimpleThemeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ensure component is mounted before rendering to prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Don't render until mounted to prevent hydration issues
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded-md p-2 hover:bg-background-secondary transition-colors",
            "aria-label": "Theme toggle",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-5 w-5 text-foreground"
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    const toggleTheme = ()=>{
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("system");
        } else {
            setTheme("light");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "rounded-md p-2 hover:bg-background-secondary transition-colors",
        "aria-label": `Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`,
        "data-oid": "_5ikfpw",
        children: theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-5 w-5 text-foreground",
            "data-oid": "1fys5sh"
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this) : theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-5 w-5 text-foreground",
            "data-oid": "9lzhkv-"
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx",
            lineNumber: 49,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-5 w-5 text-foreground",
            "data-oid": "mis3jh."
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx",
            lineNumber: 51,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$SimpleThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db/app'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-background border-b border-border sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 text-2xl font-bold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: APP_CONSTS.APP_NAME,
                                    width: 220,
                                    height: 60,
                                    className: "h-12 w-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this),
                                APP_CONSTS.APP_NAME
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 20,
                                        className: "text-foreground-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `tel:${APP_CONSTS.APP_CONTACT_PHONE}`,
                                        className: "text-foreground-secondary hover:text-foreground transition-colors text-sm",
                                        children: "+61 457 271 181"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$SimpleThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `mailto:${APP_CONSTS.APP_CONTACT_EMAIL}`,
                                className: "bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors text-sm",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypewriterAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db/data/professions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
function TypewriterAnimation({ className = '', typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000, prefix = 'for ', suffix = '' }) {
    const [currentProfessionIndex, setCurrentProfessionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentText, setCurrentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentProfession = professions[currentProfessionIndex];
        if (isPaused) {
            const pauseTimer = setTimeout(()=>{
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return ()=>clearTimeout(pauseTimer);
        }
        const timer = setTimeout(()=>{
            if (!isDeleting) {
                // Typing phase
                if (currentText.length < currentProfession.length) {
                    setCurrentText(currentProfession.slice(0, currentText.length + 1));
                } else {
                    // Finished typing, pause before deleting
                    setIsPaused(true);
                }
            } else {
                // Deleting phase
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    // Finished deleting, move to next profession
                    setIsDeleting(false);
                    setCurrentProfessionIndex((prevIndex)=>(prevIndex + 1) % professions.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);
        return ()=>clearTimeout(timer);
    }, [
        currentText,
        isDeleting,
        isPaused,
        currentProfessionIndex,
        typingSpeed,
        deletingSpeed,
        pauseDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-block ${className}`,
        children: [
            prefix,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-primary font-semibold",
                children: [
                    currentText,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-pulse",
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx [app-ssr] (ecmascript) <export default as TypewriterAnimation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypewriterAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$TypewriterAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$TypewriterAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx [app-ssr] (ecmascript)");
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$TypewriterAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TypewriterAnimation$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx [app-ssr] (ecmascript) <export default as TypewriterAnimation>");
(()=>{
    const e = new Error("Cannot find module '@/db/app'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-background flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold text-foreground leading-tight",
                                children: APP_CONSTS.APP_NAME
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-foreground-secondary leading-relaxed",
                                children: "We are a network of thinkers and builders who are passionate about technical problems and want to solve them together."
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl md:text-3xl font-medium text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$TypewriterAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TypewriterAnimation$3e$__["TypewriterAnimation"], {
                                    className: "block",
                                    typingSpeed: 80,
                                    deletingSpeed: 40,
                                    pauseDuration: 1500,
                                    prefix: "Connecting ",
                                    suffix: " across Australia"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/events",
                                        className: "text-primary hover:text-primary/80 px-8 py-4 font-semibold transition-colors text-center",
                                        children: "Events"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/reps",
                                        className: "text-primary hover:text-primary/80 px-8 py-4 font-semibold transition-colors text-center",
                                        children: "Reps"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/join",
                                        className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-center",
                                        children: [
                                            "Join ",
                                            APP_CONSTS.APP_SHORTNAME
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-background-secondary rounded-lg p-8 aspect-square flex items-center justify-center border border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "assets/images/hero.png",
                                    alt: "Hero Image",
                                    width: 500,
                                    height: 500,
                                    priority: true,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BaseEmbedableForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function BaseEmbedableForm({ formUrl, height = 800, loadingMessage = 'Loading form...', iframeClassName = '' }) {
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center lg:p-8 p-0 bg-muted/50 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: loadingMessage
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: formUrl,
                    width: "100%",
                    height: height,
                    frameBorder: "0",
                    marginHeight: 0,
                    marginWidth: 0,
                    className: `w-full bg-background rounded-lg border ${iframeClassName}`,
                    style: {
                        height: `${height}px`,
                        minHeight: '400px'
                    },
                    onLoad: ()=>setIsLoaded(true),
                    title: "Embedded Form",
                    children: "Loading…"
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/forms/JoinForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
function JoinForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            formUrl: formLinks.Membership,
            height: 600,
            loadingMessage: "Loading form..."
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/JoinForm.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/JoinForm.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/forms/RegisterCommitteeForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterCommitteeForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
function RegisterCommitteeForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            formUrl: formLinks.RegisterCommitee,
            height: 600,
            loadingMessage: "Loading committee registration form..."
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/RegisterCommitteeForm.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/RegisterCommitteeForm.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/forms/SponsorshipForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SponsorshipForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
function SponsorshipForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            formUrl: formLinks.Sponsorship,
            height: 600,
            loadingMessage: "Loading sponsorship form..."
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/SponsorshipForm.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/SponsorshipForm.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/forms/NominationForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NominationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
function NominationForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            formUrl: formLinks.Nomination,
            height: 600,
            loadingMessage: "Loading nomination form..."
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/NominationForm.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/forms/NominationForm.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
function Modal({ isOpen, onClose, title, children, className = '' }) {
    // Handle escape key press
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (event)=>{
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative bg-card border border-border rounded-lg shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto ${className}`,
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 sm:p-6 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg sm:text-xl font-bold text-foreground pr-4",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0",
                                "aria-label": "Close modal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-foreground-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/data/app.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_CONSTS",
    ()=>APP_CONSTS
]);
const APP_CONSTS = {
    APP_SHORTNAME: "Tony Cerqui",
    APP_NAME: "Tony Cerqui",
    APP_DESCRIPTION: "Anthony (Tony) Cerqui - Process Engineer & Software Developer",
    APP_URL: "https://tony.is-a.dev",
    // APP_ABN: "",
    APP_TWITTER: "https://x.com/tonycerqui",
    APP_FACEBOOK: "https://www.facebook.com/anthony.cerqui/",
    APP_LINKEDIN: "https://www.linkedin.com/in/anthonycerqui/",
    APP_INSTAGRAM: "https://www.instagram.com/tony_cerqui/",
    // APP_YOUTUBE: "https://www.youtube.com/ytpn",
    APP_CONTACT_EMAIL: "adpcerqui@gmail.com",
    APP_CONTACT_PHONE: "+61 457 271 181"
};
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticipateSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$JoinForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/JoinForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$RegisterCommitteeForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/RegisterCommitteeForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$SponsorshipForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/SponsorshipForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/NominationForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/data/app.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const services = [
    {
        id: 'register-membership',
        title: 'Join the Network',
        description: 'Connect with early-career engineers, scientists, developers, and analysts building the future of technical practice. Be part of a cross-disciplinary community from day one.',
        icon: '🛠️',
        ctaText: 'Join Now',
        ctaType: 'form',
        form: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$JoinForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
            lineNumber: 21,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'join-events',
        title: 'Attend an Event',
        description: 'Explore real projects, fresh ideas, and lessons from across industries. Each Showcase or Expo is a chance to meet peers and learn something new.',
        icon: '⚙️',
        ctaText: 'View Events',
        ctaType: 'navigation',
        link: '/events'
    },
    {
        id: 'register-committees',
        title: 'Collaborate With Us',
        description: 'Represent your company, university, or association. Co-host an event or bring your members into the network to share knowledge and experience.',
        icon: '🤝',
        ctaText: 'Register Group',
        ctaType: 'form',
        form: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$RegisterCommitteeForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
            lineNumber: 41,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'sponsor-ytpn',
        title: 'Partner or Sponsor',
        description: 'Support an independent initiative that connects emerging technical talent. Help us keep events accessible and foster the next generation of professionals.',
        icon: '💡',
        ctaText: 'Become a Partner',
        ctaType: 'form',
        form: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$SponsorshipForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
            lineNumber: 51,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'nominate-a-speaker',
        title: 'Contribute a Voice',
        description: 'Know someone with an idea worth sharing? Nominate a speaker or suggest a topic that bridges disciplines and sparks conversation.',
        icon: '🎤',
        ctaText: 'Nominate a Speaker',
        ctaType: 'form',
        form: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
            lineNumber: 61,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function ParticipateSection() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalContent, setModalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalTitle, setModalTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCardClick = (service)=>{
        if (service.form) {
            // Open modal with form
            setModalContent(service.form);
            setModalTitle(service.title);
            setModalOpen(true);
        } else if (service.link) {
            // Navigate to link
            router.push(service.link);
        }
    };
    const closeModal = ()=>{
        setModalOpen(false);
        setModalContent(null);
        setModalTitle('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "py-20 bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary font-semibold text-sm uppercase tracking-wide mb-4",
                                children: "TAKE ACTION TODAY"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold text-foreground mb-4",
                                children: [
                                    "Choose Your Path to Impact with",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_NAME
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-foreground-secondary max-w-2xl mx-auto",
                                children: "Whether you're looking to join our community, partner with us, or share your expertise, there's a way for you to make a difference in the technical professional landscape."
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group cursor-pointer ",
                                onClick: ()=>handleCardClick(service),
                                role: service.form || service.link ? 'button' : undefined,
                                tabIndex: service.form || service.link ? 0 : undefined,
                                onKeyDown: (e)=>{
                                    if ((e.key === 'Enter' || e.key === ' ') && (service.form || service.link)) {
                                        e.preventDefault();
                                        handleCardClick(service);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-lg  bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-[1px] rounded-lg  bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 bg-[length:200%_200%] animate-gradient-shift-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                  relative bg-card rounded-lg p-8 shadow-lg border border-border
                  transition-all duration-300 
                  hover:shadow-xl hover:scale-[1.02] hover:border-primary/30
                  active:scale-[0.98] active:shadow-lg
                  ${service.form || service.link ? 'hover:bg-card/95' : ''}
                  overflow-hidden h-full 
                `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-4xl mb-4 group-hover:scale-105 align-left transition-transform duration-300",
                                                        children: service.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300",
                                                        children: service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-foreground-tertiary text-sm leading-relaxed mb-6",
                                                        children: service.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this),
                                                    (service.form || service.link) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary font-semibold text-sm uppercase tracking-wide",
                                                                children: service.ctaText
                                                            }, void 0, false, {
                                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300",
                                                                children: service.ctaType === 'form' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, service.id, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalOpen,
                onClose: closeModal,
                title: modalTitle,
                className: "max-w-5xl",
                children: modalContent
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility Functions
 * 
 * Functional Requirements:
 * - Provides common utility functions for the application
 * - Includes className merging utility for conditional styling
 * - Supports Tailwind CSS class name conflicts resolution
 */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$3$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@radix-ui+react-accordion@1.2.12_@types+react-dom@19.1.9_@types+react@19.1.13__@types+r_6aac9f1015718a06f5007f4da8362165/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$1$2e$9_$40$types$2b$react$40$19$2e$1$2e$13_$5f40$types$2b$r_6aac9f1015718a06f5007f4da8362165$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutAccordion",
    ()=>AboutAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-check.js [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/handshake.js [app-ssr] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const accordionData = [
    {
        id: 'our ask',
        title: 'Our Ask',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
        content: {
            type: 'text',
            text: `We are seeking speakers, collaborators, and partners willing to share expertise, promote cross-disciplinary engagement, and connect professionals with the wider technical community.`
        }
    },
    {
        id: 'why-we-exist',
        title: 'Why We Exist',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        content: {
            type: 'text',
            text: `We exist to facilitate cross-disciplinary learning, collaboration, and knowledge-sharing among emerging technical talent. In a world where innovation happens at the intersection of disciplines, we believe that connecting diverse technical minds creates opportunities for breakthrough solutions and career growth.`
        }
    },
    {
        id: 'what-we-do',
        title: 'What We Do',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        content: {
            type: 'programs',
            programs: [
                {
                    title: 'Showcase Series',
                    description: 'Low-stakes informal talks on cross-domain projects, lessons, and innovations, followed by unstructured networking.'
                },
                {
                    title: 'Social/Networking Events',
                    description: 'Community-building gatherings designed to foster meaningful connections among young technical professionals.'
                },
                {
                    title: 'Expos',
                    description: 'Interactive demos and mini-presentations highlighting applied technical innovation and real-world applications.'
                }
            ]
        }
    },
    {
        id: 'who-we-are',
        title: 'Who We Are',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        content: {
            type: 'text',
            text: `We are an independent network connecting early-career technical professionals across engineering, science, technology, and related fields. We remain unaffiliated with any single company or institution, ensuring our community remains diverse, unbiased, and focused on genuine knowledge sharing.`
        }
    },
    {
        id: 'our-audience',
        title: 'Our Audience',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
        content: {
            type: 'text',
            text: `We serve early-career engineers, scientists, developers, and analysts who are seeking growth beyond their immediate discipline. Our community consists of ambitious professionals who understand that the future belongs to those who can think across boundaries and collaborate effectively with diverse technical teams.`
        }
    },
    {
        id: 'partnership-opportunities',
        title: 'Partnership Opportunities',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
        content: {
            type: 'list',
            text: `We offer corporate partners visibility with engaged young technical professionals through strategic collaboration opportunities.`,
            list: [
                'Collaboration on events and programs',
                'Sponsorship of accessible, high-value learning experiences',
                'Direct access to emerging technical talent'
            ]
        }
    },
    {
        id: 'our-capabilities',
        title: 'Our Capabilities',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        content: {
            type: 'list',
            text: `We have a team in place and platforms ready for event delivery, ensuring seamless execution of our programs.`,
            list: [
                'Integrated ticketing and event management infrastructure',
                'Well connected team with proven track record',
                'Professional website and digital presence'
            ]
        }
    }
];
function AboutAccordion() {
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleItems = showAll ? accordionData : accordionData.slice(0, 3);
    const renderContent = (content)=>{
        switch(content.type){
            case 'text':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground leading-relaxed text-lg",
                    children: content.text?.split('**').map((part, index)=>index % 2 === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "text-primary",
                            children: part
                        }, index, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                            lineNumber: 137,
                            columnNumber: 17
                        }, this) : part)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this);
            case 'programs':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: content.programs?.map((program, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-lg bg-background/50 border border-border/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-foreground mb-2 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-primary rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                                lineNumber: 156,
                                                columnNumber: 21
                                            }, this),
                                            program.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                        lineNumber: 155,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: program.description
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                lineNumber: 151,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this);
            case 'list':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        content.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground leading-relaxed text-lg mb-4",
                            children: content.text.split('**').map((part, index)=>index % 2 === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-primary",
                                    children: part
                                }, index, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                    lineNumber: 172,
                                    columnNumber: 21
                                }, this) : part)
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this),
                        content.list && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3",
                            children: content.list.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                            lineNumber: 185,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                            lineNumber: 186,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                    lineNumber: 184,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                type: "single",
                collapsible: true,
                className: "w-full space-y-4",
                children: visibleItems.map((item)=>{
                    const IconComponent = item.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: item.id,
                        className: "border border-border/30 rounded-xl px-6 bg-muted/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: " flex items-center text-left hover:no-underline group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-xl font-semibold text-foreground",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-16",
                                    children: renderContent(item.content)
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowAll(!showAll),
                    className: "text-primary font-medium hover:underline",
                    children: showAll ? 'Show Less ▲' : 'Show More ▼'
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/AboutSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$AboutAccordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/AboutAccordion.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-20 bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-primary font-semibold text-sm uppercase tracking-wide mb-4",
                    children: "About Us"
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutSection.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$AboutAccordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutAccordion"], {}, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutSection.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/AboutSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
} // <section className='py-20 bg-background'>
 //   <div className='container mx-auto px-6'>
 //     <div className='grid lg:grid-cols-2 gap-12 items-center'>
 //       <div className='order-2 lg:order-1'>
 //         <div className='bg-background-secondary rounded-lg p-8 aspect-video flex items-center justify-center border border-border overflow-hidden'>
 //           <Image
 //             src='assets/images/team.png'
 //             alt='Team'
 //             width={500}
 //             height={281}
 //             className='w-full h-full object-cover rounded-lg'
 //           />
 //         </div>
 //       </div>
 //       <div className='order-1 lg:order-2 space-y-6'>
 //         <p className='text-primary font-semibold text-sm uppercase tracking-wide'>
 //           What we are
 //         </p>
 //         <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
 //           A network of thinkers and builders
 //         </h2>
 //         <p className='text-lg text-foreground-secondary leading-relaxed'>
 //           A nexus for events, networking and collaboration.
 //         </p>
 //       </div>
 //     </div>
 //   </div>
 // </section>
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SponsorSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
(()=>{
    const e = new Error("Cannot find module '@/db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$SponsorshipForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/SponsorshipForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$RegisterCommitteeForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/RegisterCommitteeForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function SponsorSection() {
    const [isSponsorModalOpen, setIsSponsorModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCollaborationModalOpen, setIsCollaborationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openSponsorModal = ()=>setIsSponsorModalOpen(true);
    const closeSponsorModal = ()=>setIsSponsorModalOpen(false);
    const openCollaborationModal = ()=>setIsCollaborationModalOpen(true);
    const closeCollaborationModal = ()=>setIsCollaborationModalOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "team",
        className: "py-20 bg-background-secondary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center text-foreground mb-16",
                        children: "Our Partners"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid md:grid-cols-${partners.length + 1} gap-8 max-w-4xl mx-auto`,
                        children: [
                            partners.map((sponsor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/partners/${sponsor.slug}`,
                                    className: "bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center group border border-border max-w-100 w-full mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-32 h-32 bg-background-secondary rounded-full mx-auto mb-6 flex items-center justify-center border border-border overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: sponsor.headshot,
                                                alt: `${sponsor.name} logo`,
                                                width: 128,
                                                height: 128,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors",
                                            children: sponsor.name
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground-secondary",
                                            children: sponsor.role
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, sponsor.name, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card/60 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all text-center border-2 border-dashed border-border hover:border-primary max-w-100 w-full mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32 mx-auto mb-6 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: openCollaborationModal,
                                                className: "bg-background-secondary w-24 h-24 rounded-full flex flex-col items-center justify-center hover:bg-primary/80 transition-all border border-border hover:border-primary group hover:scale-110",
                                                title: "Collaborate with Us",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-4 h-4 text-foreground-secondary group-hover:text-primary-foreground transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-foreground-secondary group-hover:text-primary-foreground transition-colors font-medium",
                                                        children: "Collaborate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: openSponsorModal,
                                                className: "bg-background-secondary w-24 h-24 rounded-full flex flex-col items-center justify-center hover:bg-primary/80 transition-all border border-border hover:border-primary group hover:scale-110",
                                                title: "Become a Sponsor",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-4 h-4 text-foreground-secondary group-hover:text-primary-foreground transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-foreground-secondary group-hover:text-primary-foreground transition-colors font-medium",
                                                        children: "Sponsor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-card-foreground mb-2",
                                        children: "Get Involved"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground-secondary",
                                        children: "Collaborate with or sponsor the network"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSponsorModalOpen,
                onClose: closeSponsorModal,
                title: "Become a Sponsor",
                className: "max-w-6xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$SponsorshipForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCollaborationModalOpen,
                onClose: closeCollaborationModal,
                title: "Collaborate with Us",
                className: "max-w-6xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$RegisterCommitteeForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/app/blog/highlightedblogs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Highlighted Blog Posts Configuration
 * 
 * Functional Requirements:
 * - Define featured blog posts for homepage display
 * - Map blog posts to their corresponding hero images
 * - Provide structured data for BlogSection component
 * - Support responsive image display and SEO optimization
 * - Maintain consistent data structure for easy maintenance
 */ __turbopack_context__.s([
    "getAllHighlightedBlogPosts",
    ()=>getAllHighlightedBlogPosts,
    "getBlogPostBySlug",
    ()=>getBlogPostBySlug,
    "getFeaturedBlogPosts",
    ()=>getFeaturedBlogPosts,
    "highlightedBlogPosts",
    ()=>highlightedBlogPosts
]);
const highlightedBlogPosts = [
    {
        id: 'navigate-lock-in-complexities',
        title: 'Navigate lock-in complexities with Gribeauval\'s innovation mindset',
        excerpt: 'Balance utility and switching costs for strategic tech decisions.',
        date: 'June 23, 2024',
        slug: 'navigate-lock-in-complexities-with-gribeauvals-innovation-mindset',
        imagePath: '/assets/blog/browser.png',
        imageAlt: 'Browser interface representing innovation and strategic technology decisions',
        featured: true,
        readingTime: 12,
        tags: [
            'technology',
            'innovation',
            'strategy',
            'vendor-lock-in'
        ]
    },
    {
        id: 'open-source-software-smes',
        title: 'Open Source means Open Opportunities: Why SMEs Are Switching',
        excerpt: 'Unlock Growth with Open Source: An overview of why savvy small to medium enterprises are embracing this strategy, not just for cost savings but for a world of new opportunities.',
        date: 'June 13, 2024',
        slug: 'open-source-software-for-smes',
        imagePath: '/assets/blog/open-source-opportunities.gif',
        imageAlt: 'Open source opportunities animation showing growth and collaboration',
        featured: true,
        readingTime: 15,
        tags: [
            'open-source',
            'SME',
            'technology',
            'business-strategy'
        ]
    },
    {
        id: 'navigating-digital-transformation',
        title: 'Navigating the Digital Transformation: The Critical Role of Traditional IT Services',
        excerpt: 'Traditional IT services are essential for businesses navigating digital transformation. They ensure seamless remote work, enhance security, optimize cloud infrastructure, and support Microsoft 365 adoption.',
        date: 'June 5, 2024',
        slug: 'navigating-digital-transformation',
        imagePath: '/assets/blog/support.png',
        imageAlt: 'IT support and digital transformation services illustration',
        featured: false,
        readingTime: 8,
        tags: [
            'digital-transformation',
            'IT-services',
            'technology',
            'business'
        ]
    },
    {
        id: 'role-of-apps-integrations-automation',
        title: 'Applications, Integrations, and Automation in Modern Business',
        excerpt: 'Applications, integrations, and automation services optimize business operations by enhancing efficiency, scalability, and data flow while reducing manual tasks and increasing accuracy.',
        date: 'June 5, 2024',
        slug: 'role-of-apps-integrations-and-automation',
        imagePath: '/assets/blog/web-programming.png',
        imageAlt: 'Web programming and application development illustration',
        featured: false,
        readingTime: 6,
        tags: [
            'applications',
            'integrations',
            'automation',
            'business-efficiency'
        ]
    }
];
const getFeaturedBlogPosts = ()=>{
    return highlightedBlogPosts.filter((post)=>post.featured);
};
const getAllHighlightedBlogPosts = ()=>{
    return highlightedBlogPosts;
};
const getBlogPostBySlug = (slug)=>{
    return highlightedBlogPosts.find((post)=>post.slug === slug);
};
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$app$2f$blog$2f$highlightedblogs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/app/blog/highlightedblogs.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function BlogSection() {
    const blogPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$app$2f$blog$2f$highlightedblogs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllHighlightedBlogPosts"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "blog",
        className: "py-4 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold text-center text-foreground mb-16",
                    children: "Featured Blogs"
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: blogPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "bg-background-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48 relative overflow-hidden border-b border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: post.imagePath,
                                        alt: post.imageAlt,
                                        fill: true,
                                        className: "object-cover transition-transform duration-300 hover:scale-105",
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-primary font-semibold",
                                                    children: post.date
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-foreground-muted",
                                                    children: [
                                                        post.readingTime,
                                                        " min read"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-foreground mb-3 line-clamp-2",
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground-secondary text-sm mb-4 line-clamp-3",
                                            children: post.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1 mb-4",
                                            children: post.tags.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs bg-background-tertiary text-foreground-muted px-2 py-1 rounded-full",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/blog/${post.slug}`,
                                            className: "text-primary hover:text-primary/80 font-semibold text-sm transition-colors inline-flex items-center gap-1",
                                            children: [
                                                "Read More",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
/**
 * FUNCTIONAL REQUIREMENTS:
 * - Display process steps in equal-width grid layout
 * - Ensure responsive design across all screen sizes
 * - Maintain visual hierarchy with numbered circles
 * - Center content and maintain consistent spacing
 * - Support mobile-first responsive breakpoints
 */ const processSteps = [
    {
        title: 'Connect',
        description: 'Bring technical professionals together to share goals, ideas, and opportunities.'
    },
    {
        title: 'Organise',
        description: 'Coordinate venues, logistics, and communication to make each event seamless.'
    },
    {
        title: 'Engage',
        description: 'Deliver events, workshops, and meetups that inspire collaboration and growth.'
    }
];
function ProcessSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        className: "py-20 bg-background-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary font-semibold text-sm uppercase tracking-wide mb-4",
                        children: "Our process"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto",
                    children: processSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary-foreground font-bold text-lg",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-foreground mb-3",
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground-secondary text-sm leading-relaxed",
                                    children: step.description
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, step.title, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FocusAreasSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const focusAreas = [
    {
        category: 'SOCIAL',
        title: 'Social Events',
        description: 'Step out from behind the desk — build real friendships, share ideas, and celebrate wins together.',
        icon: '🌐'
    },
    {
        category: 'NETWORKING',
        title: 'Industry Connections',
        description: 'Don’t leave your committee behind — connect across teams, companies, and industries to move forward together.',
        icon: '🔗'
    },
    {
        category: 'DEVELOPMENT',
        title: 'Professional Growth',
        description: 'Back yourself. Build the skills, confidence, and perspective to lead the next generation of technical professionals.',
        icon: '📊'
    }
];
function FocusAreasSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "news",
        className: "py-20 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-foreground mb-4",
                        children: "Areas of Focus"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: focusAreas.map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background-secondary rounded-lg p-8 hover:shadow-lg transition-shadow border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-4",
                                    children: area.icon
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold",
                                        children: area.category
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-foreground mb-4",
                                    children: area.title
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground-secondary leading-relaxed",
                                    children: area.description
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, area.title, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
const clients = [
    {
        name: 'Well Tested',
        url: 'https://welltested.btdigital.com.au'
    },
    {
        name: 'Spectra Ingenuity',
        url: 'https://spectra-ingenuity.com.au'
    },
    {
        name: 'OnSpec',
        url: 'https://www.onspecdaq.com/'
    },
    {
        name: 'Innovera Partners',
        url: 'https://www.innoverapartners.com/'
    },
    {
        name: 'Circulr',
        url: 'https://www.circulr.earth/'
    },
    {
        name: 'ApiOro',
        url: 'https://www.apioro.com'
    }
];
function ClientsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-foreground-secondary",
                        children: "Some of our partners & projects:"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center",
                    children: clients.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: client.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "bg-background-secondary rounded-lg p-6 hover:shadow-lg transition-shadow text-center group border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-16 flex items-center justify-center mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🏢"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors",
                                    children: client.name
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, client.name, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/lib/date-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Date formatting utilities for events
 * Handles missing dates by displaying "TBC" (To Be Confirmed)
 * Includes day of week formatting options for different use cases
 */ __turbopack_context__.s([
    "formatEventDate",
    ()=>formatEventDate,
    "formatEventDateShort",
    ()=>formatEventDateShort,
    "formatEventDateTime",
    ()=>formatEventDateTime,
    "formatEventDateWithoutYear",
    ()=>formatEventDateWithoutYear,
    "formatEventTime",
    ()=>formatEventTime
]);
function formatEventDate(date) {
    if (!date) {
        return 'TBC';
    }
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
function formatEventTime(date) {
    if (!date) {
        return 'TBC';
    }
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}
function formatEventDateTime(date) {
    return {
        date: formatEventDate(date),
        time: formatEventTime(date)
    };
}
function formatEventDateShort(date) {
    if (!date) {
        return 'TBC';
    }
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
}
function formatEventDateWithoutYear(date) {
    if (!date) {
        return 'TBC';
    }
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
(()=>{
    const e = new Error("Cannot find module '@/db/data/events'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/lib/date-utils.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db/typesAndFunctions/eventUtils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
function EventsSection() {
    // Show only the first 3 events for homepage preview
    const previewEvents = events.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-background-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-8 h-8 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold text-foreground mb-4",
                            children: "Upcoming Events"
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-foreground-secondary max-w-2xl mx-auto",
                            children: "Join our community of technical professionals at our upcoming events. From conferences to workshops, there's something for everyone."
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                previewEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
                    children: previewEvents.map((event)=>{
                        const { date, time } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEventDateTime"])(event.date);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/events/${getEventSlug(event)}`,
                            className: "bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-border group",
                            children: [
                                event.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video relative overflow-hidden rounded-t-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: event.image,
                                            alt: event.title,
                                            fill: true,
                                            className: "object-cover group-hover:scale-105 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                            lineNumber: 44,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium",
                                                children: event.eventType
                                            }, void 0, false, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                lineNumber: 51,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                            lineNumber: 50,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors",
                                            children: event.title
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground-secondary mb-4 line-clamp-3",
                                            children: event.description
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm text-foreground-secondary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: date
                                                        }, void 0, false, {
                                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: time
                                                        }, void 0, false, {
                                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: event.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 21
                                        }, this),
                                        event.tags && event.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex flex-wrap gap-2",
                                            children: event.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-background-secondary text-foreground-secondary px-2 py-1 rounded text-xs",
                                                    children: tag
                                                }, index, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                            lineNumber: 127,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, event.slug, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                            lineNumber: 37,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "w-16 h-16 text-foreground-tertiary mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xl font-semibold text-foreground mb-2",
                            children: "No events scheduled"
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground-secondary",
                            children: "Check back soon for upcoming events and networking opportunities."
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/events",
                        className: "inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg",
                        children: [
                            "View All Events",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-5 h-5 ml-2"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/Industries/data/industries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryInfo",
    ()=>categoryInfo,
    "edges",
    ()=>edges,
    "getCategoryInfo",
    ()=>getCategoryInfo,
    "nodes",
    ()=>nodes
]);
const categoryInfo = {
    industry: {
        size: 10,
        color: {
            light: '#059669',
            dark: '#10b981'
        }
    },
    discipline: {
        size: 9,
        color: {
            light: '#2563eb',
            dark: '#3b82f6'
        }
    },
    tool: {
        size: 5,
        color: {
            light: '#dc2626',
            dark: '#ef4444'
        }
    },
    topic: {
        size: 7,
        color: {
            light: '#ea580c',
            dark: '#f97316'
        }
    },
    challenge: {
        size: 6,
        color: {
            light: '#7c3aed',
            dark: '#8b5cf6'
        }
    }
};
const getCategoryInfo = (category)=>{
    return categoryInfo[category] || categoryInfo.industry;
};
const nodes = [
    // Industries
    {
        id: 'energy',
        label: 'Energy',
        category: categoryInfo.industry
    },
    {
        id: 'mining',
        label: 'Mining',
        category: categoryInfo.industry
    },
    // {
    //   id: 'manufacturing',
    //   label: 'Manufacturing',
    //   category: categoryInfo.industry,
    // },
    {
        id: 'logistics',
        label: 'Logistics',
        category: categoryInfo.industry
    },
    {
        id: 'healthcare',
        label: 'Healthcare',
        category: categoryInfo.industry
    },
    {
        id: 'water',
        label: 'Water',
        category: categoryInfo.industry
    },
    {
        id: 'defence',
        label: 'Defence',
        category: categoryInfo.industry
    },
    {
        id: 'agriculture',
        label: 'Agriculture',
        category: categoryInfo.industry
    },
    {
        id: 'aviation',
        label: 'Aviation',
        category: categoryInfo.industry
    },
    {
        id: 'aerospace',
        label: 'Aerospace',
        category: categoryInfo.industry
    },
    {
        id: 'coastal-engineering',
        label: 'Coastal Engineering',
        category: categoryInfo.industry
    },
    {
        id: 'oil-and-gas',
        label: 'Oil and Gas',
        category: categoryInfo.industry
    },
    {
        id: 'pharmaceuticals',
        label: 'Pharmaceuticals',
        category: categoryInfo.industry
    },
    {
        id: 'automotive',
        label: 'Automotive',
        category: categoryInfo.industry
    },
    {
        id: 'utilities',
        label: 'Utilities',
        category: categoryInfo.industry
    },
    {
        id: 'chemicals',
        label: 'Chemicals',
        category: categoryInfo.industry
    },
    {
        id: 'maritime',
        label: 'Maritime',
        category: categoryInfo.industry
    },
    {
        id: 'food-and-beverage',
        label: 'Food and Beverage',
        category: categoryInfo.industry
    },
    {
        id: 'electronics',
        label: 'Electronics',
        category: categoryInfo.industry
    },
    {
        id: 'renewables',
        label: 'Renewables',
        category: categoryInfo.industry
    },
    // Disciplines
    {
        id: 'chemical-engineering',
        label: 'Chemical Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'mechanical-engineering',
        label: 'Mechanical Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'civil-engineering',
        label: 'Civil Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'electrical-engineering',
        label: 'Electrical Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'process-engineering',
        label: 'Process Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'software-engineering',
        label: 'Software Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'data-science',
        label: 'Data Science',
        category: categoryInfo.discipline
    },
    {
        id: 'chemistry',
        label: 'Chemistry',
        category: categoryInfo.discipline
    },
    {
        id: 'environmental-engineering',
        label: 'Environmental Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'industrial-engineering',
        label: 'Industrial Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'materials-engineering',
        label: 'Materials Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'biomedical-engineering',
        label: 'Biomedical Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'aerospace-engineering',
        label: 'Aerospace Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'nuclear-engineering',
        label: 'Nuclear Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'systems-engineering',
        label: 'Systems Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'robotics-engineering',
        label: 'Robotics Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'geotechnical-engineering',
        label: 'Geotechnical Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'petroleum-engineering',
        label: 'Petroleum Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'gis',
        label: 'GIS',
        category: categoryInfo.discipline
    },
    {
        id: 'statistics',
        label: 'Statistics',
        category: categoryInfo.discipline
    },
    {
        id: 'geology',
        label: 'Geology',
        category: categoryInfo.discipline
    },
    // Tools
    // { id: 'python', label: 'Python', category: categoryInfo.tool },
    // { id: 'syscad', label: 'SysCAD', category: categoryInfo.tool },
    // { id: 'matlab', label: 'MATLAB', category: categoryInfo.tool },
    // { id: 'autocad', label: 'AutoCAD', category: categoryInfo.tool },
    {
        id: 'cloud',
        label: 'Cloud',
        category: categoryInfo.tool
    },
    {
        id: 'web-development',
        label: 'Web Development',
        category: categoryInfo.tool
    },
    // { id: 'ansys', label: 'ANSYS', category: categoryInfo.tool },
    // { id: 'solidworks', label: 'SolidWorks', category: categoryInfo.tool },
    // { id: 'r', label: 'R', category: categoryInfo.tool },
    // { id: 'tensorflow', label: 'TensorFlow', category: categoryInfo.tool },
    // { id: 'aspen-plus', label: 'Aspen Plus', category: categoryInfo.tool },
    // { id: 'excel', label: 'Excel', category: categoryInfo.tool },
    // { id: 'simulink', label: 'Simulink', category: categoryInfo.tool },
    {
        id: 'kubernetes',
        label: 'Kubernetes',
        category: categoryInfo.tool
    },
    {
        id: 'docker',
        label: 'Docker',
        category: categoryInfo.tool
    },
    // { id: 'tableau', label: 'Tableau', category: categoryInfo.tool },
    {
        id: 'power-bi',
        label: 'Power BI',
        category: categoryInfo.tool
    },
    // { id: 'comsol', label: 'COMSOL', category: categoryInfo.tool },
    // { id: 'labview', label: 'LabVIEW', category: categoryInfo.tool },
    // Topics
    {
        id: 'carbon-capture',
        label: 'Carbon Capture',
        category: categoryInfo.topic
    },
    {
        id: 'automation',
        label: 'Automation',
        category: categoryInfo.topic
    },
    {
        id: 'ai',
        label: 'Artificial Intelligence',
        category: categoryInfo.topic
    },
    {
        id: 'digital-twins',
        label: 'Digital Twins',
        category: categoryInfo.topic
    },
    {
        id: 'renewable-energy',
        label: 'Renewable Energy',
        category: categoryInfo.topic
    },
    {
        id: 'process-optimization',
        label: 'Process Optimization',
        category: categoryInfo.topic
    },
    {
        id: 'modelling',
        label: 'Modelling & Simulation',
        category: categoryInfo.topic
    },
    // { id: 'simulation', label: 'Simulation', category: categoryInfo.topic },
    {
        id: 'machine-learning',
        label: 'Machine Learning',
        category: categoryInfo.topic
    },
    {
        id: 'iot',
        label: 'IoT',
        category: categoryInfo.topic
    },
    // { id: 'big-data', label: 'Big Data', category: categoryInfo.topic },
    {
        id: 'cybersecurity',
        label: 'Cybersecurity',
        category: categoryInfo.topic
    },
    {
        id: 'robotics',
        label: 'Robotics',
        category: categoryInfo.topic
    },
    {
        id: '3d-printing',
        label: '3D Printing',
        category: categoryInfo.topic
    },
    // { id: 'blockchain', label: 'Blockchain', category: categoryInfo.topic },
    // {
    //   id: 'edge-computing',
    //   label: 'Edge Computing',
    //   category: categoryInfo.topic,
    // },
    // {
    //   id: 'quantum-computing',
    //   label: 'Quantum Computing',
    //   category: categoryInfo.topic,
    // },
    // {
    //   id: 'augmented-reality',
    //   label: 'Augmented Reality',
    //   category: categoryInfo.topic,
    // },
    // {
    //   id: 'virtual-reality',
    //   label: 'Virtual Reality',
    //   category: categoryInfo.topic,
    // },
    {
        id: 'maintenance',
        label: 'Maintenance',
        category: categoryInfo.topic
    },
    {
        id: 'energy-storage',
        label: 'Energy Storage',
        category: categoryInfo.topic
    },
    {
        id: 'biofuels',
        label: 'Biofuels',
        category: categoryInfo.topic
    },
    {
        id: 'nanotechnology',
        label: 'Nanotechnology',
        category: categoryInfo.topic
    },
    // Challenges
    {
        id: 'sustainability',
        label: 'Sustainability',
        category: categoryInfo.challenge
    },
    {
        id: 'climate-change',
        label: 'Climate Change',
        category: categoryInfo.challenge
    },
    {
        id: 'regulatory-compliance',
        label: 'Regulatory Compliance',
        category: categoryInfo.challenge
    },
    {
        id: 'energy-transition',
        label: 'Energy Transition',
        category: categoryInfo.challenge
    }
];
const edges = [
    // Industry connections
    {
        source: 'energy',
        target: 'mining'
    },
    {
        source: 'energy',
        target: 'renewable-energy'
    },
    {
        source: 'mining',
        target: 'logistics'
    },
    {
        source: 'logistics',
        target: 'automotive'
    },
    {
        source: 'logistics',
        target: 'maritime'
    },
    {
        source: 'healthcare',
        target: 'pharmaceuticals'
    },
    {
        source: 'water',
        target: 'coastal-engineering'
    },
    {
        source: 'agriculture',
        target: 'water'
    },
    {
        source: 'agriculture',
        target: 'food-and-beverage'
    },
    {
        source: 'aviation',
        target: 'aerospace'
    },
    {
        source: 'defence',
        target: 'aerospace'
    },
    {
        source: 'oil-and-gas',
        target: 'energy'
    },
    {
        source: 'oil-and-gas',
        target: 'mining'
    },
    {
        source: 'pharmaceuticals',
        target: 'healthcare'
    },
    {
        source: 'automotive',
        target: 'logistics'
    },
    {
        source: 'utilities',
        target: 'energy'
    },
    {
        source: 'utilities',
        target: 'water'
    },
    {
        source: 'chemicals',
        target: 'agriculture'
    },
    {
        source: 'chemicals',
        target: 'pharmaceuticals'
    },
    {
        source: 'maritime',
        target: 'logistics'
    },
    {
        source: 'maritime',
        target: 'coastal-engineering'
    },
    {
        source: 'food-and-beverage',
        target: 'agriculture'
    },
    {
        source: 'electronics',
        target: 'automotive'
    },
    {
        source: 'renewables',
        target: 'energy'
    },
    {
        source: 'renewables',
        target: 'utilities'
    },
    // Discipline links
    {
        source: 'process-engineering',
        target: 'chemical-engineering'
    },
    {
        source: 'mechanical-engineering',
        target: 'automotive'
    },
    {
        source: 'mechanical-engineering',
        target: 'aviation'
    },
    {
        source: 'civil-engineering',
        target: 'coastal-engineering'
    },
    {
        source: 'electrical-engineering',
        target: 'automation'
    },
    {
        source: 'chemical-engineering',
        target: 'chemistry'
    },
    {
        source: 'chemical-engineering',
        target: 'chemicals'
    },
    {
        source: 'software-engineering',
        target: 'web-development'
    },
    {
        source: 'software-engineering',
        target: 'cloud'
    },
    {
        source: 'data-science',
        target: 'ai'
    },
    {
        source: 'data-science',
        target: 'statistics'
    },
    {
        source: 'environmental-engineering',
        target: 'water'
    },
    {
        source: 'environmental-engineering',
        target: 'renewables'
    },
    {
        source: 'industrial-engineering',
        target: 'logistics'
    },
    {
        source: 'materials-engineering',
        target: 'chemicals'
    },
    {
        source: 'biomedical-engineering',
        target: 'healthcare'
    },
    {
        source: 'aerospace-engineering',
        target: 'aerospace'
    },
    {
        source: 'nuclear-engineering',
        target: 'energy'
    },
    {
        source: 'systems-engineering',
        target: 'software-engineering'
    },
    {
        source: 'robotics-engineering',
        target: 'automation'
    },
    {
        source: 'geotechnical-engineering',
        target: 'mining'
    },
    {
        source: 'petroleum-engineering',
        target: 'oil-and-gas'
    },
    {
        source: 'gis',
        target: 'civil-engineering'
    },
    {
        source: 'gis',
        target: 'environmental-engineering'
    },
    {
        source: 'statistics',
        target: 'data-science'
    },
    {
        source: 'geology',
        target: 'mining'
    },
    {
        source: 'geology',
        target: 'oil-and-gas'
    },
    // Tools integration
    {
        source: 'cloud',
        target: 'software-engineering'
    },
    {
        source: 'cloud',
        target: 'data-science'
    },
    {
        source: 'web-development',
        target: 'software-engineering'
    },
    {
        source: 'kubernetes',
        target: 'cloud'
    },
    {
        source: 'docker',
        target: 'cloud'
    },
    {
        source: 'power-bi',
        target: 'data-science'
    },
    {
        source: 'power-bi',
        target: 'statistics'
    },
    // Topics connections
    {
        source: 'carbon-capture',
        target: 'energy'
    },
    {
        source: 'carbon-capture',
        target: 'climate-change'
    },
    {
        source: 'automation',
        target: 'electrical-engineering'
    },
    {
        source: 'automation',
        target: 'robotics-engineering'
    },
    {
        source: 'ai',
        target: 'data-science'
    },
    {
        source: 'ai',
        target: 'machine-learning'
    },
    {
        source: 'digital-twins',
        target: 'modelling'
    },
    {
        source: 'digital-twins',
        target: 'automation'
    },
    {
        source: 'renewable-energy',
        target: 'energy'
    },
    {
        source: 'renewable-energy',
        target: 'sustainability'
    },
    {
        source: 'process-optimization',
        target: 'industrial-engineering'
    },
    {
        source: 'process-optimization',
        target: 'automation'
    },
    {
        source: 'modelling',
        target: 'data-science'
    },
    {
        source: 'modelling',
        target: 'process-engineering'
    },
    {
        source: 'machine-learning',
        target: 'ai'
    },
    {
        source: 'iot',
        target: 'automation'
    },
    {
        source: 'iot',
        target: 'cloud'
    },
    {
        source: 'cybersecurity',
        target: 'software-engineering'
    },
    {
        source: 'robotics',
        target: 'robotics-engineering'
    },
    {
        source: 'robotics',
        target: 'automation'
    },
    {
        source: '3d-printing',
        target: 'materials-engineering'
    },
    {
        source: '3d-printing',
        target: 'automotive'
    },
    {
        source: 'maintenance',
        target: 'industrial-engineering'
    },
    {
        source: 'maintenance',
        target: 'automation'
    },
    {
        source: 'energy-storage',
        target: 'renewable-energy'
    },
    {
        source: 'energy-storage',
        target: 'utilities'
    },
    {
        source: 'biofuels',
        target: 'renewable-energy'
    },
    {
        source: 'biofuels',
        target: 'agriculture'
    },
    {
        source: 'nanotechnology',
        target: 'materials-engineering'
    },
    {
        source: 'nanotechnology',
        target: 'electronics'
    },
    // Challenges connections
    {
        source: 'sustainability',
        target: 'renewables'
    },
    {
        source: 'sustainability',
        target: 'environmental-engineering'
    },
    {
        source: 'climate-change',
        target: 'agriculture'
    },
    {
        source: 'climate-change',
        target: 'water'
    },
    {
        source: 'regulatory-compliance',
        target: 'pharmaceuticals'
    },
    {
        source: 'regulatory-compliance',
        target: 'defence'
    },
    {
        source: 'energy-transition',
        target: 'renewables'
    },
    {
        source: 'energy-transition',
        target: 'energy'
    }
];
}),
"[project]/devlinux/littletuna4.github.io/site/src/styles/palette.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "palette",
    ()=>palette
]);
const palette = {
    light: {
        background: "#f5f3f0",
        foreground: "#0d1b0d",
        primary: "#1a3d1a",
        secondary: "#e8f0e8",
        destructive: "#5d2e0a",
        success: "#1a5a1a",
        warning: "#b8860b",
        info: "#2e5a7a"
    },
    dark: {
        background: "#051405",
        foreground: "#f0f8f0",
        primary: "#5a8a5a",
        secondary: "#0d1b0d",
        destructive: "#daa520",
        success: "#50d050",
        warning: "#ffed4e",
        info: "#a8d8f0"
    }
};
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/Industries/data/getIndustriesGraph.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createIndustryGraph",
    ()=>createIndustryGraph,
    "defaultIndustryGraphConfig",
    ()=>defaultIndustryGraphConfig,
    "getIndustryGraph",
    ()=>getIndustryGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2f$dist$2f$graphology$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology@0.26.0_graphology-types@0.24.8/node_modules/graphology/dist/graphology.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$data$2f$industries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Industries/data/industries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/styles/palette.ts [app-ssr] (ecmascript)");
;
;
;
const defaultIndustryGraphConfig = {
    width: 800,
    height: 600,
    isDark: false
};
function createIndustryGraph(config = defaultIndustryGraphConfig) {
    const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2f$dist$2f$graphology$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    const { width, height, isDark } = config;
    // Add all industry nodes to the graph
    __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$data$2f$industries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodes"].forEach((node)=>{
        // Generate random positions within the canvas bounds
        const x = Math.random() * (width - 100) + 50; // Leave some margin
        const y = Math.random() * (height - 100) + 50;
        graph.addNode(node.id, {
            label: node.label,
            size: node.category.size,
            color: isDark ? node.category.color.dark : node.category.color.light,
            labelColor: {
                attribute: isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].dark.foreground : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].light.foreground
            },
            x,
            y,
            highlighted: false,
            fixed: false,
            pinned: false,
            category: node.category,
            // Add properties for node scaling
            baseSize: node.category.size,
            scaleFactor: Math.max(0.5, Math.min(3, node.category.size / 15))
        });
    });
    // Add all industry edges to the graph
    __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$data$2f$industries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["edges"].forEach((edge)=>{
        // Only add edge if both source and target nodes exist
        if (graph.hasNode(edge.source) && graph.hasNode(edge.target)) {
            graph.addEdge(edge.source, edge.target, {
                color: isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].dark.foreground : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"].light.foreground,
                size: 2,
                weight: 1
            });
        }
    });
    console.log(`Created industry graph with ${graph.order} nodes and ${graph.size} edges`);
    return graph;
}
function getIndustryGraph(isDark = false, width = 800, height = 600) {
    return createIndustryGraph({
        width,
        height,
        isDark
    });
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesGraph.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndustriesGraph",
    ()=>IndustriesGraph,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Functional Requirements:
 * - Industries-specific network graph visualization
 * - Uses BaseGraph component for core functionality
 * - Light and Dark mode support using theme system
 * - Drag and drop functionality for nodes with fixed lock mode
 * - Force layout algorithm only
 * - Responsive design with proper theming
 * - Client-side rendering to prevent SSR issues
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$data$2f$getIndustriesGraph$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Industries/data/getIndustriesGraph.ts [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
// Dynamically import BaseGraph to prevent SSR issues
const BaseGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full min-h-[600px] relative flex items-center justify-center bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-foreground",
                children: "Loading graph..."
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesGraph.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesGraph.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
const IndustriesGraph = ({ minHeight = '500px' })=>{
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedNode, setDraggedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ensure component only renders on client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    // Force layout configuration - optimized for industry networks
    const forceConfig = {
        attraction: 0.0005,
        repulsion: 0.1,
        gravity: 0.0001,
        inertia: 0.6,
        maxMove: 200,
        scalingRatio: 1.5,
        nodeScaling: true,
        nodeProperty: 'size'
    };
    // Generate graph data - memoized to prevent recreation on every render
    const graphData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$data$2f$getIndustriesGraph$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndustryGraph"])(isDark, 800, 600);
    }, [
        isDark
    ]); // Only recreate when theme changes
    // Don't render anything until mounted on client side
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full relative flex items-center justify-center bg-background",
            style: {
                minHeight
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-foreground",
                children: "Loading industries graph..."
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesGraph.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesGraph.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseGraph, {
        graphData: graphData,
        layout: "force",
        isLayoutRunning: true,
        dragMode: true,
        draggedNode: draggedNode,
        setDraggedNode: setDraggedNode,
        dragLockMode: "fixed",
        forceConfig: forceConfig,
        minHeight: minHeight
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesGraph.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
const __TURBOPACK__default__export__ = IndustriesGraph;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndustriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$IndustriesGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesGraph.tsx [app-ssr] (ecmascript)");
;
;
function IndustriesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "industries",
        className: "py-20 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold mb-4",
                            children: "Industries We Connect"
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full bg-card rounded-lg border border-border overflow-hidden shadow-lg h-[600px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$IndustriesGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sonner@2.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const themes = [
    "light",
    "dark",
    "system"
];
const themeIcons = {
    light: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
    dark: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
    system: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"]
};
const themeLabels = {
    light: "Light mode",
    dark: "Dark mode",
    system: "System mode"
};
function ThemeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ensure component is mounted before rendering to prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Don't render until mounted to prevent hydration issues
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-label": "Theme toggle",
            className: "rounded-full p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            type: "button",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/ThemeToggle.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/ThemeToggle.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    // Find the next theme in the cycle
    const nextTheme = ()=>{
        const idx = themes.indexOf(theme ?? "system");
        return themes[(idx + 1) % themes.length];
    };
    const handleToggle = ()=>{
        const newTheme = nextTheme();
        setTheme(newTheme);
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`${themeLabels[newTheme]} enabled`);
    };
    const Icon = themeIcons[theme ?? "system"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleToggle,
        "aria-label": themeLabels[theme ?? "system"],
        className: "rounded-full p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        type: "button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/ThemeToggle.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/ThemeToggle.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb,
    "BreadcrumbEllipsis",
    ()=>BreadcrumbEllipsis,
    "BreadcrumbItem",
    ()=>BreadcrumbItem,
    "BreadcrumbLink",
    ()=>BreadcrumbLink,
    "BreadcrumbList",
    ()=>BreadcrumbList,
    "BreadcrumbPage",
    ()=>BreadcrumbPage,
    "BreadcrumbSeparator",
    ()=>BreadcrumbSeparator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.13_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const Breadcrumb = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: ref,
        "aria-label": "breadcrumb",
        ...props
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
        lineNumber: 12,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0)));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ asChild, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$13_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-colors hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-normal text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&>svg]:size-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
            lineNumber: 86,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
                lineNumber: 101,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "More"
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MetadataBreadcrumb",
    ()=>MetadataBreadcrumb,
    "useBreadcrumbs",
    ()=>useBreadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Default breadcrumb mappings for common routes
const defaultBreadcrumbs = {
    '/partners': [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Partners'
        }
    ],
    '/events': [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Events'
        }
    ],
    '/blog': [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Blog'
        }
    ]
};
function MetadataBreadcrumb({ items, className }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Use provided items or generate from pathname
    const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);
    if (breadcrumbItems.length <= 1) {
        return null; // Don't show breadcrumbs for single items
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Breadcrumb"], {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbList"], {
            children: breadcrumbItems.map((item, index)=>{
                const isLast = index === breadcrumbItems.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
                            children: isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbPage"], {
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
                                lineNumber: 55,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbLink"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href || '#',
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
                                    lineNumber: 58,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
                                lineNumber: 57,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this),
                        !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbSeparator"], {}, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
                            lineNumber: 62,
                            columnNumber: 27
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function generateBreadcrumbsFromPath(pathname) {
    // Check for exact matches first
    if (defaultBreadcrumbs[pathname]) {
        return defaultBreadcrumbs[pathname];
    }
    // Handle dynamic routes
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [
        {
            label: 'Home',
            href: '/'
        }
    ];
    let currentPath = '';
    for(let i = 0; i < pathSegments.length; i++){
        const segment = pathSegments[i];
        currentPath += `/${segment}`;
        // Skip dynamic segments (like [slug])
        if (segment.startsWith('[') && segment.endsWith(']')) {
            continue;
        }
        // Handle known route patterns
        if (segment === 'sponsors') {
            breadcrumbs.push({
                label: 'Sponsors',
                href: currentPath
            });
        } else if (segment === 'events') {
            breadcrumbs.push({
                label: 'Events',
                href: currentPath
            });
        } else if (segment === 'blog') {
            breadcrumbs.push({
                label: 'Blog',
                href: currentPath
            });
        } else {
            // For dynamic segments, we'll need to get the actual name
            // This would typically come from the page's metadata or props
            breadcrumbs.push({
                label: formatSegmentName(segment)
            });
        }
    }
    return breadcrumbs;
}
function formatSegmentName(segment) {
    // Convert kebab-case to Title Case
    return segment.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function useBreadcrumbs(pageTitle, pageType) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // If we have a page title, use it for the last breadcrumb
    if (pageTitle && pageType) {
        const baseBreadcrumbs = generateBreadcrumbsFromPath(pathname);
        // Replace the last item with the actual page title
        if (baseBreadcrumbs.length > 0) {
            baseBreadcrumbs[baseBreadcrumbs.length - 1] = {
                label: pageTitle
            };
        }
        return baseBreadcrumbs;
    }
    return generateBreadcrumbsFromPath(pathname);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/structured-breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StructuredBreadcrumb",
    ()=>StructuredBreadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$metadata$2d$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function StructuredBreadcrumb({ items, className }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Use provided items or generate from pathname
    const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);
    if (breadcrumbItems.length <= 1) {
        return null; // Don't show breadcrumbs for single items
    }
    // Generate structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index)=>({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.label,
                "item": item.href ? `${process.env.NEXT_PUBLIC_APP_URL || 'https://ytp-net.github.io'}${item.href}` : undefined
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(structuredData)
                }
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/structured-breadcrumb.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$metadata$2d$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MetadataBreadcrumb"], {
                items: breadcrumbItems,
                className: className
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/structured-breadcrumb.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function generateBreadcrumbsFromPath(pathname) {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [
        {
            label: 'Home',
            href: '/'
        }
    ];
    let currentPath = '';
    for(let i = 0; i < pathSegments.length; i++){
        const segment = pathSegments[i];
        currentPath += `/${segment}`;
        // Skip dynamic segments (like [slug])
        if (segment.startsWith('[') && segment.endsWith(']')) {
            continue;
        }
        // Handle known route patterns
        if (segment === 'sponsors') {
            breadcrumbs.push({
                label: 'Sponsors',
                href: currentPath
            });
        } else if (segment === 'events') {
            breadcrumbs.push({
                label: 'Events',
                href: currentPath
            });
        } else if (segment === 'blog') {
            breadcrumbs.push({
                label: 'Blog',
                href: currentPath
            });
        } else {
            // For dynamic segments, we'll need to get the actual name
            // This would typically come from the page's metadata or props
            breadcrumbs.push({
                label: formatSegmentName(segment)
            });
        }
    }
    return breadcrumbs;
}
function formatSegmentName(segment) {
    // Convert kebab-case to Title Case
    return segment.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/icons/Icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base Icon Component
 * 
 * Functional Requirements:
 * - Provides consistent styling and sizing for all icon components
 * - Integrates with the theme system for automatic light/dark mode support
 * - Supports customizable colors through theme-aware CSS classes
 * - Maintains accessibility with proper ARIA attributes
 * - Provides responsive sizing options
 * - Supports custom className overrides while maintaining theme consistency
 */ __turbopack_context__.s([
    "Icon",
    ()=>Icon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const sizeMap = {
    xs: 12,
    sm: 16,
    default: 20,
    lg: 24,
    xl: 32,
    '2xl': 40
};
const colorMap = {
    current: 'text-current',
    primary: 'text-primary',
    secondary: 'text-secondary',
    muted: 'text-muted-foreground',
    destructive: 'text-destructive',
    success: 'text-success',
    warning: 'text-warning',
    info: 'text-info'
};
const Icon = ({ size = 'default', color = 'current', className, inheritColor = true, children, ...props })=>{
    const sizeValue = typeof size === 'number' ? size : sizeMap[size];
    const colorClass = inheritColor ? colorMap[color] : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: sizeValue,
        height: sizeValue,
        viewBox: "0 0 30 30",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-block transition-colors duration-300', colorClass, className),
        "aria-hidden": "true",
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/Icon.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Icon;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * LinkedIn Icon Component
 * 
 * Functional Requirements:
 * - Renders the LinkedIn logo as a theme-aware React component
 * - Integrates with the theme system for automatic light/dark mode support
 * - Supports customizable sizing and colors through the base Icon component
 * - Maintains accessibility with proper ARIA attributes
 * - Provides consistent styling with other icon components
 * - Uses semantic color classes for theme integration
 */ __turbopack_context__.s([
    "LinkedInIcon",
    ()=>LinkedInIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/icons/Icon.tsx [app-ssr] (ecmascript)");
;
;
const LinkedInIcon = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.3,3.7c0,1.4-0.9,2.6-2.7,2.6C4,6.3,3,5.2,3,3.7C3,2.3,4,1,5.7,1S8.3,2.2,8.3,3.7z M3,25V7.7h5.3V25H3z"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11,13.6c0-2.1-0.1-3.8-0.1-5.3h4.8l0.2,2.3H16C16.7,9.5,18.3,8,21.1,8c3.4,0,5.9,2.3,5.9,7.1V25h-5.3v-9.1 c0-2.1-0.8-3.7-2.7-3.7c-1.4,0-2.1,1.1-2.5,2.1c-0.1,0.3-0.2,0.8-0.2,1.3V25H11V13.6z"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LinkedInIcon;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/icons/FacebookIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Facebook Icon Component
 * 
 * Functional Requirements:
 * - Renders the Facebook logo as a theme-aware React component
 * - Integrates with the theme system for automatic light/dark mode support
 * - Supports customizable sizing and colors through the base Icon component
 * - Maintains accessibility with proper ARIA attributes
 * - Provides consistent styling with other icon components
 * - Uses semantic color classes for theme integration
 */ __turbopack_context__.s([
    "FacebookIcon",
    ()=>FacebookIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/icons/Icon.tsx [app-ssr] (ecmascript)");
;
;
const FacebookIcon = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26,1H5C3.3,1,2,2.3,2,4v21c0,1.7,1.3,3,3,3h10.5V17.5h-3v-3.7h3v-3.1c0-3.2,1.8-5.5,5.6-5.5l2.7,0v3.9h-1.8 c-1.5,0-2.1,1.1-2.1,2.2v2.5h3.9L23,17.5h-3V28h6c1.7,0,3-1.3,3-3V4C29,2.3,27.7,1,26,1z"
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/FacebookIcon.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/FacebookIcon.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/icons/FacebookIcon.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FacebookIcon;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICalDownloadButton",
    ()=>ICalDownloadButton,
    "MultipleEventsICalButton",
    ()=>MultipleEventsICalButton,
    "SingleEventICalButton",
    ()=>SingleEventICalButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
(()=>{
    const e = new Error("Cannot find module '@/db/typesAndFunctions/eventUtils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
function ICalDownloadButton({ event, events, variant = 'single', className = '', children }) {
    const handleDownload = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        try {
            if (variant === 'single' && event) {
                downloadEventICalFile(event);
            } else if (variant === 'multiple' && events) {
                downloadMultipleEventsICalFile(events);
            } else if (variant === 'all' && events) {
                downloadMultipleEventsICalFile(events, 'ytpn-all-events.ics');
            }
        } catch (error) {
            console.error('Failed to download iCal file:', error);
        // In a production app, you might want to show a toast notification here
        }
    };
    const getButtonText = ()=>{
        if (children) return children;
        switch(variant){
            case 'single':
                return 'Add to Calendar';
            case 'multiple':
                return 'Download All Events';
            case 'all':
                return 'Download All Events';
            default:
                return 'Add to Calendar';
        }
    };
    const getIcon = ()=>{
        return variant === 'single' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx",
            lineNumber: 64,
            columnNumber: 35
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx",
            lineNumber: 64,
            columnNumber: 70
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleDownload,
        "data-prevent-navigation": true,
        className: `
        inline-flex items-center gap-2 px-4 py-2 
        bg-primary text-primary-foreground 
        rounded-lg font-medium text-sm
        hover:bg-primary/90 
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `,
        disabled: !event && !events,
        title: `Download ${variant === 'single' ? 'event' : 'events'} as iCal file`,
        children: [
            getIcon(),
            getButtonText()
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
function SingleEventICalButton({ event, className = '', children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ICalDownloadButton, {
        event: event,
        variant: "single",
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function MultipleEventsICalButton({ events, className = '', children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ICalDownloadButton, {
        events: events,
        variant: "multiple",
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ui/DropdownMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuItem",
    ()=>DropdownMenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * FUNCTIONAL REQUIREMENTS:
 * - Dropdown menu component following shadcn/ui patterns
 * - Proper z-index layering for overlays
 * - Click outside to close functionality
 * - Keyboard navigation support (Escape key)
 * - Accessible ARIA attributes
 * - Theme system integration
 * - Portal rendering for proper layering
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function DropdownMenu({ trigger, children, align = 'end', side = 'bottom', className = '', triggerClassName = '' }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Calculate dropdown position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && triggerRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            let top = triggerRect.bottom;
            let left = triggerRect.left;
            // Adjust for side
            if (side === 'top') {
                top = triggerRect.top - 8; // 8px gap
            } else {
                top = triggerRect.bottom + 8; // 8px gap
            }
            // Adjust for alignment
            if (align === 'end') {
                left = triggerRect.right - 192; // 192px = w-48
            } else if (align === 'center') {
                left = triggerRect.left + triggerRect.width / 2 - 96; // 96px = w-48/2
            }
            // Ensure dropdown stays within viewport
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const dropdownWidth = 192; // w-48
            const dropdownHeight = 200; // estimated height
            // Horizontal positioning
            if (left + dropdownWidth > viewportWidth) {
                left = viewportWidth - dropdownWidth - 16; // 16px margin
            }
            if (left < 16) {
                left = 16; // 16px margin
            }
            // Vertical positioning
            if (side === 'bottom' && top + dropdownHeight > viewportHeight) {
                // If dropdown would go off bottom, show above instead
                top = triggerRect.top - dropdownHeight - 8;
            } else if (side === 'top' && top < 0) {
                // If dropdown would go off top, show below instead
                top = triggerRect.bottom + 8;
            }
            setPosition({
                top,
                left
            });
        }
    }, [
        isOpen,
        align,
        side
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (triggerRef.current && dropdownRef.current && !triggerRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        isOpen
    ]);
    // Close dropdown on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleEscape(event) {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }
        return ()=>{
            document.removeEventListener('keydown', handleEscape);
        };
    }, [
        isOpen
    ]);
    const handleTriggerClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: triggerRef,
                className: `inline-block ${triggerClassName}`,
                onClick: handleTriggerClick,
                children: trigger
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/DropdownMenu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            isOpen && "undefined" !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dropdownRef,
                className: `
            fixed z-[100] w-48 bg-card border border-border rounded-lg shadow-lg
            ${side === 'top' ? 'animate-in slide-in-from-bottom-2' : 'animate-in slide-in-from-top-2'}
            ${className}
          `,
                style: {
                    top: `${position.top}px`,
                    left: `${position.left}px`
                },
                role: "menu",
                "aria-orientation": "vertical",
                children: children
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/DropdownMenu.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this), document.body)
        ]
    }, void 0, true);
}
function DropdownMenuItem({ children, onClick, className = '', disabled = false }) {
    const handleClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        onClick?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        disabled: disabled,
        className: `
        w-full flex items-center text-left px-3 py-2 text-sm
        hover:bg-background-secondary transition-colors
        focus:outline-none focus:bg-background-secondary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `,
        role: "menuitem",
        children: children
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/DropdownMenu.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `py-1 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ui/DropdownMenu.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareButton",
    ()=>ShareButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * FUNCTIONAL REQUIREMENTS:
 * - Share button with dropdown menu for multiple sharing options
 * - Copy link functionality with visual feedback
 * - Email sharing with pre-filled subject and body
 * - Social media sharing options (Twitter, LinkedIn, Facebook)
 * - Accessible dropdown with keyboard navigation
 * - Responsive design that works on mobile and desktop
 * - Theme system integration with proper contrast
 * - Click outside to close dropdown functionality
 * - Visual feedback for successful actions (copy, share)
 * - Proper z-index layering using shadcn/ui patterns
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$DropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/DropdownMenu.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ShareButton({ eventTitle, eventUrl, eventDate, eventLocation, className = '', size = 'md' }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(eventUrl);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };
    const handleEmailShare = ()=>{
        const subject = encodeURIComponent(`Check out this event: ${eventTitle}`);
        const body = encodeURIComponent(`I thought you might be interested in this event:\n\n${eventTitle}\n\n` + `${eventDate ? `Date: ${eventDate}\n` : ''}` + `${eventLocation ? `Location: ${eventLocation}\n` : ''}` + `\nMore details: ${eventUrl}`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
    };
    const handleTwitterShare = ()=>{
        const text = encodeURIComponent(`Check out this event: ${eventTitle}`);
        const url = encodeURIComponent(eventUrl);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    };
    const handleLinkedInShare = ()=>{
        const url = encodeURIComponent(eventUrl);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    };
    const handleFacebookShare = ()=>{
        const url = encodeURIComponent(eventUrl);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };
    const sizeClasses = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base'
    };
    const iconSizes = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    };
    const shareButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "data-prevent-navigation": true,
        className: `
        ${sizeClasses[size]}
        inline-flex items-center justify-center
        bg-background-secondary text-foreground-secondary
        border border-border rounded-lg
        hover:bg-background-tertiary hover:text-foreground
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
      `,
        "aria-label": "Share event",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
            className: iconSizes[size]
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$DropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            trigger: shareButton,
            align: "end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$DropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$DropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleCopyLink,
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: `${iconSizes[size]} mr-3 text-success`
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-success",
                                    children: "Copied!"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: `${iconSizes[size]} mr-3`
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Copy Link"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$DropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleEmailShare,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                className: `${iconSizes[size]} mr-3`
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StandardEventCard",
    ()=>StandardEventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * EVENT PROPAGATION HANDLING:
 * 
 * This component contains nested interactive elements (buttons, links) within clickable containers.
 * Proper event propagation handling is critical to prevent unintended navigation when users
 * interact with nested elements. Key principles:
 * 
 * 1. Interactive elements (buttons, links) use e.stopPropagation() to prevent parent click handlers
 * 2. Modal triggers must prevent card navigation when opened
 * 3. External links should not trigger parent navigation
 * 4. Form submissions should not bubble up to parent containers
 * 
 * This pattern ensures users can interact with specific elements without accidentally triggering
 * parent navigation or other unintended behaviors.
 */ /**
 * FUNCTIONAL REQUIREMENTS:
 * - Standard event card for main content areas and event listings
 * - Comprehensive information display with all available details
 * - Balanced layout with good visual hierarchy
 * - Support for images, tags, sponsors, and organizers
 * - Interactive elements with hover states
 * - Responsive design optimized for desktop and tablet
 * - Full theme system integration
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/lib/date-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ICalDownloadButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ShareButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/db/app'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/NominationForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function StandardEventCard({ event, className = '', onClick }) {
    const typeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventTypeConfig"][event.eventType];
    const { date, time } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEventDateTime"])(event.date);
    const [isNominationModalOpen, setIsNominationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generate the event URL for sharing
    const eventUrl = event.slug ? `${APP_CONSTS.APP_URL}/events/${getEventSlug(event)}` : event.link || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '');
    // Create the card content
    const cardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeConfig.color} ${typeConfig.textColor}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: typeConfig.icon
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            typeConfig.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    event.isVirtual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-foreground-tertiary bg-background-tertiary px-2 py-1 rounded",
                        children: "Virtual"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            event.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 rounded-md overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: event.image,
                    alt: event.title,
                    className: "w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors",
                children: event.title
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base text-foreground-secondary mb-4 line-clamp-3",
                children: event.description
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-4 h-4 mr-2 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: date
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-4 h-4 mr-2 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-4 h-4 mr-2 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: event.location
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    event.capacity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-4 h-4 mr-2 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Capacity: ",
                                    event.capacity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            event.tags && event.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1 mb-4",
                children: [
                    event.tags.slice(0, 3).map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center px-2 py-1 rounded text-xs bg-background-tertiary text-foreground-tertiary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                tag
                            ]
                        }, index, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)),
                    event.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-foreground-tertiary",
                        children: [
                            "+",
                            event.tags.length - 3,
                            " more"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            event.sponsors && event.sponsors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-xs text-foreground-tertiary mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                className: "w-3 h-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sponsored by:"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: [
                            event.sponsors.slice(0, 2).map((sponsor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: sponsor.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20 transition-colors",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: sponsor.name
                                }, index, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)),
                            event.sponsors.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-foreground-tertiary",
                                children: [
                                    "+",
                                    event.sponsors.length - 2,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            event.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-semibold text-primary",
                    children: event.price
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ICalDownloadButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleEventICalButton"], {
                                event: event,
                                className: "bg-background-secondary text-foreground border border-border hover:bg-background-tertiary text-xs px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ShareButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShareButton"], {
                                eventTitle: event.title,
                                eventUrl: eventUrl,
                                eventDate: date,
                                eventLocation: event.location,
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            event.showNominationForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsNominationModalOpen(true);
                                },
                                className: "inline-flex items-center gap-1 bg-accent text-accent-foreground border border-accent hover:bg-accent/90 text-xs px-3 py-2 rounded transition-colors",
                                title: "Nominate a speaker for this event",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    "Nominate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    event.link && !event.slug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: event.link,
                        className: "inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            "Learn More",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-4 h-4 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    // If event has a slug, wrap the entire card in a Link
    if (event.slug) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/events/${getEventSlug(event)}`,
                    className: "block",
                    onClick: (e)=>{
                        // Check if the click originated from an interactive element that should prevent navigation
                        const target = e.target;
                        const isInteractiveElement = target.closest('[data-prevent-navigation]');
                        if (isInteractiveElement) {
                            e.preventDefault();
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
              bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md 
              transition-all duration-300 cursor-pointer group overflow-hidden
              max-w-md w-full
              ${className}
            `,
                        role: "button",
                        tabIndex: 0,
                        children: cardContent
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                event.showNominationForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isNominationModalOpen,
                    onClose: ()=>setIsNominationModalOpen(false),
                    title: "Nominate a Speaker",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                        lineNumber: 255,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true);
    }
    // Fallback for events without slugs - use onClick handler
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md 
          transition-all duration-300 cursor-pointer group overflow-hidden
          max-w-md w-full
          ${className}
        `,
                onClick: onClick,
                role: "button",
                tabIndex: 0,
                onKeyDown: (e)=>{
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onClick?.();
                    }
                },
                children: cardContent
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            event.showNominationForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isNominationModalOpen,
                onClose: ()=>setIsNominationModalOpen(false),
                title: "Nominate a Speaker",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                    lineNumber: 292,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedEventCard",
    ()=>FeaturedEventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * EVENT PROPAGATION HANDLING:
 *
 * This component contains nested interactive elements (buttons, links) within clickable containers.
 * Proper event propagation handling is critical to prevent unintended navigation when users
 * interact with nested elements. Key principles:
 *
 * 1. Interactive elements (buttons, links) use e.stopPropagation() to prevent parent click handlers
 * 2. Modal triggers must prevent card navigation when opened
 * 3. External links should not trigger parent navigation
 * 4. Form submissions should not bubble up to parent containers
 *
 * This pattern ensures users can interact with specific elements without accidentally triggering
 * parent navigation or other unintended behaviors.
 */ /**
 * FUNCTIONAL REQUIREMENTS:
 * - Featured event card for hero sections and prominent displays
 * - Large, visually striking layout with emphasis on imagery
 * - Comprehensive information display with enhanced visual hierarchy
 * - Support for all event data including organizers and detailed content
 * - Premium styling with enhanced hover effects and animations
 * - Optimized for desktop viewing with responsive mobile adaptation
 * - Full theme system integration with enhanced visual appeal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/lib/date-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ICalDownloadButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ICalDownloadButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ShareButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ShareButton.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db/typesAndFunctions/eventUtils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/db/app'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/NominationForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function FeaturedEventCard({ event, className = '', onClick }) {
    const typeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventTypeConfig"][event.eventType];
    const { date, time } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEventDateTime"])(event.date);
    const [isNominationModalOpen, setIsNominationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generate the event URL for sharing
    const eventUrl = event.slug ? `${APP_CONSTS.APP_URL}/events/${getEventSlug(event)}` : event.link || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '');
    // Create the card content
    const cardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${typeConfig.color} ${typeConfig.textColor}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2 text-base",
                                children: typeConfig.icon
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            typeConfig.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    event.isVirtual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-foreground-tertiary bg-background-tertiary px-3 py-1 rounded-full",
                        children: "Virtual Event"
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            event.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: event.image,
                    alt: event.title,
                    className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors",
                children: event.title
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-foreground-secondary mb-6 line-clamp-4 leading-relaxed",
                children: event.description
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "w-5 h-5 mr-3 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: date
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-5 h-5 mr-3 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary sm:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-5 h-5 mr-3 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: event.location
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    event.capacity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary sm:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-5 h-5 mr-3 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    "Capacity: ",
                                    event.capacity,
                                    " attendees"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            event.tags && event.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        event.tags.slice(0, 4).map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center px-3 py-1 rounded-full text-sm bg-background-tertiary text-foreground-tertiary border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    tag
                                ]
                            }, index, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)),
                        event.tags.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-foreground-tertiary self-center",
                            children: [
                                "+",
                                event.tags.length - 4,
                                " more"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                            lineNumber: 143,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this),
            event.sponsors && event.sponsors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Sponsored by:"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            event.sponsors.slice(0, 3).map((sponsor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: sponsor.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: sponsor.name
                                }, index, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)),
                            event.sponsors.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-foreground-tertiary self-center",
                                children: [
                                    "+",
                                    event.sponsors.length - 3,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            event.organizers && event.organizers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-sm text-foreground-tertiary mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Organized by:"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            event.organizers.slice(0, 2).map((organizer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20",
                                    children: organizer
                                }, index, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this)),
                            event.organizers.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-foreground-tertiary self-center",
                                children: [
                                    "+",
                                    event.organizers.length - 2,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            event.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold text-primary",
                    children: event.price
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 207,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ICalDownloadButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SingleEventICalButton"], {
                                event: event,
                                className: "bg-background-secondary text-foreground border border-border hover:bg-background-tertiary"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ShareButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShareButton"], {
                                eventTitle: event.title,
                                eventUrl: eventUrl,
                                eventDate: date,
                                eventLocation: event.location,
                                size: "md"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            event.showNominationForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsNominationModalOpen(true);
                                },
                                className: "inline-flex items-center gap-2 bg-accent text-accent-foreground border border-accent hover:bg-accent/90 px-4 py-2 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md",
                                title: "Nominate a speaker for this event",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    "Nominate Speaker"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    event.link && !event.slug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: event.link,
                        className: "inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            "Learn More",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-5 h-5 ml-2"
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    // If event has a slug, wrap the entire card in a Link
    if (event.slug) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/events/${getEventSlug(event)}`,
                    className: "block",
                    onClick: (e)=>{
                        // Check if the click originated from an interactive element that should prevent navigation
                        const target = e.target;
                        const isInteractiveElement = target.closest('[data-prevent-navigation]');
                        if (isInteractiveElement) {
                            e.preventDefault();
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
              bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl 
              transition-all duration-500 cursor-pointer group overflow-hidden
              max-w-lg w-full transform hover:-translate-y-1
              ${className}
            `,
                        role: "button",
                        tabIndex: 0,
                        children: cardContent
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this),
                event.showNominationForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isNominationModalOpen,
                    onClose: ()=>setIsNominationModalOpen(false),
                    title: "Nominate a Speaker",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true);
    }
    // Fallback for events without slugs - use onClick handler
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl 
          transition-all duration-500 cursor-pointer group overflow-hidden
          max-w-lg w-full transform hover:-translate-y-1
          ${className}
        `,
                onClick: onClick,
                role: "button",
                tabIndex: 0,
                onKeyDown: (e)=>{
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onClick?.();
                    }
                },
                children: cardContent
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            event.showNominationForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isNominationModalOpen,
                onClose: ()=>setIsNominationModalOpen(false),
                title: "Nominate a Speaker",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$NominationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                    lineNumber: 337,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx",
                lineNumber: 332,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventTypeConfig",
    ()=>eventTypeConfig
]);
// Export specialized event card components
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventCard$2f$StandardEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/StandardEventCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventCard$2f$FeaturedEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/FeaturedEventCard.tsx [app-ssr] (ecmascript)");
'use client';
const eventTypeConfig = {
    all: {
        color: 'bg-background-tertiary',
        textColor: 'text-foreground-tertiary',
        icon: '📅',
        label: 'All Events'
    },
    conference: {
        color: 'bg-primary',
        textColor: 'text-primary-foreground',
        icon: '🎯',
        label: 'Conference'
    },
    workshop: {
        color: 'bg-accent',
        textColor: 'text-accent-foreground',
        icon: '🛠️',
        label: 'Workshop'
    },
    meetup: {
        color: 'bg-success',
        textColor: 'text-success-foreground',
        icon: '👥',
        label: 'Meetup'
    },
    networking: {
        color: 'bg-info',
        textColor: 'text-info-foreground',
        icon: '🤝',
        label: 'Networking'
    },
    seminar: {
        color: 'bg-warning',
        textColor: 'text-warning-foreground',
        icon: '📚',
        label: 'Seminar'
    },
    hackathon: {
        color: 'bg-destructive',
        textColor: 'text-destructive-foreground',
        icon: '💻',
        label: 'Hackathon'
    },
    panel: {
        color: 'bg-primary-600',
        textColor: 'text-primary-foreground',
        icon: '🎤',
        label: 'Panel'
    },
    keynote: {
        color: 'bg-primary-800',
        textColor: 'text-primary-foreground',
        icon: '⭐',
        label: 'Keynote'
    },
    social: {
        color: 'bg-background-tertiary',
        textColor: 'text-foreground-tertiary',
        icon: '🎉',
        label: 'Social'
    }
};
;
;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ParticipateSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ParticipateSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/AboutSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$PartnerSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/PartnerSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$JoinForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/JoinForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$forms$2f$BaseEmbedableForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/forms/BaseEmbedableForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$BlogSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ProcessSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ProcessSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$FocusAreasSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/FocusAreasSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ClientsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ClientsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/EventsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$TypewriterAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Industries$2f$IndustriesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx [app-ssr] (ecmascript)");
// Theme components
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ClientThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/providers/ClientThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$SimpleThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx [app-ssr] (ecmascript)");
// UI components
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$metadata$2d$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/metadata-breadcrumb.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$structured$2d$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/structured-breadcrumb.tsx [app-ssr] (ecmascript)");
// MDX components are now handled by @next/mdx automatically via mdx-components.tsx
// Icon components
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/icons/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$LinkedInIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$FacebookIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/icons/FacebookIcon.tsx [app-ssr] (ecmascript)");
// Event Card components
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$EventCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/EventCard/index.tsx [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$SimpleThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/ui/SimpleThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$LinkedInIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/icons/LinkedInIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$FacebookIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/icons/FacebookIcon.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/db/app'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-background-tertiary text-foreground py-12 border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-4 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center mb-4 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.png",
                                            alt: APP_CONSTS.APP_NAME,
                                            width: 40,
                                            height: 40,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-foreground",
                                            children: APP_CONSTS.APP_SHORTNAME
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground-secondary mb-4",
                                    children: [
                                        APP_CONSTS.APP_DESCRIPTION,
                                        " - A Brisbane-based network of thinkers and builders passionate about solving technical problems together."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `mailto:${APP_CONSTS.APP_CONTACT_EMAIL}`,
                                            className: "flex items-center text-foreground-secondary hover:text-foreground transition-colors gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: " h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this),
                                                APP_CONSTS.APP_CONTACT_EMAIL
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        APP_CONSTS.APP_CONTACT_PHONE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `tel:${APP_CONSTS.APP_CONTACT_PHONE}`,
                                            className: "flex items-center text-foreground-secondary hover:text-foreground transition-colors gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: " h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                APP_CONSTS.APP_CONTACT_PHONE
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-foreground-secondary gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: " h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                "Brisbane, Australia"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        APP_CONSTS.APP_LINKEDIN && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: APP_CONSTS.APP_LINKEDIN,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-foreground-secondary hover:text-foreground transition-colors flex items-center gap-2",
                                            "aria-label": "Visit our LinkedIn page",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$LinkedInIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedInIcon"], {
                                                    size: 20,
                                                    color: "current",
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                ' ',
                                                "Follow us on LinkedIn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        APP_CONSTS.APP_FACEBOOK && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: APP_CONSTS.APP_FACEBOOK,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-foreground-secondary hover:text-foreground transition-colors",
                                            "aria-label": "Visit our Facebook page",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$FacebookIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                                                size: 20,
                                                color: "current",
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4 text-foreground",
                                    children: "Get Involved"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/events",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Events"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sponsors",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Sponsors"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#services",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Participate"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4 text-foreground",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#about",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#services",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Membership"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#services",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Committee Registration"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#services",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Speaker Nominations"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-foreground-muted text-sm mb-4 md:mb-0",
                            children: [
                                "© Copyright 2025 ",
                                APP_CONSTS.APP_NAME,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                APP_CONSTS?.APP_ABN && `ABN: ${APP_CONSTS.APP_ABN}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$SimpleThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2b9bf01b._.js.map