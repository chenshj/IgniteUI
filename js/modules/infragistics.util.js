﻿/*
 * Infragistics.Web.ClientUI Util functions 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * util functions that extend the jQuery  namespace
 * if something is not already available in jQuery, please add it here.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *
 */
( function () {
    var b = false, a = /xyz/.test(function () {
        xyz()
    }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
    };
    Class.extend = function (j, e) {
        var f = true, c = this.prototype, k, h;
        if (e) {
            f = false
        }
        b = true;
        k = new this();
        b = false;
        function g(m, l) {
            return function () {
                var o = this._super, n;
                this._super = c[m];
                n = l.apply(this, arguments);
                this._super = o;
                return n
            }
        }

        for (h in j) {
            if (j.hasOwnProperty(h)) {
                k[h] = f && typeof j[h] === "function" && typeof c[h] === "function" && a.test(j[h]) ? g(h, j[h]) : j[h]
            }
        }
        function d() {
            if (!b && this.init) {
                this.init.apply(this, arguments)
            }
        }

        d.prototype = k;
        d.constructor = d;
        d.extend = arguments.callee;
        if (e) {
            d.typeName = function () {
                return this.prototype.$type
            };
            d.baseType = function () {
                return this.$type.baseType
            };
            d.prototype.getType = function () {
                return this.$type
            };
            d.prototype.getHashCode = function () {
                if (this.$hashCode) {
                    return this.$hashCode
                }
                this.$hashCode = $.ig.nextHashCode++;
                return this.$hashCode
            }
        }
        return d
    };
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("ig.util", [], function () {
            return Class
        })
    }
}());
window.toStaticHTML = window.toStaticHTML ||
    function (a) {
        return a
    };
$.fn.startsWith = function (a) {
    return this[0].innerHTML.indexOf(a) === 0
};
$.ig = $.ig || {};
$.ajaxQueue = function (c, b) {
    var a;
    if (typeof document.ajaxQueue === "undefined") {
        document.ajaxQueue = {
            queue: {}
        }
    }
    if (typeof document.ajaxQueue.queue[c] === "undefined") {
        document.ajaxQueue.queue[c] = []
    }
    if (typeof b === "undefined") {
        return
    }
    a = b.complete;
    b.complete = function (d, e) {
        document.ajaxQueue.queue[c].shift();
        if (typeof a !== "undefined") {
            a(d, e)
        }
        if (document.ajaxQueue.queue[c].length > 0) {
            $.ajax(document.ajaxQueue.queue[c][0])
        }
    };
    document.ajaxQueue.queue[c].push(b);
    if (document.ajaxQueue.queue[c].length === 1) {
        $.ajax(document.ajaxQueue.queue[c][0])
    }
};
Date.prototype.stdTimezoneOffset = function () {
    var a, c, b, d;
    a = new Date(this.getFullYear(), 0, 1);
    c = new Date(this.getFullYear(), 6, 1);
    d = c.getTimezoneOffset();
    b = a.getTimezoneOffset();
    if (b > 0 && d > 0) {
        return Math.max(b, d)
    } else {
        return Math.min(b, d)
    }
};
Date.prototype.dst = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset()
};
$.ig.findPath = function (b, c) {
    var d, a = b;
    d = c.split(".");
    if (d.length > 0) {
        for (i = 0; i < d.length; i++) {
            if (a) {
                a = a[d[i]]
            } else {
                break
            }
        }
    }
    return a
}, $.ig.formatter = function (I, H, l, A, k) {
    var w, J, r, v, G, x, a, j, B, u, z, g, o, p, q, c, D, b, C, E, t, f = I && I.getTime, F = $.ig.regional.defaults;
    if (l === "checkbox" && A) {
        G = '<span style="width:100%;display:inline-block;overflow:hidden;text-align:center;">';
        G += '<span class="ui-state-default ui-corner-all ui-igcheckbox-small" style="display:inline-block">';
        G += '<span style="display:block" class="' + ( I ? "" : "ui-igcheckbox-small-off ");
        return G + 'ui-icon ui-icon-check ui-igcheckbox-small-on"></span></span></span>'
    }
    if (!I && I !== 0 && I !== false) {
        return "&nbsp;"
    }
    if (H === "date" || f) {
        if (!I) {
            return "&nbsp;"
        }
        if (!f) {
            return I
        }
        B = F[(l && l !== "null" && l !== "undefined") ? l + "Pattern" : "datePattern"] || l;
        if (k) {
            J = I.getUTCFullYear();
            v = I.getUTCMonth() + 1;
            f = I.getUTCDate();
            r = I.getUTCHours();
            w = I.getUTCMinutes();
            G = I.getUTCSeconds();
            x = I.getUTCMilliseconds()
        } else {
            J = I.getFullYear();
            v = I.getMonth() + 1;
            f = I.getDate();
            r = I.getHours();
            w = I.getMinutes();
            G = I.getSeconds();
            x = I.getMilliseconds()
        }
        B = B.replace("MMMM", "\x01").replace("MMM", "\x02").replace("dddd", "\x03").replace("ddd", "\x04");
        if (B.indexOf("t") >= 0) {
            a = (r >= 12) ? F.pm : F.am;
            a = a || " ";
            if (B.indexOf("tt") >= 0) {
                B = B.replace("tt", "t")
            } else {
                if (a.length > 1) {
                    a = a.substring(0, 1)
                }
            }
            B = B.replace("t", "\x05")
        }
        if (B.indexOf("h") >= 0 && r > 12) {
            r -= 12
        }
        B = B.replace(/H/g, "h");
        B = B.replace("yyyy", J).replace("yy", (( J = J % 100) < 10) ? "0" + J : J).replace("y", J % 100).replace("MM", (v < 10) ? "0" + v : v).replace("M", v);
        B = B.replace("dd", (f < 10) ? "0" + f : f).replace("d", f);
        B = B.replace("hh", (r < 10) ? "0" + r : r).replace("h", r).replace("mm", (w < 10) ? "0" + w : w).replace("m", w).replace("ss", (G < 10) ? "0" + G : G).replace("s", G);
        B = B.replace("fff", (x < 10) ? "00" + x : ((x < 100) ? "0" + x : x)).replace("ff", (( x = Math.round(x / 10)) < 10) ? "0" + x : x).replace("f", Math.round(x / 100));
        B = B.replace("\x01", F.monthNames[v - 1]).replace("\x02", F.monthNamesShort[v - 1]).replace("\x05", a);
        B = B.replace("\x03", F.dayNames[I.getDay()]).replace("\x04", F.dayNamesShort[I.getDay()]);
        return B
    }
    f = l === "double";
    if (!f) {
        b = l === ( c = "currency");
        if (!b) {
            C = l === ( D = "percent");
            if (!C) {
                t = l === "int"
            }
        }
    }
    z = typeof I === "number";
    if (f || z || t || b || C || H === "number") {
        if (!z) {
            I = parseFloat(I.replace("(", "-").replace(/[^0-9\-eE\.\+]/gm, ""))
        }
        if (isNaN(I)) {
            return "&nbsp;"
        }
        E = b ? c : ( C ? D : "numeric");
        B = F[E + ((I < 0) ? "Negative" : "Positive") + "Pattern"] || "n";
        u = l ? l.length : 0;
        if (u > 0 && (( G = l.charAt(0)) === "0" || G === "#")) {
            w = v = 0;
            g = l.indexOf(".");
            if (g > 0) {
                v = u - 1 - g;
                while (++g < u) {
                    if (l.charAt(g) !== "0") {
                        break
                    }
                    w++
                }
            }
        } else {
            w = F[E + "MinDecimals"] || 0;
            if (f) {
                v = 999
            } else {
                v = F[E + "MaxDecimals"];
                v = (v && !t) ? v : 0
            }
        }
        if (I < 0) {
            I = -I
        }
        I = (v === 999) ? I.toString(10) : I.toFixed(v);
        if (( t = I.indexOf("E")) < 0) {
            t = I.indexOf("e")
        }
        j = "";
        if (t > 0) {
            j = I.substring(t);
            I = I.substring(0, t)
        }
        g = I.indexOf(".");
        u = I.length;
        t = 0;
        while (g > 0 && v > w + t && I.charAt(u - 1 - t) === "0") {
            t++
        }
        if (t > 0) {
            I = I.substring(0, u -= t)
        }
        if (g === u - 1) {
            I = I.substring(0, g)
        }
        if (g > 0) {
            u = g
        }
        G = F[E + "DecimalSeparator"];
        if (G) {
            I = I.replace(".", G)
        }
        G = F[E + "GroupSeparator"];
        q = G ? F[E + "Groups"] : "";
        o = p = (q.length > 0) ? q[ t = 0] : 0;
        while (o > 0 && --u > 0) {
            if (--o === 0) {
                I = I.substring(0, u) + G + I.substring(u);
                o = q[++t];
                if (!o || o < 1) {
                    o = p
                } else {
                    p = o
                }
            }
        }
        G = F[E + "Symbol"] || "";
        return B.replace("-", F.negativeSign).replace("n", I + j).replace("$", G)
    }
    if (l) {
        if (l.indexOf(G = "{0}") >= 0) {
            return l.replace(G, I)
        }
        if (l.indexOf(G = "[0]") >= 0) {
            return l.replace(G, I)
        }
    }
    return (I || I === 0) ? I : "&nbsp;"
};
$.ig._regional = {
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    am: "AM",
    pm: "PM",
    datePattern: "M/d/yyyy",
    dateLongPattern: "dddd, MMMM dd, yyyy",
    dateTimePattern: "M/d/yyyy h:mm tt",
    timePattern: "h:mm tt",
    timeLongPattern: "h:mm:ss tt",
    negativeSign: "-",
    numericNegativePattern: "-$n",
    numericDecimalSeparator: ".",
    numericGroupSeparator: ",",
    numericGroups: [3],
    numericMaxDecimals: 2,
    numericMinDecimals: 0,
    currencyPositivePattern: "$n",
    currencyNegativePattern: "$(n)",
    currencySymbol: "$",
    currencyDecimalSeparator: ".",
    currencyGroupSeparator: ",",
    currencyGroups: [3],
    currencyMaxDecimals: 2,
    currencyMinDecimals: 2,
    percentPositivePattern: "n$",
    percentNegativePattern: "-n$",
    percentSymbol: "%",
    percentDecimalSeparator: ".",
    percentGroupSeparator: ",",
    percentGroups: [3],
    percentDisplayFactor: 100,
    percentMaxDecimals: 2,
    percentMinDecimals: 2
};
$.ig.regional = $.ig.regional || {};
$.ig.regional.defaults = $.ig._regional;
$.ig.setRegionalDefault = function (a) {
    if ($.ui && $.ui.igEditor) {
        $.ui.igEditor.setDefaultCulture(a)
    } else {
        $.ig.regional.defaults = $.extend($.ig._regional, ( typeof a === "string") ? $.ig.regional[a] : a)
    }
};
$.ig.calcSummaries = function (summaryFunction, data, caller, dataType) {
    var sum = function (data) {
        var sum = 0, i;
        for (i = 0; i < data.length; i++) {
            sum += data[i]
        }
        return sum
    };
    summaryFunction = summaryFunction.toLowerCase();
    if (summaryFunction.startsWith("custom")) {
        summaryFunction = "custom"
    }
    switch (summaryFunction) {
        case"min":
            if (data.length === 0) {
                if (dataType === "date") {
                    return null
                }
                return 0
            }
            return Math.min.apply(Math, data);
        case"max":
            if (data.length === 0) {
                if (dataType === "date") {
                    return null
                }
                return 0
            }
            return Math.max.apply(Math, data);
        case"sum":
            return sum(data);
        case"avg":
            if (data.length === 0) {
                return 0
            }
            return sum(data) / data.length;
        case"count":
            return data.length;
        case"custom":
            if (caller !== undefined && caller !== null) {
                if ($.type(caller) === "function") {
                    return caller(data)
                }
                if ($.type(caller) === "string") {
                    caller = eval(caller);
                    return caller(data)
                }
            } else {
                return null
            }
            break
    }
};
$.ig.getMaxZIndex = function (a) {
    var b = 10000, c;
    $(".ui-dialog").each(function () {
        if (!a || $(this)[0].id !== a) {
            c = $(this).css("z-index");
            if (!isNaN(c)) {
                b = Math.max(b, c)
            }
        }
    });
    return b
};
$.ig.uid = function () {
    return ((1 + Math.random()) * parseInt("10000", 16)).toString(16).substring(1, 5)
};
$.ig.nextHashCode = 0;
$.ig.util = $.ig.util || {};
$.ig.util.ensureUniqueId = function (b) {
    if (!b.getHashCode) {
        var a = $.ig.nextHashCode++;
        b.getHashCode = function () {
            return a
        }
    }
};
$.ig.getColType = function (a) {
    var b = typeof a;
    if (b === "undefined") {
        return "string"
    } else {
        if (b === "object" && a instanceof Date) {
            return "date"
        } else {
            if (b === "boolean") {
                return "bool"
            } else {
                if (b === "number") {
                    return b
                } else {
                    if (b === "object") {
                        return "object"
                    } else {
                        return "string"
                    }
                }
            }
        }
    }
};
$.ig.typeIdentifierCache = {};
$.ig.nextTypeIdentifier = 0;
$.ig.Type = Class.extend({
    init: function (b, a, c) {
        this.specializationCache = {};
        this.name = b;
        this.typeArguments = null;
        this.baseType = null;
        this.interfaces = null;
        if (a) {
            this.baseType = a
        }
        if (c) {
            this.interfaces = c
        }
        if ($.ig.typeIdentifierCache[b]) {
            this.identifier = $.ig.typeIdentifierCache[b]
        } else {
            this.identifier = $.ig.nextTypeIdentifier++;
            $.ig.typeIdentifierCache[b] = this.identifier
        }
    },
    typeName: function () {
        return this.name
    },
    getSpecId: function (d) {
        if (d.length === 1) {
            if (!d[0]) {
                return "undef"
            } else {
                if (!d[0].typeName) {
                    return d[0].toString()
                } else {
                    if (d[0].stringId) {
                        return d[0].stringId
                    } else {
                        return d[0].identifier.toString()
                    }
                }
            }
        }
        var b = "";
        for (var a = 0; a < d.length; a++) {
            var c = d[a];
            if (!d[0]) {
                b += "undef"
            } else {
                if (!d[0].typeName) {
                    b += d[0].toString()
                } else {
                    if (d[0].stringId) {
                        b += d[0].stringId
                    } else {
                        b += d[0].identifier.toString()
                    }
                }
            }
        }
        return b
    },
    specializationCache: null,
    specialize: function () {
        var e = this.getSpecId(arguments);
        var d = this.specializationCache[e];
        if (d) {
            return d
        }
        d = new $.ig.Type(this.name, this.baseType, this.interfaces);
        var c = this.typeArguments;
        var a = false;
        if (c) {
            a = true
        }
        d.typeArguments = [];
        if (a) {
            for (var b = 0; b < c.length; b++) {
                d.typeArguments[b] = arguments[c[b]]
            }
        } else {
            for (var b = 0; b < arguments.length; b++) {
                d.typeArguments[b] = arguments[b]
            }
        }
        if (this.baseType && this.baseType.typeArguments) {
            d.baseType = this.baseType.specialize(arguments)
        }
        if (this.interfaces) {
            for (var b = 0; b < this.interfaces.length; b++) {
                d.interfaces[b] = this.interfaces[b].specialize(arguments)
            }
        }
        this.specializationCache[e] = d;
        d.stringId = d.generateString();
        return d
    },
    equals: function (b) {
        if (!( b instanceof $.ig.Type)) {
            return false
        }
        if (this.identifier !== b.identifier) {
            return false
        }
        if (this.typeArguments === null && b.typeArguments === null) {
            return true
        }
        if (this.typeArguments === null && b.typeArguments !== null) {
            return false
        }
        if (this.typeArguments !== null && b.typeArguments === null) {
            return false
        }
        if (this.typeArguments.length !== b.typeArguments.length) {
            return false
        }
        for (var a = 0; a < this.typeArguments.Length; a++) {
            if (!(this.typeArguments[a].equals(b.typeArguements[a]))) {
                return false
            }
        }
        return true
    },
    checkEquals: function (a, b) {
        if (a instanceof $.ig.Type) {
            return a.equals(b)
        } else {
            if (b instanceof $.ig.Type) {
                return b.equals(a)
            } else {
                return a == b
            }
        }
    },
    op_Equality: function (a, b) {
        return a.equals(other)
    },
    op_Inequality: function (a, b) {
        return !a.equals(b)
    },
    generateString: function () {
        if (!this.typeArguments || this.typeArguments.length == 0) {
            return this.identifier.toString()
        } else {
            var c = this.identifier.toString() + "[";
            var a = true;
            for (var b = 0; b < this.typeArguments.count; b++) {
                if (a) {
                    a = false
                } else {
                    c += ","
                }
                c += this.typeArguments[b].toString()
            }
            c += "]";
            return c
        }
    }
}, true);
$.ig.Object = Class.extend({
    init: function () {
    },
    $type: new $.ig.Type("Object")
}, true);
$.ig.Enum = Class.extend({
    $type: new $.ig.Type("Enum", $.ig.Object.prototype.$type)
}, true);
$.ig.ValueType = Class.extend({
    init: function () {
    },
    $type: new $.ig.Type("ValueType", $.ig.Object.prototype.$type)
}, true);
$.ig.INotifyPropertyChanged = Class.extend({
    init: function () {
    },
    _PropertyChanged: function () {
    },
    $type: new $.ig.Type("INotifyPropertyChanged")
}, true);
$.ig.PropertyChangedEventArgs = $.ig.Object.extend({
    init: function (a) {
        this._propertyName = a
    },
    _propertyName: null,
    propertyName: function (a) {
        if (arguments.length === 0) {
            return this._propertyName
        } else {
            this._propertyName = a
        }
    },
    $type: new $.ig.Type("PropertyChangedEventArgs", $.ig.Object.$type)
}, true);
$.ig.XmlNodeType = Class.extend({
    _Attribute: 2,
    _CDATA: 4,
    _Comment: 8,
    _Document: 9,
    _DocumentFragment: 11,
    _DocumentType: 10,
    _Element: 1,
    _Entity: 6,
    _EntityReference: 5,
    _Notation: 12,
    _ProcessingInstruction: 7,
    _Text: 3,
    element: 1,
    attribute: 2,
    text: 3,
    cDATA: 4,
    entityReference: 5,
    entity: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
}, true);
$.ig.XmlDocumentParser = Class.extend({
    parse: function (d) {
        if (!window.DOMParser) {
            var e = ["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"];
            for (var c = 0; c < e.length; c++) {
                try {
                    var f = new ActiveXObject(progIDs[c]);
                    f.async = false;
                    f.loadXML(d);
                    f.setProperty("SelectionLanguage", "XPath");
                    return f
                } catch (b) {
                }
            }
        } else {
            try {
                var a = new DOMParser();
                return a.parseFromString(d, "text/xml")
            } catch (b) {
            }
        }
        return null
    }
}, true);
$.ig.Array = Array;
$.ig.Array.prototype.add = function (a) {
    this[this.length] = a
};
$.ig.Array.prototype.indexOf = function (b) {
    for (var a = 0; a < this.length; a++) {
        if (this[a] == b) {
            return a
        }
    }
    return -1
};
$.ig.Array.prototype.copy = function (d, e, b, c, a) {
    for (i = 0; i < a; i++) {
        b[c + i] = d[e + i]
    }
};
$.ig.removeFromArray = function (a, b, d) {
    var c = a.slice((d || b) + 1 || a.length);
    a.length = b < 0 ? a.length + b : b;
    return a.push.apply(a, c)
};
$.ig.Array.prototype.contains = function (b) {
    var a = this.indexOf(b);
    return (a >= 0)
};
$.ig.Array.prototype.insert = function (a, b) {
    this.splice(a, 0, b)
};
$.ig.Array.prototype.removeAt = function (a) {
    this.splice(a, 1)
};
$.ig.Array.prototype.removeItem = function (b) {
    var a = this.indexOf(b);
    if (a >= 0) {
        this.splice(a, 1);
        return true
    }
    return false
};
$.ig.Array.prototype.getEnumerator = function () {
    return new $.ig.ArrayEnumerator(this)
};
$.ig.Array.prototype.count = function () {
    return this.length
};
$.ig.Array.prototype.item = function (a, b) {
    if (arguments.length === 2) {
        this[a] = b;
        return b
    } else {
        return this[a]
    }
};
$.ig.Array.prototype.getLength = function (a) {
    if (a === 0) {
        return this.length
    } else {
        return this.dimensionLength[a - 1]
    }
};
$.ig.Array.prototype.clear = function () {
    this.length = 0
};
$.ig.ArrayEnumerator = Class.extend({
    init: function (a) {
        this._array = a;
        this._index = -1
    },
    current: function () {
        return this._array[this._index]
    },
    moveNext: function () {
        this._index++;
        return (this._index < this._array.length)
    },
    reset: function () {
        this._index = -1
    }
}, true);
$.ig.Date = Class.extend({
    init: function () {
    },
    $type: new $.ig.Type("Date", $.ig.Object.$type)
}, true);
$.ig.Date.prototype.now = function () {
    return new Date()
};
$.ig.Date.prototype.fromMilliseconds = function (a) {
    return a
};
$.ig.util.canAssign = function (b, c) {
    if ($.ig.Type.prototype.checkEquals(b, c)) {
        return true
    }
    if (c.interfaces) {
        for (var a = 0; a < c.interfaces.length; a++) {
            if ($.ig.util.canAssign(b, c.interfaces[a])) {
                return true
            }
        }
    }
    if (c.baseType) {
        return $.ig.util.canAssign(b, c.baseType)
    }
    return false
};
$.ig.util.cast = function (b, a) {
    if (a == null) {
        return null
    }
    var c = a;
    if (a.$type) {
        c = a.$type
    }
    if ($.ig.util.canAssign(b, c)) {
        return a
    } else {
        return null
    }
};
$.ig.Dictionary = Class.extend({
    init: function () {
        this.proxy = {};
        this.keysHolder = this.proxy;
        this._count = 0
    },
    $type: new $.ig.Type("Dictionary", $.ig.Object.prototype.$type),
    proxy: null
}, true);
$.ig.Dictionary.prototype.getDictionary = function (b) {
    var a = new $.ig.Dictionary();
    a.proxy = b;
    a.keysHolder = b;
    return a
};
$.ig.Dictionary.prototype.containsKey = function (a) {
    return this.proxy[a] !== undefined
};
$.ig.Dictionary.prototype.count = function () {
    return this._count
};
$.ig.Dictionary.prototype.item = function (a, b) {
    if (arguments.length === 1) {
        return this.proxy[a]
    } else {
        if (!this.proxy[a]) {
            this._count++
        }
        this.proxy[a] = b
    }
};
$.ig.Dictionary.prototype.add = function (a, b) {
    if (!this.proxy[a]) {
        this._count++
    }
    this.proxy[a] = b
};
$.ig.Dictionary.prototype.remove = function (a) {
    delete this.proxy[a];
    this._count--
};
$.ig.Dictionary.prototype.keys = function () {
    return new $.ig.KeyEnumerator(this)
};
$.ig.Dictionary.prototype.values = function () {
    return new $.ig.ValueEnumerator(this)
};
$.ig.Dictionary.prototype.clear = function () {
    this.proxy = {};
    this.keysHolder = this.proxy;
    this._count = 0
};
$.ig.EventArgs = $.ig.Object.extend({
    init: function () {
    }
}, true);
$.ig.Number = Class.extend({
    $type: new $.ig.Type("Number", $.ig.Object.prototype.$type)
}, true);
$.ig.Number.prototype.parseInt = function (c, d) {
    return parseInt(c, d)
};
$.ig.Number.prototype.log10 = function (a) {
    return Math.log(a) / Math.log(10)
};
$.ig.Single = Class.extend({}, true);
$.ig.Single.prototype.parseFloat = function (a) {
    return parseFloat(a)
};
$.ig.Single.prototype.isInfinity = function (a) {
    return a === Infinity || a === -Infinity
};
$.ig.Int32 = Class.extend({
    $type: new $.ig.Type("Int32", $.ig.Object.prototype.$type)
}, true);
$.ig.Double = Class.extend({
    $type: new $.ig.Type("Double", $.ig.Object.prototype.$type)
}, true);
$.ig.Delegate = Class.extend({
    $type: new $.ig.Type("Delegate", $.ig.Object.prototype.$type)
}, true);
$.ig.Delegate.prototype.combine = function (a, b) {
    if (!a) {
        return b
    }
    if (!b) {
        return a
    }
    var c = function () {
        a.apply(null, arguments);
        return b.apply(null, arguments)
    };
    c.enumerate = function (d) {
        if (a) {
            if (a.enumerate) {
                a.enumerate(d)
            } else {
                d.push(a)
            }
        }
        if (b) {
            if (b.enumerate) {
                b.enumerate(d)
            } else {
                d.push(b)
            }
        }
    };
    return c
};
$.ig.Delegate.prototype.remove = function (c, d) {
    if (!c) {
        return null
    }
    if (!d) {
        return c
    }
    var a = [];
    var b = null;
    if (c.enumerate) {
        c.enumerate(a)
    } else {
        a.push(c)
    }
    for (var e = 0; e < a.length; e++) {
        if (d.original) {
            if (a[e].original == d.original && a[e].target == d.target) {
                continue
            }
        }
        if (a[e] == d) {
            continue
        }
        b = $.ig.Delegate.prototype.combine(b, a[e])
    }
    return b
};
$.ig.ReflectionUtil = Class.extend({
    $type: new $.ig.Type("ReflectionUtil", $.ig.Object.prototype.$type)
}, true);
$.ig.ReflectionUtil.prototype.getPropertyGetter = function (b, a) {
    if (typeof b.prototype[a] === "function") {
        return function (c) {
            return b.prototype[a].apply(c, arguments)
        }
    }
    return function (c) {
        return c[a]
    }
};
$.ig.IEnumerable = Class.extend({
    $type: new $.ig.Type("IEnumerable", null)
}, true);
$.ig.IEnumerator = Class.extend({
    $type: new $.ig.Type("IEnumerator", null)
}, true);
$.ig.IEqualityComparer$1 = Class.extend({
    $type: new $.ig.Type("IEqualityComparer", $.ig.Object.prototype.$type)
}, true);
$.ig.IList = Class.extend({
    $type: new $.ig.Type("IList", null, [$.ig.IEnumerable.prototype.$type])
}, true);
$.ig.Error = Class.extend({
    init: function (a) {
        if (a > 0) {
            switch (a) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break
            }
            return
        }
        this.__message = null;
        this.__innerException = null
    },
    init1: function (a, b) {
        this.__message = b
    },
    init2: function (a, c, b) {
        this.__message = c;
        this.__innerException = b
    },
    $type: new $.ig.Type("Error", $.ig.Object.prototype.$type)
}, true);
$.ig.Error.prototype.message = function () {
    return this.__message
};
$.ig.Error.prototype.innerException = function () {
    return this.__innerException
};
$.ig.IDictionary = Class.extend({
    $type: new $.ig.Type("IDictionary", null)
}, true);
$.ig.ValueEnumerator = Class.extend({
    init: function (a) {
        this._dict = a;
        this._index = -1;
        this._count = 0;
        this._values = [];
        for (var b in this._dict.proxy) {
            this._values[this._count] = this._dict.proxy[b];
            this._count++
        }
    },
    current: function () {
        return this._values[this._index]
    },
    moveNext: function () {
        this._index++;
        return (this._index < this._count)
    },
    reset: function () {
        this._index = -1
    },
    getEnumerator: function () {
        this.reset();
        return this
    },
    $type: new $.ig.Type("ValueEnumerator", $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);
$.ig.KeyEnumerator = Class.extend({
    init: function (a) {
        this._dict = a;
        this._index = -1;
        this._count = 0;
        this._keys = [];
        for (var b in this._dict.proxy) {
            this._keys[this._count] = b;
            this._count++
        }
    },
    current: function () {
        return this._keys[this._index]
    },
    moveNext: function () {
        this._index++;
        return (this._index < this._count)
    },
    reset: function () {
        this._index = -1
    },
    getEnumerator: function () {
        this.reset();
        return this
    },
    $type: new $.ig.Type("KeyEnumerator", $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);
$.ig.intDivide = function (a, b) {
    var c = a / b;
    if (c >= 0) {
        return Math.floor(c)
    } else {
        return Math.ceil(c)
    }
};
$.ig.Nullable$1 = Class.extend({
    $t: null,
    init: function (a, b) {
        this.$t = a;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this._value = b
    },
    hasValue: function () {
        return this._value !== null
    },
    _value: null,
    value: function (a) {
        if (arguments.length === 1) {
            this._value = a
        } else {
            return this._value
        }
    },
    getValueOrDefault: function () {
        if (this.hasValue()) {
            return this._value
        } else {
            return getDefaultValue()
        }
    },
    getDefaultValue: function () {
        if ($.ig.util.canAssign($.ig.Number.prototype.$type, $t)) {
            return 0
        } else {
            if ($.ig.util.canAssign($.ig.Boolean.prototype.$type, $t)) {
                return false
            } else {
                return null
            }
        }
    },
    getValueOrDefault1: function (a) {
        if (this.hasValue()) {
            return this._value
        } else {
            return a
        }
    },
    isNullable: true,
    $type: new $.ig.Type("Nullable$1", $.ig.Object.prototype.$type)
}, true);
$.ig.util.toNullable = function (b, c) {
    if (c && c.isNullable) {
        return c
    }
    var a = new $.ig.Nullable$1(b, c);
    return a
};
$.ig.util.nullableAdd = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return null
    }
    if (b.isNullable && !b.hasValue()) {
        return null
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return $.ig.util.toNullable($.ig.Number.prototype.$type, c + d)
};
$.ig.util.nullableSubtract = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return null
    }
    if (b.isNullable && !b.hasValue()) {
        return null
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return $.ig.util.toNullable($.ig.Number.prototype.$type, c - d)
};
$.ig.util.nullableMultiply = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return null
    }
    if (b.isNullable && !b.hasValue()) {
        return null
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return $.ig.util.toNullable($.ig.Number.prototype.$type, c * d)
};
$.ig.util.nullableDivide = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return null
    }
    if (b.isNullable && !b.hasValue()) {
        return null
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return $.ig.util.toNullable($.ig.Number.prototype.$type, c / d)
};
$.ig.util.nullableModulus = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return null
    }
    if (b.isNullable && !b.hasValue()) {
        return null
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return $.ig.util.toNullable($.ig.Number.prototype.$type, c % d)
};
$.ig.util.nullableGreaterThan = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return false
    }
    if (b.isNullable && !b.hasValue()) {
        return false
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return c > d
};
$.ig.util.nullableGreaterThanOrEqual = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return false
    }
    if (b.isNullable && !b.hasValue()) {
        return false
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return c >= d
};
$.ig.util.nullableLessThan = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return false
    }
    if (b.isNullable && !b.hasValue()) {
        return false
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return c < d
};
$.ig.util.nullableLessThanOrEqual = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return false
    }
    if (b.isNullable && !b.hasValue()) {
        return false
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return c <= d
};
$.ig.util.nullableEquals = function (a, c) {
    var b = (a == null) || (a.IsNullable && !a.hasValue());
    var d = (c == null) || (c.IsNullable && !c.hasValue());
    if (b && d) {
        return true
    }
    if (b != d) {
        return false
    }
    var e = a;
    var f = c;
    if (a.isNullable) {
        e = a.value()
    }
    if (c.isNullable) {
        f = c.value()
    }
    return e == f
};
$.ig.util.nullableNotEquals = function (a, b) {
    if (a.isNullable && !a.hasValue()) {
        return false
    }
    if (b.isNullable && !b.hasValue()) {
        return false
    }
    var c = a;
    var d = b;
    if (a.isNullable) {
        c = a.value()
    }
    if (b.isNullable) {
        d = b.value()
    }
    return c != d
};
$.ig.util.wellKnownColors = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
};
$.ig.util.stringToColor = function (d) {
    var c = {
        a: 255,
        r: 0,
        g: 0,
        b: 0
    };
    var a = d.replace(" ", "").toLowerCase();
    if ($.ig.util.wellKnownColors[a] !== undefined) {
        d = $.ig.util.wellKnownColors[a]
    }
    if (d.lastIndexOf("rgb", 0) === 0) {
        d = d.replace("rgb", "").replace(" ", "").replace("(", "").replace(")", "");
        var b = d.split(",");
        c.r = parseInt(b[0]);
        c.g = parseInt(b[1]);
        c.b = parseInt(b[2])
    } else {
        if (d.lastIndexOf("rgba", 0) === 0) {
            d = d.replace("rgba", "").replace(" ", "").replace("(", "").replace(")", "");
            var b = d.split(",");
            c.r = parseInt(b[0]);
            c.g = parseInt(b[0]);
            c.b = parseInt(b[1]);
            c.a = parseFloat(b[2]) * 255
        } else {
            d = d.replace("#", "").replace(" ", "");
            if (d.length === 6) {
                c.r = parseInt(d.substr(0, 2), 16);
                c.g = parseInt(d.substr(2, 2), 16);
                c.b = parseInt(d.substr(4, 2), 16)
            } else {
                if (d.length === 3) {
                    c.r = parseInt(d.substr(0, 1) + d.substr(0, 1), 16);
                    c.g = parseInt(d.substr(1, 1) + d.substr(1, 1), 16);
                    c.b = parseInt(d.substr(2, 1) + d.substr(2, 1), 16)
                }
            }
        }
    }
    return c
};
$.ig.util.getBinary = function (h, a, d) {
    var b, g, f, j = false;
    if (typeof XMLHttpRequest == "undefined") {
        try {
            f = ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (c) {
        }
        try {
            f = ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {
        }
        f = new ActiveXObject("Microsoft.XMLHTTP")
    } else {
        f = new XMLHttpRequest()
    }
    if (f.overrideMimeType) {
        f.overrideMimeType("text/plain; charset=x-user-defined")
    } else {
        if (typeof VBArray != "undefined") {
            j = true
        }
    }
    f.onreadystatechange = function () {
        if (f.readyState == 4) {
            if (f.status == 200) {
                if (j) {
                    b = new VBArray(f.responseBody).toArray();
                    for (var e = 0; e < b.length; e++) {
                        b[e] = String.fromCharCode(b[e])
                    }
                    g = b.join("");
                    a(g)
                } else {
                    a(f.responseText)
                }
            } else {
                d(f.error)
            }
        }
    };
    f.open("GET", h, true);
    f.send(null)
};
$.ig.util.extCopy = function (g, a) {
    var c, d, e;
    for (d = 0; d < a.length; d++) {
        var b = a[d][0];
        var f = a[d][1];
        for (e = 0; e < b.length; e++) {
            for (c = 0; c < f.length; c++) {
                b[e].prototype[f[c]] = g.prototype[f[c]]
            }
        }
    }
};
$.ig.util.bulkDefine = function (d) {
    var c = 0, a = null, b = null;
    for (c = 0; c < d.length; c++) {
        a = d[c];
        b = a.split(":");
        $.ig[a] = $.ig[a] || Class.extend({
            $type: new $.ig.Type(a, $.ig.Object.prototype.$type),
            $placeholder: true
        }, true)
    }
};
$.ig.util.defType = function (d, a, c) {
    var b = true;
    if ($.ig[d] && !$.ig[d].prototype.$placeholder) {
        b = false
    }
    if (b) {
        $.ig[d] = $.ig[a].extend(c)
    }
};
$.ig.util.getClassCount = function (a, h) {
    var n = document.styleSheets, l = 0, c, m, b, d;
    a = a.toLowerCase();
    if (!n) {
        return 0
    }
    for (var g = 0; g < n.length; g++) {
        try {
            c = n[g];
            m = c.rules ? c.rules : c.cssRules;
            if (!m) {
                continue
            }
            for (var k = 0; k < m.length; k++) {
                b = m[k].selectorText;
                if (b) {
                    b = b.toLowerCase();
                    if (h) {
                        if (b.indexOf(a) == 0) {
                            d = parseInt(b.replace(a, ""));
                            l = Math.max(l, d)
                        }
                    } else {
                        if (b == a) {
                            l++
                        }
                    }
                }
            }
        } catch (f) {
        }
    }
    return l
};
( function (a) {
    a.ig.util.profiler = {};
    var b = {};
    a.ig.util.profiler.recordTime = function (d, e) {
        var c = "meth: " + d;
        if (!b[c]) {
            b[c] = []
        }
        b[c][b[c].length] = e
    };
    a.ig.util.profiler.reset = function () {
        b = {}
    };
    a.ig.util.profiler.logReport = function () {
        var h = [];
        var e = 0;
        var m = 0;
        var c = 0;
        for (var l in b) {
            if (l.indexOf("meth:") === 0) {
                var g = {};
                g.name = l.substr(5);
                m = 0;
                for (var d = 0; d < b[l].length; d++) {
                    m = m + b[l][d]
                }
                var c = m / b[l].length;
                g.avg = c;
                g.callCount = b[l].length;
                h[e] = g;
                e++
            }
        }
        h.sort(function (j, k) {
            if (j.avg < k.avg) {
                return 1
            }
            if (j.avg > k.avg) {
                return -1
            }
            if (j.avg == k.avg) {
                return 0
            }
        });
        for (var f = 0; f < Math.min(200, h.length); f++) {
            console.log(h[f].name + " avg: " + h[f].avg + " callCount: " + h[f].callCount)
        }
    }
}(jQuery));
Function.prototype.invoke = function () {
    return this.apply(null, arguments)
};
Function.prototype.on = function (c) {
    var b = this;
    var a = function () {
        return b.apply(c, arguments)
    };
    a.original = this;
    a.target = c;
    return a
};
String.prototype.startsWith = function (a) {
    return this.indexOf(a) === 0
};
String.prototype.endsWith = function (b) {
    var a = this.length - b.length;
    return a >= 0 && this.lastIndexOf(b) === a
};
String.prototype.remove = function (b, a) {
    if (!a || ((b + a) > this.length)) {
        return this.substr(0, b)
    }
    return this.substr(0, b) + this.substr(b + a)
};
String.prototype.compareTo = function (a) {
    if (this == a) {
        return 0
    }
    if (this < a) {
        return -1
    }
    return 1
};
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
}
String.getHashCode = function () {
    return this
};
String.isNullOrEmpty = function (a) {
    return !a || a.length < 1
};
String.empty = function () {
    return ""
};
String.concat = function () {
    return [].join.call(arguments, "")
};
String.concat1 = function (a, b) {
    return [].join.call(arguments, "")
};
String.concat2 = function (a, b) {
    return [].join.call(arguments, "")
};
String.concat3 = function () {
    return [].join.call(arguments, "")
};
String.concat4 = function (a, b, c) {
    return [].join.call(arguments, "")
};
String.concat5 = function (a, b, c) {
    return [].join.call(arguments, "")
};
String.concat6 = function (a, b, c, d) {
    return [].join.call(arguments, "")
};
String.concat7 = function (a, b, c, d) {
    return [].join.call(arguments, "")
};
String.prototype.equals = function (a) {
    return this == a
};
Array.prototype.insertRange = function (b, c) {
    var a = 0;
    if (this.length == 0) {
        for (a = 0; a < c.length; a++) {
            this[b++] = c[a]
        }
    } else {
        for (a = 0; a < c.length; a++) {
            this.splice(b++, 0, c[a])
        }
    }
};
Array.prototype.clone = function () {
    return $.extend(true, [], this)
};
Array.prototype.clear = function () {
    this.length = 0
};
Math.log10 = function (a) {
    return Math.log(a) / Math.log(10)
};
Math.logBase = function (a, b) {
    return Math.log(a) / Math.log(b)
};
Math.sign = function (a) {
    if (a < 0) {
        return -1
    } else {
        if (a > 0) {
            return 1
        } else {
            return 0
        }
    }
};
Number.getHashCode = function () {
    return this
};
Number.isInfinity = function (a) {
    return a === Infinity || a === -Infinity
};
$.ig.util.isIE7 = $.browser.msie && parseInt($.browser.version, 10) === 7;
$.ig.util.isIE8 = $.browser.msie && parseInt($.browser.version, 10) === 8;
$.ig.util.isIE9 = $.browser.msie && parseInt($.browser.version, 10) === 9;
$.ig.util.jqueryFlagsCache = {};
$.ig.util.jqueryCreateFlags = function (a) {
    var d = $.ig.util.jqueryFlagsCache[a] = {}, b, c;
    a = a.split(/\s+/);
    for (b = 0, c = a.length; b < c; b++) {
        d[a[b]] = true
    }
    return d
};
$.ig.util.jqueryCallbacks = function (h) {
    h = h ? ($.ig.util.jqueryFlagsCache[h] || $.ig.util.jqueryCreateFlags(h)) : {};
    var j = [], m = [], k, c, d, g, f, e, a = function (o) {
        var q, r, p, s, n;
        for (q = 0, r = o.length; q < r; q++) {
            p = o[q];
            s = jQuery.type(p);
            if (s === "array") {
                a(p)
            } else {
                if (s === "function") {
                    if (!h.unique || !l.has(p)) {
                        j.push(p)
                    }
                }
            }
        }
    }, b = function (o, n) {
        n = n || [];
        k = !h.memory || [o, n];
        c = true;
        d = true;
        e = g || 0;
        g = 0;
        f = j.length;
        for (; j && e < f; e++) {
            if (j[e].apply(o, n) === false && h.stopOnFalse) {
                k = true;
                break
            }
        }
        d = false;
        if (j) {
            if (!h.once) {
                if (m && m.length) {
                    k = m.shift();
                    l.fireWith(k[0], k[1])
                }
            } else {
                if (k === true) {
                    l.disable()
                } else {
                    j = []
                }
            }
        }
    }, l = {
        add: function () {
            if (j) {
                var n = j.length;
                a(arguments);
                if (d) {
                    f = j.length
                } else {
                    if (k && k !== true) {
                        g = n;
                        b(k[0], k[1])
                    }
                }
            }
            return this
        },
        remove: function () {
            if (j) {
                var p = arguments, n = 0, o = p.length;
                for (; n < o; n++) {
                    for (var q = 0; q < j.length; q++) {
                        if (p[n] === j[q]) {
                            if (d) {
                                if (q <= f) {
                                    f--;
                                    if (q <= e) {
                                        e--
                                    }
                                }
                            }
                            j.splice(q--, 1);
                            if (h.unique) {
                                break
                            }
                        }
                    }
                }
            }
            return this
        },
        has: function (n) {
            if (j) {
                var o = 0, p = j.length;
                for (; o < p; o++) {
                    if (n === j[o]) {
                        return true
                    }
                }
            }
            return false
        },
        empty: function () {
            j = [];
            return this
        },
        disable: function () {
            j = m = k = undefined;
            return this
        },
        disabled: function () {
            return !j
        },
        lock: function () {
            m = undefined;
            if (!k || k === true) {
                l.disable()
            }
            return this
        },
        locked: function () {
            return !m
        },
        fireWith: function (o, n) {
            if (m) {
                if (d) {
                    if (!h.once) {
                        m.push([o, n])
                    }
                } else {
                    if (!(h.once && k)) {
                        b(o, n)
                    }
                }
            }
            return this
        },
        fire: function () {
            l.fireWith(this, arguments);
            return this
        },
        fired: function () {
            return !!c
        }
    };
    return l
};
$.ig.util.jqueryDeferred = function (d) {
    var b = $.ig.util.jqueryCallbacks("once memory"), c = $.ig.util.jqueryCallbacks("once memory"), g = $.ig.util.jqueryCallbacks("memory"), j = "pending", f = {
        resolve: b,
        reject: c,
        notify: g
    }, h = {
        done: b.add,
        fail: c.add,
        progress: g.add,
        state: function () {
            return j
        },
        isResolved: b.fired,
        isRejected: c.fired,
        then: function (k, l, m) {
            a.done(k).fail(l).progress(m);
            return this
        },
        always: function () {
            a.done.apply(a, arguments).fail.apply(a, arguments);
            return this
        },
        pipe: function (k, l, m) {
            return $.ig.util.jqueryDeferred(function (n) {
                jQuery.each({
                    done: [k, "resolve"],
                    fail: [l, "reject"],
                    progress: [m, "notify"]
                }, function (r, p) {
                    var q = p[0], o = p[1], s;
                    if (jQuery.isFunction(q)) {
                        a[r](function () {
                            s = q.apply(this, arguments);
                            if (s && jQuery.isFunction(s.promise)) {
                                s.promise().then(n.resolve, n.reject, n.notify)
                            } else {
                                n[o + "With"](this === a ? n : this, [s])
                            }
                        })
                    } else {
                        a[r](n[o])
                    }
                })
            }).promise()
        },
        promise: function (l) {
            if (l == null) {
                l = h
            } else {
                for (var k in h) {
                    l[k] = h[k]
                }
            }
            return l
        }
    }, a = h.promise({}), e;
    for (e in f) {
        a[e] = f[e].fire;
        a[e + "With"] = f[e].fireWith
    }
    a.done(function () {
        j = "resolved"
    }, c.disable, g.lock).fail(function () {
            j = "rejected"
        }, b.disable, g.lock);
    if (d) {
        d.call(a, a)
    }
    return a
};
$.ig.util.deferred = function () {
    if ($.Deferred !== undefined) {
        return $.Deferred()
    } else {
        return $.ig.util.jqueryDeferred()
    }
};
$.ig.util.ajax = function (e, a, b, d) {
    var c = $.ig.util.deferred();
    $.ajax({
        url: e,
        contentType: a,
        data: b,
        type: d,
        dataType: "text",
        success: function (f, h, g) {
            c.resolve(f)
        },
        error: function (g, h, f) {
            c.reject(f)
        }
    });
    return c.promise()
};
( function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 1000
        }).addClass("ui-igtrialwatermark")
    })
}(jQuery));