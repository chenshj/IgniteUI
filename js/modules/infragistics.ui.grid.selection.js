﻿/*
 * Infragistics.Web.ClientUI Grid Selection (and Keyboard navigation) 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.mobile-1.0.1.js (for touch only)
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 *	modernizr.js
 */
if (typeof jQuery !== "function") {
    throw new Error("jQuery is undefined")
}

(function (a) {

    a.widget("ui.igGridSelection", {

        css: {
            selectedCell: "ui-iggrid-selectedcell ui-state-active",
            selectedRow: "ui-iggrid-selectedrow ui-state-active",
            activeCell: "ui-iggrid-activecell ui-state-focus",
            activeRow: "ui-iggrid-activerow ui-state-focus"
        },

        options: {
            multipleSelection: false,
            mouseDragSelect: true,
            mode: "row",
            activation: true,
            wrapAround: true,
            skipChildren: true,
            multipleCellSelectOnClick: false,
            touchDragSelect: true
        },

        events: {
            rowSelectionChanging: "rowSelectionChanging",
            rowSelectionChanged: "rowSelectionChanged",
            cellSelectionChanging: "cellSelectionChanging",
            cellSelectionChanged: "cellSelectionChanged",
            activeCellChanging: "activeCellChanging",
            activeCellChanged: "activeCellChanged",
            activeRowChanging: "activeRowChanging",
            activeRowChanged: "activeRowChanged"
        },

        _create: function () {
            this._isMouseDown = false;
            this._isDrag = false;
            this._registeredEvents = false;
            this.y_exclude_current = 0;
            this.x_exclude_current = 0
        },

        _setOption: function (b, c) {
            a.Widget.prototype._setOption.apply(this, arguments);
            if (b === "mode") {
                throw new Error(a.ig.Grid.locale.optionChangeNotSupported + " " + b)
            }
        },

        _dataRendered: function () {
            if (!this._registeredEvents) {
                this._registerEvents();
                this._registeredEvents = true
            } else {
                this._registerTbodyEvents()
            }
            if (this._hc === undefined) {
                this._hc = this.grid.container().closest(".ui-iggrid-root").length > 0;
                if (this._hc === false) {
                    this._hc = this.grid.element.hasClass("ui-iggrid-root")
                }
            }
            if (this._hc) {
                this._hgrid = this.grid.element.closest(".ui-iggrid-root")
            }
            if (this._groupBy === undefined) {
                this._groupBy = this.grid.container().find(".ui-iggrid-groupbyarea").length > 0
            }
            this._refresh(true);
            if (!this._initialSelectionInitialized) {
                if (this.options.selectedRowIndex !== undefined && this.options.selectedRowIndex !== null && this.options.selectedRowIndex >= 0) {
                    if (this.options.selectedCellIndex === undefined) {
                        this.selectRow(this.options.selectedRowIndex)
                    } else {
                        if (this.options.selectedCellIndex !== undefined && this.options.selectedRowIndex !== null && this.options.selectedCellIndex >= 0) {
                            this.selectCell(this.options.selectedRowIndex, this.options.selectedCellIndex)
                        }
                    }
                }
                this._initialSelectionInitialized = true
            }
            this.grid._startRowIndex = this.grid._startRowIndex || 0
        },

        _refresh: function (b) {
            if (!b || !this._firstCell) {
                this._firstCell = this.grid.element.children("tbody").children("tr:visible:nth-child(1) td:nth-child(1)");
                if (!this._firstCell) {
                    this._firstRow = this.grid.element.children("tbody").children("tr:visible:nth-child(1)")
                }
            }
            if (!b || !this._firstRow || !this._rowCount) {
                this._firstRow = this.grid.element.children("tbody").children("tr:visible:nth-child(1)");
                if (this.grid.options.virtualization || this.grid.options.rowVirtualization) {
                    this._rowCount = this.grid.dataSource.dataView().length
                } else {
                    this._rowCount = this.grid.element.find("tbody tr").length
                }
                this._length = this._firstRow ? this._firstRow.children().length : 0
            }
            this.x_exclude_current = this._calcExtraCells()
        },

        _registerTbodyEvents: function () {
            var b = this.grid.element.find("tbody");
            if (!this._mouseDownHandler) {
                this._mouseDownHandler = a.proxy(this._mouseDown, this);
                this._selectStartHandler = a.proxy(this._selectStart, this);
                this._mouseMoveHandler = a.proxy(this._dragSelectChange, this);
                this._mouseUpHandler = a.proxy(this._selectInternal, this);
                if (a.mobile !== undefined && typeof Modernizr === "object" && Modernizr.touch === true) {
                    this._vmouseMoveHandler = a.proxy(this._vMouseMove, this);
                    this._touchEvents = true
                }
            } else {
                if (this._vmouseMoveHandler) {
                    b.unbind({
                        vmousedown: this._mouseDownHandler,
                        vmousemove: this._vmouseMoveHandler,
                        vmouseup: this._mouseUpHandler,
                        selectstart: this._selectStartHandler
                    })
                } else {
                    b.unbind({
                        mousedown: this._mouseDownHandler,
                        mousemove: this._mouseMoveHandler,
                        mouseup: this._mouseUpHandler,
                        selectstart: this._selectStartHandler
                    })
                }
            }
            if (this._vmouseMoveHandler) {
                b.bind({
                    vmousedown: this._mouseDownHandler,
                    vmousemove: this._vmouseMoveHandler,
                    vmouseup: this._mouseUpHandler,
                    selectstart: this._selectStartHandler
                })
            } else {
                b.bind({
                    mousedown: this._mouseDownHandler,
                    mousemove: this._mouseMoveHandler,
                    mouseup: this._mouseUpHandler,
                    selectstart: this._selectStartHandler
                })
            }
        },

        _registerEvents: function () {
            this._registerTbodyEvents();
            a(document).bind({
                mouseup: a.proxy(this._releaseMouse, this)
            });
            if (this.grid.options.virtualization) {
                a("#" + this.grid.element[0].id + "_scrollContainer").bind({
                    scroll: a.proxy(this._releaseMouse, this)
                })
            } else {
                a("#" + this.grid.element[0].id + "_scroll").bind({
                    scroll: a.proxy(this._releaseMouse, this)
                })
            }
            this._keyDownHandler = a.proxy(this._navigate, this);
            this._focusHandler = a.proxy(this._navigateFocus, this);
            this._markMouseDownHandler = a.proxy(this._markMouseDown, this);
            if (this.grid.options.virtualization || this.grid.options.rowVirtualization) {
                a("#" + this.grid.element[0].id + "_displayContainer_a").bind({
                    keydown: this._keyDownHandler,
                    focus: this._focusHandler
                })
            } else {
                this.grid.container().bind({
                    keydown: this._keyDownHandler,
                    focus: this._focusHandler
                })
            }
            if (this.options.multipleSelection === true) {
                this.grid.element.addClass("ui-iggrid-canceltextselection")
            }
        },

        _unregisterEvents: function () {
            this.grid.element.unbind("mousedown", this._mouseDownHandler);
            this.grid.element.unbind("selectstart", this._selectStartHandler);
            this.grid.element.unbind("mousemove", this._mouseMoveHandler);
            this.grid.element.unbind("mouseup", this._mouseUpHandler);
            this.grid.container().unbind("keydown", this._keyDownHandlerHandler);
            this.grid.container().unbind("focus", this._focusHandler);
            this.grid.container().unbind("mousedown", this._markMouseDownHandler);
            this.grid.element.unbind("iggriduisoftdirty", this._uiDirtyHandler);
            this.grid.element.unbind("ighierarchicalgridrowexpanded", this._rowExpandedHandler);
            this.grid.element.unbind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            delete this._uiDirtyHandler;
            this.grid.element.removeClass("ui-iggrid-canceltextselection")
        },

        _dragSelectChange: function (f) {
            var m = [], o, n, e, d, g, h, l, c, p, b, k = true, q = this.grid.options.virtualization || this.grid.options.rowVirtualization;
            if (f && this._suspend) {
                return
            }
            if (!this._prevX && !this._prevY) {
                this._prevX = f.clientX;
                this._prevY = f.clientY
            }
            if (Math.abs(this._prevX - f.clientX) < 5 && Math.abs(this._prevY - f.clientY) < 5) {
                return
            }
            this._prevX = f.clientX;
            this._prevY = f.clientY;
            if (this.options.mouseDragSelect === false || this.options.multipleSelection === false || this.options.mode === "row") {
                return
            }
            if (this._isMouseDown === true) {
                this._isDrag = true
            } else {
                return
            }
            if (this._isMouseDown !== true || this.options.mode !== "cell") {
                return
            }
            if (this._hc && f && f.target) {
                l = a(f.target).closest(".ui-iggrid-table");
                if (l.length > 0 && l.attr("id") !== this.grid.element.attr("id")) {
                    f.stopPropagation();
                    f.preventDefault();
                    return
                }
            }
            c = this._cellFromEvent(f);
            if (!c) {
                return
            }
            if (c && this.activeCell() && c.index === this.activeCell().index && c.rowIndex === this.activeCell().rowIndex) {
                return
            }
            k = this._trigger(this.events.cellSelectionChanging, f, {
                cell: c,
                selectedCells: this.grid._selectedCells,
                owner: this,
                manual: false
            });
            if (k) {
                if (this.options.activation === true) {
                    this._activateCell(c, f)
                }
                o = this._firstDragCell.rowIndex;
                n = this._firstDragCell.index + this._firstDragCell.element.parent().children("[data-skip=true]").length;
                e = c.rowIndex;
                d = c.index + this._firstDragCell.element.parent().children("[data-skip=true]").length;
                if (e < o) {
                    p = o;
                    o = e;
                    e = p
                }
                if (d < n) {
                    p = n;
                    n = d;
                    d = p
                }
                this.clearSelection(true);
                if (q) {
                    o -= this.grid._startRowIndex;
                    e -= this.grid._startRowIndex
                }
                for (g = o; g <= e; g++) {
                    for (h = n; h <= d; h++) {
                        b = a(this.grid.cellAt(h, g)).addClass(this.css.selectedCell);
                        this.grid._selectedCells.push(this._cellFromElement(b, g + this.grid._startRowIndex, h))
                    }
                }
                this._currentCells = m;
                this._trigger(this.events.cellSelectionChanged, f, {
                    cell: c,
                    selectedCells: this.grid._selectedCells,
                    owner: this,
                    manual: false
                })
            }
        },

        _vMouseMove: function (b) {
            if (this._touchDragStart === true) {
                b.which = 1;
                this._isMouseDown = true;
                this._dragSelectChange(b);
                b.preventDefault();
                b.stopPropagation()
            }
            return true
        },

        _cellFromEvent: function (c) {
            var d, b;
            if (this._touchEvents === true) {
                b = a(document.elementFromPoint(c.clientX, c.clientY))
            } else {
                b = a(c.originalEvent.originalTarget || c.originalEvent.srcElement)
            }
            d = b.is("td,th") ? b[0] : b.closest("td,th")[0];
            return this._cellFromElement(d)
        },

        _cellFromElement: function (f, j, d) {
            var b, h, i, c, g = null, k;
            b = a(f);
            h = b.parent();
            if (j === undefined || d === undefined) {
                c = b.index();
                i = h.index();
                if (this.grid.options.virtualization || this.grid.options.rowVirtualization || this.grid.options.columnVirtualization) {
                    if (this.grid._startRowIndex > 0) {
                        i += this.grid._startRowIndex
                    }
                    if (this.grid._startColIndex > 0) {
                        c += this.grid._startColIndex
                    }
                }
            } else {
                c = d;
                i = j
            }
            if (c === -1) {
                return
            }
            if (c - this.x_exclude_current < 0) {
                k = 0
            } else {
                if (c - this.x_exclude_current >= this.grid.options.columns.length) {
                    k = this.grid.options.columns.length - 1
                } else {
                    k = c - this.x_exclude_current
                }
            }
            if (this._hc === true && c - this.x_exclude_current < this.grid.options.columns.length) {
                k--
            }
            if (k >= 0 && this.grid.options.columns.length > k) {
                g = this.grid.options.columns[k].key
            }
            if (this.y_exclude_current !== undefined) {
                i -= this.y_exclude_current
            }
            if (this.x_exclude_current !== undefined) {
                c -= this.x_exclude_current
            }
            return {
                element: b,
                row: h,
                index: c,
                rowIndex: i,
                columnKey: g
            }
        },

        _mouseDown: function (b) {
            var d = (this.grid.options.virtualization || this.grid.options.rowVirtualization || this.grid.options.columnVirtualization), c;
            if (b && this._suspend) {
                return
            }
            if (b.target && a(b.target).hasClass("ui-iggrid-scrolldiv")) {
                return
            }
            if (b && b.which === 0) {
                b.which = 1;
                if (this.options.touchDragSelect === true) {
                    this._touchDragStart = true
                }
            }
            if (b && b.which !== 1) {
                return
            }
            if (this._hc && b && b.target) {
                c = a(b.target).closest(".ui-iggrid-table");
                if (c.length > 0 && c.attr("id") !== this.grid.element.attr("id")) {
                    return
                }
            }
            if (b.target && a(b.target).closest("td").attr("data-skip") === "true") {
                b.stopPropagation();
                b.preventDefault();
                a(b.target).trigger("iggridselectionmousedown");
                return
            }
            if (b.which === 2) {
                return
            }
            this._isMouseDown = true;
            if (this.options.multipleSelection === false && d) {
                a("#" + this.grid.element[0].id + "_displayContainer_a").focus();
                if ((this.grid.options.virtualization || this.grid.options.rowVirtualization) && this.grid.options.virtualizationMode === "continuous") {
                    b.preventDefault()
                }
            }
            if (this.options.mouseDragSelect === false || this.options.multipleSelection === false) {
                if ((this.grid.options.virtualization || this.grid.options.rowVirtualization) && this.grid.options.virtualizationMode !== "continuous") {
                    return false
                }
                return
            }
            this._mouseLocation = {
                clientX: b.clientX,
                clientY: b.clientY
            };
            this._firstDragCell = this._cellFromEvent(b);
            if (this._firstDragCell.element.hasClass(this.css.selectedCell) === false) {
                this._touchDragStart = false
            }
            if (!b.ctrlKey && !b.shiftKey && this.options.multipleSelection !== true) {
                this.clearSelection(true)
            }
            this._isInternalFocus = true;
            if (this.options.multipleSelection === true && d) {
                a("#" + this.grid.element[0].id + "_displayContainer_a").focus()
            } else {
                this.grid.container().focus()
            }
            if (!a(b.target).hasClass("ui-iggrid-expandbutton") && !a(b.target).hasClass("ui-iggrid-expandcolumn") && !a(b.target).hasClass("ui-iggrid-expandbuttongb")) {
                b.stopPropagation();
                b.preventDefault();
                a(b.target).trigger("iggridselectionmousedown")
            }
        },

        _markMouseDown: function (b) {
            this._isMouseDown = true
        },

        _selectStart: function (b) {
            if (b && this._suspend) {
                return
            }
            if (this.options.mouseDragSelect === false || this.options.multipleSelection === false) {
                return false
            }
            b.stopPropagation();
            b.preventDefault()
        },

        _releaseMouse: function () {
            this._isMouseDown = false
        },

        _selectInternal: function (e, r, c) {
            var s, p, b, g, h, j, n = true, k = false, u, m, o, d, l = false, q, t = this.grid.options.virtualization || this.grid.options.columnVirtualization, f;
            if (!this._isMouseDown && e) {
                return
            }
            if (e && e.which === 0) {
                e.which = 1
            }
            if (e && e.which !== 1) {
                return
            }
            if (e !== null && e.target && (a(e.target).hasClass("ui-iggrid-childarea") || a(e.target).parent().hasClass("ui-iggrid-childarea") || a(e.target).hasClass("ui-widget-header"))) {
                return
            }
            if (e === null) {
                k = true;
                f = this.y_exclude_current;
                if (this._isContinuous || k) {
                    f = 0
                }
                if (this._rangeSelect) {
                    u = r - this.grid._startRowIndex < 0 ? 0 : r - this.grid._startRowIndex + f
                } else {
                    u = r + f
                }
                e = {
                    originalEvent: {}
                };
                if (c === null || c === undefined) {
                    l = true;
                    if (t) {
                        e.originalEvent.originalTarget = this.grid.rowAt(u)
                    } else {
                        e.originalEvent.originalTarget = this.grid.rowAt(r - f)
                    }
                } else {
                    if (t) {
                        e.originalEvent.originalTarget = this.grid.cellAt(c, u)
                    } else {
                        e.originalEvent.originalTarget = this.grid.cellAt(c + this.x_exclude_current, r - f)
                    }
                }
                e.originalEvent.srcElement = e.originalEvent.originalTarget
            }
            s = e.originalEvent.originalTarget || e.originalEvent.srcElement;
            b = a(s);
            m = b.closest("th.ui-iggrid-rowselector-class").length === 1;
            if (e && b.is("span") && (b.attr("data-chk") !== undefined || b.parent().attr("data-chk") !== undefined)) {
                this._mouseCtrlSelect = true;
                return
            }
            if (this._hc && e && e.target) {
                o = a(e.target).closest(".ui-iggrid-table");
                if (o.length > 0 && o.attr("id") !== this.grid.element.attr("id")) {
                    e.stopPropagation();
                    e.preventDefault();
                    return
                }
                if (this._hgrid && this._hgrid.data("data-selectgrid") !== this.grid.element.attr("id")) {
                    this.clearSelectionAllOthers(false, true);
                    this._hgrid.data("data-selectgrid", this.grid.element.attr("id"))
                }
            }
            if (this._hc && this._hdirty) {
                this.y_exclude_current = this._excludeRowsLt(b.closest("tr"))
            } else {
                if (!this._hc) {
                    this.y_exclude_current = 0
                }
            }
            if (this.x_exclude_current === undefined) {
                this.x_exclude_current = this._calcExtraCells()
            }
            if (e && this._suspend) {
                return
            }
            if (e && e.which === 2) {
                return
            }
            if (this._isDrag === true && e !== null) {
                this._isDrag = false;
                return
            }
            p = b.closest("tr");
            if (b.closest("th").length > 0 && m === false) {
                return
            }
            if (b.closest("td").attr("data-skip") === "true") {
                return
            }
            if (e.ctrlKey) {
                this._isContinuous = false;
                this._mouseCtrlSelect = true
            }
            if (this.options.multipleCellSelectOnClick === true && this.options.mode === "cell" && this.activeCell()) {
                this._isContinuous = false;
                this._mouseCtrlSelect = true;
                d = true
            }
            if (this.options.mode === "cell" && l === false) {
                if (m === true) {
                    if (k === true) {
                        s = b.is("th") ? b[0] : b.closest("th")[0]
                    } else {
                        s = b.is("th") ? b.next()[0] : b.closest("th").next()[0]
                    }
                } else {
                    s = b.is("td") ? b[0] : b.closest("td")[0]
                }
                g = this._cellFromElement(s);
                if (this.options.activation === true && this._rangeSelect !== true && this._singleShiftSelect !== true && this._ctrlSelect !== true) {
                    if (this.activeCell() && g && this._mouseCtrlSelect !== true && g.index === this.activeCell().index && g.rowIndex === this.activeCell().rowIndex) {
                        return
                    }
                    if (this._mouseCtrlSelect !== true) {
                        this._activateCell(g, e)
                    } else {
                        if (this.activeCell() && (g.index !== this.activeCell().index || g.rowIndex !== this.activeCell().rowIndex)) {
                            this._activateCell(g, e)
                        }
                    }
                }
            } else {
                if (k) {
                    p = a(s)
                }
                q = p.index();
                h = {
                    element: p,
                    index: q + this.grid._startRowIndex - this.y_exclude_current
                };
                if (this.options.activation === true && this._rangeSelect !== true && this._singleShiftSelect !== true && this._ctrlSelect !== true) {
                    if (!(this.activeRow() && h && this._mouseCtrlSelect !== true && h.index === this.activeRow().index)) {
                        if (this._mouseCtrlSelect !== true) {
                            this._activateRow(h, e)
                        } else {
                            if (this.activeRow() && h.index !== this.activeRow().index) {
                                this._activateRow(h, e)
                            }
                        }
                    }
                }
            }
            if (this.options.mode === "row" && this.grid._selectedRow && this._singleShiftSelect !== true && this._ctrlSelect !== true && this._mouseCtrlSelect !== true && this.options.multipleSelection !== true && h && h.index === this.grid._selectedRow.index) {
                return
            }
            if (this.options.mode === "cell" && this.grid._selectedCell && g && this._singleShiftSelect !== true && this._ctrlSelect !== true && this._mouseCtrlSelect !== true && g.index === this.grid._selectedCell.index && g.rowIndex === this.grid._selectedCell.rowIndex) {
                return
            }
            if (((k === false && this.options.mode === "cell") || (k === true && l === false))) {
                if ((k === false && !e.shiftKey) || this._ctrlSelect === true) {
                    n = this._trigger(this.events.cellSelectionChanging, e, {
                        cell: g,
                        selectedCells: this.grid._selectedCells,
                        owner: this,
                        manual: k
                    })
                }
                if (n && g && g.element && !g.element.hasClass("ui-iggrid-expandcolumn") && !g.element.hasClass("ui-iggrid-rowselector-class")) {
                    if (this.options.multipleSelection !== true) {
                        if (this.grid._selectedCell !== null) {
                            this.grid._selectedCell.element.removeClass(this.css.selectedCell)
                        }
                        if (this.grid._selectedRow !== null && this.grid._selectedRow !== undefined) {
                            this.grid._selectedRow.element.children().removeClass(this.css.selectedCell)
                        }
                    } else {
                        if (e.ctrlKey || this._ctrlSelect === true || d === true) {
                            if (g.element.hasClass(this.css.selectedCell)) {
                                for (j = 0; j < this.grid._selectedCells.length; j++) {
                                    if (this.grid._selectedCells[j].index === g.index && this.grid._selectedCells[j].rowIndex === g.rowIndex) {
                                        a.ig.removeFromArray(this.grid._selectedCells, j)
                                    }
                                }
                            } else {
                                this.grid._selectedCells.push(g)
                            }
                        } else {
                            if (!e.shiftKey) {
                                if (!k) {
                                    this.clearSelection(true)
                                }
                                if (!this._isCellSelected(g.rowIndex, g.index)) {
                                    this.grid._selectedCells.push(g)
                                }
                                if (!k) {
                                    this._realActiveCell = g
                                }
                            } else {
                                this._shiftCellSelection(g);
                                return
                            }
                        }
                    }
                    if ((e.ctrlKey || this._ctrlSelect === true || d === true) && b.hasClass(this.css.selectedCell)) {
                        g.element.removeClass(this.css.selectedCell)
                    } else {
                        g.element.addClass(this.css.selectedCell);
                        this.grid._selectedCell = g
                    }
                    if (k === false || this._ctrlSelect === true) {
                        this._trigger(this.events.cellSelectionChanged, e, {
                            cell: g,
                            selectedCells: this.grid._selectedCells,
                            owner: this,
                            manual: k
                        })
                    }
                }
            } else {
                if (((k === false && this.options.mode === "row") || (k === true && l === true))) {
                    if ((k === false && !e.shiftKey) || this._ctrlSelect === true) {
                        n = this._trigger(this.events.rowSelectionChanging, e, {
                            row: h,
                            selectedRows: this.grid._selectedRows,
                            owner: this,
                            manual: k
                        })
                    }
                    if (n) {
                        if (this.options.multipleSelection !== true) {
                            if (this.grid._selectedRow !== null) {
                                a(this.grid._selectedRow.element).children().removeClass(this.css.selectedCell)
                            }
                            if (this.grid._selectedCell !== null && this.grid._selectedCell !== undefined) {
                                this.grid._selectedCell.element.removeClass(this.css.selectedCell)
                            }
                        } else {
                            if (e.ctrlKey || this._ctrlSelect === true) {
                                if (h.element.children().hasClass(this.css.selectedCell)) {
                                    for (j = 0; j < this.grid._selectedRows.length; j++) {
                                        if (this.grid._selectedRows[j].index === h.index) {
                                            a.ig.removeFromArray(this.grid._selectedRows, j)
                                        }
                                    }
                                } else {
                                    this.grid._selectedRows.push(h)
                                }
                            } else {
                                if (!e.shiftKey) {
                                    if (!k) {
                                        this.clearSelection(true)
                                    }
                                    this.grid._selectedRows.push(h);
                                    if (!k) {
                                        this._realActiveRow = h
                                    }
                                } else {
                                    this._shiftRowSelection(h);
                                    return
                                }
                            }
                        }
                        if ((e.ctrlKey || this._ctrlSelect === true) && h.element.children().hasClass(this.css.selectedCell)) {
                            h.element.removeClass(this.css.selectedRow);
                            h.element.children().removeClass(this.css.selectedCell)
                        } else {
                            if (p.is("tr")) {
                                p.children(":not(.ui-iggrid-nongrouprowemptycell)").addClass(this.css.selectedCell)
                            }
                        }
                        this.grid._selectedRow = h;
                        if (k === false || this._ctrlSelect === true) {
                            this._trigger(this.events.rowSelectionChanged, e, {
                                row: h,
                                selectedRows: this.grid._selectedRows,
                                owner: this,
                                manual: k
                            })
                        } else {
                            if (k === true) {
                                this._trigger("internalrowselectionchanged", e, {
                                    row: h,
                                    selectedRows: this.grid._selectedRows,
                                    owner: this
                                })
                            }
                        }
                    }
                }
            }
            this._mouseCtrlSelect = false
        },

        _shiftRowSelection: function (h, g, j, b, d) {
            var e, k, c, f = true;
            this._isContinuous = true;
            if (this.grid._selectedRows.length === 0) {
                this._singleShiftSelect = true;
                f = this._trigger(this.events.rowSelectionChanging, null, {
                    row: h,
                    startIndex: h.index,
                    endIndex: h.index,
                    selectedRows: this.grid._selectedRows,
                    owner: this,
                    manual: false
                });
                if (f) {
                    this.selectRow(h.index);
                    this._trigger(this.events.rowSelectionChanged, null, {
                        row: h,
                        selectedRows: this.grid._selectedRows,
                        owner: this,
                        manual: false
                    })
                }
                this._singleShiftSelect = false;
                return
            }
            c = h.index;
            k = this.grid._selectedRows[0].index;
            f = this._trigger(this.events.rowSelectionChanging, null, {
                row: h,
                startIndex: k,
                endIndex: c,
                selectedRows: this.grid._selectedRows,
                owner: this,
                manual: false
            });
            if (f) {
                this._rangeSelect = true;
                if (!j) {
                    if (this.grid._selectedRows.length > 0 && this.grid._selectedRows[0].index < h.index) {
                        if (g !== false) {
                            this.clearSelection(true)
                        }
                        for (e = k; e <= c; e++) {
                            this.selectRow(e)
                        }
                    }
                    if (this.grid._selectedRows.length > 0 && this.grid._selectedRows[0].index > h.index) {
                        if (g !== false) {
                            this.clearSelection(true)
                        }
                        for (e = k; e >= c; e--) {
                            this.selectRow(e)
                        }
                    }
                } else {
                    if (d) {
                        this._activateRow(h, d)
                    }
                    if (this._isRowSelected(this.activeRow().index)) {
                        this.deselectRow(b.index)
                    } else {
                        this.selectRow(this.activeRow().index)
                    }
                    this._singleShiftSelect = false
                }
                this._rangeSelect = false;
                this._trigger(this.events.rowSelectionChanged, null, {
                    row: h,
                    selectedRows: this.grid._selectedRows,
                    owner: this,
                    manual: false
                })
            }
        },

        _shiftCellSelection: function (b, s, t, c, d) {
            var e, g, o, f, n, l, m, r = true, q = 0, k = Number.MAX_VALUE, p = 0, h = Number.MAX_VALUE;
            this._isContinuous = true;
            if (this.grid._selectedCells.length === 0) {
                this._singleShiftSelect = true;
                r = this._trigger(this.events.cellSelectionChanging, null, {
                    cell: b,
                    firstRowIndex: b.rowIndex,
                    lastRowIndex: b.rowIndex,
                    firstColumnIndex: b.index,
                    lastColumnIndex: b.index,
                    selectedCells: this.grid._selectedCells,
                    owner: this,
                    manual: false
                });
                if (r) {
                    this.selectCell(b.rowIndex, b.index);
                    this._trigger(this.events.cellSelectionChanged, null, {
                        cell: b,
                        selectedCells: this.grid._selectedCells,
                        owner: this,
                        manual: false
                    })
                }
                this._singleShiftSelect = false;
                return
            }
            e = this.grid._selectedCells[0];
            g = e.rowIndex;
            o = b.rowIndex;
            f = e.index;
            n = b.index;
            r = this._trigger(this.events.cellSelectionChanging, null, {
                cell: b,
                firstRowIndex: g,
                lastRowIndex: o,
                firstColumnIndex: f,
                lastColumnIndex: n,
                selectedCells: this.grid._selectedCells,
                owner: this,
                manual: false
            });
            if (r) {
                if (s !== false) {
                    this.clearSelection(true)
                }
                if (!t) {
                    this._rangeSelect = true;
                    if (g <= o) {
                        for (l = g; l <= o; l++) {
                            if (f <= n) {
                                for (m = f; m <= n; m++) {
                                    this.selectCell(l, m)
                                }
                            } else {
                                for (m = f; m >= n; m--) {
                                    this.selectCell(l, m)
                                }
                            }
                        }
                    } else {
                        for (l = g; l >= o; l--) {
                            if (f <= n) {
                                for (m = f; m <= n; m++) {
                                    this.selectCell(l, m)
                                }
                            } else {
                                for (m = f; m >= n; m--) {
                                    this.selectCell(l, m)
                                }
                            }
                        }
                    }
                    this._rangeSelect = false
                } else {
                    this._singleShiftSelect = true;
                    if (d) {
                        this._activateCell(b, d)
                    }
                    if (this._isCellSelected(this.activeCell().rowIndex, this.activeCell().index)) {
                        this.deselectCell(c.rowIndex, c.index);
                        for (l = 0; l < this.grid._selectedCells.length; l++) {
                            if (this.grid._selectedCells[l].rowIndex > q) {
                                q = this.grid._selectedCells[l].rowIndex
                            }
                            if (this.grid._selectedCells[l].rowIndex < k) {
                                k = this.grid._selectedCells[l].rowIndex
                            }
                            if (this.grid._selectedCells[l].index > p) {
                                p = this.grid._selectedCells[l].index
                            }
                            if (this.grid._selectedCells[l].index < h) {
                                h = this.grid._selectedCells[l].index
                            }
                        }
                        if (Math.abs(k - q) > 0 && Math.abs(this.activeCell().index - c.index) > 0) {
                            if (k <= q) {
                                for (l = k; l <= q; l++) {
                                    this.deselectCell(l, c.index)
                                }
                            } else {
                                for (l = k; l >= q; l--) {
                                    this.deselectCell(l, c.index)
                                }
                            }
                        } else {
                            if (Math.abs(h - p) > 0 && Math.abs(this.activeCell().rowIndex - c.rowIndex) > 0) {
                                if (h <= p) {
                                    for (l = h; l <= p; l++) {
                                        this.deselectCell(c.rowIndex, l)
                                    }
                                } else {
                                    for (l = h; l >= p; l--) {
                                        this.deselectCell(c.rowIndex, l)
                                    }
                                }
                            }
                        }
                    } else {
                        this.selectCell(this.activeCell().rowIndex, this.activeCell().index);
                        for (l = 0; l < this.grid._selectedCells.length; l++) {
                            if (this.grid._selectedCells[l].rowIndex > q) {
                                q = this.grid._selectedCells[l].rowIndex
                            }
                            if (this.grid._selectedCells[l].rowIndex < k) {
                                k = this.grid._selectedCells[l].rowIndex
                            }
                            if (this.grid._selectedCells[l].index > p) {
                                p = this.grid._selectedCells[l].index
                            }
                            if (this.grid._selectedCells[l].index < h) {
                                h = this.grid._selectedCells[l].index
                            }
                        }
                        if (Math.abs(k - q) > 0 && Math.abs(this.activeCell().index - c.index) > 0) {
                            if (k <= q) {
                                for (l = k; l <= q; l++) {
                                    this.selectCell(l, this.activeCell().index)
                                }
                            } else {
                                for (l = k; l >= q; l--) {
                                    this.selectCell(l, this.activeCell().index)
                                }
                            }
                        } else {
                            if (Math.abs(h - p) > 0 && Math.abs(this.activeCell().rowIndex - c.rowIndex) > 0) {
                                if (h <= p) {
                                    for (l = h; l <= p; l++) {
                                        this.selectCell(this.activeCell().rowIndex, l)
                                    }
                                } else {
                                    for (l = h; l >= p; l--) {
                                        this.selectCell(this.activeCell().rowIndex, l)
                                    }
                                }
                            }
                        }
                    }
                    this._singleShiftSelect = false
                }
                this._trigger(this.events.cellSelectionChanged, null, {
                    cell: b,
                    selectedCells: this.grid._selectedCells,
                    owner: this,
                    manual: false
                })
            }
        },

        _rowExpanded: function (c, b) {
            this._hdirty = true
        },

        _navigate: function (c) {
            var d, e, f, h = a("#" + this.grid.element[0].id + "_displayContainer_a"), b, g = false;
            if (c && this._suspend) {
                return
            }
            if (this._isMouseDown === true) {
                return
            }
            if (c.keyCode !== a.ui.keyCode.ENTER && c.keyCode !== a.ui.keyCode.SPACE && c.keyCode !== a.ui.keyCode.UP && c.keyCode !== a.ui.keyCode.DOWN && c.keyCode !== a.ui.keyCode.LEFT && c.keyCode !== a.ui.keyCode.RIGHT) {
                return
            }
            if (this._hc) {
                b = this.options.mode === "row" ? this.activeRow() : this.activeCell();
                if (b !== undefined && b !== null) {
                    b = this.options.mode === "row" ? b.element : b.element.closest("tr");
                    this.y_exclude_current = this._excludeRowsLt(b)
                }
            } else {
                this.y_exclude_current = 0
            }
            if (this.x_exclude_current === undefined) {
                this.x_exclude_current = this._calcExtraCells()
            }
            if (this.grid.options.virtualization) {
                if (a.browser.msie && document.activeElement && (document.activeElement.id !== h.attr("id") && !a(document.activeElement).is("td"))) {
                    return
                }
                if (!a.browser.msie && c.target.id !== h.attr("id")) {
                    return
                }
            }
            if (a.browser.msie && document.activeElement && (document.activeElement.id !== this.grid.container().attr("id") && !a(document.activeElement).is("td"))) {
                return
            }
            if (!a.browser.msie && c.target.id !== this.grid.container().attr("id")) {
                return
            }
            e = this.grid.options.columns.length > 0 ? this.grid.options.columns[0].key : null;
            d = this._firstCell;
            f = this._firstRow;
            if (this.options.activation === true) {
                if (this.options.mode === "cell") {
                    if (this.options.multipleSelection === true) {
                        if (this.activeCell() === null || this.activeCell() === undefined) {
                            this.selectCell(0, 0)
                        } else {
                            if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(c)) {
                                g = this._activateNextGrid(c);
                                if (!g) {
                                    this._navigateCell(c, false)
                                }
                            } else {
                                this._navigateCell(c, false)
                            }
                        }
                    } else {
                        if ((this.activeCell() === null && this.grid._selectedCell === null) || (this.activeCell() === undefined && this.grid._selectedCell === undefined)) {
                            this.selectCell(0, 0)
                        } else {
                            if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(c)) {
                                g = this._activateNextGrid(c);
                                if (!g) {
                                    this._navigateCell(c, true)
                                }
                            } else {
                                this._navigateCell(c, true)
                            }
                        }
                    }
                } else {
                    if (this.options.multipleSelection === true) {
                        if (this.activeRow() === null || this.activeRow() === undefined) {
                            this.selectRow(0)
                        } else {
                            if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(c)) {
                                g = this._activateNextGrid(c);
                                if (!g) {
                                    this._navigateRow(c, false)
                                }
                            } else {
                                this._navigateRow(c, false)
                            }
                        }
                    } else {
                        if ((this.activeRow() === null && this.grid._selectedRow === null) || (this.activeRow() === undefined && this.grid._selectedRow === undefined)) {
                            this.selectRow(0)
                        } else {
                            if (this.options.skipChildren === false && this._hc && this._isMovingUpDown(c)) {
                                g = this._activateNextGrid(c);
                                if (!g) {
                                    this._navigateRow(c, true)
                                }
                            } else {
                                this._navigateRow(c, true)
                            }
                        }
                    }
                }
            }
        },

        _isMovingUpDown: function (b) {
            if (b.keyCode === a.ui.keyCode.UP || b.keyCode === a.ui.keyCode.DOWN) {
                return true
            }
            return false
        },

        _navigateFocus: function (b) {
            if ((a.browser.mozilla && b.originalEvent && a(b.originalEvent.explicitOriginalTarget).is("th"))) {
                return
            }
            if (b.which !== 1) {
                a("#" + this.grid.element[0].id + "_displayContainer_a").unbind("focus", this._focusHandler);
                a("#" + this.grid.element[0].id + "_displayContainer_a").focus();
                a("#" + this.grid.element[0].id + "_displayContainer_a").bind({
                    focus: this._focusHandler
                });
                return false
            }
            this._navigate(b)
        },

        _navigateCell: function (f, w) {
            var m, n, B, C, e = this.activeCell(), g, s, k, j, l, o = true, z = this.grid._startRowIndex, u = this.grid._startColIndex, b, h, q, i = 0, d, p, c, A = this.grid.options.virtualization || this.grid.options.rowVirtualization, r = false, t;
            if (e === null) {
                return
            }
            if (z === undefined || z === null) {
                z = 0
            }
            if (u === undefined || z === null) {
                u = 0
            }
            if (A) {
                B = e.index - u;
                C = e.rowIndex - z
            } else {
                B = e.index;
                C = e.rowIndex
            }
            C += this.y_exclude_current;
            B += this.x_exclude_current;
            g = this._firstRow;
            s = this._rowCount;
            j = this._length;
            if (this.x_exclude_current > 0) {
                j += this.x_exclude_current
            }
            if (f.keyCode === a.ui.keyCode.ENTER || f.keyCode === a.ui.keyCode.SPACE) {
                m = B;
                n = C;
                if (f.ctrlKey && this._isCellSelected(C + z - this.y_exclude_current, B + u - this.x_exclude_current)) {
                    o = this._trigger(this.events.cellSelectionChanging, f, {
                        cell: e,
                        selectedCells: this.grid._selectedCells,
                        owner: this,
                        manual: false
                    });
                    if (o) {
                        this.deselectCell(C + z - this.y_exclude_current, B + u - this.x_exclude_current);
                        this._trigger(this.events.cellSelectionChanged, f, {
                            cell: e,
                            selectedCells: this.grid._selectedCells,
                            owner: this,
                            manual: false
                        })
                    }
                } else {
                    if (f.ctrlKey || !this._isCellSelected(C - this.y_exclude_current, B)) {
                        this._ctrlSelect = true;
                        this._selectInternal(null, C - this.y_exclude_current, B - this.x_exclude_current);
                        this._ctrlSelect = false
                    }
                }
            } else {
                if (f.keyCode === a.ui.keyCode.DOWN) {
                    m = B;
                    n = C + 1;
                    if (this._realActiveCell !== null && this._realActiveCell !== undefined && this._isContinuous && this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !f.shiftKey && !f.ctrlKey) {
                        m = this._realActiveCell.index - u + this.x_exclude_current;
                        n = this._realActiveCell.rowIndex + 1 - z + this.y_exclude_current
                    }
                    if (n - this.y_exclude_current > s - 1 - z && this.options.wrapAround === true && !A) {
                        n = this.y_exclude_current
                    } else {
                        if (n - this.y_exclude_current > s - 1 - z && this.options.wrapAround === false) {
                            if (this._hc && !this.options.skipChildren) {
                                this._activateNextGrid(null, true)
                            }
                            return
                        }
                    }
                } else {
                    if (f.keyCode === a.ui.keyCode.UP) {
                        m = B;
                        n = C - 1;
                        if (this._realActiveCell !== null && this._realActiveCell !== undefined && this._isContinuous && this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !f.shiftKey && !f.ctrlKey) {
                            m = this._realActiveCell.index - u + this.x_exclude_current;
                            n = this._realActiveCell.rowIndex - 1 - z + this.y_exclude_current
                        }
                        if (!A) {
                            if (n - this.y_exclude_current < 0 && this.options.wrapAround === true) {
                                n = s - 1
                            } else {
                                if (n - this.y_exclude_current < 0 && this.options.wrapAround === false) {
                                    if (this._hc && !this.options.skipChildren) {
                                        this._activateNextGrid(null, false)
                                    }
                                    return
                                }
                            }
                        }
                    } else {
                        if (f.keyCode === a.ui.keyCode.LEFT) {
                            m = B - 1;
                            n = C;
                            if (m - this.x_exclude_current < 0) {
                                if (this._hc && !this.options.skipChildren) {
                                    r = this._activateNextGrid(null, false, true)
                                }
                                if (r) {
                                    return
                                }
                                m = j - 1;
                                n = C - 1
                            }
                            if (this._realActiveCell !== null && this._realActiveCell !== undefined && this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !f.shiftKey && !f.ctrlKey) {
                                m = this._realActiveCell.index - 1 - u + this.x_exclude_current;
                                n = this._realActiveCell.rowIndex - z + this.y_exclude_current
                            }
                            if (!A) {
                                if (n < 0 && this.options.wrapAround === true) {
                                    m = j - 1;
                                    n = s - 1
                                } else {
                                    if (n < 0 && this.options.wrapAround === false) {
                                        if (this._hc && !this.options.skipChildren) {
                                            this._activateNextGrid(null, false)
                                        }
                                        return
                                    }
                                }
                            }
                        } else {
                            if (f.keyCode === a.ui.keyCode.RIGHT) {
                                m = B + 1;
                                n = C;
                                if (m >= j) {
                                    if (this._hc && !this.options.skipChildren) {
                                        r = this._activateNextGrid(null, true, true)
                                    }
                                    if (r) {
                                        return
                                    }
                                    m = 0;
                                    n = C + 1
                                }
                                if (this._realActiveCell !== null && this._realActiveCell !== undefined && this.options.multipleSelection === true && this.grid._selectedCells.length > 1 && !f.shiftKey && !f.ctrlKey) {
                                    m = this._realActiveCell.index + 1 - u + this.x_exclude_current;
                                    n = this._realActiveCell.rowIndex - z + this.y_exclude_current
                                }
                                if (!A) {
                                    if (n >= s + this.y_exclude_current && this.options.wrapAround === true) {
                                        m = 0;
                                        n = 0
                                    } else {
                                        if (n >= s + this.y_exclude_current && this.options.wrapAround === false) {
                                            if (this._hc && !this.options.skipChildren) {
                                                this._activateNextGrid(null, true)
                                            }
                                            return
                                        }
                                    }
                                }
                            } else {
                                return
                            }
                        }
                    }
                }
            }
            if (A && n >= this.grid._virtualRowCount) {
                this._setScrollTop(this.grid.element.parent(), k, n > C ? "down" : "up", n - this.y_exclude_current);
                n = this.grid._virtualRowCount - 1
            } else {
                if (A && n < 0 && z > 0) {
                    this._setScrollTop(this.grid.element.parent(), k, "up", n - this.y_exclude_current);
                    n = 0
                } else {
                    if (A && n < 0) {
                        return
                    }
                }
            }
            if (this.x_exclude_current > 0 && this.grid.rowAt(n).cells.length < j) {
                m = this.grid.rowAt(n).cells.length - 1
            }
            k = this.grid.cellAt(m === 0 ? this.x_exclude_current : m, n - this.y_exclude_current);
            if (k === undefined && (f.keyCode === a.ui.keyCode.DOWN || f.keyCode === a.ui.keyCode.UP)) {
                if (f.keyCode === a.ui.keyCode.DOWN) {
                    n++
                } else {
                    if (f.keyCode === a.ui.keyCode.UP) {
                        n--
                    }
                }
                k = this.grid.cellAt(m, n)
            }
            if (!A) {
                this._setScrollTop(this.grid.element.parent(), k, n >= C ? "down" : "up", n - this.y_exclude_current);
                if (this.grid.options.width !== null && this.grid.options.height !== null) {
                    p = a("#" + this.grid.element[0].id + "_hscroller")
                } else {
                    if (this.grid.scrollContainer().length > 0) {
                        p = this.grid.scrollContainer()
                    } else {
                        p = this.grid.element.parent()
                    }
                }
                this._setScrollLeft(p, k, m >= B ? "right" : "left", m - this.x_exclude_current)
            }
            if (k === undefined || k.length > 1) {
                return
            }
            b = a(k);
            if (this._hc && (b.hasClass("ui-iggrid-expandbutton") || b.hasClass("ui-iggrid-expandcolumn"))) {
                if (f.keyCode === a.ui.keyCode.ENTER) {
                    q = b.closest("tr");
                    h = b.closest(".ui-iggrid-root").data("igHierarchicalGrid");
                    h.toggle(q)
                }
            }
            if (b.hasClass("ui-iggrid-rowselector-class") && (f.keyCode === a.ui.keyCode.ENTER || f.keyCode === a.ui.keyCode.SPACE)) {
                t = this.grid.element.data("igGridRowSelectors");
                c = b.find("span[data-role='checkbox']");
                if (t && c.length > 0) {
                    t._handleCheck(c)
                }
            }
            i = m - this.x_exclude_current;
            if (f.keyCode !== a.ui.keyCode.ENTER && f.keyCode !== a.ui.keyCode.SPACE) {
                a(e.element).removeClass(this.css.activeCell);
                if (m === 0) {
                    i = this.x_exclude_current
                }
                if (m >= this.grid.options.columns.length) {
                    d = this.grid.options.columns[this.grid.options.columns.length - 1].key
                } else {
                    d = this.grid.options.columns[m === 0 ? 0 : i - (this._hc === true ? 1 : 0)].key
                }
                if (m <= 0 && this._hc) {
                    d = null
                }
                if (A) {
                    l = {
                        element: a(k),
                        index: m === 0 ? u : i + u,
                        rowIndex: n + z - this.y_exclude_current,
                        row: a(this.grid.rowAt(n)),
                        columnKey: d
                    }
                } else {
                    l = {
                        element: a(k),
                        index: m === 0 ? 0 : i,
                        rowIndex: n - this.y_exclude_current,
                        row: a(this.grid.rowAt(n)),
                        columnKey: d
                    }
                }
                if (f.ctrlKey && this.activeCell() && (this.activeCell().index !== l.index || this.activeCell().rowIndex !== l.rowIndex)) {
                    this._activateCell(l, f)
                }
                if (!f.ctrlKey && f.shiftKey && this.options.multipleSelection === true) {
                    this._shiftCellSelection(l, false, true, e, f)
                } else {
                    if (!f.ctrlKey) {
                        o = this._trigger(this.events.cellSelectionChanging, f, {
                            cell: l,
                            selectedCells: this.grid._selectedCells,
                            owner: this,
                            manual: false
                        });
                        if (o) {
                            this.clearSelection(true);
                            this._selectInternal(null, n - this.y_exclude_current, m === 0 ? 0 : i);
                            this._trigger(this.events.cellSelectionChanged, f, {
                                cell: l,
                                selectedCells: this.grid._selectedCells,
                                owner: this,
                                manual: false
                            })
                        }
                    }
                }
            }
            f.preventDefault();
            f.stopPropagation()
        },

        _navigateRow: function (c, k) {
            var h, n, b = this.activeRow(), d, j, e, g, f, i = true, m, l = this.grid._startRowIndex;
            m = this.grid.options.virtualization || this.grid.options.rowVirtualization;
            if (!b) {
                return
            }
            if (m) {
                n = b.index - l
            } else {
                n = b.index
            }
            n += this.y_exclude_current;
            d = this._firstRow;
            j = this._rowCount;
            e = this._length;
            if (c.keyCode === a.ui.keyCode.ENTER || c.keyCode === a.ui.keyCode.SPACE) {
                h = n;
                if (c.ctrlKey && this._isRowSelected(n - this.y_exclude_current)) {
                    i = this._trigger(this.events.rowSelectionChanging, c, {
                        row: b,
                        selectedRows: this.grid._selectedRows,
                        owner: this,
                        manual: false
                    });
                    if (i) {
                        this.deselectRow(n - this.y_exclude_current);
                        this._trigger(this.events.rowSelectionChanged, c, {
                            row: b,
                            selectedRows: this.grid._selectedRows,
                            owner: this,
                            manual: false
                        })
                    }
                    i = true
                } else {
                    this._ctrlSelect = true;
                    this._selectInternal(null, n - this.y_exclude_current);
                    this._ctrlSelect = false
                }
            } else {
                if (c.keyCode === a.ui.keyCode.DOWN) {
                    h = n + 1;
                    if (this._realActiveRow !== null && this._realActiveRow !== undefined && this.options.multipleSelection === true && this.grid._selectedRows.length > 1 && !c.shiftKey && !c.ctrlKey && this._isContinuous) {
                        h = this._realActiveRow.index + 1 + this.y_exclude_current
                    }
                    if (!m) {
                        if (h - this.y_exclude_current > j - 1 && this.options.wrapAround === true) {
                            h = this.y_exclude_current
                        } else {
                            if (h - this.y_exclude_current > j - 1 && this.options.wrapAround === false) {
                                if (this._hc && !this.options.skipChildren) {
                                    this._activateNextGrid(null, true)
                                }
                                return
                            }
                        }
                    }
                } else {
                    if (c.keyCode === a.ui.keyCode.UP) {
                        h = n - 1;
                        if (this._realActiveRow !== null && this._realActiveRow !== undefined && this.options.multipleSelection === true && this.grid._selectedRows.length > 1 && !c.shiftKey && !c.ctrlKey && this._isContinuous) {
                            h = this._realActiveRow.index - 1 + this.y_exclude_current
                        }
                        if (!m) {
                            if (h - this.y_exclude_current < 0 && this.options.wrapAround === true) {
                                h = j - 1
                            } else {
                                if (h - this.y_exclude_current < 0 && this.options.wrapAround === false) {
                                    if (this._hc && !this.options.skipChildren) {
                                        this._activateNextGrid(null, false)
                                    }
                                    return
                                }
                            }
                        }
                    } else {
                        return
                    }
                }
            }
            c.preventDefault();
            c.stopPropagation();
            if (m && h < 0) {
                return
            }
            if (m && h >= this.grid._virtualRowCount) {
                h = this.grid._virtualRowCount - 1;
                f = this.grid.rowAt(h - this.y_exclude_current);
                this._setScrollTop(this.grid.element.parent(), f, h >= n ? "down" : "up", h - this.y_exclude_current)
            } else {
                if (m && h < 0 && l > 0) {
                    h = -1;
                    f = this.grid.rowAt(h);
                    this._setScrollTop(this.grid.element.parent(), f, "up", h - this.y_exclude_current)
                } else {
                    f = this.grid.rowAt(h)
                }
            }
            if (f === undefined || f.length > 1) {
                return
            }
            if (!m) {
                this._setScrollTop(this.grid.element.parent(), f, h >= n ? "down" : "up", h - this.y_exclude_current)
            }
            if (c.keyCode !== a.ui.keyCode.ENTER && c.keyCode !== a.ui.keyCode.SPACE) {
                a(b.element).removeClass(this.css.activeRow);
                if (m) {
                    g = {
                        element: a(f),
                        index: h + l - this.y_exclude_current
                    }
                } else {
                    g = {
                        element: a(f),
                        index: h - this.y_exclude_current
                    }
                }
                if (c.ctrlKey && this.activeRow() && this.activeRow().index !== g.index) {
                    this._activateRow(g, c)
                }
                if (!c.ctrlKey && c.shiftKey && this.options.multipleSelection === true) {
                    this._shiftRowSelection(g, false, true, b, c)
                } else {
                    if (!c.ctrlKey) {
                        i = this._trigger(this.events.rowSelectionChanging, c, {
                            row: g,
                            selectedRows: this.grid._selectedRows,
                            owner: this,
                            manual: false
                        });
                        if (i) {
                            this.clearSelection(true);
                            this._selectInternal(null, h - this.y_exclude_current);
                            this._trigger(this.events.rowSelectionChanged, c, {
                                row: g,
                                selectedRows: this.grid._selectedRows,
                                owner: this,
                                manual: false
                            })
                        }
                    }
                }
            }
        },

        _activateNextGrid: function (c, d, e) {
            var h, f, b = this.grid.container(), g = true;
            if (this.options.mode === "row") {
                h = this.activeRow().element
            } else {
                h = a(this.activeCell().element).closest("tr")
            }
            if (c !== null || e === true) {
                if (!c) {
                    c = {
                        keyCode: d ? a.ui.keyCode.DOWN : a.ui.keyCode.UP
                    }
                }
                if (c.keyCode === a.ui.keyCode.UP) {
                    f = h.prev();
                    if (f.attr("data-container") && f.is(":visible")) {
                        f = f.find(".ui-iggrid-table").last()
                    } else {
                        return false
                    }
                } else {
                    f = h.next();
                    if (f.attr("data-container") && f.is(":visible")) {
                        f = f.find(".ui-iggrid-table").first()
                    } else {
                        return false
                    }
                }
            } else {
                if (d) {
                    if (b.next().length > 0) {
                        f = b.nextAll(".ui-iggrid").first().children(".ui-iggrid-table")
                    } else {
                        f = b.closest("tr:[data-container=true]").next();
                        g = false
                    }
                } else {
                    if (b.prev().length > 0) {
                        f = b.prevAll(".ui-iggrid").first().children(".ui-iggrid-table")
                    } else {
                        f = b.closest("tr:[data-container=true]").prev();
                        g = false
                    }
                }
            }
            this.clearSelection(false, true);
            if (g) {
                if (this.options.mode === "row") {
                    if (d !== undefined && !d) {
                        f.igGridSelection("selectRow", f.find(".ui-iggrid-tablebody > tr").last().index())
                    } else {
                        f.igGridSelection("selectRow", 0)
                    }
                } else {
                    if (d !== undefined && !d) {
                        f.igGridSelection("selectCell", f.find(".ui-iggrid-tablebody > tr").last().index(), 0)
                    } else {
                        f.igGridSelection("selectCell", 0, 0)
                    }
                }
            } else {
                if (f && f.length > 0) {
                    if (this.options.mode === "row") {
                        f.closest(".ui-iggrid-table").igGridSelection("selectRow", f.index())
                    } else {
                        f.closest(".ui-iggrid-table").igGridSelection("selectCell", f.index(), 0)
                    }
                }
            }
            f.closest(".ui-iggrid").focus();
            return true
        },

        _setScrollTop: function (i, b, e, f) {
            var j = i.offset(), d = a(b).offset(), c, g, h, l, k;
            if (!b) {
                return
            }
            l = this.grid.options.virtualization === true || this.grid.options.rowVirtualization === true;
            c = l ? parseInt(this.grid.options.avgRowHeight, 10) : a(b).outerHeight();
            if (!l) {
                g = d.top + c + this.grid._scrollbarWidth() > j.top + a(i).outerHeight();
                h = d.top < j.top
            } else {
                g = c * (f + 1) >= parseInt(this.grid.options.height, 10);
                h = f < 0
            }
            if (f === 0) {
                i[0].scrollTop = 0
            } else {
                if (e === "down") {
                    if (g) {
                        if (!l) {
                            k = i[0].scrollTop + d.top + this.grid._scrollbarWidth() - (j.top + i.outerHeight()) + a(b).outerHeight();
                            i[0].scrollTop = k
                        } else {
                            this._scrollVmanual(true)
                        }
                    }
                } else {
                    if (h) {
                        if (!l) {
                            k = i[0].scrollTop - a(b).outerHeight();
                            i[0].scrollTop = k
                        } else {
                            this._scrollVmanual(false)
                        }
                    }
                }
            }
        },

        _scrollVmanual: function (b) {
            var d = a("#" + this.grid.element[0].id + "_scrollContainer"), c = parseInt(this.grid.options.avgRowHeight, 10);
            this.grid._ignoreScroll = true;
            if (b) {
                d.scrollTop(d.scrollTop() + c)
            } else {
                d.scrollTop(d.scrollTop() - c)
            }
            this.grid._onVirtualVerticalScroll();
            this.grid._ignoreScroll = false
        },

        _setScrollLeft: function (f, b, d, e) {
            var g = f.offset(), c = a(b).offset();
            if (!b) {
                return
            }
            if (e === 0) {
                f[0].scrollLeft = 0
            } else {
                if (d === "right") {
                    if (c.left + a(b).outerWidth() > g.left + a(f).outerWidth()) {
                        f[0].scrollLeft = f[0].scrollLeft + c.left - (g.left + f.outerWidth()) + a(b).outerWidth()
                    }
                } else {
                    if (c.left < g.left) {
                        f[0].scrollLeft = f[0].scrollLeft - a(b).outerWidth()
                    }
                }
            }
        },

        _isRowSelected: function (c) {
            var b;
            for (b = 0; b < this.grid._selectedRows.length; b++) {
                if (this.grid._selectedRows[b].index === c) {
                    return true
                }
            }
            return false
        },

        _isCellSelected: function (d, c) {
            var b;
            for (b = 0; b < this.grid._selectedCells.length; b++) {
                if (this.grid._selectedCells[b].index === c && this.grid._selectedCells[b].rowIndex === d) {
                    return true
                }
            }
            return false
        },

        _rs: function (g, d) {
            var f = d.dom, h = 0, k = 0, b = this.activeCell(), c = this.activeRow(), m = this.grid._startRowIndex, l = this.grid._startColIndex;
            if (this.grid.id() !== d.owner.id()) {
                return
            }
            if (this.grid.options.virtualization === true && this.grid.options.virtualizationMode === "continuous") {
                this._registerTbodyEvents();
                if (this.grid._selectedCell) {
                    this.grid._selectedCell.element = a("#" + this.grid.id() + " > tbody > tr").eq(this.grid._selectedCell.rowIndex).children("td").eq(this.grid._selectedCell.index);
                    this.grid._selectedCell.row = this.grid._selectedCell.element.parent("tr")
                }
                if (this.grid._selectedRow) {
                    this.grid._selectedRow.element = a("#" + this.grid.id() + " > tbody > tr").eq(this.grid._selectedRow.index)
                }
                if (this.grid._activeRow) {
                    this.grid._activeRow.element = a("#" + this.grid.id() + " > tbody > tr").eq(this.grid._activeRow.index)
                }
                if (this.grid._activeCell) {
                    this.grid._activeCell.element = a("#" + this.grid.id() + " > tbody > tr").eq(this.grid._activeCell.rowIndex).children("td").eq(this.grid._activeCell.index);
                    this.grid._activeCell.row = this.grid._activeCell.element.parent("tr")
                }
                if (this.grid._selectedRows && this.grid._selectedRows.length > 0) {
                    for (h = 0; h < this.grid._selectedRows.length; h++) {
                        this.grid._selectedRows[h].element = a("#" + this.grid.id() + " > tbody > tr").eq(this.grid._selectedRows[h].index)
                    }
                }
                if (this.grid._selectedCells && this.grid._selectedCells.length > 0) {
                    for (h = 0; h < this.grid._selectedCells.length; h++) {
                        this.grid._selectedCells[h].element = a("#" + this.grid.id() + " > tbody > tr").eq(this.grid._selectedCells[h].rowIndex).children("td").eq(this.grid._selectedCells[h].index);
                        this.grid._selectedCells[h].row = this.grid._selectedCells[h].element.parent("tr")
                    }
                }
            }
            b = this.activeCell();
            c = this.activeRow();
            for (h = 0; h < f.length; h++) {
                for (k = 0; k < f[h].length; k++) {
                    if (this.options.mode === "cell") {
                        if (this.options.multipleSelection) {
                            if (this._isCellSelected(h + m, k + l)) {
                                a(f[h][k]).addClass(this.css.selectedCell)
                            }
                        } else {
                            if (this.grid._selectedCell) {
                                if (h + m === this.grid._selectedCell.rowIndex && k + l === this.grid._selectedCell.index) {
                                    a(f[h][k]).addClass(this.css.selectedCell)
                                }
                            }
                        }
                    } else {
                        if (this.options.multipleSelection) {
                            if (this._isRowSelected(h + m)) {
                                a(f[h][k]).addClass(this.css.selectedRow)
                            }
                        } else {
                            if (this.grid._selectedRow) {
                                if (h + m === this.grid._selectedRow.index) {
                                    a(f[h][k]).addClass(this.css.selectedRow)
                                }
                            }
                        }
                    }
                }
            }
            if (!a.browser.mozilla) {
                if (b) {
                    if (this.grid.options.virtualizationMode === "fixed") {
                        if (b.rowIndex - m > 0 && b.rowIndex - m < f.length && b.index - l > 0 && b.index - l < f[b.rowIndex - m].length) {
                            a(f[b.rowIndex - m][b.index - l]).addClass(this.css.activeCell)
                        }
                    } else {
                        if (this.grid.options.virtualizationMode === "continuous") {
                            b.element.addClass(this.css.activeCell)
                        }
                    }
                }
                if (c) {
                    if (this.grid.options.virtualizationMode === "fixed") {
                        if (c.index - m > 0 && c.index - m < f.length) {
                            a(f[c.index - m]).addClass(this.css.activeRow)
                        }
                    } else {
                        if (this.grid.options.virtualizationMode === "continuous") {
                            c.element.addClass(this.css.activeRow)
                        }
                    }
                }
            }
        },

        selectCell: function (c, b) {
            this._selectInternal(null, c, b)
        },

        deselectCell: function (d, b) {
            var c;
            if (this.options.multipleSelection === true) {
                for (c = 0; c < this.selectedCells().length; c++) {
                    if (this.selectedCells()[c].index === b && this.selectedCells()[c].rowIndex === d) {
                        this.selectedCells()[c].element.removeClass(this.css.selectedCell);
                        a.ig.removeFromArray(this.selectedCells(), c);
                        this.grid._selectedCell = null;
                        break
                    }
                }
            } else {
                if (this.selectedCell() !== null && this.selectedCell() !== undefined) {
                    this.selectedCell().element.removeClass(this.css.selectedCell);
                    this.grid._selectedCell = null
                }
            }
        },

        selectRow: function (b) {
            this._selectInternal(null, b)
        },

        deselectRow: function (c) {
            var b;
            if (this.options.multipleSelection === true) {
                for (b = 0; b < this.selectedRows().length; b++) {
                    if (this.selectedRows()[b].index === c) {
                        this.selectedRows()[b].element.removeClass(this.css.selectedRow);
                        this.selectedRows()[b].element.children().removeClass(this.css.selectedCell);
                        a.ig.removeFromArray(this.selectedRows(), b);
                        this.grid._selectedRow = null;
                        break
                    }
                }
            } else {
                if (this.selectedRow() !== null && this.selectedRow() !== undefined) {
                    this.selectedRow().element.removeClass(this.css.selectedRow);
                    this.selectedRow().element.children().removeClass(this.css.selectedCell);
                    this.grid._selectedRow = null
                }
            }
        },

        _activateCell: function (b, c) {
            var d = true;
            d = this._trigger(this.events.activeCellChanging, c, {
                cell: b,
                owner: this
            });
            if (d) {
                if (this.activeCell()) {
                    a(this.activeCell().element).removeClass(this.css.activeCell)
                }
                if (this.activeRow()) {
                    a(this.activeRow().element).removeClass(this.css.activeRow);
                    this.activeRow(null)
                }
                this.activeCell(b);
                a(this.activeCell().element).addClass(this.css.activeCell);
                this._trigger(this.events.activeCellChanged, c, {
                    cell: b,
                    owner: this
                })
            }
        },

        _activateRow: function (d, b) {
            var c = true;
            c = this._trigger(this.events.activeRowChanging, b, {
                row: d,
                owner: this
            });
            if (c) {
                if (this.activeRow()) {
                    a(this.activeRow().element).removeClass(this.css.activeRow)
                }
                if (this.activeCell()) {
                    a(this.activeCell().element).removeClass(this.css.activeCell);
                    this.activeCell(null)
                }
                this.activeRow(d);
                a(this.activeRow().element).addClass(this.css.activeRow);
                this._trigger(this.events.activeRowChanged, b, {
                    row: d,
                    owner: this
                })
            }
        },

        selectedCells: function () {
            return this.grid._selectedCells
        },

        selectedRows: function () {
            return this.grid._selectedRows
        },

        selectedCell: function () {
            return this.grid._selectedCell
        },

        selectedRow: function () {
            return this.grid._selectedRow
        },

        activeCell: function (b) {
            if (b !== undefined) {
                this.grid._activeCell = b
            } else {
                return this.grid._activeCell
            }
        },

        activeRow: function (b) {
            if (b !== undefined) {
                this.grid._activeRow = b
            } else {
                return this.grid._activeRow
            }
        },

        clearSelection: function (c, d) {
            var b, e = this.grid.options.virtualization || this.grid.options.rowVirtualization;
            for (b = 0; b < this.grid._selectedCells.length; b++) {
                if (!e || (e && this.grid._selectedCells[b].rowIndex - this.grid._startRowIndex >= 0)) {
                    this.grid._selectedCells[b].element.removeClass(this.css.selectedCell)
                }
            }
            this.grid._selectedCells = [];
            for (b = 0; b < this.grid._selectedRows.length; b++) {
                if (!e || (e && this.grid._selectedRows[b].index - this.grid._startRowIndex >= 0)) {
                    a(this.grid._selectedRows[b].element.children()).removeClass(this.css.selectedCell)
                }
            }
            this.grid._selectedRows = [];
            if (this.grid._selectedRow !== null && this.grid._selectedRow !== undefined) {
                if (e && this.grid._selectedRow.index - this.grid._startRowIndex >= 0) {
                    a(this.grid.rowAt(this.grid._selectedRow.index - this.grid._startRowIndex)).children().removeClass(this.css.selectedCell)
                } else {
                    a(this.grid._selectedRow.element.children()).removeClass(this.css.selectedCell)
                }
                this.grid._selectedRow = null
            }
            if (this.grid._selectedCell !== null && this.grid._selectedCell !== undefined) {
                if (e && this.grid._selectedCell.rowIndex - this.grid._startRowIndex >= 0) {
                    a(this.grid.cellAt(this.grid._selectedCell.index, this.grid._selectedCell.rowIndex - this.grid._startRowIndex)).removeClass(this.css.selectedCell)
                } else {
                    this.grid._selectedCell.element.removeClass(this.css.selectedCell)
                }
                this.grid._selectedCell = null
            }
            if (!c) {
                if (this.activeCell()) {
                    this.activeCell().element.removeClass(this.css.activeCell);
                    this.activeCell(null)
                }
                if (this._realActiveCell) {
                    this._realActiveCell.element.removeClass(this.css.activeCell);
                    this._realActiveCell = null
                }
                if (this._realActiveRow) {
                    this._realActiveRow.element.removeClass(this.css.activeRow);
                    this._realActiveRow = null
                }
                if (this.activeRow()) {
                    this.activeRow().element.removeClass(this.css.activeRow);
                    this.activeRow(null)
                }
            }
            if (d) {
                this.activeCell(null);
                this.activeRow(null)
            }
            this._trigger("selectioncleared", this, {
                owner: this.grid,
                uiDirty: d
            })
        },

        clearSelectionAllChildren: function (d, f) {
            var b = this.grid.children(), c, e;
            for (c = 0; c < b.length; c++) {
                e = a(b[c]).data("igGridSelection");
                if (e) {
                    e.clearSelection(d, f)
                }
            }
        },

        clearSelectionAll: function (b, c) {
            this.clearSelection(b, c);
            this.clearSelectionAllOthers(b, c)
        },

        clearSelectionAllOthers: function (e, h) {
            var c, b, d, g, f;
            if (!this._hgrid) {
                if (this.grid.element.hasClass("ui-iggrid-root")) {
                    c = this.grid.element.data("igHierarchicalGrid")
                } else {
                    c = this.grid.element.closest(".ui-iggrid-root").data("igHierarchicalGrid")
                }
            } else {
                c = this._hgrid.data("igHierarchicalGrid")
            }
            if (c) {
                b = c.allChildren();
                for (d = 0; d < b.length; d++) {
                    g = a(b[d]).data("igGridSelection");
                    if (g && a(b[d]).attr("id") !== this.grid.element.attr("id")) {
                        g.clearSelection(e, h)
                    }
                }
            }
            if ((c.element.attr("id") !== this.grid.element.attr("id") && c.element.is("table")) || (c.element.is("div") && a("#" + c.element.attr("id") + "_table").attr("id") !== this.grid.element.attr("id"))) {
                if (!c.element.is("table")) {
                    f = a("#" + c.element.attr("id") + "_table").data("igGridSelection")
                } else {
                    f = c.element.data("igGridSelection")
                }
                f.clearSelection(e, h)
            }
        },

        _excludeRows: function (b) {
            return this.grid.element.children("tbody").children("tr:[data-container=true]").length
        },

        _excludeRowsLt: function (b) {
            var c = b.index();
            if (this._groupBy) {
                return 0
            }
            return this.grid.element.children("tbody").children("tr:lt(" + c + ")").filter("[data-container=true]").length
        },

        _calcExtraCells: function () {
            return this.grid.element.find("tbody > tr > td:[data-skip=true]").first().parent().find("[data-skip=true]").length
        },

        _columnsCollectionModified: function () {
            this._registerTbodyEvents()
        },

        destroy: function () {
            this.clearSelection();
            this._unregisterEvents();
            a.Widget.prototype.destroy.call(this);
            return this
        },

        _onUIDirty: function (c, b) {
            if (b.owner === this || b.owner.element[0].id !== this.element[0].id) {
                return
            }
            if (!this.grid.options.virtualization && !this.grid.options.rowVirtualization) {
                this._rowCount = this.grid.dataSource.dataView().length
            }
            if (this._groupBy) {
                this._rowCount += this.grid.element.children("tbody").children("tr[data-grouprow=true]")
            }
            this.clearSelection(true, true)
        },

        _injectGrid: function (b) {
            var c;
            this.grid = b;
            this.activeCell(null);
            this.grid._selectedCell = null;
            this.grid._selectedRow = null;
            this.activeRow(null);
            this.grid._selectedCells = [];
            this.grid._selectedRows = [];
            for (c = 0; c < this.grid.options.features.length; c++) {
                if (this.grid.options.features[c].name === "Selection") {
                    this.grid.options.features[c].inherit = true
                }
            }
            this.grid.element.bind("iggridvirtualrecordsrender", a.proxy(this._rs, this));
            this._uiDirtyHandler = a.proxy(this._onUIDirty, this);
            this.grid.element.bind("iggriduisoftdirty", this._uiDirtyHandler);
            this._rowExpandedHandler = a.proxy(this._rowExpanded, this);
            this.grid.element.bind("ighierarchicalgridrowexpanded", this._rowExpandedHandler);
            this._columnsCollectionModifiedHandler = a.proxy(this._columnsCollectionModified, this);
            this.grid.element.bind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            this._hdirty = true
        }

    });

    a.extend(a.ui.igGridSelection, {
        version: "12.2.20122.1021"
    })

}(jQuery));