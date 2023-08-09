"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "../../node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js"(exports, module2) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module2.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

// ../../node_modules/.pnpm/color-name@1.1.3/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "../../node_modules/.pnpm/color-name@1.1.3/node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// ../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/conversions.js"(exports, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module2.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args2) {
      var r = args2[0];
      var g = args2[1];
      var b = args2[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args2)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args2) {
      return convert.rgb.ansi16(convert.hsv.rgb(args2), args2[2]);
    };
    convert.rgb.ansi256 = function(args2) {
      var r = args2[0];
      var g = args2[1];
      var b = args2[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args2) {
      var color = args2 % 10;
      if (color === 0 || color === 7) {
        if (args2 > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args2 > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args2) {
      if (args2 >= 232) {
        var c = (args2 - 232) * 10 + 8;
        return [c, c, c];
      }
      args2 -= 16;
      var rem;
      var r = Math.floor(args2 / 36) / 5 * 255;
      var g = Math.floor((rem = args2 % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args2) {
      var integer = ((Math.round(args2[0]) & 255) << 16) + ((Math.round(args2[1]) & 255) << 8) + (Math.round(args2[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args2) {
      var match = args2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args2) {
      return [args2[0] / 100 * 255, args2[0] / 100 * 255, args2[0] / 100 * 255];
    };
    convert.gray.hsl = convert.gray.hsv = function(args2) {
      return [0, 0, args2[0]];
    };
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// ../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/route.js
var require_route = __commonJS({
  "../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/route.js"(exports, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args2) {
        return to(from(args2));
      };
    }
    function wrapConversion(toModel, graph) {
      var path = [graph[toModel].parent, toModel];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// ../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "../../node_modules/.pnpm/color-convert@1.9.3/node_modules/color-convert/index.js"(exports, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = function(args2) {
        if (args2 === void 0 || args2 === null) {
          return args2;
        }
        if (arguments.length > 1) {
          args2 = Array.prototype.slice.call(arguments);
        }
        return fn(args2);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      var wrappedFn = function(args2) {
        if (args2 === void 0 || args2 === null) {
          return args2;
        }
        if (arguments.length > 1) {
          args2 = Array.prototype.slice.call(arguments);
        }
        var result = fn(args2);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// ../../node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "../../node_modules/.pnpm/ansi-styles@3.2.1/node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var colorConvert = require_color_convert();
    var wrapAnsi16 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => function() {
      const rgb = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39],
          // Bright color
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.grey = styles.color.gray;
      for (const groupName of Object.keys(styles)) {
        const group = styles[groupName];
        for (const styleName of Object.keys(group)) {
          const style = group[styleName];
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
      }
      const ansi2ansi = (n) => n;
      const rgb2rgb = (r, g, b) => [r, g, b];
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 0)
      };
      styles.color.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 0)
      };
      styles.color.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 0)
      };
      styles.bgColor.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 10)
      };
      styles.bgColor.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 10)
      };
      styles.bgColor.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 10)
      };
      for (let key of Object.keys(colorConvert)) {
        if (typeof colorConvert[key] !== "object") {
          continue;
        }
        const suite = colorConvert[key];
        if (key === "ansi16") {
          key = "ansi";
        }
        if ("ansi16" in suite) {
          styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
          styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
        }
        if ("ansi256" in suite) {
          styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
          styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
        }
        if ("rgb" in suite) {
          styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
          styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
        }
      }
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// ../../node_modules/.pnpm/has-flag@3.0.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../node_modules/.pnpm/has-flag@3.0.0/node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv) => {
      argv = argv || process.argv;
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const pos = argv.indexOf(prefix + flag);
      const terminatorPos = argv.indexOf("--");
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// ../../node_modules/.pnpm/supports-color@5.5.0/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../node_modules/.pnpm/supports-color@5.5.0/node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      const min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// ../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/templates.js
var require_templates = __commonJS({
  "../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/templates.js"(exports, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, args2) {
      const results = [];
      const chunks2 = args2.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks2) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args2 = parseArguments(name, matches[2]);
          results.push([name].concat(args2));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    module2.exports = (chalk, tmp) => {
      const styles = [];
      const chunks2 = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join("");
          chunk = [];
          chunks2.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks2.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks2.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks2.join("");
    };
  }
});

// ../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/index.js
var require_chalk = __commonJS({
  "../../node_modules/.pnpm/chalk@2.4.2/node_modules/chalk/index.js"(exports, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles();
    var stdoutColor = require_supports_color().stdout;
    var template = require_templates();
    var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
    var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
    var skipModels = /* @__PURE__ */ new Set(["gray"]);
    var styles = /* @__PURE__ */ Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = stdoutColor ? stdoutColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
    }
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk = {};
        applyOptions(chalk, options);
        chalk.template = function() {
          const args2 = [].slice.call(arguments);
          return chalkTag.apply(null, [chalk.template].concat(args2));
        };
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = Chalk;
        return chalk.template;
      }
      applyOptions(this, options);
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "\x1B[94m";
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
        }
      };
    }
    styles.visible = {
      get() {
        return build.call(this, this._styles || [], true, "visible");
      }
    };
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, styles);
    function build(_styles, _empty, key) {
      const builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      builder._empty = _empty;
      const self = this;
      Object.defineProperty(builder, "level", {
        enumerable: true,
        get() {
          return self.level;
        },
        set(level) {
          self.level = level;
        }
      });
      Object.defineProperty(builder, "enabled", {
        enumerable: true,
        get() {
          return self.enabled;
        },
        set(enabled) {
          self.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      const args2 = arguments;
      const argsLen = args2.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return "";
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += " " + args2[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return this._empty ? "" : str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = "";
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function chalkTag(chalk, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(" ");
      }
      const args2 = [].slice.call(arguments, 2);
      const parts = [strings.raw[0]];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args2[i - 1]).replace(/[{}\\]/g, "\\$&"));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk, parts.join(""));
    }
    Object.defineProperties(Chalk.prototype, styles);
    module2.exports = Chalk();
    module2.exports.supportsColor = stdoutColor;
    module2.exports.default = module2.exports;
  }
});

// ../../node_modules/.pnpm/camelcase@5.0.0/node_modules/camelcase/index.js
var require_camelcase = __commonJS({
  "../../node_modules/.pnpm/camelcase@5.0.0/node_modules/camelcase/index.js"(exports, module2) {
    "use strict";
    var preserveCamelCase = (input) => {
      let isLastCharLower = false;
      let isLastCharUpper = false;
      let isLastLastCharUpper = false;
      for (let i = 0; i < input.length; i++) {
        const c = input[i];
        if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
          input = input.slice(0, i) + "-" + input.slice(i);
          isLastCharLower = false;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = true;
          i++;
        } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
          input = input.slice(0, i - 1) + "-" + input.slice(i - 1);
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = false;
          isLastCharLower = true;
        } else {
          isLastCharLower = c.toLowerCase() === c;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = c.toUpperCase() === c;
        }
      }
      return input;
    };
    module2.exports = (input, options) => {
      options = Object.assign({
        pascalCase: false
      }, options);
      const postProcess = (x) => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;
      if (Array.isArray(input)) {
        input = input.map((x) => x.trim()).filter((x) => x.length).join("-");
      } else {
        input = input.trim();
      }
      if (input.length === 0) {
        return "";
      }
      if (input.length === 1) {
        return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
      }
      if (/^[a-z\d]+$/.test(input)) {
        return postProcess(input);
      }
      const hasUpperCase = input !== input.toLowerCase();
      if (hasUpperCase) {
        input = preserveCamelCase(input);
      }
      input = input.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
      return postProcess(input);
    };
  }
});

// ../../node_modules/.pnpm/leven@2.1.0/node_modules/leven/index.js
var require_leven = __commonJS({
  "../../node_modules/.pnpm/leven@2.1.0/node_modules/leven/index.js"(exports, module2) {
    "use strict";
    var arr = [];
    var charCodeCache = [];
    module2.exports = function(a, b) {
      if (a === b) {
        return 0;
      }
      var swap = a;
      if (a.length > b.length) {
        a = b;
        b = swap;
      }
      var aLen = a.length;
      var bLen = b.length;
      if (aLen === 0) {
        return bLen;
      }
      if (bLen === 0) {
        return aLen;
      }
      while (aLen > 0 && a.charCodeAt(~-aLen) === b.charCodeAt(~-bLen)) {
        aLen--;
        bLen--;
      }
      if (aLen === 0) {
        return bLen;
      }
      var start = 0;
      while (start < aLen && a.charCodeAt(start) === b.charCodeAt(start)) {
        start++;
      }
      aLen -= start;
      bLen -= start;
      if (aLen === 0) {
        return bLen;
      }
      var bCharCode;
      var ret;
      var tmp;
      var tmp2;
      var i = 0;
      var j = 0;
      while (i < aLen) {
        charCodeCache[start + i] = a.charCodeAt(start + i);
        arr[i] = ++i;
      }
      while (j < bLen) {
        bCharCode = b.charCodeAt(start + j);
        tmp = j++;
        ret = j;
        for (i = 0; i < aLen; i++) {
          tmp2 = bCharCode === charCodeCache[start + i] ? tmp : tmp + 1;
          tmp = arr[i];
          ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
        }
      }
      return ret;
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/utils.js"(exports, module2) {
    "use strict";
    var { spawn: spawn2 } = require("child_process");
    var path = require("path");
    var camelcase = require_camelcase();
    var leven = require_leven();
    function similarityBestMatch(mainString, targetStrings) {
      let bestMatch;
      const ratings = targetStrings.map((targetString) => {
        const score = leven(mainString, targetString);
        const res = {
          target: targetString,
          rating: leven(mainString, targetString)
        };
        if (!bestMatch || score < bestMatch.rating)
          bestMatch = res;
        return res;
      });
      return {
        ratings,
        bestMatch
      };
    }
    module2.exports = {
      handleType(value) {
        let type = value;
        if (typeof value !== "function") {
          type = value.constructor;
        }
        switch (type) {
          case String:
            return ["[value]"];
          case Array:
            return ["<list>"];
          case Number:
          case parseInt:
            return ["<n>", parseInt];
          default:
            return [""];
        }
      },
      readOption(option) {
        let value = option.defaultValue;
        const contents = {};
        for (const name of option.usage) {
          const fromArgs = this.raw[name];
          if (typeof fromArgs !== "undefined") {
            value = fromArgs;
            break;
          }
        }
        for (let name of option.usage) {
          let propVal = value;
          if (Array.isArray(option.defaultValue) && typeof propVal !== typeof option.defaultValue) {
            propVal = [propVal];
          }
          if (typeof option.defaultValue !== "undefined" && typeof propVal !== typeof option.defaultValue) {
            propVal = option.defaultValue;
          }
          let condition = true;
          if (option.init) {
            if (option.init === toString) {
              condition = propVal.constructor === Number;
            }
            if (condition) {
              propVal = option.init(propVal);
            }
          }
          if (name.length > 1) {
            name = camelcase(name);
          }
          contents[name] = propVal;
        }
        return contents;
      },
      getOptions(definedSubcommand) {
        const options = {};
        const args2 = {};
        Object.assign(args2, this.raw);
        delete args2._;
        for (const option of this.details.options) {
          if (typeof option.defaultValue === "undefined") {
            continue;
          }
          Object.assign(options, this.readOption(option));
        }
        for (const option in args2) {
          if (!{}.hasOwnProperty.call(args2, option)) {
            continue;
          }
          const related = this.isDefined(option, "options");
          if (related) {
            const details = this.readOption(related);
            Object.assign(options, details);
          }
          if (!related && !definedSubcommand) {
            const availableOptions = [];
            this.details.options.forEach((opt) => {
              availableOptions.push(...opt.usage);
            });
            const suggestOption = similarityBestMatch(option, availableOptions);
            process.stdout.write(`The option "${option}" is unknown.`);
            if (suggestOption.bestMatch.rating >= 0.5) {
              process.stdout.write(" Did you mean the following one?\n");
              const suggestion = this.details.options.filter((item) => {
                for (const flag of item.usage) {
                  if (flag === suggestOption.bestMatch.target) {
                    return true;
                  }
                }
                return false;
              });
              process.stdout.write(
                this.generateDetails(suggestion)[0].trim() + "\n"
              );
              process.exit();
            } else {
              process.stdout.write(` Here's a list of all available options: 
`);
              this.showHelp();
            }
          }
        }
        return options;
      },
      generateExamples() {
        const { examples } = this.details;
        const parts = [];
        for (const item in examples) {
          if (!{}.hasOwnProperty.call(examples, item)) {
            continue;
          }
          const usage = this.printSubColor("$ " + examples[item].usage);
          const description = this.printMainColor("- " + examples[item].description);
          parts.push(`  ${description}
    ${usage}
`);
        }
        return parts;
      },
      generateDetails(kind) {
        const items = [];
        const passed = [].concat(
          typeof kind === "string" ? this.details[kind] : kind
        );
        for (let i = 0, l = passed.length; i < l; i++) {
          items.push(Object.assign({}, passed[i]));
        }
        const parts = [];
        const isCmd = kind === "commands";
        items.sort((a, b) => {
          const first = isCmd ? a.usage : a.usage[1];
          const second = isCmd ? b.usage : b.usage[1];
          switch (true) {
            case first < second:
              return -1;
            case first > second:
              return 1;
            default:
              return 0;
          }
        });
        for (const item in items) {
          if (!{}.hasOwnProperty.call(items, item)) {
            continue;
          }
          let { usage } = items[item];
          let initial = items[item].defaultValue;
          if (usage.constructor === Array) {
            if (isCmd) {
              usage = usage.join(", ");
            } else {
              const isVersion = usage.indexOf("v");
              usage = `-${usage[0]}, --${usage[1]}`;
              if (!initial) {
                initial = items[item].init;
              }
              usage += initial && isVersion === -1 ? " " + this.handleType(initial)[0] : "";
            }
          }
          items[item].usage = usage;
        }
        const longest = items.slice().sort((a, b) => {
          return b.usage.length - a.usage.length;
        })[0].usage.length;
        for (const item of items) {
          let { usage, description, defaultValue } = item;
          const difference = longest - usage.length;
          usage += " ".repeat(difference);
          if (typeof defaultValue !== "undefined") {
            if (typeof defaultValue === "boolean") {
              description += ` (${defaultValue ? "enabled" : "disabled"} by default)`;
            } else {
              description += ` (defaults to ${JSON.stringify(defaultValue)})`;
            }
          }
          parts.push(
            "  " + this.printMainColor(usage) + "  " + this.printSubColor(description)
          );
        }
        return parts;
      },
      runCommand(details, options) {
        if (details.usage === "help" && !this.config.help) {
          details.init = false;
        }
        if (details.usage === "version" && !this.config.version) {
          details.init = false;
        }
        if (details.init) {
          const sub = [].concat(this.sub);
          sub.shift();
          return details.init.bind(this)(details.usage, sub, options);
        }
        const subCommand = Array.isArray(details.usage) ? details.usage[0] : details.usage;
        let full = this.binary + "-" + subCommand;
        const args2 = process.argv.slice(2);
        for (let i = 0, l = args2.length; i < l; i++) {
          if (args2[i] === subCommand) {
            args2.splice(i, 1);
            break;
          }
        }
        if (process.platform === "win32") {
          const binaryExt = path.extname(this.binary);
          const mainModule = process.env.APPVEYOR ? "_fixture" : process.mainModule.filename;
          full = `${mainModule}-${subCommand}`;
          if (path.extname(this.binary)) {
            full = `${mainModule.replace(binaryExt, "")}-${subCommand}${binaryExt}`;
          }
          args2.unshift(full);
          this.child = spawn2(process.execPath, args2, {
            stdio: "inherit"
          });
        } else {
          this.child = spawn2(full, args2, {
            stdio: "inherit"
          });
        }
        this.child.on("error", (err) => {
          throw err;
        });
        this.child.on("exit", (code, signal) => {
          process.on("exit", () => {
            this.child = null;
            if (signal) {
              process.kill(process.pid, signal);
            } else {
              process.exit(code);
            }
          });
        });
        process.on("SIGINT", () => {
          if (this.child) {
            this.child.kill("SIGINT");
            this.child.kill("SIGTERM");
          }
        });
      },
      checkHelp() {
        this.option("help", "Output usage information");
        this.command("help", "Display help", this.showHelp);
        if (this.optionWasProvided("help")) {
          this.showHelp();
        }
      },
      checkVersion() {
        this.option("version", "Output the version number");
        this.command("version", "Display version", this.showVersion);
        if (this.optionWasProvided("version")) {
          this.showVersion();
        }
      },
      isDefined(name, list) {
        const children = this.details[list];
        for (const child of children) {
          const { usage } = child;
          const type = usage.constructor;
          if (type === Array && usage.indexOf(name) > -1) {
            return child;
          }
          if (type === String && usage === name) {
            return child;
          }
        }
        return false;
      },
      optionWasProvided(name) {
        const option = this.isDefined(name, "options");
        return option && (this.raw[option.usage[0]] || this.raw[option.usage[1]]);
      }
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/option.js
var require_option = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/option.js"(exports, module2) {
    "use strict";
    module2.exports = function(name, description, defaultValue, init) {
      let usage = [];
      const assignShort = (name2, options, short) => {
        if (options.find((flagName) => flagName.usage[0] === short)) {
          short = name2.charAt(0).toUpperCase();
        }
        return [short, name2];
      };
      switch (name.constructor) {
        case String:
          usage = assignShort(name, this.details.options, name.charAt(0));
          break;
        case Array:
          usage = usage.concat(name);
          break;
        default:
          throw new Error("Invalid name for option");
      }
      if (usage.length > 0 && usage[0].length > 1) {
        throw new Error("Short version of option is longer than 1 char");
      }
      const optionDetails = {
        defaultValue,
        usage,
        description
      };
      let defaultIsWrong;
      switch (defaultValue) {
        case false:
          defaultIsWrong = true;
          break;
        case null:
          defaultIsWrong = true;
          break;
        case void 0:
          defaultIsWrong = true;
          break;
        default:
          defaultIsWrong = false;
      }
      if (typeof init === "function") {
        optionDetails.init = init;
      } else if (!defaultIsWrong) {
        optionDetails.init = this.handleType(defaultValue)[1];
      }
      this.details.options.push(optionDetails);
      return this;
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/options.js
var require_options = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/options.js"(exports, module2) {
    "use strict";
    module2.exports = function(list) {
      if (list.constructor !== Array) {
        throw new Error("Item passed to .options is not an array");
      }
      for (const item of list) {
        const preset = item.defaultValue;
        const init = item.init || false;
        this.option(item.name, item.description, preset, init);
      }
      return this;
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/command.js
var require_command = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/command.js"(exports, module2) {
    "use strict";
    module2.exports = function(usage, description, init, aliases) {
      if (Array.isArray(init)) {
        aliases = init;
        init = void 0;
      }
      if (aliases && Array.isArray(aliases)) {
        usage = [].concat([usage], aliases);
      }
      this.details.commands.push({
        usage,
        description,
        init: typeof init === "function" ? init : false
      });
      return this;
    };
  }
});

// ../../node_modules/.pnpm/mri@1.1.4/node_modules/mri/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/mri@1.1.4/node_modules/mri/lib/index.js"(exports, module2) {
    function toArr(any) {
      return any == null ? [] : Array.isArray(any) ? any : [any];
    }
    function toVal(out, key, val, opts) {
      var x, old = out[key], nxt = !!~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : !!~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
      out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
    }
    module2.exports = function(args2, opts) {
      args2 = args2 || [];
      opts = opts || {};
      var k, arr, arg, name, val, out = { _: [] };
      var i = 0, j = 0, idx = 0, len = args2.length;
      const alibi = opts.alias !== void 0;
      const strict = opts.unknown !== void 0;
      const defaults = opts.default !== void 0;
      opts.alias = opts.alias || {};
      opts.string = toArr(opts.string);
      opts.boolean = toArr(opts.boolean);
      if (alibi) {
        for (k in opts.alias) {
          arr = opts.alias[k] = toArr(opts.alias[k]);
          for (i = 0; i < arr.length; i++) {
            (opts.alias[arr[i]] = arr.concat(k)).splice(i, 1);
          }
        }
      }
      opts.boolean.forEach((key) => {
        opts.boolean = opts.boolean.concat(opts.alias[key] = opts.alias[key] || []);
      });
      opts.string.forEach((key) => {
        opts.string = opts.string.concat(opts.alias[key] = opts.alias[key] || []);
      });
      if (defaults) {
        for (k in opts.default) {
          opts.alias[k] = opts.alias[k] || [];
          (opts[typeof opts.default[k]] || []).push(k);
        }
      }
      const keys = strict ? Object.keys(opts.alias) : [];
      for (i = 0; i < len; i++) {
        arg = args2[i];
        if (arg === "--") {
          out._ = out._.concat(args2.slice(++i));
          break;
        }
        for (j = 0; j < arg.length; j++) {
          if (arg.charCodeAt(j) !== 45)
            break;
        }
        if (j === 0) {
          out._.push(arg);
        } else if (arg.substring(j, j + 3) === "no-") {
          name = arg.substring(j + 3);
          if (strict && !~keys.indexOf(name)) {
            return opts.unknown(arg);
          }
          out[name] = false;
        } else {
          for (idx = j + 1; idx < arg.length; idx++) {
            if (arg.charCodeAt(idx) === 61)
              break;
          }
          name = arg.substring(j, idx);
          val = arg.substring(++idx) || (i + 1 === len || ("" + args2[i + 1]).charCodeAt(0) === 45 || args2[++i]);
          arr = j === 2 ? [name] : name;
          for (idx = 0; idx < arr.length; idx++) {
            name = arr[idx];
            if (strict && !~keys.indexOf(name))
              return opts.unknown("-".repeat(j) + name);
            toVal(out, name, idx + 1 < arr.length || val, opts);
          }
        }
      }
      if (defaults) {
        for (k in opts.default) {
          if (out[k] === void 0) {
            out[k] = opts.default[k];
          }
        }
      }
      if (alibi) {
        for (k in out) {
          arr = opts.alias[k] || [];
          while (arr.length > 0) {
            out[arr.shift()] = out[k];
          }
        }
      }
      return out;
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/parse.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var parser = require_lib();
    module2.exports = function(argv, options) {
      Object.assign(this.config, options);
      if (Array.isArray(this.config.mainColor)) {
        for (const item in this.config.mainColor) {
          if (!{}.hasOwnProperty.call(this.config.mainColor, item)) {
            continue;
          }
          this.printMainColor = this.printMainColor[this.config.mainColor[item]];
        }
      } else {
        this.printMainColor = this.printMainColor[this.config.mainColor];
      }
      if (Array.isArray(this.config.subColor)) {
        for (const item in this.config.subColor) {
          if (!{}.hasOwnProperty.call(this.config.subColor, item)) {
            continue;
          }
          this.printSubColor = this.printSubColor[this.config.subColor[item]];
        }
      } else {
        this.printSubColor = this.printSubColor[this.config.subColor];
      }
      this.raw = parser(argv.slice(1), this.config.mri || this.config.minimist);
      this.binary = path.basename(this.raw._[0]);
      if (this.config.version) {
        this.checkVersion();
      }
      if (this.config.help) {
        this.checkHelp();
      }
      const subCommand = this.raw._[1];
      const args2 = {};
      const defined = this.isDefined(subCommand, "commands");
      const optionList = this.getOptions(defined);
      Object.assign(args2, this.raw);
      args2._.shift();
      this.sub = args2._;
      if (defined) {
        this.runCommand(defined, optionList);
        return {};
      }
      return optionList;
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/example.js
var require_example = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/example.js"(exports, module2) {
    "use strict";
    module2.exports = function(usage, description) {
      if (typeof usage !== "string" || typeof description !== "string") {
        throw new TypeError(
          'Usage for adding an Example: args.example("usage", "description")'
        );
      }
      this.details.examples.push({ usage, description });
      return this;
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/examples.js
var require_examples = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/examples.js"(exports, module2) {
    "use strict";
    module2.exports = function(list) {
      if (list.constructor !== Array) {
        throw new Error("Item passed to .examples is not an array");
      }
      for (const item of list) {
        const usage = item.usage || false;
        const description = item.description || false;
        this.example(usage, description);
      }
      return this;
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/help.js
var require_help = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/help.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      const name = this.config.name || this.binary.replace("-", " ");
      const capitalize = (word) => word.charAt(0).toUpperCase() + word.substr(1);
      const parts = [];
      const groups = {
        commands: true,
        options: true,
        examples: true
      };
      for (const group in groups) {
        if (this.details[group].length > 0) {
          continue;
        }
        groups[group] = false;
      }
      const optionHandle = groups.options ? "[options] " : "";
      const cmdHandle = groups.commands ? "[command]" : "";
      const value = typeof this.config.value === "string" ? " " + this.config.value : "";
      parts.push([
        `  Usage: ${this.printMainColor(name)} ${this.printSubColor(
          optionHandle + cmdHandle + value
        )}`,
        ""
      ]);
      for (const group in groups) {
        if (!groups[group]) {
          continue;
        }
        parts.push(["", capitalize(group) + ":", ""]);
        if (group === "examples") {
          parts.push(this.generateExamples());
        } else {
          parts.push(this.generateDetails(group));
        }
        parts.push(["", ""]);
      }
      let output = "";
      for (const part of parts) {
        output += part.join("\n  ");
      }
      if (!groups.commands && !groups.options) {
        output = "No sub commands or options available";
      }
      const { usageFilter } = this.config;
      if (typeof usageFilter === "function") {
        output = usageFilter(output) || output;
      }
      console.log(output);
      if (this.config.exit && this.config.exit.help) {
        process.exit();
      }
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/version.js
var require_version = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/version.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    function findPackage(directory) {
      const file = path.resolve(directory, "package.json");
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        return require(file);
      }
      const parent = path.resolve(directory, "..");
      return parent === directory ? null : findPackage(parent);
    }
    module2.exports = function() {
      const pkg = findPackage(path.dirname(process.mainModule.filename));
      const version = pkg && pkg.version || "-/-";
      console.log(version);
      if (this.config.exit && this.config.exit.version) {
        process.exit();
      }
    };
  }
});

// ../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/.pnpm/args@5.0.3/node_modules/args/lib/index.js"(exports, module2) {
    "use strict";
    var chalk = require_chalk();
    var utils = require_utils();
    var publicMethods = {
      option: require_option(),
      options: require_options(),
      command: require_command(),
      parse: require_parse(),
      example: require_example(),
      examples: require_examples(),
      showHelp: require_help(),
      showVersion: require_version()
    };
    function Args() {
      this.details = {
        options: [],
        commands: [],
        examples: []
      };
      this.config = {
        exit: { help: true, version: true },
        help: true,
        version: true,
        usageFilter: null,
        value: null,
        name: null,
        mainColor: "yellow",
        subColor: "dim"
      };
      this.printMainColor = chalk;
      this.printSubColor = chalk;
    }
    for (const util in utils) {
      if (!{}.hasOwnProperty.call(utils, util)) {
        continue;
      }
      Args.prototype[util] = utils[util];
    }
    for (const method in publicMethods) {
      if (!{}.hasOwnProperty.call(publicMethods, method)) {
        continue;
      }
      Args.prototype[method] = publicMethods[method];
    }
    module2.exports = new Args();
    module2.exports.Args = Args;
  }
});

// src/index.ts
var import_node_http = __toESM(require("node:http"), 1);
var import_args = __toESM(require_lib2(), 1);

// src/run.ts
var import_node_child_process = require("node:child_process");
var connections = 0;
var proc = null;
var chunks = new Array();
function cleanOut() {
  proc?.stdin.end();
  proc?.stdout.destroy();
  proc?.stderr.destroy();
  proc = null;
  chunks = [];
  connections = 0;
}
function onRunRequest(req, res, { command: command2, flags: flags2 }) {
  connections++;
  console.log(`New connection. Active connections: ${connections}`);
  req.socket.addListener("close", () => {
    connections--;
    console.log(`Connection closed (left: ${connections} connections)`);
    if (proc && connections <= 0) {
      console.log("Kill process");
      proc.kill("SIGHUP");
      cleanOut();
    }
    stdoutStream?.destroy();
    stderrStream?.destroy();
  });
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*"
  });
  if (proc === null) {
    proc = flags2 ? (0, import_node_child_process.spawn)(command2, flags2.split(" ")) : (0, import_node_child_process.spawn)(command2);
    console.log(`Run command: ${command2} ${flags2}`);
  } else {
    chunks.forEach((chunk) => res.write(chunk));
  }
  const stdoutStream = proc.stdout.on("data", (data) => {
    res.write(data.toString());
    chunks.push(data);
  });
  const stderrStream = proc.stderr.on("data", (data) => {
    res.write(data.toString());
    chunks.push(data);
  });
  const exitListener = proc.on("exit", (code) => {
    const msg = code === null ? "child process exited" : `child process exited with code: ${code}`;
    console.log(msg);
    res.write(msg);
    cleanOut();
    res.end();
  });
}

// src/cors.ts
function onCorsRequest(res) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592e3
    // 30 days
  };
  res.writeHead(204, headers);
  res.end();
}

// src/home.ts
var indexHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style> pre { margin: 0 } </style>
  <script>
    let lastChunkEnd = 0;
    const xhr = new XMLHttpRequest();
    xhr.onprogress = () => {
      const currentChunkEnd = xhr.responseText.length;
      if (lastChunkEnd == currentChunkEnd) return;
      const newData = xhr.responseText.slice(lastChunkEnd, currentChunkEnd);
      lastChunkEnd = currentChunkEnd;
      const pre = document.createElement('pre');
      pre.innerHTML = newData;
      document.body.appendChild(pre);
    };
    xhr.open("GET", "/run");
    xhr.send();
  </script>
</head>
<body>
</body>
</html>`;
function onHomeRequest(req, res) {
  res.writeHead(200);
  res.write(indexHtml);
  res.end();
}

// src/index.ts
import_args.default.option("port", "The port on which the app will be running", 3e3).option("host", "The host on which the app will be running", "0.0.0.0").option("command", "Set command for invoke on request").option("flags", "Set command flags");
var { port, flags, host, command } = import_args.default.parse(process.argv);
if (!command) {
  throw Error("Command must be specified");
}
function requestListener(req, res) {
  if (req.method === "OPTIONS") {
    onCorsRequest(res);
    return;
  }
  const { pathname } = new URL(req.url ?? "/", `http://${req.headers.host}`);
  switch (pathname) {
    case "/run":
      onRunRequest(req, res, { command, flags });
      return;
    default:
      onHomeRequest(req, res);
      return;
  }
}
var server = import_node_http.default.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
