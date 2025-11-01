(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Functional Requirements:
 * - Generic network graph visualization component
 * - Light and Dark mode support using theme system
 * - Drag and drop functionality for nodes with fixed lock mode
 * - Force layout algorithm with configurable parameters
 * - Responsive design with proper theming
 * - Client-side rendering to prevent SSR issues
 * - Configurable graph data source
 * - Customizable styling and behavior
 * - Touch and pointer interaction support for drag, move, and release
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+core@5.0.4_graphology@0.26.0_graphology-types@0.24.8__react@19.1.0_sigma@3.0.2_graphology-types@0.24.8_/node_modules/@react-sigma/core/lib/react-sigma_core.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$force$40$5$2e$0$2e$4_graphology$2d$layout$2d$force$40$0$2e$2$2e$4_graphology$2d$types$40$0$2e$24$2e$8_$5f$_30e2df2d334efb85a55f1452232305aa$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$force$2f$lib$2f$react$2d$sigma_layout$2d$force$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-force@5.0.4_graphology-layout-force@0.2.4_graphology-types@0.24.8___30e2df2d334efb85a55f1452232305aa/node_modules/@react-sigma/layout-force/lib/react-sigma_layout-force.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$forceatlas2$40$5$2e$0$2e$4_graphology$2d$layout$2d$forceatlas2$40$0$2e$10$2e$1_graphology$2d$t_783204fa307db7e6f91ce85656ff33eb$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$forceatlas2$2f$lib$2f$react$2d$sigma_layout$2d$forceatlas2$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-forceatlas2@5.0.4_graphology-layout-forceatlas2@0.10.1_graphology-t_783204fa307db7e6f91ce85656ff33eb/node_modules/@react-sigma/layout-forceatlas2/lib/react-sigma_layout-forceatlas2.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$noverlap$40$5$2e$0$2e$4_graphology$2d$layout$2d$noverlap$40$0$2e$4$2e$2_graphology$2d$types$40$0$2e$_543a01cbce6ab5c8f68912215cc084a9$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$noverlap$2f$lib$2f$react$2d$sigma_layout$2d$noverlap$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-noverlap@5.0.4_graphology-layout-noverlap@0.4.2_graphology-types@0._543a01cbce6ab5c8f68912215cc084a9/node_modules/@react-sigma/layout-noverlap/lib/react-sigma_layout-noverlap.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/providers/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/styles/palette.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const BaseGraphCore = (param)=>{
    let { graphData, layout, isLayoutRunning, dragMode, draggedNode, setDraggedNode, dragLockMode, forceConfig, forceAtlas2Config = {}, noverlapConfig = {} } = param;
    _s();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    const loadGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadGraph"])();
    const setSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetSettings"])();
    const registerEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisterEvents"])();
    const sigma = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSigma"])();
    // Layout workers
    const forceLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$force$40$5$2e$0$2e$4_graphology$2d$layout$2d$force$40$0$2e$2$2e$4_graphology$2d$types$40$0$2e$24$2e$8_$5f$_30e2df2d334efb85a55f1452232305aa$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$force$2f$lib$2f$react$2d$sigma_layout$2d$force$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutForce"])();
    const forceAtlas2Layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$forceatlas2$40$5$2e$0$2e$4_graphology$2d$layout$2d$forceatlas2$40$0$2e$10$2e$1_graphology$2d$t_783204fa307db7e6f91ce85656ff33eb$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$forceatlas2$2f$lib$2f$react$2d$sigma_layout$2d$forceatlas2$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutForceAtlas2"])();
    const noverlapLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$noverlap$40$5$2e$0$2e$4_graphology$2d$layout$2d$noverlap$40$0$2e$4$2e$2_graphology$2d$types$40$0$2e$_543a01cbce6ab5c8f68912215cc084a9$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$noverlap$2f$lib$2f$react$2d$sigma_layout$2d$noverlap$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutNoverlap"])();
    // Apply configuration changes without restarting layout
    const applyConfigurationChanges = ()=>{
        if (!sigma || draggedNode) return; // Don't apply changes during drag operations
        const graph = sigma.getGraph();
        // Apply node scaling if enabled - only update visual properties, not layout
        if (forceConfig.nodeScaling || (forceAtlas2Config === null || forceAtlas2Config === void 0 ? void 0 : forceAtlas2Config.nodeScaling) || (noverlapConfig === null || noverlapConfig === void 0 ? void 0 : noverlapConfig.nodeScaling)) {
            graph.forEachNode((nodeId)=>{
                const node = graph.getNodeAttributes(nodeId);
                if (node.scaleFactor && !node.highlighted) {
                    // Don't modify highlighted/dragged nodes
                    // Apply scaling to node properties that affect layout behavior
                    if (forceConfig.nodeScaling && layout === 'force') {
                        // Scale node size based on configuration
                        const scaledSize = node.baseSize * (1 + (forceConfig.scalingRatio - 1) * node.scaleFactor);
                        graph.setNodeAttribute(nodeId, 'size', scaledSize);
                    }
                    if ((forceAtlas2Config === null || forceAtlas2Config === void 0 ? void 0 : forceAtlas2Config.nodeScaling) && layout === 'forceatlas2') {
                        // Scale node size based on configuration
                        const scaledSize = node.baseSize * (1 + ((forceAtlas2Config.scalingRatio || 1) - 1) * node.scaleFactor);
                        graph.setNodeAttribute(nodeId, 'size', scaledSize);
                    }
                    if ((noverlapConfig === null || noverlapConfig === void 0 ? void 0 : noverlapConfig.nodeScaling) && layout === 'noverlap') {
                        // Scale node size based on configuration
                        const scaledSize = node.baseSize * (1 + (noverlapConfig.margin || 8) / 10 * node.scaleFactor);
                        graph.setNodeAttribute(nodeId, 'size', scaledSize);
                    }
                }
            });
        }
    // Note: We don't restart the layout here to prevent jitter
    // Layout parameters are applied directly to the running layout workers
    };
    // Load graph data only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseGraphCore.useEffect": ()=>{
            loadGraph(graphData);
        }
    }["BaseGraphCore.useEffect"], [
        loadGraph,
        graphData
    ]);
    // Update settings when theme changes, but don't reload graph
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseGraphCore.useEffect": ()=>{
            setSettings({
                allowInvalidContainer: true,
                renderLabels: true,
                labelSize: 12,
                labelWeight: 'bold',
                labelFont: 'system-ui, -apple-system, sans-serif',
                labelColor: {
                    color: isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.foreground : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.foreground
                },
                hideLabelsOnMove: false,
                labelDensity: 1,
                labelRenderedSizeThreshold: 0,
                defaultNodeColor: isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.primary : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.primary,
                defaultEdgeColor: isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.foreground : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.foreground,
                // Disable camera movement when dragging a node
                enableCameraRotation: !draggedNode,
                enableCameraPanning: !draggedNode,
                enableCameraZooming: !draggedNode,
                defaultDrawNodeHover: {
                    "BaseGraphCore.useEffect": (ctx, data, settings)=>{
                        const { x, y, size, color, label } = data;
                        const borderColor = isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.background : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.background;
                        const borderWidth = 3;
                        const textBackgroundColor = isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.foreground : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.foreground;
                        const textColor = isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.background : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.background;
                        const padding = 2;
                        // Save the current context state
                        ctx.save();
                        // Set the border color and width
                        ctx.strokeStyle = borderColor;
                        ctx.lineWidth = borderWidth;
                        ctx.lineCap = 'round';
                        ctx.lineJoin = 'round';
                        // Draw the border circle
                        ctx.beginPath();
                        ctx.arc(x, y, size + borderWidth / 2, 0, 2 * Math.PI);
                        ctx.stroke();
                        // Draw text background if label exists
                        if (label) {
                            const fontSize = settings.labelSize || 12;
                            const font = settings.labelFont || 'system-ui, -apple-system, sans-serif';
                            const fontWeight = settings.labelWeight || 'bold';
                            const labelColor = textColor;
                            // Set font and measure text (matching original settings)
                            ctx.font = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(font);
                            const textWidth = ctx.measureText(label).width;
                            const textHeight = fontSize;
                            // Draw text background
                            ctx.fillStyle = textBackgroundColor;
                            ctx.fillRect(x + size + padding, y - textHeight / 2 - padding, textWidth + 2 * padding, textHeight + 2 * padding);
                            // Draw node label (using original label color)
                            ctx.fillStyle = labelColor;
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(label, x + size + padding * 2, y);
                        }
                        // Restore the context state
                        ctx.restore();
                    }
                }["BaseGraphCore.useEffect"],
                nodeReducer: {
                    "BaseGraphCore.useEffect": (_, attrs)=>({
                            ...attrs,
                            size: attrs.highlighted ? attrs.size * 1.3 : attrs.size,
                            color: attrs.highlighted ? isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.primary : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.primary : attrs.color || (isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.primary : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.primary),
                            highlighted: attrs.highlighted || false,
                            // Custom properties for visual styling (not part of NodeDisplayData interface)
                            borderColor: attrs.highlighted ? isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.foreground : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.foreground : attrs.pinned ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.destructive : attrs.fixed ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.warning : undefined,
                            borderSize: attrs.highlighted ? 3 : attrs.pinned || attrs.fixed ? 2 : 0,
                            labelOutlineColor: isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.background : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.background,
                            labelOutlineWidth: 2
                        })
                }["BaseGraphCore.useEffect"],
                edgeReducer: {
                    "BaseGraphCore.useEffect": (_, attrs)=>({
                            ...attrs,
                            size: attrs.weight || 1,
                            color: attrs.highlighted ? isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.primary : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.primary : isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].dark.foreground : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$styles$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["palette"].light.foreground
                        })
                }["BaseGraphCore.useEffect"]
            });
            // Auto-fit the graph after a short delay to ensure proper positioning
            setTimeout({
                "BaseGraphCore.useEffect": ()=>{
                    if (sigma) {
                        sigma.getCamera().animatedReset({
                            duration: 1000
                        });
                    }
                }
            }["BaseGraphCore.useEffect"], 1000);
        }
    }["BaseGraphCore.useEffect"], [
        setSettings,
        sigma,
        isDark,
        draggedNode
    ]);
    // Handle layout workers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseGraphCore.useEffect": ()=>{
            if (!isLayoutRunning) {
                forceLayout.stop();
                forceAtlas2Layout.stop();
                noverlapLayout.stop();
                return;
            }
            switch(layout){
                case 'force':
                    forceLayout.start();
                    break;
                case 'forceatlas2':
                    forceAtlas2Layout.start();
                    break;
                case 'noverlap':
                    noverlapLayout.start();
                    break;
            }
            return ({
                "BaseGraphCore.useEffect": ()=>{
                    forceLayout.stop();
                    forceAtlas2Layout.stop();
                    noverlapLayout.stop();
                }
            })["BaseGraphCore.useEffect"];
        }
    }["BaseGraphCore.useEffect"], [
        layout,
        isLayoutRunning,
        forceLayout,
        forceAtlas2Layout,
        noverlapLayout
    ]);
    // Handle configuration changes - apply without restarting layout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseGraphCore.useEffect": ()=>{
            applyConfigurationChanges();
        }
    }["BaseGraphCore.useEffect"], [
        forceConfig.nodeScaling,
        forceConfig.scalingRatio,
        forceAtlas2Config === null || forceAtlas2Config === void 0 ? void 0 : forceAtlas2Config.nodeScaling,
        forceAtlas2Config === null || forceAtlas2Config === void 0 ? void 0 : forceAtlas2Config.scalingRatio,
        noverlapConfig === null || noverlapConfig === void 0 ? void 0 : noverlapConfig.nodeScaling,
        noverlapConfig === null || noverlapConfig === void 0 ? void 0 : noverlapConfig.margin,
        layout,
        draggedNode
    ]);
    // Handle drag events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseGraphCore.useEffect": ()=>{
            if (!dragMode) {
                registerEvents({});
                return;
            }
            // Normalize mouse/touch coordinates to graph coordinates
            const getGraphCoordsFromEvent = {
                "BaseGraphCore.useEffect.getGraphCoordsFromEvent": (evt)=>{
                    const original = evt === null || evt === void 0 ? void 0 : evt.original;
                    let clientX;
                    let clientY;
                    if ((original === null || original === void 0 ? void 0 : original.touches) && original.touches.length > 0) {
                        clientX = original.touches[0].clientX;
                        clientY = original.touches[0].clientY;
                    } else if ((original === null || original === void 0 ? void 0 : original.changedTouches) && original.changedTouches.length > 0) {
                        clientX = original.changedTouches[0].clientX;
                        clientY = original.changedTouches[0].clientY;
                    } else if (typeof (original === null || original === void 0 ? void 0 : original.clientX) === 'number' && typeof (original === null || original === void 0 ? void 0 : original.clientY) === 'number') {
                        clientX = original.clientX;
                        clientY = original.clientY;
                    } else if (typeof (evt === null || evt === void 0 ? void 0 : evt.x) === 'number' && typeof (evt === null || evt === void 0 ? void 0 : evt.y) === 'number') {
                        clientX = evt.x;
                        clientY = evt.y;
                    }
                    // Get the container's position to calculate relative coordinates
                    const container = sigma.getContainer();
                    const rect = container.getBoundingClientRect();
                    // Convert client coordinates to container-relative coordinates
                    const containerX = (clientX !== null && clientX !== void 0 ? clientX : 0) - rect.left;
                    const containerY = (clientY !== null && clientY !== void 0 ? clientY : 0) - rect.top;
                    const viewportPoint = {
                        x: containerX,
                        y: containerY
                    };
                    return sigma.viewportToGraph(viewportPoint);
                }
            }["BaseGraphCore.useEffect.getGraphCoordsFromEvent"];
            registerEvents({
                downNode: {
                    "BaseGraphCore.useEffect": (e)=>{
                        setDraggedNode(e.node);
                        const graph = sigma.getGraph();
                        graph.setNodeAttribute(e.node, 'highlighted', true);
                        // Apply drag lock mode
                        if (dragLockMode === 'fixed') {
                            graph.setNodeAttribute(e.node, 'fixed', true);
                        } else if (dragLockMode === 'pinned') {
                            graph.setNodeAttribute(e.node, 'pinned', true);
                        }
                        document.body.style.cursor = 'grabbing';
                        // Prevent default sigma behavior (camera pan) when starting node drag
                        e.preventSigmaDefault();
                    }
                }["BaseGraphCore.useEffect"],
                mousemovebody: {
                    "BaseGraphCore.useEffect": (e)=>{
                        if (!draggedNode) return;
                        const pos = getGraphCoordsFromEvent(e);
                        const graph = sigma.getGraph();
                        graph.setNodeAttribute(draggedNode, 'x', pos.x);
                        graph.setNodeAttribute(draggedNode, 'y', pos.y);
                        e.preventSigmaDefault();
                        e.original.preventDefault();
                        e.original.stopPropagation();
                    }
                }["BaseGraphCore.useEffect"],
                // Touch and Pointer move support mirrors mousemovebody
                touchmovebody: {
                    "BaseGraphCore.useEffect": (e)=>{
                        if (!draggedNode) return;
                        const pos = getGraphCoordsFromEvent(e);
                        const graph = sigma.getGraph();
                        graph.setNodeAttribute(draggedNode, 'x', pos.x);
                        graph.setNodeAttribute(draggedNode, 'y', pos.y);
                        e.preventSigmaDefault();
                        e.original.preventDefault();
                        e.original.stopPropagation();
                    }
                }["BaseGraphCore.useEffect"],
                mouseup: {
                    "BaseGraphCore.useEffect": ()=>{
                        if (draggedNode) {
                            const graph = sigma.getGraph();
                            graph.setNodeAttribute(draggedNode, 'highlighted', false);
                            // Handle drag lock mode release
                            if (dragLockMode === 'fixed') {
                                // Release fixed lock after drag
                                graph.setNodeAttribute(draggedNode, 'fixed', false);
                            }
                            // For pinned mode, keep the pinned state
                            setDraggedNode(null);
                            document.body.style.cursor = 'default';
                        }
                    }
                }["BaseGraphCore.useEffect"],
                // Touch end handled via global listener to avoid event map type mismatch
                mousedown: {
                    "BaseGraphCore.useEffect": (e)=>{
                        // Prevent camera pan when clicking for node drag
                        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
                        // If we're about to drag a node, prevent default camera behavior
                        if (draggedNode) {
                            e.preventSigmaDefault();
                        }
                    }
                }["BaseGraphCore.useEffect"],
                enterNode: {
                    "BaseGraphCore.useEffect": ()=>{
                        if (!draggedNode) {
                            document.body.style.cursor = 'grab';
                        }
                    }
                }["BaseGraphCore.useEffect"],
                leaveNode: {
                    "BaseGraphCore.useEffect": ()=>{
                        if (!draggedNode) {
                            document.body.style.cursor = 'default';
                        }
                    }
                }["BaseGraphCore.useEffect"],
                // Double-click to toggle pinned state
                doubleClickNode: {
                    "BaseGraphCore.useEffect": (e)=>{
                        const graph = sigma.getGraph();
                        const isPinned = graph.getNodeAttribute(e.node, 'pinned') || false;
                        graph.setNodeAttribute(e.node, 'pinned', !isPinned);
                    }
                }["BaseGraphCore.useEffect"]
            });
            return ({
                "BaseGraphCore.useEffect": ()=>{
                    document.body.style.cursor = 'default';
                }
            })["BaseGraphCore.useEffect"];
        }
    }["BaseGraphCore.useEffect"], [
        registerEvents,
        sigma,
        draggedNode,
        dragMode,
        dragLockMode,
        setDraggedNode
    ]);
    // Add global touch event support for dragging on touch devices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseGraphCore.useEffect": ()=>{
            if (!dragMode) return;
            const handleTouchMove = {
                "BaseGraphCore.useEffect.handleTouchMove": (ev)=>{
                    if (!draggedNode) return;
                    if (ev.touches.length === 0) return;
                    const touch = ev.touches[0];
                    // Get the container's position to calculate relative coordinates
                    const container = sigma.getContainer();
                    const rect = container.getBoundingClientRect();
                    // Convert client coordinates to container-relative coordinates
                    const containerX = touch.clientX - rect.left;
                    const containerY = touch.clientY - rect.top;
                    const pos = sigma.viewportToGraph({
                        x: containerX,
                        y: containerY
                    });
                    const graph = sigma.getGraph();
                    graph.setNodeAttribute(draggedNode, 'x', pos.x);
                    graph.setNodeAttribute(draggedNode, 'y', pos.y);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }["BaseGraphCore.useEffect.handleTouchMove"];
            const handleTouchEnd = {
                "BaseGraphCore.useEffect.handleTouchEnd": (_ev)=>{
                    if (!draggedNode) return;
                    const graph = sigma.getGraph();
                    graph.setNodeAttribute(draggedNode, 'highlighted', false);
                    if (dragLockMode === 'fixed') {
                        graph.setNodeAttribute(draggedNode, 'fixed', false);
                    }
                    setDraggedNode(null);
                    document.body.style.cursor = 'default';
                }
            }["BaseGraphCore.useEffect.handleTouchEnd"];
            document.addEventListener('touchmove', handleTouchMove, {
                passive: false
            });
            document.addEventListener('touchend', handleTouchEnd, {
                passive: false
            });
            return ({
                "BaseGraphCore.useEffect": ()=>{
                    document.removeEventListener('touchmove', handleTouchMove);
                    document.removeEventListener('touchend', handleTouchEnd);
                }
            })["BaseGraphCore.useEffect"];
        }
    }["BaseGraphCore.useEffect"], [
        dragMode,
        draggedNode,
        sigma,
        setDraggedNode,
        dragLockMode
    ]);
    return null;
};
_s(BaseGraphCore, "uFsO5u2fwGMJNRpY+0T0xqzdAcs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$src$2f$components$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadGraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisterEvents"],
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSigma"],
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$force$40$5$2e$0$2e$4_graphology$2d$layout$2d$force$40$0$2e$2$2e$4_graphology$2d$types$40$0$2e$24$2e$8_$5f$_30e2df2d334efb85a55f1452232305aa$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$force$2f$lib$2f$react$2d$sigma_layout$2d$force$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutForce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$forceatlas2$40$5$2e$0$2e$4_graphology$2d$layout$2d$forceatlas2$40$0$2e$10$2e$1_graphology$2d$t_783204fa307db7e6f91ce85656ff33eb$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$forceatlas2$2f$lib$2f$react$2d$sigma_layout$2d$forceatlas2$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutForceAtlas2"],
        __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$noverlap$40$5$2e$0$2e$4_graphology$2d$layout$2d$noverlap$40$0$2e$4$2e$2_graphology$2d$types$40$0$2e$_543a01cbce6ab5c8f68912215cc084a9$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$noverlap$2f$lib$2f$react$2d$sigma_layout$2d$noverlap$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutNoverlap"]
    ];
});
_c = BaseGraphCore;
const BaseGraph = (param)=>{
    let { graphData, layout, isLayoutRunning, dragMode, draggedNode, setDraggedNode, dragLockMode, forceConfig, forceAtlas2Config, noverlapConfig, minHeight = '600px', className = 'h-full w-full relative bg-background', style } = param;
    _s1();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ensure component only renders on client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseGraph.useEffect": ()=>{
            setIsMounted(true);
        }
    }["BaseGraph.useEffect"], []);
    // Don't render anything until mounted on client side
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            style: {
                ...style,
                minHeight
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-foreground",
                    children: "Loading graph..."
                }, void 0, false, {
                    fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
                    lineNumber: 574,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
                lineNumber: 573,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
            lineNumber: 572,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            ...style,
            minHeight
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigmaContainer"], {
            style: {
                height: '100%',
                width: '100%'
            },
            settings: {
                allowInvalidContainer: true
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseGraphCore, {
                graphData: graphData,
                layout: layout,
                isLayoutRunning: isLayoutRunning,
                dragMode: dragMode,
                draggedNode: draggedNode,
                setDraggedNode: setDraggedNode,
                dragLockMode: dragLockMode,
                forceConfig: forceConfig,
                forceAtlas2Config: forceAtlas2Config,
                noverlapConfig: noverlapConfig
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
                lineNumber: 586,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
            lineNumber: 582,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
        lineNumber: 581,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(BaseGraph, "h7njlszr1nxUzrk46zHyBTBrvgI=");
_c1 = BaseGraph;
// Export with dynamic import to prevent SSR
const DynamicBaseGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>Promise.resolve(BaseGraph), {
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full relative flex items-center justify-center bg-background",
            style: {
                minHeight: '600px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-foreground",
                children: "Loading graph..."
            }, void 0, false, {
                fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx",
            lineNumber: 607,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = DynamicBaseGraph;
const __TURBOPACK__default__export__ = DynamicBaseGraph;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "BaseGraphCore");
__turbopack_context__.k.register(_c1, "BaseGraph");
__turbopack_context__.k.register(_c2, "DynamicBaseGraph$dynamic");
__turbopack_context__.k.register(_c3, "DynamicBaseGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/src/components/Industries/BaseGraph.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=99c66_littletuna4_github_io_site_src_components_Industries_BaseGraph_tsx_23ff0d8e._.js.map