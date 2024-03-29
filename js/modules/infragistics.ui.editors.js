﻿/*
 * Infragistics.Web.ClientUI Editors localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.Editor) {
    $.ig.Editor = { locale: { spinUpperTitle: "Increment", spinLowerTitle: "Decrement", buttonTitle: "Show list", clearTitle: "Clear value", datePickerButtonTitle: "Show calendar" } };
    /*
     * Infragistics.Web.ClientUI Editors 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     * jquery-1.4.4.js
     * jquery.ui.core.js
     * jquery.ui.widget.js
     * jquery.ui.datepicker.js
     * infragistics.util.js
     *
     * Example to use:
     *	<script type="text/javascript">
     *	$(function () {
     *		$('#editor1').igEditor();
     *	});
     *	</script>
     *	<input id="editor1" type="text" />
     */
}

(function (a) {

    var b = function (j, i) {
        return j === null || j === undefined || (i && typeof j === "number" && isNaN(j))
    },

    c = function (j, i) {
        if (isNaN(j = parseInt(j, 10))) {
            j = i || 0
        }
        return j
    },

    f = function (i, j) {
        var k = j ? "Left" : "Top", l = j ? "Right" : "Bottom";
        return c(i.css("padding" + k)) + c(i.css("padding" + l)) + c(i.css("border" + k + "Width")) + c(i.css("border" + l + "Width"))
    },

    h = function (i) {
        return b(i) ? "" : i.toString()
    },

    d = function () {
        return new Date().getTime()
    },

    e = function (i, j) {
        j = j || i.offset();
        i = i ? i[0].ownerDocument : document;
        i = i ? i.documentElement : null;
        var k = i ? i.msContentZoomFactor : null;
        if (k && k > 1) {
            j.left += i.scrollLeft - window.pageXOffset;
            j.top += i.scrollTop - window.pageYOffset
        }
        return j
    },

    g = function (i) {
        try {
            i.preventDefault();
            i.stopPropagation()
        } catch (j) {
        }
    };

    a.ig = a.ig || {};

    a.widget("ui.igEditor", {
        options: {
            value: null, tabIndex: null, nullText: null, button: "none", textAlign: null, listItems: null, theme: null, type: null, locale: null, width: null, height: null, validatorOptions: null, required: false, display: "inline-block", renderInContainer: false, selectionOnFocus: -1, readOnly: false, spinOnReadOnly: false, focusOnSpin: false, spinWrapAround: false, hideEnterKey: true, dropDownOnReadOnly: false, dropDownTriggers: "button,ctrl+arrow,alt+arrow", listDropDownAsChild: false, listWidth: 0, listMaxHeight: 300, listColumns: 1, animationShowDuration: 200, animationHideDuration: 200, inputName: null
        },

        events: { keydown: 0, keypress: 1, keyup: 2, mousedown: 3, mouseup: 4, mousemove: 5, mouseover: 6, mouseleave: 7, focus: 8, blur: 9, valueChanging: 10, valueChanged: 11, textChanged: 12, invalidValue: 13, spin: 14, buttonClick: 15, showDropDown: 16, hideDropDown: 17, listSelecting: 18, listSelected: 19 },

        css: { editor: "ui-igedit ui-state-default ui-widget ui-corner-all", container: "ui-igedit-container", field: "ui-igedit-field", fieldRtl: "ui-igedit-rtl", textArea: "ui-igedit-textarea", hover: "ui-igedit-hover ui-state-hover", focus: "ui-igedit-focus ui-state-focus", buttonsImageStateOverride: "ui-igedit-buttonsimagestateoverride", disabled: "ui-igedit-disabled ui-state-disabled", negative: "ui-igedit-negative", nullValue: "ui-igedit-nullvalue", button: "ui-igedit-button", buttonRtl: "ui-igedit-button-rtl", buttonFocus: "ui-igedit-buttonfocus", buttonDefault: "ui-igedit-buttondefault ui-state-default", buttonHover: "ui-igedit-buttonhover ui-state-hover", buttonPressed: "ui-igedit-buttonpressed ui-state-highlight", buttonDisabled: "ui-igedit-buttondisabled ui-state-disabled", buttonImage: "ui-igedit-buttonimage ui-icon-triangle-1-s ui-icon", buttonClear: "ui-igedit-buttonclear", buttonClearImage: "ui-igedit-buttonimage ui-icon-circle-close ui-icon", buttonImageHover: "ui-igedit-buttonimagehover", buttonImagePressed: "ui-igedit-buttonimagepressed", buttonImageDisabled: "ui-igedit-buttonimagedisabled", spinButton: "ui-igedit-spinbutton", spinButtonImage: "ui-igedit-buttonimage ui-igedit-spinbuttonimage", spinLowerImage: "ui-igedit-spinlowerimage ui-icon-carat-1-s ui-icon", spinLowerImageHover: "ui-igedit-spinlowerimagehover", spinLowerImagePressed: "ui-igedit-spinlowerimagepressed", spinLowerImageDisabled: "ui-igedit-spinlowerimagedisabled", spinUpperImage: "ui-igedit-spinupperimage ui-icon-carat-1-n ui-icon", spinUpperImageHover: "ui-igedit-spinupperimagehover", spinUpperImagePressed: "ui-igedit-spinupperimagepressed", spinUpperImageDisabled: "ui-igedit-spinupperimagedisabled", dropDown: "ui-igedit-dropdown", list: "ui-igedit-list ui-widget ui-widget-content ui-corner-all", listItem: "ui-igedit-listitem ui-state-default", listItemHover: "ui-igedit-listitemhover ui-state-hover", listItemSelected: "ui-igedit-listitemselected ui-state-highlight", listItemColumnBorder: "ui-igedit-listitemcolumnborder", noTopCorners: "ui-igedit-no-top-corners", noBottomCorners: "ui-igedit-no-bottom-corners" }, regional: a.ig._regional || {},

        _create: function (r) {
            var s, t, j = this.css, k, l, i, q, p, n = this.options, m = this;
            r = this._doType(b(r) ? n.type : r, t = n.value);
            if (typeof n.maxLength !== "number") {
                n.maxLength = 0
            }
            if (typeof n.spinDelta !== "number") {
                n.spinDelta = 1
            }
            n.nullable = n.nullable !== false;
            this._listID = -1;
            q = n.theme;
            this._css = j.field;
            k = this._element = this._render(this.element, n, j);
            if (n.display) {
                k.css("display", n.display)
            }
            if (r === 3 && (!a.datepicker || this._ta)) {
                throw new Error("The ui.igDatePicker depends on jquery.ui.datepicker and TEXTAREA/multiline is not supported")
            }
            if (this._ta) {
                this._css += " " + j.textArea
            }
            l = this._field;
            this._box = l[0].type === "checkbox";
            this._1e = l === k;
            if (n.readOnly) {
                l[0].readOnly = "readonly"
            }
            i = n.textAlign;
            if (!i && r > 3) {
                i = "right"
            }
            if (i) {
                l.css("textAlign", i)
            }
            l[0]._id = -1;
            l[0].disabled = n.disabled;
            this._hover = this._mouseDown = 0;
            this._fix = 1;
            this._fcs = -1;
            this._bad = 0;
            this._k0 = this._sel0 = 0;
            this._noPaste = 0;
            this._fixMode(1);
            this._clearHide = false;
            l.bind(m._evts = {
                keydown: function (o) {
                    m._onEvt(o, 0)
                }, keypress: function (o) {
                    m._onEvt(o, 1)
                }, keyup: function (o) {
                    m._onEvt(o, 2)
                }, paste: function (o) {
                    m._onEvt(o, 11)
                }, beforecut: function (o) {
                    m._onEvt(o, 11)
                }, cut: function (o) {
                    m._onEvt(o, 11)
                }, drop: function (o) {
                    m._onEvt(o, 11)
                }, focus: function (o) {
                    m._onEvt(o, 8)
                }, blur: function (o) {
                    m._onEvt(o, 9)
                }
            });
            s = {
                mousedown: function (o) {
                    m._onEvt(o, 3)
                }, mouseup: function (o) {
                    m._onEvt(o, 4)
                }, mousemove: function (o) {
                    m._onEvt(o, 5)
                }, MSPointerOver: function (o) {
                    m._onEvt(o, 26)
                }, mouseover: function (o) {
                    m._onEvt(o, 6)
                }, mouseleave: function (o) {
                    m._onEvt(o, 7)
                }
            };
            if (this._buttons && this._buttons[1]) {
                s.DOMMouseScroll = function (o) {
                    m._onEvt(o, 10)
                };
                s.mousewheel = function (o) {
                    m._onEvt(o, 10)
                }
            }
            k.bind(m._mEvts = s);
            this._fcs = 0;
            s = n.maxLength;
            if (s && s > 0) {
                l[0].maxLength = s
            }
            s = n._vsFormat;
            if (s && t && r > 3 && (typeof t !== "number")) {
                t = parseFloat(this._txtAsNum(t.toString(), s, "-"))
            }
            this._setVal(b(t) ? this._value : t);
            if (this._val() === "") {
                this._text = this._field[0].value = this._focTxt("", false, "")
            }
            this._fixCss();
            p = this._oldCss;
            t = n.height;
            if (!t && !this._1e) {
                t = p.height;
                if (t) {
                    t = (t.indexOf("px") > 0) ? c(t) : this.element.height()
                }
            }
            this._height(t);
            if (this._box) {
                this._fixBC(l, l)
            }
            t = n.width;
            if (!t && !this._1e) {
                t = p.width;
                if (t) {
                    t = (t.indexOf("px") > 0) ? c(t) : this.element.width()
                }
            }
            if (this._selElem) {
                delete p.width;
                delete p.height
            }
            this._width(t);
            this._lastText = this._val();
            this._initValidator();
            this._doClear(n.value)
        },

        _doType: function (i, j) {
            if (i === "text") {
                i = 0
            }
            if (i === "mask") {
                i = 1
            }
            if (i === "date") {
                i = 2
            }
            if (i === "datepicker") {
                i = 3
            }
            if (i === "numeric") {
                i = 4
            }
            if (i === "currency") {
                i = 5
            }
            if (i === "percent") {
                i = 6
            }
            if (typeof i !== "number" || i < 0 || i > 6) {
                if (typeof j === "number") {
                    i = 4
                } else {
                    if (j && j.getMonth) {
                        i = 2
                    } else {
                        i = 0
                    }
                }
            }
            this._type = i;
            return i
        },

        _render: function (r, y, p) {
            var E, x, C, q, v, n, B, A, t, z, u, m, l, k, F, w = r.css("direction") === "rtl", j = y.button, s = r, D = null;
            x = r[0].nodeName;
            C = r[0].parentNode;
            if (x) {
                x = x.toUpperCase()
            }
            this._ta = x === "TEXTAREA";
            this._td = x === "TD";
            this._left = w;
            v = x === "INPUT";
            D = this._selElem = x === "SELECT";
            E = j && j.indexOf("spin") >= 0;
            m = j && j.indexOf("clear") >= 0;
            j = (j && j.indexOf("dropdown") >= 0) || (D && !E);
            if (m || j || E) {
                l = this._buttons = []
            }
            n = l || y.renderInContainer || y.theme;
            B = this._oldCss = { display: 0 };
            A = this._oldAttr = { className: 0, title: 0 };
            if (v) {
                A.value = 0;
                v = r[0].type || "text";
                if (v === "date" || v === "number") {
                    r[0].type = "text";
                    A.type = v
                }
            } else {
                if (D) {
                    D = y.listItems;
                    if (!D) {
                        y.listItems = [];
                        D = r[0].options;
                        t = D ? D.length : 0;
                        if (t > 0) {
                            while (t-- > 0) {
                                z = D[t].value;
                                y.listItems[t] = { value: z, text: b(u = D[t].text) ? z : u }
                            }
                            this._listID = r[0].selectedIndex
                        }
                        D = 1
                    }
                } else {
                    A.innerHTML = 0
                }
            }
            if (v || this._ta) {
                A.disabled = A.readOnly = A.alt = B.textAlign = 0
            }
            for (t in B) {
                if (B.hasOwnProperty(t)) {
                    B[t] = r.css(t)
                }
            }
            for (t in A) {
                if (A.hasOwnProperty(t)) {
                    A[t] = r[0][t]
                }
            }
            B.width = r[0].style.width;
            B.height = r[0].style.height;
            if ((t = v ? A.value : (D ? r.val() : A.innerHTML)) === y.nullText) {
                t = ""
            }
            if (!this._ta && t) {
                t = t.replace(/[\x09\x0a]/g, "")
            }
            this._value = t;
            if (v || this._ta || D) {
                if (A.className) {
                    this._css += " " + A.className
                }
                if (n) {
                    this._swap = true;
                    r.css("display", D ? "none" : "");
                    r = a("<span />");
                    C.insertBefore(r[0], s[0]);
                    if (D) {
                        s = a("<input />")
                    } else {
                        C.removeChild(s[0])
                    }
                    r.css("display", B.display)
                } else {
                    this._css += " " + p.editor;
                    return (this._field = r)
                }
            } else {
                if (y.textMode === "textarea" || y.textMode === "multiline") {
                    s = a("<textarea />");
                    this._ta = 1
                } else {
                    s = a(y.textMode ? '<input type="' + y.textMode + '"/>' : "<input />")
                }
                r[0].innerHTML = ""
            }
            r.addClass(p.editor + " " + p.container);
            if (y.theme) {
                r.addClass(y.theme)
            }
            this._field = s;
            if (!b(t = y.tabIndex)) {
                s[0].tabIndex = t
            }
            k = p.button + " " + p.buttonDefault;
            if (w) {
                k += " " + p.buttonRtl;
                this._css += " " + p.fieldRtl
            }
            t = l ? -1 : 6;
            F = {
                touchstart: function (i) {
                    this._drag = null;
                    g(i)
                }, touchmove: function (i) {
                    this._drag = 1;
                    g(i)
                }, touchend: function () {
                    if (!this._drag) {
                        a(this).trigger("mousedown").trigger("mouseup")
                    }
                }
            };
            while (t++ < 4) {
                if ((j && t === 0) || (m && t === 3) || (E && (t === 1 || t === 2))) {
                    if (t === 0) {
                        q = [k, p.buttonHover, p.buttonPressed, p.buttonDisabled, p.buttonImage, p.buttonImageHover, p.buttonImagePressed, p.buttonImageDisabled];
                        D = "button"
                    } else {
                        if (t === 1) {
                            q = [k + " " + p.spinButton, p.buttonHover, p.buttonPressed, p.buttonDisabled, p.spinButtonImage + " " + p.spinUpperImage, p.spinUpperImageHover, p.spinUpperImagePressed, p.spinUpperImageDisabled];
                            D = "spinUpper"
                        } else {
                            if (t === 2) {
                                q = [k + " " + p.spinButton, p.buttonHover, p.buttonPressed, p.buttonDisabled, p.spinButtonImage + " " + p.spinLowerImage, p.spinLowerImageHover, p.spinLowerImagePressed, p.spinLowerImageDisabled];
                                D = "spinLower"
                            } else {
                                q = [k + " " + this.css.buttonClear, p.buttonHover, p.buttonPressed, p.buttonDisabled, p.buttonClearImage, p.buttonImageHover, p.buttonImagePressed, p.buttonImageDisabled];
                                D = "clear"
                            }
                        }
                    }
                    z = l[t] = a("<span />").addClass(q[0]).appendTo(r).bind(F);
                    z[0]._css = q;
                    z[0].longdesc = z[0].title = this._optVal(D + "Title", 1);
                    u = a("<span />").addClass(q[4]).appendTo(z);
                    u[0]._id = t + 5;
                    z[0]._id = t + 1
                }
            }
            s.appendTo(r);
            return r
        },

        _leftShift: function () {
            var l = 0, j = this._buttons, k = (this._left && j) ? 4 : 0;
            while (k-- > 0) {
                if (j[k]) {
                    l += j[k][0].offsetWidth
                }
            }
            return l
        },

        _val: function () {
            var i = this._field;
            return i ? (this._box ? i[0].checked : (this._nullT ? "" : i[0].value)) : ""
        },

        _fixNull: function () {
            var j, i = this.options.nullText;
            if (!this._field || (!i && !this._nullT)) {
                return
            }
            j = this._val();
            this._nullT = null;
            if (j === "" && i && this._fcs < 2) {
                this._nullT = true;
                this._field[0].value = i
            }
            this._fixCss()
        },

        _focTxt: function (l, j, i) {
            var k = this.options.nullText;
            this._nullT = null;
            if (!j && l === "" && k && (!b(i) || this.options.readOnly)) {
                l = k;
                this._nullT = true
            }
            return l
        },

        validate: function (i) {
            return !this.options.validatorOptions || !this._doInvalid(null, i ? 2 : 1)
        },

        isValid: function () {
            return !this._doInvalid(null, 9)
        },

        _doInvalid: function (l, n) {
            if (!this._field) {
                return
            }
            var k, p, s, u = this._val(), j = false, m = 1, q = this._invPlus, r = this.options, t = this._type;
            this._inv = null;
            if (r.required && (!u || (t === 1 && !this.getValueByMode(0, "", 1)))) {
                q = 1
            } else {
                if (t === 0) {
                    if (!r.nullable && !u) {
                        q = 1
                    }
                } else {
                    if (t === 1) {
                        u = this._txt;
                        p = u.length;
                        while (p-- > 0 && !q) {
                            k = u.charCodeAt(p);
                            if (k < 21 && (k % 2) === 1) {
                                q = { value: u = this._getVal(), message: this._optVal("mask", 2) }
                            }
                        }
                    } else {
                        if (t < 4) {
                            u = this._toDate(u, l === "", true, true);
                            q = this._inv
                        } else {
                            u = this._toNum(u, true, true);
                            q = this._inv;
                            m = this._prop(7);
                            if (q && u && m > 1) {
                                s = u;
                                q.value = (u /= m)
                            }
                        }
                    }
                }
            }
            if (q === 1) {
                q = { value: u = null, message: this._optVal("required", 2) }
            }
            if (typeof q === "string") {
                q = { value: u, message: q }
            }
            if (n === 9) {
                return q
            }
            if (q) {
                j = this._fire(13, null, q);
                if (u !== q.value) {
                    u = q.value;
                    q = null
                }
                if (s) {
                    if (q) {
                        u = s
                    } else {
                        if (b(u, 1)) {
                            u = null
                        } else {
                            if (u) {
                                u *= m
                            }
                        }
                    }
                }
                if (t <= 1 && !q) {
                    this._setVal(u);
                    return
                }
            }
            if (t > 1 && t < 4) {
                this._isNull = b(u);
                if (!this._isNull) {
                    this._date = u
                }
                if (u && r.useLastGoodDate) {
                    this._goodD = u
                }
            }
            this._value = u;
            if (n && !j && !this._setOpt) {
                return this._doError(n, null, q ? q.message : null)
            }
        },

        _focusTxt: function (l, j, q) {
            var k = j, p = "", m = this.options, r = this._type, i = null, n = "";
            if (r === 1) {
                q = null;
                if (!b(j) && !l) {
                    j = j !== "";
                    if (j && this._bad !== 0) {
                        this._txt = this._setTxt(this._val(), 5, true)
                    }
                    q = this._txt;
                    if (!j) {
                        this._doInvalid(k)
                    }
                }
                p = this._getTxt(l ? 5 : 4, l ? m.promptChar : m.padChar, q)
            } else {
                if (r === 2 || r === 3) {
                    if (b(q)) {
                        n = m.promptChar;
                        if (b(j) && l) {
                            return this._getTxt(5, n)
                        }
                        if (!b(j) && !l) {
                            this._doInvalid(j);
                            i = this._value
                        } else {
                            if (!this._isNull) {
                                i = this._date
                            }
                        }
                    } else {
                        i = this._toDate(q, l, true)
                    }
                    p = this._toTxt(i, l, n, !b(j))
                } else {
                    if (r > 3) {
                        if (!b(j) && !l) {
                            this._doInvalid()
                        }
                        p = this._toTxtNum(this._value, l)
                    } else {
                        p = this._val();
                        if (!b(j) && !l) {
                            this._doInvalid(j)
                        }
                    }
                }
            }
            return this._focTxt(p, l, j)
        },

        _repaint: function () {
            if (this._field && this._val() !== this._text) {
                this._field[0].value = this._text
            }
        },

        _instant: function (l, j, i) {
            var n, m = this._type, k = this._dataMode;
            if (this._box) {
                return this._val()
            }
            if (m === 1) {
                return this.getValueByMode(k, l, j)
            }
            if (m === 2 || m === 3) {
                return this.getValueByMode(l ? 0 : k, j)
            }
            if (m > 3) {
                n = this._toNum(this._val(), j);
                if (n && (j || i) && !isNaN(n) && k > 0) {
                    n /= this._prop(7)
                }
                return (l || k > 0) ? n : this._toTxtNum(n, k === 0)
            }
            return this._val()
        },

        _optVal: function (j, i) {
            var l = this._validator, k = this.options;
            if (i === 2) {
                return l ? l._loc(j) : ""
            }
            if (!b(l = k[j])) {
                return l
            }
            if (i === 3 || i === 1) {
                if (i === 1 && this._type === 3) {
                    j = "datePickerButtonTitle"
                }
                l = k.locale ? k.locale[j] : null;
                return l || (a.ig && a.ig.Editor && a.ig.Editor.locale ? a.ig.Editor.locale[j] : null) || ""
            }
            k = k.regional;
            if (typeof k === "string") {
                k = a.ig.regional[k]
            }
            if (!k || b(l = k[j])) {
                l = a.ig.regional.defaults[j]
            }
            return b(l) ? this.regional[j] : l
        },

        _setOption: function (l, s) {
            var r, p = s, j = null, n = this.options, m = l === "locale", q = l === "regional", i = this._buttons, k = this._field;
            if (n[l] === s || l === "textMode" || !k) {
                return this
            }
            if (l === "buttonHidden") {
                this._butVis(null, s);
                return this
            }
            if (l === "theme") {
                if (this._1e) {
                    return this
                }
                for (r = 0; r < 3; r++) {
                    if (i && i[r]) {
                        i[r].css("height", "")
                    }
                }
                if (n.theme) {
                    this._element.removeClass(n.theme)
                }
                if (s) {
                    this._element.addClass(s)
                }
                this._listRemove();
                this._height(n.height);
                this._width(n.width)
            }
            if (l === "inputMask" && this._type === 1) {
                p = this.getValueByMode(0, " ", 1);
                this._setMask(s);
                this._setTxt(p, 0)
            }
            n[l] = s;
            if (typeof s === "function") {
                return this
            }
            if (q && this._dp) {
                j = this._dpRegion();
                if (j) {
                    this._dpOption(n.datepickerOptions = a.extend(n.datepickerOptions, j))
                }
            }
            r = "buttonTitle";
            if ((m || l === r) && i && i[0]) {
                i[0][0].title = this._optVal(r, 1)
            }
            r = "spinUpperTitle";
            if ((m || l === r) && i && i[1]) {
                i[1][0].title = this._optVal(r, 3)
            }
            r = "spinLowerTitle";
            if ((m || l === r) && i && i[2]) {
                i[2][0].title = this._optVal(r, 3)
            }
            r = "clearTitle";
            if ((m || l === r) && i && i[3]) {
                i[3][0].title = this._optVal(r, 3)
            }
            if (l === "disabled") {
                k[0].disabled = s;
                this._fixCss()
            }
            if (l === "display") {
                this._element.css(l, s)
            }
            if (l === "textAlign") {
                k.css(l, s)
            }
            if (l === "readOnly") {
                k[0].readOnly = s ? "readonly" : ""
            }
            if (l === "maxLength" || l === "tabIndex") {
                k[0][l] = s
            }
            if (l === "value") {
                this.value(s)
            }
            if (l === "width") {
                this._width(s)
            }
            if (l === "height") {
                this._height(s)
            }
            r = l === "required";
            if (l === "validatorOptions" || r) {
                this._initValidator(false, r)
            }
            if (l === "nullText") {
                this._fixNull()
            }
            if (l === "type") {
                this._doType(s);
                q = 3
            }
            l = l.toLowerCase();
            r = l.indexOf("minv") === 0 ? 1 : (l.indexOf("maxv") === 0 ? 2 : (l.indexOf("maxd") >= 0 || l.indexOf("mind") >= 0 ? -1 : 0));
            if (l.indexOf("list") === 0) {
                this._listRemove()
            } else {
                if (l.indexOf("an") === 0) {
                    if (this._dp && l.indexOf("show") > 7) {
                        this._dpOption((l.indexOf("eff") > 7) ? "showAnim" : "duration", s)
                    }
                } else {
                    if (l.indexOf("kero") > 0) {
                        if (this._dp) {
                            this._dpOption(s)
                        }
                    } else {
                        if (l.indexOf("data") >= 0 || r || q || !b(this.regional[l]) || l.indexOf("date") === 0 || l.indexOf("pat") >= 0 || l.indexOf("roup") > 0 || l.indexOf("sep") >= 0 || l.indexOf("ymb") > 0) {
                            if (r > 0 && this._dp) {
                                j = a.data(k[0], "datepicker");
                                if (j) {
                                    j.settings[r === 1 ? "minDate" : "maxDate"] = null
                                }
                            }
                            this._setOpt = true;
                            this._listRemove();
                            this._fixMode((q === 3) ? 3 : 0);
                            this._repaint();
                            this._lastText = this._val();
                            this._setOpt = null
                        }
                    }
                }
            }
            return this
        },

        _dpRegion: function () {
            var i = this.options.regional;
            return (a.datepicker && typeof i === "string") ? a.datepicker.regional[(i === "defaults" || i === "en-US") ? "" : i] : null
        },

        _dpOption: function (k, j) {
            var i = this._getVal(1);
            if (k && k.changeYear && a.browser.opera) {
                k.changeYear = false
            }
            this._field.datepicker("option", k, j);
            this._setVal(i)
        },

        getRegionalOption: function (i) {
            return this._optVal(i)
        },

        field: function () {
            return this._field
        },

        mainElement: function () {
            return this._element
        },

        dropDownElement: function () {
            var i = this._ddList;
            if (this._type === 3) {
                i = a.datepicker;
                if (i) {
                    i = (i._ig_dp === this) ? i.dpDiv : null
                }
            }
            return i || null
        },

        show: function () {
            return this._vis(true)
        },

        hide: function () {
            return this._vis()
        },

        remove: function () {
            var j, i = this._element;
            j = (i && i[0]) ? i[0].parentNode : null;
            if (j && j.tagName) {
                this._doError();
                this._doDrop();
                this._stopTimer();
                this._hadFocus = null;
                this._vAct();
                this._noPaste = this._fcs = this._k0 = this._hover = this._mouseDown = 0;
                this._fixCss();
                j.removeChild(i[0])
            }
            return this
        },

        dropDownVisible: function (i) {
            if (!arguments.length) {
                return !!this._ddOn
            }
            if (!i) {
                this._doDrop()
            } else {
                if (!this._ddOn) {
                    this._doDrop(1)
                }
            }
            return this
        },

        findListItemIndex: function (m, j, l, i) {
            var k = this._find(h(m), 0, 1, j, l, i);
            return k ? k.id : -1
        },

        addListItems: function (j, i) {
            return this._listChange(j, i, 2)
        },

        addListItem: function (j, i) {
            return this._listChange([j], i, 2)
        },

        removeListItem: function (i) {
            return this._listChange(i, -1, 1)
        },

        removeListItemAt: function (i) {
            return this._listChange(null, i, 1)
        },

        clearListItems: function () {
            return this._listChange(null, -1, 0)
        },

        selectedListIndex: function (i) {
            if (!arguments.length) {
                return this._listID
            }
            this._listSelect(i)
        },

        getSelectedListItem: function () {
            var j = this.options.listItems, i = this._listID;
            return (j && i >= 0) ? j[i] : null
        },

        hasInvalidMessage: function () {
            return this._validator ? this._validator.isMessageDisplayed() : false
        },

        validator: function () {
            return this._validator || null
        },

        text: function (j, i) {
            if (j === undefined) {
                return this._val()
            }
            if (this._type > 0) {
                this._sTxt = 1;
                if (this._type === 1) {
                    this._setTxt(j, b(i) ? 5 : (1000 + i))
                } else {
                    this._setVal(j, true)
                }
                this._sTxt = 0
            } else {
                if (j) {
                    this._nullT = null
                }
                this._text = j;
                this._repaint()
            }
            if (this._fix === 1) {
                this._old = this._instant(1, null, 1)
            }
            return this
        },

        _df: function (i, j, q, k, l, o, n) {
            var p = this.options.enableUTCDates;
            if (j === -1) {
                return (i && p) ? new Date(i.getTime() + i.getTimezoneOffset() * 60000) : i
            }
            if (!i) {
                i = new Date();
                if (p) {
                    i.setUTCMinutes(i.getUTCMinutes() - i.getTimezoneOffset())
                }
                return i
            }
            if (!b(k)) {
                return p ? new Date(Date.UTC(i, j, q, k, l, o, n)) : new Date(i, j, q, k, l, o, n)
            }
            if (b(q)) {
                if (j === 0) {
                    return p ? i.getUTCFullYear() : i.getFullYear()
                }
                if (j === 1) {
                    return p ? i.getUTCMonth() : i.getMonth()
                }
                if (j === 2) {
                    return p ? i.getUTCDate() : i.getDate()
                }
                if (j === 3) {
                    return p ? i.getUTCHours() : i.getHours()
                }
                if (j === 4) {
                    return p ? i.getUTCMinutes() : i.getMinutes()
                }
                if (j === 5) {
                    return p ? i.getUTCSeconds() : i.getSeconds()
                }
                return p ? i.getUTCMilliseconds() : i.getMilliseconds()
            }
            if (j === 0) {
                if (p) {
                    i.setUTCFullYear(q)
                } else {
                    i.setFullYear(q)
                }
            }
            if (j === 1) {
                if (p) {
                    i.setUTCMonth(q)
                } else {
                    i.setMonth(q)
                }
            }
            if (j === 2) {
                if (p) {
                    i.setUTCDate(q)
                } else {
                    i.setDate(q)
                }
            }
            if (j === 3) {
                if (p) {
                    i.setUTCHours(q)
                } else {
                    i.setHours(q)
                }
            }
            if (j === 4) {
                if (p) {
                    i.setUTCMinutes(q)
                } else {
                    i.setMinutes(q)
                }
            }
            if (j === 5) {
                if (p) {
                    i.setUTCSeconds(q)
                } else {
                    i.setSeconds(q)
                }
            }
            if (j === 6) {
                if (p) {
                    i.setUTCMilliseconds(q)
                } else {
                    i.setMilliseconds(q)
                }
            }
        },

        value: function (i) {
            if (i === undefined) {
                i = this._getVal();
                return (i === undefined) ? null : i
            }
            this._setVal(i, true);
            this._lastText = this._val();
            return this
        },

        _getVal: function (i) {
            var j = this.options, k = this._instant(i, 1);
            if (this._type > 3) {
                if (b(k)) {
                    k = j.nullValue;
                    if (this._dataMode <= 0) {
                        return h(k)
                    }
                    return (j.nullable || !b(k)) ? k : NaN
                }
            }
            return k
        },

        _set_val: function (j, i) {
            this._fix = 0;
            this._setVal(j, i);
            this._fix = 1
        },

        _setVal: function (m, j) {
            var k, i, l = this._type;
            if (!this._field) {
                return
            }
            if (this._box) {
                if (m !== true) {
                    m = m === "true"
                }
                this._field[0].checked = m
            } else {
                if (l === 1) {
                    this._setTxt(h(m), this._dataMode)
                } else {
                    if (l === 2 || l === 3) {
                        if (!b(m) && !m.getTime) {
                            m = j = this._toDate(m = m.toString(), this._dataMode < 2) || this._toDate(m, true)
                        }
                        j = m;
                        if (b(m = this._limits(m))) {
                            m = j
                        }
                        this._txt = this._mask;
                        this._isNull = b(m);
                        if (!this._isNull) {
                            this._toTxt(m, true, "", true)
                        } else {
                            m = this._df()
                        }
                        this._date = m;
                        if (this.options.useLastGoodDate) {
                            this._goodD = m
                        }
                        this._text = this._focusTxt(this._fcs > 1);
                        this._repaint()
                    } else {
                        if (l > 3) {
                            if (b(m, 1)) {
                                m = null
                            }
                            if (m && typeof m === "number" && this._fix !== 0) {
                                m *= this._prop(7)
                            }
                            k = this._toTxtNum(m = this._toNum(m, true), this._fcs === 2);
                            i = this._prop(12);
                            if (j === 2 && i > 0 && k.length > i) {
                                return
                            }
                            this._focTxt(k);
                            this._text = k;
                            this._value = m;
                            this._repaint()
                        } else {
                            this.text(h(m))
                        }
                    }
                }
            }
            if (this._fix === 1 && l > 0) {
                this._old = this._instant(1, null, 1)
            }
            k = this.options.value = this._getVal();
            this._doClear(k);
            this._fixNull();
            this._dtt();
            this._fixList(k)
        },

        _fixList: function (m) {
            var j = -1, l = this.options.listItems, k = l ? l.length : 0;
            if (k < 1 || !this._fix || b(this._lastText)) {
                return
            }
            if (!b(m)) {
                while (++j < k) {
                    if (l[j] === m) {
                        break
                    }
                }
                if (j >= k) {
                    l = this._findItem(this._val(), -1);
                    j = l ? l.id : -1
                }
            }
            this._listSelect(j)
        },

        _doClear: function (i) {
            if (this._buttons && this._buttons[3]) {
                this._butVis(!i || (this._type < 4 && !this.getValueByMode(0, i)))
            }
        },

        _vis: function (j) {
            var i = this._element;
            i.css("display", j ? this.options.display : "none");
            this._fixHeight();
            this._doError();
            return this
        },

        _elemWidth: function (i, j) {
            if (i && j > 1 && i[0]._wd !== j) {
                i[0]._wd = j;
                j = Math.max(1, j - f(i, 1));
                i.css("width", j);
                return true
            }
        },

        _elemHeight: function (j, k, i) {
            if (j && k > 1 && j[0]._ht !== k) {
                j[0]._ht = k;
                k = Math.max(1, k - f(j));
                j.css("height", k);
                if (i) {
                    j.find("SPAN").css("marginTop", Math.floor((k - 16) / 2))
                }
            }
        },

        _fixSize: function () {
            var k = this.options, i = this._element, l = i ? i[0].offsetWidth : 0, j = i ? i[0].offsetHeight : 0;
            if (l || j) {
                if (this._oWidth !== l) {
                    this._fixWidth(!this._oWidth && !k.width)
                }
                if (this._oHeight !== j) {
                    this._fixHeight(!this._oHeight && !k.height)
                }
                this._oWidth = l;
                this._oHeight = j
            }
            this._doTimer()
        },

        _doTimer: function () {
            var i = this, k = i._timer1, j = i._heightOk && !i._heightPerc && i._widthOk && !i._widthPerc;
            if (j && k) {
                clearInterval(k);
                delete i._timer1
            } else {
                if (!k) {
                    i._timer1 = setInterval(function () {
                        i._fixSize()
                    }, 200)
                }
            }
        },

        _fixHeight: function (o) {
            if (!this._field || this._1e || (this._heightOk && !this._heightPerc)) {
                return 1
            }
            var l = this._field, k = this._element, n = 4, m = (this._td || o) ? 0 : Math.max(k[0].offsetHeight - f(k), 0), j = this._buttons;
            m = m || l[0].offsetHeight;
            if (m > 1) {
                if (this._heightPerc) {
                    m++
                }
                this._elemHeight(l, m);
                if (j) {
                    while (n-- > 0) {
                        this._elemHeight(j[n], m, 1)
                    }
                }
                this._heightOk = 1
            }
            this._doTimer()
        },

        _fixWidth: function (w) {
            if (!this._field || this._1e || (this._widthOk && !this._widthPerc)) {
                return 1
            }
            var t, q, j, o = this._field, m = this._clearHide, l = this.options.buttonHidden, n = this._element, p = 4, u = (this._td || w) ? 0 : Math.max(n[0].offsetWidth - f(n, 1), 0), s = u, r = 3, k = this._buttons;
            u = u || o[0].offsetWidth;
            if (u > 0) {
                if (k) {
                    w = (this._td || w) ? Math.max(u, 100) : 0;
                    u = w || u;
                    if (this._widthPerc || this._td) {
                        u--
                    }
                    while (p-- > 0) {
                        j = k[p];
                        if (j) {
                            if ((p === 0 && l) || (p === 3 && m)) {
                                j.show()
                            }
                            j[0]._w = t = j[0].offsetWidth;
                            if (w && !q) {
                                u -= t;
                                q = w = w - t
                            }
                            u -= t;
                            if (u < r && !w) {
                                s += r - u;
                                q = u = r
                            }
                        }
                    }
                    if (w || q) {
                        n.css("width", w || (s + r))
                    }
                } else {
                    if (w && n[0].offsetWidth > u + 4) {
                        n.css("width", u)
                    }
                }
                if (this._elemWidth(o, this._wF = u)) {
                    this._listRemove()
                }
                p = t = k ? Math.min(u, 9) : 0;
                while (t-- > 1 && p > 3) {
                    q = o[0].offsetTop;
                    for (p = 0; p < 4; p++) {
                        if (k[p] && Math.abs(k[p][0].offsetTop - q) > 10) {
                            this._elemWidth(o, --this._wF);
                            break
                        }
                    }
                }
                if (k && (a.browser.mozilla || (a.browser.msie && parseFloat(a.browser.version) < 9))) {
                    this._elemWidth(o, --this._wF)
                }
                this._widthOk = 1;
                this._butVis(m, l)
            }
            this._doTimer()
        },

        _butVis: function (l, m) {
            var j, p = -1, q = this.options, r = this._wF, k = this._buttons, n = this._field;
            if (b(l)) {
                j = 1;
                l = this._clearHide
            }
            if (b(m)) {
                j = 1;
                m = q.buttonHidden
            }
            if (!k || (j && l === this._clearHide && m === q.buttonHidden)) {
                return
            }
            q.buttonHidden = m;
            this._clearHide = l;
            while (++p < 2) {
                j = k[p * 3];
                if (j) {
                    if ((!p && m) || (p && l)) {
                        j.hide();
                        r += j[0]._w
                    } else {
                        j.show()
                    }
                }
            }
            this._elemWidth(n, r)
        },

        _width: function (o) {
            var l = this._field, k = (this._1e || this._td) ? l : this._element, j = this._buttons, m = j ? 4 : 0, n = c(o);
            if (!l) {
                return
            }
            if (this._widthOk) {
                delete this._widthOk;
                delete this._widthPerc;
                k[0]._wd = null;
                l[0]._wd = null;
                k.css("width", "");
                l.css("width", "");
                while (m-- > 0) {
                    if (j[m]) {
                        j[m][0]._wd = null;
                        j[m].css("width", "")
                    }
                }
            }
            if (o) {
                if (o.indexOf && o.indexOf("px") < 0 && o !== n.toString()) {
                    k.css("width", o);
                    this._widthPerc = !this._td && o.indexOf("%") > 0
                } else {
                    this._elemWidth(k, n)
                }
            }
            this._fixWidth(!o)
        },

        _height: function (m) {
            var l = this._field, k = (this._1e || this._td) ? l : this._element, j = this._buttons, n = j ? 4 : 0, o = c(m);
            if (!l) {
                return
            }
            if (this._heightOk) {
                delete this._heightOk;
                delete this._heightPerc;
                k[0]._ht = null;
                l[0]._ht = null;
                k.css("height", "");
                l.css("height", "");
                while (n-- > 0) {
                    if (j[n]) {
                        j[n][0]._ht = null;
                        j[n].css("height", "")
                    }
                }
            }
            if (m) {
                if (m.indexOf && m.indexOf("px") < 0 && m !== o.toString()) {
                    k.css("height", m);
                    this._heightPerc = !this._td && m.indexOf("%") > 0
                } else {
                    this._elemHeight(k, o)
                }
            }
            this._fixHeight(!m)
        },

        _spin: function (i) {
            var m, j, n, k = this._nullT, l = this.options;
            if (this._box || !this._field) {
                return
            }
            if (this._fcs < 1 && l.focusOnSpin) {
                this.setFocus();
                if (this._fcs < 1) {
                    this._focSpin = i;
                    return
                }
            }
            if (this._fire(14, null, i)) {
                return
            }
            if (k) {
                this._nullT = null;
                this._fixCss()
            }
            n = this._val();
            this.spin(i);
            if (this._val() === n) {
                if (k) {
                    this._nullT = k;
                    this._fixCss();
                    return
                }
                if (this._type > 3 && l.spinWrapAround && !b(this._prop(10)) && !b(this._prop(11))) {
                    m = this._sel0;
                    j = this._prop(7);
                    if (!j) {
                        j = 1
                    }
                    i = this._limits(this._getVal(true) * j, true);
                    this._setVal(i / j, this._fcs);
                    this.select(m)
                }
            }
            if (this._val() !== n) {
                this._fire(12)
            }
        },

        _item: function (i) {
            if (i && !b(i.text)) {
                i = i.text
            }
            if (typeof i === "function") {
                i = i()
            }
            return b(i) ? "" : i
        },

        _spinList: function (i) {
            var p, j, n, k, l, m = this.options;
            l = m.listItems;
            k = l ? l.length : 0;
            if (k < 1) {
                return 1
            }
            i = (i < 0) ? 1 : -1;
            j = this._listID + i;
            n = m.spinWrapAround;
            if (j >= k) {
                if (!n) {
                    return
                }
                j = 0
            }
            if (j < 0) {
                if (!n) {
                    return
                }
                j = k - 1
            }
            p = this._instant(1, null, 1);
            if (p === this._item(l[j])) {
                if ((j += i) < 0) {
                    if (!n) {
                        return
                    }
                    j = k - 1
                }
                if (j >= k) {
                    if (!n) {
                        return
                    }
                    j = 0
                }
            }
            p = this._item(l[j]);
            if (!this._listSelect(j)) {
                delete this._lastY;
                this._set_val(p)
            }
        },

        _doKey: function (r, j, B, s, z, A, i, o) {
            var u, q, l, y, n, w, m, x, t, p, v = this._prop(12), C = this._type;
            if (C > 0 && C < 4) {
                t = this._mask;
                s = t ? t.length : 0;
                if (s < 1 || r < 7 || (r > 8 && r < 32)) {
                    r = 0
                }
                if (i) {
                    if (r === 0 || !(t.indexOf(j) > 0 || this._optVal("am").indexOf(j) >= 0 || this._optVal("pm").indexOf(j) >= 0 || (r >= 48 && r <= 57))) {
                        g(o)
                    }
                    return
                }
                if (r === 0) {
                    return
                }
                B = this._txt;
                if (z !== A) {
                    while (--A >= z) {
                        B = B.substring(0, A) + t.charAt(A) + B.substring(A + 1)
                    }
                    A++
                } else {
                    if (r === 7) {
                        while (A < s && t.charCodeAt(A) >= 22) {
                            A++
                        }
                        if (A >= s) {
                            return
                        }
                        B = B.substring(0, A) + t.charAt(A) + B.substring(A + 1);
                        A++
                    } else {
                        if (r === 8) {
                            while (A > 0 && t.charCodeAt(A - 1) >= 22) {
                                A--
                            }
                            if (A-- < 1) {
                                return
                            }
                            B = B.substring(0, A) + t.charAt(A) + B.substring(A + 1)
                        }
                    }
                }
                if (r > 8 && A < s) {
                    if (A >= s) {
                        return
                    }
                    if ((z = this._maskKey(r, j, B, s, A, t)) >= 0) {
                        B = this._txt;
                        A = z
                    } else {
                        if (z === -1) {
                            return
                        }
                        while (t.charCodeAt(A) >= 22) {
                            if (++A >= s) {
                                return
                            }
                        }
                        if (b(j = this._maskFilter(t.charCodeAt(A), j, 0))) {
                            return
                        }
                        B = B.substring(0, A) + j + B.substring(A + 1);
                        A++
                    }
                }
                this._txt = B;
                this._selKey = A;
                B = this._focusTxt(true);
                this.select(this._selKey, 0, B);
                this._selKey = 99999;
                this._listSelect(-1);
                return
            }
            if (C > 3) {
                m = this._prop(4);
                x = this._isMinus(r);
                l = r >= 48 && r <= 57;
                if (x && z === 0) {
                    w = this._prop(10);
                    if (!b(w) && w >= 0) {
                        return g(o)
                    }
                }
                if (i) {
                    if (!(r < 9 || x || l || r === m.charCodeAt(0))) {
                        g(o)
                    }
                    return
                }
                if (z !== A) {
                    B = B.substring(0, z) + B.substring(A);
                    A = z;
                    s = B.length
                } else {
                    if (r === 7) {
                        if (A++ >= s || s < 1) {
                            return
                        }
                    } else {
                        if (r === 8) {
                            if (z-- < 1) {
                                return
                            }
                        }
                    }
                }
                if (r < 9 || v === 0 || v > s) {
                    n = r === m.charCodeAt(0);
                    q = B.indexOf(m);
                    u = this._prop(8);
                    y = l || (z === 0 && x) || (n && u > 0);
                    p = this._ePow();
                    t = p ? B.indexOf(p) : -1;
                    if (p && z > 0) {
                        if ((r === 69 || r === 101) && t < 0) {
                            y = j = p
                        }
                        if (n && t >= 0 && t < z) {
                            y = false
                        }
                    }
                    if (t < 0 && l && q >= 0 && z > q && q + u < s) {
                        if (z === s) {
                            y = false
                        } else {
                            B = B.substring(0, --s)
                        }
                    }
                    if (z > 0 && x && B.charAt(z - 1).toUpperCase() === "E" && B.substring(z - 1).indexOf("-") < 0) {
                        y = true
                    }
                    if (s > 0 && z === 0) {
                        if (this._isMinus(B.charCodeAt(0))) {
                            y = false
                        }
                    }
                    if (r > 8 && !y) {
                        return
                    }
                    if (n) {
                        if (q >= 0) {
                            if (q === z || q === z - 1) {
                                return
                            }
                            s--;
                            if (q < z) {
                                z = --A
                            }
                            B = B.substring(0, q) + B.substring(q + 1)
                        }
                        if (t < 0 && z + u < s) {
                            B = B.substring(0, s = z + u)
                        }
                    }
                    if (r > 8 && A >= s) {
                        B += j
                    } else {
                        B = B.substring(0, z) + j + B.substring(A)
                    }
                } else {
                    r = 0
                }
                this.select((r > 10) ? A + 1 : z, 0, B);
                this._listSelect(-1);
                return
            }
            if (z !== A) {
                B = B.substring(0, z) + B.substring(A);
                A = z;
                s = B.length
            } else {
                if (r === 7) {
                    if (A++ >= s || s === 0) {
                        return
                    }
                    if (this._ta && B.charCodeAt(A - 1) === 13 && B.charCodeAt(A) === 10) {
                        A++
                    }
                } else {
                    if (r === 8) {
                        if (z-- < 1) {
                            return
                        }
                        if (this._ta && B.charCodeAt(z) === 10 && B.charCodeAt(z - 1) === 13) {
                            z--
                        }
                    }
                }
            }
            if (r < 9 || v === 0 || v > s) {
                if (r > 8 && A >= s) {
                    B += j
                } else {
                    B = B.substring(0, z) + j + B.substring(A)
                }
            } else {
                r = 0
            }
            this._matchList(B, r, (r > 10) ? A + 1 : z)
        },

        _matchList: function (l, j, k) {
            var i;
            if (!this._field || this._type > 0 || (j < 0 && !this.options.listAutoComplete)) {
                return l
            }
            i = this._findItem(l, j, k);
            if (!i) {
                return null
            }
            this._listSelect(i.id);
            l = i.text;
            if (j >= 0) {
                this.select(i.sel, 0, l)
            } else {
                this._field[0].value = l
            }
            return l
        },

        _findItem: function (l, i, k) {
            var j = this.options;
            return this._find(l, i, j.listMatchOnly, j.listMatchIgnoreCase, true, j.listMatchContains, k)
        },

        _find: function (A, p, t, u, w, j, x) {
            var n, B, v, m = null, k = -1, r = 0, y = 0, l = -1, z = A, q = A.length, o = this.options.listItems, s = p >= 0 && t;
            if (q > 0 && o && (s || p < 0)) {
                v = s = -1;
                B = u;
                if (B) {
                    z = z.toUpperCase()
                }
                while (++k < o.length) {
                    if (b(n = this._item(o[k]))) {
                        continue
                    }
                    n = n.toString();
                    if (B) {
                        n = n.toUpperCase()
                    }
                    if ((y = n.indexOf(z)) === 0) {
                        if (n === z) {
                            s = k;
                            break
                        }
                        r++;
                        if (v < 0) {
                            v = k
                        }
                    } else {
                        if (y > 0 && j) {
                            if (!m) {
                                m = { i: k, shift: y }
                            }
                            r++
                        }
                    }
                }
                y = 0;
                if (v < 0 && m) {
                    v = m.i;
                    y = m.shift
                }
                if (s < 0) {
                    if (!w) {
                        return null
                    }
                    if (p < 0) {
                        s = v
                    } else {
                        if (v < 0) {
                            return (p > 10 && q === x) ? null : this._find(A.substring(0, --q), p, t, u, j, x)
                        }
                    }
                    if (p > 10 && r === 1) {
                        s = v
                    } else {
                        if (p >= 0) {
                            A = this._item(o[v]).toString().substring(0, q + y)
                        }
                    }
                }
                if (s >= 0) {
                    A = this._item(o[s]).toString();
                    if (s === v) {
                        x = A.length
                    }
                }
                l = (s >= 0) ? s : v
            }
            return { text: A, id: l, sel: (b(x, 1) ? q : x) + y }
        },

        _undo: function (j) {
            var i, k = this._old;
            if (j) {
                if (!this._canRedo) {
                    return
                }
                k = this._redo;
                this._canRedo = false
            } else {
                i = this._instant(1, null, 1);
                if (i === k) {
                    return
                }
                this._canRedo = true;
                this._redo = i
            }
            this._set_val(k);
            this._text = this._focusTxt(false);
            this._doError(1, this._evt)
        },

        _doKey0: function (m, i) {
            var l, w, r, n, p, j = this._validator, s = this, u = this._text, v = this._val(), q = this._key, t = this.options;
            if (this.options.excelNavigationMode && [38, 40].indexOf(q) > -1) {
                return
            }
            if (!this._field) {
                return
            }
            if (!m) {
                if (u !== v) {
                    this.paste(v)
                }
                return
            }
            if (i === 1 && q === 192 && m.altKey && !m.ctrlKey) {
                return
            }
            if (this._type > 0 && a.browser.opera && q > 41 && q < 48) {
                if (i === 0) {
                    this._noKey = q
                } else {
                    if (this._noKey === q) {
                        g(m)
                    }
                }
            }
            if (i !== 1) {
                this._noPaste = 2 - i
            } else {
                if (this._noPaste !== 2) {
                    this._noPaste = 1
                }
            }
            if (q === 9) {
                this._k0 = (i === 2) ? 0 : 9;
                if (i === 0 && j && j._lbl) {
                    j._onTab(m)
                }
            }
            if (q === 0 || (q === 114 && i !== 1) || q === 9) {
                return
            }
            if (this._bad > 2) {
                if (i === 0) {
                    this._bad = 2
                }
                if (i === 2) {
                    this._bad -= 3
                }
            }
            if (i === 0 && q === 229) {
                if (u !== v) {
                    this._bad = 2
                } else {
                    this._bad += 3
                }
            }
            if (q === 13 && this._k0 === 229 && this._type === 1) {
                this._txt = this._setTxt(this._val(), 5, true)
            }
            if (i === 0 && m.ctrlKey && !m.altKey && (q === 90 || q === 89)) {
                this._undo(q === 89);
                return
            }
            if (this._bad === 2 || (i === 1 && m.ctrlKey)) {
                return
            }
            if (i === 0 && !m.ctrlKey && !m.altKey && !m.shiftKey) {
                if (this._listKey(m, q)) {
                    this._kBad = q;
                    return g(m)
                }
            }
            if (this._box) {
                return
            }
            if (i === 1 && q === this._kBad) {
                return g(m)
            }
            this._kBad = null;
            if (i === 0 && ((m.ctrlKey && (q === 86 || q === 88)) || (m.shiftKey && q === 45))) {
                setTimeout(function () {
                    s._doKey0()
                }, 1)
            }
            if (i !== 1 && (m.ctrlKey || m.altKey || q === 17)) {
                if (m.altKey) {
                    this._k0 = -1
                } else {
                    if (u !== v && (q === 86 || (q === 17 && i === 2))) {
                        this.paste(v);
                        this._noPaste = 1
                    } else {
                        if (q === 17) {
                            this.getSelectedText()
                        }
                    }
                }
                return
            }
            if (i === 0) {
                this._k0 = q
            }
            if (i === 2) {
                if (this._k0 > 0) {
                    this._k0 = 0
                }
                this._spinField = -1
            }
            r = v.length;
            j = this._bad !== 0;
            if (q <= 46) {
                switch (q) {
                    case 8:
                    case 46:
                        if (this._k0 === q && i === 1) {
                            i = 2
                        }
                        if (i === 0) {
                            i = 1;
                            if (q === 46) {
                                q = 7
                            }
                        }
                        break;
                    case 27:
                        g(m);
                        if (i === 0) {
                            this._undo();
                            if (!this._escFix) {
                                this._escTxt = this._field[0].value
                            }
                        } else {
                            if (this._escFix && this._escTxt !== v && !b(this._escTxt)) {
                                this._field[0].value = this._escTxt;
                                delete this._escTxt
                            }
                            if (i === 1) {
                                this._escFix = 1
                            } else {
                                delete this._escFix
                            }
                        }
                        return;
                    case 13:
                        if ((t.hideEnterKey && (!this._ta || !m.shiftKey)) || (this._type > 0 && this._ta && m.shiftKey)) {
                            g(m)
                        }
                        return;
                    case 38:
                    case 40:
                        if (this._ta) {
                            break
                        }
                        if (i === 0 && !m.shiftKey) {
                            this._spin((q === 38) ? t.spinDelta : -t.spinDelta)
                        }
                        if (this._k0 === q) {
                            i = 2
                        }
                        break
                }
            }
            if (i === 1 && q === this._k0 && ((q < 48 && q > 9 && q !== 32) || q > 90)) {
                return
            }
            if (!j) {
                if (i !== 0 && [9, 38, 40].indexOf(q) === -1) {
                    g(m)
                }
                if (i === 1 && this._k0 === -1) {
                    this._k0 = 0;
                    this.getSelectedText()
                }
                if (i === 0 || q < 9) {
                    this.getSelectedText()
                }
            }
            if (i === 1 && q > 6) {
                if (q > 31) {
                    if (this._fire(1, m)) {
                        if (j) {
                            g(m)
                        }
                        return
                    }
                    q = this._key;
                    n = t.excludeKeys;
                    p = t.includeKeys;
                    if (t.toUpper || t.toLower || n || p) {
                        l = String.fromCharCode(q);
                        w = l.toUpperCase();
                        if ((n && n.toUpperCase().indexOf(w) >= 0) || (p && p.toUpperCase().indexOf(w) < 0)) {
                            return g(m)
                        }
                        if (t.toUpper) {
                            q = w.charCodeAt(0)
                        } else {
                            if (t.toLower) {
                                q = l.toLowerCase().charCodeAt(0)
                            }
                        }
                        this._key = q
                    }
                }
                this._doKey(q, (q < 10) ? "" : String.fromCharCode(q), v, r, this._sel0, this._sel1, j, m)
            }
        },

        paste: function (l, i) {
            var k, j = this.options;
            if ((this._nullT && !i) || this._noPaste === 1) {
                return this
            }
            k = this._prop(12);
            if (k > 0 && k < l.length) {
                l = l.substring(0, k)
            }
            k = j.includeKeys;
            if (k) {
                k = k.toUpperCase().replace(/\[/gm, "\\[").replace(/\]/gm, "\\]").replace(/\^/gm, "\\^").replace(/\-/gm, "\\-");
                l = l.replace(new RegExp("[^" + k + "]", "igm"), "")
            }
            k = j.excludeKeys;
            if (k) {
                k = k.toUpperCase().replace(/\[/gm, "\\[").replace(/\]/gm, "\\]").replace(/\^/gm, "\\^").replace(/\-/gm, "\\-");
                l = l.replace(new RegExp("[" + k + "]", "igm"), "")
            }
            if (j.toUpper) {
                l = l.toUpperCase()
            } else {
                if (j.toLower) {
                    l = l.toLowerCase()
                }
            }
            if (b(l = this._matchList(l, 0))) {
                l = this._text
            }
            this._text = "";
            this._fix = 0;
            this.text(l, i ? null : this._sel0);
            this._fix = 1;
            this._fire(12);
            return this
        },

        _touch: function (i) {
            var k, j = this._ddList;
            if (j && j.igScroll) {
                k = j.data("igScroll");
                if (!i) {
                    return k ? k.barY : j.igScroll({ direction: "y", yThumb: "draggable", yScroller: this._ddScroll, cancelStart: "ms" }).attr("data-scroll", "y")
                }
                if (k) {
                    k[i](true)
                }
            }
        },

        _fixCss: function () {
            var k, u, p, m, r = this._element, w = this._hoverOld, t = this._hover, q = this._mouseDown, s = this._fcs > 0, v = this.options, n = this._ddList, l = this._css, j = "";
            if (!this._field) {
                return
            }
            p = v.disabled;
            m = this.css;
            if (s) {
                r.addClass(m.focus)
            } else {
                r.removeClass(m.focus)
            }
            if (t) {
                r.addClass(m.hover)
            } else {
                r.removeClass(m.hover)
            }
            this._hoverOld = t;
            if (!w || w === t) {
                w = 0
            }
            if (w > 99) {
                if (!n) {
                    return
                }
                this._listCss(n, w, m.listItemHover)
            }
            if (t > 99 && !this._touch()) {
                this._listCss(n, t, m.listItemHover, 1)
            }
            if (p) {
                l += " " + m.disabled
            }
            if (this._nullT) {
                l += " " + m.nullValue
            }
            if (this._type > 3 && m.negative && !this._nullT) {
                if (this._instant(1) < 0) {
                    l += " " + m.negative
                }
            }
            this._setCss(this._field, l);
            u = this._buttons ? 4 : 0;
            while (u-- > 0) {
                k = this._buttons[u];
                if (!k) {
                    continue
                }
                m = k[0]._css;
                l = m[0];
                if (p) {
                    l += " " + m[3]
                }
                if (t === u + 1) {
                    l += " " + m[1]
                }
                if (s) {
                    l += " " + this.css.buttonFocus
                }
                if (q === u + 1) {
                    l += " " + m[2]
                }
                this._setCss(k, l + j);
                l = m[4];
                if (p) {
                    l += " " + m[7]
                }
                if (q === u + 1) {
                    l += " " + m[6]
                } else {
                    if (t === u + 1) {
                        l += " " + m[5]
                    } else {
                        if (t || s) {
                            l += " " + this.css.buttonsImageStateOverride
                        }
                    }
                }
                this._setCss(k.find("SPAN"), l)
            }
        },

        _setCss: function (k, i) {
            var j = k[0].className, l = k[0]._ig_oldCss;
            k[0]._ig_oldCss = i;
            if (i === l) {
                return
            }
            if (l && j && l !== j && j.indexOf(l) >= 0) {
                j = j.replace(l, "");
                i += ((j.charAt(0) !== " ") ? " " : "") + j
            }
            k[0].className = i
        },

        _enterTxt: function () {
            var i, j = this._type;
            if (j === 1) {
                return this._getTxt(this._dataMode, "")
            }
            if (j === 2 || j === 3) {
                i = this._toDate(this._val(), true);
                return b(i) ? "" : this._toTxt(i, true, "")
            }
            if (j > 3) {
                return this._toTxtNum(null, true, this._val(), "-", ".")
            }
            return this._val()
        },

        _update: function () {
            var j, i = this._old;
            if (this._lock) {
                return
            }
            this._lock = true;
            this._text = this._focusTxt(false, (this._fcs === 2 || this._hadFocus) ? "" : null);
            j = this._instant(1, null, 1);
            if (!b(j) && !b(i)) {
                if (j.getTime && j.getTime() === i.getTime()) {
                    j = i
                }
            }
            if (j !== i || this._bad === 2) {
                this._val10 = j;
                if (this._fire(10, null, j, i)) {
                    this._set_val(i);
                    this._text = this._focusTxt(false)
                } else {
                    if (j !== this._val10) {
                        this._setVal(this._val10)
                    }
                    this._repaint();
                    this.options.value = j = this._instant(1, null, 1);
                    this._fire(11, null, j, i);
                    if (this._k0 !== 13) {
                        this._old = j
                    }
                    this._dtt()
                }
            }
            this._lock = false
        },

        _dropTrigger: function (l, m) {
            var n, j, i, p = this.options, q = this._ddOn;
            i = p.dropDownTriggers;
            if (m === 0 || !i || (p.readOnly && !p.dropDownOnReadOnly) || (m === -2 && i.indexOf("button") < 0) || (m === -1 && i.indexOf("focus") < 0)) {
                return
            }
            if (((m === 38 && !q) || (m === 40 && q))) {
                return
            }
            if (m > 0) {
                j = (m === 38 || m === 40) ? "arrow" : String.fromCharCode(m);
                if (l.ctrlKey) {
                    j = "ctrl+" + j
                } else {
                    if (l.altKey) {
                        j = "alt+" + j
                    } else {
                        if (l.shiftKey) {
                            j = "shift+" + j
                        }
                    }
                }
                n = j.length;
                j = i.indexOf(j);
                if (j < 0 || (j > 0 && i.charAt(j - 1) !== ",") || (j + n < i.length && i.charAt(j + n) !== ",")) {
                    return
                }
            }
            if (!q || m !== -1 || d() - q > 900) {
                return this._doDrop(1, l)
            }
        },

        _doDP: function (i, p) {
            var n, q, j, k, l, m = this.options;
            if (!this._field || this._type !== 3) {
                return
            }
            if (!this._dp && i !== 1) {
                return 1
            }
            if (p) {
                this._set_val(p);
                this._fire(12)
            }
            j = a.datepicker;
            k = this._field[0];
            l = k.id;
            if (!j._old_selectDay) {
                j._old_selectDay = j._selectDay;
                j._old_parseDate = j.parseDate;
                j._old_updateDatepicker = j._updateDatepicker;
                j._old_checkOffset = j._checkOffset;
                j.dpDiv.bind("mousedown", function (r) {
                    var o = a.datepicker._ig_dp;
                    if (o) {
                        if (r.target && r.target.nodeName === "SELECT" && !a.browser.mozilla) {
                            o._ddmd = d()
                        } else {
                            g(r)
                        }
                    }
                });
                j._selectDay = function (o, s, u, t) {
                    var r = this._ig_dp;
                    if (!r) {
                        return this._old_selectDay(o, s, u, t)
                    }
                    o = a("a", t).html() || t.firstChild.innerHTML;
                    r._doDrop(0, { type: "mousedown" }, [u, s, c(o)], 1);
                    r._xyCheck(true)
                };
                j._updateDatepicker = function (o) {
                    if (this._ig_dp) {
                        this.dpDiv.addClass(this._ig_css = this._ig_dp.css.dropDown)
                    } else {
                        if (this._ig_css) {
                            this.dpDiv.removeClass(this._ig_css);
                            delete this._ig_css
                        }
                    }
                    this._old_updateDatepicker(o);
                    if (this._ig_dp) {
                        this.dpDiv.find("*").attr("unselectable", "on")
                    }
                };
                j.parseDate = function (o, r, s) {
                    return this._ig_dp ? this._ig_dp._df(this._ig_dp._getVal(1), -1) : this._old_parseDate(o, r, s)
                };
                j._checkOffset = function (o, t, r) {
                    var u, s = this._ig_dp;
                    t = this._old_checkOffset(o, t, r);
                    if (s) {
                        t.left -= s._leftShift();
                        e(null, t);
                        u = e(s._swap ? s._field : s._element);
                        s._xy = {
                            x: u.left, y: u.top, i: setInterval(function () {
                                s._xyCheck()
                            }, 300)
                        }
                    }
                    return t
                }
            }
            if (i === 1) {
                if (l.length < 1) {
                    l = this.element[0].id + "_ig_dp_id";
                    while (document.getElementById(l)) {
                        l += Math.floor(Math.random() * 10)
                    }
                    k.id = l
                }
                if (!this._dp) {
                    n = a.extend(m.datepickerOptions, this._dpRegion()) || {};
                    q = m.animationShowDuration;
                    if (q) {
                        n.duration = q
                    }
                    q = m.animationShowEffect;
                    if (q) {
                        n.showAnim = q
                    }
                    n.showOn = "";
                    n.onClose = function () {
                        var o = j._ig_dp;
                        if (o) {
                            o._dpClosed = 1;
                            o._doDrop();
                            delete o._dpClosed;
                            delete j._ig_dp
                        }
                    };
                    this._dp = a(k).datepicker(n)
                }
                n = a.data(k, "datepicker").settings;
                n.minDate = n.minDate || m.minValue;
                n.maxDate = n.maxDate || m.maxValue;
                if (a.browser.opera) {
                    n.changeYear = false
                }
                j._ig_dp = this;
                this._css += " " + a.datepicker.markerClassName;
                if (this._fcs < 1) {
                    this.setFocus(-1)
                }
                j._showDatepicker(k)
            } else {
                if (i === 2) {
                    j._doKeyUp({ target: k })
                } else {
                    this._xyCheck(true);
                    if (!this._dpClosed) {
                        j._hideDatepicker(k)
                    }
                    if (i === 3) {
                        j._destroyDatepicker(k)
                    }
                }
            }
            return 1
        },

        _fixBC: function (j, i) {
            j = j.css("backgroundColor");
            i.css("backgroundColor", (!j || j === "transparent" || j.replace(/ /g, "").indexOf("(0,0,0,0") > 0) ? "white" : j)
        },

        _xyCheck: function (i) {
            var j = this._xy, k = this._swap ? this._field : this._element;
            if (!j) {
                return
            }
            if (k) {
                k = e(k);
                if (Math.abs(k.left - j.x) > 2 || Math.abs(k.top - j.y) > 2) {
                    i = true
                }
            }
            if (i || !k || !this._ddOn) {
                delete this._xy;
                clearInterval(j.i);
                this._doDrop()
            }
        },

        _vAct: function (i) {
            return a.ui.igValidator && a.ui.igValidator._act(this, i)
        },

        _doDrop: function (j, u, N, t) {
            var m, R, C, A, O, D, T, k, L, p, q, M, s, n, H, z, w, S, v, Q, r, x, l, G, F, B, K = this._ddParent, E = -1, P = N, I = this, J = this.options;
            F = J.listItems;
            j = (j === 1) ? !this._ddOn : false;
            if (!j && !this._ddOn && !t) {
                return
            }
            if (!I._field || I._vAct(j ? "drop" : "hide")) {
                return
            }
            G = F ? F.length : 0;
            if (this._type === 3) {
                if (N && !isNaN(N[2])) {
                    P = this._getVal(1);
                    if (!P) {
                        P = this._df(N[0], N[1], N[2], 0, 0, 0, 0)
                    } else {
                        P = this._df(N[0], N[1], N[2], this._df(P, 3), this._df(P, 4), this._df(P, 5), this._df(P, 6))
                    }
                }
            } else {
                if (G < 1) {
                    return
                }
                if (N) {
                    P = this._item(F[N - 100])
                }
            }
            if (this._fire(j ? 16 : 17, u, j ? null : { value: P }) && u) {
                return
            }
            this._ddOn = j ? d() : null;
            if (this._type === 3) {
                return this._doDP(j ? 1 : 0, P)
            }
            r = I._ddList;
            x = I._element;
            l = !J.listDropDownAsChild || x === I._field;
            if (!r) {
                r = I._ddList = a("<div/>").addClass(I.css.dropDown + " " + I.css.list).scroll(function () {
                    I._lazy()
                });
                r[0]._id = 99;
                I._ddSel = -1;
                I._ddLen = G;
                r.css({ position: "absolute", visibility: "hidden" });
                if ((Q = J.listWidth) < 5) {
                    if ((Q = x.outerWidth()) < 5) {
                        Q = 100
                    }
                }
                if (l) {
                    I._ddParent = K = J.theme ? a("<span/>").addClass(J.theme).css("position", "absolute").append(r) : r;
                    K.css({ left: "0px", top: "0px" }).appendTo(a("body"));
                    r.bind(I._mEvts)
                } else {
                    I._ddParent = K = r.prependTo(x)
                }
                m = r.css("borderRightColor");
                q = Math.max(1, J.listColumns);
                M = I._rows = Math.ceil(G / q);
                s = r.outerWidth() - r.width();
                Q = Math.ceil((Q - s) / q - 1);
                I._listLazy = [];
                for (p = 0; p < q; p++) {
                    for (L = 0; L < M; L++) {
                        if (++E >= G) {
                            break
                        }
                        n = '<div style="width:' + Q + "px;position:absolute;white-space:nowrap;overflow:hidden;";
                        P = I._item(F[E]);
                        if (typeof P !== "string") {
                            if (I._type >= 4 && typeof P === "number") {
                                P = I._toTxtNum(P)
                            } else {
                                if (P && I._type === 2 && P.getMonth) {
                                    P = I._toTxt(P)
                                } else {
                                    P = h(P)
                                }
                            }
                        }
                        w = F[E];
                        if (w && typeof w.getHtml === "function") {
                            w = w.getHtml() || P
                        } else {
                            w = P
                        }
                        if (E > 0) {
                            n += "height:" + A + "px;left:" + (p * R) + "px;top:" + L * C + "px;"
                        }
                        if (p + 1 < q) {
                            n += "border-right-color:" + m
                        }
                        n += '" title="' + I._item(F[E]) + '" _id="' + (E + 100) + '" class="' + I.css.listItem;
                        if (p + 1 < q) {
                            n += " " + I.css.listItemColumnBorder
                        }
                        n += '">' + ((w === "") ? "&nbsp;" : w) + "</div>";
                        if (E === 0 || E + 1 === G) {
                            n = a(n).appendTo(r);
                            n[0]._id = E + 100
                        } else {
                            I._listLazy[E] = n
                        }
                        if (E === 0) {
                            if ((A = n.height()) < 5) {
                                A = 18
                            }
                            if ((s = n.outerWidth() - n.width()) > 0) {
                                Q -= s;
                                n.css("width", Q)
                            }
                            I._ddWidth = (R = n.outerWidth() + 1) * q;
                            I._ddHeight = (I._ddHeight0 = C = n.outerHeight()) * M;
                            I._fixBC(n, r);
                            H = Math.max(0, J.listMaxHeight);
                            if (H > 0 && I._ddHeight > H) {
                                I._ddHeight = H;
                                H = Math.ceil(16 / q);
                                n.css("width", Q -= H);
                                R -= H
                            } else {
                                H = 0
                            }
                            r.css("overflow", (H > 0) ? "auto" : "hidden");
                            n.css({ height: A, left: p * R, top: L * C })
                        }
                    }
                }
                I._page = Math.max(2, Math.floor(Math.min(I._ddHeight / A), G / 3) - 1)
            }
            if (N) {
                if (!I._listSelect(N - 100)) {
                    I._set_val(P = this._item(F[N - 100]));
                    I._fire(12)
                }
            }
            if (!j) {
                I._lastY = r[0].scrollTop
            } else {
                if (I._lastY) {
                    r[0].scrollTop = I._lastY
                }
            }
            I._listSelect(null, 1);
            P = j ? J.animationShowDuration : J.animationHideDuration;
            if (!P || (typeof P === "number" && P < 5)) {
                P = null
            } else {
                v = j ? J.animationShowEffect : J.animationHideEffect;
                if (!a.effects || !a.effects[v]) {
                    if (!j && typeof P !== "number") {
                        P = 450
                    }
                    v = null
                }
            }
            B = (P && !v) ? 0 : I._ddHeight;
            z = function () {
                if (j) {
                    r.css("filter", "");
                    if (!N && I._lastY) {
                        r[0].scrollTop = I._lastY
                    } else {
                        I._listSelect()
                    }
                    if (!I._ddFixW && (E = r[0].scrollWidth - r[0].clientWidth) > 0 && E && E < 4) {
                        r.css("width", I._ddWidth += (I._ddFixW = E + 1))
                    }
                    I._touch()
                } else {
                    r.css({ display: "none", visibility: "hidden" });
                    I._touch("_hide")
                }
            };
            if (j) {
                this._lazy();
                if (I._fcs < 1) {
                    I.setFocus()
                }
                D = 999;
                k = document.body;
                w = document.documentElement;
                if ((E = window.innerHeight) > 50 && E) {
                    D = E
                } else {
                    if ((E = w.clientHeight) > 50 && E) {
                        D = E
                    } else {
                        if ((E = k.clientHeight) > 50 && E) {
                            D = E
                        }
                    }
                }
                T = Math.max(window.pageYOffset || 0, Math.max(k.scrollTop, w.scrollTop));
                w = I._swap ? I._field : x;
                S = e(w);
                I._xy = l ? { x: S.left, y: S.top } : null;
                S.h = w[0].offsetHeight;
                O = S.top + S.h + I._ddHeight - T - D;
                if (O > 0 && T - S.top + I._ddHeight < O) {
                    O = I._ddHeight + 2;
                    if (S.top - O < T) {
                        O = Math.max(S.top - T, 2)
                    }
                    S.top += (S.h = -O);
                    B = I._ddHeight;
                    x.addClass(I.css.noTopCorners);
                    r.addClass(I.css.noBottomCorners)
                } else {
                    S.top += S.h;
                    x.addClass(I.css.noBottomCorners);
                    r.addClass(I.css.noTopCorners)
                }
                r.css({ opacity: (P && !v) ? 0 : 1, height: B, width: Math.floor(I._ddWidth / ((P && !v) ? 2 : 1)), display: "", visibility: "visible" });
                if (l) {
                    if (I._swap) {
                        S.left -= I._leftShift()
                    }
                    S.left -= c(x.css("borderLeftWidth"));
                    K.css({ left: S.left, top: S.top });
                    I._xy.i = setInterval(function () {
                        I._xyCheck()
                    }, 300)
                } else {
                    E = I._left ? "Right" : "Left";
                    K.css("margin" + E, -c(x.css("border" + E + "Width")) + "px");
                    K.css("marginTop", S.h);
                    O = e(K);
                    if ((O = O.left - S.left) > 30 && O < x[0].offsetWidth + 10) {
                        K.css("marginLeft", -O + "px")
                    }
                }
                if (!P) {
                    z()
                } else {
                    if (v) {
                        r.show(v, {}, P, z)
                    } else {
                        r.animate({ opacity: 1, height: I._ddHeight, width: I._ddWidth }, P, null, z)
                    }
                }
            } else {
                I._xyCheck(true);
                x.removeClass(I.css.noTopCorners).removeClass(I.css.noBottomCorners);
                r.removeClass(I.css.noBottomCorners).removeClass(I.css.noTopCorners);
                if (!P) {
                    z()
                } else {
                    if (v) {
                        r.hide(v, {}, P, z)
                    } else {
                        r.animate({ opacity: 0.6 }, Math.floor(P * 0.34)).animate({ opacity: 0, height: B, width: Math.floor(I._ddWidth / 2) }, Math.floor(P * 0.66), null, z)
                    }
                }
            }
            return true
        },

        _lazy: function (m) {
            var n, p, k = Math.max(1, this.options.listColumns), o = this._listLazy, l = this._ddOn ? this._ddList : null;
            if (!l) {
                return
            }
            if (m) {
                if (o[m]) {
                    a(o[m]).appendTo(l)[0]._id = m + 100;
                    delete o[m]
                }
                return
            }
            n = Math.floor(l[0].scrollTop / this._ddHeight0);
            while (k-- > 0) {
                for (m = 0; m < this._page + 8; m++) {
                    if (o[p = this._rows * k + n + m]) {
                        a(o[p]).appendTo(l)[0]._id = p + 100;
                        delete o[p]
                    }
                }
            }
        },

        _listCss: function (k, l, j, i) {
            k = a(k.children("[_id=" + l + "]"));
            if (i) {
                k.addClass(j)
            } else {
                k.removeClass(j)
            }
        },

        _listSelect: function (k, m) {
            var q, n, p, i = null, j = (m !== 2 && (m || this._ddOn)) ? this._ddList : null, l = this.options;
            if (!l.listItems) {
                return
            }
            if (!b(k) && this._listID !== k) {
                if (this._fire(18, null, i = { index: k, oldIndex: this._listID, item: l.listItems[k] })) {
                    return 1
                }
                this._listID = k
            }
            k = this._listID;
            if (j) {
                if (m && k < 0) {
                    if (!b(m = this._findItem(this.text(), -1)) && k !== m.id) {
                        if (this._fire(18, null, i = { index: m.id, oldIndex: k, item: l.listItems[m.id] })) {
                            return 1
                        }
                        this._listID = k = m.id
                    }
                }
                p = this._ddSel;
                if (p !== k) {
                    this._lazy(k);
                    this._listCss(j, p + 100, this.css.listItemSelected);
                    this._listCss(j, (p = this._ddSel = k) + 100, this.css.listItemSelected, 1)
                }
                if (p >= 0) {
                    q = (p % this._rows) * this._ddHeight0;
                    n = j[0].scrollTop;
                    if (q > n) {
                        q += this._ddHeight0 - this._ddHeight;
                        if (q < n) {
                            q = -9
                        }
                    }
                    if (q !== -9) {
                        if (a.browser.safari && q > 20 && j[0].scrollTop === q && !m) {
                            j[0].scrollTop = q - 1
                        }
                        j[0].scrollTop = q
                    }
                }
            }
            if (i) {
                this._fire(19, null, i)
            }
        },

        _listKey: function (l, o) {
            var m, q, j = this._ddOn ? this._ddList : null, n = this._listID, p = a.ui.keyCode;
            if (!j) {
                return
            }
            if (o === p.ENTER || o === p.SPACE || o === p.ESCAPE) {
                this._doDrop(0, l, (o === p.ESCAPE) ? null : n + 100);
                return true
            }
            if (o < 33 || o > 40) {
                return
            }
            q = this._ddLen - 1;
            if ((m = n) < 0) {
                m = -1000
            }
            if (o === p.DOWN) {
                m++
            } else {
                if (o === p.UP) {
                    m--
                } else {
                    if (o === p.PAGE_DOWN) {
                        m += this._page
                    } else {
                        if (o === p.PAGE_UP) {
                            m -= this._page
                        } else {
                            if (o === p.HOME) {
                                m = 0
                            } else {
                                if (o === p.END) {
                                    m = q
                                } else {
                                    if (o === p.RIGHT) {
                                        if ((m += this._rows) > q) {
                                            m = n
                                        }
                                    } else {
                                        if (o === p.LEFT) {
                                            if ((m -= this._rows) < 0) {
                                                m = n
                                            }
                                        } else {
                                            return
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this._listSelect(Math.max(0, Math.min(m, q)));
            return true
        },

        _listChange: function (q, m, k) {
            var p, l, o, n = this.options.listItems;
            p = n ? n.length : 0;
            o = l = q ? q.length : 0;
            m = (b(m) || m < 0) ? -1 : m;
            if (k < 2) {
                if (p < 1) {
                    return this
                }
                if (k > 0 && m < 0) {
                    if (q === null) {
                        m = p - 1
                    } else {
                        while (++m < p) {
                            if (n[m] === q) {
                                break
                            }
                        }
                    }
                }
                if (m < 0) {
                    n.length = 0
                } else {
                    if (m < p) {
                        n.splice(m, 1)
                    }
                }
            } else {
                if (!n) {
                    this.options.listItems = q
                } else {
                    while (o-- > 0) {
                        if (m >= p || m < 0) {
                            n.push(q[l - o - 1])
                        } else {
                            if (m === 0) {
                                n.unshift(q[o])
                            } else {
                                n.splice(m, 0, q[o])
                            }
                        }
                    }
                }
            }
            this._listRemove();
            return this
        },

        _listRemove: function () {
            if (this._ddList) {
                this._touch("destroy");
                this._element.removeClass(this.css.noTopCorners).removeClass(this.css.noBottomCorners);
                this._ddList.unbind();
                this._ddParent.remove();
                this._ddOn = this._ddList = this._ddParent = this._listLazy = null;
                this._listID = -1
            }
        },

        _initValidator: function (i, k) {
            if (!this._field) {
                return
            }
            var l = this._validator, j = this.options, m = j.validatorOptions;
            if (i || !m || !this.element.igValidator) {
                if (l) {
                    l.destroy();
                    delete this._validator
                }
                return
            }
            m.ctl = this;
            m.required = j.required = j.required || (!k && m.required);
            this._field.igValidator(m)
        },

        _doError: function (j, i, k) {
            var l = this._validator;
            if (l && this._field) {
                if (!b(k)) {
                    return l._doError(k, null, j) !== 1
                }
                if (j) {
                    l._evt(i, null, j === 2);
                    if (l._lbl) {
                        l._lbl._old = { t: d(), val: this._val(), sel0: this._sel0, sel1: this._sel1, lastTxt: this._lastText, last: this._last, txt: this._text }
                    }
                } else {
                    l.hide(1)
                }
            }
        },

        _doScrl: function (m, r) {
            var i, j, n = a.browser.mozilla && !this._dp, s = m.clientWidth, p = m.scrollWidth, o = r.length, l = false, q = this._sel0;
            if (!this._field || this._tr !== 1 || o < 4) {
                return
            }
            i = p / o * 1.1;
            o -= q;
            if (this._ta) {
                if (m.clientHeight + 2 > (p = m.scrollHeight)) {
                    return
                }
                r = r.split("\n");
                if (o * 15 < s && (n || r[r.length - 1].length * 15 > s)) {
                    m.scrollTop = p;
                    return
                }
                if (!n) {
                    return
                }
            } else {
                if (q * 15 < s) {
                    return
                }
            }
            if (!n) {
                if (p > s + 2) {
                    if (o * i * 1.3 < s) {
                        m.scrollLeft = p
                    } else {
                        if (q * i > s + m.scrollLeft) {
                            m.scrollLeft = Math.floor(q * i - s - 3)
                        }
                    }
                }
                return
            }
            if (this._bad > 2) {
                return
            }
            this._scrl = 1;
            try {
                i = m.maxLength;
                j = this._mask;
                if (i > 0) {
                    m.maxLength = Math.max(i, j ? j.length : 0) + 2
                }
                j = document.createEvent("KeyboardEvent");
                j.initKeyEvent("keypress", !l, !l, null, l, l, l, l, 0, 32);
                m.dispatchEvent(j);
                j = document.createEvent("KeyboardEvent");
                j.initKeyEvent("keypress", !l, !l, null, l, l, l, l, 8, 0);
                m.dispatchEvent(j);
                if (i > 0) {
                    m.maxLength = i
                }
            } catch (k) {
            }
            delete this._scrl
        },

        _onEvt: function (i, o) {
            var m, n, k = this._field, l = this;
            k = k ? k[0] : null;
            if (!k || l._scrl) {
                return
            }
            l._evt = i;
            if (o !== 11) {
                l._doEvt(i, o, k);
                delete l._evt
            } else {
                m = k.value;
                try {
                    if (l._nullT && i && i.type === "drop" && !b(n = i.originalEvent.dataTransfer)) {
                        n = n.getData("Text")
                    }
                } catch (j) {
                    n = null
                }
                l._pasting = 1;
                setTimeout(function () {
                    if (!n) {
                        if (!l._field) {
                            return
                        }
                        n = k.value
                    }
                    if (n && m !== n) {
                        l.paste(n, 1)
                    }
                    delete l._pasting
                }, 0)
            }
        },

        _doEvt: function (i, j, m) {
            var z, n, s, t, x, w, u, y = null, p = 0, q = this, r = this.options;
            if (q._noWidth) {
                q._fixWidth()
            }
            if (!i || r.disabled) {
                return
            }
            if (j === 10) {
                y = i.wheelDelta || i.detail;
                if (y) {
                    g(i);
                    q._spin((y > 0) ? r.spinDelta : -r.spinDelta)
                }
                return
            }
            if (j === 26) {
                q._msOver = i.originalEvent.pointerType;
                return
            }
            if (q._msOver === 2 && j === 6) {
                delete q._msOver;
                return
            }
            z = u = i.target;
            while (z && p++ < 5 && b(y = z._id)) {
                z = z.parentNode
            }
            if (j === 7) {
                q._hover = q._mouseDown = 0;
                q._fixCss();
                q._fire(j, i, y);
                return
            }
            if (!y) {
                return
            }
            if (j === 6) {
                if (y > 0 && !u.unselectable) {
                    u.unselectable = "on"
                }
                z = m.value;
                if (z === q._lastText || q._pasting) {
                    z = null
                }
                if (!q._fcs && z && q._nullT) {
                    if (z !== r.nullText) {
                        q._fixNull()
                    }
                    z = null
                }
                if (z) {
                    q.paste(z, 1)
                }
            }
            if (y > 4 && y < 9) {
                y -= 4
            }
            if (j === 0 && q._fcs === 0) {
                q._onEvt({ target: u, type: "focus" }, 8)
            }
            if (b(q._evt0Spin1) && !q._box) {
                try {
                    if (!(a.browser.msie && !q._ta) && !b(m.selectionStart)) {
                        q._tr = 1
                    }
                } catch (l) {
                }
                if (q._tr !== 1) {
                    q._tr = m.createTextRange ? m.createTextRange() : null
                }
                q._bad = b(q._tr) ? 1 : 0
            }
            q._evt0Spin1 = 0;
            if (j === 5 && q._fcs === 2 && i.button === 1) {
                q.getSelectedText()
            }
            w = d();
            if (j < 3) {
                q._key = p = i.keyCode || i.which || 0;
                q._time = w
            }
            if (j !== 1 && j < 8) {
                if (q._fire(j, i, y)) {
                    if (j < 4) {
                        g(i)
                    }
                    return
                }
            }
            if (j < 3) {
                if (j === 0 && (q._fcs === 2 || r.dropDownOnReadOnly) && q._dropTrigger(i, p)) {
                    return
                }
                if (q._fcs === 1 && (i.shiftKey || j === 1 || !(r.spinOnReadOnly || (r.dropDownOnReadOnly && q._ddOn)) || p < 9 || p > 40)) {
                    return
                }
                if (j === 2 && q._k0 === 0 && p > 0 && p !== 86 && q._text !== q._val()) {
                    m.value = q._text;
                    return
                }
            }
            if (j === 3 && y > 0) {
                if (y === 99) {
                    q._ddmd = w
                }
                g(i)
            }
            if (j === 3 && q._mouseDown !== y) {
                if (y > 1 && y < 4) {
                    q._stopTimer(1);
                    if (!r.readOnly || r.spinOnReadOnly) {
                        x = (y === 2) ? r.spinDelta : -r.spinDelta;
                        if (q._fcs < 1 && r.focusOnSpin) {
                            q._evt0Spin1 = 1;
                            q.setFocus()
                        }
                        q._spin(x);
                        s = t = 5;
                        q._spinField = -1;
                        q._timer = setInterval(function () {
                            if (q._mouseDown < 2) {
                                return q._stopTimer(1)
                            }
                            if (--s < 1) {
                                q._spin(x);
                                s = (--t > 8) ? --t : t
                            }
                        }, 60)
                    }
                }
                q._hover = q._mouseDown = y;
                q._fixCss()
            }
            if ((j === 5 || j === 6) && q._hover !== y) {
                q._hover = y;
                q._fixCss()
            }
            if (j === 4 && q._mouseDown) {
                if ((y === 1 || y === 4) && y === q._mouseDown) {
                    if (!q._fire(15, i)) {
                        if (y === 4) {
                            q._onEvt(null, 11);
                            q._set_val(null);
                            q.select(0)
                        } else {
                            q._dropTrigger(i, -2)
                        }
                    }
                }
                if (y > 99) {
                    q._doDrop(0, i, y)
                }
                q._mouseDown = 0;
                q._fixCss()
            }
            if (y > 0) {
                return
            }
            n = q._focTime;
            if (j === 4) {
                if (n && n + 500 > w) {
                    q._select()
                }
                q._focTime = 0
            }
            if (j < 3) {
                q._doKey0(i, j)
            }
            if (!q._field) {
                return
            }
            z = q._val();
            if (j === 2) {
                q._last = z;
                if (q._key === 13 && a.browser.mozilla && q._text !== z) {
                    q.text(z);
                    q._fire(12, i);
                    q._update()
                }
            }
            if (j === 1 && q._keyMod) {
                delete q._keyMod;
                q._doScrl(m, z)
            }
            if (j >= 8) {
                if (q._bad > 2) {
                    q._bad = 2
                }
                q._spinField = -1;
                n = (j === 8);
                if (n === (q._fcs > 0)) {
                    return
                }
                if (!n && w - q._ddmd < 500) {
                    return q.setFocus(-1)
                }
                q._noPaste = 0;
                if (!n && q._lastText !== z) {
                    q.paste(z, 1)
                }
                if (!n && q._type < 2 && !z && !r.nullable) {
                    z = q._old || (r.listItems ? r.listItems[0] : "");
                    if (z) {
                        q._set_val(z);
                        z = q._text = q._focusTxt(false)
                    } else {
                        z = ""
                    }
                }
                q._fcs = n ? (r.readOnly ? 1 : 2) : 0;
                if (q._vAct(n)) {
                    return
                }
                q._hadFocus = !n;
                y = q._validator;
                if (n) {
                    q._k0 = 0;
                    if (q._bad > 1) {
                        q._bad = 0
                    }
                    if (!r.readOnly) {
                        if (q._nullT) {
                            z = q._last = q._text = m.value = ""
                        }
                        q._nullT = null;
                        y = (y && y._lbl) ? y._lbl._old : null;
                        if (y && y.t + 200 > d()) {
                            m.value = q._text = y.txt;
                            q._lastText = y.lastTxt;
                            q._last = y.last;
                            q.select(y.sel0, y.sel1)
                        } else {
                            if (z !== q._text) {
                                q.getSelectedText();
                                q.paste(z)
                            }
                            q._lastText = q._last = q._text = q._focusTxt(n, i)
                        }
                    }
                    q._focTime = w;
                    q._dropTrigger(i, -1)
                } else {
                    if (y) {
                        q._doError(2, i);
                        setTimeout(function () {
                            if (!q._fcs && !q._doInvalid(i, 9)) {
                                q._doError()
                            }
                        }, 100)
                    }
                    q._doDrop(0, i);
                    z = q._matchList(z, -1);
                    q._canRedo = null;
                    if (!r.readOnly) {
                        if (q._last !== z || q._bad !== 0) {
                            y = q._fix;
                            q._fix = 0;
                            q._fcs = 2;
                            q.text(z);
                            q._fcs = 0;
                            q._fix = y
                        }
                        q._update()
                    }
                }
                q._repaint();
                q._fixCss();
                if (n && this._prop(13) < 2) {
                    q.select(this._prop(13) * 10000);
                    q._select()
                }
                q._hadFocus = false;
                if (n && q._focSpin) {
                    q._spin(q._focSpin)
                }
                q._focSpin = null;
                q._fire(j, i, -1);
                q._lastText = q._val();
                return
            }
            if (!(j > 3 && q._k0 === 0) && !q._nullT && z !== q._text) {
                q._text = z;
                q._fire(12, i)
            }
        },

        _fire: function (o, l, j, i) {
            if (!this._field) {
                return
            }
            var n, m = this.events, k = (o === 13 || o > 16) ? j : {};
            for (n in m) {
                if (m.hasOwnProperty(n) && m[n] === o) {
                    break
                }
            }
            if (o === 14) {
                k.delta = j;
                k.value = this._instant(1, null, 1)
            }
            if (o === 12) {
                if ((k.oldText = this._lastText) === (j = this._val())) {
                    return
                }
                this._doError(1, l);
                this._doClear(j);
                k.text = this._lastText = this._text = j;
                if (this._fcs < 2 && this._evt0Spin1 !== 1) {
                    this._update()
                }
                this._doDP(2);
                if (this._type > 3) {
                    this._fixCss()
                }
            }
            if (o < 3) {
                k.key = this._key
            } else {
                if (o < 8) {
                    k.elementType = (j === -1) ? "field" : ((j === 1 || j === 5) ? "button" : ((j === 2 || j === 6) ? "spinUpper" : ((j === 3 || j === 7) ? "spinLower" : ((j === 99) ? "dropDown" : ((j > 99) ? "item" + (j - 100) : "")))));
                    k.id = j
                }
            }
            if (o === 10 || o === 11) {
                k.value = j;
                k.oldValue = i
            }
            if (o === 11 && this._fcs === 2) {
                this._update()
            }
            k.owner = this;
            if (!this._trigger(n, l || this._evt, k)) {
                return true
            }
            if (o < 3) {
                this._key = k.key
            }
            if (o === 10) {
                this._val10 = k.value
            }
        },

        _select: function (m) {
            var l, j = this, i = this._field[0], k = this._prop(13);
            if (this._tr !== 1 || k > 1) {
                return
            }
            if (!m) {
                setTimeout(function () {
                    try {
                        j._select(1)
                    } catch (n) {
                    }
                }, 0);
                return
            }
            l = i.value.length;
            if (k === 0) {
                l = 0
            } else {
                if (k < 0) {
                    k = 0
                } else {
                    k = l
                }
            }
            if (k !== i.selectionStart || l !== i.selectionEnd) {
                this.select(k, l)
            }
        },

        select: function (q, r, t) {
            var p, o, m = 0, n = 0, s = this._tr, l = (this._fcs === 2) ? this._field[0] : null;
            if (!l || l.offsetWidth < 2 || this._box) {
                return this
            }
            if (b(t)) {
                t = l.value
            } else {
                r = q;
                if (l && l.value !== t) {
                    this._keyMod = l.value = t
                }
            }
            o = t.length;
            if (b(r, 1)) {
                r = q;
                if (b(q, 1) || q < 0) {
                    q = 0;
                    r = o
                }
            }
            if (r >= o) {
                r = o
            } else {
                if (r < q) {
                    r = q
                }
            }
            if (q > r) {
                q = r
            }
            this._sel0 = q;
            this._sel1 = r;
            try {
                if (s === 1) {
                    l.selectionStart = q;
                    l.selectionEnd = r;
                    return this
                }
                if (!s) {
                    if (q !== r) {
                        l.select()
                    }
                    return this
                }
                if (this._ta) {
                    p = r;
                    while (p-- > 0) {
                        if (t.charCodeAt(p) === 10) {
                            if (p < q) {
                                m++
                            }
                            n++
                        }
                    }
                    q -= m;
                    r -= n
                }
                r -= q;
                if (this._ta) {
                    s.moveToElementText(l)
                } else {
                    s.move("textedit", -1)
                }
                s.move("character", q);
                if (r > 0) {
                    s.moveEnd("character", r)
                }
                s.select()
            } catch (k) {
            }
            return this
        },

        getSelectedText: function () {
            var m, n, r, q = "", l = this._field[0], p = this._tr, o = (this._sel0 = this._sel1 = 0);
            if (b(p)) {
                return q
            }
            if (p === 1) {
                if ((this._sel0 = l.selectionStart) < (this._sel1 = l.selectionEnd)) {
                    q = l.value.substring(this._sel0, this._sel1)
                }
                return q
            }
            try {
                n = document.selection.createRange();
                r = l.value;
                m = r.length;
                p = n.duplicate();
                if (this._ta) {
                    p.moveToElementText(l)
                } else {
                    p.move("textedit", -1)
                }
                try {
                    while (p.compareEndPoints("StartToStart", n) < 0) {
                        p.moveStart("character", 1);
                        o++;
                        if (this._ta && r.charCodeAt(o) === 10) {
                            o++
                        }
                        if (o > m) {
                            break
                        }
                    }
                } catch (j) {
                }
                q = n.text
            } catch (k) {
            }
            this._sel0 = o;
            this._sel1 = o + q.length;
            return q
        },

        getSelection: function (i) {
            this.getSelectedText();
            return i ? this._sel0 : this._sel1
        },

        setFocus: function (i) {
            var k = this;
            if (k._field) {
                if (i === -1) {
                    try {
                        k._field[0].focus()
                    } catch (j) {
                    }
                } else {
                    setTimeout(function () {
                        if (k._fcs < 1) {
                            k.setFocus(-1)
                        }
                    }, i || 0)
                }
            }
            return this
        },

        hasFocus: function () {
            return this._fcs > 0
        },

        _jpn: function (i, j) {
            if (j) {
                if (i === 12290 || i === 65294) {
                    return "."
                }
                if (i === 12289) {
                    return ","
                }
            } else {
                if (!this._sTxt) {
                    return i
                }
            }
            if (i > 65295 && i < 65306) {
                i -= 65248
            } else {
                if (i > 1631 && i < 1642) {
                    i -= 1584
                } else {
                    if (i > 1775 && i < 1786) {
                        i -= 1728
                    } else {
                        return j ? null : i
                    }
                }
            }
            return j ? String.fromCharCode(i) : i
        },

        _dtt: function () {
            var n, j, k, i = this._oldAttr.title, m = this.options, l = m.inputName;
            if (l) {
                j = m._vsFormat;
                if (b(n = this._getVal(1), this._type > 3)) {
                    n = ""
                } else {
                    if (this._date) {
                        n = this._df(n, 0) + "-" + (this._df(n, 1) + 1) + "-" + this._df(n, 2) + " " + this._df(n, 3) + ":" + this._df(n, 4) + ":" + this._df(n, 5) + "." + this._df(n, 6)
                    } else {
                        if (j && this._type > 3) {
                            n = n.toString().replace(".", j)
                        }
                    }
                }
                k = a('input[name="' + l + '"]');
                if (k[0] !== this.element[0]) {
                    if (k.length === 0) {
                        k = a('<input type="hidden" name="' + l + '" />').appendTo(this._element.parent())
                    }
                    k.val(n)
                }
            }
            if (!i || i.indexOf("{0}") < 0) {
                return
            }
            if ((n = this._val()) === "") {
                n = this.options.nullText
            }
            this._element[0].title = this._field[0].title = this._field[0].alt = i.replace("{0}", n)
        },

        _stopTimer: function (i) {
            if (this._timer) {
                clearInterval(this._timer)
            }
            delete this._timer;
            if (!i && this._timer1) {
                clearInterval(this._timer1);
                delete this._timer1
            }
        },

        _maskFlag: function (i, j) {
            switch (i) {
                case ">":
                    return -1;
                case "<":
                    return -2;
                case "&":
                    i = 1;
                    break;
                case "C":
                    i = 2;
                    break;
                case "A":
                    i = 7;
                    break;
                case "a":
                    i = 8;
                    break;
                case "L":
                    i = 13;
                    break;
                case "?":
                    i = 14;
                    break;
                case "0":
                    return 19;
                case "9":
                    return 20;
                case "#":
                    return 21;
                default:
                    return 0
            }
            return i + j * 2
        },

        _maskFilter: function (l, o, m, n) {
            var j, k;
            if (m >= o.length) {
                return n
            }
            j = o.charCodeAt(m);
            k = Math.floor((l - 1) / 6);
            o = o.charAt(m);
            if (j < 22) {
                return n
            }
            if ((k === 1 || k === 3) && j > 100) {
                if ((j = this._jpn(j)) < 100) {
                    o = String.fromCharCode(j)
                }
            }
            if (k === 3) {
                return ((l === 21 && (o === "-" || o === "+")) || (j > 47 && j < 58)) ? o : n
            }
            if (k === 1 || k === 2) {
                if (k === 1 && j > 47 && j < 58) {
                    return o
                }
                if (j < 256 && o.toUpperCase() === o.toLowerCase()) {
                    return n
                }
            }
            if ((l = Math.floor((l - 1) / 2) % 3) === 0) {
                return o
            }
            return (l === 2) ? o.toLowerCase() : o.toUpperCase()
        },

        _getTxt: function (v, s, u, k) {
            var l, n, j, m = this._selKey, p = this._mask, t = "", q = !b(u), r = this.options;
            if (!q) {
                u = (this._bad !== 0 && this._fcs > 1) ? this._val() : this._txt
            }
            if (q) {
                q = this._type === 1
            }
            if (b(u) || b(p)) {
                return t
            }
            n = p.length;
            m = (this._fcs > 1 && !k && r.hideMaskOnFocus) ? ((m && m < n) ? m - 1 : -1) : n;
            for (l = 0; l < n; l++) {
                if ((j = p.charCodeAt(l)) < 22) {
                    if (l < u.length && u.charCodeAt(l) >= 22) {
                        t += u.charAt(l);
                        if (l > m) {
                            m = l
                        }
                        q = false
                    } else {
                        if (v % 3 === 2 || (v % 3 === 1 && j % 2 === 1)) {
                            t += (j === 21 && s === "") ? r.padChar : s
                        }
                    }
                } else {
                    if (v >= 3) {
                        t += p.charAt(l);
                        if (l === m + 1) {
                            if (this._selKey === l) {
                                this._selKey++
                            }
                            m++
                        }
                    }
                }
            }
            if (m++ < n) {
                t = t.substring(0, m)
            }
            return q ? "" : t
        },

        _setTxt: function (r, s, p) {
            var k, l, n = 0, m = -1, o = this._mask, q = this._mask;
            if (!b(r)) {
                while (++m < o.length) {
                    if (s === 1000 + n) {
                        s = this._dataMode
                    }
                    if (n >= r.length) {
                        break
                    }
                    if ((l = o.charCodeAt(m)) < 22) {
                        if (!b(k = this._maskFilter(o.charCodeAt(m), r, n))) {
                            q = q.substring(0, m) + k + q.substring(m + 1)
                        }
                        n++
                    } else {
                        if (s >= 3) {
                            n++
                        }
                    }
                }
            }
            if (p) {
                return q
            }
            this._txt = q;
            this._text = this._focusTxt(this._fcs > 1, " ");
            this._repaint()
        },

        _setMask: function (n) {
            var r, j, k, l = 0, q = 0, m = "", p = "", o = this._getTxt(0);
            for (k = 0; k < n.length; k++) {
                if ((r = this._maskFlag(j = n.charAt(k), q)) !== 0) {
                    if (r < 0) {
                        q = (q === -r) ? 0 : -r;
                        continue
                    }
                    m += (j = String.fromCharCode(r));
                    j = this._maskFilter(r, o, l++, j)
                } else {
                    if (j === "\\" && k + 1 < n.length && this._maskFlag(n.charAt(k + 1), 0) !== 0) {
                        m += (j = n.charAt(++k))
                    } else {
                        m += j
                    }
                }
                p += j
            }
            this._txt = p;
            this._mask = m
        },

        _getMask: function (j, p, l) {
            var q, m, n = 0, k = -1, o = "";
            if (!p) {
                p = ""
            }
            if (l) {
                p = p.replace("dddd", "ddd").replace("ddd,", "").replace("ddd ", "").replace(" ddd", "").replace("ddd", "")
            }
            p = p.replace(/\x08/g, " ").replace(/\x09/g, " ");
            p = p.replace(/\\f/g, "\x01").replace(/\\d/g, "\x02").replace(/\\s/g, "\x03").replace(/\\m/g, "\x04").replace(/\\t/g, "\x05").replace(/\\H/g, "\x06").replace(/\\h/g, "\x07").replace(/\\M/g, "\x08").replace(/\\y/g, "\x09");
            p = p.replace("fff", "24").replace("ff", "23").replace("f", "22");
            p = p.replace("dddd", l ? "" : "21").replace("ddd", l ? "" : "20").replace("dd", "09").replace("d", "08").replace("ss", "19").replace("s", "18").replace("mm", "17").replace("m", "16");
            p = p.replace("tt", "15").replace("t", "14").replace("HH", "13").replace("H", "12").replace("hh", "11").replace("h", "10");
            p = p.replace("MMMM", l ? "MM" : "07").replace("MMM", l ? "MM" : "06").replace("MM", "05").replace("M", "04").replace("yyyy", "03").replace("yy", "02").replace("y", "01");
            p = p.replace(/\x01/g, "g").replace(/\x02/g, "d").replace(/\x03/g, "s").replace(/\x04/g, "m").replace(/\x05/g, "t").replace(/\x06/g, "H").replace(/\x07/g, "h").replace(/\x08/g, "M").replace(/\x09/g, "y");
            for (m = 0; m < p.length; m++) {
                q = p.charCodeAt(m);
                if (q < 48 || q > 57) {
                    if (!l && (k = p.charAt(m)) === "\\" && m + 1 < p.length) {
                        if ((q = p.charAt(++m)) === "\\") {
                            continue
                        }
                        if (q === "0" || q === "9") {
                            o += k
                        }
                        o += q
                    } else {
                        o += p.charAt(m)
                    }
                    continue
                }
                k = (q - 48) * 10 + p.charCodeAt(++m) - 48;
                if (!l) {
                    j[n++] = k;
                    o += "\x01";
                    continue
                }
                j[n++] = k;
                if (k === 14) {
                    o += "L"
                } else {
                    if (k === 15) {
                        o += "LL"
                    } else {
                        if (k === 22) {
                            o += "0"
                        } else {
                            o += "00";
                            if (k === 3) {
                                o += "00"
                            }
                            while (k-- > 23) {
                                o += "0"
                            }
                        }
                    }
                }
            }
            return o
        },

        getValueByMode: function (l, n, k) {
            var i, m = this._type, j = this.options.emptyChar;
            l = this._mode(l, m);
            if (m === 0 || !this._field) {
                return this._val()
            }
            if (m > 3) {
                i = this._dataMode;
                this._dataMode = l;
                n = this.value();
                this._dataMode = i;
                return n
            }
            if (m === 1) {
                return this._getTxt(l, n ? "" : j, null, k)
            }
            i = (this._fcs < 2) ? (this._isNull ? null : this._date) : this._toDate(this._val(), true, n);
            return (l === 0) ? i : (i ? this._toTxt(i, l === 1, j) : "")
        },

        _fieldVal: function (n, l, m, k) {
            var s, q, p = (n % 2) * 2, r = this.options;
            if (n < 4) {
                s = this._df(l, 0) + r.yearShift;
                if (n === 3) {
                    p = 4
                } else {
                    s %= 100;
                    p = (n === 2) ? 2 : 0
                }
            } else {
                if (n < 8) {
                    this.d_s = 2;
                    s = this._df(l, 1) + 1;
                    if (n > 5) {
                        n = this._optVal((n === 6) ? "monthNamesShort" : "monthNames")[s - 1];
                        if (n.length > 0) {
                            return n
                        }
                    }
                } else {
                    if (n < 10) {
                        s = this._df(l, 2)
                    } else {
                        if (n < 16) {
                            s = this._df(l, 3);
                            if (n > 13) {
                                s = this._optVal((s < 12) ? "am" : "pm");
                                if ((n -= 13) === (p = s.length)) {
                                    return s
                                }
                                if (p < n) {
                                    s += " "
                                }
                                return s.substring(0, n)
                            }
                            if (n < 12) {
                                s %= 12;
                                if (s === 0) {
                                    s = 12
                                }
                            }
                        } else {
                            if (n < 18) {
                                s = this._df(l, 4)
                            } else {
                                if (n < 20) {
                                    s = this._df(l, 5)
                                } else {
                                    if (n > 21) {
                                        s = this._df(l, 6);
                                        q = p = n - 21;
                                        while (q-- > 3) {
                                            s *= 10
                                        }
                                        while (q++ < 2) {
                                            s = Math.floor(s / 10)
                                        }
                                    } else {
                                        return this._optVal((n === 20) ? "dayNamesShort" : "dayNames")[l.getDay()]
                                    }
                                }
                            }
                        }
                    }
                }
            }
            s = h(s);
            if (n < 20 || n > 22) {
                n = s.length;
                if (m) {
                    if (p === 0) {
                        p = 2
                    } else {
                        m = false
                    }
                }
                if (p > 0) {
                    if (p < n) {
                        s = s.substring(0, p)
                    } else {
                        while (n++ < p) {
                            s = (m ? k : "0") + s
                        }
                    }
                }
            }
            return s
        },

        _limits: function (m, k) {
            var l, j = this._prop(10), i = this._prop(11);
            if (this._type > 3) {
                if (b(m, 1) && !this.options.nullable) {
                    m = this.options.nullValue;
                    if (!m && this._dataMode > 2) {
                        m = 0
                    }
                }
                if (!b(m, 1)) {
                    if (!b(j, 1) && m <= j) {
                        return k ? i : j
                    }
                    if (!b(i, 1) && m >= i) {
                        return k ? j : i
                    }
                }
                return m
            }
            if (b(m)) {
                return m
            }
            l = m.getTime();
            if (!b(j)) {
                j = j.getTime()
            }
            if (!b(i)) {
                i = i.getTime()
            }
            if (!b(j) && (l < j || (k && l === j))) {
                m.setTime(k ? i : j);
                return m
            }
            if (!b(i) && (l > i || (k && l === i))) {
                m.setTime(k ? j : i);
                return m
            }
            return null
        },

        _date7: function (k) {
            var j;
            if (k.length < 13) {
                return null
            }
            k = k.replace(/[\. :]/g, "-").split("-");
            if ((j = k.length) !== 7) {
                return null
            }
            while (j-- > 0) {
                if ((k[j] = c(k[j], -1)) < 0) {
                    return null
                }
            }
            return this._df(k[0], k[1] - 1, k[2], k[3], k[4], k[5], k[6])
        },

        _toDate: function (O, w, F, u) {
            var P, A, p, B, D, H = 0, K = 0, z = -1, E = -1, Q = -1, I = -1, r = -1, x = -2, G = -2, N = -2, J = -2, M = -1, k = false, C = null, l = {}, L = this.options, q = u ? null : this._date7(O), t = (w && u) ? this._fields0(O) : this._fields1(O, w);
            B = t.length;
            if (!q) {
                while (++z < B) {
                    E++;
                    P = t[z];
                    A = w ? this._field0IDs[z] : this._field1IDs[z];
                    if (A < 4) {
                        if (P > 100 && P > L.yearShift) {
                            P -= L.yearShift
                        }
                        if ((l.year = Q = P) < 0) {
                            H++
                        } else {
                            K++;
                            p = L.centuryThreshold;
                            if (P < 100) {
                                if (A < 3 && p < 0) {
                                    p = 29
                                }
                                if (p >= 0) {
                                    Q += (P > p) ? 1900 : 2000
                                }
                            }
                        }
                    } else {
                        if (A < 8) {
                            if (P < 1 || P > 12) {
                                H++
                            } else {
                                l.month = I = P;
                                K++
                            }
                        } else {
                            if (A < 10) {
                                l.day = r = P;
                                if (P < 1 || P > 31) {
                                    H++
                                } else {
                                    K++
                                }
                            } else {
                                if (A < 14) {
                                    if (P === 24) {
                                        P = 0
                                    }
                                    if (A > 11) {
                                        M = -4
                                    } else {
                                        if (P === 12) {
                                            P = 0
                                        }
                                        if (P > 12) {
                                            H++
                                        }
                                    }
                                    l.hours = x = P;
                                    if (P > 23 || P < 0) {
                                        H++
                                    }
                                } else {
                                    if (A < 16) {
                                        E--;
                                        if (P > 0) {
                                            M++
                                        }
                                        continue
                                    } else {
                                        if (A < 18) {
                                            l.minutes = G = P;
                                            if (P > 59 || P < 0) {
                                                H++
                                            }
                                        } else {
                                            if (A < 20) {
                                                l.seconds = N = P;
                                                if (P > 59 || P < 0) {
                                                    H++
                                                }
                                            } else {
                                                if (A < 22) {
                                                    E--;
                                                    continue
                                                } else {
                                                    while (A++ < 24) {
                                                        P *= 10
                                                    }
                                                    while (A-- > 25) {
                                                        P = Math.floor(P / 10)
                                                    }
                                                    l.milliseconds = J = P;
                                                    if (P > 999 || P < 0) {
                                                        H++
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (P >= 0) {
                        k = true
                    }
                    if (E < L.minNumberOfDateFields && H > 0) {
                        if (u && k) {
                            D = this._optVal("dateFields", 2);
                            C = "numberOfFields"
                        }
                        H += 9
                    }
                }
            }
            if (M === 0 && x >= 0 && x < 12) {
                l.hours = (x += 12)
            }
            if (!q && (!L.nullable || H < 9)) {
                if (K === 3) {
                    q = this._df(Q, I - 1, r, 0, 0, 0, 0);
                    if (Q < 100) {
                        this._df(q, 0, Q)
                    }
                } else {
                    q = this._df();
                    if (this._date) {
                        q.setTime(this._date.getTime())
                    }
                    if (r > 0) {
                        this._df(q, 2, 10)
                    }
                    if (Q >= 0) {
                        this._df(q, 0, Q)
                    }
                    if (I > 0) {
                        this._df(q, 1, I - 1)
                    }
                    if (r > 0) {
                        this._df(q, 2, r)
                    }
                }
            }
            if (u && r > 0 && q && r !== this._df(q, 2)) {
                D = this._optVal("invalidDay", 2);
                C = "dayOfMonth"
            }
            r = L.useLastGoodDate ? this._goodD : null;
            if (u && !q && !L.nullable) {
                q = r;
                if (!q || !q.getTime) {
                    q = this._df()
                } else {
                    D = this._optVal("required", 2);
                    C = "null"
                }
            }
            if (q) {
                if (x > -2) {
                    this._df(q, 3, (x < 0) ? 0 : x)
                }
                if (G > -2) {
                    this._df(q, 4, (G < 0) ? 0 : G)
                }
                if (N > -2) {
                    this._df(q, 5, (N < 0) ? 0 : N)
                }
                if (J > -2) {
                    this._df(q, 6, (J < 0) ? 0 : J)
                }
                if (F) {
                    if (b(q = this._limits(z = q))) {
                        q = z
                    } else {
                        if (u) {
                            if (!L.minValue) {
                                D = this._optVal("max", 2).replace("{0}", this._toTxt(L.maxValue))
                            } else {
                                if (!L.maxValue) {
                                    D = this._optVal("min", 2).replace("{0}", this._toTxt(L.minValue))
                                } else {
                                    D = this._optVal("range", 2).replace("{0}", this._toTxt(L.minValue)).replace("{1}", this._toTxt(L.maxValue))
                                }
                            }
                            C = "limit"
                        }
                    }
                }
            }
            if (u) {
                if (k && !q && O.length > 0 && r) {
                    if (!C) {
                        D = this._optVal("date", 2);
                        C = "invalid"
                    }
                    q = r
                }
                if (!k && L.required) {
                    D = this._optVal("required", 2);
                    C = "null"
                }
                l.value = q;
                if (C && (O || !L.nullable)) {
                    if (L.reduceDayOfInvalidDate !== false && q && k && this._df(q, 2) < 5 && l.day > 27) {
                        this._df(q, 2, 0);
                        l.value = q
                    }
                    l.text = O;
                    l.reason = C;
                    l.message = D;
                    this._inv = l
                }
            }
            return q
        },

        _toTxt: function (l, n, s, u) {
            var j, q, o = -1, m = 0, t = "", r = n ? this._mask : this._mask1, p = n ? this._field0IDs : this._field1IDs;
            if (b(l)) {
                return n ? this._getTxt(5, s, u ? (this._txt = r) : r) : ""
            }
            this.d_s = 6;
            while (++o < r.length) {
                j = r.charAt(o);
                if ((q = r.charCodeAt(o)) < 22) {
                    t += this._fieldVal(p[m++], l, n, j);
                    if (n) {
                        while (o + 1 < r.length) {
                            if (r.charCodeAt(o + 1) === q) {
                                o++
                            } else {
                                break
                            }
                        }
                    }
                } else {
                    t += j
                }
            }
            if (!n) {
                return t
            }
            if (u) {
                this._txt = t
            }
            return this._getTxt(5, s, t)
        },

        _isPM: function (l, j) {
            var k = this._optVal("pm").toUpperCase();
            return k.charAt(0) === l.charAt(j) && (k.length < 2 || l.length <= j + 1 || k.charAt(1) === l.charAt(j + 1))
        },

        _fields1: function (w, o) {
            var u, t, s, r, p = -1, x = -1, l = 0, n = [], q = o ? this._field0IDs : this._field1IDs;
            r = q.length;
            while (++p < r) {
                n[p] = -1
            }
            if (b(w)) {
                return n
            }
            w = w.toUpperCase();
            p = -1;
            while (++p < w.length && l < r) {
                t = this._jpn(w.charCodeAt(p)) - 48;
                s = q[l];
                if (s === 20 || s === 21) {
                    s = q[++l]
                }
                if (s === 14 || s === 15) {
                    if (t >= 0 && t <= 9) {
                        x = -1;
                        l++;
                        p--;
                        continue
                    }
                    if (this._isPM(w, p)) {
                        n[l++] = 1;
                        x = -1
                    }
                } else {
                    if (t >= 0 && t <= 9) {
                        if (x < 0) {
                            x = t
                        } else {
                            x = x * 10 + t
                        }
                    } else {
                        if (x >= 0) {
                            n[l++] = x;
                            x = -1
                        } else {
                            if (s === 6 || s === 7) {
                                while (x-- > -3) {
                                    for (t = 0; t < 12; t++) {
                                        u = this._optVal((s === 6) ? "monthNamesShort" : "monthNames")[t];
                                        u = u.toUpperCase();
                                        if ((s = u.length) < 1) {
                                            continue
                                        }
                                        if (x === -3) {
                                            if (s < 4) {
                                                continue
                                            }
                                            u = u.substring(0, 3)
                                        }
                                        if ((s = w.indexOf(u) - 1) > -2) {
                                            if (s < 0 || w.charAt(s).toLowerCase() === w.charAt(s)) {
                                                break
                                            }
                                        }
                                    }
                                    if (t < 12) {
                                        n[l++] = t + 1;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (l < r) {
                n[l] = x
            }
            return n
        },

        _fields0: function (t) {
            var w, q, p = -1, o = -1, u = -1, l = -1, s = 22, r = this._mask, m = [];
            if (!t) {
                t = ""
            }
            while (++o < r.length) {
                p++;
                if ((w = r.charCodeAt(o)) > 21 && s > 21) {
                    continue
                }
                if (w > 21) {
                    if (l >= 0) {
                        m[l] = u
                    }
                } else {
                    if (s > 21) {
                        u = -1;
                        l++
                    }
                    if (p < t.length) {
                        if (w > 18) {
                            q = this._jpn(t.charCodeAt(p)) - 48;
                            if (q >= 0 && q <= 9) {
                                if (u < 0) {
                                    u = q
                                } else {
                                    u = u * 10 + q
                                }
                            } else {
                                if (o + 1 < r.length && t.charAt(p) === r.charAt(o + 1)) {
                                    p--
                                }
                            }
                        } else {
                            if (s !== w && this._isPM(t.toUpperCase(), p)) {
                                u = 1
                            }
                        }
                    }
                }
                s = w
            }
            m[l] = u;
            return m
        },

        _curField: function (o, l) {
            var k, p, m = 22, j = this._n0 = this._n1 = -1;
            for (k = 0; k < l.length; k++) {
                if (((p = l.charCodeAt(k)) > 21) === (m > 21)) {
                    continue
                }
                if (p > 21) {
                    if (k >= o) {
                        break
                    }
                } else {
                    this._n0 = k;
                    j++
                }
                m = p
            }
            if (this._n0 >= 0) {
                this._n1 = k
            }
            if (b(j = this._field0IDs[j])) {
                return -1
            }
            if (j < 8) {
                return (j < 4) ? 0 : 1
            }
            if (j < 20) {
                return Math.floor((j - 4) / 2)
            }
            return (j > 21) ? 8 : -1
        },

        _maskKey: function (o, j, t, m, r, p) {
            var l, q = 0, u = -1;
            if (this._type < 2) {
                return -2
            }
            l = this._curField(r, p);
            if (r >= this._n1) {
                if (t.charCodeAt(--r) > 21) {
                    return this._maskKey(o, j, t, m, r + 2, p)
                }
            }
            if (l < 0) {
                return -1
            }
            if (l === 5) {
                if (r <= this._n0) {
                    u = this._optVal("am");
                    if (u.charAt(0).toUpperCase() !== (j = j.toUpperCase())) {
                        u = this._optVal("pm");
                        if (u.charAt(0).toUpperCase() !== j) {
                            return -1
                        }
                    }
                    if (this._n1 === this._n0 + 1) {
                        u = u.charAt(0)
                    } else {
                        if ((m = u.length) < 2) {
                            u += " "
                        } else {
                            if (m > 2) {
                                u = u.substring(0, 2)
                            }
                        }
                    }
                    this._txt = t.substring(0, this._n0) + u + t.substring(this._n1)
                }
                return this._n1
            }
            if (o < 48 || o > 57) {
                if (r === 0 || (o !== 47 && o !== 58 && (o < 44 || o > 57))) {
                    return -1
                }
                if (p.charCodeAt(r - 1) >= 22 || this._n1 === m) {
                    return r
                }
                while (r < m) {
                    if (p.charCodeAt(r++) >= 22) {
                        break
                    }
                    t = t.substring(0, r - 1) + p.charAt(r - 1) + t.substring(r)
                }
                this._txt = t;
                return r
            }
            o -= 48;
            if (this._n0 === r) {
                u = t.charCodeAt(r + 1) - 48;
                if (l === 2) {
                    if (o > 3) {
                        q = 1
                    } else {
                        if (o === 3 && u > 1) {
                            q = 2
                        }
                    }
                } else {
                    if (l === 6 || l === 7) {
                        if (o > 5) {
                            q = 1
                        }
                    } else {
                        if (l > 0 && l < 5) {
                            if (l === 4) {
                                o--;
                                u -= 2
                            }
                            if (o > 1) {
                                q = 1
                            } else {
                                if (o === 1 && u > 2) {
                                    q = 2
                                }
                            }
                        }
                    }
                }
            }
            if (this._n0 + 1 === r) {
                u = t.charCodeAt(r - 1) - 48;
                if (l === 2) {
                    if (u > 3 || (u === 3 && o > 1)) {
                        q = 3
                    }
                } else {
                    if (l === 6 || l === 7) {
                        if (u > 6 || (u === 6 && o > 0)) {
                            q = 3
                        }
                    } else {
                        if (l > 0 && l < 5) {
                            if (l === 4) {
                                u--;
                                o -= 2
                            }
                            if (u > 1 || (u === 1 && o > 2)) {
                                q = 3
                            }
                        }
                    }
                }
            }
            if (q === 1) {
                t = t.substring(0, r) + p.charAt(r) + t.substring(r + 1);
                r++
            }
            if (q === 2) {
                t = t.substring(0, r + 1) + p.charAt(r + 1) + t.substring(r + 2)
            }
            if (q === 3) {
                while (++r < m) {
                    if (p.charCodeAt(r) < 22) {
                        break
                    }
                }
                if (r >= m) {
                    return -1
                }
                return this._maskKey(o + 48, j, t, m, r, p)
            }
            this._txt = t.substring(0, r) + j + t.substring(r + 1);
            return ++r
        },

        _add: function (p, o) {
            var i, j, k, m, n = o.toString(), l = p.toString(), q = p + o;
            m = q.toString();
            if ((i = l.indexOf(".")) < 1 || (j = m.indexOf(".")) < 1) {
                return q
            }
            if ((k = n.indexOf(".")) > 0) {
                k = n.length - k
            }
            if (m.length - j <= (i = Math.max(k, l.length - i))) {
                return q
            }
            o = 10;
            while (i-- > 2) {
                o *= 10
            }
            return Math.round(q * o) / o
        },

        spin: function (k) {
            var n, p, l, j, m = this.options;
            if (!this._spinList(k)) {
                return this
            }
            if (this._type < 2) {
                return this
            }
            if (this._type > 3) {
                n = this._toNum(this._val()) || 0;
                n = this._add(n, k);
                k = m.maxLength;
                if (!k || k < 1 || n.toString().length <= k) {
                    this._set_val(n, this._fcs)
                }
                return this
            }
            l = this._spinField;
            j = this._df();
            j.setTime(this._date.getTime());
            if (l < 0 || l > 8) {
                if (this._fcs === 2) {
                    this.getSelectedText();
                    l = this._curField(this._sel0, this._mask);
                    if (b(j = this._toDate(this._val(), true, true))) {
                        j = this._df()
                    }
                    this._spinField = l
                } else {
                    this._spinField = l = this.d_s
                }
            }
            if (l === 5) {
                k = (k > 0) ? 12 : -12
            }
            p = m.spin1Field;
            switch (l) {
                case 0:
                    this._df(j, 0, k += this._df(j, 0));
                    if (p && k !== this._df(j, 0)) {
                        l = -1
                    }
                    break;
                case 1:
                    this._df(j, 1, k += this._df(j, 1));
                    if (p && k !== this._df(j, 1)) {
                        l = -1
                    }
                    break;
                case 2:
                    this._df(j, 2, k += this._df(j, 2));
                    if (p && k !== this._df(j, 2)) {
                        l = -1
                    }
                    break;
                case 3:
                case 4:
                case 5:
                    l = this._df(j, 2);
                    this._df(j, 3, k += this._df(j, 3));
                    if (p && l !== this._df(j, 2)) {
                        l = -1
                    }
                    break;
                case 6:
                    this._df(j, 4, k += this._df(j, 4));
                    if (p && k !== this._df(j, 4)) {
                        l = -1
                    }
                    break;
                case 7:
                    this._df(j, 5, k += this._df(j, 5));
                    if (p && k !== this._df(j, 5)) {
                        l = -1
                    }
                    break;
                case 8:
                    for (l = this._n1 - this._n0; l < 3; l++) {
                        k *= 10
                    }
                    this._df(j, 6, k += this._df(j, 6));
                    if (p && k !== this._df(j, 6)) {
                        l = -1
                    }
                    break
            }
            if (l < 0) {
                return this
            }
            if (!b(k = this._limits(j))) {
                j = k
            }
            this._text = this._toTxt(j, this._fcs === 2, m.promptChar, true);
            this._date = j;
            this._isNull = false;
            this._repaint();
            this.select(this._sel0);
            if (this._fcs === 2) {
                this._last = this._val()
            }
            return this
        },

        _mode: function (i, k) {
            var j;
            if (!i || k < 1) {
                i = b(i) ? ((k > 3) ? 1 : ((k === 1) ? 5 : 0)) : 0
            } else {
                if (typeof i !== "number") {
                    i = i.toString().toLowerCase();
                    if (k > 3) {
                        j = { text: -1, editmodetext: 0, "double": 1, "float": 2, decimal: 3, "long": 4, ulong: 5, "int": 6, uint: 7, "short": 8, ushort: 9, sbyte: 10, "byte": 11 }
                    } else {
                        if (k > 1) {
                            j = { date: 0, editmodetext: 1, text: 2 }
                        } else {
                            if (k > 0) {
                                j = { rawtext: 0, rawtextwithrequiredprompts: 1, rawtextwithallprompts: 2, rawtextwithliterals: 3, rawtextwithrequiredpromptsandliterals: 4, alltext: 5 }
                            }
                        }
                    }
                    if (b(i = j[i])) {
                        i = -2
                    }
                }
            }
            return (i < -1) ? ((k > 3) ? 1 : 0) : i
        },

        _fixMode: function (j) {
            var k, i, l, m, n, q = this._type, p = this.options, r = this._value;
            this._dataMode = n = this._mode(p.dataMode, q);
            this._maxLen = p.maxLength;
            if (q > 0 && q < 4) {
                if (!p.promptChar) {
                    p.promptChar = "_"
                }
                if (!p.padChar) {
                    p.padChar = " "
                }
                if (!p.emptyChar) {
                    p.emptyChar = " "
                }
                if (q === 1 && j) {
                    q = p.inputMask;
                    this._setMask(q || "CCCCCCCCCC")
                }
            }
            if (q < 2) {
                if (j === 3) {
                    this._setVal(r)
                }
                return
            }
            if (q < 4) {
                i = p.dateInputFormat = p.dateInputFormat || "date";
                if (!p.yearShift) {
                    p.yearShift = 0
                }
                if (b(p.centuryThreshold)) {
                    p.centuryThreshold = 29
                }
                if (b(p.minNumberOfDateFields)) {
                    p.minNumberOfDateFields = 3
                }
                l = this._optVal(i + "Pattern") || i;
                i = p.dateDisplayFormat || i;
                m = this._optVal(i + "Pattern") || i || l;
                l = this._getMask(this._field0IDs = [], l, 1);
                this._mask1 = this._getMask(this._field1IDs = [], m);
                if (j === 1) {
                    this._date = this._df();
                    this._isNull = false
                }
                this._spinField = -1;
                this.d_s = 10;
                this._setMask(l);
                if (j !== 1 && !this._isNull) {
                    this._setVal(this._date, 1)
                }
                return
            }
            if (n > 3 && this._maxLen < 1) {
                k = 3;
                if (n < 6) {
                    k = 19
                } else {
                    if (n < 8) {
                        k = 10
                    } else {
                        if (n < 10) {
                            k = 5
                        }
                    }
                }
                this._field[0].maxLength = this._maxLen = k + (n + 1) % 2
            }
            if (j === 3) {
                this._setVal(r, 1)
            }
            if (!j && (r || r === 0)) {
                this._setVal(r / this._prop(7))
            }
        },

        _toNum: function (r, l, i) {
            var s, n = null, m = null, j, q = this.options, p = r, k = 0;
            if (typeof r !== "number") {
                r = h(r);
                k = r.length;
                p = parseFloat(this._txtAsNum(r))
            }
            if (isNaN(p)) {
                p = null
            } else {
                if (!isFinite(p)) {
                    p = (p === Number.NEGATIVE_INFINITY) ? -Number.MAX_VALUE : Number.MAX_VALUE
                }
            }
            s = l ? this._limits(p) : p;
            if (i && (s !== p || (b(s, 1) && k > 0))) {
                i = b(p, 1) ? ((k === 0) ? "null" : "format") : "limit";
                if (b(p, 1)) {
                    if (k === 0) {
                        i = "null";
                        j = this._optVal("required", 2)
                    } else {
                        i = "format";
                        j = this._optVal("number", 2)
                    }
                } else {
                    i = "limit";
                    l = null;
                    if (b(n = q.minValue, 1)) {
                        if (!b(n = this._prop(10), 1)) {
                            if (n !== s) {
                                n = null
                            }
                        }
                    }
                    if (b(m = q.maxValue, 1)) {
                        if (!b(m = this._prop(11), 1)) {
                            if (m !== s) {
                                m = null
                            }
                        }
                    }
                    j = b(m, 1) ? this._optVal("min", 2).replace("{0}", n.toString(10)) : (b(n, 1) ? this._optVal("max", 2).replace("{0}", m.toString(10)) : this._optVal("range", 2).replace("{0}", n.toString(10)).replace("{1}", m.toString(10)))
                }
                this._inv = { value: s, text: r, reason: i, message: j }
            }
            return s
        },

        _txtAsNum: function (m, j, l) {
            var i, k = m.length;
            if (!j) {
                j = this._prop(4)
            }
            if (!l) {
                l = this._prop(3)
            }
            while (k-- > 0) {
                i = this._jpn(m.charCodeAt(k), true);
                if (i) {
                    m = m.replace(new RegExp(m.charAt(k), "g"), i)
                }
            }
            m = m.replace("(", (m.indexOf(l) < 0) ? "-" : "").replace(this._prop(2), "").replace(new RegExp(l, "g"), "-");
            m = m.replace(j, "\x01");
            if ((i = m.indexOf(j)) > 0) {
                m = m.substring(0, i)
            }
            m = m.replace(/[^0-9\-eE\x01]/gm, "").replace("\x01", ".");
            k = m.length;
            if ((i = m.indexOf("-")) >= 0) {
                if (i + 1 < k && (i = m.indexOf("-", i + 1)) > 0) {
                    if (i > 0 && m.toUpperCase().charAt(i - 1) !== "E") {
                        m = m.substring(0, i)
                    }
                }
                k = m.length;
                if (m.toUpperCase().indexOf("E") < 0 && i + 1 === k) {
                    m = "-" + m.substring(0, k - 1)
                }
            }
            return (m === "-" || m === ".") ? "" : m
        },

        _ePow: function (k) {
            var l = this.options.scientificFormat, j = l ? l.length : 0, i = j ? l.charAt(0) : null;
            return ((i === "e" || i === "E") && (j === 1 || (j === 2 && l.charAt(1) === "+"))) ? (k ? l : i) : null
        },

        _toTxtNum: function (A, n, z, w, k, y) {
            var q, p, o, j, u, l = this._ePow(), t = 0, s = 0, r = -1, x = A, v = this._prop(8);
            if (b(z)) {
                if (b(A, 1)) {
                    return ""
                }
                x = A < 0;
                if (x) {
                    A = -A
                }
                try {
                    z = l ? A.toString(10) : A.toFixed(v)
                } catch (m) {
                    y = z = h(A)
                }
                return this._toTxtNum(x, n, z.toUpperCase(), b(w) ? this._prop(3) : w, b(k) ? this._prop(4) : k, y)
            }
            if (y) {
                z = this._txtAsNum(z, k)
            }
            z = z.replace("+", "");
            u = z.indexOf("E");
            if (u > 0) {
                l = l ? this._ePow(!n && z.charAt(u + 1) !== "-") + z.substring(u + 1) : z.substring(u);
                z = z.substring(0, u)
            } else {
                l = ""
            }
            u = z.length;
            if (b(x)) {
                if (u === 0) {
                    return n ? z : ""
                }
                x = this._isMinus(z.charCodeAt(0));
                if (x) {
                    z = z.substring(1);
                    u--
                }
            }
            while (++r < u) {
                j = z.charCodeAt(r);
                if (j < 48 || j > 57) {
                    z = z.substring(0, r) + z.substring(r + 1);
                    u--;
                    break
                }
            }
            while (r < u) {
                if (z.charCodeAt(u - 1) !== 48) {
                    break
                }
                z = z.substring(0, --u)
            }
            u = r;
            if (v > 0 && u < z.length) {
                s = z.length - u;
                z = z.substring(0, u) + k + z.substring(u);
                u += k.length + v
            }
            if (u < z.length) {
                z = z.substring(0, u)
            }
            o = z.replace(/0/g, "");
            if (x && (!o || o === k)) {
                x = false
            }
            if ((u = this._prop(9)) > 0) {
                if (s === 0) {
                    z += k
                }
                while (u-- > s) {
                    z += "0"
                }
            }
            if (n) {
                z += l;
                return x ? (w + z) : z
            }
            q = this._prop(6);
            o = p = (q.length > 0) ? q[0] : 0;
            while (o > 0 && --r > 0) {
                if (--o === 0) {
                    z = z.substring(0, r) + this._prop(5) + z.substring(r);
                    o = q[++t];
                    if (b(o) || o < 1) {
                        o = p
                    } else {
                        p = o
                    }
                }
            }
            A = this._prop(x ? 1 : 0).replace("n", z + l);
            return A.replace("$", this._prop(2))
        },

        _prop: function (i) {
            var j, p, m, l = this.options, n = this._type, k = this._dataMode;
            if (i === 13) {
                l = l.selectionOnFocus;
                return (l === -1 || l === "select") ? -1 : ((l === 0 || l === "start") ? 0 : ((l === 1 || l === "end") ? 1 : 2))
            }
            if (i === 12) {
                return (l.maxLength > 0) ? l.maxLength : this._maxLen
            }
            if (i === 0) {
                return l.positivePattern || ((n === 6) ? this._optVal("percentPositivePattern") : ((n === 5) ? this._optVal("currencyPositivePattern") : "n"))
            }
            if (i === 1) {
                p = l.negativePattern || this._optVal((n === 6) ? "percentNegativePattern" : ((n === 5) ? "currencyNegativePattern" : "numericNegativePattern"));
                return p.replace("-", this._prop(3))
            }
            if (i === 2) {
                if (!b(p = l.symbol)) {
                    return p
                }
                return (n === 6) ? this._optVal("percentSymbol") : ((n === 5) ? this._optVal("currencySymbol") : "")
            }
            if (i === 3) {
                return this._optVal("negativeSign") || "-"
            }
            if (i === 4) {
                return l.decimalSeparator || this._optVal((n === 6) ? "percentDecimalSeparator" : ((n === 5) ? "currencyDecimalSeparator" : "numericDecimalSeparator"))
            }
            if (i === 5) {
                if (!b(p = l.groupSeparator)) {
                    return p
                }
                return this._optVal((n === 6) ? "percentGroupSeparator" : ((n === 5) ? "currencyGroupSeparator" : "numericGroupSeparator"))
            }
            if (i === 6) {
                return l.groups || this._optVal((n === 6) ? "percentGroups" : ((n === 5) ? "currencyGroups" : "numericGroups"))
            }
            if (i === 7) {
                if (!b(p = l.displayFactor)) {
                    return p
                }
                return (n === 6) ? this._optVal("percentDisplayFactor") : 1
            }
            if (i === 8) {
                if (k > 3) {
                    return 0
                }
                if (!b(p = l.maxDecimals)) {
                    return p
                }
                return this._optVal((n === 6) ? "percentMaxDecimals" : ((n === 5) ? "currencyMaxDecimals" : "numericMaxDecimals"))
            }
            if (i === 9) {
                if (k > 3) {
                    return 0
                }
                if (!b(p = l.minDecimals)) {
                    return p
                }
                return this._optVal((n === 6) ? "percentMinDecimals" : ((n === 5) ? "currencyMinDecimals" : "numericMinDecimals"))
            }
            j = i === 10;
            if (j || i === 11) {
                p = j ? l.minValue : l.maxValue;
                if (n > 3 && typeof p === "string") {
                    p = parseFloat(p)
                }
                if (!b(p, 1) || n < 4 || k < 2 || k === 3 || k > 11) {
                    return p
                }
                if (k === 2) {
                    return j ? -3.40282347e+38 : 3.40282347e+38
                }
                p = 127;
                m = (k % 2) === 0;
                if (!m && j) {
                    return 0
                }
                if (k < 6) {
                    p = 9.22337203685478e+18
                } else {
                    if (k < 8) {
                        p = 2147483647
                    } else {
                        if (k < 10) {
                            p = 32767
                        }
                    }
                }
                return m ? (j ? -(p + 1) : p) : (p * 2 + 1)
            }
        },

        _isMinus: function (i) {
            return i === this._prop(3).charCodeAt(0) || i === 45 || (i === 40 && this._prop(1).indexOf("(") >= 0) || i === 12540 || i === 65293 || i === 65288
        },

        destroy: function () {
            var q, p, l, j, m = this._element, o = this._field, n = this.element, k = this._buttons;
            l = m ? m[0] : null;
            if (!o || !l) {
                return this
            }
            this._stopTimer();
            this._doDP(3);
            this._initValidator(1);
            this._listRemove();
            o.unbind(this._evts);
            m.unbind(this._mEvts);
            j = (k && k[0]) ? k[0][0] : null;
            if (j && j.parentNode === l) {
                l.removeChild(j)
            }
            j = (k && k[1]) ? k[1][0].parentNode : null;
            if (j && j.parentNode === l) {
                l.removeChild(j)
            }
            if (o[0].parentNode === l) {
                l.removeChild(o[0])
            }
            if (this._selElem) {
                m.remove()
            } else {
                if (this._swap) {
                    q = l.parentNode;
                    q.insertBefore(n[0], l);
                    q.removeChild(l)
                }
            }
            q = this._oldCss;
            for (p in q) {
                if (q.hasOwnProperty(p)) {
                    n.css(p, q[p])
                }
            }
            q = this._oldAttr;
            for (p in q) {
                if (q.hasOwnProperty(p)) {
                    n[0][p] = q[p]
                }
            }
            n[0]._ig_oldCss = null;
            n = m = o = this._dp = this._buttons = this._field = this._element = null;
            this._evts = this._mEvts = this._oldAttr = this._oldCss = this._validator = null;
            a.Widget.prototype.destroy.apply(this, arguments);
            return this
        }

    });

    a.extend(a.ui.igEditor, { version: "12.2.20122.1021" });

    a.ui.igEditor.setDefaultCulture = function (i) {

        a.ig.regional = a.ig.regional || {};

        a.ig.regional.defaults = a.extend(a.ig._regional, (typeof i === "string") ? a.ig.regional[i] : i);

        if (i === "en" || i === "en-US") {
            i = ""
        }

        if (a.datepicker && a.datepicker.regional && a.datepicker.regional[i]) {
            a.datepicker.setDefaults(a.datepicker.regional[i])
        }

    };

    a.widget("ui.igTextEditor", a.ui.igEditor, {

        options: { textMode: null, maxLength: 0, includeKeys: null, excludeKeys: null, toUpper: false, toLower: false, listMatchIgnoreCase: true, listMatchOnly: false, listMatchContains: false, listAutoComplete: false },

        _create: function () {
            a.ui.igEditor.prototype._create.apply(this, [0])
        }

    });

    a.widget("ui.igMaskEditor", a.ui.igEditor, {

        options: { includeKeys: null, excludeKeys: null, toUpper: false, toLower: false, listMatchIgnoreCase: true, listMatchOnly: false, listMatchContains: false, listAutoComplete: false, inputMask: "CCCCCCCCCC", promptChar: "_", padChar: " ", emptyChar: " ", dataMode: "alltext", hideMaskOnFocus: false },

        _create: function () {
            a.ui.igEditor.prototype._create.apply(this, [1])
        }

    });

    a.widget("ui.igDateEditor", a.ui.igEditor, {

        options: { regional: null, spin1Field: false, minValue: null, maxValue: null, dateDisplayFormat: null, dateInputFormat: null, promptChar: "_", dataMode: "date", minNumberOfDateFields: 3, useLastGoodDate: false, reduceDayOfInvalidDate: true, hideMaskOnFocus: false, centuryThreshold: 29, enableUTCDates: false, spinDelta: 1, nullable: true, yearShift: 0 },

        _create: function () {
            a.ui.igEditor.prototype._create.apply(this, [2])
        }

    });

    a.widget("ui.igDatePicker", a.ui.igDateEditor, {

        options: { button: "dropdown", datepickerOptions: null },

        _create: function () {
            a.ui.igEditor.prototype._create.apply(this, [3])
        }

    });

    a.widget("ui.igNumericEditor", a.ui.igEditor, {

        options: { regional: null, negativePattern: null, negativeSign: null, decimalSeparator: null, groupSeparator: null, groups: null, maxDecimals: null, minDecimals: null, minValue: null, maxValue: null, scientificFormat: null, nullValue: null, spinDelta: 1, nullable: true, maxLength: 0, dataMode: "double" },

        _create: function () {
            a.ui.igEditor.prototype._create.apply(this, [4])
        }

    });

    a.widget("ui.igCurrencyEditor", a.ui.igNumericEditor, {
        options: { positivePattern: null, negativePattern: null, symbol: null },

        _create: function () {
            a.ui.igEditor.prototype._create.apply(this, [5])
        }

    });

    a.widget("ui.igPercentEditor", a.ui.igNumericEditor, {

        options: { positivePattern: null, negativePattern: null, symbol: null, displayFactor: null },

        _create: function () {
            a.ui.igEditor.prototype._create.apply(this, [6])
        }

    })

}(jQuery));