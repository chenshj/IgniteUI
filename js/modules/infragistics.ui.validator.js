﻿/*
 * Infragistics.Web.ClientUI Validator localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.Validator) {
    $.ig.Validator = {
        locale: {
            defaultMessage: "Please fix this field",
            selectMessage: "Please select a value",
            rangeSelectMessage: "Please select no more than {0} and not less than {1} items",
            minSelectMessage: "Please select at least {0} items",
            maxSelectMessage: "Please select no more than {0} items",
            rangeLengthMessage: "Please enter a value between {0} and {1} characters long",
            minLengthMessage: "Please enter at least {0} characters",
            maxLengthMessage: "Please enter no more than {0} characters",
            requiredMessage: "This field is required",
            maskMessage: "Please fill all required positions",
            dateFieldsMessage: "Please enter values in date fields",
            invalidDayMessage: "Invalid day of month. Please enter correct day",
            dateMessage: "Please enter a valid date",
            numberMessage: "Please enter a valid number",
            rangeMessage: "Please enter a value between {0} and {1}",
            minMessage: "Please enter a value greater than or equal to {0}",
            maxMessage: "Please enter a value less than or equal to {0}"
        }
    };
    /*
     * Infragistics.Web.ClientUI Editors 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     * Depends on:
     * jquery-1.4.4.js
     * jquery.ui.core.js
     * jquery.ui.widget.js

     * Example to use:
     *	<script type="text/javascript">
     *	$(function () {
     *		$('#text1').igValidator({ minLength: 3 });
     *	});
     *	</script>
     *	<input id="text1" type="text" />
     */
}
( function (a) {
    var d = "=id", b = null, f = {}, e = function (g) {
        try {
            g.preventDefault();
            g.stopPropagation()
        } catch (h) {
        }
    }, c = function (h, g) {
        var i = h.id;
        if (!i && g) {
            h._fid = g
        }
        return i || h._fid
    };
    a.widget("ui.igValidator", {
        options: {
            showIcon: null,
            animationShow: null,
            animationHide: null,
            enableTargetErrorCss: null,
            alignment: null,
            keepFocus: null,
            onchange: null,
            onblur: null,
            formSubmit: null,
            onsubmit: null,
            bodyAsParent: true,
            required: false,
            minLength: -1,
            maxLength: -1,
            min: null,
            max: null,
            regExp: null,
            checkboxesName: false,
            locale: null,
            errorLabel: null,
            element: null,
            theme: null,
            errorMessage: null
        },
        css: {
            label: "ui-igvalidator ui-widget ui-state-error ui-corner-all",
            icon: "ui-igvalidator-icon ui-icon ui-icon-alert",
            target: "ui-igvalidator-target"
        },
        locale: {
            defaultMessage: "Please fix this field",
            selectMessage: "Please select a value",
            rangeSelectMessage: "Please select no more than {0} and not less than {1} items",
            minSelectMessage: "Please select at least {0} items",
            maxSelectMessage: "Please select no more than {0} items",
            rangeLengthMessage: "Please enter a value between {0} and {1} characters long",
            minLengthMessage: "Please enter at least {0} characters",
            maxLengthMessage: "Please enter no more than {0} characters",
            requiredMessage: "This field is required",
            regExpMessage: "Please fix pattern of this field",
            maskMessage: "Please fill all required positions",
            dateFieldsMessage: "Please enter values in date fields",
            invalidDayMessage: "Invalid day of month. Please enter correct day",
            dateMessage: "Please enter a valid date",
            numberMessage: "Please enter a valid number",
            rangeMessage: "Please enter a value between {0} and {1}",
            minMessage: "Please enter a value greater than or equal to {0}",
            maxMessage: "Please enter a value less than or equal to {0}"
        },
        events: {
            checkValue: null,
            validation: null,
            errorShowing: null,
            errorHiding: null,
            errorShown: null,
            errorHidden: null
        },
        _create: function () {
            var l, k, h, j = this.options, i = this, g = a.ui.igValidator.defaults;
            for (l in j) {
                if (j.hasOwnProperty(l) && j[l] === null && g[l] !== undefined) {
                    j[l] = g[l]
                }
            }
            h = i.element;
            i._state = 3;
            i._focTime = 0;
            i._init0();
            k = h[0].nodeName;
            if (k === "SELECT") {
                k = 5
            } else {
                if (( k = h[0].type) === "checkbox") {
                    k = j.checkboxesName ? 6 : 4
                } else {
                    if (k === "radio") {
                        k = 6
                    } else {
                        k = 0
                    }
                }
            }
            i._elem = (k !== 6) ? h : a("[name=" + h[0].name + "]").map(function () {
                return (this.form === h[0].form) ? this : null
            });
            i._t = k;
            if (!j.ctl && !j.combo) {
                i._elem.bind(i._evts = {
                    keydown: function (m) {
                        if (( l = m.keyCode) < 15 || l > 20) {
                            i._evt(m, (l === 9) ? null : i, l === 9)
                        }
                    },
                    change: function (m) {
                        i._evt(m, i)
                    },
                    cut: function (m) {
                        i._evt(m, i)
                    },
                    paste: function (m) {
                        i._evt(m, i)
                    },
                    beforecut: function (m) {
                        i._evt(m, i)
                    },
                    drop: function (m) {
                        i._evt(m, i)
                    },
                    dragend: function (m) {
                        i._evt(m, i)
                    },
                    blur: function (m) {
                        i._evt(m, i, 1)
                    }
                });
                if (j.element) {
                    j.element.bind(i._evtsE = {
                        mousedown: function (m) {
                            i._evt(m, i)
                        },
                        mouseup: function (m) {
                            i._evt(m)
                        }
                    })
                }
            }
        },
        _evt: function (h, i, g) {
            var j = this.options;
            if ((g && !j.onblur) || (!g && !j.onchange)) {
                return
            }
            if (i) {
                setTimeout(function () {
                    i.validate(h)
                }, 20)
            } else {
                this.validate(h)
            }
        },
        _loc: function (g, h) {
            var i = this.options, j = i.errorMessage || i[g += ( h ? "" : "Message")] || (i.locale ? i.locale[g] : null);
            j = j || (a.ig && a.ig.Validator && a.ig.Validator.locale ? a.ig.Validator.locale[g] : null);
            return j || this.locale[g]
        },
        _foc1: function (g) {
            g = g.keepFocus;
            return (g && this._t !== 6 && !(g.indexOf && g.indexOf("n") === 0)) ? ((g === "once" || g === 1) ? 1 : 2) : null
        },
        _onTab: function (g) {
            if (g && g.keyCode === 9 && this._foc1(this.options) === 2) {
                e(g);
                return 1
            }
        },
        _init0: function (g) {
            var i, h, l, j = this._id, k = this.options;
            if (g) {
                this._doError()
            } else {
                if (k.ctl) {
                    k.ctl._validator = this
                }
            }
            i = this.element[0].form;
            if (!i) {
                return
            }
            h = c(i, "fid");
            if (!j) {
                j = this.element[0].id;
                if (!j) {
                    j = (d += d.length)
                }
                this._id = j
            }
            l = f[h];
            if (!g && (k.onsubmit || k.formSubmit)) {
                if (!i._ig_onsubmit && k.onsubmit) {
                    i._ig_onsubmit = 1;
                    a(i).submit(function (m) {
                        var n = f[c(this)];
                        if (n) {
                            n.validate(m)
                        }
                    })
                }
                if (!i._ig_formsubmit && k.formSubmit) {
                    i._ig_formsubmit = i.submit;
                    i.submit = function () {
                        var m = f[c(this)];
                        if (m && m.validate()) {
                            return
                        }
                        if (this._ig_formsubmit) {
                            this._ig_formsubmit()
                        }
                    }
                }
                if (!l) {
                    l = f[h] = {
                        ctls: {},
                        validate: function (n) {
                            var o, p = false, q = 1, m = this.ctls;
                            for (o in m) {
                                if (m.hasOwnProperty(o) && m[o].validate(n, q)) {
                                    p = true;
                                    if (!a.ui.igValidator.defaults.showAllErrorsOnSubmit) {
                                        q = 2
                                    }
                                }
                            }
                            if (n && p) {
                                e(n)
                            }
                            return p
                        }
                    }
                }
                l.ctls[j] = this
            } else {
                if (l && l.ctls && l.ctls[j]) {
                    delete l.ctls[j]
                }
            }
        },
        getLocaleOption: function (g) {
            return this._loc(g, 1)
        },
        isMessageDisplayed: function () {
            return this._state > 6
        },
        isValidState: function () {
            return !(this._state >= 6 || this.validate(null, null, 1))
        },
        hide: function (g) {
            this._doError(null, null, g ? 6 : 5)
        },
        validate: function (h, m, g) {
            var q, r, s, p = null, k = "Length", n = this._t, j = -1, l = this.options, i = this.element;
            if (!i) {
                return
            }
            if (n > 3) {
                k = "Select";
                j = s = (n === 5) ? (i[0].multiple ? a("option:selected", i[0]).length : i[0].selectedIndex) : this._elem.filter(":checked").length
            } else {
                s = i.hasClass("ui-igcombo-nulltext") ? "" : i.val();
                j = s.length
            }
            if (l.ctl) {
                delete l.ctl._invPlus
            }
            if (!this._trigger("checkValue", h, r = {
                owner: this,
                message: this._loc("default"),
                value: l.ctl ? l.ctl.value() : s
            })) {
                if (l.ctl && !g) {
                    l.ctl._invPlus = r.message
                }
                return g ? 2 : this._doError(r.message, h, m)
            }
            if (j === 0) {
                if (g) {
                    if (l.required) {
                        return 2
                    }
                } else {
                    if (!l.required) {
                        return this._doError(null, h, m)
                    }
                }
            }
            q = l.regExp;
            if (q && j > 0) {
                if (!q.test) {
                    q = new RegExp(q.toString())
                }
                p = q.test(s) ? null : this._loc("regExp");
                if (l.ctl) {
                    l.ctl._invPlus = p
                }
            }
            if (!p && l.required && (j === 0 || !s)) {
                p = this._loc((n > 4) ? "select" : "required")
            }
            if (!p) {
                q = l.minLength;
                r = l.maxLength;
                if (j >= 0 && (q > j || (r > 0 && r < j))) {
                    if (q > 0 && r > 0) {
                        p = this._loc("range" + k).replace("{0}", r).replace("{1}", q)
                    } else {
                        p = this._loc(((q > 0) ? "min" : "max") + k).replace("{0}", (q > 0) ? q : r)
                    }
                    if (l.ctl) {
                        l.ctl._invPlus = p
                    }
                }
            }
            if (p) {
                return g ? p : this._doError(p, h, m)
            }
            if (l.ctl) {
                q = l.ctl._doInvalid(null, 9);
                q = q ? q.message : null;
                return g ? q : this._doError(q, h, m)
            }
            if (!p && n < 2 && j > 0 && ( q = (( typeof l.min === "number") ? 1 : 0) + (( typeof l.max === "number") ? 2 : 0)) > 0) {
                if (isNaN(s = parseFloat(s))) {
                    p = this._loc("number")
                } else {
                    if (q === 3 && (s < l.min || s > l.max)) {
                        p = this._loc("range").replace("{0}", l.min).replace("{1}", l.max)
                    } else {
                        if (q === 1 && s < l.min) {
                            p = this._loc("min").replace("{0}", l.min)
                        } else {
                            if (q === 2 && s > l.max) {
                                p = this._loc("max").replace("{0}", l.max)
                            }
                        }
                    }
                }
            }
            return g ? p : this._doError(p, h, m)
        },
        _xyCheck: function (h) {
            var g, j, i = this._xy;
            if (!i) {
                return
            }
            if (this._elem && this._elem[0].offsetWidth) {
                j = i.e.offset();
                g = j.left - i.x;
                if (g !== i.x0) {
                    i.x0 = g;
                    this._dd.css("left", (i.xDD + g) + "px")
                }
                g = j.top - i.y;
                if (g !== i.y0) {
                    i.y0 = g;
                    this._dd.css("top", (i.yDD + g) + "px")
                }
            }
            if (h || !j) {
                delete this._xy;
                clearInterval(i.i)
            }
            if (!j) {
                this._doError()
            }
        },
        _doError: function (C, m, B) {
            var t, q, r, H, G, i, p, D, k, h, w, g, F, J, n, K = 1, u = this, j = u.css, E = "left", I = "top", A = u._state, z = C, l = u._lbl, v = u.options;
            if (!B) {
                B = 0
            }
            k = v.ctl;
            h = (v.alignment === "bottom") ? 0 : (v.alignment === "left") ? -1 : 1;
            if (!C && l) {
                C = l[0]._txt
            }
            if (A < 6 && !z) {
                return
            }
            w = l && l[0]._txt === C && !u._changed;
            this._changed = null;
            if (z && u._onTab(m) && w) {
                return 2
            }
            if (z && w) {
                if (A > 5) {
                    if (b === u) {
                        u._focus(v, B, m)
                    }
                    return 2
                }
            }
            if (!B && z && b && new Date().getTime() - b._focTime < 100) {
                return 2
            }
            i = {
                owner: u,
                message: C,
                invalid: !!z
            };
            if (B < 5 && !u._trigger("validation", m, i)) {
                return
            }
            u._state = z ? 6 : 1;
            p = v.element || u.element;
            if (v.enableTargetErrorCss) {
                if (z) {
                    p.addClass(j.target)
                } else {
                    if (B !== 5) {
                        p.removeClass(j.target)
                    }
                }
            }
            if (B === 2) {
                return 2
            }
            if (!u._trigger(z ? "errorShowing" : "errorHiding", m, i)) {
                return 1
            }
            if (!z && !l) {
                return
            }
            C = i.message;
            u._state++;
            t = !v.bodyAsParent;
            if (t) {
                E = "marginLeft";
                I = "marginTop"
            }
            q = k ? k._element : p;
            g = v.errorLabel;
            if (typeof g === "string") {
                g = a("body").find('[data-valmsg-for="' + g + '"]').removeClass("field-validation-valid").addClass("field-validation-error")
            }
            if (g && (!g.length || !g.find)) {
                g = null
            }
            if (g) {
                l = g
            } else {
                if (!l) {
                    l = u.element[0].id;
                    if (l) {
                        l = ' for="' + l + '"'
                    }
                    l = a("<label" + l + "/>").addClass(j.label).css({
                        position: "absolute",
                        visibility: "hidden"
                    });
                    l[0].unselectable = "on";
                    l.html(C);
                    l[0]._id = 98;
                    u._dd = v.theme ? a("<span/>").addClass(v.theme).css("position", "absolute").append(l) : l;
                    if (t) {
                        u._dd.prependTo(q.parent())
                    } else {
                        u._dd.appendTo(a("body"))
                    }
                }
            }
            u._lbl = l;
            if (z) {
                l[0]._txt = C;
                if (g) {
                    l.html(C).show()
                } else {
                    u._dd.css(E, "0px").css(I, "0px");
                    if (v.showIcon) {
                        if (C === " " || C === "&nbsp;") {
                            C = ""
                        }
                        C = '<span class="' + j.icon + '"></span><span style="display:inline-block;width:18px;"></span>' + C
                    }
                    l.html(C);
                    l.css("width", "auto").css("height", "auto");
                    u._width = Math.max(l.width(), 5);
                    u._height = Math.max(l.height(), 10);
                    if (v.showIcon) {
                        u._height = Math.max(l.children()[0].offsetHeight, u._height)
                    }
                }
                try {
                    q.parentsUntil(document.body).add(q).add(p).add(l).each(function () {
                        D = this.style ? this.style.zIndex : 0;
                        D = D ? parseInt(D, 10) : null;
                        if (D && !isNaN(D) && D > K) {
                            K = D
                        }
                    })
                } catch (s) {
                }
                l.css("zIndex", K);
                u._focTime = 0;
                b = u
            }
            r = function () {
                if (z) {
                    l.css("filter", "")
                } else {
                    if (g) {
                        g.html(" ").hide()
                    } else {
                        u._dd.remove()
                    }
                    u._dd = u._lbl = b = null
                }
                u._state++
            };
            if (z) {
                u._focus(v, B, m);
                D = v.animationShow;
                if (D < 5) {
                    D = null
                }
                if (g) {
                    l.css("opacity", 0).show()
                } else {
                    l.css({
                        opacity: D ? 0 : 1,
                        height: ( D ? 0 : u._height) + "px",
                        width: Math.floor(u._width / ((D && h >= 0) ? 2 : 1)) + "px",
                        display: "",
                        visibility: "visible"
                    });
                    n = (k && k._swap) ? u.element : p;
                    G = n.offset();
                    if (!t) {
                        F = G.left;
                        J = G.top
                    }
                    G.top += h ? 0 : n.outerHeight();
                    if (k && k._swap) {
                        G.left -= k._leftShift()
                    }
                    if (h) {
                        G.left += (h < 0) ? -l[0].offsetWidth : q[0].offsetWidth
                    }
                    if (t) {
                        H = l.offset();
                        G.left -= H.left;
                        G.top -= H.top
                    } else {
                        u._xy = {
                            x0: 0,
                            y0: 0,
                            x: F,
                            y: J,
                            e: n,
                            xDD: G.left,
                            yDD: G.top,
                            i: setInterval(function () {
                                u._xyCheck()
                            }, 300)
                        }
                    }
                    u._dd.css(E, G.left + "px").css(I, G.top + "px")
                }
                if (D) {
                    l.animate(g ? {
                        opacity: 1
                    } : {
                        opacity: 1,
                        height: u._height,
                        width: u._width
                    }, D, null, r)
                } else {
                    r()
                }
                u._trigger("errorShown", m, i);
                return 2
            }
            u._xyCheck(true);
            D = v.animationHide;
            if (D < 5) {
                D = null
            }
            if (D) {
                if (g) {
                    l.animate({
                        opacity: 0
                    }, D, null, r)
                } else {
                    l.animate({
                        opacity: 0.6
                    }, Math.floor(D * 0.34)).animate({
                            opacity: 0,
                            height: 0,
                            width: Math.floor(u._width / ((h < 0) ? 1 : 2))
                        }, Math.floor(D * 0.66), null, r)
                }
            } else {
                r()
            }
            u._trigger("errorHidden", m, i)
        },
        _focus: function (i, j, g) {
            var h = (!j && this._foc1(i)) ? this.element : null;
            g = (g && g.keyCode !== 9) ? g.type : "";
            if (h && !(i.ctl && i.ctl._fcs) && (this._foc1(i) !== 1 || !this._focTime) && g.indexOf("key") < 0 && g.indexOf("mouse") < 0) {
                a.ui.igValidator._keepFoc = i.ctl;
                g = a.ui.igValidator._dd;
                if (g) {
                    g._doDrop()
                }
                this._focTime = new Date().getTime();
                setTimeout(function () {
                    try {
                        h.focus()
                    } catch (k) {
                    }
                }, 0)
            }
        },
        _setOption: function (g, h) {
            if (this.options[g] === h) {
                return this
            }
            a.Widget.prototype._setOption.apply(this, arguments);
            if (typeof h !== "function" && g !== "locale") {
                this._init0()
            }
            return this
        },
        destroy: function () {
            if (!this._elem) {
                return this
            }
            var g = this.options;
            if (!g.ctl) {
                this._elem.unbind(this._evts);
                if (this._evtsE) {
                    g.element.unbind(this._evtsE)
                }
            }
            this._init0(1);
            g.element = g.ctl = this._evts = this._evtsE = this._elem = null;
            a.Widget.prototype.destroy.apply(this, arguments);
            return this
        }
    });
    a.ui.igValidator._act = function (i, g) {
        var h, j, k = a.ui.igValidator;
        if (!k) {
            return
        }
        h = k._dd;
        if (h && (!h._ddOn || !(h._field || h.mainElem))) {
            h = null;
            delete k._dd
        }
        j = k._keepFoc;
        if (j && !j._field) {
            j = null;
            delete k._keepFoc
        }
        if (g === "drop") {
            if (j && j !== i && !j.validate()) {
                return true
            }
            k._dd = i;
            return
        }
        if (g === "hide") {
            if (h === i) {
                delete k._dd
            }
            return
        }
        if (!g && j === i) {
            delete k._keepFoc
        }
        return j && j !== i
    };
    a.extend(a.ui.igValidator, {
        version: "12.2.20122.1021"
    });
    a.ui.igValidator.defaults = {
        showAllErrorsOnSubmit: false,
        showIcon: true,
        animationShow: 300,
        animationHide: 300,
        enableTargetErrorCss: true,
        alignment: "bottom",
        keepFocus: null,
        onchange: true,
        onblur: true,
        formSubmit: false,
        onsubmit: true
    }
}(jQuery));
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