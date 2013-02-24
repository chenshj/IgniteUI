﻿/*
 * Infragistics.Web.ClientUI Grid Feature Chooser 12.2.20122.1021
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

( function ($) {

    $.widget("ui.igGridFeatureChooser", {

        css: {
            featureChooserDropDown: "ui-iggrid-featurechooser-dropdown-dialog ui-widget ui-widget-content ui-corner-all",
            headerButtonIcon: "ui-iggrid-featurechooserbutton ui-icon ui-icon-gear",
            headerButtonIconMouseOver: "ui-iggrid-header-icon-mouseover",
            headerButtonIconSelected: "ui-iggrid-header-icon-selected",
            listClass: "ui-iggrid-featurechooser-list ui-menu ui-widget ui-widget-content ui-corner-all",
            listItemClass: "ui-iggrid-featurechooserddlistitemicons ui-state-default",
            itemIconCotainer: "ui-iggrid-featurechoosericoncontainer",
            itemSecondaryIconContainer: "ui-iggrid-featurechooser-secondaryicon-container",
            separator: "ui-iggrid-featurechooser-separator",
            listItemText: "ui-iggrid-featurechooserddlistitemtext",
            itemSelected: "item-selected",
            dropDownListItemHover: "ui-iggrid-featurechooser-listitem-hover ui-state-active ui-state-hover",
            dropDownButtonClasses: "ui-igbutton",
            dropDownButtonHoverClasses: "",
            dropDownButtonActiveClasses: "",
            dropDownButtonFocusClasses: "",
            dropDownButtonLabelClass: ""
        },

        options: {
            dropDownWidth: null,
            animationDuration: 400
        },

        events: {
            featureChooserRendering: "featureChooserRendering",
            featureChooserRendered: "featureChooserRendered",
            featureChooserDropDownOpening: "featureChooserDropDownOpening",
            featureChooserDropDownOpened: "featureChooserDropDownOpened",
            featureToggling: "featureToggling",
            featureToggled: "featureToggled"
        },

        _createWidget: function (c, b) {
            $.Widget.prototype._createWidget.apply(this, arguments)
        },

        _create: function () {
            this.analyzedData = {};
            this.data = {};
            this._features = [];
            this._isFeaturesAnalyzed = false;
            this.isInitialized = false;
            this.grid = this.element.data("igGrid");
            this.gridId = this.element[0].id;
            this._analyzeGridFeaturesOptions();
            this._countRenderedFeatures = 0;
            this._headerRenderedHandler = $.proxy(this._headerRendered, this);
            this.grid.element.bind("iggridheaderrendered", this._headerRenderedHandler)
        },

        _analyzeGridFeaturesOptions: function () {
            var d, b = this.grid.options.features, c = b.length;
            for (d = 0; d < c; d++) {
                this._features.push(b[d].name)
            }
        },

        shouldShowFeatureIcon: function (b) {
            if (this.analyzedData[b] !== undefined && this.analyzedData[b] !== null) {
                return (this.analyzedData[b].length <= 1)
            }
            return true
        },

        _setOption: function (b, c) {
            $.Widget.prototype._setOption.apply(this, arguments)
        },

        _id: function (b, d) {
            var c = this.gridId + "_" + b;
            if (d !== undefined && d !== null && $.type(d) === "string") {
                c += "_" + d
            }
            return c
        },

        _callFeatureMethod: function (e, g, c, d) {
            var h, b, i = $.type(e.method), f = this.grid.element.data("igGrid" + e.name);
            b = $("#" + this.grid.element[0].id + "_" + c);
            if (i === "string") {
                if (f === undefined || f === null) {
                    return false
                }
                h = f[e.method]
            } else {
                if (i === "function") {
                    h = e.method
                }
            }
            if (h === undefined || h === null) {
                return false
            }
            if ($.type(e.method) === "string") {
                f[e.method](d, c, g, e.methodData)
            } else {
                e.method(d, c, g, e.methodData)
            }
            return true
        },

        _getFeatureByKeyName: function (d, f) {
            var g, e = null, b = this.data[d], c = b.length;
            for (g = 0; g < c; g++) {
                if (b[g].name === f) {
                    e = b[g];
                    break
                }
            }
            return e
        },

        _clickFeature: function (h) {
            var m, o, b = ($(h.target).data("data") !== undefined) ? $(h.target) : $(h.currentTarget), g = b.data("data"), p = this, n = null, q = g.type, f = g.columnKey, l = g.featureName, c = this.data[f], e = c.length, k = null;
            k = this._getFeatureByKeyName(f, l);
            if (k === null || k === undefined) {
                return
            }
            if (q === "toggle") {
                k.isSelected = n = !k.isSelected
            }
            if (this._trigger(this.events.featureToggling, null, {
                target: b,
                columnKey: f,
                isToSelect: n,
                featureName: "igGrid" + k.name
            }) === false) {
                return
            }
            if (this._callFeatureMethod(k, n, f, h) === false) {
                return
            }
            if (q === "toggle") {
                p._setSelectedItem(f, n, $("#" + p._id("featurechooser_dd_li_" + f, l)));
                if (k.updateOnClickAll === true) {
                    $.each(p.data, function (d, i) {
                        if (d !== f) {
                            for (o = 0; o < i.length; o++) {
                                if (i[o].name === l) {
                                    break
                                }
                            }
                            if (o === i.length) {
                                return true
                            }
                            c = p.data[d];
                            if (c === null || c === undefined) {
                                return true
                            }
                            e = c.length;
                            for (m = 0; m < e; m++) {
                                if (c[m].name === l) {
                                    c[m].isSelected = n;
                                    break
                                }
                            }
                            p._setSelectedItem(d, n, $("#" + p._id("featurechooser_dd_li_" + d, i[o].name)))
                        }
                    })
                }
            }
        },

        _setListItemText: function (b, c, d) {
            $("#" + this._id("featurechooser_dd_li_" + b, c) + " span.ui-iggrid-featurechooserddlistitemtext").text(d)
        },

        _analyzeFeatures: function () {
            if (this._isFeaturesAnalyzed === true) {
                return
            }
            var m, n, e = this.grid.options.columns, f = e.length, h, l = this._features.length, j = this._features, o = [], c, d, g, b;
            for (m = 0; m < l; m++) {
                h = j[m];
                g = this.grid.element.data("igGrid" + h);
                if (g === undefined || g === null) {
                    continue
                }
                if (g.renderInFeatureChooser !== true) {
                    continue
                }
                if (g._columnMap === undefined || g._columnMap === null) {
                    continue
                }
                c = g._columnMap();
                if (c === false || c === null || c === undefined) {
                    continue
                }
                d = c.length;
                if (d === 0) {
                    for (n = 0; n < f; n++) {
                        b = e[n].key;
                        if (this.analyzedData[b] === undefined || this.analyzedData[b] === null) {
                            this.analyzedData[b] = []
                        }
                        if (this._isFeatureExistByColumnKey(h, b) === true) {
                            continue
                        }
                        this.analyzedData[b].push({
                            name: h,
                            method: null,
                            text: null,
                            iconClass: null,
                            isSelected: false,
                            columnCell: null,
                            isActive: false
                        })
                    }
                } else {
                    for (n = 0; n < d; n++) {
                        b = c[n].columnKey;
                        if (this.analyzedData[b] === undefined || this.analyzedData[b] === null) {
                            this.analyzedData[b] = []
                        }
                        if (c[n].enabled !== true || this._isFeatureExistByColumnKey(h, b) === true) {
                            continue
                        }
                        this.analyzedData[b].push({
                            name: h,
                            method: null,
                            text: null,
                            iconClass: null,
                            isSelected: false,
                            columnCell: null,
                            isActive: false
                        })
                    }
                }
                o.push({
                    name: h,
                    instance: g
                })
            }
            this._features = o;
            this._isFeaturesAnalyzed = true
        },

        _isFeatureExistByColumnKey: function (d, c) {
            var b = this.analyzedData[c], e = false;
            if (b === null || b === undefined) {
                return true
            }
            $.each(b, function (f, g) {
                if (g.name === d) {
                    e = true;
                    return false
                }
            });
            return e
        },

        _shouldRenderInFeatureChooser: function (b) {
            this._analyzeFeatures();
            if (this.analyzedData[b] !== undefined && this.analyzedData[b] !== null) {
                return this.analyzedData[b].length > 1
            }
            return false
        },

        _headerRendered: function (d, b) {
            if (b.owner.element.attr("id") !== this.grid.element.attr("id")) {
                return
            }
            if (d.target.id !== this.grid.element[0].id) {
                return
            }
            var c = this;
            $.each(this.data, function (e, f) {
                c._initFC(e, f)
            })
        },

        _initFC: function (h, i) {
            var k, l = this, m = this.grid.container().find("thead"), c, e, f, g, b, d;
            c = $("#" + l.grid.element[0].id + "_" + h);
            f = l._id("featureChooser_headerButton", h);
            if (i.isCancelledRendering !== false && l._trigger(l.events.featureChooserRendering, null, {
                owner: l.grid,
                columnKey: h,
                columnCell: c
            }) === false) {
                i.isCancelledRendering = true;
                return
            }
            i.isCancelledRendering = false;
            e = m.find("#" + l.grid.element[0].id + "_" + h);
            d = e.find(".ui-iggrid-indicatorcontainer");
            if (d.length === 0) {
                d = $("<div></div>").appendTo(e).addClass("ui-iggrid-indicatorcontainer")
            }
            g = function (j) {
                j.preventDefault();
                j.stopPropagation()
            };
            b = $("<span></span>").appendTo(d).addClass(l.css.headerButtonIcon);
            b.wrap('<a id="' + f + '" href="#" title=""></a>');
            b.parent().attr("th-remove-focus", "").bind({
                keydown: function (p) {
                    var n, o, j = $("#" + l._id("featureChooser_dd", h));
                    if (p.keyCode === $.ui.keyCode.ENTER || p.keyCode === $.ui.keyCode.SPACE) {
                        n = j.find("ul li.ui-iggrid-featurechooser-listitem-hover");
                        if (j.is(":visible") && n.length > 0) {
                            if (n.find('*[role="button"]').length) {
                                p.target = n.find('*[role="button"]:eq(0)')
                            } else {
                                p.target = n[0]
                            }
                            l._clickFeature(p)
                        }
                        l._toggleDropDown(p, h, false);
                        g(p)
                    } else {
                        if (p.keyCode === $.ui.keyCode.DOWN || p.keyCode === $.ui.keyCode.UP) {
                            if (j.is(":visible")) {
                                n = j.find("ul li.ui-iggrid-featurechooser-listitem-hover");
                                if (n.length > 1) {
                                    $.each(n, function (q, r) {
                                        l._removeCssSelectionListItem($(r))
                                    })
                                }
                                o = ((p.keyCode === $.ui.keyCode.DOWN) ? n.next() : n.prev());
                                if (o.attr("data-fc-separator")) {
                                    o = ((p.keyCode === $.ui.keyCode.DOWN) ? o.next() : o.prev())
                                }
                                if (n.length === 0) {
                                    l._addCssSelectionListItem(j.find("ul li:eq(0)"))
                                } else {
                                    if (o.length > 0 && o.is("li")) {
                                        l._removeCssSelectionListItem(n);
                                        l._addCssSelectionListItem(o)
                                    }
                                }
                                g(p)
                            }
                        }
                    }
                },
                blur: function (j) {
                    l._toggleDropDown(j, h, true)
                },
                mousedown: function (j) {
                    l._toggleDropDown(j, h, false);
                    g(j)
                },
                mouseover: function (j) {
                    if (b.hasClass(l.css.headerButtonIconSelected) === false) {
                        b.addClass(l.css.headerButtonIconMouseOver)
                    }
                },
                mouseout: function (j) {
                    b.removeClass(l.css.headerButtonIconMouseOver)
                },
                mouseup: g,
                click: g
            });
            for (k = 0; k < i.length; k++) {
                l._renderDropDownItem(h, i[k])
            }
            l._trigger(l.events.featureChooserRendered, null, {
                owner: l.grid,
                columnKey: h,
                columnCell: c
            })
        },

        _renderInFeatureChooser: function (d, e) {
            var f, b = this.analyzedData[d], c;
            if (b === undefined || b === null) {
                return
            }
            c = b.length;
            if (b.isCancelledRendering === true) {
                return
            }
            for (f = 0; f < c; f++) {
                if (b[f].name.toLowerCase() === e.name.toLowerCase()) {
                    this.analyzedData[d][f] = e;
                    break
                }
            }
            if (f === c) {
                this.analyzedData[d].push(e)
            }
            if (this.data[d] === null || this.data[d] === undefined) {
                this.data[d] = []
            }
            if ($.type(this.data[d].order) !== "number") {
                this.data[d].order = 0
            }
            for (f = 0; f < this.data[d].length; f++) {
                if (this.data[d][f].name === e.name && e.name !== undefined) {
                    return
                }
            }
            this.data[d].push(e)
        },

        _renderDropDownItem: function (g, i) {
            var k = this._id("featureChooser_dd", g), c = $("#" + k), d, f, h = "", w = this, r = i.isSelected, l = i.name, o, b, t = this._id("featurechooser_dd_li_" + g, l), q = i.isOnBottom, j = this.options.dropDownWidth, m = i.groupName, n = i.groupOrder, u = this._id("featurechooser_dd_list", g), e = $("#" + u), v, p, s;
            if ($("#" + t).length > 0) {
                return
            }
            if (r === undefined || r === null) {
                r = false
            }
            if (c.length === 0) {
                c = $("<div></div>");
                c.attr("id", k).css({
                    position: "absolute",
                    display: "none"
                }).addClass(this.css.featureChooserDropDown).appendTo("body");
                c.width(j);
                e = $("<ul></ul>").attr("id", u).addClass(this.css.listClass).appendTo(c)
            }
            d = $("<li></li>");
            d.addClass(this.css.listItemClass).attr("id", t).attr("data-fc-order", i.order);
            if (m !== undefined && m !== null) {
                d.attr("data-fc-groupname", m)
            }
            if (n !== undefined && n !== null) {
                d.attr("data-fc-grouporder", n)
            }
            if (q === undefined || i.isOnBottom === null) {
                if (i.type === "button") {
                    q = true
                } else {
                    q = false
                }
            }
            if (i.type !== "button") {
                d.bind({
                    mouseover: $.proxy(this._mouseOverDropDownItem, this),
                    mouseout: $.proxy(this._mouseOutDropDownItem, this)
                })
            }
            o = {
                columnKey: g,
                featureName: l,
                updateOnClickAll: i.updateOnClickAll,
                isOnBottom: q,
                groupName: m,
                groupOrder: n,
                type: i.type,
                textHide: i.textHide,
                state: i.state,
                text: i.text
            };
            i.isOnBottom = q;
            d.data("data", o);
            if (i.type === "button") {
                b = $("<a></a>").appendTo(d);
                b.igButton({
                    labelText: i.text,
                    mousedown: function (x) {
                        w._clickFeature(x);
                        w._toggleDropDown(x, g, true)
                    }
                });
                b.data("data", o)
            } else {
                d.bind({
                    mousedown: function (x) {
                        w._clickFeature(x);
                        w._toggleDropDown(x, g, true)
                    }
                });
                if (i.iconClass !== null && i.iconClass !== undefined && i.iconClass !== "") {
                    h = i.iconClass
                }
                f = $("<span></span>").addClass(this.css.itemIconCotainer).appendTo(d);
                f = $("<span></span>").appendTo(f);
                if (h !== "") {
                    f.addClass(h)
                }
                s = i.text;
                $("<span></span>").text(i.text).addClass(this.css.listItemText).appendTo(d);
                if (i.secondaryIconClass !== undefined && i.secondaryIconClass !== null) {
                    f = $("<span></span>").addClass(this.css.itemSecondaryIconContainer).appendTo(d);
                    $("<span></span>").addClass(i.secondaryIconClass).appendTo(f)
                }
            }
            if (m === undefined || m === null) {
                v = $("#" + u + " li:not([data-fc-groupName]):not([data-fc-separator])");
                p = this._getInsertElement(v, i.order, "data-fc-order");
                this._insertElement(p, e, d, null)
            } else {
                v = $("#" + u + " li[data-fc-groupName = " + m + "]");
                if (v.length === 0) {
                    v = $("#" + u + " li[data-fc-groupName]");
                    p = this._getInsertElement(v, n, "data-fc-grouporder");
                    if (p.item !== null) {
                        e = v
                    }
                    this._insertElement(p, e, d, m)
                } else {
                    p = this._getInsertElement(v, i.order, "data-fc-order");
                    this._insertElement(p, v, d, m)
                }
            }
            if (i.type === "toggle") {
                this._setSelectedItem(g, i.isSelected, d)
            }
        },

        _getSeparatorItem: function () {
            return $('<li data-fc-separator="1" class="' + this.css.separator + '"></li>')
        },

        _insertElement: function (g, d, c, f) {
            var b = g.item, h = g.position, e;
            if (b === null) {
                c.appendTo(d);
                e = c.prev();
                if (e !== undefined && e.length > 0 && e.attr("data-fc-separator") !== "1" && e.attr("data-fc-groupname") !== undefined && e.attr("data-fc-groupname") !== f) {
                    this._getSeparatorItem().insertBefore(c)
                }
            } else {
                if (h === "after") {
                    c.insertAfter(b);
                    if (b !== undefined && b.length > 0 && b.attr("data-fc-separator") !== "1" && b.attr("data-fc-groupname") !== undefined && b.attr("data-fc-groupname") !== f) {
                        this._getSeparatorItem().insertBefore(c)
                    }
                } else {
                    c.insertBefore(b);
                    e = c.prev();
                    if (e !== undefined && e.length > 0 && e.attr("data-fc-separator") !== "1" && e.attr("data-fc-groupname") !== undefined && e.attr("data-fc-groupname") !== f) {
                        this._getSeparatorItem().insertBefore(c)
                    } else {
                        if (b !== undefined && b.length > 0 && b.attr("data-fc-separator") !== "1" && b.attr("data-fc-groupname") !== undefined && b.attr("data-fc-groupname") !== f) {
                            this._getSeparatorItem().insertAfter(c)
                        }
                    }
                }
            }
        },

        _getInsertElement: function (g, h, d) {
            var b = null, f, c, e;
            for (e = 0; e < g.length; e++) {
                b = $(g[e]);
                c = b.attr(d);
                if (c === undefined) {
                    continue
                }
                f = parseInt(c, 10);
                if (f > h) {
                    return {
                        item: b,
                        position: "before"
                    }
                }
            }
            return {
                item: b,
                position: "after"
            }
        },

        _setSelectedState: function (f, c, g, e) {
            var d = this.data[c], b, h = this;
            if (d === undefined || d === null) {
                return false
            }
            $.each(d, function (i, j) {
                if (j.name.toLowerCase() === f.toLowerCase()) {
                    b = $("#" + h._id("featurechooser_dd_li_" + c, j.name));
                    h._setSelectedItem(c, g, b);
                    h.data[c][i].isSelected = !g;
                    if (e === true) {
                        h._callFeatureMethod(j, g, c, null)
                    }
                    j.isSelected = g;
                    return false
                }
            })
        },

        _setSelectedItem: function (d, f, c) {
            if (c === null || c === undefined || c.length === 0) {
                return
            }
            var e = c.data("data"), h, g, b = null;
            if (e !== undefined && e !== null) {
                h = e.text;
                g = e.textHide;
                b = c.find("span.ui-iggrid-featurechooserddlistitemtext")
            }
            c.attr("data-fc-selected", f);
            if (f === true) {
                c.addClass(this.css.itemSelected);
                if (b !== null && h !== null && h !== undefined) {
                    b.text(h)
                }
            } else {
                c.removeClass(this.css.itemSelected);
                if (b !== null && g !== null && g !== undefined) {
                    b.text(g)
                }
            }
        },

        _toggleSelectedItems: function (f) {
            var g, b, e, c = this.grid.options.columns, d = c.length, h;
            for (g = 0; g < d; g++) {
                e = c[g].key;
                b = $("#" + this._id("featurechooser_dd_li_" + e, f));
                if (b.data("data") === null || b.data("data") === undefined) {
                    continue
                }
                h = b.attr("data-fc-selected") === "true";
                this._setSelectedState("Filtering", e, !h)
            }
        },

        _toggleDropDown: function (i, g, j) {
            var b = $("#" + this._id("featureChooser_headerButton", g)), m, l = 0, o = 0, h = this._id("featureChooser_dd", g), e, d = $("#" + h), k = (d.is(":visible") === true), n = this, f = this.options.animationDuration, c = null;
            if ((d.data("isAnimating") === true) || (k === false && j === true)) {
                return
            }
            c = $("#" + this.grid.element[0].id + "_" + g);
            e = $("#" + this._id("featureChooser_headerButton", g)).find("span");
            if (k === false && this._trigger(this.events.featureChooserDropDownOpening, null, {
                owner: d,
                columnKey: g,
                columnCell: c,
                data: this.data[g]
            }) === false) {
                return
            }
            if (!k) {
                m = $.ig.getMaxZIndex(h);
                d.css("zIndex", m);
                o = e.offset().top + e.height();
                l = e.offset().left - d.width() + e.width();
                if (l < 0) {
                    l = e.offset().left
                }
                d.css({
                    top: o,
                    left: l
                })
            }
            d.data("isAnimating", true);
            d.slideToggle(f, function () {
                if (d.is(":visible") === true) {
                    b.focus();
                    n._activeDropdown = d;
                    n._trigger(n.events.featureChooserDropDownOpened, null, {
                        owner: d,
                        columnKey: g,
                        columnCell: c,
                        data: n.data[g]
                    });
                    b.children("span:first").addClass(n.css.headerButtonIconSelected)
                } else {
                    n._activeDropdown = null;
                    b.children("span:first").removeClass(n.css.headerButtonIconSelected)
                }
                d.data("isAnimating", false)
            })
        },

        _mouseOverDropDownItem: function (b) {
            this._addCssSelectionListItem($(b.currentTarget))
        },

        _mouseOutDropDownItem: function (b) {
            this._removeCssSelectionListItem($(b.currentTarget))
        },

        _addCssSelectionListItem: function (b) {
            b.addClass(this.css.dropDownListItemHover)
        },

        _removeCssSelectionListItem: function (b) {
            b.removeClass(this.css.dropDownListItemHover)
        },

        destroy: function () {
            $.Widget.prototype.destroy.apply(this, arguments);
            return this
        }
    });

    $.extend($.ui.igGridFeatureChooser, {
        version: "12.2.20122.1021"
    })

}(jQuery));

if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}

( function (a) {
    a.widget("ui.igGridModalDialog", {

        options: {
            buttonApplyText: "Apply",
            buttonCancelText: "Cancel",
            modalDialogCaptionText: "Header",
            modalDialogWidth: 250,
            modalDialogHeight: "",
            renderFooterButtons: true,
            animationDuration: 200
        },

        css: {
            modalDialog: "ui-dialog ui-draggable ui-resizable ui-iggrid-dialog ui-widget ui-widget-content ui-corner-all",
            modalDialogHeaderCaption: "ui-dialog-titlebar ui-widget-header ui-corner-top ui-helper-reset ui-corner-all ui-helper-clearfix",
            modalDialogHeaderCaptionTitle: "ui-dialog-title",
            modalDialogContent: "ui-dialog-content ui-widget-content",
            modalDialogHandleBar: "",
            captionButtonContainer: "ui-iggrid-modaldialog-caption-buttoncontainer",
            modalDialogFooter: "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix",
            buttonset: "ui-dialog-buttonset",
            blockArea: "ui-widget-overlay ui-iggrid-blockarea"
        },

        events: {
            modalDialogOpening: "modalDialogOpening",
            modalDialogOpened: "modalDialogOpened",
            modalDialogMoving: "modalDialogMoving",
            modalDialogClosing: "modalDialogClosing",
            modalDialogClosed: "modalDialogClosed",
            modalDialogContentsRendering: "modalDialogContentsRendering",
            modalDialogContentsRendered: "modalDialogContentsRendered",
            buttonOKClick: "buttonOKClick"
        },

        _createWidget: function (c, b) {
            this.gridContainer = c.gridContainer;
            this.containment = c.containment || c.gridContainer;
            a.Widget.prototype._createWidget.apply(this, arguments)
        },

        _create: function () {
            this._setGridWidthHeight();
            this._renderModalDialog()
        },

        _setGridWidthHeight: function () {
            this.element.css("width", this.options.modalDialogWidth).css("height", this.options.modalDialogHeight)
        },

        openModalDialog: function () {
            var l = 10000, z, A, u, x, v, t, y, j, B, c, f, n, m, g, i, k, r, q, s = true, o = this.element, p, d, b = this._getAnimationDuration(), e = this._id("_modaldialog_block");
            if (this._modalDialogOpened) {
                return
            }
            s = this._trigger(this.events.modalDialogOpening, null, {
                modalDialog: o,
                owner: this
            });
            if (s) {
                a("#" + e).remove();
                this._setGridWidthHeight();
                p = o.find("table tbody");
                p.empty();
                y = this.gridContainer.offset();
                B = this.gridContainer.outerWidth();
                j = this.gridContainer.outerHeight();
                z = a(window).scrollLeft();
                A = a(window).scrollTop();
                u = y.left - z;
                x = y.top - A;
                v = u + B;
                t = x + j;
                n = parseInt(this.options.modalDialogWidth, 10);
                m = parseInt(this.options.modalDialogHeight, 10);
                d = a("<div></div>").appendTo("body").attr("id", e).css("position", "absolute").addClass(this.css.blockArea).hide();
                if (d.outerWidth() !== this.gridContainer.outerWidth()) {
                    d.css("width", this.gridContainer.outerWidth())
                }
                if (d.outerHeight() !== this.gridContainer.outerHeight()) {
                    d.css("height", this.gridContainer.outerHeight())
                }
                d.css({
                    left: y.left,
                    top: y.top
                }).fadeToggle(b);
                if (!n) {
                    n = this.element.width()
                }
                if (!m) {
                    m = this.element.height()
                }
                if (u < 0) {
                    u = 0
                }
                if (x < 0) {
                    x = 0
                }
                f = a(window).width();
                c = a(window).height();
                if (v > f) {
                    v = f
                }
                if (t > c) {
                    t = c
                }
                r = x + A + (t - x) / 2 - m / 2;
                q = u + z + (v - u) / 2 - n / 2;
                if (r < 0) {
                    r = x
                }
                if (q < 0) {
                    q = u
                }
                l = a.ig.getMaxZIndex(this.element[0].id);
                o.css({
                    left: q,
                    top: r,
                    zIndex: l + 2
                }).fadeToggle(b);
                d.css({
                    zIndex: l + 1
                });
                g = o.children("div").eq(0);
                i = o.children("div").eq(1);
                k = o.children("div").eq(2);
                i.css("height", o.height() - g.outerHeight() - (i.outerHeight() - i.height()) - k.outerHeight());
                a("#" + this._id("content")).css({
                    width: ""
                });
                this._modalDialogOpened = true;
                this._trigger(this.events.modalDialogOpened, null, {
                    modalDialogElement: o,
                    owner: this
                });
                o.focus()
            }
        },

        _getAnimationDuration: function () {
            var b = this.options.animationDuration;
            if (b === null || b === undefined) {
                b = 200
            }
            return b
        },

        _setOption: function (b, c) {
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (b) {
                case"buttonApplyText":
                    a("#" + this._id("footer_buttonok")).igButton("option", "labelText", c);
                    break;
                case"buttonCancelText":
                    a("#" + this._id("footer_buttoncancel")).igButton("option", "labelText", c);
                    break;
                case"modalDialogCaptionText":
                    this.element.find("span.ui-dialog-title:eq(0)").html(c);
                    break;
                case"modalDialogWidth":
                    this.element.css("width", c);
                    break;
                case"modalDialogHeight":
                    this.element.css("height", c);
                    break;
                case"renderFooterButtons":
                    if (this.element.is(":visible")) {
                        this.closeModalDialog()
                    }
                    this.element.empty();
                    this._renderModalDialog();
                    break;
                default:
                    break
            }
        },

        closeModalDialog: function () {
            var d = true, c = this.element, b = this._getAnimationDuration();
            if (!this._modalDialogOpened) {
                return
            }
            d = this._trigger(this.events.modalDialogClosing, null, {
                modalDialog: c,
                owner: this
            });
            if (d) {
                c.fadeToggle(b);
                a("#" + this._id("_modaldialog_block")).fadeToggle(b);
                this._modalDialogOpened = false;
                this._trigger(this.events.modalDialogClosed, null, {
                    modalDialog: c,
                    owner: this
                })
            }
        },

        _modalDialogMove: function (b, c) {
            this._trigger(this.events.modalDialogMoving, null, {
                modalDialog: b.target,
                owner: this,
                originalPosition: c.originalPosition,
                position: c.position
            })
        },

        getCaptionButtonContainer: function () {
            return a("#" + this._id("caption_button_container"))
        },

        getFooter: function () {
            return a("#" + this._id("footer"))
        },

        getContent: function () {
            return a("#" + this._id("content"))
        },

        _renderModalDialog: function () {
            var l = this, f = this.css, h = this.element, e, i, g, k = this.options, d, c, b, j = true;
            h.css("position", "absolute").addClass(this.css.modalDialog).hide();
            j = this._trigger(this.events.modalDialogContentsRendering, null, {
                modalDialog: h,
                owner: this
            });
            if (j) {
                e = a("<div></div>").addClass(this.css.modalDialogHeaderCaption).appendTo(h);
                a("<span></span>").text(this.options.modalDialogCaptionText).addClass(this.css.modalDialogHeaderCaptionTitle).appendTo(e);
                a("<div></div>").attr("id", this._id("caption_button_container")).addClass(f.captionButtonContainer).appendTo(e);
                i = a("	<div></div>").css("overflow", "auto").addClass(this.css.modalDialogContent).attr("id", this._id("content")).appendTo(h);
                if (k.renderFooterButtons === true) {
                    g = a("<div></div>").addClass(this.css.modalDialogFooter).attr("id", this._id("footer")).appendTo(h);
                    d = a("<div></div>").addClass(this.css.buttonset).appendTo(g);
                    b = a("<button></button>").attr("id", this._id("footer_buttoncancel")).appendTo(d);
                    c = a("<button></button>").attr("id", this._id("footer_buttonok")).appendTo(d);
                    c.igButton({
                        labelText: k.buttonApplyText
                    });
                    b.igButton({
                        labelText: k.buttonCancelText
                    });
                    b.bind({
                        click: function (n, m) {
                            var o;
                            o = l._trigger(l.events.buttonCancelClick, n, {
                                modalDialog: h,
                                owner: l
                            });
                            if (o) {
                                l.closeModalDialog();
                                n.preventDefault();
                                n.stopPropagation()
                            }
                        }
                    })
                }
                h.bind({
                    keydown: function (m) {
                        if (m.keyCode === a.ui.keyCode.ESCAPE) {
                            l.closeModalDialog()
                        }
                    }
                }).draggable({
                        containment: this.containment,
                        handle: e,
                        drag: a.proxy(this._modalDialogMove, this)
                    }).attr("role", "dialog").attr("tabIndex", -1);
                if (typeof Modernizr !== "object" || Modernizr.touch === false) {
                    h.resizable({
                        containment: "parent",
                        alsoResize: i,
                        minHeight: h.outerHeight() / 4,
                        minWidth: h.outerWidth() / 2
                    })
                }
                this._trigger(this.events.modalDialogContentsRendered, null, {
                    modalDialog: h,
                    owner: this
                })
            }
        },

        _id: function () {
            var c, b = arguments, d = this.element[0].id;
            for (c = 0; c < b.length; c++) {
                d += "_" + b[c]
            }
            return d
        },

        destroy: function () {
            a("#" + this._id("_modaldialog_block")).remove();
            a.Widget.prototype.destroy.apply(this, arguments);
            return this
        }
    });

    a.extend(a.ui.igGridModalDialog, {
        version: "12.2.20122.1021"
    })

}(jQuery));
