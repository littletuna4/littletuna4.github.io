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
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/data/app.ts [app-ssr] (ecmascript)");
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
                                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_NAME || '',
                                    width: 220,
                                    height: 60,
                                    className: "h-12 w-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_NAME
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
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_CONTACT_PHONE}`,
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
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$SimpleThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_CONTACT_EMAIL}`,
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
                        lineNumber: 30,
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
    ()=>TypewriterAnimation,
    "professions",
    ()=>professions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const professions = [
    'engineers',
    'scientists',
    'technologists',
    'it professionals',
    'geologists',
    'mathematicians',
    'chemists',
    'web developers',
    'biologists',
    'doctors',
    'healthtech',
    'data analysts',
    'software engineers',
    'cybersecurity specialists',
    'mechanical engineers',
    'electrical engineers',
    'civil engineers',
    'environmental scientists',
    'project managers',
    'product designers',
    'automation specialists',
    'systems engineers',
    'researchers',
    'biomedical engineers',
    'process engineers',
    'materials scientists',
    'robotics engineers',
    'ux/ui designers',
    'machine learning engineers',
    'aerospace engineers',
    'industrial designers',
    'energy consultants',
    'mining engineers',
    'quality assurance specialists',
    'technical writers',
    'data scientists',
    'ai researchers',
    'chemical engineers',
    'environmental consultants',
    'network administrators',
    'database engineers',
    'mechanics',
    'mechatronics engineers',
    'medical researchers',
    'software architects',
    'construction managers',
    'statisticians',
    'optical engineers',
    'marine scientists',
    'agronomists',
    'urban planners',
    'hydrologists',
    'ecologists',
    'geneticists'
];
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
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/TypewriterAnimation.tsx",
        lineNumber: 145,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/data/app.ts [app-ssr] (ecmascript)");
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
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_NAME
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
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 20,
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
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/reps",
                                        className: "text-primary hover:text-primary/80 px-8 py-4 font-semibold transition-colors text-center",
                                        children: "Reps"
                                    }, void 0, false, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/join",
                                        className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-center",
                                        children: [
                                            "Join ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_SHORTNAME
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 30,
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
                                    src: "assets/headshots/anthony-cerqui.png",
                                    alt: "Hero Image",
                                    width: 500,
                                    height: 500,
                                    priority: true,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx",
                        lineNumber: 51,
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
        id: 'industrial-design',
        label: 'Industrial Design',
        category: categoryInfo.discipline
    },
    {
        id: 'systems-engineering',
        label: 'Systems Engineering',
        category: categoryInfo.discipline
    },
    {
        id: 'statistics',
        label: 'Statistics',
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
    {
        id: 'excel',
        label: 'Excel',
        category: categoryInfo.tool
    },
    {
        id: 'docker',
        label: 'Docker',
        category: categoryInfo.tool
    },
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
    }
];
// Create a Set of all present node IDs for efficient lookup
const presentNodeIds = new Set(nodes.map((node)=>node.id));
// Filter edges to only include those where both source and target nodes exist
const allEdges = [
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
    // Discipline links - Chemical and Process Engineering as hubs
    {
        source: 'process-engineering',
        target: 'chemical-engineering'
    },
    {
        source: 'process-engineering',
        target: 'mechanical-engineering'
    },
    {
        source: 'process-engineering',
        target: 'electrical-engineering'
    },
    {
        source: 'process-engineering',
        target: 'systems-engineering'
    },
    {
        source: 'process-engineering',
        target: 'data-science'
    },
    {
        source: 'process-engineering',
        target: 'chemicals'
    },
    {
        source: 'process-engineering',
        target: 'pharmaceuticals'
    },
    {
        source: 'process-engineering',
        target: 'energy'
    },
    {
        source: 'process-engineering',
        target: 'oil-and-gas'
    },
    {
        source: 'process-engineering',
        target: 'food-and-beverage'
    },
    {
        source: 'process-engineering',
        target: 'utilities'
    },
    {
        source: 'process-engineering',
        target: 'modelling'
    },
    {
        source: 'process-engineering',
        target: 'automation'
    },
    {
        source: 'process-engineering',
        target: 'process-optimization'
    },
    {
        source: 'process-engineering',
        target: 'digital-twins'
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
        source: 'chemical-engineering',
        target: 'pharmaceuticals'
    },
    {
        source: 'chemical-engineering',
        target: 'energy'
    },
    {
        source: 'chemical-engineering',
        target: 'oil-and-gas'
    },
    {
        source: 'chemical-engineering',
        target: 'food-and-beverage'
    },
    {
        source: 'chemical-engineering',
        target: 'utilities'
    },
    {
        source: 'chemical-engineering',
        target: 'water'
    },
    {
        source: 'chemical-engineering',
        target: 'renewables'
    },
    {
        source: 'chemical-engineering',
        target: 'mechanical-engineering'
    },
    {
        source: 'chemical-engineering',
        target: 'process-engineering'
    },
    {
        source: 'chemical-engineering',
        target: 'data-science'
    },
    {
        source: 'chemical-engineering',
        target: 'systems-engineering'
    },
    {
        source: 'chemical-engineering',
        target: 'modelling'
    },
    {
        source: 'chemical-engineering',
        target: 'automation'
    },
    {
        source: 'chemical-engineering',
        target: 'carbon-capture'
    },
    {
        source: 'chemical-engineering',
        target: 'process-optimization'
    },
    {
        source: 'chemical-engineering',
        target: 'biofuels'
    },
    {
        source: 'chemical-engineering',
        target: 'digital-twins'
    },
    // Other engineering discipline connections
    {
        source: 'mechanical-engineering',
        target: 'process-engineering'
    },
    {
        source: 'mechanical-engineering',
        target: 'electrical-engineering'
    },
    {
        source: 'mechanical-engineering',
        target: 'systems-engineering'
    },
    {
        source: 'mechanical-engineering',
        target: 'energy'
    },
    {
        source: 'mechanical-engineering',
        target: 'mining'
    },
    {
        source: 'mechanical-engineering',
        target: 'renewables'
    },
    {
        source: 'mechanical-engineering',
        target: 'automation'
    },
    {
        source: 'mechanical-engineering',
        target: 'maintenance'
    },
    {
        source: 'electrical-engineering',
        target: 'automation'
    },
    {
        source: 'electrical-engineering',
        target: 'mechanical-engineering'
    },
    {
        source: 'electrical-engineering',
        target: 'systems-engineering'
    },
    {
        source: 'electrical-engineering',
        target: 'process-engineering'
    },
    {
        source: 'electrical-engineering',
        target: 'energy'
    },
    {
        source: 'electrical-engineering',
        target: 'utilities'
    },
    {
        source: 'electrical-engineering',
        target: 'renewables'
    },
    {
        source: 'electrical-engineering',
        target: 'iot'
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
        source: 'software-engineering',
        target: 'data-science'
    },
    {
        source: 'software-engineering',
        target: 'systems-engineering'
    },
    {
        source: 'software-engineering',
        target: 'process-engineering'
    },
    {
        source: 'software-engineering',
        target: 'automation'
    },
    {
        source: 'software-engineering',
        target: 'modelling'
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
        source: 'data-science',
        target: 'process-engineering'
    },
    {
        source: 'data-science',
        target: 'chemical-engineering'
    },
    {
        source: 'data-science',
        target: 'modelling'
    },
    {
        source: 'data-science',
        target: 'machine-learning'
    },
    {
        source: 'data-science',
        target: 'process-optimization'
    },
    {
        source: 'systems-engineering',
        target: 'software-engineering'
    },
    {
        source: 'systems-engineering',
        target: 'process-engineering'
    },
    {
        source: 'systems-engineering',
        target: 'chemical-engineering'
    },
    {
        source: 'systems-engineering',
        target: 'mechanical-engineering'
    },
    {
        source: 'systems-engineering',
        target: 'electrical-engineering'
    },
    {
        source: 'systems-engineering',
        target: 'automation'
    },
    {
        source: 'systems-engineering',
        target: 'modelling'
    },
    {
        source: 'industrial-design',
        target: 'process-engineering'
    },
    {
        source: 'industrial-design',
        target: 'mechanical-engineering'
    },
    {
        source: 'statistics',
        target: 'data-science'
    },
    {
        source: 'statistics',
        target: 'process-engineering'
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
    // Topics connections - enhanced with engineering hubs
    {
        source: 'carbon-capture',
        target: 'energy'
    },
    {
        source: 'carbon-capture',
        target: 'chemical-engineering'
    },
    {
        source: 'carbon-capture',
        target: 'process-engineering'
    },
    {
        source: 'automation',
        target: 'electrical-engineering'
    },
    {
        source: 'automation',
        target: 'process-engineering'
    },
    {
        source: 'automation',
        target: 'chemical-engineering'
    },
    {
        source: 'automation',
        target: 'mechanical-engineering'
    },
    {
        source: 'automation',
        target: 'systems-engineering'
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
        source: 'ai',
        target: 'process-engineering'
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
        source: 'digital-twins',
        target: 'process-engineering'
    },
    {
        source: 'digital-twins',
        target: 'chemical-engineering'
    },
    {
        source: 'renewable-energy',
        target: 'energy'
    },
    {
        source: 'renewable-energy',
        target: 'chemical-engineering'
    },
    {
        source: 'process-optimization',
        target: 'process-engineering'
    },
    {
        source: 'process-optimization',
        target: 'chemical-engineering'
    },
    {
        source: 'process-optimization',
        target: 'data-science'
    },
    {
        source: 'process-optimization',
        target: 'automation'
    },
    {
        source: 'process-optimization',
        target: 'modelling'
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
        source: 'modelling',
        target: 'chemical-engineering'
    },
    {
        source: 'modelling',
        target: 'mechanical-engineering'
    },
    {
        source: 'modelling',
        target: 'systems-engineering'
    },
    {
        source: 'machine-learning',
        target: 'ai'
    },
    {
        source: 'machine-learning',
        target: 'data-science'
    },
    {
        source: 'machine-learning',
        target: 'process-optimization'
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
        source: 'iot',
        target: 'process-engineering'
    },
    {
        source: 'maintenance',
        target: 'mechanical-engineering'
    },
    {
        source: 'maintenance',
        target: 'process-engineering'
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
        source: 'energy-storage',
        target: 'chemical-engineering'
    },
    {
        source: 'biofuels',
        target: 'renewable-energy'
    },
    {
        source: 'biofuels',
        target: 'chemical-engineering'
    },
    {
        source: 'biofuels',
        target: 'process-engineering'
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
const edges = allEdges.filter((edge)=>presentNodeIds.has(edge.source) && presentNodeIds.has(edge.target));
}),
"[project]/devlinux/littletuna4.github.io/site/src/styles/palette.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "palette",
    ()=>palette
]);
const palette = {
    light: {
        background: '#f0f4f8',
        foreground: '#0a1829',
        primary: '#1e3a5f',
        secondary: '#2d5a5a',
        accent: '#ec4899',
        destructive: '#dc2626',
        success: '#059669',
        warning: '#d97706',
        info: '#0284c7'
    },
    dark: {
        background: '#0a1829',
        foreground: '#e0f2fe',
        primary: '#4a90e2',
        secondary: '#1e3a5f',
        accent: '#f472b6',
        destructive: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
        info: '#06b6d4'
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
        attraction: 0.005,
        repulsion: 1,
        gravity: 0.001,
        inertia: 1,
        maxMove: 200,
        scalingRatio: 1,
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
                            children: "Interests "
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
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/IndustriesSection.tsx",
                        lineNumber: 14,
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
"[project]/devlinux/littletuna4.github.io/site/src/components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/HeroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$BlogSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/BlogSection.tsx [app-ssr] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/data/app.ts [app-ssr] (ecmascript)");
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
                    className: "grid md:grid-cols-3 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center mb-4 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.png",
                                            alt: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_NAME || '',
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
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_SHORTNAME
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
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_DESCRIPTION
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_CONTACT_EMAIL}`,
                                            className: "flex items-center text-foreground-secondary hover:text-foreground transition-colors gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: " h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_CONTACT_EMAIL
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_CONTACT_PHONE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_CONTACT_PHONE}`,
                                            className: "flex items-center text-foreground-secondary hover:text-foreground transition-colors gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: " h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_CONTACT_PHONE
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-foreground-secondary gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: " h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                "Brisbane, Australia"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_LINKEDIN && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_LINKEDIN,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-foFreground-secondary hover:text-foreground transition-colors flex items-center gap-2",
                                            "aria-label": "LinkedIn page",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$icons$2f$LinkedInIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkedInIcon"], {
                                                    size: 20,
                                                    color: "current",
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this),
                                                ' ',
                                                "Follow on LinkedIn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_FACEBOOK && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_FACEBOOK,
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
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 31,
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
                                    children: "Blogs"
                                }, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/resume",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Resume"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/Projects",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blogs",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Blogs"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#services",
                                            className: "block text-foreground-secondary hover:text-foreground transition-colors",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 77,
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
                                __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_NAME,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"]?.APP_ABN && `ABN: ${__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$data$2f$app$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_CONSTS"].APP_ABN}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$ui$2f$SimpleThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Footer.tsx",
                    lineNumber: 110,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__aff83791._.js.map