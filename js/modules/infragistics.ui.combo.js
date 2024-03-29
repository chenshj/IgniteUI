﻿/*
 * Infragistics.Web.ClientUI Combo localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.Combo) {
    $.ig.Combo = {
        locale: {
            noMatchFoundText: "No Results",
            dropDownButtonTitle: "Show drop-down",
            clearButtonTitle: "Clear value"
        }
    };
    /*
     * Infragistics.Web.ClientUI Combo 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     * jquery-1.4.4.js
     * jquery.ui.core.js
     * jquery.ui.widget.js
     * infragistics.util.js
     * infragistics.dataSource.js
     *
     * Example to use:
     *	<script type="text/javascript">
     *	$(function () {
     *		$('#combo1').igCombo();
     *	});
     *	</script>
     *	<input id="combo1" />
     */
}
( function (a) {
    var b = function (m, l) {
        return m === null || m === undefined || (l && typeof m === "number" && isNaN(m))
    }, k = function (l) {
        if (!l) {
            return 0
        }
        if (typeof l === "number") {
            return l
        }
        l = l.toString();
        l = l.match(/[e%mitc]/i) ? 0 : parseFloat(l);
        return isNaN(l) ? 0 : Math.floor(l + 0.5)
    }, i = function (m, l) {
        return k(m.css(l))
    }, f = function (l) {
        return l.attr("tabIndex", -1).css("outline", 0).attr("unselectable", "on")
    }, j = function (l) {
        try {
            l.preventDefault();
            l.stopPropagation()
        } catch (m) {
        }
    }, d = function (l, m) {
        return l === m || (l && m && l.getTime && m.getTime && l.getTime() === m.getTime())
    }, g = function () {
        return new Date().getTime()
    }, h = function (l, m) {
        m = m || l.offset();
        l = l ? l[0].ownerDocument : document;
        l = l ? l.documentElement : null;
        var n = l ? l.msContentZoomFactor : null;
        if (n && n > 1) {
            m.left += l.scrollLeft - window.pageXOffset;
            m.top += l.scrollTop - window.pageYOffset
        }
        return m
    }, e = 100, c;
    a.widget("ui.igCombo", {
        options: {
            height: null,
            width: null,
            tabIndex: null,
            animationShowDuration: 100,
            animationHideDuration: 50,
            enableDisplayBlock: false,
            mode: "editable",
            dropDownOnFocus: false,
            renderMatchItems: "multi",
            caseSensitive: false,
            filteringCondition: "contains",
            filteringType: null,
            filterExprUrlKey: null,
            autoComplete: false,
            format: true,
            selectedItems: [
                {
                    index: -1,
                    value: null,
                    text: null
                }
            ],
            multiSelection: null,
            enableActiveItem: true,
            allowCustomValue: false,
            selectItemBySpaceKey: false,
            itemSeparator: ", ",
            dropDownWidth: 0,
            dropDownMaxHeight: 300,
            dropDownMinHeight: 0,
            dropDownAsChild: false,
            virtualization: false,
            showDropDownButton: true,
            enableClearButton: true,
            noMatchFoundText: null,
            dropDownButtonTitle: null,
            clearButtonTitle: null,
            text: null,
            itemTemplate: null,
            headerTemplate: null,
            footerTemplate: null,
            nullText: null,
            dataSource: null,
            dataSourceType: null,
            dataSourceUrl: null,
            responseTotalRecCountKey: null,
            responseDataKey: null,
            validatorOptions: null,
            inputName: null,
            loadOnDemandSettings: {
                enabled: false,
                pageSize: null
            },
            dataBindOnOpen: false,
            closeDropDownOnSelect: true,
            closeDropDownOnBlur: true,
            valueKeyType: null,
            textKeyType: null,
            valueKey: null,
            textKey: null,
            parentCombo: null,
            cascadingDataSources: null,
            parentComboKey: null
        },
        events: {
            dropDownOpening: null,
            dropDownOpened: null,
            dropDownClosing: null,
            dropDownClosed: null,
            dataBinding: null,
            dataBound: null,
            textChanged: null,
            selectionChanging: null,
            selectionChanged: null,
            activeItemChanging: null,
            activeItemChanged: null,
            noMatchFound: null,
            filtering: null,
            filtered: null
        },
        css: {
            combo: "ui-igcombo ui-state-default ui-widget ui-corner-all",
            field: "ui-igcombo-field ui-corner-all",
            fieldHolder: "ui-igcombo-fieldholder",
            fieldHolderRTL: "ui-igcombo-fieldholder-rtl ui-corner-right",
            fieldHolderLTR: "ui-igcombo-fieldholder-ltr ui-corner-left",
            hover: "ui-igcombo-hover ui-state-hover",
            focus: "ui-igcombo-focus ui-state-focus",
            fieldHover: "ui-igcombo-field-hover",
            fieldFocus: "ui-igcombo-field-focus",
            disabled: "ui-igcombo-disabled ui-state-disabled",
            waitFiltering: "ui-igcombo-waitfiltering",
            nullText: "ui-igcombo-nulltext",
            button: "ui-igcombo-button ui-state-default",
            buttonRTL: "ui-igcombo-button-rtl ui-corner-left",
            buttonLTR: "ui-igcombo-button-ltr ui-corner-right",
            buttonFocus: "ui-igcombo-button-focus",
            buttonHover: "ui-igcombo-button-hover ui-state-hover",
            buttonPressed: "ui-igcombo-button-pressed ui-state-highlight",
            buttonIcon: "ui-igcombo-buttonicon ui-icon-triangle-1-s ui-icon",
            clear: "ui-igcombo-clear",
            clearHover: "ui-igcombo-clear-hover ui-state-hover",
            clearPressed: "ui-igcombo-clear-pressed ui-state-highlight",
            clearFocus: "ui-igcombo-clear-focus",
            clearIcon: "ui-igcombo-clearicon ui-icon-circle-close ui-icon",
            checkbox: "ui-state-default ui-corner-all ui-igcombo-checkbox ui-igcheckbox-small",
            checkboxHover: "ui-state-hover ui-igcombo-checkbox-hover",
            checkboxIconHover: "ui-state-hover ui-igcombo-checkboxicon-hover",
            checkboxOff: "ui-icon ui-igcombo-checkbox-off ui-igcheckbox-small-off",
            checkboxOn: "ui-icon ui-icon-check ui-igcombo-checkbox-on ui-igcheckbox-small-on",
            list: "ui-igcombo-list ui-widget ui-widget-content ui-corner-all",
            listItemHolder: "ui-igcombo-listitemholder",
            listItem: "ui-igcombo-listitem ui-state-default",
            listItemHover: "ui-igcombo-listitem-hover ui-state-hover",
            listItemActive: "ui-igcombo-listitem-active ui-state-active",
            listItemSelected: "ui-igcombo-listitem-selected ui-state-highlight",
            listItemMatch: "ui-igcombo-listitem-match",
            listItemTextWithCheckbox: "ui-igcombo-listitemtextwithcheckbox",
            noTopCorners: "ui-igcombo-no-top-corners",
            noBottomCorners: "ui-igcombo-no-bottom-corners"
        },
        RECORDS_VIEW: "{0}",
        RECORDS_DATA: "{1}",
        RECORDS_SERVER: "{2}",
        RECORDS_SERVER_TOTAL: "{3}",
        _create: function () {
            var y, q, v, u, w, m, l, D, G, s, F, x = this, z = x.options, n = x.css, p = x.element, E = z.selectedItems, t = "float", r = p, C = p.css("direction") === "rtl", B = {
                display: 0,
                visibility: 0,
                position: 0
            }, A = {
                title: 0
            };
            x._data = [];
            x._rtl = C;
            x._lastScroll = x._virtualTop = x._topID = 0;
            x._changeID = x._activeID = x._scrollTo = -1;
            u = x._noMouse() ? null : z.renderMatchItems;
            x._matchFlag = (u && u !== "none") ? u : null;
            if (E && E.length === 1 && E[0].index === -1 && E[0].value === null) {
                z.selectedItems = E = null
            }
            y = p[0].nodeName;
            if (y) {
                y = y.toUpperCase()
            }
            v = y === "INPUT";
            x._SELECT = D = y === "SELECT";
            if (!z.inputName) {
                x._oldCss = B;
                x._oldAttr = A
            }
            if (v) {
                A.value = A.disabled = A.readOnly = A.alt = A.tabIndex = B.textAlign = B.position = B.overflow = B[t] = 0
            } else {
                if (D) {
                    if (!z.dataSource) {
                        D = p[0].options;
                        w = D.length;
                        if (!E || E.length === 0) {
                            m = E = z.selectedItems = []
                        }
                        z.dataSource = [];
                        z.valueKey = "value";
                        z.textKey = "text";
                        for (u = 0; u < w; u += 1) {
                            G = D[u].text || D[u].innerHTML;
                            z.dataSource[u] = {
                                value: D[u].value || G,
                                text: G
                            };
                            if (m && (u === p[0].selectedIndex || D[u].selected)) {
                                E.push({
                                    index: u
                                })
                            }
                        }
                    }
                } else {
                    if (y !== "DIV" && y !== "SPAN") {
                        throw new Error(y + " is not supported as base element")
                    }
                    A.innerHTML = 0
                }
            }
            for (u in B) {
                if (B.hasOwnProperty(u)) {
                    B[u] = p.css(u)
                }
            }
            for (u in A) {
                if (A.hasOwnProperty(u)) {
                    A[u] = p[0][u]
                }
            }
            B.width = p[0].style.width;
            z.width = z.width || B.width;
            B.height = p[0].style.height;
            z.height = z.height || B.height;
            if (E && E.length > 0) {
                G = ""
            } else {
                if (b(G = z.text)) {
                    if (!p[0].multiple) {
                        G = z.inputName ? "" : ( v ? A.value : ( D ? p.val() : A.innerHTML))
                    }
                    G = G ? G.replace(/[\x09\x0a]/g, "") : "";
                    u = G.length;
                    while ((u -= 1) >= 0) {
                        if (G.charCodeAt(u) === 32) {
                            G = G.substring(0, u)
                        } else {
                            break
                        }
                    }
                }
            }
            if (v || D) {
                x._swap = true;
                p = a("<span />").css({
                    position: r.css("position"),
                    left: r.css("left"),
                    top: r.css("top")
                }).insertBefore(r);
                if (C) {
                    p.css("direction", "rtl")
                }
                if (D) {
                    r.css("display", "none");
                    r = a("<input />")
                }
            } else {
                r = a("<input />");
                if (!z.inputName) {
                    p.html("")
                }
            }
            x._oldTxt = "";
            x.mainElem = p;
            u = p.css("position");
            x._static = !u || u === "static";
            p.css("overflow", "hidden");
            x._fieldHolder = s = a("<span />").addClass(n.fieldHolder).addClass(C ? n.fieldHolderRTL : n.fieldHolderLTR).css("float", C ? "right" : "left").appendTo(p);
            x.fieldElem = r.appendTo(s).addClass(n.field).css("float", C ? "right" : "left").bind(x._evts = {
                keydown: function (o) {
                    x._onKey(o, 0)
                },
                keypress: function (o) {
                    x._onKey(o, 1)
                },
                keyup: function (o) {
                    x._onKey(o, 2)
                },
                focus: function (o) {
                    x._onEvt(this, 8, o)
                },
                blur: function (o) {
                    x._onEvt(this, 9, o)
                },
                paste: function (o) {
                    x._onChange(o)
                },
                beforecut: function (o) {
                    x._onChange(o)
                },
                cut: function (o) {
                    x._onChange(o)
                },
                drop: function (o) {
                    x._onChange(o)
                }
            });
            if (!b(u = z.tabIndex)) {
                r.attr("tabIndex", u)
            }
            r[0].disabled = z.disabled;
            r[0].readOnly = (this._mode(z) > 0) ? "readonly" : "";
            p.addClass(n.combo).css("display", "inline-block").bind(x._elemEvts = {
                MSPointerOver: function (o) {
                    x._onEvt(this, 26, o)
                },
                mouseover: function (o) {
                    x._onEvt(null, 6, o)
                },
                mouseleave: function (o) {
                    x._onEvt(null, 7, o)
                }
            });
            x._mEvts = q = {
                mousedown: function (o) {
                    x._onEvt(this, 3, o)
                },
                mouseup: function (o) {
                    x._onEvt(this, 4, o)
                },
                MSPointerOver: function (o) {
                    x._onEvt(this, 26, o)
                },
                mouseover: function (o) {
                    x._onEvt(this, 6, o)
                },
                mouseleave: function (o) {
                    x._onEvt(this, 7, o)
                }
            };
            x._tEvts = F = {
                touchstart: function (o) {
                    j(o)
                },
                touchmove: function (o) {
                    j(o)
                },
                touchend: function (o) {
                    j(o);
                    a(this).trigger("mousedown").trigger("mouseup")
                }
            };
            x.buttonElem = l = f(a("<span />").addClass(n.button).addClass(C ? n.buttonRTL : n.buttonLTR).css("float", C ? "left" : "right").attr("data-id", 1).appendTo(p).bind(q).bind(F));
            f(a("<span />").addClass(n.buttonIcon).appendTo(l).bind(F));
            x.clearElem = m = f(a("<span />").addClass(n.clear).css("float", C ? "left" : "right").attr("data-id", 2).appendTo(s).bind(q).bind(F));
            f(a("<span />").addClass(n.clearIcon).appendTo(m).bind(F));
            x._titles();
            x.validator();
            x._clearOn = false;
            x._doSize();
            u = x._cascade();
            if (u) {
                if (u !== true) {
                    if (typeof u === "string") {
                        u = u.replace("#", "")
                    }
                    c = c || {};
                    if (c[u]) {
                        c[u].push(x)
                    } else {
                        c[u] = [x]
                    }
                }
            } else {
                if (!z.dataBindOnOpen) {
                    x.dataBind()
                }
            }
            if (G) {
                x.text(G)
            }
            x._canFire = true
        },
        dropDownVisible: function (m, l) {
            if (!arguments.length) {
                return !!this._ddOn
            }
            this._canFire = l;
            this._doDrop(m ? 2 : 0);
            this._canFire = true;
            return this
        },
        remove: function () {
            var m, n = this._validator, l = this.mainElem;
            if (!l || !l[0]) {
                return
            }
            if (n) {
                n.hide()
            }
            if (this._fcs) {
                this._onEvt(null, 9)
            }
            this.fieldElem.removeClass(this.css.fieldHover);
            l.removeClass(this.css.hover);
            m = l[0].parentNode;
            if (m && m.tagName) {
                this._doDrop(0);
                this._fcs = 0;
                m.removeChild(l[0])
            }
            return this
        },
        validator: function (l) {
            var n = this.options.validatorOptions, m = this.fieldElem, p = this._validator;
            if (p && (l || !n)) {
                p.destroy();
                delete this._validator
            } else {
                if (!p && !l && n && m.igValidator) {
                    n.combo = n.element = this.mainElem;
                    this._validator = m.igValidator(n).data("igValidator")
                }
            }
            return this._validator
        },
        validate: function () {
            return this._validator ? this._validator.validate() : null
        },
        setFocus: function (l) {
            var n = this;
            if (n.fieldElem && !n._fcs) {
                if (l === -1) {
                    try {
                        n.fieldElem[0].focus()
                    } catch (m) {
                    }
                } else {
                    setTimeout(function () {
                        n.setFocus(-1)
                    }, l || 0)
                }
            }
            return this
        },
        hasFocus: function () {
            return this._fcs === 1
        },
        isSelected: function (l) {
            var n = this.options.selectedItems, m = n ? n.length : 0;
            while ((m -= 1) >= 0) {
                if (n[m].index === l) {
                    return true
                }
            }
            return false
        },
        selectedIndex: function (n, l) {
            if (n === undefined) {
                var m, p = this.options.selectedItems, o = p ? p.length : 0;
                n = -1;
                while ((o -= 1) >= 0) {
                    m = p[o].index;
                    n = (n < 0) ? m : Math.min(m, n)
                }
                return n
            }
            this._canFire = l || this._cascFire;
            this._select(n);
            this._updateFromList(null, 1);
            this._canFire = true;
            return this
        },
        activeIndex: function (m, l) {
            if (m === undefined) {
                return this._activeID
            }
            this._canFire = l;
            this._activate(m);
            this._canFire = true;
            return this
        },
        value: function (m, l) {
            if (this._noMouse()) {
                return this.text(m, l)
            }
            if (m === undefined) {
                m = this.options.selectedItems;
                return (m && m[0]) ? m[0].value : null
            }
            this._canFire = l || this._cascFire;
            this._valTime = g();
            this._valLast = m;
            this._select(null, m);
            this._updateFromList(null, 1);
            this._canFire = true;
            return this
        },
        text: function (m, l) {
            if (m === undefined) {
                m = this.fieldElem.val();
                return (this._nullT && (!m || m === this.options.nullText)) ? "" : m
            }
            this._canFire = l || this._cascFire;
            this._select(null, m, 2);
            this._updateFromList(null, 1);
            if (this._custom()) {
                this._onChange(null, null, m)
            }
            this._canFire = true;
            return this
        },
        values: function (p) {
            var m = this.options, n = m.selectedItems, l = n ? n.length : 0;
            if (p === undefined) {
                p = [];
                while ((l -= 1) >= 0) {
                    p[l] = n[l].value
                }
                return p
            }
            l = p ? p.length : 0;
            n = [];
            while ((l -= 1) >= 0) {
                n[l] = {
                    value: p[l]
                }
            }
            m.selectedItems = n;
            this._initSel(m);
            return this
        },
        itemByIndex: function (l) {
            return l < 0 ? null : {
                element: this._findItem(l),
                index: l,
                value: this._item(l),
                text: this._item(l, 2)
            }
        },
        itemByValue: function (m) {
            var l = -1;
            while (++l < this._count) {
                if (d(m, this._item(l))) {
                    return this.itemByIndex(l)
                }
            }
        },
        getFooter: function () {
            return this.listElem ? this.listElem.find("[data-footer]") : null
        },
        getDataSource: function () {
            return this._dataSource
        },
        getData: function () {
            return this._data
        },
        getRecordsCount: function (n) {
            var l = this._count, m = this._dataSource;
            if (n === this.RECORDS_VIEW || n === 0) {
                return l
            }
            if (m) {
                l = m._data.length;
                if (n === this.RECORDS_DATA || n === 1) {
                    return l
                }
                l = Math.max(m.totalRecordsCount(), l);
                if (n === this.RECORDS_SERVER || n === 2) {
                    return l
                }
                if (n === this.RECORDS_SERVER_TOTAL || n === 3) {
                    l = Math.max(Math.max(l, this._totalAll || 0), parseInt(this.options._totalAll || 0, 10))
                }
            }
            return l
        },
        _cascade: function (p, m, l) {
            var r, q, w, s = this, x = s._parentCombo, t = s.options, n = t.cascadingDataSources, u = s._cascOpt, v = l || t.parentCombo;
            l = p ? x : v;
            if (x && !p) {
                r = x._cascFire;
                q = r ? r.length : 0;
                while (q-- > 0) {
                    if (r[q] === s) {
                        r.splice(q, 1);
                        if (r.length === 0) {
                            delete x._cascFire
                        }
                        break
                    }
                }
                delete s._parentCombo;
                delete s._cascFilter;
                if (m) {
                    return
                }
                if (u) {
                    t.valueKey = u.value;
                    t.textKey = u.text;
                    t.dataSource = u.ds;
                    t.dataSourceUrl = u.url;
                    if (!l) {
                        s.dataBind()
                    }
                }
            }
            if (!l || m) {
                return
            }
            if (p) {
                delete s._cascSel;
                s.selectedIndex(-1);
                s.activeIndex(-1)
            } else {
                if (!n) {
                    r = t.parentComboKey;
                    if (!r) {
                        return
                    }
                    if (t.filteringType === "remote") {
                        s._cascFilter = -1
                    } else {
                        t.filteringType = "local";
                        s._cascFilter = 1
                    }
                    s._cascKey = r;
                    w = t.dataSource ? null : t.dataSourceUrl
                }
                if (typeof l === "string" || l.nodeName) {
                    l = a(v);
                    if (l.length !== 1) {
                        l = a("#" + v);
                        if (l.length !== 1) {
                            return v
                        }
                    }
                }
                if (l && l[0] && typeof l.data === "function") {
                    v = l[0];
                    l = l.data("igCombo")
                }
                if (!l || l.widgetName !== "igCombo" || l === s || !l._hasData) {
                    return v
                }
                r = l._cascFire;
                q = r ? r.length : 0;
                while (q-- > 0) {
                    if (r[q] === s) {
                        break
                    }
                }
                if (q < 0) {
                    l._cascFire = r = r || [];
                    r.push(s)
                }
                s._parentCombo = l;
                if (!u && n) {
                    u = s._cascOpt = {
                        value: t.valueKey,
                        text: t.textKey,
                        ds: t.dataSource,
                        url: t.dataSourceUrl
                    }
                }
            }
            x = l.options.selectedItems;
            x = (x && x.length > 0) ? x[0].value : null;
            if (s._valTime && g() - s._valTime < 200) {
                s._valTime = 1
            }
            if (n) {
                n = x === null ? null : n[x];
                x = n ? n.valueKey : null;
                t.valueKey = x || u.value;
                x = n ? n.textKey : null;
                t.textKey = x || u.text;
                t.dataSourceUrl = w = n ? n.dataSourceUrl : null;
                t.dataSource = n ? (n.dataSource || (n.length && !w ? n : null)) : null;
                s._hasData = false;
                s._urlBind = s._lod = s._totalAll = t._totalAll = s._count = 0;
                s._cascUrl = w;
                if (w) {
                    x = t.selectedItems;
                    s._cascSel = x ? (x[0] ? x[0].value : null) : null
                }
                s.dataBind();
                delete s._cascUrl
            } else {
                s._cascVal = x;
                if (s._hasData) {
                    s.filter()
                } else {
                    s._cascUrl = w;
                    s.dataBind();
                    delete s._cascUrl
                }
            }
            return true
        },
        _noMouse: function () {
            var m = this.options, l = m.dataSource;
            m = m.itemTemplate;
            return m && l && l.length === 1 && m.indexOf("{") < 0 && m.indexOf("}") < 0
        },
        _custom: function () {
            return this.options.allowCustomValue || this._noMouse()
        },
        _multi: function (l) {
            l = l.multiSelection;
            return l && l !== "off"
        },
        _checkBox: function (l) {
            l = l.multiSelection;
            return (l === 2) || (l && l.toLowerCase && l.toLowerCase() === "onwithcheckboxes")
        },
        _mode: function (l) {
            l = l.mode;
            return (l === 1 || l === "dropdown") ? 1 : ((l === 2 || l === "readonlylist") ? 2 : ((l === 3 || l === "readonly") ? 3 : 0))
        },
        _fixSelElem: function (m, p) {
            var l = this.css, n = l.listItemSelected, o = l.checkboxOff;
            if (p) {
                m.addClass(n)
            } else {
                m.removeClass(n)
            }
            if (m.attr("data-check")) {
                m[0]._check = p;
                n = l.checkboxOn;
                m.find("[data-icon]").removeClass(p ? o : n).addClass(p ? n : o)
            }
        },
        _copyA: function (l) {
            var n = l ? l.length : 0, m = n ? [] : null;
            while ((n -= 1) >= 0) {
                m[n] = l[n]
            }
            return m
        },
        _clearSel: function () {
            var l = this._selElems, m = l ? l.length : 0;
            while ((m -= 1) >= 0) {
                this._fixSelElem(l[m])
            }
            this._selElems = null
        },
        _selChanged: function (l) {
            if (this._selArg) {
                var m, q, r, p = this._cascFire, n = p ? p.length : 0;
                while (n-- > 0) {
                    p[n]._cascade(true)
                }
                this._fire("selectionChanged", l, this._selArg);
                if (this._SELECT) {
                    m = this.element[0];
                    q = m.options;
                    r = this.options.selectedItems;
                    n = r ? r[0] : null;
                    n = n ? n.index : -1;
                    m.selectedIndex = n;
                    if (q && n >= 0 && n < q.length) {
                        q[n].selected = true
                    }
                    if (m.onchange) {
                        m.onchange()
                    }
                }
                delete this._selArg
            }
        },
        _selChange: function (s, m, l, q) {
            var n, r = this.options.selectedItems, o = r ? r.length : 0, p = s ? s.length : 0;
            if (!p) {
                s = null
            }
            if (o === p) {
                while (o-- > 0) {
                    for (n = 0; n < p; n += 1) {
                        if (q) {
                            if (r[o].value === s[n].value && r[o].text === s[n].text) {
                                break
                            }
                        } else {
                            if (r[o].index === s[n].index) {
                                break
                            }
                        }
                    }
                    if (n === p) {
                        break
                    }
                }
            }
            r = (o >= 0 && this._hasData && !this._waitFilter) ? {
                owner: this,
                oldItems: r,
                items: s
            } : null;
            delete this._selArg;
            if (r && !this._fire("selectionChanging", m, r) && !q) {
                return
            }
            this._selTime = (m && this.options.focusOnSelect === false) ? g() : 0;
            this._selArg = r;
            if (l || !p) {
                this._clearSel()
            }
            this.options.selectedItems = s;
            this._noFilter = s && s.length;
            return 1
        },
        _addSel: function (m, l) {
            if (m >= 0 && !this.isSelected(m)) {
                var n = this._copyA(this.options.selectedItems);
                m = this._createSelItem(m);
                if (!n) {
                    n = [m]
                } else {
                    n.push(m)
                }
                if (this._selChange(n, l)) {
                    this._selChanged(l)
                }
            }
            return this.options.selectedItems
        },
        _sepEnd: function (n) {
            var m = this._sep(), l = n.length;
            return l > 1 && n.lastIndexOf(m) === l - m.length
        },
        _select: function (u, F, s, A, r) {
            var G, w, E, v, n, q, C = null, B = -1, m = -1, t = -1, z = this.options, y = 1, p = this._count, l = A ? (z.allowCustomValue ? 2 : 1) : null, D = false, x = !z.caseSensitive && typeof F === "string";
            if (r && A && !this._ddOn && r.type !== "mouseup") {
                this._doDrop(1, r)
            }
            if (this._noMouse()) {
                return
            }
            if (l) {
                this._changeID = -1
            }
            if (!b(F) && F !== "") {
                if (s === 2) {
                    F = F.toString()
                }
                G = ( typeof F === "string") ? this._texts(F) : (F.length ? F : [F]);
                if (( w = G.length) > 0) {
                    v = G[w - 1];
                    if (!v && (s === 2 || b(v))) {
                        if (l === 1) {
                            D = this._sepEnd(F)
                        }
                        G.splice(w -= 1, 1)
                    }
                }
                if (w === 0) {
                    this._selChange(C, r, 1, 1);
                    this._selChanged(r);
                    return
                }
                while ((t += 1) < w) {
                    G[t] = {
                        val: G[t],
                        id: -1,
                        done: null
                    }
                }
                if (!this._isStrCond(n = this._cond(z))) {
                    n = "startsWith"
                }
                q = this._dataSource;
                u = -1;
                while ((u += 1) < p && y) {
                    if (b(E = this._item(u, s))) {
                        continue
                    }
                    if (x) {
                        E = E.toString().toLowerCase()
                    }
                    y = null;
                    for (t = 0; t < w; t += 1) {
                        if (!G[t].done) {
                            y = 1;
                            F = G[t].val;
                            if (F === E || (A && q._findMatch(E, F, "string", false, n))) {
                                v = t;
                                while ((v -= 1) >= 0) {
                                    if (G[v].id === u) {
                                        break
                                    }
                                }
                                if (l && v >= 0) {
                                    continue
                                }
                                if (l && t + 1 === w && !D) {
                                    if (m < 0) {
                                        this._changeID = B = m = u;
                                        if (l === 1 && !z.enableActiveItem) {
                                            G[t].id = u
                                        }
                                    }
                                } else {
                                    if (G[t].id < 0) {
                                        G[t].id = u
                                    }
                                }
                                if (l !== 1 && (F === E || !A)) {
                                    G[t].id = u;
                                    G[t].done = 1
                                }
                            }
                        }
                    }
                }
                C = [];
                for (t = 0; t < w; t += 1) {
                    if (( u = G[t].id) >= 0 && l !== 2) {
                        if (B < 0) {
                            B = u
                        }
                        v = C.length;
                        while ((v -= 1) >= 0) {
                            if (C[v].index === u) {
                                break
                            }
                        }
                        if (v < 0 && (this._multi(z) || C.length === 0)) {
                            C.push(this._createSelItem(u))
                        }
                    }
                }
            } else {
                if (typeof u === "number" && u >= 0 && u < p) {
                    C = [this._createSelItem(B = u)]
                }
            }
            if (this._selChange(C, r, 1)) {
                if (B >= 0) {
                    this._fixSelScroll(this._scrollTo = B);
                    if (D) {
                        this._updateFromList(r, 1, 1)
                    }
                }
                this._selChanged(r)
            }
            if (l) {
                this._activate(m, r)
            }
        },
        _createSelItem: function (l, m, n) {
            return {
                index: l,
                value: n || this._item(l),
                text: m || this._item(l, 2)
            }
        },
        _item: function (n, w) {
            var v, m, u, l, t, p, r = this.options, q = this._keyVal, s = this._data[n];
            if (w) {
                q = this._key
            }
            if (!s) {
                return w ? "" : null
            }
            v = s[q];
            if (!w) {
                return v
            }
            l = l || r.format;
            if (l) {
                if (b(u = s[ m = q + "_"])) {
                    if (b(v)) {
                        v = ""
                    } else {
                        if (a.ig && a.ig.formatter && ( typeof v === "number" || (v && v.getMonth))) {
                            v = a.ig.formatter(v, null, (l === "auto" || l === true) ? null : l)
                        } else {
                            v = v.toString()
                        }
                    }
                    s[m] = v
                } else {
                    v = u
                }
            } else {
                v = b(v) ? "" : v.toString()
            }
            if (w !== 1) {
                return v
            }
            m = r.itemTemplate;
            if (m && a.ig.tmpl) {
                v = this._q;
                if (!v) {
                    v = this._q = a("<div />")
                }
                if (!this._it) {
                    if (a.browser.msie && m.indexOf("unselectable") < 0) {
                        t = ["<div", "<span", "<img", "<a", "<td", "<li"];
                        p = t.length;
                        while (p-- > 0) {
                            m = m.replace(new RegExp(t[p], "gi"), t[p] + ' unselectable="on"')
                        }
                    }
                    this._it = m
                }
                return v.html(a.ig.tmpl(this._it, s)).html()
            }
            if (v === "") {
                return "&nbsp;"
            }
            m = this._matchFlag;
            return m ? this._renderMatches(v, r, m) : v
        },
        _renderMatches: function (l, w, t) {
            var n, m, r, p, q, z = w.caseSensitive ? l : l.toLowerCase(), v = 0, x = 0, u = [], y = this._textsTemp || this._texts(1), s = y.length;
            while (v < 99999) {
                m = -1;
                v = 99999;
                p = z.length;
                while ((m += 1) < s) {
                    n = z.indexOf(y[m]);
                    r = y[m].length;
                    if (n >= 0 && n < v && (n === 0 || t !== "startsWith") && !(t === "full" && p !== r) && r) {
                        v = n;
                        q = r
                    }
                }
                if (v < 99999) {
                    u.push({
                        index: x += v,
                        len: q
                    });
                    z = z.substring(v + q);
                    x += q
                }
                if (t !== "multi" || x >= p) {
                    break
                }
            }
            for (m = u.length - 1; m >= 0; m -= 1) {
                n = u[m].index;
                p = u[m].len;
                l = l.substring(0, n) + '<span class="' + this.css.listItemMatch + '">' + l.substring(n, n + p) + "</span>" + l.substring(n + p)
            }
            return l
        },
        _renderRow: function (t, y) {
            var A, q, l, s, z, n, w = this, u = w._itemWidth, x = w.options, p = w._checkBox(x), m = w._cbWidth || 0, r = w._html, v = w._lodWait && !r;
            if (v) {
                if (w._findItem(t + w._virtualTop)) {
                    return
                }
                y = false
            }
            if (r) {
                y = false;
                if (!w._data[t]) {
                    return
                }
                r += '<li tabIndex="-1" class="' + w.css.listItem + '" style="width:';
                r += u + "px;height:" + w._itemHeight + 'px" unselectable="on" data-id="' + (t + e) + '"'
            } else {
                if (!y) {
                    q = a("<li />").addClass(w.css.listItem).css({
                        width: u,
                        height: w._itemHeight
                    }).attr("data-id", t + e).attr("tabIndex", -1).attr("unselectable", "on").appendTo(w._itemsHolder);
                    if (p) {
                        l = a("<span />").attr("data-box", "x").attr("unselectable", "on").css("top", (w._cbTop || 0) + "px").addClass(w.css.checkbox).appendTo(q.attr("data-check", "x"));
                        a("<span />").attr("data-icon", "x").attr("unselectable", "on").addClass(w.css.checkboxOff).appendTo(l);
                        if (!m) {
                            w._cbWidth = m = l[0].offsetWidth
                        }
                        n = a("<span />").attr("data-txt", "x").attr("unselectable", "on").addClass(w.css.listItemTextWithCheckbox).css(w._rtl ? "marginRight" : "marginLeft", (Math.max(m, 14) + 3) + "px").prependTo(q)
                    } else {
                        q.attr("data-txt", "x")
                    }
                }
            }
            t += w._virtualTop;
            if (y) {
                q = this._findItem(t);
                if (!q) {
                    return
                }
                if (!x.virtualization && !w._matchFlag) {
                    return q
                }
            }
            A = w._item(t, 1);
            if (r) {
                if (p) {
                    r += ' data-check="x"><span unselectable="on" data-txt="x" style="' + (w._rtl ? "margin-right:" : "margin-left:") + (Math.max(m, 14) + 3) + 'px;" class="' + w.css.listItemTextWithCheckbox + '">' + A + "</span>";
                    r += '<span unselectable="on" data-box="x" style="top:' + (w._cbTop || 0) + 'px" class="' + w.css.checkbox;
                    r += '"><span unselectable="on" data-icon="x" class="' + w.css.checkboxOff + '"></span></span>'
                } else {
                    r += ' data-txt="x">' + A
                }
                w._html = r + "</li>"
            } else {
                if (!w._data[t]) {
                    q.hide();
                    n = w._findItem(t + 1);
                    if (n) {
                        n.hide()
                    }
                } else {
                    if (q[0]._old !== A) {
                        q[0]._old = A;
                        n = q.find("[data-txt]");
                        if (n.length === 0) {
                            n = q
                        }
                        if (A !== n[0].innerHTML) {
                            n.html(A)
                        }
                        if (p && b(w._cbTop)) {
                            l = q.find("[data-box]");
                            if (l[0] && ( z = q[0].clientHeight) > 0 && ( s = l[0].offsetHeight) > 0) {
                                if (s >= z) {
                                    q.css("height", z = s + 1)
                                }
                                w._cbTop = Math.max((z - s - 1) / 2, 0)
                            }
                        }
                        q.show()
                    }
                }
            }
            if (v) {
                w._bindLIs(x, q)
            }
            return q
        },
        _isCheckBox: function (l) {
            return l && (l.getAttribute("data-box") || l.parentNode.getAttribute("data-box"))
        },
        _fixNull: function (l) {
            var n, m = this.options.nullText;
            if (!m && !this._nullT) {
                return
            }
            n = this.text();
            if (!l && n === "" && m && !this._fcs) {
                this._nullT = true;
                this.fieldElem.addClass(this.css.nullText).val(m)
            } else {
                if (this._nullT) {
                    this._nullT = null;
                    this.fieldElem.removeClass(this.css.nullText).val("")
                }
            }
        },
        _onScroll: function (o) {
            var p, u, t, v, q, w, n, s = this, l = s._count, r = s._itemHeightOuter, m = s._ddScroll || s._ddCont;
            if (!m || !s._ddOn || l < 2 || s._lodWait) {
                return
            }
            q = Math.floor(( w = m[0].scrollTop) / r);
            if (o) {
                s._lastScroll = w
            }
            w = Math.floor(s._lastScroll / r + 0.4);
            if (s._lod && w > l - s._page * 1.5) {
                n = s._dataSource;
                w = n.pageIndex();
                if (w + 1 < n.pageCount()) {
                    s._wait(s._lodWait = true);
                    n.pageIndex(w + 1);
                    return
                }
            }
            s._topID = w = Math.max(0, Math.min(w, l - Math.floor(m[0].offsetHeight / r)));
            if (s._ddScroll) {
                s._fixActive(s._activeID);
                l = s._page + 1;
                s._virtualTop = w;
                u = s.options.selectedItems;
                v = u ? u.length : 0;
                s._selElems = [];
                while ((l -= 1) >= 0) {
                    p = s._renderRow(l, 1);
                    if (p) {
                        for (t = 0; t < v; t += 1) {
                            if (u[t].index === l + w) {
                                s._selElems.push(p);
                                s._fixSelElem(p, 1);
                                break
                            }
                        }
                        if (t >= v) {
                            s._fixSelElem(p)
                        }
                    }
                }
                s._fixActive(s._activeID, 1)
            } else {
                s._repaintList()
            }
        },
        _lodLbl: function () {
            var m = -1, l = this.listElem;
            while (m++ < 3 && this._lodFoot && l) {
                l.find("[data-lod" + m + "]").html(this.getRecordsCount(m))
            }
        },
        _touch: function (l) {
            var n, m = this._ddCont;
            if (m && m.igScroll) {
                n = m.data("igScroll");
                if (!l) {
                    return n ? n.barY : m.igScroll({
                        direction: "y",
                        yThumb: "draggable",
                        yScroller: this._ddScroll,
                        cancelStart: "ms"
                    }).attr("data-scroll", "y")
                }
                if (n) {
                    n[l](true)
                }
            }
        },
        _xyCheck: function (l) {
            var m = this._xy, n = this.mainElem;
            if (!m) {
                return
            }
            if (n) {
                n = h(n);
                if (Math.abs(n.left - m.x) > 2 || Math.abs(n.top - m.y) > 2) {
                    l = true
                }
            }
            if (l || !n) {
                delete this._xy;
                clearInterval(m.i);
                this._doDrop()
            }
        },
        _vAct: function (l) {
            return a.ui.igValidator && a.ui.igValidator._act(this, l)
        },
        _doDrop: function (T, w, P) {
            var D, M, Y, aa, n, Q, R, K, A, U, u, Z, x, X, m, E, v, l, H, C, L = this, I = L._lod, J = L._lodWait, V = L._listUp, B = L._extraHeight || 0, r = L._ddCont, N = L.options, S = L._rtl, W = N.virtualization, q = L.listElem, G = L._itemsHolder, s = L._ddScroll, z = L.mainElem, t = L._ddItemBorderFix, O = L._ddOn, p = L._count, F = L._itemHeightOuter;
            P = P || L._listChanged;
            if (L._mode(N) > 2) {
                T = 0
            }
            if ((!T && !O) || (T === 2 && O)) {
                return
            }
            if (!P && O && T && g() - O < 100) {
                return
            }
            T = T ? (P || !O) : false;
            if (L._vAct(T ? "drop" : "hide")) {
                return
            }
            if (!F && p && T) {
                P = true
            }
            if (!L._hasData) {
                if (T && N.dataBindOnOpen && !L._dataSource) {
                    L.dataBind();
                    setTimeout(function () {
                        L._doDrop(2, w)
                    }, 0)
                }
                return
            }
            if (p < 1 && L._filtering) {
                Q = L._noResults;
                if (!Q) {
                    L._noResults = Q = f(a("<li />").css({
                        width: "100%",
                        textAlign: "center"
                    }).addClass(L.css.listItem).html(L._locale("noMatchFoundText") || "&nbsp;"))
                }
            }
            if ((!T || (T && !O)) && !L._fire(T ? "dropDownOpening" : "dropDownClosing", w, l = {
                owner: L,
                element: q || a("<div/>")
            })) {
                return
            }
            if (!J && T && L._activeID >= 0 && !L.isSelected(L._activeID) && ( E = L.selectedIndex()) >= 0) {
                L._activate(L._scrollTo = E, w, 1)
            }
            m = !N.dropDownAsChild;
            if (!q) {
                P = false
            }
            if (!q || P) {
                delete L._listChanged;
                if (( X = parseInt(N.dropDownWidth, 10)) < 5 || isNaN(X)) {
                    if (( X = z[0].offsetWidth) < 5) {
                        X = 100
                    }
                }
                if (!q) {
                    q = L.listElem = s = r = f(l.element.attr("data-id", e - 1).css("position", "absolute").addClass(L.css.list).bind(L._mEvts).bind({
                        DOMMouseScroll: function (o) {
                            L._onEvt(this, 10, o)
                        },
                        mousewheel: function (o) {
                            L._onEvt(this, 10, o)
                        }
                    }));
                    C = N.footerTemplate;
                    if (N.headerTemplate || C) {
                        q.css("overflow", "hidden");
                        if (N.headerTemplate) {
                            f(a("<div/>").attr("data-id", e - 1).css({
                                overflow: "hidden",
                                position: "relative"
                            }).html(N.headerTemplate).appendTo(q))
                        }
                        s = r = f(a("<div/>").attr("data-id", e - 1).css("position", "relative").appendTo(q));
                        if (C) {
                            E = C;
                            C = C.replace(this.RECORDS_VIEW, '<span data-lod0="x"></span>').replace(this.RECORDS_DATA, '<span data-lod1="x"></span>').replace(this.RECORDS_SERVER, '<span data-lod2="x"></span>').replace(this.RECORDS_SERVER_TOTAL, '<span data-lod3="x"></span>');
                            L._lodFoot = E !== C;
                            f(a("<div/>").attr("data-footer", "x").attr("data-id", e - 1).css({
                                overflow: "hidden",
                                position: "relative"
                            }).html(C).appendTo(q))
                        }
                        B = 1
                    }
                    L._ddCont = r;
                    L._itemsHolder = G = f(a("<ul/>").attr("data-id", e - 1).addClass(L.css.listItemHolder).appendTo(r));
                    if (W) {
                        r.css({
                            overflow: "hidden"
                        });
                        L._ddScroll = s = f(a("<div/>").attr("data-id", e - 1).css({
                            width: "30px",
                            height: "100%",
                            overflowY: "scroll",
                            overflowX: "hidden",
                            "float": S ? "left" : "right"
                        }).appendTo(r));
                        L._ddScrollChild = f(a("<div/>").attr("data-id", e - 1).css({
                            width: "1px",
                            height: "1px"
                        }).appendTo(s))
                    }
                    s.scroll(function (o) {
                        L._onScroll(o)
                    });
                    if (L._rtl) {
                        q.css("direction", "rtl")
                    }
                    if (m) {
                        q.css({
                            left: "0px",
                            top: "0px"
                        }).appendTo(a("body"))
                    } else {
                        q.prependTo(z)
                    }
                    L._ddBorderFix = q.outerWidth() - q.width();
                    if (B) {
                        r.hide();
                        q.css("width", X - L._ddBorderFix);
                        L._extraHeight = B = q[0].clientHeight;
                        q.css("width", "auto");
                        r.show()
                    }
                }
                q.css({
                    display: "block"
                });
                H = (X -= L._ddBorderFix);
                if (Q) {
                    if (G.has(Q).length === 0) {
                        Q.appendTo(G)
                    }
                    F = Math.max(10, Q.outerHeight());
                    t = 0
                } else {
                    if (!J) {
                        if (W) {
                            s.hide();
                            G.css({
                                width: "auto",
                                height: "auto",
                                overflow: "visible",
                                "float": "left"
                            })
                        } else {
                            L._keyFixed = 1
                        }
                    }
                }
                if (!F && p > 0) {
                    L._itemWidth = X = Math.ceil(X - 1);
                    L._itemHeight = "auto";
                    Q = L._renderRow(0);
                    if (( D = Q.height()) < 5) {
                        D = 16
                    }
                    Q.css({
                        height: L._itemHeight = D
                    });
                    L._ddItemBorderFix = t = Math.max(0, Math.floor(Q.outerWidth() - Q.width() + 0.4));
                    if (t > 0) {
                        L._itemWidth = (X -= t)
                    }
                    L._itemHeightOuter = F = Q.outerHeight() + Math.max(0, G[0].offsetHeight - Q[0].offsetHeight);
                    L._sameBC(Q, q)
                }
                F = F || 0;
                L._listHeight = Math.max(10, Math.max(( K = N.dropDownMinHeight) - B, F * (p || 1)));
                K = Math.min(Math.max(0, Math.max(K, N.dropDownMaxHeight) - B), L._listHeight);
                if (I) {
                    K = Math.min((I - 1) * F, K)
                }
                D = r.css("height");
                D = (P && D && D.indexOf("px") > 0) ? parseFloat(D) : K;
                q.css("width", H);
                M = L._listHeight > K;
                if (W) {
                    L._ddScrollChild.css("height", L._listHeight + F);
                    r.css("height", L._listHeight = K);
                    q.css("height", K + B);
                    if (M) {
                        s.show();
                        s.css("width", X = s[0].offsetWidth - s[0].clientWidth + 1);
                        X = H - X;
                        G.css({
                            width: X,
                            height: "100%",
                            overflow: "hidden",
                            "float": S ? "right" : "left"
                        });
                        X -= t;
                        p = Math.ceil(K / F + 1)
                    } else {
                        s.hide();
                        G.css("width", "100%")
                    }
                } else {
                    r.css({
                        overflow: M ? "auto" : "hidden",
                        width: H,
                        height: L._listHeight = K
                    }).css("overflowX", "hidden");
                    q.css("height", K + B);
                    if (M) {
                        R = a("<div/>").css({
                            position: "absolute",
                            top: (K + 100) + "px",
                            width: 9,
                            height: 9
                        }).appendTo(r);
                        X = r[0].clientWidth;
                        X = r[0].clientWidth - t;
                        R.remove()
                    }
                }
                if (!M) {
                    X = H - t
                }
                L._itemWidth = X;
                this._repaintList(0, p);
                L._page = F ? Math.max(2, Math.floor(K / F)) : 1;
                if (P && O) {
                    if (L._needsSel) {
                        L._fixSelScroll(-1);
                        delete L._needsSel
                    }
                    E = L._listHeightLast;
                    D = L._listHeight + B;
                    t = E - D;
                    if (V) {
                        A = L._listTop;
                        L._listTop += t
                    }
                    L._listHeightLast = D;
                    if (t) {
                        if (( v = (t < 0) ? N.animationShowDuration : N.animationHideDuration) > 5) {
                            q.css("height", E).animate({
                                height: D
                            }, {
                                duration: v,
                                step: function (o) {
                                    if (V) {
                                        q.css(m ? "top" : "marginTop", A + t * (E - o) / (E - D))
                                    }
                                }
                            })
                        } else {
                            if (V) {
                                q.css(m ? "top" : "marginTop", A + t)
                            }
                        }
                    }
                    return
                }
            }
            D = L._listHeightLast = L._listHeight + B;
            L._ddOn = T ? g() : null;
            v = T ? N.animationShowDuration : N.animationHideDuration;
            if (!v || ( typeof v === "number" && v < 5)) {
                v = null
            } else {
                x = T ? N.animationShowEffect : N.animationHideEffect;
                if (!a.effects || !a.effects[x]) {
                    if (!T && typeof v !== "number") {
                        v = 450
                    }
                    x = null
                }
            }
            L._listHeightEnd = (v && !x) ? 0 : D;
            A = function () {
                if (T) {
                    q.css("filter", "");
                    L._fixSelScroll(L._scrollTo);
                    L._touch()
                } else {
                    q.css({
                        display: "none"
                    });
                    L._touch("_hide")
                }
                L._fire(T ? "dropDownOpened" : "dropDownClosed", w, l)
            };
            U = function (y, o) {
                if (L._listUp && o && o.prop === "height") {
                    q.css(m ? "top" : "marginTop", L._listTop + D - y)
                }
            };
            if (T) {
                L._lodLbl();
                L.setFocus();
                if (L._needsPaint) {
                    L._repaintList()
                }
                if (!m && (!L._static || L._relative)) {
                    z.css("overflow", "visible")
                }
                if (L._needsSel) {
                    L._fixSelScroll(-1);
                    delete L._needsSel
                }
                Y = 999;
                n = document.body;
                u = document.documentElement;
                if (( E = window.innerHeight) > 50 && E) {
                    Y = E
                } else {
                    if (( E = u.clientHeight) > 50 && E) {
                        Y = E
                    } else {
                        if (( E = n.clientHeight) > 50 && E) {
                            Y = E
                        }
                    }
                }
                aa = Math.max(window.pageYOffset || 0, Math.max(n.scrollTop, u.scrollTop));
                Z = h(z);
                L._xy = m ? {
                    x: Z.left,
                    y: Z.top
                } : null;
                Z.height = z[0].offsetHeight;
                L._listUp = null;
                if (( V = Z.top + Z.height + D - aa - Y) > 0 && aa - Z.top + D < V) {
                    L._listUp = V;
                    if (Z.top - ( V = D + 2) < aa && !L._filtering) {
                        V = Math.max(Z.top - aa, 2)
                    }
                    Z.top += (Z.height = -V) + i(z, "borderTopWidth");
                    z.addClass(L.css.noTopCorners);
                    q.addClass(L.css.noBottomCorners)
                } else {
                    Z.top += Z.height - i(z, "borderBottomWidth");
                    z.addClass(L.css.noBottomCorners);
                    q.addClass(L.css.noTopCorners)
                }
                q.css({
                    opacity: (v && !x) ? 0 : 1,
                    height: L._listHeightEnd,
                    display: ""
                });
                if (m) {
                    q.css({
                        left: Z.left,
                        top: L._listTop = Z.top
                    });
                    L._xy.i = setInterval(function () {
                        L._xyCheck()
                    }, 300)
                } else {
                    E = L._rtl ? "Right" : "Left";
                    q.css("margin" + E, -i(z, "border" + E + "Width") + "px");
                    V = L._listUp ? 0 : i(z, "borderTopWidth") + i(z, "borderBottomWidth");
                    q.css("marginTop", L._listTop = Z.height - V);
                    V = h(q);
                    if (( V = V.left - Z.left) > 30 && V < z[0].offsetWidth + 10) {
                        q.css("marginLeft", -V + "px")
                    }
                }
                if (!v) {
                    A()
                } else {
                    if (x) {
                        q.show(x, {}, v, A)
                    } else {
                        q.animate({
                            opacity: 1,
                            height: D
                        }, {
                            duration: v,
                            complete: function () {
                                A()
                            },
                            step: function (y, o) {
                                U(y, o)
                            }
                        })
                    }
                }
            } else {
                if (!m && (!L._static || L._relative)) {
                    z.css("overflow", "hidden")
                }
                L._xyCheck(true);
                z.removeClass(L.css.noTopCorners).removeClass(L.css.noBottomCorners);
                q.removeClass(L.css.noBottomCorners).removeClass(L.css.noTopCorners);
                if (!v) {
                    A()
                } else {
                    if (x) {
                        q.hide(x, {}, v, A)
                    } else {
                        q.animate({
                            opacity: 0,
                            height: L._listHeightEnd
                        }, {
                            duration: v,
                            complete: function () {
                                A()
                            },
                            step: function (y, o) {
                                U(y, o)
                            }
                        })
                    }
                }
            }
            return true
        },
        _repaintList: function (m, l) {
            if (this._noMouse()) {
                return
            }
            var n = this, o = !l;
            if (o) {
                m = Math.max(0, this._topID - 1);
                l = m + ((this._ddScroll || this._matchFlag) ? this._page + 3 : -1)
            }
            delete this._needsPaint;
            this._textsTemp = this._texts(1);
            if (!o && (!this._lodWait || (this._lod && this._filtering === -1))) {
                this._html = " "
            }
            while (m < l) {
                this._renderRow(m, o);
                m += 1
            }
            if (this._html) {
                this._itemsHolder.html(this._html.substring(this._bindLI = 1));
                delete this._html;
                setTimeout(function () {
                    n._bindLIs()
                }, 600)
            }
            if (this._paintAct) {
                this._fixActive(this._activeID, 1)
            }
            delete this._textsTemp
        },
        _startOfSelTrail: function (o, u, p) {
            var q, r, m = 0, s = 0, t = this._tr();
            if (t === 1) {
                s = o.selectionStart;
                m = o.selectionEnd
            } else {
                if (t) {
                    try {
                        q = document.selection.createRange();
                        t = q.duplicate();
                        t.move("textedit", -1);
                        try {
                            while (t.compareEndPoints("StartToStart", q) < 0) {
                                t.moveStart("character", 1);
                                if ((s += 1) > p) {
                                    break
                                }
                            }
                        } catch (n) {
                        }
                        m = s + q.text.length
                    } catch (l) {
                    }
                }
            }
            if (s === p && p > 2) {
                r = this._sep();
                if (r.length > 1 && u.charAt(p - 1) === r.charAt(1) && u.charAt(p - 2) === r.charAt(0)) {
                    return s - 1
                }
            }
            return (s < m && m === p) ? s : 0
        },
        _tr: function () {
            var n = this.fieldElem[0], o = this._trVar;
            if (!o) {
                try {
                    if (!a.browser.msie && !b(n.selectionStart)) {
                        o = 1
                    }
                } catch (m) {
                }
                if (o !== 1) {
                    try {
                        o = n.createTextRange ? n.createTextRange() : null
                    } catch (l) {
                    }
                }
                this._trVar = o
            }
            return o
        },
        _setCaret: function (n, l) {
            var o = this._tr();
            l = l || n;
            if (o) {
                try {
                    if (o === 1) {
                        o = this.fieldElem[0];
                        o.selectionStart = n;
                        o.selectionEnd = l;
                        return
                    }
                    if (this._selTime && g() - this._selTime < 50) {
                        return
                    }
                    l -= n;
                    o.move("textedit", -1);
                    o.move("character", n);
                    if (l > 0) {
                        o.moveEnd("character", l)
                    }
                    o.select()
                } catch (m) {
                }
            }
        },
        _autoComplete: function (q) {
            var x, F, C, n, m, u, E, G, t, w, r = -1, s = this._filtering ? this._activeID : this._changeID, p = this.fieldElem, l = this._acArgs, z = "", A = 0, y = this.options, B = y.selectedItems, v = B ? B.length : 0, D = this._sep();
            if (!l || this._noMouse()) {
                return
            }
            delete this._acArgs;
            F = l.txt;
            C = l.len;
            n = l.e;
            if (n && n.keyCode === a.ui.keyCode.DELETE && this._custom()) {
                return
            }
            m = l.backKey;
            x = F.length;
            if (v > 0) {
                if (q) {
                    s = -1
                }
                G = F.split(D);
                E = B;
                B = [];
                q = p.val();
                while ((r += 1) < v) {
                    u = E[r].text;
                    for (t = 0; t < G.length; t += 1) {
                        if (G[t] === (y.caseSensitive ? u : u.toLowerCase())) {
                            B[t] = u;
                            if (q === G[t] && q !== u) {
                                p.val(u)
                            }
                            break
                        }
                    }
                    if (t === G.length && !w) {
                        w = u
                    }
                }
                while (r >= 0) {
                    u = (r < v) ? B[r] : w;
                    if (u) {
                        if (z.length > 0) {
                            z = D + z
                        }
                        z = u + z
                    }
                    r -= 1
                }
            }
            q = null;
            u = (s >= 0) ? this._item(s, 2) : null;
            if (u && (!z || z !== u)) {
                if (z) {
                    z += D
                }
                z += u
            }
            if (z && x > 1 && C === x && this._multi(y) && !m && F.charAt(x - 1) === D.charAt(0)) {
                if (s >= 0) {
                    this._addSel(s, n);
                    this._fixSelScroll(-1)
                }
                F = (z += D);
                q = C = r = z.length
            }
            this._userTxt = F;
            if (!z) {
                if (x > 0 && !this._filtering) {
                    this._fire("noMatchFound", n, {
                        owner: this,
                        text: F
                    })
                }
                if (!m) {
                    return
                }
            } else {
                if (C < ( A = z.length) || r > 0) {
                    p.val(this._oldTxt = z)
                } else {
                    if (m) {
                        A = C = x
                    } else {
                        return
                    }
                }
            }
            this._setCaret(C, A);
            this._userTxt = F.substring(0, C);
            this._selLen = A - C;
            if (q && this._multi(y) && this._filtering) {
                this.filter(n, null, this._noFilter)
            }
        },
        _onChange: function (n, q, w, m) {
            var v, r, x, l, s = this, p = s.fieldElem, u = s._oldTxt, t = s.options;
            if (!p || !p[0]) {
                return
            }
            x = n ? n.type : null;
            if (x && n.keyCode !== 13 && x.indexOf("blur") < 0 && x.indexOf("mouse") < 0 && s._userTxt !== w) {
                delete s._noFilter
            }
            if (s._hasData && s._nullT && q === undefined && !s._fcs) {
                s._fixNull(1)
            }
            if (!b(w)) {
                p.val(s._userTxt = w);
                w = 1
            }
            x = s.text();
            r = x.length;
            if (n && n.type !== "blur" && (w || q === 2)) {
                s._setCaret(r)
            }
            if (!s._expr && m === true && t.autoComplete && r > 0 && ( v = s._startOfSelTrail(p[0], x, r)) > 0) {
                j(n);
                return s._onChange(n, 1, x.substring(0, v - 1), 2)
            }
            if (x !== u || (s._selLen === 1 && !q && s._userTxt && u.length - s._userTxt.length === 1)) {
                if (x === u) {
                    s._userTxt = u
                }
                delete s._filterTxt;
                s._oldTxt = x;
                s._fixClear();
                s._needsPaint = 1;
                if (n) {
                    s._fire("textChanged", n, {
                        owner: s,
                        oldText: u,
                        text: x
                    });
                    if (s._validator) {
                        s._validator._evt(n)
                    }
                }
                l = t.autoComplete && (r > 0 || m);
                if (s._filtering) {
                    if (q === 2 && s._multi(t)) {
                        s._repaintList();
                        return
                    }
                    s._userTxt = x;
                    s.filter(n, null, s._noFilter)
                } else {
                    if (q !== 2) {
                        s._select(null, x, 2, 1, n)
                    }
                    if (!l) {
                        s._userTxt = x;
                        s._repaintList()
                    }
                }
                if (l) {
                    s._acArgs = {
                        txt: x,
                        len: r,
                        e: n,
                        backKey: m
                    };
                    if (s._filtering >= 0) {
                        setTimeout(function () {
                            if (!s._jpn) {
                                s._autoComplete()
                            }
                            s._repaintList()
                        }, 0)
                    }
                }
            }
            if (!q) {
                setTimeout(function () {
                    s._onChange(n, 1)
                }, 10)
            } else {
                s._save(t);
                if (n && !s._ddOn && s._fcs) {
                    s._doDrop(1, n)
                }
            }
        },
        _save: function (q) {
            var n, m, s, r, l = -1, t = "", p = q.inputName;
            if (!p || !this._hasData || this._waitFilter) {
                return
            }
            m = a('input[name="' + p + '"]');
            if (m[0] === this.element[0]) {
                return
            }
            if (m.length === 0) {
                m = a('select[name="' + p + '"]');
                s = m.length;
                if (s) {
                    m.empty()
                } else {
                    m = a('<input type="hidden" name="' + p + '" />').appendTo(this.element.parent())
                }
            }
            r = q.selectedItems;
            while (r && (l += 1) < r.length) {
                n = this._item(r[l].index);
                if (n && n.getTime) {
                    n = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate() + " " + n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds() + "." + n.getMilliseconds()
                }
                if (s) {
                    a('<option value="' + n + '" selected="selected" >').appendTo(m)
                } else {
                    if (l > 0) {
                        t += ","
                    }
                    t += n
                }
            }
            if (l < 1 && this._custom()) {
                t = this.text();
                if (s) {
                    a('<option value="' + t + '" selected="selected" >').appendTo(m)
                }
            }
            if (!s) {
                m.val(t)
            }
        },
        _onKey: function (n, x) {
            var q = n ? (n.keyCode || n.which) : null, s = this, v = s._ddOn, p = s._activeID, u = s.options, r = a.ui.keyCode, w = u.selectedItems, l = q === r.BACKSPACE, m = s._count - 1, t = s._mode(u);
            if (x < 2 && !s._fire((x === 0) ? "keydown" : "keypress", n, {
                owner: s,
                keyCode: q
            })) {
                return j(n)
            }
            if (x < 2 && q === r.SPACE && (t > 0 || (u.selectItemBySpaceKey && p >= 0 && u.enableActiveItem && v))) {
                j(n);
                if (t < 2 && p >= 0 && x === 0) {
                    s._fixSelScroll(p, n, null, null, 1)
                }
                return
            }
            if (x < 2 && (l || q > 40 || q === r.SPACE) && t === 0) {
                s._jpn = q === 229;
                s._onChange(n, null, null, l)
            }
            if (x === 0) {
                if (n.shiftKey) {
                    return
                }
                if (q === r.ESCAPE) {
                    if (!v) {
                        setTimeout(function () {
                            s._onChange(n, null, s._focTxt)
                        }, 0)
                    } else {
                        j(n);
                        s._doDrop(0, n)
                    }
                }
                if ((v || p >= 0) && (q === r.ENTER || q === r.NUMPAD_ENTER)) {
                    j(n);
                    if (t < 2) {
                        if (p >= 0 && u.enableActiveItem && !s.isSelected(p)) {
                            s._fixSelScroll(p, n, null, null, 1)
                        }
                        s._updateFromList(n)
                    }
                    s._doDrop(0, n)
                }
                if (q < 33 || q > 40) {
                    return
                }
                if (n.ctrlKey) {
                    return
                }
                if (!n.altKey && !n.metaKey) {
                    if (s._count < 1) {
                        return
                    }
                    if (p < 0) {
                        if (!v && q !== r.DOWN && q !== r.UP) {
                            return
                        }
                        p = m + 1;
                        l = w ? w.length : 0;
                        while ((l -= 1) >= 0) {
                            p = Math.min(w[l].index, p)
                        }
                        if (p > m) {
                            p = 0
                        }
                    } else {
                        if (q === r.DOWN) {
                            p += 1
                        } else {
                            if (q === r.UP) {
                                p -= 1
                            } else {
                                if (q === r.HOME && v) {
                                    p = 0
                                } else {
                                    if (q === r.END && v) {
                                        p = m
                                    } else {
                                        if (q === r.PAGE_DOWN && v) {
                                            p += s._page
                                        } else {
                                            if (q === r.PAGE_UP && v) {
                                                p -= s._page
                                            } else {
                                                return
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    j(n);
                    if (( p = Math.max(Math.min(p, m), 0)) !== s._activeID) {
                        if (s._activate(p, n)) {
                            if (v) {
                                s._fixSelScroll(p, n, null, 1)
                            } else {
                                s.selectedIndex(p, true)
                            }
                        }
                    }
                } else {
                    if ((q === r.DOWN && !v) || (q === r.UP && v)) {
                        return s._doDrop(v ? 0 : 1, n)
                    }
                }
            }
        },
        _sep: function () {
            var l = this.options.itemSeparator || ",";
            return (l.length > 2) ? l.substring(0, 2) : l
        },
        _updateFromList: function (m, v, l) {
            var p = this._changeID, u = "", r = this.options, n = -1, t = this._sep(), s = this._addSel((p === this._activeID) ? p : -1, m), q = s ? s.length : 0;
            delete this._jpn;
            if (this._noMouse()) {
                return
            }
            this._changeID = -1;
            if (!this._multi(r) && q > 1) {
                q = 1
            }
            while ((n += 1) < q) {
                u += this._item(s[n].index, 2);
                if (n + 1 < q || l) {
                    u += t
                }
            }
            if (u.length > 0 || v) {
                this._onChange(m, 2, u)
            }
        },
        _findItem: function (m) {
            var l = this._itemsHolder;
            if (l) {
                m -= this._virtualTop;
                l = l.find('[data-id="' + (m + e) + '"]');
                if (l.length === 1) {
                    return l
                }
            }
        },
        _fixSelScroll: function (o, m, n, p, l) {
            if (this._fixSel(o, m, n, p, l)) {
                return
            }
            if (m) {
                this._updateFromList(m, l);
                if (!l && !p && this.options.closeDropDownOnSelect) {
                    this._doDrop(0, m)
                }
            }
            if (p || !m) {
                this._fixScroll(o)
            }
        },
        _fixActive: function (n, o) {
            var l = this.css.listItemActive, m = (n >= 0 && this.options.enableActiveItem) ? this._findItem(n) : null;
            if (m) {
                if (o) {
                    m.addClass(l)
                } else {
                    m.removeClass(l)
                }
                delete this._paintAct
            } else {
                if (o) {
                    this._paintAct = 1
                }
            }
        },
        _activate: function (n, m, o) {
            if (!this.options.enableActiveItem || this._noMouse()) {
                this._activeID = n;
                return 1
            }
            var l, p = this._activeID;
            if (p !== n && this._fire("activeItemChanging", m, l = {
                owner: this,
                oldIndex: p,
                index: n
            })) {
                this._fixActive(p);
                this._fixActive(this._activeID = n = l.index, 1);
                if (n >= 0 && !o && (!m || m.type !== "mousedown")) {
                    this._fixScroll(n)
                }
                this._fire("activeItemChanged", m, l)
            }
        },
        _fixSel: function (q, m, n, s, l) {
            var r, u = 0, p = q, v = this.options, y = this._copyA(v.selectedItems), t = y ? y.length : 0, x = this._selElems, z = this._ddScroll, w = (z && q < 0) ? null : this._selElems;
            if (!this._ddOn || this._noMouse()) {
                return 1
            }
            if (q >= 0 && !n) {
                n = this._findItem(q);
                if (!n) {
                    w = null;
                    while (z && !n && p >= 0 && p <= this._count && (u += 1) < 4) {
                        this._fixScroll(p);
                        this._onScroll(m);
                        n = this._findItem(q);
                        p -= 1
                    }
                }
                if (!n) {
                    return 1
                }
            }
            for (p = 0; p < t; p += 1) {
                r = w ? w[p] : null;
                if (!r) {
                    r = this._findItem(y[p].index);
                    if (r) {
                        if (!w) {
                            this._selElems = w = []
                        }
                        this._fixSelElem(w[p] = r, 1)
                    }
                }
                if (q < 0 || !r || !m) {
                    continue
                }
                if (r[0] === n[0]) {
                    if (!l) {
                        if (t === 1) {
                            return
                        }
                    } else {
                        y.splice(p, 1);
                        if (this._selChange(y, m)) {
                            this._fixSelElem(n);
                            w.splice(p, 1);
                            this._selChanged(m)
                        } else {
                            this._selElems = x
                        }
                        return
                    }
                } else {
                    if (!l) {
                        this._fixSelElem(r)
                    }
                }
            }
            if (!n || !m) {
                return
            }
            p = null;
            if (!l || !y || !this._multi(v)) {
                p = y = [];
                w = []
            }
            y.push(this._createSelItem(q));
            if (this._selChange(y, m, p)) {
                this._activate(q, m);
                w = w || [];
                w.push(n);
                this._selElems = w;
                this._fixSelElem(n, 1);
                this._selChanged(m)
            } else {
                this._selElems = x;
                return 1
            }
        },
        _fixScroll: function (n) {
            var p, q, o = this._lastScroll, l = this._ddScroll || this._ddCont, m = this._itemHeightOuter;
            if (!l || this._lodWait) {
                return
            }
            q = p = l[0].scrollTop;
            this._scrollTo = -1;
            if (n < 0) {
                if (o && o !== q) {
                    l[0].scrollTop = o;
                    q = l[0].scrollTop
                }
                if (a.browser.safari && q > 20) {
                    l[0].scrollTop = q - 1
                }
            } else {
                if (( q = n * m) > p) {
                    if ((q += m - this._listHeight) < p) {
                        return
                    }
                }
            }
            if (q !== o) {
                if (this._ddScroll && q > o) {
                    q += m - 1
                }
                l[0].scrollTop = q
            }
        },
        _bindLIs: function (q, n) {
            var p = this, m = p._itemsHolder, l = n;
            if (!n) {
                if (!this._bindLI || !m) {
                    return
                }
                delete this._bindLI;
                l = m.find("li[data-id]")
            }
            l.bind(p._mEvts);
            if (p._checkBox(q || this.options)) {
                if (!p._evtHov) {
                    p._evtHov = {
                        MSPointerOver: function (o) {
                            p._onEvt(this, 26, o)
                        },
                        mouseover: function (o) {
                            p._onEvt(this, 16, o)
                        },
                        mouseleave: function (o) {
                            p._onEvt(this, 17, o)
                        }
                    }
                }
                l = n || m;
                l.find("span[data-box]").bind(p._evtHov).bind(p._tEvts).find("span[data-icon]").bind(p._tEvts)
            }
        },
        _onEvt: function (n, A, m) {
            var t, s, z, v = this, x = v._msOver, y = v.options, l = v.css, r = v.fieldElem, p = (!n || n === r[0] || (m && m.target === r[0])) ? r : a(n), u = p.attr("data-id"), q = v.mainElem, w = v._mode(y);
            if (y.disabled) {
                return
            }
            if (A === 8) {
                v._focTxt = v.text();
                v._fcs = 1;
                q.addClass(l.focus);
                r.addClass(l.fieldFocus);
                v._fixNull();
                if (w < 3) {
                    v.buttonElem.addClass(l.buttonFocus);
                    v.clearElem.addClass(l.clearFocus)
                }
                if (!v._ddOn && y.dropDownOnFocus) {
                    setTimeout(function () {
                        if (v._fcs) {
                            v._doDrop(1, m)
                        }
                    }, 50)
                }
                return
            }
            if (A === 9) {
                t = v.text();
                if (m && v._jpn && a.browser.mozilla && v._userTxt !== t) {
                    v._onChange(m, null, t)
                }
                v._jpn = v._fcs = 0;
                q.removeClass(l.focus);
                r.removeClass(l.fieldFocus);
                v.buttonElem.removeClass(l.buttonFocus);
                v.clearElem.removeClass(l.clearFocus);
                if (!m) {
                    return
                }
                if (y.closeDropDownOnBlur) {
                    v._doDrop(0, m)
                }
                if (!v._custom()) {
                    v._updateFromList(m, 1)
                }
                v._changeID = -1;
                v._onChange(m, null);
                v._fixNull();
                if (v._validator) {
                    v._validator._evt(m, null, 1)
                }
                return
            }
            if (A === 10) {
                q = v._ddScroll || v._ddCont;
                y = m.originalEvent || m;
                t = m.wheelDelta || y.wheelDelta || -(m.detail || y.detail);
                if (!b(t, true) && q) {
                    j(m);
                    q[0].scrollTop += (t > 0) ? -v._itemHeightOuter : v._itemHeightOuter
                }
                return
            }
            if (A === 26) {
                v._msOver = m.originalEvent.pointerType;
                return
            }
            if (x === 2 && (A === 6 || A === 16)) {
                delete v._msOver;
                return
            }
            if (!u && A > 15) {
                u = p.parent().attr("data-id")
            }
            u = (p === r) ? 0 : isNaN(u = u ? parseInt(u, 10) : -1) ? -1 : u;
            if (u > 90) {
                v._bindLIs(y)
            }
            if (u < 0 || (u > 98 && v._noMouse())) {
                return
            }
            if (A === 3) {
                j(m)
            }
            if (w > 1 && (A > 7 || u > 3)) {
                return
            }
            if (A === 16) {
                return p.addClass(l.checkboxHover)
            }
            if (A === 17) {
                return p.removeClass(l.checkboxHover)
            }
            s = (u >= e) ? (v._touch() && !(x && x !== 2) ? "" : l.listItemHover) : ((u === 1) ? l.buttonHover : l.clearHover);
            z = (u >= e) ? "" : ((u === 1) ? l.buttonPressed : l.clearPressed);
            if (A === 3) {
                if (u < 3) {
                    p.addClass(z)
                }
                return
            }
            if (u === e - 1) {
                return
            }
            if (A === 4) {
                if (u >= e) {
                    delete v._jpn;
                    v._fixSelScroll(u - e + v._virtualTop, m, p, null, m.ctrlKey || m.metaKey || v._isCheckBox(m.target))
                } else {
                    if (p.hasClass(z)) {
                        if (u === 1) {
                            if (v._vAct("drop")) {
                                return
                            }
                            v.setFocus();
                            v._doDrop(1, m)
                        }
                        if (u === 2) {
                            if (v._filtering) {
                                v._select(-1)
                            }
                            v._onChange(m, null, "")
                        }
                        p.removeClass(z)
                    }
                }
                return
            }
            if (A === 6) {
                if (u === 0) {
                    r.addClass(l.fieldHover);
                    q.addClass(l.hover)
                } else {
                    p.addClass(s)
                }
            }
            if (A === 7) {
                if (u === 0) {
                    q.removeClass(l.hover);
                    r.removeClass(l.fieldHover);
                    if (v._fcs === 1) {
                        q.addClass(l.focus)
                    }
                } else {
                    p.removeClass(s).removeClass(z)
                }
            }
        },
        _fixClear: function (n) {
            var l = this.options, m = l.enableClearButton && this._oldTxt.length > 0 && this._mode(l) < 2 && !l.disabled;
            if (this._jpn && a.browser.mozilla) {
                return
            }
            if (this._clearOn !== m) {
                this._clearOn = m;
                n = 1
            }
            if (n) {
                this._doSize()
            }
        },
        _doTimer: function (l) {
            var m = this, n = m._timer;
            if (l === 2) {
                if (n) {
                    clearInterval(n);
                    delete m._timer
                }
                return
            }
            if (!n) {
                m._timer = setInterval(function () {
                    m._doTimer()
                }, 200)
            }
            if (l === 1) {
                return
            }
            if (m._doSize(1) && !m._percWidth && !m._percHeight) {
                m._doTimer(2)
            }
        },
        _doButHeight: function (l, r) {
            var m, n, o = this._butMinHeight, q = l, p = this._minHolderHeight;
            this.clearElem.css("height", r ? "100%" : l - p);
            l = Math.max(l - o, 0);
            this.buttonElem.css("height", r ? l / q * 100 + "%" : l);
            m = this.buttonElem.children(0);
            n = m[0].offsetHeight || 16;
            m.css("marginTop", Math.floor((q - (o || 0) - n) / 2 + 0.5) + "px");
            m = this.clearElem.children(0);
            m.css("marginTop", Math.floor((q - p - (m[0].offsetHeight || n)) / 2 + 0.5) + "px")
        },
        _outerWidth: function (l) {
            return l[0].offsetWidth + i(l, "marginLeft") + i(l, "marginRight")
        },
        _outerHeight: function (l) {
            return l[0].offsetHeight + i(l, "marginTop") + i(l, "marginBottom")
        },
        _sameBC: function (m, n) {
            var l = m.css("backgroundColor");
            n.css("background", (!l || l === "transparent" || l.replace(/ /g, "").indexOf("(0,0,0,0") > 0) ? "white" : l)
        },
        _doSize: function (O) {
            var x, y, M, L, m, A, B, D = this, I = D.options, P = I.width, z = I.height, N = D._relative, l = D.buttonElem, s = D.css, t = D.mainElem, u = t[0], v = D.fieldElem, w = D._fieldHolder, q = D._clearOn, E = D._minFieldHeight, F = D._minFieldWidth, H = D._minHolderWidth, G = D._minHolderHeight, n = D._butWidth, r = D._clearWidth, C = D._lastHeight, p = D.clearElem, K = u.offsetWidth, J = u.offsetHeight;
            if (K && !D._offsetWidth && (!P || !z)) {
                y = a("<span />").css({
                    display: "inline-block",
                    position: "absolute"
                }).addClass("ui-igcombo").appendTo(D.element.parent());
                if (!P) {
                    P = y[0].offsetWidth;
                    if (P > 10) {
                        I.width = P
                    } else {
                        P = 0
                    }
                }
                if (!z) {
                    z = y[0].offsetHeight;
                    if (z > 10 && z !== y.removeClass("ui-igcombo")[0].offsetHeight) {
                        I.height = z
                    } else {
                        z = 0
                    }
                }
                y.remove()
            }
            P = P || 150;
            z = z || "auto";
            y = D._offsetWidth !== K || P !== D._lastWidth || D._offsetHeight !== J || z !== C;
            if (!K || (O && !y)) {
                if (!K) {
                    D._doTimer(1)
                }
                return
            }
            if (y) {
                D._listRemove()
            }
            D._lastWidth = P;
            D._lastHeight = z;
            D._percWidth = M = typeof P === "string" && P.indexOf("%") > 0;
            D._percHeight = L = typeof z === "string" && z.indexOf("%") > 0;
            if (M || L) {
                D._doTimer(1)
            }
            if (!C) {
                D._sameBC(v, w);
                N = t.css("position") !== "static";
                if (!N && (M || L)) {
                    t.css("position", "relative");
                    N = true
                }
                D._relative = N;
                v.css("position", N ? "absolute" : "static")
            }
            w.css({
                position: "absolute",
                width: "auto",
                height: "auto"
            });
            p.hide();
            v.css({
                width: 0,
                height: 0
            });
            if (!C) {
                y = D._rtl ? s.fieldHolderRTL : s.fieldHolderLTR;
                if (I.showDropDownButton) {
                    w.addClass(y)
                } else {
                    w.removeClass(y)
                }
                y = D._rtl ? s.buttonRTL : s.buttonLTR;
                if (I.showDropDownButton) {
                    l.addClass(y)
                } else {
                    l.removeClass(y)
                }
                n = 0;
                if (I.showDropDownButton) {
                    l.show();
                    n = D._outerWidth(l);
                    y = l.css("height");
                    l.css("height", 0);
                    D._butMinHeight = D._outerHeight(l);
                    l.css("height", y)
                } else {
                    l.hide()
                }
                D._butWidth = n;
                D._minFieldWidth = F = D._outerWidth(v);
                D._minFieldHeight = E = D._outerHeight(v);
                D._minWidth = n + D._outerWidth(v);
                if (I.enableClearButton) {
                    p.show();
                    D._clearWidth = r = D._outerWidth(p);
                    p.hide()
                }
                v.hide();
                D._minHolderHeight = G = w[0].offsetHeight;
                D._minHolderWidth = H = w[0].offsetWidth;
                v.show()
            }
            y = k(P);
            if (y) {
                P = y - i(t, "borderLeftWidth") - i(t, "borderRightWidth");
                if (P < 1) {
                    P = 1
                }
            }
            y = k(z);
            if (y) {
                z = y - i(t, "borderTopWidth") - i(t, "borderBottomWidth");
                if (z < 1) {
                    z = 1
                }
            }
            t.css({
                width: P,
                height: z,
                display: "inline-block",
                minWidth: 0,
                minHeight: 0
            });
            K = u.clientWidth;
            J = u.clientHeight;
            w.css("height", "auto");
            m = I.showDropDownButton ? D._outerHeight(l) : 0;
            if (!N) {
                w.css("position", "static")
            }
            v.css({
                height: "auto",
                position: "static"
            });
            A = D._outerHeight(w);
            if (N) {
                v.css("position", "absolute")
            }
            if (q) {
                p.show()
            }
            if (I.height) {
                A = Math.max(J - G, 0);
                w.css("height", L ? A / J * 100 + "%" : A);
                v.css("height", L ? (A - E) / A * 100 + "%" : A - G - E);
                D._doButHeight(J, L)
            } else {
                if (A < m) {
                    w.css("height", m - G);
                    v.css("height", m - G - E)
                } else {
                    D._doButHeight(A, L);
                    v.css("height", A - G - E);
                    if (N) {
                        w.css("height", A - G)
                    }
                    t.css("height", z = A)
                }
            }
            t.css({
                display: I.enableDisplayBlock ? "block" : "inline-block",
                minWidth: D._minWidth + r + 2
            });
            P = Math.max(K - n - H, 0);
            w.css("width", M ? P / K * 100 + "%" : P);
            K = u.clientWidth;
            B = w[0].offsetWidth;
            if (( y = K - B - n) !== 0) {
                P += y;
                w.css("width", M ? P / K * 100 + "%" : P)
            }
            x = P - F - 1;
            if (q) {
                x -= r
            }
            v.css("width", M ? x / P * 100 + "%" : x);
            if (( y = w[0].clientWidth - D._outerWidth(v) - ( q ? r : 0) - 1) !== 0) {
                x += y;
                v.css("width", M ? x / P * 100 + "%" : x)
            }
            if (!N) {
                A = w[0].offsetHeight + 5;
                t.css("height", "auto");
                for (y = 0; y < 4 && P > 0; y += 1) {
                    if (u.offsetHeight < A) {
                        break
                    }
                    P -= 0.5;
                    w.css("width", M ? P / K * 100 + "%" : P)
                }
                if (a.browser.mozilla || (a.browser.msie && parseFloat(a.browser.version) < 9)) {
                    w.css("width", M ? --P / K * 100 + "%" : --P)
                }
                t.css("height", z)
            }
            D._offsetWidth = u.offsetWidth;
            D._offsetHeight = u.offsetHeight;
            return 1
        },
        _listRemove: function () {
            var l = this;
            if (!l.listElem) {
                return
            }
            l._touch("destroy");
            l.mainElem.removeClass(l.css.noTopCorners).removeClass(l.css.noBottomCorners);
            l.listElem.remove();
            l._selElems = l.listElem = l._itemsHolder = l._ddCont = l._ddScroll = l._noResults = l._q = l._ddOn = l._extraHeight = l._listChanged = l._ddItemBorderFix = l._itemHeightOuter = l._bindLI = null;
            l._lastScroll = l._virtualTop = l._topID = 0;
            l._activeID = l._scrollTo = -1
        },
        destroy: function () {
            var q, m, n = this.mainElem, l = this.css, r = this._oldCss, p = this.fieldElem, o = this.element;
            m = n ? n[0] : null;
            if (!m) {
                return this
            }
            if (this._loadInd) {
                this._loadInd.destroy()
            }
            this._doTimer(2);
            this._listRemove();
            this.validator(1);
            if (this._SELECT) {
                n.remove();
                o.css("display", r.display)
            } else {
                p.removeClass(l.nullText).removeClass(l.fieldFocus).removeClass(l.fieldHolder).unbind(this._evts);
                if (this._swap) {
                    p.removeClass(l.field);
                    p.insertBefore(n);
                    n.remove()
                } else {
                    this.buttonElem.remove();
                    this.clearElem.remove();
                    n.unbind(this._elemEvts).removeClass(l.combo).removeClass(l.hover).removeClass(l.focus).removeClass(l.disabled);
                    p.remove()
                }
                for (q in r) {
                    if (r.hasOwnProperty(q)) {
                        o.css(q, r[q])
                    }
                }
                r = this._oldAttr;
                for (q in r) {
                    if (r.hasOwnProperty(q)) {
                        o[0][q] = r[q]
                    }
                }
            }
            this._cascade(false, true);
            delete this.mainElem;
            a.Widget.prototype.destroy.apply(this, arguments);
            return this
        },
        _getType: function (l) {
            return (l === true || l === false) ? "bool" : ((l && l.getTime) ? "date" : ( typeof l === "number" ? "number" : "string"))
        },
        dataBind: function () {
            var q, n, l, y, w = this.options, C = w.dataSourceUrl, v = w.loadOnDemandSettings, s = w.responseDataKey, A = w.textKey || w.valueKey, B = w.dataSourceType, D = w.valueKeyType, z = w.textKeyType, x = {
                fields: []
            }, m = w.dataSource, p = typeof m === "string", t = s ? s.split(".") : null, u = t ? t.length - 1 : -1, r = -1;
            D = (D === "auto") ? null : D;
            if (p && !B) {
                m = new a.ig.JSONPDataSource({
                    dataSource: m
                })
            }
            n = m;
            while (n && r++ < u) {
                n = n[t[r]]
            }
            if (!n) {
                n = m;
                t = null
            } else {
                if (t) {
                    x.searchField = s
                }
            }
            q = n ? n[0] : null;
            if (typeof q === "string" || typeof q === "number" || (q && q.getTime)) {
                r = n.length;
                q = n;
                n = [];
                A = A || "x";
                while (r-- > 0) {
                    n[r] = {};
                    n[r][A] = q[r]
                }
                if (t) {
                    q = m;
                    r = -1;
                    while (++r < u) {
                        q = q[t[r]]
                    }
                    q[t[u]] = n
                } else {
                    m = n
                }
            }
            l = {
                callback: this._dataChange,
                dataSource: m,
                type: B || undefined,
                responseDataKey: s,
                responseTotalRecCountKey: w.responseTotalRecCountKey
            };
            q = this._noMouse() || this._cascFilter ? null : w.filteringType;
            this._filtering = (q === "local") ? 1 : (q === "remote" ? -1 : 0);
            if (n) {
                n = n[0];
                for (q in n) {
                    if (n.hasOwnProperty(q)) {
                        if (!A) {
                            A = w.valueKey = w.textKey = q
                        }
                        r = this._getType(n[q]);
                        if (!D && q === w.valueKey) {
                            w.valueKeyType = D = r
                        }
                        x.fields.push({
                            name: q,
                            type: r
                        });
                        if (A !== q && w.valueKey !== q) {
                            w._all = 1
                        }
                    }
                }
            }
            if (( m instanceof a.ig.DataSource && !m.settings.schema) || !( m instanceof a.ig.DataSource)) {
                l = a.extend(l, {
                    schema: x
                })
            }
            if (m instanceof a.ig.DataSource) {
                l.dataSource = m.settings.dataSource;
                m.settings = a.extend(true, {}, m.settings, l);
                m.settings.callee = this;
                if (l.schema) {
                    m._initSchema()
                }
            } else {
                m = new a.ig.DataSource(l);
                m.settings.callee = this
            }
            z = (z === "auto") ? null : z;
            x = (D || z) ? m.schema() : null;
            x = x ? x.fields() : null;
            r = x ? x.length : 0;
            while ((r -= 1) >= 0) {
                q = x[r];
                if (D && q.name === w.valueKey) {
                    q.type = D
                }
                if (z && q.name === w.textKey) {
                    q.type = z
                }
            }
            m._response_data = function (E) {
                var F = E ? E.length : 0, o = (F > 0) ? E[F - 1][":totals:"] : null;
                if (o) {
                    E.pop();
                    o = o.split(":");
                    m.totalRecordsCount(b(F = parseInt(o[0], 10), true) ? 0 : F);
                    F = b(F = parseInt(o[1], 10), true) ? 0 : F;
                    if (F) {
                        w._totalAll = F
                    }
                }
            };
            delete this._lod;
            if (v && v.enabled && (C || p)) {
                y = m.settings.paging;
                y.type = "remote";
                y.appendPage = y.enabled = true;
                y.pageSizeUrlKey = v.pageSizeUrlKey || null;
                y.pageIndexUrlKey = v.pageIndexUrlKey || null;
                if (!b(r = parseInt(w._total, 10), true)) {
                    m.totalRecordsCount(r)
                }
                v = parseInt(v.pageSize || 30, 10);
                y.pageSize = this._lod = b(v, true) ? 30 : Math.max(v, 5);
                y.pageIndex = 0
            }
            if (this._fire("dataBinding", null, {
                owner: this,
                dataSource: m
            }, 1)) {
                this._dataSource = m;
                this._keyVal = this._hasData = this._key_ = null;
                this._listRemove();
                m.dataBind()
            }
            if (C && !this._urlBind) {
                y = m.settings;
                y.dataSource = C;
                y.type = "remoteUrl";
                m._runtimeType = m.analyzeDataSource();
                y.urlParamsEncoded = a.proxy(function (o, E) {
                    E = E ? E.filteringParams : null;
                    if (E) {
                        E.textKey = w.textKey || w.valueKey;
                        E.valueKey = w.valueKey;
                        if (!w.caseSensitive) {
                            E.toLower = "1"
                        }
                        if (!w._all) {
                            E.compact = "1"
                        }
                        if (w.parentComboKey) {
                            E.cascade = w.parentComboKey
                        }
                    }
                }, this);
                this._urlBind = 1;
                if (!w.dataSource) {
                    m.dataBind()
                }
            }
        },
        _cond: function (l, m) {
            return l.autoComplete ? "startsWith" : ((m || !this._filtering) ? l.renderMatchItems : l.filteringCondition)
        },
        _isStrCond: function (l) {
            return l === "startsWith" || l === "endsWith" || l === "contains" || l === "doesNotContain" || l === "empty" || l === "notEmpty"
        },
        _texts: function (s) {
            var l, m, r, p = s === 1, n = this.options, q = this._multi(n) ? this._sep() : null;
            if (p || b(s)) {
                s = this._userTxt || this._oldTxt
            } else {
                if (typeof s !== "string") {
                    return [s]
                }
            }
            if (!n.caseSensitive) {
                s = s.toLowerCase()
            }
            if (!q) {
                return s ? [s] : []
            }
            while (s.indexOf(q + q) > 0) {
                s = s.replace(q + q, q)
            }
            r = q.length;
            m = s.length;
            if (p) {
                if (( l = s.lastIndexOf(q.charAt(0))) > 0 && l === m - 1) {
                    s = s.substring(0, m -= 1)
                }
                if (( l = s.lastIndexOf(q)) > 0 && l === (m -= r)) {
                    s = s.substring(0, m)
                }
            } else {
                if (( l = s.lastIndexOf(q.charAt(0))) > 0 && l === m - 1 && r > 1) {
                    s += q.charAt(1)
                }
            }
            if (s.indexOf(q) === 0) {
                s = s.substring(r)
            }
            return s ? s.split(q) : []
        },
        _fillKeys: function (m) {
            if ((m || !this._keyFixed) && this._key !== this._key_) {
                var l = this._count;
                while ((l -= 1) >= 0) {
                    this._item(l, 2)
                }
            }
            this._keyFixed = 1
        },
        _wait: function (p) {
            var l = this.css.waitFiltering, o = this._loadInd, m = this.mainElem, n = this._itemsHolder;
            if (p) {
                m.addClass(l);
                if (n) {
                    n.addClass(l)
                }
                if (!o && m.igLoading) {
                    o = m.igLoading().data("igLoading");
                    if (o) {
                        this._loadInd = o = o.indicator()
                    }
                }
                if (o) {
                    o.show()
                }
            } else {
                if (m) {
                    m.removeClass(l);
                    if (n) {
                        n.removeClass(l)
                    }
                    if (o) {
                        o.hide()
                    }
                }
            }
        },
        filter: function (p, z, v) {
            var r, t, s = -1, l = this._cascFilter, y = l ? this._cascVal : (z || this._texts()), u = l ? 0 : y.length, m = u ? y.toString() : null, n = this._dataSource, w = this.options, q = [], x = l === -1 || this._filtering < 0;
            if (v || (this._hasData && m && this._filterTxt === m)) {
                return
            }
            if (this._expr) {
                this._filterNew = {
                    txt: y,
                    e: p
                };
                return
            }
            this._filterTxt = m;
            delete this._filterNew;
            if (x && u > 1 && !y[u - 1]) {
                u = 0
            }
            if (l) {
                m = "equals";
                t = this._cascKey;
                q.push({
                    fieldName: t,
                    cond: m,
                    expr: y
                })
            } else {
                m = this._cond(w);
                t = (x || !this._isStrCond(m)) ? this._key : this._key_;
                while ((s += 1) < u) {
                    q.push({
                        fieldName: t,
                        cond: m,
                        expr: y[s]
                    })
                }
            }
            if (q.length === 0 && !p) {
                return
            }
            if (!this._fire("filtering", p, this._expr = {
                owner: this,
                expression: q
            }, 1)) {
                delete this._expr;
                return
            }
            if (x && this._hasData && !this._fire("dataBinding", null, {
                owner: this,
                dataSource: n
            }, 1)) {
                delete this._expr;
                return
            }
            if (!l) {
                this._needsSel = y;
                this._needsSelEnd = this._multi(w) && this._sepEnd(this.text())
            }
            r = n.settings.filtering;
            r.caseSensitive = w.caseSensitive;
            r.type = w.filteringType;
            if (x) {
                this._wait(true);
                t = w.filterExprUrlKey;
                if (t) {
                    r.filterExprUrlKey = t
                }
                r.expressions = q;
                this._waitFilter = !this._hasData;
                if (this._lod) {
                    y = this.text();
                    if (this._lodTxt !== y) {
                        this._lodTxt = y;
                        n._data = [];
                        n._dataView = [];
                        n._filteredDataView = [];
                        n._cachedDataView = null;
                        n.settings.paging.pageIndex = 0;
                        n.pageSizeDirty(true)
                    }
                }
                n.dataBind();
                return
            }
            if (q.length === 0) {
                n.clearLocalFilter()
            } else {
                this._fillKeys();
                n.filter(q, "OR", this._noFilter)
            }
            this._dataChange(p, true)
        },
        _checkExpr: function () {
            var l, n = this._filterNew, m = this._expr, o = n ? n.txt.length : 0;
            if (!n) {
                return
            }
            if (m) {
                m = m.expression
            }
            if (o !== ( m ? m.length : 0)) {
                l = 1
            }
            while (!l && (o -= 1) >= 0) {
                l = n.txt[o] !== m[o].expr
            }
            if (l) {
                delete this._expr;
                this.filter(n.e, n.txt, this._noFilter);
                return 1
            }
            delete this._filterNew
        },
        _fixType: function (n) {
            var l, m = this.options.valueKeyType;
            if (!b(n)) {
                if (m === "number") {
                    return ( typeof n === "number") ? n : parseFloat(n)
                }
                if (m === "bool") {
                    return n === "true" || n === true
                }
                if (m === "date" && !n.getTime) {
                    n = n.toString();
                    l = n.replace(/[\. :]/g, "-").split("-");
                    return (l.length === 7) ? new Date(parseInt(l[0], 10), parseInt(l[1], 10) - 1, parseInt(l[2], 10), parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10), parseInt(l[6], 10)) : Date.parse(n)
                }
            }
            return n
        },
        _initSel: function (t) {
            var q, v, n, p, l, s = 1, u = t.selectedItems, r = u ? u.length : 0, m = -1;
            while (!this._multi(t) && r > 1) {
                u.splice(r -= 1, 1)
            }
            n = r;
            while (n-- > 0) {
                q = u[n];
                q.value = this._fixType(v = q.value)
            }
            l = t.text || ((r === 1 && this._custom(t)) ? v : null);
            t.text = null;
            while ((m += 1) < this._count && s) {
                v = this._item(m);
                s = null;
                n = r;
                while ((n -= 1) >= 0) {
                    q = u[n];
                    if (b(p = q.index) || p < 0) {
                        if (d(q.value, v)) {
                            if (this.isSelected(m)) {
                                u.splice(n, 1);
                                r -= 1
                            } else {
                                q.index = m;
                                q.text = this._item(m, 2)
                            }
                        } else {
                            s = 1;
                            if (m === this._count - 1) {
                                u.splice(n, 1)
                            }
                        }
                    } else {
                        q.value = q.value || this._item(p);
                        q.text = q.text || this._item(p, 2)
                    }
                }
            }
            if (l && (!u || !u.length)) {
                this.text(l)
            } else {
                if (!this.text() || !this._custom(t)) {
                    this._updateFromList(null, 1)
                }
            }
        },
        _dataChange: function (t, D) {
            var p, L, J, I, q, K, w, x, v, A, n, E = this._lodWait, m = this._cascFilter, F = !m, y = -1, l = -1, H = this._needsSel, z = -1, C = this._keyVal, B = this._key, r = this._itemsHolder, s = this._dataSource, u = m || this._filtering, G = this.options;
            if (!G || !this._multi || this._cascUrl) {
                return
            }
            I = G.selectedItems;
            this._data = q = s.dataView() || [];
            this._count = p = K = q.length;
            if (!this._hasData && !p && G.dataSourceUrl && G.selectedItems) {
                this._urlSel = 1
            }
            if (!C) {
                C = G.valueKey;
                if (!C && q[0]) {
                    for (C in q[0]) {
                        if (q[0].hasOwnProperty(C)) {
                            break
                        }
                    }
                }
                this._keyVal = C;
                B = G.textKey || C;
                this._key_ = this._key = B;
                this._keyFixed = !G.format;
                if (!this._keyFixed) {
                    this._key_ += "_"
                }
            }
            if (p && !G.valueKeyType) {
                while (++y < p) {
                    if (!b(A = this._item(y))) {
                        G.valueKeyType = A === true || A === false ? "bool" : ( typeof A === "number" ? "number" : (A.getTime ? "date" : "string"));
                        break
                    }
                }
                y = I ? I.length : 0;
                while (y-- > 0) {
                    I[y].value = this._fixType(I[y].value)
                }
                this._cascSel = this._fixType(this._cascSel)
            }
            if (this._hasData) {
                if (this._checkExpr()) {
                    return
                }
                if (this._urlSel === 1) {
                    this._initSel(G);
                    this._urlSel = 2
                } else {
                    if (this._urlSel || (E && this.selectedIndex() < 0 && !G.autoComplete)) {
                        L = this.text()
                    }
                    if (!E) {
                        this._activate(-1, t);
                        this._clearSel();
                        this._lastScroll = this._virtualTop = this._topID = 0;
                        this._scrollTo = -1
                    }
                    if (r) {
                        if (!E) {
                            r.empty()
                        }
                        this._listChanged = 1
                    }
                    if (L) {
                        this._select(null, L, 2)
                    }
                }
            }
            if (this._expr) {
                if (u < 0) {
                    this._fire("dataBound", null, {
                        owner: this,
                        dataSource: s
                    }, 1)
                }
                if (!this._isStrCond(n = this._cond(G))) {
                    n = "startsWith"
                }
                if (this._ddOn || (t && t.type === "keydown")) {
                    this._doDrop(1, t)
                }
                this._fillKeys(1);
                J = H && !m ? H.length : 0;
                if (m) {
                    this._initSel(G);
                    A = I ? I[0] : null;
                    if (A) {
                        while (++z < p) {
                            if (A.value === this._item(z)) {
                                A.index = z;
                                break
                            }
                        }
                        if (z === p) {
                            G.selectedItems = null;
                            this.fieldElem.val("")
                        }
                    }
                }
                I = [];
                while ((z += 1) < p && F) {
                    L = this._item(z, 2);
                    y = -1;
                    F = null;
                    while ((y += 1) < J) {
                        if (H[y]) {
                            F = 1;
                            if (L && s._findMatch(L, H[y], "string", !G.caseSensitive, n)) {
                                A = null;
                                if (!I[y]) {
                                    I[y] = A = this._createSelItem(z, L)
                                }
                                x = L.length === H[y].length;
                                if (!w || x) {
                                    w = 1;
                                    K = Math.min(K, z);
                                    if (x) {
                                        if (!v) {
                                            K = z
                                        }
                                        v = 1;
                                        I[y] = A || this._createSelItem(z, L);
                                        H[y] = null;
                                        if (!this._multi(G)) {
                                            z = p + 1
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                while ((J -= 1) >= 0) {
                    A = I[J];
                    if (!A || (l < 0 && !this._needsSelEnd)) {
                        if (A) {
                            l = A.index
                        }
                        if (!A || A.text !== L) {
                            I.splice(J, 1)
                        }
                    }
                }
                if (!m) {
                    this._selChange(I, t, null, 1);
                    this._selChanged(t);
                    if (this._needsSelEnd) {
                        this._updateFromList(t, 1, 1)
                    }
                }
                if (l < 0 && p) {
                    A = this._item(0, 2);
                    L = this.text();
                    if (A && L) {
                        if (!G.caseSensitive) {
                            A = A.toLowerCase();
                            L = L.toLowerCase()
                        }
                        if (A.indexOf(L) === 0) {
                            l = 0
                        }
                    }
                }
                if (l >= 0) {
                    this._activate(K = l, t, 1)
                }
                this._fixSelScroll(this._scrollTo = (K === p) ? 0 : K);
                this._fire("filtered", t, this._expr, 1);
                this._autoComplete(1);
                this._wait();
                delete this._waitFilter;
                delete this._expr
            } else {
                if (this._urlSel !== 2) {
                    L = this.text();
                    H = this.selectedIndex();
                    if (L && !this._custom(G) && H < 0) {
                        if (!this._hasData || !G.autoComplete) {
                            this._select(null, L, 2)
                        }
                    } else {
                        if (t === true && !b(H = (H < 0) ? this._cascSel : null)) {
                            I = null;
                            while (!I && ++z < p) {
                                if (this._item(z) === H) {
                                    I = [this._createSelItem(z, null, H)]
                                }
                            }
                            G.selectedItems = I;
                            if (!I) {
                                this.fieldElem.val("")
                            }
                            delete this._cascSel
                        }
                        if (!m) {
                            this._initSel(G)
                        }
                    }
                }
                this._fire("dataBound", null, {
                    owner: this,
                    dataSource: s
                }, 1);
                if (this._urlSel === 2 && !m) {
                    this._noFilter = 1;
                    this._updateFromList(null, 1);
                    delete this._noFilter;
                    delete this._urlSel
                } else {
                    if (u) {
                        this.filter(null, null, this._noFilter)
                    }
                }
                if (this._ddOn) {
                    this._doDrop(1, t, 1)
                }
            }
            if (this._mode(G) > 1 && this.selectedIndex() < 0) {
                this.selectedIndex(0)
            }
            if (q.length < 1) {
                this._fire("noMatchFound", t, {
                    owner: this,
                    text: this.text()
                })
            }
            this._hasData = 1;
            this._fixClear();
            this._fixNull();
            this._save(G);
            if (this._lodWait && !D) {
                this._wait();
                this._fixSel();
                delete this._lodWait
            }
            this._lodLbl();
            if (c) {
                F = c[ z = t = this.element[0]];
                if (!F) {
                    F = c[ z = t.id]
                }
                p = F ? F.length : 0;
                while (p-- > 0) {
                    A = F[p];
                    m = A.options.parentCombo;
                    if (m && typeof m === "string") {
                        m = a(y = m);
                        if (m.length !== 1) {
                            m = a("#" + y)
                        }
                    }
                    if (m && m.element) {
                        m = m.element[0]
                    } else {
                        if (m && m.length === 1) {
                            m = m[0]
                        }
                    }
                    if (m === t) {
                        if (c) {
                            delete c[z];
                            for (B in c) {
                                if (c.hasOwnProperty(B)) {
                                    m = null;
                                    break
                                }
                            }
                            if (m) {
                                c = undefined
                            }
                        }
                        A._cascade(false, false, this)
                    }
                }
            }
            if (this._valTime === 1) {
                delete this._valTime;
                this.value(this._valLast, true)
            }
        },
        _locale: function (l) {
            var m = this.options[l];
            if (b(m)) {
                m = a.ig.Combo && a.ig.Combo.locale ? a.ig.Combo.locale[l] : null
            }
            return m || ""
        },
        _titles: function () {
            var l = this._locale("clearButtonTitle");
            this.clearElem.attr("title", l).attr("longdesc", l);
            l = this._locale("dropDownButtonTitle");
            this.buttonElem.attr("title", l).attr("longdesc", l)
        },
        _fire: function (o, m, l, n) {
            return (this._canFire || n) ? this._trigger(o, m, l) : true
        },
        _same: function (o, r) {
            if (o === r) {
                return true
            }
            if (!o || !r) {
                return
            }
            var p, q, m, n, l = r.length;
            if (l !== o.length) {
                return
            }
            while (l-- > 0) {
                m = r[l];
                if ((m && !o[l]) || (!m && o[l])) {
                    return
                }
                for (n in m) {
                    if (m.hasOwnProperty(n)) {
                        p = m[n];
                        q = o[l][n];
                        if (p !== q && ((p && !q) || (!p && q) || !p.getTime || !q.getTime || p.getTime() !== q.getTime())) {
                            return
                        }
                    }
                }
            }
            return true
        },
        _setOption: function (n, q) {
            var p = this.options, m = this.fieldElem, l = this.mainElem;
            if (this._same(p[n], q)) {
                return this
            }
            if (n === "selectedItems") {
                this._clearSel()
            }
            if (n.indexOf("virt") === 0 || n.indexOf("Match") > 0 || n.indexOf("empl") > 0 || n.indexOf("drop") === 0 || n === "caseSensitive" || n === "format" || n === "enableActiveItem") {
                p = null;
                delete this._it
            }
            if (n === "multiSelection" || !p) {
                this._listRemove()
            }
            a.Widget.prototype._setOption.apply(this, arguments);
            if (n.indexOf("par") === 0 || n.indexOf("casc") === 0 || n.indexOf("useT") === 0) {
                this._cascade();
                return this
            }
            if (typeof q === "function" || !p) {
                return this
            }
            if (n === "width" || n === "height" || n === "showDropDownButton") {
                this._lastHeight = null;
                this._doSize()
            } else {
                if (n === "selectedItems" || n === "multiSelection") {
                    this._initSel(p);
                    this._updateFromList(null, 1)
                } else {
                    if (n.indexOf("Title") > 0) {
                        this._titles()
                    } else {
                        if (n.indexOf("dataS") === 0 || n.indexOf("fil") === 0 || n.indexOf("Key") > 0 || n.indexOf("OnDem") > 0) {
                            this._hasData = false;
                            this._lod = this._totalAll = p._totalAll = this._count = 0;
                            this.selectedIndex(-1);
                            this.activeIndex(-1);
                            this.dataBind()
                        } else {
                            if (n === "enableClearButton") {
                                this._fixClear(1)
                            } else {
                                if (n === "tabIndex" || n === "disabled") {
                                    m.attr(n, q);
                                    this._fixClear()
                                } else {
                                    if (n === "mode") {
                                        m.attr("readOnly", this._mode(p) > 0);
                                        this._fixClear()
                                    } else {
                                        if (n === "enableDisplayBlock") {
                                            l.css("display", q ? "block" : "inline-block")
                                        } else {
                                            if (n === "itemSeparator") {
                                                this._updateFromList()
                                            } else {
                                                if (n === "text") {
                                                    this.text(q)
                                                } else {
                                                    if (n === "nullText") {
                                                        this._fixNull()
                                                    } else {
                                                        if (n === "validatorOptions") {
                                                            this.validator()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return this
        }
    });
    a.extend(a.ui.igCombo, {
        version: "12.2.20122.1021"
    })
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