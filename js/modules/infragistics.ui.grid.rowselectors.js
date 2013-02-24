﻿/*
 * Infragistics.Web.ClientUI Grid Tooltips 12.2.20122.1021
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
 *  ig.ui.editors.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */
if (typeof jQuery !== "function") {
    throw new Error("jQuery is undefined")
}

(function (a) {

    a.widget("ui.igGridRowSelectors", {

        options: {
            enableRowNumbering: true,
            enableCheckBoxes: false,
            rowNumberingSeed: 0,
            rowSelectorColumnWidth: null,
            requireSelection: true,
            showCheckBoxesOnFocus: false
        },

        css: {
            rowSelectorCssClass: "ui-iggrid-rowselector-class",
            headerRowSelectorCssClass: "ui-iggrid-rowselector-header",
            footerRowSelectorCssClass: "ui-iggrid-rowselector-footer",
            checkbox: "ui-state-default ui-corner-all ui-igcheckbox-normal",
            checkboxOff: "ui-icon ui-icon-check ui-igcheckbox-normal-off",
            checkboxOn: "ui-icon ui-icon-check ui-igcheckbox-normal-on",
            nodeHovered: "ui-state-hover"
        },

        events: {
            rowSelectorClicked: "rowSelectorClicked",
            checkBoxStateChanging: "checkBoxStateChanging",
            checkBoxStateChanged: "checkBoxStateChanged"
        },

        _createWidget: function (c, b) {
            a.Widget.prototype._createWidget.apply(this, arguments);
            if (this.options.rowSelectorColumnWidth === null) {
                this.options.rowSelectorColumnWidth = 45;
                if (this.options.enableCheckBoxes === true && this.options.enableRowNumbering === true) {
                    this.options.rowSelectorColumnWidth += 15
                }
            }
        },

        _create: function () {
            this._cpIdx = 0;
            this._pSelection = {};
            this._vRsDom = [];
            this._cIdx = 0;
            this._functionsRedirected = false;
            this._isPaging = false;
            this._hovTR = null;
            this._gridRenderRecord = null;
            this._gridRenderRecordInArray = null;
            this._checkBoxesShown = false;
            this._nTmpl = "{{html ig_rs_idx}}";
            this._v = false;
            this._ie7 = a.browser.msie && parseInt(a.browser.version, 10) === 7
        },

        destroy: function () {
            this._unregisterEvents();
            this._unregisterCellEvents();
            if (this._gridRenderRecordHandler !== undefined) {
                this.grid._renderColgroup = this._flatRenderColgroup;
                this.grid._renderRecord = this._gridRenderRecordHandler;
                this.grid._renderRecordInArray = this._gridRenderRecordInArrayHandler;
                this.grid._generateRowTemplate = this._gridRenderTemplateHandler
            }
            if (this.options.enableCheckBoxes === true) {
                this._unregisterCheckBoxEvents()
            }
            this._cleanInterface(false);
            a.Widget.prototype.destroy.call(this);
            return this
        },

        _renderHeaderRowSelectors: function (f) {
            var g, e, c, d, b;
            if (f.id() !== this.grid.id()) {
                return
            }
            if (this.grid.options.fixedHeaders === true) {
                g = a("#" + this.grid.id() + "_headers thead").children()
            } else {
                g = a("#" + this.grid.id() + " thead").children()
            }
            if (g.length > 0) {
                c = a(g[0]).find("th.ui-iggrid-expandheadercell")[0];
                if (c === undefined) {
                    c = a(g[e]).children()[0];
                    this._index = 0
                } else {
                    this._index = a(c).index() + 1
                }
                if (this.grid._isMultiColumnGrid) {
                    b = a("<th></th>").prependTo(this.grid.headersTable().find("thead tr:nth-child(1)")).addClass(this.css.headerRowSelectorCssClass).addClass(this.grid.css.headerClass).attr("data-role", "rs").attr("data-skip", "true");
                    b.attr("rowspan", this.grid._maxLevel + 1);
                    if (this.options.enableCheckBoxes === true) {
                        a(this._getCheckBox(true)).appendTo(b)
                    }
                } else {
                    for (e = 0; e < g.length; e++) {
                        if (a(g[e]).find("th[data-role='rs']").length > 0) {
                            continue
                        }
                        d = a("<th>" + (this._ie7 ? "&nbsp;" : "") + "</th>").addClass(this.css.headerRowSelectorCssClass).addClass(e === 0 ? this.grid.css.headerClass : "").attr("data-role", "rs").attr("data-skip", "true").insertBefore(a(a(g[e]).children()[this._index]));
                        if (this.options.enableCheckBoxes === true && e === 0) {
                            a(this._getCheckBox(true)).appendTo(d)
                        }
                    }
                }
            }
        },

        _renderFooterRowSelectors: function (d) {
            var e, c, b;
            if (d.id() !== this.grid.id()) {
                return
            }
            if (this.grid.options.fixedFooters === true) {
                e = a("#" + this.grid.id() + "_footers tfoot").children()
            } else {
                e = a("#" + this.grid.id() + " tfoot").children()
            }
            if (e.length > 0) {
                for (c = 0; c < e.length; c++) {
                    if (a(e[c]).find("td[data-role='rs']").length > 0) {
                        continue
                    }
                    b = a("<td>" + (this._ie7 ? "&nbsp;" : "") + "</td>").addClass(this.css.footerRowSelectorCssClass).attr("data-role", "rs").attr("data-skip", "true").insertBefore(a(a(e[c]).children()[this._index]))
                }
            }
        },

        _headerRendered: function (b, c) {
            this._renderHeaderRowSelectors(c.owner)
        },

        _footerRendered: function (b, c) {
            this._renderFooterRowSelectors(c.owner)
        },

        _recordsRendering: function (b, c) {
            if (this.grid.id() !== c.owner.id()) {
                return
            }
            this._cIdx = c.owner.cvSr && c.owner.cvEr ? c.owner.cvSr : 0;
            if (this._functionsRedirected === false) {
                this._renderRecordHandler = a.proxy(this._rsRenderRecord, this);
                this._renderRecordInArrayHandler = a.proxy(this._rsRenderRecordInArray, this);
                this._gridRenderRecordHandler = a.proxy(this.grid._renderRecord, this.grid);
                this._gridRenderRecordInArrayHandler = a.proxy(this.grid._renderRecordInArray, this.grid);
                this._renderTemplateHandler = a.proxy(this._rsRenderTemplate, this);
                this._gridRenderTemplateHandler = a.proxy(this.grid._generateRowTemplate, this.grid);
                this._gridRenderRecord = this._gridRenderRecordHandler;
                this._gridRenderRecordInArray = this._gridRenderRecordInArrayHandler;
                this.grid._renderRecord = this._renderRecordHandler;
                this.grid._renderRecordInArray = this._renderRecordInArrayHandler;
                this._gridGenerateRowTemplate = this._gridRenderTemplateHandler;
                this.grid._generateRowTemplate = this._renderTemplateHandler
            }
            this._functionsRedirected = true
        },

        _recordsRendered: function (b, c) {
            if (this.grid.id() !== c.owner.id()) {
                return
            }
            if (this.options.enableCheckBoxes === true) {
                this._registerCheckBoxEvents()
            }
        },

        _gridRendered: function (b, c) {
            if (c === undefined) {
                return
            }
            if (this.grid.id() !== c.owner.id()) {
                return
            }
            this._registerCellEvents();
            if (this.options.enableCheckBoxes === true) {
                this._registerCheckBoxEvents()
            }
        },

        _rsRenderColgroup: function (d, g, h, f, e, b) {
            var c;
            d.apply(this, [h, f, e, b]);
            c = a(h).find("colgroup");
            if (c.find("col[data-role='rs']").length === 0) {
                a("<col></col>").prependTo(c).css("width", g.options.rowSelectorColumnWidth).attr("data-skip", "true").attr("data-role", "rs")
            }
        },

        _rsRenderRecord: function (c, g) {
            var e = this._gridRenderRecord(c, g), f, b, d, h = this._getRowSelectorCellMarkup();
            d = e.indexOf("ui-iggrid-expandcolumn");
            if (d >= 0) {
                b = e.substr(d);
                d = d + b.indexOf("</td>") + 4;
                f = e.substring(0, d + 1);
                b = e.substring(d + 1)
            } else {
                d = e.indexOf(">") + 1;
                f = e.substring(0, d);
                b = e.substring(d)
            }
            e = f + h + b;
            return e
        },

        _rsRenderRecordInArray: function (b, g, c, f) {
            var d, e;
            this._gridRenderRecordInArray(b, g, c, f);
            for (d = b.length - 1; d >= 0; d--) {
                if (b[d].indexOf && b[d].indexOf("<tr") !== -1) {
                    for (e = d; e < b.length; e++) {
                        if (b[e].indexOf && b[e].indexOf("<td") !== -1) {
                            if (b[e].indexOf("ui-iggrid-expandcolumn") !== -1) {
                                b[e] += this._getRowSelectorCellMarkup();
                                break
                            } else {
                                b[e] = this._getRowSelectorCellMarkup() + b[e];
                                break
                            }
                        }
                    }
                    break
                }
            }
        },

        _rsRenderTemplate: function () {
            var d = this._gridGenerateRowTemplate(), e, b, c, g = this, f = this._getRowSelectorCellMarkup(true);
            a.ig.rowNumberingFunctionDelegate = function (h) {
                return a("#" + g.grid.id()).data("igGridRowSelectors")._getCurrentNumber(h)
            };
            c = d.indexOf("ui-iggrid-expandcolumn");
            if (c >= 0) {
                b = d.substr(c);
                c = c + b.indexOf("</td>") + 4;
                e = d.substring(0, c + 1);
                b = d.substring(c + 1)
            } else {
                c = d.indexOf(">") + 1;
                e = d.substring(0, c);
                b = d.substring(c)
            }
            d = e + f + b;
            return d
        },

        _renderExtraHeaderCells: function (d, b, c) {
            this._renderExtraCells(d, b, c, true)
        },

        _renderExtraFooterCells: function (e, b, d, c) {
            this._renderExtraCells(e, b, d, false, c)
        },

        _renderExtraCells: function (j, c, g, e, d) {
            var i, h, f, b;
            if (j.find("[data-role='rs']").length > 0) {
                return
            }
            if (e === true) {
                i = a("<th>" + (this._ie7 ? "&nbsp;" : "") + "</th>").addClass(this.css.headerRowSelectorCssClass).attr("data-role", "rs").attr("data-skip", "true")
            } else {
                i = a("<td>" + (this._ie7 ? "&nbsp;" : "") + "</td>").addClass(this.css.footerRowSelectorCssClass).addClass(d).attr("data-role", "rs").attr("data-skip", "true")
            }
            b = j.find("th.ui-iggrid-expandheadercell")[0];
            if (b === undefined) {
                b = j.children()[0];
                f = 0
            } else {
                f = a(b).index() + 1
            }
            if (g === true || b === undefined) {
                i.prependTo(j);
                f = 0
            } else {
                i.insertBefore(a(j.children()[f]))
            }
            if (c) {
                h = a("<col></col>").attr("data-skip", "true").attr("data-role", "rs").css("width", this.options.rowSelectorColumnWidth);
                h.insertBefore(a(c.children()[f]))
            }
        },

        _registerCellEvents: function () {
            a("#" + this.grid.id() + ">tbody>tr>th." + this.css.rowSelectorCssClass).bind({
                click: this._rsClickHandler
            });
            a("#" + this.grid.id() + " tbody").bind({
                mousemove: this._rrHoverHandler,
                mouseleave: this._rrLeaveHandler
            })
        },

        _unregisterCellEvents: function () {
            a("#" + this.grid.id() + ">tbody>tr>th." + this.css.rowSelectorCssClass).unbind({
                click: this._rsClickHandler
            });
            a("#" + this.grid.id() + " tbody").unbind({
                mousemove: this._rrHoverHandler,
                mouseleave: this._rrLeaveHandler
            })
        },

        _registerCheckBoxEvents: function () {
            var b = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]');
            if (b.length <= 0) {
                return
            }
            b.unbind({
                click: this._checkboxClickHandler,
                mouseover: this._checkboxMouseOverHandler,
                mouseout: this._checkboxMouseOutHandler
            }).bind({
                    click: this._checkboxClickHandler,
                    mouseover: this._checkboxMouseOverHandler,
                    mouseout: this._checkboxMouseOutHandler
                });
            a("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + '>thead>tr>th span[name="hchk"] > span').unbind({
                click: this._hCheckboxClickHandler,
                mouseover: this._checkboxMouseOverHandler,
                mouseout: this._checkboxMouseOutHandler
            }).bind({
                    click: this._hCheckboxClickHandler,
                    mouseover: this._checkboxMouseOverHandler,
                    mouseout: this._checkboxMouseOutHandler
                })
        },

        _unregisterCheckBoxEvents: function () {
            a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]').unbind({
                click: this._checkboxClickHandler,
                mouseover: this._checkboxMouseOverHandler,
                mouseout: this._checkboxMouseOutHandler
            });
            a("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + '>thead>tr>th span[name="hchk"] > span').unbind({
                click: this._hCheckboxClickHandler,
                mouseover: this._checkboxMouseOverHandler,
                mouseout: this._checkboxMouseOutHandler
            })
        },

        _checkboxMouseOver: function (b) {
            a(b.target).closest('span[data-role="checkbox"]').addClass(this.css.nodeHovered)
        },

        _checkboxMouseOut: function (b) {
            a(b.target).closest('span[data-role="checkbox"]').removeClass(this.css.nodeHovered)
        },

        _checkBoxClicked: function (c) {
            var j = a(c.target).closest("span[name='chk']"), e = j.parent(), h = e.parent(), b, f = this._getVisibleRowIndex(h), g = h.attr("data-id"), d, i = j.attr("data-chk");
            if (g === "" || g === null || g === undefined) {
                g = f
            }
            b = {
                row: h,
                rowIndex: f,
                rowKey: g,
                rowSelector: e,
                owner: this,
                grid: this.grid,
                currentState: i,
                newState: i === "off" ? "on" : "off",
                isHeader: false
            };
            d = this._triggerCheckingEvent(b);
            if (d === true) {
                this._handleCheck(j);
                this._updateHeader();
                delete b.currentState;
                b.state = b.newState;
                delete b.newState;
                this._triggerCheckedEvent(b)
            }
            c.stopPropagation()
        },

        _headerCheckBoxClicked: function (c) {
            var f = a(c.target).closest("span[name='hchk']"), b, d, e = f.attr("data-chk");
            b = {
                owner: this,
                grid: this.grid,
                currentState: e,
                newState: e === "off" ? "on" : "off",
                isHeader: true
            };
            d = this._triggerCheckingEvent(b);
            if (d === true) {
                this._handleHcheck(f);
                delete b.currentState;
                b.state = b.newState;
                delete b.newState;
                this._triggerCheckedEvent(b)
            }
            c.stopPropagation();
            c.preventDefault()
        },

        _handleCheck: function (b) {
            var f = b.parent().parent(), c = this._getVisibleRowIndex(f), e = this._getVisibleHRowIndex(f), d = 0;
            if (b === undefined || b === null) {
                return
            }
            if (this._v === true) {
                d = this.grid._startRowIndex
            }
            if (b.attr("data-chk") === "off") {
                this._alterCheckbox(b, true);
                if (this.grid.element.igGridSelection("option", "multipleSelection") !== true) {
                    this._clearRowSelectorsSelection()
                }
                this.grid.element.igGridSelection("selectRow", e);
                if (this._pSelection[this._cpIdx] === undefined) {
                    this._pSelection[this._cpIdx] = {}
                }
                this._pSelection[this._cpIdx][c + d] = true;
                this._updateCheckBoxes(c)
            } else {
                this._alterCheckbox(b, false);
                this.grid.element.igGridSelection("deselectRow", e + d);
                this._pSelection[this._cpIdx][c + d] = false
            }
        },

        _handleHcheck: function (b) {
            var c = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]'), d, e;
            if (b.attr("data-chk") === "off") {
                this._alterCheckbox(b, true);
                for (d = 0; d < c.length; d++) {
                    if (a(c[d]).attr("data-chk") === "off") {
                        this._handleCheck(a(c[d]))
                    }
                }
            } else {
                this._alterCheckbox(b, false);
                for (d = 0; d < c.length; d++) {
                    if (a(c[d]).attr("data-chk") === "on") {
                        this._handleCheck(a(c[d]))
                    }
                }
                if (this._v === true) {
                    this.grid.element.igGridSelection("clearSelection")
                }
            }
            e = b.attr("data-chk") === "on" ? true : false;
            if (this._v === true) {
                for (d = 0; d < this.grid._totalRowCount; d++) {
                    this._pSelection[this._cpIdx][d] = e
                }
            }
        },

        _updateHeader: function () {
            var c = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]'), e, b = true, d = a("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + '>thead>tr>th span[name="hchk"]');
            for (e = 0; e < c.length; e++) {
                if (a(c[e]).attr("data-chk") === "off") {
                    b = false;
                    break
                }
            }
            this._alterCheckbox(d, b)
        },

        _updateCheckBoxes: function (c) {
            var b, d = this;
            if (this.grid.element.igGridSelection("option", "multipleSelection") === true) {
                return
            }
            b = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]');
            if (this._pSelection[this._cpIdx] !== undefined) {
                a.each(this._pSelection[this._cpIdx], function (e, f) {
                    if (f === true && parseInt(e, 10) !== c) {
                        d._alterCheckbox(a(b[e]), false);
                        d._pSelection[d._cpIdx][e] = false
                    }
                })
            }
        },

        _alterCheckbox: function (d, c) {
            var b = a(d.children()[0]);
            if (d !== undefined && b !== undefined) {
                if (c === true) {
                    d.attr("data-chk", "on");
                    b.removeClass(this.css.checkboxOff).addClass(this.css.checkboxOn)
                } else {
                    d.attr("data-chk", "off");
                    b.removeClass(this.css.checkboxOn).addClass(this.css.checkboxOff)
                }
            }
        },

        _getRowSelectorCellMarkup: function (b) {
            return '<th class="' + this.css.rowSelectorCssClass + '"><span class="ui-icon ui-icon-triangle-1-e" style="margin-left: -5px"> </span>' + (this.options.enableRowNumbering === true ? (b === true ? this._nTmpl : this._getCurrentNumber()) : "") + (this.options.enableCheckBoxes === true ? this._getCheckBox() : "") + "</th>"
        },

        _getCheckBox: function (b) {
            return '<span name="' + (b === true ? "hchk" : "chk") + '" data-chk="off" data-role="checkbox" class="' + this.css.checkbox + '"' + (this.options.showCheckBoxesOnFocus === true && this._checkBoxesShown === false ? ' style="visibility: hidden;"' : "") + '><span class="' + this.css.checkboxOff + '"></span></span>'
        },

        _getCurrentNumber: function (b) {
            var c;
            if (b !== undefined && b !== null) {
                c = b
            } else {
                c = ++this._cIdx
            }
            return '<span class="ui-iggrid-rowselector-row-number">' + (c + this.options.rowNumberingSeed + this._getStartingIndexForPage()) + "</span>"
        },

        _getStartingIndexForPage: function () {
            if (this._isPaging === false) {
                return 0
            }
            return (this.grid.element.igGridPaging("pageIndex") * this.grid.element.igGridPaging("pageSize"))
        },

        _rsRenderVirtualRecords: function (b, e) {
            var c = 0, d;
            this._cIdx = 0;
            this._vRsDom = [];
            for (c; c < e.rows.length; c++) {
                d = a(this._getRowSelectorCellMarkup());
                this._vRsDom.push(d);
                d.prependTo(a(e.rows[c]))
            }
            this._registerCellEvents();
            if (this.options.enableCheckBoxes === true) {
                this._registerCheckBoxEvents()
            }
        },

        _rrn: function (c, b) {
            var e = this._vRsDom, d = 0, f = this.grid._startRowIndex;
            if (this.options.enableRowNumbering === true) {
                for (d = 0; d < e.length; d++) {
                    a(e[d]).children("span.ui-iggrid-rowselector-row-number").text(f + d + this.options.rowNumberingSeed + 1)
                }
            }
            if (!this._skipRefresh) {
                this._refreshSelection()
            }
        },

        _rcn: function (c, b) {
            var d = 0, e = this._index + 1;
            if (b.startColIndex !== 0) {
                if (this.grid.options.fixedHeaders === true) {
                    a("#" + this.grid.id() + "_headers colgroup:nth-child(" + e + ")").hide()
                }
                a("#" + this.grid.id() + " colgroup:nth-child(" + e + ")").hide();
                a("#" + this.grid.id() + " thead th[data-role='rs']").hide();
                a("#" + this.grid.id() + " tfoot th[data-role='rs']").hide();
                for (d; d < this._vRsDom.length; d++) {
                    this._vRsDom[d].hide()
                }
            } else {
                if (this.grid.options.fixedHeaders === true) {
                    a("#" + this.grid.id() + "_headers colgroup:nth-child(" + e + ")").css("display", "")
                }
                a("#" + this.grid.id() + " colgroup:nth-child(" + e + ")").css("display", "");
                a("#" + this.grid.id() + " thead th[data-role='rs']").css("display", "");
                a("#" + this.grid.id() + " tfoot th[data-role='rs']").css("display", "");
                for (d; d < this._vRsDom.length; d++) {
                    this._vRsDom[d].css("display", "")
                }
            }
        },

        _cSelectionChanged: function (d, e) {
            var b, c = false;
            if (e.owner.grid.id() !== this.grid.id()) {
                c = true
            }
            if (e.selectedCells.length === 0 && this.grid._selectedCell) {
                b = [this.grid._selectedCell]
            } else {
                b = e.selectedCells
            }
            this._selectionChanged(this.grid._selectedRows, b, c);
            this._populateSelectionChanges()
        },

        _rSelectionChanged: function (c, e) {
            var d, b = false;
            if (e.owner.grid.id() !== this.grid.id()) {
                b = true
            }
            if (e.selectedRows.length === 0 && this.grid._selectedRow) {
                d = [this.grid._selectedRow]
            } else {
                d = e.selectedRows
            }
            this._selectionChanged(d, this.grid._selectedCells, b);
            this._populateSelectionChanges()
        },

        _populateSelectionChanges: function () {
            var e, d, h, g, f, c, b;
            e = a("table[id*='" + this.grid.id() + "_']");
            for (h = 0; h < e.length; h++) {
                d = a(e[h]);
                g = d.igGridSelection("selectedRows");
                f = d.igGridSelection("selectedRow");
                c = d.igGridSelection("selectedCells");
                b = d.igGridSelection("selectedCell");
                if (g.length === 0 && f) {
                    g = [f]
                }
                if (c.length === 0 && b) {
                    c = [b]
                }
                if (d.data().igGridRowSelectors !== undefined) {
                    d.data().igGridRowSelectors._selectionChanged(g, c, false)
                }
            }
        },

        _selectionChanged: function (g, e, f) {
            var c, d, b;
            this._clearRowSelectorsSelection();
            if (this.options.enableCheckBoxes === true) {
                this._clearRowSelectorsCheckboxes();
                this._pSelection[this._cpIdx] = {}
            }
            if (f === true) {
                return
            }
            if (this._checkBoxesShown === false && this.options.showCheckBoxesOnFocus === true) {
                this._animateCheckboxes(true)
            }
            for (c = 0; c < g.length; c++) {
                d = a(a(g[c].element).children()[this._index]);
                if (d.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
                    d.addClass("ui-iggrid-selectedcell ui-state-active")
                }
                if (this.options.enableCheckBoxes === true) {
                    b = a(a(g[c].element)).children().find("span[name='chk']");
                    this._alterCheckbox(b, true);
                    this._pSelection[this._cpIdx][g[c].index] = true
                }
            }
            for (c = 0; c < e.length; c++) {
                d = a(a(e[c].element).parent().children()[this._index]);
                if (d.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
                    d.addClass("ui-iggrid-selectedcell ui-state-active")
                }
            }
            this._updateHeader()
        },

        _refreshSelection: function () {
            var h, g, e, f, d, c, b;
            this._clearRowSelectorsSelection(false);
            if (this.options.enableCheckBoxes === true) {
                c = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]').attr("data-chk", "off");
                c.children("span").removeClass(this.css.checkboxOn).addClass(this.css.checkboxOff)
            }
            if (this.grid._selectedRows.length === 0 && this.grid._selectedRow) {
                h = [this.grid._selectedRow]
            } else {
                h = this.grid._selectedRows
            }
            if (this.grid._selectedCells.length === 0 && this.grid._selectedCell) {
                g = [this.grid._selectedCell]
            } else {
                g = this.grid._selectedCells
            }
            for (d = 0; d < h.length; d++) {
                e = h[d].index - this.grid._startRowIndex;
                if (e >= 0 && e < this._vRsDom.length) {
                    f = this._vRsDom[e];
                    if (f.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
                        f.addClass("ui-iggrid-selectedcell ui-state-active")
                    }
                    if (this.options.enableCheckBoxes === true) {
                        b = f.find("span[name='chk']");
                        this._alterCheckbox(b, true);
                        b.closest("tr").children().addClass("ui-iggrid-selectedcell ui-state-active")
                    }
                }
            }
            for (d = 0; d < g.length; d++) {
                e = g[d].rowIndex - this.grid._startRowIndex;
                if (e >= 0 && e < this._vRsDom.length) {
                    f = this._vRsDom[e];
                    if (f.hasClass("ui-iggrid-selectedcell ui-state-active") === false) {
                        f.addClass("ui-iggrid-selectedcell ui-state-active")
                    }
                }
            }
            if (this.options.enableCheckBoxes === true && this._pSelection[this._cpIdx]) {
                c = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]').attr("data-chk", "off");
                c.children("span").removeClass(this.css.checkboxOn).addClass(this.css.checkboxOff);
                for (d = this.grid._startRowIndex; d < this.grid._startRowIndex + c.length; d++) {
                    if (this._pSelection[this._cpIdx][d]) {
                        b = a(c[d - this.grid._startRowIndex]);
                        if (this._pSelection[this._cpIdx][d] === true) {
                            this._alterCheckbox(b, true);
                            b.closest("tr").children().addClass("ui-iggrid-selectedcell ui-state-active")
                        }
                    }
                }
            }
        },

        _clearSelection: function (b, c) {
            if (c.owner.id() === this.grid.id()) {
                this._clearRowSelectorsSelection();
                this._clearRowSelectorsCheckboxes()
            }
            if (!c.uiDirty || c.uiDirty === false) {
                this._pSelection[this._cpIdx] = {}
            }
        },

        _clearRowSelectorsSelection: function () {
            var c, b;
            c = a("#" + this.grid.id() + ">tbody>tr>th." + this.css.rowSelectorCssClass);
            for (b = 0; b < c.length; b++) {
                a(c[b]).removeClass("ui-iggrid-selectedcell ui-state-active")
            }
            this._index = a(c[0]).index()
        },

        _clearRowSelectorsCheckboxes: function () {
            var c, b, d;
            c = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]');
            for (d = 0; d < c.length; d++) {
                b = a(c[d]);
                if (b.attr("data-chk") === "on") {
                    this._alterCheckbox(b, false)
                }
            }
            if (c.length > 0) {
                this._updateHeader()
            }
        },

        _cellClick: function (c, h) {
            var b, d = a(c.target).closest("th"), g = d.parent(), e = this._getVisibleRowIndex(g), f = g.attr("data-id");
            if (this.options.showCheckBoxesOnFocus === true && this._checkBoxesShown === false) {
                this._animateCheckboxes(true)
            }
            if (a(c.target).is("span") && a(c.target).attr("unselectable")) {
                return
            }
            if (f === "" || f === null || f === undefined) {
                f = e
            }
            b = {
                row: g,
                rowIndex: e,
                rowKey: f,
                rowSelector: d,
                owner: this,
                grid: this.grid
            };
            this._triggerClickEvent(b)
        },

        _mouseHoverRow: function (b, f) {
            var c, d, e = b.target;
            while (e) {
                c = e.parentNode;
                if ((d = e.nodeName) === "TR" && c.nodeName === "TBODY") {
                    break
                }
                e = (d === "TABLE") ? null : c
            }
            if (this._hovTR !== e) {
                if (this._hovTR && a(this._hovTR).attr("data-container") !== "true") {
                    a("th." + this.css.rowSelectorCssClass, this._hovTR).removeClass(this.css.nodeHovered)
                }
                if (e && a(e).attr("data-container") !== "true") {
                    a("th." + this.css.rowSelectorCssClass, e).addClass(this.css.nodeHovered)
                }
                this._hovTR = e
            }
        },

        _mouseLeaveRow: function (b, c) {
            if (this._hovTR) {
                a("th", this._hovTR).removeClass(this.css.nodeHovered);
                this._hovTR = null
            }
        },

        _triggerClickEvent: function (b) {
            this._trigger(this.events.rowSelectorClicked, this, b)
        },

        _triggerCheckingEvent: function (b) {
            return this._trigger(this.events.checkBoxStateChanging, this, b)
        },

        _triggerCheckedEvent: function (b) {
            this._trigger(this.events.checkBoxStateChanged, this, b)
        },

        _pageIndexChanging: function (b, c) {
            if (c.owner.grid.id() !== this.grid.id()) {
                return
            }
            this._isPaging = true;
            this._cIdx = 0
        },

        _pageIndexChanged: function (d, h) {
            var g = this, e = h.pageIndex, c, f, b;
            if (h.owner.grid.id() !== this.grid.id()) {
                return
            }
            this._cpIdx = e;
            if (this._pSelection[e] !== undefined && this._pSelection[e] !== null) {
                c = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]');
                a.each(this._pSelection[e], function (i, j) {
                    if (g._pSelection[e][i] === true) {
                        f = parseInt(i, 10);
                        b = a(c[f]);
                        g._alterCheckbox(b, true);
                        g.grid.element.igGridSelection("selectRow", b.closest("tr").index())
                    }
                })
            }
            if (this.options.enableCheckBoxes === true) {
                this._updateHeader()
            }
        },

        _getVisibleRowIndex: function (b) {
            return b.closest("tbody").children("tr:not([data-container='true'],[data-grouprow='true'])").index(b)
        },

        _getVisibleHRowIndex: function (b) {
            return b.closest("tbody").children("tr:not([data-container='true'])").index(b)
        },

        _animateCheckboxes: function (f) {
            var e = a("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + '>thead>tr>th span[name="hchk"]'), d = a("#" + this.grid.id() + '>tbody>tr>th span[name="chk"]'), b = e.add(d);
            if (f === true) {
                b.css("visibility", "visible").css("opacity", 0).animate({
                    opacity: 1
                }, 1000)
            } else {
                b.css("opacity", 1000).animate({
                    opacity: 0
                }, 1000, function () {
                    a(this).css("visibility", "hidden")
                })
            }
            this._checkBoxesShown = f
        },

        _newRowAdded: function (b, c) {
            this._unregisterCellEvents();
            this._registerCellEvents();
            if (this.options.enableCheckBoxes === true) {
                this._registerCheckBoxEvents()
            }
        },

        _cleanSelection: function (b, d) {
            var c;
            c = a("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + '>thead>tr>th span[name="hchk"]');
            this._alterCheckbox(c, false);
            this._pSelection = {}
        },

        _resetIndexing: function () {
            this._cIdx = 0
        },

        _cleanInterface: function (e) {
            var d, c, b, f;
            if (e === true) {
                d = a("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + '>thead>tr>th span[name="hchk"]');
                this._alterCheckbox(d, false);
                return
            }
            b = a("#" + this.grid.id() + " col[data-role='rs']");
            if (this.grid.options.fixedHeaders === true) {
                b = b.add("#" + this.grid.id() + "_headers col[data-role='rs']")
            }
            if (this.grid.options.fixedFooters === true) {
                b = b.add("#" + this.grid.id() + "_footers col[data-role='rs']")
            }
            c = a("#" + this.grid.id() + (this.grid.options.fixedFooters === true ? "_footers" : "") + " td[data-role='rs']");
            d = a("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + " th[data-role='rs']");
            f = a("#" + this.grid.id() + " th.ui-iggrid-rowselector-class");
            b.remove();
            c.remove();
            d.remove();
            f.remove()
        },

        _checkForSelection: function () {
            var b, c = false;
            for (b = 0; b < this.grid.options.features.length; b++) {
                if (this.grid.options.features[b].name === "Selection") {
                    c = true;
                    break
                }
            }
            if (c === false) {
                if (this.options.requireSelection === true) {
                    throw new Error(a.ig.GridRowSelectors.locale.selectionNotLoaded)
                } else {
                    this._skipRefresh = true
                }
            }
        },

        _createHandlers: function () {
            this._headerRenderedHandler = a.proxy(this._headerRendered, this);
            this._footerRenderedHandler = a.proxy(this._footerRendered, this);
            this._recordsRenderingHandler = a.proxy(this._recordsRendering, this);
            this._recordsRenderedHandler = a.proxy(this._recordsRendered, this);
            this._gridRenderedHandler = a.proxy(this._gridRendered, this);
            this._cellSelectionChangedHandler = a.proxy(this._cSelectionChanged, this);
            this._rowSelectionChangedHandler = a.proxy(this._rSelectionChanged, this);
            this._clearSelectionHandler = a.proxy(this._clearSelection, this);
            this._virtualDomBuiltHandler = a.proxy(this._rsRenderVirtualRecords, this);
            this._virtualRowsHandler = a.proxy(this._rrn, this);
            this._virtualColumnsHandler = a.proxy(this._rcn, this);
            this._pageIndexChangingHandler = a.proxy(this._pageIndexChanging, this);
            this._pageIndexChangedHandler = a.proxy(this._pageIndexChanged, this);
            this._groupedColumnsChangingHandler = a.proxy(this._resetIndexing, this);
            this._renderExtraHeaderCellHandler = a.proxy(this._renderExtraHeaderCells, this);
            this._renderExtraFooterCellHandler = a.proxy(this._renderExtraFooterCells, this);
            this._rsClickHandler = a.proxy(this._cellClick, this);
            this._rrHoverHandler = a.proxy(this._mouseHoverRow, this);
            this._rrLeaveHandler = a.proxy(this._mouseLeaveRow, this);
            this._newRowAddedHandler = a.proxy(this._newRowAdded, this);
            this._cleanHandler = a.proxy(this._cleanSelection, this);
            if (this.options.enableCheckBoxes === true) {
                this._checkboxMouseOverHandler = a.proxy(this._checkboxMouseOver, this);
                this._checkboxMouseOutHandler = a.proxy(this._checkboxMouseOut, this);
                this._checkboxClickHandler = a.proxy(this._checkBoxClicked, this);
                this._hCheckboxClickHandler = a.proxy(this._headerCheckBoxClicked, this)
            }
        },

        _registerEvents: function () {
            this.grid.element.bind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.bind("iggridfooterrendered", this._footerRenderedHandler);
            this.grid.element.bind("iggridrowsrendering", this._recordsRenderingHandler);
            this.grid.element.bind("iggridrowsrendered", this._recordsRenderedHandler);
            this.grid.element.bind("iggriddatarendered", this._gridRenderedHandler);
            this.grid.element.bind("iggridvirtualdombuilt", this._virtualDomBuiltHandler);
            this.grid.element.bind("iggridvirtualrecordsrender", this._virtualRowsHandler);
            this.grid.element.bind("iggridvirtualhorizontalscroll", this._virtualColumnsHandler);
            this.grid.element.bind("iggridselectioncellselectionchanged", this._cellSelectionChangedHandler);
            this.grid.element.bind("iggridselectionrowselectionchanged", this._rowSelectionChangedHandler);
            this.grid.element.bind("iggridselectioninternalrowselectionchanged", this._rowSelectionChangedHandler);
            this.grid.element.bind("iggridselectionselectioncleared", this._clearSelectionHandler);
            this.grid.element.bind("iggridpagingpageindexchanging", this._pageIndexChangingHandler);
            this.grid.element.bind("iggridpagingpageindexchanged", this._pageIndexChangedHandler);
            this.grid.element.bind("iggridpagingpagesizechanged", this._cleanHandler);
            this.grid.element.bind("iggridfilteringdatafiltered", this._cleanHandler);
            this.grid.element.bind("iggridgroupbygroupedcolumnschanged", this._cleanHandler);
            this.grid.element.bind("iggriduidirty", this._cleanHandler);
            this.grid.element.bind("iggridgroupbygroupedcolumnschanging", this._groupedColumnsChangingHandler);
            this.grid.element.bind("iggridupdatingrowadded", this._newRowAddedHandler)
        },

        _unregisterEvents: function () {
            this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.unbind("iggridfooterrendered", this._footerRenderedHandler);
            this.grid.element.unbind("iggridrowsrendering", this._recordsRenderingHandler);
            this.grid.element.unbind("iggridrowsrendered", this._recordsRenderedHandler);
            this.grid.element.unbind("iggriddatarendered", this._gridRenderedHandler);
            this.grid.element.unbind("iggridvirtualdombuilt", this._virtualDomBuiltHandler);
            this.grid.element.unbind("iggridvirtualrecordsrender", this._virtualRowsHandler);
            this.grid.element.unbind("iggridvirtualhorizontalscroll", this._virtualColumnsHandler);
            this.grid.element.unbind("iggridselectioncellselectionchanged", this._cellSelectionChangedHandler);
            this.grid.element.unbind("iggridselectionrowselectionchanged", this._rowSelectionChangedHandler);
            this.grid.element.unbind("iggridselectioninternalrowselectionchanged", this._rowSelectionChangedHandler);
            this.grid.element.unbind("iggridselectioncleared", this._clearSelectionHandler);
            this.grid.element.unbind("iggridpagingpageindexchanging", this._pageIndexChangingHandler);
            this.grid.element.unbind("iggridpagingpageindexchanged", this._pageIndexChangedHandler);
            this.grid.element.unbind("iggridpagingpagesizechanged", this._cleanHandler);
            this.grid.element.unbind("iggridfilteringdatafiltered", this._cleanHandler);
            this.grid.element.unbind("iggridgroupbygroupedcolumnschanged", this._cleanHandler);
            this.grid.element.unbind("iggriduidirty", this._cleanHandler);
            this.grid.element.unbind("iggridgroupbygroupedcolumnschanging", this._groupedColumnsChangingHandler);
            this.grid.element.unbind("iggridupdatingrowadded", this._newRowAddedHandler)
        },

        _injectGrid: function (b, c) {
            if (c === true) {
                this._cleanInterface(true);
                return
            }
            var d = this;
            this.grid = b;
            this._v = (this.grid.options.virtualization === true || this.grid.options.rowVirtualization === true) && (this.grid.options.virtualizationMode !== "continuous");
            this._flatRenderColgroup = this.grid._renderColgroup;
            this._createHandlers();
            this.grid._headerInitCallbacks.push({
                type: "RowSelectors",
                func: this._renderExtraHeaderCellHandler
            });
            this.grid._footerInitCallbacks.push({
                type: "RowSelectors",
                func: this._renderExtraFooterCellHandler
            });
            this._registerEvents();
            this.grid._renderColgroup = function () {
                if (d._flatRenderColgroup !== undefined) {
                    d._rsRenderColgroup.apply(d.grid, a.merge([d._flatRenderColgroup, d], arguments))
                }
            };
            this._checkForSelection()
        }

    });

    a.extend(a.ui.igGridRowSelectors, {
        version: "12.2.20122.1021"
    })

}(jQuery));