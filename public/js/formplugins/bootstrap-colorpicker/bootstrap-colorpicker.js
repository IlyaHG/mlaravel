!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define("bootstrap-colorpicker", ["jquery"], t) : "object" == typeof exports ? exports["bootstrap-colorpicker"] = t(require("jquery")) : e["bootstrap-colorpicker"] = t(e.jQuery)
}(window, function (o) {
    return n = {}, i.m = r = [function (e, t) {
        e.exports = o
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n, a = o(0), l = (n = a) && n.__esModule ? n : {default: n};
        var s = (r(c, [{
            key: "resolveColor", value: function (e, t) {
                return !1
            }
        }, {
            key: "onCreate", value: function () {
            }
        }, {
            key: "onDestroy", value: function () {
                this.colorpicker.element.off(".colorpicker-ext")
            }
        }, {
            key: "onUpdate", value: function () {
            }
        }, {
            key: "onChange", value: function () {
            }
        }, {
            key: "onInvalid", value: function () {
            }
        }, {
            key: "onHide", value: function () {
            }
        }, {
            key: "onShow", value: function () {
            }
        }, {
            key: "onDisable", value: function () {
            }
        }, {
            key: "onEnable", value: function () {
            }
        }]), c);

        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (!function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), this.colorpicker = e, this.options = t, !this.colorpicker.element || !this.colorpicker.element.length) throw new Error("Extension: this.colorpicker.element is not valid");
            this.colorpicker.element.on("colorpickerCreate.colorpicker-ext", l.default.proxy(this.onCreate, this)), this.colorpicker.element.on("colorpickerDestroy.colorpicker-ext", l.default.proxy(this.onDestroy, this)), this.colorpicker.element.on("colorpickerUpdate.colorpicker-ext", l.default.proxy(this.onUpdate, this)), this.colorpicker.element.on("colorpickerChange.colorpicker-ext", l.default.proxy(this.onChange, this)), this.colorpicker.element.on("colorpickerInvalid.colorpicker-ext", l.default.proxy(this.onInvalid, this)), this.colorpicker.element.on("colorpickerShow.colorpicker-ext", l.default.proxy(this.onShow, this)), this.colorpicker.element.on("colorpickerHide.colorpicker-ext", l.default.proxy(this.onHide, this)), this.colorpicker.element.on("colorpickerEnable.colorpicker-ext", l.default.proxy(this.onEnable, this)), this.colorpicker.element.on("colorpickerDisable.colorpicker-ext", l.default.proxy(this.onDisable, this))
        }

        t.default = s, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ColorItem = t.HSVAColor = void 0;
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n, a = o(16), l = (n = a) && n.__esModule ? n : {default: n};

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var c = (r(u, [{
            key: "toString", value: function () {
                return this.h + ", " + this.s + "%, " + this.v + "%, " + this.a
            }
        }]), u);

        function u(e, t, o, r) {
            s(this, u), this.h = isNaN(e) ? 0 : e, this.s = isNaN(t) ? 0 : t, this.v = isNaN(o) ? 0 : o, this.a = isNaN(e) ? 1 : r
        }

        var h = (r(p, [{
            key: "api", value: function (e) {
                for (var t = arguments.length, o = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) o[r - 1] = arguments[r];
                if (0 === arguments.length) return this._color;
                var i = this._color[e].apply(this._color, o);
                return i instanceof l.default ? new p(i, this.format) : i
            }
        }, {
            key: "original", get: function () {
                return this._original
            }
        }], [{
            key: "HSVAColor", get: function () {
                return c
            }
        }]), r(p, [{
            key: "replace", value: function (e, t) {
                var o = p.sanitizeFormat(o = 1 < arguments.length && void 0 !== t ? t : null);
                if (this._original = {
                    color: e,
                    format: o,
                    valid: !0
                }, this._color = p.parse(e), null === this._color) return this._color = (0, l.default)(), void (this._original.valid = !1);
                this._format = o || (p.isHex(e) ? "hex" : this._color.model)
            }
        }, {
            key: "isValid", value: function () {
                return !0 === this._original.valid
            }
        }, {
            key: "setHueRatio", value: function (e) {
                this.hue = 360 * (1 - e)
            }
        }, {
            key: "setSaturationRatio", value: function (e) {
                this.saturation = 100 * e
            }
        }, {
            key: "setValueRatio", value: function (e) {
                this.value = 100 * (1 - e)
            }
        }, {
            key: "setAlphaRatio", value: function (e) {
                this.alpha = 1 - e
            }
        }, {
            key: "isDesaturated", value: function () {
                return 0 === this.saturation
            }
        }, {
            key: "isTransparent", value: function () {
                return 0 === this.alpha
            }
        }, {
            key: "hasTransparency", value: function () {
                return this.hasAlpha() && this.alpha < 1
            }
        }, {
            key: "hasAlpha", value: function () {
                return !isNaN(this.alpha)
            }
        }, {
            key: "toObject", value: function () {
                return new c(this.hue, this.saturation, this.value, this.alpha)
            }
        }, {
            key: "toHsva", value: function () {
                return this.toObject()
            }
        }, {
            key: "toHsvaRatio", value: function () {
                return new c(this.hue / 360, this.saturation / 100, this.value / 100, this.alpha)
            }
        }, {
            key: "toString", value: function () {
                return this.string()
            }
        }, {
            key: "string", value: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : null;
                if (!(t = p.sanitizeFormat(t || this.format))) return this._color.round().string();
                if (void 0 === this._color[t]) throw new Error("Unsupported color format: '" + t + "'");
                var o = this._color[t]();
                return o.round ? o.round().string() : o
            }
        }, {
            key: "equals", value: function (e) {
                return !(!(e = e instanceof p ? e : new p(e)).isValid() || !this.isValid()) && this.hue === e.hue && this.saturation === e.saturation && this.value === e.value && this.alpha === e.alpha
            }
        }, {
            key: "getClone", value: function () {
                return new p(this._color, this.format)
            }
        }, {
            key: "getCloneHueOnly", value: function () {
                return new p([this.hue, 100, 100, 1], this.format)
            }
        }, {
            key: "getCloneOpaque", value: function () {
                return new p(this._color.alpha(1), this.format)
            }
        }, {
            key: "toRgbString", value: function () {
                return this.string("rgb")
            }
        }, {
            key: "toHexString", value: function () {
                return this.string("hex")
            }
        }, {
            key: "toHslString", value: function () {
                return this.string("hsl")
            }
        }, {
            key: "isDark", value: function () {
                return this._color.isDark()
            }
        }, {
            key: "isLight", value: function () {
                return this._color.isLight()
            }
        }, {
            key: "generate", value: function (e) {
                var t = [];
                if (Array.isArray(e)) t = e; else {
                    if (!p.colorFormulas.hasOwnProperty(e)) throw new Error("No color formula found with the name '" + e + "'.");
                    t = p.colorFormulas[e]
                }
                var o = [], r = this._color, i = this.format;
                return t.forEach(function (e) {
                    var t = [e ? (r.hue() + e) % 360 : r.hue(), r.saturationv(), r.value(), r.alpha()];
                    o.push(new p(t, i))
                }), o
            }
        }, {
            key: "hue", get: function () {
                return this._color.hue()
            }, set: function (e) {
                this._color = this._color.hue(e)
            }
        }, {
            key: "saturation", get: function () {
                return this._color.saturationv()
            }, set: function (e) {
                this._color = this._color.saturationv(e)
            }
        }, {
            key: "value", get: function () {
                return this._color.value()
            }, set: function (e) {
                this._color = this._color.value(e)
            }
        }, {
            key: "alpha", get: function () {
                var e = this._color.alpha();
                return isNaN(e) ? 1 : e
            }, set: function (e) {
                this._color = this._color.alpha(Math.round(100 * e) / 100)
            }
        }, {
            key: "format", get: function () {
                return this._format ? this._format : this._color.model
            }, set: function (e) {
                this._format = p.sanitizeFormat(e)
            }
        }], [{
            key: "parse", value: function (e) {
                if (e instanceof l.default) return e;
                if (e instanceof p) return e._color;
                var t = null;
                if (null === (e = e instanceof c ? [e.h, e.s, e.v, isNaN(e.a) ? 1 : e.a] : p.sanitizeString(e))) return null;
                Array.isArray(e) && (t = "hsv");
                try {
                    return (0, l.default)(e, t)
                } catch (e) {
                    return null
                }
            }
        }, {
            key: "sanitizeString", value: function (e) {
                return "string" == typeof e || e instanceof String ? e.match(/^[0-9a-f]{2,}$/i) ? "#" + e : "transparent" === e.toLowerCase() ? "#FFFFFF00" : e : e
            }
        }, {
            key: "isHex", value: function (e) {
                return ("string" == typeof e || e instanceof String) && !!e.match(/^#?[0-9a-f]{2,}$/i)
            }
        }, {
            key: "sanitizeFormat", value: function (e) {
                switch (e) {
                    case"hex":
                    case"hex3":
                    case"hex4":
                    case"hex6":
                    case"hex8":
                        return "hex";
                    case"rgb":
                    case"rgba":
                    case"keyword":
                    case"name":
                        return "rgb";
                    case"hsl":
                    case"hsla":
                    case"hsv":
                    case"hsva":
                    case"hwb":
                    case"hwba":
                        return "hsl";
                    default:
                        return ""
                }
            }
        }]), p);

        function p() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            s(this, p), this.replace(e, t)
        }

        h.colorFormulas = {
            complementary: [180],
            triad: [0, 120, 240],
            tetrad: [0, 90, 180, 270],
            splitcomplement: [0, 72, 216]
        }, t.default = h, t.HSVAColor = c, t.ColorItem = h
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = 6, i = 16 * r + 6 * (r - 1);
        t.default = {
            customClass: null,
            color: !1,
            fallbackColor: !1,
            format: "auto",
            horizontal: !1,
            inline: !1,
            container: !1,
            popover: {animation: !0, placement: "bottom", fallbackPlacement: "flip"},
            debug: !1,
            input: "input",
            addon: ".colorpicker-input-addon",
            autoInputFallback: !0,
            useHashPrefix: !0,
            useAlpha: !0,
            template: '<div class="colorpicker">\n      <div class="colorpicker-saturation"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-hue"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-alpha">\n        <div class="colorpicker-alpha-color"></div>\n        <i class="colorpicker-guide"></i>\n      </div>\n    </div>',
            extensions: [{name: "preview", options: {showText: !0}}],
            sliders: {
                saturation: {
                    selector: ".colorpicker-saturation",
                    maxLeft: i,
                    maxTop: i,
                    callLeft: "setSaturationRatio",
                    callTop: "setValueRatio"
                },
                hue: {selector: ".colorpicker-hue", maxLeft: 0, maxTop: i, callLeft: !1, callTop: "setHueRatio"},
                alpha: {
                    selector: ".colorpicker-alpha",
                    childSelector: ".colorpicker-alpha-color",
                    maxLeft: 0,
                    maxTop: i,
                    callLeft: !1,
                    callTop: "setAlphaRatio"
                }
            },
            slidersHorz: {
                saturation: {
                    selector: ".colorpicker-saturation",
                    maxLeft: i,
                    maxTop: i,
                    callLeft: "setSaturationRatio",
                    callTop: "setValueRatio"
                },
                hue: {selector: ".colorpicker-hue", maxLeft: i, maxTop: 0, callLeft: "setHueRatio", callTop: !1},
                alpha: {
                    selector: ".colorpicker-alpha",
                    childSelector: ".colorpicker-alpha-color",
                    maxLeft: i,
                    maxTop: 0,
                    callLeft: "setAlphaRatio",
                    callTop: !1
                }
            }
        }, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i = function (e, t, o) {
            return t && n(e.prototype, t), o && n(e, o), e
        };

        function n(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var a = s(o(1)), l = s(o(0));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var c = {colors: null, namesAsValues: !0}, u = (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(h, a.default), i(h, [{
            key: "colors", get: function () {
                return this.options.colors
            }
        }]), i(h, [{
            key: "getLength", value: function () {
                return this.options.colors ? Array.isArray(this.options.colors) ? this.options.colors.length : "object" === r(this.options.colors) ? Object.keys(this.options.colors).length : 0 : 0
            }
        }, {
            key: "resolveColor", value: function (e, t) {
                var o = !(1 < arguments.length && void 0 !== t) || t;
                return !(this.getLength() <= 0) && (Array.isArray(this.options.colors) ? 0 <= this.options.colors.indexOf(e) ? e : 0 <= this.options.colors.indexOf(e.toUpperCase()) ? e.toUpperCase() : 0 <= this.options.colors.indexOf(e.toLowerCase()) && e.toLowerCase() : "object" === r(this.options.colors) && (!this.options.namesAsValues || o ? this.getValue(e, !1) : this.getName(e, this.getName("#" + e))))
            }
        }, {
            key: "getName", value: function (e, t) {
                var o = 1 < arguments.length && void 0 !== t && t;
                if ("string" != typeof e || !this.options.colors) return o;
                for (var r in this.options.colors) if (this.options.colors.hasOwnProperty(r) && this.options.colors[r].toLowerCase() === e.toLowerCase()) return r;
                return o
            }
        }, {
            key: "getValue", value: function (e, t) {
                var o = 1 < arguments.length && void 0 !== t && t;
                return "string" == typeof e && this.options.colors && this.options.colors.hasOwnProperty(e) ? this.options.colors[e] : o
            }
        }]), h);

        function h(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, h);
            var o = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, e, l.default.extend(!0, {}, c, t)));
            return Array.isArray(o.options.colors) || "object" === r(o.options.colors) || (o.options.colors = null), o
        }

        t.default = u, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        e.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    }, function (e, t, o) {
        var c = o(5), u = {};
        for (var r in c) c.hasOwnProperty(r) && (u[c[r]] = r);
        var a = e.exports = {
            rgb: {channels: 3, labels: "rgb"},
            hsl: {channels: 3, labels: "hsl"},
            hsv: {channels: 3, labels: "hsv"},
            hwb: {channels: 3, labels: "hwb"},
            cmyk: {channels: 4, labels: "cmyk"},
            xyz: {channels: 3, labels: "xyz"},
            lab: {channels: 3, labels: "lab"},
            lch: {channels: 3, labels: "lch"},
            hex: {channels: 1, labels: ["hex"]},
            keyword: {channels: 1, labels: ["keyword"]},
            ansi16: {channels: 1, labels: ["ansi16"]},
            ansi256: {channels: 1, labels: ["ansi256"]},
            hcg: {channels: 3, labels: ["h", "c", "g"]},
            apple: {channels: 3, labels: ["r16", "g16", "b16"]},
            gray: {channels: 1, labels: ["gray"]}
        };
        for (var i in a) if (a.hasOwnProperty(i)) {
            if (!("channels" in a[i])) throw new Error("missing channels property: " + i);
            if (!("labels" in a[i])) throw new Error("missing channel labels property: " + i);
            if (a[i].labels.length !== a[i].channels) throw new Error("channel and label counts mismatch: " + i);
            var n = a[i].channels, l = a[i].labels;
            delete a[i].channels, delete a[i].labels, Object.defineProperty(a[i], "channels", {value: n}), Object.defineProperty(a[i], "labels", {value: l})
        }
        a.rgb.hsl = function (e) {
            var t, o, r = e[0] / 255, i = e[1] / 255, n = e[2] / 255, a = Math.min(r, i, n), l = Math.max(r, i, n),
                s = l - a;
            return l === a ? t = 0 : r === l ? t = (i - n) / s : i === l ? t = 2 + (n - r) / s : n === l && (t = 4 + (r - i) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), o = (a + l) / 2, [t, 100 * (l === a ? 0 : o <= .5 ? s / (l + a) : s / (2 - l - a)), 100 * o]
        }, a.rgb.hsv = function (e) {
            function t(e) {
                return (u - e) / 6 / h + .5
            }

            var o, r, i, n, a, l = e[0] / 255, s = e[1] / 255, c = e[2] / 255, u = Math.max(l, s, c),
                h = u - Math.min(l, s, c);
            return 0 == h ? n = a = 0 : (a = h / u, o = t(l), r = t(s), i = t(c), l === u ? n = i - r : s === u ? n = 1 / 3 + o - i : c === u && (n = 2 / 3 + r - o), n < 0 ? n += 1 : 1 < n && --n), [360 * n, 100 * a, 100 * u]
        }, a.rgb.hwb = function (e) {
            var t = e[0], o = e[1], r = e[2];
            return [a.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(o, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(o, r)))]
        }, a.rgb.cmyk = function (e) {
            var t = e[0] / 255, o = e[1] / 255, r = e[2] / 255, i = Math.min(1 - t, 1 - o, 1 - r);
            return [100 * ((1 - t - i) / (1 - i) || 0), 100 * ((1 - o - i) / (1 - i) || 0), 100 * ((1 - r - i) / (1 - i) || 0), 100 * i]
        }, a.rgb.keyword = function (e) {
            var t = u[e];
            if (t) return t;
            var o, r, i, n, a, l = 1 / 0;
            for (var s in c) {
                c.hasOwnProperty(s) && (r = c[s], n = e, a = r, (i = Math.pow(n[0] - a[0], 2) + Math.pow(n[1] - a[1], 2) + Math.pow(n[2] - a[2], 2)) < l && (l = i, o = s))
            }
            return o
        }, a.keyword.rgb = function (e) {
            return c[e]
        }, a.rgb.xyz = function (e) {
            var t = e[0] / 255, o = e[1] / 255, r = e[2] / 255;
            return [100 * (.4124 * (t = .04045 < t ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (o = .04045 < o ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92) + .1805 * (r = .04045 < r ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * o + .0722 * r), 100 * (.0193 * t + .1192 * o + .9505 * r)]
        }, a.rgb.lab = function (e) {
            var t = a.rgb.xyz(e), o = t[0], r = t[1], i = t[2];
            return r /= 100, i /= 108.883, o = .008856 < (o /= 95.047) ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, [116 * (r = .008856 < r ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (o - r), 200 * (r - (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
        }, a.hsl.rgb = function (e) {
            var t, o, r, i, n, a = e[0] / 360, l = e[1] / 100, s = e[2] / 100;
            if (0 == l) return [n = 255 * s, n, n];
            t = 2 * s - (o = s < .5 ? s * (1 + l) : s + l - s * l), i = [0, 0, 0];
            for (var c = 0; c < 3; c++) (r = a + 1 / 3 * -(c - 1)) < 0 && r++, 1 < r && r--, n = 6 * r < 1 ? t + 6 * (o - t) * r : 2 * r < 1 ? o : 3 * r < 2 ? t + (o - t) * (2 / 3 - r) * 6 : t, i[c] = 255 * n;
            return i
        }, a.hsl.hsv = function (e) {
            var t = e[0], o = e[1] / 100, r = e[2] / 100, i = o, n = Math.max(r, .01);
            return o *= (r *= 2) <= 1 ? r : 2 - r, i *= n <= 1 ? n : 2 - n, [t, 100 * (0 === r ? 2 * i / (n + i) : 2 * o / (r + o)), 100 * ((r + o) / 2)]
        }, a.hsv.rgb = function (e) {
            var t = e[0] / 60, o = e[1] / 100, r = e[2] / 100, i = Math.floor(t) % 6, n = t - Math.floor(t),
                a = 255 * r * (1 - o), l = 255 * r * (1 - o * n), s = 255 * r * (1 - o * (1 - n));
            switch (r *= 255, i) {
                case 0:
                    return [r, s, a];
                case 1:
                    return [l, r, a];
                case 2:
                    return [a, r, s];
                case 3:
                    return [a, l, r];
                case 4:
                    return [s, a, r];
                case 5:
                    return [r, a, l]
            }
        }, a.hsv.hsl = function (e) {
            var t = e[0], o = e[1] / 100, r = e[2] / 100, i = Math.max(r, .01), n = (2 - o) * r, a = (2 - o) * i,
                l = o * i;
            return [t, 100 * (l = (l /= a <= 1 ? a : 2 - a) || 0), 100 * (n /= 2)]
        }, a.hwb.rgb = function (e) {
            var t, o, r, i, n, a, l, s = e[0] / 360, c = e[1] / 100, u = e[2] / 100, h = c + u;
            switch (1 < h && (c /= h, u /= h), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), i = c + r * ((o = 1 - u) - c), t) {
                default:
                case 6:
                case 0:
                    n = o, a = i, l = c;
                    break;
                case 1:
                    n = i, a = o, l = c;
                    break;
                case 2:
                    n = c, a = o, l = i;
                    break;
                case 3:
                    n = c, a = i, l = o;
                    break;
                case 4:
                    n = i, a = c, l = o;
                    break;
                case 5:
                    n = o, a = c, l = i
            }
            return [255 * n, 255 * a, 255 * l]
        }, a.cmyk.rgb = function (e) {
            var t = e[0] / 100, o = e[1] / 100, r = e[2] / 100, i = e[3] / 100;
            return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, o * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
        }, a.xyz.rgb = function (e) {
            var t = e[0] / 100, o = e[1] / 100, r = e[2] / 100, i = 3.2406 * t + -1.5372 * o + -.4986 * r,
                n = -.9689 * t + 1.8758 * o + .0415 * r, a = .0557 * t + -.204 * o + 1.057 * r;
            return i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, a = .0031308 < a ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, [255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (a = Math.min(Math.max(0, a), 1))]
        }, a.xyz.lab = function (e) {
            var t = e[0], o = e[1], r = e[2];
            return o /= 100, r /= 108.883, t = .008856 < (t /= 95.047) ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (o = .008856 < o ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16, 500 * (t - o), 200 * (o - (r = .008856 < r ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
        }, a.lab.xyz = function (e) {
            var t = (e[0] + 16) / 116, o = e[1] / 500 + t, r = t - e[2] / 200, i = Math.pow(t, 3), n = Math.pow(o, 3),
                a = Math.pow(r, 3);
            return t = .008856 < i ? i : (t - 16 / 116) / 7.787, o = .008856 < n ? n : (o - 16 / 116) / 7.787, r = .008856 < a ? a : (r - 16 / 116) / 7.787, [o *= 95.047, t *= 100, r *= 108.883]
        }, a.lab.lch = function (e) {
            var t = e[0], o = e[1], r = e[2], i = 360 * Math.atan2(r, o) / 2 / Math.PI;
            return i < 0 && (i += 360), [t, Math.sqrt(o * o + r * r), i]
        }, a.lch.lab = function (e) {
            var t = e[0], o = e[1], r = e[2] / 360 * 2 * Math.PI;
            return [t, o * Math.cos(r), o * Math.sin(r)]
        }, a.rgb.ansi16 = function (e) {
            var t = e[0], o = e[1], r = e[2], i = 1 in arguments ? arguments[1] : a.rgb.hsv(e)[2];
            if (0 === (i = Math.round(i / 50))) return 30;
            var n = 30 + (Math.round(r / 255) << 2 | Math.round(o / 255) << 1 | Math.round(t / 255));
            return 2 === i && (n += 60), n
        }, a.hsv.ansi16 = function (e) {
            return a.rgb.ansi16(a.hsv.rgb(e), e[2])
        }, a.rgb.ansi256 = function (e) {
            var t = e[0], o = e[1], r = e[2];
            return t === o && o === r ? t < 8 ? 16 : 248 < t ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(o / 255 * 5) + Math.round(r / 255 * 5)
        }, a.ansi16.rgb = function (e) {
            var t = e % 10;
            if (0 === t || 7 === t) return 50 < e && (t += 3.5), [t = t / 10.5 * 255, t, t];
            var o = .5 * (1 + ~~(50 < e));
            return [(1 & t) * o * 255, (t >> 1 & 1) * o * 255, (t >> 2 & 1) * o * 255]
        }, a.ansi256.rgb = function (e) {
            if (232 <= e) {
                var t = 10 * (e - 232) + 8;
                return [t, t, t]
            }
            var o;
            return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((o = e % 36) / 6) / 5 * 255, o % 6 / 5 * 255]
        }, a.rgb.hex = function (e) {
            var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
            return "000000".substring(t.length) + t
        }, a.hex.rgb = function (e) {
            var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!t) return [0, 0, 0];
            var o = t[0];
            3 === t[0].length && (o = o.split("").map(function (e) {
                return e + e
            }).join(""));
            var r = parseInt(o, 16);
            return [r >> 16 & 255, r >> 8 & 255, 255 & r]
        }, a.rgb.hcg = function (e) {
            var t = e[0] / 255, o = e[1] / 255, r = e[2] / 255, i = Math.max(Math.max(t, o), r),
                n = Math.min(Math.min(t, o), r), a = i - n, l = a < 1 ? n / (1 - a) : 0,
                s = a <= 0 ? 0 : i === t ? (o - r) / a % 6 : i === o ? 2 + (r - t) / a : 4 + (t - o) / a + 4;
            return s /= 6, [360 * (s %= 1), 100 * a, 100 * l]
        }, a.hsl.hcg = function (e) {
            var t = e[1] / 100, o = e[2] / 100, r = 1, i = 0;
            return (r = o < .5 ? 2 * t * o : 2 * t * (1 - o)) < 1 && (i = (o - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * i]
        }, a.hsv.hcg = function (e) {
            var t = e[1] / 100, o = e[2] / 100, r = t * o, i = r < 1 ? (o - r) / (1 - r) : 0;
            return [e[0], 100 * r, 100 * i]
        }, a.hcg.rgb = function (e) {
            var t = e[0] / 360, o = e[1] / 100, r = e[2] / 100;
            if (0 == o) return [255 * r, 255 * r, 255 * r];
            var i, n = [0, 0, 0], a = t % 1 * 6, l = a % 1, s = 1 - l;
            switch (Math.floor(a)) {
                case 0:
                    n[0] = 1, n[1] = l, n[2] = 0;
                    break;
                case 1:
                    n[0] = s, n[1] = 1, n[2] = 0;
                    break;
                case 2:
                    n[0] = 0, n[1] = 1, n[2] = l;
                    break;
                case 3:
                    n[0] = 0, n[1] = s, n[2] = 1;
                    break;
                case 4:
                    n[0] = l, n[1] = 0, n[2] = 1;
                    break;
                default:
                    n[0] = 1, n[1] = 0, n[2] = s
            }
            return i = (1 - o) * r, [255 * (o * n[0] + i), 255 * (o * n[1] + i), 255 * (o * n[2] + i)]
        }, a.hcg.hsv = function (e) {
            var t = e[1] / 100, o = t + e[2] / 100 * (1 - t), r = 0 < o ? t / o : 0;
            return [e[0], 100 * r, 100 * o]
        }, a.hcg.hsl = function (e) {
            var t = e[1] / 100, o = e[2] / 100 * (1 - t) + .5 * t, r = 0;
            return 0 < o && o < .5 ? r = t / (2 * o) : .5 <= o && o < 1 && (r = t / (2 * (1 - o))), [e[0], 100 * r, 100 * o]
        }, a.hcg.hwb = function (e) {
            var t = e[1] / 100, o = t + e[2] / 100 * (1 - t);
            return [e[0], 100 * (o - t), 100 * (1 - o)]
        }, a.hwb.hcg = function (e) {
            var t = e[1] / 100, o = 1 - e[2] / 100, r = o - t, i = r < 1 ? (o - r) / (1 - r) : 0;
            return [e[0], 100 * r, 100 * i]
        }, a.apple.rgb = function (e) {
            return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
        }, a.rgb.apple = function (e) {
            return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
        }, a.gray.rgb = function (e) {
            return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
        }, a.gray.hsl = a.gray.hsv = function (e) {
            return [0, 0, e[0]]
        }, a.gray.hwb = function (e) {
            return [0, 100, e[0]]
        }, a.gray.cmyk = function (e) {
            return [0, 0, 0, e[0]]
        }, a.gray.lab = function (e) {
            return [e[0], 0, 0]
        }, a.gray.hex = function (e) {
            var t = 255 & Math.round(e[0] / 100 * 255), o = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
            return "000000".substring(o.length) + o
        }, a.rgb.gray = function (e) {
            return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
        }
    }, function (e, t, o) {
        "use strict";
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s = r(o(8)), c = r(o(0));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var u = "colorpicker";
        c.default[u] = s.default, c.default.fn[u] = function (r) {
            var i = Array.prototype.slice.call(arguments, 1), n = 1 === this.length, a = null,
                e = this.each(function () {
                    var e = (0, c.default)(this), t = e.data(u),
                        o = "object" === (void 0 === r ? "undefined" : l(r)) ? r : {};
                    t || (t = new s.default(this, o), e.data(u, t)), n && (a = e, "string" == typeof r && (a = "colorpicker" === r ? t : c.default.isFunction(t[r]) ? t[r].apply(t, i) : t[r]))
                });
            return n ? a : e
        }, c.default.fn[u].constructor = s.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n = k(o(1)), a = k(o(3)), l = k(o(9)), s = k(o(0)), c = k(o(13)), u = k(o(14)), h = k(o(15)), p = k(o(22)),
            f = k(o(23)), d = k(o(24)), v = k(o(2));

        function k(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var g = 0, y = "undefined" != typeof self ? self : void 0, b = (r(m, [{
            key: "color", get: function () {
                return this.colorHandler.color
            }
        }, {
            key: "format", get: function () {
                return this.colorHandler.format
            }
        }, {
            key: "picker", get: function () {
                return this.pickerHandler.picker
            }
        }], [{
            key: "Color", get: function () {
                return v.default
            }
        }, {
            key: "Extension", get: function () {
                return n.default
            }
        }]), r(m, [{
            key: "init", value: function () {
                this.addonHandler.bind(), this.inputHandler.bind(), this.initExtensions(), this.colorHandler.bind(), this.pickerHandler.bind(), this.sliderHandler.bind(), this.popupHandler.bind(), this.pickerHandler.attach(), this.update(), this.inputHandler.isDisabled() && this.disable()
            }
        }, {
            key: "initExtensions", value: function () {
                var t = this;
                Array.isArray(this.options.extensions) || (this.options.extensions = []), this.options.debug && this.options.extensions.push({name: "debugger"}), this.options.extensions.forEach(function (e) {
                    t.registerExtension(m.extensions[e.name.toLowerCase()], e.options || {})
                })
            }
        }, {
            key: "registerExtension", value: function (e, t) {
                var o = new e(this, 1 < arguments.length && void 0 !== t ? t : {});
                return this.extensions.push(o), o
            }
        }, {
            key: "destroy", value: function () {
                var e = this.color;
                this.sliderHandler.unbind(), this.inputHandler.unbind(), this.popupHandler.unbind(), this.colorHandler.unbind(), this.addonHandler.unbind(), this.pickerHandler.unbind(), this.element.removeClass("colorpicker-element").removeData("colorpicker", "color").off(".colorpicker"), this.trigger("colorpickerDestroy", e)
            }
        }, {
            key: "show", value: function (e) {
                this.popupHandler.show(e)
            }
        }, {
            key: "hide", value: function (e) {
                this.popupHandler.hide(e)
            }
        }, {
            key: "toggle", value: function (e) {
                this.popupHandler.toggle(e)
            }
        }, {
            key: "getValue", value: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : null, o = this.colorHandler.color;
                return (o = o instanceof v.default ? o : t) instanceof v.default ? o.string(this.format) : o
            }
        }, {
            key: "setValue", value: function (e) {
                var t;
                this.isDisabled() || (t = this.colorHandler).hasColor() && e && t.color.equals(e) || !t.hasColor() && !e || (t.color = e ? t.createColor(e, this.options.autoInputFallback) : null, this.trigger("colorpickerChange", t.color, e), this.update())
            }
        }, {
            key: "update", value: function () {
                this.colorHandler.hasColor() ? this.inputHandler.update() : this.colorHandler.assureColor(), this.addonHandler.update(), this.pickerHandler.update(), this.trigger("colorpickerUpdate")
            }
        }, {
            key: "enable", value: function () {
                return this.inputHandler.enable(), this.disabled = !1, this.picker.removeClass("colorpicker-disabled"), this.trigger("colorpickerEnable"), !0
            }
        }, {
            key: "disable", value: function () {
                return this.inputHandler.disable(), this.disabled = !0, this.picker.addClass("colorpicker-disabled"), this.trigger("colorpickerDisable"), !0
            }
        }, {
            key: "isEnabled", value: function () {
                return !this.isDisabled()
            }
        }, {
            key: "isDisabled", value: function () {
                return !0 === this.disabled
            }
        }, {
            key: "trigger", value: function (e, t, o) {
                var r = 1 < arguments.length && void 0 !== t ? t : null,
                    i = 2 < arguments.length && void 0 !== o ? o : null;
                this.element.trigger({type: e, colorpicker: this, color: r || this.color, value: i || this.getValue()})
            }
        }]), m);

        function m(e, t) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, m), g += 1, this.id = g, this.lastEvent = {
                alias: null,
                e: null
            }, this.element = (0, s.default)(e).addClass("colorpicker-element").attr("data-colorpicker-id", this.id), this.options = s.default.extend(!0, {}, a.default, t, this.element.data()), this.disabled = !1, this.extensions = [], this.container = !0 === this.options.container || !0 !== this.options.container && !0 === this.options.inline ? this.element : this.options.container, this.container = !1 !== this.container && (0, s.default)(this.container), this.inputHandler = new h.default(this), this.colorHandler = new p.default(this), this.sliderHandler = new c.default(this), this.popupHandler = new u.default(this, y), this.pickerHandler = new f.default(this), this.addonHandler = new d.default(this), this.init(), (0, s.default)(s.default.proxy(function () {
                this.trigger("colorpickerCreate")
            }, this))
        }

        b.extensions = l.default, t.default = b, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.Palette = t.Swatches = t.Preview = t.Debugger = void 0;
        var r = l(o(10)), i = l(o(11)), n = l(o(12)), a = l(o(4));

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.Debugger = r.default, t.Preview = i.default, t.Swatches = n.default, t.Palette = a.default, t.default = {
            debugger: r.default,
            preview: i.default,
            swatches: n.default,
            palette: a.default
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function a(e, t, o) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, t);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : a(i, t, o)
            }
            if ("value" in r) return r.value;
            var n = r.get;
            return void 0 !== n ? n.call(o) : void 0
        }

        var n = s(o(1)), l = s(o(0));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var c = (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(u, n.default), r(u, [{
            key: "log", value: function (e) {
                for (var t, o = arguments.length, r = Array(1 < o ? o - 1 : 0), i = 1; i < o; i++) r[i - 1] = arguments[i];
                this.eventCounter += 1;
                var n = "#" + this.eventCounter + ": Colorpicker#" + this.colorpicker.id + " [" + e + "]";
                (t = console).debug.apply(t, [n].concat(r)), this.colorpicker.element.trigger({
                    type: "colorpickerDebug",
                    colorpicker: this.colorpicker,
                    color: this.color,
                    value: null,
                    debug: {debugger: this, eventName: e, logArgs: r, logMessage: n}
                })
            }
        }, {
            key: "resolveColor", value: function (e, t) {
                var o = !(1 < arguments.length && void 0 !== t) || t;
                return this.log("resolveColor()", e, o), !1
            }
        }, {
            key: "onCreate", value: function (e) {
                return this.log("colorpickerCreate"), a(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "onCreate", this).call(this, e)
            }
        }, {
            key: "onDestroy", value: function (e) {
                return this.log("colorpickerDestroy"), this.eventCounter = 0, this.colorpicker.inputHandler.hasInput() && this.colorpicker.inputHandler.input.off(".colorpicker-ext"), a(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "onDestroy", this).call(this, e)
            }
        }, {
            key: "onUpdate", value: function () {
                this.log("colorpickerUpdate")
            }
        }, {
            key: "onChangeInput", value: function (e) {
                this.log("input:change.colorpicker", e.value, e.color)
            }
        }, {
            key: "onChange", value: function (e) {
                this.log("colorpickerChange", e.value, e.color)
            }
        }, {
            key: "onInvalid", value: function (e) {
                this.log("colorpickerInvalid", e.value, e.color)
            }
        }, {
            key: "onHide", value: function () {
                this.log("colorpickerHide"), this.eventCounter = 0
            }
        }, {
            key: "onShow", value: function () {
                this.log("colorpickerShow")
            }
        }, {
            key: "onDisable", value: function () {
                this.log("colorpickerDisable")
            }
        }, {
            key: "onEnable", value: function () {
                this.log("colorpickerEnable")
            }
        }]), u);

        function u(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, u);
            var o = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, e, t));
            return o.eventCounter = 0, o.colorpicker.inputHandler.hasInput() && o.colorpicker.inputHandler.input.on("change.colorpicker-ext", l.default.proxy(o.onChangeInput, o)), o
        }

        t.default = c, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function a(e, t, o) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, t);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : a(i, t, o)
            }
            if ("value" in r) return r.value;
            var n = r.get;
            return void 0 !== n ? n.call(o) : void 0
        }

        var n = s(o(1)), l = s(o(0));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var c = (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(u, n.default), r(u, [{
            key: "onCreate", value: function (e) {
                a(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "onCreate", this).call(this, e), this.colorpicker.picker.append(this.element)
            }
        }, {
            key: "onUpdate", value: function (e) {
                a(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "onUpdate", this).call(this, e), e.color ? (this.elementInner.css("backgroundColor", e.color.toRgbString()), this.options.showText && (this.elementInner.html(e.color.string(this.options.format || this.colorpicker.format)), e.color.isDark() && .5 < e.color.alpha ? this.elementInner.css("color", "white") : this.elementInner.css("color", "black"))) : this.elementInner.css("backgroundColor", null).css("color", null).html("")
            }
        }]), u);

        function u(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, u);
            var o = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, e, l.default.extend(!0, {}, {
                template: '<div class="colorpicker-bar colorpicker-preview"><div /></div>',
                showText: !0,
                format: e.format
            }, t)));
            return o.element = (0, l.default)(o.options.template), o.elementInner = o.element.find("div"), o
        }

        t.default = c, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n = a(o(4)), l = a(o(0));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = {
            barTemplate: '<div class="colorpicker-bar colorpicker-swatches">\n                    <div class="colorpicker-swatches--inner"></div>\n                </div>',
            swatchTemplate: '<i class="colorpicker-swatch"><i class="colorpicker-swatch--inner"></i></i>'
        }, c = (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(u, n.default), r(u, [{
            key: "isEnabled", value: function () {
                return 0 < this.getLength()
            }
        }, {
            key: "onCreate", value: function (e) {
                (function e(t, o, r) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, o);
                    if (void 0 === i) {
                        var n = Object.getPrototypeOf(t);
                        return null === n ? void 0 : e(n, o, r)
                    }
                    if ("value" in i) return i.value;
                    var a = i.get;
                    return void 0 !== a ? a.call(r) : void 0
                })(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "onCreate", this).call(this, e), this.isEnabled() && (this.element = (0, l.default)(this.options.barTemplate), this.load(), this.colorpicker.picker.append(this.element))
            }
        }, {
            key: "load", value: function () {
                var r = this, i = this.colorpicker, n = this.element.find(".colorpicker-swatches--inner"),
                    a = !0 === this.options.namesAsValues && !Array.isArray(this.colors);
                n.empty(), l.default.each(this.colors, function (e, t) {
                    var o = (0, l.default)(r.options.swatchTemplate).attr("data-name", e).attr("data-value", t).attr("title", a ? e + ": " + t : t).on("mousedown.colorpicker touchstart.colorpicker", function (e) {
                        var t = (0, l.default)(this);
                        i.setValue(a ? t.attr("data-name") : t.attr("data-value"))
                    });
                    o.find(".colorpicker-swatch--inner").css("background-color", t), n.append(o)
                }), n.append((0, l.default)('<i class="colorpicker-clear"></i>'))
            }
        }]), u);

        function u(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, u);
            var o = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, e, l.default.extend(!0, {}, s, t)));
            return o.element = null, o
        }

        t.default = c, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n, a = o(0), l = (n = a) && n.__esModule ? n : {default: n};
        var s = (r(c, [{
            key: "defaultOnMove", value: function (e, t) {
                var o, r, i, n;
                this.currentSlider && (o = this.currentSlider, n = (i = (r = this.colorpicker).colorHandler).hasColor() ? i.color.getClone() : i.getFallbackColor(), o.guideStyle.left = t + "px", o.guideStyle.top = e + "px", o.callLeft && n[o.callLeft](t / o.maxLeft), o.callTop && n[o.callTop](e / o.maxTop), r.setValue(n), r.popupHandler.focus())
            }
        }, {
            key: "bind", value: function () {
                var e = this.colorpicker.options.horizontal ? this.colorpicker.options.slidersHorz : this.colorpicker.options.sliders,
                    t = [];
                for (var o in e) e.hasOwnProperty(o) && t.push(e[o].selector);
                this.colorpicker.picker.find(t.join(", ")).on("mousedown.colorpicker touchstart.colorpicker", l.default.proxy(this.pressed, this))
            }
        }, {
            key: "unbind", value: function () {
                (0, l.default)(this.colorpicker.picker).off({
                    "mousemove.colorpicker": l.default.proxy(this.moved, this),
                    "touchmove.colorpicker": l.default.proxy(this.moved, this),
                    "mouseup.colorpicker": l.default.proxy(this.released, this),
                    "touchend.colorpicker": l.default.proxy(this.released, this)
                })
            }
        }, {
            key: "pressed", value: function (e) {
                if (!this.colorpicker.isDisabled()) {
                    this.colorpicker.lastEvent.alias = "pressed", !(this.colorpicker.lastEvent.e = e).pageX && !e.pageY && e.originalEvent && e.originalEvent.touches && (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY);
                    var t = (0, l.default)(e.target).closest("div"),
                        o = this.colorpicker.options.horizontal ? this.colorpicker.options.slidersHorz : this.colorpicker.options.sliders;
                    if (!t.is(".colorpicker")) {
                        for (var r in this.currentSlider = null, o) if (o.hasOwnProperty(r)) {
                            var i = o[r];
                            if (t.is(i.selector)) {
                                this.currentSlider = l.default.extend({}, i, {name: r});
                                break
                            }
                            if (void 0 !== i.childSelector && t.is(i.childSelector)) {
                                this.currentSlider = l.default.extend({}, i, {name: r}), t = t.parent();
                                break
                            }
                        }
                        var n, a = t.find(".colorpicker-guide").get(0);
                        null !== this.currentSlider && null !== a && (n = t.offset(), this.currentSlider.guideStyle = a.style, this.currentSlider.left = e.pageX - n.left, this.currentSlider.top = e.pageY - n.top, this.mousePointer = {
                            left: e.pageX,
                            top: e.pageY
                        }, (0, l.default)(this.colorpicker.picker).on({
                            "mousemove.colorpicker": l.default.proxy(this.moved, this),
                            "touchmove.colorpicker": l.default.proxy(this.moved, this),
                            "mouseup.colorpicker": l.default.proxy(this.released, this),
                            "touchend.colorpicker": l.default.proxy(this.released, this)
                        }).trigger("mousemove"))
                    }
                }
            }
        }, {
            key: "moved", value: function (e) {
                this.colorpicker.lastEvent.alias = "moved", !(this.colorpicker.lastEvent.e = e).pageX && !e.pageY && e.originalEvent && e.originalEvent.touches && (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY), e.preventDefault();
                var t = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left))),
                    o = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)));
                this.onMove(o, t)
            }
        }, {
            key: "released", value: function (e) {
                this.colorpicker.lastEvent.alias = "released", this.colorpicker.lastEvent.e = e, (0, l.default)(this.colorpicker.picker).off({
                    "mousemove.colorpicker": this.moved,
                    "touchmove.colorpicker": this.moved,
                    "mouseup.colorpicker": this.released,
                    "touchend.colorpicker": this.released
                })
            }
        }]), c);

        function c(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), this.colorpicker = e, this.currentSlider = null, this.mousePointer = {
                left: 0,
                top: 0
            }, this.onMove = l.default.proxy(this.defaultOnMove, this)
        }

        t.default = s, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n = l(o(0)), a = l(o(3));

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = (r(c, [{
            key: "bind", value: function () {
                var e = this.colorpicker;
                e.options.inline ? e.picker.addClass("colorpicker-inline colorpicker-visible") : (e.picker.addClass("colorpicker-popup colorpicker-hidden"), (this.hasInput || this.hasAddon) && (e.options.popover && this.createPopover(), this.hasAddon && (this.addon.attr("tabindex") || this.addon.attr("tabindex", 0), this.addon.on({"mousedown.colorpicker touchstart.colorpicker": n.default.proxy(this.toggle, this)}), this.addon.on({"focus.colorpicker": n.default.proxy(this.show, this)}), this.addon.on({"focusout.colorpicker": n.default.proxy(this.hide, this)})), this.hasInput && !this.hasAddon && (this.input.on({
                    "mousedown.colorpicker touchstart.colorpicker": n.default.proxy(this.show, this),
                    "focus.colorpicker": n.default.proxy(this.show, this)
                }), this.input.on({"focusout.colorpicker": n.default.proxy(this.hide, this)})), (0, n.default)(this.root).on("resize.colorpicker", n.default.proxy(this.reposition, this))))
            }
        }, {
            key: "unbind", value: function () {
                this.hasInput && (this.input.off({
                    "mousedown.colorpicker touchstart.colorpicker": n.default.proxy(this.show, this),
                    "focus.colorpicker": n.default.proxy(this.show, this)
                }), this.input.off({"focusout.colorpicker": n.default.proxy(this.hide, this)})), this.hasAddon && (this.addon.off({"mousedown.colorpicker touchstart.colorpicker": n.default.proxy(this.toggle, this)}), this.addon.off({"focus.colorpicker": n.default.proxy(this.show, this)}), this.addon.off({"focusout.colorpicker": n.default.proxy(this.hide, this)})), this.popoverTarget && this.popoverTarget.popover("dispose"), (0, n.default)(this.root).off("resize.colorpicker", n.default.proxy(this.reposition, this)), (0, n.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", n.default.proxy(this.hide, this)), (0, n.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", n.default.proxy(this.onClickingInside, this))
            }
        }, {
            key: "isClickingInside", value: function (e) {
                return !!e && (this.isOrIsInside(this.popoverTip, e.currentTarget) || this.isOrIsInside(this.popoverTip, e.target) || this.isOrIsInside(this.colorpicker.picker, e.currentTarget) || this.isOrIsInside(this.colorpicker.picker, e.target))
            }
        }, {
            key: "isOrIsInside", value: function (e, t) {
                return !(!e || !t) && ((t = (0, n.default)(t)).is(e) || 0 < e.find(t).length)
            }
        }, {
            key: "onClickingInside", value: function (e) {
                this.clicking = this.isClickingInside(e)
            }
        }, {
            key: "createPopover", value: function () {
                var e = this.colorpicker;
                this.popoverTarget = this.hasAddon ? this.addon : this.input, e.picker.addClass("colorpicker-bs-popover-content"), this.popoverTarget.popover(n.default.extend(!0, {}, a.default.popover, e.options.popover, {
                    trigger: "manual",
                    content: e.picker,
                    html: !0
                })), this.popoverTip = (0, n.default)(this.popoverTarget.popover("getTipElement").data("bs.popover").tip), this.popoverTip.addClass("colorpicker-bs-popover"), this.popoverTarget.on("shown.bs.popover", n.default.proxy(this.fireShow, this)), this.popoverTarget.on("hidden.bs.popover", n.default.proxy(this.fireHide, this))
            }
        }, {
            key: "reposition", value: function () {
                this.popoverTarget && this.isVisible() && this.popoverTarget.popover("update")
            }
        }, {
            key: "toggle", value: function (e) {
                this.isVisible() ? this.hide(e) : this.show(e)
            }
        }, {
            key: "show", value: function (e) {
                var t;
                this.isVisible() || this.showing || this.hidding || (this.showing = !0, this.hidding = !1, this.clicking = !1, (t = this.colorpicker).lastEvent.alias = "show", (t.lastEvent.e = e) && (!this.hasInput || "color" === this.input.attr("type")) && e && e.preventDefault && (e.stopPropagation(), e.preventDefault()), this.isPopover && (0, n.default)(this.root).on("resize.colorpicker", n.default.proxy(this.reposition, this)), t.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.popoverTarget ? this.popoverTarget.popover("show") : this.fireShow())
            }
        }, {
            key: "fireShow", value: function () {
                this.hidding = !1, this.showing = !1, this.isPopover && ((0, n.default)(this.root.document).on("mousedown.colorpicker touchstart.colorpicker", n.default.proxy(this.hide, this)), (0, n.default)(this.root.document).on("mousedown.colorpicker touchstart.colorpicker", n.default.proxy(this.onClickingInside, this))), this.colorpicker.trigger("colorpickerShow")
            }
        }, {
            key: "hide", value: function (e) {
                var t, o;
                this.isHidden() || this.showing || this.hidding || (t = this.colorpicker, o = this.clicking || this.isClickingInside(e), this.hidding = !0, this.showing = !1, this.clicking = !1, t.lastEvent.alias = "hide", t.lastEvent.e = e, o ? this.hidding = !1 : this.popoverTarget ? this.popoverTarget.popover("hide") : this.fireHide())
            }
        }, {
            key: "fireHide", value: function () {
                this.hidding = !1, this.showing = !1;
                var e = this.colorpicker;
                e.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), (0, n.default)(this.root).off("resize.colorpicker", n.default.proxy(this.reposition, this)), (0, n.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", n.default.proxy(this.hide, this)), (0, n.default)(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", n.default.proxy(this.onClickingInside, this)), e.trigger("colorpickerHide")
            }
        }, {
            key: "focus", value: function () {
                return this.hasAddon ? this.addon.focus() : !!this.hasInput && this.input.focus()
            }
        }, {
            key: "isVisible", value: function () {
                return this.colorpicker.picker.hasClass("colorpicker-visible") && !this.colorpicker.picker.hasClass("colorpicker-hidden")
            }
        }, {
            key: "isHidden", value: function () {
                return this.colorpicker.picker.hasClass("colorpicker-hidden") && !this.colorpicker.picker.hasClass("colorpicker-visible")
            }
        }, {
            key: "input", get: function () {
                return this.colorpicker.inputHandler.input
            }
        }, {
            key: "hasInput", get: function () {
                return this.colorpicker.inputHandler.hasInput()
            }
        }, {
            key: "addon", get: function () {
                return this.colorpicker.addonHandler.addon
            }
        }, {
            key: "hasAddon", get: function () {
                return this.colorpicker.addonHandler.hasAddon()
            }
        }, {
            key: "isPopover", get: function () {
                return !this.colorpicker.options.inline && !!this.popoverTip
            }
        }]), c);

        function c(e, t) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), this.root = t, this.colorpicker = e, this.popoverTarget = null, this.popoverTip = null, this.clicking = !1, this.hidding = !1, this.showing = !1
        }

        t.default = s, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n = l(o(0)), a = l(o(2));

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = (r(c, [{
            key: "bind", value: function () {
                this.hasInput() && (this.input.on({"keyup.colorpicker": n.default.proxy(this.onkeyup, this)}), this.input.on({"change.colorpicker": n.default.proxy(this.onchange, this)}))
            }
        }, {
            key: "unbind", value: function () {
                this.hasInput() && this.input.off(".colorpicker")
            }
        }, {
            key: "_initValue", value: function () {
                var t;
                this.hasInput() && (t = "", [this.input.val(), this.input.data("color"), this.input.attr("data-color")].map(function (e) {
                    e && "" === t && (t = e)
                }), t instanceof a.default ? t = this.getFormattedColor(t.string(this.colorpicker.format)) : "string" == typeof t || t instanceof String || (t = ""), this.input.prop("value", t))
            }
        }, {
            key: "getValue", value: function () {
                return !!this.hasInput() && this.input.val()
            }
        }, {
            key: "setValue", value: function (e) {
                !this.hasInput() || (e = e || "") !== (this.input.prop("value") || "") && (this.input.prop("value", e), this.input.trigger({
                    type: "change",
                    colorpicker: this.colorpicker,
                    color: this.colorpicker.color,
                    value: e
                }))
            }
        }, {
            key: "getFormattedColor", value: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : null;
                return (t = t || this.colorpicker.colorHandler.getColorString()) ? (t = this.colorpicker.colorHandler.resolveColorDelegate(t, !1), !1 === this.colorpicker.options.useHashPrefix && (t = t.replace(/^#/g, "")), t) : ""
            }
        }, {
            key: "hasInput", value: function () {
                return !1 !== this.input
            }
        }, {
            key: "isEnabled", value: function () {
                return this.hasInput() && !this.isDisabled()
            }
        }, {
            key: "isDisabled", value: function () {
                return this.hasInput() && !0 === this.input.prop("disabled")
            }
        }, {
            key: "disable", value: function () {
                this.hasInput() && this.input.prop("disabled", !0)
            }
        }, {
            key: "enable", value: function () {
                this.hasInput() && this.input.prop("disabled", !1)
            }
        }, {
            key: "update", value: function () {
                this.hasInput() && (!1 === this.colorpicker.options.autoInputFallback && this.colorpicker.colorHandler.isInvalidColor() || this.setValue(this.getFormattedColor()))
            }
        }, {
            key: "onchange", value: function (e) {
                this.colorpicker.lastEvent.alias = "input.change", this.colorpicker.lastEvent.e = e;
                var t = this.getValue();
                t !== e.value && this.colorpicker.setValue(t)
            }
        }, {
            key: "onkeyup", value: function (e) {
                this.colorpicker.lastEvent.alias = "input.keyup", this.colorpicker.lastEvent.e = e;
                var t = this.getValue();
                t !== e.value && this.colorpicker.setValue(t)
            }
        }]), c);

        function c(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), this.colorpicker = e, this.input = this.colorpicker.element.is("input") ? this.colorpicker.element : !!this.colorpicker.options.input && this.colorpicker.element.find(this.colorpicker.options.input), this.input && 0 === this.input.length && (this.input = !1), this._initValue()
        }

        t.default = s, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        var h = o(17), p = o(20), f = [].slice, d = ["keyword", "gray", "hex"], v = {};
        Object.keys(p).forEach(function (e) {
            v[f.call(p[e].labels).sort().join("")] = e
        });
        var k = {};

        function g(e, t) {
            if (!(this instanceof g)) return new g(e, t);
            if (t && t in d && (t = null), t && !(t in p)) throw new Error("Unknown model: " + t);
            var o;
            if (null == e) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1; else if (e instanceof g) this.model = e.model, this.color = e.color.slice(), this.valpha = e.valpha; else if ("string" == typeof e) {
                var r = h.get(e);
                if (null === r) throw new Error("Unable to parse color from string: " + e);
                this.model = r.model, o = p[this.model].channels, this.color = r.value.slice(0, o), this.valpha = "number" == typeof r.value[o] ? r.value[o] : 1
            } else if (e.length) {
                this.model = t || "rgb", o = p[this.model].channels;
                var i = f.call(e, 0, o);
                this.color = y(i, o), this.valpha = "number" == typeof e[o] ? e[o] : 1
            } else if ("number" == typeof e) e &= 16777215, this.model = "rgb", this.color = [e >> 16 & 255, e >> 8 & 255, 255 & e], this.valpha = 1; else {
                this.valpha = 1;
                var n = Object.keys(e);
                "alpha" in e && (n.splice(n.indexOf("alpha"), 1), this.valpha = "number" == typeof e.alpha ? e.alpha : 0);
                var a = n.sort().join("");
                if (!(a in v)) throw new Error("Unable to parse color from object: " + JSON.stringify(e));
                this.model = v[a];
                for (var l = p[this.model].labels, s = [], c = 0; c < l.length; c++) s.push(e[l[c]]);
                this.color = y(s)
            }
            if (k[this.model]) for (o = p[this.model].channels, c = 0; c < o; c++) {
                var u = k[this.model][c];
                u && (this.color[c] = u(this.color[c]))
            }
            this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
        }

        function r(o, r, i) {
            return (o = Array.isArray(o) ? o : [o]).forEach(function (e) {
                (k[e] || (k[e] = []))[r] = i
            }), o = o[0], function (e) {
                var t;
                return arguments.length ? (i && (e = i(e)), (t = this[o]()).color[r] = e) : (t = this[o]().color[r], i && (t = i(t))), t
            }
        }

        function i(t) {
            return function (e) {
                return Math.max(0, Math.min(t, e))
            }
        }

        function y(e, t) {
            for (var o = 0; o < t; o++) "number" != typeof e[o] && (e[o] = 0);
            return e
        }

        g.prototype = {
            toString: function () {
                return this.string()
            },
            toJSON: function () {
                return this[this.model]()
            },
            string: function (e) {
                var t = this.model in h.to ? this : this.rgb(),
                    o = 1 === (t = t.round("number" == typeof e ? e : 1)).valpha ? t.color : t.color.concat(this.valpha);
                return h.to[t.model](o)
            },
            percentString: function (e) {
                var t = this.rgb().round("number" == typeof e ? e : 1),
                    o = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
                return h.to.rgb.percent(o)
            },
            array: function () {
                return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
            },
            object: function () {
                for (var e = {}, t = p[this.model].channels, o = p[this.model].labels, r = 0; r < t; r++) e[o[r]] = this.color[r];
                return 1 !== this.valpha && (e.alpha = this.valpha), e
            },
            unitArray: function () {
                var e = this.rgb().color;
                return e[0] /= 255, e[1] /= 255, e[2] /= 255, 1 !== this.valpha && e.push(this.valpha), e
            },
            unitObject: function () {
                var e = this.rgb().object();
                return e.r /= 255, e.g /= 255, e.b /= 255, 1 !== this.valpha && (e.alpha = this.valpha), e
            },
            round: function (e) {
                return e = Math.max(e || 0, 0), new g(this.color.map((o = e, function (e) {
                    return t = o, Number(e.toFixed(t));
                    var t
                })).concat(this.valpha), this.model);
                var o
            },
            alpha: function (e) {
                return arguments.length ? new g(this.color.concat(Math.max(0, Math.min(1, e))), this.model) : this.valpha
            },
            red: r("rgb", 0, i(255)),
            green: r("rgb", 1, i(255)),
            blue: r("rgb", 2, i(255)),
            hue: r(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (e) {
                return (e % 360 + 360) % 360
            }),
            saturationl: r("hsl", 1, i(100)),
            lightness: r("hsl", 2, i(100)),
            saturationv: r("hsv", 1, i(100)),
            value: r("hsv", 2, i(100)),
            chroma: r("hcg", 1, i(100)),
            gray: r("hcg", 2, i(100)),
            white: r("hwb", 1, i(100)),
            wblack: r("hwb", 2, i(100)),
            cyan: r("cmyk", 0, i(100)),
            magenta: r("cmyk", 1, i(100)),
            yellow: r("cmyk", 2, i(100)),
            black: r("cmyk", 3, i(100)),
            x: r("xyz", 0, i(100)),
            y: r("xyz", 1, i(100)),
            z: r("xyz", 2, i(100)),
            l: r("lab", 0, i(100)),
            a: r("lab", 1),
            b: r("lab", 2),
            keyword: function (e) {
                return arguments.length ? new g(e) : p[this.model].keyword(this.color)
            },
            hex: function (e) {
                return arguments.length ? new g(e) : h.to.hex(this.rgb().round().color)
            },
            rgbNumber: function () {
                var e = this.rgb().color;
                return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2]
            },
            luminosity: function () {
                for (var e = this.rgb().color, t = [], o = 0; o < e.length; o++) {
                    var r = e[o] / 255;
                    t[o] = r <= .03928 ? r / 12.92 : Math.pow((.055 + r) / 1.055, 2.4)
                }
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            },
            contrast: function (e) {
                var t = this.luminosity(), o = e.luminosity();
                return o < t ? (t + .05) / (o + .05) : (o + .05) / (t + .05)
            },
            level: function (e) {
                var t = this.contrast(e);
                return 7.1 <= t ? "AAA" : 4.5 <= t ? "AA" : ""
            },
            isDark: function () {
                var e = this.rgb().color;
                return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
            },
            isLight: function () {
                return !this.isDark()
            },
            negate: function () {
                for (var e = this.rgb(), t = 0; t < 3; t++) e.color[t] = 255 - e.color[t];
                return e
            },
            lighten: function (e) {
                var t = this.hsl();
                return t.color[2] += t.color[2] * e, t
            },
            darken: function (e) {
                var t = this.hsl();
                return t.color[2] -= t.color[2] * e, t
            },
            saturate: function (e) {
                var t = this.hsl();
                return t.color[1] += t.color[1] * e, t
            },
            desaturate: function (e) {
                var t = this.hsl();
                return t.color[1] -= t.color[1] * e, t
            },
            whiten: function (e) {
                var t = this.hwb();
                return t.color[1] += t.color[1] * e, t
            },
            blacken: function (e) {
                var t = this.hwb();
                return t.color[2] += t.color[2] * e, t
            },
            grayscale: function () {
                var e = this.rgb().color, t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                return g.rgb(t, t, t)
            },
            fade: function (e) {
                return this.alpha(this.valpha - this.valpha * e)
            },
            opaquer: function (e) {
                return this.alpha(this.valpha + this.valpha * e)
            },
            rotate: function (e) {
                var t = this.hsl(), o = t.color[0];
                return o = (o = (o + e) % 360) < 0 ? 360 + o : o, t.color[0] = o, t
            },
            mix: function (e, t) {
                if (!e || !e.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
                var o = e.rgb(), r = this.rgb(), i = void 0 === t ? .5 : t, n = 2 * i - 1, a = o.alpha() - r.alpha(),
                    l = (1 + (n * a == -1 ? n : (n + a) / (1 + n * a))) / 2, s = 1 - l;
                return g.rgb(l * o.red() + s * r.red(), l * o.green() + s * r.green(), l * o.blue() + s * r.blue(), o.alpha() * i + r.alpha() * (1 - i))
            }
        }, Object.keys(p).forEach(function (o) {
            var r;
            -1 === d.indexOf(o) && (r = p[o].channels, g.prototype[o] = function () {
                if (this.model === o) return new g(this);
                if (arguments.length) return new g(arguments, o);
                var e, t = "number" == typeof arguments[r] ? r : this.valpha;
                return new g((e = p[this.model][o].raw(this.color), (Array.isArray(e) ? e : [e]).concat(t)), o)
            }, g[o] = function (e) {
                return "number" == typeof e && (e = y(f.call(arguments), r)), new g(e, o)
            })
        }), e.exports = g
    }, function (e, t, o) {
        var a = o(5), i = o(18), r = {};
        for (var n in a) a.hasOwnProperty(n) && (r[a[n]] = n);
        var l = e.exports = {to: {}, get: {}};

        function s(e, t, o) {
            return Math.min(Math.max(t, e), o)
        }

        function c(e) {
            var t = e.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t
        }

        l.get = function (e) {
            var t, o;
            switch (e.substring(0, 3).toLowerCase()) {
                case"hsl":
                    t = l.get.hsl(e), o = "hsl";
                    break;
                case"hwb":
                    t = l.get.hwb(e), o = "hwb";
                    break;
                default:
                    t = l.get.rgb(e), o = "rgb"
            }
            return t ? {model: o, value: t} : null
        }, l.get.rgb = function (e) {
            if (!e) return null;
            var t, o, r, i = [0, 0, 0, 1];
            if (t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
                for (r = t[2], t = t[1], o = 0; o < 3; o++) {
                    var n = 2 * o;
                    i[o] = parseInt(t.slice(n, 2 + n), 16)
                }
                r && (i[3] = Math.round(parseInt(r, 16) / 255 * 100) / 100)
            } else if (t = e.match(/^#([a-f0-9]{3,4})$/i)) {
                for (r = (t = t[1])[3], o = 0; o < 3; o++) i[o] = parseInt(t[o] + t[o], 16);
                r && (i[3] = Math.round(parseInt(r + r, 16) / 255 * 100) / 100)
            } else if (t = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
                for (o = 0; o < 3; o++) i[o] = parseInt(t[o + 1], 0);
                t[4] && (i[3] = parseFloat(t[4]))
            } else {
                if (!(t = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) return (t = e.match(/(\D+)/)) ? "transparent" === t[1] ? [0, 0, 0, 0] : (i = a[t[1]]) ? (i[3] = 1, i) : null : null;
                for (o = 0; o < 3; o++) i[o] = Math.round(2.55 * parseFloat(t[o + 1]));
                t[4] && (i[3] = parseFloat(t[4]))
            }
            for (o = 0; o < 3; o++) i[o] = s(i[o], 0, 255);
            return i[3] = s(i[3], 0, 1), i
        }, l.get.hsl = function (e) {
            if (!e) return null;
            var t = e.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
            if (t) {
                var o = parseFloat(t[4]);
                return [(parseFloat(t[1]) + 360) % 360, s(parseFloat(t[2]), 0, 100), s(parseFloat(t[3]), 0, 100), s(isNaN(o) ? 1 : o, 0, 1)]
            }
            return null
        }, l.get.hwb = function (e) {
            if (!e) return null;
            var t = e.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
            if (t) {
                var o = parseFloat(t[4]);
                return [(parseFloat(t[1]) % 360 + 360) % 360, s(parseFloat(t[2]), 0, 100), s(parseFloat(t[3]), 0, 100), s(isNaN(o) ? 1 : o, 0, 1)]
            }
            return null
        }, l.to.hex = function () {
            var e = i(arguments);
            return "#" + c(e[0]) + c(e[1]) + c(e[2]) + (e[3] < 1 ? c(Math.round(255 * e[3])) : "")
        }, l.to.rgb = function () {
            var e = i(arguments);
            return e.length < 4 || 1 === e[3] ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")"
        }, l.to.rgb.percent = function () {
            var e = i(arguments), t = Math.round(e[0] / 255 * 100), o = Math.round(e[1] / 255 * 100),
                r = Math.round(e[2] / 255 * 100);
            return e.length < 4 || 1 === e[3] ? "rgb(" + t + "%, " + o + "%, " + r + "%)" : "rgba(" + t + "%, " + o + "%, " + r + "%, " + e[3] + ")"
        }, l.to.hsl = function () {
            var e = i(arguments);
            return e.length < 4 || 1 === e[3] ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")"
        }, l.to.hwb = function () {
            var e = i(arguments), t = "";
            return 4 <= e.length && 1 !== e[3] && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
        }, l.to.keyword = function (e) {
            return r[e.slice(0, 3)]
        }
    }, function (e, t, o) {
        "use strict";
        var n = o(19), a = Array.prototype.concat, l = Array.prototype.slice, r = e.exports = function (e) {
            for (var t = [], o = 0, r = e.length; o < r; o++) {
                var i = e[o];
                n(i) ? t = a.call(t, l.call(i)) : t.push(i)
            }
            return t
        };
        r.wrap = function (e) {
            return function () {
                return e(r(arguments))
            }
        }
    }, function (e, t, o) {
        "use strict";
        e.exports = function (e) {
            return !!e && (e instanceof Array || Array.isArray(e) || 0 <= e.length && e.splice instanceof Function)
        }
    }, function (e, t, o) {
        var i = o(6), n = o(21), a = {};

        function l(t) {
            function e(e) {
                return null == e ? e : (1 < arguments.length && (e = Array.prototype.slice.call(arguments)), t(e))
            }

            return "conversion" in t && (e.conversion = t.conversion), e
        }

        function s(i) {
            function e(e) {
                if (null == e) return e;
                1 < arguments.length && (e = Array.prototype.slice.call(arguments));
                var t = i(e);
                if ("object" == typeof t) for (var o = t.length, r = 0; r < o; r++) t[r] = Math.round(t[r]);
                return t
            }

            return "conversion" in i && (e.conversion = i.conversion), e
        }

        Object.keys(i).forEach(function (o) {
            a[o] = {}, Object.defineProperty(a[o], "channels", {value: i[o].channels}), Object.defineProperty(a[o], "labels", {value: i[o].labels});
            var r = n(o);
            Object.keys(r).forEach(function (e) {
                var t = r[e];
                a[o][e] = s(t), a[o][e].raw = l(t)
            })
        }), e.exports = a
    }, function (e, t, o) {
        var c = o(6);

        function l(e) {
            var t = function () {
                for (var e = {}, t = Object.keys(c), o = t.length, r = 0; r < o; r++) e[t[r]] = {
                    distance: -1,
                    parent: null
                };
                return e
            }(), o = [e];
            for (t[e].distance = 0; o.length;) for (var r = o.pop(), i = Object.keys(c[r]), n = i.length, a = 0; a < n; a++) {
                var l = i[a], s = t[l];
                -1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, o.unshift(l))
            }
            return t
        }

        function n(t, o) {
            return function (e) {
                return o(t(e))
            }
        }

        function s(e, t) {
            for (var o = [t[e].parent, e], r = c[t[e].parent][e], i = t[e].parent; t[i].parent;) o.unshift(t[i].parent), r = n(c[t[i].parent][i], r), i = t[i].parent;
            return r.conversion = o, r
        }

        e.exports = function (e) {
            for (var t = l(e), o = {}, r = Object.keys(t), i = r.length, n = 0; n < i; n++) {
                var a = r[n];
                null !== t[a].parent && (o[a] = s(a, t))
            }
            return o
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n = l(o(0)), a = l(o(2));

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = (r(c, [{
            key: "bind", value: function () {
                this.colorpicker.options.color ? this.color = this.createColor(this.colorpicker.options.color) : !this.color && this.colorpicker.inputHandler.getValue() && (this.color = this.createColor(this.colorpicker.inputHandler.getValue(), this.colorpicker.options.autoInputFallback))
            }
        }, {
            key: "unbind", value: function () {
                this.colorpicker.element.removeData("color")
            }
        }, {
            key: "getColorString", value: function () {
                return this.hasColor() ? this.color.string(this.format) : ""
            }
        }, {
            key: "setColorString", value: function (e) {
                var t = e ? this.createColor(e) : null;
                this.color = t || null
            }
        }, {
            key: "createColor", value: function (e, t) {
                var o = !(1 < arguments.length && void 0 !== t) || t,
                    r = new a.default(this.resolveColorDelegate(e), this.format);
                return r.isValid() || (o && (r = this.getFallbackColor()), this.colorpicker.trigger("colorpickerInvalid", r, e)), this.isAlphaEnabled() || (r.alpha = 1), r
            }
        }, {
            key: "getFallbackColor", value: function () {
                if (this.fallback && this.fallback === this.color) return this.color;
                var e = this.resolveColorDelegate(this.fallback), t = new a.default(e, this.format);
                return t.isValid() ? t : (console.warn("The fallback color is invalid. Falling back to the previous color or black if any."), this.color ? this.color : new a.default("#000000", this.format))
            }
        }, {
            key: "assureColor", value: function () {
                return this.hasColor() || (this.color = this.getFallbackColor()), this.color
            }
        }, {
            key: "resolveColorDelegate", value: function (o, e) {
                var r = !(1 < arguments.length && void 0 !== e) || e, i = !1;
                return n.default.each(this.colorpicker.extensions, function (e, t) {
                    !1 === i && (i = t.resolveColor(o, r))
                }), i || o
            }
        }, {
            key: "isInvalidColor", value: function () {
                return !this.hasColor() || !this.color.isValid()
            }
        }, {
            key: "isAlphaEnabled", value: function () {
                return !1 !== this.colorpicker.options.useAlpha
            }
        }, {
            key: "hasColor", value: function () {
                return this.color instanceof a.default
            }
        }, {
            key: "fallback", get: function () {
                return this.colorpicker.options.fallbackColor ? this.colorpicker.options.fallbackColor : this.hasColor() ? this.color : null
            }
        }, {
            key: "format", get: function () {
                return this.colorpicker.options.format ? this.colorpicker.options.format : this.hasColor() && this.color.hasTransparency() && this.color.format.match(/^hex/) ? this.isAlphaEnabled() ? "rgba" : "hex" : this.hasColor() ? this.color.format : "rgb"
            }
        }, {
            key: "color", get: function () {
                return this.colorpicker.element.data("color")
            }, set: function (e) {
                this.colorpicker.element.data("color", e), e instanceof a.default && "auto" === this.colorpicker.options.format && (this.colorpicker.options.format = this.color.format)
            }
        }]), c);

        function c(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), this.colorpicker = e
        }

        t.default = s, e.exports = t.default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function (e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        };

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var n, a = o(0), l = (n = a) && n.__esModule ? n : {default: n};
        var s = (r(c, [{
            key: "bind", value: function () {
                var e = this.picker = (0, l.default)(this.options.template);
                this.options.customClass && e.addClass(this.options.customClass), this.options.horizontal && e.addClass("colorpicker-horizontal"), this._supportsAlphaBar() ? (this.options.useAlpha = !0, e.addClass("colorpicker-with-alpha")) : this.options.useAlpha = !1
            }
        }, {
            key: "attach", value: function () {
                var e = this.colorpicker.container ? this.colorpicker.container : null;
                e && this.picker.appendTo(e)
            }
        }, {
            key: "unbind", value: function () {
                this.picker.remove()
            }
        }, {
            key: "_supportsAlphaBar", value: function () {
                return (this.options.useAlpha || this.colorpicker.colorHandler.hasColor() && this.color.hasTransparency()) && !1 !== this.options.useAlpha && (!this.options.format || this.options.format && !this.options.format.match(/^hex([36])?$/i))
            }
        }, {
            key: "update", value: function () {
                var e, t, o, r, i, n, a, l;
                this.colorpicker.colorHandler.hasColor() && (t = (e = !0 !== this.options.horizontal) ? this.options.sliders : this.options.slidersHorz, o = this.picker.find(".colorpicker-saturation .colorpicker-guide"), r = this.picker.find(".colorpicker-hue .colorpicker-guide"), i = this.picker.find(".colorpicker-alpha .colorpicker-guide"), n = this.color.toHsvaRatio(), r.length && r.css(e ? "top" : "left", (e ? t.hue.maxTop : t.hue.maxLeft) * (1 - n.h)), i.length && i.css(e ? "top" : "left", (e ? t.alpha.maxTop : t.alpha.maxLeft) * (1 - n.a)), o.length && o.css({
                    top: t.saturation.maxTop - n.v * t.saturation.maxTop,
                    left: n.s * t.saturation.maxLeft
                }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.getCloneHueOnly().toHexString()), a = this.color.toHexString(), l = "", l = this.options.horizontal ? "linear-gradient(to right, " + a + " 0%, transparent 100%)" : "linear-gradient(to bottom, " + a + " 0%, transparent 100%)", this.picker.find(".colorpicker-alpha-color").css("background", l))
            }
        }, {
            key: "options", get: function () {
                return this.colorpicker.options
            }
        }, {
            key: "color", get: function () {
                return this.colorpicker.colorHandler.color
            }
        }]), c);

        function c(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), this.colorpicker = e, this.picker = null
        }

        t.default = s, e.exports = t.default
    }, function (e, t, o) {
        "use strict";

        function r(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = (function (e, t, o) {
            return t && r(e.prototype, t), o && r(e, o), e
        }(n, [{
            key: "hasAddon", value: function () {
                return !!this.addon
            }
        }, {
            key: "bind", value: function () {
                this.addon = this.colorpicker.options.addon ? this.colorpicker.element.find(this.colorpicker.options.addon) : null, this.addon && 0 === this.addon.length && (this.addon = null)
            }
        }, {
            key: "unbind", value: function () {
                this.hasAddon() && this.addon.off(".colorpicker")
            }
        }, {
            key: "update", value: function () {
                var e, t;
                this.colorpicker.colorHandler.hasColor() && this.hasAddon() && (e = {background: this.colorpicker.colorHandler.getColorString()}, 0 < (t = this.addon.find("i").eq(0)).length ? t.css(e) : this.addon.css(e))
            }
        }]), n);

        function n(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), this.colorpicker = e, this.addon = null
        }

        t.default = i, e.exports = t.default
    }], i.c = n, i.d = function (e, t, o) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) i.d(o, r, function (e) {
            return t[e]
        }.bind(null, r));
        return o
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 7);

    function i(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {i: e, l: !1, exports: {}};
        return r[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }

    var r, n
});
