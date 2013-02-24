﻿/*
 * Infragistics.Web.ClientUI Dialog localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.Dialog) {
    $.ig.Dialog = {
        locale: {
            closeButtonTitle: "Close",
            minimizeButtonTitle: "Minimize",
            maximizeButtonTitle: "Maximize",
            pinButtonTitle: "Pin",
            unpinButtonTitle: "Unpin",
            restoreButtonTitle: "Restore"
        }
    };
    /*
     * Infragistics.Web.ClientUI Dialog 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     * jquery-1.6.1.js
     * jqueryui/1.8.11/jquery-ui.js
     * Example to use:
     *	<script type="text/javascript">
     *	$(function () {
     *		$("#dialog1").igDialog();
     *	});
     *	</script>
     *	<div id="dialog1"></div>
     */
}
( function (a) {
    var e, c, m = 0, h = [], f = 0, g = 0, n = 0, q = 1, p = 2, o = 3, r = 4, t = 5, s = 6, j = {
        my: "center",
        at: "center",
        collision: "fit",
        of: window,
        using: function (v) {
            if (v.top < 0) {
                v.top = 0
            }
            if (v.left < 0) {
                v.left = 0
            }
            var u = a(this).css(v).offset();
            if (u.top < 0) {
                a(this).css("top", v.top - u.top)
            }
            if (u.left < 0) {
                a(this).css("left", v.left - u.left)
            }
        }
    }, d = function (u, v) {
        return u && v && (u.has(v).length > 0 || u[0] === v)
    }, i = function (u) {
        return u.attr("zIndex", -1).css("outline", 0).attr("unselectable", "on")
    }, l = function (v, u) {
        var w = v.css(u);
        if (!w) {
            return 0
        }
        u = parseFloat(w);
        if (w.indexOf("px") > 0) {
            u += 0.7
        } else {
            if (w.indexOf("em") > 0) {
                u *= 12
            } else {
                return 0
            }
        }
        return Math.floor(u)
    }, b = function (u, w, v) {
        return l(u, (v || "padding") + ( w ? "Top" : "Left")) + l(u, (v || "padding") + ( w ? "Bottom" : "Right")) + l(u, "border" + ( w ? "Top" : "Left") + "Width") + l(u, "border" + ( w ? "Bottom" : "Right") + "Width")
    }, k = function (u) {
        try {
            u.preventDefault();
            u.stopPropagation()
        } catch (v) {
        }
    };
    a.widget("ui.igDialog", {
        options: {
            mainElement: null,
            state: "opened",
            pinned: false,
            closeOnEscape: true,
            showCloseButton: true,
            showMaximizeButton: false,
            showMinimizeButton: false,
            showPinButton: false,
            pinOnMinimized: false,
            imageClass: null,
            headerText: null,
            showHeader: true,
            showFooter: false,
            footerText: null,
            dialogClass: null,
            container: null,
            height: null,
            width: 300,
            minHeight: 100,
            minWidth: 150,
            maxHeight: null,
            maxWidth: null,
            draggable: true,
            position: null,
            resizable: true,
            tabIndex: 0,
            openAnimation: null,
            closeAnimation: null,
            zIndex: null,
            modal: false,
            trackFocus: true,
            closeButtonTitle: null,
            minimizeButtonTitle: null,
            maximizeButtonTitle: null,
            pinButtonTitle: null,
            unpinButtonTitle: null,
            restoreButtonTitle: null,
            temporaryUrl: null,
            enableHeaderFocus: true,
            enableDblclick: "auto"
        },
        events: {
            stateChanging: null,
            stateChanged: null,
            animationEnded: null,
            focus: null,
            blur: null
        },
        css: {
            dialog: "ui-igdialog ui-dialog ui-widget ui-widget-content ui-corner-all",
            header: "ui-igdialog-header ui-dialog-titlebar ui-widget-header ui-corner-top ui-helper-clearfix",
            headerFocus: "ui-igdialog-header-focus ui-state-focus",
            headerMinimized: "ui-corner-bottom",
            headerText: "ui-igdialog-headertext ui-dialog-title",
            headerImage: "ui-igdialog-headerimage",
            headerTextMinimized: "ui-igdialog-headertext-minimized",
            headerButton: "ui-igdialog-headerbutton ui-corner-all ui-state-default",
            headerButtonHover: "ui-igdialog-headerbutton-hover ui-state-hover",
            close: "ui-igdialog-buttonclose",
            minimize: "ui-igdialog-buttonminimize",
            maximize: "ui-igdialog-buttonmaximize",
            pin: "ui-igdialog-buttonpin",
            closeIcon: "ui-igdialog-close-icon ui-icon ui-icon-close",
            minimizeIcon: "ui-igdialog-minimize-icon ui-icon ui-icon-minus",
            maximizeIcon: "ui-igdialog-maximize-icon ui-icon ui-icon-extlink",
            restoreIcon: "ui-igdialog-restore-icon ui-icon ui-icon-copy",
            pinIcon: "ui-igdialog-pin-icon ui-icon ui-icon-pin-s",
            unpinIcon: "ui-igdialog-unpin-icon ui-icon ui-icon-pin-w",
            footer: "ui-igdialog-footer ui-widget-header ui-corner-bottom ui-helper-clearfix",
            resizing: "ui-igdialog-resizing",
            dragging: "ui-igdialog-dragging",
            unmovable: "ui-igdialog-unmovable",
            overlay: "ui-igdialog-overlay ui-widget-overlay",
            contentIframe: "ui-igdialog-content-iframe",
            content: "ui-igdialog-content ui-widget-content ui-dialog-content"
        },
        _create: function () {
            var w, A = this, x = A.element, v = x[0], C = (v && v.nodeName === "IFRAME") ? v.src : null, y = A.options, B = y.state, z = A._initContainer(y.container), u = A.css;
            A._fixIE(x);
            A._old = {
                position: x.css("position"),
                left: x.css("left"),
                top: x.css("top"),
                display: x.css("display"),
                visibility: x.css("visibility"),
                width: v.style.width,
                height: v.style.height
            };
            if (C) {
                v.src = y.temporaryUrl || ""
            }
            A._min = B === "minimized" || B === p;
            A._max = B === "maximized" || B === o;
            A._opened = B && B !== "closed";
            A._oldDad = v.parentNode;
            A._next = A._oldDad ? v.nextSibling : null;
            A._dad = z;
            A._elem = v = w = y.mainElement = y.mainElement || a("<div />");
            if (A._next && A._oldDad === z) {
                w.insertBefore(A._next)
            } else {
                w.appendTo(z)
            }
            w.css({
                zIndex: y.zIndex || 1000,
                outline: 0
            }).attr("tabIndex", y.tabIndex).keydown(function (E) {
                    if (y.closeOnEscape && E.keyCode === a.ui.keyCode.ESCAPE) {
                        A.close(E);
                        E.preventDefault()
                    }
                    if (E.keyCode !== a.ui.keyCode.TAB) {
                        return
                    }
                    A._tabTime = new Date().getTime();
                    if (!A._modal && !A._max) {
                        return
                    }
                    var M, L, R, N, J = -1, D = 999999, I = D, H = -1, Q = E.target, S = A._getTabIndex(Q), O = E.shiftKey, P = a(":tabbable", w[0]), K = P.length, G = K;
                    while (G-- > 0) {
                        R = A._getTabIndex(v = P[G]);
                        if (R > H) {
                            H = R;
                            L = v
                        }
                        if (R <= I) {
                            I = R;
                            M = v
                        }
                        if (R === S) {
                            if (!N) {
                                N = v === Q;
                                if (!N) {
                                    J = G
                                }
                            } else {
                                if (J < 0) {
                                    J = G
                                }
                            }
                        }
                    }
                    if (J < 0) {
                        G = K
                    }
                    I = O ? -1 : D;
                    while (G-- > 0) {
                        R = A._getTabIndex(P[G]);
                        if ((R > S && R < I && !O) || (R < S && R > I && O)) {
                            I = R;
                            J = G
                        }
                    }
                    L = L || w[0];
                    M = M || L;
                    A._nextTabElem = (J >= 0) ? P[J] : ( O ? L : M);
                    if (Q === w[0] || (Q === M && O) || (Q === L && !O)) {
                        k(E);
                        v = O ? L : M;
                        try {
                            v.focus()
                        } catch (F) {
                        }
                    }
                }).mousedown(function (D) {
                    A.moveToTop(D)
                });
            v.addClass(u.dialog);
            if (y.dialogClass) {
                v.addClass(y.dialogClass)
            }
            x.show().addClass(u.content).appendTo(v);
            if (C !== null) {
                x[0].src = C;
                x.addClass(u.contentIframe)
            }
            A._modal = A._hasFocus = false;
            A._lastFoc = "blur";
            A._doHeader();
            A._doFooter();
            A._doDraggable();
            A._doResizable();
            if (A._min) {
                A._onMin(true, true, true)
            }
            if (A._max) {
                y.pinned = false;
                A._onMax(true, true, true)
            }
            if (y.pinned) {
                A._onPin(true, true, true)
            }
            if (A._opened) {
                A._open()
            } else {
                w.hide()
            }
            A._created = true;
            A._save()
        },
        _fixIE: function (v) {
            v = v.find("*");
            var x, u, w = v.length;
            while (w-- > 0) {
                u = v[w];
                x = u.nodeName;
                if (x === "/INPUT" || x === "/IMG") {
                    u.parentNode.removeChild(u)
                }
            }
        },
        destroy: function () {
            var y = this, u = y._oldDad, x = y._next, v = y._elem, w = y.element[0];
            if (!v) {
                return y
            }
            y._doClose(null, true);
            delete y._elem;
            if (y._winResize) {
                a(window).unbind("resize", y._winResize)
            }
            w.parentNode.removeChild(w);
            v.remove();
            y.element.removeClass(y.css.content).css(y._old);
            if (x && x.parentNode === u) {
                u.insertBefore(w, x)
            } else {
                u.appendChild(w)
            }
            a.Widget.prototype.destroy.apply(this, arguments);
            return y
        },
        state: function (u) {
            if (!arguments.length) {
                return this.options.state
            }
            if ((u === "minimized" || u === p) && (!this._min || !this._opened)) {
                if (!this._min) {
                    this._minimize()
                } else {
                    this._open(null, 1)
                }
            }
            if ((u === "maximized" || u === o) && (!this._max || !this._opened)) {
                if (!this._max) {
                    this._maximize()
                } else {
                    this._open(null, 1)
                }
            }
            if ((u === "opened" || u === q) && (this._min || this._max || !this._opened)) {
                this._onMin();
                this._onMax();
                this._open();
                this.options.state = u
            }
            if ((u === "closed" || !u) && (this._min || this._max || this._opened)) {
                this._onMin();
                this._onMax();
                this.close()
            }
            return this
        },
        mainElement: function () {
            return this._elem
        },
        close: function (u) {
            if (this._opened) {
                this._doClose(u)
            }
            return this
        },
        open: function () {
            return this._open(null, 1)
        },
        minimize: function () {
            if (!this._min) {
                this._minimize()
            }
            return this
        },
        maximize: function () {
            if (!this._max) {
                this._maximize()
            }
            return this
        },
        restore: function () {
            if (this._max) {
                this._onMax()
            }
            if (this._min) {
                this._onMin()
            }
            return this
        },
        pin: function () {
            if (!this.options.pinned) {
                this._pin()
            }
            return this
        },
        unpin: function () {
            if (this.options.pinned) {
                this._pin()
            }
            return this
        },
        getTopModal: function () {
            return h[h.length - 1]
        },
        isTopModal: function () {
            return this.getTopModal() === this
        },
        moveToTop: function (u) {
            var D, y, C = this, z = C.options, E = z.zIndex, v = C._elem, F = C._created ? null : E, x = z.modal, w = this.element[0], B = w.scrollTop, A = w.scrollLeft;
            E = E || 1000;
            D = u ? u.target : null;
            if (d(C._header, D) || d(C._footer, D)) {
                y = D.nodeName;
                if (y !== "INPUT" && y !== "BUTTON") {
                    k(u);
                    C._setFocus()
                }
            } else {
                if (u && !this._hasFocus) {
                    C._setFocus()
                }
            }
            g = Math.max(F || E, g);
            if (z.pinned) {
                return C
            }
            if (x && C._lastZ) {
                v = C._modalDiv;
                if (v && v[0].offsetWidth < 10) {
                    C._onResize()
                }
                return C
            }
            if (e === C && (F || E) >= g) {
                return C
            }
            if (e && !F) {
                e._elem.css("zIndex", e._lastZ || -1);
                e._save()
            }
            if (f >= g) {
                g++
            }
            if (x && !F) {
                g++;
                g++
            }
            e = C;
            C._lastZ = f = F || ((x || h.length > 0) ? g : E);
            if (!F) {
                v.css("zIndex", F || g);
                C._save()
            }
            w.scrollTop = B;
            w.scrollLeft = A;
            if (x) {
                C._doModal(g)
            }
            return C
        },
        _save: function () {
            var y, u, x, w = this.options, v = w.inputName;
            if (!v) {
                return
            }
            u = a('input[name="' + v + '"]');
            if (u.length === 0) {
                u = u.parents("form")[0] || document.forms[0];
                if (!u) {
                    return
                }
                u = a('<input type="hidden" name="' + v + '" />').appendTo(u)
            }
            y = "s" + (w.pinned ? "1" : "") + (this._opened ? (this._min ? 2 : (this._max ? 3 : 1)) : 0) + (w.width ? ":w" + w.width : "") + (w.height ? ":h" + w.height : "") + (":z" + this._elem.css("zIndex") || w.zIndex);
            x = w.position;
            if (x && x.length === 2) {
                y += ":p" + x[0] + "," + x[1]
            }
            u.val(y)
        },
        _open: function (w, z) {
            var A = this, y = A.options, x = A._elem, u = A._min ? null : y.openAnimation, v = {
                action: "open",
                owner: this
            };
            if ((A._opened && A._vis) || (z && !A._fireState(w, true, v))) {
                return A
            }
            if (!y.pinned) {
                x.css("position", "absolute")
            }
            x.show();
            A._opened = true;
            A._doSize(1);
            if (u) {
                x.hide().show(u, function () {
                    A._trigger("animationEnded", w, v)
                })
            }
            A._vis = true;
            m++;
            A._trackFocus(x);
            A.moveToTop(true);
            A._fixState();
            if (z) {
                A._fireState(w, false, v)
            }
            A._save();
            return A
        },
        _initContainer: function (v, u) {
            this._container = null;
            if (v) {
                if (typeof v === "string") {
                    v = a(v)
                }
                if (v && v[0]) {
                    v = v[0]
                }
            }
            if (!v || !v.parentNode) {
                v = this.element.parents("form")[0] || document.body
            } else {
                if (v.nodeName !== "BODY") {
                    var x = v.style, w = x ? x.position : null;
                    if (x && (!w || w === "static")) {
                        x.position = "relative"
                    }
                    this._container = v
                }
            }
            if (u) {
                this._elem.appendTo(v)
            }
            return v
        },
        _fixState: function () {
            this.options.state = this._opened ? (this._min ? "minimized" : (this._max ? "maximized" : "opened")) : "closed"
        },
        _minimize: function (u) {
            return this._doState(u, {
                action: this._min ? "restore" : "minimize"
            }, u ? "minimize" : null, "_onMin", true)
        },
        _maximize: function (u) {
            return this._doState(u, {
                action: this._max ? "restore" : "maximize"
            }, u ? "maximize" : null, "_onMax", true)
        },
        _pin: function (u) {
            return this._doState(u, {
                action: this.options.pinned ? "unpin" : "pin"
            }, u ? "pin" : null, "_onPin")
        },
        _close: function (u) {
            return this._opened ? this.close(u) : this._open(u)
        },
        _getTabIndex: function (u) {
            return (isNaN(u = parseInt(u.tabIndex, 10)) || u < 1) ? 0 : u
        },
        _doHeader: function () {
            var u, z, w, y = 4, B = this, x = B._header, A = B.options, C = A.headerText, v = B.css;
            if (x) {
                x.remove()
            }
            delete B._minHW;
            x = B._header = i(a("<div />").addClass(v.header).css("display", "block").prependTo(B._elem)).dblclick(function (E) {
                var D = A.enableDblclick;
                if (!D) {
                    return
                }
                if (B._min) {
                    B._doState(E, {
                        action: "restore"
                    }, null, "_onMin", true)
                } else {
                    if (D === true || (D === "auto" && A.showMaximizeButton)) {
                        B._doState(E, {
                            action: B._max ? "restore" : "maximize"
                        }, null, "_onMax", true)
                    }
                }
            });
            if (A.imageClass) {
                B._img = a("<span />").addClass(v.headerImage).addClass(A.imageClass).html("&nbsp;").appendTo(x)
            }
            B._headerText = a("<span />").addClass(v.headerText).html(C || "&nbsp;").appendTo(x);
            w = {
                mouseover: function () {
                    a(this).addClass(v.headerButtonHover)
                },
                mouseleave: function () {
                    a(this).removeClass(v.headerButtonHover)
                },
                click: function (D) {
                    try {
                        B["_" + a(this).attr("data-id")](D)
                    } catch (E) {
                    }
                    k(D)
                },
                touchstart: function (D) {
                    this._drag = null;
                    k(D)
                },
                touchmove: function (D) {
                    this._drag = 1;
                    k(D)
                },
                touchend: function (D) {
                    if (!this._drag) {
                        a(this).trigger("click")
                    }
                }
            };
            while (y-- >= 0) {
                if (y === 3 && A.showCloseButton) {
                    z = "close"
                } else {
                    if (y === 2 && A.showMaximizeButton) {
                        z = "maximize"
                    } else {
                        if (y === 1 && A.showMinimizeButton) {
                            z = "minimize"
                        } else {
                            z = (y === 0 && A.showPinButton) ? "pin" : null
                        }
                    }
                }
                if (z) {
                    u = a("<a />").addClass(v.headerButton + " " + v[z]).attr("data-id", z).attr("href", "#").attr("role", "button").bind(w).appendTo(x);
                    a("<span />").addClass(v[z + "Icon"]).appendTo(u);
                    B._loc(u, y === 3 ? n : (y === 2 ? o : (y === 1 ? p : r)))
                }
            }
            if (!A.showHeader) {
                x.hide()
            }
        },
        _doFooter: function () {
            var w = this, v = w.options, x = v.footerText, u = w.css;
            if (w._footer) {
                w._footer.remove();
                delete w._footer
            }
            if (v.showFooter) {
                w._footer = i(a("<div />").addClass(u.footer).css("display", "block").html(x || "&nbsp").appendTo(w._elem))
            }
        },
        _onMin: function (x, B, A) {
            var v = this._elem.parent(), C = this.options, u = this._footer, w = this.css, y = this._header, z = (x && x.type) ? !this._min : !!x;
            if (z === this._min && this._created) {
                return
            }
            this._min = z;
            if (z && C.pinOnMinimized) {
                this._onPin(z, true, true)
            }
            v = y.find("." + w.minimize);
            v.find("*").removeClass(z ? w.minimizeIcon : w.restoreIcon).addClass(z ? w.restoreIcon : w.minimizeIcon);
            if (x && x.type && z && this._max) {
                this._onMax(false, true, true)
            }
            this._loc(v, z ? s : p);
            if (z) {
                y.addClass(w.headerMinimized);
                if (u) {
                    u.hide()
                }
            } else {
                y.removeClass(w.headerMinimized);
                if (u) {
                    u.show()
                }
            }
            if (!B && this._vis) {
                this._doSize()
            }
            if (!A && this._vis) {
                this._setFocus()
            }
            this._save()
        },
        _onMax: function (w, A, z) {
            var u, B = this.options, x = this._header, v = this.css, y = (w && w.type) ? !this._max : !!w;
            if (y === this._max && this._created) {
                return
            }
            this._max = y;
            if (!y) {
                this._restoreHtml()
            }
            u = x.find("." + v.maximize);
            u.find("*").removeClass(y ? v.maximizeIcon : v.restoreIcon).addClass(y ? v.restoreIcon : v.maximizeIcon);
            this._loc(u, y ? s : o);
            if (y) {
                if (this._min) {
                    this._onMin(false, true, true)
                }
                if (B.pinned) {
                    this._onPin(false, true, true)
                }
            }
            if (y) {
                x.addClass(v.unmovable)
            } else {
                x.removeClass(v.unmovable)
            }
            if (!A && this._vis) {
                this._doSize()
            }
            if (!z && this._vis) {
                this._setFocus()
            }
            this._save()
        },
        _onPin: function (x, C, B) {
            var u, y, F, w, H, E = this._old, A = this._next, v = this.css, z = this._header, D = this.options, G = (x && x.type) ? !D.pinned : !!x;
            if (G === D.pinned && this._created) {
                return
            }
            D.pinned = G;
            u = z.find("." + v.pin);
            u.find("*").removeClass(G ? v.pinIcon : v.unpinIcon).addClass(G ? v.unpinIcon : v.pinIcon);
            if (this._max && G) {
                this._onMax(false, false, true)
            }
            this._loc(u, G ? t : r);
            if (G) {
                z.addClass(v.unmovable)
            } else {
                z.removeClass(v.unmovable)
            }
            y = this._elem;
            if (G) {
                H = E.position;
                if (this._resize && (H === "static" || !H)) {
                    H = "relative"
                }
                this._pinPos = H = {
                    position: H,
                    left: E.left,
                    top: E.top
                }
            } else {
                H = {
                    position: "absolute"
                }
            }
            y.css(H);
            F = y.parent()[0];
            w = G ? this._oldDad : this._dad;
            if (w && w !== F) {
                if (G && A && A.parentNode === w) {
                    y.insertBefore(A)
                } else {
                    y.appendTo(w)
                }
            }
            if (!B && this._vis) {
                this._setFocus()
            }
            if (!C && this._vis) {
                if (!G) {
                    this._doSize(1)
                } else {
                    this._doModal()
                }
            }
            this._save()
        },
        _doClose: function (x, w) {
            var z, B = this, y = B._elem, v = {
                action: "close"
            }, A = B.options, u = (B._min || w) ? null : A.closeAnimation;
            if (!B._opened || (!w && !B._fireState(x, true, v, x ? "close" : null))) {
                return
            }
            B._trackFocus(y, 1);
            B._restoreHtml();
            if (e === B) {
                e = null
            }
            B._fireFoc(false);
            B._hasFocus = false;
            delete B._lastZ;
            B._vis = B._opened = false;
            if (w) {
                A.modal = false
            }
            B._doModal();
            if (u) {
                y.hide(u, function () {
                    B._trigger("animationEnded", x, v)
                })
            } else {
                if (!w) {
                    y.hide()
                }
            }
            if (!w) {
                B._fixState();
                B._fireState(x, false, v)
            }
            if (--m < 1) {
                m = f = g = 0
            } else {
                if (m === ( z = h.length)) {
                    h[z - 1]._setFocus()
                }
            }
            B._save()
        },
        _fireState: function (x, v, u, w) {
            if (v) {
                var y = this.options;
                u.oldState = y.state;
                u.oldPinned = y.pinned;
                u.owner = this;
                if (w) {
                    u.button = w
                }
            }
            return this._created ? this._trigger("stateChang" + ( v ? "ing" : "ed"), x, u) : true
        },
        _doState: function (w, u, v, x, y) {
            if (this._fireState(w, true, u, v)) {
                this[x](w || {
                    type: 1
                });
                if (y && !this._opened) {
                    this._open(null, true)
                }
                this._fixState();
                if (this._created) {
                    this._trigger("stateChanged", w, u)
                }
            }
            return this
        },
        _fireFoc: function (v, u) {
            var w = v ? "focus" : "blur";
            if (w !== this._lastFoc) {
                this._trigger(this._lastFoc = w, u, {
                    owner: this
                });
                if (this.options.enableHeaderFocus) {
                    w = this.css.headerFocus;
                    if (v) {
                        this._header.addClass(w)
                    } else {
                        this._header.removeClass(w)
                    }
                }
            }
        },
        _trackFocus: function (u, w) {
            var x = this, v = x._focusEvt, y = x.options.trackFocus;
            if (!v && !y) {
                return
            }
            if (w) {
                if (x._focBind) {
                    x._focBind.unbind(v);
                    delete x._focBind
                }
                return
            }
            if (!v) {
                v = function (z) {
                    var A, C = x._focBind, B = z.type === "focus";
                    if (!B && C && u) {
                        A = u.find("*").not(C);
                        if (A.length) {
                            x._focBind = C.add(A);
                            A.bind(v)
                        }
                    }
                    x._hasFocus = B;
                    setTimeout(function () {
                        var E = x.getTopModal(), D = x._elem;
                        if (D && E && !x._hasFocus && !B && e === x) {
                            if (x._max || E === x) {
                                E = x._nextTabElem || D[0]
                            } else {
                                E = (x._tabTime && (new Date().getTime() - x._tabTime) < 200) ? D[0] : null
                            }
                            if (E) {
                                x._setFocus(E)
                            }
                        }
                        x._fireFoc(x._hasFocus, z)
                    }, 50)
                };
                v = x._focusEvt = {
                    focus: v,
                    blur: v
                }
            }
            if (y && u) {
                x._focBind = u.find("*").add(u).bind(v)
            }
        },
        _setFocus: function (u) {
            var v = this;
            setTimeout(function () {
                try {
                    if (!v._hasFocus) {
                        if (!v.options.trackFocus) {
                            v._hasFocus = true
                        }
                        u = u || v._elem[0];
                        u.focus()
                    }
                } catch (w) {
                }
            }, 100)
        },
        _restoreHtml: function () {
            var u, v = this._oldHtml;
            if (v) {
                u = v.html;
                if (u.style) {
                    u.style.overflow = v.overflow
                }
                u.scrollLeft = v.scrollLeft;
                u.scrollTop = v.scrollTop;
                delete this._oldHtml
            }
        },
        _touch: function (u, w) {
            var y, x = this, v = function (B, E) {
                var z, A = B.originalEvent, D = A ? A.touches : null, C = D && D.length === 1;
                if (C && E) {
                    k(B)
                }
                C = C && E === "move";
                if (y) {
                    y = C ? y : null;
                    z = C ? "Drag" : "Stop"
                } else {
                    if (C) {
                        y = true;
                        u.trigger("mouseover");
                        z = "Start"
                    }
                }
                if (z) {
                    A = x._elem.data(w);
                    z = "_mouse" + z;
                    if (A && A[z]) {
                        B.pageX = C ? D[0].pageX : 0;
                        B.pageY = C ? D[0].pageY : 0;
                        A[z](B)
                    }
                }
            };
            u.bind({
                touchstart: function (z) {
                    v(z, "start")
                },
                touchmove: function (z) {
                    v(z, "move")
                },
                touchend: function (z) {
                    v(z)
                }
            })
        },
        _doDraggable: function () {
            var w = this, v = w.options, u = w._elem;
            if (u.draggable && v.draggable) {
                w._touch(w._header, "draggable");
                u.draggable({
                    cancel: ".ui-igdialog-content, .ui-igdialog-headerbutton",
                    handle: ".ui-igdialog-header",
                    containment: w._container || "document",
                    start: function () {
                        if (v.pinned || w._max) {
                            return false
                        }
                        a(this).addClass(w.css.dragging)
                    },
                    stop: function (y, z) {
                        var x = a(document);
                        v.position = [z.position.left - x.scrollLeft(), z.position.top - x.scrollTop()];
                        a(this).removeClass(w.css.dragging);
                        w._save()
                    }
                })
            }
        },
        _doResizable: function () {
            var v, y, w = 0, z = this, x = z.options, u = z._elem;
            if (!u.resizable) {
                return
            }
            z._resize = x.resizable;
            if (!z._resize) {
                return
            }
            u.css("position", u.css("position")).resizable({
                cancel: "." + z.css.content,
                containment: z._container || "document",
                alsoResize: z.element,
                maxWidth: x.maxWidth,
                maxHeight: x.maxHeight,
                minWidth: z._minWidth(),
                minHeight: x.minHeight,
                handles: ( typeof x.resizable === "string") ? x.resizable : "n,e,s,w,se,sw,ne,nw",
                start: function () {
                    a(this).addClass(z.css.resizing);
                    if (x.pinned && z._pinPos) {
                        u.css(z._pinPos)
                    }
                },
                resize: function () {
                    z._fixCaption();
                    if (x.pinned && z._pinPos) {
                        u.css(z._pinPos)
                    }
                },
                stop: function () {
                    a(this).removeClass(z.css.resizing);
                    x.height = a(this).height();
                    x.width = a(this).width();
                    z._save()
                }
            }).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
            y = u.data("resizable");
            if (y) {
                if (!y._dragFix) {
                    y._dragFix = y._mouseDrag;
                    y._mouseDrag = function (B) {
                        var C, D, A = y.parentData;
                        if (A && B) {
                            C = B.pageX;
                            D = B.pageY;
                            if (C <= A.left || D <= A.top || C >= A.left + A.width || D >= A.top + A.height) {
                                return false
                            }
                        }
                        return y._dragFix(B)
                    }
                }
                v = y._handles;
                w = v.length
            }
            while (w-- > 0) {
                z._touch(a(v[w]), "resizable")
            }
        },
        _toPx: function (x, v) {
            if (typeof x === "number") {
                return x
            }
            if (!x) {
                return v ? x : 0
            }
            x = x.toString();
            var u, w = parseInt(x, 10);
            if (isNaN(w)) {
                return 0
            }
            if (x.indexOf("m") > 0 || x.indexOf("e") > 0 || x.indexOf("i") > 0 || x.indexOf("t") > 0) {
                u = a("<div />").css({
                    visibility: "hidden",
                    width: x
                }).appendTo(this._dad);
                w = u.width();
                u.remove()
            } else {
                if (x.indexOf("%") > 0) {
                    x = this._winRect(1);
                    x = v ? x.height : x.width;
                    return Math.floor(w * x / 100)
                }
            }
            return w
        },
        _doSize: function (w) {
            var B = this, y = B.options, x = B._max, z = x ? [0, 0] : y.position, A = B._resize ? ".ui-resizable-handle" : null, v = B.element, u = B._elem;
            if (A) {
                if (B._min || x) {
                    a(A, u).hide()
                } else {
                    a(A, u).show()
                }
            }
            B._headerText.css("width", 0);
            if (B._min) {
                v.hide();
                B._fixCaption(u)
            } else {
                if (x) {
                    v.show().css({
                        width: "auto",
                        height: "auto"
                    });
                    u.css({
                        width: 100,
                        height: 50
                    })
                } else {
                    this._doSizePX(v, u, Math.max(B._minWidth(), B._toPx(y.width)), B._toPx(y.height, true), y.minHeight);
                    if (A) {
                        u.resizable("option", "minHeight", y.minHeight)
                    }
                }
            }
            if (!y.pinned && (w || x || B._oldMax)) {
                B._oldMax = x;
                if (x) {
                    B._onResize()
                }
                if (u.position) {
                    if (z) {
                        if (z.length === 2 && typeof z[0] === "number") {
                            z = {
                                my: "left top",
                                at: "left top",
                                offset: z[0] + " " + z[1]
                            }
                        }
                        z = a.extend({}, j, z)
                    }
                    if (B._container) {
                        if (!z) {
                            z = a.extend({}, j)
                        }
                        z.of = B._container;
                        z.collision = x ? "none" : "fit"
                    }
                    u.css({
                        top: 0,
                        left: 0
                    }).position(z || j)
                }
            }
            B._doModal();
            B._save()
        },
        _doSizePX: function (v, u, A, w, y) {
            v.show().css({
                width: "auto",
                height: 0,
                minHeight: 0
            });
            var x, B = u.css({
                width: A,
                height: "auto",
                display: "block"
            }).height(), z = v[0].nodeName;
            this._fixCaption(u);
            if (typeof w === "string") {
                if (w.indexOf("px") > 0) {
                    w = parseInt(w, 10)
                }
            }
            if (typeof w !== "number") {
                w = v.css("height", "auto").height() + B
            }
            if (z !== "DIV") {
                if (z === "IFRAME") {
                    A -= b(v);
                    x = a.browser.msie ? parseInt(a.browser.version, 10) : null;
                    if (!x || isNaN(x) || x > 7) {
                        w += 5
                    }
                }
                v.width(A - b(v, false, "margin"))
            }
            w = Math.max(y, w);
            v.height(Math.max(w - B, 0));
            y = w - u[0].offsetHeight;
            if (y > 0) {
                v.height(Math.max(w - B + y, 0))
            }
        },
        _onResize: function () {
            var v, w = this, u = w.isTopModal() ? w._modalDiv : null;
            if (!w._winResize) {
                a(window).bind("resize", w._winResize = function () {
                    setTimeout(function () {
                        w._onResize()
                    }, 50)
                })
            }
            if (!w._opened || w.options.pinned) {
                return
            }
            if (u) {
                u.hide();
                w._doIframe(u, 1)
            }
            if (w._max) {
                w._doMaxSize(w._elem)
            }
            if (u) {
                v = w._winRect();
                u.css({
                    width: v.maxWidth - 1,
                    height: v.maxHeight - 1
                }).show();
                w._doIframe(u)
            }
        },
        _minHeaderWidth: function () {
            var y, u, z = this._minHW, v = this._header.children().not(this._headerText), x = v.length;
            if (!z) {
                z = 3 + b(this._header);
                while (--x >= 0) {
                    u = v[x];
                    try {
                        y = a(u).outerWidth(true)
                    } catch (w) {
                    }
                    z += 1 + ((y && y > 2 && y < 100) ? y : u.offsetWidth)
                }
                this._minHW = z
            }
            return z
        },
        _minWidth: function () {
            if (!this._minW) {
                this._minW = this._minHeaderWidth()
            }
            return Math.max(this.options.minWidth, this._minW)
        },
        _fixCaption: function (v) {
            var E, F, C, A, D, z = 0, y = -1, x = this._header, u = this._headerText, B = this.css.headerTextMinimized;
            if (this._min) {
                u.css("width", "").addClass(B);
                if (!v) {
                    return
                }
                v.css({
                    height: "auto",
                    width: "auto",
                    display: "inline-block"
                });
                F = b(x) + 3;
                u = x.children();
                A = u.length;
                while (++y < A) {
                    F += u[y].offsetWidth + l(a(u[y]), "marginLeft") + l(a(u[y]), "marginRight")
                }
                while (z++ < 2) {
                    v.css("width", F);
                    F += 2;
                    y = A;
                    while (y-- > 0) {
                        D = u[y].offsetTop;
                        if (y > 0 && y < A - 1 && Math.abs(C - D) > 4) {
                            break
                        }
                        C = D
                    }
                    if (y < 0) {
                        z = 4
                    }
                }
                return
            }
            u.removeClass(B);
            try {
                E = x.innerWidth() - 3
            } catch (w) {
            }
            if (!E || E > 1000) {
                E = x[0].clientWidth - 4
            }
            E = Math.max(1, E - this._minHeaderWidth());
            u.css("width", "auto");
            if (u[0].offsetWidth * 1.3 > E) {
                u.css("width", E)
            }
        },
        _doMaxSize: function (u) {
            var w, x = this._oldHtml, v = this.element, A = this._winRect(), y = b(u), z = b(u, 1);
            w = A.html;
            if (!x) {
                this._oldHtml = x = {
                    html: w,
                    scrollLeft: w.scrollLeft,
                    scrollTop: w.scrollTop
                };
                w.scrollLeft = w.scrollTop = 0;
                if (w.style) {
                    x.overflow = w.style.overflow;
                    w.style.overflow = "hidden";
                    if (A.maxWidth > A.width || A.maxHeight > A.height) {
                        A = this._winRect(1)
                    }
                }
            }
            this._doSizePX(v, u, A.width - y - 1, A.height - z - 1, 0)
        },
        _winRect: function (F) {
            var E, y, G, z, H, A, w = this._container, D = 0, C = 0, u = 999999, I = window, x = I.document, v = x.body, B = v;
            if (w) {
                G = w.offsetWidth;
                z = w.offsetHeight;
                return {
                    width: G,
                    height: z,
                    maxWidth: G,
                    maxHeight: z,
                    html: w
                }
            }
            while (B && B.nodeName !== "HTML") {
                B = B.parentNode
            }
            if (!B) {
                B = v
            }
            y = x.documentElement || B;
            E = ((x.compatMode !== "CSS1Compat") && a.browser.msie) ? v : B;
            G = E.clientWidth;
            z = E.clientHeight;
            if (F) {
                return {
                    width: G,
                    height: z
                }
            }
            if (G && G > 50) {
                D = G;
                C = z
            } else {
                G = z = u
            }
            H = B.scrollWidth;
            A = B.scrollHeight;
            if (H && A) {
                D = Math.max(D, H);
                C = Math.max(C, A)
            }
            D = Math.max(D, v.scrollWidth);
            C = Math.max(C, v.scrollHeight);
            H = v.offsetWidth;
            A = v.offsetHeight;
            D = Math.max(D, H);
            C = Math.max(C, A);
            return {
                width: (G === u) ? H : G,
                height: (z === u) ? A : z,
                maxWidth: D,
                maxHeight: C,
                html: B
            }
        },
        _doIframe: function (u, v) {
            var w = "javascript";
            if (!c) {
                c = i(a("<iframe />").attr("frameBorder", 0).attr("scrolling", "no").attr("src", w + ":''").css({
                    position: "absolute",
                    filter: "alpha(opacity=50)",
                    opacity: 0
                }))
            }
            if (c.parent()[0] !== u.parent()[0]) {
                c.css({
                    width: "1px",
                    height: "1px",
                    marginLeft: u.css("marginLeft"),
                    marginTop: u.css("marginTop"),
                    left: u.css("left"),
                    top: u.css("top"),
                    zIndex: u.attr("zIndex") - 1
                }).insertBefore(u)
            }
            c.css({
                width: v ? "1px" : u.css("width"),
                height: v ? "1px" : u.css("height")
            })
        },
        _doModal: function (D) {
            var w, B, A, z, x = h.length, C = this, y = C.options, v = C._elem, u = C._modalDiv;
            A = y.modal && !y.pinned && !C._min && C._opened;
            w = a.inArray(C, h);
            if (C._modal === A) {
                if (D && u) {
                    u.css("zIndex", D - 1);
                    C._onResize()
                }
                if (!A && !e && x > 0) {
                    h[x - 1].moveToTop()
                }
                return
            }
            if (w < 0 && A) {
                if (x > 0) {
                    h[x - 1]._modalDiv.hide()
                }
                h.push(C)
            }
            if (w >= 0 && !A) {
                if (w > 0 && w + 1 === x) {
                    z = h[w - 1]
                }
                h.splice(w, 1)
            }
            C._modal = A;
            if (A) {
                C._modalDiv = u = i(a("<div />").css({
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: g - 1
                }).addClass(C.css.overlay).mousedown(function (E) {
                        C._setFocus();
                        k(E)
                    }).insertBefore(v));
                B = u.offset();
                u.css({
                    marginLeft: -B.left + "px",
                    marginTop: -B.top + "px"
                });
                C._onResize()
            } else {
                u.remove();
                c.remove();
                delete C._modalDiv;
                if (z) {
                    z.moveToTop()
                }
            }
        },
        _loc: function (u, v) {
            v = ((v === p) ? "minimize" : ((v === o) ? "maximize" : ((v === s) ? "restore" : ((v === n) ? "close" : ((v === r) ? "pin" : ((v === t) ? "unpin" : "open")))))) + "ButtonTitle";
            var w = this.options[v] || (a.ig && a.ig.Dialog && a.ig.Dialog.locale ? a.ig.Dialog.locale[v] : null) || "";
            u.attr("title", w).attr("longdesc", w)
        },
        _setOption: function (x, C) {
            var z, B, v, A, w = this._elem, y = this.options, u = x === "container";
            if (!w || !x || y[x] === C || x === "mainElement") {
                return this
            }
            if (x === "state") {
                return this.state(C)
            }
            if (x === "pinned") {
                return this._pin()
            }
            if (u) {
                if (y.draggable && w.draggable) {
                    w.draggable("destroy");
                    v = true
                }
                if (y.resizable && w.resizable) {
                    w.resizable("destroy");
                    A = true
                }
            }
            a.Widget.prototype._setOption.apply(this, arguments);
            if (typeof C === "function") {
                return this
            }
            if (u) {
                this._initContainer(C, 1);
                if (v) {
                    this._doDraggable()
                }
                if (A) {
                    this._doResizable()
                }
            }
            if (x === "draggable") {
                if (C) {
                    this._doDraggable()
                } else {
                    if (w.draggable) {
                        w.draggable("destroy")
                    }
                }
            }
            if (x === "resizable") {
                if (C) {
                    this._doResizable()
                } else {
                    if (this._resize) {
                        this._resize = C;
                        w.resizable("destroy")
                    }
                }
            }
            if (x === "modal") {
                this._doModal()
            }
            if (x.indexOf("Button") > 0 || x === "image" || x === "headerText" || x === "showHeader") {
                this._doHeader();
                B = true
            }
            if (x.indexOf("ooter") > 0) {
                this._doFooter();
                B = true
            }
            if (x === "tabIndex") {
                w.attr("tabIndex", C)
            }
            if (x === "zIndex") {
                w.css("zIndex", C);
                this._save()
            }
            if (this._vis) {
                z = x === "position";
                if (u || B || z || x.indexOf("idth") > 0 || x.indexOf("eight") > 0) {
                    this._doSize(z || u)
                }
            }
            if (x.indexOf("Foc") > 0) {
                this._header.removeClass(this.css.headerFocus)
            }
            return this
        }
    });
    a.extend(a.ui.igDialog, {
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