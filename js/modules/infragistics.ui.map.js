﻿/*
 * Infragistics.Web.ClientUI Chart 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * jquery-1.4.4.js
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * infragistics.util.js
 * infragistics.dv.core.js
 * infragistics.geographicmap_core.js
 * infragistics.datasource.js
 * infragistics.dvcommonwidget.js
 */
if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}
( function (a) {
    a.widget("ui.igMap", {
        options: {
            width: 500,
            height: 500,
            dataSource: null,
            dataSourceUrl: null,
            dataSourceType: null,
            responseDataKey: null,
            autoMarginWidth: 20,
            autoMarginHeight: 0,
            crosshairVisibility: "collapsed",
            crosshairPoint: {
                x: 0,
                y: 0
            },
            plotAreaBackground: null,
            defaultInteraction: "dragPan",
            dragModifier: "none",
            panModifier: "shift",
            previewRect: null,
            windowRect: null,
            horizontalZoomable: false,
            verticalZoomable: false,
            windowResponse: null,
            windowRectMinWidth: 0,
            windowPositionHorizontal: 0,
            windowPositionVertical: 0,
            circleMarkerTemplate: null,
            triangleMarkerTemplate: null,
            pyramidMarkerTemplate: null,
            squareMarkerTemplate: null,
            diamondMarkerTemplate: null,
            pentagonMarkerTemplate: null,
            hexagonMarkerTemplate: null,
            tetragramMarkerTemplate: null,
            pentagramMarkerTemplate: null,
            hexagramMarkerTemplate: null,
            overviewPlusDetailPaneBackgroundImageUri: null,
            backgroundContent: {
                type: "openStreet",
                key: null,
                parameter: null,
                tilePath: null,
                imagerySet: "AerialWithLabels",
                bingUrl: "http://dev.virtualearth.net/REST/v1/Imagery/Metadata/"
            },
            series: [
                {
                    type: null,
                    name: null,
                    dataSource: null,
                    dataSourceUrl: null,
                    dataSourceType: null,
                    responseDataKey: null,
                    remove: false,
                    showTooltip: false,
                    shapeDataSource: null,
                    databaseSource: null,
                    triangulationDataSource: null,
                    legendItemBadgeTemplate: null,
                    legendItemTemplate: null,
                    discreteLegendItemTemplate: null,
                    transitionDuration: 0,
                    resolution: 1,
                    title: null,
                    brush: null,
                    outline: null,
                    thickness: 0,
                    trianglesSource: null,
                    triangleVertexMemberPath1: null,
                    triangleVertexMemberPath2: null,
                    triangleVertexMemberPath3: null,
                    colorScale: null,
                    colorMemberPath: null,
                    visibleFromScale: 0,
                    longitudeMemberPath: null,
                    latitudeMemberPath: null,
                    markerType: "none",
                    markerTemplate: null,
                    shapeMemberPath: null,
                    shapeStyleSelector: null,
                    shapeStyle: null,
                    markerBrush: null,
                    markerOutline: null,
                    markerCollisionAvoidance: "none",
                    fillScale: null,
                    fillMemberPath: null,
                    trendLineType: "none",
                    trendLineBrush: null,
                    trendLineThickness: 1.5,
                    trendLinePeriod: 7,
                    trendLineZIndex: 1001,
                    maximumMarkers: 400,
                    radiusMemberPath: null,
                    radiusScale: null,
                    labelMemberPath: null,
                    clipSeriesToBounds: null,
                    valueMemberPath: null,
                    unknownValuePlotting: "dontPlot",
                    angleMemberPath: null,
                    useCartesianInterpolation: true,
                    stiffness: 0.5,
                    negativeBrush: null,
                    splineType: "natural",
                    lowMemberPath: null,
                    highMemberPath: null,
                    openMemberPath: null,
                    closeMemberPath: null,
                    volumeMemberPath: null,
                    ignoreFirst: 0,
                    period: 0,
                    shortPeriod: 0,
                    longPeriod: 0,
                    valueResolver: null,
                    shapeFilterResolution: 2,
                    useBruteForce: false,
                    progressiveLoad: true,
                    mouseOverEnabled: false,
                    useSquareCutoffStyle: false,
                    heatMinimum: 0,
                    heatMaximum: 50
                }
            ]
        },
        css: {
            map: "ui-corner-all ui-widget-content",
            unsupportedBrowserClass: "ui-chart-non-html5-supported-message ui-helper-clearfix",
            tooltip: "ui-chart-tooltip ui-widget-content ui-corner-all"
        },
        events: {
            tooltipShowing: "tooltipShowing",
            tooltipShown: "tooltipShown",
            tooltipHiding: "tooltipHiding",
            tooltipHidden: "tooltipHidden",
            browserNotSupported: "browserNotSupported",
            seriesCursorMouseMove: null,
            seriesMouseLeftButtonDown: null,
            seriesMouseLeftButtonUp: null,
            seriesMouseMove: null,
            seriesMouseEnter: null,
            seriesMouseLeave: null,
            windowRectChanged: null,
            gridAreaRectChanged: null,
            refreshCompleted: null,
            triangulationStatusChanged: null
        },
        _createWidget: function (c, b) {
            this._fixCss();
            this.dvWidget = new a.ig.dvCommonWidget(this);
            this.dvWidget._createWidget(c, b, this)
        },
        _create: function () {
            this._fixCss();
            this.dvWidget._create()
        },
        _fixCss: function () {
            if (this.css.map.indexOf("{0}") > -1) {
                this.css.map = this.css.map.replace("{0}", this.options.theme);
                this.css.tooltip = this.css.tooltip.replace("{0}", this.options.theme)
            }
        },
        _setOption: function (b, c) {
            this.dvWidget._setOption(b, c)
        },
        destroy: function () {
            if (this._chart) {
                this._chart.destroy()
            }
            this.dvWidget._destroy(this);
            if (this._chartElement) {
                this._chartElement.remove()
            }
            a.Widget.prototype.destroy.apply(this, arguments)
        },
        id: function () {
            return this.element[0].id
        },
        exportImage: function (c, b) {
            return this.dvWidget._getImage(c, b, this)
        },
        styleUpdated: function () {
            this._chart.styleUpdated();
            return this
        },
        resetZoom: function () {
            this._chart.resetZoom();
            return this
        },
        addItem: function (c, d) {
            var b = d || this._containerSourceID;
            if (this.dataSources[b]) {
                this.dataSources[b].addRow(null, c, true)
            }
        },
        insertItem: function (d, c, e) {
            var b = e || this._containerSourceID;
            if (this.dataSources[b]) {
                this.dataSources[b].insertRow(null, d, c, true)
            }
        },
        removeItem: function (c, d) {
            var b = d || this._containerSourceID;
            if (this.dataSources[b]) {
                this.dataSources[b].deleteRow(c, true)
            }
        },
        setItem: function (c, d, e) {
            var b = e || this._containerSourceID;
            if (this.dataSources[b]) {
                this.dataSources[b].updateRow(c, d, true)
            }
        },
        notifySetItem: function (b, c, d, e) {
            this._chart.notifySetItem(b, c, e, d);
            return this
        },
        notifyClearItems: function (b) {
            this._chart.notifyClearItems(b);
            return this
        },
        notifyInsertItem: function (b, c, d) {
            this._chart.notifyInsertItem(b, c, d);
            return this
        },
        notifyRemoveItem: function (b, c, d) {
            this._chart.notifyRemoveItem(b, c, d);
            return this
        },
        scrollIntoView: function (d, b) {
            var c = this.dvWidget._getNotifyTarget(d);
            if (c && c.scrollIntoView) {
                c.scrollIntoView(b)
            }
            return this
        },
        scaleValue: function (c, d) {
            var b = this.dvWidget._getNotifyTarget(c);
            if (b && b.scaleValue) {
                return b.scaleValue(d)
            }
            return 0
        },
        unscaleValue: function (d, b) {
            var c = this.dvWidget._getNotifyTarget(d);
            if (c && c.unscaleValue) {
                return c.unscaleValue(b)
            }
            return 0
        },
        flush: function () {
            this._chart.flush()
        },
        exportVisualData: function () {
            return this._chart.exportVisualData()
        },
        getActualMinimumValue: function (c) {
            var b = this.dvWidget._getNotifyTarget(c);
            if (b && b.actualMinimumValue) {
                return b.actualMinimumValue()
            }
            return 0
        },
        getActualMaximumValue: function (c) {
            var b = this.dvWidget._getNotifyTarget(c);
            if (b && b.actualMaximumValue) {
                return b.actualMaximumValue()
            }
            return 0
        },
        notifyContainerResized: function () {
            this._chart.notifyContainerResized()
        },
        getGeographicFromZoom: function (b) {
            var c, d, e;
            if (b === undefined) {
                b = this._chart.windowRect()
            } else {
                e = new a.ig.Rect(0, b.left, b.top, b.width, b.height);
                b = e
            }
            c = this._chart.getGeographicFromZoom(b);
            d = {};
            d.top = c.top();
            d.left = c.left();
            d.width = c.width();
            d.height = c.height();
            return d
        },
        getZoomFromGeographic: function (b) {
            var c, d, e;
            if (b === undefined) {
                b = this._chart.windowRect()
            } else {
                e = new a.ig.Rect(0, b.left, b.top, b.width, b.height);
                b = e
            }
            c = this._chart.getZoomFromGeographic(b);
            d = {};
            d.top = c.top();
            d.left = c.left();
            d.width = c.width();
            d.height = c.height();
            return d
        },
        print: function () {
            this.dvWidget._print()
        },
        renderSeries: function (d, b) {
            var c = this.dvWidget._getNotifyTarget(d);
            if (c && c.renderSeries) {
                return c.renderSeries(b)
            }
            return this
        },
        _initConverter: function (e, b) {
            var d = e.name || this._containerSourceID, c = e.triangulationDataSource || e.shapeDataSource;
            if (this.dataSources === undefined) {
                this.dataSources = {}
            }
            if (c instanceof a.ig.TriangulationDataSource || c instanceof a.ig.ShapeDataSource) {
                this.dataSources[d] = c.converter();
                if (c.isBound()) {
                    b.call(this.dvWidget)
                } else {
                    c.settings.id = d;
                    c.settings.callee = this.dvWidget;
                    c.settings.callback = b
                }
            } else {
                if (e.triangulationDataSource) {
                    this.dataSources[d] = new a.ig.TriangulationDataSource({
                        id: d,
                        source: e.triangulationDataSource,
                        callback: b,
                        callee: this.dvWidget
                    }).dataBind().converter()
                } else {
                    this.dataSources[d] = new a.ig.ShapeDataSource({
                        id: d,
                        shapefileSource: e.shapeDataSource,
                        databaseSource: e.databaseSource,
                        callback: b,
                        callee: this.dvWidget
                    }).dataBind().converter()
                }
            }
            this.dataSources[d].id = d
        }
    });
    a.extend(a.ui.igMap, {
        version: "12.2.20122.1021"
    });
    a.ig.ShapeDataSource = a.ig.ShapeDataSource || Class.extend({
        settings: {
            id: null,
            shapefileSource: null,
            databaseSource: null,
            callback: null,
            callee: null,
            transformRecord: null,
            transformPoint: null,
            transformBounds: null,
            importCompleted: null
        },
        init: function (b) {
            this._uris = {};
            this._isImported = false;
            this.settings = a.extend(true, {}, a.ig.ShapeDataSource.prototype.settings, b);
            this._converter = new a.ig.ShapefileConverter();
            this._converter.importCompleted = jQuery.proxy(this._importCompleted, this);
            return this
        },
        _importCompleted: function () {
            var e, f, g, b, c, l, h, d;
            this._isImported = true;
            if (this._converter !== null && ( typeof (this.settings.transformBounds) === "function")) {
                b = {
                    left: this._converter.worldRect().left(),
                    top: this._converter.worldRect().top(),
                    width: this._converter.worldRect().width(),
                    height: this._converter.worldRect().height()
                };
                this.settings.transformBounds(b);
                this._converter.worldRect(new a.ig.Rect(0, b.left, b.top, b.width, b.height));
                this._converter.bounds = b
            }
            if (this._converter !== null && ( typeof (this.settings.transformRecord) === "function" || typeof (this.settings.transformPoint) === "function")) {
                for (e = 0; e < this._converter.records().count(); e++) {
                    c = this._converter.records().item(e);
                    if (typeof (this.settings.transformPoint) === "function") {
                        for (f = 0; f < c.points.count(); f++) {
                            l = c.points.item(f);
                            for (g = 0; g < l.count(); g++) {
                                h = l.item(g);
                                d = {
                                    x: h.x(),
                                    y: h.y()
                                };
                                this.settings.transformPoint(d);
                                h.x(d.x);
                                h.y(d.y)
                            }
                        }
                    }
                    if (typeof (this.settings.transformRecord) === "function") {
                        this.settings.transformRecord(c)
                    }
                }
            }
            if (typeof (this.settings.importCompleted) === "function") {
                this.settings.importCompleted(this)
            }
            if (typeof (this.settings.callback) === "function") {
                this.settings.callback.call(this)
            }
        },
        dataBind: function () {
            if (this.settings.shapefileSource) {
                this._uris.shapefileSource = new a.ig.Uri();
                this._uris.shapefileSource.value(this.settings.shapefileSource);
                this._converter.shapefileSource(this._uris.shapefileSource)
            }
            if (this.settings.databaseSource) {
                this._uris.databaseSource = new a.ig.Uri();
                this._uris.databaseSource.value(this.settings.databaseSource);
                this._converter.databaseSource(this._uris.databaseSource)
            }
            return this
        },
        isBound: function () {
            return this._isImported
        },
        converter: function () {
            return this._converter
        }
    });
    a.ig.TriangulationDataSource = a.ig.TriangulationDataSource || Class.extend({
        settings: {
            id: null,
            source: null,
            triangulationSource: null,
            callback: null,
            callee: null
        },
        init: function (b) {
            this._uris = {};
            this._isImported = false;
            this.settings = a.extend(true, {}, a.ig.TriangulationDataSource.prototype.settings, b);
            this._converter = new a.ig.ItfConverter();
            this._converter.importCompleted = jQuery.proxy(this._importCompleted, this);
            return this
        },
        _importCompleted: function () {
            this._isImported = true;
            if (typeof (this.settings.callback) === "function") {
                this.settings.callback.call(this)
            }
        },
        dataBind: function () {
            if (this.settings.source) {
                this._uris.source = new a.ig.Uri();
                this._uris.source.value(this.settings.source);
                this._converter.source(this._uris.source)
            }
            if (this.settings.triangulationSource) {
                this._uris.triangulationSource = new a.ig.Uri();
                this._uris.triangulationSource.value(this.settings.triangulationSource);
                this._converter.source(this._uris.triangulationSource)
            }
            return this
        },
        isBound: function () {
            return this._isImported
        },
        converter: function () {
            return this._converter
        }
    })
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