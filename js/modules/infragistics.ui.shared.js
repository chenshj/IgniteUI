﻿/*
 * Infragistics.Web.ClientUI shared localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$ = $ || {};
$.ig = $.ig || {};
if (!$.ig.SharedLocale) {
    $.ig.SharedLocale = {};
    $.extend($.ig.SharedLocale, {
        locale: {
            popoverOptionChangeNotSupported: "Changing the following option after igPopover has been initialized is not supported:"
        }
    });
    /*
     * Infragistics.Web.ClientUI jQuery Shared 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     *  jquery-1.4.2.js
     *	jquery.ui.core.js
     *	jquery.ui.widget.js
     *  ig.util.js
     */
}
( function (a) {
    a.widget("ui.igLoading", {
        options: {
            cssClass: null,
            includeVerticalOffset: true
        },
        _indicator: null,
        _create: function () {
            var c, b;
            b = this.options.cssClass === null ? "ui-igloadingmsg" : this.options.cssClass;
            this._hgrid = this.element.closest(".ui-iggrid-root").closest(".ui-iggrid");
            if (this.element.children("." + b).length === 0) {
                this._indicator = a("<span></span>").appendTo("body").attr("id", this.element[0].id + "_loading").addClass(b);
                c = this.element.offset();
                this.refreshPos()
            }
            this._yShift = this._indicator ? Math.round(this._indicator.height() / 2) : 0
        },
        indicatorElement: function () {
            return this._indicator
        },
        indicator: function () {
            return this
        },
        show: function (b) {
            if (b !== false) {
                this.refreshPos()
            }
            this._resId = setInterval(a.proxy(this._resizeContainer, this), 300);
            this._indicator.css("display", "").css("visibility", "visible")
        },
        hide: function () {
            this._indicator.css("display", "none").css("visibility", "hidden");
            clearInterval(this._resId)
        },
        _resizeContainer: function () {
            var b = this.element.offset();
            if (b.top + this.element.innerHeight() / 2 - this._yShift !== this._indicator.css("top")) {
                this.refreshPos()
            }
        },
        refreshPos: function () {
            var c = this.element.offset(), d = c.top + this.element.innerHeight() / 2 - this._yShift, b = c.left + this.element.innerWidth() / 2, e;
            if (this._hgrid.length > 0 && d > this._hgrid.offset().top + this._hgrid.height()) {
                return
            }
            if (this._hgrid.length > 0 && b > this._hgrid.offset().left + this._hgrid.width()) {
                return
            }
            if (this.options.includeVerticalOffset && d > a(window).height()) {
                e = (a(window).height() - c.top - a(window).scrollTop()) / 2;
                d = a(window).height() - e < c.top ? c.top + e : a(window).height() - e
            }
            this._indicator.css("left", b).css("top", d)
        },
        destroy: function () {
            clearInterval(this._resId);
            this._indicator.remove()
        }
    });
    a.extend(a.ui.igLoading, {
        version: "12.2.20122.1021"
    });
    a.widget("ui.igSlider", a.ui.mouse, {
        options: {
            animate: false,
            max: 100,
            min: 0,
            orientation: "horizontal",
            step: 1,
            value: 0,
            bookmarks: [
                {
                    value: 0,
                    title: "",
                    disabled: false,
                    css: ""
                }
            ],
            showBookmarkTitle: true,
            syncHandleWithBookmark: true
        },
        css: {
            baseClasses: "ui-igslider ui-widget ui-widget-content ui-corner-all",
            horizontalOrientationClass: "ui-igslider-horizontal",
            verticalOrientationClass: "ui-igslider-vertical",
            sliderDisabledClass: "ui-igslider-disabled ui-disabled",
            handleClass: "ui-igslider-handle",
            bookmarkClass: "ui-igslider-bookmark",
            bookmarkDisabledClass: "ui-igslider-bookmark-disabled",
            bookmarkTooltipClass: "ui-igslider-bookmark-tooltip"
        },
        events: {
            start: "start",
            slide: "slide",
            stop: "stop",
            change: "change",
            bookmarkHit: "bookmarkhit",
            bookmarkClick: "bookmarkclick"
        },
        _numpages: 5,
        widget: function () {
            return this.element
        },
        _createWidget: function (c, b) {
            this.options.bookmarks = [];
            a.Widget.prototype._createWidget.apply(this, arguments)
        },
        _create: function () {
            var c = this.options, d = this, b = this.css;
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass(b.baseClasses);
            if (c.disabled) {
                this.element.addClass(b.sliderDisabledClass)
            }
            if (a(".ui-igslider-handle", this.element).length === 0) {
                a("<a href='#'></a>").appendTo(this.element).addClass(b.handleClass)
            }
            this.handles = a(".ui-igslider-handle", this.element).addClass("ui-state-default ui-corner-all").bind({
                click: function (e) {
                    e.preventDefault()
                },
                mouseover: function () {
                    if (!c.disabled) {
                        a(this).addClass("ui-state-hover")
                    }
                },
                mouseout: function () {
                    a(this).removeClass("ui-state-hover")
                },
                focus: function () {
                    if (!c.disabled) {
                        a(".ui-igslider .ui-state-focus").removeClass("ui-state-focus");
                        a(this).addClass("ui-state-focus")
                    } else {
                        a(this).blur()
                    }
                },
                blur: function () {
                    a(this).removeClass("ui-state-focus")
                },
                keydown: function (g) {
                    var j = true, h = a(this).data("index.ui-igslider-handle"), e, f, i, k;
                    if (d.options.disabled) {
                        return
                    }
                    switch (g.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            j = false;
                            if (!d._keySliding) {
                                d._keySliding = true;
                                a(this).addClass("ui-state-active");
                                e = d._start(g, h);
                                if (e === false) {
                                    return
                                }
                            }
                            break
                    }
                    k = d.options.step;
                    f = i = d.value();
                    switch (g.keyCode) {
                        case a.ui.keyCode.HOME:
                            i = d.options.min;
                            break;
                        case a.ui.keyCode.END:
                            i = d.options.max;
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            i = d._trimValue(f + ((d.options.max - d.options.min) / this._numpages));
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            i = d._trimValue(f - ((d.options.max - d.options.min) / this._numpages));
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (f === d.options.max) {
                                return
                            }
                            i = d._trimValue(f + k);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (f === d.options.min) {
                                return
                            }
                            i = d._trimValue(f - k);
                            break
                    }
                    d._slide(g, h, i);
                    return j
                },
                keyup: function (e) {
                    var f = a(this).data("index.ui-igslider-handle");
                    if (d._keySliding) {
                        d._keySliding = false;
                        d._stop(e, f);
                        d._change(e, f);
                        a(this).removeClass("ui-state-active")
                    }
                }
            }).each(function (e) {
                    a(this).data("index.ui-igslider-handle", e)
                });
            this.handle = this.handles.eq(0);
            this._renderBookmarks();
            this._refreshValue();
            this._animateOff = false
        },
        _renderBookmarks: function () {
            if (this.options.bookmarks && this.options.bookmarks.length > 0) {
                var d = this.options.bookmarks.length, c = 0, f = this.options, b = this.css, e, g = this;
                for (c; c < d; c++) {
                    e = f.bookmarks[c];
                    a("<a href='#'></a>").appendTo(this.element).data("index.ui-igslider-bookmark", c).addClass(e.disabled ? b.bookmarkDisabledClass : b.bookmarkClass).addClass(e.css && e.css.length > 0 ? e.css : "").css("left", (f.min !== f.max) ? ((e.value - f.min) / (f.max - f.min) * 100) + "%" : "0%")
                }
                this.bookmarks = a(".ui-igslider-bookmark", this.element).addClass("ui-state-default").bind({
                    mousedown: function (i) {
                        var j = true, h = a(this).data("index.ui-igslider-bookmark");
                        i.preventDefault();
                        i.stopPropagation();
                        j = g._bookmarkClicked(i, h);
                        if (g.options.syncHandleWithBookmark && j) {
                            g._slide(i, 0, g.options.bookmarks[h].value)
                        }
                    },
                    mouseover: function (h) {
                        if (!f.disabled) {
                            a(this).addClass("ui-state-hover");
                            if (g.options.showBookmarkTitle) {
                                g._showBookmarkTitle(a(this), h)
                            }
                        }
                    },
                    mouseout: function () {
                        if (!f.disabled) {
                            a(this).removeClass("ui-state-hover");
                            if (g.options.showBookmarkTitle) {
                                g._hideBookmarkTitle(a(this))
                            }
                        }
                    },
                    click: function (h) {
                        h.preventDefault()
                    }
                });
                this._createBookmarkTooltip();
                this._buildBookmarkHit()
            }
        },
        destroy: function () {
            this.handles.remove();
            this.clearBookmarks();
            this.element.removeClass(this.css.baseClasses + " ui-igslider-horizontal ui-igslider-vertical ui-igslider-disabled").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this
        },
        _id: function (b) {
            return this.element[0].id + b
        },
        _showBookmarkTitle: function (b, c) {
            var e = a("#" + this._id("_tooltip")), d = this.options.bookmarks[b.data("index.ui-igslider-bookmark")].title;
            if (d && d.length > 0) {
                e.igTooltip("option", "text", d);
                e.css("top", c.pageY - e.outerHeight() - 5).css("left", c.pageX - (e.width() / 2) + (b.width() / 2)).show()
            }
        },
        _hideBookmarkTitle: function (b) {
            a("#" + this._id("_tooltip")).hide()
        },
        _createBookmarkTooltip: function () {
            var b = '<div id="' + this._id("_tooltip") + '" class="' + this.css.bookmarkTooltipClass + '"></div>';
            a(b).appendTo(a(document.body)).igTooltip({
                arrowLocation: "bottom"
            }).hide()
        },
        clearBookmarks: function () {
            if (this.bookmarks) {
                this.bookmarks.remove()
            }
        },
        _mouseCapture: function (b) {
            var g = this.options, i, f, d = 0, c = this.handles.eq(d), j = this, h, e;
            if (g.disabled) {
                return false
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            i = {
                x: b.pageX,
                y: b.pageY
            };
            f = this._normValueFromMouse(i);
            this._mouseSliding = true;
            j._handleIndex = d;
            c.addClass("ui-state-active");
            if (!a.browser.opera) {
                c.focus()
            }
            h = c.offset();
            e = !a(b.target).parents().andSelf().is(".ui-igslider-handle");
            this._clickOffset = e ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - h.left - (c.width() / 2),
                top: b.pageY - h.top - (c.height() / 2) - (parseInt(c.css("borderTopWidth"), 10) || 0) - (parseInt(c.css("borderBottomWidth"), 10) || 0) + (parseInt(c.css("marginTop"), 10) || 0)
            };
            this._slide(b, d, f);
            this._animateOff = true;
            this._mouseUpHandler = function (k) {
                return j._mouseStop(k)
            };
            a(document).bind("mouseup." + this.widgetName, this._mouseUpHandler);
            return true
        },
        _mouseStart: function (b) {
            a(document).unbind("mouseup." + this.widgetName, this._mouseUpHandler);
            return this._start(b, this._handleIndex)
        },
        _mouseDrag: function (b) {
            var d = {
                x: b.pageX,
                y: b.pageY
            }, c = this._normValueFromMouse(d);
            this._slide(b, this._handleIndex, c);
            return false
        },
        _mouseStop: function (b) {
            var c = this;
            this.handles.removeClass("ui-state-active");
            setTimeout(function () {
                c._mouseSliding = false
            }, 1000);
            this._stop(b, this._handleIndex);
            this._change(b, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false
        },
        _detectOrientation: function () {
            var c = this.options, b = this.css;
            if (c.orientation === "vertical") {
                this.orientation = "vertical";
                this.element.removeClass(b.horizontalOrientationClass).addClass(b.verticalOrientationClass)
            } else {
                this.orientation = "horizontal";
                this.element.removeClass(b.verticalOrientationClass).addClass(b.horizontalOrientationClass)
            }
        },
        _normValueFromMouse: function (e) {
            var d, c, b, g, f;
            if (this.orientation === "horizontal") {
                d = this.elementSize.width;
                c = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                d = this.elementSize.height;
                c = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            b = (c / d);
            if (b > 1) {
                b = 1
            }
            if (b < 0) {
                b = 0
            }
            if (this.orientation === "vertical") {
                b = 1 - b
            }
            g = this.options.max - this.options.min;
            f = this.options.min + b * g;
            return this._trimValue(f)
        },
        _start: function (b, c) {
            var d = {
                handle: this.handles[c],
                value: this.value()
            };
            return this._trigger(this.events.start, b, d)
        },
        _slide: function (c, d, e) {
            var b;
            if (e !== this.value()) {
                b = this._trigger(this.events.slide, c, {
                    handle: this.handles[d],
                    value: e
                });
                if (b !== false) {
                    this.value(e)
                }
            }
        },
        _stop: function (b, c) {
            var d = {
                handle: this.handles[c],
                value: this.value()
            };
            this._trigger(this.events.stop, b, d)
        },
        _change: function (b, c) {
            if (!this._keySliding && !this._mouseSliding) {
                var d = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this._trigger(this.events.change, b, d);
                this._checkBookmarkHit(d.value, b);
                if (d.value === this.options.max && this._marksHit && this._marksHit.length === 0) {
                    this._buildBookmarkHit()
                }
            }
        },
        _checkBookmarkHit: function (b, c) {
            if (this._marksHit && this._marksHit.length > 0 && b >= this._marksHit[0].value) {
                var d = this._marksHit[0].index;
                this._marksHit.shift();
                this._bookmarkHit(c, d)
            }
        },
        _buildBookmarkHit: function () {
            var c = this.options.bookmarks || [], d = c.length - 1;
            this._marksHit = [];
            for (d; d >= 0; d--) {
                if (!c[d].disabled) {
                    this._marksHit.push({
                        value: c[d].value,
                        index: d
                    })
                }
            }
            this._marksHit.sort(this._sortBookmarksJSON);
            this._marksHit = a.extend(true, [], this._marksHit)
        },
        _sortBookmarksJSON: function (c, d) {
            return (c.value - d.value)
        },
        _bookmarkClicked: function (b, c) {
            var d = {
                bookmarkElement: this.bookmarks[c],
                bookmark: this.options.bookmarks[c]
            };
            return this._trigger(this.events.bookmarkClick, b, d)
        },
        _bookmarkHit: function (b, c) {
            var d = {
                bookmarkElement: this.bookmarks[c],
                bookmark: this.options.bookmarks[c]
            };
            if (d.bookmarkElement) {
                this._trigger(this.events.bookmarkHit, b, d)
            }
        },
        value: function (b) {
            if (arguments.length) {
                this.options.value = this._trimValue(b);
                this._refreshValue();
                this._change(null, 0)
            }
            return this._value()
        },
        _setOption: function (b, c) {
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (b) {
                case"disabled":
                    if (c) {
                        this.handles.filter(".ui-state-focus").blur();
                        this.handles.removeClass("ui-state-hover");
                        this.handles.attr("disabled", "disabled");
                        this.element.addClass("ui-disabled")
                    } else {
                        this.handles.removeAttr("disabled");
                        this.element.removeClass("ui-disabled")
                    }
                    break;
                case"orientation":
                    this._detectOrientation();
                    this._refreshValue();
                    break;
                case"value":
                    if (this._mouseSliding === true) {
                        return
                    }
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case"bookmarks":
                    this.clearBookmarks();
                    this._renderBookmarks();
                    break
            }
        },
        _value: function () {
            return this._trimValue(this.options.value)
        },
        _trimValue: function (d) {
            if (d < this.options.min) {
                return this.options.min
            }
            if (d > this.options.max) {
                return this.options.max
            }
            var c = (this.options.step > 0) ? this.options.step : 1, e = d % c, b = d - e;
            if (Math.abs(e) * 2 >= c) {
                b += (e > 0) ? c : (-c)
            }
            return parseFloat(b.toFixed(5))
        },
        _normPercentValue: function (d) {
            var b = 0, c = d;
            if (this.orientation === "vertical") {
                b = (this.handle.outerHeight() / this.element.outerHeight()).toFixed(2) * 100
            }
            if (d - b > 0) {
                c = d - b
            }
            return c
        },
        _refreshValue: function () {
            var e = this.options, d = this, c = (!this._animateOff ? e.animate : false), b = {}, g = this.value(), i = this.options.min, h = this.options.max, f = (h !== i) ? (g - i) / (h - i) * 100 : 0;
            b[d.orientation === "horizontal" ? "left" : "bottom"] = this._normPercentValue(f) + "%";
            this.handle.stop(1, 1)[c ? "animate" : "css"](b, e.animate)
        }
    });
    a.extend(a.ui.igSlider, {
        version: "12.2.20122.1021"
    });
    a.widget("ui.igProgressBar", {
        options: {
            animate: false,
            animateTimeout: 100,
            max: 100,
            min: 0,
            orientation: "horizontal",
            value: 0,
            width: "0px",
            height: "0px",
            range: false,
            endValue: 100
        },
        css: {
            baseClasses: "ui-igprogressbar ui-widget ui-widget-content ui-corner-all",
            horizontalOrientationClass: "ui-igprogressbar-horizontal",
            verticalOrientationClass: "ui-igprogressbar-vertical",
            disabledClass: "ui-igprogressbar-disabled ui-disabled",
            progressRangeClass: "ui-igprogressbar-range ui-widget-header ui-corner-all"
        },
        events: {
            change: "change"
        },
        _animationOff: true,
        widget: function () {
            return this.element
        },
        _detectOrientation: function () {
            var b = this.css;
            if (this.options.orientation === "vertical") {
                this.orientation = "vertical";
                this.element.removeClass(b.horizontalOrientationClass).addClass(b.verticalOrientationClass)
            } else {
                this.orientation = "horizontal";
                this.element.removeClass(b.verticalOrientationClass).addClass(b.horizontalOrientationClass)
            }
        },
        _id: function (b) {
            return this.element[0].id + b
        },
        _create: function () {
            var c = this.options, b = this.css;
            this._detectOrientation();
            this.element.addClass(b.baseClasses);
            if (c.disabled) {
                this.element.addClass(b.disabledClass)
            }
            if (c.width !== "0px") {
                this.element.css("width", c.width)
            }
            if (c.height !== "0px") {
                this.element.css("height", c.height)
            }
            if (c.orientation === "horizontal") {
                a('<div id="' + this._id("_progress") + '" class="' + b.progressRangeClass + '" style="height:100%; top:0px; left:0%; width:0%;"></div>').appendTo(this.element)
            } else {
                a('<div id="' + this._id("_progress") + '" class="' + b.progressRangeClass + '" style="height:0%; bottom:0%; left:0px; width:100%;"></div>').appendTo(this.element)
            }
            this._refreshValue()
        },
        destroy: function () {
            this.element.removeClass("ui-igprogressbar ui-igprogressbar-horizontal ui-igprogressbar-vertical ui-igprogressbar-disabled ui-widget ui-widget-content ui-corner-all").removeData("igProgressBar").unbind(".igProgressBar");
            a("#" + this._id("_progress")).remove();
            return this
        },
        _change: function (b) {
            var c = {
                value: this.value()
            };
            this._trigger(this.events.change, b, c)
        },
        value: function (b) {
            if (arguments.length) {
                this.options.value = this._trimValue(b);
                this._refreshValue();
                this._change(null)
            }
            return this.options.value
        },
        _setOption: function (b, d) {
            a.Widget.prototype._setOption.apply(this, arguments);
            var c = this.options;
            switch (b) {
                case"disabled":
                    if (d) {
                        this.element.addClass(this.css.disabledClass)
                    } else {
                        this.element.removeClass(this.css.disabledClass)
                    }
                    break;
                case"orientation":
                    this._detectOrientation();
                    this._refreshValue();
                    break;
                case"value":
                    this._animationOff = true;
                    c.value = this._trimValue(d);
                    this._refreshValue();
                    this._change(null);
                    this._animationOff = false;
                    break;
                case"endValue":
                    c.endValue = this._trimValue(d);
                    this._refreshValue();
                    break;
                case"max":
                    if (c.endValue > c.max) {
                        c.endValue = c.max;
                        this._refreshValue()
                    }
                    break;
                case"width":
                    this.element.css("width", d);
                    break;
                case"height":
                    this.element.css("height", d);
                    break;
                case"animate":
                    c.animate = d;
                    break;
                case"animateTimeout":
                    c.animateTimeout = d;
                    break;
                default:
                    break
            }
        },
        _trimValue: function (b) {
            if (b < this.options.min) {
                return this.options.min
            }
            if (b > this.options.max) {
                return this.options.max
            }
            return parseInt(b, 10)
        },
        _refreshValue: function () {
            var b = this.options, e = b.value, i = b.min, h = b.max, f = b.endValue, d = (h !== i) ? (e - i) / (h - i) * 100 : 0, g = (e !== f) ? (f - e) / (h - i) * 100 : 0, c = a("#" + this._id("_progress"));
            if (b.range) {
                if (b.orientation === "horizontal") {
                    c.css("left", d + "%").css("width", g + "%")
                } else {
                    c.css("bottom", d + "%").css("height", g + "%")
                }
            } else {
                if (b.animate === true) {
                    if (b.orientation === "horizontal") {
                        if (c[0].style.width === "0%") {
                            c.css({
                                width: "0px"
                            })
                        }
                        if (c.is(":hidden") === false) {
                            c.animate({
                                width: d + "%"
                            }, b.animateTimeout)
                        } else {
                            c.css("width", d + "%")
                        }
                    } else {
                        if (c[0].style.height === "0%") {
                            c.css({
                                height: "0px"
                            })
                        }
                        if (c.is(":hidden") === false) {
                            c.animate({
                                height: d + "%"
                            }, b.animateTimeout)
                        } else {
                            c.animate({
                                height: d + "%"
                            }, b.animateTimeout)
                        }
                    }
                } else {
                    if (b.orientation === "horizontal") {
                        c.css("width", d + "%")
                    } else {
                        c.css("height", d + "%")
                    }
                }
            }
        }
    });
    a.extend(a.ui.igProgressBar, {
        version: "12.2.20122.1021"
    });
    a.widget("ui.igButton", {
        options: {
            width: null,
            height: null,
            link: {
                href: null,
                target: null,
                title: null
            },
            labelText: "",
            centerLabel: false,
            css: null,
            onlyIcons: false,
            icons: {
                primary: null,
                secondary: null
            },
            title: false
        },
        _id: function (b) {
            return this.element[0].id + b
        },
        _create: function () {
            var g = this, f = g.options, c = this.element, d, b = {
                buttonClassIE6: "ui-ie6",
                buttonClasses: "ui-button ui-igbutton ui-widget ui-widget-content ui-corner-all ui-state-default",
                buttonHoverClasses: "ui-state-hover",
                buttonActiveClasses: "ui-state-active",
                buttonFocusClasses: "ui-state-focus",
                buttonLabelClass: "ui-button-text",
                buttonDisabledClass: "ui-state-disabled",
                buttonPrimaryIconClass: "ui-button-icon-primary ui-icon",
                buttonMainElementPrimaryIconClass: " ui-button-text-icon-primary",
                buttonMainElementSecondaryIconClass: " ui-button-text-icon-secondary",
                buttonSecondaryIconClass: "ui-button-icon-secondary ui-icon",
                buttonIconsOnly: "ui-button-icons-only",
                buttonIconOnly: "ui-button-icon-only",
                buttonIcons: "ui-button-text-icons",
                buttonTextOnlyClass: "ui-button-text-only"
            };
            this._attached = false;
            f.css = a.extend(b, f.css);
            g._getInitValues();
            if (c.is("div")) {
                g._renderDivButton()
            } else {
                if (c.is("a")) {
                    g._renderAHref()
                } else {
                    if (c.is("input")) {
                        d = c.attr("type").toUpperCase();
                        if (d === "BUTTON" || d === "SUBMIT" || d === "RESET") {
                            g._renderInput()
                        } else {
                            return
                        }
                    } else {
                        if (c.is("button")) {
                            g._renderButton()
                        } else {
                            return
                        }
                    }
                }
            }
            if (f.width !== null) {
                g._setWidth(f.width)
            }
            if (f.height !== null) {
                g._setHeight(f.height)
            }
            c.addClass(f.css.buttonClasses).addClass(f.css.buttonDefaultClasses);
            if (a.browser.msie === true && a.browser.version.slice(0, 1) === "6") {
                c.addClass(b.buttonClassIE6)
            }
            if (f.centerLabel === true) {
                g._centerLabel()
            }
            if (f.disabled) {
                g._disableButton()
            } else {
                g._enableButton()
            }
            g._setOnlyIcons();
            c.attr("role", "button");
            c.attr("aria-disabled", "false");
            g._attachButtonEvents();
            g.setTitle(f.title);
            return this
        },
        setTitle: function (c) {
            var b = this.element;
            if (c === false) {
                b.removeAttr("title")
            } else {
                b.attr("title", c)
            }
        },
        widget: function () {
            return this.element
        },
        _isRedirect: function () {
            return this.options.link.href !== null
        },
        _renderDivButton: function () {
            this._setLabel()
        },
        _renderAHref: function () {
            this._setLinkOptions(true);
            this._setLabel()
        },
        _renderInput: function () {
            var b = this.element;
            b.attr("value", this.options.labelText)
        },
        _renderButton: function () {
            this._setLabel()
        },
        _disableButton: function () {
            var c = this, b = c.element;
            b.addClass(c.options.css.buttonDisabledClass);
            if (b.is("a") === true) {
                b.removeAttr("href");
                b.removeAttr("target");
                b.removeAttr("title")
            } else {
                b.attr("disabled", "true")
            }
        },
        _enableButton: function () {
            var d = this, b = d.element, c = this.options;
            if (b.hasClass(c.css.buttonDisabledClass)) {
                b.removeClass(c.css.buttonDisabledClass)
            }
            b.removeAttr("disabled");
            if (b.is("a") === true) {
                d._setLinkOptions(true)
            }
        },
        _setLabel: function () {
            var c = this.element, j = this.options, f = j.icons, b = j.css, d = "", g = this._isSetPrimaryIcon(), h = this._isSetSecondaryIcon(), i = (j.labelText === null || j.labelText === "") ? c.text() : j.labelText;
            c.attr("title", j.labelText);
            if (c.is("input")) {
                c.attr("value", j.labelText);
                return
            }
            if (g) {
                d += '<span class="' + b.buttonPrimaryIconClass + " " + f.primary + '" id="' + this._id("_picn") + '"></span>'
            }
            d += '<span class="' + j.css.buttonLabelClass + '" id="' + this._id("_lbl") + '">' + i + "</span>";
            if (h) {
                d += '<span class="' + b.buttonSecondaryIconClass + " " + f.secondary + '" id="' + this._id("_sicn") + '"></span>'
            }
            if (g && h && !j.onlyIcons) {
                c.addClass(b.buttonIcons)
            } else {
                if (j.onlyIcons) {
                    this._setOnlyIcons()
                } else {
                    if (g) {
                        c.addClass(b.buttonMainElementPrimaryIconClass)
                    } else {
                        if (h) {
                            c.addClass(b.buttonMainElementSecondaryIconClass)
                        } else {
                            c.addClass(b.buttonTextOnlyClass)
                        }
                    }
                }
            }
            c.html(d)
        },
        _setOnlyIcons: function () {
            var c = this.element, b = this.options.css;
            if (this.options.onlyIcons === false) {
                if (c.hasClass(b.buttonIconsOnly)) {
                    c.removeClass(b.buttonIconsOnly)
                }
                if (c.hasClass(b.buttonIconOnly)) {
                    c.removeClass(b.buttonIconOnly)
                }
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    c.addClass(b.buttonIcons)
                }
            } else {
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    c.addClass(b.buttonIconsOnly)
                } else {
                    c.addClass(b.buttonIconOnly)
                }
            }
        },
        _setLinkOptions: function (c) {
            var f = this, b = f.element, d = this.options;
            if (c) {
                if (d.link !== null && d.link.href !== null) {
                    b.attr("href", d.link.href)
                } else {
                    b.removeAttr("href")
                }
                if (d.link !== null && d.link.target !== null) {
                    b.attr("target", d.link.target)
                } else {
                    b.removeAttr("target")
                }
                if (d.link !== null && d.link.title !== null) {
                    b.attr("title", d.link.title)
                } else {
                    b.removeAttr("title")
                }
            }
        },
        _setWidth: function (c) {
            var b = this.element;
            if (c === null) {
                b.css("width", "")
            } else {
                b.css("width", c)
            }
        },
        _setHeight: function (c) {
            var b = this.element;
            if (c === null) {
                b.css("height", "")
            } else {
                b.css("height", c)
            }
        },
        _setOption: function (c, f) {
            var b = this.element, d = this;
            a.Widget.prototype._setOption.apply(this, [c, f]);
            switch (c) {
                case"width":
                    d._setWidth(f);
                    break;
                case"height":
                    d._setHeight(f);
                    break;
                case"link":
                    d._setLinkOptions(b.is("a") === true);
                    break;
                case"disabled":
                    f = Boolean(f);
                    if (f === true) {
                        d._disableButton()
                    } else {
                        d._enableButton()
                    }
                    break;
                case"labelText":
                    d._setLabel();
                    break;
                case"centerLabel":
                    f = Boolean(f);
                    if (f) {
                        d._centerLabel()
                    } else {
                        d._removeCenterLabel()
                    }
                    break;
                case"onlyIcons":
                    f = Boolean(f);
                    d._setOnlyIcons();
                    break;
                case"icons":
                    d._setLabel();
                    break;
                case"title":
                    d.setTitle(f);
                    break;
                default:
                    break
            }
        },
        _centerLabel: function () {
            var f = this, b = f.element, c = a("#" + f._id("_lbl")), d = (b.width() - c.width()) / 2, g = (b.height() - c.height()) / 2;
            c.css({
                position: "relative",
                top: g + "px",
                left: d + "px"
            })
        },
        _removeCenterLabel: function () {
            var c = this, b = a("#" + c._id("_lbl"));
            if (b.length > 0) {
                b.css({
                    position: "",
                    top: "",
                    left: ""
                })
            }
        },
        _dettachEvents: function () {
            var c = this, b = c.element;
            this._attached = false;
            b.unbind(this._events);
            return
        },
        _onMouseOver: function (b) {
            var c;
            if (this.options.disabled === true) {
                return
            }
            c = this._trigger("mouseover", b);
            if (c) {
                this.element.addClass(this.options.css.buttonHoverClasses)
            }
        },
        _onMouseOut: function (c) {
            var g = this, b = g.element, f = this.options, d;
            if (f.disabled === true) {
                return
            }
            d = g._trigger("mouseout", c);
            if (d) {
                b.removeClass(f.css.buttonHoverClasses)
            }
        },
        _onClick: function (c) {
            var b = this.element, g = this, f = this.options, d;
            if (f.disabled === true) {
                return
            }
            d = g._trigger("click", c);
            if (d) {
                this.element.removeClass(f.css.buttonHoverClasses);
                if (g._isRedirect() === true && b.is("a") === false) {
                    if (f.link.target === "_blank") {
                        window.open(f.link.href)
                    } else {
                        window.location = f.link.href
                    }
                }
            }
        },
        _onMouseDown: function (c) {
            var b = this.element, f = this.options, d;
            if (f.disabled === true) {
                return
            }
            d = this._trigger("mousedown", c);
            if (d) {
                b.removeClass(f.css.buttonHoverClasses);
                b.addClass(f.css.buttonActiveClasses)
            }
        },
        _onMouseUp: function (b) {
            var d = this.options, c;
            if (d.disabled === true) {
                return
            }
            c = this._trigger("mouseup", b);
            if (c) {
                this.element.removeClass(d.css.buttonHoverClasses);
                this.element.removeClass(d.css.buttonActiveClasses)
            }
        },
        _onFocus: function (b) {
            var d = this.options, c;
            if (d.disabled === true) {
                return
            }
            c = this._trigger("focus", b);
            if (c) {
                this.element.addClass(d.css.buttonFocusClasses)
            }
        },
        _onBlur: function (b) {
            var d = this.options, c;
            if (d.disabled === true) {
                return
            }
            c = this._trigger("blur", b);
            if (c) {
                this.element.removeClass(d.css.buttonActiveClasses);
                this.element.removeClass(d.css.buttonFocusClasses)
            }
        },
        _onKeyDown: function (b) {
            var c = this.options;
            if (c.disabled === true) {
                return
            }
            this._trigger("keydown", b)
        },
        _attachButtonEvents: function () {
            var c = this, b = c.element;
            if (this._attached === true) {
                return
            }
            this._attached = true;
            this._events = {
                mouseover: function (d) {
                    c._onMouseOver(d, c)
                },
                click: function (d) {
                    c._onClick(d)
                },
                mouseout: function (d) {
                    c._onMouseOut(d)
                },
                mousedown: function (d) {
                    c._onMouseDown(d)
                },
                mouseup: function (d) {
                    c._onMouseUp(d)
                },
                focus: function (d) {
                    c._onFocus(d)
                },
                blur: function (d) {
                    c._onBlur(d)
                },
                keydown: function (d) {
                    c._onKeyDown(d)
                }
            };
            b.bind(this._events)
        },
        _isSetPrimaryIcon: function () {
            var c = this.options.icons.primary, b = false;
            if (c !== undefined && c !== null) {
                b = true
            }
            return b
        },
        _isSetSecondaryIcon: function () {
            var c = this.options.icons.secondary, b = false;
            if (c !== undefined && c !== null) {
                b = true
            }
            return b
        },
        _setAttribute: function (d, b, c) {
            if (b !== undefined && b !== "" && b !== null) {
                d.attr(c, b)
            } else {
                d.removeAttr(c)
            }
        },
        destroy: function () {
            this._dettachEvents();
            this._rollbackInitValues();
            a.Widget.prototype.destroy.apply(this, arguments)
        },
        _getInitValues: function () {
            var b = this.element;
            this._innerHTML = b.html();
            this._cssClasses = b.attr("class");
            this._role = b.attr("role");
            this._href = b.attr("href");
            this._title = b.attr("title");
            this._target = b.attr("target");
            this._width = b.attr("width");
            this._height = b.attr("height");
            this._disabled = b.attr("disabled");
            this._value = b.val()
        },
        _rollbackInitValues: function () {
            var b = this.element;
            b.html(this._innerHTML);
            if (b.is("a")) {
                this._setAttribute(b, this._href, "href");
                this._setAttribute(b, this._target, "target")
            } else {
                if (b.is("input")) {
                    b.val(this._value)
                }
            }
            this._setAttribute(b, this._title, "title");
            this._setAttribute(b, this._width, "width");
            this._setAttribute(b, this._height, "height");
            this._setAttribute(b, this._cssClasses, "class");
            this._setAttribute(b, this._role, "role");
            this._setAttribute(b, this._disabled, "disabled")
        }
    });
    a.extend(a.ui.igButton, {
        version: "12.2.20122.1021"
    });
    a.widget("ui.igTooltip", {
        css: {
            baseClasses: "ui-widget ui-igtooltip ui-igplayer-tooltip",
            arrowImageBaseClass: "ui-igtooltip-arrow-"
        },
        options: {
            text: "",
            arrowLocation: "top"
        },
        _setOption: function (b, c) {
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (b) {
                case"text":
                    a("div.ui-widget-content", this.element).html(c);
                    break;
                case"arrowLocation":
                    a("div", this.element).remove();
                    this._renderTooltip();
                    break
            }
        },
        _create: function () {
            if (this.element.is("div")) {
                this._renderTooltip();
                this.element.addClass(this.css.baseClasses)
            }
        },
        _renderTooltip: function () {
            switch (this.options.arrowLocation) {
                case"top":
                    this._createArrowDiv();
                    this._createContentDiv();
                    break;
                case"bottom":
                    this._createContentDiv();
                    this._createArrowDiv();
                    break;
                case"left":
                    break;
                case"right":
                    break
            }
        },
        _createContentDiv: function () {
            var b = (this.options.text && this.options.text.length > 0) ? this.options.text : "";
            a('<div class="ui-widget-content ui-corner-all">' + b + "</div>").appendTo(this.element)
        },
        _createArrowDiv: function () {
            a('<div class="' + this.css.arrowImageBaseClass + this.options.arrowLocation + '"></div>').appendTo(this.element)
        },
        destroy: function () {
            this.element.children().remove();
            this.element.removeClass(this.css.baseClasses)
        }
    });
    a.extend(a.ui.igTooltip, {
        version: "12.2.20122.1021"
    });
    a.widget("ui.igToolbar", {
        options: {
            height: null,
            width: null,
            allowCollapsing: true,
            collapseButtonIcon: "ui-igbutton-collapsed",
            expandButtonIcon: "ui-igbutton-expanded",
            name: "",
            displayName: "",
            items: [],
            expanded: true
        },
        events: {
            toolbarButtonClick: "toolbarButtonClick",
            toolbarComboOpening: "toolbarComboOpening",
            toolbarComboSelected: "toolbarComboSelected",
            toolbarMouseDown: "toolbarMouseDown",
            toolbarCustomItemClick: "toolbarCustomItemClick",
            itemRemoved: "itemRemoved",
            itemAdded: "itemAdded",
            collapsing: "collapsing",
            collapsed: "collapsed",
            expanding: "expanding",
            expanded: "expanded",
            itemDisable: "itemDisable",
            itemEnabled: "itemEnabled"
        },
        css: {
            toolbarWidget: "ui-widget ui-widget-content ui-igtoolbar ui-corner-all",
            toolbarWrapperConteiner: "ui-widget ui-widget-content ui-igtoolbar ui-corner-all",
            toolbarCollapsedButton: "ui-state-default ui-igbutton-all-caps",
            igToolbarSeparator: "ig-toolbar-separator ui-widget-content"
        },
        _id: function (b) {
            return this.element[0].id + b
        },
        widget: function () {
            return this.element
        },
        _create: function () {
            this._render();
            this._createItems()
        },
        _init: function () {
            this._attachEvents();
            if (!this.options.expanded) {
                this.buttonsList.hide();
                this.collapseBtn.igToolbarButton("toggle").children(":first").switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon)
            }
            this._width = this.collapseBtn.outerWidth(true) + this.buttonsList.width();
            this._height = this.element.height()
        },
        _render: function () {
            var b = this.options;
            this.element.addClass(this.css.toolbarWidget);
            this.element.width(this.options.width).height(this.options.height);
            this.collapseBtn = a('<div tabIndex="0" id="' + this._id("_collapseButton") + '"></div>').appendTo(this.element).igToolbarButton({
                onlyIcons: true,
                labelText: "&nbsp;",
                title: a.ig.HtmlEditor.locale.collapseButtonTitle + " " + this.options.displayName,
                icons: {
                    primary: b.collapseButtonIcon
                }
            });
            this.toolbarBody = this.element.find("#" + this._id("_toolbar"));
            this.buttonsList = a('<span id="' + this._id("_toolbar_buttons") + '" style="display:inline-block"></span>').appendTo(this.element)
        },
        _onCollapse: function (c) {
            var f, d, b, g = this.options, k, i = this, j, h;
            if (!g.allowCollapsing) {
                return
            }
            if (g.expanded) {
                d = "collapsed";
                b = "collapsing";
                g.expanded = false;
                k = this.element.height();
                this.collapseBtn.attr("title", a.ig.HtmlEditor.locale.expandButtonTitle + " " + this.options.displayName).children(":first").switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon);
                j = "hidden";
                h = "0.0"
            } else {
                d = "expanded";
                b = "expanding";
                g.expanded = true;
                k = this._width;
                this.buttonsList.show();
                this.collapseBtn.attr("title", a.ig.HtmlEditor.locale.collapseButtonTitle + " " + this.options.displayName).children(":first").switchClass(this.options.expandButtonIcon, this.options.collapseButtonIcon);
                j = "visible";
                h = "1"
            }
            c.stopPropagation();
            f = this._trigger(this.events[b], c, {
                owner: this,
                toolbarElement: this.element,
                toolbar: {}
            });
            if (f) {
                this.element.css({
                    overflow: "hidden"
                });
                this.element.animate({
                    width: k
                }, 300, null, function () {
                    if (!g.expanded) {
                        i.buttonsList.hide()
                    }
                    if (document.documentMode === 7) {
                        i.buttonsList.attr("style", "visibility: " + j + " !important;")
                    }
                    i._trigger(i.events[d], c, {
                        owner: i,
                        toolbarElement: i.element,
                        toolbar: {}
                    })
                })
            }
        },
        _setOption: function (b, c) {
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (b) {
                case"allowCollapsing":
                    this.options.allowCollapsing = c;
                    break;
                case"items":
                    this._updateItems(c);
                    break
            }
        },
        _isSelectedAction: function (b, d, c) {
            if (d.value) {
                b.addClass("ui-state-active")
            }
        },
        _tooltipAction: function (b, d, c) {
            if (c !== undefined) {
                c.title = d.value
            } else {
                b.igToolbarButton("option", "title", d.value)
            }
        },
        _buttonIconAction: function (b, d, c) {
            if (c !== undefined) {
                c.icons = {
                    primary: d.value
                }
            } else {
                b.igToolbarButton("option", "icons", {
                    primary: d.value
                })
            }
        },
        _comboDataSourceAction: function (b, d, c) {
            if (c !== undefined) {
                c.dataSource = d.value
            } else {
                b.igCombo("option", "dataSource", d.value)
            }
        },
        _comboWidthAction: function (b, d, c) {
            if (c !== undefined) {
                c.width = d.value
            } else {
                b.igCombo("option", "width", d.value)
            }
        },
        _comboHeightAction: function (b, d, c) {
            if (c !== undefined) {
                c.height = d.value
            } else {
                b.igCombo("option", "height", d.value)
            }
        },
        _spltBtnTooltipAction: function (b, d, c) {
        },
        _comboSelectedItem: function (b, d, c) {
            if (c !== undefined) {
                c.selectedItems = [
                    {
                        value: d.value
                    }
                ]
            } else {
                b.igCombo("option", "selectedItems", [
                    {
                        value: d.value
                    }
                ])
            }
        },
        _spltButtonColorAction: function (b, d, c) {
            if (c !== undefined) {
                c.defaultColor = d.value
            } else {
                b.igColorPickerSplitButton("option", "defaultColor", d.value)
            }
        },
        _comboDropDownListWidth: function (b, d, c) {
            if (c !== undefined) {
                c.dropDownWidth = d.value
            } else {
                b.igCombo("option", "dropDownWidth", d.value)
            }
        },
        _createItems: function () {
            var e = this.options, b, f = this, c = {}, d, g = {
                button: "igToolbarButton",
                combo: "igCombo",
                splitButton: "igSplitButton",
                splitButtonColor: "igColorPickerSplitButton"
            }, h = function (i, j) {
                var k = e.items[b].scope || f;
                if (j.action !== undefined && a.isFunction(k[j.action])) {
                    k[j.action](d, j, c);
                    return
                }
                c[i] = j.value
            };
            this.buttonsList.empty();
            for (b = 0; b < e.items.length; b++) {
                c = {};
                d = (e.items[b].callbackRenderer() || a('<div tabIndex="0"></div>')).attr("id", this._id("_item_" + e.items[b].name)).appendTo(this.buttonsList);
                a.each(e.items[b].getProperties(), h);
                if (g.hasOwnProperty(e.items[b].type)) {
                    d[g[e.items[b].type]](c);
                    continue
                }
            }
        },
        _updateItems: function (d) {
            var g = this.options, k, c, e, h, b, f;
            for (c = 0; c < d.length; c++) {
                k = d[c].getUpdatedProperties();
                b = this.getItem(d[c].name);
                h = g.items[c].scope || this;
                for (e = 0; e < k.length; e++) {
                    if (k[e].action !== undefined && a.isFunction(h[k[e].action])) {
                        h[k[e].action](b, k[e]);
                        continue
                    }
                    if (d[c] instanceof a.ig.igToolbarButtonDescriptor) {
                        b.igToolbarButton("option", f, k[e])
                    }
                    if (g.items[c] instanceof a.ig.igToolbarComboDescriptor) {
                        b.igCombo("option", f, k[e])
                    }
                }
            }
        },
        _getWidgetType: function (c) {
            var b, d;
            if (c === undefined) {
                return
            }
            b = c.data();
            for (d in b) {
                if (b.hasOwnProperty(d) && b[d].widgetName) {
                    return b[d].widgetName
                }
            }
        },
        _isWidgetSupported: function (c) {
            var b;
            for (b = 0; b < this.supportedWidgets.length; b++) {
                if (this.supportedWidgets[b].name === c) {
                    return true
                }
            }
        },
        _attachEvents: function () {
            var b = "igtoolbarbuttonclick igsplitbuttonclick igcolorpickersplitbuttoncolorselected";
            this.element.delegate(".ui-widget", b, a.proxy(this._onToolbarItemInteraction, this));
            this.element.delegate(":ui-igCombo", "click", a.proxy(this._onComboListItemClick, this));
            this.collapseBtn.bind("igtoolbarbuttonclick", a.proxy(this._onCollapse, this))
        },
        _onToolbarItemInteraction: function (b, i) {
            var f, g = a(b.target).parentsUntil(":ui-igToolbar").eq(-2), d, h, c = this.options;
            if (g.length === 0) {
                g = a(b.target)
            }
            d = this.buttonsList.children().index(g);
            switch (b.type) {
                case"igcomboselectionchanged":
                    f = i.items[0].value;
                    h = this.events.toolbarComboSelected;
                    break;
                case"igtoolbarbuttonclick":
                    h = this.events.toolbarButtonClick;
                    break;
                default:
                    h = this.events.toolbarCustomItemClick;
                    f = i.value;
                    break
            }
            this._trigger(h, b, {
                name: i.name || c.items[d].name,
                value: f,
                handler: c.items[d].handler.call(c.items[d]),
                scope: c.items[d].getProperty("scope"),
                itemProperties: c.items[d].getProperties(),
                toolbarItem: g,
                toolbarName: c.name
            })
        },
        _onComboListItemClick: function (c) {
            var g = a(c.target), b, f, d, i, h;
            if (!g.hasClass("ui-igcombo-listitem") && !g.parent().hasClass("ui-igcombo-listitem")) {
                return
            }
            if (g.hasClass("ui-igcombo-listitem")) {
                d = g
            } else {
                if (g.parent().hasClass("ui-igcombo-listitem")) {
                    d = g.parent()
                }
            }
            f = d.data("id") - 100;
            b = a(c.currentTarget).igCombo("option", "dataSource");
            i = this.buttonsList.children().index(a(c.currentTarget));
            h = this.options.items[i];
            this._trigger(this.events.toolbarComboSelected, c, {
                name: h.name,
                value: b[f].text,
                handler: h.handler.call(h),
                scope: h.getProperty("scope"),
                itemProperties: h.getProperties(),
                toolbarItem: a(c.currentTarget).data("igCombo"),
                toolbarName: this.options.name
            })
        },
        getItem: function (b) {
            var c;
            if (!isNaN(parseInt(b, 10))) {
                return this.buttonsList.eq(b)
            }
            if (typeof b === "string") {
                c = this.buttonsList.find("#" + this._id("_item_" + b));
                if (c.length) {
                    return c
                }
            }
        },
        addItem: function (b) {
            if (this._isWidgetSupported(b.type)) {
                this.options.items.push(b);
                this._createItems();
                this._trigger(this.events.itemAdded)
            }
        },
        removeItem: function (b) {
            this.buttonsList.eq(b).remove();
            this._trigger(this.events.itemremoved)
        },
        disableItem: function (c, b) {
            var d = this.getItem(c), e = this._getWidgetType(d);
            if (e) {
                d[this._getWidgetType(d)]("option", "disabled", b);
                this._trigger(this.events.itemDisable, {
                    isDisabled: b
                })
            }
        },
        activateItem: function (d, c) {
            var e = this.getItem(d), b = (c) ? e.addClass : e.removeClass;
            b.call(this, "ui-state-active");
            e.igToolbarButton("options", "isSelected", c);
            this._trigger(this.events.itemActivated, {
                isActivated: c
            })
        },
        deactivateAll: function () {
            this.buttonsList.find(".ui-state-active").removeClass("ui-state-active").igToolbarButton("option", "isSelected", false)
        },
        _setCollapseExpandButtonIcon: function () {
            if (this.options.collapseButtonIcon) {
                this.collapseBtn.switchClass("ui-icon-triangle-1-w", this.options.collapseButtonIcon)
            }
        },
        destroy: function () {
            a.Widget.prototype.destroy.apply(this, arguments);
            this.element.undelegate();
            this.element.unbind();
            this.element.removeClass(this.css.toolbarWrapperConteiner).find("#" + this._id("_toolbar")).removeClass(this.css.toolbarWidget).end().find("#" + this._id("_collapseButton")).removeClass(this.css.toolbarCollapsedButton).end().find(":ui-igToolbarButton").igToolbarButton("destroy").end().find(":ui-igCombo").igCombo("destroy").end().find(":ui-igSplitButton").igSplitButton("destroy").end().find(":ui-igColorPickerSplitButton").igColorPickerSplitButton("destroy");
            delete this.buttonsList;
            delete this.collapseBtn;
            delete this.toolbarBody
        }
    });
    a.ig = a.ig || {};
    a.ig.igToolbarItemBaseDescriptor = Class.extend({
        settings: {
            width: null,
            height: null,
            props: {
                scope: {
                    value: null
                }
            }
        },
        _updatedProperties: [],
        init: function (b) {
            this.settings = a.extend(true, {}, this.settings, b);
            this.name = b.name;
            this.type = b.type;
            if (this.settings.scope) {
                this.settings.props.scope = this.settings.scope
            }
        },
        updateProperty: function (b, c) {
            this.settings.props[b].value = c;
            this._updatedProperties.push(this.settings.props[b])
        },
        getProperty: function (b) {
            return this.settings.props[b]
        },
        getUpdatedProperties: function () {
            return this._updatedProperties
        },
        getProperties: function () {
            return this.settings.props
        },
        callbackRenderer: function () {
            if (this.settings.callbackRenderer && a.isFunction(this.settings.callbackRenderer)) {
                return this.settings.callbackRenderer()
            }
        },
        handler: function () {
            return this.settings.handler
        }
    });
    a.ig.igToolbarButtonDescriptor = a.ig.igToolbarItemBaseDescriptor.extend({
        settings: {
            props: {
                onlyIcons: {
                    value: true
                },
                labelText: {
                    value: "&nbsp;"
                }
            }
        },
        init: function (b) {
            this._super(b)
        }
    });
    a.ig.igToolbarSplitButtonDescriptor = a.ig.igToolbarItemBaseDescriptor.extend({
        settings: {
            props: {
                items: []
            }
        },
        init: function (b) {
            this._super(b)
        }
    });
    a.ig.igToolbarComboDescriptor = a.ig.igToolbarItemBaseDescriptor.extend({
        settings: {
            props: {
                valueKey: {
                    value: "text"
                },
                textKey: {
                    value: "value"
                },
                enableCheckboxes: {
                    value: false
                },
                dropDownOnFocus: {
                    value: true
                },
                selectedItems: {
                    value: [
                        {
                            index: 0
                        }
                    ]
                },
                enableClearButton: {
                    value: false
                },
                dataSource: {
                    value: null
                },
                mode: {
                    value: "dropdown"
                },
                dropDownAsChild: {
                    value: true
                },
                focusOnSelect: {
                    value: false
                }
            }
        },
        init: function (b) {
            this._super(b);
            if (this.settings.dataSource) {
                this.settings.props.dataSource.value = this.settings.dataSource
            }
        }
    });
    a.widget("ui.igToolbarButton", a.ui.igButton, {
        options: {
            allowToggling: true,
            isSelected: false
        },
        ENTER: 13,
        _setOption: function (b, c) {
            a.ui.igButton.prototype._setOption.apply(this, arguments);
            switch (b) {
                case"allowToggling":
                    this._setToggling(c);
                    break;
                case"isSelected":
                    this.options.isSelected = c;
                    break
            }
        },
        _init: function () {
            var c = this, b = this.options;
            a.ui.igButton.prototype._init.apply(this);
            this._isToggled = false;
            this._setToggling(this.options.allowToggling);
            this.element.bind("keypress", a.proxy(this._onEnterKey, this));
            this.element.unbind("blur");
            this.element.bind("blur", function (d) {
                c.element.removeClass(b.css.buttonFocusClasses)
            })
        },
        _setToggling: function (d) {
            var b = this.options, c = this;
            b.allowToggling = d;
            if (b.allowToggling && this.element.data("events").mouseup) {
                this.element.unbind("mouseup");
                this.element.bind("click", function () {
                    if (b.isSelected) {
                        c.element.removeClass(b.css.buttonActiveClasses)
                    }
                    c.element.removeClass(b.css.buttonFocusClasses);
                    b.isSelected = !b.isSelected
                })
            } else {
                if (!b.allowToggling && !this.element.data("events").mouseup) {
                    this.element.bind("mouseup", this._events.mouseup);
                    this.element.unbind("mousedown");
                    this.element.bind("mousedown", this._events.mousedown)
                }
            }
        },
        toggle: function () {
            var d = this, b = d.element, c = this.options;
            if (c.disabled === true || c.allowToggling === false) {
                return
            }
            c.isSelected = !c.isSelected;
            b.toggleClass(c.css.buttonActiveClasses)
        },
        _onEnterKey: function (b) {
            if (b.keyCode !== this.ENTER) {
                return
            }
            this.element.mousedown()
        },
        destroy: function () {
            a.ui.igButton.prototype.destroy.call(this);
            this.element.unbind();
            this.element.removeClass("")
        }
    });
    a.widget("ui.mouseWrapper", a.ui.mouse, {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        events: {
            start: "start",
            drag: "drag",
            stop: "stop",
            capture: "capture"
        },
        _create: function () {
            var c = this, b = this._mouseDown;
            if (a.browser.msie && a.browser.version.slice(0, 1) === "9") {
                this._mouseDown = function (d) {
                    var e = d.preventDefault, f;
                    d.preventDefault = function () {
                    };
                    f = b.apply(c, [d]);
                    d.preventDefault = e;
                    return f
                }
            }
            this._mouseInit()
        },
        destroy: function () {
            this._mouseDestroy();
            return this
        },
        _mouseStart: function (b) {
            return this._trigger(this.events.start, b)
        },
        _mouseDrag: function (b) {
            return this._trigger(this.events.drag, b)
        },
        _mouseStop: function (b) {
            return this._trigger(this.events.stop, b)
        },
        _mouseCapture: function (b) {
            return this._trigger(this.events.capture, b)
        }
    });
    a.widget("ui.igPopover", {
        css: {
            baseClasses: "ui-widget ui-igtooltip",
            arrowImageBaseClass: "ui-igtooltip-arrow-",
            closeButtonClass: "ui-icon ui-icon-close"
        },
        options: {
            renderHeader: false,
            renderCloseButton: true,
            closeOnBlur: true,
            direction: "auto",
            position: "auto",
            width: null,
            height: null,
            defaultMaxWidth: 200,
            target: null,
            fadeTimespan: 150
        },
        events: {
            popoverShowing: "popoverShowing",
            popoverShown: "popoverShown",
            popoverHiding: "popoverHiding",
            popoverHidden: "popoverHidden"
        },
        _create: function () {
            this._priorityDir = ["top", "bottom", "right", "left"];
            this._arrowDir = ["bottom", "top", "left", "right"];
            this._positions = ["balanced", "start", "end"];
            this._directionIndex = -1;
            this._positionIndex = -1;
            this._forced = this.options.direction !== "auto" && this.options.position !== "auto"
        },
        _createWidget: function (c, b) {
            a.Widget.prototype._createWidget.apply(this, arguments);
            this.element = a(b);
            if (b && b.nodeType !== undefined) {
                this._renderPopover();
                this._attachEventsToTarget()
            }
            if (this.options.direction !== "auto" || this.options.position !== "auto") {
                this._getPrioritiesIndex()
            }
        },
        _setOption: function (b, c) {
            switch (b) {
                case"direction":
                    this.options.direction = c;
                    if (this.options.direction !== "auto") {
                        this._getPrioritiesIndex()
                    }
                    this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
                    break;
                case"position":
                    this.options.position = c;
                    if (this.options.position !== "auto") {
                        this._getPrioritiesIndex()
                    }
                    this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
                    break;
                case"target":
                    this._detachEventsFromTarget();
                    this.options.target = c;
                    this._attachEventsToTarget();
                    break;
                case"fadeTimespan":
                    if (typeof c === "number") {
                        this.options.fadeTimespan = c
                    }
                    break;
                case"renderHeader":
                case"renderCloseButton":
                case"closeOnBlur":
                case"width":
                case"height":
                case"defaultMaxWidth":
                    throw new Error(a.ig.SharedLocale.locale.popoverOptionChangeNotSupported + " " + b)
            }
        },
        destroy: function () {
            this._detachEventsFromTarget();
            a("#" + this.id() + "_popover").remove();
            a.Widget.prototype.destroy.call(this);
            return this
        },
        id: function () {
            return this.element[0].id
        },
        container: function () {
            return a("#" + this.id() + "_popover_contentInner")
        },
        show: function (d, b) {
            var c = d || this.options.target;
            if (b) {
                this._setNewContent(b)
            }
            this._openPopover(c)
        },
        hide: function () {
            this._closePopover()
        },
        getContent: function () {
            return a("#" + this.id() + "_popover_contentInner").html()
        },
        setContent: function (b) {
            if (typeof b === "string") {
                this._setNewContent(b)
            }
        },
        _renderPopover: function () {
            this.popover = a("<div></div>").attr("id", this.id() + "_popover").css({
                display: "none",
                "white-space": "normal",
                "word-wrap": "break-word",
                position: "absolute"
            }).addClass(this.css.baseClasses).appendTo(this.element);
            this._createContentDiv()
        },
        _createContentDiv: function () {
            var b;
            b = a("<div></div>").attr("id", this.id() + "_popover_contentFrame").css("position", "relative").css("max-width", this.options.defaultMaxWidth).addClass("ui-widget-content ui-corner-all").appendTo(this.popover);
            if (this.options.renderCloseButton === true) {
                a("<div></div>").attr("id", this.id() + "_popover_closeBtn").addClass(this.css.closeButtonClass).css({
                    display: "block",
                    "float": "right",
                    position: "relative",
                    top: "-5px",
                    left: "5px"
                }).bind("click.popover", a.proxy(this._closeBtnClick, this)).appendTo(b)
            }
            a("<div></div>").attr("id", this.id() + "_popover_contentInner").css("position", "relative").appendTo(b);
            a("<div></div>").css("clear", "both").appendTo(b)
        },
        _updateArrowDiv: function (f, e) {
            var b = a("#" + this.id() + "_popover_arrow"), c = a("#" + this.id() + "_popover_contentFrame"), d;
            if (b.length === 0) {
                b = a("<div></div>").attr("id", this.id() + "_popover_arrow").attr("position", "relative").addClass(this.css.arrowImageBaseClass + this._arrowDir[e]).appendTo(this.popover)
            } else {
                b.removeClass().addClass(this.css.arrowImageBaseClass + this._arrowDir[e])
            }
            d = this._getHiddenElementsDimensions([b, c]);
            switch (f) {
                case"top":
                    c.css({
                        left: "",
                        top: "",
                        "float": ""
                    });
                    b.css({
                        left: "",
                        top: "",
                        "float": ""
                    });
                    break;
                case"bottom":
                    c.css({
                        left: "",
                        top: d[0].height,
                        "float": ""
                    });
                    b.css({
                        left: "",
                        top: d[1].height * -1,
                        "float": ""
                    });
                    break;
                case"left":
                    c.css({
                        left: "",
                        top: "",
                        "float": "left"
                    });
                    b.css({
                        left: "",
                        top: "",
                        "float": "left"
                    });
                    break;
                case"right":
                    c.css({
                        left: d[0].width,
                        top: "",
                        "float": "left"
                    });
                    b.css({
                        left: d[1].width * -1,
                        top: "",
                        "float": "left"
                    });
                    break
            }
            this.oDir = f
        },
        _targetMouseLeave: function () {
            if (this.options.closeOnBlur === true) {
                this._closePopover()
            }
        },
        _targetMouseMove: function () {
            this._openPopover(a(this.options.target))
        },
        _closeBtnClick: function (b, c) {
            this._closePopover();
            b.stopPropagation()
        },
        _attachEventsToTarget: function () {
            var b = this.options.target;
            if (b && HTMLElement !== undefined && b instanceof HTMLElement) {
                a(b).unbind("mouseenter.popover").bind("mouseenter.popover", a.proxy(this._targetMouseMove, this));
                a(b).unbind("mouseleave.popover").bind("mouseleave.popover", a.proxy(this._targetMouseLeave, this))
            }
        },
        _detachEventsFromTarget: function () {
            var b = this.options.target;
            if (b && HTMLElement !== undefined && b instanceof HTMLElement) {
                a(b).unbind("popover")
            }
        },
        _positionPopover: function (e) {
            var d = 0, b, c;
            if (this.options.direction === "auto") {
                do {
                    this._updateArrowDiv(this._priorityDir[d], d);
                    b = "_" + this._priorityDir[d] + "Position";
                    c = this[b](e);
                    d++
                } while (c === false && d < this._priorityDir.length);
                if (c === false) {
                    return
                }
            } else {
                this._updateArrowDiv(this.options.direction, this._directionIndex);
                b = "_" + this.options.direction + "Position";
                if (!this[b](e)) {
                    return
                }
            }
        },
        _findProperPosition: function (d, m, h) {
            var f = 0, e, n, b, c, k = a(window), j, l, g;
            if (d === "left") {
                c = "left";
                b = "outerWidth";
                l = k.scrollLeft()
            } else {
                c = "top";
                b = "outerHeight";
                l = k.scrollTop()
            }
            if (h.offset()[c] + h[b]() > l + k[0][b]) {
                j = k[0][b] + l - h.offset()[c]
            } else {
                j = h[b]()
            }
            if (h[b]() > this.popover[b]()) {
                n = h.offset()[c] + j / 2 - this.popover[b]() / 2;
                e = d === "left" ? this._checkCollision(m, n) : this._checkCollision(n, m)
            } else {
                if (this.options.position === "auto") {
                    do {
                        g = this._positions[f];
                        n = this._getCounterPosition(h, j, g, c, b);
                        e = d === "left" ? this._checkCollision(m, n) : this._checkCollision(n, m)
                    } while (e === false && ++f < this._positions.length)
                } else {
                    n = this._getCounterPosition(h, j, this.options.position, c, b);
                    e = d === "left" ? this._checkCollision(m, n) : this._checkCollision(n, m)
                }
            }
            if (e === true) {
                this._adjustArrowPosition(h, d, c, b)
            }
            return e
        },
        _getCounterPosition: function (e, f, d, c, b) {
            var g;
            switch (d) {
                case"balanced":
                    g = e.offset()[c] + f / 2 - this.popover[b]() / 2;
                    break;
                case"start":
                    g = e.offset()[c];
                    break;
                case"end":
                    g = e.offset()[c] - this.popover[b]() + f;
                    break
            }
            return g
        },
        _topPosition: function (c) {
            var b = c.offset().top - this.popover.outerHeight();
            return this._findProperPosition("left", b, c)
        },
        _bottomPosition: function (c) {
            var b = c.offset().top + c.outerHeight();
            return this._findProperPosition("left", b, c)
        },
        _leftPosition: function (c) {
            var b = c.offset().left - this.popover.outerWidth();
            return this._findProperPosition("top", b, c)
        },
        _rightPosition: function (c) {
            var b = c.offset().left + c.outerWidth();
            return this._findProperPosition("top", b, c)
        },
        _checkCollision: function (f, b) {
            var e = this.popover.outerWidth(), d = this.popover.outerHeight(), h = a(window), g, i, c;
            i = h.width() + h.scrollLeft();
            g = h.height() + h.scrollTop();
            if (b < h.scrollLeft() || b + e > i || f < h.scrollTop() || f + d > g) {
                if (this._forced === false) {
                    return false
                }
            }
            c = this._getRelativeOffset();
            this.popover.css({
                top: f - c.top,
                left: b - c.left
            });
            return true
        },
        _getPrioritiesIndex: function () {
            var b;
            if (this.options.direction !== "auto") {
                for (b = 0; b < this._priorityDir.length; b++) {
                    if (this.options.direction === this._priorityDir[b]) {
                        this._directionIndex = b;
                        break
                    }
                }
            }
            if (this.options.position !== "auto") {
                for (b = 0; b < this._positions.length; b++) {
                    if (this.options.position === this._positions[b]) {
                        this._positionIndex = b;
                        break
                    }
                }
            }
        },
        _openPopover: function (d) {
            var b, c, e = this.getContent();
            b = {
                element: d,
                content: e,
                popover: this.popover
            };
            c = this._trigger(this.events.popoverShowing, this, b);
            if (c === true) {
                if (b.content !== e && typeof b.content === "string") {
                    this._setNewContent(b.content)
                }
                this._positionPopover(d);
                this._currentTarget = d;
                this.popover.fadeIn(this.options.fadeTimespan);
                this._trigger(this.events.popoverShown, this, b)
            }
        },
        _closePopover: function () {
            var b, c;
            b = {
                element: this._currentTarget,
                content: this.getContent(),
                popover: this.popover
            };
            c = this._trigger(this.events.popoverHiding, this, b);
            if (c === true) {
                this.popover.fadeOut(this.options.fadeTimespan);
                this._trigger(this.events.popoverHidden, this, b)
            }
        },
        _adjustArrowPosition: function (e, d, c, b) {
        },
        _getRelativeOffset: function () {
            var c = {
                left: 0,
                top: 0
            }, b = this.popover;
            while (b[0] !== null && b[0] !== undefined && b[0].nodeName !== "#document") {
                if (b.css("position") === "relative") {
                    c.left = b.offset().left;
                    c.top = b.offset().top;
                    break
                }
                b = b.parent()
            }
            return c
        },
        _getHiddenElementsDimensions: function (c) {
            var b = [], e, d;
            a("#" + this.id() + "_popover").show();
            for (e = 0; e < c.length; e++) {
                d = c[e];
                b.push({
                    width: d.outerWidth(),
                    height: d.outerHeight()
                })
            }
            a("#" + this.id() + "_popover").hide();
            return b
        },
        _setNewContent: function (b) {
            a("#" + this.id() + "_popover_contentInner").html(b)
        }
    });
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("ig.ui.shared", ["ig.util", "jquery.ui.core", "jquery.ui.widget"], function () {
            return a.ui.igLoading
        })
    }
}(jQuery));
( function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 1000
        }).addClass("ui-igtrialwatermark")
    })
}(jQuery)); 