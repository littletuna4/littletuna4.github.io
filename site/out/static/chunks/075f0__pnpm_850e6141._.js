(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/inherits-d1a1e29b.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_inherits,
    "a",
    ()=>_createClass,
    "b",
    ()=>_classCallCheck,
    "c",
    ()=>_callSuper,
    "d",
    ()=>_toPropertyKey,
    "e",
    ()=>_getPrototypeOf
]);
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function() {
        return !!t;
    })();
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/colors-beb06eb2.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H",
    ()=>HTML_COLORS,
    "_",
    ()=>_slicedToArray,
    "a",
    ()=>_arrayLikeToArray,
    "b",
    ()=>_unsupportedIterableToArray,
    "c",
    ()=>colorToIndex,
    "d",
    ()=>colorToArray,
    "e",
    ()=>extractPixel,
    "f",
    ()=>floatColor,
    "g",
    ()=>getPixelColor,
    "i",
    ()=>indexToColor,
    "p",
    ()=>parseColor,
    "r",
    ()=>rgbaToFloat
]);
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
var HTML_COLORS = {
    black: "#000000",
    silver: "#C0C0C0",
    gray: "#808080",
    grey: "#808080",
    white: "#FFFFFF",
    maroon: "#800000",
    red: "#FF0000",
    purple: "#800080",
    fuchsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    olive: "#808000",
    yellow: "#FFFF00",
    navy: "#000080",
    blue: "#0000FF",
    teal: "#008080",
    aqua: "#00FFFF",
    darkblue: "#00008B",
    mediumblue: "#0000CD",
    darkgreen: "#006400",
    darkcyan: "#008B8B",
    deepskyblue: "#00BFFF",
    darkturquoise: "#00CED1",
    mediumspringgreen: "#00FA9A",
    springgreen: "#00FF7F",
    cyan: "#00FFFF",
    midnightblue: "#191970",
    dodgerblue: "#1E90FF",
    lightseagreen: "#20B2AA",
    forestgreen: "#228B22",
    seagreen: "#2E8B57",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    limegreen: "#32CD32",
    mediumseagreen: "#3CB371",
    turquoise: "#40E0D0",
    royalblue: "#4169E1",
    steelblue: "#4682B4",
    darkslateblue: "#483D8B",
    mediumturquoise: "#48D1CC",
    indigo: "#4B0082",
    darkolivegreen: "#556B2F",
    cadetblue: "#5F9EA0",
    cornflowerblue: "#6495ED",
    rebeccapurple: "#663399",
    mediumaquamarine: "#66CDAA",
    dimgray: "#696969",
    dimgrey: "#696969",
    slateblue: "#6A5ACD",
    olivedrab: "#6B8E23",
    slategray: "#708090",
    slategrey: "#708090",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    mediumslateblue: "#7B68EE",
    lawngreen: "#7CFC00",
    chartreuse: "#7FFF00",
    aquamarine: "#7FFFD4",
    skyblue: "#87CEEB",
    lightskyblue: "#87CEFA",
    blueviolet: "#8A2BE2",
    darkred: "#8B0000",
    darkmagenta: "#8B008B",
    saddlebrown: "#8B4513",
    darkseagreen: "#8FBC8F",
    lightgreen: "#90EE90",
    mediumpurple: "#9370DB",
    darkviolet: "#9400D3",
    palegreen: "#98FB98",
    darkorchid: "#9932CC",
    yellowgreen: "#9ACD32",
    sienna: "#A0522D",
    brown: "#A52A2A",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    lightblue: "#ADD8E6",
    greenyellow: "#ADFF2F",
    paleturquoise: "#AFEEEE",
    lightsteelblue: "#B0C4DE",
    powderblue: "#B0E0E6",
    firebrick: "#B22222",
    darkgoldenrod: "#B8860B",
    mediumorchid: "#BA55D3",
    rosybrown: "#BC8F8F",
    darkkhaki: "#BDB76B",
    mediumvioletred: "#C71585",
    indianred: "#CD5C5C",
    peru: "#CD853F",
    chocolate: "#D2691E",
    tan: "#D2B48C",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    thistle: "#D8BFD8",
    orchid: "#DA70D6",
    goldenrod: "#DAA520",
    palevioletred: "#DB7093",
    crimson: "#DC143C",
    gainsboro: "#DCDCDC",
    plum: "#DDA0DD",
    burlywood: "#DEB887",
    lightcyan: "#E0FFFF",
    lavender: "#E6E6FA",
    darksalmon: "#E9967A",
    violet: "#EE82EE",
    palegoldenrod: "#EEE8AA",
    lightcoral: "#F08080",
    khaki: "#F0E68C",
    aliceblue: "#F0F8FF",
    honeydew: "#F0FFF0",
    azure: "#F0FFFF",
    sandybrown: "#F4A460",
    wheat: "#F5DEB3",
    beige: "#F5F5DC",
    whitesmoke: "#F5F5F5",
    mintcream: "#F5FFFA",
    ghostwhite: "#F8F8FF",
    salmon: "#FA8072",
    antiquewhite: "#FAEBD7",
    linen: "#FAF0E6",
    lightgoldenrodyellow: "#FAFAD2",
    oldlace: "#FDF5E6",
    magenta: "#FF00FF",
    deeppink: "#FF1493",
    orangered: "#FF4500",
    tomato: "#FF6347",
    hotpink: "#FF69B4",
    coral: "#FF7F50",
    darkorange: "#FF8C00",
    lightsalmon: "#FFA07A",
    orange: "#FFA500",
    lightpink: "#FFB6C1",
    pink: "#FFC0CB",
    gold: "#FFD700",
    peachpuff: "#FFDAB9",
    navajowhite: "#FFDEAD",
    moccasin: "#FFE4B5",
    bisque: "#FFE4C4",
    mistyrose: "#FFE4E1",
    blanchedalmond: "#FFEBCD",
    papayawhip: "#FFEFD5",
    lavenderblush: "#FFF0F5",
    seashell: "#FFF5EE",
    cornsilk: "#FFF8DC",
    lemonchiffon: "#FFFACD",
    floralwhite: "#FFFAF0",
    snow: "#FFFAFA",
    lightyellow: "#FFFFE0",
    ivory: "#FFFFF0"
};
/**
 * Function extracting the color at the given pixel.
 */ function extractPixel(gl, x, y, array) {
    var data = array || new Uint8Array(4);
    gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    return data;
}
/**
 * Memoized function returning a float-encoded color from various string
 * formats describing colors.
 */ var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function parseColor(val) {
    var r = 0; // byte
    var g = 0; // byte
    var b = 0; // byte
    var a = 1; // float
    // Handling hexadecimal notation
    if (val[0] === "#") {
        if (val.length === 4) {
            r = parseInt(val.charAt(1) + val.charAt(1), 16);
            g = parseInt(val.charAt(2) + val.charAt(2), 16);
            b = parseInt(val.charAt(3) + val.charAt(3), 16);
        } else {
            r = parseInt(val.charAt(1) + val.charAt(2), 16);
            g = parseInt(val.charAt(3) + val.charAt(4), 16);
            b = parseInt(val.charAt(5) + val.charAt(6), 16);
        }
        if (val.length === 9) {
            a = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
        }
    } else if (RGBA_TEST_REGEX.test(val)) {
        var match = val.match(RGBA_EXTRACT_REGEX);
        if (match) {
            r = +match[1];
            g = +match[2];
            b = +match[3];
            if (match[4]) a = +match[4];
        }
    }
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
var FLOAT_COLOR_CACHE = {};
for(var htmlColor in HTML_COLORS){
    FLOAT_COLOR_CACHE[htmlColor] = floatColor(HTML_COLORS[htmlColor]);
    // Replicating cache for hex values for free
    FLOAT_COLOR_CACHE[HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
}
function rgbaToFloat(r, g, b, a, masking) {
    INT32[0] = a << 24 | b << 16 | g << 8 | r;
    if (masking) INT32[0] = INT32[0] & 0xfeffffff;
    return FLOAT32[0];
}
function floatColor(val) {
    // The html color names are case-insensitive
    val = val.toLowerCase();
    // If the color is already computed, we yield it
    if (typeof FLOAT_COLOR_CACHE[val] !== "undefined") return FLOAT_COLOR_CACHE[val];
    var parsed = parseColor(val);
    var r = parsed.r, g = parsed.g, b = parsed.b;
    var a = parsed.a;
    a = a * 255 | 0;
    var color = rgbaToFloat(r, g, b, a, true);
    FLOAT_COLOR_CACHE[val] = color;
    return color;
}
function colorToArray(val, masking) {
    FLOAT32[0] = floatColor(val);
    var intValue = INT32[0];
    if (masking) {
        intValue = intValue | 0x01000000;
    }
    var r = intValue & 0xff;
    var g = intValue >> 8 & 0xff;
    var b = intValue >> 16 & 0xff;
    var a = intValue >> 24 & 0xff;
    return [
        r,
        g,
        b,
        a
    ];
}
var FLOAT_INDEX_CACHE = {};
function indexToColor(index) {
    // If the index is already computed, we yield it
    if (typeof FLOAT_INDEX_CACHE[index] !== "undefined") return FLOAT_INDEX_CACHE[index];
    // To address issue #1397, one strategy is to keep encoding 4 bytes colors,
    // but with alpha hard-set to 1.0 (or 255):
    var r = (index & 0x00ff0000) >>> 16;
    var g = (index & 0x0000ff00) >>> 8;
    var b = index & 0x000000ff;
    var a = 0x000000ff;
    // The original 4 bytes color encoding was the following:
    // const r = (index & 0xff000000) >>> 24;
    // const g = (index & 0x00ff0000) >>> 16;
    // const b = (index & 0x0000ff00) >>> 8;
    // const a = index & 0x000000ff;
    var color = rgbaToFloat(r, g, b, a, true);
    FLOAT_INDEX_CACHE[index] = color;
    return color;
}
function colorToIndex(r, g, b, _a) {
    // As for the function indexToColor, because of #1397 and the "alpha is always
    // 1.0" strategy, we need to fix this function as well:
    return b + (g << 8) + (r << 16);
// The original 4 bytes color decoding is the following:
// return a + (b << 8) + (g << 16) + (r << 24);
}
function getPixelColor(gl, frameBuffer, x, y, pixelRatio, downSizingRatio) {
    var bufferX = Math.floor(x / downSizingRatio * pixelRatio);
    var bufferY = Math.floor(gl.drawingBufferHeight / downSizingRatio - y / downSizingRatio * pixelRatio);
    var pixel = new Uint8Array(4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.readPixels(bufferX, bufferY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
    var _pixel = _slicedToArray(pixel, 4), r = _pixel[0], g = _pixel[1], b = _pixel[2], a = _pixel[3];
    return [
        r,
        g,
        b,
        a
    ];
}
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/index-236c62ad.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>AbstractNodeProgram,
    "D",
    ()=>DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS,
    "E",
    ()=>EdgeArrowProgram$1,
    "F",
    ()=>FRAGMENT_SHADER_SOURCE,
    "N",
    ()=>NodeCircleProgram,
    "P",
    ()=>Program,
    "_",
    ()=>_objectSpread2,
    "a",
    ()=>_defineProperty,
    "b",
    ()=>drawDiscNodeLabel,
    "c",
    ()=>drawDiscNodeHover,
    "d",
    ()=>drawStraightEdgeLabel,
    "e",
    ()=>EdgeRectangleProgram,
    "f",
    ()=>NodeProgram,
    "g",
    ()=>EdgeProgram,
    "h",
    ()=>createEdgeCompoundProgram,
    "i",
    ()=>createEdgeArrowHeadProgram,
    "j",
    ()=>createNodeCompoundProgram,
    "k",
    ()=>AbstractEdgeProgram,
    "l",
    ()=>AbstractProgram,
    "m",
    ()=>EdgeArrowHeadProgram$1,
    "n",
    ()=>EdgeClampedProgram$1,
    "o",
    ()=>createEdgeClampedProgram,
    "p",
    ()=>DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS,
    "q",
    ()=>createEdgeArrowProgram,
    "r",
    ()=>getAttributeItemsCount,
    "s",
    ()=>getAttributesItemsCount,
    "t",
    ()=>loadVertexShader,
    "u",
    ()=>loadFragmentShader,
    "v",
    ()=>loadProgram,
    "w",
    ()=>killProgram,
    "x",
    ()=>numberToGLSLFloat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/inherits-d1a1e29b.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/colors-beb06eb2.esm.js [app-client] (ecmascript)");
;
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _superPropBase(t, o) {
    for(; !({}).hasOwnProperty.call(t, o) && null !== (t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(t)););
    return t;
}
function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var p = _superPropBase(e, t);
        if (p) {
            var n = Object.getOwnPropertyDescriptor(p, t);
            return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
        }
    }, _get.apply(null, arguments);
}
function _superPropGet(t, o, e, r) {
    var p = _get((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(1 & r ? t.prototype : t), o, e);
    return 2 & r && "function" == typeof p ? function(t) {
        return p.apply(e, t);
    } : p;
}
function getAttributeItemsCount(attr) {
    return attr.normalized ? 1 : attr.size;
}
function getAttributesItemsCount(attrs) {
    var res = 0;
    attrs.forEach(function(attr) {
        return res += getAttributeItemsCount(attr);
    });
    return res;
}
function loadShader(type, gl, source) {
    var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    // Creating the shader
    var shader = gl.createShader(glType);
    if (shader === null) {
        throw new Error("loadShader: error while creating the shader");
    }
    // Loading source
    gl.shaderSource(shader, source);
    // Compiling the shader
    gl.compileShader(shader);
    // Retrieving compilation status
    var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    // Throwing if something went awry
    if (!successfullyCompiled) {
        var infoLog = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
    }
    return shader;
}
function loadVertexShader(gl, source) {
    return loadShader("VERTEX", gl, source);
}
function loadFragmentShader(gl, source) {
    return loadShader("FRAGMENT", gl, source);
}
/**
 * Function used to load a program.
 */ function loadProgram(gl, shaders) {
    var program = gl.createProgram();
    if (program === null) {
        throw new Error("loadProgram: error while creating the program.");
    }
    var i, l;
    // Attaching the shaders
    for(i = 0, l = shaders.length; i < l; i++)gl.attachShader(program, shaders[i]);
    gl.linkProgram(program);
    // Checking status
    var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!successfullyLinked) {
        gl.deleteProgram(program);
        throw new Error("loadProgram: error while linking the program.");
    }
    return program;
}
function killProgram(_ref) {
    var gl = _ref.gl, buffer = _ref.buffer, program = _ref.program, vertexShader = _ref.vertexShader, fragmentShader = _ref.fragmentShader;
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.deleteProgram(program);
    gl.deleteBuffer(buffer);
}
/**
 * Function use to print a float for inserting in a GLSL program.
 */ function numberToGLSLFloat(n) {
    return n % 1 === 0 ? n.toFixed(1) : n.toString();
}
var PICKING_PREFIX = "#define PICKING_MODE\n";
var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4);
var AbstractProgram = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(function AbstractProgram(_gl, _pickGl, _renderer) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, AbstractProgram);
});
var Program = /*#__PURE__*/ function() {
    function Program(gl, pickingBuffer, renderer) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, Program);
        // GLenum
        _defineProperty(this, "array", new Float32Array());
        _defineProperty(this, "constantArray", new Float32Array());
        _defineProperty(this, "capacity", 0);
        _defineProperty(this, "verticesCount", 0);
        // Reading and caching program definition
        var def = this.getDefinition();
        this.VERTICES = def.VERTICES;
        this.VERTEX_SHADER_SOURCE = def.VERTEX_SHADER_SOURCE;
        this.FRAGMENT_SHADER_SOURCE = def.FRAGMENT_SHADER_SOURCE;
        this.UNIFORMS = def.UNIFORMS;
        this.ATTRIBUTES = def.ATTRIBUTES;
        this.METHOD = def.METHOD;
        this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in def ? def.CONSTANT_ATTRIBUTES : [];
        this.CONSTANT_DATA = "CONSTANT_DATA" in def ? def.CONSTANT_DATA : [];
        this.isInstanced = "CONSTANT_ATTRIBUTES" in def;
        // Computing stride
        this.ATTRIBUTES_ITEMS_COUNT = getAttributesItemsCount(this.ATTRIBUTES);
        this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT;
        // Members
        this.renderer = renderer;
        this.normalProgram = this.getProgramInfo("normal", gl, def.VERTEX_SHADER_SOURCE, def.FRAGMENT_SHADER_SOURCE, null);
        this.pickProgram = pickingBuffer ? this.getProgramInfo("pick", gl, PICKING_PREFIX + def.VERTEX_SHADER_SOURCE, PICKING_PREFIX + def.FRAGMENT_SHADER_SOURCE, pickingBuffer) : null;
        // For instanced programs:
        if (this.isInstanced) {
            var constantAttributesItemsCount = getAttributesItemsCount(this.CONSTANT_ATTRIBUTES);
            if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
            this.constantArray = new Float32Array(this.CONSTANT_DATA.length * constantAttributesItemsCount);
            for(var i = 0; i < this.CONSTANT_DATA.length; i++){
                var vector = this.CONSTANT_DATA[i];
                if (vector.length !== constantAttributesItemsCount) throw new Error("Program: error while getting constant data (one vector has ".concat(vector.length, " items instead of ").concat(constantAttributesItemsCount, ")"));
                for(var j = 0; j < vector.length; j++)this.constantArray[i * constantAttributesItemsCount + j] = vector[j];
            }
            this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(Program, [
        {
            key: "kill",
            value: function kill() {
                killProgram(this.normalProgram);
                if (this.pickProgram) {
                    killProgram(this.pickProgram);
                    this.pickProgram = null;
                }
            }
        },
        {
            key: "getProgramInfo",
            value: function getProgramInfo(name, gl, vertexShaderSource, fragmentShaderSource, frameBuffer) {
                var def = this.getDefinition();
                // WebGL buffers
                var buffer = gl.createBuffer();
                if (buffer === null) throw new Error("Program: error while creating the WebGL buffer.");
                // Shaders and program
                var vertexShader = loadVertexShader(gl, vertexShaderSource);
                var fragmentShader = loadFragmentShader(gl, fragmentShaderSource);
                var program = loadProgram(gl, [
                    vertexShader,
                    fragmentShader
                ]);
                // Initializing locations
                var uniformLocations = {};
                def.UNIFORMS.forEach(function(uniformName) {
                    var location = gl.getUniformLocation(program, uniformName);
                    if (location) uniformLocations[uniformName] = location;
                });
                var attributeLocations = {};
                def.ATTRIBUTES.forEach(function(attr) {
                    attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
                });
                // For instanced programs:
                var constantBuffer;
                if ("CONSTANT_ATTRIBUTES" in def) {
                    def.CONSTANT_ATTRIBUTES.forEach(function(attr) {
                        attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
                    });
                    constantBuffer = gl.createBuffer();
                    if (constantBuffer === null) throw new Error("Program: error while creating the WebGL constant buffer.");
                }
                return {
                    name: name,
                    program: program,
                    gl: gl,
                    frameBuffer: frameBuffer,
                    buffer: buffer,
                    constantBuffer: constantBuffer || {},
                    uniformLocations: uniformLocations,
                    attributeLocations: attributeLocations,
                    isPicking: name === "pick",
                    vertexShader: vertexShader,
                    fragmentShader: fragmentShader
                };
            }
        },
        {
            key: "bindProgram",
            value: function bindProgram(program) {
                var _this = this;
                var offset = 0;
                var gl = program.gl, buffer = program.buffer;
                if (!this.isInstanced) {
                    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                    offset = 0;
                    this.ATTRIBUTES.forEach(function(attr) {
                        return offset += _this.bindAttribute(attr, program, offset);
                    });
                    gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
                } else {
                    // Handle constant data (things that remain unchanged for all items):
                    gl.bindBuffer(gl.ARRAY_BUFFER, program.constantBuffer);
                    offset = 0;
                    this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
                        return offset += _this.bindAttribute(attr, program, offset, false);
                    });
                    gl.bufferData(gl.ARRAY_BUFFER, this.constantArray, gl.STATIC_DRAW);
                    // Handle "instance specific" data (things that vary for each item):
                    gl.bindBuffer(gl.ARRAY_BUFFER, program.buffer);
                    offset = 0;
                    this.ATTRIBUTES.forEach(function(attr) {
                        return offset += _this.bindAttribute(attr, program, offset, true);
                    });
                    gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
                }
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
            }
        },
        {
            key: "unbindProgram",
            value: function unbindProgram(program) {
                var _this2 = this;
                if (!this.isInstanced) {
                    this.ATTRIBUTES.forEach(function(attr) {
                        return _this2.unbindAttribute(attr, program);
                    });
                } else {
                    this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
                        return _this2.unbindAttribute(attr, program, false);
                    });
                    this.ATTRIBUTES.forEach(function(attr) {
                        return _this2.unbindAttribute(attr, program, true);
                    });
                }
            }
        },
        {
            key: "bindAttribute",
            value: function bindAttribute(attr, program, offset, setDivisor) {
                var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
                if (typeof sizeFactor !== "number") throw new Error("Program.bind: yet unsupported attribute type \"".concat(attr.type, "\""));
                var location = program.attributeLocations[attr.name];
                var gl = program.gl;
                if (location !== -1) {
                    gl.enableVertexAttribArray(location);
                    var stride = !this.isInstanced ? this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT : (setDivisor ? this.ATTRIBUTES_ITEMS_COUNT : getAttributesItemsCount(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT;
                    gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, stride, offset);
                    if (this.isInstanced && setDivisor) {
                        if (gl instanceof WebGL2RenderingContext) {
                            gl.vertexAttribDivisor(location, 1);
                        } else {
                            var ext = gl.getExtension("ANGLE_instanced_arrays");
                            if (ext) ext.vertexAttribDivisorANGLE(location, 1);
                        }
                    }
                }
                return attr.size * sizeFactor;
            }
        },
        {
            key: "unbindAttribute",
            value: function unbindAttribute(attr, program, unsetDivisor) {
                var location = program.attributeLocations[attr.name];
                var gl = program.gl;
                if (location !== -1) {
                    gl.disableVertexAttribArray(location);
                    if (this.isInstanced && unsetDivisor) {
                        if (gl instanceof WebGL2RenderingContext) {
                            gl.vertexAttribDivisor(location, 0);
                        } else {
                            var ext = gl.getExtension("ANGLE_instanced_arrays");
                            if (ext) ext.vertexAttribDivisorANGLE(location, 0);
                        }
                    }
                }
            }
        },
        {
            key: "reallocate",
            value: function reallocate(capacity) {
                // If desired capacity has not changed we do nothing
                // NOTE: it's possible here to implement more subtle reallocation schemes
                // when the number of rendered items increase or decrease
                if (capacity === this.capacity) return;
                this.capacity = capacity;
                this.verticesCount = this.VERTICES * capacity;
                this.array = new Float32Array(!this.isInstanced ? this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT : this.capacity * this.ATTRIBUTES_ITEMS_COUNT);
            }
        },
        {
            key: "hasNothingToRender",
            value: function hasNothingToRender() {
                return this.verticesCount === 0;
            }
        },
        {
            key: "renderProgram",
            value: function renderProgram(params, programInfo) {
                var gl = programInfo.gl, program = programInfo.program;
                // With the current fix for #1397, the alpha blending is enabled for the
                // picking layer:
                gl.enable(gl.BLEND);
                // Original code:
                // if (!isPicking) gl.enable(gl.BLEND);
                // else gl.disable(gl.BLEND);
                gl.useProgram(program);
                this.setUniforms(params, programInfo);
                this.drawWebGL(this.METHOD, programInfo);
            }
        },
        {
            key: "render",
            value: function render(params) {
                if (this.hasNothingToRender()) return;
                if (this.pickProgram) {
                    this.pickProgram.gl.viewport(0, 0, params.width * params.pixelRatio / params.downSizingRatio, params.height * params.pixelRatio / params.downSizingRatio);
                    this.bindProgram(this.pickProgram);
                    this.renderProgram(_objectSpread2(_objectSpread2({}, params), {}, {
                        pixelRatio: params.pixelRatio / params.downSizingRatio
                    }), this.pickProgram);
                    this.unbindProgram(this.pickProgram);
                }
                this.normalProgram.gl.viewport(0, 0, params.width * params.pixelRatio, params.height * params.pixelRatio);
                this.bindProgram(this.normalProgram);
                this.renderProgram(params, this.normalProgram);
                this.unbindProgram(this.normalProgram);
            }
        },
        {
            key: "drawWebGL",
            value: function drawWebGL(method, _ref) {
                var gl = _ref.gl, frameBuffer = _ref.frameBuffer;
                gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
                if (!this.isInstanced) {
                    gl.drawArrays(method, 0, this.verticesCount);
                } else {
                    if (gl instanceof WebGL2RenderingContext) {
                        gl.drawArraysInstanced(method, 0, this.VERTICES, this.capacity);
                    } else {
                        var ext = gl.getExtension("ANGLE_instanced_arrays");
                        if (ext) ext.drawArraysInstancedANGLE(method, 0, this.VERTICES, this.capacity);
                    }
                }
            }
        }
    ]);
}();
var AbstractNodeProgram = /*#__PURE__*/ function(_AbstractProgram) {
    function AbstractNodeProgram() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, AbstractNodeProgram);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, AbstractNodeProgram, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AbstractNodeProgram, _AbstractProgram);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(AbstractNodeProgram);
}(AbstractProgram);
var NodeProgram = /*#__PURE__*/ function(_ref) {
    function NodeProgram() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, NodeProgram);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, NodeProgram, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NodeProgram, _ref);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(NodeProgram, [
        {
            key: "kill",
            value: function kill() {
                _superPropGet(NodeProgram, "kill", this, 3)([]);
            }
        },
        {
            key: "process",
            value: function process(nodeIndex, offset, data) {
                var i = offset * this.STRIDE;
                // NOTE: dealing with hidden items automatically
                if (data.hidden) {
                    for(var l = i + this.STRIDE; i < l; i++){
                        this.array[i] = 0;
                    }
                    return;
                }
                return this.processVisibleItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(nodeIndex), i, data);
            }
        }
    ]);
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional node "draw label" function.
 * @param  {function} drawHover - An optional node "draw hover" function.
 * @return {function}
 */ function createNodeCompoundProgram(programClasses, drawLabel, drawHover) {
    return /*#__PURE__*/ function() {
        function NodeCompoundProgram(gl, pickingBuffer, renderer) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, NodeCompoundProgram);
            _defineProperty(this, "drawLabel", drawLabel);
            _defineProperty(this, "drawHover", drawHover);
            this.programs = programClasses.map(function(Program) {
                return new Program(gl, pickingBuffer, renderer);
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(NodeCompoundProgram, [
            {
                key: "reallocate",
                value: function reallocate(capacity) {
                    this.programs.forEach(function(program) {
                        return program.reallocate(capacity);
                    });
                }
            },
            {
                key: "process",
                value: function process(nodeIndex, offset, data) {
                    this.programs.forEach(function(program) {
                        return program.process(nodeIndex, offset, data);
                    });
                }
            },
            {
                key: "render",
                value: function render(params) {
                    this.programs.forEach(function(program) {
                        return program.render(params);
                    });
                }
            },
            {
                key: "kill",
                value: function kill() {
                    this.programs.forEach(function(program) {
                        return program.kill();
                    });
                }
            }
        ]);
    }();
}
var AbstractEdgeProgram = /*#__PURE__*/ function(_AbstractProgram) {
    function AbstractEdgeProgram() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, AbstractEdgeProgram);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, AbstractEdgeProgram, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AbstractEdgeProgram, _AbstractProgram);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(AbstractEdgeProgram);
}(AbstractProgram);
var EdgeProgram = /*#__PURE__*/ function(_ref) {
    function EdgeProgram() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, EdgeProgram);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, EdgeProgram, [].concat(args));
        _defineProperty(_this, "drawLabel", undefined);
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EdgeProgram, _ref);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(EdgeProgram, [
        {
            key: "kill",
            value: function kill() {
                _superPropGet(EdgeProgram, "kill", this, 3)([]);
            }
        },
        {
            key: "process",
            value: function process(edgeIndex, offset, sourceData, targetData, data) {
                var i = offset * this.STRIDE;
                // NOTE: dealing with hidden items automatically
                if (data.hidden || sourceData.hidden || targetData.hidden) {
                    for(var l = i + this.STRIDE; i < l; i++){
                        this.array[i] = 0;
                    }
                    return;
                }
                return this.processVisibleItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(edgeIndex), i, sourceData, targetData, data);
            }
        }
    ]);
}(Program);
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @param  {function} drawLabel - An optional edge "draw label" function.
 * @return {function}
 */ function createEdgeCompoundProgram(programClasses, drawLabel) {
    return /*#__PURE__*/ function() {
        function EdgeCompoundProgram(gl, pickingBuffer, renderer) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, EdgeCompoundProgram);
            _defineProperty(this, "drawLabel", drawLabel);
            this.programs = programClasses.map(function(Program) {
                return new Program(gl, pickingBuffer, renderer);
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(EdgeCompoundProgram, [
            {
                key: "reallocate",
                value: function reallocate(capacity) {
                    this.programs.forEach(function(program) {
                        return program.reallocate(capacity);
                    });
                }
            },
            {
                key: "process",
                value: function process(edgeIndex, offset, sourceData, targetData, data) {
                    this.programs.forEach(function(program) {
                        return program.process(edgeIndex, offset, sourceData, targetData, data);
                    });
                }
            },
            {
                key: "render",
                value: function render(params) {
                    this.programs.forEach(function(program) {
                        return program.render(params);
                    });
                }
            },
            {
                key: "kill",
                value: function kill() {
                    this.programs.forEach(function(program) {
                        return program.kill();
                    });
                }
            }
        ]);
    }();
}
function drawStraightEdgeLabel(context, edgeData, sourceData, targetData, settings) {
    var size = settings.edgeLabelSize, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
    var label = edgeData.label;
    if (!label) return;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    // Computing positions without considering nodes sizes:
    var sSize = sourceData.size;
    var tSize = targetData.size;
    var sx = sourceData.x;
    var sy = sourceData.y;
    var tx = targetData.x;
    var ty = targetData.y;
    var cx = (sx + tx) / 2;
    var cy = (sy + ty) / 2;
    var dx = tx - sx;
    var dy = ty - sy;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d < sSize + tSize) return;
    // Adding nodes sizes:
    sx += dx * sSize / d;
    sy += dy * sSize / d;
    tx -= dx * tSize / d;
    ty -= dy * tSize / d;
    cx = (sx + tx) / 2;
    cy = (sy + ty) / 2;
    dx = tx - sx;
    dy = ty - sy;
    d = Math.sqrt(dx * dx + dy * dy);
    // Handling ellipsis
    var textLength = context.measureText(label).width;
    if (textLength > d) {
        var ellipsis = "…";
        label = label + ellipsis;
        textLength = context.measureText(label).width;
        while(textLength > d && label.length > 1){
            label = label.slice(0, -2) + ellipsis;
            textLength = context.measureText(label).width;
        }
        if (label.length < 4) return;
    }
    var angle;
    if (dx > 0) {
        if (dy > 0) angle = Math.acos(dx / d);
        else angle = Math.asin(dy / d);
    } else {
        if (dy > 0) angle = Math.acos(dx / d) + Math.PI;
        else angle = Math.asin(dx / d) + Math.PI / 2;
    }
    context.save();
    context.translate(cx, cy);
    context.rotate(angle);
    context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
    context.restore();
}
function drawDiscNodeLabel(context, data, settings) {
    if (!data.label) return;
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight, color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
    context.fillStyle = color;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}
/**
 * Draw an hovered node.
 * - if there is no label => display a shadow on the node
 * - if the label box is bigger than node size => display a label box that contains the node with a shadow
 * - else node with shadow and the label box
 */ function drawDiscNodeHover(context, data, settings) {
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
    context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
    // Then we draw the label background
    context.fillStyle = "#FFF";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = "#000";
    var PADDING = 2;
    if (typeof data.label === "string") {
        var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
        var angleRadian = Math.asin(boxHeight / 2 / radius);
        var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
        context.beginPath();
        context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
        context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
        context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
        context.closePath();
        context.fill();
    } else {
        context.beginPath();
        context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 0;
    // And finally we draw the label
    drawDiscNodeLabel(context, data, settings);
}
// language=GLSL
var SHADER_SOURCE$6 = /*glsl*/ "\nprecision highp float;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\n\nuniform float u_correctionRatio;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float border = u_correctionRatio * 2.0;\n  float dist = length(v_diffVector) - v_radius + border;\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > border)\n    gl_FragColor = transparent;\n  else\n    gl_FragColor = v_color;\n\n  #else\n  float t = 0.0;\n  if (dist > border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / border;\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;
// language=GLSL
var SHADER_SOURCE$5 = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\nattribute float a_angle;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;\n  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));\n  vec2 position = a_position + diffVector;\n  gl_Position = vec4(\n    (u_matrix * vec3(position, 1)).xy,\n    0,\n    1\n  );\n\n  v_diffVector = diffVector;\n  v_radius = size / 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;
var _WebGLRenderingContex$3 = WebGLRenderingContext, UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE, FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$3 = [
    "u_sizeRatio",
    "u_correctionRatio",
    "u_matrix"
];
var NodeCircleProgram = /*#__PURE__*/ function(_NodeProgram) {
    function NodeCircleProgram() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, NodeCircleProgram);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, NodeCircleProgram, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NodeCircleProgram, _NodeProgram);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(NodeCircleProgram, [
        {
            key: "getDefinition",
            value: function getDefinition() {
                return {
                    VERTICES: 3,
                    VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
                    FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
                    METHOD: WebGLRenderingContext.TRIANGLES,
                    UNIFORMS: UNIFORMS$3,
                    ATTRIBUTES: [
                        {
                            name: "a_position",
                            size: 2,
                            type: FLOAT$3
                        },
                        {
                            name: "a_size",
                            size: 1,
                            type: FLOAT$3
                        },
                        {
                            name: "a_color",
                            size: 4,
                            type: UNSIGNED_BYTE$3,
                            normalized: true
                        },
                        {
                            name: "a_id",
                            size: 4,
                            type: UNSIGNED_BYTE$3,
                            normalized: true
                        }
                    ],
                    CONSTANT_ATTRIBUTES: [
                        {
                            name: "a_angle",
                            size: 1,
                            type: FLOAT$3
                        }
                    ],
                    CONSTANT_DATA: [
                        [
                            NodeCircleProgram.ANGLE_1
                        ],
                        [
                            NodeCircleProgram.ANGLE_2
                        ],
                        [
                            NodeCircleProgram.ANGLE_3
                        ]
                    ]
                };
            }
        },
        {
            key: "processVisibleItem",
            value: function processVisibleItem(nodeIndex, startIndex, data) {
                var array = this.array;
                var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(data.color);
                array[startIndex++] = data.x;
                array[startIndex++] = data.y;
                array[startIndex++] = data.size;
                array[startIndex++] = color;
                array[startIndex++] = nodeIndex;
            }
        },
        {
            key: "setUniforms",
            value: function setUniforms(params, _ref) {
                var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                var u_sizeRatio = uniformLocations.u_sizeRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_matrix = uniformLocations.u_matrix;
                gl.uniform1f(u_correctionRatio, params.correctionRatio);
                gl.uniform1f(u_sizeRatio, params.sizeRatio);
                gl.uniformMatrix3fv(u_matrix, false, params.matrix);
            }
        }
    ]);
}(NodeProgram);
_defineProperty(NodeCircleProgram, "ANGLE_1", 0);
_defineProperty(NodeCircleProgram, "ANGLE_2", 2 * Math.PI / 3);
_defineProperty(NodeCircleProgram, "ANGLE_3", 4 * Math.PI / 3);
// language=GLSL
var SHADER_SOURCE$4 = /*glsl*/ "\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$4;
// language=GLSL
var SHADER_SOURCE$3 = /*glsl*/ "\nattribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec3 a_barycentric;\n\n#ifdef PICKING_MODE\nattribute vec4 a_id;\n#else\nattribute vec4 a_color;\n#endif\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_widenessToThicknessRatio;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$3;
var _WebGLRenderingContex$2 = WebGLRenderingContext, UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE, FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = [
    "u_matrix",
    "u_sizeRatio",
    "u_correctionRatio",
    "u_minEdgeThickness",
    "u_lengthToThicknessRatio",
    "u_widenessToThicknessRatio"
];
var DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = {
    extremity: "target",
    lengthToThicknessRatio: 2.5,
    widenessToThicknessRatio: 2
};
function createEdgeArrowHeadProgram(inputOptions) {
    var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS), inputOptions || {});
    return /*#__PURE__*/ function(_EdgeProgram) {
        function EdgeArrowHeadProgram() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, EdgeArrowHeadProgram);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, EdgeArrowHeadProgram, arguments);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EdgeArrowHeadProgram, _EdgeProgram);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(EdgeArrowHeadProgram, [
            {
                key: "getDefinition",
                value: function getDefinition() {
                    return {
                        VERTICES: 3,
                        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
                        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
                        METHOD: WebGLRenderingContext.TRIANGLES,
                        UNIFORMS: UNIFORMS$2,
                        ATTRIBUTES: [
                            {
                                name: "a_position",
                                size: 2,
                                type: FLOAT$2
                            },
                            {
                                name: "a_normal",
                                size: 2,
                                type: FLOAT$2
                            },
                            {
                                name: "a_radius",
                                size: 1,
                                type: FLOAT$2
                            },
                            {
                                name: "a_color",
                                size: 4,
                                type: UNSIGNED_BYTE$2,
                                normalized: true
                            },
                            {
                                name: "a_id",
                                size: 4,
                                type: UNSIGNED_BYTE$2,
                                normalized: true
                            }
                        ],
                        CONSTANT_ATTRIBUTES: [
                            {
                                name: "a_barycentric",
                                size: 3,
                                type: FLOAT$2
                            }
                        ],
                        CONSTANT_DATA: [
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    };
                }
            },
            {
                key: "processVisibleItem",
                value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                    if (options.extremity === "source") {
                        var _ref = [
                            targetData,
                            sourceData
                        ];
                        sourceData = _ref[0];
                        targetData = _ref[1];
                    }
                    var thickness = data.size || 1;
                    var radius = targetData.size || 1;
                    var x1 = sourceData.x;
                    var y1 = sourceData.y;
                    var x2 = targetData.x;
                    var y2 = targetData.y;
                    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(data.color);
                    // Computing normals
                    var dx = x2 - x1;
                    var dy = y2 - y1;
                    var len = dx * dx + dy * dy;
                    var n1 = 0;
                    var n2 = 0;
                    if (len) {
                        len = 1 / Math.sqrt(len);
                        n1 = -dy * len * thickness;
                        n2 = dx * len * thickness;
                    }
                    var array = this.array;
                    array[startIndex++] = x2;
                    array[startIndex++] = y2;
                    array[startIndex++] = -n1;
                    array[startIndex++] = -n2;
                    array[startIndex++] = radius;
                    array[startIndex++] = color;
                    array[startIndex++] = edgeIndex;
                }
            },
            {
                key: "setUniforms",
                value: function setUniforms(params, _ref2) {
                    var gl = _ref2.gl, uniformLocations = _ref2.uniformLocations;
                    var u_matrix = uniformLocations.u_matrix, u_sizeRatio = uniformLocations.u_sizeRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness, u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio, u_widenessToThicknessRatio = uniformLocations.u_widenessToThicknessRatio;
                    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                    gl.uniform1f(u_sizeRatio, params.sizeRatio);
                    gl.uniform1f(u_correctionRatio, params.correctionRatio);
                    gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
                    gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
                    gl.uniform1f(u_widenessToThicknessRatio, options.widenessToThicknessRatio);
                }
            }
        ]);
    }(EdgeProgram);
}
var EdgeArrowHeadProgram = createEdgeArrowHeadProgram();
var EdgeArrowHeadProgram$1 = EdgeArrowHeadProgram;
// language=GLSL
var SHADER_SOURCE$2 = /*glsl*/ "\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  // We only handle antialiasing for normal mode:\n  #ifdef PICKING_MODE\n  gl_FragColor = v_color;\n  #else\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - v_feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n";
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$2;
// language=GLSL
var SHADER_SOURCE$1 = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_radius;\nattribute float a_radiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float radius = a_radius * a_radiusCoef;\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(radius);\n  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$1;
var _WebGLRenderingContex$1 = WebGLRenderingContext, UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE, FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = [
    "u_matrix",
    "u_zoomRatio",
    "u_sizeRatio",
    "u_correctionRatio",
    "u_pixelRatio",
    "u_feather",
    "u_minEdgeThickness",
    "u_lengthToThicknessRatio"
];
var DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = {
    lengthToThicknessRatio: DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS.lengthToThicknessRatio
};
function createEdgeClampedProgram(inputOptions) {
    var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS), inputOptions || {});
    return /*#__PURE__*/ function(_EdgeProgram) {
        function EdgeClampedProgram() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, EdgeClampedProgram);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, EdgeClampedProgram, arguments);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EdgeClampedProgram, _EdgeProgram);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(EdgeClampedProgram, [
            {
                key: "getDefinition",
                value: function getDefinition() {
                    return {
                        VERTICES: 6,
                        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
                        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
                        METHOD: WebGLRenderingContext.TRIANGLES,
                        UNIFORMS: UNIFORMS$1,
                        ATTRIBUTES: [
                            {
                                name: "a_positionStart",
                                size: 2,
                                type: FLOAT$1
                            },
                            {
                                name: "a_positionEnd",
                                size: 2,
                                type: FLOAT$1
                            },
                            {
                                name: "a_normal",
                                size: 2,
                                type: FLOAT$1
                            },
                            {
                                name: "a_color",
                                size: 4,
                                type: UNSIGNED_BYTE$1,
                                normalized: true
                            },
                            {
                                name: "a_id",
                                size: 4,
                                type: UNSIGNED_BYTE$1,
                                normalized: true
                            },
                            {
                                name: "a_radius",
                                size: 1,
                                type: FLOAT$1
                            }
                        ],
                        CONSTANT_ATTRIBUTES: [
                            // If 0, then position will be a_positionStart
                            // If 1, then position will be a_positionEnd
                            {
                                name: "a_positionCoef",
                                size: 1,
                                type: FLOAT$1
                            },
                            {
                                name: "a_normalCoef",
                                size: 1,
                                type: FLOAT$1
                            },
                            {
                                name: "a_radiusCoef",
                                size: 1,
                                type: FLOAT$1
                            }
                        ],
                        CONSTANT_DATA: [
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                -1,
                                0
                            ],
                            [
                                1,
                                1,
                                1
                            ],
                            [
                                1,
                                1,
                                1
                            ],
                            [
                                0,
                                -1,
                                0
                            ],
                            [
                                1,
                                -1,
                                -1
                            ]
                        ]
                    };
                }
            },
            {
                key: "processVisibleItem",
                value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                    var thickness = data.size || 1;
                    var x1 = sourceData.x;
                    var y1 = sourceData.y;
                    var x2 = targetData.x;
                    var y2 = targetData.y;
                    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(data.color);
                    // Computing normals
                    var dx = x2 - x1;
                    var dy = y2 - y1;
                    var radius = targetData.size || 1;
                    var len = dx * dx + dy * dy;
                    var n1 = 0;
                    var n2 = 0;
                    if (len) {
                        len = 1 / Math.sqrt(len);
                        n1 = -dy * len * thickness;
                        n2 = dx * len * thickness;
                    }
                    var array = this.array;
                    array[startIndex++] = x1;
                    array[startIndex++] = y1;
                    array[startIndex++] = x2;
                    array[startIndex++] = y2;
                    array[startIndex++] = n1;
                    array[startIndex++] = n2;
                    array[startIndex++] = color;
                    array[startIndex++] = edgeIndex;
                    array[startIndex++] = radius;
                }
            },
            {
                key: "setUniforms",
                value: function setUniforms(params, _ref) {
                    var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                    var u_matrix = uniformLocations.u_matrix, u_zoomRatio = uniformLocations.u_zoomRatio, u_feather = uniformLocations.u_feather, u_pixelRatio = uniformLocations.u_pixelRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_sizeRatio = uniformLocations.u_sizeRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness, u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio;
                    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                    gl.uniform1f(u_zoomRatio, params.zoomRatio);
                    gl.uniform1f(u_sizeRatio, params.sizeRatio);
                    gl.uniform1f(u_correctionRatio, params.correctionRatio);
                    gl.uniform1f(u_pixelRatio, params.pixelRatio);
                    gl.uniform1f(u_feather, params.antiAliasingFeather);
                    gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
                    gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
                }
            }
        ]);
    }(EdgeProgram);
}
var EdgeClampedProgram = createEdgeClampedProgram();
var EdgeClampedProgram$1 = EdgeClampedProgram;
function createEdgeArrowProgram(inputOptions) {
    return createEdgeCompoundProgram([
        createEdgeClampedProgram(inputOptions),
        createEdgeArrowHeadProgram(inputOptions)
    ]);
}
var EdgeArrowProgram = createEdgeArrowProgram();
var EdgeArrowProgram$1 = EdgeArrowProgram;
// language=GLSL
var SHADER_SOURCE = /*glsl*/ "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_zoomRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // We require edges to be at least \"minThickness\" pixels thick *on screen*\n  // (so we need to compensate the size ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our \"magic\" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the \"magic\"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here's yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n";
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;
var _WebGLRenderingContex = WebGLRenderingContext, UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE, FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = [
    "u_matrix",
    "u_zoomRatio",
    "u_sizeRatio",
    "u_correctionRatio",
    "u_pixelRatio",
    "u_feather",
    "u_minEdgeThickness"
];
var EdgeRectangleProgram = /*#__PURE__*/ function(_EdgeProgram) {
    function EdgeRectangleProgram() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, EdgeRectangleProgram);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, EdgeRectangleProgram, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EdgeRectangleProgram, _EdgeProgram);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(EdgeRectangleProgram, [
        {
            key: "getDefinition",
            value: function getDefinition() {
                return {
                    VERTICES: 6,
                    VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE,
                    FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE,
                    METHOD: WebGLRenderingContext.TRIANGLES,
                    UNIFORMS: UNIFORMS,
                    ATTRIBUTES: [
                        {
                            name: "a_positionStart",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_positionEnd",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_normal",
                            size: 2,
                            type: FLOAT
                        },
                        {
                            name: "a_color",
                            size: 4,
                            type: UNSIGNED_BYTE,
                            normalized: true
                        },
                        {
                            name: "a_id",
                            size: 4,
                            type: UNSIGNED_BYTE,
                            normalized: true
                        }
                    ],
                    CONSTANT_ATTRIBUTES: [
                        // If 0, then position will be a_positionStart
                        // If 2, then position will be a_positionEnd
                        {
                            name: "a_positionCoef",
                            size: 1,
                            type: FLOAT
                        },
                        {
                            name: "a_normalCoef",
                            size: 1,
                            type: FLOAT
                        }
                    ],
                    CONSTANT_DATA: [
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            -1
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            0,
                            -1
                        ],
                        [
                            1,
                            -1
                        ]
                    ]
                };
            }
        },
        {
            key: "processVisibleItem",
            value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
                var thickness = data.size || 1;
                var x1 = sourceData.x;
                var y1 = sourceData.y;
                var x2 = targetData.x;
                var y2 = targetData.y;
                var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(data.color);
                // Computing normals
                var dx = x2 - x1;
                var dy = y2 - y1;
                var len = dx * dx + dy * dy;
                var n1 = 0;
                var n2 = 0;
                if (len) {
                    len = 1 / Math.sqrt(len);
                    n1 = -dy * len * thickness;
                    n2 = dx * len * thickness;
                }
                var array = this.array;
                array[startIndex++] = x1;
                array[startIndex++] = y1;
                array[startIndex++] = x2;
                array[startIndex++] = y2;
                array[startIndex++] = n1;
                array[startIndex++] = n2;
                array[startIndex++] = color;
                array[startIndex++] = edgeIndex;
            }
        },
        {
            key: "setUniforms",
            value: function setUniforms(params, _ref) {
                var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
                var u_matrix = uniformLocations.u_matrix, u_zoomRatio = uniformLocations.u_zoomRatio, u_feather = uniformLocations.u_feather, u_pixelRatio = uniformLocations.u_pixelRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_sizeRatio = uniformLocations.u_sizeRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
                gl.uniformMatrix3fv(u_matrix, false, params.matrix);
                gl.uniform1f(u_zoomRatio, params.zoomRatio);
                gl.uniform1f(u_sizeRatio, params.sizeRatio);
                gl.uniform1f(u_correctionRatio, params.correctionRatio);
                gl.uniform1f(u_pixelRatio, params.pixelRatio);
                gl.uniform1f(u_feather, params.antiAliasingFeather);
                gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
            }
        }
    ]);
}(EdgeProgram);
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/types/dist/sigma-types.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypedEventEmitter",
    ()=>TypedEventEmitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/inherits-d1a1e29b.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$events$40$3$2e$3$2e$0$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/events@3.3.0/node_modules/events/events.js [app-client] (ecmascript)");
;
;
/**
 * Util type to represent maps of typed elements, but implemented with
 * JavaScript objects.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Returns a type similar to T, but with the K set of properties of the type
 * T *required*, and the rest optional.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Returns a type similar to Partial<T>, but with at least one key set.
 */ /**
 * Custom event emitter types.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
var TypedEventEmitter = /*#__PURE__*/ function(_ref) {
    function TypedEventEmitter() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, TypedEventEmitter);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, TypedEventEmitter);
        _this.rawEmitter = _this;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(TypedEventEmitter, _ref);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(TypedEventEmitter);
}(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$events$40$3$2e$3$2e$0$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"]);
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */ /**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */ module.exports = function isGraph(value) {
    return value !== null && typeof value === 'object' && typeof value.addUndirectedEdgeWithKey === 'function' && typeof value.dropNode === 'function' && typeof value.multi === 'boolean';
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/normalization-be445518.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>ANIMATE_DEFAULTS,
    "a",
    ()=>getMatrixImpact,
    "b",
    ()=>createElement,
    "c",
    ()=>createNormalizationFunction,
    "d",
    ()=>getPixelRatio,
    "e",
    ()=>easings,
    "f",
    ()=>multiplyVec2,
    "g",
    ()=>graphExtent,
    "h",
    ()=>animateNodes,
    "i",
    ()=>identity,
    "j",
    ()=>getCorrectionRatio,
    "k",
    ()=>quadraticOut,
    "l",
    ()=>linear,
    "m",
    ()=>matrixFromCamera,
    "n",
    ()=>quadraticInOut,
    "o",
    ()=>cubicIn,
    "p",
    ()=>cubicOut,
    "q",
    ()=>quadraticIn,
    "r",
    ()=>cubicInOut,
    "s",
    ()=>scale,
    "t",
    ()=>rotate,
    "u",
    ()=>translate,
    "v",
    ()=>validateGraph,
    "w",
    ()=>multiply,
    "z",
    ()=>zIndexOrdering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$utils$40$2$2e$5$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$utils$2f$is$2d$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/colors-beb06eb2.esm.js [app-client] (ecmascript)");
;
;
var linear = function linear(k) {
    return k;
};
var quadraticIn = function quadraticIn(k) {
    return k * k;
};
var quadraticOut = function quadraticOut(k) {
    return k * (2 - k);
};
var quadraticInOut = function quadraticInOut(k) {
    if ((k *= 2) < 1) return 0.5 * k * k;
    return -0.5 * (--k * (k - 2) - 1);
};
var cubicIn = function cubicIn(k) {
    return k * k * k;
};
var cubicOut = function cubicOut(k) {
    return --k * k * k + 1;
};
var cubicInOut = function cubicInOut(k) {
    if ((k *= 2) < 1) return 0.5 * k * k * k;
    return 0.5 * ((k -= 2) * k * k + 2);
};
var easings = {
    linear: linear,
    quadraticIn: quadraticIn,
    quadraticOut: quadraticOut,
    quadraticInOut: quadraticInOut,
    cubicIn: cubicIn,
    cubicOut: cubicOut,
    cubicInOut: cubicInOut
};
/**
 * Defaults.
 */ var ANIMATE_DEFAULTS = {
    easing: "quadraticInOut",
    duration: 150
};
/**
 * Function used to animate the nodes.
 */ function animateNodes(graph, targets, opts, callback) {
    var options = Object.assign({}, ANIMATE_DEFAULTS, opts);
    var easing = typeof options.easing === "function" ? options.easing : easings[options.easing];
    var start = Date.now();
    var startPositions = {};
    for(var node in targets){
        var attrs = targets[node];
        startPositions[node] = {};
        for(var _k in attrs)startPositions[node][_k] = graph.getNodeAttribute(node, _k);
    }
    var frame = null;
    var _step = function step() {
        frame = null;
        var p = (Date.now() - start) / options.duration;
        if (p >= 1) {
            // Animation is done
            for(var _node in targets){
                var _attrs = targets[_node];
                // We use given values to avoid precision issues and for convenience
                for(var _k2 in _attrs)graph.setNodeAttribute(_node, _k2, _attrs[_k2]);
            }
            if (typeof callback === "function") callback();
            return;
        }
        p = easing(p);
        for(var _node2 in targets){
            var _attrs2 = targets[_node2];
            var s = startPositions[_node2];
            for(var _k3 in _attrs2)graph.setNodeAttribute(_node2, _k3, _attrs2[_k3] * p + s[_k3] * (1 - p));
        }
        frame = requestAnimationFrame(_step);
    };
    _step();
    return function() {
        if (frame) cancelAnimationFrame(frame);
    };
}
function identity() {
    return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}
// TODO: optimize
function scale(m, x, y) {
    m[0] = x;
    m[4] = typeof y === "number" ? y : x;
    return m;
}
function rotate(m, r) {
    var s = Math.sin(r), c = Math.cos(r);
    m[0] = c;
    m[1] = s;
    m[3] = -s;
    m[4] = c;
    return m;
}
function translate(m, x, y) {
    m[6] = x;
    m[7] = y;
    return m;
}
function multiply(a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    a[0] = b00 * a00 + b01 * a10 + b02 * a20;
    a[1] = b00 * a01 + b01 * a11 + b02 * a21;
    a[2] = b00 * a02 + b01 * a12 + b02 * a22;
    a[3] = b10 * a00 + b11 * a10 + b12 * a20;
    a[4] = b10 * a01 + b11 * a11 + b12 * a21;
    a[5] = b10 * a02 + b11 * a12 + b12 * a22;
    a[6] = b20 * a00 + b21 * a10 + b22 * a20;
    a[7] = b20 * a01 + b21 * a11 + b22 * a21;
    a[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return a;
}
function multiplyVec2(a, b) {
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var a00 = a[0];
    var a01 = a[1];
    var a10 = a[3];
    var a11 = a[4];
    var a20 = a[6];
    var a21 = a[7];
    var b0 = b.x;
    var b1 = b.y;
    return {
        x: b0 * a00 + b1 * a10 + a20 * z,
        y: b0 * a01 + b1 * a11 + a21 * z
    };
}
/**
 * In sigma, the graph is normalized into a [0, 1], [0, 1] square, before being given to the various renderers. This
 * helps to deal with quadtree in particular.
 * But at some point, we need to rescale it so that it takes the best place in the screen, i.e. we always want to see two
 * nodes "touching" opposite sides of the graph, with the camera being at its default state.
 *
 * This function determines this ratio.
 */ function getCorrectionRatio(viewportDimensions, graphDimensions) {
    var viewportRatio = viewportDimensions.height / viewportDimensions.width;
    var graphRatio = graphDimensions.height / graphDimensions.width;
    // If the stage and the graphs are in different directions (such as the graph being wider that tall while the stage
    // is taller than wide), we can stop here to have indeed nodes touching opposite sides:
    if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
        return 1;
    }
    // Else, we need to fit the graph inside the stage:
    // 1. If the graph is "squarer" (i.e. with a ratio closer to 1), we need to make the largest sides touch;
    // 2. If the stage is "squarer", we need to make the smallest sides touch.
    return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
}
/**
 * Function returning a matrix from the current state of the camera.
 */ function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
    // TODO: it's possible to optimize this drastically!
    var angle = state.angle, ratio = state.ratio, x = state.x, y = state.y;
    var width = viewportDimensions.width, height = viewportDimensions.height;
    var matrix = identity();
    var smallestDimension = Math.min(width, height) - 2 * padding;
    var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
    if (!inverse) {
        multiply(matrix, scale(identity(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
        multiply(matrix, rotate(identity(), -angle));
        multiply(matrix, scale(identity(), 1 / ratio));
        multiply(matrix, translate(identity(), -x, -y));
    } else {
        multiply(matrix, translate(identity(), x, y));
        multiply(matrix, scale(identity(), ratio));
        multiply(matrix, rotate(identity(), angle));
        multiply(matrix, scale(identity(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
    }
    return matrix;
}
/**
 * All these transformations we apply on the matrix to get it rescale the graph
 * as we want make it very hard to get pixel-perfect distances in WebGL. This
 * function returns a factor that properly cancels the matrix effect on lengths.
 *
 * [jacomyal]
 * To be fully honest, I can't really explain happens here... I notice that the
 * following ratio works (i.e. it correctly compensates the matrix impact on all
 * camera states I could try):
 * > `R = size(V) / size(M * V) / W`
 * as long as `M * V` is in the direction of W (ie. parallel to (Ox)). It works
 * as well with H and a vector that transforms into something parallel to (Oy).
 *
 * Also, note that we use `angle` and not `-angle` (that would seem logical,
 * since we want to anticipate the rotation), because the image is vertically
 * swapped in WebGL.
 */ function getMatrixImpact(matrix, cameraState, viewportDimensions) {
    var _multiplyVec = multiplyVec2(matrix, {
        x: Math.cos(cameraState.angle),
        y: Math.sin(cameraState.angle)
    }, 0), x = _multiplyVec.x, y = _multiplyVec.y;
    return 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / viewportDimensions.width;
}
/**
 * Function returning the graph's node extent in x & y.
 */ function graphExtent(graph) {
    if (!graph.order) return {
        x: [
            0,
            1
        ],
        y: [
            0,
            1
        ]
    };
    var xMin = Infinity;
    var xMax = -Infinity;
    var yMin = Infinity;
    var yMax = -Infinity;
    graph.forEachNode(function(_, attr) {
        var x = attr.x, y = attr.y;
        if (x < xMin) xMin = x;
        if (x > xMax) xMax = x;
        if (y < yMin) yMin = y;
        if (y > yMax) yMax = y;
    });
    return {
        x: [
            xMin,
            xMax
        ],
        y: [
            yMin,
            yMax
        ]
    };
}
/**
 * Check if the graph variable is a valid graph, and if sigma can render it.
 */ function validateGraph(graph) {
    // check if it's a valid graphology instance
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$utils$40$2$2e$5$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$utils$2f$is$2d$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(graph)) throw new Error("Sigma: invalid graph instance.");
    // check if nodes have x/y attributes
    graph.forEachNode(function(key, attributes) {
        if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
            throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
        }
    });
}
/**
 * Function used to create DOM elements easily.
 */ function createElement(tag, style, attributes) {
    var element = document.createElement(tag);
    if (style) {
        for(var k in style){
            element.style[k] = style[k];
        }
    }
    if (attributes) {
        for(var _k in attributes){
            element.setAttribute(_k, attributes[_k]);
        }
    }
    return element;
}
/**
 * Function returning the browser's pixel ratio.
 */ function getPixelRatio() {
    if (typeof window.devicePixelRatio !== "undefined") return window.devicePixelRatio;
    return 1;
}
/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 */ function zIndexOrdering(_extent, getter, elements) {
    // If k is > n, we'll use a standard sort
    return elements.sort(function(a, b) {
        var zA = getter(a) || 0, zB = getter(b) || 0;
        if (zA < zB) return -1;
        if (zA > zB) return 1;
        return 0;
    });
// TODO: counting sort optimization
}
/**
 * Factory returning a function normalizing the given node's position & size.
 */ function createNormalizationFunction(extent) {
    var _extent$x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(extent.x, 2), minX = _extent$x[0], maxX = _extent$x[1], _extent$y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(extent.y, 2), minY = _extent$y[0], maxY = _extent$y[1];
    var ratio = Math.max(maxX - minX, maxY - minY), dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
    if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio)) ratio = 1;
    if (isNaN(dX)) dX = 0;
    if (isNaN(dY)) dY = 0;
    var fn = function fn(data) {
        return {
            x: 0.5 + (data.x - dX) / ratio,
            y: 0.5 + (data.y - dY) / ratio
        };
    };
    // TODO: possibility to apply this in batch over array of indices
    fn.applyTo = function(data) {
        data.x = 0.5 + (data.x - dX) / ratio;
        data.y = 0.5 + (data.y - dY) / ratio;
    };
    fn.inverse = function(data) {
        return {
            x: dX + ratio * (data.x - 0.5),
            y: dY + ratio * (data.y - 0.5)
        };
    };
    fn.ratio = ratio;
    return fn;
}
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/data-11df7124.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_typeof,
    "a",
    ()=>assign,
    "b",
    ()=>assignDeep,
    "e",
    ()=>extend,
    "i",
    ()=>isPlainObject
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
/**
 * Extends the target array with the given values.
 */ function extend(array, values) {
    var l2 = values.size;
    if (l2 === 0) return;
    var l1 = array.length;
    array.length += l2;
    var i = 0;
    values.forEach(function(value) {
        array[l1 + i] = value;
        i++;
    });
}
/**
 * Checks whether the given value is a plain object.
 */ function isPlainObject(value) {
    return _typeof(value) === "object" && value !== null && value.constructor === Object;
}
/**
 * Helper to use `Object.assign` with more than two objects.
 */ function assign(target) {
    target = target || {};
    for(var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++){
        var o = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
        if (!o) continue;
        Object.assign(target, o);
    }
    return target;
}
/**
 * Very simple recursive `Object.assign` like function.
 */ function assignDeep(target) {
    target = target || {};
    for(var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++){
        var o = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
        if (!o) continue;
        for(var k in o){
            if (isPlainObject(o[k])) {
                target[k] = assignDeep(target[k], o[k]);
            } else {
                target[k] = o[k];
            }
        }
    }
    return target;
}
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/settings/dist/sigma-settings.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_EDGE_PROGRAM_CLASSES",
    ()=>DEFAULT_EDGE_PROGRAM_CLASSES,
    "DEFAULT_NODE_PROGRAM_CLASSES",
    ()=>DEFAULT_NODE_PROGRAM_CLASSES,
    "DEFAULT_SETTINGS",
    ()=>DEFAULT_SETTINGS,
    "resolveSettings",
    ()=>resolveSettings,
    "validateSettings",
    ()=>validateSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/index-236c62ad.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/data-11df7124.esm.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Sigma.js Settings
 * =================================
 *
 * The list of settings and some handy functions.
 * @module
 */ /**
 * Sigma.js settings
 * =================================
 */ var DEFAULT_SETTINGS = {
    // Performance
    hideEdgesOnMove: false,
    hideLabelsOnMove: false,
    renderLabels: true,
    renderEdgeLabels: false,
    enableEdgeEvents: false,
    // Component rendering
    defaultNodeColor: "#999",
    defaultNodeType: "circle",
    defaultEdgeColor: "#ccc",
    defaultEdgeType: "line",
    labelFont: "Arial",
    labelSize: 14,
    labelWeight: "normal",
    labelColor: {
        color: "#000"
    },
    edgeLabelFont: "Arial",
    edgeLabelSize: 14,
    edgeLabelWeight: "normal",
    edgeLabelColor: {
        attribute: "color"
    },
    stagePadding: 30,
    defaultDrawEdgeLabel: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"],
    defaultDrawNodeLabel: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"],
    defaultDrawNodeHover: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"],
    minEdgeThickness: 1.7,
    antiAliasingFeather: 1,
    // Mouse and touch settings
    dragTimeout: 100,
    draggedEventsTolerance: 3,
    inertiaDuration: 200,
    inertiaRatio: 3,
    zoomDuration: 250,
    zoomingRatio: 1.7,
    doubleClickTimeout: 300,
    doubleClickZoomingRatio: 2.2,
    doubleClickZoomingDuration: 200,
    tapMoveTolerance: 10,
    // Size and scaling
    zoomToSizeRatioFunction: Math.sqrt,
    itemSizesReference: "screen",
    autoRescale: true,
    autoCenter: true,
    // Labels
    labelDensity: 1,
    labelGridCellSize: 100,
    labelRenderedSizeThreshold: 6,
    // Reducers
    nodeReducer: null,
    edgeReducer: null,
    // Features
    zIndex: false,
    minCameraRatio: null,
    maxCameraRatio: null,
    enableCameraZooming: true,
    enableCameraPanning: true,
    enableCameraRotation: true,
    cameraPanBoundaries: null,
    // Lifecycle
    allowInvalidContainer: false,
    // Program classes
    nodeProgramClasses: {},
    nodeHoverProgramClasses: {},
    edgeProgramClasses: {}
};
var DEFAULT_NODE_PROGRAM_CLASSES = {
    circle: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"]
};
var DEFAULT_EDGE_PROGRAM_CLASSES = {
    arrow: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"],
    line: __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]
};
function validateSettings(settings) {
    if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
        throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
    }
    var minCameraRatio = settings.minCameraRatio, maxCameraRatio = settings.maxCameraRatio;
    if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
        throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
    }
}
function resolveSettings(settings) {
    var resolvedSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({}, DEFAULT_SETTINGS, settings);
    resolvedSettings.nodeProgramClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({}, DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
    resolvedSettings.edgeProgramClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({}, DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
    return resolvedSettings;
}
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/sigma.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>Camera,
    "MouseCaptor",
    ()=>MouseCaptor,
    "Sigma",
    ()=>Sigma$1,
    "TouchCaptor",
    ()=>TouchCaptor,
    "default",
    ()=>Sigma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/index-236c62ad.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/inherits-d1a1e29b.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$types$2f$dist$2f$sigma$2d$types$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/types/dist/sigma-types.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/normalization-be445518.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$settings$2f$dist$2f$sigma$2d$settings$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/settings/dist/sigma-settings.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/colors-beb06eb2.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/data-11df7124.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$events$40$3$2e$3$2e$0$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/events@3.3.0/node_modules/events/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$utils$40$2$2e$5$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$utils$2f$is$2d$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Defaults.
 */ var DEFAULT_ZOOMING_RATIO = 1.5;
/**
 * Event types.
 */ /**
 * Camera class
 */ var Camera = /*#__PURE__*/ function(_TypedEventEmitter) {
    function Camera() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, Camera);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, Camera);
        // State
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "x", 0.5);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "y", 0.5);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "angle", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "ratio", 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "minRatio", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "maxRatio", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "enabledZooming", true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "enabledPanning", true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "enabledRotation", true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "clean", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nextFrame", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "previousState", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "enabled", true);
        _this.previousState = _this.getState();
        return _this;
    }
    /**
   * Static method used to create a Camera object with a given state.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Camera, _TypedEventEmitter);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(Camera, [
        {
            key: "enable",
            value: /**
     * Method used to enable the camera.
     */ function enable() {
                this.enabled = true;
                return this;
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.enabled = false;
                return this;
            }
        },
        {
            key: "getState",
            value: function getState() {
                return {
                    x: this.x,
                    y: this.y,
                    angle: this.angle,
                    ratio: this.ratio
                };
            }
        },
        {
            key: "hasState",
            value: function hasState(state) {
                return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
            }
        },
        {
            key: "getPreviousState",
            value: function getPreviousState() {
                var state = this.previousState;
                if (!state) return null;
                return {
                    x: state.x,
                    y: state.y,
                    angle: state.angle,
                    ratio: state.ratio
                };
            }
        },
        {
            key: "getBoundedRatio",
            value: function getBoundedRatio(ratio) {
                var r = ratio;
                if (typeof this.minRatio === "number") r = Math.max(r, this.minRatio);
                if (typeof this.maxRatio === "number") r = Math.min(r, this.maxRatio);
                return r;
            }
        },
        {
            key: "validateState",
            value: function validateState(state) {
                var validatedState = {};
                if (this.enabledPanning && typeof state.x === "number") validatedState.x = state.x;
                if (this.enabledPanning && typeof state.y === "number") validatedState.y = state.y;
                if (this.enabledZooming && typeof state.ratio === "number") validatedState.ratio = this.getBoundedRatio(state.ratio);
                if (this.enabledRotation && typeof state.angle === "number") validatedState.angle = state.angle;
                return this.clean ? this.clean((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.getState()), validatedState)) : validatedState;
            }
        },
        {
            key: "isAnimated",
            value: function isAnimated() {
                return !!this.nextFrame;
            }
        },
        {
            key: "setState",
            value: function setState(state) {
                if (!this.enabled) return this;
                // Keeping track of last state
                this.previousState = this.getState();
                var validState = this.validateState(state);
                if (typeof validState.x === "number") this.x = validState.x;
                if (typeof validState.y === "number") this.y = validState.y;
                if (typeof validState.ratio === "number") this.ratio = validState.ratio;
                if (typeof validState.angle === "number") this.angle = validState.angle;
                // Emitting
                if (!this.hasState(this.previousState)) this.emit("updated", this.getState());
                return this;
            }
        },
        {
            key: "updateState",
            value: function updateState(updater) {
                this.setState(updater(this.getState()));
                return this;
            }
        },
        {
            key: "animate",
            value: function animate(state) {
                var _this2 = this;
                var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var callback = arguments.length > 2 ? arguments[2] : undefined;
                if (!callback) return new Promise(function(resolve) {
                    return _this2.animate(state, opts, resolve);
                });
                if (!this.enabled) return;
                var options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"]), opts);
                var validState = this.validateState(state);
                var easing = typeof options.easing === "function" ? options.easing : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"][options.easing];
                // State
                var start = Date.now(), initialState = this.getState();
                // Function performing the animation
                var _fn = function fn() {
                    var t = (Date.now() - start) / options.duration;
                    // The animation is over:
                    if (t >= 1) {
                        _this2.nextFrame = null;
                        _this2.setState(validState);
                        if (_this2.animationCallback) {
                            _this2.animationCallback.call(null);
                            _this2.animationCallback = undefined;
                        }
                        return;
                    }
                    var coefficient = easing(t);
                    var newState = {};
                    if (typeof validState.x === "number") newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
                    if (typeof validState.y === "number") newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
                    if (_this2.enabledRotation && typeof validState.angle === "number") newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
                    if (typeof validState.ratio === "number") newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
                    _this2.setState(newState);
                    _this2.nextFrame = requestAnimationFrame(_fn);
                };
                if (this.nextFrame) {
                    cancelAnimationFrame(this.nextFrame);
                    if (this.animationCallback) this.animationCallback.call(null);
                    this.nextFrame = requestAnimationFrame(_fn);
                } else {
                    _fn();
                }
                this.animationCallback = callback;
            }
        },
        {
            key: "animatedZoom",
            value: function animatedZoom(factorOrOptions) {
                if (!factorOrOptions) return this.animate({
                    ratio: this.ratio / DEFAULT_ZOOMING_RATIO
                });
                if (typeof factorOrOptions === "number") return this.animate({
                    ratio: this.ratio / factorOrOptions
                });
                return this.animate({
                    ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
                }, factorOrOptions);
            }
        },
        {
            key: "animatedUnzoom",
            value: function animatedUnzoom(factorOrOptions) {
                if (!factorOrOptions) return this.animate({
                    ratio: this.ratio * DEFAULT_ZOOMING_RATIO
                });
                if (typeof factorOrOptions === "number") return this.animate({
                    ratio: this.ratio * factorOrOptions
                });
                return this.animate({
                    ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
                }, factorOrOptions);
            }
        },
        {
            key: "animatedReset",
            value: function animatedReset(options) {
                return this.animate({
                    x: 0.5,
                    y: 0.5,
                    ratio: 1,
                    angle: 0
                }, options);
            }
        },
        {
            key: "copy",
            value: function copy() {
                return Camera.from(this.getState());
            }
        }
    ], [
        {
            key: "from",
            value: function from(state) {
                var camera = new Camera();
                return camera.setState(state);
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$types$2f$dist$2f$sigma$2d$types$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedEventEmitter"]);
/**
 * Captor utils functions
 * ======================
 */ /**
 * Extract the local X and Y coordinates from a mouse event or touch object. If
 * a DOM element is given, it uses this element's offset to compute the position
 * (this allows using events that are not bound to the container itself and
 * still have a proper position).
 *
 * @param  {event}       e - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {number}      The local Y value of the mouse.
 */ function getPosition(e, dom) {
    var bbox = dom.getBoundingClientRect();
    return {
        x: e.clientX - bbox.left,
        y: e.clientY - bbox.top
    };
}
/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}       e   - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */ function getMouseCoords(e, dom) {
    var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, getPosition(e, dom)), {}, {
        sigmaDefaultPrevented: false,
        preventSigmaDefault: function preventSigmaDefault() {
            res.sigmaDefaultPrevented = true;
        },
        original: e
    });
    return res;
}
/**
 * Takes a touch coords or a mouse coords, and always returns a clean mouse coords object.
 */ function cleanMouseCoords(e) {
    var res = "x" in e ? e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, e.touches[0] || e.previousTouches[0]), {}, {
        original: e.original,
        sigmaDefaultPrevented: e.sigmaDefaultPrevented,
        preventSigmaDefault: function preventSigmaDefault() {
            e.sigmaDefaultPrevented = true;
            res.sigmaDefaultPrevented = true;
        }
    });
    return res;
}
/**
 * Convert mouse wheel event coords to sigma coords.
 *
 * @param  {event}       e   - A wheel mouse event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */ function getWheelCoords(e, dom) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, getMouseCoords(e, dom)), {}, {
        delta: getWheelDelta(e)
    });
}
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
    var arr = [];
    for(var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++)arr.push(touches[i]);
    return arr;
}
/**
 * Convert touch coords to sigma coords.
 *
 * @param  {event}       e               - A touch event.
 * @param  {Touch[]}     previousTouches - An array of the previously stored touches.
 * @param  {HTMLElement} dom             - A DOM element to compute offset relatively to.
 * @return {object}
 */ function getTouchCoords(e, previousTouches, dom) {
    var res = {
        touches: getTouchesArray(e.touches).map(function(touch) {
            return getPosition(touch, dom);
        }),
        previousTouches: previousTouches.map(function(touch) {
            return getPosition(touch, dom);
        }),
        sigmaDefaultPrevented: false,
        preventSigmaDefault: function preventSigmaDefault() {
            res.sigmaDefaultPrevented = true;
        },
        original: e
    };
    return res;
}
/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */ function getWheelDelta(e) {
    // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
    if (typeof e.deltaY !== "undefined") return e.deltaY * -3 / 360;
    if (typeof e.detail !== "undefined") return e.detail / -9;
    throw new Error("Captor: could not extract delta from event.");
}
/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */ var Captor = /*#__PURE__*/ function(_TypedEventEmitter) {
    function Captor(container, renderer) {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, Captor);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, Captor);
        // Properties
        _this.container = container;
        _this.renderer = renderer;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Captor, _TypedEventEmitter);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(Captor);
}(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$types$2f$dist$2f$sigma$2d$types$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedEventEmitter"]);
var MOUSE_SETTINGS_KEYS = [
    "doubleClickTimeout",
    "doubleClickZoomingDuration",
    "doubleClickZoomingRatio",
    "dragTimeout",
    "draggedEventsTolerance",
    "inertiaDuration",
    "inertiaRatio",
    "zoomDuration",
    "zoomingRatio"
];
var DEFAULT_MOUSE_SETTINGS = MOUSE_SETTINGS_KEYS.reduce(function(iter, key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, iter), {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({}, key, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$settings$2f$dist$2f$sigma$2d$settings$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"][key]));
}, {});
/**
 * Event types.
 */ /**
 * Mouse captor class.
 *
 * @constructor
 */ var MouseCaptor = /*#__PURE__*/ function(_Captor) {
    function MouseCaptor(container, renderer) {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, MouseCaptor);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, MouseCaptor, [
            container,
            renderer
        ]);
        // Binding methods
        // State
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "enabled", true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "draggedEvents", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "downStartTime", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "lastMouseX", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "lastMouseY", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "isMouseDown", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "isMoving", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "movingTimeout", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "startCameraState", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "clicks", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "doubleClickTimeout", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "currentWheelDirection", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "settings", DEFAULT_MOUSE_SETTINGS);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleRightClick = _this.handleRightClick.bind(_this);
        _this.handleDown = _this.handleDown.bind(_this);
        _this.handleUp = _this.handleUp.bind(_this);
        _this.handleMove = _this.handleMove.bind(_this);
        _this.handleWheel = _this.handleWheel.bind(_this);
        _this.handleLeave = _this.handleLeave.bind(_this);
        _this.handleEnter = _this.handleEnter.bind(_this);
        // Binding events
        container.addEventListener("click", _this.handleClick, {
            capture: false
        });
        container.addEventListener("contextmenu", _this.handleRightClick, {
            capture: false
        });
        container.addEventListener("mousedown", _this.handleDown, {
            capture: false
        });
        container.addEventListener("wheel", _this.handleWheel, {
            capture: false
        });
        container.addEventListener("mouseleave", _this.handleLeave, {
            capture: false
        });
        container.addEventListener("mouseenter", _this.handleEnter, {
            capture: false
        });
        document.addEventListener("mousemove", _this.handleMove, {
            capture: false
        });
        document.addEventListener("mouseup", _this.handleUp, {
            capture: false
        });
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MouseCaptor, _Captor);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(MouseCaptor, [
        {
            key: "kill",
            value: function kill() {
                var container = this.container;
                container.removeEventListener("click", this.handleClick);
                container.removeEventListener("contextmenu", this.handleRightClick);
                container.removeEventListener("mousedown", this.handleDown);
                container.removeEventListener("wheel", this.handleWheel);
                container.removeEventListener("mouseleave", this.handleLeave);
                container.removeEventListener("mouseenter", this.handleEnter);
                document.removeEventListener("mousemove", this.handleMove);
                document.removeEventListener("mouseup", this.handleUp);
            }
        },
        {
            key: "handleClick",
            value: function handleClick(e) {
                var _this2 = this;
                if (!this.enabled) return;
                this.clicks++;
                if (this.clicks === 2) {
                    this.clicks = 0;
                    if (typeof this.doubleClickTimeout === "number") {
                        clearTimeout(this.doubleClickTimeout);
                        this.doubleClickTimeout = null;
                    }
                    return this.handleDoubleClick(e);
                }
                setTimeout(function() {
                    _this2.clicks = 0;
                    _this2.doubleClickTimeout = null;
                }, this.settings.doubleClickTimeout);
                // NOTE: this is here to prevent click events on drag
                if (this.draggedEvents < this.settings.draggedEventsTolerance) this.emit("click", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleRightClick",
            value: function handleRightClick(e) {
                if (!this.enabled) return;
                this.emit("rightClick", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleDoubleClick",
            value: function handleDoubleClick(e) {
                if (!this.enabled) return;
                e.preventDefault();
                e.stopPropagation();
                var mouseCoords = getMouseCoords(e, this.container);
                this.emit("doubleClick", mouseCoords);
                if (mouseCoords.sigmaDefaultPrevented) return;
                // default behavior
                var camera = this.renderer.getCamera();
                var newRatio = camera.getBoundedRatio(camera.getState().ratio / this.settings.doubleClickZoomingRatio);
                camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
                    easing: "quadraticInOut",
                    duration: this.settings.doubleClickZoomingDuration
                });
            }
        },
        {
            key: "handleDown",
            value: function handleDown(e) {
                if (!this.enabled) return;
                // We only start dragging on left button
                if (e.button === 0) {
                    this.startCameraState = this.renderer.getCamera().getState();
                    var _getPosition = getPosition(e, this.container), x = _getPosition.x, y = _getPosition.y;
                    this.lastMouseX = x;
                    this.lastMouseY = y;
                    this.draggedEvents = 0;
                    this.downStartTime = Date.now();
                    this.isMouseDown = true;
                }
                this.emit("mousedown", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleUp",
            value: function handleUp(e) {
                var _this3 = this;
                if (!this.enabled || !this.isMouseDown) return;
                var camera = this.renderer.getCamera();
                this.isMouseDown = false;
                if (typeof this.movingTimeout === "number") {
                    clearTimeout(this.movingTimeout);
                    this.movingTimeout = null;
                }
                var _getPosition2 = getPosition(e, this.container), x = _getPosition2.x, y = _getPosition2.y;
                var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
                    x: 0,
                    y: 0
                };
                if (this.isMoving) {
                    camera.animate({
                        x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
                        y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
                    }, {
                        duration: this.settings.inertiaDuration,
                        easing: "quadraticOut"
                    });
                } else if (this.lastMouseX !== x || this.lastMouseY !== y) {
                    camera.setState({
                        x: cameraState.x,
                        y: cameraState.y
                    });
                }
                this.isMoving = false;
                setTimeout(function() {
                    var shouldRefresh = _this3.draggedEvents > 0;
                    _this3.draggedEvents = 0;
                    // NOTE: this refresh is here to make sure `hideEdgesOnMove` can work
                    // when someone releases camera pan drag after having stopped moving.
                    // See commit: https://github.com/jacomyal/sigma.js/commit/cfd9197f70319109db6b675dd7c82be493ca95a2
                    // See also issue: https://github.com/jacomyal/sigma.js/issues/1290
                    // It could be possible to render instead of scheduling a refresh but for
                    // now it seems good enough.
                    if (shouldRefresh && _this3.renderer.getSetting("hideEdgesOnMove")) _this3.renderer.refresh();
                }, 0);
                this.emit("mouseup", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleMove",
            value: function handleMove(e) {
                var _this4 = this;
                if (!this.enabled) return;
                var mouseCoords = getMouseCoords(e, this.container);
                // Always trigger a "mousemovebody" event, so that it is possible to develop
                // a drag-and-drop effect that works even when the mouse is out of the
                // container:
                this.emit("mousemovebody", mouseCoords);
                // Only trigger the "mousemove" event when the mouse is actually hovering
                // the container, to avoid weirdly hovering nodes and/or edges when the
                // mouse is not hover the container:
                if (e.target === this.container || e.composedPath()[0] === this.container) {
                    this.emit("mousemove", mouseCoords);
                }
                if (mouseCoords.sigmaDefaultPrevented) return;
                // Handle the case when "isMouseDown" all the time, to allow dragging the
                // stage while the mouse is not hover the container:
                if (this.isMouseDown) {
                    this.isMoving = true;
                    this.draggedEvents++;
                    if (typeof this.movingTimeout === "number") {
                        clearTimeout(this.movingTimeout);
                    }
                    this.movingTimeout = window.setTimeout(function() {
                        _this4.movingTimeout = null;
                        _this4.isMoving = false;
                    }, this.settings.dragTimeout);
                    var camera = this.renderer.getCamera();
                    var _getPosition3 = getPosition(e, this.container), eX = _getPosition3.x, eY = _getPosition3.y;
                    var lastMouse = this.renderer.viewportToFramedGraph({
                        x: this.lastMouseX,
                        y: this.lastMouseY
                    });
                    var mouse = this.renderer.viewportToFramedGraph({
                        x: eX,
                        y: eY
                    });
                    var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
                    var cameraState = camera.getState();
                    var x = cameraState.x + offsetX, y = cameraState.y + offsetY;
                    camera.setState({
                        x: x,
                        y: y
                    });
                    this.lastMouseX = eX;
                    this.lastMouseY = eY;
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        },
        {
            key: "handleLeave",
            value: function handleLeave(e) {
                this.emit("mouseleave", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleEnter",
            value: function handleEnter(e) {
                this.emit("mouseenter", getMouseCoords(e, this.container));
            }
        },
        {
            key: "handleWheel",
            value: function handleWheel(e) {
                var _this5 = this;
                var camera = this.renderer.getCamera();
                if (!this.enabled || !camera.enabledZooming) return;
                var delta = getWheelDelta(e);
                if (!delta) return;
                var wheelCoords = getWheelCoords(e, this.container);
                this.emit("wheel", wheelCoords);
                if (wheelCoords.sigmaDefaultPrevented) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                // Default behavior
                var currentRatio = camera.getState().ratio;
                var ratioDiff = delta > 0 ? 1 / this.settings.zoomingRatio : this.settings.zoomingRatio;
                var newRatio = camera.getBoundedRatio(currentRatio * ratioDiff);
                var wheelDirection = delta > 0 ? 1 : -1;
                var now = Date.now();
                // Exit early without preventing default behavior when ratio doesn't change:
                if (currentRatio === newRatio) return;
                e.preventDefault();
                e.stopPropagation();
                // Cancel events that are too close each other and in the same direction:
                if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < this.settings.zoomDuration / 5) {
                    return;
                }
                camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
                    easing: "quadraticOut",
                    duration: this.settings.zoomDuration
                }, function() {
                    _this5.currentWheelDirection = 0;
                });
                this.currentWheelDirection = wheelDirection;
                this.lastWheelTriggerTime = now;
            }
        },
        {
            key: "setSettings",
            value: function setSettings(settings) {
                this.settings = settings;
            }
        }
    ]);
}(Captor);
var TOUCH_SETTINGS_KEYS = [
    "dragTimeout",
    "inertiaDuration",
    "inertiaRatio",
    "doubleClickTimeout",
    "doubleClickZoomingRatio",
    "doubleClickZoomingDuration",
    "tapMoveTolerance"
];
var DEFAULT_TOUCH_SETTINGS = TOUCH_SETTINGS_KEYS.reduce(function(iter, key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, iter), {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({}, key, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$settings$2f$dist$2f$sigma$2d$settings$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"][key]));
}, {});
/**
 * Event types.
 */ /**
 * Touch captor class.
 *
 * @constructor
 */ var TouchCaptor = /*#__PURE__*/ function(_Captor) {
    function TouchCaptor(container, renderer) {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, TouchCaptor);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, TouchCaptor, [
            container,
            renderer
        ]);
        // Binding methods:
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "enabled", true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "isMoving", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "hasMoved", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "touchMode", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "startTouchesPositions", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "lastTouches", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "lastTap", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "settings", DEFAULT_TOUCH_SETTINGS);
        _this.handleStart = _this.handleStart.bind(_this);
        _this.handleLeave = _this.handleLeave.bind(_this);
        _this.handleMove = _this.handleMove.bind(_this);
        // Binding events
        container.addEventListener("touchstart", _this.handleStart, {
            capture: false
        });
        container.addEventListener("touchcancel", _this.handleLeave, {
            capture: false
        });
        document.addEventListener("touchend", _this.handleLeave, {
            capture: false,
            passive: false
        });
        document.addEventListener("touchmove", _this.handleMove, {
            capture: false,
            passive: false
        });
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(TouchCaptor, _Captor);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(TouchCaptor, [
        {
            key: "kill",
            value: function kill() {
                var container = this.container;
                container.removeEventListener("touchstart", this.handleStart);
                container.removeEventListener("touchcancel", this.handleLeave);
                document.removeEventListener("touchend", this.handleLeave);
                document.removeEventListener("touchmove", this.handleMove);
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions() {
                return {
                    width: this.container.offsetWidth,
                    height: this.container.offsetHeight
                };
            }
        },
        {
            key: "handleStart",
            value: function handleStart(e) {
                var _this2 = this;
                if (!this.enabled) return;
                e.preventDefault();
                var touches = getTouchesArray(e.touches);
                this.touchMode = touches.length;
                this.startCameraState = this.renderer.getCamera().getState();
                this.startTouchesPositions = touches.map(function(touch) {
                    return getPosition(touch, _this2.container);
                });
                // When there are two touches down, let's record distance and angle as well:
                if (this.touchMode === 2) {
                    var _this$startTouchesPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this.startTouchesPositions, 2), _this$startTouchesPos2 = _this$startTouchesPos[0], x0 = _this$startTouchesPos2.x, y0 = _this$startTouchesPos2.y, _this$startTouchesPos3 = _this$startTouchesPos[1], x1 = _this$startTouchesPos3.x, y1 = _this$startTouchesPos3.y;
                    this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
                    this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
                }
                this.emit("touchdown", getTouchCoords(e, this.lastTouches, this.container));
                this.lastTouches = touches;
                this.lastTouchesPositions = this.startTouchesPositions;
            }
        },
        {
            key: "handleLeave",
            value: function handleLeave(e) {
                if (!this.enabled || !this.startTouchesPositions.length) return;
                if (e.cancelable) e.preventDefault();
                if (this.movingTimeout) {
                    this.isMoving = false;
                    clearTimeout(this.movingTimeout);
                }
                switch(this.touchMode){
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    case 2:
                        if (e.touches.length === 1) {
                            this.handleStart(e);
                            e.preventDefault();
                            break;
                        }
                    /* falls through */ case 1:
                        if (this.isMoving) {
                            var camera = this.renderer.getCamera();
                            var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
                                x: 0,
                                y: 0
                            };
                            camera.animate({
                                x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
                                y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
                            }, {
                                duration: this.settings.inertiaDuration,
                                easing: "quadraticOut"
                            });
                        }
                        this.hasMoved = false;
                        this.isMoving = false;
                        this.touchMode = 0;
                        break;
                }
                this.emit("touchup", getTouchCoords(e, this.lastTouches, this.container));
                // When the last touch ends and there hasn't been too much movement, trigger a "tap" or "doubletap" event:
                if (!e.touches.length) {
                    var position = getPosition(this.lastTouches[0], this.container);
                    var downPosition = this.startTouchesPositions[0];
                    var dSquare = Math.pow(position.x - downPosition.x, 2) + Math.pow(position.y - downPosition.y, 2);
                    if (!e.touches.length && dSquare < Math.pow(this.settings.tapMoveTolerance, 2)) {
                        // Only trigger "doubletap" when the last tap is recent enough:
                        if (this.lastTap && Date.now() - this.lastTap.time < this.settings.doubleClickTimeout) {
                            var touchCoords = getTouchCoords(e, this.lastTouches, this.container);
                            this.emit("doubletap", touchCoords);
                            this.lastTap = null;
                            if (!touchCoords.sigmaDefaultPrevented) {
                                var _camera = this.renderer.getCamera();
                                var newRatio = _camera.getBoundedRatio(_camera.getState().ratio / this.settings.doubleClickZoomingRatio);
                                _camera.animate(this.renderer.getViewportZoomedState(position, newRatio), {
                                    easing: "quadraticInOut",
                                    duration: this.settings.doubleClickZoomingDuration
                                });
                            }
                        } else {
                            var _touchCoords = getTouchCoords(e, this.lastTouches, this.container);
                            this.emit("tap", _touchCoords);
                            this.lastTap = {
                                time: Date.now(),
                                position: _touchCoords.touches[0] || _touchCoords.previousTouches[0]
                            };
                        }
                    }
                }
                this.lastTouches = getTouchesArray(e.touches);
                this.startTouchesPositions = [];
            }
        },
        {
            key: "handleMove",
            value: function handleMove(e) {
                var _this3 = this;
                if (!this.enabled || !this.startTouchesPositions.length) return;
                e.preventDefault();
                var touches = getTouchesArray(e.touches);
                var touchesPositions = touches.map(function(touch) {
                    return getPosition(touch, _this3.container);
                });
                var lastTouches = this.lastTouches;
                this.lastTouches = touches;
                this.lastTouchesPositions = touchesPositions;
                var touchCoords = getTouchCoords(e, lastTouches, this.container);
                this.emit("touchmove", touchCoords);
                if (touchCoords.sigmaDefaultPrevented) return;
                // If a move was initiated at some point, and we get back to start point,
                // we should still consider that we did move (which also happens after a
                // multiple touch when only one touch remains in which case handleStart
                // is recalled within handleLeave).
                // Now, some mobile browsers report zero-distance moves so we also check that
                // one of the touches did actually move from the origin position.
                this.hasMoved || (this.hasMoved = touchesPositions.some(function(position, idx) {
                    var startPosition = _this3.startTouchesPositions[idx];
                    return startPosition && (position.x !== startPosition.x || position.y !== startPosition.y);
                }));
                // If there was no move, do not trigger touch moves behavior
                if (!this.hasMoved) {
                    return;
                }
                this.isMoving = true;
                if (this.movingTimeout) clearTimeout(this.movingTimeout);
                this.movingTimeout = window.setTimeout(function() {
                    _this3.isMoving = false;
                }, this.settings.dragTimeout);
                var camera = this.renderer.getCamera();
                var startCameraState = this.startCameraState;
                var padding = this.renderer.getSetting("stagePadding");
                switch(this.touchMode){
                    case 1:
                        {
                            var _this$renderer$viewpo = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _this$renderer$viewpo.x, yStart = _this$renderer$viewpo.y;
                            var _this$renderer$viewpo2 = this.renderer.viewportToFramedGraph(touchesPositions[0]), x = _this$renderer$viewpo2.x, y = _this$renderer$viewpo2.y;
                            camera.setState({
                                x: startCameraState.x + xStart - x,
                                y: startCameraState.y + yStart - y
                            });
                            break;
                        }
                    case 2:
                        {
                            /**
             * Here is the thinking here:
             *
             * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
             *    of the d'n'd and now
             *
             * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
             *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
             *    position of this same touch now
             */ var newCameraState = {
                                x: 0.5,
                                y: 0.5,
                                angle: 0,
                                ratio: 1
                            };
                            var _touchesPositions$ = touchesPositions[0], x0 = _touchesPositions$.x, y0 = _touchesPositions$.y;
                            var _touchesPositions$2 = touchesPositions[1], x1 = _touchesPositions$2.x, y1 = _touchesPositions$2.y;
                            var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
                            var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
                            // 1.
                            var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
                            newCameraState.ratio = newRatio;
                            newCameraState.angle = startCameraState.angle + angleDiff;
                            // 2.
                            var dimensions = this.getDimensions();
                            var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
                                cameraState: startCameraState
                            });
                            var smallestDimension = Math.min(dimensions.width, dimensions.height) - 2 * padding;
                            var dx = smallestDimension / dimensions.width;
                            var dy = smallestDimension / dimensions.height;
                            var ratio = newRatio / smallestDimension;
                            // Align with center of the graph:
                            var _x = x0 - smallestDimension / 2 / dx;
                            var _y = y0 - smallestDimension / 2 / dy;
                            // Rotate:
                            var _ref = [
                                _x * Math.cos(-newCameraState.angle) - _y * Math.sin(-newCameraState.angle),
                                _y * Math.cos(-newCameraState.angle) + _x * Math.sin(-newCameraState.angle)
                            ];
                            _x = _ref[0];
                            _y = _ref[1];
                            newCameraState.x = touchGraphPosition.x - _x * ratio;
                            newCameraState.y = touchGraphPosition.y + _y * ratio;
                            camera.setState(newCameraState);
                            break;
                        }
                }
            }
        },
        {
            key: "setSettings",
            value: function setSettings(settings) {
                this.settings = settings;
            }
        }
    ]);
}(Captor);
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(r);
}
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r) || _nonIterableSpread();
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
/**
 * Sigma.js Labels Heuristics
 * ===========================
 *
 * Miscellaneous heuristics related to label display.
 * @module
 */ /**
 * Class representing a single candidate for the label grid selection.
 *
 * It also describes a deterministic way to compare two candidates to assess
 * which one is better.
 */ var LabelCandidate = /*#__PURE__*/ function() {
    function LabelCandidate(key, size) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, LabelCandidate);
        this.key = key;
        this.size = size;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(LabelCandidate, null, [
        {
            key: "compare",
            value: function compare(first, second) {
                // First we compare by size
                if (first.size > second.size) return -1;
                if (first.size < second.size) return 1;
                // Then since no two nodes can have the same key, we use it to
                // deterministically tie-break by key
                if (first.key > second.key) return 1;
                // NOTE: this comparator cannot return 0
                return -1;
            }
        }
    ]);
}();
/**
 * Class representing a 2D spatial grid divided into constant-size cells.
 */ var LabelGrid = /*#__PURE__*/ function() {
    function LabelGrid() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, LabelGrid);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "width", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "height", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "cellSize", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "columns", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "rows", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "cells", {});
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(LabelGrid, [
        {
            key: "resizeAndClear",
            value: function resizeAndClear(dimensions, cellSize) {
                this.width = dimensions.width;
                this.height = dimensions.height;
                this.cellSize = cellSize;
                this.columns = Math.ceil(dimensions.width / cellSize);
                this.rows = Math.ceil(dimensions.height / cellSize);
                this.cells = {};
            }
        },
        {
            key: "getIndex",
            value: function getIndex(pos) {
                var xIndex = Math.floor(pos.x / this.cellSize);
                var yIndex = Math.floor(pos.y / this.cellSize);
                return yIndex * this.columns + xIndex;
            }
        },
        {
            key: "add",
            value: function add(key, size, pos) {
                var candidate = new LabelCandidate(key, size);
                var index = this.getIndex(pos);
                var cell = this.cells[index];
                if (!cell) {
                    cell = [];
                    this.cells[index] = cell;
                }
                cell.push(candidate);
            }
        },
        {
            key: "organize",
            value: function organize() {
                for(var k in this.cells){
                    var cell = this.cells[k];
                    cell.sort(LabelCandidate.compare);
                }
            }
        },
        {
            key: "getLabelsToDisplay",
            value: function getLabelsToDisplay(ratio, density) {
                // TODO: work on visible nodes to optimize? ^ -> threshold outside so that memoization works?
                // TODO: adjust threshold lower, but increase cells a bit?
                // TODO: hunt for geom issue in disguise
                // TODO: memoize while ratio does not move. method to force recompute
                var cellArea = this.cellSize * this.cellSize;
                var scaledCellArea = cellArea / ratio / ratio;
                var scaledDensity = scaledCellArea * density / cellArea;
                var labelsToDisplayPerCell = Math.ceil(scaledDensity);
                var labels = [];
                for(var k in this.cells){
                    var cell = this.cells[k];
                    for(var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++){
                        labels.push(cell[i].key);
                    }
                }
                return labels;
            }
        }
    ]);
}();
/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */ function edgeLabelsToDisplayFromNodes(params) {
    var graph = params.graph, hoveredNode = params.hoveredNode, highlightedNodes = params.highlightedNodes, displayedNodeLabels = params.displayedNodeLabels;
    var worthyEdges = [];
    // TODO: the code below can be optimized using #.forEach and batching the code per adj
    // We should display an edge's label if:
    //   - Any of its extremities is highlighted or hovered
    //   - Both of its extremities has its label shown
    graph.forEachEdge(function(edge, _, source, target) {
        if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
            worthyEdges.push(edge);
        }
    });
    return worthyEdges;
}
/**
 * Constants.
 */ var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Important functions.
 */ function applyNodeDefaults(settings, key, data) {
    if (!hasOwnProperty.call(data, "x") || !hasOwnProperty.call(data, "y")) throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
    if (!data.color) data.color = settings.defaultNodeColor;
    if (!data.label && data.label !== "") data.label = null;
    if (data.label !== undefined && data.label !== null) data.label = "" + data.label;
    else data.label = null;
    if (!data.size) data.size = 2;
    if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
    if (!hasOwnProperty.call(data, "highlighted")) data.highlighted = false;
    if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
    if (!data.type || data.type === "") data.type = settings.defaultNodeType;
    if (!data.zIndex) data.zIndex = 0;
    return data;
}
function applyEdgeDefaults(settings, _key, data) {
    if (!data.color) data.color = settings.defaultEdgeColor;
    if (!data.label) data.label = "";
    if (!data.size) data.size = 0.5;
    if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
    if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
    if (!data.type || data.type === "") data.type = settings.defaultEdgeType;
    if (!data.zIndex) data.zIndex = 0;
    return data;
}
/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */ var Sigma$1 = /*#__PURE__*/ function(_TypedEventEmitter) {
    function Sigma(graph, container) {
        var _this;
        var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this, Sigma);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, Sigma);
        // Resolving settings
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "elements", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "canvasContexts", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "webGLContexts", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "pickingLayers", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "textures", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "frameBuffers", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "activeListeners", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "labelGrid", new LabelGrid());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodeDataCache", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "edgeDataCache", {});
        // Indices to keep track of the index of the item inside programs
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodeProgramIndex", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "edgeProgramIndex", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodesWithForcedLabels", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "edgesWithForcedLabels", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodeExtent", {
            x: [
                0,
                1
            ],
            y: [
                0,
                1
            ]
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodeZExtent", [
            Infinity,
            -Infinity
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "edgeZExtent", [
            Infinity,
            -Infinity
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "matrix", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "invMatrix", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "correctionRatio", 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "customBBox", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "normalizationFunction", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
            x: [
                0,
                1
            ],
            y: [
                0,
                1
            ]
        }));
        // Cache:
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "graphToViewportRatio", 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "itemIDsIndex", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodeIndices", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "edgeIndices", {});
        // Starting dimensions and pixel ratio
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "width", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "height", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "pixelRatio", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "pickingDownSizingRatio", 2 * _this.pixelRatio);
        // Graph State
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "displayedNodeLabels", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "displayedEdgeLabels", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "highlightedNodes", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "hoveredNode", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "hoveredEdge", null);
        // Internal states
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "renderFrame", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "renderHighlightedNodesFrame", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "needToProcess", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "checkEdgesEventsFrame", null);
        // Programs
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodePrograms", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "nodeHoverPrograms", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(_this, "edgePrograms", {});
        _this.settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$settings$2f$dist$2f$sigma$2d$settings$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSettings"])(settings);
        // Validating
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$settings$2f$dist$2f$sigma$2d$settings$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSettings"])(_this.settings);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"])(graph);
        if (!(container instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");
        // Properties
        _this.graph = graph;
        _this.container = container;
        // Initializing contexts
        _this.createWebGLContext("edges", {
            picking: settings.enableEdgeEvents
        });
        _this.createCanvasContext("edgeLabels");
        _this.createWebGLContext("nodes", {
            picking: true
        });
        _this.createCanvasContext("labels");
        _this.createCanvasContext("hovers");
        _this.createWebGLContext("hoverNodes");
        _this.createCanvasContext("mouse", {
            style: {
                touchAction: "none",
                userSelect: "none"
            }
        });
        // Initial resize
        _this.resize();
        // Loading programs
        for(var type in _this.settings.nodeProgramClasses){
            _this.registerNodeProgram(type, _this.settings.nodeProgramClasses[type], _this.settings.nodeHoverProgramClasses[type]);
        }
        for(var _type in _this.settings.edgeProgramClasses){
            _this.registerEdgeProgram(_type, _this.settings.edgeProgramClasses[_type]);
        }
        // Initializing the camera
        _this.camera = new Camera();
        // Binding camera events
        _this.bindCameraHandlers();
        // Initializing captors
        _this.mouseCaptor = new MouseCaptor(_this.elements.mouse, _this);
        _this.mouseCaptor.setSettings(_this.settings);
        _this.touchCaptor = new TouchCaptor(_this.elements.mouse, _this);
        _this.touchCaptor.setSettings(_this.settings);
        // Binding event handlers
        _this.bindEventHandlers();
        // Binding graph handlers
        _this.bindGraphHandlers();
        // Trigger eventual settings-related things
        _this.handleSettingsUpdate();
        // Processing data for the first time & render
        _this.refresh();
        return _this;
    }
    /**---------------------------------------------------------------------------
   * Internal methods.
   **---------------------------------------------------------------------------
   */ /**
   * Internal function used to register a node program
   *
   * @param  {string}           key              - The program's key, matching the related nodes "type" values.
   * @param  {NodeProgramType}  NodeProgramClass - A nodes program class.
   * @param  {NodeProgramType?} NodeHoverProgram - A nodes program class to render hovered nodes (optional).
   * @return {Sigma}
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Sigma, _TypedEventEmitter);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(Sigma, [
        {
            key: "registerNodeProgram",
            value: function registerNodeProgram(key, NodeProgramClass, NodeHoverProgram) {
                if (this.nodePrograms[key]) this.nodePrograms[key].kill();
                if (this.nodeHoverPrograms[key]) this.nodeHoverPrograms[key].kill();
                this.nodePrograms[key] = new NodeProgramClass(this.webGLContexts.nodes, this.frameBuffers.nodes, this);
                this.nodeHoverPrograms[key] = new (NodeHoverProgram || NodeProgramClass)(this.webGLContexts.hoverNodes, null, this);
                return this;
            }
        },
        {
            key: "registerEdgeProgram",
            value: function registerEdgeProgram(key, EdgeProgramClass) {
                if (this.edgePrograms[key]) this.edgePrograms[key].kill();
                this.edgePrograms[key] = new EdgeProgramClass(this.webGLContexts.edges, this.frameBuffers.edges, this);
                return this;
            }
        },
        {
            key: "unregisterNodeProgram",
            value: function unregisterNodeProgram(key) {
                if (this.nodePrograms[key]) {
                    var _this$nodePrograms = this.nodePrograms, program = _this$nodePrograms[key], programs = _objectWithoutProperties(_this$nodePrograms, [
                        key
                    ].map(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]));
                    program.kill();
                    this.nodePrograms = programs;
                }
                if (this.nodeHoverPrograms[key]) {
                    var _this$nodeHoverProgra = this.nodeHoverPrograms, _program = _this$nodeHoverProgra[key], _programs = _objectWithoutProperties(_this$nodeHoverProgra, [
                        key
                    ].map(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]));
                    _program.kill();
                    this.nodePrograms = _programs;
                }
                return this;
            }
        },
        {
            key: "unregisterEdgeProgram",
            value: function unregisterEdgeProgram(key) {
                if (this.edgePrograms[key]) {
                    var _this$edgePrograms = this.edgePrograms, program = _this$edgePrograms[key], programs = _objectWithoutProperties(_this$edgePrograms, [
                        key
                    ].map(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$inherits$2d$d1a1e29b$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]));
                    program.kill();
                    this.edgePrograms = programs;
                }
                return this;
            }
        },
        {
            key: "resetWebGLTexture",
            value: function resetWebGLTexture(id) {
                var gl = this.webGLContexts[id];
                var frameBuffer = this.frameBuffers[id];
                var currentTexture = this.textures[id];
                if (currentTexture) gl.deleteTexture(currentTexture);
                var pickingTexture = gl.createTexture();
                gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
                gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);
                this.textures[id] = pickingTexture;
                return this;
            }
        },
        {
            key: "bindCameraHandlers",
            value: function bindCameraHandlers() {
                var _this2 = this;
                this.activeListeners.camera = function() {
                    _this2.scheduleRender();
                };
                this.camera.on("updated", this.activeListeners.camera);
                return this;
            }
        },
        {
            key: "unbindCameraHandlers",
            value: function unbindCameraHandlers() {
                this.camera.removeListener("updated", this.activeListeners.camera);
                return this;
            }
        },
        {
            key: "getNodeAtPosition",
            value: function getNodeAtPosition(position) {
                var x = position.x, y = position.y;
                var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(this.webGLContexts.nodes, this.frameBuffers.nodes, x, y, this.pixelRatio, this.pickingDownSizingRatio);
                var index = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].apply(void 0, _toConsumableArray(color));
                var itemAt = this.itemIDsIndex[index];
                return itemAt && itemAt.type === "node" ? itemAt.id : null;
            }
        },
        {
            key: "bindEventHandlers",
            value: function bindEventHandlers() {
                var _this3 = this;
                // Handling window resize
                this.activeListeners.handleResize = function() {
                    // need to call a refresh to rebuild the labelgrid
                    _this3.scheduleRefresh();
                };
                window.addEventListener("resize", this.activeListeners.handleResize);
                // Handling mouse move
                this.activeListeners.handleMove = function(e) {
                    var event = cleanMouseCoords(e);
                    var baseEvent = {
                        event: event,
                        preventSigmaDefault: function preventSigmaDefault() {
                            event.preventSigmaDefault();
                        }
                    };
                    var nodeToHover = _this3.getNodeAtPosition(event);
                    if (nodeToHover && _this3.hoveredNode !== nodeToHover && !_this3.nodeDataCache[nodeToHover].hidden) {
                        // Handling passing from one node to the other directly
                        if (_this3.hoveredNode) _this3.emit("leaveNode", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                            node: _this3.hoveredNode
                        }));
                        _this3.hoveredNode = nodeToHover;
                        _this3.emit("enterNode", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                            node: nodeToHover
                        }));
                        _this3.scheduleHighlightedNodesRender();
                        return;
                    }
                    // Checking if the hovered node is still hovered
                    if (_this3.hoveredNode) {
                        if (_this3.getNodeAtPosition(event) !== _this3.hoveredNode) {
                            var node = _this3.hoveredNode;
                            _this3.hoveredNode = null;
                            _this3.emit("leaveNode", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                                node: node
                            }));
                            _this3.scheduleHighlightedNodesRender();
                            return;
                        }
                    }
                    if (_this3.settings.enableEdgeEvents) {
                        var edgeToHover = _this3.hoveredNode ? null : _this3.getEdgeAtPoint(baseEvent.event.x, baseEvent.event.y);
                        if (edgeToHover !== _this3.hoveredEdge) {
                            if (_this3.hoveredEdge) _this3.emit("leaveEdge", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                                edge: _this3.hoveredEdge
                            }));
                            if (edgeToHover) _this3.emit("enterEdge", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                                edge: edgeToHover
                            }));
                            _this3.hoveredEdge = edgeToHover;
                        }
                    }
                };
                // Handling mouse move over body (only to dispatch the proper event):
                this.activeListeners.handleMoveBody = function(e) {
                    var event = cleanMouseCoords(e);
                    _this3.emit("moveBody", {
                        event: event,
                        preventSigmaDefault: function preventSigmaDefault() {
                            event.preventSigmaDefault();
                        }
                    });
                };
                // Handling mouse leave stage:
                this.activeListeners.handleLeave = function(e) {
                    var event = cleanMouseCoords(e);
                    var baseEvent = {
                        event: event,
                        preventSigmaDefault: function preventSigmaDefault() {
                            event.preventSigmaDefault();
                        }
                    };
                    if (_this3.hoveredNode) {
                        _this3.emit("leaveNode", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                            node: _this3.hoveredNode
                        }));
                        _this3.scheduleHighlightedNodesRender();
                    }
                    if (_this3.settings.enableEdgeEvents && _this3.hoveredEdge) {
                        _this3.emit("leaveEdge", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                            edge: _this3.hoveredEdge
                        }));
                        _this3.scheduleHighlightedNodesRender();
                    }
                    _this3.emit("leaveStage", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent));
                };
                // Handling mouse enter stage:
                this.activeListeners.handleEnter = function(e) {
                    var event = cleanMouseCoords(e);
                    var baseEvent = {
                        event: event,
                        preventSigmaDefault: function preventSigmaDefault() {
                            event.preventSigmaDefault();
                        }
                    };
                    _this3.emit("enterStage", (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent));
                };
                // Handling click
                var createInteractionListener = function createInteractionListener(eventType) {
                    return function(e) {
                        var event = cleanMouseCoords(e);
                        var baseEvent = {
                            event: event,
                            preventSigmaDefault: function preventSigmaDefault() {
                                event.preventSigmaDefault();
                            }
                        };
                        var nodeAtPosition = _this3.getNodeAtPosition(event);
                        if (nodeAtPosition) return _this3.emit("".concat(eventType, "Node"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                            node: nodeAtPosition
                        }));
                        if (_this3.settings.enableEdgeEvents) {
                            var edge = _this3.getEdgeAtPoint(event.x, event.y);
                            if (edge) return _this3.emit("".concat(eventType, "Edge"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, baseEvent), {}, {
                                edge: edge
                            }));
                        }
                        return _this3.emit("".concat(eventType, "Stage"), baseEvent);
                    };
                };
                this.activeListeners.handleClick = createInteractionListener("click");
                this.activeListeners.handleRightClick = createInteractionListener("rightClick");
                this.activeListeners.handleDoubleClick = createInteractionListener("doubleClick");
                this.activeListeners.handleWheel = createInteractionListener("wheel");
                this.activeListeners.handleDown = createInteractionListener("down");
                this.activeListeners.handleUp = createInteractionListener("up");
                this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
                this.mouseCaptor.on("mousemovebody", this.activeListeners.handleMoveBody);
                this.mouseCaptor.on("click", this.activeListeners.handleClick);
                this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
                this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
                this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
                this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
                this.mouseCaptor.on("mouseup", this.activeListeners.handleUp);
                this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave);
                this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter);
                this.touchCaptor.on("touchdown", this.activeListeners.handleDown);
                this.touchCaptor.on("touchdown", this.activeListeners.handleMove);
                this.touchCaptor.on("touchup", this.activeListeners.handleUp);
                this.touchCaptor.on("touchmove", this.activeListeners.handleMove);
                this.touchCaptor.on("tap", this.activeListeners.handleClick);
                this.touchCaptor.on("doubletap", this.activeListeners.handleDoubleClick);
                this.touchCaptor.on("touchmove", this.activeListeners.handleMoveBody);
                return this;
            }
        },
        {
            key: "bindGraphHandlers",
            value: function bindGraphHandlers() {
                var _this4 = this;
                var graph = this.graph;
                var LAYOUT_IMPACTING_FIELDS = new Set([
                    "x",
                    "y",
                    "zIndex",
                    "type"
                ]);
                this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function(e) {
                    var _e$hints;
                    var updatedFields = (_e$hints = e.hints) === null || _e$hints === void 0 ? void 0 : _e$hints.attributes;
                    // we process all nodes
                    _this4.graph.forEachNode(function(node) {
                        return _this4.updateNode(node);
                    });
                    // if coord, type or zIndex have changed, we need to schedule a render
                    // (zIndex for the programIndex)
                    var layoutChanged = !updatedFields || updatedFields.some(function(f) {
                        return LAYOUT_IMPACTING_FIELDS.has(f);
                    });
                    _this4.refresh({
                        partialGraph: {
                            nodes: graph.nodes()
                        },
                        skipIndexation: !layoutChanged,
                        schedule: true
                    });
                };
                this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function(e) {
                    var _e$hints2;
                    var updatedFields = (_e$hints2 = e.hints) === null || _e$hints2 === void 0 ? void 0 : _e$hints2.attributes;
                    // we process all edges
                    _this4.graph.forEachEdge(function(edge) {
                        return _this4.updateEdge(edge);
                    });
                    var layoutChanged = updatedFields && [
                        "zIndex",
                        "type"
                    ].some(function(f) {
                        return updatedFields === null || updatedFields === void 0 ? void 0 : updatedFields.includes(f);
                    });
                    _this4.refresh({
                        partialGraph: {
                            edges: graph.edges()
                        },
                        skipIndexation: !layoutChanged,
                        schedule: true
                    });
                };
                // On add node, we add the node in indices and then call for a render
                this.activeListeners.addNodeGraphUpdate = function(payload) {
                    var node = payload.key;
                    // we process the node
                    _this4.addNode(node);
                    // schedule a render for the node
                    _this4.refresh({
                        partialGraph: {
                            nodes: [
                                node
                            ]
                        },
                        skipIndexation: false,
                        schedule: true
                    });
                };
                // On update node, we update indices and then call for a render
                this.activeListeners.updateNodeGraphUpdate = function(payload) {
                    var node = payload.key;
                    // schedule a render for the node
                    _this4.refresh({
                        partialGraph: {
                            nodes: [
                                node
                            ]
                        },
                        skipIndexation: false,
                        schedule: true
                    });
                };
                // On drop node, we remove the node from indices and then call for a refresh
                this.activeListeners.dropNodeGraphUpdate = function(payload) {
                    var node = payload.key;
                    // we process the node
                    _this4.removeNode(node);
                    // schedule a render for everything
                    _this4.refresh({
                        schedule: true
                    });
                };
                // On add edge, we remove the edge from indices and then call for a refresh
                this.activeListeners.addEdgeGraphUpdate = function(payload) {
                    var edge = payload.key;
                    // we process the edge
                    _this4.addEdge(edge);
                    // schedule a render for the edge
                    _this4.refresh({
                        partialGraph: {
                            edges: [
                                edge
                            ]
                        },
                        schedule: true
                    });
                };
                // On update edge, we update indices and then call for a refresh
                this.activeListeners.updateEdgeGraphUpdate = function(payload) {
                    var edge = payload.key;
                    // schedule a repaint for the edge
                    _this4.refresh({
                        partialGraph: {
                            edges: [
                                edge
                            ]
                        },
                        skipIndexation: false,
                        schedule: true
                    });
                };
                // On drop edge, we remove the edge from indices and then call for a refresh
                this.activeListeners.dropEdgeGraphUpdate = function(payload) {
                    var edge = payload.key;
                    // we process the edge
                    _this4.removeEdge(edge);
                    // schedule a render for all edges
                    _this4.refresh({
                        schedule: true
                    });
                };
                // On clear edges, we clear the edge indices and then call for a refresh
                this.activeListeners.clearEdgesGraphUpdate = function() {
                    // we clear the edge data structures
                    _this4.clearEdgeState();
                    _this4.clearEdgeIndices();
                    // schedule a render for all edges
                    _this4.refresh({
                        schedule: true
                    });
                };
                // On graph clear, we clear indices and then call for a refresh
                this.activeListeners.clearGraphUpdate = function() {
                    // clear graph state
                    _this4.clearEdgeState();
                    _this4.clearNodeState();
                    // clear graph indices
                    _this4.clearEdgeIndices();
                    _this4.clearNodeIndices();
                    // schedule a render for all
                    _this4.refresh({
                        schedule: true
                    });
                };
                graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
                graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
                graph.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
                graph.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
                graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
                graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
                graph.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
                graph.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
                graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
                graph.on("cleared", this.activeListeners.clearGraphUpdate);
                return this;
            }
        },
        {
            key: "unbindGraphHandlers",
            value: function unbindGraphHandlers() {
                var graph = this.graph;
                graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
                graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
                graph.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
                graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
                graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
                graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
                graph.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
                graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
                graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
                graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
            }
        },
        {
            key: "getEdgeAtPoint",
            value: function getEdgeAtPoint(x, y) {
                var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(this.webGLContexts.edges, this.frameBuffers.edges, x, y, this.pixelRatio, this.pickingDownSizingRatio);
                var index = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].apply(void 0, _toConsumableArray(color));
                var itemAt = this.itemIDsIndex[index];
                return itemAt && itemAt.type === "edge" ? itemAt.id : null;
            }
        },
        {
            key: "process",
            value: function process() {
                var _this5 = this;
                this.emit("beforeProcess");
                var graph = this.graph;
                var settings = this.settings;
                var dimensions = this.getDimensions();
                //
                // NODES
                //
                this.nodeExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(this.graph);
                if (!this.settings.autoRescale) {
                    var width = dimensions.width, height = dimensions.height;
                    var _this$nodeExtent = this.nodeExtent, x = _this$nodeExtent.x, y = _this$nodeExtent.y;
                    this.nodeExtent = {
                        x: [
                            (x[0] + x[1]) / 2 - width / 2,
                            (x[0] + x[1]) / 2 + width / 2
                        ],
                        y: [
                            (y[0] + y[1]) / 2 - height / 2,
                            (y[0] + y[1]) / 2 + height / 2
                        ]
                    };
                }
                this.normalizationFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this.customBBox || this.nodeExtent);
                // NOTE: it is important to compute this matrix after computing the node's extent
                // because #.getGraphDimensions relies on it
                var nullCamera = new Camera();
                var nullCameraMatrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(nullCamera.getState(), dimensions, this.getGraphDimensions(), this.getStagePadding());
                // Resetting the label grid
                // TODO: it's probably better to do this explicitly or on resizes for layout and anims
                this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
                var nodesPerPrograms = {};
                var nodeIndices = {};
                var edgeIndices = {};
                var itemIDsIndex = {};
                var incrID = 1;
                var nodes = graph.nodes();
                // Do some indexation on the whole graph
                for(var i = 0, l = nodes.length; i < l; i++){
                    var node = nodes[i];
                    var data = this.nodeDataCache[node];
                    // Get initial coordinates
                    var attrs = graph.getNodeAttributes(node);
                    data.x = attrs.x;
                    data.y = attrs.y;
                    this.normalizationFunction.applyTo(data);
                    // labelgrid
                    if (typeof data.label === "string" && !data.hidden) this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
                        matrix: nullCameraMatrix
                    }));
                    // update count per program
                    nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
                }
                this.labelGrid.organize();
                // Allocate memory to programs
                for(var type in this.nodePrograms){
                    if (!hasOwnProperty.call(this.nodePrograms, type)) {
                        throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
                    }
                    this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
                    // We reset that count here, so that we can reuse it while calling the Program#process methods:
                    nodesPerPrograms[type] = 0;
                }
                // Order nodes by zIndex before to add them to program
                if (this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1]) nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"])(this.nodeZExtent, function(node) {
                    return _this5.nodeDataCache[node].zIndex;
                }, nodes);
                // Add data to programs
                for(var _i = 0, _l = nodes.length; _i < _l; _i++){
                    var _node = nodes[_i];
                    nodeIndices[_node] = incrID;
                    itemIDsIndex[nodeIndices[_node]] = {
                        type: "node",
                        id: _node
                    };
                    incrID++;
                    var _data = this.nodeDataCache[_node];
                    this.addNodeToProgram(_node, nodeIndices[_node], nodesPerPrograms[_data.type]++);
                }
                //
                // EDGES
                //
                var edgesPerPrograms = {};
                var edges = graph.edges();
                // Allocate memory to programs
                for(var _i2 = 0, _l2 = edges.length; _i2 < _l2; _i2++){
                    var edge = edges[_i2];
                    var _data2 = this.edgeDataCache[edge];
                    edgesPerPrograms[_data2.type] = (edgesPerPrograms[_data2.type] || 0) + 1;
                }
                // Order edges by zIndex before to add them to program
                if (this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1]) edges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"])(this.edgeZExtent, function(edge) {
                    return _this5.edgeDataCache[edge].zIndex;
                }, edges);
                for(var _type2 in this.edgePrograms){
                    if (!hasOwnProperty.call(this.edgePrograms, _type2)) {
                        throw new Error("Sigma: could not find a suitable program for edge type \"".concat(_type2, "\"!"));
                    }
                    this.edgePrograms[_type2].reallocate(edgesPerPrograms[_type2] || 0);
                    // We reset that count here, so that we can reuse it while calling the Program#process methods:
                    edgesPerPrograms[_type2] = 0;
                }
                // Add data to programs
                for(var _i3 = 0, _l3 = edges.length; _i3 < _l3; _i3++){
                    var _edge = edges[_i3];
                    edgeIndices[_edge] = incrID;
                    itemIDsIndex[edgeIndices[_edge]] = {
                        type: "edge",
                        id: _edge
                    };
                    incrID++;
                    var _data3 = this.edgeDataCache[_edge];
                    this.addEdgeToProgram(_edge, edgeIndices[_edge], edgesPerPrograms[_data3.type]++);
                }
                this.itemIDsIndex = itemIDsIndex;
                this.nodeIndices = nodeIndices;
                this.edgeIndices = edgeIndices;
                this.emit("afterProcess");
                return this;
            }
        },
        {
            key: "handleSettingsUpdate",
            value: function handleSettingsUpdate(oldSettings) {
                var _this6 = this;
                var settings = this.settings;
                this.camera.minRatio = settings.minCameraRatio;
                this.camera.maxRatio = settings.maxCameraRatio;
                this.camera.enabledZooming = settings.enableCameraZooming;
                this.camera.enabledPanning = settings.enableCameraPanning;
                this.camera.enabledRotation = settings.enableCameraRotation;
                if (settings.cameraPanBoundaries) {
                    this.camera.clean = function(state) {
                        return _this6.cleanCameraState(state, settings.cameraPanBoundaries && (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(settings.cameraPanBoundaries) === "object" ? settings.cameraPanBoundaries : {});
                    };
                } else {
                    this.camera.clean = null;
                }
                this.camera.setState(this.camera.validateState(this.camera.getState()));
                if (oldSettings) {
                    // Check edge programs:
                    if (oldSettings.edgeProgramClasses !== settings.edgeProgramClasses) {
                        for(var type in settings.edgeProgramClasses){
                            if (settings.edgeProgramClasses[type] !== oldSettings.edgeProgramClasses[type]) {
                                this.registerEdgeProgram(type, settings.edgeProgramClasses[type]);
                            }
                        }
                        for(var _type3 in oldSettings.edgeProgramClasses){
                            if (!settings.edgeProgramClasses[_type3]) this.unregisterEdgeProgram(_type3);
                        }
                    }
                    // Check node programs:
                    if (oldSettings.nodeProgramClasses !== settings.nodeProgramClasses || oldSettings.nodeHoverProgramClasses !== settings.nodeHoverProgramClasses) {
                        for(var _type4 in settings.nodeProgramClasses){
                            if (settings.nodeProgramClasses[_type4] !== oldSettings.nodeProgramClasses[_type4] || settings.nodeHoverProgramClasses[_type4] !== oldSettings.nodeHoverProgramClasses[_type4]) {
                                this.registerNodeProgram(_type4, settings.nodeProgramClasses[_type4], settings.nodeHoverProgramClasses[_type4]);
                            }
                        }
                        for(var _type5 in oldSettings.nodeProgramClasses){
                            if (!settings.nodeProgramClasses[_type5]) this.unregisterNodeProgram(_type5);
                        }
                    }
                }
                // Update captors settings:
                this.mouseCaptor.setSettings(this.settings);
                this.touchCaptor.setSettings(this.settings);
                return this;
            }
        },
        {
            key: "cleanCameraState",
            value: function cleanCameraState(state) {
                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$tolerance = _ref.tolerance, tolerance = _ref$tolerance === void 0 ? 0 : _ref$tolerance, boundaries = _ref.boundaries;
                var newState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state);
                // Extract necessary properties
                var _ref2 = boundaries || this.nodeExtent, _ref2$x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref2.x, 2), xMinGraph = _ref2$x[0], xMaxGraph = _ref2$x[1], _ref2$y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$colors$2d$beb06eb2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref2.y, 2), yMinGraph = _ref2$y[0], yMaxGraph = _ref2$y[1];
                // Transform the four corners of the graph rectangle using the provided camera state
                var corners = [
                    this.graphToViewport({
                        x: xMinGraph,
                        y: yMinGraph
                    }, {
                        cameraState: state
                    }),
                    this.graphToViewport({
                        x: xMaxGraph,
                        y: yMinGraph
                    }, {
                        cameraState: state
                    }),
                    this.graphToViewport({
                        x: xMinGraph,
                        y: yMaxGraph
                    }, {
                        cameraState: state
                    }),
                    this.graphToViewport({
                        x: xMaxGraph,
                        y: yMaxGraph
                    }, {
                        cameraState: state
                    })
                ];
                // Look for new extents, based on these four corners
                var xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
                corners.forEach(function(_ref3) {
                    var x = _ref3.x, y = _ref3.y;
                    xMin = Math.min(xMin, x);
                    xMax = Math.max(xMax, x);
                    yMin = Math.min(yMin, y);
                    yMax = Math.max(yMax, y);
                });
                // For each dimension, constraint the smaller element (camera or graph) to fit in the larger one:
                var graphWidth = xMax - xMin;
                var graphHeight = yMax - yMin;
                var _this$getDimensions = this.getDimensions(), width = _this$getDimensions.width, height = _this$getDimensions.height;
                var dx = 0;
                var dy = 0;
                if (graphWidth >= width) {
                    if (xMax < width - tolerance) dx = xMax - (width - tolerance);
                    else if (xMin > tolerance) dx = xMin - tolerance;
                } else {
                    if (xMax > width + tolerance) dx = xMax - (width + tolerance);
                    else if (xMin < -tolerance) dx = xMin + tolerance;
                }
                if (graphHeight >= height) {
                    if (yMax < height - tolerance) dy = yMax - (height - tolerance);
                    else if (yMin > tolerance) dy = yMin - tolerance;
                } else {
                    if (yMax > height + tolerance) dy = yMax - (height + tolerance);
                    else if (yMin < -tolerance) dy = yMin + tolerance;
                }
                if (dx || dy) {
                    // Transform [dx, dy] from viewport to graph (using two different point to transform that vector):
                    var origin = this.viewportToFramedGraph({
                        x: 0,
                        y: 0
                    }, {
                        cameraState: state
                    });
                    var delta = this.viewportToFramedGraph({
                        x: dx,
                        y: dy
                    }, {
                        cameraState: state
                    });
                    dx = delta.x - origin.x;
                    dy = delta.y - origin.y;
                    newState.x += dx;
                    newState.y += dy;
                }
                return newState;
            }
        },
        {
            key: "renderLabels",
            value: function renderLabels() {
                if (!this.settings.renderLabels) return this;
                var cameraState = this.camera.getState();
                // Selecting labels to draw
                var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(labelsToDisplay, this.nodesWithForcedLabels);
                this.displayedNodeLabels = new Set();
                // Drawing labels
                var context = this.canvasContexts.labels;
                for(var i = 0, l = labelsToDisplay.length; i < l; i++){
                    var node = labelsToDisplay[i];
                    var data = this.nodeDataCache[node];
                    // If the node was already drawn (like if it is eligible AND has
                    // `forceLabel`), we don't want to draw it again
                    // NOTE: we can do better probably
                    if (this.displayedNodeLabels.has(node)) continue;
                    // If the node is hidden, we don't need to display its label obviously
                    if (data.hidden) continue;
                    var _this$framedGraphToVi = this.framedGraphToViewport(data), x = _this$framedGraphToVi.x, y = _this$framedGraphToVi.y;
                    // NOTE: we can cache the labels we need to render until the camera's ratio changes
                    var size = this.scaleSize(data.size);
                    // Is node big enough?
                    if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold) continue;
                    // Is node actually on screen (with some margin)
                    // NOTE: we used to rely on the quadtree for this, but the coordinates
                    // conversion make it unreliable and at that point we already converted
                    // to viewport coordinates and since the label grid already culls the
                    // number of potential labels to display this looks like a good
                    // performance compromise.
                    // NOTE: labelGrid.getLabelsToDisplay could probably optimize by not
                    // considering cells obviously outside of the range of the current
                    // view rectangle.
                    if (x < -X_LABEL_MARGIN || x > this.width + X_LABEL_MARGIN || y < -Y_LABEL_MARGIN || y > this.height + Y_LABEL_MARGIN) continue;
                    // Because displayed edge labels depend directly on actually rendered node
                    // labels, we need to only add to this.displayedNodeLabels nodes whose label
                    // is rendered.
                    // This makes this.displayedNodeLabels depend on viewport, which might become
                    // an issue once we start memoizing getLabelsToDisplay.
                    this.displayedNodeLabels.add(node);
                    var defaultDrawNodeLabel = this.settings.defaultDrawNodeLabel;
                    var nodeProgram = this.nodePrograms[data.type];
                    var drawLabel = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawLabel) || defaultDrawNodeLabel;
                    drawLabel(context, (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        key: node
                    }, data), {}, {
                        size: size,
                        x: x,
                        y: y
                    }), this.settings);
                }
                return this;
            }
        },
        {
            key: "renderEdgeLabels",
            value: function renderEdgeLabels() {
                if (!this.settings.renderEdgeLabels) return this;
                var context = this.canvasContexts.edgeLabels;
                // Clearing
                context.clearRect(0, 0, this.width, this.height);
                var edgeLabelsToDisplay = edgeLabelsToDisplayFromNodes({
                    graph: this.graph,
                    hoveredNode: this.hoveredNode,
                    displayedNodeLabels: this.displayedNodeLabels,
                    highlightedNodes: this.highlightedNodes
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$data$2d$11df7124$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(edgeLabelsToDisplay, this.edgesWithForcedLabels);
                var displayedLabels = new Set();
                for(var i = 0, l = edgeLabelsToDisplay.length; i < l; i++){
                    var edge = edgeLabelsToDisplay[i], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edge];
                    // If the edge was already drawn (like if it is eligible AND has
                    // `forceLabel`), we don't want to draw it again
                    if (displayedLabels.has(edge)) continue;
                    // If the edge is hidden we don't need to display its label
                    // NOTE: the test on sourceData & targetData is probably paranoid at this point?
                    if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
                        continue;
                    }
                    var defaultDrawEdgeLabel = this.settings.defaultDrawEdgeLabel;
                    var edgeProgram = this.edgePrograms[edgeData.type];
                    var drawLabel = (edgeProgram === null || edgeProgram === void 0 ? void 0 : edgeProgram.drawLabel) || defaultDrawEdgeLabel;
                    drawLabel(context, (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        key: edge
                    }, edgeData), {}, {
                        size: this.scaleSize(edgeData.size)
                    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        key: extremities[0]
                    }, sourceData), this.framedGraphToViewport(sourceData)), {}, {
                        size: this.scaleSize(sourceData.size)
                    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        key: extremities[1]
                    }, targetData), this.framedGraphToViewport(targetData)), {}, {
                        size: this.scaleSize(targetData.size)
                    }), this.settings);
                    displayedLabels.add(edge);
                }
                this.displayedEdgeLabels = displayedLabels;
                return this;
            }
        },
        {
            key: "renderHighlightedNodes",
            value: function renderHighlightedNodes() {
                var _this7 = this;
                var context = this.canvasContexts.hovers;
                // Clearing
                context.clearRect(0, 0, this.width, this.height);
                // Rendering
                var render = function render(node) {
                    var data = _this7.nodeDataCache[node];
                    var _this7$framedGraphToV = _this7.framedGraphToViewport(data), x = _this7$framedGraphToV.x, y = _this7$framedGraphToV.y;
                    var size = _this7.scaleSize(data.size);
                    var defaultDrawNodeHover = _this7.settings.defaultDrawNodeHover;
                    var nodeProgram = _this7.nodePrograms[data.type];
                    var drawHover = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawHover) || defaultDrawNodeHover;
                    drawHover(context, (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        key: node
                    }, data), {}, {
                        size: size,
                        x: x,
                        y: y
                    }), _this7.settings);
                };
                var nodesToRender = [];
                if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
                    nodesToRender.push(this.hoveredNode);
                }
                this.highlightedNodes.forEach(function(node) {
                    // The hovered node has already been highlighted
                    if (node !== _this7.hoveredNode) nodesToRender.push(node);
                });
                // Draw labels:
                nodesToRender.forEach(function(node) {
                    return render(node);
                });
                // Draw WebGL nodes on top of the labels:
                var nodesPerPrograms = {};
                // 1. Count nodes per type:
                nodesToRender.forEach(function(node) {
                    var type = _this7.nodeDataCache[node].type;
                    nodesPerPrograms[type] = (nodesPerPrograms[type] || 0) + 1;
                });
                // 2. Allocate for each type for the proper number of nodes
                for(var type in this.nodeHoverPrograms){
                    this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
                    // Also reset count, to use when rendering:
                    nodesPerPrograms[type] = 0;
                }
                // 3. Process all nodes to render:
                nodesToRender.forEach(function(node) {
                    var data = _this7.nodeDataCache[node];
                    _this7.nodeHoverPrograms[data.type].process(0, nodesPerPrograms[data.type]++, data);
                });
                // 4. Clear hovered nodes layer:
                this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
                // 5. Render:
                var renderParams = this.getRenderParams();
                for(var _type6 in this.nodeHoverPrograms){
                    var program = this.nodeHoverPrograms[_type6];
                    program.render(renderParams);
                }
            }
        },
        {
            key: "scheduleHighlightedNodesRender",
            value: function scheduleHighlightedNodesRender() {
                var _this8 = this;
                if (this.renderHighlightedNodesFrame || this.renderFrame) return;
                this.renderHighlightedNodesFrame = requestAnimationFrame(function() {
                    // Resetting state
                    _this8.renderHighlightedNodesFrame = null;
                    // Rendering
                    _this8.renderHighlightedNodes();
                    _this8.renderEdgeLabels();
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this9 = this;
                this.emit("beforeRender");
                var exitRender = function exitRender() {
                    _this9.emit("afterRender");
                    return _this9;
                };
                // If a render was scheduled, we cancel it
                if (this.renderFrame) {
                    cancelAnimationFrame(this.renderFrame);
                    this.renderFrame = null;
                }
                // First we need to resize
                this.resize();
                // Do we need to reprocess data?
                if (this.needToProcess) this.process();
                this.needToProcess = false;
                // Clearing the canvases
                this.clear();
                // Prepare the textures
                this.pickingLayers.forEach(function(layer) {
                    return _this9.resetWebGLTexture(layer);
                });
                // If we have no nodes we can stop right there
                if (!this.graph.order) return exitRender();
                // TODO: improve this heuristic or move to the captor itself?
                // TODO: deal with the touch captor here as well
                var mouseCaptor = this.mouseCaptor;
                var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
                // Then we need to extract a matrix from the camera
                var cameraState = this.camera.getState();
                var viewportDimensions = this.getDimensions();
                var graphDimensions = this.getGraphDimensions();
                var padding = this.getStagePadding();
                this.matrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(cameraState, viewportDimensions, graphDimensions, padding);
                this.invMatrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(cameraState, viewportDimensions, graphDimensions, padding, true);
                this.correctionRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.matrix, cameraState, viewportDimensions);
                this.graphToViewportRatio = this.getGraphToViewportRatio();
                // [jacomyal]
                // This comment is related to the one above the `getMatrixImpact` definition:
                // - `this.correctionRatio` is somehow not completely explained
                // - `this.graphToViewportRatio` is the ratio of a distance in the viewport divided by the same distance in the
                //   graph
                // - `this.normalizationFunction.ratio` is basically `Math.max(graphDX, graphDY)`
                // And now, I observe that if I multiply these three ratios, I have something constant, which value remains 2, even
                // when I change the graph, the viewport or the camera. It might be useful later, so I prefer to let this comment:
                // console.log(this.graphToViewportRatio * this.correctionRatio * this.normalizationFunction.ratio * 2);
                var params = this.getRenderParams();
                // Drawing nodes
                for(var type in this.nodePrograms){
                    var program = this.nodePrograms[type];
                    program.render(params);
                }
                // Drawing edges
                if (!this.settings.hideEdgesOnMove || !moving) {
                    for(var _type7 in this.edgePrograms){
                        var _program2 = this.edgePrograms[_type7];
                        _program2.render(params);
                    }
                }
                // Do not display labels on move per setting
                if (this.settings.hideLabelsOnMove && moving) return exitRender();
                this.renderLabels();
                this.renderEdgeLabels();
                this.renderHighlightedNodes();
                return exitRender();
            }
        },
        {
            key: "addNode",
            value: function addNode(key) {
                // Node display data resolution:
                //  1. First we get the node's attributes
                //  2. We optionally reduce them using the function provided by the user
                //     Note that this function must return a total object and won't be merged
                //  3. We apply our defaults, while running some vital checks
                //  4. We apply the normalization function
                // We shallow copy node data to avoid dangerous behaviors from reducers
                var attr = Object.assign({}, this.graph.getNodeAttributes(key));
                if (this.settings.nodeReducer) attr = this.settings.nodeReducer(key, attr);
                var data = applyNodeDefaults(this.settings, key, attr);
                this.nodeDataCache[key] = data;
                // Label:
                // We delete and add if needed because this function is also used from
                // update
                this.nodesWithForcedLabels["delete"](key);
                if (data.forceLabel && !data.hidden) this.nodesWithForcedLabels.add(key);
                // Highlighted:
                // We remove and re add if needed because this function is also used from
                // update
                this.highlightedNodes["delete"](key);
                if (data.highlighted && !data.hidden) this.highlightedNodes.add(key);
                // zIndex
                if (this.settings.zIndex) {
                    if (data.zIndex < this.nodeZExtent[0]) this.nodeZExtent[0] = data.zIndex;
                    if (data.zIndex > this.nodeZExtent[1]) this.nodeZExtent[1] = data.zIndex;
                }
            }
        },
        {
            key: "updateNode",
            value: function updateNode(key) {
                this.addNode(key);
                // Re-apply normalization on the node
                var data = this.nodeDataCache[key];
                this.normalizationFunction.applyTo(data);
            }
        },
        {
            key: "removeNode",
            value: function removeNode(key) {
                // Remove from node cache
                delete this.nodeDataCache[key];
                // Remove from node program index
                delete this.nodeProgramIndex[key];
                // Remove from higlighted nodes
                this.highlightedNodes["delete"](key);
                // Remove from hovered
                if (this.hoveredNode === key) this.hoveredNode = null;
                // Remove from forced label
                this.nodesWithForcedLabels["delete"](key);
            }
        },
        {
            key: "addEdge",
            value: function addEdge(key) {
                // Edge display data resolution:
                //  1. First we get the edge's attributes
                //  2. We optionally reduce them using the function provided by the user
                //  3. Note that this function must return a total object and won't be merged
                //  4. We apply our defaults, while running some vital checks
                // We shallow copy edge data to avoid dangerous behaviors from reducers
                var attr = Object.assign({}, this.graph.getEdgeAttributes(key));
                if (this.settings.edgeReducer) attr = this.settings.edgeReducer(key, attr);
                var data = applyEdgeDefaults(this.settings, key, attr);
                this.edgeDataCache[key] = data;
                // Forced label
                // we filter and re push if needed because this function is also used from
                // update
                this.edgesWithForcedLabels["delete"](key);
                if (data.forceLabel && !data.hidden) this.edgesWithForcedLabels.add(key);
                // Check zIndex
                if (this.settings.zIndex) {
                    if (data.zIndex < this.edgeZExtent[0]) this.edgeZExtent[0] = data.zIndex;
                    if (data.zIndex > this.edgeZExtent[1]) this.edgeZExtent[1] = data.zIndex;
                }
            }
        },
        {
            key: "updateEdge",
            value: function updateEdge(key) {
                this.addEdge(key);
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(key) {
                // Remove from edge cache
                delete this.edgeDataCache[key];
                // Remove from programId index
                delete this.edgeProgramIndex[key];
                // Remove from hovered
                if (this.hoveredEdge === key) this.hoveredEdge = null;
                // Remove from forced label
                this.edgesWithForcedLabels["delete"](key);
            }
        },
        {
            key: "clearNodeIndices",
            value: function clearNodeIndices() {
                // LabelGrid & nodeExtent are only manage/populated in the process function
                this.labelGrid = new LabelGrid();
                this.nodeExtent = {
                    x: [
                        0,
                        1
                    ],
                    y: [
                        0,
                        1
                    ]
                };
                this.nodeDataCache = {};
                this.edgeProgramIndex = {};
                this.nodesWithForcedLabels = new Set();
                this.nodeZExtent = [
                    Infinity,
                    -Infinity
                ];
                this.highlightedNodes = new Set();
            }
        },
        {
            key: "clearEdgeIndices",
            value: function clearEdgeIndices() {
                this.edgeDataCache = {};
                this.edgeProgramIndex = {};
                this.edgesWithForcedLabels = new Set();
                this.edgeZExtent = [
                    Infinity,
                    -Infinity
                ];
            }
        },
        {
            key: "clearIndices",
            value: function clearIndices() {
                this.clearEdgeIndices();
                this.clearNodeIndices();
            }
        },
        {
            key: "clearNodeState",
            value: function clearNodeState() {
                this.displayedNodeLabels = new Set();
                this.highlightedNodes = new Set();
                this.hoveredNode = null;
            }
        },
        {
            key: "clearEdgeState",
            value: function clearEdgeState() {
                this.displayedEdgeLabels = new Set();
                this.highlightedNodes = new Set();
                this.hoveredEdge = null;
            }
        },
        {
            key: "clearState",
            value: function clearState() {
                this.clearEdgeState();
                this.clearNodeState();
            }
        },
        {
            key: "addNodeToProgram",
            value: function addNodeToProgram(node, fingerprint, position) {
                var data = this.nodeDataCache[node];
                var nodeProgram = this.nodePrograms[data.type];
                if (!nodeProgram) throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
                nodeProgram.process(fingerprint, position, data);
                // Saving program index
                this.nodeProgramIndex[node] = position;
            }
        },
        {
            key: "addEdgeToProgram",
            value: function addEdgeToProgram(edge, fingerprint, position) {
                var data = this.edgeDataCache[edge];
                var edgeProgram = this.edgePrograms[data.type];
                if (!edgeProgram) throw new Error("Sigma: could not find a suitable program for edge type \"".concat(data.type, "\"!"));
                var extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
                edgeProgram.process(fingerprint, position, sourceData, targetData, data);
                // Saving program index
                this.edgeProgramIndex[edge] = position;
            }
        },
        {
            key: "getRenderParams",
            value: function getRenderParams() {
                return {
                    matrix: this.matrix,
                    invMatrix: this.invMatrix,
                    width: this.width,
                    height: this.height,
                    pixelRatio: this.pixelRatio,
                    zoomRatio: this.camera.ratio,
                    cameraAngle: this.camera.angle,
                    sizeRatio: 1 / this.scaleSize(),
                    correctionRatio: this.correctionRatio,
                    downSizingRatio: this.pickingDownSizingRatio,
                    minEdgeThickness: this.settings.minEdgeThickness,
                    antiAliasingFeather: this.settings.antiAliasingFeather
                };
            }
        },
        {
            key: "getStagePadding",
            value: function getStagePadding() {
                var _this$settings = this.settings, stagePadding = _this$settings.stagePadding, autoRescale = _this$settings.autoRescale;
                return autoRescale ? stagePadding || 0 : 0;
            }
        },
        {
            key: "createLayer",
            value: function createLayer(id, tag) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                if (this.elements[id]) throw new Error("Sigma: a layer named \"".concat(id, "\" already exists"));
                var element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(tag, {
                    position: "absolute"
                }, {
                    "class": "sigma-".concat(id)
                });
                if (options.style) Object.assign(element.style, options.style);
                this.elements[id] = element;
                if ("beforeLayer" in options && options.beforeLayer) {
                    this.elements[options.beforeLayer].before(element);
                } else if ("afterLayer" in options && options.afterLayer) {
                    this.elements[options.afterLayer].after(element);
                } else {
                    this.container.appendChild(element);
                }
                return element;
            }
        },
        {
            key: "createCanvas",
            value: function createCanvas(id) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.createLayer(id, "canvas", options);
            }
        },
        {
            key: "createCanvasContext",
            value: function createCanvasContext(id) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var canvas = this.createCanvas(id, options);
                var contextOptions = {
                    preserveDrawingBuffer: false,
                    antialias: false
                };
                this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
                return this;
            }
        },
        {
            key: "createWebGLContext",
            value: function createWebGLContext(id) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var canvas = (options === null || options === void 0 ? void 0 : options.canvas) || this.createCanvas(id, options);
                if (options.hidden) canvas.remove();
                var contextOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    preserveDrawingBuffer: false,
                    antialias: false
                }, options);
                var context;
                // First we try webgl2 for an easy performance boost
                context = canvas.getContext("webgl2", contextOptions);
                // Else we fall back to webgl
                if (!context) context = canvas.getContext("webgl", contextOptions);
                // Edge, I am looking right at you...
                if (!context) context = canvas.getContext("experimental-webgl", contextOptions);
                var gl = context;
                this.webGLContexts[id] = gl;
                // Blending:
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                // Prepare frame buffer for picking layers:
                if (options.picking) {
                    this.pickingLayers.add(id);
                    var newFrameBuffer = gl.createFramebuffer();
                    if (!newFrameBuffer) throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(id));
                    this.frameBuffers[id] = newFrameBuffer;
                }
                return gl;
            }
        },
        {
            key: "killLayer",
            value: function killLayer(id) {
                var element = this.elements[id];
                if (!element) throw new Error("Sigma: cannot kill layer ".concat(id, ", which does not exist"));
                if (this.webGLContexts[id]) {
                    var _gl$getExtension;
                    var gl = this.webGLContexts[id];
                    (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl$getExtension === void 0 || _gl$getExtension.loseContext();
                    delete this.webGLContexts[id];
                } else if (this.canvasContexts[id]) {
                    delete this.canvasContexts[id];
                }
                // Delete layer element
                element.remove();
                delete this.elements[id];
                return this;
            }
        },
        {
            key: "getCamera",
            value: function getCamera() {
                return this.camera;
            }
        },
        {
            key: "setCamera",
            value: function setCamera(camera) {
                this.unbindCameraHandlers();
                this.camera = camera;
                this.bindCameraHandlers();
            }
        },
        {
            key: "getContainer",
            value: function getContainer() {
                return this.container;
            }
        },
        {
            key: "getGraph",
            value: function getGraph() {
                return this.graph;
            }
        },
        {
            key: "setGraph",
            value: function setGraph(graph) {
                if (graph === this.graph) return;
                // Check hoveredNode and hoveredEdge
                if (this.hoveredNode && !graph.hasNode(this.hoveredNode)) this.hoveredNode = null;
                if (this.hoveredEdge && !graph.hasEdge(this.hoveredEdge)) this.hoveredEdge = null;
                // Unbinding handlers on the current graph
                this.unbindGraphHandlers();
                if (this.checkEdgesEventsFrame !== null) {
                    cancelAnimationFrame(this.checkEdgesEventsFrame);
                    this.checkEdgesEventsFrame = null;
                }
                // Installing new graph
                this.graph = graph;
                // Binding new handlers
                this.bindGraphHandlers();
                // Re-rendering now to avoid discrepancies from now to next frame
                this.refresh();
            }
        },
        {
            key: "getMouseCaptor",
            value: function getMouseCaptor() {
                return this.mouseCaptor;
            }
        },
        {
            key: "getTouchCaptor",
            value: function getTouchCaptor() {
                return this.touchCaptor;
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions() {
                return {
                    width: this.width,
                    height: this.height
                };
            }
        },
        {
            key: "getGraphDimensions",
            value: function getGraphDimensions() {
                var extent = this.customBBox || this.nodeExtent;
                return {
                    width: extent.x[1] - extent.x[0] || 1,
                    height: extent.y[1] - extent.y[0] || 1
                };
            }
        },
        {
            key: "getNodeDisplayData",
            value: function getNodeDisplayData(key) {
                var node = this.nodeDataCache[key];
                return node ? Object.assign({}, node) : undefined;
            }
        },
        {
            key: "getEdgeDisplayData",
            value: function getEdgeDisplayData(key) {
                var edge = this.edgeDataCache[key];
                return edge ? Object.assign({}, edge) : undefined;
            }
        },
        {
            key: "getNodeDisplayedLabels",
            value: function getNodeDisplayedLabels() {
                return new Set(this.displayedNodeLabels);
            }
        },
        {
            key: "getEdgeDisplayedLabels",
            value: function getEdgeDisplayedLabels() {
                return new Set(this.displayedEdgeLabels);
            }
        },
        {
            key: "getSettings",
            value: function getSettings() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.settings);
            }
        },
        {
            key: "getSetting",
            value: function getSetting(key) {
                return this.settings[key];
            }
        },
        {
            key: "setSetting",
            value: function setSetting(key, value) {
                var oldValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.settings);
                this.settings[key] = value;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$settings$2f$dist$2f$sigma$2d$settings$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSettings"])(this.settings);
                this.handleSettingsUpdate(oldValues);
                this.scheduleRefresh();
                return this;
            }
        },
        {
            key: "updateSetting",
            value: function updateSetting(key, updater) {
                this.setSetting(key, updater(this.settings[key]));
                return this;
            }
        },
        {
            key: "setSettings",
            value: function setSettings(settings) {
                var oldValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.settings);
                this.settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.settings), settings);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$settings$2f$dist$2f$sigma$2d$settings$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSettings"])(this.settings);
                this.handleSettingsUpdate(oldValues);
                this.scheduleRefresh();
                return this;
            }
        },
        {
            key: "resize",
            value: function resize(force) {
                var previousWidth = this.width, previousHeight = this.height;
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.pixelRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])();
                if (this.width === 0) {
                    if (this.settings.allowInvalidContainer) this.width = 1;
                    else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
                }
                if (this.height === 0) {
                    if (this.settings.allowInvalidContainer) this.height = 1;
                    else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
                }
                // If nothing has changed, we can stop right here
                if (!force && previousWidth === this.width && previousHeight === this.height) return this;
                // Sizing dom elements
                for(var id in this.elements){
                    var element = this.elements[id];
                    element.style.width = this.width + "px";
                    element.style.height = this.height + "px";
                }
                // Sizing canvas contexts
                for(var _id in this.canvasContexts){
                    this.elements[_id].setAttribute("width", this.width * this.pixelRatio + "px");
                    this.elements[_id].setAttribute("height", this.height * this.pixelRatio + "px");
                    if (this.pixelRatio !== 1) this.canvasContexts[_id].scale(this.pixelRatio, this.pixelRatio);
                }
                // Sizing WebGL contexts
                for(var _id2 in this.webGLContexts){
                    this.elements[_id2].setAttribute("width", this.width * this.pixelRatio + "px");
                    this.elements[_id2].setAttribute("height", this.height * this.pixelRatio + "px");
                    var gl = this.webGLContexts[_id2];
                    gl.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
                    // Clear picking texture if needed
                    if (this.pickingLayers.has(_id2)) {
                        var currentTexture = this.textures[_id2];
                        if (currentTexture) gl.deleteTexture(currentTexture);
                    }
                }
                this.emit("resize");
                return this;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.emit("beforeClear");
                this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
                this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
                this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
                this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
                this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
                this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
                this.emit("afterClear");
                return this;
            }
        },
        {
            key: "refresh",
            value: function refresh(opts) {
                var _this10 = this;
                var skipIndexation = (opts === null || opts === void 0 ? void 0 : opts.skipIndexation) !== undefined ? opts === null || opts === void 0 ? void 0 : opts.skipIndexation : false;
                var schedule = (opts === null || opts === void 0 ? void 0 : opts.schedule) !== undefined ? opts.schedule : false;
                var fullRefresh = !opts || !opts.partialGraph;
                if (fullRefresh) {
                    // Re-index graph data
                    this.clearEdgeIndices();
                    this.clearNodeIndices();
                    this.graph.forEachNode(function(node) {
                        return _this10.addNode(node);
                    });
                    this.graph.forEachEdge(function(edge) {
                        return _this10.addEdge(edge);
                    });
                } else {
                    var _opts$partialGraph, _opts$partialGraph2;
                    var nodes = ((_opts$partialGraph = opts.partialGraph) === null || _opts$partialGraph === void 0 ? void 0 : _opts$partialGraph.nodes) || [];
                    for(var i = 0, l = (nodes === null || nodes === void 0 ? void 0 : nodes.length) || 0; i < l; i++){
                        var node = nodes[i];
                        // Recompute node's data (ie. apply reducer)
                        this.updateNode(node);
                        // Add node to the program if layout is unchanged.
                        // otherwise it will be done in the process function
                        if (skipIndexation) {
                            var programIndex = this.nodeProgramIndex[node];
                            if (programIndex === undefined) throw new Error("Sigma: node \"".concat(node, "\" can't be repaint"));
                            this.addNodeToProgram(node, this.nodeIndices[node], programIndex);
                        }
                    }
                    var edges = (opts === null || opts === void 0 || (_opts$partialGraph2 = opts.partialGraph) === null || _opts$partialGraph2 === void 0 ? void 0 : _opts$partialGraph2.edges) || [];
                    for(var _i4 = 0, _l4 = edges.length; _i4 < _l4; _i4++){
                        var edge = edges[_i4];
                        // Recompute edge's data (ie. apply reducer)
                        this.updateEdge(edge);
                        // Add edge to the program
                        // otherwise it will be done in the process function
                        if (skipIndexation) {
                            var _programIndex = this.edgeProgramIndex[edge];
                            if (_programIndex === undefined) throw new Error("Sigma: edge \"".concat(edge, "\" can't be repaint"));
                            this.addEdgeToProgram(edge, this.edgeIndices[edge], _programIndex);
                        }
                    }
                }
                // Do we need to call the process function ?
                if (fullRefresh || !skipIndexation) this.needToProcess = true;
                if (schedule) this.scheduleRender();
                else this.render();
                return this;
            }
        },
        {
            key: "scheduleRender",
            value: function scheduleRender() {
                var _this11 = this;
                if (!this.renderFrame) {
                    this.renderFrame = requestAnimationFrame(function() {
                        _this11.render();
                    });
                }
                return this;
            }
        },
        {
            key: "scheduleRefresh",
            value: function scheduleRefresh(opts) {
                return this.refresh((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$index$2d$236c62ad$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, opts), {}, {
                    schedule: true
                }));
            }
        },
        {
            key: "getViewportZoomedState",
            value: function getViewportZoomedState(viewportTarget, newRatio) {
                var _this$camera$getState = this.camera.getState(), ratio = _this$camera$getState.ratio, angle = _this$camera$getState.angle, x = _this$camera$getState.x, y = _this$camera$getState.y;
                var _this$settings2 = this.settings, minCameraRatio = _this$settings2.minCameraRatio, maxCameraRatio = _this$settings2.maxCameraRatio;
                if (typeof maxCameraRatio === "number") newRatio = Math.min(newRatio, maxCameraRatio);
                if (typeof minCameraRatio === "number") newRatio = Math.max(newRatio, minCameraRatio);
                var ratioDiff = newRatio / ratio;
                var center = {
                    x: this.width / 2,
                    y: this.height / 2
                };
                var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
                var graphCenterPosition = this.viewportToFramedGraph(center);
                return {
                    angle: angle,
                    x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
                    y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
                    ratio: newRatio
                };
            }
        },
        {
            key: "viewRectangle",
            value: function viewRectangle() {
                var p1 = this.viewportToFramedGraph({
                    x: 0,
                    y: 0
                }), p2 = this.viewportToFramedGraph({
                    x: this.width,
                    y: 0
                }), h = this.viewportToFramedGraph({
                    x: 0,
                    y: this.height
                });
                return {
                    x1: p1.x,
                    y1: p1.y,
                    x2: p2.x,
                    y2: p2.y,
                    height: p2.y - h.y
                };
            }
        },
        {
            key: "framedGraphToViewport",
            value: function framedGraphToViewport(coordinates) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
                var matrix = override.matrix ? override.matrix : recomputeMatrix ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding()) : this.matrix;
                var viewportPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(matrix, coordinates);
                return {
                    x: (1 + viewportPos.x) * this.width / 2,
                    y: (1 - viewportPos.y) * this.height / 2
                };
            }
        },
        {
            key: "viewportToFramedGraph",
            value: function viewportToFramedGraph(coordinates) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
                var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding(), true) : this.invMatrix;
                var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$normalization$2d$be445518$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(invMatrix, {
                    x: coordinates.x / this.width * 2 - 1,
                    y: 1 - coordinates.y / this.height * 2
                });
                if (isNaN(res.x)) res.x = 0;
                if (isNaN(res.y)) res.y = 0;
                return res;
            }
        },
        {
            key: "viewportToGraph",
            value: function viewportToGraph(viewportPoint) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
            }
        },
        {
            key: "graphToViewport",
            value: function graphToViewport(graphPoint) {
                var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
            }
        },
        {
            key: "getGraphToViewportRatio",
            value: function getGraphToViewportRatio() {
                var graphP1 = {
                    x: 0,
                    y: 0
                };
                var graphP2 = {
                    x: 1,
                    y: 1
                };
                var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
                var viewportP1 = this.graphToViewport(graphP1);
                var viewportP2 = this.graphToViewport(graphP2);
                var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
                return viewportD / graphD;
            }
        },
        {
            key: "getBBox",
            value: function getBBox() {
                return this.nodeExtent;
            }
        },
        {
            key: "getCustomBBox",
            value: function getCustomBBox() {
                return this.customBBox;
            }
        },
        {
            key: "setCustomBBox",
            value: function setCustomBBox(customBBox) {
                this.customBBox = customBBox;
                this.scheduleRender();
                return this;
            }
        },
        {
            key: "kill",
            value: function kill() {
                // Emitting "kill" events so that plugins and such can cleanup
                this.emit("kill");
                // Releasing events
                this.removeAllListeners();
                // Releasing camera handlers
                this.unbindCameraHandlers();
                // Releasing DOM events & captors
                window.removeEventListener("resize", this.activeListeners.handleResize);
                this.mouseCaptor.kill();
                this.touchCaptor.kill();
                // Releasing graph handlers
                this.unbindGraphHandlers();
                // Releasing cache & state
                this.clearIndices();
                this.clearState();
                this.nodeDataCache = {};
                this.edgeDataCache = {};
                this.highlightedNodes.clear();
                // Clearing frames
                if (this.renderFrame) {
                    cancelAnimationFrame(this.renderFrame);
                    this.renderFrame = null;
                }
                if (this.renderHighlightedNodesFrame) {
                    cancelAnimationFrame(this.renderHighlightedNodesFrame);
                    this.renderHighlightedNodesFrame = null;
                }
                // Destroying canvases
                var container = this.container;
                while(container.firstChild)container.removeChild(container.firstChild);
                // Kill programs:
                for(var type in this.nodePrograms){
                    this.nodePrograms[type].kill();
                }
                for(var _type8 in this.nodeHoverPrograms){
                    this.nodeHoverPrograms[_type8].kill();
                }
                for(var _type9 in this.edgePrograms){
                    this.edgePrograms[_type9].kill();
                }
                this.nodePrograms = {};
                this.nodeHoverPrograms = {};
                this.edgePrograms = {};
                // Kill all canvas/WebGL contexts
                for(var id in this.elements){
                    this.killLayer(id);
                }
                // Destroying remaining collections
                this.canvasContexts = {};
                this.webGLContexts = {};
                this.elements = {};
            }
        },
        {
            key: "scaleSize",
            value: function scaleSize() {
                var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var cameraRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.camera.ratio;
                return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
            }
        },
        {
            key: "getCanvases",
            value: function getCanvases() {
                var res = {};
                for(var layer in this.elements)if (this.elements[layer] instanceof HTMLCanvasElement) res[layer] = this.elements[layer];
                return res;
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$types$2f$dist$2f$sigma$2d$types$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedEventEmitter"]);
/**
 * Sigma.js Library Endpoint
 * =========================
 *
 * The library endpoint.
 * @module
 */ var Sigma = Sigma$1;
;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+core@5.0.4_graphology@0.26.0_graphology-types@0.24.8__react@19.1.0_sigma@3.0.2_graphology-types@0.24.8_/node_modules/@react-sigma/core/lib/react-sigma_core.esm.min.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlsContainer",
    ()=>H,
    "FullScreenControl",
    ()=>A,
    "SigmaContainer",
    ()=>S,
    "SigmaContext",
    ()=>d,
    "SigmaProvider",
    ()=>f,
    "ZoomControl",
    ()=>D,
    "debounce",
    ()=>x,
    "isEqual",
    ()=>j,
    "useCamera",
    ()=>N,
    "useFullScreen",
    ()=>k,
    "useLoadGraph",
    ()=>C,
    "useRegisterEvents",
    ()=>y,
    "useSetSettings",
    ()=>p,
    "useSigma",
    ()=>v,
    "useSigmaContext",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2f$dist$2f$graphology$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology@0.26.0_graphology-types@0.24.8/node_modules/graphology/dist/graphology.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$sigma$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/sigma@3.0.2_graphology-types@0.24.8/node_modules/sigma/dist/sigma.esm.js [app-client] (ecmascript)");
;
;
;
;
const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null), f = d.Provider;
function h() {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(d);
    if (null == e) throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");
    return e;
}
function v() {
    return h().sigma;
}
function p() {
    const { sigma: e } = h();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        e && Object.keys(t).forEach((n)=>{
            e.setSetting(n, t[n]);
        });
    }, [
        e
    ]);
}
function w(e) {
    return new Set(Object.keys(e));
}
const b = w({
    clickNode: !0,
    rightClickNode: !0,
    downNode: !0,
    enterNode: !0,
    leaveNode: !0,
    doubleClickNode: !0,
    wheelNode: !0,
    clickEdge: !0,
    rightClickEdge: !0,
    downEdge: !0,
    enterEdge: !0,
    leaveEdge: !0,
    doubleClickEdge: !0,
    wheelEdge: !0,
    clickStage: !0,
    rightClickStage: !0,
    downStage: !0,
    doubleClickStage: !0,
    wheelStage: !0,
    beforeRender: !0,
    afterRender: !0,
    kill: !0,
    upStage: !0,
    upEdge: !0,
    upNode: !0,
    enterStage: !0,
    leaveStage: !0,
    resize: !0,
    afterClear: !0,
    afterProcess: !0,
    beforeClear: !0,
    beforeProcess: !0,
    moveBody: !0
}), E = w({
    click: !0,
    rightClick: !0,
    doubleClick: !0,
    mouseup: !0,
    mousedown: !0,
    mousemove: !0,
    mousemovebody: !0,
    mouseleave: !0,
    mouseenter: !0,
    wheel: !0
}), _ = w({
    touchup: !0,
    touchdown: !0,
    touchmove: !0,
    touchmovebody: !0,
    tap: !0,
    doubletap: !0
}), O = w({
    updated: !0
});
function y() {
    const e = v(), t = p(), [n, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!e || !n) return;
        const t = n, r = Object.keys(t);
        return r.forEach((n)=>{
            const r = t[n];
            b.has(n) && e.on(n, r), E.has(n) && e.getMouseCaptor().on(n, r), _.has(n) && e.getTouchCaptor().on(n, r), O.has(n) && e.getCamera().on(n, r);
        }), ()=>{
            e && r.forEach((n)=>{
                const r = t[n];
                b.has(n) && e.off(n, r), E.has(n) && e.getMouseCaptor().off(n, r), _.has(n) && e.getTouchCaptor().off(n, r), O.has(n) && e.getCamera().off(n, r);
            });
        };
    }, [
        e,
        n,
        t
    ]), r;
}
function C() {
    const e = v();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        e && t && (n && e.getGraph().order > 0 && e.getGraph().clear(), e.getGraph().import(t), e.refresh());
    }, [
        e
    ]);
}
function j(e, t) {
    if (e === t) return !0;
    if ("object" == typeof e && null != e && "object" == typeof t && null != t) {
        if (Object.keys(e).length != Object.keys(t).length) return !1;
        for(const n in e){
            if (!Object.hasOwn(t, n)) return !1;
            if (!j(e[n], t[n])) return !1;
        }
        return !0;
    }
    return !1;
}
function x(e, t) {
    let n;
    return (r)=>new Promise((a)=>{
            n && clearTimeout(n), n = setTimeout(()=>{
                a(e(r));
            }, t);
        });
}
function N(e) {
    const t = v(), [n, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e || {});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        r((t)=>j(t, e || {}) ? t : e || {});
    }, [
        e
    ]);
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        t.getCamera().animatedZoom(Object.assign(Object.assign({}, n), e));
    }, [
        t,
        n
    ]), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        t.getCamera().animatedUnzoom(Object.assign(Object.assign({}, n), e));
    }, [
        t,
        n
    ]), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        t.getCamera().animatedReset(Object.assign(Object.assign({}, n), e));
    }, [
        t,
        n
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e, r)=>{
        t.getCamera().animate(e, Object.assign(Object.assign({}, n), r));
    }, [
        t,
        n
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e, r)=>{
        const a = t.getNodeDisplayData(e);
        a ? t.getCamera().animate(a, Object.assign(Object.assign({}, n), r)) : console.warn("Node ".concat(e, " not found"));
    }, [
        t,
        n
    ]);
    return {
        zoomIn: s,
        zoomOut: l,
        reset: i,
        goto: u,
        gotoNode: m
    };
}
function k(e) {
    const t = h(), [n, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [s, l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e || t.container), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>r((e)=>!e), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(document.addEventListener("fullscreenchange", i), ()=>document.removeEventListener("fullscreenchange", i)), [
        i
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        l(e || t.container);
    }, [
        e,
        t.container
    ]);
    return {
        toggle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
            var e;
            e = s, document.fullscreenElement !== e ? e.requestFullscreen() : document.exitFullscreen && document.exitFullscreen();
        }, [
            s
        ]),
        isFullScreen: n
    };
}
const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, h)=>{
    let { graph: e, id: n, className: r, style: a, settings: s = {}, children: d } = param;
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), w = {
        className: "react-sigma ".concat(r || ""),
        id: n,
        style: a
    }, [b, E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [_, O] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(s);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        O((e)=>j(e, s) ? e : s);
    }, [
        s
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        E((t)=>{
            let n = null;
            if (null !== p.current) {
                let r = new __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2f$dist$2f$graphology$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
                e && (r = "function" == typeof e ? new e : e);
                let a = null;
                t && (a = t.getCamera().getState(), t.kill()), n = new __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$sigma$2f$dist$2f$sigma$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sigma"](r, p.current, _), a && n.getCamera().setState(a);
            }
            return n;
        });
    }, [
        p,
        e,
        _
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(h, ()=>b, [
        b
    ]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>b && v.current ? {
            sigma: b,
            container: v.current
        } : null, [
        b,
        v
    ]), C = null !== y ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(f, {
        value: y
    }, d) : null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, w, {
        ref: v
    }), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sigma-container",
        ref: p
    }), C);
});
const H = (param)=>{
    let { id: e, className: n, style: r, children: a, position: c = "bottom-left" } = param;
    const o = {
        className: "react-sigma-controls ".concat(n || "", " ").concat(c),
        id: e,
        style: r
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, o), a);
};
var M;
function P() {
    return P = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", P.apply(null, arguments);
}
var z, V = function(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", P({
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16",
        "data-icon": "dot-circle",
        "data-prefix": "far",
        viewBox: "0 0 512 512",
        width: "1em",
        height: "1em"
    }, t), M || (M = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "currentColor",
        d: "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80"
    })));
};
function B() {
    return B = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", B.apply(null, arguments);
}
var F, $ = function(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", B({
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14",
        "data-icon": "minus",
        "data-prefix": "fas",
        viewBox: "0 0 448 512",
        width: "1em",
        height: "1em"
    }, t), z || (z = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "currentColor",
        d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"
    })));
};
function I() {
    return I = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", I.apply(null, arguments);
}
var T = function(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", I({
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14",
        "data-icon": "plus",
        "data-prefix": "fas",
        viewBox: "0 0 448 512",
        width: "1em",
        height: "1em"
    }, t), F || (F = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "currentColor",
        d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"
    })));
};
const D = (param)=>{
    let { className: e, style: n, animationDuration: r = 200, children: a, labels: c = {} } = param;
    const { zoomIn: o, zoomOut: s, reset: l } = N({
        duration: r,
        factor: 1.5
    }), i = {
        style: n,
        className: "react-sigma-control ".concat(e || "")
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, i), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>o(),
        title: c.zoomIn || "Zoom In"
    }, a ? a[0] : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(T, {
        style: {
            width: "1em"
        }
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, i), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>s(),
        title: c.zoomOut || "Zoom Out"
    }, a ? a[1] : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($, {
        style: {
            width: "1em"
        }
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, i), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>l(),
        title: c.reset || "See whole graph"
    }, a ? a[2] : __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        style: {
            width: "1em"
        }
    }))));
};
var G;
function R() {
    return R = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", R.apply(null, arguments);
}
var Z, L = function(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", R({
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14",
        "data-icon": "compress",
        "data-prefix": "fas",
        viewBox: "0 0 448 512",
        width: "1em",
        height: "1em"
    }, t), G || (G = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "currentColor",
        d: "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"
    })));
};
function q() {
    return q = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", q.apply(null, arguments);
}
var U = function(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", q({
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14",
        "data-icon": "expand",
        "data-prefix": "fas",
        viewBox: "0 0 448 512",
        width: "1em",
        height: "1em"
    }, t), Z || (Z = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "currentColor",
        d: "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"
    })));
};
const A = (param)=>{
    let { id: e, className: n, style: r, container: a, children: c, labels: o = {} } = param;
    const { isFullScreen: s, toggle: l } = k(null == a ? void 0 : a.current), i = {
        className: "react-sigma-control ".concat(n || ""),
        id: e,
        style: r
    };
    return document.fullscreenEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, i), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: l,
        title: s ? o.exit || "Exit fullscreen" : o.enter || "Enter fullscreen"
    }, c && !s && c[0], c && s && c[1], !c && !s && __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, {
        style: {
            width: "1em"
        }
    }), !c && s && __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(L, {
        style: {
            width: "1em"
        }
    }))) : null;
};
;
 //# sourceMappingURL=react-sigma_core.esm.min.js.map
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-core@5.0.4_graphology@0.26.0_graphology-types@0.24.8__react@19.1.0__075301aea585382297676e5b58251850/node_modules/@react-sigma/layout-core/lib/react-sigma_layout-core.esm.min.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkerLayoutControl",
    ()=>h,
    "useLayoutFactory",
    ()=>o,
    "useWorkerLayoutFactory",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+core@5.0.4_graphology@0.26.0_graphology-types@0.24.8__react@19.1.0_sigma@3.0.2_graphology-types@0.24.8_/node_modules/@react-sigma/core/lib/react-sigma_core.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
function o(r, n) {
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSigma"])(), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(s.current, n) || (s.current = n);
    return {
        positions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>s.current ? r(i.getGraph(), s.current) : {}, [
            i,
            s,
            r
        ]),
        assign: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
            s.current && r.assign(i.getGraph(), s.current);
        }, [
            i,
            s,
            r
        ])
    };
}
function c(r, n) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSigma"])(), [c, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [p, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(m.current, n) || (m.current = n), (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        u(!1);
        let t = null;
        return m.current && (t = new r(o.getGraph(), m.current)), g(t), ()=>{
            null !== t && t.kill();
        };
    }, [
        o,
        m,
        g,
        u,
        r
    ]);
    return {
        stop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
            p && (p.stop(), u(!1));
        }, [
            p,
            u
        ]),
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
            p && (p.start(), u(!0));
        }, [
            p,
            u
        ]),
        kill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
            p && p.kill(), u(!1);
        }, [
            p,
            u
        ]),
        isRunning: c
    };
}
var u;
function p() {
    return p = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", p.apply(null, arguments);
}
var g, m = function(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", p({
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "play-solid_svg__svg-inline--fa play-solid_svg__fa-play play-solid_svg__fa-w-14",
        "data-icon": "play",
        "data-prefix": "fas",
        viewBox: "0 0 448 512",
        width: "1em",
        height: "1em"
    }, t), u || (u = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "currentColor",
        d: "M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6"
    })));
};
function d() {
    return d = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", d.apply(null, arguments);
}
var f = function(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", d({
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "stop-solid_svg__svg-inline--fa stop-solid_svg__fa-stop stop-solid_svg__fa-w-14",
        "data-icon": "stop",
        "data-prefix": "fas",
        viewBox: "0 0 448 512",
        width: "1em",
        height: "1em"
    }, t), g || (g = __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "currentColor",
        d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"
    })));
};
function h(param) {
    let { id: e, className: r, style: a, layout: l, autoRunFor: i, children: o, labels: c = {} } = param;
    const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_sigma$40$3$2e$0$2e$2_graphology$2d$types$40$0$2e$24$2e$8_$2f$node_modules$2f40$react$2d$sigma$2f$core$2f$lib$2f$react$2d$sigma_core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSigma"])(), { stop: p, start: g, isRunning: d } = l, h = {
        className: "react-sigma-control ".concat(r || ""),
        id: e,
        style: a
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!u) return;
        let t = null;
        return void 0 !== i && i > -1 && u.getGraph().order > 0 && (g(), t = i > 0 ? window.setTimeout(()=>{
            p();
        }, i) : null), ()=>{
            t && clearTimeout(t);
        };
    }, [
        i,
        g,
        p,
        u
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, h), __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ()=>d ? p() : g(),
        title: d ? c.stop || "Stop the layout animation" : c.start || "Start the layout animation"
    }, o && !d && o[0], o && d && o[1], !o && !d && __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(m, {
        style: {
            width: "1em"
        }
    }), !o && d && __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(f, {
        style: {
            width: "1em"
        }
    })));
}
;
 //# sourceMappingURL=react-sigma_layout-core.esm.min.js.map
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/defaults.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Defaults
 * ====================
 *
 * Helper function used throughout the standard lib to resolve defaults.
 */ function isLeaf(o) {
    return !o || typeof o !== 'object' || typeof o === 'function' || Array.isArray(o) || o instanceof Set || o instanceof Map || o instanceof RegExp || o instanceof Date;
}
function resolveDefaults(target, defaults) {
    target = target || {};
    var output = {};
    for(var k in defaults){
        var existing = target[k];
        var def = defaults[k];
        // Recursion
        if (!isLeaf(def)) {
            output[k] = resolveDefaults(existing, def);
            continue;
        }
        // Leaf
        if (existing === undefined) {
            output[k] = def;
        } else {
            output[k] = existing;
        }
    }
    return output;
}
module.exports = resolveDefaults;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/getters.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Weight Getter
 * =========================
 *
 * Function creating weight getters.
 */ function coerceWeight(value) {
    // Ensuring target value is a correct number
    if (typeof value !== 'number' || isNaN(value)) return 1;
    return value;
}
function createNodeValueGetter(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v) {
        if (typeof v === 'undefined') return defaultValue;
        return v;
    };
    if (typeof defaultValue === 'function') coerceToDefault = defaultValue;
    var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
        return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === 'string') {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, node) {
            return get(graph.getNodeAttributes(node));
        };
        getter.fromEntry = function(node, attributes) {
            return get(attributes);
        };
    } else if (typeof nameOrFunction === 'function') {
        getter.fromAttributes = function() {
            throw new Error('graphology-utils/getters/createNodeValueGetter: irrelevant usage.');
        };
        getter.fromGraph = function(graph, node) {
            return coerceToDefault(nameOrFunction(node, graph.getNodeAttributes(node)));
        };
        getter.fromEntry = function(node, attributes) {
            return coerceToDefault(nameOrFunction(node, attributes));
        };
    } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
    }
    return getter;
}
function createEdgeValueGetter(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v) {
        if (typeof v === 'undefined') return defaultValue;
        return v;
    };
    if (typeof defaultValue === 'function') coerceToDefault = defaultValue;
    var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
        return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === 'string') {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, edge) {
            return get(graph.getEdgeAttributes(edge));
        };
        getter.fromEntry = function(edge, attributes) {
            return get(attributes);
        };
        getter.fromPartialEntry = getter.fromEntry;
        getter.fromMinimalEntry = getter.fromEntry;
    } else if (typeof nameOrFunction === 'function') {
        getter.fromAttributes = function() {
            throw new Error('graphology-utils/getters/createEdgeValueGetter: irrelevant usage.');
        };
        getter.fromGraph = function(graph, edge) {
            // TODO: we can do better, check #310
            var extremities = graph.extremities(edge);
            return coerceToDefault(nameOrFunction(edge, graph.getEdgeAttributes(edge), extremities[0], extremities[1], graph.getNodeAttributes(extremities[0]), graph.getNodeAttributes(extremities[1]), graph.isUndirected(edge)));
        };
        getter.fromEntry = function(e, a, s, t, sa, ta, u) {
            return coerceToDefault(nameOrFunction(e, a, s, t, sa, ta, u));
        };
        getter.fromPartialEntry = function(e, a, s, t) {
            return coerceToDefault(nameOrFunction(e, a, s, t));
        };
        getter.fromMinimalEntry = function(e, a) {
            return coerceToDefault(nameOrFunction(e, a));
        };
    } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
        getter.fromMinimalEntry = returnDefault;
    }
    return getter;
}
exports.createNodeValueGetter = createNodeValueGetter;
exports.createEdgeValueGetter = createEdgeValueGetter;
exports.createEdgeWeightGetter = function(name) {
    return createEdgeValueGetter(name, coerceWeight);
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/iterate.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Force Layout Iteration
 * ==================================
 *
 * Function describing a single iteration of the force layout.
 */ const { createNodeValueGetter, createEdgeValueGetter } = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/getters.js [app-client] (ecmascript)");
// const EPSILON = -Infinity;
// function isVeryCloseToZero(x) {
//   return Math.abs(x) < EPSILON;
// }
module.exports = function iterate(graph, nodeStates, params) {
    const { nodeXAttribute: xKey, nodeYAttribute: yKey } = params;
    const { attraction, repulsion, gravity, inertia, maxMove } = params.settings;
    let { shouldSkipNode, shouldSkipEdge, isNodeFixed } = params;
    isNodeFixed = createNodeValueGetter(isNodeFixed);
    shouldSkipNode = createNodeValueGetter(shouldSkipNode, false);
    shouldSkipEdge = createEdgeValueGetter(shouldSkipEdge, false);
    const nodes = graph.filterNodes((n, attr)=>{
        return !shouldSkipNode.fromEntry(n, attr);
    });
    const adjustedOrder = nodes.length;
    // Check nodeStatess and inertia
    for(let i = 0; i < adjustedOrder; i++){
        const n = nodes[i];
        const attr = graph.getNodeAttributes(n);
        const nodeState = nodeStates[n];
        if (!nodeState) nodeStates[n] = {
            dx: 0,
            dy: 0,
            x: attr[xKey] || 0,
            y: attr[yKey] || 0
        };
        else nodeStates[n] = {
            dx: nodeState.dx * inertia,
            dy: nodeState.dy * inertia,
            x: attr[xKey] || 0,
            y: attr[yKey] || 0
        };
    }
    // Repulsion
    if (repulsion) for(let i = 0; i < adjustedOrder; i++){
        const n1 = nodes[i];
        const n1State = nodeStates[n1];
        for(let j = i + 1; j < adjustedOrder; j++){
            const n2 = nodes[j];
            const n2State = nodeStates[n2];
            // Compute distance:
            const dx = n2State.x - n1State.x;
            const dy = n2State.y - n1State.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            // Repulse nodes relatively to 1 / distance:
            const repulsionX = repulsion / distance * dx;
            const repulsionY = repulsion / distance * dy;
            n1State.dx -= repulsionX;
            n1State.dy -= repulsionY;
            n2State.dx += repulsionX;
            n2State.dy += repulsionY;
        }
    }
    // Attraction
    if (attraction) graph.forEachEdge((edge, attr, source, target, sourceAttr, targetAttr, undirected)=>{
        if (source === target) return;
        if (shouldSkipNode.fromEntry(source, sourceAttr) || shouldSkipNode.fromEntry(target, targetAttr)) return;
        if (shouldSkipEdge.fromEntry(edge, attr, source, target, sourceAttr, targetAttr, undirected)) return;
        const n1State = nodeStates[source];
        const n2State = nodeStates[target];
        // Compute distance:
        const dx = n2State.x - n1State.x;
        const dy = n2State.y - n1State.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        // Attract nodes relatively to their distance:
        const attractionX = attraction * distance * dx;
        const attractionY = attraction * distance * dy;
        n1State.dx += attractionX;
        n1State.dy += attractionY;
        n2State.dx -= attractionX;
        n2State.dy -= attractionY;
    });
    // Gravity
    if (gravity) for(let i = 0; i < adjustedOrder; i++){
        const n = nodes[i];
        const nodeState = nodeStates[n];
        // Attract nodes to [0, 0] relatively to the distance:
        const { x, y } = nodeState;
        const distance = Math.sqrt(x * x + y * y) || 1;
        nodeStates[n].dx -= x * gravity * distance;
        nodeStates[n].dy -= y * gravity * distance;
    }
    // Apply forces
    const converged = false;
    for(let i = 0; i < adjustedOrder; i++){
        const n = nodes[i];
        const nodeState = nodeStates[n];
        const distance = Math.sqrt(nodeState.dx * nodeState.dx + nodeState.dy * nodeState.dy);
        if (distance > maxMove) {
            nodeState.dx *= maxMove / distance;
            nodeState.dy *= maxMove / distance;
        }
        // if (!isVeryCloseToZero(nodeState.dx) || !isVeryCloseToZero(nodeState.dy)) {
        //   converged = false;
        // }
        if (!isNodeFixed.fromGraph(graph, n)) {
            nodeState.x += nodeState.dx;
            nodeState.y += nodeState.dy;
            nodeState.fixed = false;
        } else {
            nodeState.fixed = true;
        }
    // NOTE: possibility to assign here to save one loop in the future
    }
    return {
        converged
    };
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Force Layout Helpers
 * ================================
 *
 * Miscellaneous helper functions related to the force layout.
 */ exports.assignLayoutChanges = function(graph, nodeStates, params) {
    const { nodeXAttribute: x, nodeYAttribute: y } = params;
    graph.updateEachNodeAttributes((n, attr)=>{
        const state = nodeStates[n];
        if (!state || state.fixed) return attr;
        attr[x] = state.x;
        attr[y] = state.y;
        return attr;
    }, {
        attributes: [
            'x',
            'y'
        ]
    });
};
exports.collectLayoutChanges = function(nodeStates) {
    const mapping = {};
    for(const n in nodeStates){
        const state = nodeStates[n];
        mapping[n] = {
            x: state.x,
            y: state.y
        };
    }
    return mapping;
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/defaults.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Force Layout Defaults
 * =================================
 *
 * Default options & settings used by the library.
 */ module.exports = {
    nodeXAttribute: 'x',
    nodeYAttribute: 'y',
    isNodeFixed: 'fixed',
    shouldSkipNode: null,
    shouldSkipEdge: null,
    settings: {
        attraction: 0.0005,
        repulsion: 0.1,
        gravity: 0.0001,
        inertia: 0.6,
        maxMove: 200
    }
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Force Layout
 * ========================
 *
 * A simple force-directed layout algorithm for graphology.
 */ const isGraph = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)");
const resolveDefaults = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/defaults.js [app-client] (ecmascript)");
const iterate = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/iterate.js [app-client] (ecmascript)");
const helpers = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/helpers.js [app-client] (ecmascript)");
const DEFAULTS = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/defaults.js [app-client] (ecmascript)");
/**
 * Asbtract function used to run the layout for a certain number of iterations.
 *
 * @param  {boolean}       assign       - Whether to assign positions.
 * @param  {Graph}         graph        - Target graph.
 * @param  {object|number} params       - If number, params.maxIterations, else:
 * @param  {number}          maxIterations - Maximum number of iterations.
 * @param  {object}          [settings] - Settings.
 * @return {object|undefined}
 */ function abstractSynchronousLayout(assign, graph, params) {
    if (!isGraph(graph)) throw new Error('graphology-layout-force: the given graph is not a valid graphology instance.');
    if (typeof params === 'number') params = {
        maxIterations: params
    };
    else params = params || {};
    const maxIterations = params.maxIterations;
    params = resolveDefaults(params, DEFAULTS);
    if (typeof maxIterations !== 'number' || maxIterations <= 0) throw new Error('graphology-layout-force: you should provide a positive number of maximum iterations.');
    // Iteration state
    const nodeStates = {};
    let result = null;
    let i;
    // Iterating
    for(i = 0; i < maxIterations; i++){
        result = iterate(graph, nodeStates, params);
        if (result.converged) break;
    }
    // Applying
    if (assign) {
        helpers.assignLayoutChanges(graph, nodeStates, params);
        return;
    }
    return helpers.collectLayoutChanges(nodeStates);
}
/**
 * Exporting.
 */ const synchronousLayout = abstractSynchronousLayout.bind(null, false);
synchronousLayout.assign = abstractSynchronousLayout.bind(null, true);
module.exports = synchronousLayout;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/worker.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Force Layout Worker
 * ===============================
 *
 * A worker made for running a force layout live.
 *
 * Note that it does not run in a webworker yet but respect animation frames.
 */ const isGraph = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)");
const resolveDefaults = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/defaults.js [app-client] (ecmascript)");
const iterate = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/iterate.js [app-client] (ecmascript)");
const helpers = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/helpers.js [app-client] (ecmascript)");
const DEFAULTS = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/defaults.js [app-client] (ecmascript)");
function ForceSupervisor(graph, params) {
    // Validation
    if (!isGraph(graph)) throw new Error('graphology-layout-force/worker: the given graph is not a valid graphology instance.');
    params = resolveDefaults(params, DEFAULTS);
    this.callbacks = {};
    if (params.onConverged) this.callbacks.onConverged = params.onConverged;
    this.graph = graph;
    this.params = params;
    this.nodeStates = {};
    this.frameID = null;
    this.running = false;
    this.killed = false;
// TODO: hook listeners on graph to listen to dropNode, dropEdge, clear, clearEdges
}
ForceSupervisor.prototype.isRunning = function() {
    return this.running;
};
ForceSupervisor.prototype.runFrame = function() {
    let { converged } = iterate(this.graph, this.nodeStates, this.params);
    helpers.assignLayoutChanges(this.graph, this.nodeStates, this.params);
    // TODO: figure out convergence
    converged = false;
    if (converged) {
        if (this.callbacks.onConverged) this.callbacks.onConverged();
        this.stop();
    } else {
        this.frameID = window.requestAnimationFrame(()=>this.runFrame());
    }
};
ForceSupervisor.prototype.stop = function() {
    this.running = false;
    if (this.frameID !== null) {
        window.cancelAnimationFrame(this.frameID);
        this.frameID = null;
    }
    return this;
};
ForceSupervisor.prototype.start = function() {
    if (this.killed) throw new Error('graphology-layout-force/worker.start: layout was killed.');
    if (this.running) return;
    this.running = true;
    this.runFrame();
};
ForceSupervisor.prototype.kill = function() {
    this.stop();
    delete this.nodeStates;
    this.killed = true;
// TODO: cleanup events
};
module.exports = ForceSupervisor;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-force@5.0.4_graphology-layout-force@0.2.4_graphology-types@0.24.8___30e2df2d334efb85a55f1452232305aa/node_modules/@react-sigma/layout-force/lib/react-sigma_layout-force.esm.min.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutForceControl",
    ()=>c,
    "useLayoutForce",
    ()=>n,
    "useWorkerLayoutForce",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-core@5.0.4_graphology@0.26.0_graphology-types@0.24.8__react@19.1.0__075301aea585382297676e5b58251850/node_modules/@react-sigma/layout-core/lib/react-sigma_layout-core.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$force$40$0$2e$2$2e$4_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$force$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$force$40$0$2e$2$2e$4_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$force$2f$worker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-force@0.2.4_graphology-types@0.24.8/node_modules/graphology-layout-force/worker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
function n() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        maxIterations: 100
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutFactory"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$force$40$0$2e$2$2e$4_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$force$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], r);
}
function s() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutFactory"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$force$40$0$2e$2$2e$4_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$force$2f$worker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], o);
}
const c = (param)=>{
    let { id: o, className: r, style: e, settings: a = {}, autoRunFor: n, children: c, labels: i } = param;
    const m = {
        id: o,
        className: r,
        style: e,
        autoRunFor: n,
        labels: i,
        layout: s(a)
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkerLayoutControl"], Object.assign({}, m), c);
};
;
 //# sourceMappingURL=react-sigma_layout-force.esm.min.js.map
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/iterate.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint no-constant-condition: 0 */ /**
 * Graphology ForceAtlas2 Iteration
 * =================================
 *
 * Function used to perform a single iteration of the algorithm.
 */ /**
 * Matrices properties accessors.
 */ var NODE_X = 0;
var NODE_Y = 1;
var NODE_DX = 2;
var NODE_DY = 3;
var NODE_OLD_DX = 4;
var NODE_OLD_DY = 5;
var NODE_MASS = 6;
var NODE_CONVERGENCE = 7;
var NODE_SIZE = 8;
var NODE_FIXED = 9;
var EDGE_SOURCE = 0;
var EDGE_TARGET = 1;
var EDGE_WEIGHT = 2;
var REGION_NODE = 0;
var REGION_CENTER_X = 1;
var REGION_CENTER_Y = 2;
var REGION_SIZE = 3;
var REGION_NEXT_SIBLING = 4;
var REGION_FIRST_CHILD = 5;
var REGION_MASS = 6;
var REGION_MASS_CENTER_X = 7;
var REGION_MASS_CENTER_Y = 8;
var SUBDIVISION_ATTEMPTS = 3;
/**
 * Constants.
 */ var PPN = 10;
var PPE = 3;
var PPR = 9;
var MAX_FORCE = 10;
/**
 * Function used to perform a single interation of the algorithm.
 *
 * @param  {object}       options    - Layout options.
 * @param  {Float32Array} NodeMatrix - Node data.
 * @param  {Float32Array} EdgeMatrix - Edge data.
 * @return {object}                  - Some metadata.
 */ module.exports = function iterate(options, NodeMatrix, EdgeMatrix) {
    // Initializing variables
    var l, r, n, n1, n2, rn, e, w, g, s;
    var order = NodeMatrix.length, size = EdgeMatrix.length;
    var adjustSizes = options.adjustSizes;
    var thetaSquared = options.barnesHutTheta * options.barnesHutTheta;
    var outboundAttCompensation, coefficient, xDist, yDist, ewc, distance, factor;
    var RegionMatrix = [];
    // 1) Initializing layout data
    //-----------------------------
    // Resetting positions & computing max values
    for(n = 0; n < order; n += PPN){
        NodeMatrix[n + NODE_OLD_DX] = NodeMatrix[n + NODE_DX];
        NodeMatrix[n + NODE_OLD_DY] = NodeMatrix[n + NODE_DY];
        NodeMatrix[n + NODE_DX] = 0;
        NodeMatrix[n + NODE_DY] = 0;
    }
    // If outbound attraction distribution, compensate
    if (options.outboundAttractionDistribution) {
        outboundAttCompensation = 0;
        for(n = 0; n < order; n += PPN){
            outboundAttCompensation += NodeMatrix[n + NODE_MASS];
        }
        outboundAttCompensation /= order / PPN;
    }
    // 1.bis) Barnes-Hut computation
    //------------------------------
    if (options.barnesHutOptimize) {
        // Setting up
        var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, q, q2, subdivisionAttempts;
        // Computing min and max values
        for(n = 0; n < order; n += PPN){
            minX = Math.min(minX, NodeMatrix[n + NODE_X]);
            maxX = Math.max(maxX, NodeMatrix[n + NODE_X]);
            minY = Math.min(minY, NodeMatrix[n + NODE_Y]);
            maxY = Math.max(maxY, NodeMatrix[n + NODE_Y]);
        }
        // squarify bounds, it's a quadtree
        var dx = maxX - minX, dy = maxY - minY;
        if (dx > dy) {
            minY -= (dx - dy) / 2;
            maxY = minY + dx;
        } else {
            minX -= (dy - dx) / 2;
            maxX = minX + dy;
        }
        // Build the Barnes Hut root region
        RegionMatrix[0 + REGION_NODE] = -1;
        RegionMatrix[0 + REGION_CENTER_X] = (minX + maxX) / 2;
        RegionMatrix[0 + REGION_CENTER_Y] = (minY + maxY) / 2;
        RegionMatrix[0 + REGION_SIZE] = Math.max(maxX - minX, maxY - minY);
        RegionMatrix[0 + REGION_NEXT_SIBLING] = -1;
        RegionMatrix[0 + REGION_FIRST_CHILD] = -1;
        RegionMatrix[0 + REGION_MASS] = 0;
        RegionMatrix[0 + REGION_MASS_CENTER_X] = 0;
        RegionMatrix[0 + REGION_MASS_CENTER_Y] = 0;
        // Add each node in the tree
        l = 1;
        for(n = 0; n < order; n += PPN){
            // Current region, starting with root
            r = 0;
            subdivisionAttempts = SUBDIVISION_ATTEMPTS;
            while(true){
                // Are there sub-regions?
                // We look at first child index
                if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                    // There are sub-regions
                    // We just iterate to find a "leaf" of the tree
                    // that is an empty region or a region with a single node
                    // (see next case)
                    // Find the quadrant of n
                    if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                        if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                            // Top Left quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD];
                        } else {
                            // Bottom Left quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                        }
                    } else {
                        if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                            // Top Right quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                        } else {
                            // Bottom Right quarter
                            q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                        }
                    }
                    // Update center of mass and mass (we only do it for non-leave regions)
                    RegionMatrix[r + REGION_MASS_CENTER_X] = (RegionMatrix[r + REGION_MASS_CENTER_X] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_X] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
                    RegionMatrix[r + REGION_MASS_CENTER_Y] = (RegionMatrix[r + REGION_MASS_CENTER_Y] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_Y] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
                    RegionMatrix[r + REGION_MASS] += NodeMatrix[n + NODE_MASS];
                    // Iterate on the right quadrant
                    r = q;
                    continue;
                } else {
                    // There are no sub-regions: we are in a "leaf"
                    // Is there a node in this leave?
                    if (RegionMatrix[r + REGION_NODE] < 0) {
                        // There is no node in region:
                        // we record node n and go on
                        RegionMatrix[r + REGION_NODE] = n;
                        break;
                    } else {
                        // There is a node in this region
                        // We will need to create sub-regions, stick the two
                        // nodes (the old one r[0] and the new one n) in two
                        // subregions. If they fall in the same quadrant,
                        // we will iterate.
                        // Create sub-regions
                        RegionMatrix[r + REGION_FIRST_CHILD] = l * PPR;
                        w = RegionMatrix[r + REGION_SIZE] / 2; // new size (half)
                        // NOTE: we use screen coordinates
                        // from Top Left to Bottom Right
                        // Top Left sub-region
                        g = RegionMatrix[r + REGION_FIRST_CHILD];
                        RegionMatrix[g + REGION_NODE] = -1;
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
                        RegionMatrix[g + REGION_SIZE] = w;
                        RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                        RegionMatrix[g + REGION_MASS] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                        // Bottom Left sub-region
                        g += PPR;
                        RegionMatrix[g + REGION_NODE] = -1;
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
                        RegionMatrix[g + REGION_SIZE] = w;
                        RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                        RegionMatrix[g + REGION_MASS] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                        // Top Right sub-region
                        g += PPR;
                        RegionMatrix[g + REGION_NODE] = -1;
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
                        RegionMatrix[g + REGION_SIZE] = w;
                        RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                        RegionMatrix[g + REGION_MASS] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                        // Bottom Right sub-region
                        g += PPR;
                        RegionMatrix[g + REGION_NODE] = -1;
                        RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
                        RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
                        RegionMatrix[g + REGION_SIZE] = w;
                        RegionMatrix[g + REGION_NEXT_SIBLING] = RegionMatrix[r + REGION_NEXT_SIBLING];
                        RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                        RegionMatrix[g + REGION_MASS] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                        RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                        l += 4;
                        // Now the goal is to find two different sub-regions
                        // for the two nodes: the one previously recorded (r[0])
                        // and the one we want to add (n)
                        // Find the quadrant of the old node
                        if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                            if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                // Top Left quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD];
                            } else {
                                // Bottom Left quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                            }
                        } else {
                            if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                // Top Right quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                            } else {
                                // Bottom Right quarter
                                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                            }
                        }
                        // We remove r[0] from the region r, add its mass to r and record it in q
                        RegionMatrix[r + REGION_MASS] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_MASS];
                        RegionMatrix[r + REGION_MASS_CENTER_X] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X];
                        RegionMatrix[r + REGION_MASS_CENTER_Y] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y];
                        RegionMatrix[q + REGION_NODE] = RegionMatrix[r + REGION_NODE];
                        RegionMatrix[r + REGION_NODE] = -1;
                        // Find the quadrant of n
                        if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                            if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                // Top Left quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD];
                            } else {
                                // Bottom Left quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                            }
                        } else {
                            if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                // Top Right quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                            } else {
                                // Bottom Right quarter
                                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                            }
                        }
                        if (q === q2) {
                            // If both nodes are in the same quadrant,
                            // we have to try it again on this quadrant
                            if (subdivisionAttempts--) {
                                r = q;
                                continue; // while
                            } else {
                                // we are out of precision here, and we cannot subdivide anymore
                                // but we have to break the loop anyway
                                subdivisionAttempts = SUBDIVISION_ATTEMPTS;
                                break; // while
                            }
                        }
                        // If both quadrants are different, we record n
                        // in its quadrant
                        RegionMatrix[q2 + REGION_NODE] = n;
                        break;
                    }
                }
            }
        }
    }
    // 2) Repulsion
    //--------------
    // NOTES: adjustSizes = antiCollision & scalingRatio = coefficient
    if (options.barnesHutOptimize) {
        coefficient = options.scalingRatio;
        // Applying repulsion through regions
        for(n = 0; n < order; n += PPN){
            // Computing leaf quad nodes iteration
            r = 0; // Starting with root region
            while(true){
                if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                    // The region has sub-regions
                    // We run the Barnes Hut test to see if we are at the right distance
                    distance = Math.pow(NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X], 2) + Math.pow(NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y], 2);
                    s = RegionMatrix[r + REGION_SIZE];
                    if (4 * s * s / distance < thetaSquared) {
                        // We treat the region as a single body, and we repulse
                        xDist = NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X];
                        yDist = NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y];
                        if (adjustSizes === true) {
                            //-- Linear Anti-collision Repulsion
                            if (distance > 0) {
                                factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                                NodeMatrix[n + NODE_DX] += xDist * factor;
                                NodeMatrix[n + NODE_DY] += yDist * factor;
                            } else if (distance < 0) {
                                factor = -coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / Math.sqrt(distance);
                                NodeMatrix[n + NODE_DX] += xDist * factor;
                                NodeMatrix[n + NODE_DY] += yDist * factor;
                            }
                        } else {
                            //-- Linear Repulsion
                            if (distance > 0) {
                                factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                                NodeMatrix[n + NODE_DX] += xDist * factor;
                                NodeMatrix[n + NODE_DY] += yDist * factor;
                            }
                        }
                        // When this is done, we iterate. We have to look at the next sibling.
                        r = RegionMatrix[r + REGION_NEXT_SIBLING];
                        if (r < 0) break; // No next sibling: we have finished the tree
                        continue;
                    } else {
                        // The region is too close and we have to look at sub-regions
                        r = RegionMatrix[r + REGION_FIRST_CHILD];
                        continue;
                    }
                } else {
                    // The region has no sub-region
                    // If there is a node r[0] and it is not n, then repulse
                    rn = RegionMatrix[r + REGION_NODE];
                    if (rn >= 0 && rn !== n) {
                        xDist = NodeMatrix[n + NODE_X] - NodeMatrix[rn + NODE_X];
                        yDist = NodeMatrix[n + NODE_Y] - NodeMatrix[rn + NODE_Y];
                        distance = xDist * xDist + yDist * yDist;
                        if (adjustSizes === true) {
                            //-- Linear Anti-collision Repulsion
                            if (distance > 0) {
                                factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                                NodeMatrix[n + NODE_DX] += xDist * factor;
                                NodeMatrix[n + NODE_DY] += yDist * factor;
                            } else if (distance < 0) {
                                factor = -coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / Math.sqrt(distance);
                                NodeMatrix[n + NODE_DX] += xDist * factor;
                                NodeMatrix[n + NODE_DY] += yDist * factor;
                            }
                        } else {
                            //-- Linear Repulsion
                            if (distance > 0) {
                                factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                                NodeMatrix[n + NODE_DX] += xDist * factor;
                                NodeMatrix[n + NODE_DY] += yDist * factor;
                            }
                        }
                    }
                    // When this is done, we iterate. We have to look at the next sibling.
                    r = RegionMatrix[r + REGION_NEXT_SIBLING];
                    if (r < 0) break; // No next sibling: we have finished the tree
                    continue;
                }
            }
        }
    } else {
        coefficient = options.scalingRatio;
        // Square iteration
        for(n1 = 0; n1 < order; n1 += PPN){
            for(n2 = 0; n2 < n1; n2 += PPN){
                // Common to both methods
                xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
                yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
                if (adjustSizes === true) {
                    //-- Anticollision Linear Repulsion
                    distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
                    if (distance > 0) {
                        factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
                        // Updating nodes' dx and dy
                        NodeMatrix[n1 + NODE_DX] += xDist * factor;
                        NodeMatrix[n1 + NODE_DY] += yDist * factor;
                        NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                        NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                    } else if (distance < 0) {
                        factor = 100 * coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS];
                        // Updating nodes' dx and dy
                        NodeMatrix[n1 + NODE_DX] += xDist * factor;
                        NodeMatrix[n1 + NODE_DY] += yDist * factor;
                        NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                        NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                    }
                } else {
                    //-- Linear Repulsion
                    distance = Math.sqrt(xDist * xDist + yDist * yDist);
                    if (distance > 0) {
                        factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
                        // Updating nodes' dx and dy
                        NodeMatrix[n1 + NODE_DX] += xDist * factor;
                        NodeMatrix[n1 + NODE_DY] += yDist * factor;
                        NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                        NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                    }
                }
            }
        }
    }
    // 3) Gravity
    //------------
    g = options.gravity / options.scalingRatio;
    coefficient = options.scalingRatio;
    for(n = 0; n < order; n += PPN){
        factor = 0;
        // Common to both methods
        xDist = NodeMatrix[n + NODE_X];
        yDist = NodeMatrix[n + NODE_Y];
        distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        if (options.strongGravityMode) {
            //-- Strong gravity
            if (distance > 0) factor = coefficient * NodeMatrix[n + NODE_MASS] * g;
        } else {
            //-- Linear Anti-collision Repulsion n
            if (distance > 0) factor = coefficient * NodeMatrix[n + NODE_MASS] * g / distance;
        }
        // Updating node's dx and dy
        NodeMatrix[n + NODE_DX] -= xDist * factor;
        NodeMatrix[n + NODE_DY] -= yDist * factor;
    }
    // 4) Attraction
    //---------------
    coefficient = 1 * (options.outboundAttractionDistribution ? outboundAttCompensation : 1);
    // TODO: simplify distance
    // TODO: coefficient is always used as -c --> optimize?
    for(e = 0; e < size; e += PPE){
        n1 = EdgeMatrix[e + EDGE_SOURCE];
        n2 = EdgeMatrix[e + EDGE_TARGET];
        w = EdgeMatrix[e + EDGE_WEIGHT];
        // Edge weight influence
        ewc = Math.pow(w, options.edgeWeightInfluence);
        // Common measures
        xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
        yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
        // Applying attraction to nodes
        if (adjustSizes === true) {
            distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
            if (options.linLogMode) {
                if (options.outboundAttractionDistribution) {
                    //-- LinLog Degree Distributed Anti-collision Attraction
                    if (distance > 0) {
                        factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
                    }
                } else {
                    //-- LinLog Anti-collision Attraction
                    if (distance > 0) {
                        factor = -coefficient * ewc * Math.log(1 + distance) / distance;
                    }
                }
            } else {
                if (options.outboundAttractionDistribution) {
                    //-- Linear Degree Distributed Anti-collision Attraction
                    if (distance > 0) {
                        factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
                    }
                } else {
                    //-- Linear Anti-collision Attraction
                    if (distance > 0) {
                        factor = -coefficient * ewc;
                    }
                }
            }
        } else {
            distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
            if (options.linLogMode) {
                if (options.outboundAttractionDistribution) {
                    //-- LinLog Degree Distributed Attraction
                    if (distance > 0) {
                        factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
                    }
                } else {
                    //-- LinLog Attraction
                    if (distance > 0) factor = -coefficient * ewc * Math.log(1 + distance) / distance;
                }
            } else {
                if (options.outboundAttractionDistribution) {
                    //-- Linear Attraction Mass Distributed
                    // NOTE: Distance is set to 1 to override next condition
                    distance = 1;
                    factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
                } else {
                    //-- Linear Attraction
                    // NOTE: Distance is set to 1 to override next condition
                    distance = 1;
                    factor = -coefficient * ewc;
                }
            }
        }
        // Updating nodes' dx and dy
        // TODO: if condition or factor = 1?
        if (distance > 0) {
            // Updating nodes' dx and dy
            NodeMatrix[n1 + NODE_DX] += xDist * factor;
            NodeMatrix[n1 + NODE_DY] += yDist * factor;
            NodeMatrix[n2 + NODE_DX] -= xDist * factor;
            NodeMatrix[n2 + NODE_DY] -= yDist * factor;
        }
    }
    // 5) Apply Forces
    //-----------------
    var force, swinging, traction, nodespeed, newX, newY;
    // MATH: sqrt and square distances
    if (adjustSizes === true) {
        for(n = 0; n < order; n += PPN){
            if (NodeMatrix[n + NODE_FIXED] !== 1) {
                force = Math.sqrt(Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2));
                if (force > MAX_FORCE) {
                    NodeMatrix[n + NODE_DX] = NodeMatrix[n + NODE_DX] * MAX_FORCE / force;
                    NodeMatrix[n + NODE_DY] = NodeMatrix[n + NODE_DY] * MAX_FORCE / force;
                }
                swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
                traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
                nodespeed = 0.1 * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
                // Updating node's positon
                newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
                NodeMatrix[n + NODE_X] = newX;
                newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
                NodeMatrix[n + NODE_Y] = newY;
            }
        }
    } else {
        for(n = 0; n < order; n += PPN){
            if (NodeMatrix[n + NODE_FIXED] !== 1) {
                swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
                traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
                nodespeed = NodeMatrix[n + NODE_CONVERGENCE] * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
                // Updating node convergence
                NodeMatrix[n + NODE_CONVERGENCE] = Math.min(1, Math.sqrt(nodespeed * (Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2)) / (1 + Math.sqrt(swinging))));
                // Updating node's positon
                newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
                NodeMatrix[n + NODE_X] = newX;
                newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
                NodeMatrix[n + NODE_Y] = newY;
            }
        }
    }
    // We return the information about the layout (no need to return the matrices)
    return {};
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology ForceAtlas2 Helpers
 * ===============================
 *
 * Miscellaneous helper functions.
 */ /**
 * Constants.
 */ var PPN = 10;
var PPE = 3;
/**
 * Very simple Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */ exports.assign = function(target) {
    target = target || {};
    var objects = Array.prototype.slice.call(arguments).slice(1), i, k, l;
    for(i = 0, l = objects.length; i < l; i++){
        if (!objects[i]) continue;
        for(k in objects[i])target[k] = objects[i][k];
    }
    return target;
};
/**
 * Function used to validate the given settings.
 *
 * @param  {object}      settings - Settings to validate.
 * @return {object|null}
 */ exports.validateSettings = function(settings) {
    if ('linLogMode' in settings && typeof settings.linLogMode !== 'boolean') return {
        message: 'the `linLogMode` setting should be a boolean.'
    };
    if ('outboundAttractionDistribution' in settings && typeof settings.outboundAttractionDistribution !== 'boolean') return {
        message: 'the `outboundAttractionDistribution` setting should be a boolean.'
    };
    if ('adjustSizes' in settings && typeof settings.adjustSizes !== 'boolean') return {
        message: 'the `adjustSizes` setting should be a boolean.'
    };
    if ('edgeWeightInfluence' in settings && typeof settings.edgeWeightInfluence !== 'number') return {
        message: 'the `edgeWeightInfluence` setting should be a number.'
    };
    if ('scalingRatio' in settings && !(typeof settings.scalingRatio === 'number' && settings.scalingRatio >= 0)) return {
        message: 'the `scalingRatio` setting should be a number >= 0.'
    };
    if ('strongGravityMode' in settings && typeof settings.strongGravityMode !== 'boolean') return {
        message: 'the `strongGravityMode` setting should be a boolean.'
    };
    if ('gravity' in settings && !(typeof settings.gravity === 'number' && settings.gravity >= 0)) return {
        message: 'the `gravity` setting should be a number >= 0.'
    };
    if ('slowDown' in settings && !(typeof settings.slowDown === 'number' || settings.slowDown >= 0)) return {
        message: 'the `slowDown` setting should be a number >= 0.'
    };
    if ('barnesHutOptimize' in settings && typeof settings.barnesHutOptimize !== 'boolean') return {
        message: 'the `barnesHutOptimize` setting should be a boolean.'
    };
    if ('barnesHutTheta' in settings && !(typeof settings.barnesHutTheta === 'number' && settings.barnesHutTheta >= 0)) return {
        message: 'the `barnesHutTheta` setting should be a number >= 0.'
    };
    return null;
};
/**
 * Function generating a flat matrix for both nodes & edges of the given graph.
 *
 * @param  {Graph}    graph         - Target graph.
 * @param  {function} getEdgeWeight - Edge weight getter function.
 * @return {object}                 - Both matrices.
 */ exports.graphToByteArrays = function(graph, getEdgeWeight) {
    var order = graph.order;
    var size = graph.size;
    var index = {};
    var j;
    // NOTE: float32 could lead to issues if edge array needs to index large
    // number of nodes.
    var NodeMatrix = new Float32Array(order * PPN);
    var EdgeMatrix = new Float32Array(size * PPE);
    // Iterate through nodes
    j = 0;
    graph.forEachNode(function(node, attr) {
        // Node index
        index[node] = j;
        // Populating byte array
        NodeMatrix[j] = attr.x;
        NodeMatrix[j + 1] = attr.y;
        NodeMatrix[j + 2] = 0; // dx
        NodeMatrix[j + 3] = 0; // dy
        NodeMatrix[j + 4] = 0; // old_dx
        NodeMatrix[j + 5] = 0; // old_dy
        NodeMatrix[j + 6] = 1; // mass
        NodeMatrix[j + 7] = 1; // convergence
        NodeMatrix[j + 8] = attr.size || 1;
        NodeMatrix[j + 9] = attr.fixed ? 1 : 0;
        j += PPN;
    });
    // Iterate through edges
    j = 0;
    graph.forEachEdge(function(edge, attr, source, target, sa, ta, u) {
        var sj = index[source];
        var tj = index[target];
        var weight = getEdgeWeight(edge, attr, source, target, sa, ta, u);
        // Incrementing mass to be a node's weighted degree
        NodeMatrix[sj + 6] += weight;
        NodeMatrix[tj + 6] += weight;
        // Populating byte array
        EdgeMatrix[j] = sj;
        EdgeMatrix[j + 1] = tj;
        EdgeMatrix[j + 2] = weight;
        j += PPE;
    });
    return {
        nodes: NodeMatrix,
        edges: EdgeMatrix
    };
};
/**
 * Function applying the layout back to the graph.
 *
 * @param {Graph}         graph         - Target graph.
 * @param {Float32Array}  NodeMatrix    - Node matrix.
 * @param {function|null} outputReducer - A node reducer.
 */ exports.assignLayoutChanges = function(graph, NodeMatrix, outputReducer) {
    var i = 0;
    graph.updateEachNodeAttributes(function(node, attr) {
        attr.x = NodeMatrix[i];
        attr.y = NodeMatrix[i + 1];
        i += PPN;
        return outputReducer ? outputReducer(node, attr) : attr;
    });
};
/**
 * Function reading the positions (only) from the graph, to write them in the matrix.
 *
 * @param {Graph}        graph      - Target graph.
 * @param {Float32Array} NodeMatrix - Node matrix.
 */ exports.readGraphPositions = function(graph, NodeMatrix) {
    var i = 0;
    graph.forEachNode(function(node, attr) {
        NodeMatrix[i] = attr.x;
        NodeMatrix[i + 1] = attr.y;
        i += PPN;
    });
};
/**
 * Function collecting the layout positions.
 *
 * @param  {Graph}         graph         - Target graph.
 * @param  {Float32Array}  NodeMatrix    - Node matrix.
 * @param  {function|null} outputReducer - A nodes reducer.
 * @return {object}                      - Map to node positions.
 */ exports.collectLayoutChanges = function(graph, NodeMatrix, outputReducer) {
    var nodes = graph.nodes(), positions = {};
    for(var i = 0, j = 0, l = NodeMatrix.length; i < l; i += PPN){
        if (outputReducer) {
            var newAttr = Object.assign({}, graph.getNodeAttributes(nodes[j]));
            newAttr.x = NodeMatrix[i];
            newAttr.y = NodeMatrix[i + 1];
            newAttr = outputReducer(nodes[j], newAttr);
            positions[nodes[j]] = {
                x: newAttr.x,
                y: newAttr.y
            };
        } else {
            positions[nodes[j]] = {
                x: NodeMatrix[i],
                y: NodeMatrix[i + 1]
            };
        }
        j++;
    }
    return positions;
};
/**
 * Function returning a web worker from the given function.
 *
 * @param  {function}  fn - Function for the worker.
 * @return {DOMString}
 */ exports.createWorker = function createWorker(fn) {
    var xURL = window.URL || window.webkitURL;
    var code = fn.toString();
    var objectUrl = xURL.createObjectURL(new Blob([
        '(' + code + ').call(this);'
    ], {
        type: 'text/javascript'
    }));
    var worker = new Worker(objectUrl);
    xURL.revokeObjectURL(objectUrl);
    return worker;
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/defaults.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology ForceAtlas2 Layout Default Settings
 * ===============================================
 */ module.exports = {
    linLogMode: false,
    outboundAttractionDistribution: false,
    adjustSizes: false,
    edgeWeightInfluence: 1,
    scalingRatio: 1,
    strongGravityMode: false,
    gravity: 1,
    slowDown: 1,
    barnesHutOptimize: false,
    barnesHutTheta: 0.5
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology ForceAtlas2 Layout
 * ==============================
 *
 * Library endpoint.
 */ var isGraph = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)");
var createEdgeWeightGetter = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/getters.js [app-client] (ecmascript)").createEdgeWeightGetter;
var iterate = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/iterate.js [app-client] (ecmascript)");
var helpers = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/helpers.js [app-client] (ecmascript)");
var DEFAULT_SETTINGS = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/defaults.js [app-client] (ecmascript)");
/**
 * Asbtract function used to run a certain number of iterations.
 *
 * @param  {boolean}       assign          - Whether to assign positions.
 * @param  {Graph}         graph           - Target graph.
 * @param  {object|number} params          - If number, params.iterations, else:
 * @param  {function}        getWeight     - Edge weight getter function.
 * @param  {number}          iterations    - Number of iterations.
 * @param  {function|null}   outputReducer - A node reducer
 * @param  {object}          [settings]    - Settings.
 * @return {object|undefined}
 */ function abstractSynchronousLayout(assign, graph, params) {
    if (!isGraph(graph)) throw new Error('graphology-layout-forceatlas2: the given graph is not a valid graphology instance.');
    if (typeof params === 'number') params = {
        iterations: params
    };
    var iterations = params.iterations;
    if (typeof iterations !== 'number') throw new Error('graphology-layout-forceatlas2: invalid number of iterations.');
    if (iterations <= 0) throw new Error('graphology-layout-forceatlas2: you should provide a positive number of iterations.');
    var getEdgeWeight = createEdgeWeightGetter('getEdgeWeight' in params ? params.getEdgeWeight : 'weight').fromEntry;
    var outputReducer = typeof params.outputReducer === 'function' ? params.outputReducer : null;
    // Validating settings
    var settings = helpers.assign({}, DEFAULT_SETTINGS, params.settings);
    var validationError = helpers.validateSettings(settings);
    if (validationError) throw new Error('graphology-layout-forceatlas2: ' + validationError.message);
    // Building matrices
    var matrices = helpers.graphToByteArrays(graph, getEdgeWeight);
    var i;
    // Iterating
    for(i = 0; i < iterations; i++)iterate(settings, matrices.nodes, matrices.edges);
    // Applying
    if (assign) {
        helpers.assignLayoutChanges(graph, matrices.nodes, outputReducer);
        return;
    }
    return helpers.collectLayoutChanges(graph, matrices.nodes);
}
/**
 * Function returning sane layout settings for the given graph.
 *
 * @param  {Graph|number} graph - Target graph or graph order.
 * @return {object}
 */ function inferSettings(graph) {
    var order = typeof graph === 'number' ? graph : graph.order;
    return {
        barnesHutOptimize: order > 2000,
        strongGravityMode: true,
        gravity: 0.05,
        scalingRatio: 10,
        slowDown: 1 + Math.log(order)
    };
}
/**
 * Exporting.
 */ var synchronousLayout = abstractSynchronousLayout.bind(null, false);
synchronousLayout.assign = abstractSynchronousLayout.bind(null, true);
synchronousLayout.inferSettings = inferSettings;
module.exports = synchronousLayout;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/webworker.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology ForceAtlas2 Layout Webworker
 * ========================================
 *
 * Web worker able to run the layout in a separate thread.
 */ module.exports = function worker() {
    var NODES, EDGES;
    var moduleShim = {};
    (function() {
        /* eslint no-constant-condition: 0 */ /**
 * Graphology ForceAtlas2 Iteration
 * =================================
 *
 * Function used to perform a single iteration of the algorithm.
 */ /**
 * Matrices properties accessors.
 */ var NODE_X = 0;
        var NODE_Y = 1;
        var NODE_DX = 2;
        var NODE_DY = 3;
        var NODE_OLD_DX = 4;
        var NODE_OLD_DY = 5;
        var NODE_MASS = 6;
        var NODE_CONVERGENCE = 7;
        var NODE_SIZE = 8;
        var NODE_FIXED = 9;
        var EDGE_SOURCE = 0;
        var EDGE_TARGET = 1;
        var EDGE_WEIGHT = 2;
        var REGION_NODE = 0;
        var REGION_CENTER_X = 1;
        var REGION_CENTER_Y = 2;
        var REGION_SIZE = 3;
        var REGION_NEXT_SIBLING = 4;
        var REGION_FIRST_CHILD = 5;
        var REGION_MASS = 6;
        var REGION_MASS_CENTER_X = 7;
        var REGION_MASS_CENTER_Y = 8;
        var SUBDIVISION_ATTEMPTS = 3;
        /**
 * Constants.
 */ var PPN = 10;
        var PPE = 3;
        var PPR = 9;
        var MAX_FORCE = 10;
        /**
 * Function used to perform a single interation of the algorithm.
 *
 * @param  {object}       options    - Layout options.
 * @param  {Float32Array} NodeMatrix - Node data.
 * @param  {Float32Array} EdgeMatrix - Edge data.
 * @return {object}                  - Some metadata.
 */ moduleShim.exports = function iterate(options, NodeMatrix, EdgeMatrix) {
            // Initializing variables
            var l, r, n, n1, n2, rn, e, w, g, s;
            var order = NodeMatrix.length, size = EdgeMatrix.length;
            var adjustSizes = options.adjustSizes;
            var thetaSquared = options.barnesHutTheta * options.barnesHutTheta;
            var outboundAttCompensation, coefficient, xDist, yDist, ewc, distance, factor;
            var RegionMatrix = [];
            // 1) Initializing layout data
            //-----------------------------
            // Resetting positions & computing max values
            for(n = 0; n < order; n += PPN){
                NodeMatrix[n + NODE_OLD_DX] = NodeMatrix[n + NODE_DX];
                NodeMatrix[n + NODE_OLD_DY] = NodeMatrix[n + NODE_DY];
                NodeMatrix[n + NODE_DX] = 0;
                NodeMatrix[n + NODE_DY] = 0;
            }
            // If outbound attraction distribution, compensate
            if (options.outboundAttractionDistribution) {
                outboundAttCompensation = 0;
                for(n = 0; n < order; n += PPN){
                    outboundAttCompensation += NodeMatrix[n + NODE_MASS];
                }
                outboundAttCompensation /= order / PPN;
            }
            // 1.bis) Barnes-Hut computation
            //------------------------------
            if (options.barnesHutOptimize) {
                // Setting up
                var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, q, q2, subdivisionAttempts;
                // Computing min and max values
                for(n = 0; n < order; n += PPN){
                    minX = Math.min(minX, NodeMatrix[n + NODE_X]);
                    maxX = Math.max(maxX, NodeMatrix[n + NODE_X]);
                    minY = Math.min(minY, NodeMatrix[n + NODE_Y]);
                    maxY = Math.max(maxY, NodeMatrix[n + NODE_Y]);
                }
                // squarify bounds, it's a quadtree
                var dx = maxX - minX, dy = maxY - minY;
                if (dx > dy) {
                    minY -= (dx - dy) / 2;
                    maxY = minY + dx;
                } else {
                    minX -= (dy - dx) / 2;
                    maxX = minX + dy;
                }
                // Build the Barnes Hut root region
                RegionMatrix[0 + REGION_NODE] = -1;
                RegionMatrix[0 + REGION_CENTER_X] = (minX + maxX) / 2;
                RegionMatrix[0 + REGION_CENTER_Y] = (minY + maxY) / 2;
                RegionMatrix[0 + REGION_SIZE] = Math.max(maxX - minX, maxY - minY);
                RegionMatrix[0 + REGION_NEXT_SIBLING] = -1;
                RegionMatrix[0 + REGION_FIRST_CHILD] = -1;
                RegionMatrix[0 + REGION_MASS] = 0;
                RegionMatrix[0 + REGION_MASS_CENTER_X] = 0;
                RegionMatrix[0 + REGION_MASS_CENTER_Y] = 0;
                // Add each node in the tree
                l = 1;
                for(n = 0; n < order; n += PPN){
                    // Current region, starting with root
                    r = 0;
                    subdivisionAttempts = SUBDIVISION_ATTEMPTS;
                    while(true){
                        // Are there sub-regions?
                        // We look at first child index
                        if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                            // There are sub-regions
                            // We just iterate to find a "leaf" of the tree
                            // that is an empty region or a region with a single node
                            // (see next case)
                            // Find the quadrant of n
                            if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                                if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                    // Top Left quarter
                                    q = RegionMatrix[r + REGION_FIRST_CHILD];
                                } else {
                                    // Bottom Left quarter
                                    q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                                }
                            } else {
                                if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                    // Top Right quarter
                                    q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                                } else {
                                    // Bottom Right quarter
                                    q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                                }
                            }
                            // Update center of mass and mass (we only do it for non-leave regions)
                            RegionMatrix[r + REGION_MASS_CENTER_X] = (RegionMatrix[r + REGION_MASS_CENTER_X] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_X] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
                            RegionMatrix[r + REGION_MASS_CENTER_Y] = (RegionMatrix[r + REGION_MASS_CENTER_Y] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_Y] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
                            RegionMatrix[r + REGION_MASS] += NodeMatrix[n + NODE_MASS];
                            // Iterate on the right quadrant
                            r = q;
                            continue;
                        } else {
                            // There are no sub-regions: we are in a "leaf"
                            // Is there a node in this leave?
                            if (RegionMatrix[r + REGION_NODE] < 0) {
                                // There is no node in region:
                                // we record node n and go on
                                RegionMatrix[r + REGION_NODE] = n;
                                break;
                            } else {
                                // There is a node in this region
                                // We will need to create sub-regions, stick the two
                                // nodes (the old one r[0] and the new one n) in two
                                // subregions. If they fall in the same quadrant,
                                // we will iterate.
                                // Create sub-regions
                                RegionMatrix[r + REGION_FIRST_CHILD] = l * PPR;
                                w = RegionMatrix[r + REGION_SIZE] / 2; // new size (half)
                                // NOTE: we use screen coordinates
                                // from Top Left to Bottom Right
                                // Top Left sub-region
                                g = RegionMatrix[r + REGION_FIRST_CHILD];
                                RegionMatrix[g + REGION_NODE] = -1;
                                RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
                                RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
                                RegionMatrix[g + REGION_SIZE] = w;
                                RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                                RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                                RegionMatrix[g + REGION_MASS] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                                // Bottom Left sub-region
                                g += PPR;
                                RegionMatrix[g + REGION_NODE] = -1;
                                RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
                                RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
                                RegionMatrix[g + REGION_SIZE] = w;
                                RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                                RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                                RegionMatrix[g + REGION_MASS] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                                // Top Right sub-region
                                g += PPR;
                                RegionMatrix[g + REGION_NODE] = -1;
                                RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
                                RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
                                RegionMatrix[g + REGION_SIZE] = w;
                                RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                                RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                                RegionMatrix[g + REGION_MASS] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                                // Bottom Right sub-region
                                g += PPR;
                                RegionMatrix[g + REGION_NODE] = -1;
                                RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
                                RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
                                RegionMatrix[g + REGION_SIZE] = w;
                                RegionMatrix[g + REGION_NEXT_SIBLING] = RegionMatrix[r + REGION_NEXT_SIBLING];
                                RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                                RegionMatrix[g + REGION_MASS] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                                RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                                l += 4;
                                // Now the goal is to find two different sub-regions
                                // for the two nodes: the one previously recorded (r[0])
                                // and the one we want to add (n)
                                // Find the quadrant of the old node
                                if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                                    if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                        // Top Left quarter
                                        q = RegionMatrix[r + REGION_FIRST_CHILD];
                                    } else {
                                        // Bottom Left quarter
                                        q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                                    }
                                } else {
                                    if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                        // Top Right quarter
                                        q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                                    } else {
                                        // Bottom Right quarter
                                        q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                                    }
                                }
                                // We remove r[0] from the region r, add its mass to r and record it in q
                                RegionMatrix[r + REGION_MASS] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_MASS];
                                RegionMatrix[r + REGION_MASS_CENTER_X] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X];
                                RegionMatrix[r + REGION_MASS_CENTER_Y] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y];
                                RegionMatrix[q + REGION_NODE] = RegionMatrix[r + REGION_NODE];
                                RegionMatrix[r + REGION_NODE] = -1;
                                // Find the quadrant of n
                                if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                                    if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                        // Top Left quarter
                                        q2 = RegionMatrix[r + REGION_FIRST_CHILD];
                                    } else {
                                        // Bottom Left quarter
                                        q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                                    }
                                } else {
                                    if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {
                                        // Top Right quarter
                                        q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                                    } else {
                                        // Bottom Right quarter
                                        q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                                    }
                                }
                                if (q === q2) {
                                    // If both nodes are in the same quadrant,
                                    // we have to try it again on this quadrant
                                    if (subdivisionAttempts--) {
                                        r = q;
                                        continue; // while
                                    } else {
                                        // we are out of precision here, and we cannot subdivide anymore
                                        // but we have to break the loop anyway
                                        subdivisionAttempts = SUBDIVISION_ATTEMPTS;
                                        break; // while
                                    }
                                }
                                // If both quadrants are different, we record n
                                // in its quadrant
                                RegionMatrix[q2 + REGION_NODE] = n;
                                break;
                            }
                        }
                    }
                }
            }
            // 2) Repulsion
            //--------------
            // NOTES: adjustSizes = antiCollision & scalingRatio = coefficient
            if (options.barnesHutOptimize) {
                coefficient = options.scalingRatio;
                // Applying repulsion through regions
                for(n = 0; n < order; n += PPN){
                    // Computing leaf quad nodes iteration
                    r = 0; // Starting with root region
                    while(true){
                        if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                            // The region has sub-regions
                            // We run the Barnes Hut test to see if we are at the right distance
                            distance = Math.pow(NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X], 2) + Math.pow(NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y], 2);
                            s = RegionMatrix[r + REGION_SIZE];
                            if (4 * s * s / distance < thetaSquared) {
                                // We treat the region as a single body, and we repulse
                                xDist = NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X];
                                yDist = NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y];
                                if (adjustSizes === true) {
                                    //-- Linear Anti-collision Repulsion
                                    if (distance > 0) {
                                        factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                                        NodeMatrix[n + NODE_DX] += xDist * factor;
                                        NodeMatrix[n + NODE_DY] += yDist * factor;
                                    } else if (distance < 0) {
                                        factor = -coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / Math.sqrt(distance);
                                        NodeMatrix[n + NODE_DX] += xDist * factor;
                                        NodeMatrix[n + NODE_DY] += yDist * factor;
                                    }
                                } else {
                                    //-- Linear Repulsion
                                    if (distance > 0) {
                                        factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                                        NodeMatrix[n + NODE_DX] += xDist * factor;
                                        NodeMatrix[n + NODE_DY] += yDist * factor;
                                    }
                                }
                                // When this is done, we iterate. We have to look at the next sibling.
                                r = RegionMatrix[r + REGION_NEXT_SIBLING];
                                if (r < 0) break; // No next sibling: we have finished the tree
                                continue;
                            } else {
                                // The region is too close and we have to look at sub-regions
                                r = RegionMatrix[r + REGION_FIRST_CHILD];
                                continue;
                            }
                        } else {
                            // The region has no sub-region
                            // If there is a node r[0] and it is not n, then repulse
                            rn = RegionMatrix[r + REGION_NODE];
                            if (rn >= 0 && rn !== n) {
                                xDist = NodeMatrix[n + NODE_X] - NodeMatrix[rn + NODE_X];
                                yDist = NodeMatrix[n + NODE_Y] - NodeMatrix[rn + NODE_Y];
                                distance = xDist * xDist + yDist * yDist;
                                if (adjustSizes === true) {
                                    //-- Linear Anti-collision Repulsion
                                    if (distance > 0) {
                                        factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                                        NodeMatrix[n + NODE_DX] += xDist * factor;
                                        NodeMatrix[n + NODE_DY] += yDist * factor;
                                    } else if (distance < 0) {
                                        factor = -coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / Math.sqrt(distance);
                                        NodeMatrix[n + NODE_DX] += xDist * factor;
                                        NodeMatrix[n + NODE_DY] += yDist * factor;
                                    }
                                } else {
                                    //-- Linear Repulsion
                                    if (distance > 0) {
                                        factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                                        NodeMatrix[n + NODE_DX] += xDist * factor;
                                        NodeMatrix[n + NODE_DY] += yDist * factor;
                                    }
                                }
                            }
                            // When this is done, we iterate. We have to look at the next sibling.
                            r = RegionMatrix[r + REGION_NEXT_SIBLING];
                            if (r < 0) break; // No next sibling: we have finished the tree
                            continue;
                        }
                    }
                }
            } else {
                coefficient = options.scalingRatio;
                // Square iteration
                for(n1 = 0; n1 < order; n1 += PPN){
                    for(n2 = 0; n2 < n1; n2 += PPN){
                        // Common to both methods
                        xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
                        yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
                        if (adjustSizes === true) {
                            //-- Anticollision Linear Repulsion
                            distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
                            if (distance > 0) {
                                factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
                                // Updating nodes' dx and dy
                                NodeMatrix[n1 + NODE_DX] += xDist * factor;
                                NodeMatrix[n1 + NODE_DY] += yDist * factor;
                                NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                                NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                            } else if (distance < 0) {
                                factor = 100 * coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS];
                                // Updating nodes' dx and dy
                                NodeMatrix[n1 + NODE_DX] += xDist * factor;
                                NodeMatrix[n1 + NODE_DY] += yDist * factor;
                                NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                                NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                            }
                        } else {
                            //-- Linear Repulsion
                            distance = Math.sqrt(xDist * xDist + yDist * yDist);
                            if (distance > 0) {
                                factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
                                // Updating nodes' dx and dy
                                NodeMatrix[n1 + NODE_DX] += xDist * factor;
                                NodeMatrix[n1 + NODE_DY] += yDist * factor;
                                NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                                NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                            }
                        }
                    }
                }
            }
            // 3) Gravity
            //------------
            g = options.gravity / options.scalingRatio;
            coefficient = options.scalingRatio;
            for(n = 0; n < order; n += PPN){
                factor = 0;
                // Common to both methods
                xDist = NodeMatrix[n + NODE_X];
                yDist = NodeMatrix[n + NODE_Y];
                distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
                if (options.strongGravityMode) {
                    //-- Strong gravity
                    if (distance > 0) factor = coefficient * NodeMatrix[n + NODE_MASS] * g;
                } else {
                    //-- Linear Anti-collision Repulsion n
                    if (distance > 0) factor = coefficient * NodeMatrix[n + NODE_MASS] * g / distance;
                }
                // Updating node's dx and dy
                NodeMatrix[n + NODE_DX] -= xDist * factor;
                NodeMatrix[n + NODE_DY] -= yDist * factor;
            }
            // 4) Attraction
            //---------------
            coefficient = 1 * (options.outboundAttractionDistribution ? outboundAttCompensation : 1);
            // TODO: simplify distance
            // TODO: coefficient is always used as -c --> optimize?
            for(e = 0; e < size; e += PPE){
                n1 = EdgeMatrix[e + EDGE_SOURCE];
                n2 = EdgeMatrix[e + EDGE_TARGET];
                w = EdgeMatrix[e + EDGE_WEIGHT];
                // Edge weight influence
                ewc = Math.pow(w, options.edgeWeightInfluence);
                // Common measures
                xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
                yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
                // Applying attraction to nodes
                if (adjustSizes === true) {
                    distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
                    if (options.linLogMode) {
                        if (options.outboundAttractionDistribution) {
                            //-- LinLog Degree Distributed Anti-collision Attraction
                            if (distance > 0) {
                                factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
                            }
                        } else {
                            //-- LinLog Anti-collision Attraction
                            if (distance > 0) {
                                factor = -coefficient * ewc * Math.log(1 + distance) / distance;
                            }
                        }
                    } else {
                        if (options.outboundAttractionDistribution) {
                            //-- Linear Degree Distributed Anti-collision Attraction
                            if (distance > 0) {
                                factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
                            }
                        } else {
                            //-- Linear Anti-collision Attraction
                            if (distance > 0) {
                                factor = -coefficient * ewc;
                            }
                        }
                    }
                } else {
                    distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
                    if (options.linLogMode) {
                        if (options.outboundAttractionDistribution) {
                            //-- LinLog Degree Distributed Attraction
                            if (distance > 0) {
                                factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
                            }
                        } else {
                            //-- LinLog Attraction
                            if (distance > 0) factor = -coefficient * ewc * Math.log(1 + distance) / distance;
                        }
                    } else {
                        if (options.outboundAttractionDistribution) {
                            //-- Linear Attraction Mass Distributed
                            // NOTE: Distance is set to 1 to override next condition
                            distance = 1;
                            factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
                        } else {
                            //-- Linear Attraction
                            // NOTE: Distance is set to 1 to override next condition
                            distance = 1;
                            factor = -coefficient * ewc;
                        }
                    }
                }
                // Updating nodes' dx and dy
                // TODO: if condition or factor = 1?
                if (distance > 0) {
                    // Updating nodes' dx and dy
                    NodeMatrix[n1 + NODE_DX] += xDist * factor;
                    NodeMatrix[n1 + NODE_DY] += yDist * factor;
                    NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                    NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                }
            }
            // 5) Apply Forces
            //-----------------
            var force, swinging, traction, nodespeed, newX, newY;
            // MATH: sqrt and square distances
            if (adjustSizes === true) {
                for(n = 0; n < order; n += PPN){
                    if (NodeMatrix[n + NODE_FIXED] !== 1) {
                        force = Math.sqrt(Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2));
                        if (force > MAX_FORCE) {
                            NodeMatrix[n + NODE_DX] = NodeMatrix[n + NODE_DX] * MAX_FORCE / force;
                            NodeMatrix[n + NODE_DY] = NodeMatrix[n + NODE_DY] * MAX_FORCE / force;
                        }
                        swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
                        traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
                        nodespeed = 0.1 * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
                        // Updating node's positon
                        newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
                        NodeMatrix[n + NODE_X] = newX;
                        newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
                        NodeMatrix[n + NODE_Y] = newY;
                    }
                }
            } else {
                for(n = 0; n < order; n += PPN){
                    if (NodeMatrix[n + NODE_FIXED] !== 1) {
                        swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
                        traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
                        nodespeed = NodeMatrix[n + NODE_CONVERGENCE] * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
                        // Updating node convergence
                        NodeMatrix[n + NODE_CONVERGENCE] = Math.min(1, Math.sqrt(nodespeed * (Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2)) / (1 + Math.sqrt(swinging))));
                        // Updating node's positon
                        newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
                        NodeMatrix[n + NODE_X] = newX;
                        newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
                        NodeMatrix[n + NODE_Y] = newY;
                    }
                }
            }
            // We return the information about the layout (no need to return the matrices)
            return {};
        };
    })();
    var iterate = moduleShim.exports;
    self.addEventListener('message', function(event) {
        var data = event.data;
        NODES = new Float32Array(data.nodes);
        if (data.edges) EDGES = new Float32Array(data.edges);
        // Running the iteration
        iterate(data.settings, NODES, EDGES);
        // Sending result to supervisor
        self.postMessage({
            nodes: NODES.buffer
        }, [
            NODES.buffer
        ]);
    });
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/worker.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology ForceAtlas2 Layout Supervisor
 * =========================================
 *
 * Supervisor class able to spawn a web worker to run the FA2 layout in a
 * separate thread not to block UI with heavy synchronous computations.
 */ var workerFunction = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/webworker.js [app-client] (ecmascript)");
var isGraph = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)");
var createEdgeWeightGetter = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/getters.js [app-client] (ecmascript)").createEdgeWeightGetter;
var helpers = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/helpers.js [app-client] (ecmascript)");
var DEFAULT_SETTINGS = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/defaults.js [app-client] (ecmascript)");
/**
 * Class representing a FA2 layout run by a webworker.
 *
 * @constructor
 * @param  {Graph}         graph        - Target graph.
 * @param  {object|number} params       - Parameters:
 * @param  {object}          [settings] - Settings.
 */ function FA2LayoutSupervisor(graph, params) {
    params = params || {};
    // Validation
    if (!isGraph(graph)) throw new Error('graphology-layout-forceatlas2/worker: the given graph is not a valid graphology instance.');
    var getEdgeWeight = createEdgeWeightGetter('getEdgeWeight' in params ? params.getEdgeWeight : 'weight').fromEntry;
    // Validating settings
    var settings = helpers.assign({}, DEFAULT_SETTINGS, params.settings);
    var validationError = helpers.validateSettings(settings);
    if (validationError) throw new Error('graphology-layout-forceatlas2/worker: ' + validationError.message);
    // Properties
    this.worker = null;
    this.graph = graph;
    this.settings = settings;
    this.getEdgeWeight = getEdgeWeight;
    this.matrices = null;
    this.running = false;
    this.killed = false;
    this.outputReducer = typeof params.outputReducer === 'function' ? params.outputReducer : null;
    // Binding listeners
    this.handleMessage = this.handleMessage.bind(this);
    var respawnFrame = undefined;
    var self = this;
    this.handleGraphUpdate = function() {
        if (self.worker) self.worker.terminate();
        if (respawnFrame) clearTimeout(respawnFrame);
        respawnFrame = setTimeout(function() {
            respawnFrame = undefined;
            self.spawnWorker();
        }, 0);
    };
    graph.on('nodeAdded', this.handleGraphUpdate);
    graph.on('edgeAdded', this.handleGraphUpdate);
    graph.on('nodeDropped', this.handleGraphUpdate);
    graph.on('edgeDropped', this.handleGraphUpdate);
    // Spawning worker
    this.spawnWorker();
}
FA2LayoutSupervisor.prototype.isRunning = function() {
    return this.running;
};
/**
 * Internal method used to spawn the web worker.
 */ FA2LayoutSupervisor.prototype.spawnWorker = function() {
    if (this.worker) this.worker.terminate();
    this.worker = helpers.createWorker(workerFunction);
    this.worker.addEventListener('message', this.handleMessage);
    if (this.running) {
        this.running = false;
        this.start();
    }
};
/**
 * Internal method used to handle the worker's messages.
 *
 * @param {object} event - Event to handle.
 */ FA2LayoutSupervisor.prototype.handleMessage = function(event) {
    if (!this.running) return;
    var matrix = new Float32Array(event.data.nodes);
    helpers.assignLayoutChanges(this.graph, matrix, this.outputReducer);
    if (this.outputReducer) helpers.readGraphPositions(this.graph, matrix);
    this.matrices.nodes = matrix;
    // Looping
    this.askForIterations();
};
/**
 * Internal method used to ask for iterations from the worker.
 *
 * @param  {boolean} withEdges - Should we send edges along?
 * @return {FA2LayoutSupervisor}
 */ FA2LayoutSupervisor.prototype.askForIterations = function(withEdges) {
    var matrices = this.matrices;
    var payload = {
        settings: this.settings,
        nodes: matrices.nodes.buffer
    };
    var buffers = [
        matrices.nodes.buffer
    ];
    if (withEdges) {
        payload.edges = matrices.edges.buffer;
        buffers.push(matrices.edges.buffer);
    }
    this.worker.postMessage(payload, buffers);
    return this;
};
/**
 * Method used to start the layout.
 *
 * @return {FA2LayoutSupervisor}
 */ FA2LayoutSupervisor.prototype.start = function() {
    if (this.killed) throw new Error('graphology-layout-forceatlas2/worker.start: layout was killed.');
    if (this.running) return this;
    // Building matrices
    this.matrices = helpers.graphToByteArrays(this.graph, this.getEdgeWeight);
    this.running = true;
    this.askForIterations(true);
    return this;
};
/**
 * Method used to stop the layout.
 *
 * @return {FA2LayoutSupervisor}
 */ FA2LayoutSupervisor.prototype.stop = function() {
    this.running = false;
    return this;
};
/**
 * Method used to kill the layout.
 *
 * @return {FA2LayoutSupervisor}
 */ FA2LayoutSupervisor.prototype.kill = function() {
    if (this.killed) return this;
    this.running = false;
    this.killed = true;
    // Clearing memory
    this.matrices = null;
    // Terminating worker
    this.worker.terminate();
    // Unbinding listeners
    this.graph.removeListener('nodeAdded', this.handleGraphUpdate);
    this.graph.removeListener('edgeAdded', this.handleGraphUpdate);
    this.graph.removeListener('nodeDropped', this.handleGraphUpdate);
    this.graph.removeListener('edgeDropped', this.handleGraphUpdate);
};
/**
 * Exporting.
 */ module.exports = FA2LayoutSupervisor;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-forceatlas2@5.0.4_graphology-layout-forceatlas2@0.10.1_graphology-t_783204fa307db7e6f91ce85656ff33eb/node_modules/@react-sigma/layout-forceatlas2/lib/react-sigma_layout-forceatlas2.esm.min.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutForceAtlas2Control",
    ()=>c,
    "useLayoutForceAtlas2",
    ()=>s,
    "useWorkerLayoutForceAtlas2",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-core@5.0.4_graphology@0.26.0_graphology-types@0.24.8__react@19.1.0__075301aea585382297676e5b58251850/node_modules/@react-sigma/layout-core/lib/react-sigma_layout-core.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$forceatlas2$40$0$2e$10$2e$1_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$forceatlas2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$forceatlas2$40$0$2e$10$2e$1_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$forceatlas2$2f$worker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-forceatlas2@0.10.1_graphology-types@0.24.8/node_modules/graphology-layout-forceatlas2/worker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
function s() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        iterations: 100
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutFactory"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$forceatlas2$40$0$2e$10$2e$1_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$forceatlas2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], o);
}
function n() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutFactory"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$forceatlas2$40$0$2e$10$2e$1_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$forceatlas2$2f$worker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], t);
}
const c = (param)=>{
    let { id: t, className: o, style: a, settings: e = {}, autoRunFor: s, children: c, labels: i } = param;
    const u = {
        id: t,
        className: o,
        style: a,
        autoRunFor: s,
        labels: i,
        layout: n(e)
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkerLayoutControl"], Object.assign({}, u), c);
};
;
 //# sourceMappingURL=react-sigma_layout-forceatlas2.esm.min.js.map
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/iterate.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Noverlap Iteration
 * ==============================
 *
 * Function used to perform a single iteration of the algorithm.
 */ /**
 * Matrices properties accessors.
 */ var NODE_X = 0, NODE_Y = 1, NODE_SIZE = 2;
/**
 * Constants.
 */ var PPN = 3;
/**
 * Helpers.
 */ function hashPair(a, b) {
    return a + '§' + b;
}
function jitter() {
    return 0.01 * (0.5 - Math.random());
}
/**
 * Function used to perform a single interation of the algorithm.
 *
 * @param  {object}       options    - Layout options.
 * @param  {Float32Array} NodeMatrix - Node data.
 * @return {object}                  - Some metadata.
 */ module.exports = function iterate(options, NodeMatrix) {
    // Caching options
    var margin = options.margin;
    var ratio = options.ratio;
    var expansion = options.expansion;
    var gridSize = options.gridSize; // TODO: decrease grid size when few nodes?
    var speed = options.speed;
    // Generic iteration variables
    var i, j, x, y, l, size;
    var converged = true;
    var length = NodeMatrix.length;
    var order = length / PPN | 0;
    var deltaX = new Float32Array(order);
    var deltaY = new Float32Array(order);
    // Finding the extents of our space
    var xMin = Infinity;
    var yMin = Infinity;
    var xMax = -Infinity;
    var yMax = -Infinity;
    for(i = 0; i < length; i += PPN){
        x = NodeMatrix[i + NODE_X];
        y = NodeMatrix[i + NODE_Y];
        size = NodeMatrix[i + NODE_SIZE] * ratio + margin;
        xMin = Math.min(xMin, x - size);
        xMax = Math.max(xMax, x + size);
        yMin = Math.min(yMin, y - size);
        yMax = Math.max(yMax, y + size);
    }
    var width = xMax - xMin;
    var height = yMax - yMin;
    var xCenter = (xMin + xMax) / 2;
    var yCenter = (yMin + yMax) / 2;
    xMin = xCenter - expansion * width / 2;
    xMax = xCenter + expansion * width / 2;
    yMin = yCenter - expansion * height / 2;
    yMax = yCenter + expansion * height / 2;
    // Building grid
    var grid = new Array(gridSize * gridSize), gridLength = grid.length, c;
    for(c = 0; c < gridLength; c++)grid[c] = [];
    var nxMin, nxMax, nyMin, nyMax;
    var xMinBox, xMaxBox, yMinBox, yMaxBox;
    var col, row;
    for(i = 0; i < length; i += PPN){
        x = NodeMatrix[i + NODE_X];
        y = NodeMatrix[i + NODE_Y];
        size = NodeMatrix[i + NODE_SIZE] * ratio + margin;
        nxMin = x - size;
        nxMax = x + size;
        nyMin = y - size;
        nyMax = y + size;
        xMinBox = Math.floor(gridSize * (nxMin - xMin) / (xMax - xMin));
        xMaxBox = Math.floor(gridSize * (nxMax - xMin) / (xMax - xMin));
        yMinBox = Math.floor(gridSize * (nyMin - yMin) / (yMax - yMin));
        yMaxBox = Math.floor(gridSize * (nyMax - yMin) / (yMax - yMin));
        for(col = xMinBox; col <= xMaxBox; col++){
            for(row = yMinBox; row <= yMaxBox; row++){
                grid[col * gridSize + row].push(i);
            }
        }
    }
    // Computing collisions
    var cell;
    var collisions = new Set();
    var n1, n2, x1, x2, y1, y2, s1, s2, h;
    var xDist, yDist, dist, collision;
    for(c = 0; c < gridLength; c++){
        cell = grid[c];
        for(i = 0, l = cell.length; i < l; i++){
            n1 = cell[i];
            x1 = NodeMatrix[n1 + NODE_X];
            y1 = NodeMatrix[n1 + NODE_Y];
            s1 = NodeMatrix[n1 + NODE_SIZE];
            for(j = i + 1; j < l; j++){
                n2 = cell[j];
                h = hashPair(n1, n2);
                if (gridLength > 1 && collisions.has(h)) continue;
                if (gridLength > 1) collisions.add(h);
                x2 = NodeMatrix[n2 + NODE_X];
                y2 = NodeMatrix[n2 + NODE_Y];
                s2 = NodeMatrix[n2 + NODE_SIZE];
                xDist = x2 - x1;
                yDist = y2 - y1;
                dist = Math.sqrt(xDist * xDist + yDist * yDist);
                collision = dist < s1 * ratio + margin + (s2 * ratio + margin);
                if (collision) {
                    converged = false;
                    n2 = n2 / PPN | 0;
                    if (dist > 0) {
                        deltaX[n2] += xDist / dist * (1 + s1);
                        deltaY[n2] += yDist / dist * (1 + s1);
                    } else {
                        // Nodes are on the exact same spot, we need to jitter a bit
                        deltaX[n2] += width * jitter();
                        deltaY[n2] += height * jitter();
                    }
                }
            }
        }
    }
    for(i = 0, j = 0; i < length; i += PPN, j++){
        NodeMatrix[i + NODE_X] += deltaX[j] * 0.1 * speed;
        NodeMatrix[i + NODE_Y] += deltaY[j] * 0.1 * speed;
    }
    return {
        converged: converged
    };
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Noverlap Helpers
 * ============================
 *
 * Miscellaneous helper functions.
 */ /**
 * Constants.
 */ var PPN = 3;
/**
 * Function used to validate the given settings.
 *
 * @param  {object}      settings - Settings to validate.
 * @return {object|null}
 */ exports.validateSettings = function(settings) {
    if ('gridSize' in settings && typeof settings.gridSize !== 'number' || settings.gridSize <= 0) return {
        message: 'the `gridSize` setting should be a positive number.'
    };
    if ('margin' in settings && typeof settings.margin !== 'number' || settings.margin < 0) return {
        message: 'the `margin` setting should be 0 or a positive number.'
    };
    if ('expansion' in settings && typeof settings.expansion !== 'number' || settings.expansion <= 0) return {
        message: 'the `expansion` setting should be a positive number.'
    };
    if ('ratio' in settings && typeof settings.ratio !== 'number' || settings.ratio <= 0) return {
        message: 'the `ratio` setting should be a positive number.'
    };
    if ('speed' in settings && typeof settings.speed !== 'number' || settings.speed <= 0) return {
        message: 'the `speed` setting should be a positive number.'
    };
    return null;
};
/**
 * Function generating a flat matrix for the given graph's nodes.
 *
 * @param  {Graph}        graph   - Target graph.
 * @param  {function}     reducer - Node reducer function.
 * @return {Float32Array}         - The node matrix.
 */ exports.graphToByteArray = function(graph, reducer) {
    var order = graph.order;
    var matrix = new Float32Array(order * PPN);
    var j = 0;
    graph.forEachNode(function(node, attr) {
        if (typeof reducer === 'function') attr = reducer(node, attr);
        matrix[j] = attr.x;
        matrix[j + 1] = attr.y;
        matrix[j + 2] = attr.size || 1;
        j += PPN;
    });
    return matrix;
};
/**
 * Function applying the layout back to the graph.
 *
 * @param {Graph}        graph      - Target graph.
 * @param {Float32Array} NodeMatrix - Node matrix.
 * @param {function}     reducer    - Reducing function.
 */ exports.assignLayoutChanges = function(graph, NodeMatrix, reducer) {
    var i = 0;
    graph.forEachNode(function(node) {
        var pos = {
            x: NodeMatrix[i],
            y: NodeMatrix[i + 1]
        };
        if (typeof reducer === 'function') pos = reducer(node, pos);
        graph.mergeNodeAttributes(node, pos);
        i += PPN;
    });
};
/**
 * Function collecting the layout positions.
 *
 * @param  {Graph}        graph      - Target graph.
 * @param  {Float32Array} NodeMatrix - Node matrix.
 * @param  {function}     reducer    - Reducing function.
 * @return {object}                  - Map to node positions.
 */ exports.collectLayoutChanges = function(graph, NodeMatrix, reducer) {
    var positions = {};
    var i = 0;
    graph.forEachNode(function(node) {
        var pos = {
            x: NodeMatrix[i],
            y: NodeMatrix[i + 1]
        };
        if (typeof reducer === 'function') pos = reducer(node, pos);
        positions[node] = pos;
        i += PPN;
    });
    return positions;
};
/**
 * Function returning a web worker from the given function.
 *
 * @param  {function}  fn - Function for the worker.
 * @return {DOMString}
 */ exports.createWorker = function createWorker(fn) {
    var xURL = window.URL || window.webkitURL;
    var code = fn.toString();
    var objectUrl = xURL.createObjectURL(new Blob([
        '(' + code + ').call(this);'
    ], {
        type: 'text/javascript'
    }));
    var worker = new Worker(objectUrl);
    xURL.revokeObjectURL(objectUrl);
    return worker;
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/defaults.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Noverlap Layout Default Settings
 * ============================================
 */ module.exports = {
    gridSize: 20,
    margin: 5,
    expansion: 1.1,
    ratio: 1.0,
    speed: 3
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Noverlap Layout
 * ===========================
 *
 * Library endpoint.
 */ var isGraph = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)");
var iterate = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/iterate.js [app-client] (ecmascript)");
var helpers = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/helpers.js [app-client] (ecmascript)");
var DEFAULT_SETTINGS = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/defaults.js [app-client] (ecmascript)");
var DEFAULT_MAX_ITERATIONS = 500;
/**
 * Asbtract function used to run a certain number of iterations.
 *
 * @param  {boolean}       assign       - Whether to assign positions.
 * @param  {Graph}         graph        - Target graph.
 * @param  {object|number} params       - If number, params.maxIterations, else:
 * @param  {number}          maxIterations - Maximum number of iterations.
 * @param  {object}          [settings] - Settings.
 * @return {object|undefined}
 */ function abstractSynchronousLayout(assign, graph, params) {
    if (!isGraph(graph)) throw new Error('graphology-layout-noverlap: the given graph is not a valid graphology instance.');
    if (typeof params === 'number') params = {
        maxIterations: params
    };
    else params = params || {};
    var maxIterations = params.maxIterations || DEFAULT_MAX_ITERATIONS;
    if (typeof maxIterations !== 'number' || maxIterations <= 0) throw new Error('graphology-layout-force: you should provide a positive number of maximum iterations.');
    // Validating settings
    var settings = Object.assign({}, DEFAULT_SETTINGS, params.settings), validationError = helpers.validateSettings(settings);
    if (validationError) throw new Error('graphology-layout-noverlap: ' + validationError.message);
    // Building matrices
    var matrix = helpers.graphToByteArray(graph, params.inputReducer), converged = false, i;
    // Iterating
    for(i = 0; i < maxIterations && !converged; i++)converged = iterate(settings, matrix).converged;
    // Applying
    if (assign) {
        helpers.assignLayoutChanges(graph, matrix, params.outputReducer);
        return;
    }
    return helpers.collectLayoutChanges(graph, matrix, params.outputReducer);
}
/**
 * Exporting.
 */ var synchronousLayout = abstractSynchronousLayout.bind(null, false);
synchronousLayout.assign = abstractSynchronousLayout.bind(null, true);
module.exports = synchronousLayout;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/webworker.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Noverlap Layout Webworker
 * =====================================
 *
 * Web worker able to run the layout in a separate thread.
 */ module.exports = function worker() {
    var NODES;
    var moduleShim = {};
    (function() {
        /**
 * Graphology Noverlap Iteration
 * ==============================
 *
 * Function used to perform a single iteration of the algorithm.
 */ /**
 * Matrices properties accessors.
 */ var NODE_X = 0, NODE_Y = 1, NODE_SIZE = 2;
        /**
 * Constants.
 */ var PPN = 3;
        /**
 * Helpers.
 */ function hashPair(a, b) {
            return a + '§' + b;
        }
        function jitter() {
            return 0.01 * (0.5 - Math.random());
        }
        /**
 * Function used to perform a single interation of the algorithm.
 *
 * @param  {object}       options    - Layout options.
 * @param  {Float32Array} NodeMatrix - Node data.
 * @return {object}                  - Some metadata.
 */ moduleShim.exports = function iterate(options, NodeMatrix) {
            // Caching options
            var margin = options.margin;
            var ratio = options.ratio;
            var expansion = options.expansion;
            var gridSize = options.gridSize; // TODO: decrease grid size when few nodes?
            var speed = options.speed;
            // Generic iteration variables
            var i, j, x, y, l, size;
            var converged = true;
            var length = NodeMatrix.length;
            var order = length / PPN | 0;
            var deltaX = new Float32Array(order);
            var deltaY = new Float32Array(order);
            // Finding the extents of our space
            var xMin = Infinity;
            var yMin = Infinity;
            var xMax = -Infinity;
            var yMax = -Infinity;
            for(i = 0; i < length; i += PPN){
                x = NodeMatrix[i + NODE_X];
                y = NodeMatrix[i + NODE_Y];
                size = NodeMatrix[i + NODE_SIZE] * ratio + margin;
                xMin = Math.min(xMin, x - size);
                xMax = Math.max(xMax, x + size);
                yMin = Math.min(yMin, y - size);
                yMax = Math.max(yMax, y + size);
            }
            var width = xMax - xMin;
            var height = yMax - yMin;
            var xCenter = (xMin + xMax) / 2;
            var yCenter = (yMin + yMax) / 2;
            xMin = xCenter - expansion * width / 2;
            xMax = xCenter + expansion * width / 2;
            yMin = yCenter - expansion * height / 2;
            yMax = yCenter + expansion * height / 2;
            // Building grid
            var grid = new Array(gridSize * gridSize), gridLength = grid.length, c;
            for(c = 0; c < gridLength; c++)grid[c] = [];
            var nxMin, nxMax, nyMin, nyMax;
            var xMinBox, xMaxBox, yMinBox, yMaxBox;
            var col, row;
            for(i = 0; i < length; i += PPN){
                x = NodeMatrix[i + NODE_X];
                y = NodeMatrix[i + NODE_Y];
                size = NodeMatrix[i + NODE_SIZE] * ratio + margin;
                nxMin = x - size;
                nxMax = x + size;
                nyMin = y - size;
                nyMax = y + size;
                xMinBox = Math.floor(gridSize * (nxMin - xMin) / (xMax - xMin));
                xMaxBox = Math.floor(gridSize * (nxMax - xMin) / (xMax - xMin));
                yMinBox = Math.floor(gridSize * (nyMin - yMin) / (yMax - yMin));
                yMaxBox = Math.floor(gridSize * (nyMax - yMin) / (yMax - yMin));
                for(col = xMinBox; col <= xMaxBox; col++){
                    for(row = yMinBox; row <= yMaxBox; row++){
                        grid[col * gridSize + row].push(i);
                    }
                }
            }
            // Computing collisions
            var cell;
            var collisions = new Set();
            var n1, n2, x1, x2, y1, y2, s1, s2, h;
            var xDist, yDist, dist, collision;
            for(c = 0; c < gridLength; c++){
                cell = grid[c];
                for(i = 0, l = cell.length; i < l; i++){
                    n1 = cell[i];
                    x1 = NodeMatrix[n1 + NODE_X];
                    y1 = NodeMatrix[n1 + NODE_Y];
                    s1 = NodeMatrix[n1 + NODE_SIZE];
                    for(j = i + 1; j < l; j++){
                        n2 = cell[j];
                        h = hashPair(n1, n2);
                        if (gridLength > 1 && collisions.has(h)) continue;
                        if (gridLength > 1) collisions.add(h);
                        x2 = NodeMatrix[n2 + NODE_X];
                        y2 = NodeMatrix[n2 + NODE_Y];
                        s2 = NodeMatrix[n2 + NODE_SIZE];
                        xDist = x2 - x1;
                        yDist = y2 - y1;
                        dist = Math.sqrt(xDist * xDist + yDist * yDist);
                        collision = dist < s1 * ratio + margin + (s2 * ratio + margin);
                        if (collision) {
                            converged = false;
                            n2 = n2 / PPN | 0;
                            if (dist > 0) {
                                deltaX[n2] += xDist / dist * (1 + s1);
                                deltaY[n2] += yDist / dist * (1 + s1);
                            } else {
                                // Nodes are on the exact same spot, we need to jitter a bit
                                deltaX[n2] += width * jitter();
                                deltaY[n2] += height * jitter();
                            }
                        }
                    }
                }
            }
            for(i = 0, j = 0; i < length; i += PPN, j++){
                NodeMatrix[i + NODE_X] += deltaX[j] * 0.1 * speed;
                NodeMatrix[i + NODE_Y] += deltaY[j] * 0.1 * speed;
            }
            return {
                converged: converged
            };
        };
    })();
    var iterate = moduleShim.exports;
    self.addEventListener('message', function(event) {
        var data = event.data;
        NODES = new Float32Array(data.nodes);
        // Running the iteration
        var result = iterate(data.settings, NODES);
        // Sending result to supervisor
        self.postMessage({
            result: result,
            nodes: NODES.buffer
        }, [
            NODES.buffer
        ]);
    });
};
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/worker.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Graphology Noverlap Layout Supervisor
 * ======================================
 *
 * Supervisor class able to spawn a web worker to run the Noverlap layout in a
 * separate thread not to block UI with heavy synchronous computations.
 */ var workerFunction = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/webworker.js [app-client] (ecmascript)"), isGraph = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.8/node_modules/graphology-utils/is-graph.js [app-client] (ecmascript)"), helpers = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/helpers.js [app-client] (ecmascript)");
var DEFAULT_SETTINGS = __turbopack_context__.r("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/defaults.js [app-client] (ecmascript)");
/**
 * Class representing a Noverlap layout run by a webworker.
 *
 * @constructor
 * @param  {Graph}         graph        - Target graph.
 * @param  {object|number} params       - Parameters:
 * @param  {object}          [settings] - Settings.
 */ function NoverlapLayoutSupervisor(graph, params) {
    params = params || {};
    // Validation
    if (!isGraph(graph)) throw new Error('graphology-layout-noverlap/worker: the given graph is not a valid graphology instance.');
    // Validating settings
    var settings = Object.assign({}, DEFAULT_SETTINGS, params.settings), validationError = helpers.validateSettings(settings);
    if (validationError) throw new Error('graphology-layout-noverlap/worker: ' + validationError.message);
    // Properties
    this.worker = null;
    this.graph = graph;
    this.settings = settings;
    this.matrices = null;
    this.running = false;
    this.killed = false;
    this.inputReducer = params.inputReducer;
    this.outputReducer = params.outputReducer;
    this.callbacks = {
        onConverged: typeof params.onConverged === 'function' ? params.onConverged : null
    };
    // Binding listeners
    this.handleMessage = this.handleMessage.bind(this);
    var alreadyRespawning = false;
    var self = this;
    this.handleAddition = function() {
        if (alreadyRespawning) return;
        alreadyRespawning = true;
        self.spawnWorker();
        setTimeout(function() {
            alreadyRespawning = false;
        }, 0);
    };
    graph.on('nodeAdded', this.handleAddition);
    graph.on('edgeAdded', this.handleAddition);
    // Spawning worker
    this.spawnWorker();
}
NoverlapLayoutSupervisor.prototype.isRunning = function() {
    return this.running;
};
/**
 * Internal method used to spawn the web worker.
 */ NoverlapLayoutSupervisor.prototype.spawnWorker = function() {
    if (this.worker) this.worker.terminate();
    this.worker = helpers.createWorker(workerFunction);
    this.worker.addEventListener('message', this.handleMessage);
    if (this.running) {
        this.running = false;
        this.start();
    }
};
/**
 * Internal method used to handle the worker's messages.
 *
 * @param {object} event - Event to handle.
 */ NoverlapLayoutSupervisor.prototype.handleMessage = function(event) {
    if (!this.running) return;
    var matrix = new Float32Array(event.data.nodes);
    helpers.assignLayoutChanges(this.graph, matrix, this.outputReducer);
    this.matrices.nodes = matrix;
    if (event.data.result.converged) {
        if (this.callbacks.onConverged) this.callbacks.onConverged();
        this.stop();
        return;
    }
    // Looping
    this.askForIterations();
};
/**
 * Internal method used to ask for iterations from the worker.
 *
 * @return {NoverlapLayoutSupervisor}
 */ NoverlapLayoutSupervisor.prototype.askForIterations = function() {
    var matrices = this.matrices;
    var payload = {
        settings: this.settings,
        nodes: matrices.nodes.buffer
    };
    var buffers = [
        matrices.nodes.buffer
    ];
    this.worker.postMessage(payload, buffers);
    return this;
};
/**
 * Method used to start the layout.
 *
 * @return {NoverlapLayoutSupervisor}
 */ NoverlapLayoutSupervisor.prototype.start = function() {
    if (this.killed) throw new Error('graphology-layout-noverlap/worker.start: layout was killed.');
    if (this.running) return this;
    // Building matrices
    this.matrices = {
        nodes: helpers.graphToByteArray(this.graph, this.inputReducer)
    };
    this.running = true;
    this.askForIterations();
    return this;
};
/**
 * Method used to stop the layout.
 *
 * @return {NoverlapLayoutSupervisor}
 */ NoverlapLayoutSupervisor.prototype.stop = function() {
    this.running = false;
    return this;
};
/**
 * Method used to kill the layout.
 *
 * @return {NoverlapLayoutSupervisor}
 */ NoverlapLayoutSupervisor.prototype.kill = function() {
    if (this.killed) return this;
    this.running = false;
    this.killed = true;
    // Clearing memory
    this.matrices = null;
    // Terminating worker
    this.worker.terminate();
    // Unbinding listeners
    this.graph.removeListener('nodeAdded', this.handleAddition);
    this.graph.removeListener('edgeAdded', this.handleAddition);
};
/**
 * Exporting.
 */ module.exports = NoverlapLayoutSupervisor;
}),
"[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-noverlap@5.0.4_graphology-layout-noverlap@0.4.2_graphology-types@0._543a01cbce6ab5c8f68912215cc084a9/node_modules/@react-sigma/layout-noverlap/lib/react-sigma_layout-noverlap.esm.min.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutNoverlapControl",
    ()=>u,
    "useLayoutNoverlap",
    ()=>n,
    "useWorkerLayoutNoverlap",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/@react-sigma+layout-core@5.0.4_graphology@0.26.0_graphology-types@0.24.8__react@19.1.0__075301aea585382297676e5b58251850/node_modules/@react-sigma/layout-core/lib/react-sigma_layout-core.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$noverlap$40$0$2e$4$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$noverlap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$noverlap$40$0$2e$4$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$noverlap$2f$worker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/graphology-layout-noverlap@0.4.2_graphology-types@0.24.8/node_modules/graphology-layout-noverlap/worker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlinux/littletuna4.github.io/site/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
function n() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutFactory"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$noverlap$40$0$2e$4$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$noverlap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], r);
}
function s() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkerLayoutFactory"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$graphology$2d$layout$2d$noverlap$40$0$2e$4$2e$2_graphology$2d$types$40$0$2e$24$2e$8$2f$node_modules$2f$graphology$2d$layout$2d$noverlap$2f$worker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], o);
}
const u = (param)=>{
    let { id: o, className: r, style: e, settings: a = {}, autoRunFor: n, children: u, labels: c } = param;
    const i = {
        id: o,
        className: r,
        style: e,
        autoRunFor: n,
        labels: c,
        layout: s(a)
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$devlinux$2f$littletuna4$2e$github$2e$io$2f$site$2f$node_modules$2f2e$pnpm$2f40$react$2d$sigma$2b$layout$2d$core$40$5$2e$0$2e$4_graphology$40$0$2e$26$2e$0_graphology$2d$types$40$0$2e$24$2e$8_$5f$react$40$19$2e$1$2e$0_$5f$075301aea585382297676e5b58251850$2f$node_modules$2f40$react$2d$sigma$2f$layout$2d$core$2f$lib$2f$react$2d$sigma_layout$2d$core$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkerLayoutControl"], Object.assign({}, i), u);
};
;
 //# sourceMappingURL=react-sigma_layout-noverlap.esm.min.js.map
}),
]);

//# sourceMappingURL=075f0__pnpm_850e6141._.js.map