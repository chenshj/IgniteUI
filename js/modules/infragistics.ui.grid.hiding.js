﻿/*
 * Infragistics.Web.ClientUI Grid Column Hiding 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.ui.grid.framework.js
 *	ig.ui.shared.js
 *	ig.dataSource.js
 *	ig.util.js
 */
if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}

(function (a) {

    a.widget("ui.igGridHiding", {

        options: {
            columnSettings: [
                {
                    columnKey: null,
                    columnIndex: null,
                    allowHiding: true,
                    hidden: false
                }
            ],
            hiddenColumnIndicatorHeaderWidth: 7,
            columnChooserContainment: "owner",
            columnChooserWidth: 350,
            columnChooserHeight: "",
            dropDownAnimationDuration: 500,
            columnChooserCaptionText: a.ig.GridHiding.locale.columnChooserCaptionLabel,
            columnChooserDisplayText: a.ig.GridHiding.locale.columnChooserDisplayText,
            hiddenColumnIndicatorTooltipText: a.ig.GridHiding.locale.hiddenColumnIndicatorTooltipText,
            columnHideText: a.ig.GridHiding.locale.columnHideText,
            columnChooserShowText: a.ig.GridHiding.locale.columnChooserShowText,
            columnChooserHideText: a.ig.GridHiding.locale.columnChooserHideText,
            columnChooserHideOnClick: false,
            columnChooserResetButtonLabel: a.ig.GridHiding.locale.columnChooserResetButtonLabel,
            columnChooserAnimationDuration: 200,
            columnChooserButtonApplyText: a.ig.GridHiding.locale.columnChooserButtonApplyText,
            columnChooserButtonCancelText: a.ig.GridHiding.locale.columnChooserButtonCancelText
        },

        css: {
            columnChooser: "ui-dialog ui-draggable ui-resizable ui-iggrid-dialog ui-widget ui-widget-content ui-corner-all",
            columnChooserHeaderCaption: "ui-dialog-titlebar ui-iggrid-columnchooser-caption ui-widget-header ui-corner-top ui-helper-reset ui-helper-clearfix",
            columnChooserHeaderCaptionTitle: "ui-dialog-title ui-iggrid-columnchooser-caption-title",
            columnChooserContent: "ui-dialog-content ui-iggrid-columnchooser-content",
            hidingHeaderIndicator: "ui-iggrid-hiding-indicator",
            columnChooserHandleBar: "ui-iggrid-columnchooser-handlebar",
            hiddenColumnIndicator: "ui-iggrid-hiding-hiddencolumnindicator",
            hiddenColumnIndicatorSelected: "ui-iggrid-hiding-indicator-selected",
            hiddenColumnIndicatorMouseOver: "ui-iggrid-hiding-indicator-mouseover",
            hiddenColumnsDropDown: "ui-iggrid-featurechooser-dropdown-dialog ui-widget ui-widget-content ui-corner-all",
            hiddenColumnsDropDownList: "ui-iggrid-featurechooser-list ui-menu",
            hiddenColumnsDropDownItem: "ui-iggrid-featurechooserddlistitemicons ui-state-default",
            hiddenColumnsDropDownItemHover: "ui-iggrid-featurechooser-listitem-hover ui-state-active ui-state-hover",
            hiddenColumnsDropDownItemText: "ui-iggrid-featurechooserddlistitemtext",
            columnChooserListItems: "ui-iggrid-columnchooser-listitems",
            columnChooserItem: "ui-iggrid-columnchooser-item ui-widget-content",
            columnChooserItemHidden: "ui-iggrid-columnchooser-itemhidden",
            columnChooserHideButton: "ui-iggrid-columnchooser-hidebutton",
            columnChooserItemText: "ui-iggrid-dialog-text",
            featureChooserHidingIcon: "ui-icon ui-iggrid-icon-hide",
            featureChooserModalDialogIcon: "ui-icon ui-icon-newwin"
        },

        events: {
            columnHiding: "columnHiding",
            multiColumnHiding: "multiColumnHiding",
            columnHidden: "columnHidden",
            columnShowing: "columnShowing",
            columnShown: "columnShown",
            columnChooserOpening: "columnChooserOpening",
            columnChooserOpened: "columnChooserOpened",
            columnChooserMoving: "columnChooserMoving",
            columnChooserClosing: "columnChooserClosing",
            columnChooserClosed: "columnChooserClosed",
            columnChooserContentsRendering: "columnChooserContentsRendering",
            columnChooserContentsRendered: "columnChooserContentsRendered",
            columnChooserButtonApplyClick: "columnChooserButtonApplyClick",
            columnChooserButtonResetClick: "columnChooserButtonResetClick"
        },

        renderInFeatureChooser: true,

        _headerHashDataKey: "igGrid-hiding-hash",

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
            var c = this, b = a("#" + this.grid.element[0].id + "_hiding_modalDialog");
            this.grid.element.unbind(".hiding");
            this.grid.headersTable().find("thead > tr > th").not("[data-skip=true]").each(function () {
                var d = a(this);
                d.find("a[data-hiding-indicator=true]").remove();
                c._clearHiddenColumnIndicator(true, d);
                c._clearHiddenColumnIndicator(false, d)
            });
            a("div[data-hiding-inddropdown='" + this.grid.element[0].id + "']").remove();
            this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.unbind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler);
            this.grid.element.unbind("iggriduidirty", this._uiDirtyHandler);
            this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler);
            b.igGridModalDialog("getCaptionButtonContainer");
            b.remove();
            a.Widget.prototype.destroy.call(this);
            return this
        },

        showColumnChooser: function () {
            this._openColumnChooser(false)
        },

        hideColumnChooser: function () {
            this._closeColumnChooser(false)
        },

        showColumn: function (d, f) {
            var e, c, g, b = [];
            if (f === true) {
                c = this.grid._getMultiHeaderColumnById(d);
                if (c === null) {
                    return
                }
                g = c.children.length;
                for (e = 0; e < g; e++) {
                    b.push(c.children[e].key)
                }
                this.showMultiColumns(b)
            } else {
                this.grid.showColumn(d)
            }
        },

        hideColumn: function (d, f) {
            var e, c, g, b = [];
            if (f === true) {
                c = this.grid._getMultiHeaderColumnById(d);
                if (c === null) {
                    return
                }
                g = c.children.length;
                for (e = 0; e < g; e++) {
                    b.push(c.children[e].key)
                }
                this.hideMultiColumns(b)
            } else {
                this.grid.hideColumn(d)
            }
        },

        hideMultiColumns: function (b) {
            var d, c = b.length;
            for (d = 0; d < c; d++) {
                this.grid.hideColumn(b[d])
            }
        },

        showMultiColumns: function (b) {
            var d, c = b.length;
            for (d = 0; d < c; d++) {
                this.grid.showColumn(b[d])
            }
        },

        _showColumnFromUI: function (b) {
            var d, c, e;
            if (typeof b === "number") {
                c = b
            } else {
                d = b
            }
            e = this._trigger(this.events.columnShowing, null, {
                owner: this,
                columnKey: d,
                columnIndex: c
            });
            if (e) {
                this.grid.showColumn(b);
                this._trigger(this.events.columnShown, null, {
                    owner: this,
                    columnKey: d,
                    columnIndex: c
                })
            }
            return e
        },

        _setHiddenMultipleColumns: function (e, d) {
            var f = this, c, b;
            f.grid._loadingIndicator.show();
            setTimeout(function () {
                var h, g, j;
                for (h = 0; h < e.length; h++) {
                    g = e[h];
                    if (typeof g === "number") {
                        b = g
                    } else {
                        c = g
                    }
                    j = f._trigger(f.events.columnShowing, null, {
                        owner: f,
                        columnKey: c,
                        columnIndex: b
                    });
                    if (j) {
                        f.grid._setHidden(g, false);
                        f._trigger(f.events.columnShown, null, {
                            owner: f,
                            columnKey: c,
                            columnIndex: b
                        })
                    }
                }
                for (h = 0; h < d.length; h++) {
                    g = d[h];
                    if (f.grid._visibleColumns().length === 1) {
                        break
                    }
                    if (typeof g === "number") {
                        b = g
                    } else {
                        c = g
                    }
                    j = f._trigger(f.events.columnHiding, null, {
                        owner: f,
                        columnKey: c,
                        columnIndex: b
                    });
                    if (j) {
                        f.grid._setHidden(g, true);
                        f._trigger(f.events.columnHidden, null, {
                            owner: f,
                            columnKey: c,
                            columnIndex: b
                        })
                    }
                }
                f.grid._loadingIndicator.hide()
            }, 0)
        },

        _hideMultiColumnFromUI: function (k) {
            var j, m = this, d, b, f, c, e, l, n = 0, h = [], g = [];
            if (m.grid._visibleColumns().length === 1) {
                return false
            }
            d = this.grid._getMultiHeaderColumnById(k);
            if (d === null) {
                return
            }
            b = d.children;
            c = b.length;
            for (j = 0; j < c; j++) {
                if (!b[j].hidden) {
                    n++
                }
            }
            if (m.grid._visibleColumns().length - n < 1) {
                return false
            }
            for (j = 0; j < c; j++) {
                h.push(b[j].key)
            }
            l = this._trigger(this.events.multiColumnHiding, null, {
                owner: this,
                columnKeys: h
            });
            if (l) {
                for (j = 0; j < c; j++) {
                    f = h[j];
                    l = this._trigger(this.events.columnHiding, null, {
                        owner: this,
                        columnKey: f,
                        columnIndex: e
                    });
                    if (l) {
                        if (b[j].allowHiding && !b[j].hidden) {
                            m.grid.hideColumn(f);
                            g.push(f);
                            this._trigger(this.events.columnHidden, null, {
                                owner: this,
                                columnKey: f,
                                columnIndex: e
                            })
                        }
                    }
                }
                this._trigger(this.events.multiColumnHidden, null, {
                    owner: this,
                    columnKeys: g
                })
            }
        },

        _hideColumnFromUI: function (b) {
            var f = this, d, c, e;
            if (f.grid._visibleColumns().length === 1) {
                return false
            }
            if (typeof b === "number") {
                c = b
            } else {
                d = b
            }
            e = this._trigger(this.events.columnHiding, null, {
                owner: this,
                columnKey: d,
                columnIndex: c
            });
            if (e) {
                f.grid.hideColumn(b);
                this._trigger(this.events.columnHidden, null, {
                    owner: this,
                    columnKey: d,
                    columnIndex: c
                })
            }
            return e
        },

        _headerCellRendered: function (c, f) {
            if (f.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            if (f.isMultiColumnHeader === true) {
                return
            }
            var e, b, d = this.grid.element.data("igGridFeatureChooser");
            if (!this._featureChooserInitialized) {
                this._featureChooserInitialized = true;
                this._hidingIconColumnKeys = [];
                for (e = 0; e < this.grid.options.columns.length; e++) {
                    b = this.grid.options.columns[e];
                    if (this._getColumnSettingsByIndex(e).allowHiding) {
                        if (d._shouldRenderInFeatureChooser(b.key) === true) {
                            d._renderInFeatureChooser(b.key, {
                                name: "Hiding",
                                text: this.options.columnHideText,
                                iconClass: this.css.featureChooserHidingIcon,
                                isSelectable: false,
                                isSelected: false,
                                method: a.proxy(this._featureChooserHide, this),
                                updateOnClickAll: false,
                                groupName: "click",
                                groupOrder: 2,
                                order: 2
                            });
                            d._renderInFeatureChooser(b.key, {
                                name: "ColumnChooser",
                                text: this.options.columnChooserDisplayText,
                                secondaryIconClass: this.css.featureChooserModalDialogIcon,
                                method: a.proxy(this._featureChooserColumnChooser, this),
                                groupName: "modaldialog",
                                groupOrder: 3,
                                order: 1
                            })
                        } else {
                            this._hidingIconColumnKeys.push(b.key)
                        }
                    }
                }
            }
        },

        _featureChooserHide: function (c, b, d) {
            this._closeColumnChooser(true);
            this._hideColumnFromUI(b)
        },

        _featureChooserColumnChooser: function (c, b, d) {
            this._openColumnChooser(true)
        },

        _columnMap: function () {
            var b = this;
            return a.map(this.grid.options.columns, function (c, d) {
                return {
                    columnKey: c.key,
                    enabled: b._getColumnSettingsByIndex(d).allowHiding
                }
            })
        },

        _renderHidingColumnIcon: function (f, b, d) {
            var e = this, c = f.find(".ui-iggrid-indicatorcontainer");
            if (c.length === 0) {
                c = a("<div></div>").addClass("ui-iggrid-indicatorcontainer").appendTo(f)
            }
            a("<span>&laquo;</span>").addClass(this.css.hidingHeaderIndicator).appendTo(c).wrap(a("<a></a>").css("display", "inline").attr("data-hiding-indicator", "true").attr("href", "#").attr("title", a.ig.GridHiding.locale.hideColumnIconTooltip)).bind("click.hiding", function (g) {
                a(this).parent().mouseout();
                e._closeColumnChooser(true);
                if (d) {
                    e._hideMultiColumnFromUI(f.attr("data-mch-id"))
                } else {
                    e._hideColumnFromUI(b)
                }
                g.preventDefault();
                g.stopPropagation()
            })
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
                j = h._getColumnSettingsByKey(i.key);
                if (j.allowHiding) {
                    for (d = 0; d < f.length; d++) {
                        if (f[d].key === i.key) {
                            break
                        }
                    }
                    if (d < g) {
                        f[d].allowHiding = true;
                        f[d].visibleIndex = m;
                        f[d].settings = j
                    }
                    n.col = f[d]
                }
            })
        },

        _renderHidingIcons: function () {
            var d, b = this, c;
            if (b.grid._isMultiColumnGrid === true) {
                d = this.grid.headersTable().find("> thead > tr th").not("[data-skip=true]").not("[data-isheadercell=true]");
                this._populateMultiColumnHeadersLevel0();
                d.each(function (e) {
                    var f = a(this);
                    b._renderHidingColumnIcon(f, null, true)
                });
                c = a(this.grid._headerCells)
            } else {
                c = this.grid.headersTable().find("thead > tr > th").not("[data-skip=true]")
            }
            c.find("a[data-hiding-indicator=true]").remove();
            c.each(function (f) {
                var g = a(this), h = b.grid._visibleColumns(), i, e;
                if (b.grid.options.virtualizationMode === "fixed" && (b.grid.options.virtualization === true || b.grid.options.columnVirtualization === true)) {
                    i = (b.grid._startColIndex || 0) + f
                } else {
                    i = f
                }
                e = h[i].key;
                if (a.inArray(e, b._hidingIconColumnKeys) !== -1) {
                    b._renderHidingColumnIcon(g, e)
                }
            })
        },

        _headerRendered: function (b, c) {
            if (c.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            this._renderHidingIcons();
            this._renderColumnChooser()
        },

        _columnChooserButtonOKClick: function (f) {
            var i = this, b = i._columnsToHide, c = [], d = [], h, g = a("#" + this.grid.element[0].id + "_hiding_modalDialog");
            a.each(this.grid.options.columns, function (l, j) {
                var m, k, e;
                m = i._getColumnSettingsByIndex(l);
                if (!m.allowHiding) {
                    return
                }
                k = m.columnKey || m.columnIndex || j.key;
                e = b[k];
                if (e !== null && e !== undefined) {
                    if (e) {
                        if (j.hidden === false) {
                            c.push(k)
                        }
                    } else {
                        if (j.hidden === true) {
                            d.push(k)
                        }
                    }
                }
            });
            h = this._trigger(this.events.columnChooserButtonApplyClick, null, {
                columnChooserElement: g,
                owner: this,
                columnsToHide: c,
                columnsToShow: d
            });
            if (h) {
                i._setHiddenMultipleColumns(d, c);
                a("#" + this.grid.element[0].id + "_hiding_modalDialog").igGridModalDialog("closeModalDialog", true)
            }
        },

        isToRenderButtonReset: function () {
            var d = this, b = d._columnsToHide, c = false;
            a.each(this.grid.options.columns, function (h, f) {
                var i, g, e, j;
                i = d._getColumnSettingsByIndex(h);
                if (i && !i.allowHiding) {
                    return true
                }
                g = i.columnKey || i.columnIndex || f.key;
                e = b[g];
                if (f._initiallyHidden === true) {
                    j = true
                } else {
                    j = i.hidden
                }
                if (e !== null && e !== undefined) {
                    if (e !== j) {
                        c = true;
                        return false
                    }
                }
            });
            return c
        },

        _isVisibleColumnsNotAllowHiding: function () {
            var c = this, b = false;
            a.each(this.grid.options.columns, function (e, d) {
                var f;
                f = c._getColumnSettingsByIndex(e);
                if (f && !f.allowHiding && !d.hidden) {
                    b = true;
                    return false
                }
            });
            return b
        },

        _columnChooserOpening: function (h, d) {
            var c, j, b, l = this, k = this.options, g = this.css, f = 0, i = a("#" + this.grid.element[0].id + "_hiding_modalDialog");
            j = this._trigger(this.events.columnChooserOpening, null, {
                columnChooserElement: i,
                owner: this
            });
            if (j) {
                j = this._trigger(this.events.columnChooserContentsRendering, null, {
                    columnChooserElement: i,
                    owner: this
                });
                if (j) {
                    this.removeColumnChooserResetButton();
                    b = i.igGridModalDialog("getContent");
                    b.empty();
                    c = a("<ul></ul>").addClass(g.columnChooserListItems).appendTo(b);
                    this._columnsToHide = {};
                    a.each(this.grid.options.columns, function (p, n) {
                        var q, o, e, m;
                        q = l._getColumnSettingsByIndex(p);
                        if (!q.allowHiding) {
                            return
                        }
                        f++;
                        o = q.columnKey || q.columnIndex || n.key;
                        m = a("<li></li>").attr("id", l.grid.element[0].id + "_" + o + "_columnchooser_li").addClass(g.columnChooserItem).append('<span class="' + g.columnChooserHideButton + '"><a href="#"></a></span><span class="' + g.columnChooserItemText + '">' + n.headerText + "</span>");
                        m.appendTo(c);
                        e = m.find("a:first");
                        if (k.columnChooserHideOnClick === true) {
                            m.bind("click.hiding", function (r) {
                                var t = true, s;
                                if (e.attr("ishidden") === "1") {
                                    t = l._showColumnFromUI(o);
                                    s = false
                                } else {
                                    t = l._hideColumnFromUI(o);
                                    s = true
                                }
                                if (t) {
                                    l._renderColumnChooserHideButton(e, s)
                                }
                                r.preventDefault();
                                r.stopPropagation();
                                return false
                            })
                        } else {
                            m.bind("click.hiding", function (r) {
                                var s;
                                if (e.attr("ishidden") === "1") {
                                    s = false
                                } else {
                                    s = true
                                }
                                if (s && !l._isVisibleColumnsNotAllowHiding() && c.find("a[ishidden=1]").length === f - 1) {
                                    return
                                }
                                l._columnsToHide[o] = s;
                                l._renderColumnChooserHideButton(e, s);
                                if (l.isToRenderButtonReset()) {
                                    l.renderColumnChooserResetButton()
                                } else {
                                    l.removeColumnChooserResetButton()
                                }
                                r.preventDefault();
                                r.stopPropagation();
                                return false
                            })
                        }
                        l._columnsToHide[o] = n.hidden;
                        l._renderColumnChooserHideButton(e, n.hidden)
                    });
                    this._trigger(this.events.columnChooserContentsRendered, null, {
                        columnChooserElement: i,
                        owner: this
                    });
                    if (k.columnChooserHideOnClick === false && l.isToRenderButtonReset()) {
                        l.renderColumnChooserResetButton()
                    }
                }
                this._trigger(this.events.columnChooserOpened, null, {
                    columnChooserElement: i,
                    owner: this
                })
            }
            return true
        },

        resetHidingColumnChooser: function () {
            var b = this;
            a.each(this.grid.options.columns, function (e, c) {
                var f, d, g;
                f = b._getColumnSettingsByIndex(e);
                if (!f) {
                    return true
                }
                if (!f.allowHiding) {
                    return true
                }
                g = f.hidden;
                if (c._initiallyHidden === true) {
                    g = true
                }
                d = f.columnKey || f.columnIndex || c.key;
                b._columnsToHide[d] = g;
                b._renderColumnChooserHideButton(a("#" + b.grid.element[0].id + "_" + d + "_columnchooser_li a:first"), g)
            });
            b.removeColumnChooserResetButton()
        },

        renderColumnChooserResetButton: function () {
            var e = this.options, g = this, f = this.grid.element[0].id + "_hiding_modalDialog_reset_button", d = a("#" + this.grid.element[0].id + "_hiding_modalDialog"), b, c;
            if (a("#" + f).length === 0) {
                b = d.igGridModalDialog("getCaptionButtonContainer");
                c = a("<button></button>").attr("id", f).appendTo(b);
                c.igButton({
                    labelText: e.columnChooserResetButtonLabel,
                    click: function (h) {
                        g._trigger(g.events.columnChooserButtonResetClick, h, {
                            columnChooserElement: d,
                            owner: g
                        });
                        g.resetHidingColumnChooser()
                    }
                })
            }
        },

        removeColumnChooserResetButton: function () {
            a("#" + this.grid.element[0].id + "_hiding_modalDialog_reset_button").remove()
        },

        _renderColumnChooserHideButton: function (b, f) {
            var g, d, e = this.css, c = b.closest("li");
            if (f === false) {
                d = "0";
                g = this.options.columnChooserHideText;
                c.removeClass(e.columnChooserItemHidden)
            } else {
                d = "1";
                g = this.options.columnChooserShowText;
                c.addClass(e.columnChooserItemHidden)
            }
            b.attr("ishidden", d).text(g)
        },

        _renderColumnChooser: function () {
            var b, g = this, f = this.options, c, d = this.grid.container(), e = a("<div></div>").appendTo("body").attr("id", this.grid.element[0].id + "_hiding_modalDialog");
            if (this.options.columnChooserContainment !== "owner") {
                d = a("body")
            }
            e.igGridModalDialog({
                modalDialogWidth: f.columnChooserWidth,
                modalDialogHeight: f.columnChooserHeight,
                modalDialogCaptionText: f.columnChooserCaptionText,
                buttonApplyText: f.columnChooserButtonApplyText,
                buttonCancelText: f.columnChooserButtonCancelText,
                containment: d,
                gridContainer: this.grid.container(),
                renderFooterButtons: !f.columnChooserHideOnClick,
                animationDuration: f.columnChooserAnimationDuration,
                modalDialogOpening: function (i, h) {
                    g._columnChooserOpening(i, h)
                },
                modalDialogMoving: function (h, i) {
                    g._trigger(g.events.columnChooserMoving, null, {
                        columnChooserElement: a(h.target),
                        owner: g,
                        originalPosition: i.originalPosition,
                        position: i.position
                    })
                },
                modalDialogClosing: function (i, h) {
                    return g._trigger(g.events.columnChooserClosing, null, {
                        columnChooserElement: e,
                        owner: g
                    })
                },
                modalDialogClosed: function (i, h) {
                    g._trigger(g.events.columnChooserClosed, null, {
                        columnChooserElement: e,
                        owner: g
                    })
                },
                modalDialogContentsRendering: function (i, h) {
                },
                modalDialogContentsRendered: function (i, h) {
                }
            });
            if (!f.columnChooserHideOnClick) {
                b = a("#" + this.grid.element[0].id + "_hiding_modalDialog_footer_buttonok");
                b.bind("igbuttonclick", function (h) {
                    g._columnChooserButtonOKClick(h)
                })
            } else {
                c = e.igGridModalDialog("getCaptionButtonContainer");
                a("<span></span>").bind("click.hiding",function (h) {
                    e.igGridModalDialog("closeModalDialog", true);
                    h.preventDefault();
                    h.stopPropagation();
                    return false
                }).addClass("ui-icon ui-icon-closethick").appendTo(a("<a></a>").appendTo(c).attr("title", a.ig.GridHiding.locale.columnChooserCloseButtonTooltip).attr("href", "#").attr("role", "button").addClass("ui-dialog-titlebar-close ui-corner-all"))
            }
        },

        _hidingFinished: function () {
            if (this.options.virtualization === true && this.options.virtualizationMode === "fixed") {
                return
            }
            if (this.options.columnVirtualization === true) {
                return
            }
            this._renderHiddenColumnIndicators()
        },

        _virtualHorizontalScroll: function () {
            this._renderHiddenColumnIndicators();
            this._renderHidingIcons()
        },

        _renderHiddenColumnIndicators: function () {
            var h = this, j, e, b, k = 0, f = [], g, c = this.grid.options.columns, d = c.length;
            k = 0;
            for (e = 0; e < d; e++) {
                b = c[e];
                if (b.hidden) {
                    if (this._getColumnSettingsByIndex(e).allowHiding) {
                        if (f[k] === undefined) {
                            f[k] = []
                        }
                        f[k].push(b.key)
                    }
                } else {
                    k++
                }
            }
            g = a("body").children("div[data-hiding-inddropdown='" + h.grid.element[0].id + "']");
            setTimeout(function () {
                g.remove()
            }, this.options.dropDownAnimationDuration * 2 + 1);
            if (k === 0) {
                this.grid.headersTable().find("thead > tr > th[data-hiddenreplacement=true]").each(function () {
                    var i = h._renderHiddenColumnIndicator(true, a(this));
                    h._bindDropDownToIndicator(i.find("span"), f[0])
                })
            } else {
                if (this.grid._isMultiColumnGrid) {
                    j = a(this.grid._headerCells)
                } else {
                    j = this.grid.headersTable().find("thead > tr > th").not("[data-skip=true]")
                }
                j.each(function (l) {
                    var m = a(this), i, n;
                    if ((h.grid.options.virtualization === true && h.grid.options.virtualizationMode === "fixed") || h.grid.options.columnVirtualization === true) {
                        n = h.grid._startColIndex + l
                    } else {
                        n = l
                    }
                    h._clearHiddenColumnIndicator(true, m);
                    h._clearHiddenColumnIndicator(false, m);
                    if (f[n] !== undefined) {
                        i = h._renderHiddenColumnIndicator(true, m);
                        h._bindDropDownToIndicator(i.find("span"), f[n])
                    }
                    if (n === h.grid._visibleColumns().length - 1) {
                        if (f[n + 1] !== undefined) {
                            i = h._renderHiddenColumnIndicator(false, m);
                            h._bindDropDownToIndicator(i.find("span"), f[n + 1])
                        }
                    }
                })
            }
        },

        _renderHiddenColumnIndicator: function (e, m) {
            var h, f, g, j, d, l, i, c, b, k;
            if (e) {
                h = "padding-left";
                f = "margin-left";
                j = "left";
                d = "<div data-hiddencolindicator='left' />";
                l = "<span data-nonpaddedindicator='left'></span>";
                g = "[data-nonpaddedindicator=left]"
            } else {
                h = "padding-right";
                f = "margin-right";
                j = "right";
                d = "<div data-hiddencolindicator='right' />";
                l = "<span data-nonpaddedindicator='right'></span>";
                g = "[data-nonpaddedindicator=right]"
            }
            i = parseInt(m.css(h), 10) + this.options.hiddenColumnIndicatorHeaderWidth;
            m.css(h, i + "px");
            m.find(g).css(f, -i + "px");
            c = a(d).css("position", "relative").css("width", "100%").css("height", "0px").css("top", "0px").css("left", "0px").prependTo(m);
            b = a("<a href='#' />").attr("title", this.options.hiddenColumnIndicatorTooltipText).prependTo(c);
            k = a(l).attr("title", this.options.hiddenColumnIndicatorTooltipText).css("position", "absolute").css(f, -i + "px").css(j, "0px").css("width", this.options.hiddenColumnIndicatorHeaderWidth + "px").addClass(this.css.hiddenColumnIndicator).appendTo(b);
            if (a.browser.msie && a.browser.version.slice(0, 1) === "7") {
                k.css({
                    top: -parseInt(m.css("padding-top"), 10),
                    height: m.innerHeight()
                })
            }
            return b
        },

        _clearHiddenColumnIndicator: function (d, g) {
            var e, f, c, b;
            if (d) {
                e = "padding-left";
                c = "div[data-hiddencolindicator=left]"
            } else {
                e = "padding-right";
                c = "div[data-hiddencolindicator=right]"
            }
            b = g.find(c);
            if (b.length !== 0) {
                b.remove();
                f = parseInt(g.css(e), 10);
                g.css(e, (f - this.options.hiddenColumnIndicatorHeaderWidth) + "px")
            }
        },

        _bindDropDownToIndicator: function (b, c) {
            var e = this, d = this._renderDropDown(b, c);
            d.find("ul").bind({
                blur: function (f) {
                    e._toggleDropDown(b, d, true)
                }
            });
            b.parent().bind({
                mousedown: function (f) {
                    e._toggleDropDown(b, d, false);
                    f.preventDefault();
                    f.stopPropagation()
                },
                mouseover: function (f) {
                    if (b.attr("data-indicator-selected") !== "true") {
                        b.addClass(e.css.hiddenColumnIndicatorMouseOver)
                    }
                },
                mouseout: function (f) {
                    b.removeClass(e.css.hiddenColumnIndicatorMouseOver)
                },
                mouseup: function (f) {
                    f.preventDefault();
                    f.stopPropagation()
                },
                click: function (f) {
                    f.preventDefault();
                    f.stopPropagation()
                }
            })
        },

        _renderDropDown: function (b, c) {
            var f = this, d, e;
            d = a("<div data-hiding-inddropdown='" + this.grid.element[0].id + "'></div>").css("position", "absolute").css("display", "none").addClass(this.css.hiddenColumnsDropDown).appendTo("body");
            e = a('<ul tabindex="0"></ul>').addClass(this.css.hiddenColumnsDropDownList).appendTo(d);
            a.each(c, function (h, g) {
                a("<li></li>").addClass(f.css.hiddenColumnsDropDownItem).bind({
                    mouseover: function (i) {
                        a(i.currentTarget).addClass(f.css.hiddenColumnsDropDownItemHover)
                    },
                    mouseout: function (i) {
                        a(i.currentTarget).removeClass(f.css.hiddenColumnsDropDownItemHover)
                    },
                    mousedown: function (i) {
                        f._closeColumnChooser(true);
                        f._showColumnFromUI(g);
                        f._toggleDropDown(b, d, true)
                    }
                }).append(a("<span></span>").addClass(f.css.hiddenColumnsDropDownItemText).text(f.grid.columnByKey(g).headerText)).appendTo(e)
            });
            a("<a></a>").appendTo(a("<li></li>").appendTo(e)).igButton({
                labelText: this.options.columnChooserDisplayText,
                mousedown: function (g) {
                    if (g.target) {
                        setTimeout(function () {
                            a(g.target).removeClass("ui-state-active")
                        }, 0)
                    }
                    f._openColumnChooser(true);
                    f._toggleDropDown(b, d, true)
                }
            });
            return d
        },

        _toggleDropDown: function (b, c, d) {
            var j, e, h, g, f = (c.is(":visible") === true), i = this;
            if ((c.data("isAnimating") === true) || (f === false && d === true)) {
                return
            }
            if (!f) {
                j = b.closest("th");
                e = b.closest("div").attr("data-hiddencolindicator") === "right";
                h = j.offset();
                if (e) {
                    g = h.left + j.outerWidth() - c.outerWidth();
                    g = Math.max(0, g)
                } else {
                    g = h.left
                }
                c.css("top", h.top + j.outerHeight());
                c.css("left", g)
            }
            c.data("isAnimating", true);
            c.toggle(this.options.dropDownAnimationDuration, function () {
                if (c.is(":visible") === true) {
                    c.find("ul").focus();
                    b.addClass(i.css.hiddenColumnIndicatorSelected);
                    b.attr("data-indicator-selected", "true")
                } else {
                    b.removeClass(i.css.hiddenColumnIndicatorSelected);
                    b.removeAttr("data-indicator-selected")
                }
                c.data("isAnimating", false)
            })
        },

        _openColumnChooser: function (b) {
            var c = a("#" + this.grid.element[0].id + "_hiding_modalDialog");
            c.igGridModalDialog("openModalDialog")
        },

        _closeColumnChooser: function (b) {
            var c = a("#" + this.grid.element[0].id + "_hiding_modalDialog");
            c.igGridModalDialog("closeModalDialog")
        },

        _columnChooserMove: function (b, c) {
            this._trigger(this.events.columnChooserMoving, null, {
                columnChooserElement: b.target,
                owner: this,
                originalPosition: c.originalPosition,
                position: c.position
            })
        },

        _getColumnSettings: function (d, e) {
            var c, b;
            for (c = 0; c < this.options.columnSettings.length; c++) {
                if (this.options.columnSettings[c].columnKey === e) {
                    return this._mergeColumnSettingsDefaults(this.options.columnSettings[c])
                }
                if (this.options.columnSettings[c].columnIndex === d) {
                    b = this.options.columnSettings[c]
                }
            }
            return this._mergeColumnSettingsDefaults(b)
        },

        _getColumnSettingsByIndex: function (b) {
            var c = this.grid.options.columns[b].key;
            return this._getColumnSettings(b, c)
        },

        _getColumnSettingsByKey: function (c) {
            var b;
            for (b = 0; b < this.grid.options.columns.length; b++) {
                if (this.grid.options.columns[b].key === c) {
                    return this._getColumnSettings(b, c)
                }
            }
        },

        _mergeColumnSettingsDefaults: function (b) {
            var d = {
                allowHiding: true,
                hidden: false
            }, c = a.extend({}, b), e;
            for (e in d) {
                if (d.hasOwnProperty(e) && typeof c[e] !== "boolean") {
                    c[e] = d[e]
                }
            }
            return c
        },

        _injectGrid: function (d, f) {
            var e, g, c, b;
            this.grid = d;
            if (this._headerCellRenderedHandler !== null && this._headerCellRenderedHandler !== undefined) {
                this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler)
            }
            if (this._headerRenderedHandler !== null && this._headerRenderedHandler !== undefined) {
                this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler)
            }
            if (this._virtualHorizontalScrollHandler !== null && this._virtualHorizontalScrollHandler !== undefined) {
                this.grid.element.unbind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler)
            }
            this._headerRenderedHandler = a.proxy(this._headerRendered, this);
            this._headerCellRenderedHandler = a.proxy(this._headerCellRendered, this);
            this._virtualHorizontalScrollHandler = a.proxy(this._virtualHorizontalScroll, this);
            this.grid.element.bind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.bind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.bind("iggridvirtualhorizontalscroll", this._virtualHorizontalScrollHandler);
            if (this.grid.element.igGridFeatureChooser !== undefined) {
                this.grid.element.igGridFeatureChooser()
            } else {
                throw new Error(a.ig.GridHiding.locale.featureChooserNotReferenced)
            }
            for (e = 0; e < this.options.columnSettings.length; e++) {
                c = this.options.columnSettings[e];
                if (typeof c.hidden === "boolean") {
                    if (typeof c.columnKey === "string") {
                        b = this.grid.columnByKey(c.columnKey)
                    } else {
                        if (typeof c.columnIndex === "number") {
                            b = this.grid.options.columns[c.columnIndex]
                        }
                    }
                    if (b !== undefined && b !== null) {
                        b.hidden = c.hidden
                    } else {
                        b = this.grid._getMultiHeaderColumnById(c.columnKey);
                        if (b !== undefined && b !== null && b.children) {
                            for (g = 0; g < b.children.length; g++) {
                                b.children[g].hidden = c.hidden
                            }
                        }
                    }
                }
            }
        }

    });

    a.extend(a.ui.igGridHiding, {
        version: "12.2.20122.1021"
    })

}(jQuery));