﻿/*
 * Infragistics.Web.ClientUI Grid Column Resizing 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */
if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}

(function (a) {

    a.widget("ui.igGridResizing", {

        options: {
            allowDoubleClickToResize: true,
            deferredResizing: false,
            columnSettings: [
                {
                    columnKey: null,
                    columnIndex: null,
                    allowResizing: true,
                    minimumWidth: 20,
                    maximumWidth: null
                }
            ],
            handleTreshold: 5
        },

        css: {
            columnResizeLine: "ui-iggrid-resize-line",
            resizingHandleCursor: "ui-iggrid-resizing-handle-cursor",
            resizingHandle: "ui-iggrid-resizing-handle"
        },

        events: {
            columnResizing: "columnResizing",
            columnResized: "columnResized"
        },

        _createWidget: function (c, b) {
            this.options.columnSettings = [];
            a.Widget.prototype._createWidget.apply(this, arguments)
        },

        _create: function () {
        },

        _setOption: function (b, c) {
            throw new Error(a.ig.Grid.locale.optionChangeNotSupported + " " + b)
        },

        destroy: function () {
            this._clearResizingHandles();
            this.grid.element.unbind(".resizing");
            a.Widget.prototype.destroy.call(this);
            return this
        },

        resize: function (b, d) {
            var c;
            if (typeof b === "number") {
                c = b
            } else {
                a.each(this.grid._visibleColumns(), function (f, e) {
                    if (e.key === b) {
                        c = f
                    }
                })
            }
            if (d === undefined || d === null) {
                this._autoResize(c, false, null)
            } else {
                this._resizeColumn(c, d, false, null)
            }
        },

        _dataRendered: function () {
        },

        _headerCellRendered: function (b, c) {
        },

        _headerRendered: function (b, c) {
            this._renderResizingHandles()
        },

        _columnsCollectionModified: function () {
            this._renderResizingHandles()
        },

        _renderResizingHandles: function () {
            var b = this, c, e = this.grid._visibleColumns(), d;
            this._clearResizingHandles();
            if (e.length === 0) {
                return
            }
            if (this.grid._isMultiColumnGrid) {
                d = this.grid.headersTable().find("> thead > tr th").not("[data-skip=true]").not("[data-isheadercell=true]");
                this._populateMultiColumnHeadersLevel0();
                d.each(function (g) {
                    var f, h = a(this);
                    f = b._renderResizingHandle(h);
                    b._bindMultipleResizingHandle(h, f.find("span"))
                });
                c = a(this.grid._headerCells)
            } else {
                c = this.grid.headersTable().find("> thead > tr").eq(0).children("th").not("[data-skip=true]")
            }
            c.each(function (i) {
                var f, h, j = a(this), g = e[i];
                if (g === null || g === undefined) {
                    return true
                }
                h = b._findColumnSettingsByKey(g.key);
                if (h.allowResizing) {
                    f = b._renderResizingHandle(j);
                    b._bindResizingHandle(j, f.find("span"), g)
                }
            })
        },

        _renderResizingHandle: function (e) {
            var c, b, d;
            if (!this._resizingHandles) {
                this._resizingHandles = []
            }
            c = a("<div data-resizinghandle='true' />").css("position", "relative").css("width", "100%").css("height", "0px").css("top", "0px").css("left", "0px").prependTo(e);
            b = a("<a href='#' />").attr("title", "").prependTo(c);
            if (a.browser.msie && a.browser.version.slice(0, 1) === "9") {
                b.addClass(this.css.resizingHandleCursor)
            }
            d = a("<span data-nonpaddedindicator='right'></span>").attr("title", "").css("position", "absolute").css("margin-right", -parseInt(e.css("padding-right"), 10) + "px").css("right", "0px").css("width", this.options.handleTreshold + "px").addClass(this.css.resizingHandleCursor).addClass(this.css.resizingHandle).appendTo(b);
            this._resizingHandles.push(c);
            return b
        },

        _populateMultiColumnHeadersLevel0: function () {
            var d, e, h = this, b = this.grid._oldCols, c = b.length, k = a(this.grid._headerCells), f = [], g, l = this.grid._visibleColumns();
            for (d = 0; d < c; d++) {
                if (b[d].level === 0) {
                    f.push(b[d])
                } else {
                    for (e = 0; e < b[d].children.length; e++) {
                        f.push(b[d].children[e])
                    }
                }
            }
            g = f.length;
            k.each(function (m) {
                var n = a(this), i = l[m], j;
                if (i === null || i === undefined) {
                    return true
                }
                j = h._findColumnSettingsByKey(i.key);
                if (j.allowResizing) {
                    for (d = 0; d < f.length; d++) {
                        if (f[d].key === i.key) {
                            break
                        }
                    }
                    if (d < g) {
                        f[d].allowResizing = true;
                        f[d].visibleIndex = m;
                        f[d].settings = j
                    }
                    n.col = f[d]
                }
            })
        },

        _bindMultipleResizingHandle: function (b, c) {
            var f = this, e = b.attr("data-mch-id"), d;
            d = this.grid._getMultiHeaderColumnById(e);
            c.mouseWrapper({
                distance: 5,
                start: function (g) {
                    return f._startResizing(b)
                },
                drag: function (g) {
                    return f._doResizingMultiColumnHeader(g.originalEvent, b, d)
                },
                stop: function (g) {
                    return f._stopResizingMiltiColumnHeader(g.originalEvent, b, d)
                }
            }).bind("dblclick.resizing",function (g) {
                    f._handleMouseMultiColumnHeaderDbClick(g, b, d)
                }).bind("click.resizing", function (g) {
                    g.preventDefault();
                    g.stopPropagation()
                })
        },

        _bindResizingHandle: function (e, b, c) {
            var d = this;
            b.mouseWrapper({
                distance: 5,
                start: function (f) {
                    return d._startResizing(e)
                },
                drag: function (f) {
                    return d._doResizing(f.originalEvent, e, c)
                },
                stop: function (f) {
                    return d._stopResizing(f.originalEvent, e, c)
                }
            }).bind("dblclick.resizing",function (f) {
                    d._handleMouseDbClick(f, e, c)
                }).bind("click.resizing", function (f) {
                    f.preventDefault();
                    f.stopPropagation()
                })
        },

        _clearResizingHandles: function () {
            var b;
            if (this._resizingHandles) {
                for (b = 0; b < this._resizingHandles.length; b++) {
                    this._resizingHandles[b].remove()
                }
                this._resizingHandles = []
            }
        },

        _handleMouseDbClick: function (c, d, b) {
            if (!this.options.allowDoubleClickToResize) {
                return
            }
            this._autoResize(a.inArray(b, this.grid._visibleColumns()), true, c)
        },

        _handleMouseMultiColumnHeaderDbClick: function (f, b, e) {
            var g, c = e.children, d = c.length;
            if (!this.options.allowDoubleClickToResize) {
                return
            }
            for (g = 0; g < d; g++) {
                if (c[g].allowResizing === true) {
                    this._autoResize(c[g].visibleIndex, true, f)
                }
            }
        },

        _autoResize: function (c, e, d) {
            var j, b = [], g = 0, h, f;
            j = this.grid.element.find("> tbody > tr").not("[data-container=true]").not("[data-grouprow=true]");
            for (f = 0; f < j.length; f++) {
                b.push(j.eq(f).children("td").not("[data-skip=true]").not(".ui-iggrid-rowselector-class").not(".ui-iggrid-expandcolumn").eq(c))
            }
            if (b.length > 0) {
                h = a("<div></div>").css({
                    position: "absolute",
                    visibility: "hidden",
                    height: "auto",
                    width: "auto",
                    left: -1000,
                    top: -1000,
                    "font-family": b[0].css("fontFamily"),
                    "font-size": b[0].css("fontSize"),
                    "font-size-adjust": b[0].css("fontSizeAdjust"),
                    "font-stretch": b[0].css("fontStretch"),
                    "font-style": b[0].css("fontStyle"),
                    "font-variant": b[0].css("fontVariant"),
                    "font-weight": b[0].css("fontWeight")
                }).appendTo(a(document.body));
                for (f = 0; f < b.length; f++) {
                    h.html(b[f][0].innerHTML);
                    g = Math.max(g, h[0].offsetWidth)
                }
                g = g + b[0].outerWidth() - b[0].width();
                if (a.browser.msie) {
                    g += 1
                }
                h.remove();
                return this._resizeColumn(c, g, e, d)
            }
        },

        _cancelHoveringEffects: function (b) {
            var c = this.grid.element.closest(".ui-iggrid-root").data("igGrid");
            if (c === undefined) {
                c = this.grid
            }
            c._cancelHoveringEffects = b
        },

        _startResizing: function (e) {
            var b = a(document.body), d, c;
            this._resizing = true;
            this._cancelHoveringEffects(true);
            a(document.activeElement).blur();
            b.addClass(this.css.resizingHandleCursor);
            if (this.grid._isMultiColumnGrid) {
                c = e.offset().top - this._gridContainerPositioningOffset().top
            }
            d = e.offset().top + this._gridContainerPositioningOffset().top;
            if (this.grid.options.height !== null && this.grid.options.showHeader === true && this.grid.options.fixedHeaders === false) {
                d += this.grid.scrollContainer().scrollTop()
            }
            this._resizeLine = a("<div></div>").addClass(this.css.columnResizeLine).data("efh", "1").css({
                height: this._calculateGridResizableHeight(c),
                top: d,
                visibility: "hidden"
            }).appendTo(this.grid.container());
            return true
        },

        _doResizingMultiColumnHeader: function (h, b, g) {
            var j, r, p, l, k, q, o, n, m, e = g.children, f = e.length, d = null, c;
            r = h.pageX - b.offset().left;
            if (r < 0) {
                r = 0
            }
            m = b.offset().top - this.grid.headersTable().offset().top;
            if (!this.options.deferredResizing) {
                for (j = f - 1; j >= 0; j--) {
                    if (e[j].allowResizing && !e[j].hidden) {
                        d = e[j];
                        d.resized = !d.resized;
                        if (d.resized) {
                            break
                        }
                    }
                }
                if (d !== null && !d.hidden) {
                    c = a("#" + this.grid.element[0].id + "_" + d.key);
                    r = c[0].offsetWidth - b[0].offsetWidth + r;
                    q = this._resizeColumn(d.visibleIndex, r, true, h, d.visibleIndex)
                }
                if (!q) {
                    return true
                }
                if (!q.canceled) {
                    this._resizeLine.css("height", this._calculateGridResizableHeight(m));
                    this._resizeLine.css({
                        left: b.offset().left + b.outerWidth() + this._gridContainerPositioningOffset().left,
                        visibility: "visible"
                    })
                }
            } else {
                k = Infinity;
                l = 0;
                n = b.offset().left;
                o = {
                    min: n,
                    max: n
                };
                for (j = 0; j < f; j++) {
                    d = e[j];
                    if (d.hidden) {
                        continue
                    }
                    if (d.allowResizing) {
                        p = this._getRange(this.options.columnSettings[d.visibleIndex]);
                        o.min += p.min;
                        if (p.max === Infinity) {
                            o.max = Infinity
                        } else {
                            if (o.max !== Infinity) {
                                o.max += p.max
                            }
                        }
                    } else {
                        o.min += a("#" + this.grid.element[0].id + "_" + d.key)[0].offsetWidth
                    }
                }
                this._resizeLine.css("height", this._calculateGridResizableHeight(m));
                this._resizeLine.css({
                    left: this._coerceRange(o, h.pageX) + this._gridContainerPositioningOffset().left,
                    visibility: "visible"
                })
            }
            return true
        },

        _doResizing: function (d, i, b) {
            var j, h, c = a.inArray(b, this.grid._visibleColumns()), g, f, e;
            if (!this.options.deferredResizing) {
                j = d.pageX - i.offset().left;
                if (j < 0) {
                    j = 0
                }
                if (this.grid._isMultiColumnGrid) {
                    e = i.offset().top - this.grid.headersTable().offset().top
                }
                h = this._resizeColumn(c, j, true, d);
                if (!h.canceled) {
                    this._resizeLine.css("height", this._calculateGridResizableHeight(e));
                    this._resizeLine.css({
                        left: i.offset().left + i.outerWidth() + this._gridContainerPositioningOffset().left,
                        visibility: "visible"
                    })
                }
            } else {
                g = this._getRange(this.options.columnSettings[c]);
                f = i.offset().left;
                g.min += f;
                g.max += f;
                this._resizeLine.css({
                    left: this._coerceRange(g, d.pageX) + this._gridContainerPositioningOffset().left,
                    visibility: "visible"
                })
            }
            return true
        },

        _stopResizingMiltiColumnHeader: function (j, l, h) {
            var k, d, c, m = 0, n, b, e, f, g = 0;
            if (this.options.deferredResizing) {
                n = j.pageX - l.offset().left;
                e = h.children;
                f = e.length;
                for (k = 0; k < f; k++) {
                    if (e[k].allowResizing === false) {
                        continue
                    }
                    g++
                }
                if (g > 0) {
                    b = parseInt((n / g), 10);
                    for (k = 0; k < f; k++) {
                        d = e[k];
                        if (d.allowResizing === false) {
                            m += a("#" + this.grid.element[0].id + "_" + d.key)[0].offsetWidth;
                            continue
                        }
                        if (k === f - 1) {
                            b = n - m
                        }
                        m += b;
                        if (d !== null) {
                            c = a("#" + this.grid.element[0].id + "_" + d.key);
                            this._resizeColumn(d.visibleIndex, b, true)
                        }
                    }
                }
            }
            a("body").removeClass(this.css.resizingHandleCursor);
            this._resizing = false;
            this._cancelHoveringEffects(false);
            this._resizeLine.remove();
            this._resizeLine = undefined;
            return true
        },

        _stopResizing: function (d, e, b) {
            var f, c = a.inArray(b, this.grid._visibleColumns());
            if (this.options.deferredResizing) {
                f = d.pageX - e.offset().left;
                f = this._coerceRange(this._getRange(this.options.columnSettings[c]), f);
                this._resizeColumn(c, f, true, d)
            }
            a("body").removeClass(this.css.resizingHandleCursor);
            this._resizing = false;
            this._cancelHoveringEffects(false);
            this._resizeLine.remove();
            this._resizeLine = undefined;
            return true
        },

        _resizeColumn: function (f, F, m, x, D) {
            var g = this.grid._visibleColumns()[f].key, r = this.grid.headersTable(), q, s, p, h = this.options.columnSettings, j, o, n, b = [], c = [], B = [], v = [], t, I, C, G, J, e, H, y, E, z, A, l, d, w, k, u = true;
            if (this.grid._isMultiColumnGrid) {
                q = a(this.grid._headerCells);
                s = a(q[f])[0].offsetWidth
            } else {
                q = r.find("> thead > tr").first().children("th").not("[data-skip=true]");
                s = q.get(f).offsetWidth
            }
            p = r.find("> colgroup > col").not("[data-skip=true]");
            h = this.options.columnSettings;
            j = p.length;
            o = p[f].style.width;
            n = /%$/.test(o);
            if (m) {
                w = this._trigger(this.events.columnResizing, x, {
                    owner: this,
                    columnIndex: f,
                    columnKey: g,
                    desiredWidth: F
                });
                if (!w) {
                    return {
                        canceled: true,
                        originalWidth: F,
                        newWidth: F
                    }
                }
            }
            y = this._getRange(h[f]);
            F = this._coerceRange(y, F);
            F = Math.floor(F);
            if (F === y.min || F === y.max) {
                u = false
            }
            if (this.grid._isMultiColumnGrid) {
                for (t = 0; t < j; t++) {
                    b[t] = p[t].style.width;
                    c[t] = q[t][0].offsetWidth
                }
            } else {
                for (t = 0; t < j; t++) {
                    b[t] = p[t].style.width;
                    c[t] = q[t].offsetWidth
                }
            }
            if (n) {
                I = s - F;
                C = I < 0;
                z = [];
                A = 0;
                G = 0;
                if (D === undefined || D === null) {
                    D = 0
                }
                while (A < j - 1 - D && ((C && I < -0.05) || (!C && I > 0.05))) {
                    H = I / (j - 1);
                    for (t = D; t < j; t++) {
                        if (t !== f && !z[t]) {
                            if (C) {
                                J = Math.max(H, I)
                            } else {
                                J = Math.min(H, I)
                            }
                            c[t] += J;
                            y = this._getRange(h[t]);
                            e = this._coerceRange(y, c[t]);
                            if (Math.abs(c[t] - e) > 5e-06) {
                                J -= c[t] - e;
                                c[t] = e;
                                z[t] = true;
                                A++
                            }
                            G += J;
                            I -= J
                        }
                    }
                }
                c[f] -= G;
                E = 0;
                for (t = 0; t < j; t++) {
                    E += c[t]
                }
                for (t = 0; t < j; t++) {
                    B[t] = 100 * c[t] / E
                }
                for (t = 0; t < j; t++) {
                    v[t] = B[t] + "%";
                    this.grid._visibleColumns()[t].width = v[t]
                }
                l = c[f];
                this._applyToEachGridCOL(function (K, i) {
                    i.css("width", v[K])
                })
            } else {
                d = true;
                for (t = 0; t < j; t++) {
                    if (t === f) {
                        v[t] = F + "px";
                        l = F;
                        this.grid._visibleColumns()[t].width = v[t]
                    } else {
                        v[t] = b[t];
                        d = d && parseInt(b[t], 10) > 0
                    }
                }
                this._applyToEachGridCOL(function (K, i) {
                    i.css("width", v[K])
                });
                k = this.grid._calculateContainerWidth(false);
                if (d) {
                    if (this.grid.options.width && parseInt(this.grid.options.width, 10) > 0) {
                        this.grid._updateGridContentWidth();
                        a("#" + this.grid.element[0].id + "_horizontalScrollContainer").children("div").css("width", k)
                    } else {
                        this.grid._setContainerWidth(this.grid.element[0].id + "_container");
                        if (this.grid.options.rowVirtualization || this.grid.options.virtualization === true) {
                            a("#" + this.grid.element[0].id + "_headers_v").css("width", k + this.grid._scrollbarWidth()).css("max-width", k + this.grid._scrollbarWidth());
                            a("#" + this.grid.element[0].id + "_displayContainer").css("width", k).css("max-width", k);
                            a("#" + this.grid.element[0].id + "_virtualContainer > colgroup > col").first().attr("width", k)
                        }
                    }
                }
            }
            if (m) {
                this._trigger(this.events.columnResized, x, {
                    owner: this,
                    columnIndex: f,
                    columnKey: g,
                    originalWidth: s,
                    newWidth: l
                })
            }
            return {
                canceled: false,
                originalWidth: s,
                newWidth: l,
                isResized: u
            }
        },

        _applyToEachGridCOL: function (b) {
            if (this.grid.options.showHeader) {
                this.grid.headersTable().find("> colgroup > col").not("[data-skip=true]").each(function (c) {
                    b(c, a(this))
                })
            }
            if ((this.grid.options.fixedHeaders === true && this.grid.options.height !== null) || this.grid.options.showHeader === false) {
                this.grid.element.find("> colgroup > col").not("[data-skip=true]").each(function (c) {
                    b(c, a(this))
                })
            }
            if (this.grid.options.fixedFooters === true && this.grid.options.height !== null) {
                this.grid.footersTable().find("> colgroup > col").not("[data-skip=true]").each(function (c) {
                    b(c, a(this))
                })
            }
        },

        _getRange: function (b) {
            var d = b.minimumWidth, c = b.maximumWidth;
            d = isNaN(d) ? 0 : d;
            d = Math.max(0, d);
            c = isNaN(c) ? Infinity : c;
            return {
                min: d,
                max: c
            }
        },

        _coerceRange: function (b, c) {
            c = Math.max(b.min, c);
            c = Math.min(b.max, c);
            return c
        },

        _gridContainerPositioningOffset: function () {
            var b = this.grid.container(), d = b.offsetParent(), e = b.position(), c = b.offset(), g, f;
            if (d.is("body")) {
                g = 0;
                f = 0
            } else {
                g = d.scrollTop();
                f = d.scrollLeft()
            }
            return {
                top: g + e.top - c.top,
                left: f + e.left - c.left
            }
        },

        _calculateGridResizableHeight: function (h) {
            var g, b, f, c, i, d = this.grid.options.virtualization === true || this.grid.options.rowVirtualization === true || this.grid.options.columnVirtualization === true, e = this.grid.options.height !== null || this.grid.options.width !== null;
            if (d) {
                g = a("#" + this.grid.element[0].id + "_displayContainer").height()
            } else {
                if (e) {
                    g = this.grid.scrollContainer().height()
                } else {
                    g = this.grid.element.height()
                }
            }
            if (d || e) {
                f = this.grid.headersTable();
                c = this.grid.footersTable();
                if (this.grid.options.fixedHeaders === true && this.grid.options.showHeader === true) {
                    if (f.length !== 0 && this.grid.element[0].id !== f[0].id) {
                        g += f.height()
                    }
                    b = f.children("#" + this.grid.element[0].id + "_caption");
                    if (b.length !== 0) {
                        if (!a.browser.mozilla) {
                            g -= b.outerHeight(true)
                        }
                    }
                }
                i = a("#" + this.element[0].id + "_hscroller_container");
                if (i.is(":visible")) {
                    g += i.height()
                }
                if (this.grid.options.fixedFooters === true && this.grid.options.showFooter === true && c.length !== 0 && this.grid.element[0].id !== c[0].id) {
                    g += c.height()
                }
            }
            if (h) {
                g -= h
            }
            return g
        },

        _findColumnSettingsByKey: function (c) {
            var b;
            for (b = 0; b < this.options.columnSettings.length; b++) {
                if (this.options.columnSettings[b].columnKey === c) {
                    return this.options.columnSettings[b]
                }
            }
        },

        _initDefaultSettings: function () {
            var g = [], f, b = this.options.columnSettings, d, e, c;
            if (this.grid.options.columns && this.grid.options.columns.length > 0) {
                for (d = 0; d < this.grid.options.columns.length; d++) {
                    g[d] = {
                        columnIndex: d,
                        columnKey: this.grid.options.columns[d].key,
                        allowResizing: true,
                        minimumWidth: 20
                    }
                }
            }
            for (d = 0; d < b.length; d++) {
                c = false;
                for (e = 0; e < g.length; e++) {
                    if (g[e].columnKey === b[d].columnKey || g[e].columnIndex === b[d].columnIndex) {
                        c = g[e].columnKey === b[d].columnKey;
                        break
                    }
                }
                if (e === g.length) {
                    continue
                }
                for (f in b[d]) {
                    if (b[d].hasOwnProperty(f) && f !== "columnIndex" && f !== "columnKey") {
                        g[e][f] = b[d][f]
                    }
                }
            }
            this.options.columnSettings = g
        },

        _injectGrid: function (b, c) {
            this.grid = b;
            this._initDefaultSettings();
            this.grid.element.bind("iggridheadercellrendered.resizing", a.proxy(this._headerCellRendered, this));
            this.grid.element.bind("iggridheaderrendered.resizing", a.proxy(this._headerRendered, this));
            this.grid.element.bind("iggridcolumnscollectionmodified.resizing", a.proxy(this._columnsCollectionModified, this))
        }

    });

    a.extend(a.ui.igGridResizing, {
        version: "12.2.20122.1021"
    })

}(jQuery));