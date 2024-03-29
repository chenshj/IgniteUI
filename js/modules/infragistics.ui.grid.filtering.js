﻿/*
 * Infragistics.Web.ClientUI Grid Sorting 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery-tmpl.js (https://github.com/jquery/jquery-tmpl)
 *	ig.ui.grid.framework.js
 *  ig.ui.editors.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */
if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}

(function ($) {
    $.widget("ui.igGridFiltering", {

        renderInFeatureChooser: true,

        options: {
            caseSensitive: false,
            filterSummaryAlwaysVisible: true,
            renderFC: true,
            filterSummaryTemplate: $.ig.GridFiltering.locale.filterSummaryTemplate,
            filterDropDownAnimations: "linear",
            filterDropDownAnimationDuration: 500,
            filterDropDownWidth: 0,
            filterDropDownHeight: 0,
            filterExprUrlKey: null,
            filterDropDownItemIcons: true,
            columnSettings: [
                {
                    columnKey: null,
                    columnIndex: null,
                    allowFiltering: true,
                    condition: null
                }
            ],
            type: null,
            filterDelay: 500,
            mode: null,
            advancedModeEditorsVisible: false,
            advancedModeHeaderButtonLocation: "left",
            filterDialogWidth: 370,
            filterDialogMaxHeight: 350,
            filterDialogHeight: "",
            filterDialogFilterDropDownDefaultWidth: 80,
            filterDialogExprInputDefaultWidth: 80,
            filterDialogColumnDropDownDefaultWidth: null,
            renderFilterButton: true,
            filterButtonLocation: "left",
            nullTexts: {
                startsWith: $.ig.GridFiltering.locale.startsWithNullText,
                endsWith: $.ig.GridFiltering.locale.endsWithNullText,
                contains: $.ig.GridFiltering.locale.containsNullText,
                doesNotContain: $.ig.GridFiltering.locale.doesNotContainNullText,
                equals: $.ig.GridFiltering.locale.equalsNullText,
                doesNotEqual: $.ig.GridFiltering.locale.doesNotEqualNullText,
                greaterThan: $.ig.GridFiltering.locale.greaterThanNullText,
                lessThan: $.ig.GridFiltering.locale.lessThanNullText,
                greaterThanOrEqualTo: $.ig.GridFiltering.locale.greaterThanOrEqualToNullText,
                lessThanOrEqualTo: $.ig.GridFiltering.locale.lessThanOrEqualToNullText,
                on: $.ig.GridFiltering.locale.onNullText,
                notOn: $.ig.GridFiltering.locale.notOnNullText,
                thisMonth: $.ig.GridFiltering.locale.thisMonthLabel,
                lastMonth: $.ig.GridFiltering.locale.lastMonthLabel,
                nextMonth: $.ig.GridFiltering.locale.nextMonthLabel,
                thisYear: $.ig.GridFiltering.locale.thisYearLabel,
                lastYear: $.ig.GridFiltering.locale.lastYearLabel,
                nextYear: $.ig.GridFiltering.locale.nextYearLabel,
                empty: $.ig.GridFiltering.locale.emptyNullText,
                notEmpty: $.ig.GridFiltering.locale.notEmptyNullText,
                "null": $.ig.GridFiltering.locale.nullNullText,
                notNull: $.ig.GridFiltering.locale.notNullNullText
            },
            labels: {
                noFilter: $.ig.GridFiltering.locale.noFilterLabel,
                clear: $.ig.GridFiltering.locale.clearLabel,
                startsWith: $.ig.GridFiltering.locale.startsWithLabel,
                endsWith: $.ig.GridFiltering.locale.endsWithLabel,
                contains: $.ig.GridFiltering.locale.containsLabel,
                doesNotContain: $.ig.GridFiltering.locale.doesNotContainLabel,
                equals: $.ig.GridFiltering.locale.equalsLabel,
                doesNotEqual: $.ig.GridFiltering.locale.doesNotEqualLabel,
                greaterThan: $.ig.GridFiltering.locale.greaterThanLabel,
                lessThan: $.ig.GridFiltering.locale.lessThanLabel,
                greaterThanOrEqualTo: $.ig.GridFiltering.locale.greaterThanOrEqualToLabel,
                lessThanOrEqualTo: $.ig.GridFiltering.locale.lessThanOrEqualToLabel,
                trueLabel: $.ig.GridFiltering.locale.trueLabel,
                falseLabel: $.ig.GridFiltering.locale.falseLabel,
                after: $.ig.GridFiltering.locale.afterLabel,
                before: $.ig.GridFiltering.locale.beforeLabel,
                today: $.ig.GridFiltering.locale.todayLabel,
                yesterday: $.ig.GridFiltering.locale.yesterdayLabel,
                thisMonth: $.ig.GridFiltering.locale.thisMonthLabel,
                lastMonth: $.ig.GridFiltering.locale.lastMonthLabel,
                nextMonth: $.ig.GridFiltering.locale.nextMonthLabel,
                thisYear: $.ig.GridFiltering.locale.thisYearLabel,
                lastYear: $.ig.GridFiltering.locale.lastYearLabel,
                nextYear: $.ig.GridFiltering.locale.nextYearLabel,
                on: $.ig.GridFiltering.locale.onLabel,
                notOn: $.ig.GridFiltering.locale.notOnLabel,
                advancedButtonLabel: $.ig.GridFiltering.locale.advancedButtonLabel,
                filterDialogCaptionLabel: $.ig.GridFiltering.locale.filterDialogCaptionLabel,
                filterDialogConditionLabel1: $.ig.GridFiltering.locale.filterDialogConditionLabel1,
                filterDialogConditionLabel2: $.ig.GridFiltering.locale.filterDialogConditionLabel2,
                filterDialogOkLabel: $.ig.GridFiltering.locale.filterDialogOkLabel,
                filterDialogCancelLabel: $.ig.GridFiltering.locale.filterDialogCancelLabel,
                filterDialogAnyLabel: $.ig.GridFiltering.locale.filterDialogAnyLabel,
                filterDialogAllLabel: $.ig.GridFiltering.locale.filterDialogAllLabel,
                filterDialogAddLabel: $.ig.GridFiltering.locale.filterDialogAddLabel,
                filterDialogErrorLabel: $.ig.GridFiltering.locale.filterDialogErrorLabel,
                filterSummaryTitleLabel: $.ig.GridFiltering.locale.filterSummaryTitleLabel,
                filterDialogClearAllLabel: $.ig.GridFiltering.locale.filterDialogClearAllLabel,
                empty: $.ig.GridFiltering.locale.emptyNullText,
                notEmpty: $.ig.GridFiltering.locale.notEmptyNullText,
                nullLabel: $.ig.GridFiltering.locale.nullNullText,
                notNull: $.ig.GridFiltering.locale.notNullNullText
            },
            tooltipTemplate: $.ig.GridFiltering.locale.tooltipTemplate,
            filterDialogAddConditionTemplate: "<div><span>${label1}</span><div><select></select></div><span>${label2}</span></div>",
            filterDialogAddConditionDropDownTemplate: "<option value='${value}'>${text}</option>",
            filterDialogFilterTemplate: "<tr><td><input/></td><td><select></select></td><td><input /> </td><td><span></span></td></tr>",
            filterDialogFilterConditionTemplate: "<option value='${conditionName}'>${conditionLabel}</option>",
            filterDialogAddButtonWidth: 100,
            filterDialogOkCancelButtonWidth: 100,
            filterDialogMaxFilterCount: 5,
            filterDialogContainment: "owner",
            showEmptyConditions: false,
            showNullConditions: false,
            featureChooserText: $.ig.GridFiltering.locale.featureChooserText,
            featureChooserTextHide: $.ig.GridFiltering.locale.featureChooserTextHide,
            featureChooserTextAdvancedFilter: $.ig.GridFiltering.locale.featureChooserTextAdvancedFilter
        },

        css: {
            filterRow: "ui-iggrid-filterrow ui-widget",
            filterCell: "ui-iggrid-filtercell",
            filterCellEditor: "ui-iggrid-filtereditor",
            filterDropDownList: "ui-menu ui-widget ui-widget-content ui-iggrid-filterddlist ui-corner-all",
            filterDropDown: "ui-iggrid-filterdd",
            filterDropDownListItemTextContainer: "ui-iggrid-filterddlistitemcontainer",
            filterDropDownListItem: "ui-iggrid-filterddlistitem",
            filterDropDownListItemAdvanced: "ui-iggrid-filterddlistitemadvanced",
            filterDropDownListItemWithIcons: "ui-iggrid-filterddlistitemicons ui-state-default",
            filterDropDownListItemClear: "ui-iggrid-filterddlistitemclear",
            filterDropDownListItemHover: "ui-iggrid-filterddlistitemhover ui-state-hover",
            filterDropDownListItemActive: "ui-iggrid-filterddlistitemactive ui-state-active",
            filterDateCell: "",
            filterTextCell: "",
            filterNumberCell: "",
            filterBoolCell: "",
            filterButton: "ui-iggrid-filterbutton ui-corner-all ui-icon ui-icon-triangle-1-s",
            filterButtonAdvanced: "ui-iggrid-filterbutton ui-iggrid-filterbuttonadvanced ui-icon ui-icon-search",
            filterButtonAdvancedRight: "ui-iggrid-filterbuttonright ui-iggrid-filterbuttonadvanced ui-icon ui-icon-search",
            filterButtonHover: "ui-iggrid-filterbuttonhover ui-state-hover",
            filterButtonActive: "ui-iggrid-filterbuttonactive ui-state-active",
            filterButtonFocus: "ui-iggrid-filterbuttonfocus ui-state-focus",
            filterButtonDisabled: "ui-iggrid-filterbuttondisabled ui-state-disabled",
            filterButtonDate: "ui-iggrid-filterbuttondate",
            filterButtonString: "ui-iggrid-filterbuttonstring",
            filterButtonNumber: "ui-iggrid-filterbuttonnumber",
            filterButtonBoolean: "ui-iggrid-filterbuttonbool",
            filterButtonAdvancedHover: "ui-iggrid-filterbuttonadvancedhover ui-state-hover",
            filterButtonAdvancedActive: "ui-iggrid-filterbuttonadvancedactive ui-state-active",
            filterButtonAdvancedFocus: "ui-iggrid-filterbuttonadvancedfocus ui-state-focus",
            filterButtonAdvancedDisabled: "ui-iggrid-filterbuttonadvanceddisabled ui-state-disabled",
            filterItemIcon: "ui-iggrid-filtericon",
            filterItemIconContainer: "ui-iggrid-filtericoncontainer",
            filterItemIconStartsWith: "ui-iggrid-filtericonstartswith",
            filterItemIconEndsWith: "ui-iggrid-filtericonendswith",
            filterItemIconContains: "ui-iggrid-filtericoncontains",
            filterItemIconEquals: "ui-iggrid-filtericonequals",
            filterItemIconDoesNotEqual: "ui-iggrid-filtericondoesnotequal",
            filterItemIconDoesNotContain: "ui-iggrid-filtericondoesnotcontain",
            filterItemIconGreaterThan: "ui-iggrid-filtericongreaterthan",
            filterItemIconLessThan: "ui-iggrid-filtericonlessthan",
            filterItemIconGreaterThanOrEqualTo: "ui-iggrid-filtericongreaterthanorequalto",
            filterItemIconLessThanOrEqualTo: "ui-iggrid-filtericonlessthanorequalto",
            filterItemIconTrue: "ui-iggrid-filtericontrue",
            filterItemIconFalse: "ui-iggrid-filtericonfalse",
            filterItemIconAfter: "ui-iggrid-filtericonafter",
            filterItemIconBefore: "ui-iggrid-filtericonbefore",
            filterItemIconToday: "ui-iggrid-filtericontoday",
            filterItemIconYesterday: "ui-iggrid-filtericonyesterday",
            filterItemIconThisMonth: "ui-iggrid-filtericonthismonth",
            filterItemIconLastMonth: "ui-iggrid-filtericonlastmonth",
            filterItemIconNextMonth: "ui-iggrid-filtericonnextmonth",
            filterItemIconThisYear: "ui-iggrid-filtericonthisyear",
            filterItemIconLastYear: "ui-iggrid-filtericonlastyear",
            filterItemIconNextYear: "ui-iggrid-filtericonnextyear",
            filterItemIconOn: "ui-iggrid-filtericonon",
            filterItemIconNotOn: "ui-iggrid-filtericonnoton",
            filterItemIconClear: "ui-iggrid-filtericonclear",
            blockArea: "ui-widget-overlay ui-iggrid-blockarea",
            filterDialog: "ui-dialog ui-draggable ui-resizable ui-iggrid-dialog ui-widget ui-widget-content ui-corner-all",
            filterDialogHeaderCaption: "ui-dialog-titlebar ui-iggrid-filterdialogcaption ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",
            filterDialogHeaderCaptionTitle: "ui-dialog-title",
            filterDialogAddCondition: "ui-iggrid-filterdialogaddcondition",
            filterDialogAddConditionDropDown: "ui-iggrid-filterdialogaddconditionlist",
            filterDialogAddButton: "ui-iggrid-filterdialogaddbuttoncontainer ui-helper-reset",
            filterDialogOkCancelButton: "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix ui-iggrid-filterdialogokcancelbuttoncontainer",
            filterDialogFiltersTable: "ui-iggrid-filtertable ui-helper-reset",
            filterDialogFilterRemoveButton: "ui-icon ui-icon-closethick",
            filterDialogClearAllButton: "ui-iggrid-filterdialogclearall",
            featureChooserModalDialogIcon: "ui-icon ui-icon-newwin"
        },

        events: {
            dataFiltering: "dataFiltering",
            dataFiltered: "dataFiltered",
            dropDownOpening: "dropDownOpening",
            dropDownOpened: "dropDownOpened",
            dropDownClosing: "dropDownClosing",
            dropDownClosed: "dropDownClosed",
            filterDialogOpening: "filterDialogOpening",
            filterDialogOpened: "filterDialogOpened",
            filterDialogMoving: "filterDialogMoving",
            filterDialogFilterAdding: "filterDialogFilterAdding",
            filterDialogFilterAdded: "filterDialogFilterAdded",
            filterDialogClosing: "filterDialogClosing",
            filterDialogClosed: "filterDialogClosed",
            filterDialogContentsRendering: "filterDialogContentsRendering",
            filterDialogContentsRendered: "filterDialogContentsRendered",
            filterDialogFiltering: "filterDialogFiltering"
        },

        _createWidget: function (c, b) {
            this.options.columnSettings = [];
            $.Widget.prototype._createWidget.apply(this, arguments)
        },

        _create: function () {
            this._editors = [];
            if (!$.fn.fadeToggle) {
                $.fn.fadeToggle = $.fn.toggle
            }
            this._fcData = {};
            this._isInitFC = false;
            this._ft = "<li class='${itemClass}'><span class='${imgContainerClass}'><span class='" + this.css.filterItemIcon + " ${imgClass}'></span></span><span class='${textClass}'> ${text} </span></li>";
            if (this.options.filterDropDownAnimations === "none") {
                this.options.filterDropDownAnimationDuration = 1;
                this.options.filterDropDownAnimations = "linear"
            }
        },

        _setOption: function (b, c) {
            $.Widget.prototype._setOption.apply(this, arguments);
            if (b === "mode" || b === "renderFilterButton" || b === "filterButtonLocation" || b === "type") {
                throw new Error($.ig.Grid.locale.optionChangeNotSupported + " " + b)
            }
            if (b === "filterDropDownWidth") {
                this.grid.container().find("div ul").parent().css("width", c)
            } else {
                if (b === "filterDropDownHeight") {
                    this.grid.container().find("div ul").parent().css("height", c)
                } else {
                    if (b === "filterDialogWidth") {
                        $("#" + this.grid.container().attr("id") + "_dialog").css("width", c)
                    } else {
                        if (b === "filterDialogHeight") {
                            $("#" + this.grid.container().attr("id") + "_dialog").css("height", c)
                        }
                    }
                }
            }
        },

        destroy: function () {
            var b = $("#" + this.grid.id() + "_container_block"), c = $("#" + this.grid.id() + "_container_dialog");
            $("#" + this.grid.container()[0].id + " .ui-iggrid-filterrow").remove();
            $("#" + this.grid.container()[0].id + " .ui-iggrid-filterdd").remove();
            if (this.options.mode === "advanced") {
                b.remove();
                c.remove()
            }
            this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.unbind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler);
            this.grid.element.unbind("iggridresizingcolumnresized", this._columnResizedHandler);
            this.grid.element.unbind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            this.grid.container().unbind("iggridheaderextracellsmodified", this._headerInitHandler);
            $.Widget.prototype.destroy.call(this);
            return this
        },

        _initLoadingIndicator: function () {
            this._loadingIndicator = this.grid.container().length > 0 ? this.grid.container().igLoading().data("igLoading").indicator() : this.grid.element.igLoading().data("igLoading").indicator()
        },

        _onUIDirty: function (d, b) {
            var f, c = this.grid.options.columns;
            if (b.owner === this || b.owner.element[0].id !== this.element[0].id) {
                return
            }
            this._filterDialogClearAll();
            if (this._editors !== null && this._editors !== undefined) {
                for (f = 0; f < this._editors.length; f++) {
                    if (this.options.columnSettings[f].allowFiltering !== false) {
                        this._editors[f].value(null);
                        this._editors[f].element.igEditor("option", "nullText", this.options.nullTexts[this._getDefaultCondition(c[f].dataType)])
                    }
                }
            }
            for (f = 0; f < c.length; f++) {
                $("#" + this.grid.id() + "_dd_" + c[f].key).find("li").removeClass("ui-iggrid-filterddlistitemactive ui-state-active")
            }
            $(".ui-iggrid-filterbutton", this.grid.container()).parent().attr("title", this.options.tooltipTemplate.replace("${condition}", this.options.labels.noFilter));
            this.grid.dataSource.settings.filtering.expressions = []
        },

        _dataRendered: function () {
            var c = 0, e = this.grid.container().find(".ui-iggrid-footer .ui-iggrid-results"), b = e.parent(), d = false;
            if (!this._loadingIndicator) {
                this._initLoadingIndicator()
            }
            if (this._shouldFireDataFiltered) {
                this._shouldFireDataFiltered = false;
                this._trigger(this.events.dataFiltered, null, {
                    columnKey: this._curColKey,
                    columnIndex: this._curColIndex,
                    owner: this
                })
            }
            if (this._isFilteringRequest === true) {
                if (this.options.filterSummaryAlwaysVisible === true && e.length === 0) {
                    b = $("<div></div>").appendTo(this.grid.container()).addClass("ui-widget ui-helper-clearfix ui-corner-bottom ui-widget-header ui-iggrid-footer");
                    e = $("<span></span>").appendTo(b).addClass("ui-iggrid-results");
                    d = true
                }
                if (this.options.type === "local" || (this.options.type === "remote" && this.grid.dataSource.hasTotalRecordsCount() === false)) {
                    if (this.grid.dataSource._filter) {
                        c = this.grid.dataSource._filteredData.length
                    } else {
                        c = this.grid.dataSource._data.length
                    }
                } else {
                    c = this.grid.dataSource.totalRecordsCount()
                }
                e.text(this.options.filterSummaryTemplate.replace("${matches}", c)).attr("title", this.options.labels.filterSummaryTitleLabel);
                e.show();
                this._isFilteringRequest = false
            } else {
                if (this._isFilteringRequest === false) {
                    if (e.data("hideflag") !== false) {
                        e.hide()
                    } else {
                        e.data("hideflag", true)
                    }
                }
            }
            this._loadingIndicator.hide();
            if (d) {
                this.grid._initializeHeights()
            }
            this._setEditorsWidth()
        },

        _initFC: function () {
            var b, e, d = this.grid.element.data("igGridFeatureChooser"), g = this.options, c = this.options.columnSettings, f = (g.mode !== "simple" && g.advancedModeEditorsVisible === false);
            this._isInitFC = true;
            if (g.renderFC === false) {
                return
            }
            if (d !== null && d !== undefined) {
                for (e = 0; e < c.length; e++) {
                    b = c[e].columnKey;
                    if (b && c[e].allowFiltering === true && d._shouldRenderInFeatureChooser(b) === true) {
                        this._filterRowShown = true;
                        this._fcData[b] = true;
                        if (f) {
                            d._renderInFeatureChooser(b, {
                                name: "Filtering",
                                text: g.featureChooserTextAdvancedFilter,
                                secondaryIconClass: this.css.featureChooserModalDialogIcon,
                                isSelected: true,
                                method: $.proxy(this.toggleFilterRowByFeatureChooser, this),
                                updateOnClickAll: true,
                                groupName: "modaldialog",
                                groupOrder: 3,
                                order: 3
                            })
                        } else {
                            d._renderInFeatureChooser(b, {
                                name: "Filtering",
                                text: g.featureChooserText,
                                textHide: g.featureChooserTextHide,
                                iconClass: "ui-iggrid-filterbutton ui-corner-all ui-icon ui-icon-triangle-1-s",
                                isSelected: true,
                                method: $.proxy(this.toggleFilterRowByFeatureChooser, this),
                                updateOnClickAll: true,
                                groupName: "toggle",
                                groupOrder: 1,
                                order: 2,
                                type: "toggle",
                                state: "hide"
                            })
                        }
                    }
                }
            }
        },

        _columnResized: function () {
            if (this._filterRowShown !== false) {
                this._setEditorsWidth()
            }
        },

        _columnsCollectionModified: function () {
            if (this._filterRowShown !== false) {
                this._setEditorsWidth()
            }
        },

        _setEditorsWidth: function () {
            if (this.options.mode !== "simple" && this.options.advancedModeEditorsVisible !== true) {
                return
            }
            var e = this.options.columnSettings, d = this.grid._visibleColumns(), b = this.grid.headersTable().find("thead tr[data-role=filterrow]").first().find("td").not("[data-skip=true]"), c, f, g, h;
            for (f = 0; f < d.length; f++) {
                for (g = 0; g < e.length; g++) {
                    if (e[g].columnKey === d[f].key && e[g].allowFiltering === false) {
                        h = true;
                        break
                    }
                }
                if (h) {
                    h = false;
                    continue
                }
                if (!$.browser.opera && ((this.grid.options.height && this.grid.options.fixedHeaders === true) || $.browser.webkit)) {
                    c = b.eq(f).innerWidth()
                } else {
                    c = b.eq(f).width()
                }
                c -= b.eq(f).data("buttonWidth");
                b.eq(f).children("span").first().igEditor("option", "width", c)
            }
        },

        _headerRendered: function (s, b) {
            var v, m, n = 0, g, x, c, k = this.grid.options.columns, o, r, l = this.options.columnSettings, u = false, d, t = false, p, f, h, e, q = (this.options.mode === "simple" || this.options.advancedModeEditorsVisible === true);
            if (s.target.id !== this.grid.element[0].id) {
                return
            }
            v = this.grid.container().find("thead");
            if (this.options.mode === "simple" || this.options.advancedModeEditorsVisible === true) {
                m = $("<tr></tr>").appendTo(v).addClass(this.css.filterRow).attr("data-role", "filterrow");
                this.grid._headerInit(m)
            } else {
                m = v.find("tr:first")
            }
            f = function (i) {
                i.preventDefault();
                i.stopPropagation()
            };
            h = n + m.find("[data-skip=true]").length;
            for (n = 0; n < k.length; n++, h++) {
                if (q === true) {
                    g = $("<td></td>").appendTo(m).addClass(this.css.filterCell)
                } else {
                    if (this.grid._isMultiColumnGrid) {
                        g = $(this.grid._headerCells[h])
                    } else {
                        g = $(m[0].cells[h])
                    }
                    if (g.children().first().is("a")) {
                        g.children().first().css("display", "inline");
                        g.css("cursor", "pointer")
                    }
                    g.data("colName", k[n].key)
                }
                if (this.grid._isMultiColumnGrid !== true || q === true) {
                    if (n === k.length - 1 && this.grid.options.height && parseInt(this.grid.options.height, 10) > 0) {
                        g.css("width", parseInt(k[n].width, 10) + this.grid._scrollbarWidth())
                    } else {
                        g.css("width", k[n].width)
                    }
                }
                for (r = 0; r < l.length; r++) {
                    if (l[r].columnKey === k[n].key && l[r].allowFiltering === false) {
                        if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
                            this._editors.push({})
                        }
                        u = true;
                        break
                    }
                }
                if (u) {
                    u = false;
                    continue
                }
                if ((this.grid.options.height && this.grid.options.fixedHeaders === true) || $.browser.webkit) {
                    x = v.children().first().find("th:nth-child(" + (h + 1) + ")").innerWidth()
                } else {
                    x = v.children().first().find("th:nth-child(" + (h + 1) + ")").width()
                }
                t = (this.options.advancedModeEditorsVisible === false && this.options.mode === "advanced");
                if ((this.options.renderFilterButton === true && !t) || (t && this._renderFCFor(k[n].key) === false)) {
                    o = this.grid.element.attr("id") + "_dd_" + k[n].key;
                    if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
                        this._renderDropDown(k[n].dataType, o, k[n].key)
                    }
                    d = this.options.mode === "advanced" ? this.css.filterButtonAdvanced : this.css.filterButton;
                    if (t && this.options.advancedModeHeaderButtonLocation === "right") {
                        d = this.css.filterButtonAdvancedRight;
                        c = $("<span></span>").appendTo(g).addClass(d).data("colIndex", n)
                    } else {
                        c = $("<span></span>").prependTo(g).addClass(d).data("colIndex", n)
                    }
                    if (this.options.mode === "simple" || (this.options.mode === "advanced" && this.options.advancedModeEditorsVisible === true)) {
                        c.wrap('<a id="' + o + '_button" href="#" title="' + this.options.tooltipTemplate.replace("${condition}", this.options.labels.noFilter) + '" ></a>')
                    } else {
                        c.wrap('<a id="' + o + '_button" href="#" title="' + this.options.tooltipTemplate.replace("${condition}", this.options.labels.noFilter) + '" style="display:inline;"></a>')
                    }
                    p = g.find(".ui-iggrid-indicatorcontainer");
                    if (p.length === 0) {
                        p = $("<div></div>").appendTo(g).addClass("ui-iggrid-indicatorcontainer")
                    }
                    p.append(c.parent());
                    x = parseInt(x, 10);
                    if (this.grid.options.height === null && $.browser.mozilla) {
                        e = c.outerWidth(true)
                    } else {
                        e = c.outerWidth(false)
                    }
                    x -= e;
                    g.data("buttonWidth", e)
                }
                if (this.options.renderFilterButton === true) {
                    if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
                        c.parent().bind({
                            mousedown: $.proxy(this._toggleDropDown, this),
                            mouseup: f,
                            click: f,
                            blur: $.proxy(this._closeDropDown, this),
                            keydown: $.proxy(this._toggleDropDownKeyboard, this),
                            mouseover: $.proxy(this._hoverButton, this),
                            mouseout: $.proxy(this._unhoverButton, this),
                            focus: $.proxy(this._activateButton, this)
                        });
                        if ($.ig.util.isIE7) {
                            c.parent().bind({
                                focusout: $.proxy(this._closeDropDown, this)
                            })
                        }
                    } else {
                        if (this._renderFCFor(k[n].key) === false) {
                            c.parent().bind({
                                click: $.proxy(this._openFilterDialog, this),
                                keydown: $.proxy(this._openFilterDialogFromKeyboard, this),
                                focus: $.proxy(this._activateButton, this),
                                blur: $.proxy(this._deactivateButton, this)
                            })
                        }
                    }
                }
                if (this.options.advancedModeEditorsVisible === true || this.options.mode !== "advanced") {
                    this._createEditor(g, x, n, k[n].dataType, k[n].key)
                }
            }
            if ($("#" + this.grid.container().attr("id") + "_dialog").length > 0) {
                $("#" + this.grid.container().attr("id") + "_dialog").remove()
            }
            this._renderFilterDialog()
        },

        _renderFCFor: function (b) {
            return !(this._fcData === null || this._fcData === undefined || this.options.renderFC === false || this._fcData[b] !== true)
        },

        _columnMap: function () {
            var f = this.options, e, d, b = f.columnSettings, c = b.length, g = [];
            if (f.renderFC === false) {
                return false
            }
            for (e = 0; e < c; e++) {
                d = {
                    columnKey: b[e].columnKey,
                    enabled: true
                };
                if (b[e].allowFiltering === false) {
                    d.enabled = false
                }
                g.push(d)
            }
            return g
        },

        _headerCellRendered: function (b, c) {
            if (this._isInitFC !== true) {
                this._initFC()
            }
        },

        toggleFilterRowByFeatureChooser: function (e, d) {
            var f, i = this.options, h = this._filterRowShown, c = this.grid.container().find("thead"), b, g = !(i.mode === "simple" || i.advancedModeEditorsVisible === true);
            if (h === null || h === undefined) {
                this._filterRowShown = true;
                h = this._filterRowShown
            }
            if (g === false) {
                b = c.find('tr[data-role="filterrow"]');
                if (h === true) {
                    b.hide();
                    h = false
                } else {
                    b.show();
                    this._setEditorsWidth();
                    h = true
                }
                if (e === null) {
                    f = this.grid.element.data("igGridFeatureChooser");
                    if (f) {
                        f._toggleSelectedItems("Filtering")
                    }
                }
            } else {
                this._openFilterDialog(e, d)
            }
            this._filterRowShown = h;
            this.grid._initializeHeights();
            this.grid._adjustLastColumnWidth(true)
        },

        _createEditor: function (g, i, b, d, c) {
            var e, f, h = this._getEditorType(d);
            e = $("<span />").css("float", "left").css("width", "5px");
            if (this.options.filterButtonLocation === "left") {
                e.appendTo(g)
            } else {
                e.prependTo(g)
            }
            f = {
                textChanged: $.proxy(this._filter, this),
                width: i,
                disabled: (this.grid.options.columns[b].dataType === "bool" || this.grid.options.columns[b].dataType === "boolean"),
                type: h,
                textAlign: "left",
                button: (h === "datepicker") ? "dropdown" : null,
                maxDecimals: 6,
                nullText: this.options.nullTexts[this._findColumnSetting(c).condition],
                focus: $.proxy(this._fireEnterEditModeEvents, this),
                blur: $.proxy(this._fireExitEditModeEvents, this),
                enableUTCDates: this.grid.options.enableUTCDates
            };
            e.data("colIndex", b).data("colKey", c);
            e.igEditor(f);
            this._editors.push(e.data("igEditor"));
            e.find("input").addClass(this.css.filterCellEditor);
            return e
        },

        _getEditorType: function (b) {
            return (b === "date") ? "datepicker" : ((b === "number") ? "numeric" : "text")
        },

        _findColumnSetting: function (c) {
            var b;
            for (b = 0; b < this.options.columnSettings.length; b++) {
                if (this.options.columnSettings[b].columnKey === c) {
                    return this.options.columnSettings[b]
                }
            }
        },

        filter: function (c, d, b) {
            this._loadingIndicator.show();
            if (c !== undefined && c.length > 0) {
                this._isFilteringRequest = true
            }
            if (!b) {
                this._filterDataSource(c, true)
            } else {
                this._filterDataSource(c)
            }
            if (d === undefined || d === true) {
                this._updateFiltersUI(c === undefined ? this._generateExpressions() : c, b)
            }
        },

        _filter: function (c, b) {
            clearTimeout(this._timeoutId);
            this._ui = c;
            this._args = b;
            if (parseInt(this.options.filterDelay, 10) === 0) {
                this._filterInternal()
            } else {
                this._timeoutId = setTimeout($.proxy(this._filterInternal, this), this.options.filterDelay)
            }
        },

        _fireEnterEditModeEvents: function (b, d) {
            var c = d && d.owner ? d.owner._grid_sel : null;
            if (c) {
                if (c.time + 1000 > new Date().getTime()) {
                    d.owner.select(c.sel)
                }
                this.grid._synchronizeHScroll();
                delete d.owner._grid_sel
            }
        },

        _filterInternal: function (e, f) {
            var d = this._args, b, c, h, g;
            if (d !== undefined) {
                b = $(d.owner.element).data("colIndex");
                c = $(d.owner.element).data("colKey")
            } else {
                b = e;
                c = f
            }
            h = this._trigger(this.events.dataFiltering, null, {
                columnKey: c,
                columnIndex: b,
                owner: this
            });
            if (h) {
                this._loadingIndicator.show();
                g = this._editors ? this._editors[b] : null;
                if (g) {
                    g._addedFromAdvanced = false
                }
                this._curColKey = c;
                this._curColIndex = b;
                this._filterDataSource();
                if (g) {
                    g._grid_sel = {
                        time: new Date().getTime(),
                        sel: g._sel0
                    };
                    g.setFocus()
                }
            }
        },

        _filterDataSource: function (f, b) {
            var g, k, l, c, d = this.grid.options.columns, h = false, e, m;
            e = this.options.tooltipTemplate.replace("${condition}", this.options.labels.noFilter);
            if (f !== undefined) {
                if (b === true) {
                    this.grid.dataSource.settings.filtering.expressions.push.apply(this.grid.dataSource.settings.filtering.expressions, f);
                    this._filterDialogClearAll();
                    for (k = 0; k < f.length; k++) {
                        this._addFilterFromDialog(null, f[k])
                    }
                } else {
                    this.grid.dataSource.settings.filtering.expressions = f
                }
            } else {
                g = this._generateExpressions(true);
                for (k = 0; k < d.length; k++) {
                    h = false;
                    c = $("#" + this.grid.element[0].id + "_dd_" + d[k].key + "_button");
                    for (l = 0; l < g.length; l++) {
                        if (d[k].key === g[l].fieldName) {
                            h = true;
                            if ((g[l].expr === undefined || g[l].expr === null || g[l].expr === "") && this._requiresEntry(g[l].cond)) {
                                c.attr("title", e)
                            } else {
                                c.attr("title", this.options.tooltipTemplate.replace("${condition}", g[l].cond))
                            }
                            break
                        }
                    }
                    if (!h) {
                        c.attr("title", e)
                    }
                }
                this.grid.dataSource.settings.filtering.expressions = g
            }
            this.grid.element.trigger("iggriduisoftdirty", {
                owner: this
            });
            m = this.grid._trigger(this.grid.events.dataBinding, null, {
                owner: this.grid
            });
            if (m) {
                g = this.grid.dataSource.settings.filtering.expressions;
                if (this.options.type === "remote") {
                    this.grid.dataSource.settings.paging.pageIndex = 0;
                    this.grid._shouldResetPaging = true
                }
                this._isFilteringRequest = true;
                this._preserveSorting();
                if (g.length === 0) {
                    if (!b) {
                        this._shouldFireDataFiltered = true
                    }
                    this.grid.dataSource.dataBind()
                } else {
                    if (this.options.type === "remote") {
                        if (!b) {
                            this._shouldFireDataFiltered = true
                        }
                        this.grid.dataSource.dataBind()
                    } else {
                        this.grid.dataSource.settings.filtering.type = "local";
                        this.grid.dataSource.filter(g);
                        this.grid._trigger(this.grid.events.dataBound, null, {
                            owner: this.grid
                        });
                        this.grid._renderData();
                        if (!b) {
                            this._trigger(this.events.dataFiltered, null, {
                                columnKey: this._curColKey,
                                columnIndex: this._curColIndex,
                                owner: this
                            })
                        }
                    }
                }
            }
        },

        _filterDataSourceClear: function (c, b) {
            var e, d = this._generateExpressions(true), f, g;
            for (e = 0; e < d.length; e++) {
                if (d[e].fieldName === c) {
                    $.ig.removeFromArray(d, e);
                    break
                }
            }
            this.grid.dataSource.settings.filtering.expressions = d;
            this.grid.element.trigger("iggriduidirty", {
                owner: this
            });
            if (!this._curColKey || c) {
                this._curColKey = c;
                this._curColIndex = b
            }
            g = this._trigger(this.events.dataFiltering, null, {
                columnKey: this._curColKey,
                columnIndex: this._curColIndex,
                owner: this
            });
            if (g) {
                f = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                if (f) {
                    this.grid.dataSource.settings.paging.pageIndex = 0;
                    this._preserveSorting();
                    this.grid._shouldResetPaging = true;
                    if (d.length > 0) {
                        this._isFilteringRequest = true;
                        if (this.options.type === "remote") {
                            this._shouldFireDataFiltered = true;
                            this.grid.dataSource.dataBind()
                        } else {
                            this.grid.dataSource.settings.filtering.type = "local";
                            this.grid.dataSource.filter(d);
                            this.grid._trigger(this.grid.events.dataBound, null, {
                                owner: this.grid
                            });
                            this.grid._renderData();
                            this._trigger(this.events.dataFiltered, null, {
                                columnKey: this._curColKey,
                                columnIndex: this._curColIndex,
                                owner: this
                            })
                        }
                    } else {
                        this._isFilteringRequest = false;
                        this._shouldFireDataFiltered = true;
                        this.grid.dataSource.dataBind()
                    }
                }
            }
        },

        _preserveSorting: function () {
            var c = false, b = this.grid.element.data("igGridGroupBy");
            if (b && b.options && b.options.groupedColumns && b.options.groupedColumns.length > 0) {
                c = true
            }
            if (this.grid.dataSource.settings.sorting.expressions.length > 0 && c) {
                this.grid.dataSource.settings.sorting.defaultFields = this.grid.dataSource.settings.sorting.expressions
            }
        },

        _updateFiltersUI: function (d, b) {
            var f, h, c, e, g;
            if (d.length === 0 && this.options.mode === "advanced" && this.options.advancedModeEditorsVisible === true) {
                for (f = 0; f < this._editors.length; f++) {
                    if (this.options.columnSettings[f].allowFiltering !== false) {
                        this._editors[f].value(null)
                    }
                }
            }
            for (f = 0; f < d.length; f++) {
                e = $("#" + this.grid.element[0].id + "_dd_" + d[f].fieldName).find("ul");
                g = e.children();
                for (h = 0; h < g.length; h++) {
                    if ($(g[h]).data("cond") === d[f].cond) {
                        this._selectDropDownItem({
                            currentTarget: g[h]
                        });
                        break
                    }
                }
                c = this._editors[this._columnIndexFromKey(d[f].fieldName)];
                if (c !== undefined && c !== null) {
                    c.value(d[f].expr);
                    c._addedFromAdvanced = true
                }
            }
            this._updateTooltips(d)
        },

        _updateTooltips: function (d) {
            var b, k, e, l, h, c = this.grid.options.columns, f, g;
            l = this.options.tooltipTemplate.replace("${condition}", this.options.labels.noFilter);
            k = "";
            for (f = 0; f < d.length; f++) {
                b = $("#" + this.grid.element[0].id + "_dd_" + d[f].fieldName + "_button");
                if (!this._requiresEntry(d[f].cond) || d[f].expr === undefined || d[f].expr === null) {
                    h = ""
                } else {
                    h = d[f].expr
                }
                if (f === 0) {
                    b.attr("title", d[f].fieldName + " " + d[f].cond + " " + h + " ")
                } else {
                    b.attr("title", k + d[f].logic + " " + d[f].fieldName + " " + d[f].cond + " " + h + " ")
                }
                k = b.attr("title")
            }
            for (f = 0; f < c.length; f++) {
                e = false;
                for (g = 0; g < d.length; g++) {
                    if (d[g].fieldName === c[f].key) {
                        e = true;
                        break
                    }
                }
                if (!e) {
                    $("#" + this.grid.element[0].id + "_dd_" + c[f].key + "_button").attr("title", l)
                }
            }
        },

        _columnIndexFromKey: function (c) {
            var b;
            for (b = 0; b < this.grid.options.columns.length; b++) {
                if (this.grid.options.columns[b].key === c) {
                    return b
                }
            }
        },

        _generateExpressions: function (f) {
            var e = [], b = this.grid.options.columns, d, g, c, j, h;
            for (g = 0; g < b.length; g++) {
                if (this._editors && this._editors[g] && this._editors[g]._addedFromAdvanced && !f) {
                    continue
                }
                if (this.options.columnSettings[g].allowFiltering !== true) {
                    continue
                }
                d = this._editors[g].value();
                j = this._requiresEntry(this.options.columnSettings[g].condition);
                if ((d === undefined || d === null || d === "") && j) {
                    continue
                }
                c = this.options.columnSettings[g].condition;
                if (c === undefined || c === null || c === "") {
                    continue
                }
                h = false;
                if (b[g].dataType !== "date" || (b[g].dataType === "date" && d !== null && d !== undefined && c !== "empty" && c !== "notEmpty" && c !== "null" && c !== "notNull") || (b[g].dataType === "date" && !this._requiresEntry(this.options.columnSettings[g].condition))) {
                    if (d !== "" && !this.options.filterExprUrlKey) {
                        h = true;
                        e.push({
                            fieldName: b[g].key,
                            cond: c,
                            expr: d
                        })
                    } else {
                        if ((b[g].dataType === "bool" && d !== "") || (b[g].dataType !== "bool" && ((this.options.filterExprUrlKey !== undefined && this.options.filterExprUrlKey !== null) || this.options.type === "local"))) {
                            h = true;
                            e.push({
                                fieldName: b[g].key,
                                cond: c,
                                expr: d
                            })
                        } else {
                            if (b[g].dataType === "bool" && d === "" && (c === "null" || c === "notNull" || c === "empty" || c === "notEmpty")) {
                                h = true;
                                e.push({
                                    fieldName: b[g].key,
                                    cond: c,
                                    expr: d
                                })
                            }
                        }
                    }
                    if (b[g].unbound && h === true) {
                        e[e.length - 1].dataType = b[g].dataType
                    }
                }
            }
            return e
        },

        _getDefaultCondition: function (c) {
            var b = "equals";
            if (c === undefined || c === null || c === "string") {
                b = "contains"
            } else {
                if (c === "number") {
                    b = "equals"
                } else {
                    if (c === "date") {
                        b = "on"
                    } else {
                        if (c === "bool") {
                            b = "true"
                        }
                    }
                }
            }
            return b
        },

        _initDefaultSettings: function () {
            var l = [], k, d = this.options.columnSettings, f, h, e = [], c = this.grid.options.columns, b, g = (this.grid._hasUnboundColumns === true && this.options.type === "remote");
            if (c && c.length > 0) {
                for (f = 0; f < c.length; f++) {
                    b = true;
                    if (g && this.grid.getUnboundColumnByKey(c[f].key) !== null) {
                        b = false
                    }
                    l[f] = {
                        columnIndex: f,
                        columnKey: c[f].key,
                        condition: this._getDefaultCondition(c[f].dataType),
                        allowFiltering: b
                    }
                }
            }
            for (f = 0; f < d.length; f++) {
                for (h = 0; h < l.length; h++) {
                    if (l[h].columnKey === d[f].columnKey || l[h].columnIndex === d[f].columnIndex) {
                        break
                    }
                }
                if (h === l.length) {
                    continue
                }
                for (k in d[f]) {
                    if (d[f].hasOwnProperty(k) && k !== "columnKey" && k !== "columnIndex") {
                        l[h][k] = d[f][k]
                    }
                }
            }
            this.options.columnSettings = l;
            this.grid.dataSource.settings.filtering.expressions = e
        },

        _renderDropDown: function (j, f, b) {
            var k, e, d = this.options.columnSettings, c = this.grid.options.columns, g, h;
            if (j === "number") {
                k = this._renderNumericFilterDropDown(f, b)
            } else {
                if (j === "date") {
                    k = this._renderDateFilterDropDown(f, b)
                } else {
                    if (j === "boolean" || j === "bool") {
                        k = this._renderBooleanFilterDropDown(f, b)
                    } else {
                        k = this._renderStringFilterDropDown(f, b)
                    }
                }
            }
            if (this.options.filterDropDownItemIcons !== true) {
                if (this.options.showEmptyConditions) {
                    $("<a></a>").appendTo($("<li></li>").appendTo(k).addClass(this.css.filterDropDownListItem).data("cond", "empty")).text(this.options.labels.empty).addClass("ui-corner-all");
                    $("<a></a>").appendTo($("<li></li>").appendTo(k).addClass(this.css.filterDropDownListItem).data("cond", "notEmpty")).text(this.options.labels.notEmpty).addClass("ui-corner-all")
                }
                if (this.options.showNullConditions) {
                    $("<a></a>").appendTo($("<li></li>").appendTo(k).addClass(this.css.filterDropDownListItem).data("cond", "null")).text(this.options.labels.nullLabel).addClass("ui-corner-all");
                    $("<a></a>").appendTo($("<li></li>").appendTo(k).addClass(this.css.filterDropDownListItem).data("cond", "notNull")).text(this.options.labels.notNull).addClass("ui-corner-all")
                }
            } else {
                h = {
                    itemClass: this.css.filterDropDownListItemWithIcons,
                    imgContainerClass: this.css.filterItemIconContainer,
                    textClass: this.css.filterDropDownListItemTextContainer
                };
                if (this.options.showEmptyConditions) {
                    h.text = this.options.labels.empty;
                    h.imgClass = this.css.filterItemIcon;
                    $($.ig.tmpl(this._ft, h)).appendTo(k).data("cond", "empty");
                    h.text = this.options.labels.notEmpty;
                    h.imgClass = this.css.filterItemIcon;
                    $($.ig.tmpl(this._ft, h)).appendTo(k).data("cond", "notEmpty")
                }
                if (this.options.showNullConditions) {
                    h.text = this.options.labels.nullLabel;
                    h.imgClass = this.css.filterItemIcon;
                    $($.ig.tmpl(this._ft, h)).appendTo(k).data("cond", "null");
                    h.text = this.options.labels.notNull;
                    h.imgClass = this.css.filterItemIcon;
                    $($.ig.tmpl(this._ft, h)).appendTo(k).data("cond", "notNull")
                }
            }
            if (this.options.mode === "advanced") {
                this._renderAdvancedButton(k)
            }
            for (e = 0; e < d.length; e++) {
                if (d[e].columnKey === b && d[e].condition !== this._getDefaultCondition(c[e].dataType)) {
                    if (d[e].condition === "null") {
                        g = k.find(':contains("' + this.options.labels.nullLabel + '")')
                    } else {
                        g = k.find(':contains("' + this.options.labels[d[e].condition] + '")')
                    }
                    g = g.children().first().closest("li");
                    g.addClass(this.css.filterDropDownListItemActive).parent().data("selectedItem", $("li", g.parent()).index(g))
                }
            }
        },

        _renderAdvancedButton: function (c) {
            var b;
            b = $("<li></li>").appendTo(c).addClass(this.css.filterDropDownListItemAdvanced);
            this._currentButton = $(toStaticHTML('<input type="button"></input>'));
            this._currentButton.igButton({
                labelText: this.options.labels.advancedButtonLabel
            }).bind({
                    mousedown: $.proxy(this._openFilterDialog, this)
                });
            b.append(this._currentButton)
        },

        _openFilterDialogFromKeyboard: function (b) {
            if (b.keyCode === $.ui.keyCode.ENTER) {
                this._openFilterDialog(b)
            }
        },

        _openFilterDialog: function (n, j) {
            var s, r, y, u, p, z, c, k, m, e, t = true, d = $("#" + this.grid.container().attr("id") + "_block"), l = $("#" + this.grid.container().attr("id") + "_dialog"), x, q, v, b = true, g, f, o = this.grid.dataSource.settings.filtering.expressions;
            s = $.ig.getMaxZIndex(this.grid.container().attr("id") + "_dialog");
            d.css("zIndex", s + 1);
            l.css("zIndex", s + 2);
            if (this.options.filterDialogContainment === "owner") {
                l.draggable("option", "containment", this.grid.container())
            } else {
                l.draggable("option", "containment", "window")
            }
            this._dialogCurrentColumn = $(n.target).closest("ul").data("colName");
            if (this._dialogCurrentColumn === undefined || this._dialogCurrentColumn === null) {
                if (j !== null && j !== undefined) {
                    this._dialogCurrentColumn = j
                } else {
                    this._dialogCurrentColumn = $(n.target).closest("th").data("colName")
                }
            }
            if (this._dialogCurrentColumn === undefined || this._dialogCurrentColumn === null) {
                this._dialogCurrentColumn = this.grid.options.columns[0]
            }
            g = this.grid.columnByKey(this._dialogCurrentColumn).headerText;
            if (o !== undefined && o !== null) {
                for (q = 0; q < o.length; q++) {
                    f = this.grid.columnByKey(o[q].fieldName);
                    if (f !== null && f.headerText === g) {
                        b = false
                    }
                }
            }
            x = $("#" + this.grid.container().attr("id") + "_dialog table tbody");
            v = x.find("tr");
            if (b) {
                for (q = 0; q < v.length; q++) {
                    if ($(v[q]).children().first().find("input").attr("value") === g) {
                        b = false;
                        break
                    }
                }
            }
            this._dialogCurrentType = this.grid.columnByKey(this._dialogCurrentColumn).dataType;
            if (b === true) {
                this._addFilterFromDialog()
            }
            t = this._trigger(this.events.filterDialogOpening, null, {
                dialog: l,
                owner: this
            });
            if (t) {
                u = this.grid.container().offset();
                r = u.left;
                y = u.top;
                if (d.outerWidth() !== this.grid.container().outerWidth()) {
                    d.css("width", this.grid.container().outerWidth())
                }
                if (d.outerHeight() !== this.grid.container().outerHeight()) {
                    d.css("height", this.grid.container().outerHeight())
                }
                $("#" + this.grid.container().attr("id") + "_dialog_error").hide();
                d.css({
                    left: r,
                    top: y
                }).fadeToggle();
                z = this.grid.container().outerWidth();
                p = this.grid.container().outerHeight();
                e = $(window).width();
                c = $(window).height();
                if (z + r > e) {
                    z = z - (z + r - e)
                }
                if (z <= 0) {
                    z = this.grid.container().outerWidth()
                }
                if (p + y > c) {
                    p = p - (p + y - c)
                }
                if (p <= 0) {
                    p = this.grid.container().outerHeight()
                }
                k = parseInt(this.options.filterDialogHeight, 10);
                m = parseInt(this.options.filterDialogWidth, 10);
                if (isNaN(k) || k <= 0) {
                    k = l.outerHeight()
                }
                if (isNaN(m) || m <= 0) {
                    m = l.outerWidth()
                }
                y = y + parseInt(p / 2, 10) - k / 2;
                r = r + parseInt(z / 2, 10) - m / 2;
                y = y < 0 ? u.top : y;
                r = r < 0 ? u.left : r;
                l.css({
                    left: r,
                    top: y
                }).fadeToggle($.proxy(this._setResizableEnv, this));
                this._trigger(this.events.filterDialogOpened, null, {
                    dialog: l,
                    owner: this
                });
                l.focus();
                n.preventDefault();
                n.stopPropagation();
                if (!(this.options.mode === "advanced" && this.options.advancedModeEditorsVisible === false)) {
                    this._toggleDropDown({
                        currentTarget: this._currentTarget
                    }, true)
                }
            }
        },

        _closeFilterDialog: function (b) {
            var c = true;
            c = this._trigger(this.events.filterDialogClosing, null, {
                owner: this
            });
            if (c) {
                $("#" + this.grid.container().attr("id") + "_block").fadeToggle();
                $("#" + this.grid.container().attr("id") + "_dialog").fadeToggle();
                this._trigger(this.events.filterDialogClosed, null, {
                    owner: this
                });
                if (b) {
                    b.preventDefault();
                    b.stopPropagation()
                }
                return false
            }
        },

        _searchFilterDialog: function (c) {
            var f = [], k, b, l, h = true, g, m, d, j = true;
            h = this._trigger(this.events.filterDialogFiltering, null, {
                dialog: $("#" + this.grid.container().attr("id") + "_dialog"),
                owner: this
            });
            if (h) {
                k = $("#" + this.grid.container().attr("id") + "_dialog table tbody").children();
                b = "and";
                l = $("#" + this.grid.container().attr("id") + "_dialog select:first");
                if (l.length > 0) {
                    b = $("#" + this.grid.container().attr("id") + "_dialog select:first")[0].value === "all" ? "AND" : "OR"
                }
                for (g = 0; g < k.length; g++) {
                    m = this.grid.columnByText($(k[g].cells[0]).find("input")[0].value).dataType;
                    d = $(k[g].cells[2]).find("input").igEditor("value");
                    if (d && (d.nodeName || (d[0] && d[0].nodeName))) {
                        d = $(k[g].cells[2]).find("span").igEditor("value")
                    }
                    f.push({
                        fieldName: this.grid.columnByText($(k[g].cells[0]).find("input")[0].value).key,
                        cond: $(k[g].cells[1]).find("select")[0].value,
                        expr: d,
                        logic: b,
                        type: m
                    })
                }
                this._closeFilterDialog(c);
                if (this.options.advancedModeEditorsVisible === true && this.options.mode === "advanced") {
                    $.merge(f, this._generateExpressions())
                }
                this._currentAdvancedExpressions = f;
                j = this._trigger(this.events.dataFiltering, null, {
                    owner: this
                });
                if (j) {
                    this.filter(f, true, true)
                }
            }
            c.preventDefault();
            c.stopPropagation()
        },

        _filterDialogStartMove: function (b) {
            this._isFilterDialogMouseDown = true
        },

        _filterDialogStopMove: function (b) {
            this._isFilterDialogMouseDown = false;
            this._dialogClientX = undefined;
            this._dialogClientY = undefined
        },

        _filterDialogMove: function (b) {
            $(b.target).find(".ui-igedit-fieldincontainer").igEditor("dropDownVisible", false);
            this._trigger(this.events.filterDialogMoving, null, {
                dialog: b.target,
                owner: this
            })
        },

        _renderFilterDialog: function () {
            var g, e, i, d, m, j = this, c, h, l = true, b, k;
            $("<div></div>").appendTo("body").attr("id", this.grid.container().attr("id") + "_block").css("position", "absolute").addClass(this.css.blockArea).data("efh", "1").hide();
            g = $("<div></div>").appendTo("body").attr("id", this.grid.container().attr("id") + "_dialog").css("position", "absolute").css("width", this.options.filterDialogWidth).css("height", this.options.filterDialogHeight).addClass(this.css.filterDialog).data("efh", "1").hide();
            l = this._trigger(this.events.filterDialogContentsRendering, null, {
                dialogElement: g,
                owner: this
            });
            if (l) {
                $("<span></span>").appendTo(c = $("<div></div>").appendTo(g).addClass(this.css.filterDialogHeaderCaption)).text(this.options.labels.filterDialogCaptionLabel).addClass(this.css.filterDialogHeaderCaptionTitle);
                $("<span></span>").appendTo($("<a></a>").appendTo(c).attr("href", "#").attr("role", "button").addClass("ui-dialog-titlebar-close ui-corner-all")).bind({
                    click: $.proxy(this._closeFilterDialog, this)
                }).addClass("ui-icon ui-icon-closethick");
                h = $("<div></div>").appendTo(g).addClass("ui-dialog-content").css("overflow", "auto").css("height", this.options.filterDialogMaxHeight);
                e = {
                    label1: this.options.labels.filterDialogConditionLabel1,
                    label2: this.options.labels.filterDialogConditionLabel2
                };
                i = [
                    {
                        text: this.options.labels.filterDialogAllLabel,
                        value: "all"
                    },
                    {
                        text: this.options.labels.filterDialogAnyLabel,
                        value: "any"
                    }
                ];
                d = $($.ig.tmpl(this.options.filterDialogAddConditionTemplate, e)).appendTo(h).addClass(this.css.filterDialogAddCondition);
                $($.ig.tmpl(this.options.filterDialogAddConditionDropDownTemplate, i)).appendTo(d.find("div").addClass(this.css.filterDialogAddConditionDropDown).find("select"));
                b = $("<div></div>").appendTo(h);
                $(toStaticHTML('<input type="button"></input>')).appendTo($("<span></span>").appendTo(b).addClass(this.css.filterDialogAddButton)).igButton({
                    labelText: this.options.labels.filterDialogAddLabel,
                    width: this.options.filterDialogAddButtonWidth
                }).bind({
                        mousedown: $.proxy(this._addFilterFromDialog, this)
                    });
                $("<button />").appendTo(b).css("float", "right").igButton({
                    labelText: this.options.labels.filterDialogClearAllLabel,
                    click: $.proxy(this._filterDialogClearAll, this),
                    css: {
                        buttonClasses: this.css.filterDialogClearAllButton,
                        buttonHoverClasses: "",
                        buttonActiveClasses: "",
                        buttonFocusClasses: "",
                        buttonLabelClass: ""
                    }
                });
                $("<label></label>").appendTo(h).attr("id", g.attr("id") + "_error").hide().text(this.options.labels.filterDialogErrorLabel).addClass("ui-widget ui-state-error ui-igvalidator-label");
                $("<table><tbody></tbody></table>").appendTo(h).addClass(this.css.filterDialogFiltersTable);
                m = $("<div></div>").appendTo($("<div></div>").appendTo(g).addClass(this.css.filterDialogOkCancelButton)).addClass("ui-dialog-buttonset");
                $("<button/>").appendTo(m).igButton({
                    labelText: this.options.labels.filterDialogCancelLabel,
                    width: this.options.filterDialogOkCancelButtonWidth
                }).bind({
                        mousedown: $.proxy(this._closeFilterDialog, this)
                    });
                $("<button/>").appendTo(m).igButton({
                    labelText: this.options.labels.filterDialogOkLabel,
                    width: this.options.filterDialogOkCancelButtonWidth
                }).bind({
                        click: $.proxy(this._searchFilterDialog, this)
                    });
                if (this._hc === true) {
                    k = $("#" + this.grid.element[0].id.split("_")[0] + "_container")
                } else {
                    k = this.grid.container()
                }
                g.bind({
                    keydown: function (f) {
                        if (f.keyCode === $.ui.keyCode.ESCAPE) {
                            j._closeFilterDialog()
                        }
                    }
                }).draggable({
                        containment: k,
                        handle: c,
                        drag: $.proxy(this._filterDialogMove, this)
                    }).resizable({
                        minHeight: g.outerHeight() / 4,
                        minWidth: g.outerWidth() / 2,
                        containment: "parent",
                        resize: $.proxy(this._resizeHandler, this)
                    }).attr("role", "dialog").attr("tabIndex", -1);
                this._trigger(this.events.filterDialogContentsRendered, null, {
                    dialogElement: g,
                    owner: this
                })
            }
        },

        _setResizableEnv: function () {
            var c = $("#" + this.grid.container().attr("id") + "_dialog"), g = c.find(">.ui-dialog-content"), d = c.find(">.ui-dialog-titlebar"), b = c.find(">.ui-dialog-buttonpane"), f = g.outerHeight() - g.height();
            this._resizeCont = g;
            this._heightDifference = d.outerHeight(true) + b.outerHeight(true) + f
        },

        _resizeHandler: function (b, d) {
            var c = d.originalElement;
            this._resizeCont.css({
                height: (c.height() - this._heightDifference) + "px"
            })
        },

        _changeFilterCondition: function (d) {
            var h, b, f, c, g;
            c = d.target.value;
            b = this.grid.columnByText($(d.target).closest("td").parent().find("td:nth-child(1)").find("input")[0].value);
            f = $(d.target).closest("td").parent().find("td:nth-child(3)").find("input");
            h = this._requiresEntry(c);
            if (!h) {
                f.igEditor("option", "disabled", true);
                g = f.data("igEditor");
                this._editorValueForCondition(c, g)
            } else {
                f.igEditor("option", "disabled", false)
            }
        },

        _addFilterFromDialog: function (l, m) {
            var t = $("#" + this.grid.container().attr("id") + "_dialog table tbody"), r, h = this.options.columnSettings, o = {}, p, f, q, s = true, n, u, c, b, k, g, d;
            s = this._trigger(this.events.filterDialogFilterAdding, null, {
                filtersTableBody: t,
                owner: this
            });
            if (s) {
                if (t.children().length >= this.options.filterDialogMaxFilterCount) {
                    $("#" + this.grid.container().attr("id") + "_dialog_error").show();
                    return
                }
                p = $($.ig.tmpl(this.options.filterDialogFilterTemplate, o)).appendTo(t).hide();
                f = [];
                for (q = 0; q < this.grid.options.columns.length; q++) {
                    b = true;
                    for (r = 0; r < h.length; r++) {
                        if ((this.grid.options.columns[q].key === h[r].columnKey || q === h[r].columnIndex) && h[r].allowFiltering === false) {
                            b = false;
                            break
                        }
                    }
                    if (b) {
                        f.push(this.grid.options.columns[q].headerText)
                    }
                }
                if (m === undefined) {
                    n = this.grid.columnByKey(this._dialogCurrentColumn).headerText;
                    u = this._dialogCurrentType
                } else {
                    d = this.grid.columnByKey(m.fieldName);
                    if (d !== null) {
                        n = d.headerText;
                        u = d.dataType
                    }
                    g = m.cond;
                    k = m.expr
                }
                p.find("td:first").find("input").css("width", 80).igEditor({
                    listItems: f,
                    button: "dropdown",
                    listAutoComplete: true,
                    listMatchOnly: true,
                    width: this.options.filterDialogColumnDropDownDefaultWidth || 120,
                    textChanged: $.proxy(this._polulateFilterConditionDropDown, this),
                    value: n,
                    enableUTCDates: this.grid.options.enableUTCDates
                });
                c = p.find("td:nth-child(2)").children().first();
                this._populateConditionsList(c, n, u);
                c.bind("change", $.proxy(this._changeFilterCondition, this));
                p.find("td:nth-child(2)").children().first().css("width", this.options.filterDialogFilterDropDownDefaultWidth);
                p.show();
                this._populateFilterDialogInput(p.find("td:nth-child(3)").children().first(), u, k);
                p.find("td:last").children().first().addClass(this.css.filterDialogFilterRemoveButton).bind({
                    mousedown: $.proxy(this._removeFilterFromDialog, this)
                });
                this._trigger(this.events.filterDialogFilterAdded, null, {
                    filter: p,
                    owner: this
                })
            }
        },

        _filterDialogClearAll: function (b) {
            var c = $("#" + this.grid.container().attr("id") + "_dialog table tbody");
            c.empty();
            $("#" + this.grid.container().attr("id") + "_dialog_error").hide()
        },

        _polulateFilterConditionDropDown: function (d) {
            var h = d.target.value, c, b = this.grid.options.columns, j, f, g;
            c = $(d.target).closest("tr").find("td:nth-child(2)").children().first();
            f = $(d.target).closest("tr").find("td:nth-child(3)").children().first();
            for (g = 0; g < b.length; g++) {
                if (b[g].headerText === h) {
                    j = b[g].dataType;
                    break
                }
            }
            if (j === undefined) {
                return
            }
            this._populateConditionsList(c, h, j);
            this._populateFilterDialogInput(f, j)
        },

        _populateFilterDialogInput: function (c, e, b) {
            var d = {
                type: this._getEditorType(e),
                buttonHidden: e !== "date",
                button: "dropdown",
                disabled: e === "bool",
                maxDecimals: 12,
                textAlign: (e === "number") ? "right" : "left",
                width: this.options.filterDialogExprInputDefaultWidth,
                value: b,
                enableUTCDates: this.grid.options.enableUTCDates
            };
            if (!c.is("input")) {
                c = c.find("INPUT")
            }
            c.igEditor(d)
        },

        _populateConditionsList: function (b, d, e) {
            var c = [];
            if (e === "number") {
                c.push({
                    conditionName: "equals",
                    conditionLabel: this.options.labels.equals
                });
                c.push({
                    conditionName: "doesNotEqual",
                    conditionLabel: this.options.labels.doesNotEqual
                });
                c.push({
                    conditionName: "greaterThan",
                    conditionLabel: this.options.labels.greaterThan
                });
                c.push({
                    conditionName: "lessThan",
                    conditionLabel: this.options.labels.lessThan
                });
                c.push({
                    conditionName: "greaterThanOrEqualTo",
                    conditionLabel: this.options.labels.greaterThanOrEqualTo
                });
                c.push({
                    conditionName: "lessThanOrEqualTo",
                    conditionLabel: this.options.labels.lessThanOrEqualTo
                })
            } else {
                if (e === "bool" || e === "boolean") {
                    c.push({
                        conditionName: "true",
                        conditionLabel: this.options.labels.trueLabel
                    });
                    c.push({
                        conditionName: "false",
                        conditionLabel: this.options.labels.falseLabel
                    })
                } else {
                    if (e === "date") {
                        c.push({
                            conditionName: "on",
                            conditionLabel: this.options.labels.on
                        });
                        c.push({
                            conditionName: "notOn",
                            conditionLabel: this.options.labels.notOn
                        });
                        c.push({
                            conditionName: "after",
                            conditionLabel: this.options.labels.after
                        });
                        c.push({
                            conditionName: "before",
                            conditionLabel: this.options.labels.before
                        });
                        c.push({
                            conditionName: "today",
                            conditionLabel: this.options.labels.today
                        });
                        c.push({
                            conditionName: "yesterday",
                            conditionLabel: this.options.labels.yesterday
                        });
                        c.push({
                            conditionName: "thisMonth",
                            conditionLabel: this.options.labels.thisMonth
                        });
                        c.push({
                            conditionName: "lastMonth",
                            conditionLabel: this.options.labels.lastMonth
                        });
                        c.push({
                            conditionName: "nextMonth",
                            conditionLabel: this.options.labels.nextMonth
                        });
                        c.push({
                            conditionName: "thisYear",
                            conditionLabel: this.options.labels.thisYear
                        });
                        c.push({
                            conditionName: "lastYear",
                            conditionLabel: this.options.labels.lastYear
                        });
                        c.push({
                            conditionName: "nextYear",
                            conditionLabel: this.options.labels.nextYear
                        })
                    } else {
                        c.push({
                            conditionName: "startsWith",
                            conditionLabel: this.options.labels.startsWith
                        });
                        c.push({
                            conditionName: "endsWith",
                            conditionLabel: this.options.labels.endsWith
                        });
                        c.push({
                            conditionName: "contains",
                            conditionLabel: this.options.labels.contains
                        });
                        c.push({
                            conditionName: "doesNotContain",
                            conditionLabel: this.options.labels.doesNotContain
                        });
                        c.push({
                            conditionName: "equals",
                            conditionLabel: this.options.labels.equals
                        });
                        c.push({
                            conditionName: "doesNotEqual",
                            conditionLabel: this.options.labels.doesNotEqual
                        })
                    }
                }
            }
            if (this.options.showEmptyConditions) {
                c.push({
                    conditionName: "empty",
                    conditionLabel: this.options.labels.empty
                });
                c.push({
                    conditionName: "notEmpty",
                    conditionLabel: this.options.labels.notEmpty
                })
            }
            if (this.options.showNullConditions) {
                c.push({
                    conditionName: "null",
                    conditionLabel: this.options.labels.nullLabel
                });
                c.push({
                    conditionName: "notNull",
                    conditionLabel: this.options.labels.notNull
                })
            }
            b.empty();
            $($.ig.tmpl(this.options.filterDialogFilterConditionTemplate, c)).appendTo(b);
            if ($.browser.msie) {
                b.parent().append(b);
                b.width(b.width())
            }
        },

        _removeFilterFromDialog: function (b) {
            var c = $("#" + this.grid.container().attr("id") + "_dialog table tbody");
            $(b.target).closest("tr").remove();
            if (c.children().length < this.options.filterDialogMaxFilterCount) {
                $("#" + this.grid.container().attr("id") + "_dialog_error").hide()
            }
        },

        _renderStringFilterDropDown: function (c, b) {
            var e = this._renderDropDownElement(c, b), d;
            if (this.options.filterDropDownItemIcons !== true) {
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear).addClass("ui-corner-all");
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "startsWith")).text(this.options.labels.startsWith).addClass("ui-corner-all");
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "endsWith")).text(this.options.labels.endsWith).addClass("ui-corner-all");
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "contains")).text(this.options.labels.contains).addClass("ui-corner-all");
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "doesNotContain")).text(this.options.labels.doesNotContain).addClass("ui-corner-all");
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "equals")).text(this.options.labels.equals).addClass("ui-corner-all");
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "doesNotEqual")).text(this.options.labels.doesNotEqual).addClass("ui-corner-all")
            } else {
                d = {
                    itemClass: this.css.filterDropDownListItemWithIcons,
                    imgContainerClass: this.css.filterItemIconContainer,
                    imgClass: this.css.filterItemIconClear,
                    textClass: this.css.filterDropDownListItemTextContainer,
                    text: this.options.labels.clear
                };
                $($.ig.tmpl(this._ft, d)).appendTo(e);
                d.text = this.options.labels.startsWith;
                d.imgClass = this.css.filterItemIconStartsWith;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "startsWith");
                d.text = this.options.labels.endsWith;
                d.imgClass = this.css.filterItemIconEndsWith;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "endsWith");
                d.text = this.options.labels.contains;
                d.imgClass = this.css.filterItemIconContains;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "contains");
                d.text = this.options.labels.doesNotContain;
                d.imgClass = this.css.filterItemIconDoesNotContain;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "doesNotContain");
                d.text = this.options.labels.equals;
                d.imgClass = this.css.filterItemIconEquals;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "equals");
                d.text = this.options.labels.doesNotEqual;
                d.imgClass = this.css.filterItemIconDoesNotEqual;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "doesNotEqual")
            }
            return e
        },

        _renderNumericFilterDropDown: function (c, b) {
            var e = this._renderDropDownElement(c, b), d;
            if (this.options.filterDropDownItemIcons !== true) {
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "equals")).text(this.options.labels.equals);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "doesNotEqual")).text(this.options.labels.doesNotEqual);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "greaterThan")).text(this.options.labels.greaterThan);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "lessThan")).text(this.options.labels.lessThan);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "greaterThanOrEqualTo")).text(this.options.labels.greaterThanOrEqualTo);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "lessThanOrEqualTo")).text(this.options.labels.lessThanOrEqualTo)
            } else {
                d = {
                    itemClass: this.css.filterDropDownListItemWithIcons,
                    imgContainerClass: this.css.filterItemIconContainer,
                    imgClass: this.css.filterItemIconClear,
                    textClass: this.css.filterDropDownListItemTextContainer,
                    text: this.options.labels.clear
                };
                $($.ig.tmpl(this._ft, d)).appendTo(e);
                d.text = this.options.labels.equals;
                d.imgClass = this.css.filterItemIconEquals;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "equals");
                d.text = this.options.labels.doesNotEqual;
                d.imgClass = this.css.filterItemIconDoesNotEqual;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "doesNotEqual");
                d.text = this.options.labels.greaterThan;
                d.imgClass = this.css.filterItemIconGreaterThan;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "greaterThan");
                d.text = this.options.labels.lessThan;
                d.imgClass = this.css.filterItemIconLessThan;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "lessThan");
                d.text = this.options.labels.greaterThanOrEqualTo;
                d.imgClass = this.css.filterItemIconGreaterThanOrEqualTo;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "greaterThanOrEqualTo");
                d.text = this.options.labels.lessThanOrEqualTo;
                d.imgClass = this.css.filterItemIconLessThanOrEqualTo;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "lessThanOrEqualTo")
            }
            return e
        },

        _renderDateFilterDropDown: function (c, b) {
            var e = this._renderDropDownElement(c, b), d;
            if (this.options.filterDropDownItemIcons !== true) {
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "on")).text(this.options.labels.on);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "notOn")).text(this.options.labels.notOn);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "after")).text(this.options.labels.after);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "before")).text(this.options.labels.before);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "today")).text(this.options.labels.today);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "yesterday")).text(this.options.labels.yesterday);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "thisMonth")).text(this.options.labels.thisMonth);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "lastMonth")).text(this.options.labels.lastMonth);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "nextMonth")).text(this.options.labels.nextMonth);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "thisYear")).text(this.options.labels.thisYear);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "lastYear")).text(this.options.labels.lastYear);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "nextYear")).text(this.options.labels.nextYear)
            } else {
                d = {
                    itemClass: this.css.filterDropDownListItemWithIcons,
                    imgContainerClass: this.css.filterItemIconContainer,
                    imgClass: this.css.filterItemIconClear,
                    textClass: this.css.filterDropDownListItemTextContainer,
                    text: this.options.labels.clear
                };
                $($.ig.tmpl(this._ft, d)).appendTo(e);
                d.text = this.options.labels.on;
                d.imgClass = this.css.filterItemIconOn;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "on");
                d.text = this.options.labels.notOn;
                d.imgClass = this.css.filterItemIconNotOn;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "notOn");
                d.text = this.options.labels.after;
                d.imgClass = this.css.filterItemIconAfter;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "after");
                d.text = this.options.labels.before;
                d.imgClass = this.css.filterItemIconBefore;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "before");
                d.text = this.options.labels.today;
                d.imgClass = this.css.filterItemIconToday;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "today");
                d.text = this.options.labels.yesterday;
                d.imgClass = this.css.filterItemIconYesterday;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "yesterday");
                d.text = this.options.labels.thisMonth;
                d.imgClass = this.css.filterItemIconThisMonth;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "thisMonth");
                d.text = this.options.labels.lastMonth;
                d.imgClass = this.css.filterItemIconLastMonth;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "lastMonth");
                d.text = this.options.labels.nextMonth;
                d.imgClass = this.css.filterItemIconNextMonth;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "nextMonth");
                d.text = this.options.labels.thisYear;
                d.imgClass = this.css.filterItemIconThisYear;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "thisYear");
                d.text = this.options.labels.lastYear;
                d.imgClass = this.css.filterItemIconLastYear;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "lastYear");
                d.text = this.options.labels.nextYear;
                d.imgClass = this.css.filterItemIconNextYear;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "nextYear")
            }
            return e
        },

        _renderBooleanFilterDropDown: function (c, b) {
            var e = this._renderDropDownElement(c, b), d;
            if (this.options.filterDropDownItemIcons !== true) {
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).addClass(this.css.filterDropDownListItemClear)).text(this.options.labels.clear);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "true")).text(this.options.labels.trueLabel);
                $("<a></a>").appendTo($("<li></li>").appendTo(e).addClass(this.css.filterDropDownListItem).data("cond", "false")).text(this.options.labels.falseLabel)
            } else {
                d = {
                    itemClass: this.css.filterDropDownListItemWithIcons,
                    imgContainerClass: this.css.filterItemIconContainer,
                    imgClass: this.css.filterItemIconClear,
                    textClass: this.css.filterDropDownListItemTextContainer,
                    text: this.options.labels.clear
                };
                $($.ig.tmpl(this._ft, d)).appendTo(e);
                d.text = this.options.labels.trueLabel;
                d.imgClass = this.css.filterItemIconTrue;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "true");
                d.text = this.options.labels.falseLabel;
                d.imgClass = this.css.filterItemIconFalse;
                $($.ig.tmpl(this._ft, d)).appendTo(e).data("cond", "false")
            }
            return e
        },

        _renderDropDownElement: function (d, b) {
            var e, c;
            e = $("<ul></ul>").appendTo("body").addClass(this.css.filterDropDownList);
            c = $("<div></div>").appendTo("body").attr("id", d).addClass(this.css.filterDropDown).css("overflow", "hidden").css("position", "absolute").hide();
            if (!$.browser.msie) {
                c.css("overflow-y", "auto")
            }
            c.remove();
            if (this.options.filterDropDownWidth > 0) {
                e.css("width", this.options.filterDropDownWidth)
            }
            if (this.options.filterDropDownHeight > 0) {
                c.css("height", this.options.filterDropDownHeight)
            }
            e.data("colName", b);
            e.wrap(c);
            e.parent().data("efh", "1");
            $("#" + d).delegate("li", {
                mousedown: $.proxy(this._selectDropDownItem, this),
                mouseover: $.proxy(this._hoverDropDownItem, this),
                mouseout: $.proxy(this._unhoverDropDownItem, this)
            });
            return e
        },

        _hoverButton: function (c) {
            var b = $(c.currentTarget).find("span");
            if (this.options.mode === "advanced") {
                b.addClass(this.css.filterButtonAdvancedHover)
            } else {
                b.addClass(this.css.filterButtonHover)
            }
        },

        _unhoverButton: function (c) {
            var b = $(c.currentTarget).find("span");
            if (this.options.mode === "advanced") {
                b.removeClass(this.css.filterButtonAdvancedHover)
            } else {
                b.removeClass(this.css.filterButtonHover)
            }
        },

        _activateButton: function (c) {
            var b = $(c.currentTarget).find("span");
            if (this._dontApplyStyles) {
                this._dontApplyStyles = false;
                return
            }
            if (this.options.mode === "advanced") {
                b.addClass(this.css.filterButtonAdvancedActive)
            } else {
                b.addClass(this.css.filterButtonActive)
            }
        },

        _deactivateButton: function (b) {
            var c = $(b.target).find("span");
            c.removeClass(this.css.filterButtonAdvancedActive);
            c.removeClass(this.css.filterButtonActive)
        },

        _toggleDropDown: function (g, d, f) {
            var b = $(g.currentTarget), h = b.attr("id"), e, i, l, j, m, k = true, c = b.find("span");
            if (this._animating && h === this._animatingId) {
                return
            }
            e = $("#" + h.substring(0, h.indexOf("_button")));
            j = 0;
            m = 0;
            if (!(!e.is(":visible") && d === true)) {
                this._animating = true;
                this._animatingId = h
            }
            if (this._openingAnimation !== true) {
                this._dontFocus = f
            } else {
                this._dontFocus = null
            }
            this._isClosing = false;
            if (e.is(":visible")) {
                k = this._trigger(this.events.dropDownClosing, null, {
                    dropDown: e,
                    owner: this
                });
                this._isClosing = true
            } else {
                if (!d) {
                    k = this._trigger(this.events.dropDownOpening, null, {
                        dropDown: e,
                        owner: this
                    })
                }
            }
            if (k) {
                i = c.offset().left;
                l = c.offset().top + c.outerHeight();
                if (e.offset().left !== i && e.offset().top !== l) {
                    e.css("left", i).css("top", l)
                }
                this._currentTarget = b;
                this._dd = e;
                if (!this._isClosing) {
                    this._opendd = e
                }
                if ($.browser.msie) {
                    e.css("overflow-x", "hidden");
                    e.css("overflow-y", "hidden")
                }
                if (d !== undefined && d === true) {
                    if (e.is(":visible")) {
                        if (this.options.filterDropDownAnimations !== "none") {
                            e.hide(this.options.filterDropDownAnimationDuration, $.proxy(this._animationEnd, this))
                        } else {
                            e.hide();
                            this._trigger(this.events.dropDownClosed, null, {
                                dropDown: e,
                                owner: this
                            })
                        }
                    }
                } else {
                    if (this.options.filterDropDownAnimations !== "none") {
                        if (e.is(":visible")) {
                            this._closingTarget = this._currentTarget
                        } else {
                            this._openingTarget = this._currentTarget;
                            this._openingAnimation = true
                        }
                        e.toggle(this.options.filterDropDownAnimationDuration, $.proxy(this._animationEnd, this))
                    } else {
                        e.toggle();
                        if (this._isClosing) {
                            this._trigger(this.events.dropDownClosed, null, {
                                dropDown: e,
                                owner: this
                            })
                        } else {
                            this._trigger(this.events.dropDownOpened, null, {
                                dropDown: e,
                                owner: this
                            })
                        }
                        if (f !== true) {
                            this._dontApplyStyles = true;
                            b.focus()
                        }
                    }
                }
            }
        },

        _animationEnd: function () {
            if (this._isClosing === true) {
                this._trigger(this.events.dropDownClosed, null, {
                    dropDown: this._dd,
                    owner: this
                })
            } else {
                this._trigger(this.events.dropDownOpened, null, {
                    dropDown: this._opendd,
                    owner: this
                });
                this._openingAnimation = false
            }
            if (this._dd && $.browser.msie) {
                this._dd.css("overflow-y", "auto")
            }
            this._isClosing = null;
            if (this._dontFocus !== true) {
                this._dontApplyStyles = true;
                this._openingTarget.focus()
            }
            this._animating = false
        },

        _toggleDropDownKeyboard: function (d) {
            var e, f, b = $(d.target), c;
            if (d.keyCode === $.ui.keyCode.ENTER || d.keyCode === $.ui.keyCode.SPACE) {
                d.stopPropagation();
                d.preventDefault();
                e = $("#" + b.attr("id").substring(0, b.attr("id").indexOf("_button"))).find("ul");
                if (e.data("selectedItem")) {
                    f = e.find("li:nth-child(" + (e.data("selectedItem") + 1) + ")");
                    c = $("#" + b.attr("id").substring(0, b.attr("id").indexOf("_button"))).is(":visible");
                    if ($(f).hasClass("ui-iggrid-filterddlistitemadvanced") && c) {
                        this._openFilterDialog(d)
                    }
                }
                this._toggleDropDown(d)
            } else {
                if (d.keyCode === $.ui.keyCode.DOWN) {
                    d.stopPropagation();
                    d.preventDefault();
                    this._selectDropDownItem(d, "next")
                } else {
                    if (d.keyCode === $.ui.keyCode.UP) {
                        d.stopPropagation();
                        d.preventDefault();
                        this._selectDropDownItem(d, "prev")
                    }
                }
            }
        },

        _closeDropDown: function (e) {
            var b = $(e.currentTarget).find("span"), c = $(e.currentTarget), d;
            if (this._openingTarget && e.target.id === this._openingTarget.attr("id") && this._openingAnimation === true) {
                return
            }
            d = $("#" + c.attr("id").substring(0, c.attr("id").indexOf("_button")));
            if (d && !d.is(":visible")) {
                b.removeClass(this.css.filterButtonActive);
                return
            }
            this._toggleDropDown(e, true, true);
            if (this._dontApplyStyles) {
                this._dontApplyStyles = false;
                return
            }
            if (this.options.mode === "advanced") {
                b.removeClass(this.css.filterButtonAdvancedActive)
            } else {
                b.removeClass(this.css.filterButtonActive)
            }
        },

        _selectDropDownItem: function (f, h) {
            var b = $(f.currentTarget), g, d, k, i, c, j, e;
            if (b.find("input").length > 0 && this.options.mode === "advanced") {
                return
            }
            if (h === "next" || h === "prev") {
                i = $("#" + b.attr("id").substring(0, b.attr("id").indexOf("_button"))).find("ul")
            }
            if (h === "next") {
                if (i.data("selectedItem") === undefined) {
                    b = i.find("li:first")
                } else {
                    b = i.find("li:nth-child(" + (i.data("selectedItem") + 1) + ")");
                    if (b.next().length === 0) {
                        b = i.find("li:first")
                    } else {
                        b = b.next()
                    }
                }
            }
            if (h === "prev") {
                if (i.data("selectedItem") === undefined) {
                    b = i.find("li:last")
                } else {
                    b = i.find("li:nth-child(" + (i.data("selectedItem") + 1) + ")");
                    if (b.prev().length === 0) {
                        b = i.find("li:last")
                    } else {
                        b = b.prev()
                    }
                }
            }
            g = b.data("cond");
            c = $("#" + b.closest("div").attr("id") + "_button");
            if (b.data("cond") === undefined) {
                c.attr("title", this.options.tooltipTemplate.replace("${condition}", this.options.labels.noFilter))
            } else {
                c.attr("title", this.options.tooltipTemplate.replace("${condition}", b.text()))
            }
            d = $("#" + b.closest("div").attr("id") + "_button").find("span").data("colIndex");
            if (d === null || d === undefined) {
                return
            }
            e = this.options.columnSettings[parseInt(d, 10)].condition;
            if (g !== undefined) {
                this.options.columnSettings[parseInt(d, 10)].condition = g
            } else {
                if (e === "empty" || e === "notEmpty" || e === "null" || e === "notNull" || !this._requiresEntry(e)) {
                    this.options.columnSettings[parseInt(d, 10)].condition = this._getDefaultCondition(this.grid.options.columns[d].dataType)
                }
            }
            k = b.parent().data("selectedItem");
            if (k !== undefined) {
                b.parent().find("li:nth-child(" + (k + 1) + ")").removeClass(this.css.filterDropDownListItemActive)
            }
            b.addClass(this.css.filterDropDownListItemActive);
            b.parent().data("selectedItem", $("li", b.parent()).index(b));
            this._editors[d].element.igEditor("option", "nullText", this.options.nullTexts[g]);
            j = this._requiresEntry(g);
            if (b.hasClass("ui-iggrid-filterddlistitemclear") || (this.options.filterDropDownItemIcons === true && b.find(".ui-iggrid-filtericonclear").length > 0)) {
                if (!j || g === undefined) {
                    this._editors[d].element.igEditor("option", "disabled", this.grid.options.columns[d].dataType === "bool")
                }
                this._editors[d].value(null);
                this._filterDataSourceClear(this.grid.options.columns[d].key, d)
            } else {
                if (!j) {
                    this._editors[d].element.igEditor("option", "disabled", true);
                    this._editorValueForCondition(g, this._editors[d]);
                    this._filterInternal(d, this.grid.options.columns[d].key)
                } else {
                    if (this._editors[d].value() !== "" && this._editors[d].value() !== null) {
                        this._editors[d].value(null)
                    }
                }
                if (j) {
                    this._editors[d].element.igEditor("option", "disabled", false)
                }
                if (h === undefined && g !== undefined) {
                    this._editors[d].setFocus()
                }
            }
        },

        _requiresEntry: function (b) {
            if (b === "true" || b === "false" || b === "today" || b === "yesterday" || b === "thisMonth" || b === "nextMonth" || b === "lastMonth" || b === "thisYear" || b === "lastYear" || b === "empty" || b === "notEmpty" || b === "null" || b === "notNull" || b === "nextYear") {
                return false
            }
            if (b === undefined || b === null) {
                return false
            }
            return true
        },

        _editorValueForCondition: function (d, c) {
            var b = new Date();
            if (d === "true") {
                c.value(true)
            } else {
                if (d === "false") {
                    c.value(false)
                } else {
                    if (d === "today") {
                        c.value(new Date())
                    } else {
                        if (d === "yesterday") {
                            c.value(new Date(b.getFullYear(), b.getMonth(), b.getDate() - 1, 0, 0, 0, 0))
                        } else {
                            c.value(null)
                        }
                    }
                }
            }
        },

        _hoverDropDownItem: function (b) {
            if ($(b.currentTarget).find("input").length === 0) {
                $(b.currentTarget).addClass(this.css.filterDropDownListItemHover)
            }
        },

        _unhoverDropDownItem: function (b) {
            $(b.currentTarget).removeClass(this.css.filterDropDownListItemHover)
        },

        _virtualHorizontalScroll: function (d, b) {
            var g = b.startColIndex, f, e = this.grid.headersTable().find("th"), c;
            if (this._currentTarget) {
                this._toggleDropDown({
                    currentTarget: this._currentTarget
                }, true)
            }
            if (this.options.mode === "advanced" && this.options.advancedModeEditorsVisible !== true) {
                for (f = 0; f < this.grid._virtualColumnCount; f++) {
                    c = this.grid.options.columns[f + g].key;
                    $(e[f]).data("colName", c);
                    if (this._fcData[c] === true) {
                        continue
                    }
                    $(e[f]).find("a").attr("id", this.grid.element[0].id + "_dd_" + c + "_button")
                }
                this._updateTooltips(this._currentAdvancedExpressions || [])
            } else {
                throw new Error($.ig.GridFiltering.locale.virtualizationSimpleFilteringNotAllowed)
            }
        },

        _headerInit: function (d, b) {
            var c;
            if (this.options.mode !== "simple" || this.grid.element.attr("id") !== b.owner.element.attr("id")) {
                return
            }
            c = this.grid.container().find("thead").find("[data-role=filterrow]");
            c.find("[data-skip=true]").remove();
            this.grid._headerInit(c, null, true)
        },

        _injectGrid: function (b, c) {
            this.grid = b;
            if (this.options.type === null) {
                this.options.type = this.grid._inferOpType()
            }
            if (this.options.filterExprUrlKey) {
                this.grid.dataSource.settings.filtering.filterExprUrlKey = this.options.filterExprUrlKey
            }
            this.grid.dataSource.settings.filtering.caseSensitive = this.options.caseSensitive;
            if (this._headerCellRenderedHandler !== null && this._headerCellRenderedHandler !== undefined) {
                this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler)
            }
            this._headerCellRenderedHandler = $.proxy(this._headerCellRendered, this);
            this.grid.element.bind("iggridheadercellrendered", this._headerCellRenderedHandler);
            if (this._headerRenderedHandler !== null && this._headerRenderedHandler !== undefined) {
                this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler)
            }
            this._headerRenderedHandler = $.proxy(this._headerRendered, this);
            this.grid.element.bind("iggridheaderrendered", this._headerRenderedHandler);
            if (this._columnResizedHandler !== null && this._columnResizedHandler !== undefined) {
                this.grid.element.unbind("iggridresizingcolumnresized", this._columnResizedHandler)
            }
            this._columnResizedHandler = $.proxy(this._columnResized, this);
            this.grid.element.bind("iggridresizingcolumnresized", this._columnResizedHandler);
            if (this._columnsCollectionModifiedHandler !== null && this._columnsCollectionModifiedHandler !== undefined) {
                this.grid.element.unbind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler)
            }
            this._columnsCollectionModifiedHandler = $.proxy(this._columnsCollectionModified, this);
            this.grid.element.bind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            this._initDefaultSettings();
            this.grid.element.bind("iggriduidirty", $.proxy(this._onUIDirty, this));
            this._virtualHorizontalScrollHandler = $.proxy(this._virtualHorizontalScroll, this);
            this.grid.element.bind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler);
            if (((this.grid.options.virtualization === true && this.grid.options.width !== null) || this.grid.options.columnVirtualization === true) && this.options.mode === null) {
                this.options.mode = "advanced"
            } else {
                if (((this.grid.options.virtualization === false || (this.grid.options.virtualization === true && this.grid.options.width === null)) && this.grid.options.columnVirtualization === false) && this.options.mode === null) {
                    this.options.mode = "simple"
                } else {
                    if (this.options.mode === "simple" && (this.grid.options.virtualization === true || this.grid.options.columnVirtualization === true)) {
                        throw new Error($.ig.GridFiltering.locale.virtualizationSimpleFilteringNotAllowed)
                    }
                }
            }
            this._headerInitHandler = $.proxy(this._headerInit, this);
            this.grid.element.bind("iggridheaderextracellsmodified", this._headerInitHandler);
            if (this.grid.element.igGridFeatureChooser !== undefined) {
                this.grid.element.igGridFeatureChooser()
            } else {
                throw new Error($.ig.GridFiltering.locale.featureChooserNotReferenced)
            }
        }
    });

    $.extend($.ui.igGridFiltering, {
        version: "12.2.20122.1021"
    })

}(jQuery));
