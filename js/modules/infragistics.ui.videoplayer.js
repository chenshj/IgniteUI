﻿/*
 * Infragistics.Web.ClientUI Video Player localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.VideoPlayer) {
    $.ig.VideoPlayer = {};
    $.extend($.ig.VideoPlayer, {locale: {liveStream: "Live video", live: "Live", paused: "Paused", playing: "Playing", play: "Play", volume: "Volume", unsupportedVideoSource: "The current video sources does not contain a format that is supported by your browser.", missingVideoSource: "No compatible video source.", progressLabelLongFormat: "$currentTime$ / $duration$", progressLabelShortFormat: "$currentTime$", enterFullscreen: "Go Fullscreen", exitFullscreen: "Exit Fullscreen", skipTo: "SKIP TO", unsupportedBrowser: "The current browser does not support HTML5 video. <br/>Try upgrading to any of the following versions:", currentBrowser: "Current browser: {0}", ie9: "Microsoft Internet Explorer V 9+", chrome8: "Google Chrome V 8+", firefox36: "Mozilla Firefox V 3.6+", safari5: "Apple Safari V 5+", opera11: "Opera V 11+", ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx", operaDownload: "http://www.opera.com/download/", chromeDownload: "http://www.google.com/chrome", firefoxDownload: "http://www.mozilla.com/", safariDownload: "http://www.apple.com/safari/download/", buffering: "Buffering...", adMessage: "Ad: Video will resume in $duration$ seconds.", adMessageLong: "Ad: Video will resume in $duration$.", adMessageNoDuration: "Ad: Video will resume after the commercial.", adNewWindowTip: "Ad: Click to open ad content in a new window.", nonDivException: "The Infragistics HTML5 Video Player can be instantiated only on a DIV tag.", relatedVideos: "RELATED VIDEOS", replayButton: "Replay", replayTooltip: "Click to replay last video."}});
    /*
     * Infragistics.Web.ClientUI jQuery HTML5 Video Player 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     *  jquery-1.4.2.js
     *	jquery.ui.core.js
     *	jquery.ui.widget.js
     *	modernizr.js
     *  infragistics.util.js
     *  infragistics.ui.shared.js
     */
}
if (typeof jQuery !== "function") {
    throw new Error("jQuery is undefined")
}
(function (a) {
    a.widget("ui.igVideoPlayer", {_const: {VOLUME_MAX: 1, VOLUME_MIN: 0, VIDEO_STATE_TIMEOUT: 200, SCROLL_TIMEOUT: 100, COMMERCIAL_SEEK_DELTA: 2, SLIDE_SEEK_TIMEOUT: 500, HREF: "#"}, _id: function (b) {
        return this.element[0].id + b
    }, options: {sources: [], width: null, height: null, posterUrl: "", preload: false, autoplay: false, autohide: true, volumeAutohideDelay: 1000, centerButtonHideDelay: 1200, loop: false, browserControls: false, fullscreen: false, volume: 0.5, muted: false, title: "", showSeekTime: true, progressLabelFormat: "${currentTime} / ${duration}", bookmarks: [
        {time: 0, title: "", disabled: false}
    ], relatedVideos: [
        {imageUrl: "", title: "", width: null, height: null, link: "", sources: [], css: null}
    ], banners: [
        {imageUrl: "", times: [], closeBanner: true, animate: true, visible: true, duration: 1000, autohide: false, hidedelay: 10000, link: null, width: null, height: null, css: null}
    ], commercials: {linkedCommercials: [
        {sources: [], startTime: 10, link: "", title: ""}
    ], embeddedCommercials: [
        {startTime: 20, endTime: 30, link: "", title: ""}
    ], alwaysPlayCommercials: false, showBookmarks: true, adMessage: {animate: true, autoHide: true, hideDelay: 20000, animationDuration: 1000}}}, events: {ended: "ended", playing: "playing", paused: "paused", buffering: "buffering", progress: "progress", waiting: "waiting", bookmarkHit: "bookmarkHit", bookmarkClick: "bookmarkClick", enterFullScreen: "enterFullScreen", exitFullScreen: "exitFullScreen", relatedVideoClick: "relatedVideoClick", bannerVisible: "bannerVisible", bannerHidden: "bannerHidden", bannerClick: "bannerClick", browserNotSupported: "browserNotSupported"}, css: {baseClasses: "ui-widget ui-igplayer", controlsClass: "ui-widget-header ui-igplayer-controls ui-igplayer-grid ui-igplayer-autohide ui-corner-all", controlsHideClass: "ui-igplayer-controls-hide", videoClass: "ui-igplayer-video", unsupportedBrowserClass: "ui-igvideoplayer-non-html5-supported-message ui-helper-clearfix", activeVideoClass: "ui-igplayer-active-video", playButtonClass: "ui-igplayer-playbutton", progressBarClass: "ui-igplayer-progressbar ui-corner-all", fullScreenClass: "ui-igplayer-fullscreen-button", fullScreenIconClass: "ui-icon ui-igbutton-icon ui-icon-arrow-4-diag", volumeControlClass: "ui-igplayer-volumecontrol", volumeSliderClass: "ui-igplayer-volumeslider", progressLabelClass: "ui-igplayer-progresslabel", bookmarkContainerClass: "ui-widget ui-igplayer-bookmark-container", bookmarkContainerHeaderClass: "ui-widget-header ui-igplayer-bookmark-header", bookmarkListClass: "ui-widget-content ui-igplayer-bookmark-list", bookmarkItemDisabledClass: "ui-igplayer-bookmark-item-disabled", bookmarkItemTimeClass: "ui-igplayer-bookmark-item-time", bookmarkItemTitleClass: "ui-igplayer-bookmark-item-title", bookmarkActiveItemClass: "ui-igplayer-bookmark-active-item", relatedVideosContainerClass: "ui-igplayer-related-video-container", relatedVideosOuterContainerClass: "ui-igplayer-related-video-outer-container", relatedVideoClass: "ui-igplayer-related-video", relatedVideoFirstClass: "ui-igplayer-related-video-first", relatedVideoLastClass: "ui-igplayer-related-video-last", relatedVideoHoverClass: "ui-igplayer-related-video-hover", relatedVideoScrollLeftClass: "ui-igplayer-related-scroller-left", relatedVideoScrollLeftIconClass: "ui-icon-triangle-1-w", relatedVideoScrollRightClass: "ui-igplayer-related-scroller-right", relatedVideoScrollRightIconClass: "ui-icon-triangle-1-e", relatedVideoScrollListClass: "ui-igplayer-related-list", relatedVideosHeaderClass: "ui-igplayer-related-video-header", relatedVideoBarClass: "ui-igplayer-related-video-bar", relatedVideoReplayClass: "ui-igplayer-related-video-replay", relatedVideoReplayIconClass: "ui-icon-arrowrefresh-1-s", bannerContainerClass: "ui-igplayer-banner-container", bannerClass: "ui-igplayer-banner ui-corner-all", bannerCloseClass: "ui-igplayer-banner-close", bannerCloseIconClass: "ui-icon-close", adMsgContainerClass: "ui-igplayer-ad-msg-container", adMsgClass: "ui-igplayer-ad-msg", adMsgCloseClass: "ui-igplayer-ad-msg-close", adMsgCloseIconClass: "ui-icon-close", linkedBookmarkClass: "ui-igplayer-linked-bookmark", adBookmarkClass: "ui-igplayer-ad-bookmark", unsupportedVideoSourceClass: "ui-igplayer-not-supported-video-source", unsupportedVideoSourceIconClass: "ui-igplayer-not-supported-video-source-icon", centerPlayButtonClass: "ui-igplayer-centerplaybutton-play", centerPauseButtonClass: "ui-igplayer-centerplaybutton-pause", centerPlayButtonIconClass: "ui-igplayer-centerplaybutton-icon", waitingIndicatorClass: "ui-igplayer-waiting", waitingIndicatorIconClass: "ui-igplayer-waiting-icon", seekTooltipClass: "ui-igplayer-seektooltip"}, widget: function () {
        return this.element
    }, _createWidget: function () {
        var b = this.options;
        b.bookmarks = [];
        b.relatedVideos = [];
        b.banners = [];
        b.commercials.linkedCommercials = [];
        b.commercials.embeddedCommercials = [];
        a.Widget.prototype._createWidget.apply(this, arguments)
    }, _create: function () {
        this.supportsVideo = this.supports_video();
        if (typeof Modernizr === "object" && Modernizr.touch) {
            this.options.browserControls = true
        }
        if (this.element.is("div")) {
            this.container = this.element
        } else {
            if (this.element.is("video")) {
                this.container = a("<div></div>").attr("id", this._id("_container")).insertBefore(this.element);
                this.element.appendTo(this.container)
            } else {
                throw new Error(a.ig.VideoPlayer.locale.nonDivException)
            }
        }
        this._oldWidth = this.element.css("width");
        this._oldHeight = this.element.css("height");
        this._renderControl()
    }, _renderControl: function () {
        var c = this.options, d, b = this.css;
        this._prevReadyState = 0;
        this._bookmarksRendered = false;
        if (this.supportsVideo) {
            this._renderBanners()
        }
        this.currentVideo = d = this._createMainVideoElement().addClass(b.videoClass);
        if (c.disabled) {
            this.container.addClass("ui-state-disabled")
        }
        if (c.width) {
            d.css("width", c.width);
            this.container.css("width", c.width)
        }
        if (c.height) {
            d.css("height", c.height);
            this.container.css("height", c.height)
        }
        if (this.supportsVideo) {
            this._baseZIndex = parseInt(this.container.css("z-index"), 10) || 0;
            this._attachEvents(d);
            this._renderSources(c.sources, d);
            this._analyzeSource(d);
            setTimeout(a.proxy(this._onVideoStateChange, this), this._const.VIDEO_STATE_TIMEOUT);
            this._createBigPlayButton();
            this._createWaitingIndicator();
            this._renderEmbeddedCommercials();
            this._renderCommercials();
            d[0].muted = c.muted;
            if (c.muted && a.browser.webkit) {
                d[0].volume = 0
            } else {
                if (c.volume >= this._const.VOLUME_MIN && c.volume <= this._const.VOLUME_MAX) {
                    d[0].volume = c.volume
                }
            }
            if (!c.browserControls) {
                this._renderControls()
            }
            this._lastPausedState = d[0].paused;
            if (c.fullscreen) {
                this._setOption("fullscreen", true, true)
            }
            this._renderRelatedVideos()
        } else {
            this.currentVideo.hide();
            this._renderUnsupportedBrowser()
        }
        a("#" + this._id("_detectError")).appendTo(this.container).bind({click: function (e) {
            e.preventDefault()
        }});
        this.container.addClass(b.baseClasses)
    }, _createVideoElement: function (b) {
        var c = a("<video></video>").attr("id", b);
        return c
    }, _saveExistingVideoProperties: function (b) {
        this._oldAutoPlay = b.attr("autoplay");
        this._oldPreload = b.attr("preload");
        this._oldLoop = b.attr("loop");
        this._oldPoster = b.attr("poster");
        this._oldControls = b.attr("controls");
        this._oldSrc = b.attr("src");
        this._oldMuted = b[0].muted;
        this._oldVolume = b[0].volume;
        b.removeAttr("autoplay");
        b.removeAttr("preload");
        b.removeAttr("loop");
        b.removeAttr("poster");
        b.removeAttr("controls");
        b.removeAttr("src")
    }, _restoreExistingVideoProperties: function (b) {
        b.attr("autoplay", this._oldAutoPlay);
        b.attr("preload", this._oldPreload);
        b.attr("loop", this._oldLoop);
        b.attr("poster", this._oldPoster);
        b.attr("controls", this._oldControls);
        b.attr("src", this._oldSrc);
        b[0].muted = this._oldMuted;
        b[0].volume = this._oldVolume
    }, _createMainVideoElement: function () {
        var c = this.options, b = this.element.is("video"), d = (b ? this.element : this._createVideoElement(this._id("_video")));
        if (b) {
            this._saveExistingVideoProperties(d)
        }
        if (c.autoplay) {
            d.attr("autoplay", true)
        }
        d.attr("preload", "metadata");
        if (c.preload) {
            d.attr("preload", "auto")
        }
        if (c.browserControls) {
            d.attr("controls", true)
        }
        if (c.loop) {
            d.attr("loop", true)
        }
        if (c.posterUrl.length > 0) {
            d.attr("poster", c.posterUrl)
        }
        return d.appendTo(this.container)
    }, _renderUnsupportedBrowser: function () {
        if (this._trigger(this.events.browserNotSupported)) {
            var c = a("<div></div>").addClass(this.css.unsupportedBrowserClass).appendTo(this.container), d, b;
            if (a.browser.msie) {
                b = "Internet Explorer " + a.browser.version
            } else {
                if (a.browser.opera) {
                    b = "Opera " + a.browser.version
                } else {
                    if (a.browser.webkit) {
                        b = "Webkit " + a.browser.version
                    } else {
                        if (a.browser.mozilla) {
                            b = "Mozilla Firefox " + a.browser.version
                        } else {
                            b = a.browser.version
                        }
                    }
                }
            }
            a("<div></div>").addClass("ui-igvideoplayer-current-browser-label").html(a.ig.VideoPlayer.locale.currentBrowser.replace("{0}", b)).appendTo(c);
            a("<div></div>").addClass("ui-igvideoplayer-non-html5-text").html(a.ig.VideoPlayer.locale.unsupportedBrowser).appendTo(c);
            d = a("<ul></ul>").addClass("ui-igplayer-browsers-list").appendTo(c);
            a("<a></a>").attr("href", a.ig.VideoPlayer.locale.chromeDownload).attr("target", "_blank").addClass("ui-igplayer-chrome-icon").html(a.ig.VideoPlayer.locale.chrome8).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(d));
            a("<a></a>").attr("href", a.ig.VideoPlayer.locale.firefoxDownload).attr("target", "_blank").addClass("ui-igplayer-firefox-icon").html(a.ig.VideoPlayer.locale.firefox36).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(d));
            a("<a></a>").attr("href", a.ig.VideoPlayer.locale.operaDownload).attr("target", "_blank").addClass("ui-igplayer-Opera-icon").html(a.ig.VideoPlayer.locale.opera11).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(d));
            a("<a></a>").attr("href", a.ig.VideoPlayer.locale.safariDownload).attr("target", "_blank").addClass("ui-igplayer-safari-icon").html(a.ig.VideoPlayer.locale.safari5).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(d));
            a("<a></a>").attr("href", a.ig.VideoPlayer.locale.ieDownload).attr("target", "_blank").addClass("ui-igplayer-ie-icon").html(a.ig.VideoPlayer.locale.ie9).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(d));
            this.container.addClass("ui-igvideoplayer-non-html5")
        }
    }, _renderRelatedVideoBar: function (b) {
        var d = this.css, c = this, e = a("<div></div>").attr("id", this._id("_rv_bar")).addClass(d.relatedVideoBarClass).appendTo(b);
        a("<a></a>").attr("id", this._id("_rv_bar_fs")).appendTo(a("<div></div>").css({position: "absolute", top: 0, left: 0, "text-align": "right", width: "100%", height: "100%"}).appendTo(e)).igButton({link: {href: this._const.HREF}, css: {buttonLabelClass: d.fullScreenIconClass}}).attr("title", a.ig.VideoPlayer.locale.enterFullscreen).addClass(d.fullScreenClass).bind({click: function (f) {
            f.preventDefault();
            c._setOption("fullscreen", !c.options.fullscreen)
        }});
        a("<a></a>").attr("id", this._id("_rv_bar_replay")).appendTo(e).igButton({onlyIcons: false, labelText: a.ig.VideoPlayer.locale.replayButton, icons: {primary: d.relatedVideoReplayIconClass}, link: {href: this._const.HREF}}).attr("title", a.ig.VideoPlayer.locale.replayTooltip).bind({click: function (f) {
            f.preventDefault();
            if (!a(this).igButton("option", "disabled")) {
                c.togglePlay()
            }
        }}).addClass(d.relatedVideoReplayClass)
    }, _renderScrollButtons: function (b) {
        var c = this.css, d;
        a("<a></a>").attr("id", this._id("_rv_left")).appendTo(b).igButton({onlyIcons: true, icons: {primary: c.relatedVideoScrollLeftIconClass}, link: {href: this._const.HREF}}).addClass(c.relatedVideoScrollLeftClass).css("position", "absolute").hide();
        d = a("<ul></ul>").addClass(c.relatedVideoScrollListClass).appendTo(b);
        a("<a></a>").attr("id", this._id("_rv_right")).appendTo(b).igButton({onlyIcons: true, icons: {primary: c.relatedVideoScrollRightIconClass}, link: {href: this._const.HREF}}).addClass(c.relatedVideoScrollRightClass).css("position", "absolute");
        return d
    }, _renderRelatedVideos: function () {
        var g = this.options, h = g.relatedVideos || [], f = h.length, e = 0, d = this.css, b, j, k, c = this;
        if (f > 0) {
            b = a("<div></div>").attr("id", this._id("_rvcc")).addClass(d.relatedVideosOuterContainerClass).appendTo(this.container).hide();
            a("<div><div>").html(a.ig.VideoPlayer.locale.relatedVideos).addClass(d.relatedVideosHeaderClass).appendTo(b);
            j = a("<div></div>").attr("id", this._id("_rvc")).appendTo(b).addClass(d.relatedVideosContainerClass);
            k = this._renderScrollButtons(j);
            this._renderRelatedVideoBar(b);
            this._rvUlWidth = 0;
            this._rvImagesToLoad = 0;
            this._rvImagesLoaded = 0;
            for (e; e < f; e++) {
                if (h[e].imageUrl && h[e].imageUrl !== "") {
                    this._renderRelatedVideo(h[e], k, e === 0, e === f - 1);
                    this._rvImagesToLoad++
                }
            }
            this.relatedScrollers = a("a", j).bind({mouseover: function () {
                if (!c._isScrolling) {
                    c._isScrolling = true;
                    c._leftDirection = a(this).hasClass(c.css.relatedVideoScrollLeftClass);
                    c._rvDoScroll()
                }
            }, mouseout: function () {
                c._rvStopScroll()
            }});
            this.relatedVideoElements = a("." + this.css.relatedVideoClass.split(" ")[0], k).each(function (l) {
                a(this).data("related-index", l)
            }).bind({mouseover: function () {
                a(this).addClass(c.css.relatedVideoHoverClass).children().filter("div").show()
            }, mouseout: function () {
                a(this).removeClass(c.css.relatedVideoHoverClass).children().filter("div").hide()
            }, click: function (i) {
                var l = c.options.relatedVideos[a(this).data("related-index")];
                if (c._relatedVideoClick(l, a(this), i)) {
                    if (l.link && l.link.length > 0) {
                        window.open(l.link, "_blank")
                    } else {
                        if (l.sources) {
                            c._renderSources(l.sources, c.currentVideo);
                            c._analyzeSource(c.currentVideo, true);
                            c.play()
                        }
                    }
                }
            }})
        }
    }, _rvScrollOnce: function () {
        var b = a("#" + this._id("_rvc")), k = a("ul", b), e = k[0].style.left, d = parseInt((e === "" || e === "auto" ? "0px" : e), 10), h = 10, g = this._leftDirection ? d + h : d - h, f = a("#" + this._id("_rv_left")), i = a("#" + this._id("_rv_right")), l = k.width(), j = b.width(), c = true;
        k[0].style.left = g + "px";
        if (d === 0 && g < 0) {
            f.show()
        }
        if (g >= 0 && d !== 0 && f[0].style.display !== "none") {
            f.hide();
            c = false
        }
        if (j - g >= l && i[0].style.display !== "none") {
            c = false;
            i.hide()
        } else {
            if (i[0].style.display === "none") {
                i.show()
            }
        }
        return c
    }, _rvDoScroll: function () {
        var b = this._isScrolling && this._rvScrollOnce();
        if (b) {
            this._scrollingTimoutId = setTimeout(a.proxy(this._rvDoScroll, this), this._const.SCROLL_TIMEOUT)
        } else {
            this._rvStopScroll()
        }
    }, _rvStopScroll: function () {
        if (this._isScrolling) {
            clearTimeout(this._scrollingTimoutId);
            this._isScrolling = false
        }
    }, _relatedVideoClick: function (e, d, c) {
        var b = {relatedVideo: e, relatedVideoElement: d};
        return this._trigger(this.events.relatedVideoClick, c, b)
    }, _renderRelatedVideo: function (e, b, c, d) {
        var g = a("<li></li>").appendTo(b).addClass(this.css.relatedVideoClass), f = a("<img/>").appendTo(g), h = this;
        if (c || d) {
            g.addClass(c ? this.css.relatedVideoFirstClass : this.css.relatedVideoLastClass)
        }
        if (e.imageUrl && e.imageUrl !== "") {
            f.attr("src", e.imageUrl)
        }
        if (e.title && e.title !== "") {
            f.attr("title", e.title)
        }
        if (e.css && e.css !== "") {
            f.addClass(e.css)
        }
        if (e.width && e.width !== "") {
            f.css("width", e.width)
        }
        if (e.height && e.height !== "") {
            f.css("height", e.height)
        }
        a("<div></div>").appendTo(f.parent()).css("position", "absolute").hide();
        f.bind({load: function () {
            h._imageLoaded(this)
        }, error: function () {
            h._rvImagesLoaded++;
            h._onImagesLoaded()
        }, readystatechange: function () {
            h._imageLoaded(this)
        }})
    }, _imageLoaded: function (c) {
        var d = c.readyState, f = parseInt(c.style.width, 10), b = parseInt(c.style.height, 10), e;
        if (!d || (new RegExp("loaded|complete")).test(d)) {
            this._rvUlWidth += (f + parseInt(a(c).parent().css("marginRight"), 10) + parseInt(a(c).parent().css("marginLeft"), 10));
            this._rvImagesLoaded++;
            if (f > 24 && b > 24) {
                if (f > 50 && b > 50) {
                    e = 48
                } else {
                    if (f > 34 && b > 34) {
                        e = 32
                    } else {
                        e = 24
                    }
                }
                a(c).parent().children().filter("div").addClass("ui-igplayer-related-video-hover-x" + e).css({width: e, height: e, top: (b / 2) - (e / 2), left: (f / 2) - (e / 2)})
            }
        }
        this._onImagesLoaded()
    }, _onImagesLoaded: function () {
        if (this._rvImagesLoaded === this._rvImagesToLoad) {
            var b = a("#" + this._id("_rvc"));
            a("ul", b).css("width", this._rvUlWidth + 4);
            b.parent().show();
            if (this._rvUlWidth < b.width()) {
                this.relatedScrollers.hide()
            } else {
                a(this.relatedScrollers[1]).show()
            }
            b.parent().hide();
            delete this._rvUlWidth;
            delete this._rvImagesLoaded;
            delete this._rvImagesToLoad
        }
    }, _renderEmbeddedCommercials: function () {
        var b = this.options.commercials.embeddedCommercials || [], d = 0, e = b.length, c = [], f;
        for (d; d < e; d++) {
            f = b[d];
            if (f && f.startTime && f.endTime && f.startTime < f.endTime) {
                c.push(f)
            }
        }
        b = c;
        e = b.length;
        if (b && e > 0) {
            this._embeddedCommercialsShow = a.extend(true, [], b);
            this._embeddedCommercialIndex = 0;
            this._renderAdMessage()
        }
    }, _renderCommercials: function () {
        var d = this.options, b = d.commercials.linkedCommercials || [], c = this;
        if (b.length > 0) {
            this._createVideoElement(this._id("_com_video")).attr("preload", "auto").appendTo(this.container).addClass(this.css.videoClass).bind({ended: function () {
                var f = a("#" + c._id("_ctrls_s")), e = f.data("igSlider").bookmarks;
                c._hideWaitingIndicator();
                c._commercialIndex++;
                c._commercialsShow.shift();
                c._commercialPlaying = false;
                c.currentVideo = c._getMainVideo();
                c.currentVideo.show();
                a(this).hide();
                f.igSlider("option", "disabled", false);
                if (e) {
                    e.show()
                }
                c.currentVideo[0].muted = this.muted;
                c.currentVideo[0].play();
                c.currentVideo.addClass(c.css.videoClass);
                c.controls[c._activeControlsIndex].css("z-index", "");
                a("#" + c._id("_seek_tooltip")).css("z-index", "");
                a("#" + c._id("_play")).css("z-index", "")
            }, waiting: function (e) {
                c._onVideoWaiting(e);
                c._waiting(this.currentSrc, this.currentTime, this.duration, e)
            }, timeupdate: function (e) {
                c._changeCurrentTime(e)
            }, playing: function (e) {
                c._hideWaitingIndicator();
                a("span", a("#" + c._id("_ctrls_play"))).addClass("ui-icon-pause").removeClass("ui-icon-play");
                c._playing(this.currentSrc, this.duration, e)
            }, pause: function (e) {
                a("span", a("#" + c._id("_ctrls_play"))).addClass("ui-icon-play").removeClass("ui-icon-pause");
                c._paused(this.currentSrc, this.duration, e)
            }, click: function (e) {
                e.preventDefault();
                var f = c.options.commercials.linkedCommercials[c._commercialIndex].link;
                if (f && f.length > 0) {
                    window.open(f, "_blank")
                }
            }}).hide();
            this._buildCommercialsShow();
            this._renderAdMessage()
        }
    }, _renderAdClose: function (b) {
        var c = this;
        a("<a></a>").attr("id", this._id("_ad_msg_close")).appendTo(b).igButton({onlyIcons: true, icons: {primary: this.css.adMsgCloseIconClass}, link: {href: this._const.HREF}}).addClass(this.css.adMsgCloseClass).bind("click", function (d) {
            d.preventDefault();
            d.stopPropagation();
            c.hideAdMessage()
        })
    }, _renderAdMessage: function () {
        if (a("#" + this._id("_ad_msg_c")).length === 0) {
            var c = this.css, b;
            b = a("<div></div>").attr("id", this._id("_ad_msg_c")).addClass(c.adMsgContainerClass).prependTo(this.container).bind({mouseover: function () {
                a(this).addClass("ui-state-hover")
            }, mouseout: function () {
                a(this).removeClass("ui-state-hover")
            }}).hide();
            a("<span></span>").attr("id", this._id("_ad_msg")).appendTo(b).addClass(c.adMsgClass).html(a.ig.VideoPlayer.locale.adMessage);
            this._renderAdClose(b)
        }
    }, _showAdMessage: function (d) {
        var b = a("#" + this._id("_ad_msg_c")), c = this.options.commercials.adMessage;
        this._updateAdMessage(d, true);
        b.css("width", this.container.css("width"));
        if (c.animate) {
            b.slideToggle(c.animationDuration)
        } else {
            b.show()
        }
        if (c.autoHide) {
            this._adHideTimeout = setTimeout(a.proxy(this.hideAdMessage, this), c.hideDelay)
        }
    }, _updateAdMessage: function (d, b) {
        var c = a("#" + this._id("_ad_msg"));
        if (c.is(":visible") || b) {
            if (isNaN(d)) {
                c.html(a.ig.VideoPlayer.locale.adMessageNoDuration)
            } else {
                d = parseInt(d, 10);
                if (d > 60) {
                    c.html(a.ig.VideoPlayer.locale.adMessageLong.replace("$duration$", this._toTimeString(d)))
                } else {
                    c.html(a.ig.VideoPlayer.locale.adMessage.replace("$duration$", d))
                }
            }
        }
    }, hideAdMessage: function () {
        clearTimeout(this._adHideTimeout);
        var b = a("#" + this._id("_ad_msg_c")), c = this.options.commercials.adMessage;
        if (b.is(":visible")) {
            if (c.animate) {
                b.slideToggle(c.animationDuration)
            } else {
                b.hide()
            }
        }
    }, _buildCommercialsShow: function () {
        var b = this.options.commercials.linkedCommercials || [], d = b.length, c = 0;
        this._commercialsShow = [];
        this._commercialIndex = 0;
        for (c; c < d; c++) {
            this._commercialsShow.push(b[c].startTime)
        }
        this._commercialsShow = a.extend(true, [], this._commercialsShow)
    }, playCommercial: function (d) {
        if (!d || !d.sources) {
            return
        }
        var e = a("#" + this._id("_com_video")), g = this.currentVideo.offset(), f = a("#" + this._id("_ctrls_s")), b = f.data("igSlider").bookmarks, c = a("#" + this._id("_ctrls_s_tooltip"));
        this._commercialPlaying = true;
        a("source", e).remove();
        this._renderSources(d.sources, e);
        this._analyzeSource(e);
        this.currentVideo[0].pause();
        this.currentVideo.removeClass(this.css.videoClass);
        this.controls[this._activeControlsIndex].css("z-index", this._baseZIndex + 5000);
        a("#" + this._id("_seek_tooltip")).css("z-index", this._baseZIndex + 5000);
        a("#" + this._id("_play")).css("z-index", this._baseZIndex + 5000);
        f.igSlider("option", "disabled", true);
        if (b && c) {
            b.hide();
            c.hide()
        }
        e[0].muted = this.currentVideo[0].muted;
        e[0].play();
        if (d.link && d.link.length > 0) {
            e.attr("title", a.ig.VideoPlayer.locale.adNewWindowTip)
        } else {
            e.removeAttr("title")
        }
        e.css("top", g.top).css("left", g.left).css("width", this.currentVideo.css("width")).css("height", this.currentVideo.css("height")).show();
        this.currentVideo.hide();
        this.currentVideo = e
    }, _renderBanners: function () {
        var c = this.options.banners || [], e = c.length, d = 0, f = a("<div></div>").appendTo(this.container).addClass(this.css.bannerContainerClass), b;
        this._bannerShow = [];
        for (d; d < e; d++) {
            b = c[d];
            if (b.imageUrl && b.imageUrl.length > 0) {
                this._renderBannerContainer(b, this._id("_banner_grid" + d), f).data("banner-index", d)
            }
            this._bannerShow.push(a.extend(true, [], b.times))
        }
    }, _buildBannersShow: function () {
        var b = this.options.banners || [], d = b.length, c = 0;
        if (d > 0) {
            this._bannerShow = []
        }
        for (c; c < d; c++) {
            this._bannerShow.push(a.extend(true, [], b[c].times))
        }
    }, _renderBannerClose: function (b, e) {
        var d = this.css, c = this;
        a("<a></a>").attr("id", e + "_banner_close").appendTo(a("<div></div>").css({position: "absolute", top: 0, left: 0, "text-align": "right", width: "100%", height: "100%"}).appendTo(b)).addClass(d.bannerCloseClass).igButton({onlyIcons: true, icons: {primary: d.bannerCloseIconClass}, link: {href: this._const.HREF}}).bind("click", function (f) {
            f.preventDefault();
            f.stopPropagation();
            c.hideBanner(a(this).parent().parent().data("banner-index"))
        })
    }, _renderBannerContainer: function (b, f, h) {
        var e = this.css, d = this, c = a("<div></div>").attr("id", f).appendTo(h), g = a("<img></img>").attr("id", f + "_img").attr("src", b.imageUrl).appendTo(c);
        this.banner = c.addClass(e.bannerClass);
        if (!b.visible) {
            c.hide()
        }
        if (b.closeBanner) {
            this._renderBannerClose(c, f)
        }
        if (b.width) {
            c.css("width", b.width);
            g.attr("width", parseInt(b.width, 10))
        }
        if (b.height) {
            c.css("height", b.height);
            g.attr("height", parseInt(b.height, 10))
        }
        if (b.css) {
            c.addClass(b.css)
        }
        c.bind("click", function (j) {
            var k = true, i = {bannerElement: a(j.currentTarget)};
            k = d._trigger(d.events.bannerClick, j, i);
            if (b.link && b.link.length > 0 && k) {
                window.open(b.link, "_blank")
            }
        });
        return c
    }, showBanner: function (e) {
        if (this.options.banners && e >= 0 && e < this.options.banners.length) {
            var b = this.options.banners[e], d = this._id("_banner_grid" + e), c = a("#" + d);
            if (b.animate) {
                c.fadeIn(b.duration)
            } else {
                c.show()
            }
            this._bannerVisible(e, c);
            if (b.autohide) {
                this._bannerHideTimeout = setTimeout(this._createDelegate(this, this.hideBanner, [e]), b.hidedelay)
            }
        }
    }, _createDelegate: function (c, d, b) {
        return function () {
            return d.apply(c, b)
        }
    }, hideBanner: function (d) {
        if (this.options.banners && d >= 0 && d < this.options.banners.length) {
            clearTimeout(this._bannerHideTimeout);
            var b = this.options.banners[d], c = a("#" + this._id("_banner_grid" + d));
            if (b.animate) {
                c.fadeOut(b.duration)
            } else {
                c.hide()
            }
            this._bannerHidden(d, c)
        }
    }, _renderSources: function (c, d) {
        var b = this;
        a(c).each(function () {
            b._renderSource(this, d)
        })
    }, _renderSource: function (b, c) {
        a("<source></source>").attr("src", b).attr("type", ("type/" + b.substring(b.lastIndexOf(".") + 1, b.length)).replace("/ogv", "/ogg")).appendTo(c);
        c.data(b.substring(b.lastIndexOf(".") + 1, b.length), b)
    }, _getMainVideo: function () {
        return this.element.is("video") ? this.element : a("#" + this._id("_video"))
    }, _setOption: function (d, h, b) {
        var i = this.currentVideo, j = i[0], e = this._getMainVideo(), k = i.offset(), g = this.options, f = true, c = 0;
        switch (d) {
            case"disabled":
                if (h) {
                    this.container.addClass("ui-state-disabled")
                } else {
                    this.container.removeClass("ui-state-disabled")
                }
                break;
            case"sources":
                a("source", e).remove();
                this._renderSources(h, e);
                this._analyzeSource(e);
                break;
            case"width":
                if (h !== g.width) {
                    i.css("width", h);
                    this.container.css("width", h);
                    if (!g.browserControls) {
                        a("#" + this._id("_ctrls")).parent().css("width", h);
                        a("#" + this._id("_title_ctrls")).parent().css("width", h)
                    }
                    g.width = h
                }
                break;
            case"height":
                if (h !== g.height) {
                    i.css("height", h);
                    this.container.css("height", h);
                    g.height = h
                }
                break;
            case"posterUrl":
                if (h !== g.posterUrl) {
                    i.attr("poster", h);
                    g.posterUrl = h
                }
                break;
            case"loop":
                if (h !== g.loop) {
                    j.loop = h;
                    g.loop = h
                }
                break;
            case"browserControls":
                if (typeof Modernizr === "object" && Modernizr.touch) {
                    return
                }
                if (h !== g.browserControls) {
                    if (!h) {
                        j.controls = false;
                        this._ensureVolume();
                        this._renderControls();
                        this._detectBuffered()
                    } else {
                        j.controls = true;
                        this._destroyControls()
                    }
                    g.browserControls = h
                }
                break;
            case"autohide":
                if (!g.browserControls) {
                    if (h) {
                        this._onControlMouseOut()
                    } else {
                        this._onControlMouseOver()
                    }
                }
                g.autohide = h;
                break;
            case"fullscreen":
                if (h !== g.fullscreen || b) {
                    if (h) {
                        f = this._enterFullScreen(j.currentSrc);
                        if (f) {
                            this.container.data("style.position", this.container.css("position"));
                            this.container.data("document.scrollTop", a(document).scrollTop());
                            this.container.data("document.scrollLeft", a(document).scrollLeft());
                            this.container.data("style.left", this.container.css("left"));
                            this.container.data("style.top", this.container.css("top"));
                            this.container.css("z-index", this._baseZIndex + 10000);
                            a(document).scrollTop(0);
                            a(document).scrollLeft(0);
                            this.container.css("position", "fixed").css("height", "100%").css("width", "100%").css("left", "0px").css("top", "0px");
                            a("#" + this._id("_ctrls")).parent().css("width", "100%");
                            if (this._commercialPlaying) {
                                i.css("top", 0).css("left", 0);
                                e.css("height", "100%").css("width", "100%")
                            }
                            i.css("height", "100%").css("width", "100%");
                            if (!g.browserControls) {
                                a("span", a("#" + this._id("_ctrls_fs_btn"))).removeClass("ui-icon-arrow-4-diag").addClass("ui-icon-closethick")
                            }
                            if (a("#" + this._id("_rv_bar_fs")).is(":visible")) {
                                a("span", a("#" + this._id("_rv_bar_fs"))).removeClass("ui-icon-arrow-4-diag").addClass("ui-icon-closethick")
                            }
                            if (g.bookmarks && g.bookmarks.length > 0) {
                                a("#" + this._id("_bookmarks")).hide()
                            }
                        }
                    } else {
                        f = this._exitFullScreen(j.currentSrc);
                        if (f) {
                            this.container.css("position", this.container.data("style.position")).css("left", this.container.data("style.left")).css("top", this.container.data("style.top"));
                            this.container.css("z-index", this._baseZIndex);
                            a(document).scrollTop(this.container.data("document.scrollTop"));
                            a(document).scrollLeft(this.container.data("document.scrollLeft"));
                            if (g.height) {
                                if (g.bookmarks && g.bookmarks.length > 0) {
                                    c = parseInt(g.height, 10) - parseInt(a("#" + this._id("_bookmarks")).css("height"), 10);
                                    if (this._commercialPlaying) {
                                        e.css("height", c)
                                    }
                                    i.css("height", c)
                                } else {
                                    if (this._commercialPlaying) {
                                        e.css("height", g.height)
                                    }
                                    i.css("height", g.height)
                                }
                                this.container.css("height", g.height)
                            } else {
                                if (this._commercialPlaying) {
                                    e.css("height", "")
                                }
                                i.css("height", "");
                                this.container.css("height", "")
                            }
                            if (g.width) {
                                if (this._commercialPlaying) {
                                    e.css("width", g.width)
                                }
                                i.css("width", g.width);
                                a("#" + this._id("_ctrls")).parent().css("width", g.width);
                                this.container.css("width", g.width)
                            } else {
                                if (this._commercialPlaying) {
                                    e.css("width", "")
                                }
                                i.css("width", "");
                                a("#" + this._id("_ctrls")).parent().css("width", "");
                                this.container.css("width", "")
                            }
                            if (this._commercialPlaying) {
                                i.css("top", k.top).css("left", k.left)
                            }
                            if (!g.browserControls) {
                                a("span", a("#" + this._id("_ctrls_fs_btn"))).removeClass("ui-icon-closethick").addClass("ui-icon-arrow-4-diag")
                            }
                            if (a("#" + this._id("_rv_bar_fs")).is(":visible")) {
                                a("span", a("#" + this._id("_rv_bar_fs"))).removeClass("ui-icon-closethick").addClass("ui-icon-arrow-4-diag")
                            }
                            if (g.bookmarks && g.bookmarks.length > 0) {
                                a("#" + this._id("_bookmarks")).show()
                            }
                        }
                    }
                    if (!f) {
                        return
                    }
                    if (a("#" + this._id("_waiting")).is(":visible")) {
                        this._showWaitingIndicator()
                    }
                    if (a("#" + this._id("_play")).is(":visible")) {
                        this._showCenterPlayButton()
                    }
                    if (a("#" + this._id("_ad_msg_c")).is(":visible")) {
                        a("#" + this._id("_ad_msg_c")).css("width", this.container.css("width"))
                    }
                    if (a("#" + this._id("_ctrls_vs")).is(":visible")) {
                        this._hideVolumeSlider()
                    }
                    if (a("#" + this._id("_detectError")).is(":visible")) {
                        this._showUnsupportedVideoSourceMsg()
                    }
                    a("body").toggleClass("ui-igplayer-full-screen-mode");
                    if (!g.browserControls) {
                        a("#" + this._id("_ctrls_fs_btn")).attr("title", h ? a.ig.VideoPlayer.locale.exitFullscreen : a.ig.VideoPlayer.locale.enterFullscreen)
                    }
                    if (a("#" + this._id("_rv_bar_fs")).is(":visible")) {
                        a("#" + this._id("_rv_bar_fs")).attr("title", h ? a.ig.VideoPlayer.locale.exitFullscreen : a.ig.VideoPlayer.locale.enterFullscreen)
                    }
                    g.fullscreen = h
                }
                break;
            case"volume":
                if (h !== g.volume && h >= this._const.VOLUME_MIN && h <= this._const.VOLUME_MAX) {
                    g.volume = j.volume = h;
                    if (h > 0 && j.muted) {
                        g.muted = j.muted = false
                    } else {
                        if (h === 0 && !j.muted) {
                            g.muted = j.muted = true
                        }
                    }
                    if (!g.browserControls) {
                        this._adjustVolumeButton(h);
                        a("#" + this._id("_ctrls_vs")).igSlider("option", "value", h * 100)
                    }
                }
                break;
            case"muted":
                if (h !== g.muted) {
                    g.muted = j.muted = h;
                    a("#" + this._id("_ctrls_vs")).igSlider("option", "value", (h ? 0 : (g.volume !== 0 ? g.volume : 0.3) * 100));
                    if (g.volume === 0) {
                        g.volume = 0.3
                    }
                    if (!h && j.volume === 0) {
                        j.volume = g.volume
                    }
                    if (!g.browserControls) {
                        this._adjustVolumeButton(a("#" + this._id("_ctrls_vs")).igSlider("option", "value"))
                    }
                }
                break;
            case"title":
                a("#" + this._id("_title_ctrls_t")).html(h);
                break;
            case"progressLabelFormat":
                g.progressLabelFormat = h;
                this._updateProgressLabel();
                break;
            case"alwaysPlayCommercials":
                if (h !== g.commercials.alwaysPlayCommercials) {
                    g.commercials.alwaysPlayCommercials = h;
                    if (h) {
                        this.resetCommercialsShow()
                    }
                }
                break;
            case"bookmarks":
                this._destroyBookmarks();
                g.bookmarks = h;
                this._renderBookmarks();
                break;
            case"relatedVideos":
                this._destroyRelatedVideos();
                g.relatedVideos = h;
                this._renderRelatedVideos();
                break;
            default:
                break
        }
        a.Widget.prototype._setOption.apply(this, arguments)
    }, _onVideoStateChange: function () {
        var e = this.currentVideo, f = e[0], b = this.options, c = this._prevReadyState, d = f.readyState;
        if (c >= f.HAVE_FUTURE_DATA && d <= f.HAVE_CURRENT_DATA) {
            if (!f.ended) {
                this._showWaitingIndicator()
            }
        } else {
            if (c <= f.HAVE_CURRENT_DATA && d === f.HAVE_FUTURE_DATA) {
                this._hideWaitingIndicator()
            } else {
                if (d === f.HAVE_ENOUGH_DATA) {
                    if (c <= f.HAVE_CURRENT_DATA) {
                        this._hideWaitingIndicator()
                    } else {
                        return
                    }
                }
            }
        }
        this._prevReadyState = d;
        this._detectBuffered();
        if (this._lastPausedState !== f.paused) {
            if (this._lastPausedState) {
                this._showCenterPlayButton().removeClass(this.css.centerPauseButtonClass).addClass(this.css.centerPlayButtonClass)
            } else {
                this._showCenterPlayButton().removeClass(this.css.centerPlayButtonClass).addClass(this.css.centerPauseButtonClass)
            }
            setTimeout(a.proxy(this._hideCenterPlayButton, this), b.centerButtonHideDelay);
            this._prepareForPlay();
            this._lastPausedState = f.paused
        }
        this._setOption("muted", f.muted);
        this._refreshDuration();
        this._onVideoStateChangeId = setTimeout(a.proxy(this._onVideoStateChange, this), this._const.VIDEO_STATE_TIMEOUT)
    }, _updateTitleControlsTimeString: function (b, c) {
        if (this._activeControlsIndex === 1 && b) {
            if (!c) {
                c = b
            }
            a("span.ui-igplayer-playbutton-text", a("#" + this._id("_title_ctrls"))).attr("title", c).html(b)
        }
    }, _analyzeSource: function (d, c) {
        var b = false;
        if (this.supports_h264_baseline_video() && d.data("mp4") !== undefined) {
            d.attr("src", d.data("mp4"));
            b = true
        } else {
            if (this.supports_ogg_theora_video()) {
                if (d.data("ogv") !== undefined) {
                    d.attr("src", d.data("ogv"));
                    b = true
                } else {
                    if (d.data("ogg") !== undefined) {
                        d.attr("src", d.data("ogg"));
                        b = true
                    }
                }
            } else {
                if (this.supports_webm_video() && d.data("wbem") !== undefined) {
                    d.attr("src", d.data("wbem"));
                    b = true
                }
            }
        }
        d.data("sourceDetected", b);
        if (!b && !c) {
            this._showUnsupportedVideoSourceMsg();
            if (!this.options.browserControls) {
                if (this._activeControlsIndex === 0) {
                    a("#" + this._id("_ctrls_play")).igButton("option", "disabled", true)
                }
            }
        } else {
            this._hideUnsupportedVideoSourceMsg();
            if (!this.options.browserControls) {
                if (this._activeControlsIndex === 0) {
                    a("#" + this._id("_ctrls_play")).igButton("option", "disabled", false)
                }
            }
        }
    }, resetCommercialsShow: function () {
        this._buildCommercialsShow();
        this._embeddedCommercialsShow = a.extend(true, [], this.options.commercials.embeddedCommercials);
        this._embeddedCommercialIndex = 0
    }, _attachVideoEvents: function (c) {
        var b = this;
        this._videoEvents = {error: function (d) {
            b._onVideoError(d)
        }, progress: function (d) {
            b._onVideoLoading(d)
        }, waiting: function (d) {
            b._onVideoWaiting(d);
            b._waiting(this.currentSrc, this.currentTime, this.duration, d)
        }, timeupdate: function (d) {
            b._changeCurrentTime(d)
        }, ended: function (d) {
            b._showCenterPlayButton().removeClass("ui-igplayer-centerplaybutton-pause").addClass("ui-igplayer-centerplaybutton-play");
            b._hideWaitingIndicator();
            if (!b.options.browserControls) {
                a("span", a("#" + b._id("_ctrls_play"))).addClass("ui-icon-play").removeClass("ui-icon-pause")
            }
            a("#" + b._id("_ctrls_pb")).igProgressBar("option", "value", 0);
            if (b.options.relatedVideos.length > 0) {
                b._onControlMouseOut(null);
                a("#" + b._id("_rvcc")).show()
            }
            b._buildBannersShow();
            if (b.options.commercials.alwaysPlayCommercials) {
                b.resetCommercialsShow()
            }
            b._ended(this.currentSrc, this.duration, d)
        }, playing: function (d) {
            b._hideWaitingIndicator();
            a("span", a("#" + b._id("_ctrls_play"))).addClass("ui-icon-pause").removeClass("ui-icon-play");
            b._playing(this.currentSrc, this.duration, d)
        }, pause: function (d) {
            a("span", a("#" + b._id("_ctrls_play"))).addClass("ui-icon-play").removeClass("ui-icon-pause");
            b._paused(this.currentSrc, this.duration, d)
        }, click: function (d) {
            var e = b.options;
            if (!e.browserControls) {
                d.preventDefault()
            }
            if (d.button === 0 && !e.disabled) {
                b._onVideoClick(!e.browserControls)
            }
        }, dblclick: function (d) {
            d.preventDefault();
            if (d.button === 0 && !b.options.disabled) {
                b._onVideoDblClick()
            }
        }, selectstart: function () {
            return false
        }};
        c.bind(this._videoEvents)
    }, _onVideoClick: function (b) {
        if (this._embeddedCommercialPlaying) {
            var c = this.options.commercials.embeddedCommercials[this._embeddedCommercialIndex].link;
            if (c && c.length > 0) {
                window.open(c, "_blank")
            }
        } else {
            if (b) {
                this.togglePlay()
            }
        }
    }, _onVideoDblClick: function () {
        var b = this.options;
        this._setOption("fullscreen", !b.fullscreen);
        if (!b.browserControls) {
            this._toggleCenterPlayButton()
        }
    }, _attachEvents: function (c) {
        var b = this;
        this._attachVideoEvents(c);
        this._generalEvts = {keydown: function (d) {
            if (d.keyCode === a.ui.keyCode.ESCAPE) {
                if (b.options.fullscreen) {
                    b._setOption("fullscreen", false);
                    d.preventDefault();
                    d.stopPropagation()
                }
            } else {
                if (d.keyCode === a.ui.keyCode.SPACE) {
                    d.preventDefault();
                    d.stopPropagation();
                    b.togglePlay()
                }
            }
        }};
        this._documentEvts = {contextmenu: function (d) {
            if (a(d.target).is("video") && b.options.disabled) {
                d.preventDefault();
                d.stopPropagation()
            }
        }};
        a(document).bind(this._documentEvts);
        if (!this.options.browserControls) {
            this._controlsEvts = {mouseover: function (d) {
                b._onControlMouseOver(d)
            }, mouseout: function (d) {
                b._onControlMouseOut(d)
            }};
            this.container.bind(this._controlsEvts)
        }
        this.container.bind(this._generalEvts)
    }, _handleKbNavigation: function (b) {
        if (b.keyCode === a.ui.keyCode.HOME) {
            a(this.controlButtons[0]).focus();
            b.stopPropagation();
            b.preventDefault()
        } else {
            if (b.keyCode === a.ui.keyCode.END) {
                a(this.controlButtons[this.controlButtons.length - 1]).focus();
                b.stopPropagation();
                b.preventDefault()
            }
        }
    }, _handleBlurKb: function () {
        this.currentVideo.removeClass(this.css.activeVideoClass)
    }, _handleFocusKb: function () {
        this.currentVideo.addClass(this.css.activeVideoClass)
    }, _onVideoLoading: function (b) {
        this._detectBuffered(b)
    }, _detectBuffered: function (e) {
        var i = this.currentVideo[0], b = i.buffered, d = parseInt(i.duration, 10), h = b ? b.length : 0, f = h > 0 ? parseInt(b.start(h - 1), 10) : 0, g = h > 0 ? parseInt(b.end(h - 1), 10) : 0, c = (g / d) * 100;
        if (h > 0 && this._previouslyBuffered !== c) {
            if (this._previousBuffer && g < parseInt(this._previousBuffer.end(0), 10)) {
                a("#" + this._id("_ctrls_pb")).igProgressBar("option", "value", f)
            }
            a("#" + this._id("_ctrls_pb")).igProgressBar("option", "endValue", (g / d) * 100);
            this._buffering(i.currentSrc, c, e);
            this._previouslyBuffered = c;
            this._previousBuffer = b
        }
    }, _getActiveControls: function () {
        var b = this._activeControlsIndex;
        if (b !== undefined && this.controls && b >= 0 && b < this.controls.length) {
            return this.controls[b].parent()
        }
        return null
    }, _onControlMouseOver: function () {
        var b = this._getActiveControls(), c = this.options;
        if (b && !c.browserControls && c.autohide && !a("#" + this._id("_rvcc")).is(":visible")) {
            b.show().removeClass(this.css.controlsHideClass)
        }
    }, _onControlMouseOut: function () {
        var c = this.options, b = this._getActiveControls();
        if (b && !c.browserControls && c.autohide) {
            b.addClass(this.css.controlsHideClass).hide()
        }
    }, _onVideoError: function (b) {
        var c = b.target.error;
        switch (c.code) {
            case c.MEDIA_ERR_ABORTED:
                break;
            case c.MEDIA_ERR_NETWORK:
                this.play();
                break;
            case c.MEDIA_ERR_DECODE:
            case c.MEDIA_ERR_SRC_NOT_SUPPORTED:
                this._showUnsupportedVideoSourceMsg();
                break;
            default:
                break
        }
    }, _changeCurrentTime: function (c) {
        var e = this.currentVideo[0], d = e.duration, b;
        if (d === Infinity) {
            this._updateProgressLabel()
        } else {
            if (!isNaN(d)) {
                b = parseInt(e.currentTime, 10);
                if (!this._userSliding) {
                    a("#" + this._id("_ctrls_s")).igSlider("option", "value", (b / d) * 100)
                }
                this._updateProgressLabel();
                if (this._embeddedCommercialPlaying) {
                    this._updateAdMessage(this.options.commercials.embeddedCommercials[this._embeddedCommercialIndex].endTime - b);
                    this._checkEmbeddedCommercialShow(b)
                } else {
                    if (!this._commercialPlaying) {
                        this._checkBannerShow(b);
                        this._checkCommercialsShow(b);
                        this._checkEmbeddedCommercialShow(b)
                    } else {
                        this._updateAdMessage(d - b)
                    }
                }
            }
        }
        this._progress(e.currentSrc, b, d, c)
    }, _checkBannerShow: function (b) {
        var e = this._bannerShow || [], d = e.length, c = 0;
        for (c; c < d; c++) {
            if (e[c].length > 0 && b >= e[c][0]) {
                e[c].shift();
                this.showBanner(c)
            }
        }
    }, _checkCommercialsShow: function (b) {
        if (this._commercialsShow && this._commercialsShow.length > 0 && b >= this._commercialsShow[0] && !this._commercialPlaying) {
            this._commercialPlaying = true;
            if (b - this._commercialsShow[0] > this._const.COMMERCIAL_SEEK_DELTA) {
                this.currentTime(this._commercialsShow[0])
            }
            this.playCommercial(this.options.commercials.linkedCommercials[this._commercialIndex])
        }
    }, _checkEmbeddedCommercialShow: function (c) {
        if (this._embeddedCommercialsShow && this._embeddedCommercialsShow.length > 0 && !this.currentVideo[0].seeking) {
            var b = this._embeddedCommercialsShow[0];
            if (c >= b.startTime && !this._embeddedCommercialPlaying) {
                this._embeddedCommercialPlaying = true;
                if (c - b.startTime > this._const.COMMERCIAL_SEEK_DELTA) {
                    this.currentTime(b.startTime)
                }
                a("#" + this._id("_ctrls_s")).igSlider("option", "disabled", true);
                this._showAdMessage(b.endTime - b.startTime);
                if (b.link && b.link.length > 0) {
                    this.currentVideo.attr("title", a.ig.VideoPlayer.locale.adNewWindowTip)
                }
            } else {
                if (c >= b.endTime && this._embeddedCommercialPlaying) {
                    this._embeddedCommercialsShow.shift();
                    this._embeddedCommercialIndex++;
                    this._embeddedCommercialPlaying = false;
                    this.hideAdMessage();
                    a("#" + this._id("_ctrls_s")).igSlider("option", "disabled", false);
                    if (b.link && b.link.length > 0) {
                        this.currentVideo.removeAttr("title")
                    }
                }
            }
        }
    }, _updateProgressLabel: function () {
        var g = this.currentVideo[0], d = a("#" + this._id("_ctrls_pl")), f = g.duration, c = parseInt(f, 10), b = parseInt(g.currentTime, 10), e = this.options.progressLabelFormat;
        e = e.replace("${currentTime}", this._toTimeString(b)).replace("${duration}", (f === Infinity ? a.ig.VideoPlayer.locale.liveStream : this._toTimeString(c)));
        d.html(e)
    }, _toTimeString: function (g) {
        if (typeof(g) === "number") {
            var e = parseInt(g % 60, 10), d = parseInt(g / 60, 10), c = parseInt(d / 60, 10), b = parseInt(c / 24, 10), f = "{0}d {1}:{2}:{3}";
            d = parseInt(d % 60, 10);
            c = parseInt(c % 60, 10);
            f = f.replace("{3}", (e < 10 ? "0" + e : e)).replace("{2}", d);
            if (c > 0) {
                f = f.replace("{1}", c);
                if (b > 0) {
                    f = f.replace("{0}", b)
                } else {
                    f = f.replace("{0}d ", "")
                }
            } else {
                f = f.replace("{0}d {1}:", "")
            }
            return f
        }
        return"NaN"
    }, _onVideoWaiting: function () {
        this._showWaitingIndicator()
    }, _createUnsupportedVideoSourceMsg: function () {
        var b = this.css;
        return this._createButton(this._id("_detectError"), b.unsupportedVideoSourceClass, b.unsupportedVideoSourceIconClass, a.ig.VideoPlayer.locale.missingVideoSource).attr("title", a.ig.VideoPlayer.locale.unsupportedVideoSource)
    }, _showUnsupportedVideoSourceMsg: function () {
        var b = a("#" + this._id("_detectError"));
        if (b.length === 0) {
            b = this._createUnsupportedVideoSourceMsg()
        }
        return b.show()
    }, _hideUnsupportedVideoSourceMsg: function () {
        a("#" + this._id("_detectError")).hide()
    }, _createBigPlayButton: function () {
        var b = this, c = this.css;
        this._createButton(this._id("_play"), c.centerPlayButtonClass, c.centerPlayButtonIconClass, "").bind({click: function (d) {
            d.preventDefault();
            if (d.button === 0) {
                b._onVideoClick(true)
            }
        }, dblclick: function (d) {
            d.preventDefault();
            if (d.button === 0) {
                b._onVideoDblClick()
            }
        }})
    }, _createButton: function (c, b, d, e) {
        a("<span></span>").html(e).addClass(d).appendTo(a("<a></a>").attr("id", c).attr("href", this._const.HREF).attr("tabIndex", -1).addClass("ui-state-default").addClass(b).appendTo(this.container));
        return a("#" + c).bind({mouseover: function () {
            a(this).addClass("ui-state-hover")
        }, mouseout: function () {
            a(this).removeClass("ui-state-hover")
        }}).hide()
    }, _showCenterPlayButton: function () {
        var e = this.currentVideo, b = a("#" + this._id("_play")), g = Math.floor(e.height() / 2), f = Math.floor(e.width() / 2), d = g - Math.floor(b.innerHeight() / 2), c = f - Math.floor(b.innerWidth() / 2);
        b.css("position", "absolute").css("left", c).css("top", d);
        return b.show()
    }, _toggleCenterPlayButton: function () {
        var d = this.currentVideo[0], c = this.options, b = this.css;
        if (d.paused || d.ended) {
            this._showCenterPlayButton().removeClass(b.centerPauseButtonClass).addClass(b.centerPlayButtonClass)
        } else {
            this._showCenterPlayButton().removeClass(b.centerPlayButtonClass).addClass(b.centerPauseButtonClass)
        }
        setTimeout(a.proxy(this._hideCenterPlayButton, this), c.centerButtonHideDelay)
    }, _hideCenterPlayButton: function () {
        return a("#" + this._id("_play")).hide()
    }, _createWaitingIndicator: function () {
        var b = this.css;
        this._createButton(this._id("_waiting"), b.waitingIndicatorClass, b.waitingIndicatorIconClass, a.ig.VideoPlayer.locale.buffering)
    }, _createSeekTimeToolTip: function () {
        a("<div></div>").attr("id", this._id("_seek_tooltip")).hide().igTooltip({text: "00:00", arrowLocation: "bottom"}).appendTo(this.container).addClass(this.css.seekTooltipClass)
    }, _showSeekTimeToolTip: function (d, e, b) {
        var c = a("#" + this._id("_seek_tooltip"));
        c.css("top", (e - c.outerHeight())).css("left", (d - (c.width() / 2))).igTooltip("option", "text", this._toTimeString(b)).show()
    }, _showWaitingIndicator: function () {
        if (a("#" + this._id("_detectError")).is(":visible")) {
            return
        }
        var e = this.currentVideo, b = a("#" + this._id("_waiting")), g = Math.floor(e.height() / 2), f = Math.floor(e.width() / 2), d = g - Math.floor(b.innerHeight() / 2), c = f - Math.floor(b.innerWidth() / 2);
        b.css("position", "absolute").css("left", c).css("top", d).show()
    }, _hideWaitingIndicator: function () {
        a("#" + this._id("_waiting")).hide()
    }, _renderTitleControls: function () {
        var e = this.options.title, b = this, c, d = '<div id="' + this._id("_title_ctrls") + '" class="ui-widget-header ui-igplayer-controls ui-igplayer-grid ui-igplayer-title-controls ui-corner-all">';
        d += '<div class="ui-igplayer-row">';
        d += '<div class="ui-igplayer-container ui-igplayer-cell ui-igplayer-playback-alone">';
        d += '		<a id="' + this._id("_title_ctrls_play") + '" class="ui-button ui-igplayer-playbutton ui-igplayer-playback-with-time ui-state-default ui-corner-all ui-priority-primary" href="' + this._const.HREF + '">';
        d += '			<span title="' + a.ig.VideoPlayer.locale.play + '" class="ui-icon ui-icon-play ui-igplayer-playbutton-icon"></span>';
        d += '			<span title="00:00" class="ui-button-text ui-igplayer-playbutton-text">00:00</span>';
        d += "		</a>";
        d += "</div>";
        d += '<div id="' + this._id("_title_ctrls_t") + '" class="ui-igplayer-container ui-igplayer-cell ui-igplayer-video-title">';
        if (e && e.length > 0) {
            d += e
        }
        d += "</div></div></div>";
        c = a(d).appendTo(this.container).wrap('<div style="position:absolute; width: 100%;"></div>');
        if (this.options.width) {
            c.parent().css("width", this.options.width)
        }
        a("#" + this._id("_title_ctrls_play")).bind({click: function (f) {
            f.preventDefault();
            if (f.button === 0 && !b.options.disabled) {
                b.togglePlay()
            }
        }});
        return c
    }, _hideTitleControls: function () {
        if (this._activeControlsIndex !== 0) {
            this._activeControlsIndex = 0;
            a("#" + this._id("_title_ctrls")).addClass(this.css.controlsHideClass).parent().remove();
            a("#" + this._id("_ctrls")).parent().show()
        }
    }, _convertBookmarks: function (k, b, d, c) {
        var f = b.length, h = [], e = 0, g, j, l;
        for (e; e < f; e++) {
            g = b[e];
            if (g[k] > 0 && g[k] < d) {
                l = parseInt((g[k] / d) * 100, 10);
                j = {value: l, secondsValue: g[k], displayTime: this._toTimeString(g[k]), index: e, title: g.title, disabled: g.disabled};
                if (c && c.length > 0) {
                    j.css = c
                }
                h.push(j)
            }
        }
        return h
    }, _renderBookmarks: function () {
        var j = this.options, c = j.bookmarks || [], d = j.commercials, b = d.linkedCommercials || [], f = d.embeddedCommercials || [], e = this.currentVideo[0].duration, h = [], g = [], i = [];
        if (d.showBookmarks) {
            if (b.length > 0) {
                g = this._convertBookmarks("startTime", b, e, this.css.linkedBookmarkClass)
            }
            if (f.length > 0) {
                i = this._convertBookmarks("startTime", f, e, this.css.adBookmarkClass)
            }
        }
        if (c.length > 0) {
            h = this._convertBookmarks("time", c, e);
            if (h.length > 0) {
                this._renderBookmarkArea(h)
            }
        }
        if (g.length > 0) {
            a.merge(h, g)
        }
        if (i.length > 0) {
            a.merge(h, i)
        }
        if (h.length > 0) {
            a("#" + this._id("_ctrls_s")).igSlider("option", "bookmarks", h)
        }
        this._bookmarksRendered = true
    }, _renderBookmarkArea: function (e) {
        if (e && e.length > 0) {
            var h = this.css, f = '<li class="ui-corner-all $class$"><span class="' + h.bookmarkItemTimeClass + '">$time$</span><span class="' + h.bookmarkItemTitleClass + '" title="$titleAttr$">$title$</span></li>', c = '<div id="$id$" class="$bookmarkContainerClass$"><div class="$headerClass$">$headerText$</div><ul class="$bookmarkListClass$">$list$</ul></div>', d = "", b, l, j = 0, k = e.length, g = this;
            for (j; j < k; j++) {
                l = e[j];
                d += f.replace("$time$", l.displayTime).replace("$titleAttr$", l.title).replace("$title$", l.title).replace("$class$", l.disabled ? h.bookmarkItemDisabledClass : "")
            }
            c = c.replace("$id$", this._id("_bookmarks")).replace("$bookmarkContainerClass$", h.bookmarkContainerClass).replace("$headerClass$", h.bookmarkContainerHeaderClass).replace("$bookmarkListClass$", h.bookmarkListClass).replace("$headerText$", a.ig.VideoPlayer.locale.skipTo).replace("$list$", d);
            b = a(c).appendTo(this.container);
            this.bookmarkElements = a("li", a("#" + this._id("_bookmarks")));
            this.bookmarkElements.each(function (m) {
                a(this).data("bookmark-index", e[m].index);
                a(this).data("bookmark-sec-value", e[m].secondsValue)
            });
            this.bookmarkElements.bind({click: function (i) {
                var m = a(this).data("bookmark-index"), n = g.options.bookmarks[m];
                i.stopPropagation();
                i.preventDefault();
                if (!n.disabled) {
                    if (g.paused()) {
                        g.togglePlay()
                    }
                    g.currentTime(a(this).data("bookmark-sec-value"));
                    g._changeActiveBookmark(m);
                    g._bookmarkClick(n, e[m], i)
                }
            }});
            if (this.options.height) {
                this.currentVideo.css("height", this.container.height() - b.height());
                this._resizeBookmarkAreaTimeoutId = setTimeout(a.proxy(this._onPlayerResize, this), 500)
            }
        }
    }, _onPlayerResize: function () {
        var e = this.options, c = this.container.height(), d = this.container.width(), b = a("#" + this._id("_bookmarks"));
        if ((e.height || e.width) && (this._oldContainerHeight !== c || this._oldContainerWidth !== d)) {
            this.currentVideo.css("height", c - b.height());
            this._oldContainerHeight = c;
            this._oldContainerWidth = d
        }
        this._resizeBookmarkAreaTimeoutId = setTimeout(a.proxy(this._onPlayerResize, this), 250)
    }, _ensureVolume: function () {
        this.options.volume = this.currentVideo[0].volume
    }, _renderControls: function () {
        a("body").addClass("ui-igplayer-normal-screen-mode");
        if (this.options.showSeekTime) {
            this._createSeekTimeToolTip()
        }
        var i = this.currentVideo[0], d = this, f, e = [], b = this.options.autoplay, g = this._const.HREF, h = '<div id="' + this._id("_ctrls") + '" class="$controlsClass$">', c;
        h += '			<div class="ui-igplayer-row">';
        h += '				<div class="ui-igplayer-container ui-igplayer-cell ui-igplayer-playback">';
        h += '					<a id="$playButtonId$" class="$playButtonClass$" href="' + g + '"></a>';
        h += "				</div>";
        h += '				<div class="ui-igplayer-container ui-igplayer-cell ui-igplayer-progress-bar">';
        h += '					<div id="$progressBarId$" class="$progressBarClass$"></div>';
        h += "				</div>";
        h += '				<div class="ui-igplayer-container ui-igplayer-extra">';
        h += '					<div class="ui-igplayer-grid">';
        h += '						<div class="ui-igplayer-row">';
        h += '							<div class="ui-igplayer-cell">';
        h += '								<a id="$progressLabelId$" class="$progressLabelClass$" href="' + g + '"></a>';
        h += "							</div>";
        h += '							<div class="ui-igplayer-cell">';
        h += "                               <div>";
        h += '								    <div id="$volumeSliderId$" class="$volumeSliderClass$"></div>';
        h += "									<div>";
        h += '										<a id="$volumeControlId$" class="$volumeControlClass$" href="' + g + '"></a>';
        h += "									</div>";
        h += "                               </div>";
        h += "							</div>";
        h += '							<div class="ui-igplayer-cell">';
        h += '								<a id="$fullScreenId$" class="$fullScreenClass$" href="' + g + '"></a>';
        h += "							</div>";
        h += "						</div>";
        h += "					</div>";
        h += "				</div>";
        h += "			</div>";
        h += "		</div>";
        h = h.replace("$playButtonClass$", this.css.playButtonClass).replace("$progressBarClass$", this.css.progressBarClass).replace("$fullScreenClass$", this.css.fullScreenClass).replace("$controlsClass$", this.css.controlsClass).replace("$volumeControlClass$", this.css.volumeControlClass).replace("$volumeSliderClass$", this.css.volumeSliderClass).replace("$progressLabelClass$", this.css.progressLabelClass);
        h = h.replace("$playButtonId$", this._id("_ctrls_play")).replace("$progressBarId$", this._id("_ctrls_s")).replace("$fullScreenId$", this._id("_ctrls_fs_btn")).replace("$volumeControlId$", this._id("_ctrls_vc_btn")).replace("$volumeSliderId$", this._id("_ctrls_vs")).replace("$progressLabelId$", this._id("_ctrls_pl"));
        f = a(h).appendTo(this.container).wrap('<div style="position:absolute; width: 100%;"></div>');
        if (this.options.width) {
            f.parent().css("width", this.options.width)
        }
        e.push(f);
        if (!b && i.currentTime === 0) {
            f.parent().hide();
            this._activeControlsIndex = 1;
            e.push(this._renderTitleControls())
        } else {
            this._activeControlsIndex = 0
        }
        this.controls = a(e);
        a("#" + this._id("_ctrls_play")).bind({click: function (j) {
            j.preventDefault();
            if (!a(this).igButton("option", "disabled")) {
                d.togglePlay()
            }
        }}).igButton({link: {href: this._const.HREF}, css: {buttonLabelClass: "ui-icon " + (b ? "ui-icon-pause " : "ui-icon-play ") + "ui-igplayer-playbutton-icon "}}).addClass("ui-priority-primary").attr("title", (b ? a.ig.VideoPlayer.locale.playing : a.ig.VideoPlayer.locale.paused));
        a("#" + this._id("_ctrls_fs_btn")).bind({click: function (j) {
            j.preventDefault();
            d._setOption("fullscreen", !d.options.fullscreen)
        }}).igButton({link: {href: this._const.HREF}, css: {buttonLabelClass: this.css.fullScreenIconClass}}).attr("title", a.ig.VideoPlayer.locale.enterFullscreen);
        a('<div id="' + this._id("_ctrls_pb") + '"></div>').appendTo(a("#" + this._id("_ctrls_s")).igSlider({slide: function (j, k) {
            if (j.originalEvent === undefined) {
                return false
            }
            clearTimeout(d._slideTimeout);
            d._slideTimeout = setTimeout(d._createDelegate(d, d._slide, [k]), d._const.SLIDE_SEEK_TIMEOUT)
        }, start: function () {
            d._userSliding = true
        }, stop: function () {
            d._userSliding = false
        }, bookmarkhit: function (k, m) {
            var l = m.bookmark.index, j = d.bookmarkElements;
            if (j && j.length > 0) {
                d._changeActiveBookmark(l);
                d._bookmarkHit(d.currentVideo[0].currentSrc, d.options.bookmarks[l], j[l], k)
            }
        }, bookmarkclick: function (j, l) {
            var k;
            if (a(l.bookmarkElement).hasClass("ui-igplayer-linked-bookmark")) {
                k = d.options.commercials.linkedCommercials[l.bookmark.index]
            } else {
                if (a(l.bookmarkElement).hasClass("ui-igplayer-ad-bookmark")) {
                    k = d.options.commercials.embeddedCommercials[l.bookmark.index]
                } else {
                    k = d.options.bookmarks[l.bookmark.index];
                    d._changeActiveBookmark(l.bookmark.index)
                }
            }
            if (k.time) {
                c = k.time
            } else {
                c = k.startTime
            }
            d.currentTime(c);
            d._bookmarkClick(k, l.bookmarkElement, j);
            return false
        }, min: 0, max: 100, animate: true}).css("display", "block")).igProgressBar({range: true, endValue: 0});
        a("#" + this._id("_ctrls_pb")).bind({mousemove: function (l) {
            if (d.options.showSeekTime && this.offsetWidth > 0) {
                var n = l.pageX - this.offsetLeft - a(this).offset().left, m = parseInt((n / this.offsetWidth) * 100, 10), k = i.duration, o, j = d.container.offset();
                if (!isNaN(k) && k !== Infinity && !d._commercialPlaying) {
                    o = parseInt((m * k) / 100, 10);
                    d._showSeekTimeToolTip(l.pageX - j.left, l.pageY - j.top, o)
                }
            }
        }, mouseout: function () {
            a("#" + d._id("_seek_tooltip")).hide()
        }});
        a("#" + this._id("_ctrls_pl")).bind({click: function (j) {
            j.preventDefault()
        }});
        a("#" + this._id("_ctrls_vc_btn")).bind({mouseover: function () {
            d._showVolumeSlider()
        }, mouseout: function (j) {
            if (!jQuery.contains(j.currentTarget, j.relatedTarget) && j.currentTarget !== j.relatedTarget) {
                d._volumeSliderTimeoutId = setTimeout(a.proxy(d._hideVolumeSlider, d), d.options.volumeAutohideDelay)
            }
        }, click: function (j) {
            j.preventDefault();
            d._setOption("muted", !d.options.muted)
        }}).igButton({link: {href: this._const.HREF}, css: {buttonLabelClass: "ui-icon " + (this.options.muted ? "ui-icon-volume-off " : "ui-icon-volume-on ") + "ui-igbutton-icon"}}).attr("title", a.ig.VideoPlayer.locale.volume);
        a("#" + this._id("_ctrls_vs")).hide().bind({mouseover: function () {
            d._volumeSliderMouseOut = false;
            clearTimeout(d._volumeSliderTimeoutId)
        }, mouseout: function () {
            if (!d._userSlidingVolume) {
                d._volumeSliderTimeoutId = setTimeout(a.proxy(d._hideVolumeSlider, d), d.options.volumeAutohideDelay)
            }
            d._volumeSliderMouseOut = true
        }}).igSlider({slide: function (j, k) {
            if (j.originalEvent === undefined) {
                return
            }
            d._setOption("volume", parseFloat(parseInt(k.value, 10) / 100))
        }, start: function () {
            d._userSlidingVolume = true
        }, stop: function () {
            d._userSlidingVolume = false
        }, min: 0, max: 100, step: 10, orientation: "vertical", value: (this.options.muted ? 0 : this.options.volume * 100)});
        a("#" + this._id("_ctrls_vs")).data("igSlider").handle.attr("tabIndex", -1).bind({blur: function () {
            d._volumeSliderTimeoutId = setTimeout(a.proxy(d._hideVolumeSlider, d), d.options.volumeAutohideDelay)
        }});
        this.controlButtons = a([document.getElementById(this._id("_ctrls_play")), a("a.ui-state-default", a("#" + this._id("_ctrls_s")))[0], document.getElementById(this._id("_ctrls_vc_btn")), document.getElementById(this._id("_ctrls_fs_btn"))]);
        this.controlButtons.each(function (j) {
            a(this).data("index.control-button", j)
        });
        this.controlButtons.bind({keydown: function (j) {
            d._handleKbNavigation(j)
        }, focus: function (j) {
            d._handleFocusKb(j)
        }, blur: function (j) {
            d._handleBlurKb(j)
        }});
        a("#" + this._id("_ctrls_vc_btn")).bind({focus: function () {
            d._showVolumeSlider()
        }, blur: function () {
            if (!d._transferFocusFromVolumeButtonToVolumeSlider) {
                d._hideVolumeSlider()
            }
            d._transferFocusFromVolumeButtonToVolumeSlider = false
        }, keydown: function (j) {
            if (j.keyCode === a.ui.keyCode.TAB) {
                j.preventDefault();
                j.stopPropagation();
                d._transferFocusFromVolumeButtonToVolumeSlider = true;
                a("#" + d._id("_ctrls_vs")).data("igSlider").handle.focus()
            }
        }});
        a("#" + d._id("_ctrls_vs")).data("igSlider").handle.bind({keydown: function (j) {
            if (j.keyCode === a.ui.keyCode.TAB) {
                j.preventDefault();
                j.stopPropagation();
                a("#" + d._id("_ctrls_fs_btn")).focus()
            }
        }})
    }, _slide: function (d) {
        var e = d.value, c = this.currentVideo[0].duration, b = c * (e / 100);
        if (!isNaN(c) && c !== Infinity) {
            this.currentTime(b)
        }
        this._userSliding = false
    }, _changeActiveBookmark: function (d) {
        var b = this._activeBookmarkIndex, c = this.bookmarkElements;
        if (c && c.length > 0 && d !== b) {
            if (b >= 0 && b < c.length) {
                a(c[b]).removeClass(this.css.bookmarkActiveItemClass)
            }
            if (d >= 0 && d < c.length) {
                a(c[d]).addClass(this.css.bookmarkActiveItemClass);
                this._activeBookmarkIndex = d
            }
        }
    }, _adjustVolumeButton: function (b) {
        var c = a("#" + this._id("_ctrls_vc_btn"));
        if (b === 0) {
            a("span", c).removeClass("ui-icon-volume-on").addClass("ui-icon-volume-off")
        } else {
            a("span", c).removeClass("ui-icon-volume-off").addClass("ui-icon-volume-on")
        }
    }, _hideVolumeSlider: function () {
        var b = a("#" + this._id("_ctrls_vs"));
        b.data("igSlider").handle.attr("tabIndex", -1);
        b.hide()
    }, _showVolumeSlider: function () {
        clearTimeout(this._volumeSliderTimeoutId);
        var b = a("#" + this._id("_ctrls_vs"));
        b.data("igSlider").handle.removeAttr("tabIndex");
        b.show()
    }, _ended: function (e, c, d) {
        var b = {source: e, duration: c};
        return this._trigger(this.events.ended, d, b)
    }, _playing: function (e, c, d) {
        var b = {source: e, duration: c, currentTime: this.currentVideo[0].currentTime};
        return this._trigger(this.events.playing, d, b)
    }, _paused: function (e, c, d) {
        var b = {source: e, duration: c, currentTime: this.currentVideo[0].currentTime};
        return this._trigger(this.events.paused, d, b)
    }, _buffering: function (e, c, d) {
        var b = {source: e, buffered: c};
        return this._trigger(this.events.buffering, d, b)
    }, _progress: function (f, c, d, e) {
        var b = {source: f, currentTime: c, duration: d};
        return this._trigger(this.events.progress, e, b)
    }, _waiting: function (f, c, d, e) {
        var b = {source: f, currentTime: c, duration: d};
        return this._trigger(this.events.waiting, e, b)
    }, _bookmarkHit: function (f, c, d, e) {
        var b = {source: f, bookmark: c, bookmarkElement: d};
        return this._trigger(this.events.bookmarkHit, e, b)
    }, _bookmarkClick: function (c, d, e) {
        var b = {bookmark: c, bookmarkElement: d};
        return this._trigger(this.events.bookmarkClick, e, b)
    }, _enterFullScreen: function (c) {
        var b = {source: c};
        return this._trigger(this.events.enterFullScreen, null, b)
    }, _exitFullScreen: function (c) {
        var b = {source: c};
        return this._trigger(this.events.exitFullScreen, null, b)
    }, _bannerVisible: function (d, c) {
        var b = {index: d, banner: this.options.banners[d], bannerElement: c};
        return this._trigger(this.events.bannerVisible, null, b)
    }, _bannerHidden: function (d, c) {
        var b = {index: d, banner: this.options.banners[d], bannerElement: c};
        return this._trigger(this.events.bannerHidden, null, b)
    }, _prepareForPlay: function () {
        var b = this.options, c = this.currentVideo;
        if (a("source", c).length === 0) {
            this._renderSources(b.sources, c)
        }
        if (!c.data("sourceDetected")) {
            this._analyzeSource(c)
        }
        this._hideTitleControls();
        if (b.relatedVideos && b.relatedVideos.length > 0) {
            a("#" + this._id("_rvcc")).hide()
        }
    }, togglePlay: function () {
        var b = this.currentVideo[0];
        this._prepareForPlay();
        this._toggleCenterPlayButton();
        if (b.paused || b.ended) {
            if (!this.options.browserControls) {
                a("#" + this._id("_ctrls_play")).attr("title", a.ig.VideoPlayer.locale.playing)
            }
            b.play()
        } else {
            if (!this.options.browserControls) {
                a("#" + this._id("_ctrls_play")).attr("title", a.ig.VideoPlayer.locale.paused)
            }
            b.pause()
        }
    }, play: function () {
        var b = this.currentVideo[0];
        if (b.paused || b.ended) {
            this._prepareForPlay();
            this._toggleCenterPlayButton();
            if (!this.options.browserControls) {
                a("#" + this._id("_ctrls_play")).attr("title", a.ig.VideoPlayer.locale.playing)
            }
            b.play()
        }
    }, pause: function () {
        var b = this.currentVideo[0];
        if (!b.paused) {
            this._toggleCenterPlayButton();
            if (!this.options.browserControls) {
                a("#" + this._id("_ctrls_play")).attr("title", a.ig.VideoPlayer.locale.paused)
            }
            b.pause()
        }
    }, currentTime: function (d) {
        var e = this.currentVideo[0], c = e.duration;
        if (d !== null && d !== undefined) {
            try {
                e.currentTime = d;
                a("#" + this._id("_ctrls_pb")).igProgressBar("option", "value", (d / c).toFixed(2) * 100);
                this._checkCommercialsShow(d);
                this._checkEmbeddedCommercialShow(d)
            } catch (b) {
            }
            if (e.paused && !isNaN(c)) {
                a("#" + this._id("_ctrls_s")).igSlider("option", "value", (d / c).toFixed(2) * 100)
            }
        }
        return parseInt(e.currentTime, 10)
    }, screenshot: function (e) {
        if (!e || a.type(e) !== "number") {
            e = 1
        }
        var f = this.currentVideo[0], g = f.videoWidth * e, d = f.videoHeight * e, b = document.createElement("canvas"), c;
        if (b.getContext) {
            b.width = g;
            b.height = d;
            c = b.getContext("2d");
            c.drawImage(f, 0, 0, g, d)
        }
        return b
    }, supports_video: function () {
        return !!document.createElement("video").canPlayType
    }, supports_h264_baseline_video: function () {
        if (!this.supports_video()) {
            return false
        }
        var b = document.createElement("video");
        return b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') !== ""
    }, supports_ogg_theora_video: function () {
        if (!this.supports_video()) {
            return false
        }
        var b = document.createElement("video");
        return b.canPlayType('video/ogg; codecs="theora, vorbis"') !== ""
    }, supports_webm_video: function () {
        if (!this.supports_video()) {
            return false
        }
        var b = document.createElement("video");
        return b.canPlayType('video/webm; codecs="vp8, vorbis"') !== ""
    }, paused: function () {
        return this.currentVideo[0].paused
    }, ended: function () {
        return this._getMainVideo()[0].ended
    }, duration: function () {
        this._refreshDuration();
        return this._duration
    }, _refreshDuration: function () {
        var b = this.currentVideo[0].duration;
        if (b !== this._duration) {
            this._duration = b;
            if (b === Infinity) {
                this._updateTitleControlsTimeString(a.ig.VideoPlayer.locale.live, a.ig.VideoPlayer.locale.liveStream);
                a("#" + this._id("_ctrls_s")).data("igSlider").handle.hide();
                a("#" + this._id("_ctrls_s")).igSlider("option", "disabled", true)
            } else {
                if (!isNaN(b)) {
                    if (this._commercialPlaying) {
                        this._showAdMessage(parseInt(b, 10))
                    } else {
                        this._updateTitleControlsTimeString(this._toTimeString(b));
                        if (!this._bookmarksRendered && b > 0) {
                            this._renderBookmarks()
                        }
                    }
                }
            }
        }
    }, seeking: function () {
        return this.currentVideo[0].seeking
    }, destroy: function () {
        var b = this.css;
        clearTimeout(this._scrollingTimoutId);
        clearTimeout(this._volumeSliderTimeoutId);
        clearTimeout(this._onVideoStateChangeId);
        clearTimeout(this._resizeBookmarkAreaTimeoutId);
        if (this._oldWidth) {
            this.element.css("width", this._oldWidth)
        }
        if (this._oldHeight) {
            this.element.css("height", this._oldHeight)
        }
        this.container.unbind(this._generalEvts);
        a(document).unbind(this._documentEvts);
        if (this._controlsEvts) {
            this.container.unbind(this._controlsEvts)
        }
        this.container.removeClass(b.baseClasses);
        a("#" + this._id("_ctrls_s")).igSlider("destroy");
        a("#" + this._id("_ctrls_pb")).igProgressBar("destroy");
        a("#" + this._id("_ctrls_vs")).igSlider("destroy");
        a("#" + this._id("_seek_tooltip")).igTooltip("destroy");
        if (this._commercialsShow) {
            delete this._commercialsShow;
            delete this._commercialIndex;
            delete this._commercialPlaying
        }
        if (this._embeddedCommercialsShow) {
            delete this._embeddedCommercialPlaying;
            delete this._embeddedCommercialIndex;
            delete this._embeddedCommercialsShow
        }
        delete this.bookmarkElements;
        delete this.relatedVideoElements;
        delete this.controlButtons;
        delete this._bannerShow;
        delete this.banner;
        if (this.element.is("video")) {
            this.element.unbind(this._videoEvents);
            this.element.removeClass(b.videoClass);
            this._restoreExistingVideoProperties(this.element);
            a(":not(video)", this.container).remove();
            this.element.unwrap()
        } else {
            this.container.children().remove()
        }
        a.Widget.prototype.destroy.apply(this, arguments)
    }, _destroyBookmarks: function () {
        var b = this.options.bookmarks;
        if (b && b.length > 0) {
            this.bookmarkElements.unbind();
            this.bookmarkElements.removeData();
            delete this.bookmarkElements;
            a("#" + this._id("_bookmarks")).remove();
            a("#" + this._id("_ctrls_s")).igSlider("clearBookmarks");
            this._bookmarksRendered = false;
            b = []
        }
    }, _destroyRelatedVideos: function () {
        var b = this.options.relatedVideos;
        if (b && b.length > 0) {
            a("#" + this._id("_rvcc")).remove();
            delete this.relatedVideoElements;
            b = []
        }
    }, _destroyControls: function () {
        var b = this.options.browserControls;
        if (!b) {
            a("#" + this._id("_ctrls_play")).igButton("destroy");
            a("#" + this._id("_ctrls_vc_btn")).igButton("destroy");
            a("#" + this._id("_ctrls_fs_btn")).igButton("destroy");
            a("#" + this._id("_ctrls_pb")).igProgressBar("destroy");
            a("#" + this._id("_ctrls_s")).igSlider("destroy");
            a("#" + this._id("_ctrls_vs")).igSlider("destroy");
            this.controls.each(function () {
                a(this).parent().remove()
            });
            delete this.controls;
            delete this.controlButtons;
            delete this._activeControlsIndex
        }
    }});
    a.extend(a.ui.igVideoPlayer, {version: "12.2.20122.1021"})
}(jQuery));
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));