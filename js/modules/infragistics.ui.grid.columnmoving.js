﻿/*
 * Infragistics.Web.ClientUI Grid Column Moving 12.2.20122.1021
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
 *	ig.ui.tree.js
 *	ig.ui.shared.js
 *	ig.dataSource.js
 *	ig.util.js
 */
if (jQuery === undefined) {
    throw new Error("jQuery is undefined")
}

( function ($) {

    $.widget("ui.igGridColumnMoving", {
        renderInFeatureChooser: true,

        options: {
            columnSettings: [
                {
                    columnKey: null,
                    columnIndex: null,
                    allowMoving: true
                }
            ],
            mode: "immediate",
            moveType: "dom",
            addMovingDropdown: true,
            movingDialogWidth: 400,
            movingDialogHeight: "",
            movingDialogAnimationDuration: 200,
            movingDialogCaptionButtonDesc: $.ig.ColumnMoving.locale.movingDialogCaptionButtonDesc,
            movingDialogCaptionButtonAsc: $.ig.ColumnMoving.locale.movingDialogCaptionButtonAsc,
            movingDialogCaptionText: $.ig.ColumnMoving.locale.movingDialogCaptionText,
            movingDialogDisplayText: $.ig.ColumnMoving.locale.movingDialogDisplayText,
            dropDownMoveLeftText: $.ig.ColumnMoving.locale.dropDownMoveLeftText,
            dropDownMoveRightText: $.ig.ColumnMoving.locale.dropDownMoveRightText,
            dropDownMoveFirstText: $.ig.ColumnMoving.locale.dropDownMoveFirstText,
            dropDownMoveLastText: $.ig.ColumnMoving.locale.dropDownMoveLastText,
            movingToolTipMove: $.ig.ColumnMoving.locale.movingToolTipMove
        },

        css: {
            headerCellMouseOver: "ui-state-hover",
            dropDownButton: "ui-iggrid-moving-indicator",
            dropDownIndicatorContainer: "ui-iggrid-indicatorcontainer",
            dragIndicatorTop: "ui-iggrid-columnmoving-dragtop",
            dragIndicatorBottom: "ui-iggrid-columnmoving-dragbottom",
            featureChooserIconContainer: "ui-iggrid-featurechoosericoncontainer",
            featureChooserMovingDialogIcon: "ui-icon ui-icon-newwin",
            featureChooserLeftIcon: "ui-icon ui-iggrid-icon-left",
            featureChooserRightIcon: "ui-icon ui-iggrid-icon-right",
            featureChooserFirstIcon: "ui-icon ui-iggrid-icon-first",
            featureChooserLastIcon: "ui-icon ui-iggrid-icon-last",
            columnMovingDropDown: "ui-iggrid-featurechooser-dropdown-dialog ui-widget ui-widget-content ui-corner-all",
            columnMovingDropDownList: "ui-iggrid-featurechooser-list ui-menu",
            columnMovingDropDownItem: "ui-iggrid-featurechooserddlistitemicons ui-state-default",
            columnMovingDropDownItemHover: "ui-iggrid-featurechooser-listitem-hover ui-state-active ui-state-hover",
            columnMovingDropDownItemText: "ui-iggrid-featurechooserddlistitemtext",
            columnMovingIndicatorSelected: "ui-iggrid-hiding-indicator-selected",
            movingDialogItemList: "ui-iggrid-moving-dialog-columns",
            movingDialogListItem: "ui-widget-content",
            movingDialogListItemArrowUp: "ui-icon-arrowthick-1-n ui-button-icon-primary ui-icon",
            movingDialogListItemArrowDown: "ui-icon-arrowthick-1-s ui-button-icon-primary ui-icon",
            movingDialogListItemArrowButton: "ui-button ui-corner-all ui-button-icon-only ig-sorting-indicator",
            movingDialogListItemText: "ui-iggrid-dialog-text",
            movingDialogCloseButton: "ui-icon ui-icon-close"
        },

        events: {
            columnDragStart: "columnDragStart",
            columnDragEnd: "columnDragEnd",
            columnDragCanceled: "columnDragCanceled",
            columnMoving: "columnMoving",
            columnMoved: "columnMoved",
            movingDialogOpening: "movingDialogOpening",
            movingDialogOpened: "movingDialogOpened",
            movingDialogDragged: "movingDialogDragged",
            movingDialogClosing: "movingDialogClosing",
            movingDialogClosed: "movingDialogClosed",
            movingDialogContentsRendering: "movingDialogContentsRendering",
            movingDialogContentsRendered: "movingDialogContentsRendered",
            movingDialogMoveUpButtonPressed: "movingDialogMoveUpButtonPressed",
            movingDialogMoveDownButtonPressed: "movingDialogMoveDownButtonPressed",
            movingDialogDragColumnMoving: "movingDialogDragColumnMoving",
            movingDialogDragColumnMoved: "movingDialogDragColumnMoved"
        },

        _createWidget: function (c, b) {
            this.options.columnSettings = [];
            $.Widget.prototype._createWidget.apply(this, arguments)
        },

        _create: function () {
            this._cache = [];
            this._cKey = "";
            this._cIdx = -1;
            this._tKey = "";
            this._tIdx = -1;
            this._helper = null;
            this._oTh = null;
            this._cmib = null;
            this._cmit = null;
            this._movingDialog = null;
            this._grpByEnabled = false;
            this._ddButtons = {
                first: {
                    text: this.options.dropDownMoveFirstText,
                    func: $.proxy(this._moveFirst, this),
                    icon: this.css.featureChooserFirstIcon
                },
                left: {
                    text: this.options.dropDownMoveLeftText,
                    func: $.proxy(this._moveLeft, this),
                    icon: this.css.featureChooserLeftIcon
                },
                right: {
                    text: this.options.dropDownMoveRightText,
                    func: $.proxy(this._moveRight, this),
                    icon: this.css.featureChooserRightIcon
                },
                last: {
                    text: this.options.dropDownMoveLastText,
                    func: $.proxy(this._moveLast, this),
                    icon: this.css.featureChooserLastIcon
                }
            };
            if (this.options.mode === "immediate" && this.options.moveType === "render") {
                this.options.moveType = "dom"
            }
            if (this.options.addMovingDropdown === false) {
                this.renderInFeatureChooser = false
            }
        },

        _setOption: function (b, c) {
            if (b === "mode" || b === "columnSettings" || b === "addMovingDropdown") {
                throw new Error($.ig.Grid.locale.optionChangeNotSupported + " " + b)
            } else {
                $.Widget.prototype._setOption.apply(this, arguments)
            }
        },

        destroy: function () {
            this._unregisterEvents();
            this._removeMoving();
            $.Widget.prototype.destroy.call(this);
            return this
        },

        moveColumn: function (c, e, b, d) {
            this._moveColumn(c, e, b, d, true)
        },

        _headerCellRendered: function (c, b) {
            if (this.grid.id() !== b.owner.id()) {
                return
            }
            this._thRendered(b.th)
        },

        _headerRendered: function (c, b) {
            if (this.grid.id() !== b.owner.id()) {
                return
            }
            this._thsRendered(b.table)
        },

        _gridRendered: function (c, b) {
            this._updateLayout()
        },

        _headerPicked: function (d, c) {
            var b = $(d.target).closest("th"), e = this._getIdOfTh(b), f = true;
            c = {
                columnKey: e,
                columnIndex: b.index(),
                owner: this,
                header: b,
                helper: this._helper
            };
            f = this._trigger(this.events.columnDragStart, d, c);
            if (f) {
                this._thPicked(b, e)
            }
            return f
        },

        _headerDragged: function (c, b) {
            var d;
            if (this._oPos) {
                d = this._oPos.left > b.position.left
            } else {
                d = b.originalPosition.left > b.position.left
            }
            this._oPos = {
                left: b.position.left
            };
            this._thDragged(b.helper, b.offset, d)
        },

        _headerDropped: function (c, b) {
            var d;
            d = this._trigger(this.events.columnDragEnd, c, b);
            if (d) {
                this._thDropped()
            } else {
                this._trigger(this.events.columnDragCanceled, c, b)
            }
            return d
        },

        _dialogUpPressed: function (e, c) {
            var i = $(e.target), g = i.closest("li"), h = g.parent(), f = g.index(), d = i.closest("span").attr("datakey"), b;
            b = {
                owner: this,
                movingDialog: $("#" + this.grid.id() + "_moving_movingDialog"),
                columnKey: d,
                columnIndex: f,
                targetIndex: f === 0 ? h.children().length - 1 : f - 1
            };
            if (f === 0) {
                g.detach().insertAfter(h.children("li:last"))
            } else {
                g.detach().insertBefore(h.children("li:eq(" + (f - 1) + ")"))
            }
            this._moveColumn(d, f === 0 ? g.parent().children().length - 1 : f - 1, true, this.options.moveType === "dom", false);
            this._trigger(this.events.movingDialogMoveUpButtonPressed, null, b)
        },

        _dialogDownPressed: function (e, c) {
            var i = $(e.target), g = i.closest("li"), h = g.parent(), f = g.index(), d = i.closest("span").attr("datakey"), b;
            b = {
                owner: this,
                movingDialog: $("#" + this.grid.id() + "_moving_movingDialog"),
                columnKey: d,
                columnIndex: f,
                targetIndex: f === h.children().length - 1 ? 0 : f + 1
            };
            if (f === g.parent().children().length - 1) {
                g.detach().insertBefore(h.children("li:first"))
            } else {
                g.detach().insertAfter(h.children("li:eq(" + f + ")"))
            }
            this._moveColumn(d, f === g.parent().children().length - 1 ? 0 : f + 1, true, this.options.moveType === "dom", false);
            this._trigger(this.events.movingDialogMoveDownButtonPressed, null, b)
        },

        _dialogRearranging: function (e, c) {
            var g, b, f = $(c.draggable).attr("data-value"), d = c.originalIndex, h = c.targetIndex;
            b = {
                owner: this,
                movingDialog: $("#" + this.grid.id() + "_moving_movingDialog"),
                columnKey: f,
                columnIndex: d,
                targetIndex: h
            };
            g = this._trigger(this.events.movingDialogDragColumnMoving, null, b);
            if (g) {
                this._moveColumn(f, h, true, this.options.moveType === "dom", false);
                b.movingDialog.find("div.ui-state-highlight").remove();
                this._trigger(this.events.movingDialogDragColumnMoved, null, b);
                return true
            }
            return false
        },

        _dialogDragged: function (c, b) {
            this._trigger(this.events.movingDialogDragged, null, {
                movingDialogElement: c.target,
                owner: this,
                originalPosition: b.originalPosition,
                position: b.position
            })
        },

        _dialogOpening: function (c, b) {
            var d;
            d = this._trigger(this.events.movingDialogOpening, null, {
                movingDialogElement: c.target,
                owner: this
            });
            if (d) {
                this._renderMovingDialogContent(c, b);
                this._trigger(this.events.movingDialogOpened, null, {
                    movingDialogElement: c.target,
                    owner: this
                })
            }
        },

        _dialogClosing: function (c, b) {
            return this._trigger(this.events.movingDialogClosing, null, {
                movingDialogElement: c.target,
                owner: this
            })
        },

        _dialogClosed: function (c, b) {
            this._trigger(this.events.movingDialogClosed, null, {
                movingDialogElement: c.target,
                owner: this
            })
        },

        _dropDownMouseDown: function (c, b) {
            var d = $(c.target);
            this._toggleDropDown(d, $("div[data-moving-inddropdown='" + this.grid.id() + "']"));
            this._cancelEvent(c)
        },

        _dropDownKeyDown: function (d, b) {
            var g, e, f, c = $("div[data-moving-inddropdown='" + this.grid.id() + "']");
            if (d.keyCode === $.ui.keyCode.ENTER || d.keyCode === $.ui.keyCode.SPACE) {
                g = c.find("ul .ui-state-hover:first");
                if (c.is(":visible") && g.length > 0) {
                    g.trigger("mousedown")
                }
                this._toggleDropDown($(d.target), c, false);
                this._cancelEvent(d)
            } else {
                if (d.keyCode === $.ui.keyCode.ESCAPE) {
                    this._toggleDropDown($(d.target), c, false);
                    this._cancelEvent(d)
                } else {
                    if (d.keyCode === $.ui.keyCode.DOWN || d.keyCode === $.ui.keyCode.UP) {
                        if (c.is(":visible")) {
                            g = c.find("ul .ui-state-hover:first").closest("li");
                            if (g.length === 0) {
                                e = c.find("ul li:eq(0)")
                            } else {
                                if (g.index() === 0 && d.keyCode === $.ui.keyCode.UP) {
                                    e = g.parent().children(":last")
                                } else {
                                    e = d.keyCode === $.ui.keyCode.DOWN ? g.next() : g.prev()
                                }
                            }
                            c.find("ul .ui-state-hover").removeClass(this.css.columnMovingDropDownItemHover);
                            f = e.find("[role='button']");
                            if (f.length > 0) {
                                e = f
                            }
                            e.addClass(this.css.columnMovingDropDownItemHover)
                        }
                        this._cancelEvent(d)
                    }
                }
            }
        },

        _dropDownButtonMouseOver: function (c, b) {
            $(c.currentTarget).addClass(this.css.columnMovingDropDownItemHover)
        },

        _dropDownButtonMouseOut: function (c, b) {
            $(c.currentTarget).removeClass(this.css.columnMovingDropDownItemHover)
        },

        _moveLeft: function (d, b) {
            var f = this._cache.siblings[b], c, g, e;
            for (e = 0; e < f.length; e++) {
                c = f[e].key || f[e].identifier;
                if (c === b) {
                    if (e > 0) {
                        g = f[e - 1].key || f[e - 1].identifier;
                        this._moveColumn(c, g, false, this.options.moveType === "dom", false)
                    }
                    break
                }
            }
        },

        _moveRight: function (d, b) {
            var f = this._cache.siblings[b], c, g, e;
            for (e = 0; e < f.length; e++) {
                c = f[e].key || f[e].identifier;
                if (c === b) {
                    if (e < f.length - 1) {
                        g = f[e + 1].key || f[e + 1].identifier;
                        this._moveColumn(c, g, true, this.options.moveType === "dom", false)
                    }
                    break
                }
            }
        },

        _moveFirst: function (d, b) {
            var f = this._cache.siblings[b], c, g, e;
            for (e = 0; e < f.length; e++) {
                c = f[e].key || f[e].identifier;
                if (c === b) {
                    if (e !== 0) {
                        g = f[0].key || f[0].identifier;
                        this._moveColumn(c, g, false, this.options.moveType === "dom", false)
                    }
                    break
                }
            }
        },

        _moveLast: function (d, b) {
            var f = this._cache.siblings[b], c, g, e;
            for (e = 0; e < f.length; e++) {
                c = f[e].key || f[e].identifier;
                if (c === b) {
                    if (e !== f.length - 1) {
                        g = f[f.length - 1].key || f[f.length - 1].identifier;
                        this._moveColumn(c, g, true, this.options.moveType === "dom", false)
                    }
                    break
                }
            }
        },

        _headerMouseOver: function (c, b) {
            $(c.target).closest("th").addClass(this.css.headerCellMouseOver)
        },

        _headerMouseOut: function (c, b) {
            $(c.target).closest("th").removeClass(this.css.headerCellMouseOver)
        },

        _renderHelpers: function () {
            this._cmib = $("<div>&nbsp;</div>").attr("id", this.grid.id() + "_moving_indicator_bottom").addClass(this.css.dragIndicatorTop).css({
                position: "absolute",
                "z-index": "1000000",
                width: "16px",
                height: "16px",
                display: "none"
            }).appendTo(document.body);
            this._cmit = $("<div>&nbsp;</div>").attr("id", this.grid.id() + "_moving_indicator_top").addClass(this.css.dragIndicatorBottom).css({
                position: "absolute",
                "z-index": "1000000",
                width: "16px",
                height: "16px",
                display: "none"
            }).appendTo(document.body)
        },

        _renderFeatureChooser: function (b, d) {
            var c = this.grid.element.data("igGridFeatureChooser");
            if (c) {
                if (c._shouldRenderInFeatureChooser(b) === true) {
                    this._addMoveButtonsInFeatureChooser(c, b);
                    c._renderInFeatureChooser(b, {
                        name: "ColumnMovingDialog",
                        text: this.options.movingDialogDisplayText,
                        secondaryIconClass: this.css.featureChooserMovingDialogIcon,
                        method: this._openMovingDialogHandler,
                        groupName: "modaldialog",
                        groupOrder: 3,
                        order: 5
                    })
                } else {
                    this._renderMovingDropDownIndicator(d, b)
                }
            }
        },

        _renderMovingDropDownIndicator: function (g, e) {
            var c, b, d, f = this;
            c = $("<span><></span>").addClass(this.css.dropDownButton);
            b = $("<a></a>").attr("href", "#").attr("th-remove-focus", "").attr("title", this.options.movingToolTipMove).attr("id", this.grid.id() + "_moving_headerButton_" + e).bind({
                keydown: this._dropDownKeyHandler,
                blur: function (h) {
                    f._toggleDropDown($(h.target), $("div[data-moving-inddropdown='" + f.grid.id() + "']"), true)
                },
                mousedown: this._dropDownButtonHandler,
                mouseup: this._cancelEventHandler,
                click: this._cancelEventHandler
            });
            d = $("<div></div>").addClass(this.css.dropDownIndicatorContainer).appendTo(g);
            c.appendTo(b);
            b.appendTo(d);
            this._needToRenderDropDown = true
        },

        _renderMovingDialogContent: function () {
            var b = this._movingDialog.igGridModalDialog("getContent"), d = $("#" + this.grid.element[0].id + "_moving_movingDialog"), c = b.find("#" + this.grid.id() + "_dialog_tree"), e;
            e = this._trigger(this.events.movingDialogContentsRendering, null, {
                movingDialogElement: d,
                owner: this
            });
            if (e) {
                if (c.length > 0) {
                    c.igTree("option", "dataSource", this._getClonedDataSource(this.grid._oldCols || this.grid._visibleColumns()))
                } else {
                    this._initializeTree(b)
                }
                $("span[class='" + this.css.movingDialogListItemArrowDown + "']").unbind("mousedown", this._dialogDownHandler).bind("mousedown", this._dialogDownHandler);
                $("span[class='" + this.css.movingDialogListItemArrowUp + "']").unbind("mousedown", this._dialogUpHandler).bind("mousedown", this._dialogUpHandler);
                this._trigger(this.events.movingDialogContentsRendered, null, {
                    movingDialogElement: d,
                    owner: this
                })
            }
        },

        _initializeTree: function (b) {
            $("<ul id='" + this.grid.id() + "_dialog_tree'></ul>").appendTo(b).igTree({
                dataSourceType: "json",
                dataSource: this._getClonedDataSource(this.grid._oldCols || this.grid._visibleColumns()),
                bindings: {
                    textKey: "headerText",
                    valueKey: "key",
                    childDataProperty: "group",
                    nodeContentTemplate: this._getTreeTemplate() + "<span>${headerText}</span>"
                },
                dragAndDrop: true,
                dragAndDropSettings: {
                    dragAndDropMode: "move",
                    revert: true,
                    zIndex: 1000001,
                    customDropValidation: this._treeDropValidation,
                    containment: false
                },
                nodeDropping: this._dialogRearrangingHandler,
                selectionChanging: function () {
                    return false
                }
            })
        },

        _getClonedDataSource: function (b) {
            return jQuery.extend(true, [], b)
        },

        _getTreeTemplate: function () {
            var c, b;
            c = "<span class='" + this.css.movingDialogListItemArrowButton + "'><span id='" + this.grid.id() + "_moving_dialog_${key}_up' title='" + this.options.movingDialogCaptionButtonAsc + "' role='button' datakey='${key}' class='" + this.css.movingDialogListItemArrowUp + "' style='margin-top:-13px;'></span></span>";
            b = "<span class='" + this.css.movingDialogListItemArrowButton + "'><span id='" + this.grid.id() + "_moving_dialog_${key}_down' title='" + this.options.movingDialogCaptionButtonDesc + "' role='button' datakey='${key}' class='" + this.css.movingDialogListItemArrowDown + "' style='margin-top:-13px;'></span></span>";
            return c + b
        },

        _renderMovingDialog: function () {
            var e = this.options, b, c, d = $("<div></div>").appendTo("body").attr("id", this.grid.element[0].id + "_moving_movingDialog");
            this._movingDialog = d;
            d.igGridModalDialog({
                renderFooterButtons: false,
                modalDialogCaptionText: e.movingDialogCaptionText,
                modalDialogWidth: e.movingDialogWidth,
                modalDialogHeight: e.movingDialogHeight,
                animationDuration: e.movingDialogAnimationDuration,
                gridContainer: this.grid.container(),
                modalDialogOpening: this._dialogOpeningHandler,
                modalDialogMoving: this._dialogDraggedHandler,
                modalDialogClosing: this._dialogClosingHandler,
                modalDialogClosed: this._dialogClosedHandler
            });
            b = d.igGridModalDialog("getCaptionButtonContainer");
            c = $("<button></button>").attr("id", this.grid.element[0].id + "_moving_movingDialog_closeButton").appendTo(b);
            c.igButton({
                onlyIcons: true,
                icons: {
                    primary: this.css.movingDialogCloseButton
                },
                width: "20px",
                height: "20px",
                click: this._dialogCloseButtonHandler
            })
        },

        _renderDropDown: function (c) {
            var e = this, b, d;
            b = $("<div data-moving-inddropdown='" + this.grid.id() + "'></div>").css("position", "absolute").css("display", "none").addClass(this.css.columnMovingDropDown).appendTo("body");
            d = $('<ul tabindex="0"></ul>').addClass(this.css.columnMovingDropDownList).appendTo(b);
            $.each(this._ddButtons, function (f, g) {
                $("<li></li>").addClass(e.css.columnMovingDropDownItem).attr("data-key", f).bind({
                    mouseover: e._dropDownButtonMouseOverHandler,
                    mouseout: e._dropDownButtonMouseOutHandler
                }).append($("<span></span>").addClass(e.css.featureChooserIconContainer).append($("<span></span>").addClass(g.icon))).append($("<span></span>").addClass(e.css.columnMovingDropDownItemText).text(g.text)).appendTo(d)
            });
            $("<a></a>").appendTo($("<li></li>").appendTo(d)).igButton({
                labelText: this.options.movingDialogCaptionText,
                mousedown: function (f) {
                    if (f.target) {
                        setTimeout(function () {
                            $(f.target).removeClass("ui-state-active")
                        }, 0)
                    }
                    e._toggleDropDown(c, b, true);
                    e._openMovingDialog(c, b, true)
                }
            });
            return b
        },

        _toggleDropDown: function (c, b, e) {
            var l, d, f, j, i, g = (b.is(":visible") === true), k = this, h;
            if ((b.data("isAnimating") === true) || (g === false && e === true)) {
                return
            }
            if (!g) {
                l = c.closest("th");
                f = l.parent().children().length - l.index() <= 2;
                j = l.offset();
                if (f) {
                    i = j.left + l.outerWidth() - b.outerWidth();
                    i = Math.max(0, i)
                } else {
                    i = j.left
                }
                b.css("top", j.top + l.outerHeight());
                b.css("left", i);
                $.each(this._ddButtons, function (m, n) {
                    h = b.find("li[data-key='" + m + "']").bind("mousedown.temp", function (o) {
                        k._toggleDropDown(c, b, true);
                        d = l.attr("id");
                        if (d) {
                            d = d.replace(k.grid.id() + "_", "")
                        } else {
                            d = l.attr("data-mch-id")
                        }
                        n.func(null, d);
                        o.stopPropagation();
                        o.preventDefault()
                    })
                })
            } else {
                $.each(this._ddButtons, function (m, n) {
                    h = b.find("li[data-key='" + m + "']").unbind("mousedown.temp")
                })
            }
            b.data("isAnimating", true);
            b.toggle(200, function () {
                if (b.is(":visible") === true) {
                    l.find("a").focus();
                    if (c) {
                        c.addClass(k.css.columnMovingIndicatorSelected);
                        c.attr("data-indicator-selected", "true")
                    }
                } else {
                    if (c) {
                        c.removeClass(k.css.columnMovingIndicatorSelected);
                        c.removeAttr("data-indicator-selected")
                    }
                }
                b.data("isAnimating", false)
            })
        },

        _addMoveButtonsInFeatureChooser: function (b, c) {
            b._renderInFeatureChooser(c, {
                name: "First",
                text: this.options.dropDownMoveFirstText,
                iconClass: this.css.featureChooserFirstIcon,
                isSelectable: false,
                isSelected: false,
                method: $.proxy(this._moveFirst, this),
                updateOnClickAll: false,
                groupName: "click",
                groupOrder: 2,
                order: 2
            });
            b._renderInFeatureChooser(c, {
                name: "Left",
                text: this.options.dropDownMoveLeftText,
                iconClass: this.css.featureChooserLeftIcon,
                isSelectable: false,
                isSelected: false,
                method: $.proxy(this._moveLeft, this),
                updateOnClickAll: false,
                groupName: "click",
                groupOrder: 2,
                order: 3
            });
            b._renderInFeatureChooser(c, {
                name: "Right",
                text: this.options.dropDownMoveRightText,
                iconClass: this.css.featureChooserRightIcon,
                isSelectable: false,
                isSelected: false,
                method: $.proxy(this._moveRight, this),
                updateOnClickAll: false,
                groupName: "click",
                groupOrder: 2,
                order: 4
            });
            b._renderInFeatureChooser(c, {
                name: "Last",
                text: this.options.dropDownMoveLastText,
                iconClass: this.css.featureChooserLastIcon,
                isSelectable: false,
                isSelected: false,
                method: $.proxy(this._moveLast, this),
                updateOnClickAll: false,
                groupName: "click",
                groupOrder: 2,
                order: 6
            })
        },

        _moveColumn: function (d, h, b, f, e) {
            var g = true, c;
            if (e === false) {
                c = {
                    columnKey: this._cKey,
                    columnIndex: this._cIdx,
                    targetIndex: this._tIdx,
                    owner: this
                };
                g = this._trigger(this.events.columnMoving, null, c)
            }
            if (g) {
                this.grid.moveColumn(d, h, b, f);
                if (e === false) {
                    delete c.columnIndex;
                    delete c.targetIndex;
                    c.oldIndex = this._cIdx;
                    c.newIndex = this._tIdx;
                    this._triggerColumnMovedAsync(c)
                }
            }
            this._updateLayout()
        },

        _thRendered: function (d) {
            var b = this._getIdOfTh(d), c = d.index("not[data-skip='true']");
            if (this._isColumnMovable(b, c) === true) {
                this._markForMoving(d);
                if (this.options.addMovingDropdown === true) {
                    this._renderFeatureChooser(b, d)
                }
            }
        },

        _thsRendered: function (b) {
            if (this.options.mode === "deferred") {
                this._renderHelpers()
            }
            if (this.options.addMovingDropdown === true) {
                if ($("#" + this.grid.element[0].id + "_moving_movingDialog").length === 0) {
                    this._renderMovingDialog()
                }
                if ($("div[data-moving-inddropdown='" + this.grid.id() + "']").length === 0) {
                    this._renderDropDown()
                }
            }
        },

        _thPicked: function (c, b) {
            this._cKey = b;
            this._cIdx = c.index();
            if (this.options.mode === "immediate") {
                c.children().hide();
                this._oTh = c
            }
        },

        _thDragged: function (b, h, f) {
            var k = this._cache.siblings[this._cKey], c, d, e, o, n, g, p;
            e = f === true ? h.left : h.left + b.width();
            if (this.grid._loadingIndicator._indicator.is(":visible")) {
                return
            }
            for (c = 0; c <= k.length; c++) {
                d = c === k.length ? c - 1 : c;
                n = k[d].key || k[d].identifier;
                o = this._cache.columns[n];
                p = o.offset.left;
                p = c === k.length ? p + o.dimensions.width : p;
                if (e > p - 20 && e < p + 20) {
                    g = this._tKey !== n;
                    this._tKey = n;
                    this._tIdx = d;
                    this._last = c === k.length;
                    if (this.options.mode === "immediate") {
                        if (g === true && this._cKey !== this._tKey) {
                            this._moveColumn(this._cKey, this._tKey, !f, true, false)
                        }
                    } else {
                        this._showIndicators(p, o.offset.top, o.dimensions)
                    }
                }
            }
        },

        _thDropped: function () {
            if (this.options.mode === "immediate") {
                this._oTh.children().show();
                return
            }
            this._hideIndicators();
            if (this._tKey && this._cKey !== this._tKey) {
                this._moveColumn(this._cKey, this._tKey, this._last, this.options.moveType === "dom", false)
            }
            delete this._cKey;
            delete this._tKey;
            $(".ui-draggable-dragging").hide()
        },

        _isColumnMovable: function (b, e) {
            var d, c;
            for (d = 0; d < this.options.columnSettings.length; d++) {
                c = this.options.columnSettings[d];
                if (c.columnIndex) {
                    if (d === e) {
                        return c.allowMoving
                    }
                }
                if (c.columnKey) {
                    if (b === c.columnKey) {
                        return c.allowMoving
                    }
                }
            }
            return true
        },

        _getIdOfTh: function (c) {
            var b = c.attr("data-mch-id");
            if (b) {
                return b
            }
            return c.attr("id").replace(this.grid.id() + "_", "")
        },

        _getThById: function (b) {
            return $("th[data-mch-id='" + b + "'],th[id='" + this.grid.id() + "_" + b + "']")
        },

        _applyEmptyHeader: function () {
            var b = $("#" + this.grid.id() + "_moving_immediate_th");
            b.detach().insertBefore(this._getThById(this._tKey))
        },

        _removeEmptyHeader: function () {
            var b = $("#" + this.grid.id() + "_moving_immediate_th");
            this._oTh.detach().insertBefore(b).show();
            $("#" + this.grid.id() + "_moving_immediate_th").remove();
            this._oTh = null
        },

        _showIndicators: function (c, d, b) {
            this._cmib.css("left", c - 8).show();
            this._cmib.css("top", d - 16);
            this._cmit.css("top", d + b.height);
            this._cmit.css("left", c - 8).show()
        },

        _hideIndicators: function () {
            this._cmib.hide();
            this._cmit.hide()
        },

        _markForMoving: function (b) {
            if (b.data("draggable") || this._grpByEnabled === true) {
                b.live("draggabledrag", this._moveHandler);
                b.live("draggablestop", this._dropHandler);
                b.live("draggablestart", this._dragHandler);
                return
            }
            b.draggable({
                containment: this.grid.container(),
                appendTo: this.grid.container(),
                distance: 5,
                revert: "valid",
                helper: function (c) {
                    var e, d;
                    e = $(c.target).closest("th");
                    d = e.clone().css("overflow", "hidden").css("z-index", 10000).width(e.width()).addClass("ui-widget ui-iggrid").wrap($('<div class="ui-iggrid-dragMarkup"></div>').width(e.width()));
                    d.height(e.height());
                    return d
                },
                scroll: true,
                drag: this._moveHandler,
                stop: this._dropHandler,
                start: this._dragHandler
            });
            b.unbind("mouseover.moving").bind("mouseover.moving", this._headerMouseOverHandler);
            b.unbind("mouseout.moving").bind("mouseout.moving", this._headerMouseOutHandler)
        },

        _updateLayout: function () {
            var b = this.grid._oldCols || this.grid._visibleColumns(), c = this;
            if (this.grid._loadingIndicator && this.grid._loadingIndicator._indicator.is(":visible")) {
                setTimeout(function () {
                    c._updateLayout()
                }, 50);
                return
            }
            this._cache.columns = {};
            this._cache.siblings = {};
            this._updateLayoutPerLevel(b)
        },

        _updateLayoutPerLevel: function (c) {
            var d, e, b, f;
            for (d = 0; d < c.length; d++) {
                e = c[d].key || c[d].identifier;
                b = this._getThById(e);
                f = b.offset();
                this._cache.columns[e] = {};
                this._cache.columns[e].offset = f;
                this._cache.columns[e].dimensions = {
                    width: b.outerWidth(),
                    height: b.outerHeight()
                };
                this._cache.siblings[e] = c
            }
            for (d = 0; d < c.length; d++) {
                if (c[d].group) {
                    this._updateLayoutPerLevel(c[d].group)
                }
            }
        },

        _openMovingDialog: function () {
            this._movingDialog.igGridModalDialog("openModalDialog")
        },

        _closeMovingDialog: function () {
            this._movingDialog.igGridModalDialog("closeModalDialog")
        },

        _treeDropValidation: function (b) {
            var c = $(this);
            if (c.is("li") && c.parent()[0] === $(b).parent()[0]) {
                return true
            }
            return false
        },

        _triggerColumnMovedAsync: function (b) {
            var c = this;
            if (this.grid._loadingIndicator && this.grid._loadingIndicator._indicator.is(":visible")) {
                setTimeout(function () {
                    c._triggerColumnMovedAsync(b)
                }, 50);
                return
            }
            this._trigger(this.events.columnMoved, null, b)
        },

        _cancelEvent: function (b) {
            b.stopPropagation();
            b.preventDefault()
        },

        _columnMap: function () {
            return $.map(this.grid.options.columns, function (b, c) {
                return {
                    columnKey: b.key,
                    enabled: true
                }
            })
        },

        _removeMoving: function () {
            var e = this.grid.headersTable().find(">thead th"), b, d, c;
            $("[id~='" + this.grid.id() + "'][id~='moving']").remove();
            if (this.options.addMovingDropdown === true) {
                c = $("#" + this.grid.element[0].id + "_moving_movingDialog");
                c.igGridModalDialog("destroy");
                c.remove();
                $("div[data-moving-inddropdown='" + this.grid.id() + "']").remove()
            }
            for (b = 0; b < e.length; ++b) {
                d = $(e[b]);
                d.find(">div").find("span").unbind("mousedown", this._dropDownButtonHandler);
                d.find(">div").remove();
                d.unbind("mouseover.moving", this._headerMouseOverHandler);
                d.unbind("mouseout.moving", this._headerMouseOutHandler);
                if (!this._grpByEnabled) {
                    if (d.data && d.data("draggable")) {
                        d.draggable("destroy")
                    }
                } else {
                    d.unbind("draggabledrag", this._moveHandler);
                    d.unbind("draggablestop", this._dropHandler);
                    d.unbind("draggablestart", this._dragHandler)
                }
            }
        },

        _unregisterEvents: function () {
            this.grid.element.unbind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.unbind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.unbind("iggridrendered", this._gridRenderedHandler);
            $("#" + this.grid.id() + (this.grid.options.fixedHeaders === true ? "_headers" : "") + " th").unbind("moving");
            this.grid.element.unbind("iggridresizingcolumnresized", this._columnStateChanged);
            this.grid.element.unbind("iggridhidingcolumnhidden", this._columnStateChanged);
            this.grid.element.unbind("iggridpagingpagerrendered", this._columnStateChanged)
        },

        _registerEvents: function () {
            this.grid.element.bind("iggridheadercellrendered", this._headerCellRenderedHandler);
            this.grid.element.bind("iggridheaderrendered", this._headerRenderedHandler);
            this.grid.element.bind("iggridrendered", this._gridRenderedHandler);
            this.grid.element.bind("iggridresizingcolumnresized", this._columnStateChanged);
            this.grid.element.bind("iggridhidingcolumnhidden", this._columnStateChanged);
            this.grid.element.bind("iggridpagingpagingdropdownrendered", this._columnStateChanged)
        },

        _createHandlers: function () {
            this._headerCellRenderedHandler = $.proxy(this._headerCellRendered, this);
            this._headerRenderedHandler = $.proxy(this._headerRendered, this);
            this._gridRenderedHandler = $.proxy(this._gridRendered, this);
            this._dragHandler = $.proxy(this._headerPicked, this);
            this._moveHandler = $.proxy(this._headerDragged, this);
            this._dropHandler = $.proxy(this._headerDropped, this);
            this._headerMouseOverHandler = $.proxy(this._headerMouseOver, this);
            this._headerMouseOutHandler = $.proxy(this._headerMouseOut, this);
            this._dropDownButtonHandler = $.proxy(this._dropDownMouseDown, this);
            this._dropDownKeyHandler = $.proxy(this._dropDownKeyDown, this);
            this._openMovingDialogHandler = $.proxy(this._openMovingDialog, this);
            this._dropDownButtonMouseOverHandler = $.proxy(this._dropDownButtonMouseOver, this);
            this._dropDownButtonMouseOutHandler = $.proxy(this._dropDownButtonMouseOut, this);
            this._dialogOpeningHandler = $.proxy(this._dialogOpening, this);
            this._dialogDraggedHandler = $.proxy(this._dialogDragged, this);
            this._dialogClosingHandler = $.proxy(this._dialogClosing, this);
            this._dialogClosedHandler = $.proxy(this._dialogClosed, this);
            this._dialogCloseButtonHandler = $.proxy(this._closeMovingDialog, this);
            this._dialogUpHandler = $.proxy(this._dialogUpPressed, this);
            this._dialogDownHandler = $.proxy(this._dialogDownPressed, this);
            this._dialogRearrangingHandler = $.proxy(this._dialogRearranging, this);
            this._columnStateChanged = $.proxy(this._updateLayout, this);
            this._cancelEventHandler = $.proxy(this._cancelEvent, this)
        },

        _injectGrid: function (b, d) {
            var c;
            this.grid = b;
            if (d === true) {
                return
            }
            if (this.grid.element.igGridFeatureChooser !== undefined) {
                this.grid.element.igGridFeatureChooser()
            } else {
                throw new Error($.ig.ColumnMoving.locale.featureChooserNotReferenced)
            }
            for (c = 0; c < this.grid.options.features.length; c++) {
                if (this.grid.options.features[c].name === "GroupBy") {
                    this._grpByEnabled = true;
                    break
                }
            }
            this._createHandlers();
            this._unregisterEvents();
            this._registerEvents()
        }
    });

    $.extend($.ui.igGridColumnMoving, {
        version: "12.2.20122.1021"
    })

}(jQuery));
