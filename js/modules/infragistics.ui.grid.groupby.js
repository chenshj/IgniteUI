﻿/*
 * Infragistics.Web.ClientUI Outlook GroupBy feature 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  ig.ui.grid.framework.js
 *   modernizr.js
 */
(function (a) {
    a.widget("ui.igGridGroupBy", {

        css: {
            dragMarkup: "ui-iggrid-dragMarkup",
            groupByArea: "ui-iggrid-groupbyarea",
            groupByAreaText: "ui-iggrid-groupbyareatext",
            groupedRow: "ui-iggrid-groupedrow",
            expandHeaderCellGroupBy: "ui-iggrid-expandheadercellgb ui-iggrid-header ui-widget-header",
            groupByExpandCellExpanded: "ui-icon ui-iggrid-expandbutton ui-iggrid-expandbuttonexpanded ui-icon-minus",
            groupByExpandCellCollapsed: "ui-icon ui-iggrid-expandbutton ui-icon-plus",
            groupByAreaDropHover: "ui-iggrid-groupbyareahover",
            groupByExpandColumn: "ui-iggrid-expandcolumn",
            nonGroupRowEmptyCell: "ui-iggrid-nongrouprowemptycell",
            groupedColumnLabel: "ui-iggrid-groupedcolumnlabel ui-state-default",
            groupedColumnLabelText: "ui-iggrid-groupedcolumnlabeltext",
            groupByRemoveButton: "ui-icon ui-icon-circle-close ui-iggrid-groupbyremovebutton",
            groupedColumnLabelRightEdgeEnd: "ui-iggrid-groupbylabelrightedgeend",
            groupedColumnLabelRightEdge: "ui-iggrid-groupbylabelrightedge",
            groupedColumnLayoutLabel: "ui-iggrid-groupbylayoutlabel",
            footerExtraCell: "ui-widget-content ui-iggrid-footerextracell",
            featureChooserIconClass: "ui-icon ui-iggrid-icon-groupby",
            dialogGroupedColumns: "ui-iggrid-groupby-dialog-groupedcolumns",
            dialogUnroupedColumns: "ui-iggrid-groupby-dialog-ungroupedcolumns",
            dialogGroupedItem: "ui-widget-content",
            dialogUngroupedItem: "ui-widget-content",
            dialogUngroupedColumnsGroupByButton: "ui-iggrid-dialog-groupby-button",
            dialogUngroupedColumnsText: "ui-iggrid-dialog-text",
            dialogButtonAsc: "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
            dialogButtonAscIcon: "ui-button-icon-primary ui-icon ui-icon-arrowthick-1-n",
            dialogButtonDesc: "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
            dialogButtonDescIcon: "ui-button-icon-primary ui-icon ui-icon-arrowthick-1-s",
            dialogButtonUngroup: "ui-iggrid-dialog-groupedbuttons ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-igbutton ui-widget-content ui-igbutton-remove",
            dialogButtonUngroupContainer: "ui-button-icon-primary ui-icon ui-icon-circle-close",
            dialogGroupedColumnTextContainer: "ui-iggrid-dialog-text",
            dialogListGroupedColumns: "ui-iggrid-dialog-list-groupedcolumns",
            dialogListUngroupedColumns: "ui-iggrid-dialog-list-ungroupedcolumns",
            dialogLayoutsDDButton: "ui-icon ui-icon-triangle-1-s ui-iggrid-dialog-layouts-dd-button",
            dropDownLayoutsContainer: "ui-iggrid-featurechooser-dropdown-dialog ui-widget ui-widget-content ui-corner-all",
            dialogLayoutsDDField: "ui-iggrid-dialog-layouts-dd-field",
            dialogLayoutsDD: "ui-iggrid-dialog-layouts-dd ui-widget-content ui-corner-all ig-combo-icon-container",
            modalDialogTreeContainer: "ui-iggrid-groupby-dialog-tree",
            modalDialogLayoutsContainer: "ui-iggrid-groupby-dialog-layoutscontainer",
            dialogButtonsHover: "ui-state-hover",
            groupByLastEmptyCell: "ui-iggrid-last-emptycell"
        },

        renderInFeatureChooser: false,

        options: {
            groupByAreaVisibility: "top",
            initialExpand: true,
            emptyGroupByAreaContent: a.ig.GridGroupBy.locale.emptyGroupByAreaContent,
            emptyGroupByAreaContentSelectColumns: a.ig.GridGroupBy.locale.emptyGroupByAreaContentSelectColumns,
            expansionIndicatorVisibility: true,
            groupByLabelWidth: null,
            labelDragHelperOpacity: 0.5,
            indentation: 30,
            groupedColumns: [
                {
                    key: null,
                    dir: "asc",
                    layout: null,
                    col: null
                }
            ],
            resultResponseKey: null,
            groupedRowTextTemplate: "${key}: ${val} (${count})",
            type: null,
            groupByUrlKey: null,
            groupByUrlKeyAscValue: null,
            groupByUrlKeyDescValue: null,
            summarySettings: {
                multiSummaryDelimiter: ",",
                summaryFormat: "#.00"
            },
            columnSettings: [
                {
                    allowGrouping: true,
                    isGroupBy: false,
                    groupComparerFunction: null,
                    groupLabelFormatter: null,
                    summaries: [
                        {
                            summaryFunction: "avg",
                            text: null,
                            customSummary: null
                        }
                    ]
                }
            ],
            expandTooltip: a.ig.GridGroupBy.locale.expandTooltip,
            collapseTooltip: a.ig.GridGroupBy.locale.collapseTooltip,
            removeButtonTooltip: a.ig.GridGroupBy.locale.removeButtonTooltip,
            featureChooserText: a.ig.GridGroupBy.locale.featureChooserText,
            featureChooserTextHide: a.ig.GridGroupBy.locale.featureChooserTextHide,
            modalDialogGroupByOnClick: false,
            modalDialogGroupByButtonText: a.ig.GridGroupBy.locale.modalDialogGroupByButtonText,
            modalDialogCaptionButtonDesc: a.ig.GridGroupBy.locale.modalDialogCaptionButtonDesc,
            modalDialogCaptionButtonAsc: a.ig.GridGroupBy.locale.modalDialogCaptionButtonAsc,
            modalDialogCaptionButtonUngroup: a.ig.GridGroupBy.locale.modalDialogCaptionButtonUngroup,
            modalDialogCaptionText: a.ig.GridGroupBy.locale.modalDialogCaptionText,
            modalDialogDropDownLabel: a.ig.GridGroupBy.locale.modalDialogDropDownLabel,
            modalDialogRootLevelHierarchicalGrid: a.ig.GridGroupBy.locale.modalDialogRootLevelHierarchicalGrid,
            modalDialogDropDownButtonCaption: a.ig.GridGroupBy.locale.modalDialogDropDownButtonCaption,
            modalDialogClearAllButtonLabel: a.ig.GridGroupBy.locale.modalDialogClearAllButtonLabel,
            emptyGroupByAreaContentSelectColumnsCaption: a.ig.GridGroupBy.locale.emptyGroupByAreaContentSelectColumnsCaption,
            modalDialogDropDownWidth: 200,
            modalDialogDropDownAreaWidth: null,
            modalDialogAnimationDuration: 200,
            modalDialogWidth: 400,
            modalDialogHeight: "",
            modalDialogButtonApplyText: a.ig.GridGroupBy.locale.modalDialogButtonApplyText,
            modalDialogButtonCancelText: a.ig.GridGroupBy.locale.modalDialogButtonCancelText,
            useGridColumnFormatter: true
        },

        events: {
            groupedColumnsChanging: "groupedColumnsChanging",
            groupedColumnsChanged: "groupedColumnsChanged",
            modalDialogMoving: "modalDialogMoving",
            modalDialogClosing: "modalDialogClosing",
            modalDialogClosed: "modalDialogClosed",
            modalDialogOpening: "modalDialogOpening",
            modalDialogOpened: "modalDialogOpened",
            modalDialogContentsRendering: "modalDialogContentsRendering",
            modalDialogContentsRendered: "modalDialogContentsRendered",
            modalDialogButtonApplyClick: "modalDialogButtonApplyClick",
            modalDialogButtonResetClick: "modalDialogButtonResetClick",
            modalDialogGroupingColumn: "modalDialogGroupingColumn",
            modalDialogGroupColumn: "modalDialogGroupColumn",
            modalDialogUngroupingColumn: "modalDialogUngroupingColumn",
            modalDialogUngroupColumn: "modalDialogUngroupColumn",
            modalDialogSortGroupedColumn: "modalDialogSortGroupedColumn"
        },

        _create: function () {
            this._orderedGroupedCols = []
        },

        _createWidget: function (c, b) {
            this.options.columnSettings = [];
            this.options.groupedColumns = [];
            this._tempSortingExpr = [];
            this._tempGroupedColumns = [];
            this._tempOrderedGroupedCols = [];
            this._tempOptions = {};
            this._currentTreeLayer = null;
            this._isInitFC = false;
            this._modalSelectedLayout = null;
            a.Widget.prototype._createWidget.apply(this, arguments)
        },

        _setOption: function (b, d) {
            var c = a("#" + this.grid.element[0].id + "_groupby_modalDialog");
            a.Widget.prototype._setOption.apply(this, arguments);
            if (b === "groupByAreaVisibility" || b === "expansionIndicatorVisibility") {
                throw new Error(a.ig.Grid.locale.optionChangeNotSupported + " " + b)
            }
            switch (b) {
                case "modalDialogGroupByOnClick":
                    a("#" + this.grid.element[0].id + "_groupby_modalDialog").remove();
                    this._renderGroupByDialog();
                    break;
                case "modalDialogCaptionText":
                    c.igGridModalDialog("option", "modalDialogCaptionText", d);
                    break;
                case "modalDialogAnimationDuration":
                    c.igGridModalDialog("option", "animationDuration", d);
                    break;
                case "modalDialogWidth":
                    c.igGridModalDialog("option", "modalDialogWidth", d);
                    break;
                case "modalDialogHeight":
                    c.igGridModalDialog("option", "modalDialogHeight", d);
                    break;
                case "modalDialogButtonApplyText":
                    c.igGridModalDialog("option", "buttonApplyText", d);
                    break;
                case "modalDialogButtonCancelText":
                    c.igGridModalDialog("option", "buttonCancelText", d);
                    break;
                default:
                    break
            }
        },

        _headerRendered: function (c, b) {
            var d = this, e;
            if (b.owner.id() !== this.grid.element[0].id) {
                return
            }
            if (b.owner.element.attr("data-childgrid")) {
                return
            }
            if (this.options.groupByAreaVisibility === "top") {
                e = a("<div></div>").prependTo(this.grid.container())
            } else {
                if (this.options.groupByAreaVisibility === "bottom") {
                    e = a("<div></div>").appendTo(b.owner.container())
                } else {
                    if (this.options.groupByAreaVisibility === "hidden") {
                        return
                    }
                }
            }
            e.attr("id", this.grid.element.attr("id") + "_groupbyarea").addClass(this.css.groupByArea);
            this._setGroupAreaTextContent(a("<span></span>").appendTo(e).addClass(this.css.groupByAreaText));
            e.droppable({
                accept: "th",
                hoverClass: d.css.groupByAreaDropHover,
                drop: function (g, i) {
                    var f, h;
                    h = i.draggable.closest(".ui-iggrid-root").attr("id") === d.grid.element[0].id || i.draggable.closest(".ui-iggrid").find(".ui-iggrid-root").length > 0;
                    if (!d.grid.element.hasClass("ui-iggrid-root")) {
                        h = true
                    }
                    f = i.draggable.hasClass("ui-iggrid-header") && h;
                    if (f) {
                        d._groupBy(g, i.draggable)
                    }
                }
            });
            if (this.grid._isMultiColumnGrid) {
                e.droppable("option", "tolerance", "touch")
            }
            this._renderGroupByDialog()
        },

        _renderGroupByDialog: function () {
            var b, f = this, e = this.options, c, d = a("<div></div>").appendTo("body").attr("id", this.grid.element[0].id + "_groupby_modalDialog");
            d.igGridModalDialog({
                renderFooterButtons: !e.modalDialogGroupByOnClick,
                modalDialogCaptionText: e.modalDialogCaptionText,
                modalDialogWidth: e.modalDialogWidth,
                modalDialogHeight: e.modalDialogHeight,
                animationDuration: e.modalDialogAnimationDuration,
                buttonApplyText: e.modalDialogButtonApplyText,
                buttonCancelText: e.modalDialogButtonCancelText,
                gridContainer: this.grid.container(),
                modalDialogOpening: function (h, g) {
                    f._groupByDialogOpening(h, g)
                },
                modalDialogMoving: function (g, h) {
                    f._trigger(f.events.modalDialogMoving, null, {
                        modalDialogElement: g.target,
                        owner: f,
                        originalPosition: h.originalPosition,
                        position: h.position
                    })
                },
                modalDialogClosing: function (h, g) {
                    return f._trigger(f.events.modalDialogClosing, null, {
                        modalDialogElement: d,
                        owner: f
                    })
                },
                modalDialogClosed: function (h, g) {
                    f._trigger(f.events.modalDialogClosed, null, {
                        modalDialogElement: d,
                        owner: f
                    })
                }
            });
            if (e.modalDialogGroupByOnClick) {
                c = d.igGridModalDialog("getCaptionButtonContainer");
                a("<span></span>").bind("click.hiding",function (g) {
                    d.igGridModalDialog("closeModalDialog", true);
                    g.preventDefault();
                    g.stopPropagation();
                    return false
                }).addClass("ui-icon ui-icon-closethick").appendTo(a("<a></a>").appendTo(c).attr("title", a.ig.GridHiding.locale.columnChooserCloseButtonTooltip).attr("href", "#").attr("role", "button").addClass("ui-dialog-titlebar-close ui-corner-all"))
            } else {
                c = d.igGridModalDialog("getCaptionButtonContainer");
                b = a("#" + this.grid.element[0].id + "_groupby_modalDialog_footer_buttonok");
                b.bind("igbuttonclick", function (g) {
                    f._groupByDialogButtonOKClick(g)
                })
            }
        },

        openGroupByDialog: function () {
            var b = a("#" + this.grid.element[0].id + "_groupby_modalDialog");
            b.igGridModalDialog("openModalDialog")
        },

        closeGroupByDialog: function () {
            var b = a("#" + this.grid.element[0].id + "_groupby_modalDialog");
            b.igGridModalDialog("closeModalDialog")
        },

        _groupByDialogOpening: function () {
            var c, b = a("#" + this.grid.element[0].id + "_groupby_modalDialog");
            c = this._trigger(this.events.modalDialogOpening, null, {
                modalDialogElement: b,
                owner: this
            });
            if (c) {
                this.renderGroupByModalDialog();
                this._trigger(this.events.modalDialogOpened, null, {
                    modalDialogElement: b,
                    owner: this
                })
            }
        },

        renderGroupByModalDialog: function () {
            var b, f, k = this, j = this.options, e = this.css, g = a("#" + this.grid.element[0].id + "_groupby_modalDialog"), h, c, d;
            h = this._trigger(this.events.modalDialogContentsRendering, null, {
                modalDialogElement: g,
                owner: this
            });
            if (h) {
                b = g.igGridModalDialog("getContent");
                b.empty();
                k._tempGroupedColumns = j.groupedColumns.slice(0);
                k._tempOrderedGroupedCols = k._orderedGroupedCols.slice(0);
                k._tempSortingExpr = k.grid.dataSource.settings.sorting.expressions.slice(0);
                k._tempOptions = {
                    columnLayouts: []
                };
                if (this.grid.options.columnLayouts && this.grid.options.columnLayouts.length > 0) {
                    for (f = 0; f < this.grid.options.columnLayouts.length; f++) {
                        k._tempOptions.columnLayouts.push(a.extend(true, {}, this.grid.options.columnLayouts[f]))
                    }
                    this._renderLayoutsDropDown()
                }
                c = a("<div></div>").attr("id", this.grid.element[0].id + "_groupby_modalDialog_groupedcolumns").addClass(e.dialogGroupedColumns).appendTo(b);
                d = a("<div></div>").attr("id", this.grid.element[0].id + "_groupby_modalDialog_ungroupedcolumns").addClass(e.dialogUnroupedColumns).appendTo(b);
                a("<ul></ul>").addClass(e.dialogListGroupedColumns).appendTo(c);
                a("<ul></ul>").addClass(e.dialogListUngroupedColumns).appendTo(d);
                this._renderColumnsDialog(this.grid.options.columns);
                this._currentTreeLayer = null;
                if (this._isToRenderClearAllButton()) {
                    this._renderDialogButtonClearAll()
                } else {
                    a("#" + this.grid.element[0].id + "_groupbydialog_reset_button").remove()
                }
                this._trigger(this.events.modalDialogContentsRendered, null, {
                    modalDialogElement: g,
                    owner: this
                })
            }
        },

        _addSlideButtonGroupedColumns: function () {
            var e = this.css, g = this.options, c = a("#" + this.grid.element[0].id + "_groupby_modalDialog_groupedcolumns"), d = this.grid.element[0].id + "_groupbymodaldialot_slidebutton", b, f;
            f = '<div class="' + e.dialogSlideArea + '">	<div class="' + e.dialogSlideAreaContainer + '">		<button id="' + d + '" class="' + e.dialogButtonSlide + '" role="button" aria-disabled="false" title="' + g.dialogButtonSlideCaption + '">			<span class="' + e.dialogButtonSlideContainer + '"></span>			<span class="ui-button-text">' + g.dialogButtonSlideCaption + "</span>		</button>	</div></div>";
            a(f).insertAfter(c);
            b = a("#" + d);
            b.bind({
                click: function (i, h) {
                    c.slideToggle("slow");
                    a(this).find("span:eq(0)").toggleClass(e.dialogButtonSlideUp);
                    return false
                }
            })
        },

        _renderLayoutsDropDown: function () {
            var p = this.options, k, q = this, i = this.css, m = a("#" + this.grid.element[0].id + "_groupby_modalDialog"), c = m.igGridModalDialog("getContent"), g, l, b, d, f, j = this.grid.element[0].id + "_groupby_modalDialog_layoutsDD", n = p.modalDialogDropDownAreaWidth || p.modalDialogDropDownWidth, h = this.grid.options.columnLayouts.slice(0), e;
            e = a("<div></div>").attr("id", this.grid.element[0].id + "_groupby_modalDialog_layoutsContainer").addClass(i.modalDialogLayoutsContainer).appendTo(c);
            l = '<div style="float: left;">' + p.modalDialogDropDownLabel + '</div><div class="' + i.dialogLayoutsDD + '">	<div id="' + this.grid.element[0].id + '_groupby_modalDialog_layoutsDDField" class="' + i.dialogLayoutsDDField + '">' + p.modalDialogRootLevelHierarchicalGrid + '</div>	<span id="' + this.grid.element[0].id + '_groupby_modalDialog_layoutsDDButton" style="float:right;">^</span>	<div style="clear: both;"></div></div><div style="clear: both;"></div>';
            e.html(l);
            b = a("#" + this.grid.element[0].id + "_groupby_modalDialog_layoutsDDButton");
            b.wrap('<a href="#" title="' + p.modalDialogDropDownButtonCaption + ' "></a>');
            g = function (o) {
                o.preventDefault();
                o.stopPropagation()
            };
            b.closest("div").bind({
                mousedown: function (o) {
                    q._toggleDropDown(o, false)
                },
                mouseup: g,
                click: g
            });
            b.addClass(i.dialogLayoutsDDButton);
            if (this._checkIsGroupByInherit(this.grid.options) === false) {
                h = this._getEnabledGroupByLayouts(h)
            }
            if (h.length > 0 || this._checkIsGroupByEnabled(this.grid.options)) {
                d = a("#" + j);
                d.remove();
                d = a("<div></div>");
                d.attr("id", j).css({
                    position: "absolute",
                    display: "none",
                    "z-index": "1000"
                }).addClass(this.css.dropDownLayoutsContainer).appendTo(a("#" + this.grid.element[0].id + "_groupby_modalDialog_content")).bind({
                        click: function (r, o) {
                            clearTimeout(q._dropDownTimeout);
                            setTimeout(function () {
                                b.closest("a").focus()
                            }, 10)
                        }
                    });
                if (p.modalDialogDropDownWidth) {
                    b.closest("div").width(p.modalDialogDropDownWidth)
                }
                if (n) {
                    d.width(n)
                }
                f = a("<div></div>").attr("id", this.grid.element[0].id + "_groupby_modal_treeLayouts").addClass(i.modalDialogTreeContainer);
                f.appendTo(d);
                h = [
                    {
                        key: "root",
                        columnLayouts: h,
                        isRoot: true
                    }
                ];
                f.igTree({
                    dataSourceType: "json",
                    dataSource: h,
                    initialExpandDepth: 1000000,
                    bindings: {
                        textKey: "key",
                        childDataProperty: "columnLayouts"
                    },
                    nodeClick: function (u, s) {
                        var t = s.node.data, v = t.key, o = a("#" + q.grid.element[0].id + "_groupby_modalDialog_groupedcolumns ul"), r = a("#" + q.grid.element[0].id + "_groupby_modalDialog_ungroupedcolumns ul");
                        if (t.dislabledGroupBy === true) {
                            return
                        }
                        o.empty();
                        r.empty();
                        a("#" + q.grid.element[0].id + "_groupby_modalDialog_layoutsDDField").text(v);
                        if (s.node.path.length === 1) {
                            q._renderColumnsDialog(q.grid.options.columns);
                            q._currentTreeLayer = null
                        } else {
                            q._currentTreeLayer = v;
                            q._renderColumnsDialog(t.columns, v)
                        }
                        q._toggleDropDown()
                    }
                });
                k = function () {
                    q._dropDownTimeout = setTimeout(function () {
                        q.closeDropDown()
                    }, 200)
                };
                b.closest("a").bind({
                    focus: function () {
                        q._igTreeHasFocus = true;
                        clearTimeout(q._dropDownTimeout)
                    },
                    blur: function () {
                        q._igTreeHasFocus = false;
                        k()
                    }
                });
                f.find("a").bind({
                    focus: function () {
                        clearTimeout(q._dropDownTimeout)
                    },
                    blur: function () {
                        k()
                    }
                });
                f.find("span.ui-igtree-expander.ui-icon").bind({
                    click: function () {
                        clearTimeout(q._dropDownTimeout);
                        setTimeout(function () {
                            b.closest("a").focus()
                        }, 10)
                    }
                })
            }
        },

        openDropDown: function () {
            var b = a("#" + this.grid.element[0].id + "_groupby_modalDialog_layoutsDD");
            if (b.is(":visible") === false) {
                this._toggleDropDown()
            }
        },

        closeDropDown: function () {
            var b = a("#" + this.grid.element[0].id + "_groupby_modalDialog_layoutsDD");
            if (b.is(":visible") === true) {
                this._toggleDropDown()
            }
        },

        _getEnabledGroupByLayouts: function (d) {
            var e = [], b, f, c;
            if (d) {
                for (b = 0; b < d.length; b++) {
                    f = null;
                    c = a.extend(true, {}, d[b]);
                    if (c.columnLayouts && this._checkIsGroupByInherit(c) === false) {
                        f = this._getEnabledGroupByLayouts(c.columnLayouts);
                        if (f && f.length > 0) {
                            c.columnLayouts = f
                        } else {
                            c.columnLayouts = null
                        }
                    }
                    if (this._checkIsGroupByEnabled(c)) {
                        e.push(c)
                    } else {
                        if (c.columnLayouts !== null && c.columnLayouts !== undefined) {
                            c.dislabledGroupBy = true;
                            e.push(c)
                        }
                    }
                }
            }
            return e
        },

        _checkIsGroupByInherit: function (c) {
            var b;
            if (c && c.features) {
                for (b = 0; b < c.features.length; b++) {
                    if (c.features[b].name === "GroupBy" && c.features[b].inherit === true) {
                        return true
                    }
                }
            }
            return false
        },

        _checkIsGroupByEnabled: function (c) {
            var b;
            if (c && c.features) {
                for (b = 0; b < c.features.length; b++) {
                    if (c.features[b].name === "GroupBy") {
                        return true
                    }
                }
            }
            return false
        },

        _toggleDropDown: function () {
            var b = a("#" + this.grid.element[0].id + "_groupby_modalDialog_layoutsDDButton").parent(), e = a("#" + this.grid.element[0].id + "_groupby_modalDialog_content"), d = a("#" + this.grid.element[0].id + "_groupby_modalDialog_layoutsDDField").parent(), g = 0, i = 0, c = a("#" + this.grid.element[0].id + "_groupby_modalDialog_layoutsDD"), f = (c.is(":visible") === true), h = this;
            if (c.data("isAnimating") === true) {
                return
            }
            if (!f) {
                i = d.offset().top - e.offset().top + d.height() + 1;
                g = d.offset().left - e.offset().left;
                c.css({
                    top: i,
                    left: g
                })
            }
            c.data("isAnimating", true);
            c.slideToggle(400, function () {
                var j = a("#" + h.grid.element[0].id + "_groupby_modalDialog_layoutsDD"), k = a("#" + h.grid.element[0].id + "_groupby_modal_treeLayouts");
                if (c.is(":visible") === true) {
                    b.focus();
                    h._activeDropdown = c;
                    if (!h.options.modalDialogDropDownAreaWidth && !h.options.modalDialogDropDownWidth) {
                        if (j.width() !== k.width()) {
                            j.width(k.width())
                        }
                    }
                } else {
                    h._activeDropdown = null
                }
                c.data("isAnimating", false)
            })
        },

        _groupByDialogButtonOKClick: function (c, b) {
            var l, m = this.options, k = a("#" + this.grid.element[0].id + "_groupby_modalDialog"), d, g, h, n, f = false;
            l = this._trigger(this.events.modalDialogButtonApplyClick, null, {
                modalDialogElement: k,
                owner: this,
                groupedColumns: this._tempGroupedColumns,
                groupedColumnLayouts: this._tempOptions.columnLayouts,
                sortingExpr: this._tempSortingExpr
            });
            if (l) {
                if (this._orderedGroupedCols.length !== this._tempOrderedGroupedCols.length) {
                    f = true
                } else {
                    h = this._orderedGroupedCols.length;
                    for (d = 0; d < h; d++) {
                        n = this._tempOrderedGroupedCols[d];
                        for (g = 0; g < h; g++) {
                            if (n.key === this._orderedGroupedCols[g].key && n.layout === this._orderedGroupedCols[g].layout) {
                                break
                            }
                        }
                        if (g === h) {
                            f = true;
                            break
                        }
                    }
                }
                if (f === true) {
                    this._trigger(this.events.groupedColumnsChanged, c, {
                        owner: this,
                        groupedColumns: this._tempGroupedColumns
                    })
                }
                this._orderedGroupedCols = this._tempOrderedGroupedCols;
                if (m.groupedColumns) {
                    m.groupedColumns = this._tempGroupedColumns
                }
                if (this.grid.options.columnLayouts) {
                    this.grid.options.columnLayouts = this._tempOptions.columnLayouts
                }
                if (this.grid.dataSource.settings.sorting.expressions) {
                    this.grid.dataSource.settings.sorting.expressions = this._tempSortingExpr
                }
                if (this._isToRenderClearAllButton() === false) {
                    if (a(".ui-iggrid-groupbyarea", this.grid.container()).find("ul li").length === 0) {
                        this._isgroup = null
                    } else {
                        this._isgroup = false
                    }
                } else {
                    this._isgroup = true
                }
                if (m.groupedColumns.length === 0 && this.grid.headersTable().find("thead tr").children().first().hasClass("ui-iggrid-expandheadercellgb")) {
                    this.grid.element.find("colgroup").children().first().remove();
                    if (this.grid.options.fixedHeaders) {
                        this.grid.headersTable().find("colgroup").children().first().remove()
                    }
                    if (this.grid.options.fixedFooters && this.grid.options.height !== null) {
                        this.grid.footersTable().find("colgroup").children().first().remove()
                    }
                    this.grid.headersTable().find("thead tr").children().first().remove()
                }
                this._rebind();
                if (this.grid.options.width !== null && this.grid.options.width !== undefined) {
                    this.grid._updateGridContentWidth()
                }
                this.grid._trigger("headerExtraCellsModified", null, {
                    owner: this
                });
                c.preventDefault();
                c.stopPropagation();
                k.igGridModalDialog("closeModalDialog")
            }
        },

        _setSortingTempExpr: function (g, b, h) {
            var e, k, f, c = this._tempGroupedColumns, d, o, m = this._tempSortingExpr, n, l;
            o = {
                fieldName: g,
                dir: b,
                layout: h,
                isGroupBy: true
            };
            if (b === "") {
                for (f = 0; f < m.length; f++) {
                    if (m[f].fieldName === g && m[f].layout === h) {
                        m.splice(f, 1);
                        break
                    }
                }
                return
            }
            if (c.length === 0 && !h) {
                d = this._tempGroupedColumns.slice(0);
                this._allGroupedCols(d);
                c = d.slice(0)
            }
            for (e = 0; e < c.length; e++) {
                if (c[e].key === g) {
                    c[e].dir = b;
                    for (f = 0; f < m.length; f++) {
                        if (m[f].fieldName === g) {
                            m[f].dir = c[e].dir;
                            if (c[e].layout) {
                                m[f].layout = c[e].layout
                            }
                            break
                        }
                    }
                    if (f === m.length) {
                        this._addSortingExpressions(m, o)
                    }
                    break
                }
            }
            if (h) {
                for (e = 0; e < this._tempOrderedGroupedCols.length; e++) {
                    if (this._tempOrderedGroupedCols[e].key === g && ((this._tempOrderedGroupedCols.layout && this._tempOrderedGroupedCols.layout === h) || !this._tempOrderedGroupedCols.layout)) {
                        this._tempOrderedGroupedCols[e].dir = b;
                        break
                    }
                }
                for (f = 0; f < m.length; f++) {
                    if (m[f].fieldName === g && m[f].layout === h) {
                        m[f].dir = b;
                        break
                    }
                }
                if (f === m.length) {
                    this._addSortingExpressions(m, o)
                }
                k = [];
                this._findLayout(h, this._tempOptions, k);
                l = k[0];
                for (e = 0; l.features && e < l.features.length; e++) {
                    if (l.features[e].name === "GroupBy") {
                        n = l.features[e].columnSettings;
                        for (f = 0; f < n.length; f++) {
                            if (n[f].columnKey === g) {
                                n[f].dir = b;
                                break
                            }
                        }
                        break
                    }
                }
            }
        },

        _setGroupByTempExpr: function (k, j, d, l) {
            var h, g, e, n, b, f, o, m;
            if (l) {
                m = [];
                this._findLayout(l, this._tempOptions, m);
                n = m[0];
                b = this._getColumnByLayoutKey(k, n.columns)
            } else {
                n = this.grid.options;
                b = this.grid.columnByKey(k)
            }
            if (l) {
                if (!n.features) {
                    n.features = [];
                    n.features.push({
                        name: "GroupBy",
                        columnSettings: []
                    });
                    f = n.features[0].columnSettings
                } else {
                    for (h = 0; h < n.features.length; h++) {
                        if (n.features[h].name === "GroupBy") {
                            f = n.features[h].columnSettings;
                            if (!f) {
                                n.features[h].columnSettings = [];
                                f = n.features[h].columnSettings
                            }
                            break
                        }
                    }
                }
                for (h = 0; h < f.length; h++) {
                    if (f[h].columnKey === k) {
                        if (!j) {
                            f.splice(h, 1)
                        } else {
                            o = f[h]
                        }
                        break
                    }
                }
                if (j) {
                    if (!o) {
                        f.push({
                            columnKey: k,
                            isGroupBy: j,
                            dir: d
                        })
                    } else {
                        o.isGroupBy = j;
                        o.dir = d
                    }
                }
            }
            g = {
                key: k,
                dir: d,
                layout: l,
                col: b
            };
            if (!l) {
                e = this._tempGroupedColumns;
                for (h = 0; h < e.length; h++) {
                    if (e[h].key === k) {
                        e.splice(h, 1);
                        break
                    }
                }
                if (j) {
                    e = e.concat(g)
                }
                this._tempGroupedColumns = e
            }
            if (j) {
                this._tempOrderedGroupedCols.push(g)
            } else {
                for (h = 0; h < this._tempOrderedGroupedCols.length; h++) {
                    if (this._tempOrderedGroupedCols[h].key === k && ((this._tempOrderedGroupedCols.layout && this._tempOrderedGroupedCols.layout === l) || !this._tempOrderedGroupedCols.layout)) {
                        a.ig.removeFromArray(this._tempOrderedGroupedCols, h);
                        break
                    }
                }
            }
            this._setSortingTempExpr(k, d, l)
        },

        checkColumnIsGrouped: function (f, g) {
            var d = false, c, e, h, k, b;
            if (!g) {
                for (c = 0; c < this._tempGroupedColumns.length; c++) {
                    if (this._tempGroupedColumns[c].key === f) {
                        d = true;
                        break
                    }
                }
            } else {
                h = [];
                this._findLayout(g, this._tempOptions, h);
                k = h[0];
                if (k && k.features) {
                    for (c = 0; c < k.features.length; c++) {
                        if (k.features[c].name === "GroupBy") {
                            b = k.features[c].columnSettings;
                            if (b) {
                                for (e = 0; e < b.length; e++) {
                                    if (b[e].columnKey === f) {
                                        if (b[e].isGroupBy) {
                                            d = true
                                        }
                                        break
                                    }
                                }
                            }
                            break
                        }
                    }
                }
            }
            return d
        },

        _getAllColumns: function (b, d) {
            var e, c = b.length;
            for (e = 0; e < c; e++) {
                if (b[e].group) {
                    this._getAllColumns(b[e].group, d)
                } else {
                    d.push(b[e])
                }
            }
        },

        _renderColumnsDialog: function (b, d) {
            var e = this, c = [];
            if (this.grid._isMultiColumnGrid) {
                this._getAllColumns(b, c)
            } else {
                c = b
            }
            a.each(c, function (g, f) {
                var h = e._findColumnSetting(f.key);
                if (f.unbound === true || (f.unboundDS === true && e.options.type === "remote")) {
                    return true
                }
                if (!h || h.allowGrouping) {
                    if (e.checkColumnIsGrouped(f.key, d) === true) {
                        e._renderDialogGroupedColumn(f, d)
                    } else {
                        e._renderDialogUngroupedColumn(f, d)
                    }
                }
            })
        },

        _clearAllGroupedColumns: function () {
            this._tempGroupedColumns = [];
            this._clearAllGroupedColumnsLayout(this._tempOptions)
        },

        _clearAllGroupedColumnsLayout: function (d) {
            var c, b;
            if (d !== null && d.features) {
                for (c = 0; c < d.features.length; c++) {
                    if (d.features[c].name === "GroupBy") {
                        b = d.features[c].columnSettings;
                        if (b) {
                            d.features[c].columnSettings = []
                        }
                    }
                }
            }
            for (c = 0; d.columnLayouts && c < d.columnLayouts.length; c++) {
                this._clearAllGroupedColumnsLayout(d.columnLayouts[c])
            }
        },

        _isToRenderClearAllButton: function () {
            if (this.options.modalDialogGroupByOnClick === true) {
                return true
            }
            if (this._tempGroupedColumns.length > 0) {
                return true
            }
            if (this._checkRenderLayoutsClearAll(this.grid.options) === true) {
                return true
            }
            return false
        },

        _checkRenderLayoutsClearAll: function (e) {
            var c, d, b;
            if (e !== null && e.features) {
                for (c = 0; c < e.features.length; c++) {
                    if (e.features[c].name === "GroupBy") {
                        b = e.features[c].columnSettings;
                        if (b) {
                            for (d = 0; d < b.length; d++) {
                                if (b[d].isGroupBy) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
            for (c = 0; e.columnLayouts && c < e.columnLayouts.length; c++) {
                if (this._checkRenderLayoutsClearAll(e.columnLayouts[c]) === true) {
                    return true
                }
            }
            return false
        },

        _renderDialogGroupedColumn: function (h, r) {
            var n, p, v, d, t, b, c, u = this.options, w = this, k = this.css, q = h.key, e = a("#" + this.grid.element[0].id + "_groupby_modalDialog_groupedcolumns ul"), f = this.grid.element[0].id + "_" + q + "_groupbydialog_groupedcolumns_buttonascdesc", g = this.grid.element[0].id + "_" + q + "_groupbydialog_groupedcolumns_buttonungroup", l = "asc", m = null;
            if (!r) {
                for (n = 0; n < w._tempGroupedColumns.length; n++) {
                    if (w._tempGroupedColumns[n].key === q) {
                        m = w._tempGroupedColumns[n];
                        l = m.dir;
                        break
                    }
                }
            } else {
                v = w._tempSortingExpr;
                for (p = 0; p < v.length; p++) {
                    if (v[p].fieldName === q && v[p].layout === r) {
                        l = v[p].dir;
                        break
                    }
                }
            }
            d = a("<li></li>").attr("id", w.grid.element[0].id + "_" + q + "_groupbydialog_grouped_li").addClass(k.dialogGroupedItem);
            d.appendTo(e);
            t = '<span id="' + f + '" class="' + k.dialogButtonAsc + '" role="button" title="' + u.modalDialogCaptionButtonAsc + '">	<span class="' + k.dialogButtonAscIcon + '"></span></span><span class="' + k.dialogGroupedColumnTextContainer + '">' + h.headerText + '</span><button id="' + g + '" class="' + k.dialogButtonUngroup + '" role="button" title="' + u.modalDialogCaptionButtonUngroup + '" >	<span class="' + k.dialogButtonUngroupContainer + '"></span>	<span class="ui-button-text">' + u.modalDialogCaptionButtonUngroup + "</span></button>";
            d.html(t);
            b = a("#" + f);
            c = a("#" + g);
            w._setDialogButtonAscDesc((l === "asc"), q);
            d.bind({
                click: function (j, i) {
                    w._dialogButtonAscDescClick(q, r)
                }
            });
            c.bind({
                click: function (j, i) {
                    var o;
                    o = w._trigger(w.events.modalDialogUngroupingColumn, j, {
                        key: q,
                        layout: r,
                        owner: w
                    });
                    if (o) {
                        d.remove();
                        if (u.modalDialogGroupByOnClick === true) {
                            w.ungroupByColumn(q, r)
                        } else {
                            w._setGroupByTempExpr(q, false, "", r)
                        }
                        w._renderDialogUngroupedColumn(h, r);
                        if (a("#" + w.grid.element[0].id + "_groupby_modalDialog_groupedcolumns ul li").length === 0 && w._isToRenderClearAllButton() === false) {
                            a("#" + w.grid.element[0].id + "_groupbydialog_reset_button").remove()
                        }
                        w._trigger(w.events.modalDialogUngroupColumn, j, {
                            key: q,
                            layout: r,
                            owner: w,
                            groupedColumns: w._tempGroupedColumns
                        })
                    }
                    j.preventDefault();
                    j.stopPropagation()
                },
                mouseover: function (j, i) {
                    if (!a(this).hasClass(k.dialogButtonsHover)) {
                        a(this).addClass(k.dialogButtonsHover)
                    }
                },
                mouseout: function (j, i) {
                    if (a(this).hasClass(k.dialogButtonsHover)) {
                        a(this).removeClass(k.dialogButtonsHover)
                    }
                }
            })
        },

        _dialogButtonAscDescClick: function (d, e) {
            var h = this.options, b = a("#" + this.grid.element[0].id + "_" + d + "_groupbydialog_groupedcolumns_buttonascdesc"), g, f = a("#" + this.grid.element[0].id + "_groupby_modalDialog"), c = b.data("isAsc");
            g = this._trigger(this.events.modalDialogSortGroupedColumn, null, {
                modalDialogElement: f,
                owner: this,
                key: d,
                isAsc: !c,
                layout: e
            });
            if (g) {
                if (c === true) {
                    if (h.modalDialogGroupByOnClick === true) {
                        this._setSortingTempExpr(d, "desc", e);
                        this.grid.dataSource.settings.sorting.expressions = this._tempSortingExpr;
                        this._rebind()
                    } else {
                        this._setSortingTempExpr(d, "desc", e)
                    }
                } else {
                    if (h.modalDialogGroupByOnClick === true) {
                        this._setSortingTempExpr(d, "asc", e);
                        this.grid.dataSource.settings.sorting.expressions = this._tempSortingExpr;
                        this._rebind()
                    } else {
                        this._setSortingTempExpr(d, "asc", e)
                    }
                }
                this._setDialogButtonAscDesc(!c, d)
            }
        },

        _setDialogButtonAscDesc: function (f, g) {
            var e = this.css, b = a("#" + this.grid.element[0].id + "_" + g + "_groupbydialog_groupedcolumns_buttonascdesc"), c = b.find("span:eq(0)"), d;
            if (f === true) {
                b.removeClass(e.dialogButtonDesc).addClass(e.dialogButtonAsc);
                c.removeClass(e.dialogButtonDescIcon).addClass(e.dialogButtonAscIcon);
                d = this.options.modalDialogCaptionButtonAsc
            } else {
                b.removeClass(e.dialogButtonAsc).addClass(e.dialogButtonDesc);
                c.removeClass(e.dialogButtonAscIcon).addClass(e.dialogButtonDescIcon);
                d = this.options.modalDialogCaptionButtonDesc
            }
            b.data("isAsc", f).attr("title", d)
        },

        _renderDialogButtonClearAll: function () {
            if (this.options.modalDialogGroupByOnClick === true) {
                return
            }
            var g = this, e = this.options, f = g.grid.element[0].id + "_groupbydialog_reset_button", d = a("#" + this.grid.element[0].id + "_groupby_modalDialog"), b, c;
            if (a("#" + f).length === 0) {
                b = d.igGridModalDialog("getCaptionButtonContainer");
                c = a("<button></button>").attr("id", f).appendTo(b);
                c.igButton({
                    labelText: e.modalDialogClearAllButtonLabel,
                    click: function (j) {
                        var l, h, i, k = [];
                        l = g._trigger(g.events.modalDialogButtonResetClick, j, {
                            modalDialogElement: d,
                            owner: g
                        });
                        if (l) {
                            g._clearAllGroupedColumns();
                            g._tempSortingExpr = g.grid.dataSource.settings.sorting.expressions.slice(0);
                            h = a("#" + g.grid.element[0].id + "_groupby_modalDialog_groupedcolumns ul");
                            i = a("#" + g.grid.element[0].id + "_groupby_modalDialog_ungroupedcolumns ul");
                            h.empty();
                            i.empty();
                            g._tempSortingExpr = [];
                            g._tempOrderedGroupedCols = [];
                            if (!g._currentTreeLayer) {
                                g._renderColumnsDialog(g.grid.options.columns)
                            } else {
                                g._findLayout(g._currentTreeLayer, g._tempOptions, k);
                                if (k.length > 0) {
                                    g._renderColumnsDialog(k[0].columns, g._currentTreeLayer)
                                }
                            }
                            a(this).remove()
                        }
                    }
                })
            }
        },

        _renderDialogUngroupedColumn: function (e, h) {
            var j = this, c, b, g = e.key, i = this.options, f = this.css, d = a("#" + this.grid.element[0].id + "_groupby_modalDialog_ungroupedcolumns ul");
            c = a("<li></li>").attr("id", j.grid.element[0].id + "_" + g + "_groupbydialog_grouped_li").addClass(f.dialogUngroupedItem).append('<span class="' + f.dialogUngroupedColumnsGroupByButton + '"><a href="#"></a></span> <span class="' + f.dialogUngroupedColumnsText + '">' + e.headerText + "</span>");
            c.appendTo(d);
            b = c.find("a:first");
            b.addClass(f.modalDialogSortByColumn);
            b.html(i.modalDialogGroupByButtonText);
            c.bind({
                click: function (l, k) {
                    var m;
                    m = j._trigger(j.events.modalDialogGroupingColumn, l, {
                        key: g,
                        layout: h,
                        owner: j
                    });
                    if (m) {
                        c.remove();
                        if (i.modalDialogGroupByOnClick) {
                            j.groupByColumn(g, h)
                        } else {
                            j._setGroupByTempExpr(g, true, "asc", h)
                        }
                        j._renderDialogButtonClearAll();
                        j._renderDialogGroupedColumn(e, h);
                        j._renderDialogButtonClearAll();
                        j._trigger(j.events.modalDialogGroupColumn, l, {
                            key: g,
                            layout: h,
                            owner: j,
                            groupedColumns: j._tempGroupedColumns
                        })
                    }
                    l.preventDefault();
                    l.stopPropagation()
                }
            })
        },

        _setGroupAreaTextContent: function (c) {
            var g = this.options.emptyGroupByAreaContent, d = this.options.emptyGroupByAreaContentSelectColumns, e = this.options.emptyGroupByAreaContentSelectColumnsCaption, b, f = this;
            g = g.replace("{0}", '<a href="#" id="' + this.grid.element[0].id + '_link_selectcolumns" title="' + e + '">' + d + "</a>");
            c.html(g);
            b = a("#" + this.grid.element[0].id + "_link_selectcolumns");
            b.bind({
                click: function (i, h) {
                    f.openGroupByDialog();
                    i.preventDefault();
                    i.stopPropagation()
                }
            })
        },

        _headerCellDragCancel: function (c, b) {
            return false
        },

        _headerCellRendered: function (d, b) {
            var e = this, c, f, g, h = this.grid._isMultiColumnGrid;
            if (b.owner.id() !== this.grid.element[0].id) {
                return
            }
            if (b.isMultiColumnHeader === true) {
                return
            }
            f = e.grid.element.hasClass("ui-iggrid-root") ? e.grid.container() : e.grid.element.closest(".ui-iggrid-root");
            if (f.length === 0) {
                f = e.grid.container()
            } else {
                g = f.closest(".ui-widget");
                if (g.length > 0) {
                    f = g
                }
            }
            c = this._findColumnSetting(b.columnKey);
            b.th.find(".ui-iggrid-headertext").css("width", "100%");
            if ((c && c.allowGrouping) || !c) {
                b.th.draggable({
                    containment: f,
                    appendTo: f,
                    distance: 5,
                    revert: "invalid",
                    cancel: "div.ui-iggrid-indicatorcontainer",
                    helper: function (i) {
                        var k, j;
                        if (a(i.target).is("span")) {
                            e._spanDragging = true
                        } else {
                            e._spanDragging = false
                        }
                        k = a(i.target).closest("th");
                        j = k.clone().css("overflow", "hidden").width(k.width()).addClass("ui-widget ui-iggrid").wrap(a('<div class="' + e.css.dragMarkup + '"/>').width(k.width()));
                        if (h) {
                            j.height(k.height())
                        }
                        return j.parent()
                    },
                    opacity: e.options.labelDragHelperOpacity,
                    drag: function (i, k) {
                        var j;
                        e._isDragging = true;
                        j = a(".ui-iggrid-groupbyarea", f);
                        if (!j.hasClass("ui-iggrid-groupbyareahover")) {
                            if (e._spanDragging) {
                                k.helper.find("span").css("cursor", "no-drop")
                            } else {
                                k.helper.css("cursor", "no-drop")
                            }
                        } else {
                            if (e._spanDragging) {
                                k.helper.find("span").css("cursor", "move")
                            } else {
                                k.helper.css("cursor", "move")
                            }
                        }
                    },
                    stop: function (i, j) {
                        e._isDragging = false
                    }
                }).bind({
                        mouseover: e._headerMouseOverHandler,
                        mouseout: e._headerMouseOutHandler
                    });
                if (b.owner.element.attr("data-childgrid")) {
                    b.th.attr("data-layout", b.owner.options.key).attr("data-grid-id", b.owner.element.attr("id"))
                }
            }
        },

        _findColumnSetting: function (c) {
            var b;
            for (b = 0; b < this.options.columnSettings.length; b++) {
                if (this.options.columnSettings[b].columnKey === c) {
                    return this.options.columnSettings[b]
                }
            }
        },

        _renderRecords: function (c, b) {
            if (b.owner.id() !== this.grid.element[0].id) {
                return
            }
            if (this.options.groupedColumns.length > 0) {
                this._renderRecordsInternal()
            } else {
                return true
            }
            return false
        },

        _recordsRendered: function (d, b) {
            var c = a(window).scrollTop();
            if (!b.tbody.is(":visible")) {
                b.tbody.css("display", "")
            }
            if (this._scrolltop !== 0 && c !== 0 && this._scrolltop !== c) {
                a(window).scrollTop(this._scrolltop)
            }
        },

        _renderRecordsInternal: function () {
            var h = this.grid, l = null, e = h.dataSource.dataView(), g = true, c = [], m = h.element.children("tbody"), f = false, j, k, n, b;
            this._indent = this.options.indentation;
            if (this.grid.options.fixedHeaders === true) {
                f = true
            }
            if (this.grid._isMultiColumnGrid) {
                this._colspan = a("#" + this.grid.id() + " colgroup:first>col").length - 1
            } else {
                if (this.grid.options.showHeader) {
                    this._colspan = a("#" + this.grid.id() + (f === true ? "_headers" : "") + " thead>tr:first").children("th:not(.ui-iggrid-expandheadercellgb)").length
                } else {
                    this._colspan = a("#" + this.grid.id() + " colgroup:first>col").length - 1
                }
            }
            this._processGroupsRecursive(0, e, m, c, l, 0, e.length, g);
            if (!h.headersTable().find("thead tr th").hasClass("ui-iggrid-expandheadercellgb")) {
                b = a("<th></th>").prependTo(h.headersTable().find("thead tr:nth-child(1)")).addClass(this.css.expandHeaderCellGroupBy).attr("data-skip", true);
                if (h._isMultiColumnGrid) {
                    b.attr("rowspan", h._maxLevel + 1)
                }
                if (h.headersTable().attr("id") !== h.element.attr("id")) {
                    a("<col data-skip='true' />").prependTo(h.headersTable().find("colgroup")).width(this._indent)
                }
                if (h.footersTable().attr("id") !== h.element.attr("id")) {
                    a("<col data-skip='true' />").prependTo(h.footersTable().find("colgroup")).width(this._indent)
                }
            } else {
                h.headersTable().find("colgroup col:nth-child(1)").width(this._indent);
                h.footersTable().find("colgroup col:nth-child(1)").width(this._indent)
            }
            m.show();
            j = c.join("");
            if (h.options.virtualization === true) {
                this.grid._scrollTo(0, true);
                this._groupedRows = this._tokenizeTBody(j);
                if (this._groupedRows.length > 0) {
                    this._groupedRows[0] = this._groupedRows[0].substr(0, 3) + ' data-firstgrouprow="true" ' + this._groupedRows[0].substr(3);
                    this._groupedRows[this._groupedRows.length - 1] = this._groupedRows[this._groupedRows.length - 1].substr(0, 3) + ' data-lastrow="true" ' + this._groupedRows[this._groupedRows.length - 1].substr(3);
                    for (k = this._groupedRows.length - 1; k >= 0; k--) {
                        if (this._groupedRows[k].indexOf('data-grouprow="true"') >= 0) {
                            this._groupedRows[k] = this._groupedRows[k].substr(0, 3) + ' data-lastgrouprow="true" ' + this._groupedRows[k].substr(3);
                            break
                        }
                    }
                    this._virtualRowCount = this._determineVirtualRowCount(this._groupedRows, h._getDisplayContainerHeight());
                    if (this._virtualRowCount > this._groupedRows.length) {
                        this._virtualRowCount = this._groupedRows.length
                    }
                    n = "";
                    for (k = 0; k < this._virtualRowCount; k++) {
                        n += this._groupedRows[k]
                    }
                    if (window.MSApp === undefined) {
                        m.html(n)
                    } else {
                        MSApp.execUnsafeLocalFunction(function () {
                            m.html(n)
                        })
                    }
                    this.grid._buildVirtualDomForContinuousVirtualization()
                }
            } else {
                if (window.MSApp === undefined) {
                    m.html(j)
                } else {
                    MSApp.execUnsafeLocalFunction(function () {
                        m.html(j)
                    })
                }
                if (this.grid.options.width === null) {
                    this.grid._setContainerWidth(this.grid.element[0].id + "_container")
                } else {
                    this.grid._updateGridContentWidth()
                }
            }
            this._avgRowHeight = this.grid._calculateAvgRowHeight();
            this.grid._trigger(this.grid.events.rowsRendered, null, {
                owner: this.grid,
                tbody: m
            })
        },

        _processGroupsRecursive: function (o, h, u, g, p, t, l, m) {
            var q, x = 0, r, v = t, w = t, s, b, c, f, n = this.options.groupedColumns[o].key, e;
            if (h.length === 0) {
                return
            }
            p = h[v][n];
            e = this._settingFromKey(n);
            m = true;
            this._indent = parseInt(this.options.indentation, 10) * (o + 1);
            for (r = t; r < l; r++) {
                if (r < v || v >= l) {
                    continue
                }
                if (!this._cmp(e, h[v][n], p) || m) {
                    m = false;
                    p = h[v][n];
                    if (e.customGroupName) {
                        q = this._renderGroupRow(g, o, n, p, e.customGroupName, e)
                    } else {
                        q = this._renderGroupRow(g, o, n, p, null, e)
                    }
                    w = v;
                    if (this.options.groupedColumns.length - 1 > o) {
                        while (v < l && this._cmp(e, h[v][n], p)) {
                            v++;
                            x++
                        }
                        this._rs(n, p, q, x, w, v, h, g);
                        x = 0;
                        this._processGroupsRecursive(o + 1, h, u, g, p, r, v, m)
                    } else {
                        b = [];
                        while (v < l && this._cmp(e, h[v][n], p)) {
                            v++;
                            x++;
                            this._renderRecord(g, u, h[v - 1], v - 1, this.options.initialExpand, b)
                        }
                        c = b.length;
                        for (s = 0; s < c; s++) {
                            f = this.css.nonGroupRowEmptyCell;
                            if (s === c - 1) {
                                f += " " + this.css.groupByLastEmptyCell
                            }
                            g[b[s]] += '<td class="' + f + '" data-skip="true"></td>'
                        }
                        this._rs(n, p, q, x, w, v, h, g);
                        x = 0
                    }
                }
            }
        },

        _rs: function (e, f, g, k, j, i, c, b) {
            var h;
            k = this._calcRealSum(e, f, k, c);
            b[g] = b[g].replace("__sum__", k);
            if (b[g].indexOf("$$value$$") !== -1) {
                h = c.slice(j, i);
                b[g] = this._calcRealSummary(b[g], e, f, h)
            }
        },

        _cmp: function (c, j, k) {
            var h, g = this.grid.options, d = g.enableUTCDates, i = (!g.rowTemplate || g.rowTemplate.length <= 0), e, f, b;
            if (c.groupComparerFunction) {
                if (typeof (c.groupComparerFunction) === "function") {
                    h = c.groupComparerFunction(c, j, k)
                } else {
                    h = window[c.groupComparerFunction](c, j, k)
                }
                return h
            }
            if (a.type(j) === "date" && a.type(k) === "date") {
                f = c.columnKey;
                if (f !== undefined && f !== null) {
                    b = this.grid.columnByKey(f);
                    if (b !== undefined && b !== null) {
                        e = b.format
                    }
                }
                return a.ig.formatter(j, "date", e, i, d) === a.ig.formatter(k, "date", e, i, d)
            }
            return j === k
        },

        _encodeSummaryParams: function (f, g) {
            var b = this.options.columnSettings, c, d, e;
            for (c = 0; c < b.length; c++) {
                if (b[c].summaries && b[c].summaries.length > 0) {
                    for (d = 0; d < b[c].summaries.length; d++) {
                        e = "gs(" + b[c].columnKey + ")";
                        if (g.extraParams[e]) {
                            g.extraParams[e] = g.extraParams[e] + "," + b[c].summaries[d].summaryFunction
                        } else {
                            g.extraParams[e] = b[c].summaries[d].summaryFunction
                        }
                    }
                }
            }
        },

        _calcRealSummary: function (b, e, g, w) {
            var r, l, f, c, h, p = this.grid.dataSource.metadata(this.options.resultResponseKey), s, v = b, y, d = false, u, q = 1, x, m;
            r = this.grid.dataSource.data();
            u = this._settingFromKey(e);
            if (p && p !== null) {
                c = this.options.columnSettings;
                for (f = 0; f < c.length; f++) {
                    for (h = 0; h < c[f].summaries.length; h++) {
                        s = p[c[f].columnKey + "_" + c[f].summaries[h].summaryFunction];
                        for (l in s) {
                            if (s.hasOwnProperty(l)) {
                                x = this.grid.columnByKey(e).dataType;
                                if (x === "bool" && a.type(l) === "string") {
                                    m = l.toLowerCase() === "true" ? true : false
                                } else {
                                    if (x === "number" && a.type(l) === "string") {
                                        m = q * l
                                    } else {
                                        m = l
                                    }
                                }
                                if ((g !== null && !g.length && (g === m * q)) || m === g) {
                                    y = s[l];
                                    y = a.ig.formatter(y, "number", this.options.summarySettings.summaryFormat);
                                    if (c[f].summaries[h].customSummary === undefined || c[f].summaries[h].customSummary === null) {
                                        v = v.replace(c[f].columnKey + c[f].summaries[h].summaryFunction + "$$value$$", y)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (!d || (this.grid.dataSource.dataView().length < r.length)) {
                return this._summaries(v, w, e)
            }
        },

        _calcRealSum: function (c, d, m, b) {
            var p = 0, f, i, l, h = 1, e, g, o, j;
            l = this._settingFromKey(c);
            g = this.grid.dataSource.metadata(this.options.resultResponseKey);
            if (g && g[c]) {
                f = g[c];
                for (i in f) {
                    if (f.hasOwnProperty(i)) {
                        o = this.grid.columnByKey(c).dataType;
                        if (o === "bool" && a.type(i) === "string") {
                            j = i.toLowerCase() === "true" ? true : false
                        } else {
                            if (o === "number" && a.type(i) === "string") {
                                j = h * i
                            } else {
                                j = i
                            }
                        }
                        if (d !== null && d !== undefined && !d.length && (d === j * h)) {
                            p = f[i]
                        } else {
                            if (j === d) {
                                p = f[i]
                            }
                        }
                    }
                }
            } else {
                if (b.length < this.grid.dataSource.data().length) {
                    p = 0;
                    i = this.grid.dataSource.data();
                    for (f = 0; f < i.length; f++) {
                        if (this._cmp(l, i[f][c], d)) {
                            e = f;
                            break
                        }
                    }
                    for (f = e; f < i.length; f++) {
                        if (this._cmp(l, i[f][c], d)) {
                            p++
                        } else {
                            break
                        }
                    }
                }
            }
            return p > 0 ? p : m
        },

        _settingFromKey: function (d) {
            var b, c;
            for (c = 0; c < this.options.columnSettings.length; c++) {
                if (this.options.columnSettings[c].columnKey === d) {
                    b = this.options.columnSettings[c]
                }
            }
            return b
        },

        _renderGroupRow: function (b, n, k, w, g, d) {
            var h, t, c, p = n > 0 ? parseInt(this.options.indentation, 10) * n : 0, s, r, f, m, e = this.options.columnSettings, q = "", v, u, o, l = false;
            if (this.options.initialExpand) {
                f = this.css.groupByExpandCellExpanded;
                u = this.options.collapseTooltip
            } else {
                f = this.css.groupByExpandCellCollapsed;
                u = this.options.expandTooltip;
                if (n > 0) {
                    l = true
                }
            }
            if (this.options.expansionIndicatorVisibility) {
                h = '<td class="' + this.css.groupByExpandColumn + '" gbexpandcell="1"><span class="ui-iggrid-expandbuttoncontainer-group-by" style="margin-left:' + p + 'px;"><span class="' + f + '" title="' + u + '"></span></span></td>'
            } else {
                h = '<td class="' + this.css.groupByExpandColumn + '" gbexpandcell="1"></td>'
            }
            v = this.options.groupedRowTextTemplate;
            c = this.grid.columnByKey(k);
            if (d && d.groupLabelFormatter) {
                if (typeof (d.groupLabelFormatter) === "function") {
                    w = d.groupLabelFormatter(w)
                } else {
                    w = window[d.groupLabelFormatter](w)
                }
            } else {
                if (this.options.useGridColumnFormatter === true) {
                    w = this.grid._renderCell(w, c)
                }
            }
            v = v.replace("${key}", c.headerText);
            if (g) {
                s = v.replace("${val}", g).replace("${count}", "__sum__")
            } else {
                s = v.replace("${val}", w).replace("${count}", "__sum__")
            }
            if (this.options.initialExpand) {
                r = "expanded"
            } else {
                r = "collapsed"
            }
            for (m = 0; m < e.length; m++) {
                for (o = 0; o < e[m].summaries.length; o++) {
                    q += " " + e[m].columnKey + " " + (e[m].summaries[o].text || e[m].summaries[o].summaryFunction) + " " + e[m].columnKey + e[m].summaries[o].summaryFunction + "$$value$$";
                    if (o !== e[m].summaries.length - 1) {
                        q += this.options.summarySettings.multiSummaryDelimiter
                    }
                }
            }
            s += q;
            t = '<td colspan="' + this._colspan + '">' + s + "</td>";
            b.push('<tr class="' + this.grid.css.recordClass + " " + this.css.groupedRow + '" data-grouprow="true" data-state="' + r + '" data-glevel="' + n + '"' + (l ? ' style="display:none;"' : "") + ">" + h + t + "</tr>");
            return b.length - 1
        },

        _renderRecord: function (c, l, e, k, f, b) {
            var g, h;
            this.grid._renderRecordInArray(c, l, e, k);
            for (g = c.length - 1; g > 0; g--) {
                if (c[g].indexOf && c[g].indexOf("<tr") !== -1) {
                    if (!f) {
                        c[g] = c[g] + ' style="display: none;"'
                    }
                    for (h = g; h < c.length; h++) {
                        if (c[h].indexOf && c[h].indexOf("data-grouprow") !== -1) {
                            break
                        } else {
                            if (c[h].indexOf && c[h].indexOf(">") !== -1) {
                                b.push(h);
                                break
                            }
                        }
                    }
                    break
                }
            }
        },

        _summaries: function (c, e, f) {
            var g, h, d = this.options.columnSettings, l, k = c, b, m;
            if (c && c.indexOf && c.indexOf("$$value$$") === -1) {
                return c
            }
            for (g = 0; g < d.length; g++) {
                l = d[g].summaries;
                if (l.length > 0) {
                    b = this._arr(d[g].columnKey, e);
                    for (h = 0; h < l.length; h++) {
                        m = a.ig.calcSummaries(l[h].summaryFunction, b, l[h].customSummary);
                        m = a.ig.formatter(m, "number", this.options.summarySettings.summaryFormat);
                        k = k.replace(d[g].columnKey + l[h].summaryFunction + "$$value$$", m)
                    }
                }
            }
            return k
        },

        _arr: function (e, c) {
            var b = [], d;
            for (d = 0; d < c.length; d++) {
                b.push(c[d][e])
            }
            return b
        },

        _dataEmpty: function (d, b) {
            var f = 0, g = parseInt(this.options.indentation, 10), c, e;
            if (b.owner.id() !== this.grid.element[0].id) {
                return
            }
            if (this.options.groupedColumns.length > 0) {
                f += g * this.options.groupedColumns.length;
                c = b.owner.element.children("colgroup");
                e = this.grid.headersTable().children("colgroup");
                if (c.children("[data-registeredCol=true]").length === 0 && e.children("[data-registeredCol=true]").length === 0) {
                    a("<col data-skip='true' data-registeredCol='true' />").prependTo(c).width(f)
                } else {
                    c.children("col:nth-child(1)").width(f)
                }
            }
            if (this._isgroup !== null && this._isgroup !== undefined && parseInt(this.grid.container().width(), 10) > 0 && !this.grid.options.width) {
                if (this._isgroup === true) {
                    if (this.grid.options.virtualization !== true) {
                        this.grid.container().width(parseInt(this.grid.container().width(), 10) + g)
                    }
                } else {
                    this.grid.container().width(parseInt(this.grid.container().width(), 10) - g);
                    g *= -1
                }
                if (this.grid.options.virtualization === true && this.grid.options.virtualizationMode === "continuous") {
                    this.grid._setDisplayContainerWidth(this.grid._getDisplayContainerWidth() + g);
                    this.grid._setVHeadersWidth(this.grid._getVHeadersWidth() + g)
                }
                this._isgroup = null
            }
            this._tbody = b.tbody;
            if (!this._isgroup && this.groupByColumns().length > 0) {
                this._groupAreaList()
            }
            d.stopPropagation()
        },

        _checkGroupExists: function (d) {
            var b = false, c;
            for (c = 0; c < this.options.groupedColumns.length; c++) {
                if (this.options.groupedColumns[c].key === d) {
                    b = true;
                    break
                }
            }
            return b
        },

        _groupBy: function (c, i) {
            var h, f, g, b, e, d = false;
            g = i.attr("data-layout");
            if (g) {
                b = a("#" + i.attr("data-grid-id")).data("igGrid");
                f = b.options.columns[i.data("columnIndex")].key
            } else {
                f = this.grid.options.columns[i.data("columnIndex")].key;
                b = this.grid
            }
            e = this.grid.element.data("igGridFeatureChooser");
            if (e !== undefined && e !== null) {
                e._setSelectedState("GroupBy", f, true, false)
            }
            if (!g) {
                d = this._checkGroupExists(f)
            }
            if (d) {
                return
            }
            h = this._trigger(this.events.groupedColumnsChanging, c, {
                owner: this,
                groupedColumns: this.options.groupedColumns,
                key: f,
                layout: g,
                grid: b
            });
            if (h) {
                this.groupByColumn(f, g);
                this._trigger(this.events.groupedColumnsChanged, c, {
                    owner: this,
                    groupedColumns: this.options.groupedColumns,
                    key: f,
                    layout: g,
                    grid: b
                })
            }
        },

        groupByColumns: function () {
            var b = [];
            if (this._hierarchical) {
                b = this._orderedGroupedCols
            } else {
                b = this.options.groupedColumns
            }
            return b
        },

        _ensureLabelsOrder: function (b, f, e) {
            var c, d = e ? e.key : null;
            for (c = 0; c < b.length; c++) {
                if ((b[c].layout === d || (!b[c].layout && !d)) && !this._exists(f, b[c])) {
                    f.push(b[c])
                }
            }
            for (c = 0; e.columnLayouts && c < e.columnLayouts.length; c++) {
                this._ensureLabelsOrder(b, f, e.columnLayouts[c])
            }
        },

        _exists: function (b, d) {
            var c;
            for (c = 0; c < b.length; c++) {
                if ((b[c].layout === d.layout || (!b[c].layout && !d.layout)) && b[c].key === d.key) {
                    return true
                }
            }
            return false
        },

        _findLayout: function (c, e, d) {
            var b;
            if (e.key === c) {
                d.push(e)
            } else {
                if (!c) {
                    d.push(this.grid.options)
                } else {
                    for (b = 0; e.columnLayouts && b < e.columnLayouts.length; b++) {
                        this._findLayout(c, e.columnLayouts[b], d)
                    }
                }
            }
        },

        _allGroupedCols: function (b) {
            var c;
            for (c = 0; c < this.options.groupedColumns.length; c++) {
                b.push(this.options.groupedColumns[c])
            }
            this._addGroupsRecursive(b, this.grid.options.columnLayouts)
        },

        _addGroupsRecursive: function (d, h) {
            var e, f, c, b, g;
            if (!h) {
                return
            }
            for (e = 0; e < h.length; e++) {
                for (f = 0; h[e].features && f < h[e].features.length; f++) {
                    if (h[e].features[f].name === "GroupBy") {
                        c = h[e].features[f];
                        break
                    }
                }
                if (c) {
                    for (f = 0; c.columnSettings && c.columnSettings.length && f < c.columnSettings.length; f++) {
                        if (c.columnSettings[f].isGroupBy) {
                            for (g = 0; g < h[e].columns.length; g++) {
                                if (h[e].columns[g].key === c.columnSettings[f].columnKey || c.columnSettings[f].columnIndex === g) {
                                    b = h[e].columns[g];
                                    break
                                }
                            }
                            d.push({
                                key: c.columnSettings[f].columnKey || b.key,
                                layout: h[e].key,
                                dir: c.columnSettings[f].dir,
                                col: b
                            })
                        }
                    }
                }
                c = null;
                this._addGroupsRecursive(d, h[e].columnLayouts)
            }
        },

        _getColumnByLayoutKey: function (f, d) {
            var b, e;
            if (this.grid._isMultiColumnGrid) {
                for (e = 0; e < d.length; e++) {
                    if (d[e].key === f) {
                        b = d[e];
                        break
                    }
                    if (d[e].group !== undefined && d[e].group !== null) {
                        b = this._getColumnByLayoutKey(f, d[e].group);
                        if (b !== undefined && b !== null) {
                            break
                        }
                    }
                }
            } else {
                for (e = 0; e < d.length; e++) {
                    if (d[e].key === f) {
                        b = d[e];
                        break
                    }
                }
            }
            return b
        },

        groupByColumn: function (k, l) {
            var j, f, h, n, b, g, o, m, e = this._checkGroupExists(k), d;
            if (!l && e) {
                return
            }
            if (l) {
                m = [];
                this._findLayout(l, this.grid.options, m);
                n = m[0];
                b = this._getColumnByLayoutKey(k, n.columns)
            } else {
                n = this.grid.options;
                b = this.grid.columnByKey(k)
            }
            if (l) {
                if (!n.features) {
                    n.features = [];
                    n.features.push({
                        name: "GroupBy",
                        columnSettings: []
                    });
                    g = n.features[0].columnSettings
                } else {
                    for (j = 0; j < n.features.length; j++) {
                        if (n.features[j].name === "GroupBy") {
                            g = n.features[j].columnSettings;
                            if (!g) {
                                n.features[j].columnSettings = [];
                                g = n.features[j].columnSettings
                            }
                            break
                        }
                    }
                }
                for (j = 0; j < g.length; j++) {
                    if (g[j].columnKey === k) {
                        if (g[j].isGroupBy) {
                            return
                        }
                        o = g[j];
                        break
                    }
                }
                if (!o) {
                    g.push({
                        columnKey: k,
                        isGroupBy: true,
                        dir: "asc"
                    })
                } else {
                    o.isGroupBy = true
                }
            }
            f = {
                fieldName: k,
                dir: "asc",
                layout: l,
                isGroupBy: true
            };
            h = {
                key: k,
                dir: "asc",
                layout: l,
                col: b
            };
            if (!l) {
                this.options.groupedColumns.push(h)
            }
            this._orderedGroupedCols.push(h);
            d = this._orderedGroupedCols.slice(0);
            this._orderedGroupedCols = [];
            this._ensureLabelsOrder(d, this._orderedGroupedCols, this.grid.options);
            this.grid._trigger("headerExtraCellsModified", null, {
                owner: this
            });
            this._addSortingExpressions(this.grid.dataSource.settings.sorting.expressions, f);
            if (!l) {
                this._isgroup = true
            }
            this._rebind()
        },

        _addSortingExpressions: function (e, b) {
            var d, f = e.length, c = -1;
            for (d = 0; d < f; d++) {
                if (e[d].isGroupBy === true) {
                    c = d
                }
            }
            if (c === -1) {
                e.unshift(b)
            } else {
                e.splice(c + 1, 0, b)
            }
        },

        ungroupByColumn: function (h, j) {
            var g, e, d = this.grid.dataSource.settings.sorting.expressions, l, f, k, c = this._checkGroupExists(h), b;
            if (!j && !c) {
                return
            }
            if (j) {
                k = [];
                this._findLayout(j, this.grid.options, k);
                l = k[0]
            } else {
                l = this.grid.options
            }
            e = this.grid.element.data("igGridFeatureChooser");
            if (e !== undefined && e !== null) {
                e._setSelectedState("GroupBy", h, false, false)
            }
            for (g = 0; g < l.features.length; g++) {
                if (l.features[g].name === "GroupBy") {
                    f = l.features[g].columnSettings;
                    break
                }
            }
            for (g = 0; f && g < f.length; g++) {
                if (f[g].columnKey === h) {
                    f[g].isGroupBy = false
                }
            }
            if (!j) {
                for (g = 0; g < this.options.groupedColumns.length; g++) {
                    if (this.options.groupedColumns[g].key === h) {
                        a.ig.removeFromArray(this.options.groupedColumns, g);
                        break
                    }
                }
            }
            for (g = 0; g < this._orderedGroupedCols.length; g++) {
                if (this._orderedGroupedCols[g].key === h && ((this._orderedGroupedCols[g].layout && this._orderedGroupedCols[g].layout === j) || (!this._orderedGroupedCols[g].layout && (j === "" || j === undefined)))) {
                    a.ig.removeFromArray(this._orderedGroupedCols, g);
                    break
                }
            }
            for (g = 0; g < d.length; g++) {
                if (d[g].fieldName === h && (!j || (j && j === d[g].layout))) {
                    a.ig.removeFromArray(d, g)
                }
            }
            b = this._orderedGroupedCols.slice(0);
            this._orderedGroupedCols = [];
            this._ensureLabelsOrder(b, this._orderedGroupedCols, this.grid.options);
            this.grid._trigger("headerExtraCellsModified", null, {
                owner: this
            });
            this.grid.element.children("tbody").hide();
            if (!j && this.options.groupedColumns.length === 0) {
                this.grid.element.find("colgroup").children().first().remove();
                if (this.grid.options.fixedHeaders) {
                    this.grid.headersTable().find("colgroup").children().first().remove()
                }
                if (this.grid.options.fixedFooters && this.grid.options.height !== null) {
                    this.grid.footersTable().find("colgroup").children().first().remove()
                }
                this.grid.headersTable().find("thead tr").children().first().remove()
            }
            if (!j) {
                this._isgroup = false
            }
            this._rebind();
            if (this.options.groupedColumns.length === 0) {
                this._setGroupAreaTextContent(a(".ui-iggrid-groupbyarea .ui-iggrid-groupbyareatext", this.grid.container()));
                if (this.grid.options.width !== null && this.grid.options.width !== undefined) {
                    this.grid._updateGridContentWidth()
                }
            }
        },

        _clearSettings: function (f) {
            var c, d, b, e;
            for (c = 0; c < f.length; c++) {
                if (f[c].features && f[c].features.length) {
                    for (d = 0; d < f[c].features.length; d++) {
                        if (f[c].features[d].name === "GroupBy") {
                            b = f[c].features[d].columnSettings;
                            if (b) {
                                for (e = 0; e < b.length; e++) {
                                    b[e].isGroupBy = false
                                }
                            }
                        }
                    }
                }
                if (f[c].columnLayouts) {
                    this._clearSettings(f[c].columnLayouts)
                }
            }
        },

        ungroupAll: function () {
            var e = 0, d, f = this.grid.options.columnLayouts, b = this.groupByColumns(), c = false;
            if (b.length === 0) {
                return
            }
            for (d = 1; d < this.options.groupedColumns.length; d++) {
                e += parseInt(this.options.indentation, 10)
            }
            if (parseInt(this.grid.container().width(), 10) > 0 && !this.grid.options.width) {
                this.grid.container().width(parseInt(this.grid.container().width(), 10) - e)
            }
            this.grid.dataSource.settings.sorting.expressions = [];
            this.options.groupedColumns = [];
            this._orderedGroupedCols = [];
            if (!this._hierarchical) {
                b = []
            } else {
                for (d = 0; d < b.length; d++) {
                    if (!b[d].layout) {
                        c = true;
                        break
                    }
                }
                if (c) {
                    b = []
                }
            }
            if (f) {
                this._clearSettings(f)
            }
            if (this.options.groupedColumns.length === 0 && b.length === 0) {
                this.grid.element.find("colgroup").children().first().remove();
                if (this.grid.options.fixedHeaders) {
                    this.grid.headersTable().find("colgroup").each(function () {
                        a(this).children().first().remove()
                    })
                }
                if (this.grid.options.fixedFooters) {
                    this.grid.footersTable().find("colgroup").each(function () {
                        a(this).children().first().remove()
                    })
                }
                this.grid.headersTable().find("thead tr").each(function () {
                    a(this).children().first().remove()
                });
                this.grid.footersTable().find("tfoot tr").each(function () {
                    a(this).children().first().remove()
                })
            }
            this._isgroup = false;
            this._rebind()
        },

        _regroup: function () {
            var d = a(".ui-iggrid-groupbyarea", this.grid.container()).find("ul li"), c = this, b;
            this.options.groupedColumns = [];
            this.grid.dataSource.settings.sorting.expressions = [];
            b = this._orderedGroupedCols.slice(0);
            this._orderedGroupedCols = [];
            d.each(function () {
                var f, h, j, e, m, l = [], g;
                h = a(this).attr("data-key");
                j = a(this).attr("data-layout");
                f = a(this).find(".ui-iggrid-asc").length > 0 ? "asc" : "desc";
                if (j) {
                    c._findLayout(j, c.grid.options, l);
                    m = l[0];
                    for (g = 0; m && g < m.columns.length; g++) {
                        if (m.columns[g].key === h) {
                            e = m.columns[g];
                            break
                        }
                    }
                } else {
                    e = c.grid.columnByKey(h)
                }
                if (j) {
                    c._addSortingExpressions(c.grid.dataSource.settings.sorting.expressions, {
                        fieldName: h,
                        dir: f,
                        layout: j,
                        isGroupBy: true
                    })
                } else {
                    c.options.groupedColumns.push({
                        key: h,
                        dir: f,
                        col: e
                    });
                    c._addSortingExpressions(c.grid.dataSource.settings.sorting.expressions, {
                        fieldName: h,
                        dir: f,
                        isGroupBy: true
                    })
                }
                c._orderedGroupedCols.push({
                    key: h,
                    dir: f,
                    col: e,
                    layout: j
                })
            });
            c._ensureLabelsOrder(b, c._orderedGroupedCols, c.grid.options);
            this.grid._loadingIndicator.show();
            this._rebindDataSource()
        },

        _rebind: function () {
            this._scrolltop = a(window).scrollTop();
            this.grid._loadingIndicator.show();
            this._rebindDataSource();
            this._groupAreaList()
        },

        _rebindDataSource: function () {
            if (this.options.type === "remote") {
                this.grid.dataSource.dataBind()
            } else {
                if (this.grid.dataSource.settings.sorting.expressions.length > 0) {
                    this.grid.dataSource.sort(this.grid.dataSource.settings.sorting.expressions)
                }
                this.grid._renderData()
            }
        },

        _toggleGroup: function (f, b) {
            var m = a(f.target).closest("tr"), h, k, e, d, c, g = m.attr("data-glevel"), j, n = [], l = g, o;
            c = m.index();
            if (this._hierarchical) {
                h = m.closest(".ui-iggrid-table").data("igGrid")
            } else {
                h = this.grid
            }
            if (m.attr("data-state") === "expanded") {
                m.attr("data-state", "collapsed").find(".ui-iggrid-expandbutton").attr("title", this.options.expandTooltip).removeClass(this.css.groupByExpandCellExpanded).addClass(this.css.groupByExpandCellCollapsed)
            } else {
                m.attr("data-state", "expanded").find(".ui-iggrid-expandbutton").attr("title", this.options.collapseTooltip).removeClass(this.css.groupByExpandCellCollapsed).addClass(this.css.groupByExpandCellExpanded)
            }
            n[g] = m;
            h.element.children("tbody").children().each(function (q, p) {
                if (q > c) {
                    var i = a(this);
                    j = i.attr("data-grouprow");
                    l = i.attr("data-glevel");
                    if (j === "true" && l <= g) {
                        return false
                    }
                    if (j) {
                        d = l
                    } else {
                        d = parseInt(n[n.length - 1].attr("data-glevel"), 10) + 1
                    }
                    o = "";
                    for (k = 0; k < d; k++) {
                        if (n[k] !== undefined && n[k].attr("data-state") !== "expanded") {
                            o = "none";
                            break
                        }
                    }
                    i.css("display", o);
                    if (j) {
                        n[parseInt(i.attr("data-glevel"), 10)] = i
                    }
                }
            });
            for (e in n) {
                if (n.hasOwnProperty(e)) {
                    e = null;
                    a.ig.removeFromArray(n, e)
                }
            }
            this.grid._adjustLastColumnWidth(false);
            f.stopPropagation()
        },

        _groupAreaList: function () {
            var c = a(".ui-iggrid-groupbyarea", this.grid.container()), m, b = [], e, o, n = c.find("ul"), h, f = this, d, l, j, k, g, q, p, r;
            b = this.groupByColumns();
            if (n.length > 0) {
                n.empty()
            } else {
                n = a("<ul></ul>").appendTo(c).addClass("ui-iggrid-grouparealist")
            }
            g = function (i) {
                var s = null;
                if (a(i.target).is("li")) {
                    s = a(i.target)
                } else {
                    s = a(i.target).closest("li")
                }
                s = s.clone();
                s.find(".ui-iggrid-groupbylabelrightedgeend").remove();
                s.find(".ui-iggrid-groupbylabelrightedge").remove();
                s.find(".ui-iggrid-groupbyremovebutton").remove();
                s.attr("data-dragging", true);
                return s
            };
            q = function (i, s) {
                if (!s.draggable.hasClass("ui-iggrid-groupedcolumnlabel")) {
                    return false
                }
                if (s.draggable.attr("data-key") === a(this).attr("data-key")) {
                    return false
                }
                a(i.target).addClass("ui-iggrid-groupbydroppableedge")
            };
            p = function (i, s) {
                if (!s.draggable.hasClass("ui-iggrid-groupedcolumnlabel")) {
                    return false
                }
                if (s.draggable.attr("data-key") === a(this).attr("data-key")) {
                    return false
                }
                a(i.target).removeClass("ui-iggrid-groupbydroppableedge")
            };
            e = function (s, u) {
                var t, i;
                a(this).removeClass("ui-iggrid-groupbydroppableedge");
                if (!u.draggable.hasClass("ui-iggrid-groupedcolumnlabel")) {
                    return
                }
                if (u.draggable.attr("data-key") !== a(this).attr("data-key")) {
                    t = a(this).closest("ul");
                    i = t.find("li[data-key=" + u.draggable.attr("data-key") + "]").first();
                    i.insertAfter(this);
                    t.find("li[data-dragging=true]").remove();
                    t.find("li").removeClass("ui-iggrid-groupbydroppableedge");
                    f._regroup();
                    f._groupAreaList();
                    s.preventDefault();
                    s.stopPropagation();
                    return false
                }
                return
            };
            o = function (i) {
                i.preventDefault();
                i.stopPropagation();
                return false
            };
            for (h = 0; h < b.length; h++) {
                l = b[h].key;
                m = b[h].layout;
                r = b[h].col.headerText;
                if (b[h].dir === "asc") {
                    d = "ui-iggrid-asc ui-icon ui-icon-arrowthick-1-n"
                } else {
                    d = "ui-iggrid-desc ui-icon ui-icon-arrowthick-1-s"
                }
                j = a("<li></li>").appendTo(n).addClass(this.css.groupedColumnLabel).css("float", "left").attr("data-key", l).attr("data-layout", m || "").bind({
                    mouseup: a.proxy(this._changeSortState, this)
                }).draggable({
                        containment: "body",
                        appendTo: "parent",
                        distance: 5,
                        revert: "invalid",
                        helper: g
                    }).droppable({
                        accept: "li",
                        over: q,
                        out: p,
                        drop: e
                    });
                if (this.options.groupByLabelWidth !== null) {
                    j.width(this.options.groupByLabelWidth)
                }
                k = a("<span></span>").appendTo(j).css({
                    "float": "right"
                }).addClass(this.css.groupedColumnLabel).addClass(this.css.groupedColumnLabelRightEdgeEnd);
                k.attr("data-marker", "edge");
                j.prev().find("span[data-marker]").removeClass(this.css.groupedColumnLabelRightEdgeEnd).addClass(this.css.groupedColumnLabelRightEdge);
                if (m) {
                    a("<span></span>").appendTo(j).text(r).addClass(this.css.groupedColumnLabelText);
                    a("<span></span>").prependTo(j).text(m).addClass(this.css.groupedColumnLayoutLabel)
                } else {
                    a("<span></span>").appendTo(j).text(r)
                }
                a("<span></span>").appendTo(j).addClass(d);
                if (typeof Modernizr !== "object" || Modernizr.touch === false) {
                    a("<span></span>").appendTo(j).addClass("ui-iggrid-groupbyremovebutton").attr("title", f.options.removeButtonTooltip).bind({
                        mouseup: a.proxy(f._removeButtonClick, f),
                        mousedown: o,
                        mouseover: a.proxy(f._removeButtonHover, f),
                        mouseout: a.proxy(f._removeButtonUnhover, f)
                    })
                }
                j.width(Math.ceil(j.width()) + 22)
            }
            n.children().bind({
                mouseover: a.proxy(this._showRemoveButton, this),
                mouseout: a.proxy(this._hideRemoveButton, this)
            })
        },

        _changeSortStarteStart: function (b) {
        },

        _changeSortState: function (b) {
            var k = a(b.target).closest("li"), f = k.attr("data-key"), d, g = k.attr("data-layout"), h, e, c = this._orderedGroupedCols, m = this.grid.dataSource.settings.sorting.expressions, n, l;
            for (d = 0; d < c.length; d++) {
                if (c[d].key === f && ((g && g === c[d].layout) || !g)) {
                    if (c[d].dir === "asc") {
                        c[d].dir = "desc"
                    } else {
                        c[d].dir = "asc"
                    }
                    for (e = 0; e < m.length; e++) {
                        if (m[e].fieldName === f && ((g && g === m[e].layout) || !g)) {
                            m[e].dir = c[d].dir;
                            break
                        }
                    }
                    this._rebind();
                    break
                }
            }
            if (g) {
                h = [];
                this._findLayout(g, this.grid.options, h);
                l = h[0];
                for (d = 0; l.features && d < l.features.length; d++) {
                    if (l.features[d].name === "GroupBy") {
                        n = l.features[d].columnSettings;
                        for (e = 0; e < n.length; e++) {
                            if (n[e].columnKey === f) {
                                n[e].dir = n[e].dir === "asc" ? "desc" : "asc";
                                break
                            }
                        }
                        break
                    }
                }
                this._rebind()
            }
        },

        _showRemoveButton: function (c) {
            var b = a(c.target).closest("li").find(".ui-iggrid-groupbyremovebutton"), d = a(c.target).closest("li").attr("data-key"), e = a(c.target).closest("li").attr("data-layout");
            if (!d) {
                return
            }
            b.attr("data-key", d).attr("data-layout", e).addClass("ui-icon ui-icon-circle-close")
        },

        _hideRemoveButton: function (c) {
            var b = a(c.target).closest("li").find(".ui-iggrid-groupbyremovebutton");
            b.removeClass("ui-icon ui-icon-circle-close");
            a(c.target).closest("li").removeClass("ui-state-hover")
        },

        _removeButtonClick: function (b) {
            var c = a(b.target).attr("data-key"), e, d;
            if (this._isDragging) {
                return
            }
            e = this._trigger(this.events.groupedColumnsChanging, b, {
                owner: this,
                groupedColumns: this.options.groupedColumns,
                key: c
            });
            if (e) {
                d = a(b.target).attr("data-layout");
                this.ungroupByColumn(c, d);
                this._trigger(this.events.groupedColumnsChanged, b, {
                    owner: this,
                    groupedColumns: this.options.groupedColumns,
                    key: c
                })
            }
            b.preventDefault();
            b.stopPropagation();
            return false
        },

        _removeButtonHover: function (b) {
        },

        _removeButtonUnhover: function (b) {
        },

        destroy: function () {
            var b = a("#" + this.grid.element[0].id + "_groupby_modalDialog");
            this.grid.container().find(".ui-iggrid-groupbyarea").remove();
            this.ungroupAll();
            this._detachEvents(true);
            b.igGridModalDialog("getCaptionButtonContainer");
            b.remove();
            a.Widget.prototype.destroy.call(this);
            return this
        },

        _detachEvents: function (b) {
            var c = this.grid.headersTable().find("th");
            if (b === true) {
                c.draggable("destroy")
            }
            c.unbind("mouseover", this._headerMouseOverHandler).unbind("mouseout", this._headerMouseOutHandler);
            a(document).undelegate("#" + this.grid.id() + "_container td[gbexpandcell=1]", "mousedown", this._toggleGroupHandler);
            a(document).undelegate("#" + this.grid.id() + "_container", "iggridheaderrenderedinternal", this._headerRenderedHandler);
            this.grid.element.unbind("iggriddataempty", this._dataRenderingHandler);
            this.grid.element.unbind("iggridrowsrendering", this._rowsRenderingHandler);
            this.grid.element.unbind("iggridrowsrendered", this._rowsRenderedHandler);
            this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.unbind("iggridheadercelldragcancel", this._headerDragCancelHandler);
            this.grid.element.unbind("iggriduidirty", this._uiDirtyHandler)
        },

        _initDefaultSettings: function () {
            var h = [], g, c = this.options.columnSettings, d, f, b, e = (this.grid._hasUnboundColumns === true && this.options.type === "remote");
            this._orderedColumnSettings = [];
            if (this.grid.options.columns && this.grid.options.columns.length > 0) {
                for (d = 0; d < this.grid.options.columns.length; d++) {
                    b = true;
                    if (e && this.grid.getUnboundColumnByKey(this.grid.options.columns[d].key) !== null) {
                        b = false
                    }
                    h[d] = {
                        columnIndex: d,
                        columnKey: this.grid.options.columns[d].key,
                        allowGrouping: b,
                        summaries: [],
                        isGroupBy: false
                    }
                }
            }
            for (d = 0; d < c.length; d++) {
                for (f = 0; f < h.length; f++) {
                    if (h[f].columnKey === c[d].columnKey || h[f].columnIndex === c[d].columnIndex) {
                        break
                    }
                }
                if (f === h.length) {
                    continue
                }
                for (g in c[d]) {
                    if (c[d].hasOwnProperty(g) && g !== "columnKey" && g !== "columnIndex") {
                        h[f][g] = c[d][g]
                    }
                }
                this._orderedColumnSettings.push(h[f])
            }
            this.options.columnSettings = h;
            for (d = 0; this.grid._headerInitCallbacks && d < this.grid._headerInitCallbacks.length; d++) {
                if (this.grid._headerInitCallbacks[d].type === "GroupBy") {
                    a.ig.removeFromArray(this.grid._headerInitCallbacks, d);
                    break
                }
            }
            for (d = 0; this.grid._footerInitCallbacks && d < this.grid._footerInitCallbacks.length; d++) {
                if (this.grid._footerInitCallbacks[d].type === "GroupBy") {
                    a.ig.removeFromArray(this.grid._footerInitCallbacks, d);
                    break
                }
            }
        },

        _renderExtraFooterCells: function (d, b, c) {
            if (this.options.groupedColumns.length > 0) {
                if (c === true) {
                    a("<td></td>").addClass(this.css.footerExtraCell).prependTo(d).attr("data-skip", true)
                } else {
                    a("<td></td>").addClass(this.css.footerExtraCell).appendTo(d).attr("data-skip", true)
                }
            }
        },

        _renderExtraHeaderCells: function (d, b, c) {
            if (this.options.groupedColumns.length > 0) {
                if (c === true) {
                    a("<td></td>").prependTo(d).css("border-width", 0).attr("data-skip", true);
                    if (b) {
                        a("<col />").prependTo(b).attr("data-skip", true).css("width", this.options.indentation)
                    }
                } else {
                    a("<td></td>").appendTo(d).css("border-width", 0).attr("data-skip", true);
                    if (b) {
                        a("<col />").appendTo(b).attr("data-skip", true).css("width", this.options.indentation)
                    }
                }
            }
        },

        _columnsCollectionModified: function (d, b) {
            var c;
            if (b.owner.id() !== this.grid.element[0].id) {
                return
            }
            b.tbody = this.grid.element.children("tbody");
            if (this.options.groupedColumns.length > 0) {
                c = this.grid.headersTable().children("colgroup");
                if (c.children("[data-registeredCol=true]").length === 0) {
                    a("<col data-skip='true' data-registeredCol='true' />").prependTo(c).width(this._indent)
                } else {
                    c.children("col:nth-child(1)").width(this._indent)
                }
                if (this.grid.headersTable().attr("id") !== this.grid.element.attr("id")) {
                    a("<col data-skip='true' />").prependTo(this.grid.element.children("colgroup")).width(this._indent)
                }
                if (this.grid.footersTable().attr("id") !== this.grid.element.attr("id")) {
                    a("<col data-skip='true' />").prependTo(this.grid.footersTable().children("colgroup")).width(this._indent)
                }
                if (this.grid.options.width === null) {
                    this.grid._setContainerWidth(this.grid.element[0].id + "_container")
                } else {
                    this.grid._updateGridContentWidth()
                }
            }
            this._dataEmpty(d, b)
        },

        _onUIDirty: function (c, b) {
            this.ungroupAll()
        },

        _injectGrid: function (d) {
            var e, b, c, j, h = null, g = null, f = null;
            this.grid = d;
            if (this.options.type === null) {
                this.options.type = this.grid._inferOpType()
            }
            h = this.element.closest(".ui-iggrid-root");
            if (h.is("div")) {
                h = a("#" + h.attr("id") + "_table")
            }
            h = h.data("igGridGroupBy");
            if (h) {
                g = h._orderedGroupedCols;
                if (g && g.length > 0 && this.grid.options.key) {
                    f = [];
                    for (e = 0; e < g.length; e++) {
                        if (this.grid.options.key === g[e].layout) {
                            f.push(g[e])
                        }
                    }
                }
            }
            this._headerRenderedHandler = a.proxy(this._headerRendered, this);
            this._dataRenderingHandler = a.proxy(this._dataEmpty, this);
            this._toggleGroupHandler = a.proxy(this._toggleGroup, this);
            this._rowsRenderingHandler = a.proxy(this._renderRecords, this);
            this._rowsRenderedHandler = a.proxy(this._recordsRendered, this);
            this._headerCellRenderedHandler = a.proxy(this._headerCellRendered, this);
            this._headerDragCancelHandler = a.proxy(this._headerCellDragCancel, this);
            if (this.grid.options.virtualization === true && this.grid.options.virtualizationMode === "continuous") {
                this._rebuildVirtualRowsHandler = a.proxy(this._rebuildVirtualRows, this);
                this.grid.element.bind("iggridrebuildingvirtualrows", this._rebuildVirtualRowsHandler);
                this.grid._getTotalRowsCount = a.proxy(this._getTotalRowsCount, this)
            }
            this._detachEvents();
            a(document).delegate("#" + this.grid.id() + "_container", "iggridheaderrenderedinternal", this._headerRenderedHandler);
            this.grid.element.bind("iggriddataempty", this._dataRenderingHandler);
            this.grid.element.bind("iggridrowsrendering", this._rowsRenderingHandler);
            this.grid.element.bind("iggridrowsrendered", this._rowsRenderedHandler);
            this.grid.element.bind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.bind("iggridheadercelldragcancel", this._headerDragCancelHandler);
            this._headerMouseOverHandler = function (i) {
                a(i.currentTarget).addClass("ui-state-hover")
            };
            this._headerMouseOutHandler = function (i) {
                a(i.currentTarget).removeClass("ui-state-hover")
            };
            this.grid.dataSource.settings.sorting.sortUrlKey = this.options.groupByUrlKey;
            this.grid.dataSource.settings.sorting.sortUrlAscValueKey = this.options.groupByUrlKeyAscValue;
            this.grid.dataSource.settings.sorting.sortUrlDescValueKey = this.options.groupByUrlKeyDescValue;
            if (this.options.type) {
                this.grid.dataSource.settings.sorting.type = this.options.type
            } else {
                this.grid.dataSource.settings.sorting.type = "remote"
            }
            this.grid.dataSource.settings.encodeExtraParams = a.proxy(this._encodeSummaryParams, this);
            this._initDefaultSettings();
            this.options.groupedColumns = [];
            if (!this.grid.options.key && (f === null || f.length === 0)) {
                for (e = 0; e < this._orderedColumnSettings.length; e++) {
                    if (this._orderedColumnSettings[e].isGroupBy) {
                        j = this._orderedColumnSettings[e];
                        b = {
                            key: j.columnKey,
                            dir: j.dir || "asc",
                            col: this.grid.columnByKey(j.columnKey)
                        };
                        this.options.groupedColumns.push(b);
                        c = {
                            fieldName: j.columnKey,
                            dir: j.dir || "asc",
                            layout: this.grid.options.key,
                            isGroupBy: true
                        };
                        if (this.options.type === "local") {
                            c.layout = null;
                            this.grid.dataSource.settings.sorting.defaultFields.push(c)
                        }
                        this._addSortingExpressions(this.grid.dataSource.settings.sorting.expressions, c)
                    }
                }
            } else {
                for (e = 0; f !== null && e < f.length; e++) {
                    this.options.groupedColumns.push(f[e]);
                    c = {
                        fieldName: f[e].key,
                        dir: f[e].dir || "asc",
                        layout: this.grid.options.key,
                        isGroupBy: true
                    };
                    if (this.options.type === "local") {
                        c.layout = null;
                        this.grid.dataSource.settings.sorting.defaultFields.push(c)
                    }
                    this._addSortingExpressions(this.grid.dataSource.settings.sorting.expressions, c)
                }
            }
            if (this.grid.element.closest(".ui-iggrid-root").length === 0 || this.grid.element.hasClass("ui-iggrid-root") || this.grid._isWrapped) {
                a(document).delegate("#" + this.grid.id() + "_container td[gbexpandcell=1]", "mousedown", this._toggleGroupHandler)
            }
            this._renderExtraHeaderCellHandler = a.proxy(this._renderExtraHeaderCells, this);
            this._renderExtraFooterCellHandler = a.proxy(this._renderExtraFooterCells, this);
            this.grid._headerInitCallbacks.push({
                type: "GroupBy",
                func: this._renderExtraHeaderCellHandler
            });
            this.grid._footerInitCallbacks.push({
                type: "GroupBy",
                func: this._renderExtraFooterCellHandler
            });
            this._columnsCollectionModifiedHandler = a.proxy(this._columnsCollectionModified, this);
            this.grid.element.bind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            this._uiDirtyHandler = a.proxy(this._onUIDirty, this);
            this.grid.element.bind("iggriduidirty", this._uiDirtyHandler);
            if (this.grid.element.igGridFeatureChooser !== undefined) {
                this.grid.element.igGridFeatureChooser()
            }
            this._hierarchical = this.grid._isHierarchicalGrid;
            this._allGroupedCols(this._orderedGroupedCols)
        },

        _tokenizeTBody: function (d) {
            var f = 0, h = [], e = 0, b, c, g;
            while (true) {
                b = d.indexOf("<tr", f);
                c = d.indexOf("</tr>", f);
                if (b === -1 || c === -1) {
                    break
                }
                g = d.substr(b, c + 5 - b);
                g = g.substr(0, 3) + ' data-row-idx="' + (e++) + '" ' + g.substr(3);
                h.push(g);
                if (c + 5 < d.length - 1) {
                    f = c + 5
                } else {
                    break
                }
            }
            return h
        },

        _determineVirtualRowCount: function (b, d) {
            var e, j, k, g, f, c, l, h;
            e = a("<div></div>)").appendTo("body").css({
                position: "absolute",
                top: -1800,
                left: -1800,
                visibility: "hidden"
            });
            j = b.length > 10 ? 10 : b.length;
            k = "";
            for (g = 0; g < j; g++) {
                k += b[g]
            }
            e.html(k);
            f = e.height();
            c = f / j;
            l = d / c;
            h = Math.ceil(l * 3);
            e.remove();
            return h
        },

        _getTotalRowsCount: function () {
            if (this.options.groupedColumns.length > 0) {
                return this._groupedRows.length
            }
            return this.grid.dataSource.dataView().length
        },

        _rebuildVirtualRows: function (j, b) {
            var z, B, I, e, E, l, r, J, F, k, H, q, A, m, o, x, D, d, h, p, G, s, t, n, u, y, w, C, g, f, c, v;
            if (b.owner.id() !== this.grid.element[0].id) {
                return
            }
            if (this.options.groupedColumns.length === 0) {
                return true
            }
            z = b.scrollData;
            B = b.scrollResult;
            I = z.virtualScrollerY;
            e = z.deltaScroll;
            E = "#" + this.element[0].id;
            l = z.firstRowDataIndex;
            r = z.lastRowDataIndex;
            J = z.visibleArea;
            F = a(E + " > tbody");
            k = 0;
            E = "#" + this.element[0].id;
            H = a(E + " > tbody > tr[data-container='true']");
            for (q = 0; q < H.length; q++) {
                k += a(H[q]).outerHeight()
            }
            if (k > 0) {
                A = this.grid._getScrollContainerHeight();
                this.grid._setScrollContainerHeight(A - k)
            }
            if (e > 0 && B.action === "SA_NEED_NEXT_PAGE") {
                m = this.grid._getFirstVisibleTR(J);
                o = Math.abs(m[0].offsetTop - J.top);
                x = 0;
                D = parseInt(m.attr("data-row-idx"), 0);
                d = D;
                h = parseInt(this._virtualRowCount, 0) + D - 1;
                p = false;
                if (h > this._groupedRows.length - 1) {
                    h = this._groupedRows.length - 1;
                    D = h - this._virtualRowCount + 1;
                    p = true
                }
                F.empty();
                y = "";
                for (q = D; q <= h; q++) {
                    y += this._groupedRows[q]
                }
                F.html(y);
                if (p) {
                    G = a(E + " > tbody > tr[data-row-idx='" + d + "']");
                    o = G[0].offsetTop + o
                }
                this.grid._setDisplayContainerScrollTop(o + e)
            }
            if (e < 0 && B.action === "SA_NEED_PREV_PAGE") {
                s = this.grid._getLastVisibleTR(J);
                t = parseInt(s.attr("data-row-idx"), 0);
                m = this.grid._getFirstVisibleTR(J);
                n = parseInt(m.attr("data-row-idx"), 0);
                u = J.bottom - s[0].offsetTop;
                h = t;
                D = h - parseInt(this._virtualRowCount, 0) + 1;
                if (D < 0) {
                    D = 0;
                    h = D + this._virtualRowCount - 1
                }
                F.empty();
                y = "";
                for (q = D; q <= h; q++) {
                    y += this._groupedRows[q]
                }
                F.html(y);
                E = "#" + this.element[0].id;
                w = a(E + ' > tbody > tr[data-row-idx="' + n + '"]');
                this.grid._setDisplayContainerScrollTop(w[0].offsetTop + e)
            }
            if (B.action === "SA_NEED_SOME_PAGE") {
                C = Math.floor(I / this._avgRowHeight);
                g = C + this._virtualRowCount - 1;
                if (C < 0) {
                    C = 0;
                    g = C + this._virtualRowCount - 1
                }
                if (g >= this._groupedRows.length - 1) {
                    g = this._groupedRows.length - 1;
                    C = g - this._virtualRowCount + 1
                }
                F.empty();
                y = "";
                for (q = C; q <= g; q++) {
                    y += this._groupedRows[q]
                }
                F.html(y);
                f = 0;
                v = this.grid._getScrollContainerHeight() - this.grid._getDisplayContainerHeight();
                if (v - 3 <= I && I <= v + 3) {
                    f = 10000
                }
                this.grid._setDisplayContainerScrollTop(f)
            }
            c = this.grid._calculateAvgRowHeight();
            if (c > this._avgRowHeight) {
                this._avgRowHeight = c
            }
            return false
        }

    });

    a.extend(a.ui.igGridGroupBy, {
        version: "12.2.20122.1021"
    }

}(jQuery));