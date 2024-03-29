﻿/*
 * Infragistics.Web.ClientUI Scroll 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * jquery-1.4.4.js
 * jquery.ui.core.js
 * jquery.ui.widget.js
 */
( function (a) {
    var c = "data-scroll", k = function (q) {
        try {
            q.preventDefault();
            q.stopPropagation()
        } catch (r) {
        }
    }, b = function (q) {
        return q === null || q === undefined || ( typeof q === "number" && isNaN(q))
    }, h = function (q) {
        return isNaN(q = parseInt(q, 10)) ? 0 : q
    }, f = function (r, q) {
        return h(r.css(q))
    }, d = function (q) {
        return q === "draggable"
    }, l = function (q) {
        return q === "show"
    }, o = function (q) {
        return isNaN(q) || q < 5
    }, m = function (q) {
        q = q.originalEvent;
        q = q ? q.touches : null;
        return (q && q.length === 1) ? q[0] : null
    }, j = function (q) {
        q = q.target;
        return q.nodeName === "#text" ? q.parentNode : q
    }, g = function (q, r) {
        return q && (q.has(r).length > 0 || q[0] === r)
    }, n = function (q) {
        return (q && q[0].parentNode) ? q : null
    }, i = function (q) {
        if (n(q)) {
            q.remove()
        }
    }, e = function (q) {
        setTimeout(function () {
            var r = window.Modernizr;
            if (!r || r.touch) {
                a("body").find("[" + c + "]").each(function () {
                    var s = a(this), t = s.data("igScroll");
                    if ((!t || !t.evts) && !s.data("igScroll") && !s.data("scrollview")) {
                        s.igScroll({
                            _find: true
                        })
                    }
                })
            }
        }, q === true ? 1000 : 100)
    };
    a.widget("ui.igScroll", {
        options: {
            thumbOpacityDrag: null,
            thumbOpacity: null,
            cancelStart: null,
            oneDirection: null,
            direction: null,
            animateShowDuration: null,
            animateHideDuration: null,
            hideThumbsDelay: null,
            hideDragThumbsDelay: null,
            xInertia: null,
            yInertia: null,
            xThumb: null,
            yThumb: null,
            xLabel: null,
            yLabel: null,
            marginLeft: null,
            marginRight: null,
            marginTop: null,
            marginBottom: null,
            xScroller: null,
            yScroller: null
        },
        events: {
            starting: null,
            started: null,
            scrolling: null,
            scrolled: null,
            stopped: null
        },
        scrollLeft: function (q) {
            if (b(q)) {
                return this._getScroll(true)
            }
            this._scroll(q);
            return this
        },
        scrollTop: function (q) {
            if (b(q)) {
                return this._getScroll()
            }
            this._scroll(null, q);
            return this
        },
        scrollWidth: function () {
            return this._getScroll(true, true)
        },
        scrollHeight: function () {
            return this._getScroll(false, true)
        },
        _create: function () {
            var u, r, t = this, q = t.element, s = t.options;
            if (s._find) {
                for (r in s) {
                    if (s.hasOwnProperty(r) && b(s[r])) {
                        if (b(u = q.attr("data-" + r))) {
                            u = q.attr("data-" + r.replace("S", "-s").replace("D", "-d").replace("O", "-o").replace("R", "-r").replace("T", "-t").replace("I", "-i").replace("B", "-b").replace("L", "-l").replace("H", "-h").replace("D", "-d"))
                        }
                        if (!b(u)) {
                            s[r] = u
                        }
                    }
                }
                s.direction = s.direction || q.attr(c)
            }
            u = a.ui.igScroll.defaults;
            for (r in u) {
                if (u.hasOwnProperty(r) && s[r] === null) {
                    s[r] = u[r]
                }
            }
            q.css("msTouchAction", "none");
            u = s.direction;
            t.dir = s.oneDirection && u !== "x" && u !== "y";
            t.evts = {
                MSPointerDown: function (v) {
                    var w = v.originalEvent;
                    if (!w || w.pointerType !== 2) {
                        return
                    }
                    v.target.msSetPointerCapture(t._pointer = w.pointerId);
                    t.evts.touchstart(v)
                },
                MSPointerMove: function (v) {
                    if (t._pointer) {
                        t._move(v)
                    }
                },
                MSPointerUp: function (v) {
                    if (!t._pointer) {
                        return
                    }
                    v.target.msReleasePointerCapture(t._pointer);
                    t.evts.touchend(v);
                    delete t._pointer
                },
                touchstart: function (v) {
                    delete t.skip;
                    var w = t._pointer ? v.originalEvent : m(v);
                    if (w) {
                        t.x = w.pageX;
                        t.y = w.pageY;
                        t.click = true;
                        if (t._isCancel(s)) {
                            k(v)
                        }
                    } else {
                        t._move(v, "start")
                    }
                },
                touchmove: function (v) {
                    t._move(v)
                },
                touchend: function (v) {
                    if (!t.click) {
                        t._move(v, "end")
                    } else {
                        if (t._isCancel(s)) {
                            a(j(v)).trigger("mousedown").trigger("mouseup").trigger("click")
                        }
                    }
                }
            };
            q.bind(t.evts)
        },
        _isCancel: function (q) {
            q = q.cancelStart;
            return q === true || (q === "ms" && this._pointer)
        },
        _createBar: function (t, u, F) {
            var q, C, r, z, A, w, v = 17, E = 5, D = 30, B = l(F), s = u ? "inline-block" : "block", x = "margin" + ( u ? "Top" : "Left"), y = u ? "height" : "width";
            if (B || d(F)) {
                q = a("<span />").css({
                    position: "absolute",
                    zIndex: f(t, "zIndex") + 2,
                    background: "transparent",
                    border: "0px",
                    opacity: 0,
                    display: "block"
                }).addClass("ui-widget").css(y, "1px").insertAfter(t);
                z = B ? E : D;
                C = a("<span />").css("position", "relative").css(y, z).css("display", "block").appendTo(q);
                if (B) {
                    C.css("background", "#101010")
                } else {
                    q.css("msTouchAction", "none");
                    C.addClass("ui-corner-all ui-state-hover");
                    r = C.css("borderTopColor");
                    z = u ? C[0].offsetHeight : C[0].offsetWidth;
                    A = a("<span />").css({
                        display: s,
                        borderStyle: "solid",
                        borderColor: r,
                        borderWidth: u ? "0px 1px 0px 0px" : "0px 0px 1px 0px"
                    }).addClass("ui-corner-" + ( u ? "left" : "top")).css(y, "100%").appendTo(C);
                    w = a("<span />").css("display", "block").css(x, Math.floor((z - v) / 2) + "px").addClass("ui-icon ui-icon-carat-1-" + ( u ? "w" : "n")).appendTo(A);
                    A = a("<span />").css("display", s).css(y, "100%").appendTo(C);
                    w = a("<span />").css("display", "block").css(x, Math.floor((z - v) / 2) + "px").addClass("ui-icon ui-icon-grip-dotted-" + ( u ? "vertical" : "horizontal")).appendTo(A);
                    A = a("<span />").css({
                        display: s,
                        borderStyle: "solid",
                        borderColor: r,
                        borderWidth: u ? "0px 0px 0px 1px" : "1px 0px 0px 0px"
                    }).addClass("ui-corner-" + ( u ? "right" : "bottom")).css(y, "100%").appendTo(C);
                    w = a("<span />").css("display", "block").css(x, Math.floor((z - v) / 2) + "px").addClass("ui-icon ui-icon-carat-1-" + ( u ? "e" : "s")).appendTo(A)
                }
                C.css(x, -(z + 1) + "px")
            }
            if (u) {
                this.barX = q;
                this.thumbX = C
            } else {
                this.barY = q;
                this.thumbY = C
            }
        },
        _bar: function (w, y) {
            var N, z, L, J, B, A, G, H, I, K, E = this.options, r = 2, t = h(y ? E.marginLeft : E.marginTop), u = h(y ? E.marginRight : E.marginBottom), C = 4, D = 15, q = y ? this.barX : this.barY, M = y ? E.xThumb : E.yThumb, x = y ? w[0].offsetWidth : w[0].offsetHeight, s = Math.max(x - t - u, C), F = Math.max(this._getScroll(y, true), C + t + u);
            if (!x || F - x < 1) {
                if (q) {
                    q.remove();
                    delete this.bar
                }
                return
            }
            if (q) {
                if (n(q)) {
                    return q
                }
                q.insertAfter(w)
            }
            if (!q) {
                this._createBar(w, y, M)
            }
            q = y ? this.barX : this.barY;
            if (!q) {
                return
            }
            J = y ? this.thumbX : this.thumbY;
            if (d(M) && J) {
                J.bind(this.evts)
            }
            G = ( y ? w[0].offsetHeight : w[0].offsetWidth) - r;
            z = f(w, "marginLeft") + ( y ? t : G);
            L = f(w, "marginTop") + ( y ? G : t);
            q.css({
                left: w.css("left"),
                top: w.css("top"),
                marginLeft: z + "px",
                marginTop: L + "px"
            });
            if (l(M)) {
                J.css(y ? "width" : "height", Math.floor(Math.max(x * x / F, D)) + "px")
            }
            K = y ? J[0].offsetWidth : J[0].offsetHeight;
            N = (F - s - t - u + r) / (s - K);
            if (y) {
                this.ratioX = N
            } else {
                this.ratioY = N
            }
            B = w.offset();
            A = q.offset();
            I = A.top - B.top - ( y ? G : t);
            H = A.left - B.left - ( y ? t : G);
            if (Math.abs(I) > 0) {
                q.css("marginTop", (L - I + f(w, "borderTopWidth")) + "px")
            }
            if (Math.abs(H) > 0) {
                q.css("marginLeft", (z - H + f(w, "borderLeftWidth")) + "px")
            }
            return q
        },
        _scroller: function (r) {
            var s = this.options, q = s.direction;
            if (!this.evts || (r && q === "y") || (!r && q === "x")) {
                return
            }
            q = r ? s.xScroller : s.yScroller;
            if (q && typeof q === "string") {
                q = a(q)[0];
                if (r) {
                    s.xScroller = q
                } else {
                    s.yScroller = q
                }
            }
            if (q && q.length) {
                q = q[0]
            }
            return q || this.element[0]
        },
        _getScroll: function (r, s) {
            var q = this._scroller(r);
            if (!q) {
                return 0
            }
            return r ? ( s ? q.scrollWidth : q.scrollLeft) : ( s ? q.scrollHeight : q.scrollTop)
        },
        _scroll: function (r, s) {
            var q = this._scroller(true);
            if (q && !this.inBarY && this.dir !== "y" && !b(r)) {
                q.scrollLeft = r;
                if (this.thumbX) {
                    this.thumbX.css("marginLeft", Math.floor(q.scrollLeft / this.ratioX) + "px")
                }
            }
            q = this._scroller();
            if (q && !this.inBarX && this.dir !== "x" && !b(s)) {
                q.scrollTop = s;
                if (this.thumbY) {
                    this.thumbY.css("marginTop", Math.floor(q.scrollTop / this.ratioY) + "px")
                }
            }
        },
        _vis: function () {
            return this.evts && this.element[0].offsetWidth
        },
        _inertia: function () {
            var z = this, q = {
                owner: z
            }, t = 0.97, C = 0.8, F = z.speedX, G = z.speedY, u = z.options, D = 17, v = Math.max(Math.min(parseFloat(u.xInertia), t), 0), w = Math.max(Math.min(parseFloat(u.yInertia), t), 0), A = ( F ? F[0] + F[1] + F[2] : 0) * D, B = ( G ? G[0] + G[1] + G[2] : 0) * D, s = z._getScroll(true), E = z._getScroll(), r = function () {
                z.timer = setTimeout(function () {
                    delete z.timer;
                    q.deltaX = -Math.floor(A);
                    q.deltaY = -Math.floor(B);
                    if (!z._vis() || !z._trigger("scrolling", null, q)) {
                        z._end();
                        return
                    }
                    s += q.deltaX;
                    E += q.deltaY;
                    z._scroll(Math.floor(s), Math.floor(E));
                    z._trigger("scrolled", null, q);
                    B *= w;
                    A *= v;
                    if ((Math.abs(B) > C && E > 0) || (Math.abs(A) > C && s > 0)) {
                        r()
                    } else {
                        z._end()
                    }
                }, D * 3)
            };
            r()
        },
        _show: function (y) {
            var q, v = this, u = v.options, w = parseFloat(u.thumbOpacity), x = parseFloat(u.thumbOpacityDrag), t = y ? 0 : h(u.animateShowDuration), r = n(v.barX), s = n(v.barY);
            if (v.hiding) {
                v.hiding.stop(true);
                delete v.hiding
            }
            if (o(t)) {
                if (r) {
                    r.css("opacity", v.inBarX ? x : w)
                }
                if (s) {
                    s.css("opacity", v.inBarY ? x : w)
                }
                return
            }
            q = r || s;
            if (q) {
                v.showing = q.animate({
                    opacity: w
                }, {
                    duration: t,
                    complete: function () {
                        delete v.showing
                    },
                    step: function (z) {
                        if (r && s) {
                            s.css("opacity", z)
                        }
                    }
                })
            }
        },
        _hide: function (q) {
            var r = this;
            if (r.showing) {
                r.showing.stop(true);
                delete r.showing
            }
            setTimeout(function () {
                if (r.hiding || q) {
                    i(r.barX);
                    i(r.barY);
                    delete r.hiding;
                    r._fixSB()
                }
            }, 0)
        },
        _end: function () {
            var t = this, s = t.options, q = (t.thumbX && d(s.xThumb)) || (t.thumbY && d(s.yThumb)), r = h(s.animateHideDuration);
            t._trigger("stopped", null, {
                owner: t
            });
            if (t.skip || !t._vis()) {
                return t._hide(true)
            }
            q = h(q ? s.hideDragThumbsDelay : s.hideThumbsDelay);
            t.timerEnd = setTimeout(function () {
                if (!t.timer && t.timerEnd) {
                    if (o(r)) {
                        t._hide(true)
                    } else {
                        var u = n(t.barX), v = n(t.barY);
                        if (!u) {
                            u = v;
                            v = null
                        }
                        if (u) {
                            t.hiding = u.animate({
                                opacity: 0
                            }, {
                                duration: r,
                                complete: function () {
                                    t._hide()
                                },
                                step: function (w) {
                                    if (v) {
                                        v.css("opacity", w)
                                    }
                                    if (t.skip) {
                                        t.hiding.stop()
                                    }
                                }
                            })
                        }
                    }
                }
                delete t.timerEnd
            }, o(q) ? 5 : q)
        },
        _clear: function () {
            if (this.timer) {
                clearTimeout(this.timer);
                delete this.timer
            }
            if (this.timerEnd) {
                clearTimeout(this.timerEnd);
                delete this.timerEnd
            }
        },
        _fire: function (r, q, s, u) {
            return this._trigger(r, q, {
                owner: this,
                left: s,
                top: u
            })
        },
        _skip: function (z, A) {
            var q = this.options.direction, t = this._scroller(true) || 0, u = this._scroller() || 0, r = 0, v = 0, s = 0, w = 0;
            if (t) {
                v = t.clientWidth;
                w = t.scrollWidth;
                t = t.scrollLeft
            }
            if (u) {
                r = u.clientHeight;
                s = u.scrollHeight;
                u = u.scrollTop
            }
            if ((q === "y" || v >= w) && (q === "x" || r >= s)) {
                return true
            }
            if ((Math.abs(A) > Math.abs(z) || q === "y") && q !== "x") {
                return (A > 0 && !u) || (A < 0 && u + r >= s)
            }
            return (z > 0 && !t) || (z < 0 && t + v >= w)
        },
        _fixSB: function (q) {
            var t, r, s = this._on;
            if ((q && s) || (!s && !q)) {
                return
            }
            t = this._scroller();
            r = this._scroller(true);
            if (s) {
                if (t) {
                    t.style.overflowY = s.y
                }
                if (r) {
                    r.style.overflowX = s.x
                }
                delete this._on;
                return
            }
            s = this._on = {};
            if (t) {
                s.y = a(t).css("overflowY");
                t.style.overflowY = "hidden"
            }
            if (r) {
                s.x = a(r).css("overflowX");
                r.style.overflowX = "hidden"
            }
        },
        _move: function (v, u) {
            if (!this.evts) {
                return
            }
            var G, q = {
                owner: this
            }, L = (new Date()).getTime(), F = this, A = 3, D = F.x0, E = F.y0, H = F.speedX, I = F.speedY, C = F.top, B = F.left, z = F.inBarY, w = F.inBarX, r = F.barX, s = F.barY, K = !F.drag, t = F.element, M = F._pointer ? v.originalEvent : m(v), N = M ? M.pageX : 0, O = M ? M.pageY : 0, J = j(v);
            if (F.click && F._pointer && Math.abs(F.x - N) < 3 && Math.abs(F.y - O) < 3) {
                return
            }
            delete F.click;
            if (F.skip) {
                return
            }
            F._fixSB(true);
            F._clear();
            if (u || !M) {
                if (!F.skip && u === "end" && !K) {
                    if (F.inBarX || F.inBarY) {
                        F._end()
                    } else {
                        F._inertia()
                    }
                }
                delete F.drag;
                return
            }
            if (K) {
                F.skip = F._skip(N - F.x, O - F.y);
                if (F.skip) {
                    F._end()
                }
            } else {
                q.deltaX = F.x - N;
                q.deltaY = F.y - O
            }
            if (F.skip || !this._trigger(K ? "starting" : "scrolling", v, q)) {
                return
            }
            if (K) {
                G = n(r) || n(s);
                D = F.x0 = N;
                B = F.left = F._getScroll(true);
                delete F.speedX;
                r = F._bar(t, true);
                w = F.inBarX = g(r, J);
                E = F.y0 = O;
                C = F.top = F._getScroll();
                delete F.speedY;
                s = F._bar(t);
                z = F.inBarY = g(s, J);
                F._show(G || w || z)
            } else {
                N = F.x - q.deltaX;
                G = (N - F.x) / (L - F.time);
                if (Math.abs(G) > A) {
                    G = (G > 0) ? A : -A
                }
                if (!H) {
                    F.speedX = [0, 0, G]
                } else {
                    H[0] = H[1];
                    H[1] = H[2];
                    H[2] = G
                }
                O = F.y - q.deltaY;
                G = (O - F.y) / (L - F.time);
                if (Math.abs(G) > A) {
                    G = (G > 0) ? A : -A
                }
                if (!I) {
                    F.speedY = [0, 0, G];
                    if (F.dir) {
                        F.dir = (Math.abs(G) >= Math.abs(F.speedX[2])) ? "y" : "x"
                    }
                } else {
                    I = F.speedY = [0, 0, G];
                    I[0] = I[1];
                    I[1] = I[2];
                    I[2] = G
                }
            }
            F.drag = true;
            F.x = N;
            F.y = O;
            F.time = L;
            k(v);
            N = w ? B + Math.floor((N - D) * F.ratioX) : B - N + D;
            O = z ? C + Math.floor((O - E) * F.ratioY) : C - O + E;
            F._scroll(N, O);
            this._trigger(K ? "started" : "scrolled", v)
        },
        destroy: function () {
            if (this.evts) {
                this.element.unbind(this.evts);
                delete this.evts;
                if (this.showing) {
                    this.showing.stop(true)
                }
                if (this.hiding) {
                    this.hiding.stop(true)
                }
                this._clear();
                i(this.barX);
                i(this.barY);
                a.Widget.prototype.destroy.apply(this, arguments)
            }
            return this
        }
    });
    a.extend(a.ui.igScroll, {
        version: "12.2.20122.1021"
    });
    a.ui.igScroll.defaults = {
        thumbOpacityDrag: 1,
        thumbOpacity: 0.5,
        animateShowDuration: 300,
        animateHideDuration: 500,
        hideThumbsDelay: 200,
        hideDragThumbsDelay: 1000,
        xInertia: 0.8,
        yInertia: 0.85,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        marginBottom: 2,
        xThumb: "show",
        yThumb: "show"
    };
    try {
        a(":jqmData(role='page')").live("pageshow", e)
    } catch (p) {
        e(true);
        a(document).bind("igcontrolcreated", function (r, q) {
            q.owner.scrollContainer().igScroll({
                _find: true
            })
        })
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