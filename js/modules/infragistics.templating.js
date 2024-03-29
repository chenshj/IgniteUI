﻿/*
 * Infragistics.Web.ClientUI templating localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.Templating) {
    $.ig.Templating = {};
    $.extend($.ig.Templating, {locale: {undefinedArgument: "An error has occurred while trying to retrieve data source property: "}});
    /*
     * Infragistics.Web.ClientUI Templating Engine 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * Engine used for data templating
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     *
     */
}
(function (a) {
    a.ig = a.ig || {};
    a.extend(a.ig, {tmpl: function (e, d, b) {
        var f = e, c;
        f = f.replace(this.regExp.lineBreak, "");
        f = f.replace(this.regExp.comment, "");
        if (typeof d === "function") {
            if (b) {
                d = d.apply(this, b)
            } else {
                d = d.call()
            }
        }
        if (this._internalTmplCache && this._internalTmplCache.hasOwnProperty(f)) {
            this.tokens = this._internalTmplCache[f].tokens;
            this.args = this._internalTmplCache[f].args;
            this.i = this._internalTmplCache[f].i;
            this._hasBlock = this._internalTmplCache[f]._hasBlock;
            f = this._internalTmplCache[f].tmpl
        } else {
            this.tokens = [];
            this.args = [];
            this.i = 0;
            this._tokenizeTemplate(f);
            c = f;
            this._internalTmplCache[c] = {};
            this._internalTmplCache[c].tokens = this.tokens;
            if (this.regExp.block.test(f)) {
                this._hasBlock = true;
                f = this._tokenizeDirectives(f)
            } else {
                this._hasBlock = false
            }
            this._internalTmplCache[c].args = this.args;
            this._internalTmplCache[c].i = this.i;
            this._internalTmplCache[c]._hasBlock = this._hasBlock;
            this._internalTmplCache[c].tmpl = f
        }
        if (!this.tokens) {
            return f
        }
        if (this._hasBlock) {
            f = this._compileTemplate(f, d)
        } else {
            f = this._populateTemplate(f, d)
        }
        delete this.args;
        delete this.tokens;
        delete this._hasBlock;
        delete this.i;
        return f
    }, clearTmplCache: function () {
        delete this._internalTmplCache;
        this._internalTmplCache = {}
    }, encode: function (b) {
        return b !== null && b !== undefined ? b.toString().replace(this.regExp.lt, "&lt;").replace(this.regExp.gt, "&gt;").replace(this.regExp.ap, "&#39;").replace(this.regExp.ic, "&#34;") : ""
    }, regExp: {comment: /(?!\"|\')#[^#]*#(?!\"|\')/g, sub: /\$\{(([\w\$]+\.?[\w\$]+)+)\}/, nonEncodeSub: /\{\{html\s+([\w\$]+\.?[\w\$]+)+\}\}/, forSub: /\$\{(([\w\$]+\.[\w\$]+)+)\}/, arg: /args\[\d+\](?!.*\+)/, block: /\{\{(\w+).*?\}\}+(.*)(\{\{\/\1\}\})/, blockCont: /\{\{(?!\/)(\S+)(.*)\}\}(.*)/, blockDirective: /\{\{\S+.*?\}\}/, index: /\$i/g, lineBreak: /(\r\n|\n|\r)/gm, lt: /</g, gt: />/g, ap: /'/g, ic: /"/g}, directives: {"if": {start: "if (", close: ") {", end: " }"}, elseif: {start: " } else if (", close: ") {", end: ""}, "else": {start: " } else {", close: "", end: ""}, each: {start: "for (var i = 0; i < $data.length; i++) {", close: "", end: " }"}}, _internalTmplCache: {}, _tokenizeTemplate: function (c) {
        var d, b;
        if (this.regExp.sub.test(c)) {
            d = this.regExp.sub.exec(c);
            while (d !== null) {
                b = d[1].split(".");
                c = c.replace(new RegExp("\\$\\{" + d[1].replace(/\$/g, "\\$") + "\\}", "g"), "");
                d[3] = new RegExp("\\$\\{" + d[1].replace(/\$/g, "\\$") + "\\}", "g");
                d[1] = b;
                d[2] = true;
                this.tokens.push(d);
                d = this.regExp.sub.exec(c)
            }
        }
        if (this.regExp.nonEncodeSub.test(c)) {
            d = this.regExp.nonEncodeSub.exec(c);
            while (d !== null) {
                b = d[1].split(".");
                c = c.replace(new RegExp("\\{\\{html\\s+" + d[1].replace(/\$/g, "\\$") + "\\}\\}", "g"), "");
                d[3] = new RegExp("\\{\\{html\\s+" + d[1].replace(/\$/g, "\\$") + "\\}\\}", "g");
                d[1] = b;
                d[2] = false;
                this.tokens.push(d);
                d = this.regExp.nonEncodeSub.exec(c)
            }
        }
    }, _tokenizeDirectives: function (c) {
        var d = 'var result = "";', e = this.regExp.block.exec(c), b;
        if (c.indexOf(e[0]) > 0) {
            b = c.split(e[0]);
            if (b[0] && b[0].length > 0) {
                this.args.push(b[0]);
                d += "result += args[" + this.i++ + "];"
            }
        }
        d += this._handleCompleteBlock(e);
        if (b && b.length > 0 && b[1].length > 0) {
            this.args.push(b[1]);
            d += "result += args[" + this.i++ + "];"
        }
        d += "return result;";
        return d
    }, _handleCompleteBlock: function (c) {
        var b = c[0];
        b = b.replace("{{" + c[1], this.directives[c[1]].start);
        if (c[1] === "each") {
            b = this._handleEach(b, c)
        } else {
            if (c[1] === "if") {
                b = this._handleIfElse(b, c)
            }
        }
        return b
    }, _handleEach: function (h, j) {
        var i = h, c, b, e, g, d, f;
        c = this.regExp.sub.exec(i);
        i = i.replace(c[0], "");
        i = i.replace("$data", c[0]);
        b = j[2];
        if (/\$data/.test(b)) {
            b = b.replace(/\$data/g, '" + ' + c[0] + '[i] + "');
            this.args.push(c[0]);
            this.i++
        }
        e = this.regExp.forSub.exec(b);
        while (e) {
            b = b.replace(new RegExp("\\$\\{" + e[1] + "\\}", "g"), '" + ' + c[0] + "[i]" + e[1].substr(e[1].indexOf(".")) + ' + "');
            e = this.regExp.forSub.exec(b)
        }
        b = b.replace(/\$index/g, '" + i + "');
        i = i.replace(j[2], 'result += "' + b + '"');
        i = i.replace(/\}\}/, this.directives[j[1]].close);
        i = i.replace(j[3], this.directives[j[1]].end);
        if (this.regExp.block.test(i)) {
            f = this.regExp.block.exec(i);
            i = i.replace(f[0], this._handleCompleteBlock(f))
        }
        g = this.regExp.sub.exec(i);
        while (g) {
            d = new RegExp("\\$\\{" + g[1] + "\\}", "g");
            i = i.replace(d, "args[" + this.i++ + "]");
            this.args.push(g[0]);
            g = this.regExp.sub.exec(i)
        }
        return i
    }, _handleIfElse: function (g, k) {
        var h = g, c = 0, b, f, e, d, j = [];
        h = h.replace(/\}\}/, this.directives[k[1]].close);
        d = h.lastIndexOf(k[3]);
        h = h.substr(0, d) + h.slice(d + k[3].length - 1);
        if (this.regExp.block.test(h)) {
            e = this.regExp.block.exec(h);
            h = h.replace(e[0], this._handleCompleteBlock(e))
        }
        b = k[2].split(this.regExp.blockDirective);
        j.push(h.slice(0, h.indexOf(") {") + 3));
        j.push(h.slice(h.indexOf(") {") + 3));
        for (c; c < b.length; c++) {
            if (b[c] && b[c].length && b[c].length > 0) {
                j[1] = j[1].replace(b[c], "result += args[" + this.i++ + "];");
                this.args.push(b[c])
            }
        }
        h = j.join("");
        k = this.regExp.blockCont.exec(h);
        while (k) {
            h = h.replace("{{" + k[1], this.directives[k[1]].start);
            h = h.replace(/\}\}/, this.directives[k[1]].close);
            k = this.regExp.blockCont.exec(h)
        }
        f = this.regExp.sub.exec(h);
        while (f) {
            h = h.replace(new RegExp("\\$\\{" + f[1] + "\\}", "g"), "args[" + this.i++ + "]");
            this.args.push(f[0]);
            f = this.regExp.sub.exec(h)
        }
        return h
    }, _populateTemplate: function (g, b) {
        var c, d, e = "", f;
        if (!b.length) {
            for (c = 0; c < this.tokens.length; c++) {
                g = this._populateArgumentValue(b, this.tokens[c], g)
            }
            e = g
        } else {
            if (b.length) {
                for (d = 0; d < b.length; d++) {
                    f = g;
                    for (c = 0; c < this.tokens.length; c++) {
                        f = this._populateArgumentValue(b[d], this.tokens[c], f)
                    }
                    f = f.replace(this.regExp.index, d);
                    e += f
                }
            }
        }
        return e
    }, _compileTemplate: function (o, c) {
        var e, g, h, l = "", m, n = [], b = "", d;
        if (!c.length) {
            for (g = 0; g < this.args.length; g++) {
                b = this.args[g];
                for (e = 0; e < this.tokens.length; e++) {
                    if (b === this.tokens[e][0]) {
                        b = this._getArgumentValue(c, this.tokens[e], b);
                        break
                    } else {
                        if (typeof b === "string") {
                            b = this._populateArgumentValue(c, this.tokens[e], b)
                        }
                    }
                }
                if (b === undefined) {
                    throw new Error(a.ig.Templating.locale.undefinedArgument + this.tokens[e][0])
                }
                if (typeof b === "string") {
                    b = b.replace(this.regExp.index, 0)
                }
                n.push(b)
            }
            o = o.replace(/\$i/g, 0);
            l = new Function("args", o).call(this, n) || ""
        } else {
            if (c.length) {
                m = o.replace(this.regExp.index, "args[" + this.args.length + "]");
                d = new Function("args", m);
                for (g = 0; g < c.length; g++) {
                    n = [];
                    for (h = 0; h < this.args.length; h++) {
                        b = this.args[h];
                        for (e = 0; e < this.tokens.length; e++) {
                            if (b === this.tokens[e][0]) {
                                b = this._getArgumentValue(c[g], this.tokens[e], b);
                                break
                            } else {
                                if (typeof b === "string") {
                                    b = this._populateArgumentValue(c[g], this.tokens[e], b)
                                }
                            }
                        }
                        if (b === undefined) {
                            throw new Error(a.ig.Templating.locale.undefinedArgument + this.tokens[e][0])
                        }
                        if (typeof b === "string") {
                            b = b.replace(this.regExp.index, g)
                        }
                        n.push(b)
                    }
                    n.push(g);
                    l += d.call(this, n) || ""
                }
            }
        }
        return l
    }, _getArgumentValue: function (c, f, b) {
        var e, d;
        if (f[1].length && f[1].length > 1) {
            e = c;
            for (d = 0; d < f[1].length; d++) {
                if (e && e.hasOwnProperty(f[1][d])) {
                    e = e[f[1][d]]
                } else {
                    e = "";
                    break
                }
            }
            if (f[2] && typeof e === "string") {
                b = this.encode(e)
            } else {
                b = e
            }
        } else {
            if (f[2] && typeof c[f[1]] === "string") {
                b = this.encode(c[f[1]])
            } else {
                b = c[f[1]]
            }
        }
        return b
    }, _populateArgumentValue: function (c, g, b) {
        var f, d, e = this;
        if (g[1].length && g[1].length > 1) {
            f = c;
            for (d = 0; d < g[1].length; d++) {
                if (f && f.hasOwnProperty(g[1][d])) {
                    f = f[g[1][d]]
                } else {
                    f = "";
                    break
                }
            }
            if (g[2] && typeof f === "string") {
                b = b.replace(g[3], function () {
                    return e.encode(f)
                })
            } else {
                b = b.replace(g[3], function () {
                    return f
                })
            }
        } else {
            if (g[2]) {
                b = b.replace(g[3], function () {
                    return e.encode(c[g[1]])
                })
            } else {
                b = b.replace(g[3], function () {
                    return c[g[1]]
                })
            }
        }
        return b
    }})
}(jQuery));
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));