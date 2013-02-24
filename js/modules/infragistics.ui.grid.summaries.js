﻿/*
 * Infragistics.Web.ClientUI Grid Column Summaries 12.2.20122.1021
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

    a.widget("ui.igGridSummaries", {

        grid: null,

        css: {
            columnSummariesDropdown: "ui-iggrid-summaries-dialog",
            footerRowTextContainer: "ui-iggrid-summaries-footer-text-container",
            footerRowIconContainer: "ui-iggrid-summaries-footer-icon-container",
            footerDropdownButtonsContainer: "ui-iggrid-summaries-footer-dialog-buttons-container",
            footerButtonIcon: "ui-icon ui-icon-calculator",
            footerButtonIconHover: "ui-corner-all ui-iggrid-filterbuttonhover ui-state-hover",
            footerButtonIconActive: "ui-iggrid-filterbuttonactive ui-corner-all ui-state-active",
            featureChooserIconClass: "ui-icon ui-icon-calculator",
            dropDownListContainer: "ui-iggrid-summaries-dropdown-listcontainer ui-widget",
            dropDownListItem: "ui-iggrid-summaries-dialog-listitem",
            headerButtonContainer: "ui-iggrid-summaries-headerbuttoncontainer ui-corner-all",
            headerButtonIcon: "ui-iggrid-summaries-header-icon ui-corner-all ui-icon ui-icon-calculator",
            headerButtonIconHover: "ui-iggrid-summaries-header-icon-hover ui-state-hover",
            footerRowCell: "ui-widget-footer ui-state-default",
            footerRowCellHover: "ui-state-hover",
            checkbox: "ui-state-default ui-corner-all ui-igcheckbox-normal",
            checkboxOff: "ui-icon ui-icon-check ui-igcheckbox-normal-off",
            checkboxOn: "ui-icon ui-icon-check ui-igcheckbox-normal-on",
            checkboxHovered: "ui-state-hover",
            footerRowIconContainerEmpty: "ui-iggrid-summaries-footer-icon-container-empty",
            footerRowTextContainerEmpty: "ui-iggrid-summaries-footer-text-container-empty",
            baseClassIE7: "ui-ie7"
        },

        defaultDecimalDisplay: 2,

        defaultSummaryMethods: [
            {
                rowDisplayLabel: a.ig.GridSummaries.locale.defaultSummaryRowDisplayLabelCount,
                type: "count",
                allowed: "all",
                active: true,
                order: 0,
                decimalDisplay: this.defaultDecimalDisplay
            },
            {
                rowDisplayLabel: a.ig.GridSummaries.locale.defaultSummaryRowDisplayLabelMin,
                type: "min",
                allowed: ["number", "date", "numeric"],
                active: true,
                order: 1,
                decimalDisplay: this.defaultDecimalDisplay
            },
            {
                rowDisplayLabel: a.ig.GridSummaries.locale.defaultSummaryRowDisplayLabelMax,
                type: "max",
                allowed: ["number", "date", "numeric"],
                active: true,
                order: 2,
                decimalDisplay: this.defaultDecimalDisplay
            },
            {
                rowDisplayLabel: a.ig.GridSummaries.locale.defaultSummaryRowDisplayLabelSum,
                type: "sum",
                allowed: ["number", "numeric"],
                active: true,
                order: 3,
                decimalDisplay: this.defaultDecimalDisplay
            },
            {
                rowDisplayLabel: a.ig.GridSummaries.locale.defaultSummaryRowDisplayLabelAvg,
                type: "avg",
                allowed: ["number", "numeric"],
                active: true,
                order: 4,
                decimalDisplay: this.defaultDecimalDisplay
            },
            {
                rowDisplayLabel: a.ig.GridSummaries.locale.defaultSummaryRowDisplayLabelCustom,
                type: "custom",
                allowed: "all",
                active: true,
                summaryCalculator: null,
                order: 5,
                decimalDisplay: this.defaultDecimalDisplay
            }
        ],

        renderInFeatureChooser: true,

        options: {
            type: null,
            dialogButtonOKText: a.ig.GridSummaries.locale.dialogButtonOKText,
            dialogButtonCancelText: a.ig.GridSummaries.locale.dialogButtonCancelText,
            calculateRenderMode: "okcancelbuttons",
            featureChooserText: a.ig.GridSummaries.locale.featureChooserText,
            featureChooserTextHide: a.ig.GridSummaries.locale.featureChooserTextHide,
            compactRenderingMode: true,
            defaultDecimalDisplay: 2,
            showSummariesButton: true,
            summariesResponseKey: "summaries",
            summaryExprUrlKey: "summaries",
            callee: null,
            dropDownHeight: "",
            dropDownWidth: "",
            showDropDownButton: true,
            summaryExecution: "afterfilteringbeforepaging",
            dropDownDialogAnimationDuration: 400,
            emptyCellText: a.ig.GridSummaries.locale.emptyCellText,
            summariesHeaderButtonTooltip: a.ig.GridSummaries.locale.summariesHeaderButtonTooltip,
            resultTemplate: "{0} = {1}",
            isGridFormatter: true,
            columnSettings: [
                {
                    allowSummaries: true,
                    columnKey: null,
                    columnIndex: -1,
                    summaryOperands: [
                        {
                            rowDisplayLabel: "",
                            type: "custom",
                            active: true,
                            summaryCalculator: null,
                            order: 5,
                            decimalDisplay: 2,
                            isGridFormatter: false
                        }
                    ]
                }
            ]
        },

        events: {
            dropDownOpening: "dropDownOpening",
            dropDownOpened: "dropDownOpened",
            dropDownClosing: "dropDownClosing",
            dropDownClosed: "dropDownClosed",
            summariesCalculating: "summariesCalculating",
            summariesCalculated: "summariesCalculated",
            summariesMethodSelectionChanged: "summariesMethodSelectionChanged",
            summariesToggling: "summariesToggling",
            summariesToggled: "summariesToggled",
            dropDownOKClicked: "dropDownOKClicked",
            dropDownCancelClicked: "dropDownCancelClicked"
        },

        _createWidget: function () {
            this.options.columnSettings = [];
            this._summariesRows = [];
            this._data = {};
            this._currentOpenedColumnKey = null;
            this._isRenderedSummariesRows = false;
            this._footerInitialized = false;
            this._currentRowShownIcons = null;
            this._customInitMethods = [];
            this._fcData = {};
            this._isInitFC = false;
            this._isSummariesRowsHidden = false;
            this._disallowedSummaries = [];
            a.Widget.prototype._createWidget.apply(this, arguments)
        },

        _create: function () {
            var b = this.options.compactRenderingMode;
            if (b === "true") {
                b = true
            } else {
                if (b === "false") {
                    b = false
                }
            }
            this.options.compactRenderingMode = b
        },

        _initLoadingIndicator: function () {
            this._loadingIndicator = this.grid.container().length > 0 ? this.grid.container().igLoading().data("igLoading").indicator() : this.grid.element.igLoading().data("igLoading").indicator()
        },

        _initColumnSettings: function () {
            var n = [], f, g, h, m, c = this.options.columnSettings, d, b = c.length, e = (this.grid.options.columns) ? this.grid.options.columns.length : 0;
            this.newColumnSettings = [];
            this._disallowedSummaries = [];
            for (f = 0; f < e; f++) {
                n.push({
                    columnIndex: f,
                    columnKey: this.grid.options.columns[f].key,
                    dataType: this.grid.options.columns[f].dataType
                })
            }
            if (b > 0) {
                for (f = 0; f < b; f++) {
                    d = c[f];
                    if (d.summaryOperands === null || d.summaryOperands === undefined) {
                        continue
                    }
                    if ((d.columnKey !== null && d.columnKey !== undefined) || (d.columnIndex !== null && d.columnIndex !== undefined)) {
                        for (g = 0; g < e; g++) {
                            for (m = 0; m < d.summaryOperands.length; m++) {
                                if (d.summaryOperands[m].type.startsWith("custom") === true) {
                                    if (d.summaryOperands[m].active === null || d.summaryOperands[m].active === undefined) {
                                        d.summaryOperands[m].active = true
                                    }
                                    if (d.summaryOperands[m].type !== "custom") {
                                        for (h = 0; h < this._customInitMethods.length; h++) {
                                            if (d.summaryOperands[m].summaryCalculator === this._customInitMethods[h].summaryCalculator) {
                                                break
                                            }
                                        }
                                        if (this._customInitMethods.length === h) {
                                            this._customInitMethods.push({
                                                summaryCalculator: d.summaryOperands[m].summaryCalculator,
                                                type: d.summaryOperands[m].type,
                                                index: d.summaryOperands[m].type.replace("custom", "")
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for (f = 0; f < b; f++) {
                    d = c[f];
                    if ((d.columnKey !== null && d.columnKey !== undefined) || (d.columnIndex !== null && d.columnIndex !== undefined)) {
                        for (g = 0; g < e; g++) {
                            if ((n[g].columnIndex === d.columnIndex && d.columnIndex !== undefined && d.columnIndex !== null) || (n[g].columnKey === d.columnKey && d.columnKey !== undefined && d.columnKey !== null)) {
                                d.dataType = n[g].dataType;
                                d.columnIndex = n[g].columnIndex;
                                d.columnKey = n[g].columnKey;
                                d.summaryOperands = this._initAllowedSummaryMethods(d);
                                if (d.allowSummaries !== false) {
                                    this.newColumnSettings.push(d)
                                } else {
                                    this._disallowedSummaries[n[g].columnKey] = true
                                }
                                break
                            }
                        }
                    }
                }
                for (f = 0; f < e; f++) {
                    for (g = 0; g < this.newColumnSettings.length; g++) {
                        if (this.newColumnSettings[g].columnKey === n[f].columnKey) {
                            break
                        }
                    }
                    if (g === this.newColumnSettings.length && this._disallowedSummaries[n[f].columnKey] !== true) {
                        this.newColumnSettings.push({
                            dataType: n[f].dataType,
                            columnIndex: f,
                            columnKey: n[f].columnKey,
                            summaryOperands: this._initAllowedSummaryMethods(n[f], false)
                        })
                    }
                }
            } else {
                for (f = 0; f < e; f++) {
                    this.newColumnSettings.push({
                        dataType: n[f].dataType,
                        columnIndex: f,
                        columnKey: n[f].columnKey,
                        summaryOperands: this._initAllowedSummaryMethods(n[f])
                    })
                }
            }
            this.columnSettings = this.newColumnSettings
        },

        _initAllowedSummaryMethods: function (e, n) {
            var l, o, p, u, d, q, h = this.defaultSummaryMethods.length, f, s = [], b = [], r, t, m, g;
            if (e === null || e === undefined) {
                return
            }
            f = e.dataType;
            if (e !== null && e !== undefined && e.summaryOperands !== undefined && e.summaryOperands !== null) {
                for (l = 0; l < e.summaryOperands.length; l++) {
                    if (e.summaryOperands[l].type === undefined || e.summaryOperands[l].type === null) {
                        return
                    }
                    r = e.summaryOperands[l].type.toLowerCase();
                    if (this._isAllowedMethodName(r) === true) {
                        if (n === true) {
                            e.summaryOperands[l].active = false
                        }
                        if (e.summaryOperands[l].type === "custom") {
                            if (e.summaryOperands[l].summaryCalculator === null || e.summaryOperands[l].summaryCalculator === undefined) {
                                continue
                            }
                            q = 1;
                            for (p = 0; p < this._customInitMethods.length; p++) {
                                if (e.summaryOperands[l].summaryCalculator === this._customInitMethods[p].summaryCalculator) {
                                    e.summaryOperands[l].type = this._customInitMethods[p].type;
                                    break
                                }
                                if (this._customInitMethods[p].index > q) {
                                    q = this._customInitMethods[p].index
                                }
                            }
                            if (this._customInitMethods.length === p) {
                                q++;
                                e.summaryOperands[l].type = "custom" + q;
                                this._customInitMethods.push({
                                    summaryCalculator: e.summaryOperands[l].summaryCalculator,
                                    type: "custom" + q,
                                    index: q
                                })
                            }
                        }
                        s.push(e.summaryOperands[l])
                    }
                }
            } else {
                for (l = 0; l < h; l++) {
                    d = this.defaultSummaryMethods[l];
                    if (d.type.startsWith("custom")) {
                        continue
                    }
                    m = d.active;
                    if (n === true) {
                        m = false
                    }
                    s.push({
                        rowDisplayLabel: d.rowDisplayLabel,
                        type: d.type,
                        allowed: d.allowed,
                        active: m,
                        order: d.order,
                        decimalDisplay: d.decimalDisplay,
                        isGridFormatter: d.isGridFormatter
                    })
                }
            }
            t = s.length;
            for (l = 0; l < t; l++) {
                for (o = 0; o < h; o++) {
                    g = this.defaultSummaryMethods[o].type.toUpperCase();
                    if (g === s[l].type.toUpperCase() || s[l].type.startsWith("custom")) {
                        if (s[l].type.toLowerCase().startsWith("custom")) {
                            if (s[l].order < this.defaultSummaryMethods[o].order) {
                                s[l].order = this.defaultSummaryMethods[o].order
                            }
                        } else {
                            if (s[l].order !== this.defaultSummaryMethods[o].order) {
                                s[l].order = this.defaultSummaryMethods[o].order
                            }
                        }
                        if (this.defaultSummaryMethods[o].allowed === "all") {
                            b.push(s[l])
                        } else {
                            for (u = 0; u < this.defaultSummaryMethods[o].allowed.length; u++) {
                                if (this.defaultSummaryMethods[o].allowed[u] === f) {
                                    b.push(s[l]);
                                    break
                                }
                            }
                        }
                        break
                    }
                }
            }
            return b
        },

        _setOption: function (k, m) {
            var j, l = this.options, d, e, f, g, b, c, h = this.grid.element[0].id;
            switch (k) {
                case "dialogButtonOKText":
                    if (l.dialogButtonOKText !== m) {
                        d = this.grid.options.columns;
                        e = d.length;
                        for (j = 0; j < e; j++) {
                            a("#" + this._id("summaries", "dialog_button_ok", d[j].key)).igButton("option", "labelText", m)
                        }
                    }
                    break;
                case "dialogButtonCancelText":
                    if (l.dialogButtonCancelText !== m) {
                        d = this.grid.options.columns;
                        e = d.length;
                        for (j = 0; j < e; j++) {
                            a("#" + this._id("summaries", "dialog_button_cancel", d[j].key)).igButton("option", "labelText", m)
                        }
                    }
                    break;
                case "calculateRenderMode":
                    if (l.calculateRenderMode !== m) {
                        l.calculateRenderMode = m;
                        d = this.grid.options.columns;
                        e = d.length;
                        for (j = 0; j < e; j++) {
                            this._renderDropDown(d[j].key)
                        }
                    }
                    break;
                case "compactRenderingMode":
                    if (l.compactRenderingMode !== m) {
                        l.compactRenderingMode = m;
                        this._clearAllRows();
                        this.calculateSummaries()
                    }
                    break;
                case "showSummariesButton":
                    if (l.showSummariesButton !== m) {
                        l.showSummariesButton = m;
                        f = this.columnSettings;
                        g = f.length;
                        for (j = 0; j < g; j++) {
                            c = f[j].columnKey;
                            if (m === true) {
                                b = a("#" + h + "_" + c);
                                if (this._fcData !== null && this._fcData !== undefined && b.length > 0 && this._fcData[c] !== true) {
                                    this._renderHeaderCellButton(b, c)
                                }
                            } else {
                                a("#" + this._id("summaries", "header_column_icon", c)).remove()
                            }
                        }
                    }
                    break;
                case "disabled":
                    if (l.disabled !== m) {
                        l.disabled = m;
                        if (m === true) {
                            this._clearAllRows()
                        } else {
                            this.calculateSummaries()
                        }
                    }
                    break;
                case "type":
                    if (l.type !== m) {
                        l.type = m;
                        this._setDataSourceColumnSettingsOptions()
                    }
                    break;
                case "summaryExprUrlKey":
                    if (l.summaryExprUrlKey !== m) {
                        l.summaryExprUrlKey = m;
                        this._setDataSourceColumnSettingsOptions()
                    }
                    break;
                case "dropDownHeight":
                    if (l.dropDownHeight !== m) {
                        l.dropDownHeight = m;
                        d = this.grid.options.columns;
                        e = d.length;
                        for (j = 0; j < e; j++) {
                            a("#" + this._id("summaries", "methods_dialog", d[j].key)).css("height", m)
                        }
                    }
                    break;
                case "dropDownWidth":
                    if (l.dropDownWidth !== m) {
                        l.dropDownWidth = m;
                        d = this.grid.options.columns;
                        e = d.length;
                        for (j = 0; j < e; j++) {
                            a("#" + this._id("summaries", "methods_dialog", d[j].key)).css("width", m)
                        }
                    }
                    break;
                case "showDropDownButton":
                    if (l.showDropDownButton !== m) {
                        l.showDropDownButton = m;
                        if (m === true) {
                            this._renderFooterIcons()
                        } else {
                            this._clearFooterIcons()
                        }
                    }
                    break;
                case "emptyCellText":
                    if (l.emptyCellText !== m) {
                        l.emptyCellText = m;
                        this._clearAllRows();
                        this.calculateSummaries()
                    }
                    break;
                case "resultTemplate":
                    if (l.resultTemplate !== m) {
                        l.resultTemplate = m;
                        this._clearAllRows();
                        this.calculateSummaries()
                    }
                    break;
                case "isGridFormatter":
                    if (l.isGridFormatter !== m) {
                        l.isGridFormatter = m;
                        this._clearAllRows();
                        this.calculateSummaries()
                    }
                    break;
                case "defaultDecimalDisplay":
                    if (l.defaultDecimalDisplay !== m) {
                        l.defaultDecimalDisplay = m;
                        this._clearAllRows();
                        this.calculateSummaries()
                    }
                    break;
                case "columnSettings":
                    if (l.columnSettings !== m) {
                        l.columnSettings = m;
                        this.columnSettings = [];
                        this.newColumnSettings = [];
                        this._data = {};
                        this._clearAllRows();
                        this._initColumnSettings();
                        d = this.grid.options.columns;
                        e = d.length;
                        this.grid.dataSource.dataBind();
                        for (j = 0; j < e; j++) {
                            this._renderDropDown(d[j].key)
                        }
                    }
                    break
            }
            a.Widget.prototype._setOption.apply(this, arguments)
        },

        destroy: function () {
            var d, b = this.columnSettings, c = b.length;
            for (d = 0; d < c; d++) {
                a("#" + this._id("summaries", "header_column_icon", b[d].columnKey)).remove()
            }
            this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.unbind("iggridfooterrendered", this._footerRenderedHandler);
            this.grid.element.unbind("iggridrendred", this._gridRenderedHandler);
            this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this._clearAllRows();
            this._detachEvents();
            a.Widget.prototype.destroy.call(this);
            return this
        },

        _detachEvents: function () {
            this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.unbind("iggridfooterrendered", this._footerRenderedHandler);
            this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.unbind("iggridheaderextracellsmodified", this._headerFooterInitHandler);
            this.grid.element.unbind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            this.grid.element.unbind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler)
        },

        _headerCellRendered: function (b, c) {
            if (c.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            if (this._isInitFC !== true) {
                this._initFC()
            }
        },

        _initFC: function () {
            var f, e, g = this.options, c = this.columnSettings, d = c.length, b;
            this._isInitFC = true;
            e = this.grid.element.data("igGridFeatureChooser");
            if (e !== null && e !== undefined) {
                for (f = 0; f < d; f++) {
                    if (c[f].allowSummaries === false) {
                        continue
                    }
                    b = c[f].columnKey;
                    if (e._shouldRenderInFeatureChooser(b) === true) {
                        e._renderInFeatureChooser(b, {
                            name: "Summaries",
                            text: g.featureChooserText,
                            textHide: g.featureChooserTextHide,
                            iconClass: this.css.featureChooserIconClass,
                            isSelected: true,
                            method: a.proxy(this._togglefromfc, this),
                            updateOnClickAll: true,
                            order: 1,
                            groupName: "toggle",
                            groupOrder: 1,
                            type: "toggle",
                            state: "hide"
                        });
                        this._fcData[b] = true
                    }
                }
            }
        },

        _footerRendered: function (g, b) {
            if (b.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            var f, d = this.columnSettings, e = d.length, c;
            for (f = 0; f < e; f++) {
                if (d[f].allowSummaries === false) {
                    continue
                }
                c = d[f].columnKey;
                this._renderDropDown(c)
            }
        },

        _headerRendered: function (j, c) {
            if (c.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            var h, e = this.columnSettings, f = e.length, b, d, g = this.grid.element[0].id;
            for (h = 0; h < f; h++) {
                if (e[h].allowSummaries === false) {
                    continue
                }
                d = e[h].columnKey;
                b = a("#" + g + "_" + d);
                if (b.length > 0 && this._fcData[d] !== true && this.options.showSummariesButton !== false) {
                    this._renderHeaderCellButton(b, d)
                }
            }
        },

        _columnMap: function () {
            var f = this.options, b = this.newColumnSettings, e, c = b.length, d, g = [];
            if (f.showSummariesButton === false) {
                return false
            }
            for (e = 0; e < c; e++) {
                d = {
                    columnKey: b[e].columnKey,
                    enabled: true
                };
                if (b[e].allowSummaries === false) {
                    d.enabled = false
                }
                g.push(d)
            }
            return g
        },

        _dataRendered: function () {
            if (!this._loadingIndicator) {
                this._initLoadingIndicator()
            }
            if (this.options.disabled !== true && this._isSummariesRowsHidden === false) {
                this._loadingIndicator.show();
                this.calculateSummaries();
                this._loadingIndicator.hide()
            }
        },

        isSummariesRowsHidden: function () {
            return this._isSummariesRowsHidden
        },

        calculateSummaries: function () {
            this._trigger(this.events.rowsInitialize, null, {});
            this._calculateInternalSummaries();
            if (this.options.showDropDownButton === true) {
                this._renderFooterIcons()
            }
            this._adjustHeights()
        },

        _adjustHeights: function () {
            var b = this.grid.options.height, c;
            if (b === null || b === undefined) {
                return
            }
            if (this._isVirtualization() === true) {
                c = parseInt(this.grid.options.height, 10) - parseInt(a("#" + this._id("footer", "container")).height(), 10);
                a("#" + this.grid.element[0].id).height(c);
                a("#" + this.grid.element[0].id + "_displayContainer").height(c);
                a("#" + this.grid.element[0].id + "_scrollContainer").height(c)
            } else {
                this.grid._initializeHeights();
                this.grid._adjustLastColumnWidth(false)
            }
        },

        _removeFooterRows: function () {
            var b, c = this._summariesRows, d = c.length;
            for (b = 0; b < d; b++) {
                a("#" + this._id("summaries", "footer_row", c[b].type)).remove()
            }
            this._isRenderedSummariesRows = false;
            this._summariesRows = []
        },

        _calculateSelectedSummaries: function (d) {
            var p, w, z, C = [], l, b, A, F, r = false, m, B, x, h = null, q, g = 0, v, f = this.options.compactRenderingMode, E, e = this.columnSettings.length, u = false, t = false, y, G = [], H = 0, c = [], n, s = false, o, D = "";
            if (d === undefined || d === null) {
                return
            }
            for (v = 0; v < e; v++) {
                if (this.columnSettings[v].columnKey === d && this._isVisibleColumn(d)) {
                    h = this.columnSettings[v];
                    E = v;
                    break
                }
            }
            if (h === null || h === undefined) {
                return
            }
            z = h.summaryOperands;
            A = z.length;
            for (p = 0; p < A; p++) {
                b = a("#" + this._id("summaries_footer_checkbox", z[p].type.toLowerCase(), d));
                q = (b.attr("data-chk").toLowerCase() === "on");
                if (q === true) {
                    g++
                }
                if (q !== z[p].active) {
                    u = true;
                    this.newColumnSettings[E].summaryOperands[p].active = q;
                    if (q === true) {
                        r = true;
                        c.push(this.newColumnSettings[E].summaryOperands[p])
                    } else {
                        G.push(z[p])
                    }
                }
            }
            this.columnSettings[E].summaryOperands = this.newColumnSettings[E].summaryOperands;
            this.isToCalculateInRemoteMode = false;
            if (this.options.compactRenderingMode === "auto") {
                if (this._summariesRows.length === 1 && this._analyzeAutoCompactRenderingMode() === false) {
                    a("#" + this._summariesRows[0].id).remove();
                    this._summariesRows = [];
                    this.calculateSummaries();
                    return
                }
                if (this._summariesRows.length > 1 && this._analyzeAutoCompactRenderingMode() === true) {
                    for (p = 0; p < this._summariesRows.length; p++) {
                        a("#" + this._summariesRows[p].id).remove()
                    }
                    this._summariesRows = [];
                    this.calculateSummaries();
                    return
                }
            }
            if (r === true) {
                if ((f === false || (f === "auto" && this._analyzeAutoCompactRenderingMode() === false)) && this._summariesRows.length === 1) {
                    D = this._summariesRows[0].type.toLowerCase();
                    s = true;
                    for (v = 0; v < this.columnSettings.length; v++) {
                        if (!this._isVisibleColumn(this.columnSettings[v].columnKey)) {
                            continue
                        }
                        for (w = 0; w < this.columnSettings[v].summaryOperands.length; w++) {
                            if (this.columnSettings[v].summaryOperands[w].type.toLowerCase() === D && this.columnSettings[v].summaryOperands[w].active !== false) {
                                s = false;
                                break
                            }
                        }
                        if (s === false) {
                            break
                        }
                    }
                }
                if (this.options.type === "remote") {
                    if (this.options.calculateRenderMode === "onselect") {
                        this.isToCalculateInRemoteMode = true;
                        o = {
                            type: c[0].type,
                            result: "calculating",
                            rowDisplayLabel: c[0].rowDisplayLabel,
                            order: c[0].order,
                            decimalDisplay: c[0].decimalDisplay,
                            dataType: this.newColumnSettings[E].dataType
                        };
                        if (this._data[d] === null || this._data[d] === undefined) {
                            this._data[d] = []
                        }
                        this._data[d].push(o);
                        this._renderFooterColumnInfo(d, this._data[d])
                    } else {
                        this._setDataSourceColumnSettingsOptions();
                        this.grid.dataSource.dataBind()
                    }
                } else {
                    n = this.grid.dataSource;
                    m = this._dataSummaries();
                    if (this._trigger(this.events.summariesCalculating, null, {
                        owner: this
                    }) !== false) {
                        C = this.calculateSummaryColumn(d, c, m, this.newColumnSettings[E].dataType);
                        if (f === false || (f === "auto" && this._analyzeAutoCompactRenderingMode() === false)) {
                            this._renderFooterColumnInfo(d, C)
                        }
                        this._trigger(this.events.summariesCalculated, null, {
                            data: m,
                            owner: this
                        })
                    }
                }
            }
            H = G.length;
            if (f === true || (f === "auto" && this._analyzeAutoCompactRenderingMode() === true)) {
                h = this.newColumnSettings;
                l = h.length;
                x = 0;
                B = 0;
                if (f === "auto") {
                    G = [];
                    for (p = 0; p < A; p++) {
                        b = a("#" + this._id("summaries_footer_checkbox", z[p].type.toLowerCase(), d));
                        q = (b.attr("data-chk").toLowerCase() === "on");
                        if (q === false) {
                            G.push(z[p])
                        }
                    }
                    H = G.length
                }
                for (p = 0; p < H; p++) {
                    this._removeDataResult(d, G[p].type.toLowerCase())
                }
                if (H > c.length) {
                    for (p = 0; p < l; p++) {
                        if (!this._isVisibleColumn(h[p].columnKey)) {
                            continue
                        }
                        B = 0;
                        for (v = 0; v < h[p].summaryOperands.length; v++) {
                            if (h[p].summaryOperands[v].active === true) {
                                B++
                            }
                        }
                        if (B > x) {
                            x = B
                        }
                    }
                    F = this._summariesRows.length;
                    if (x > F) {
                        return
                    }
                    for (p = 0; p < x; p++) {
                        a("#" + this._id("summaries", "footer_row_text_container", this._summariesRows[p].type.toLowerCase(), d)).html(this.options.emptyCellText)
                    }
                    for (p = x; p < F; p++) {
                        a("#" + this._summariesRows[p].id).remove()
                    }
                    for (p = x; p < F; p++) {
                        this._summariesRows.pop()
                    }
                } else {
                    if (c.length > H) {
                        this._initCompactModeSummariesRows()
                    }
                }
                this._renderFooterColumnInfo(d, this._data[d]);
                if (this._summariesRows.length === 0) {
                    this._insertSummariesRows(this.defaultSummaryMethods[0].type.toLowerCase(), this.defaultSummaryMethods[0].order);
                    this._renderFooterIcons()
                }
                this._adjustHeights()
            }
            if (u && (f === false || (f === "auto" && this._analyzeAutoCompactRenderingMode() === false))) {
                for (p = 0; p < H; p++) {
                    y = G[p].type.toLowerCase();
                    a("#" + this._id("summaries", "footer_row_text_container", y, d)).html(this.options.emptyCellText);
                    this._removeDataResult(d, y);
                    if (this._summariesRows.length <= 1) {
                        continue
                    }
                    t = true;
                    for (v = 0; v < this.columnSettings.length; v++) {
                        if (!this._isVisibleColumn(this.columnSettings[v].columnKey)) {
                            continue
                        }
                        for (w = 0; w < this.columnSettings[v].summaryOperands.length; w++) {
                            if (this.columnSettings[v].summaryOperands[w].type.toLowerCase() === y && this.columnSettings[v].summaryOperands[w].active !== false) {
                                t = false;
                                break
                            }
                        }
                        if (t === false) {
                            break
                        }
                    }
                    if (t === true && this._summariesRows.length > 1) {
                        this._removeRowsDataByType(y);
                        a("#" + this._id("summaries", "footer_row", y)).remove()
                    }
                }
                if (this._summariesRows.length >= 1 && s === true) {
                    for (p = 0; p < c.length; p++) {
                        if (c[p].type.toLowerCase() === D) {
                            break
                        }
                    }
                    if (p === c.length) {
                        this._removeRowsDataByType(D);
                        a("#" + this._id("summaries", "footer_row", D)).remove()
                    }
                }
                if (this._summariesRows.length > 0 && a("#" + this._id("summaries", "footer_row_button_dd", this._summariesRows[0].type, d)).length === 0) {
                    this._renderFooterIcons()
                }
                this._adjustHeights()
            }
        },

        _analyzeAutoCompactRenderingMode: function () {
            var e, f, g, d, h, b, c = this.columnSettings.length;
            for (f = 0; f < c; f++) {
                d = this.columnSettings[f];
                g = d.summaryOperands;
                h = g.length;
                b = 0;
                for (e = 0; e < h; e++) {
                    if (g[e].active === true && ++b > 1) {
                        return false
                    }
                }
            }
            return true
        },

        _removeRowsDataByType: function (b) {
            if (b === undefined || b === null) {
                return
            }
            this._summariesRows = a.grep(this._summariesRows, function (c) {
                return (c.type !== b)
            })
        },

        _clearFooterIcons: function () {
            var e, d = this._currentRowShownIcons, b, c;
            if (d === null || d === undefined) {
                return
            }
            b = this.grid.options.columns;
            c = b.length;
            for (e = 0; e < c; e++) {
                a("#" + this._id("summaries", "footer_row_button_dd", d.type, b[e].key)).remove()
            }
        },

        clearAllFooterIcons: function () {
            var d, e, f = this._summariesRows, g = f.length, b = this.grid.options.columns, c = b.length;
            for (d = 0; d < g; d++) {
                for (e = 0; e < c; e++) {
                    a("#" + this._id("summaries", "footer_row_button_dd", f[d].type, b[e].key)).remove()
                }
            }
        },

        _clearAllRows: function () {
            var b, c = this._summariesRows.length;
            for (b = 0; b < c; b++) {
                a("#" + this._summariesRows[b].id).remove()
            }
            this._summariesRows = []
        },

        _removeUnusedFooterRows: function (d) {
            var b, c, f = this._summariesRows, g = this._summariesRows.length, e = d.length;
            if (g === 0) {
                for (b = 0; b < e; b++) {
                    a("#" + d.id).remove()
                }
                return
            }
            for (b = 0; b < e; b++) {
                for (c = 0; c < g; c++) {
                    if (f[c].id === d[b].id) {
                        continue
                    }
                }
                if (c === g) {
                    a("#" + d[b].id).remove()
                }
            }
        },

        _renderFooterIcons: function (l, d) {
            var g, b, k = this._summariesRows, c, h = true, e = this.grid.options.columns, f = e.length, j;
            if (l === null || l === undefined) {
                l = 0
            }
            if (d === null || d === undefined) {
                d = f
            }
            if (k.length === 0) {
                return
            }
            this._clearFooterIcons();
            j = k[0].type;
            this._currentRowShownIcons = k[0];
            for (g = l; g < d; g++) {
                b = e[g].key;
                if (this._disallowedSummaries[b] === true) {
                    continue
                }
                c = this._getColumnSettingByKey(b);
                if (c === null || c === undefined || c.length === 0 || c.allowSummaries === false) {
                    continue
                } else {
                    h = false
                }
                this._renderFooterIconMarkup(j, b)
            }
            if (h === true) {
                this._removeRowsDataByType(j)
            }
        },

        _renderFooterIconMarkup: function (d, c) {
            var e = this, b;
            b = a("<span></span>").appendTo(a("#" + this._id("summaries", "footer_row_icon_container", d, c))).addClass(e.css.footerButtonIcon);
            b.wrap('<a id="' + this._id("summaries", "footer_row_button_dd", d, c) + '" href="#" title=""></a>');
            b.data("columnKey", c);
            b.parent().bind({
                mousedown: a.proxy(e._onMouseDownFooterIcon, e),
                click: a.proxy(e._onClickFooterIcon, e),
                mouseover: a.proxy(e._onMouseOverFooterIcon, e),
                mouseout: a.proxy(e._onMouseOutFooterIcon, e),
                focus: a.proxy(e._onMouseOverFooterIcon, e),
                blur: a.proxy(e._onMouseOutFooterIcon, e),
                keydown: function (f) {
                    if (f.keyCode === a.ui.keyCode.ENTER || f.keyCode === a.ui.keyCode.SPACE) {
                        f.stopPropagation();
                        f.preventDefault();
                        e.toggleDropDown(f)
                    }
                }
            })
        },

        _onMouseOverFooterIcon: function (c) {
            var b = a(c.target);
            if (b.closest("div").hasClass(this.css.footerButtonIconActive) === false) {
                b.closest("div").addClass(this.css.footerButtonIconHover)
            }
        },

        _onMouseOutFooterIcon: function (c) {
            var b = a(c.target);
            if (b.closest("div").hasClass(this.css.footerButtonIconActive) === false) {
                b.closest("div").removeClass(this.css.footerButtonIconHover)
            }
        },

        _onClickFooterIcon: function (b) {
            b.preventDefault()
        },

        _onMouseDownFooterIcon: function (b) {
            this.toggleDropDown(b)
        },

        _isFirstRowEmpty: function () {
            var f, g = true, b, j = this._summariesRows, c = null, h, d = this.grid.options.columns, e = d.length;
            if (j.length === 0) {
                return false
            }
            h = j[0];
            for (f = 0; f < e; f++) {
                b = d[f].key;
                c = this._getDataByKeyMethodName(b, h.type);
                if (c !== null) {
                    return false
                }
            }
            return g
        },

        toggleDropDown: function (f) {
            var d = a(f.target), e, c, j, h, i, b, g;
            e = d.data("columnKey");
            if (e === null || e === undefined) {
                d = d.find("span");
                e = d.data("columnKey")
            }
            c = a("#" + this._id("summaries", "methods_dialog", e));
            j = d.offset().top;
            h = d.offset().left;
            i = this;
            b = a("#" + this._id("summaries", "methods_dialog", e));
            g = (c.is(":visible") === true);
            if (c.length === 0 || c.data("isAnimating") === true) {
                return
            }
            j -= d.parent().height() - 2;
            if (d.is("span") === true) {
                c.data("buttonId", d.parent().attr("id"))
            }
            if (!g) {
                c.css({
                    top: j - c.height(),
                    left: h
                })
            }
            if (i._activeDialog !== null && i._activeDialog !== undefined && c !== i._activeDialog && e !== i._activeDialog.data("columnKey")) {
                if (this._currentOpenedColumnKey !== null && this._currentOpenedColumnKey !== undefined) {
                    this._rollbackCheckboxState(this._currentOpenedColumnKey)
                }
                i.showHideDialog(i._activeDialog)
            }
            if (g === true) {
                i._currentOpenedColumnKey = null
            } else {
                i._currentOpenedColumnKey = e
            }
            i.showHideDialog(c)
        },

        showHideDialog: function (c) {
            if (c === null || c === undefined) {
                return
            }
            var h = this, g = this.events, b = a("#" + c.data("buttonId")), f = c.data("columnKey"), d = h.options.dropDownDialogAnimationDuration;
            if (c.data("isAnimating") === true && h._activeDialog === c) {
                return
            }
            if ((c.is(":visible") === true)) {
                if (this._trigger(g.dropDownClosing, null, {
                    columnKey: f,
                    owner: this
                }) === false) {
                    return
                }
                if (b !== null && b !== undefined) {
                    b.closest("div").removeClass(h.css.footerButtonIconActive)
                }
            } else {
                if (this._trigger(g.dropDownOpening, null, {
                    columnKey: f,
                    owner: this
                }) === false) {
                    return
                }
                if (b !== null && b !== undefined) {
                    b.closest("div").removeClass(h.css.footerButtonIconHover);
                    b.closest("div").addClass(h.css.footerButtonIconActive)
                }
            }
            if (d <= 0) {
                d = 1
            }
            c.data("isAnimating", true);
            c.toggle("slide", {
                duration: d,
                direction: "down"
            }, function () {
                c.data("isAnimating", false);
                if (c.is(":visible") === true) {
                    c.focus();
                    h._activeDialog = c;
                    h._trigger(g.dropDownOpened, null, {
                        columnKey: f,
                        owner: this
                    })
                } else {
                    h._trigger(g.dropDownClosed, null, {
                        columnKey: f,
                        owner: this
                    });
                    if (h.options.type === "remote" && h.options.calculateRenderMode === "onselect" && h.isToCalculateInRemoteMode === true) {
                        h.isToCalculateInRemoteMode = false;
                        h._setDataSourceColumnSettingsOptions();
                        h.grid.dataSource.dataBind()
                    }
                    if (h._activeDialog !== null && h._activeDialog !== undefined && (h._activeDialog.data("columnKey") === f)) {
                        h._activeDialog = null
                    }
                }
            })
        },

        _closeDropDown: function () {
            var b = this._activeDialog;
            if (this._currentOpenedColumnKey !== null && this._currentOpenedColumnKey !== undefined) {
                this._rollbackCheckboxState(this._currentOpenedColumnKey)
            }
            this.showHideDialog(b)
        },

        _setDataSourceColumnSettingsOptions: function () {
            var b = this.options;
            this.grid.dataSource.settings.summaries.columnSettings = this.newColumnSettings;
            this.grid.dataSource.settings.summaries.type = b.type;
            this.grid.dataSource.settings.summaries.summaryExecution = b.summaryExecution;
            this.grid.dataSource.settings.summaries.summaryExprUrlKey = b.summaryExprUrlKey;
            this.grid.dataSource.settings.summaries.summariesResponseKey = b.summariesResponseKey
        },

        _getColumnSettingByKey: function (b) {
            var c, d = this.columnSettings.length;
            if (b === null || b === undefined) {
                return null
            }
            for (c = 0; c < d; c++) {
                if (this.columnSettings[c].columnKey === b) {
                    return this.columnSettings[c]
                }
            }
            return null
        },

        _renderHeaderCellButton: function (e, f) {
            var i, h = this, g = h.css, d = this._id("summaries", "header_column_icon", f), b, c;
            i = e.find(".ui-iggrid-indicatorcontainer");
            if (i.length === 0) {
                i = a("<div></div>").appendTo(e);
                i.addClass("ui-iggrid-indicatorcontainer")
            }
            a("#" + d).remove();
            b = a("<a></a>").attr("href", "#").attr("id", d).attr("title", this.options.summariesHeaderButtonTooltip);
            c = i.find(".ui-iggrid-summaries-headerbuttoncontainer");
            if (c.length === 0) {
                c = a("<div></div>").addClass(g.headerButtonContainer).appendTo(i)
            }
            b.appendTo(c);
            a("<span></span>").addClass(g.headerButtonIcon).appendTo(b);
            if (this._isIE7() === true) {
                b.parent().addClass(this.css.baseClassIE7)
            }
            b.hover(function () {
                a(this).parent().addClass(g.headerButtonIconHover)
            }, function () {
                a(this).parent().removeClass(g.headerButtonIconHover)
            });
            b.bind({
                click: function (j) {
                    j.preventDefault();
                    j.stopPropagation();
                    h.toggleSummariesRows(null, j);
                    h._adjustHeights()
                }
            })
        },

        _togglefromfc: function (c, b, d) {
            this.toggleSummariesRows(d, c);
            this._adjustHeights()
        },

        toggleSummariesRows: function (f, d) {
            var b, c, e;
            if (f === null || f === undefined) {
                f = !this._isRenderedSummariesRows
            }
            if (this._trigger(this.events.summariesToggling, d, {
                isToShow: f,
                owner: this
            }) === false) {
                return
            }
            if (f === true) {
                this.calculateSummaries();
                this.grid._scrollFooter();
                this._isSummariesRowsHidden = false;
                if (this._summariesRows.length === 0) {
                    b = this.newColumnSettings;
                    c = b.length;
                    this._insertSummariesRows(this.defaultSummaryMethods[0].type, this.defaultSummaryMethods[0].order);
                    for (e = 0; e < c; e++) {
                        if (!this._isVisibleColumn(b[e].columnKey)) {
                            continue
                        }
                        this._renderFooterIconMarkup(this.defaultSummaryMethods[0].type, b[e].columnKey)
                    }
                }
            } else {
                this._removeFooterRows();
                this._isSummariesRowsHidden = true
            }
            this._trigger(this.events.summariesToggled, d, {
                isShown: f,
                owner: this
            })
        },

        _renderDropDown: function (m) {
            var e, h, r, u, c, b, f, w, G, g, s = this._id("summaries", "methods_dialog", m), v, n = this._getColumnSettingByKey(m), p = this.css, l, k, F = this, x = this.options, t = false, q, A, y, B, C, E, D, d, z;
            if (n === null || n === undefined) {
                return
            }
            k = n.summaryOperands;
            if (k === null || k === undefined) {
                return
            }
            a("#" + s).remove();
            e = a("<div></div>").appendTo("body").attr("id", s).css("position", "absolute").css("width", this.options.dropDownWidth).css("height", this.options.dropDownHeight).addClass(this.css.columnSummariesDropdown).attr("tabindex", 0).hide();
            e.data("methods", k);
            h = a("<ul></ul>").addClass(p.dropDownListContainer);
            h.appendTo(e);
            v = k.length;
            for (r = 0; r < v; r++) {
                w = r;
                for (u = r; u < v; u++) {
                    if (k[u].order === null || k[u].order === undefined) {
                        k[u].order = 0
                    }
                    if (k[w].order > k[u].order) {
                        w = u
                    }
                }
                if (w !== r) {
                    G = k[w];
                    k[w] = k[r];
                    k[r] = G
                }
            }
            z = function (i) {
                F.toggleCheckstate(a(i.currentTarget));
                if (F._activeDialog) {
                    F._activeDialog.data("focussed", true);
                    F._activeDialog.focus()
                }
                F._trigger(F.events.summariesMethodSelectionChanged, i, {
                    columnKey: m,
                    isSelected: (a(i.currentTarget).attr("data-chk").toLowerCase() === "on"),
                    methodName: a(i.currentTarget).data("methodName"),
                    owner: this
                });
                if (x.calculateRenderMode === "onselect") {
                    F._calculateSelectedSummaries(m)
                }
                i.preventDefault();
                i.stopPropagation()
            };
            C = function (i) {
                if (F._activeDialog) {
                    F._activeDialog.data("focussed", true);
                    F._activeDialog.focus()
                }
                i.preventDefault();
                i.stopPropagation()
            };
            E = function (i) {
                a(i.currentTarget).addClass(p.checkboxHovered)
            };
            D = function (i) {
                a(i.currentTarget).removeClass(p.checkboxHovered)
            };
            e.bind({
                blur: function (i) {
                    e.data("focussed", false);
                    setTimeout(a.proxy(F._checkCloseDropDown, F), 300)
                },
                focus: function (i) {
                    e.data("focussed", true)
                },
                keydown: function (i) {
                    if (i.keyCode === a.ui.keyCode.ESCAPE || i.keyCode === a.ui.keyCode.SPACE || i.keyCode === a.ui.keyCode.ENTER) {
                        i.stopPropagation();
                        i.preventDefault();
                        F.toggleDropDown(i);
                        if (F._summariesRows.length > 0) {
                            a("#" + F._id("summaries", "footer_row_button_dd", F._summariesRows[0].type, m)).focus()
                        }
                    }
                }
            });
            A = function (i) {
                if (F._activeDialog) {
                    F._activeDialog.data("focussed", true)
                }
            };
            y = function (i) {
                if (F._activeDialog) {
                    F._activeDialog.data("focussed", false)
                }
                setTimeout(a.proxy(F._checkCloseDropDown, F), 300)
            };
            B = function (j) {
                var i = a(this);
                if (j.keyCode === a.ui.keyCode.ENTER || j.keyCode === a.ui.keyCode.SPACE) {
                    j.currentTarget = a("#" + i.data("checkboxId"));
                    z(j);
                    i.focus();
                    j.stopPropagation();
                    j.preventDefault()
                }
            };
            for (r = 0; r < v; r++) {
                l = this._id("summaries_footer_checkbox", k[r].type.toLowerCase(), m);
                if (k[r].active === true || k[r].active === 1) {
                    t = "on";
                    q = p.checkboxOn
                } else {
                    t = "off";
                    q = p.checkboxOff
                }
                g = a("<li></li>").data("checkboxId", l).addClass(p.dropDownListItem).appendTo(h).attr("tabindex", 0);
                g.bind({
                    focus: A,
                    blur: y,
                    keydown: B
                });
                a('<span id="' + l + '" class="' + p.checkbox + '"></span>').appendTo(g);
                a("<label></label>").html(k[r].rowDisplayLabel).appendTo(g);
                d = a("#" + l);
                a('<span class="' + q + '"></span>').appendTo(d);
                d.attr("data-chk", t).attr("data-role", "checkbox");
                d.data("methodName", k[r].type);
                d.bind({
                    click: z,
                    mouseover: E,
                    mouseout: D,
                    mousedown: C
                })
            }
            f = a("<div></div>").addClass(this.css.footerDropdownButtonsContainer).appendTo(e);
            if (x.calculateRenderMode === "okcancelbuttons") {
                c = a('<a href="http://localhost/"></a>');
                c.attr("id", this._id("summaries", "dialog_button_ok", m)).appendTo(f);
                c.igButton({
                    link: {
                        href: "#",
                        title: ""
                    },
                    labelText: this.options.dialogButtonOKText,
                    keydown: function (i) {
                        if (i.keyCode === a.ui.keyCode.ENTER || i.keyCode === a.ui.keyCode.SPACE) {
                            F._clickOKButton(m)
                        }
                        if (i.keyCode !== a.ui.keyCode.TAB) {
                            i.stopPropagation();
                            i.preventDefault()
                        }
                    },
                    click: function (i) {
                        F._clickOKButton(m);
                        i.preventDefault();
                        i.stopPropagation()
                    },
                    mousedown: function (i) {
                        i.preventDefault();
                        i.stopPropagation()
                    },
                    focus: function (i) {
                        if (F._activeDialog) {
                            F._activeDialog.data("focussed", true)
                        }
                    },
                    blur: function (i) {
                        if (F._activeDialog) {
                            F._activeDialog.data("focussed", false)
                        }
                        setTimeout(a.proxy(F._checkCloseDropDown, F), 300)
                    }
                });
                b = a("<a></a>");
                b.attr("id", this._id("summaries", "dialog_button_cancel", m)).appendTo(f);
                b.igButton({
                    link: {
                        href: "#",
                        title: ""
                    },
                    labelText: this.options.dialogButtonCancelText,
                    click: function (i) {
                        F._clickCancelButton(m);
                        i.preventDefault();
                        i.stopPropagation()
                    },
                    mousedown: function (i) {
                        i.preventDefault();
                        i.stopPropagation()
                    },
                    focus: function (i) {
                        if (F._activeDialog) {
                            F._activeDialog.data("focussed", true)
                        }
                    },
                    blur: function (i) {
                        if (F._activeDialog) {
                            F._activeDialog.data("focussed", false)
                        }
                        setTimeout(a.proxy(F._checkCloseDropDown, F), 300)
                    }
                })
            }
            e.data("columnKey", m)
        },

        _checkCloseDropDown: function () {
            if (this._activeDialog === null) {
                return
            }
            if (this._activeDialog.data("focussed") === false) {
                setTimeout(a.proxy(this._closeDropDown, this), 10)
            }
        },

        toggleCheckstate: function (b) {
            var c;
            c = true;
            if (c) {
                if (b.attr("data-chk") === "on") {
                    this.selectCheckBox(b, false)
                } else {
                    this.selectCheckBox(b, true)
                }
            }
        },

        selectCheckBox: function (b, e) {
            var d = this.css, c = b.children("span");
            if (e === true) {
                c.removeClass(d.checkboxOff).addClass(d.checkboxOn);
                b.attr("data-chk", "on")
            } else {
                c.removeClass(d.checkboxOn).addClass(d.checkboxOff);
                b.attr("data-chk", "off")
            }
        },

        _clickOKButton: function (c) {
            var h, k, e, b, d = this.columnSettings.length, l, m, g = [], f;
            if (c === null || c === undefined) {
                return
            }
            for (k = 0; k < d; k++) {
                if (this.columnSettings[k].columnKey === c) {
                    e = this.columnSettings[k];
                    break
                }
            }
            if (e === null || e === undefined) {
                return
            }
            l = e.summaryOperands;
            m = l.length;
            for (h = 0; h < m; h++) {
                b = a("#" + this._id("summaries_footer_checkbox", l[h].type.toLowerCase(), c));
                f = {
                    type: l[h].type.toLowerCase(),
                    active: false
                };
                if (b.attr("data-chk") !== undefined && (b.attr("data-chk").toLowerCase() === "on") === true) {
                    f.active = true
                }
                g.push(f)
            }
            this._trigger(this.events.dropDownOKClicked, null, {
                columnKey: c,
                eventData: g,
                owner: this
            });
            this.showHideDialog(a("#" + this._id("summaries", "methods_dialog", c)));
            this._calculateSelectedSummaries(c)
        },

        _clickCancelButton: function (b) {
            this._rollbackCheckboxState(b);
            this._trigger(this.events.dropDownCancelClicked, null, {
                columnKey: b,
                owner: this
            });
            this.showHideDialog(a("#" + this._id("summaries", "methods_dialog", b)))
        },

        _rollbackCheckboxState: function (c) {
            var e, f, g, h, k, d = this.columnSettings.length, l, b;
            if (c === undefined || c === null) {
                return
            }
            for (g = 0; g < d; g++) {
                if (this.columnSettings[g].columnKey === c) {
                    e = this.columnSettings[g];
                    l = g;
                    break
                }
            }
            if (e === null || e === undefined) {
                return
            }
            h = e.summaryOperands;
            k = h.length;
            for (f = 0; f < k; f++) {
                b = a("#" + this._id("summaries_footer_checkbox", h[f].type.toLowerCase(), c));
                if (b.attr("data-chk") !== undefined && h[f].active !== (b.attr("data-chk").toLowerCase() === "on")) {
                    if (h[f].active === true) {
                        this.selectCheckBox(b, true)
                    } else {
                        this.selectCheckBox(b, false)
                    }
                }
            }
        },

        _initCompactModeSummariesRows: function () {
            var h, l, m, f = this.newColumnSettings, g = f.length, d = f[0], b, c, e, o, n = -1, q, p;
            for (h = 0; h < g; h++) {
                if (!this._isVisibleColumn(f[h].columnKey)) {
                    continue
                }
                p = 0;
                if (f[h].summaryOperands === null || f[h].summaryOperands === undefined) {
                    continue
                }
                for (l = 0; l < f[h].summaryOperands.length; l++) {
                    if (f[h].summaryOperands[l].active === true) {
                        p++
                    }
                }
                if (p > n) {
                    n = p;
                    d = f[h]
                }
            }
            if (d === undefined || d === null) {
                return
            }
            b = d.summaryOperands;
            c = b.length;
            q = this._summariesRows.length;
            if (q > n) {
                return
            }
            e = n - q;
            if (e === 0) {
                return
            }
            m = 0;
            for (h = 0; h < c; h++) {
                o = b[h].type.toLowerCase();
                if (a("#" + this._id("summaries", "footer_row", o)).length === 0) {
                    this._insertSummariesRows(o, null);
                    if (++m === e) {
                        break
                    }
                }
            }
        },

        _calculateInternalSummaries: function () {
            var b = this.newColumnSettings, c = b.length, g, h = this.options, d, j, f = this.events;
            if (this._trigger(f.summariesCalculating, null, {
                owner: this
            }) === false) {
                return
            }
            d = this._dataSummaries();
            if (h.callee !== null && h.callee !== undefined && a.type(h.callee) === "function") {
                d = h.callee(d)
            }
            if (d === null || d === undefined) {
                d = []
            }
            if (h.compactRenderingMode === true || (h.compactRenderingMode === "auto" && this._analyzeAutoCompactRenderingMode() === true)) {
                this._initCompactModeSummariesRows()
            }
            for (g = 0; g < c; g++) {
                if (!this._isVisibleColumn(b[g].columnKey)) {
                    continue
                }
                j = this.calculateSummaryColumn(b[g].columnKey, b[g].summaryOperands, d, b[g].dataType);
                this._renderFooterColumnInfo(b[g].columnKey, j)
            }
            this._isRenderedSummariesRows = true;
            this._trigger(f.summariesCalculated, null, {
                data: d,
                owner: this
            })
        },

        _isVisibleColumn: function (c) {
            var b = this.grid._visibleColumns(), d = false;
            a.each(b, function (e, f) {
                if (f.key === c) {
                    d = true;
                    return false
                }
            });
            return d
        },

        calculateSummaryColumn: function (b, c, e, f) {
            var h, l, v, n = this.options, d, u = [], t = 0, q = [], p, s, r, m, g, k;
            if (b === null || b === undefined) {
                throw new Error(a.ig.GridSummaries.locale.calculateSummaryColumnKeyNotSpecified)
            }
            if (c === undefined || c === null) {
                return
            }
            d = c.length;
            if (n.type === "local") {
                t = e.length;
                k = (f === "date");
                if (k === true) {
                    for (h = 0; h < t; h++) {
                        if (e[h][b] !== null && e[h][b] !== undefined) {
                            u.push(e[h][b].getTime())
                        }
                    }
                } else {
                    for (h = 0; h < t; h++) {
                        if (e[h][b] === undefined) {
                            e[h][b] = null
                        }
                        u.push(e[h][b])
                    }
                }
                for (h = 0; h < d; h++) {
                    m = c[h].type.toLowerCase();
                    if (m.startsWith("custom")) {
                        m = "custom"
                    }
                    if (c[h].active === true || c[h].active === 1) {
                        p = c[h].order;
                        if (p === undefined) {
                            p = null
                        }
                        if (m === "count") {
                            s = t
                        } else {
                            s = a.ig.calcSummaries(m, u, c[h].summaryCalculator, f)
                        }
                        r = {
                            type: c[h].type,
                            result: s,
                            rowDisplayLabel: c[h].rowDisplayLabel,
                            order: p,
                            decimalDisplay: c[h].decimalDisplay,
                            isGridFormatter: c[h].isGridFormatter,
                            dataType: f
                        };
                        q.push(r);
                        this._addDataResult(b, r)
                    }
                }
            } else {
                if (n.type === "remote") {
                    if (e[b] !== undefined && e[b] !== null) {
                        for (h = 0; h < d; h++) {
                            v = e[b][c[h].type];
                            if (c[h].active === true || c[h].active === 1) {
                                p = c[h].order;
                                if (p === undefined) {
                                    p = null
                                }
                                if (v === null || v === undefined) {
                                    if (c[h].summaryCalculator !== undefined) {
                                        g = this.grid.dataSource._data;
                                        t = g.length;
                                        k = (f === "date");
                                        if (k === true) {
                                            for (l = 0; l < t; l++) {
                                                if (g[l][b] !== null && g[l][b] !== undefined) {
                                                    u.push(g[l][b].getTime())
                                                }
                                            }
                                        } else {
                                            for (l = 0; l < t; l++) {
                                                u.push(g[l][b])
                                            }
                                        }
                                        v = a.ig.calcSummaries(c[h].type.toLowerCase(), u, c[h].summaryCalculator, f)
                                    } else {
                                        v = ""
                                    }
                                }
                                q.push({
                                    type: c[h].type,
                                    result: v,
                                    rowDisplayLabel: c[h].rowDisplayLabel,
                                    order: p,
                                    decimalDisplay: c[h].decimalDisplay,
                                    isGridFormatter: c[h].isGridFormatter,
                                    dataType: f
                                })
                            }
                        }
                    }
                    this._data[b] = q
                }
            }
            return q
        },

        summaryCollection: function () {
            return this._data
        },

        summariesFor: function (b) {
            return this._data[b]
        },

        _addDataResult: function (b, g) {
            var c = this._data[b], f, e;
            if (c === null || c === undefined) {
                this._data[b] = [];
                this._data[b].push(g);
                return
            }
            e = c.length;
            for (f = 0; f < e; f++) {
                if (c[f].type.toLowerCase() === g.type.toLowerCase()) {
                    c[f] = g;
                    break
                }
            }
            if (f === e) {
                this._data[b].push(g)
            }
        },

        _removeDataResult: function (b, e) {
            var c = this._data[b];
            if (c === undefined || c === null) {
                return
            }
            c = a.grep(c, function (d) {
                return (d.type.toLowerCase() !== e.toLowerCase())
            });
            this._data[b] = c
        },

        _getDataByKeyMethodName: function (b, g) {
            var f, c = this._data[b], e, h = null;
            g = g.toLowerCase();
            if (c === undefined || c === null) {
                return null
            }
            e = c.length;
            for (f = 0; f < e; f++) {
                if (c[f].type.toLowerCase() === g) {
                    return c[f]
                }
            }
            return h
        },

        _renderFooterColumnInfo: function (c, e) {
            if (e === null || e === undefined) {
                return
            }
            var k, l, m, h, b, o, g, p, d = this.options.compactRenderingMode, f = e.length, n, q;
            if (d === true || ((this.options.compactRenderingMode === "auto" && this._analyzeAutoCompactRenderingMode() === true))) {
                if (f > 1) {
                    for (k = 0; k < f; k++) {
                        n = k;
                        for (l = k + 1; l < f; l++) {
                            if (e[l].order < e[n].order) {
                                q = e[l];
                                e[l] = e[n];
                                e[n] = q;
                                n = l
                            }
                        }
                    }
                }
                for (k = 0; k < f; k++) {
                    if (this._summariesRows[k] === undefined || this._summariesRows[k] === null || e[k] === undefined || e[k] === null) {
                        continue
                    }
                    p = e[k].result;
                    g = e[k].decimalDisplay;
                    if (g === undefined || g === null) {
                        g = this.defaultDecimalDisplay
                    }
                    if (g !== null && g !== undefined && this._isNumber(p) === true) {
                        p = (parseFloat(p)).toFixed(g)
                    }
                    this._renderCell(this._summariesRows[k].type, c, e[k])
                }
            } else {
                if (d === false || (this.options.compactRenderingMode === "auto" && this._analyzeAutoCompactRenderingMode() === false)) {
                    for (k = 0; k < f; k++) {
                        m = e[k].type.toLowerCase();
                        h = this._id("summaries", "footer_row", m);
                        b = a("#" + h);
                        if (b.length === 0) {
                            o = e[k].order;
                            if (o === undefined) {
                                o = null
                            }
                            this._addDataResult(c, e[0]);
                            this._insertSummariesRows(m, o)
                        }
                        p = e[k].result;
                        g = e[k].decimalDisplay;
                        if (g === undefined || g === null) {
                            g = this.defaultDecimalDisplay
                        }
                        if (g !== null && g !== undefined && this._isNumber(p) === true) {
                            p = (parseFloat(p)).toFixed(g)
                        }
                        this._renderCell(m, c, e[k])
                    }
                }
            }
        },

        _renderCell: function (k, d, e) {
            var m = this.options.resultTemplate, c, b, l = e.result, p, o = e.type, n = e.rowDisplayLabel, i = e.isGridFormatter, f = e.dataType, h = this.options.defaultDecimalDisplay, g = e.decimalDisplay, j = this._isNumber(l);
            if (j && f === "bool") {
                i = false
            }
            if (j === true) {
                if (g === undefined || g === null) {
                    g = h
                }
                l = (parseFloat(l)).toFixed(g)
            }
            p = l;
            if (i === true || (i === undefined && this.options.isGridFormatter === true)) {
                c = this._getGridColumnFor(d);
                if (c !== null) {
                    if (f === "date" && (o === "min" || o === "max")) {
                        if (j) {
                            p = new Date(parseInt(p, 10));
                            l = this.grid._renderCell(p, c)
                        }
                    }
                    l = this.grid._renderCell(p, c)
                }
            } else {
                if (p === null || p === undefined) {
                    p = ""
                } else {
                    if (f === "date" && j && (o === "min" || o === "max")) {
                        p = new Date(parseInt(p, 10))
                    } else {
                        if (h !== null && h !== undefined) {
                            p = (parseFloat(l)).toFixed(h)
                        }
                    }
                }
            }
            if (m) {
                l = m.replace("{0}", n).replace("{1}", p)
            }
            b = a("#" + this._id("summaries", "footer_row_text_container", k, d)).html(l);
            if (i === true || (i === undefined && this.options.isGridFormatter === true)) {
                c = this._getGridColumnFor(d);
                if (c !== null) {
                    l = this.grid._renderCell(p, c);
                    p = l
                }
            }
            if (m) {
                l = m.replace("{0}", n).replace("{1}", p)
            }
            b = a("#" + this._id("summaries", "footer_row_text_container", k, d)).html(l)
        },

        _getGridColumnFor: function (b) {
            var d, c = (this.grid.options.columns) ? this.grid.options.columns.length : 0;
            for (d = 0; d < c; d++) {
                if (this.grid.options.columns[d].key === b) {
                    return this.grid.options.columns[d]
                }
            }
            return null
        },

        _isNumber: function (b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },

        _columnsCollectionModified: function (b, c) {
            if (c.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            if (this._isSummariesRowsHidden === true) {
                return
            }
            this._clearAllRows();
            this.calculateSummaries()
        },

        _insertSummariesRows: function (r, s) {
            r = r.toLowerCase();
            var t, p, q, u, g = this.css, d = this.grid, n = d._visibleColumns(), o = n.length, f = this._tfoot, e, b = d._footer, m = this._id("summaries", "footer_row", r), c = a("<tr></tr>").attr("id", m).attr("data-role", "summaryrow"), h = {
                id: m,
                type: r,
                order: s
            }, k = function () {
                a(this).addClass(g.footerRowCellHover)
            }, l = function () {
                a(this).removeClass(g.footerRowCellHover)
            };
            if (f === null || f === undefined) {
                if (b === undefined || b === null || b.length === 0) {
                    d._renderFooter();
                    b = d._footer
                }
                if (b === undefined || b === null || b.length === 0) {
                    return
                }
                b.css("display", "");
                if (this._isVirtualization() === true) {
                    f = a("#" + d.element[0].id + "_footers").find("tfoot")
                } else {
                    if (this._isFixedFooters() === true) {
                        f = b.find("tfoot")
                    } else {
                        f = b
                    }
                }
                this._tfoot = f
            }
            if (f.attr("id") !== "" && f.attr("id") !== null && f.attr("id") !== undefined) {
                f = a("#" + f.attr("id"))
            }
            if (s === null) {
                h.order = this._summariesRows.length;
                this._summariesRows.push(h);
                c.appendTo(f)
            } else {
                t = this._summariesRows.length;
                if (t === 0) {
                    this._summariesRows.push(h);
                    c.appendTo(f)
                } else {
                    if (this.options.compactRenderingMode === true || (this.options.compactRenderingMode === "auto" && this._analyzeAutoCompactRenderingMode() === true)) {
                        c.appendTo(f);
                        this._summariesRows.push(h)
                    } else {
                        if (this.options.compactRenderingMode === false || (this.options.compactRenderingMode === "auto" && this._analyzeAutoCompactRenderingMode() === false)) {
                            for (p = 0; p < t; p++) {
                                u = this._summariesRows[p].order;
                                if (u === undefined || u === null) {
                                    continue
                                }
                                if (s <= u) {
                                    c.insertBefore(a("#" + this._id("summaries", "footer_row", this._summariesRows[p].type)));
                                    this._summariesRows.splice(p, 0, h);
                                    break
                                }
                            }
                            if (p === t) {
                                this._summariesRows.push(h);
                                c.appendTo(f)
                            }
                        }
                    }
                }
            }
            if (this._isVirtualization() && this.grid.options.virtualizationMode === "fixed") {
                o = this.grid._virtualColumnCount
            }
            for (q = 0; q < o; q++) {
                e = a("<td></td>").addClass(g.footerRowCell).attr("data-key", n[q].key).appendTo(c);
                a("#" + m + " td.ui-state-default").hover(k, l);
                if (q === o - 1 && d.options.height && parseInt(d.options.height, 10) > 0) {
                    e.css("width", parseInt(n[q].width, 10) + d._scrollbarWidth())
                } else {
                    e.css("width", n[q].width)
                }
                this._renderInnerCellMarkup(e, r, n[q].key)
            }
            this.grid._footerInit(c, null, true, g.footerRowCell)
        },

        _renderInnerCellMarkup: function (c, f, e) {
            var d, b;
            d = a("<div></div>").attr("id", this._id("summaries", "footer_row_text_container", f, e)).addClass(this.css.footerRowTextContainer).appendTo(c).html(this.options.emptyCellText);
            b = a("<div></div>").attr("id", this._id("summaries", "footer_row_icon_container", f, e)).addClass(this.css.footerRowIconContainer).insertBefore(d);
            if (this._isIE7() === true) {
                b.addClass(this.css.baseClassIE7)
            }
            if (this.options.showDropDownButton === false) {
                b.addClass(this.css.footerRowIconContainerEmpty);
                d.addClass(this.css.footerRowTextContainerEmpty)
            }
        },

        _virtualHorizontalScroll: function (l, e) {
            if (this._isRenderedSummariesRows === false) {
                return
            }
            var r = e.startColIndex, k = e.endColIndex, m, n, c, b, d, p = this._summariesRows, q = p.length, h, g, f = this.grid._visibleColumns(), o = this;
            k = r + this.grid._virtualColumnCount;
            if (q > 0) {
                b = p[0];
                a.each(b, function (j, i) {
                    a("#" + o._id("summaries", "methods_dialog", a(i).attr("data-key"))).remove()
                })
            }
            for (m = 0; m < q; m++) {
                c = a("#" + p[m].id);
                b = c.children();
                b.html("");
                for (n = r; n <= k; n++) {
                    d = c.find("td:nth-child(" + (n - r + 1) + ")");
                    d.html("");
                    if (f[n] === null || f[n] === undefined) {
                        continue
                    }
                    this._renderInnerCellMarkup(d, p[m].type, f[n].key)
                }
            }
            for (m = r; m < k; m++) {
                if (f[m] !== null && f[m] !== undefined) {
                    g = f[m].key;
                    h = this._getColumnSettingByKey(g);
                    if (g === undefined || g === null) {
                        continue
                    }
                    this._renderFooterIconMarkup(p[0].type, g);
                    this._renderDropDown(g);
                    if (h === null || h === undefined) {
                        continue
                    }
                    this._renderFooterColumnInfo(g, this._data[g])
                }
            }
        },

        _isIE7: function () {
            return (a.browser.msie === true && a.browser.version.slice(0, 1) === "7")
        },

        _isFixedFooters: function () {
            return (this.grid.options.fixedFooters === true && this.grid.options.height !== null)
        },

        _isVirtualization: function () {
            var b = this.grid.options;
            return (b.virtualization === true || (b.rowVirtualization === true && b.height !== null) || (b.columnVirtualization === true && b.width !== null))
        },

        _id: function () {
            var c, d = this.grid.element[0].id, b = arguments.length;
            if (b === 0) {
                return null
            }
            for (c = 0; c < b; c++) {
                d += "_" + arguments[c]
            }
            return d
        },

        _isAllowedMethodName: function (f) {
            var b, d = false, e = this.defaultSummaryMethods.length, c;
            for (c = 0; c < e; c++) {
                b = this.defaultSummaryMethods[c].type;
                if (b === f || b === f.substr(0, b.length)) {
                    d = true;
                    break
                }
            }
            return d
        },

        _footerInit: function (e, b) {
            if (b.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            var f, d, c;
            f = this.grid.footersTable().find("[data-role=summaryrow]");
            c = this.grid.footersTable().find("colgroup");
            f.find("[data-skip=true]").remove();
            for (d = 0; d < f.length; d++) {
                this.grid._footerInit(a(f[d]), null, true, this.css.footerRowCell)
            }
        },

        _dataSummaries: function () {
            var b = this.grid.dataSource;
            return b.dataSummaries()
        },

        _injectGrid: function (b, c) {
            this.grid = b;
            if (this.options.type === null) {
                this.options.type = this.grid._inferOpType()
            }
            this._headerRenderedHandler = a.proxy(this._headerRendered, this);
            this._footerRenderedHandler = a.proxy(this._footerRendered, this);
            this._headerCellRenderedHandler = a.proxy(this._headerCellRendered, this);
            this._headerFooterInitHandler = a.proxy(this._footerInit, this);
            this._columnsCollectionModifiedHandler = a.proxy(this._columnsCollectionModified, this);
            this.grid.element.bind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.bind("iggridfooterrendered", this._footerRenderedHandler);
            this.grid.element.bind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.bind("iggridheaderextracellsmodified", this._headerFooterInitHandler);
            this.grid.element.bind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            this._virtualHorizontalScrollHandler = a.proxy(this._virtualHorizontalScroll, this);
            this.grid.element.bind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler);
            this._initColumnSettings();
            this._setDataSourceColumnSettingsOptions();
            if (this.grid.element.igGridFeatureChooser !== undefined) {
                this.grid.element.igGridFeatureChooser()
            } else {
                throw new Error(a.ig.GridSummaries.locale.featureChooserNotReferenced)
            }
        }

    });

    a.extend(a.ui.igGridSummaries, {
        version: "12.2.20122.1021"
    })

}(jQuery));