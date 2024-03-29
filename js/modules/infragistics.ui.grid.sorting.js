﻿/*
 * Infragistics.Web.ClientUI Grid Sorting 12.2.20122.1021
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

    a.widget("ui.igGridSorting", {

        css: {
            sortableColumnHeader: "ui-iggrid-sortableheader ui-state-default",
            sortableColumnHeaderActive: "ui-iggrid-sortableheaderactive ui-state-active",
            sortableColumnHeaderHover: "ui-iggrid-sortableheaderhover ui-state-hover",
            sortableColumnHeaderFocus: "ui-iggrid-sortableheaderfocus ui-state-focus",
            ascendingColumnHeader: "ui-iggrid-colheaderasc",
            descendingColumnHeader: "ui-iggrid-colheaderdesc",
            ascendingColumn: "ui-iggrid-colasc ui-state-highlight",
            descendingColumn: "ui-iggrid-coldesc ui-state-highlight",
            sortIndicator: "ui-iggrid-colindicator",
            sortIndicatorAscending: "ui-iggrid-colindicator-asc ui-icon ui-icon-arrowthick-1-n",
            sortIndicatorDescending: "ui-iggrid-colindicator-desc ui-icon ui-icon-arrowthick-1-s",
            dialogSortedColumns: "ui-iggrid-sorting-dialog-sortedcolumns",
            dialogUnsortedColumns: "ui-iggrid-sorting-dialog-unsortedcolumns",
            dialogUnsortedColumnsSortByButton: "ui-iggrid-sorting-dialog-unsortedcolumns-sortbybutton",
            dialogAsdDescButton: "ui-iggrid-sorting-dialog-ascdescbutton",
            modalDialogSortByColumn: "ui-iggrid-sorting-dialog-sortbybutton",
            dialogSortedColumnsItem: "ui-widget-content",
            dialogUnsortedColumnsItem: "ui-widget-content",
            dialogButtonAsc: "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
            dialogButtonAscIcon: "ui-button-icon-primary ui-icon ui-icon-arrowthick-1-n",
            dialogButtonDesc: "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
            dialogButtonDescIcon: "ui-button-icon-primary ui-icon ui-icon-arrowthick-1-s",
            dialogButtonUnsort: "ui-iggrid-sorting-dialog-sortbybuttons ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-igbutton ui-widget-content ui-igbutton-remove",
            dialogButtonUnsortContainer: "ui-button-icon-primary ui-icon ui-icon-circle-close",
            dialogSortedColumnTextContainer: "ui-iggrid-dialog-text",
            dialogItemText: "ui-iggrid-dialog-text",
            dialogButtonsHover: "ui-state-hover",
            featureChooserModalDialogIcon: "ui-icon ui-icon-newwin"
        },

        options: {
            type: null,
            caseSensitive: false,
            applySortedColumnCss: true,
            sortUrlKey: null,
            sortUrlKeyAscValue: null,
            sortUrlKeyDescValue: null,
            mode: "single",
            customSortFunction: null,
            firstSortDirection: "ascending",
            sortedColumnTooltip: a.ig.GridSorting.locale.sortedColumnTooltipFormat,
            modalDialogSortOnClick: false,
            modalDialogSortByButtonText: a.ig.GridSorting.locale.modalDialogSortByButtonText,
            modalDialogResetButtonLabel: a.ig.GridSorting.locale.modalDialogResetButton,
            modalDialogCaptionButtonDesc: a.ig.GridSorting.locale.modalDialogCaptionButtonDesc,
            modalDialogCaptionButtonAsc: a.ig.GridSorting.locale.modalDialogCaptionButtonAsc,
            modalDialogCaptionButtonUnsort: a.ig.GridSorting.locale.modalDialogCaptionButtonUnsort,
            modalDialogWidth: 350,
            modalDialogHeight: "",
            modalDialogAnimationDuration: 200,
            featureChooserText: a.ig.GridSorting.locale.featureChooserText,
            unsortedColumnTooltip: a.ig.GridSorting.locale.unsortedColumnTooltip,
            columnSettings: [
                {
                    columnKey: null,
                    columnIndex: null,
                    firstSortDirection: null,
                    currentSortDirection: null,
                    allowSorting: true
                }
            ],
            modalDialogCaptionText: a.ig.GridSorting.locale.modalDialogCaptionText,
            modalDialogButtonApplyText: a.ig.GridSorting.locale.modalDialogButtonApplyText,
            modalDialogButtonCancelText: a.ig.GridSorting.locale.modalDialogButtonCancelText
        },

        renderInFeatureChooser: true,

        events: {
            columnSorting: "columnSorting",
            columnSorted: "columnSorted",
            modalDialogOpening: "modalDialogOpening",
            modalDialogOpened: "modalDialogOpened",
            modalDialogMoving: "modalDialogMoving",
            modalDialogClosing: "modalDialogClosing",
            modalDialogClosed: "modalDialogClosed",
            modalDialogContentsRendering: "modalDialogContentsRendering",
            modalDialogContentsRendered: "modalDialogContentsRendered",
            modalDialogSortingChanged: "modalDialogSortingChanged",
            modalDialogButtonUnsortClick: "modalDialogButtonUnsortClick",
            modalDialogSortClick: "modalDialogSortClick",
            modalDialogButtonApplyClick: "modalDialogButtonApplyClick",
            modalDialogButtonResetClick: "modalDialogButtonResetClick"
        },

        _createWidget: function (c, b) {
            this.options.columnSettings = [];
            a.Widget.prototype._createWidget.apply(this, arguments)
        },

        _create: function () {
            var b = this;
            this._headers = [];
            this._clickHandler = function (c) {
                var e, d;
                d = a(c.target).closest(".ui-iggrid").attr("id").replace("_container", "");
                if (b.grid.element.attr("id") !== d) {
                    return
                }
                e = a(c.currentTarget).closest("th");
                if (e.attr("data-skip") !== "true" && (b.grid._isMultiColumnGrid !== true || e.attr("data-isheadercell") === "true")) {
                    e.find("a").focus();
                    b._handleSort(c);
                    if (a("#" + b.grid.id() + "_hscroller").scrollLeft() > 0 && b.grid.options.fixedHeaders === true) {
                        b.grid.headersTable().parent().scrollLeft(a("#" + b.grid.id() + "_hscroller").scrollLeft())
                    }
                }
            };
            this._dragStartHandler = function (c) {
                var d, e = true;
                e = b.grid._trigger("headercelldragcancel", c, {});
                if (e) {
                    d = a(c.target).closest(".ui-iggrid").attr("id").replace("_container", "");
                    if (b.grid.element.attr("id") !== d) {
                        return
                    }
                    c.stopPropagation();
                    c.preventDefault()
                } else {
                    return true
                }
                return false
            };
            this._mouseOverHandler = function (e) {
                var f, c = a(e.currentTarget), d;
                f = a(e.target).closest(".ui-iggrid").attr("id").replace("_container", "");
                if (b.grid.element.attr("id") !== f) {
                    return
                }
                d = b._getColSettingFromElement(e.currentTarget);
                if (d && d.allowSorting !== false) {
                    c.addClass(b.css.sortableColumnHeaderHover)
                }
            };
            this._mouseOutHandler = function (c) {
                var d;
                d = a(c.target).closest(".ui-iggrid").attr("id").replace("_container", "");
                if (b.grid.element.attr("id") !== d) {
                    return
                }
                a(c.currentTarget).removeClass(b.css.sortableColumnHeaderHover)
            };
            a("#" + this.element[0].id).delegate("thead th", {
                click: this._clickHandler,
                mouseover: this._mouseOverHandler,
                mouseout: this._mouseOutHandler
            });
            a("#" + this.element[0].id + " thead th").bind("dragstart", this._dragStartHandler);
            a("#" + this.element[0].id + "_headers thead th").bind("dragstart", this._dragStartHandler);
            a(document).delegate("#" + this.element[0].id + "_headers thead th", {
                click: this._clickHandler,
                mouseover: this._mouseOverHandler,
                mouseout: this._mouseOutHandler
            });
            this._keyDownHandler = function (c) {
                b._handleSortKb(c)
            };
            this._focusHandler = function (c) {
                b._handleFocusKb(c)
            };
            this._blurHandler = function (c) {
                b._handleBlurKb(c)
            };
            a("#" + this.element[0].id).delegate("thead th a:not([th-remove-focus])", {
                keydown: this._keyDownHandler,
                focus: this._focusHandler,
                blur: this._blurHandler
            });
            a(document).delegate("#" + this.element[0].id + "_headers thead th a:not([th-remove-focus])", {
                keydown: this._keyDownHandler,
                focus: this._focusHandler,
                blur: this._blurHandler
            })
        },

        _setOption: function (e, g) {
            var d, b, c, f = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog");
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (e) {
                case "type":
                    throw new Error(a.ig.Grid.locale.optionChangeNotSupported + " " + e);
                case "caseSensitive":
                    this.grid.dataSource.settings.sorting.caseSensitive = this.options.caseSensitive;
                    break;
                case "modalDialogSortOnClick":
                    f.remove();
                    this._renderMultipleSortingDialog();
                    break;
                case "modalDialogAnimationDuration":
                    f.igGridModalDialog("option", "animationDuration", g);
                    break;
                case "modalDialogWidth":
                    f.igGridModalDialog("option", "modalDialogWidth", g);
                    break;
                case "modalDialogHeight":
                    f.igGridModalDialog("option", "modalDialogHeight", g);
                    break;
                case "modalDialogButtonApplyText":
                    f.igGridModalDialog("option", "buttonApplyText", g);
                    break;
                case "modalDialogButtonCancelText":
                    f.igGridModalDialog("option", "buttonCancelText", g);
                    break;
                case "modalDialogCaptionText":
                    f.igGridModalDialog("option", "modalDialogCaptionText", g);
                    break;
                case "featureChooserText":
                    c = this.grid.element.data("igGridFeatureChooser");
                    if (c) {
                        for (d = 0; d < this.grid.options.columns.length; d++) {
                            b = this.grid.options.columns[d].key;
                            c._setListItemText(b, "Sorting", g)
                        }
                    }
                    break;
                default:
                    break
            }
        },

        _getColSettingFromElement: function (d) {
            var f, c = this.options.columnSettings, b = a(d);
            f = parseInt(b.data("columnIndex"), 10);
            return c[f]
        },

        _handleSortKb: function (b) {
            var d = a(b.currentTarget).closest("th").data("columnIndex"), c;
            c = a(b.target).closest(".ui-iggrid").attr("id").replace("_container", "");
            if (this.grid.element.attr("id") !== c) {
                return
            }
            if (b.keyCode === a.ui.keyCode.ENTER || b.keyCode === a.ui.keyCode.SPACE) {
                if (this._currentActiveHeader) {
                    this._currentActiveHeader.removeClass(this.css.sortableColumnHeaderActive)
                }
                a(b.currentTarget).closest("th").addClass(this.css.sortableColumnHeaderActive);
                this._currentActiveHeader = a(b.currentTarget).closest("th");
                if (b.shiftKey) {
                    this.unsortColumn(d, a(b.currentTarget).closest("th"))
                } else {
                    this.sortColumn(d, null, a(b.currentTarget).closest("th"));
                    if (a.browser.msie) {
                        a(b.currentTarget).focus()
                    }
                }
                b.stopPropagation();
                b.preventDefault()
            }
        },

        _handleFocusKb: function (b) {
            var c = a(b.target).closest(".ui-iggrid").attr("id").replace("_container", "");
            if (this.grid.element.attr("id") !== c) {
                return
            }
            a(b.currentTarget).closest("th").addClass(this.css.sortableColumnHeaderFocus)
        },

        _handleBlurKb: function (b) {
            var c = a(b.target).closest(".ui-iggrid").attr("id").replace("_container", "");
            if (this.grid.element.attr("id") !== c) {
                return
            }
            a(b.currentTarget).closest("th").removeClass(this.css.sortableColumnHeaderFocus)
        },

        _handleSort: function (b) {
            var c = a(b.currentTarget).closest("th").data("columnIndex"), d = false;
            if (this._currentActiveHeader) {
                this._currentActiveHeader.removeClass(this.css.sortableColumnHeaderActive)
            }
            d = b.shiftKey;
            a(b.currentTarget).addClass(this.css.sortableColumnHeaderActive);
            this._currentActiveHeader = a(b.currentTarget).closest("th");
            if (d) {
                this._currentHeader = a(b.currentTarget).closest("th");
                this.unsortColumn(c, a(b.currentTarget).closest("th"))
            } else {
                this.sortColumn(c, null, a(b.currentTarget))
            }
            b.stopPropagation();
            b.preventDefault()
        },

        _initLoadingIndicator: function () {
            this._loadingIndicator = this.grid.container().length > 0 ? this.grid.container().igLoading().data("igLoading").indicator() : this.grid.element.igLoading().data("igLoading").indicator()
        },

        sortColumn: function (j, d, g) {
            var c, e, l = true, n, h, p, f, m = true, o, k = [], b = false;
            this._currentIdentifier = j;
            if (a.type(j) === "number") {
                c = this.grid.options.columns[j].key
            } else {
                c = j;
                if (g === null || g === undefined) {
                    g = a("#" + this.grid.element[0].id + "_" + c)
                }
                j = g.data("columnIndex")
            }
            e = this.grid.dataSource.settings.sorting.expressions;
            n = this._findColumnSetting(c);
            if (this.grid.options.virtualizationMode === "fixed" && (this.grid.options.virtualization === true || this.grid.options.columnVirtualization === true)) {
                p = j - this.grid._startColIndex
            } else {
                p = j
            }
            if (g === null || g === undefined) {
                p += this.grid.headersTable().children("thead").children("tr").children("th[data-skip=true]").length;
                if (this._currentActiveHeader) {
                    this._currentActiveHeader.removeClass(this.css.sortableColumnHeaderActive)
                }
                if (c) {
                    g = a("#" + this.grid.element[0].id + "_" + c)
                } else {
                    g = this.grid.headersTable().children("thead").children("tr").children("th:nth-child(" + (p + 1) + ")")
                }
                b = true
            }
            if (n && n.allowSorting === false) {
                return
            }
            if (d !== null && d !== undefined) {
                n.currentSortDirection = d
            } else {
                if ((n.currentSortDirection !== undefined && n.currentSortDirection !== null && !n.currentSortDirection.startsWith("asc") && !n.currentSortDirection.startsWith("desc")) || n.currentSortDirection === undefined || n.currentSortDirection === null) {
                    n.currentSortDirection = n.firstSortDirection === undefined ? this.options.firstSortDirection : n.firstSortDirection
                } else {
                    n.currentSortDirection = (n.currentSortDirection !== undefined && n.currentSortDirection !== null && n.currentSortDirection.indexOf("asc") !== -1) ? "descending" : "ascending"
                }
            }
            if (!b) {
                l = this._trigger(this.events.columnSorting, null, {
                    columnKey: c,
                    direction: n.currentSortDirection,
                    owner: this
                })
            }
            if (l) {
                this._loadingIndicator.show();
                g.attr("title", n.currentSortDirection.startsWith("asc") ? this.options.sortedColumnTooltip.replace("${direction}", a.ig.GridSorting.locale.ascending) : this.options.sortedColumnTooltip.replace("${direction}", a.ig.GridSorting.locale.descending));
                if (this.options.mode === "single") {
                    this._clearSortStates(g, j);
                    for (h = 0; this.grid.options.features && h < this.grid.options.features.length; h++) {
                        if (this.grid.options.features[h].name === "GroupBy") {
                            f = this.grid.element.data("igGridGroupBy");
                            if (f && f.options.groupedColumns && f.options.groupedColumns.length > 0) {
                                m = false
                            }
                        }
                    }
                    if (m) {
                        this.grid.dataSource.settings.sorting.expressions = [
                            {
                                fieldName: c,
                                dir: n.currentSortDirection.startsWith("asc") ? "asc" : "desc"
                            }
                        ]
                    } else {
                        o = this.grid.dataSource.settings.sorting.expressions;
                        for (h = 0; h < o.length; h++) {
                            if (o[h].isGroupBy === true) {
                                k.push(o[h])
                            }
                        }
                        k.push({
                            fieldName: c,
                            dir: n.currentSortDirection.startsWith("asc") ? "asc" : "desc"
                        });
                        this.grid.dataSource.settings.sorting.expressions = k
                    }
                } else {
                    for (h = 0; h < e.length; h++) {
                        if (e[h].fieldName === c) {
                            e.splice(h, 1)
                        }
                    }
                    this.grid.dataSource.settings.sorting.expressions = e.concat([
                        {
                            fieldName: c,
                            dir: n.currentSortDirection.startsWith("asc") ? "asc" : "desc"
                        }
                    ])
                }
                l = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                if (l) {
                    this.grid.element.trigger("iggriduisoftdirty", {
                        owner: this
                    });
                    this._currentHeader = g;
                    this._currentIndex = j;
                    if (this.options.type === "remote") {
                        if (!b) {
                            this._shouldFireColumnSorted = true
                        }
                        this.grid.dataSource.dataBind()
                    } else {
                        this.grid.dataSource.sort(this.grid.dataSource.settings.sorting.expressions, n.currentSortDirection);
                        this.grid._renderData();
                        if (!b) {
                            this._trigger(this.events.columnSorted, null, {
                                columnKey: c,
                                direction: n.currentSortDirection,
                                owner: this
                            })
                        }
                    }
                    this._curColKey = c;
                    this._curSortDir = n.currentSortDirection
                }
            }
        },

        sortMultiple: function () {
            var e = this, d, b = this.grid.dataSource.settings.sorting.expressions, c;
            d = this.grid._trigger(this.grid.events.dataBinding, null, {
                owner: this.grid
            });
            if (d) {
                a.each(this.grid.options.columns, function (k, g) {
                    var j, h, f = g.key;
                    c = a("#" + e.grid.element[0].id + "_" + f);
                    for (j = 0; j < b.length; j++) {
                        if (b[j].fieldName === f) {
                            break
                        }
                    }
                    h = e._findColumnSetting(f);
                    if (h) {
                        if (j === b.length) {
                            h.currentSortDirection = undefined
                        } else {
                            h.currentSortDirection = b[j].dir
                        }
                    }
                    e._applySortStyles(c, k)
                });
                this.grid.element.trigger("iggriduisoftdirty", {
                    owner: this
                });
                if (this.options.type === "remote" || this._isResetClick === true) {
                    this.grid.dataSource.dataBind();
                    this._isResetClick = false
                } else {
                    this.grid.dataSource.sort(this.grid.dataSource.settings.sorting.expressions);
                    this.grid._trigger(this.grid.events.dataBound, null, {
                        owner: this.grid
                    });
                    this.grid._renderData()
                }
            }
        },

        unsortColumn: function (g, e) {
            if (this.options.mode === "single") {
                return
            }
            var c, d, h = true, j, f, b = false;
            if (a.type(g) === "number") {
                c = this.grid.options.columns[g].key
            } else {
                c = g;
                for (f = 0; f < this.grid.options.columns.length; f++) {
                    if (this.grid.options.columns[f].key === c) {
                        g = f;
                        break
                    }
                }
            }
            d = this.grid.dataSource.settings.sorting.expressions;
            j = this._findColumnSetting(c);
            if (j === null || j === undefined) {
                return
            }
            if (j && j.allowSorting === false) {
                return
            }
            j.currentSortDirection = undefined;
            for (f = 0; f < d.length; f++) {
                if (d[f].fieldName === c) {
                    d.splice(f, 1)
                }
            }
            this._currentIndex = null;
            this._currentHeader = null;
            this._applySortStyles(a("#" + this.grid.element[0].id + "_" + c), g);
            h = this.grid._trigger(this.grid.events.dataBinding, null, {
                owner: this.grid
            });
            if (h) {
                this.grid.element.trigger("iggriduisoftdirty", {
                    owner: this
                });
                this._currentHeader = e;
                if (this.options.type === "remote") {
                    if (!b) {
                        this._shouldFireColumnSorted = true
                    }
                    this.grid.dataSource.dataBind()
                } else {
                    this.grid.dataSource.sort(this.grid.dataSource.settings.sorting.expressions);
                    this.grid._trigger(this.grid.events.dataBound, null, {
                        owner: this.grid
                    });
                    this.grid._renderData();
                    if (!b) {
                        this._trigger(this.events.columnSorted, null, {
                            columnKey: c,
                            direction: j.currentSortDirection,
                            owner: this
                        })
                    }
                }
                this._curColKey = c;
                this._curSortDir = j.currentSortDirection
            }
        },

        _excludeExpr: function (d) {
            var b = this.grid.dataSource.settings.sorting.expressions, c;
            for (c = 0; c < b.length; c++) {
                if (b[c].fieldName === d) {
                    a.ig.removeFromArray(b, c)
                }
            }
        },

        _applySortStyles: function (g, k, c, j) {
            var p, b, m, s, l, h, q, e, d = this.grid.options.columns[k], f = 0, r = this.options.sortedColumnTooltip, n = r.replace("${direction}", a.ig.GridSorting.locale.ascending), o = r.replace("${direction}", a.ig.GridSorting.locale.descending);
            if (this.grid.options.virtualizationMode === "fixed" && (this.grid.options.virtualization === true || this.grid.options.columnVirtualization === true)) {
                s = k - this.grid._startColIndex
            } else {
                s = k
            }
            p = g.find(".ui-iggrid-colindicator");
            if (p.length === 0) {
                p = a("<span></span>").addClass(this.css.sortIndicator)
            }
            m = g.find(".ui-iggrid-indicatorcontainer");
            if (m.length === 0) {
                m = a("<div></div>").appendTo(g).addClass("ui-iggrid-indicatorcontainer")
            }
            m.append(p);
            f = g.closest("thead").find(".ui-iggrid-header[data-skip=true]").length;
            l = s + f + 1;
            q = l;
            for (h = 0; h < this.grid.options.columns.length; h++) {
                if (h + f < l && this.grid.options.columns[h].hidden) {
                    q--
                }
            }
            l = q;
            if (c !== null && c !== undefined) {
                for (h = 0; h < this.options.columnSettings.length; h++) {
                    if (this.options.columnSettings[h].columnKey === c) {
                        e = this.options.columnSettings[h];
                        break
                    }
                }
            } else {
                e = this.options.columnSettings[k]
            }
            if (this.grid.options.fixedHeaders !== true) {
                b = g.closest("thead").parent().find("tbody tr td:nth-child(" + l + ")")
            } else {
                if (this.options.applySortedColumnCss !== false) {
                    b = this.grid.element.find("tr td:nth-child(" + l + ")")
                }
            }
            if (e !== undefined && e.currentSortDirection !== undefined && (!d || (d && d.hidden !== true))) {
                if (e.currentSortDirection.indexOf("asc") !== -1) {
                    p.removeClass(this.css.sortIndicatorDescending).addClass(this.css.sortIndicatorAscending);
                    g.removeClass(this.css.descendingColumnHeader).addClass(this.css.ascendingColumnHeader);
                    g.attr("title", n);
                    if (this.options.applySortedColumnCss !== false && j !== true) {
                        b.removeClass(this.css.descendingColumn).addClass(this.css.ascendingColumn)
                    }
                } else {
                    p.removeClass(this.css.sortIndicatorAscending).addClass(this.css.sortIndicatorDescending);
                    g.removeClass(this.css.ascendingColumnHeader).addClass(this.css.descendingColumnHeader);
                    g.attr("title", o);
                    if (this.options.applySortedColumnCss !== false && j !== true) {
                        b.removeClass(this.css.ascendingColumn).addClass(this.css.descendingColumn)
                    }
                }
            } else {
                g.attr("title", this.options.unsortedColumnTooltip);
                p = g.parent("tr").find("th:nth-child(" + l + ") .ui-iggrid-colindicator");
                p.removeClass(this.css.sortIndicatorAscending);
                p.removeClass(this.css.descendingColumnHeader)
            }
        },

        _clearSortStates: function (c, f) {
            var e, b = this.options.columnSettings, h = f, d = 0, g = this.options.mode === "single";
            for (e = 0; e < this.grid.options.columns.length; e++) {
                if (e < f && this.grid.options.columns[e].hidden) {
                    h--;
                    d++
                }
            }
            f = h;
            for (e = 0; e < this.options.columnSettings.length; e++) {
                if (b[e].allowSorting !== false) {
                    if (f !== undefined && b[e].columnIndex !== f) {
                        delete b[e].currentSortDirection;
                        this._clearSortState(c, b[e].columnIndex)
                    }
                    if (this.grid._detachedHeaderCells && g && b[e].columnKey && this.grid._detachedHeaderCells[b[e].columnKey]) {
                        if (b[e].currentSortDirection !== undefined && b[e].currentSortDirection !== null) {
                            delete b[e].currentSortDirection
                        }
                        this._clearHeaderCellSortState(this.grid._detachedHeaderCells[b[e].columnKey][0])
                    }
                }
            }
        },

        _clearSortState: function (c, d) {
            var e, b, f, g;
            if (this.grid._isMultiColumnGrid === true) {
                g = this.grid._headerCells;
                f = g[d];
                if (f === undefined) {
                    return
                }
            } else {
                g = this.grid.headersTable().find("thead > tr").first().find("th").not("[data-skip=true]");
                f = g.eq(d)
            }
            e = f;
            this._clearHeaderCellSortState(e);
            if (this.options.columnSettings.length > d && this.options.columnSettings[d].allowSorting) {
                f.attr("title", this.options.unsortedColumnTooltip)
            } else {
                f.attr("title", "")
            }
            if (this.options.applySortedColumnCss !== false) {
                if (this.grid.options.fixedHeaders !== true) {
                    b = c.closest("thead").parent().find("tbody tr td:nth-child(" + (d + 1) + ")")
                } else {
                    if (this.options.applySortedColumnCss !== false) {
                        b = this.grid.element.find("tr td:nth-child(" + (d + 1) + ")")
                    }
                }
                b.removeClass(this.css.descendingColumn).removeClass(this.css.ascendingColumn)
            }
        },

        _clearHeaderCellSortState: function (c) {
            var b = c.find(".ui-iggrid-colindicator");
            if (b.hasClass("ui-iggrid-colindicator-desc") || b.hasClass("ui-iggrid-colindicator-asc")) {
                b.removeClass(this.css.sortIndicatorDescending).removeClass(this.css.sortIndicatorAscending);
                c.removeClass(this.css.ascendingColumnHeader).removeClass(this.css.descendingColumnHeader).removeClass(this.css.sortableColumnHeaderFocus)
            }
        },

        _initDefaultSettings: function () {
            var p = [], o, d = this.options.columnSettings, g, m, n, c = 0, e = [], f, l = false, b, h = (this.grid._hasUnboundColumns === true && this.options.type === "remote");
            if (this.grid.dataSource.settings.sorting.expressions !== null && this.grid.dataSource.settings.sorting.expressions !== undefined) {
                e = this.grid.dataSource.settings.sorting.expressions
            }
            f = e.length;
            if (this.grid.options.columns && this.grid.options.columns.length > 0) {
                for (g = 0; g < this.grid.options.columns.length; g++) {
                    b = true;
                    if (h && this.grid.getUnboundColumnByKey(this.grid.options.columns[g].key) !== null) {
                        b = false
                    }
                    p[g] = {
                        columnIndex: c,
                        columnKey: this.grid.options.columns[g].key,
                        allowSorting: b
                    };
                    if (this.grid.options.columns[g].hidden !== true) {
                        c++
                    }
                }
            }
            for (g = 0; g < d.length; g++) {
                for (o in d[g]) {
                    if (d[g].hasOwnProperty(o) && o !== "columnKey" && o !== "columnIndex") {
                        if (o === "userSet_currentSortDirection") {
                            if (d[g].userSet_currentSortDirection === "undefined") {
                                delete d[g].currentSortDirection
                            } else {
                                d[g].currentSortDirection = d[g].userSet_currentSortDirection
                            }
                        } else {
                            if (o === "userSet_allowSorting") {
                                d[g].allowSorting = d[g][o];
                                delete d[g][o]
                            }
                        }
                    }
                }
            }
            for (g = 0; g < d.length; g++) {
                for (m = 0; m < p.length; m++) {
                    if (p[m].columnKey === d[g].columnKey || p[m].columnIndex === d[g].columnIndex) {
                        break
                    }
                }
                if (m === p.length) {
                    continue
                }
                for (o in d[g]) {
                    if (d[g].hasOwnProperty(o) && o !== "columnKey" && o !== "columnIndex" && !o.startsWith("userSet")) {
                        p[m][o] = d[g][o];
                        p[m]["userSet_" + o] = d[g][o];
                        if (o === "currentSortDirection" && d[g][o]) {
                            if (a.type(p[m].columnKey) !== "number") {
                                l = false;
                                if (f > 0) {
                                    for (n = 0; n < f; n++) {
                                        if (e[n].fieldName === p[m].columnKey) {
                                            if (e[n].isGroupBy === true) {
                                                l = true
                                            } else {
                                                e.splice(n, 1)
                                            }
                                            break
                                        }
                                    }
                                }
                                if (l === true) {
                                    continue
                                }
                                e.push({
                                    fieldName: p[m].columnKey,
                                    dir: d[g][o].startsWith("asc") ? "asc" : "desc"
                                })
                            } else {
                                e.push({
                                    fieldIndex: p[m].columnKey,
                                    dir: d[g][o].startsWith("asc") ? "asc" : "desc"
                                })
                            }
                        }
                    }
                }
            }
            for (g = 0; g < p.length; g++) {
                if (!p[g].hasOwnProperty("currentSortDirection")) {
                    p[g].userSet_currentSortDirection = "undefined"
                }
            }
            this.options.columnSettings = p;
            this.grid.dataSource.settings.sorting.expressions = e;
            this.grid.dataSource.settings.sorting.defaultFields = e
        },

        _headerCellRendered: function (d, g) {
            var c = this._findColumnSetting(g.columnKey), f, b, e = this.grid.element.data("igGridFeatureChooser");
            if (d.target.id !== this.grid.element[0].id) {
                return
            }
            if (g.isMultiColumnHeader === true) {
                return
            }
            if (g.columnKey && c) {
                this._headers.push({
                    header: g.th,
                    index: c.columnIndex
                });
                if (c.allowSorting !== false) {
                    g.th.addClass(this.css.sortableColumnHeader);
                    if (c.currentSortDirection === undefined || c.currentSortDirection === null) {
                        g.th.attr("title", this.options.unsortedColumnTooltip)
                    } else {
                        g.th.attr("title", c.currentSortDirection.startsWith("asc") ? this.options.sortedColumnTooltip.replace("${direction}", a.ig.GridSorting.locale.ascending) : this.options.sortedColumnTooltip.replace("${direction}", a.ig.GridSorting.locale.descending))
                    }
                    a("<span></span>").appendTo(g.th).addClass(this.css.sortIndicator);
                    a(g.th).wrapInner('<a href="#"></a>');
                    if (c.currentSortDirection !== undefined) {
                        this._applySortStyles(g.th, c.columnIndex)
                    }
                } else {
                    a(g.th).wrapInner('<a href="#"></a>')
                }
            }
            if ((this.options.mode !== "single") && !this._featureChooserInitialized) {
                this._featureChooserInitialized = true;
                this._hidingIconColumnKeys = [];
                for (f = 0; f < this.grid.options.columns.length; f++) {
                    b = this.grid.options.columns[f];
                    if (this._getColumnSettingsByIndex(f).allowSorting) {
                        if (e && e._shouldRenderInFeatureChooser(b.key) === true) {
                            e._renderInFeatureChooser(b.key, {
                                name: "Sorting",
                                text: this.options.featureChooserText,
                                secondaryIconClass: this.css.featureChooserModalDialogIcon,
                                method: a.proxy(this.openMultipleSortingDialog, this),
                                groupName: "modaldialog",
                                groupOrder: 3,
                                order: 2
                            })
                        }
                    }
                }
            }
        },

        _columnsRearranged: function (b, c) {
            this._initDefaultSettings()
        },

        _columnMap: function () {
            var c = this, b = (c.options.mode !== "single");
            return a.map(this.grid.options.columns, function (e, f) {
                var d = false;
                if (b && c._getColumnSettingsByIndex(f).allowSorting) {
                    d = true
                }
                return {
                    columnKey: e.key,
                    enabled: d
                }
            })
        },

        _findColumnSetting: function (c) {
            var b;
            for (b = 0; b < this.options.columnSettings.length; b++) {
                if (this.options.columnSettings[b].columnKey === c) {
                    return this.options.columnSettings[b]
                }
            }
        },

        _dataRendered: function () {
            if (!this._loadingIndicator) {
                this._initLoadingIndicator()
            }
            if (this._shouldFireColumnSorted) {
                this._trigger(this.events.columnSorted, null, {
                    columnKey: this._curColKey,
                    direction: this._curSortDir,
                    owner: this
                });
                this._shouldFireColumnSorted = false
            }
            this._loadingIndicator.hide();
            if (this._currentIndex !== undefined && this._currentIndex !== null && this._currentHeader !== undefined && this._currentHeader !== null) {
                this._applySortStyles(this._currentHeader, this._currentIndex)
            }
            if (this._hc === undefined) {
                this._hc = this.grid.container().find(".ui-iggrid-expandheadercell").length > 0
            }
            if (this.grid.options.rowVirtualization || this.grid.options.virtualization) {
                a("#" + this.grid.element.attr("id") + "_scrollContainer").scrollTop(0)
            }
        },

        _onUIDirty: function (f, b) {
            var h, k, g = this.grid.dataSource.settings.sorting.expressions, d = this.grid.dataSource.settings.sorting.defaultFields, c = this.options.columnSettings, l = false;
            if (b.owner === this || b.owner.element[0].id !== this.element[0].id) {
                return
            }
            this._currentIdentifier = null;
            this._currentIndex = null;
            this._currentHeader = null;
            this._clearUi(true);
            for (h = 0; h < g.length; h++) {
                l = false;
                for (k = 0; k < c.length; k++) {
                    if (c[k].columnKey === g[h].fieldName && c[k].userSet_currentSortDirection) {
                        l = true;
                        break
                    }
                }
                if (!l) {
                    if (g.length > h) {
                        a.ig.removeFromArray(g, h)
                    }
                    if (d.length > h) {
                        a.ig.removeFromArray(d, h)
                    }
                }
            }
        },

        _clearUi: function (e) {
            var d, c, b;
            for (d = 0; this._headers && d < this._headers.length; d++) {
                b = this.options.columnSettings[d].userSet_currentSortDirection;
                if (b === undefined || b === null || b === "undefined") {
                    this._clearSortState(this._headers[d].header, d);
                    if (this.options.mode !== "single") {
                        delete this.options.columnSettings[d].currentSortDirection;
                        this._excludeExpr(this.options.columnSettings[d].columnKey)
                    }
                } else {
                    this._applySortStyles(this._headers[d].header, d)
                }
                c = this._headers[d].header;
                c.removeClass(this.css.sortableColumnHeaderActive).removeClass(this.css.sortableColumnHeaderHover).removeClass(this.css.sortableColumnAscending).removeClass(this.css.sortableColumnDescending).addClass(this.grid.css.headerClass);
                if (this.options.columnSettings[d].allowSorting) {
                    c.addClass(this.css.sortableColumnHeader)
                }
            }
        },

        _virtualHorizontalScroll: function (e, b) {
            var k = b.startColIndex, d = b.endColIndex, g, h, c = this.options.columnSettings, f, l = this.grid.headersTable().find("thead > tr").first().find("th").not("[data-skip=true]"), m = this.grid._visibleColumns();
            for (g = 0; g < l.length; g++) {
                f = l.eq(g);
                this._clearSortState(f, g);
                f.removeClass(this.css.sortableColumnHeaderActive).removeClass(this.css.sortableColumnHeaderHover).removeClass(this.css.sortableColumnAscending).removeClass(this.css.sortableColumnDescending).addClass(this.grid.css.headerClass).addClass(this.css.sortableColumnHeader)
            }
            for (g = k; g <= d; g++) {
                f = l.eq(g - k);
                f.data("columnIndex", g);
                for (h = 0; h < c.length; h++) {
                    if (c[h].currentSortDirection && c[h].columnKey === m[g].key) {
                        this._applySortStyles(f, g)
                    }
                }
            }
        },

        _columnsCollectionModified: function (g, b) {
            var k, m, h, e, f, c, d, l;
            for (k = 0; k < this.options.columnSettings.length; k++) {
                m = 0;
                h = false;
                for (m = 0; m < this.grid._visibleColumns().length; m++) {
                    if (this.grid._visibleColumns()[m].key === this.options.columnSettings[k].columnKey) {
                        h = true;
                        e = this.grid._visibleColumns()[m].key;
                        break
                    }
                }
                if (h) {
                    this.options.columnSettings[k].columnIndex = m;
                    f = this._findColumnSetting(e);
                    if (f && f.currentSortDirection !== undefined && this.options.applySortedColumnCss !== false) {
                        c = a("#" + this.grid.element[0].id + "_" + e);
                        this._applySortStyles(c, c.data("columnIndex"), e, true)
                    }
                }
            }
            if (this._currentIdentifier) {
                if (a.type(this._currentIdentifier) === "number") {
                    if (this._currentIndex !== undefined && this._currentIndex !== null && this._currentHeader !== undefined && this._currentHeader !== null) {
                        this._applySortStyles(this._currentHeader, this._currentIndex)
                    }
                } else {
                    d = a("#" + this.grid.element[0].id + "_" + this._currentIdentifier);
                    l = d.data("columnIndex");
                    if (a.type(l) === "number") {
                        this._applySortStyles(d, l, this._currentIdentifier)
                    }
                }
            }
            a("#" + this.element[0].id + " thead th").removeClass(this.css.sortableColumnHeaderHover)
        },

        destroy: function () {
            var d, b, c, f, g, e = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog");
            if (!this.grid) {
                return
            }
            a("#" + this.element[0].id).undelegate("thead th", "dragstart", this._dragStartHandler);
            a("#" + this.element[0].id).undelegate("thead th", "mouseover", this._mouseOverHandler);
            a("#" + this.element[0].id).undelegate("thead th", "mouseout", this._mouseOutHandler);
            a("#" + this.element[0].id).undelegate("thead th", "click", this._clickHandler);
            a(document).undelegate("#" + this.element[0].id + "_headers thead th", "dragstart", this._dragStartHandler);
            a(document).undelegate("#" + this.element[0].id + "_headers thead th", "mouseover", this._mouseOverHandler);
            a(document).undelegate("#" + this.element[0].id + "_headers thead th", "mouseout", this._mouseOutHandler);
            a(document).undelegate("#" + this.element[0].id + "_headers thead th", "click", this._clickHandler);
            a("#" + this.element[0].id).undelegate("thead th a", "keydown", this._keyDownHandler);
            a("#" + this.element[0].id).undelegate("thead th a", "focus", this._focusHandler);
            a("#" + this.element[0].id).undelegate("thead th a", "blur", this._blurHandler);
            a(document).undelegate("#" + this.element[0].id + "_headers thead th a", "keydown", this._keyDownHandler);
            a(document).undelegate("#" + this.element[0].id + "_headers thead th a", "focus", this._focusHandler);
            a(document).undelegate("#" + this.element[0].id + "_headers thead th a", "blur", this._blurHandler);
            this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.unbind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler);
            this.grid.element.unbind("iggriduidirty", this._uiDirtyHandler);
            this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.unbind("iggridcolumnmovingcolumnmoved", this._columnsRearangedHandler);
            delete this._blurHandler;
            delete this._clickHandler;
            delete this._headerCellRenderedHandler;
            delete this._focusHandler;
            delete this._keyDownHandler;
            delete this._mouseOutHandler;
            delete this._mouseOverHandler;
            delete this._dragStartHandler;
            delete this._uiDirtyHandler;
            delete this._virtualHorizontalScrollHandler;
            delete this._headerRenderedHandler;
            delete this._columnsRearangedHandler;
            this.grid.element.find(".ui-iggrid-colasc").removeClass("ui-iggrid-colasc ui-state-highlight");
            this.grid.element.find(".ui-iggrid-coldesc").removeClass("ui-iggrid-coldesc ui-state-highlight");
            this._clearUi(true);
            for (d = 0; this._headers && d < this._headers.length; d++) {
                c = this._headers[d].header;
                c.removeClass("ui-iggrid-sortableheader ui-state-default ui-state-active ui-state-hover ui-state-focus");
                c.attr("title", "");
                f = c.find("a span");
                g = f.text();
                b = c.find("a");
                a("<span>" + g + "</span>").appendTo(c).addClass("ui-iggrid-headertext");
                b.remove()
            }
            this._headers = null;
            e.igGridModalDialog("getCaptionButtonContainer");
            e.remove();
            a.Widget.prototype.destroy.apply(this, arguments);
            return this
        },

        _renderMultipleSortingDialog: function () {
            var b, g = this, f = this.options, e = this.grid.element[0].id + "_multiplesorting_modalDialog", c, d;
            a("#" + e).remove();
            d = a("<div></div>").appendTo("body").attr("id", e);
            d.igGridModalDialog({
                buttonApplyText: f.modalDialogButtonApplyText,
                buttonCancelText: f.modalDialogButtonCancelText,
                renderFooterButtons: !f.modalDialogSortOnClick,
                modalDialogCaptionText: f.modalDialogCaptionText,
                modalDialogWidth: f.modalDialogWidth,
                modalDialogHeight: f.modalDialogHeight,
                animationDuration: f.modalDialogAnimationDuration,
                gridContainer: this.grid.container(),
                modalDialogOpening: function (i, h) {
                    var j = g._trigger(g.events.modalDialogOpening, null, {
                        modalDialogElement: d,
                        owner: g
                    });
                    if (j) {
                        g._multiplesortingDialogOpening(i, h);
                        g._trigger(g.events.modalDialogOpened, null, {
                            modalDialogElement: d,
                            owner: g
                        })
                    }
                    return j
                },
                modalDialogMoving: function (h, i) {
                    g._trigger(g.events.modalDialogMoving, null, {
                        modalDialogElement: h.target,
                        owner: g,
                        originalPosition: i.originalPosition,
                        position: i.position
                    })
                },
                modalDialogClosing: function (i, h) {
                    return g._trigger(g.events.modalDialogClosing, null, {
                        modalDialogElement: d,
                        owner: g
                    })
                },
                modalDialogClosed: function (i, h) {
                    g._trigger(g.events.modalDialogClosed, null, {
                        modalDialogElement: d,
                        owner: g
                    })
                }
            });
            if (f.modalDialogSortOnClick) {
                c = d.igGridModalDialog("getCaptionButtonContainer");
                a("<span></span>").bind("click.hiding",function (h) {
                    d.igGridModalDialog("closeModalDialog", true);
                    h.preventDefault();
                    h.stopPropagation();
                    return false
                }).addClass("ui-icon ui-icon-closethick").appendTo(a("<a></a>").appendTo(c).attr("title", a.ig.GridHiding.locale.columnChooserCloseButtonTooltip).attr("href", "#").attr("role", "button").addClass("ui-dialog-titlebar-close ui-corner-all"))
            } else {
                c = d.igGridModalDialog("getCaptionButtonContainer");
                b = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog_footer_buttonok");
                b.bind("igbuttonclick", function (h) {
                    g._multiplesortingDialogButtonOKClick(h)
                })
            }
        },

        openMultipleSortingDialog: function () {
            var b = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog");
            b.igGridModalDialog("openModalDialog")
        },

        closeMultipleSortingDialog: function () {
            var b = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog");
            b.igGridModalDialog("closeModalDialog")
        },

        _multiplesortingDialogOpening: function () {
            this._tempExpr = this.grid.dataSource.settings.sorting.expressions.slice(0);
            this.renderMultipleSortingDialogContent(true)
        },

        renderMultipleSortingDialogContent: function (h) {
            var b, c, d, g, k, m = true, p = this, e = this.grid.options.columns, f = this.css, n = this.grid.dataSource.settings.sorting.expressions, o = n.length, q = [], l = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog");
            if (h) {
                m = this._trigger(this.events.modalDialogContentsRendering, null, {
                    modalDialogElement: l,
                    owner: this
                })
            }
            if (m) {
                this.removeDialogClearButton();
                b = l.igGridModalDialog("getContent");
                b.empty();
                c = a("<div></div>").attr("id", this.grid.element[0].id + "_multiplesorting_modalDialog_sortedcolumns").addClass(f.dialogSortedColumns).appendTo(b);
                d = a("<div></div>").attr("id", this.grid.element[0].id + "_multiplesorting_modalDialog_unsortedcolumns").addClass(f.dialogUnsortedColumns).appendTo(b);
                a("<ul></ul>").addClass(f.dialogSortedColumnsList).appendTo(c);
                a("<ul></ul>").addClass(f.dialogUnsortedColumnsList).appendTo(d);
                a.each(e, function (r, i) {
                    var s, j;
                    s = p._getColumnSettingsByIndex(r);
                    if (s === null || s === undefined || s.allowSorting === false) {
                        return true
                    }
                    j = s.columnKey || s.columnIndex || i.key;
                    for (g = 0; g < p._tempExpr.length; g++) {
                        if (p._tempExpr[g].fieldName === j) {
                            break
                        }
                    }
                    if (g !== p._tempExpr.length) {
                        q.push({
                            column: i,
                            columnIndex: s.columnIndex,
                            dir: p._tempExpr[g].dir,
                            columnIdentifier: j
                        })
                    } else {
                        p._renderDialogUnsortedColumn(i, s.columnIndex, s.currentSortDirection, j)
                    }
                });
                for (g = 0; g < o; g++) {
                    for (k = 0; k < q.length; k++) {
                        if (n[g].fieldName === q[k].columnIdentifier) {
                            p._renderDialogSortedColumn(q[k].column, q[k].columnIndex, q[k].dir, q[k].columnIdentifier);
                            break
                        }
                    }
                }
                if (h) {
                    this._trigger(this.events.modalDialogContentsRendered, null, {
                        modalDialogElement: l,
                        owner: this
                    })
                }
                if (this._checkRenderButtonReset()) {
                    this._renderDialogButtonClearAll()
                }
            }
        },

        _addSlideButtonSortingColumns: function () {
            var e = this.css, g = this.options, c = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog_sortedcolumns"), d = this.grid.element[0].id + "_multiplesorting_modalDialog_slidebutton", b, f;
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

        _renderDialogSortedColumn: function (h, j, l, i) {
            var p = this, d, k = this.css, b, c, m, n = this.options, f = this.grid.element[0].id + "_" + i + "_multiplesorting_modalDialog_sortedcolumns_buttonascdesc", g = this.grid.element[0].id + "_" + i + "_multiplesorting_modalDialog_sortedcolumns_buttonunsort", e = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog_sortedcolumns ul");
            d = a("<li></li>").attr("id", p.grid.element[0].id + "_" + i + "_multiplesorting_sorted_li").addClass(k.dialogSortedColumnsItem);
            d.appendTo(e);
            if (j !== null && j !== undefined) {
                d.attr("li-order", j)
            }
            m = '<span id="' + f + '" class="' + k.dialogButtonAsc + '" role="button" title="' + n.modalDialogCaptionButtonDesc + '" >	<span class="' + k.dialogButtonAscIcon + '"></span></span><span class="' + k.dialogSortedColumnTextContainer + '">' + h.headerText + '</span><button id="' + g + '" class="' + k.dialogButtonUnsort + '" role="button" title="' + n.modalDialogCaptionButtonUnsort + '" >	<span class="' + k.dialogButtonUnsortContainer + '"></span>	<span class="ui-button-text">' + n.modalDialogCaptionButtonUnsort + "</span></button>";
            d.bind({
                click: function (q, o) {
                    p._currentIdentifier = i;
                    p._dialogButtonAscDescClick(i);
                    if (p._checkRenderButtonReset()) {
                        p._renderDialogButtonClearAll()
                    } else {
                        p.removeDialogClearButton()
                    }
                    q.preventDefault();
                    q.stopPropagation()
                }
            });
            d.html(m);
            b = a("#" + f);
            c = a("#" + g);
            if (l !== undefined) {
                if (l.indexOf("asc") !== -1) {
                    p._setDialogButtonAscDesc(true, i);
                    p._setTempExpr(i, "asc")
                } else {
                    p._setDialogButtonAscDesc(false, i);
                    p._setTempExpr(i, "desc")
                }
            } else {
                p._setDialogButtonAscDesc(true, i);
                p._setTempExpr(i, "asc")
            }
            c.bind({
                click: function (q, o) {
                    var s, r = a("#" + p.grid.element[0].id + "_multiplesorting_modalDialog");
                    s = p._trigger(p.events.modalDialogButtonUnsortClick, q, {
                        modalDialogElement: r,
                        owner: p,
                        columnKey: i
                    });
                    if (s) {
                        d.remove();
                        if (n.modalDialogSortOnClick === true) {
                            p.unsortColumn(i)
                        } else {
                            p._setTempExpr(i)
                        }
                        p._renderDialogUnsortedColumn(h, j, l, i);
                        if (p._checkRenderButtonReset()) {
                            p._renderDialogButtonClearAll()
                        } else {
                            p.removeDialogClearButton()
                        }
                    }
                    q.preventDefault();
                    q.stopPropagation()
                },
                mouseover: function (q, o) {
                    if (!a(this).hasClass(k.dialogButtonsHover)) {
                        a(this).addClass(k.dialogButtonsHover)
                    }
                },
                mouseout: function (q, o) {
                    if (a(this).hasClass(k.dialogButtonsHover)) {
                        a(this).removeClass(k.dialogButtonsHover)
                    }
                }
            })
        },

        _dialogButtonAscDescClick: function (c) {
            var g = this.options, f, e = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog"), b = a("#" + this.grid.element[0].id + "_" + c + "_multiplesorting_modalDialog_sortedcolumns_buttonascdesc"), d = b.data("isAsc");
            f = this._trigger(this.events.modalDialogSortingChanged, null, {
                modalDialogElement: e,
                owner: this,
                columnKey: c,
                isAsc: !d
            });
            if (f) {
                if (d === true) {
                    if (g.modalDialogSortOnClick === true) {
                        this.sortColumn(c, "descending")
                    } else {
                        this._setTempExpr(c, "desc")
                    }
                    this._setDialogButtonAscDesc(false, c)
                } else {
                    if (g.modalDialogSortOnClick === true) {
                        this.sortColumn(c, "ascending")
                    } else {
                        this._setTempExpr(c, "asc")
                    }
                    this._setDialogButtonAscDesc(true, c)
                }
            }
        },

        _setDialogButtonAscDesc: function (g, e) {
            var f = this.css, d = this.grid.element[0].id + "_" + e + "_multiplesorting_modalDialog_sortedcolumns_buttonascdesc", b = a("#" + d), c = b.find("span:eq(0)");
            b.data("isAsc", g);
            if (g === true) {
                b.attr("title", this.options.modalDialogCaptionButtonDesc).removeClass(f.dialogButtonDesc).addClass(f.dialogButtonAsc);
                c.removeClass(f.dialogButtonDescIcon).addClass(f.dialogButtonAscIcon);
                this._setTempExpr(e, "asc")
            } else {
                b.attr("title", this.options.modalDialogCaptionButtonAsc).removeClass(f.dialogButtonAsc).addClass(f.dialogButtonDesc);
                c.removeClass(f.dialogButtonAscIcon).addClass(f.dialogButtonDescIcon);
                this._setTempExpr(e, "desc")
            }
        },

        _setTempExpr: function (b, c) {
            var e, d = this._tempExpr;
            for (e = 0; e < d.length; e++) {
                if (d[e].fieldName === b) {
                    d.splice(e, 1);
                    if (c === null || c === undefined) {
                        this._tempExpr = d;
                        return
                    }
                }
            }
            this._tempExpr = d.concat([
                {
                    fieldName: b,
                    dir: c
                }
            ])
        },

        _renderDialogUnsortedColumn: function (e, g, i, f) {
            var k = this, c, b, j = this.options, h = this.css, d = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog_unsortedcolumns ul");
            c = a("<li></li>").attr("id", k.grid.element[0].id + "_" + f + "_multiplesorting_unsorted_li").addClass(h.dialogUnsortedColumnsItem).append('<span class="' + h.dialogUnsortedColumnsSortByButton + '"><a href="#"></a></span> <span class="' + h.dialogItemText + '">' + e.headerText + "</span>");
            this._insertColumnModalDialog(d, c, g);
            if (g !== null && g !== undefined) {
                c.attr("li-order", g)
            }
            b = c.find("a:first");
            b.addClass(h.modalDialogSortByColumn);
            b.html(j.modalDialogSortByButtonText);
            c.bind({
                click: function (m, l) {
                    var o, n = a("#" + k.grid.element[0].id + "_multiplesorting_modalDialog");
                    o = k._trigger(k.events.modalDialogSortClick, m, {
                        modalDialogElement: n,
                        owner: k,
                        columnKey: f
                    });
                    if (o) {
                        c.remove();
                        k._renderDialogSortedColumn(e, g, i, f);
                        if (j.modalDialogSortOnClick) {
                            k.sortColumn(f)
                        } else {
                            if (k._checkRenderButtonReset()) {
                                k._renderDialogButtonClearAll()
                            } else {
                                k.removeDialogClearButton()
                            }
                        }
                    }
                    m.preventDefault();
                    m.stopPropagation()
                }
            })
        },

        _checkRenderButtonReset: function () {
            var e, f, c, b, d = this._tempExpr;
            this._isResetClick = false;
            for (e = 0; e < this.options.columnSettings.length; e++) {
                c = this.options.columnSettings[e];
                if (c.allowSorting === false) {
                    continue
                }
                b = c.columnKey;
                for (f = 0; f < d.length; f++) {
                    if (d[f].fieldName === b) {
                        if (c.userSet_currentSortDirection !== d[f].dir) {
                            return true
                        }
                        break
                    }
                }
                if (f === d.length && c.userSet_currentSortDirection !== "undefined") {
                    return true
                }
            }
            this._isResetClick = true;
            return false
        },

        removeDialogClearButton: function () {
            a("#" + this.grid.element[0].id + "_sorting_modalDialog_reset_button").remove()
        },

        _renderDialogButtonClearAll: function () {
            if (this.options.modalDialogSortOnClick === true) {
                return
            }
            var g = this, e = this.options, f = g.grid.element[0].id + "_sorting_modalDialog_reset_button", d = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog"), b, c;
            if (a("#" + f).length === 0) {
                b = d.igGridModalDialog("getCaptionButtonContainer");
                c = a("<button></button>").attr("id", f).appendTo(b);
                c.igButton({
                    labelText: e.modalDialogResetButtonLabel,
                    click: function (j) {
                        var l, k, h = g.options.columnSettings;
                        l = g._trigger(g.events.modalDialogButtonResetClick, j, {
                            modalDialogElement: d,
                            owner: g
                        });
                        if (l) {
                            g._tempExpr = [];
                            for (k = 0; k < h.length; k++) {
                                if (h[k].allowSorting !== false && h[k].userSet_currentSortDirection !== "undefined") {
                                    g._tempExpr.push({
                                        fieldName: h[k].columnKey,
                                        dir: h[k].userSet_currentSortDirection
                                    })
                                }
                            }
                            g.renderMultipleSortingDialogContent(false);
                            g.removeDialogClearButton();
                            g._isResetClick = true
                        }
                    }
                })
            }
        },

        _multiplesortingDialogButtonOKClick: function (c, b) {
            var f, d = a("#" + this.grid.element[0].id + "_multiplesorting_modalDialog");
            f = this._trigger(this.events.modalDialogButtonApplyClick, null, {
                modalDialogElement: d,
                owner: this,
                columnsToSort: this._tempExpr
            });
            if (f) {
                this.grid.dataSource.settings.sorting.expressions = this._tempExpr;
                this.sortMultiple();
                d.igGridModalDialog("closeModalDialog")
            }
        },

        _insertColumnModalDialog: function (d, c, j) {
            var f, b, e, g = d.find("li"), h = g.length;
            if (h === 0 || j === null || j === undefined) {
                c.appendTo(d);
                return
            }
            for (f = 0; f < h; f++) {
                b = a(g[f]);
                e = b.attr("li-order");
                if (e >= j) {
                    c.insertBefore(b);
                    break
                }
            }
            if (f === h) {
                c.appendTo(d)
            }
        },

        _getColumnSettings: function (d, e) {
            var c, b = null;
            for (c = 0; c < this.options.columnSettings.length; c++) {
                if (this.options.columnSettings[c].columnKey === e) {
                    b = this.options.columnSettings[c];
                    break
                }
                if (this.options.columnSettings[c].columnIndex === d) {
                    b = this.options.columnSettings[c];
                    break
                }
            }
            return b
        },

        _getColumnSettingsByIndex: function (b) {
            var c = this.grid.options.columns[b].key;
            return this._getColumnSettings(b, c)
        },

        _headerRendered: function (b, c) {
            if (c.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            if (this.options.mode !== "single") {
                this._renderMultipleSortingDialog()
            }
        },

        _injectGrid: function (b, c) {
            this.grid = b;
            if (this.options.type === null) {
                this.options.type = this.grid._inferOpType()
            }
            if (this.options.type) {
                this.grid.dataSource.settings.sorting.type = this.options.type
            } else {
                this.grid.dataSource.settings.sorting.type = "remote"
            }
            this.grid.dataSource.settings.sorting.caseSensitive = this.options.caseSensitive;
            this.grid.dataSource.settings.sorting.defaultFields = this.grid.dataSource.settings.sorting.expressions;
            this.grid.dataSource.settings.sorting.enabled = true;
            this.grid.dataSource.settings.sorting.sortUrlKey = this.options.sortUrlKey;
            this.grid.dataSource.settings.sorting.sortUrlAscValueKey = this.options.sortUrlKeyAscValue;
            this.grid.dataSource.settings.sorting.sortUrlDescValueKey = this.options.sortUrlKeyDescValue;
            if (a.type(this.options.customSortFunction) === "function") {
                this.grid.dataSource.settings.sorting.customFunc = this.options.customSortFunction
            }
            if (this._headerCellRenderedHandler !== null && this._headerCellRenderedHandler !== undefined) {
                this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler)
            }
            if (this._uiDirtyHandler !== null) {
                this.grid.element.unbind("iggriduidirty", this._uiDirtyHandler)
            }
            if (this._headerRenderedHandler !== null && this._headerRenderedHandler !== undefined) {
                this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler)
            }
            this._headerCellRenderedHandler = a.proxy(this._headerCellRendered, this);
            this._columnsCollectionModifiedHandler = a.proxy(this._columnsCollectionModified, this);
            this._uiDirtyHandler = a.proxy(this._onUIDirty, this);
            this._headerRenderedHandler = a.proxy(this._headerRendered, this);
            this._columnsRearangedHandler = a.proxy(this._columnsRearranged, this);
            this.grid.element.bind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this._virtualHorizontalScrollHandler = a.proxy(this._virtualHorizontalScroll, this);
            this.grid.element.bind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler);
            this.grid.element.bind("iggriduidirty", this._uiDirtyHandler);
            this.grid.element.bind("iggridcolumnscollectionmodified", this._columnsCollectionModifiedHandler);
            this.grid.element.bind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.bind("iggridcolumnmovingcolumnmoved", this._columnsRearangedHandler);
            this._initDefaultSettings();
            this._clearUi();
            this._currentActiveHeader = null;
            this._currentHeader = null;
            this._currentIndex = null;
            this._currentIdentifier = null
        }

    });

    a.extend(a.ui.igGridSorting, {
        version: "12.2.20122.1021"
    })

}(jQuery));