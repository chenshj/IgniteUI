﻿/*
 * Infragistics.Web.ClientUI Grid Tooltips 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.3.js
 *	modernizr.js
 *	ig.ui.shared.js
 *	ig.ui.grid.framework.js
 */
if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}

(function (a) {

    a.widget("ui.igGridTooltips", {

        options: {
            visibility: "overflow",
            style: "tooltip",
            showDelay: 500,
            hideDelay: 300,
            columnSettings: [
                {
                    columnKey: null,
                    columnIndex: -1,
                    allowTooltips: true
                }
            ],
            fadeTimespan: 150,
            cursorLeftOffset: 10,
            cursorTopOffset: 15
        },

        css: {
            tooltip: "ui-iggrid-tooltip",
            tooltipContent: "ui-iggrid-tooltip-content"
        },

        events: {
            tooltipShowing: "tooltipShowing",
            tooltipShown: "tooltipShown",
            tooltipHiding: "tooltipHiding",
            tooltipHidden: "tooltipHidden"
        },

        _createWidget: function (c, b) {
            this.visible = false;
            this._canFadeIn = true;
            this._canFadeOut = true;
            a.Widget.prototype._createWidget.apply(this, arguments)
        },

        destroy: function () {
            this.grid.element.unbind(".tooltip");
            a("#" + this.id() + "_ruler").remove();
            this.tooltip.remove();
            a.Widget.prototype.destroy.call(this);
            return this
        },

        id: function () {
            return this.tooltip[0].id
        },

        _injectGrid: function (b, c) {
            if (c === true) {
                return
            }
            this.grid = b;
            this._createTooltip();
            this.grid.element.bind("iggridrendered", a.proxy(this._dataRendered, this));
            this.grid.element.bind("iggridrowsrendered", a.proxy(this._rowsRendered, this))
        },

        _createTooltip: function () {
            if (this.options.style === "tooltip") {
                this.tooltip = a("<div></div>").attr("id", this.grid.id() + "_tooltips").attr("role", "tooltip").addClass("ui-tooltip").addClass("ui-widget").addClass("ui-corner-all").addClass("ui-widget-content").addClass(this.css.tooltip).css({
                    position: "absolute",
                    display: "none",
                    "white-space": "normal",
                    "word-wrap": "break-word"
                });
                this._createContainer()
            } else {
                if (this.options.style === "popover") {
                    this.tooltip = a("<div><div>").attr("id", this.grid.id() + "_tooltips").igPopover({
                        fadeTimespan: this.options.fadeTimespan
                    })
                }
            }
            this._createRuler();
            this.tooltip.appendTo(document.body)
        },

        _createRuler: function () {
            a("<span></span>").attr("id", this.id() + "_ruler").css("display", "none").css("white-space", "normal").css("word-wrap", "break-word").appendTo(document.body)
        },

        _createContainer: function () {
            a("<div></div>").attr("id", this.id() + "_container").addClass("ui-tooltip-content").addClass(this.css.tooltipContent).appendTo(this.tooltip).bind("mouseenter.tooltip", a.proxy(this._tooltipMouseEnter, this)).bind("mouseleave.tooltip", a.proxy(this._tooltipMouseLeave, this))
        },

        _displayOverflow: function (b) {
            var c = a("#" + this.id() + "_ruler"), d;
            c.text(b.text());
            c.css({
                "font-family": b.css("font-family"),
                "font-size": b.css("font-size"),
                "font-size-adjust": b.css("font-size-adjust"),
                "font-stretch": b.css("font-stretch"),
                "font-style": b.css("font-style"),
                "font-variant": b.css("font-variant"),
                "font-weight": b.css("font-weight"),
                "padding-left": b.css("padding-left"),
                "padding-top": b.css("padding-top"),
                "padding-right": b.css("padding-right"),
                "padding-bottom": b.css("padding-bottom")
            });
            c.width(b.width());
            d = c.height();
            if (d <= b.height()) {
                return false
            }
            return true
        },

        _dataRendered: function (c, d) {
            var b;
            if (d !== undefined) {
                if (a(d.owner.element).attr("id") !== this.grid.id()) {
                    return
                }
            }
            b = this.grid.element.children("tbody");
            this._registerMouseEvents(b);
            if (this.grid.options.fixedHeaders === true) {
                this._$thead = a("#" + this.grid.id() + "_headers thead")
            } else {
                this._$thead = a("#" + this.grid.id() + " thead")
            }
        },

        _rowsRendered: function (c, d) {
            var b;
            if (d !== undefined) {
                if (a(d.owner.element).attr("id") !== this.grid.id()) {
                    return
                }
            }
            b = this.grid.element.children("tbody");
            this._registerMouseEvents(b)
        },

        _registerMouseEvents: function (b) {
            b.unbind("mouseleave.tooltip").bind("mouseleave.tooltip", a.proxy(this._gridMouseLeave, this));
            b.unbind("mousemove.tooltip").bind("mousemove.tooltip", a.proxy(this._gridMouseMove, this))
        },

        _gridMouseLeave: function (b, c) {
            clearTimeout(this.timeoutShowing);
            clearTimeout(this.timeoutHiding);
            if (a("#" + this.id()).css("display") !== "none") {
                this._hideTooltip(true)
            }
            this._currentlyHovered = null
        },

        _gridMouseMove: function (d, g) {
            var b = a(d.target).closest("td,th"), c, e = true, f;
            if (b.closest("table").attr("id") !== this.grid.id()) {
                return
            }
            this.mouseX = d.pageX;
            this.mouseY = d.pageY;
            if (b[0] === this._currentlyHovered || b.length === 0) {
                return
            }
            c = this._getElementValue(b);
            if (c === undefined) {
                e = true
            }
            if (b[0] === this._currentlyDisplayed && this.visible === true) {
                e = false;
                clearTimeout(this.timeoutHiding);
                return
            }
            this._currentlyHovered = b[0];
            this._previouslyHoveredData = this._currentlyHoveredData;
            this._currentlyHoveredData = c;
            clearTimeout(this.timeoutShowing);
            f = this._shouldShowForTarget(b) && c !== undefined && c !== "" && a(d.target).attr("unselectable") === undefined;
            if (this.visible === true && e === true) {
                this._hideTooltip(!f)
            }
            if (f === true) {
                this._currentlyDisplayed = this._currentlyHovered;
                this._showTooltip()
            }
        },

        _tooltipMouseEnter: function () {
            clearTimeout(this.timeoutHiding)
        },

        _tooltipMouseLeave: function () {
            this._hideTooltip()
        },

        _getElementValue: function (c) {
            var b, h, g, d, f, e = c.closest("tr"), j = -1;
            if (this._$thead.length > 0) {
                b = c.index() - this._$thead.children(":first").children("th[data-skip='true']").length
            } else {
                b = c.index() - c.parent().find("td[data-parent='true'],td[data-skip='true'],th").length
            }
            if (b < 0) {
                return h
            }
            this._pRowIdx = this._rowIdx;
            this._rowIdx = c.closest("tbody").children("tr:not([data-container='true'],[data-grouprow='true'])").index(e);
            if (this.grid.options.virtualization || this.grid.options.rowVirtualization) {
                if (this.grid.options.virtualizationMode === "fixed") {
                    this._rowIdx += this.grid._startRowIndex
                } else {
                    j = parseInt(e.attr("data-row-idx"), 10);
                    this._rowIdx = j || this._rowIdx
                }
            }
            g = this.grid.dataSource.pendingTransactions();
            f = parseInt(c.parent().attr("data-id"), 10);
            for (d = g.length - 1; d >= 0; d--) {
                if (g[d].type === "deleterow") {
                    continue
                }
                if (g[d].type === "cell") {
                    if (g[d].rowId === f && g[d].col === this.grid._visibleColumns()[b].key) {
                        h = g[d].value;
                        break
                    }
                } else {
                    if (g[d].rowId === f) {
                        h = g[d].row[this.grid._visibleColumns()[b].key];
                        break
                    }
                }
            }
            if (h === undefined && this.grid.dataSource.dataView()[this._rowIdx] !== undefined) {
                h = this.grid.dataSource.dataView()[this._rowIdx][this.grid._visibleColumns()[b].key]
            }
            if (a.type(h) === "date") {
                h = new Date(a.ig.formatter(h, "date", "dateTime", true, this.grid.options.enableUTCDates))
            }
            return h
        },

        _shouldShowForTarget: function (c) {
            var d = true, b;
            switch (this.options.visibility) {
                case "always":
                    break;
                case "never":
                    d = false;
                    break;
                case "overflow":
                    d = this._displayOverflow(c);
                    break
            }
            if (d === false) {
                return false
            }
            b = c.parent().children("td:not([data-parent='true'],[data-skip='true'])").index(c);
            this._pColumnIdx = this._columnIdx;
            this._columnIdx = a(this._$thead.children().children()[b]).data("columnIndex");
            if (this._columnIdx === undefined) {
                this._columnIdx = b
            }
            if (this._columnIdx < 0 || this._columnIdx >= this.grid._visibleColumns().length) {
                return false
            }
            this._pColumnKey = this._columnKey;
            this._columnKey = this.grid._visibleColumns()[this._columnIdx].key;
            return d && this._shouldShowForColumn()
        },

        _shouldShowForColumn: function () {
            var c, b = this.options.columnSettings;
            for (c = 0; c < b.length; c++) {
                if (b[c].columnKey === this._columnKey || b[c].columnIndex === this._columnIdx) {
                    return b[c].allowTooltips
                }
            }
            return true
        },

        _hideTooltip: function (c) {
            var e = this, b, d;
            b = {
                owner: this,
                tooltip: c === true ? String(this._currentlyHoveredData) : String(this._previouslyHoveredData),
                value: c === true ? this._currentlyHoveredData : this._previouslyHoveredData,
                element: this._currentlyDisplayed,
                columnKey: c === true ? this._columnKey : this._pColumnKey,
                index: c === true ? this._rowIdx : this._pRowIdx,
                columnIndex: c === true ? this._columnIdx : this._pColumnIdx
            };
            d = function () {
                var f = e._trigger(e.events.tooltipHiding, e, b);
                if (f === true) {
                    e._hideTooltipNoDelay();
                    e._trigger(e.events.tooltipHidden, e, b)
                }
            };
            if (typeof Modernizr === "object" && Modernizr.touch) {
                d()
            } else {
                clearTimeout(this.timeoutHiding);
                this.timeoutHiding = setTimeout(d, this.options.hideDelay)
            }
        },

        _showTooltip: function () {
            var d = this, b, c;
            b = {
                owner: this,
                tooltip: String(this._currentlyHoveredData),
                value: this._currentlyHoveredData,
                element: this._currentlyDisplayed,
                columnKey: this._columnKey,
                index: this._rowIdx,
                columnIndex: this._columnIdx
            };
            c = function () {
                var e = d._trigger(d.events.tooltipShowing, d, b);
                if (e === true) {
                    d._showTooltipNoDelay(b.tooltip);
                    d._trigger(d.events.tooltipShown, d, b)
                }
            };
            if (typeof Modernizr === "object" && Modernizr.touch) {
                c()
            } else {
                this.timeoutShowing = setTimeout(c, this.options.showDelay)
            }
        },

        _hideTooltipNoDelay: function () {
            var b = a("#" + this.id());
            if (this.options.style === "tooltip") {
                if (this._canFadeOut === true) {
                    this._canFadeOut = false;
                    b.fadeOut(this.options.fadeTimespan, a.proxy(this._fadeOutEnd, this))
                }
            } else {
                if (this.options.style === "popover") {
                    b.igPopover("hide")
                }
            }
            this.visible = false
        },

        _showTooltipNoDelay: function (c) {
            var b;
            if (this._currentlyDisplayed === null) {
                return
            }
            b = a("#" + this.id());
            clearTimeout(this.timeoutHiding);
            if (this.options.style === "tooltip") {
                this._updateTooltip(c);
                if (this._canFadeIn === true) {
                    this._canFadeIn = false;
                    b.fadeIn(this.options.fadeTimespan, a.proxy(this._fadeInEnd, this))
                }
            } else {
                if (this.options.style === "popover") {
                    b.igPopover("show", a(this._currentlyDisplayed), c)
                }
            }
            this.visible = true
        },

        _fadeOutEnd: function () {
            this._canFadeOut = true
        },

        _fadeInEnd: function () {
            this._canFadeIn = true
        },

        _updateTooltip: function (c) {
            var b = a("#" + this.id() + "_container");
            b.text(c);
            b.parent().css("max-width", a(this._currentlyDisplayed).width());
            this._positionTooltip(b.parent())
        },

        _positionTooltip: function (e) {
            var g = a(window), b, f, d = e.outerWidth(), c = e.outerHeight();
            b = this.mouseX - g.scrollLeft() + this.options.cursorLeftOffset;
            f = this.mouseY - g.scrollTop() + this.options.cursorTopOffset;
            if (b + d > g.width()) {
                b = g.width() - d
            }
            if (f + c > g.height()) {
                f = g.height() - c
            }
            e.css({
                top: f + g.scrollTop(),
                left: b + g.scrollLeft()
            })
        }

    });

    a.extend(a.ui.igGridTooltips, {
        version: "12.2.20122.1021"
    })

}(jQuery));