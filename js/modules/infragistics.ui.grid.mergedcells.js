﻿/*
 * Infragistics.Web.ClientUI Grid Merged Cells 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
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

    a.widget("ui.igGridMergedCells", {

        css: {
            mergedCellsTop: "ui-iggrid-mergedcellstop",
            mergedCellsBottom: "ui-iggrid-mergedcellsbottom",
            mergedCell: "ui-iggrid-mergedcell"
        },

        options: {
            initialState: "regular"
        },

        events: {
            cellsMerging: "cellsMerging",
            cellsMerged: "cellsMerged"
        },

        _create: function () {
            this._first = true;
            this._sortingRequested = false
        },

        destroy: function () {
            this._removePaint();
            this._unregisterEvents();
            a.Widget.prototype.destroy.call(this);
            return this
        },

        _gridSorting: function () {
            this._sortingRequested = true
        },

        _gridSorted: function () {
            this._first = false;
            this._sortingRequested = false
        },

        _gridRendered: function (b, h) {
            var f, d, g = this.grid.dataSource.settings.sorting.expressions, c, e;
            if (this.options.initialState === "merged" && this._first === true && this._sortingRequested === false) {
                for (e = 0; e < this.grid.options.columns.length; e++) {
                    this._paintMergedCells(e)
                }
            } else {
                for (c = 0; c < g.length; c++) {
                    f = g[c].fieldName;
                    for (e = 0; e < this.grid.options.columns.length; e++) {
                        if (this.grid.options.columns[e].key === f) {
                            d = e;
                            break
                        }
                    }
                    this._paintMergedCells(d)
                }
            }
        },

        _paintMergedCells: function (h) {
            var c, k, f = true, g, b, e, l = false, d = 0, j;
            c = a("#" + this.grid.id() + " tbody tr>td:nth-child(" + (h + 1 + this._getSystemColumnsCount()) + ")");
            k = a(c[0]);
            for (g = 1; g < c.length; g++) {
                if (k.html() === a(c[g]).html() && k.html() !== e) {
                    if (l === false) {
                        b = this._getEventArgsForCell(k);
                        j = this._trigger(this.events.cellsMerging, this, b);
                        if (j !== true) {
                            e = k.html();
                            k = a(c[g]);
                            continue
                        }
                    }
                    e = null;
                    l = true;
                    if (f === true) {
                        a(c[g - 1]).addClass(this.css.mergedCellsTop);
                        f = false;
                        d++
                    }
                    a(c[g]).addClass(this.css.mergedCell);
                    d++
                } else {
                    if (l === true) {
                        b.count = d;
                        d = 0;
                        this._trigger(this.events.cellsMerged, this, b);
                        a(c[g - 1]).addClass(this.css.mergedCellsBottom);
                        l = false
                    }
                    f = true
                }
                k = a(c[g])
            }
            if (l === true) {
                b.count = d;
                this._trigger(this.events.cellsMerged, this, b);
                a(c[c.length - 1]).addClass(this.css.mergedCellsBottom)
            }
        },

        _getSystemColumnsCount: function () {
            return a("#" + this.grid.id() + " tbody>tr:first>td[data-parent='true'],td[data-skip='true']").length
        },

        _getEventArgsForCell: function (c) {
            var b, f = c.closest("tr"), e = f.attr("data-id"), d = this._getVisibleRowIndex(f);
            if (e === "" || e === null || e === undefined) {
                e = d
            }
            b = {
                owner: this,
                row: f,
                rowIndex: d,
                rowKey: e,
                grid: this.grid,
                value: c.html()
            };
            return b
        },

        _getVisibleRowIndex: function (b) {
            return b.closest("tbody").children("tr:not([data-container='true'],[data-grouprow='true'])").index(b)
        },

        _removePaint: function () {
            var c = a("#" + this.grid.id() + "> tbody > tr:not([data-container='true'],[data-grouprow='true'])"), b, d;
            b = c.children("td." + this.css.mergedCellsTop + ",td." + this.css.mergedCell);
            for (d = 0; d < b.length; d++) {
                a(b[d]).removeClass(this.css.mergedCellsTop).removeClass(this.css.mergedCell).removeClass(this.css.mergedCellsBottom)
            }
        },

        _createHandlers: function () {
            this._gridRenderedHandler = a.proxy(this._gridRendered, this);
            this._sortingInitiatedHandler = a.proxy(this._gridSorting, this);
            this._sortingHandler = a.proxy(this._gridSorted, this)
        },

        _registerEvents: function () {
            this.grid.element.bind("iggridrendered", this._gridRenderedHandler);
            this.grid.element.bind("iggridsortingcolumnsorting", this._sortingInitiatedHandler);
            this.grid.element.bind("iggridsortingcolumnsorted", this._sortingHandler)
        },

        _unregisterEvents: function () {
            this.grid.element.unbind("iggridrendered", this._gridRenderedHandler);
            this.grid.element.unbind("iggridsortingcolumnsorting", this._sortingInitiatedHandler);
            this.grid.element.unbind("iggridsortingcolumnsorted", this._sortingHandler)
        },

        _injectGrid: function (b, c) {
            this.grid = b;
            this._createHandlers();
            this._registerEvents()
        }

    });

    a.extend(a.ui.igGridMergedCells, {
        version: "12.2.20122.1021"
    })

}(jQuery));