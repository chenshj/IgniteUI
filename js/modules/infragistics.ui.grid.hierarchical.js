﻿/*
 * Infragistics.Web.ClientUI Hierarchical Grid 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	ig.dataSource.js
 *  ig.ui.shared.js
 *	ig.util.js
 *  ig.ui.grid.framework.js
 */
(function (a) {

    a.widget("ui.igHierarchicalGrid", {

        css: {
            expandColumn: "ui-iggrid-expandcolumn",
            expandColumnExpanded: "ui-iggrid-expandcolumn-expanded",
            expandButton: "ui-iggrid-expandbutton ui-icon-plus",
            expandButtonHover: "ui-iggrid-expandbuttonhover ui-icon-plus ui-state-hover",
            expandButtonExpandedHover: "ui-iggrid-expandbuttonexpandedhover ui-icon-plus ui-state-hover",
            expandButtonExpanded: "ui-iggrid-expandbutton ui-iggrid-expandbuttonexpanded ui-icon-minus",
            expandButtonClick: "ui-iggrid-expandbuttonclick ui-icon-plus",
            childGridArea: "ui-iggrid-childarea",
            childGridAreaCollapsed: "ui-iggrid-childarea-collapsed",
            expandHeaderCell: "ui-iggrid-expandheadercell ui-iggrid-header ui-widget-header",
            expandHeaderCellTriangle: "ui-icon ui-icon-triangle-1-se",
            root: "ui-iggrid-root",
            childGridSeparator: "ui-iggrid-childgridseparator"
        },

        options: {
            initialDataBindDepth: -1,
            initialExpandDepth: -1,
            odata: false,
            rest: false,
            maxDataBindDepth: -1,
            defaultChildrenDataProperty: "children",
            autoGenerateLayouts: false,
            expandCollapseAnimations: true,
            expandColWidth: 30,
            pathSeparator: "/",
            animationDuration: 500,
            expandTooltip: a.ig.Grid.locale.expandTooltip,
            collapseTooltip: a.ig.Grid.locale.collapseTooltip,
            columns: [],
            columnLayouts: [
                {
                    key: null,
                    primaryKey: null,
                    foreignKey: null
                }
            ]
        },

        events: {
            rowExpanding: "rowExpanding",
            rowExpanded: "rowExpanded",
            rowCollapsing: "rowCollapsing",
            rowCollapsed: "rowCollapsed",
            childrenPopulating: "childrenPopulating",
            childrenPopulated: "childrenPopulated",
            childGridCreating: "igchildgridcreating",
            childGridCreated: "igchildgridcreated"
        },

        _setOption: function (b, c) {
            if (b === "dataSource") {
                this.options.dataSource = c;
                this.dataBind()
            } else {
                if (b === "initialDataBindDepth" || b === "initialExpandDepth" || b === "expandColWidth") {
                    throw new Error(a.ig.Grid.locale.optionChangeNotSupported + " " + b)
                } else {
                    if (b === "odata" || b === "defaultChildrenDataProperty" || b === "expandTooltip" || b === "collapseTooltip" || b === "autoGenerateLayouts" || b === "expandCollapseAnimations" || b === "animationDuration") {
                        a.Widget.prototype._setOption.apply(this, arguments)
                    } else {
                        if (this.rootWidget()) {
                            this.rootWidget()._setOption(b, c)
                        }
                    }
                }
            }
        },

        _create: function () {
            this._regevents(this.element, this);
            a.ui.igGrid.prototype.options.columns = [];
            a.ui.igGrid.prototype.options.features = [];
            this.options = a.extend(true, {}, a.ui.igGrid.prototype.options, this.options);
            if (this.tmpDataSource !== null && this.tmpDataSource !== undefined) {
                this.options.dataSource = this.tmpDataSource;
                this._originalOptions.dataSource = this.tmpDataSource
            }
            if (this.options.virtualization === true) {
                this.options.virtualizationMode = "continuous"
            }
            this._eventQueue = [];
            this._animationQueue = [];
            this.dataBind();
            this.rootWidget()._isMultiColumnGrid = this._checkIsMultiColumnHeader(this.options)
        },

        _createWidget: function (c, b) {
            this.options.columns = [];
            this.options.features = [];
            this.options.columnLayouts = [];
            if (c.dataSource && (a.type(c.dataSource) === "array" || a.type(c.dataSource) === "object")) {
                this.tmpDataSource = c.dataSource;
                c.dataSource = null;
                this._originalOptions = c
            }
            a.Widget.prototype._createWidget.apply(this, arguments)
        },

        dataBind: function () {
            var b, c, e, d;
            if (this.options.autoGenerateLayouts) {
                this._generateLayouts()
            }
            c = this._hdsoptions();
            b = new a.ig.HierarchicalDataSource(c);
            this._hds = b;
            e = this._hds.root();
            this._tmpds = this.options.dataSource;
            this.options.dataSource = null;
            d = a.extend(true, {}, this.options);
            this.options.dataSource = this._tmpds;
            this._tmpds = null;
            d.dataSource = e;
            if (a.type(c.dataSource) === "string") {
                d.dataSourceUrl = c.dataSource
            }
            this._columnsGeneratedHandler = a.proxy(this._columnsGenerated, this);
            this.element.bind("iggridcolumnsgenerated", this._columnsGeneratedHandler);
            this._databoundHandler = a.proxy(this._layouts, this);
            if (this.options.autoGenerateLayouts === true) {
                this.element.bind("iggriddatarendering", this._databoundHandler)
            }
            this.element.addClass(this.css.root);
            this.element.attr("data-level", 0);
            d._isHierarchicalGrid = true;
            if (this._root) {
                this._root.igGrid("option", "dataSource", d.dataSource)
            } else {
                if (this.options.autoGenerateLayouts === true) {
                    d._recurseSchema = true
                }
                this._root = this.element.igGrid(d)
            }
            if (this.rootWidget().container().data("igLoading")) {
                this.indicator = this.rootWidget().container().data("igLoading").indicator()
            } else {
                this.indicator = this.rootWidget().container().igLoading().data("igLoading").indicator()
            }
            this._regToggleEvent(this.element, this)
        },

        _generateLayouts: function () {
            var d, c, b = this.options.dataSource;
            if ((a.type(b) !== "array" && a.type(b) !== "object") || b.length === 0) {
                return
            }
            if (a.type(b) === "object" && this.options.responseDataKey) {
                b = b[this.options.responseDataKey] || b
            }
            for (c = 0; c < b.length; c++) {
                d = b[c];
                this._generateLayout(d, this.options)
            }
        },

        _generateLayout: function (h, f) {
            var e, d, j, c, g, b = false;
            for (e in h) {
                if (h.hasOwnProperty(e) && (a.type(h[e]) === "array" || (a.type(h[e]) === "object" && f.responseDataKey && a.type(h[e][f.responseDataKey]) === "array"))) {
                    g = h[e];
                    if (f.responseDataKey && a.type(g) === "object") {
                        if (g[f.responseDataKey] && a.type(g[f.responseDataKey]) === "array") {
                            g = g[f.responseDataKey];
                            b = true
                        } else {
                            continue
                        }
                    }
                    d = {
                        key: e,
                        childrenDataProperty: e,
                        columnLayouts: []
                    };
                    if (b) {
                        d.responseDataKey = f.responseDataKey
                    }
                    j = this._layoutExistsRecursive(this.options, e);
                    if (!j) {
                        if (f.columnLayouts === undefined || f.columnLayouts === null) {
                            f.columnLayouts = []
                        }
                        f.columnLayouts.push(d)
                    } else {
                        d = j
                    }
                    if (g.length > 0) {
                        for (c = 0; c < g.length; c++) {
                            this._generateLayout(g[c], d)
                        }
                    }
                }
            }
        },

        _layoutExistsRecursive: function (d, c) {
            var b, e = null;
            e = d.key === c ? d : e;
            if (!e) {
                for (b = 0; d.columnLayouts && b < d.columnLayouts.length; b++) {
                    e = this._layoutExistsRecursive(d.columnLayouts[b], c);
                    if (e) {
                        break
                    }
                }
            }
            return e
        },

        root: function () {
            return this._root
        },

        rootWidget: function () {
            return this.root().data("igGrid")
        },

        allChildrenWidgets: function () {
            return this.root().find(".ui-iggrid-table").map(function () {
                return a(this).data("igGrid")
            })
        },

        allChildren: function () {
            return this.root().find(".ui-iggrid-table")
        },

        toggle: function (b) {
            this._toggleInternal({
                target: a(b).find(".ui-iggrid-expandcolumn")
            }, true)
        },

        expand: function (b) {
            if (!this.populated(b)) {
                this._toggleInternal({
                    target: a(b).find(".ui-iggrid-expandcolumn")
                }, true)
            } else {
                this._expand(b, true)
            }
        },

        _expand: function (f, i) {
            var j = a(f), b, g = true, e, d = "", h;
            if (!i) {
                g = this._trigger(this.events.rowExpanding, null, {
                    owner: this,
                    parentrow: j
                })
            }
            h = this._rootgrid || this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            if (this.options.expandCollapseAnimations) {
                if (h._animationQueue[j.attr("data-id") + d] === true) {
                    return
                }
                h._animationQueue[j.attr("data-id") + d] = true
            }
            if (g) {
                b = j.find(".ui-iggrid-expandcolumn");
                j.next().css("display", "").css("visibility", "visible");
                if (this.options.expandCollapseAnimations) {
                    if (!i) {
                        e = this._expandend
                    } else {
                        e = this._expandendnoevents
                    }
                    j.next().find("> td > div").slideDown(this.options.animationDuration, e)
                } else {
                    j.next().find("> td > div").show();
                    b.addClass(this.css.expandColumnExpanded).find(".ui-iggrid-expandbutton").removeClass(this.css.expandButton).addClass(this.css.expandButtonExpanded).attr("title", this.options.collapseTooltip);
                    if (!i) {
                        this._rowExpanded({
                            owner: this,
                            parentrow: j
                        });
                        this._trigger(this.events.rowExpanded, null, {
                            owner: this,
                            parentrow: j
                        })
                    }
                }
                j.attr("state", "e");
                j.next().children().first().removeClass(this.css.childGridAreaCollapsed).addClass(this.css.childGridArea)
            }
        },

        expanded: function (c) {
            var b = c.length !== undefined ? c : a(c);
            if (b === null || b === undefined) {
                return false
            }
            if (b.attr("state") !== "e" || b.attr("state") === undefined) {
                return false
            }
            return true
        },

        _expandendnoevents: function (c) {
            var e, f, g, i, b = c ? a(c) : a(this), h = b.closest("tr[data-container]").prev(), d = "";
            g = b.find(".ui-iggrid-table").data("igGrid");
            i = this._rootgrid || b.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            e = b.closest("[data-container=true]").prev().find(".ui-iggrid-expandcolumn");
            f = e.find(".ui-iggrid-expandbutton");
            e.addClass(i.css.expandColumnExpanded);
            f.removeClass(i.css.expandButton).addClass(i.css.expandButtonExpanded).attr("title", i.options.collapseTooltip);
            if (i._animationQueue[h.attr("data-id") + d] === true) {
                delete i._animationQueue[h.attr("data-id") + d]
            }
        },

        _expandend: function () {
            var b = a(this), d, c = b.closest("tr[data-container]").prev();
            d = this._rootgrid || b.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            d._expandendnoevents(this);
            d.rootWidget()._adjustLastColumnWidth(false);
            d._rowExpanded({
                owner: d,
                parentrow: c
            });
            d._trigger(d.events.rowExpanded, null, {
                owner: d,
                parentrow: c
            })
        },

        _collapseendnoevents: function (d) {
            var f, g, h, j, b = d ? a(d) : a(this), c = b.closest(".ui-iggrid-childarea"), i = b.closest("tr[data-container]").prev(), e = "";
            h = b.find(".ui-iggrid-table").data("igGrid");
            j = this._rootgrid || b.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            c.removeClass(j.css.childGridArea).addClass(j.css.childGridAreaCollapsed);
            c.closest("tr").css("display", "none").css("visibility", "hidden");
            f = b.closest("[data-container=true]").prev().find(".ui-iggrid-expandcolumn");
            g = f.find(".ui-iggrid-expandbutton");
            f.removeClass(j.css.expandColumnExpanded);
            g.removeClass(j.css.expandButtonExpanded).addClass(j.css.expandButton).attr("title", j.options.expandTooltip);
            if (j._animationQueue[i.attr("data-id") + e] === true) {
                delete j._animationQueue[i.attr("data-id") + e]
            }
        },

        _collapseend: function () {
            var b = a(this), d, c = b.closest("tr[data-container]").prev();
            d = this._rootgrid || b.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            d._collapseendnoevents(this);
            d.rootWidget()._adjustLastColumnWidth(false);
            d._trigger(d.events.rowCollapsed, null, {
                owner: d,
                parentrow: c
            })
        },

        collapse: function (b) {
            this._collapse(b, true)
        },

        _collapse: function (f, i) {
            var j = a(f), b, g = true, e, d = "", h;
            if (!i) {
                g = this._trigger(this.events.rowCollapsing, null, {
                    owner: this,
                    parentrow: j
                })
            }
            h = this._rootgrid || this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            if (this.options.expandCollapseAnimations) {
                if (h._animationQueue[j.attr("data-id") + d] === true) {
                    return
                }
                h._animationQueue[j.attr("data-id") + d] = true
            }
            if (g) {
                b = j.find(".ui-iggrid-expandcolumn");
                if (this.options.expandCollapseAnimations) {
                    if (!i) {
                        e = this._collapseend
                    } else {
                        e = this._collapseendnoevents
                    }
                    this._rowCollapsed({
                        owner: this,
                        parentrow: j
                    });
                    j.next().find("> td > div").slideUp(this.options.animationDuration, e)
                } else {
                    j.next().find("> td > div").hide();
                    j.next().children().first().removeClass(this.css.childGridArea).addClass(this.css.childGridAreaCollapsed);
                    j.next().css("display", "none").css("visibility", "hidden");
                    b.find(".ui-iggrid-expandbutton").removeClass(this.css.expandButtonExpanded).addClass(this.css.expandButton).attr("title", this.options.expandTooltip);
                    if (!i) {
                        this._rowCollapsed({
                            owner: this,
                            parentrow: j
                        });
                        this._trigger(this.events.rowCollapsed, null, {
                            owner: this,
                            parentrow: j
                        })
                    }
                }
                j.attr("state", "c")
            }
        },

        collapsed: function (c) {
            var b = c.length !== undefined ? c : a(c);
            if (b === null || b === undefined) {
                return true
            }
            if (b.attr("state") === "c" || b.attr("state") === undefined) {
                return true
            }
            return false
        },

        populated: function (c) {
            var b = c.length !== undefined ? c : a(c);
            if (b === null || b === undefined) {
                return false
            }
            if (b.attr("c") === "true") {
                return true
            }
            return false
        },

        _mouseOver: function (b) {
            a(b.target).addClass(this.css.expandButtonHover)
        },

        _mouseOut: function (b) {
            a(b.target).removeClass(this.css.expandButtonHover).addClass(this.css.expandButton)
        },

        _toggleInternal: function (c, g) {
            var b = a(c.target).closest("tr").attr("c"), f = a(c.target).closest("tr").find(".ui-iggrid-expandcolumn"), d = this, h, i, e;
            e = a(c.target).hasClass("ui-iggrid-expandbutton") || a(c.target).children(".ui-iggrid-expandbutton").length > 0;
            if (!b && this.options.initialDataBindDepth === -1 && e) {
                h = f.offset().left;
                i = f.offset().top;
                this.indicator._indicator.css("left", h + f.width() / 4).css("top", i + f.height() / 3 - 4);
                if (!a.browser.webkit) {
                    f.find(".ui-iggrid-expandbutton").css("visibility", "hidden");
                    this.indicator.show(false)
                }
                setTimeout(function () {
                    d._toggleInternalAsync(c, g)
                }, 0)
            } else {
                this._toggleInternalAsync(c, g)
            }
            if (!g) {
                c.stopImmediatePropagation()
            }
        },

        _toggleInternalAsync: function (p, M) {
            var b = a(p.target), D = b.closest("tr"), J = "", v = "", w = "", E, A, x = -1, K = false, l = 0, I, d, g = D.attr("c"), f, e = [], m, B = [], s, u, t, O, G, n, j, H, r, q, C = 0, N, L = D.attr("state"), c, y = true, z = true, F;
            if ((b.is("td") && b.attr("data-parent") !== "true") || b.closest("td").attr("data-parent") !== "true") {
                return
            }
            if (L === undefined) {
                L = "c"
            }
            I = this.options.restSettings.update.url !== null || this.options.restSettings.update.template !== null || this.options.restSettings.create.url !== null || this.options.restSettings.create.template !== null || this.options.restSettings.remove.url !== null || this.options.restSettings.remove.template !== null;
            if (!g && L === "c") {
                D.after("<tr></tr>");
                f = D.next();
                f.attr("data-container", true);
                H = D.closest("table").data("igGrid").options;
                B = this._optsFor(H);
                if (H.childrenDataProperty === undefined) {
                    if (H.key) {
                        v = H.key
                    }
                } else {
                    v += H.childrenDataProperty
                }
                E = D.closest(".ui-iggrid-childarea").parent().prev();
                while (E.length > 0) {
                    if (l !== 0) {
                        J += this.options.pathSeparator
                    }
                    A = E.closest(".ui-iggrid-table").data("igGrid").options;
                    u = A.primaryKey;
                    J += u + ":" + E.attr("data-id");
                    if (A.childrenDataProperty === undefined) {
                        if (A.key) {
                            v += this.options.pathSeparator + A.key
                        }
                    } else {
                        v += this.options.pathSeparator + A.childrenDataProperty
                    }
                    E = E.closest(".ui-iggrid-childarea").parent().prev();
                    l++
                }
                v = v.split(this.options.pathSeparator).reverse().join(this.options.pathSeparator);
                J = J.split(this.options.pathSeparator).reverse().join(this.options.pathSeparator);
                u = D.closest("table").data("igGrid").options.primaryKey;
                if (J === "") {
                    J = u + ":" + D.attr("data-id")
                } else {
                    J += this.options.pathSeparator + u + ":" + D.attr("data-id")
                }
                j = D.find("td,th").length;
                c = a("<div></div>").appendTo(a("<td></td>").appendTo(f).addClass(this.css.childGridArea).attr("colspan", j));
                for (r = 0; r < B.length; r++) {
                    w = "";
                    e.push(a("<table></table>").appendTo(c).attr("data-childgrid", true));
                    if (r < B.length - 1) {
                        a("<div></div>").appendTo(c).addClass(this.css.childGridSeparator)
                    }
                    e[r].attr("id", this.root()[0].id + "_" + D.attr("data-id") + "_" + B[r].key + "_child");
                    C = parseInt(D.closest("table").attr("data-level"), 10);
                    e[r].attr("id", e[r].attr("id").replace(",", "-")).attr("data-level", C + 1);
                    if (v === "") {
                        w = B[r].childrenDataProperty === undefined ? B[r].key : B[r].childrenDataProperty
                    } else {
                        w = this.options.pathSeparator + (B[r].childrenDataProperty === undefined ? B[r].key : B[r].childrenDataProperty)
                    }
                    d = this._hds.dataAt(J, v + w);
                    if (a.type(d) !== "array" && !B[r].responseDataKey && d !== undefined) {
                        d = [d]
                    } else {
                        if (d === null || d === undefined) {
                            d = []
                        }
                    }
                    t = false;
                    if (B[r].columnLayouts && B[r].columnLayouts.length > 0) {
                        t = true
                    }
                    if (t) {
                        this._regevents(e[r], this)
                    }
                    x = J.split(this.options.pathSeparator).length;
                    if (x > this.options.initialDataBindDepth && this.options.initialDataBindDepth !== -1) {
                        K = true
                    }
                    m = this._hdsoptions().dataSource;
                    if (!K) {
                        B[r].dataSource = d;
                        if (a.type(m) === "string" && this.options.rest !== true) {
                            B[r].dataSourceUrl = m
                        }
                        if (B[r].dataSourceUrl && a.type(B[r].dataSourceUrl) === "string") {
                            if (B[r].dataSourceUrl.indexOf("?") !== -1) {
                                B[r].dataSourceUrl += "&" + this._hds._encodeUrlPath(J, B[r].key)
                            } else {
                                B[r].dataSourceUrl += "?" + this._hds._encodeUrlPath(J, B[r].key)
                            }
                        }
                        if (this.options.autoGenerateLayouts === true) {
                            B[r]._recurseSchema = true
                        }
                        e[r].trigger(this.events.childGridCreating, {
                            owner: this,
                            options: B[r],
                            element: e[r],
                            id: J,
                            path: v + w
                        });
                        z = e[r].attr("data-create");
                        if (z !== "false") {
                            if ((this.options.rest || this.options.odata) && I === true) {
                                this._inheritRestSettings(null, D.attr("data-id"), w.toLowerCase(), H, B[r])
                            }
                            e[r].igGrid(B[r]);
                            if (t) {
                                this._regToggleEvent(e[r], this)
                            }
                            e[r].trigger(this.events.childGridCreated, {
                                owner: this,
                                element: e[r]
                            })
                        }
                        if (B[r].primaryKey === null || B[r].primaryKey === undefined) {
                            if (B[r].dataSource instanceof a.ig.DataSource) {
                                throw new Error(a.ig.Grid.locale.noPrimaryKey)
                            }
                            N = e[r].data("igGrid");
                            O = N.dataSource.schema().schema.searchField;
                            if (O !== null) {
                                for (G = 0; G < B[r].dataSource[O].length; G++) {
                                    B[r].dataSource[O][G].ig_pk = N.dataSource.data()[G].ig_pk
                                }
                            } else {
                                for (G = 0; G < B[r].dataSource.length; G++) {
                                    if (B[r].dataSource[G]) {
                                        B[r].dataSource[G].ig_pk = N.dataSource.data()[G].ig_pk
                                    }
                                }
                            }
                        }
                    } else {
                        if (this.options.odata) {
                            n = (m instanceof a.ig.DataSource) ? m.settings.dataSource : m;
                            d = D.closest("table").data("igGrid").dataSource.data();
                            O = D.attr("data-id");
                            u = D.closest("table").data("igGrid").options.primaryKey;
                            if (D.closest("table").data("igGrid").columnByKey(u).dataType === "number") {
                                O = parseInt(O, 10)
                            }
                            for (G = 0; G < d.length; G++) {
                                if (d[G][D.closest("table").data("igGrid").options.primaryKey] === O) {
                                    d = d[G][B[r].key];
                                    break
                                }
                            }
                            if (d.__deferred && d.__deferred.uri) {
                                B[r].dataSource = d.__deferred.uri;
                                if (n.indexOf("$callback=?") !== -1) {
                                    B[r].dataSource += "?$callback=?"
                                }
                                if (n.indexOf("$format=") !== -1) {
                                    if (n.indexOf("$format=json") !== -1) {
                                        B[r].dataSource += "&$format=json"
                                    } else {
                                        B[r].dataSource += "&$format=atom"
                                    }
                                }
                            }
                            if (I === true) {
                                this._inheritRestSettings(null, D.attr("data-id"), w.toLowerCase(), H, B[r])
                            }
                        } else {
                            if (this.options.rest === true) {
                                if (m.substr(m.length - 1) !== "/") {
                                    m += "/"
                                }
                                F = D.attr("data-id");
                                B[r].dataSource = m + F + "/" + w.toLowerCase();
                                if (I === true) {
                                    this._inheritRestSettings(B[r].dataSource, F, w.toLowerCase(), H, B[r])
                                }
                            } else {
                                if (m instanceof a.ig.DataSource) {
                                    B[r].dataSource = m.settings.dataSource + this._hds._encodeUrlPath(J, B[r].key)
                                } else {
                                    if (B[r].dataSource) {
                                        if (B[r].dataSource.indexOf("?") !== -1) {
                                            B[r].dataSource += "&" + this._hds._encodeUrlPath(J, B[r].key)
                                        } else {
                                            B[r].dataSource += "?" + this._hds._encodeUrlPath(J, B[r].key)
                                        }
                                        B[r].dataSourceType = "remoteUrl"
                                    } else {
                                        if (a.type(B[r].dataSource) === "string" && a.type(m) !== "string") {
                                            B[r].dataSource += "?" + this._hds._encodeUrlPath(J, B[r].key);
                                            B[r].dataSourceType = "remoteUrl"
                                        } else {
                                            B[r].dataSource = m + "?" + this._hds._encodeUrlPath(J, B[r].key)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (K) {
                    y = this._trigger(this.events.childrenPopulating, null, {
                        owner: this,
                        parentrow: D,
                        id: J
                    });
                    if (y) {
                        for (r = 0; r < B.length; r++) {
                            s = D.attr("data-id");
                            if (!this._eventQueue["id" + s] || !this._eventQueue["id" + s].length) {
                                this._eventQueue["id" + s] = []
                            }
                            q = a.proxy(this._childRendered, this);
                            this._eventQueue["id" + s].push({
                                grid: e[r],
                                handler: q,
                                parentrow: D,
                                id: J
                            });
                            e[r].bind("iggridrendered", q);
                            if (this.options.autoGenerateLayouts === true) {
                                B[r]._recurseSchema = true
                            }
                            e[r].igGrid(B[r]);
                            if (t) {
                                this._regToggleEvent(e[r], this)
                            }
                        }
                    }
                }
                c.attr("id", "ac");
                D.attr("c", true);
                D.next().hide();
                c.hide();
                this._expand(D, M)
            } else {
                if (L === "e") {
                    this._collapse(D, M)
                } else {
                    if (L === "c") {
                        this._expand(D, M)
                    }
                }
            }
            this.indicator.hide();
            D.find(".ui-iggrid-expandbutton").css("visibility", "visible")
        },

        _layouts: function () {
            this.element.unbind("iggriddatarendering", this._databoundHandler)
        },

        _columnsGenerated: function (c, b) {
            var e = b.key, d;
            if (!e) {
                return
            }
            d = this._findLayout(this.rootWidget().options.columnLayouts, e);
            if (d.columns && d.columns.length && d.columns.length > 0) {
                return
            }
            d.columns = b.owner.options.columns
        },

        _findLayout: function (e, c) {
            var b, d;
            for (b = 0; e && b < e.length; b++) {
                if (e[b].key === c) {
                    d = e[b];
                    break
                } else {
                    if (!d && e[b].columnLayouts) {
                        d = this._findLayout(e[b].columnLayouts, c)
                    }
                }
            }
            return d
        },

        _hdsoptions: function () {
            var b, c;
            b = {
                responseDataKey: this.options.responseDataKey,
                responseTotalRecCountKey: this.options.responseTotalRecCountKey,
                dataSource: this.options.dataSource,
                primaryKey: this.options.primaryKey,
                localSchemaTransform: this.options.localSchemaTransform,
                autoCommit: this.options.autoCommit,
                odata: this.options.odata,
                serializeTransactionLog: this.options.serializeTransactionLog,
                updateUrl: this.options.updateUrl,
                restSettings: this.options.restSettings,
                initialDataBindDepth: this.options.initialDataBindDepth
            };
            if (this.options.dataSourceType !== null) {
                b.type = this.options.dataSourceType
            }
            c = this._hschema();
            if ((this.options.dataSource instanceof a.ig.HierarchicalDataSource && this.options.dataSource.settings.schema === null) || !(this.options.dataSource instanceof a.ig.HierarchicalDataSource)) {
                b = a.extend(b, {
                    schema: c
                })
            }
            return b
        },

        _getDataColumns: function (b) {
            var e, f, g = [], c = b.length, d;
            for (e = 0; e < c; e++) {
                if (b[e].group !== undefined && b[e].group !== null) {
                    d = this._getDataColumns(this._getDataColumns(b[e].group));
                    for (f = 0; f < d.length; f++) {
                        g.push(d[f])
                    }
                } else {
                    g.push(b[e])
                }
            }
            return g
        },

        _hschema: function () {
            var n, f, g, m, l, d = this._getDataColumns(this.options.columns), e = [], h, b;
            if (d.length > 0 && !this.options.autoGenerateColumns) {
                n = {};
                n.fields = [];
                g = 0;
                for (f = 0; f < d.length; f++) {
                    if (d[f].unbound === true) {
                        continue
                    }
                    n.fields[g] = {};
                    n.fields[g].name = d[f].key;
                    n.fields[g].type = d[f].dataType;
                    g++
                }
                n.searchField = this.options.responseDataKey
            } else {
                if (this.options.autoGenerateColumns) {
                    n = {};
                    n.fields = [];
                    if (this.options.dataSource && this.options.dataSource.length && this.options.dataSource.length > 0 && a.type(this.options.dataSource) === "array") {
                        m = this.options.dataSource[0];
                        for (l in m) {
                            if (m.hasOwnProperty(l)) {
                                for (h = 0; h < d; h++) {
                                    if (d[h].key === l) {
                                        b = d[h];
                                        break
                                    }
                                }
                                if (b === null || b === undefined) {
                                    n.fields.push({
                                        name: l,
                                        type: a.ig.getColType(m[l])
                                    })
                                } else {
                                    if (b.unbound === true) {
                                        continue
                                    }
                                    n.fields.push({
                                        name: l,
                                        type: b.dataType
                                    })
                                }
                            }
                        }
                    }
                }
            }
            if (this.options.columnLayouts && this.options.columnLayouts.length > 0) {
                for (g = 0; g < this.options.columnLayouts.length; g++) {
                    n.fields.push({
                        name: this.options.columnLayouts[g].childrenDataProperty === undefined ? this.options.columnLayouts[g].key : this.options.columnLayouts[g].childrenDataProperty
                    })
                }
            }
            this._parseLayouts(e, "", this.options);
            n.layouts = e;
            return n
        },

        _parseLayouts: function (f, c, g) {
            var d, e, h, b = null;
            if (g.columnLayouts && g.columnLayouts.length !== undefined && g.columnLayouts.length > 0) {
                for (d = 0; d < g.columnLayouts.length; d++) {
                    e = g.columnLayouts[d];
                    b = e.childrenDataProperty === undefined ? e.key : e.childrenDataProperty;
                    if (!b) {
                        b = this.options.defaultChildrenDataProperty
                    }
                    h = c + this.options.pathSeparator + b + ":" + e.primaryKey;
                    f[h] = e;
                    this._parseLayouts(f, h, e)
                }
            }
        },

        _batchExpand: function () {
            var b = [], d, c;
            c = this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            if (!c) {
                c = this.element.data("igHierarchicalGrid")
            }
            d = c.options.expandCollapseAnimations;
            c.options.expandCollapseAnimations = false;
            b = this.element.find("tr[data-id]");
            c._batchExpandLevel(b);
            c.options.expandCollapseAnimations = d
        },

        _batchExpandLevel: function (c) {
            var b;
            for (b = 0; b < c.length; b++) {
                this.toggle(c[b])
            }
        },

        _renderExtraHeaderCell: function (d, b, c) {
            if (c === true) {
                a("<td></td>").prependTo(d).css("border-width", 0).attr("data-skip", true)
            } else {
                a("<td></td>").appendTo(d).css("border-width", 0).attr("data-skip", true)
            }
        },

        _renderExtraFooterCell: function (e, b, d, c) {
            if (d === true) {
                a("<td></td>").addClass(c).prependTo(e).attr("data-skip", true)
            } else {
                a("<td></td>").addClass(c).appendTo(e).attr("data-skip", true)
            }
        },

        _headerrenderedinternal: function (f, c) {
            var e = this, d = c.owner._renderColgroup, g, b;
            c.owner._renderRecord = a.proxy(this._hierarchicalRenderRecord, c.owner);
            c.owner._getFirstVisibleTR = a.proxy(this._hierarchicalGetFirstVisibleTR, c.owner);
            c.owner._getLastVisibleTR = a.proxy(this._hierarchicalGetLastVisibleTR, c.owner);
            c.owner._renderRecordInArray = a.proxy(this._hierarchicalRenderRecordInArray, c.owner);
            c.owner._renderColgroup = function () {
                e._hierarchicalRenderColgroup.apply(c.owner, a.merge([d, e], arguments))
            };
            c.owner._headerInitCallbacks.push({
                type: "HierarchicalGrid",
                func: a.proxy(this._renderExtraHeaderCell, this)
            });
            c.owner._footerInitCallbacks.push({
                type: "HierarchicalGrid",
                func: a.proxy(this._renderExtraFooterCell, this)
            });
            c.owner._trigger("headerextracellsmodified", null, {
                owner: c.owner
            });
            if (c.owner._hasColumnTemplates() && c.owner.options.rowTemplate === null) {
                c.owner.options.rowTemplate = c.owner._buildRowTemplateRaw()
            }
            if (c.owner.options.rowTemplate !== null && c.owner.options.rowTemplate !== undefined && c.owner.options.rowTemplate !== "") {
                c.owner.useCustomTemplates = true
            }
            if (c.table.attr("id") !== c.owner.element.attr("id")) {
                a("<col></col>").attr("data-skip", "true").prependTo(c.table.find("colgroup")).width(this.options.expandColWidth)
            }
            b = a("<th></th>");
            a("<span></span>").appendTo(b.prependTo(c.table.find("thead tr:first")).addClass(this.css.expandHeaderCell).attr("data-skip", true)).addClass(this.css.expandHeaderCellTriangle);
            if (c.owner._isMultiColumnGrid) {
                b.attr("rowspan", c.owner._maxLevel + 1)
            }
            if (c.owner._isWrapped) {
                g = c.owner.element.attr("id").substring(0, c.owner.element.attr("id").indexOf("_table"));
                a("#" + g).unbind("iggridheaderrenderedinternal", c.owner.element.data("hr"));
                a("#" + g).removeData("hr")
            } else {
                c.owner.element.unbind("iggridheaderrenderedinternal", c.owner.element.data("hr"));
                c.owner.element.removeData("hr")
            }
        },

        _checkIsMultiColumnHeader: function (g) {
            var f, d = g.columnLayouts, b = g.columns, e, c;
            if (b) {
                c = b.length;
                for (f = 0; f < c; f++) {
                    if (b[f].group !== undefined && b[f].group !== null) {
                        return true
                    }
                }
            }
            if (d) {
                e = d.length;
                for (f = 0; f < e; f++) {
                    if (this._checkIsMultiColumnHeader(d[f]) === true) {
                        return true
                    }
                }
            }
            return false
        },

        _gridinit: function (c, b) {
        },

        _hierarchicalRenderRecord: function (d, q) {
            var j, k, b = this.options.accessibilityRendering, f = this, n, h, c, e = "", r, o = "", m, g, p, l;
            if (q % 2 !== 0 && this.options.alternateRowStyles) {
                e += '<tr class="' + f.css.recordAltClass + '"'
            } else {
                e += "<tr"
            }
            e += ' data-row-idx="' + q + '"';
            if (!this._hg) {
                h = this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
                if (!h) {
                    h = this.element.hasClass(".ui-iggrid-root") ? this.element : undefined
                }
                this._hg = h
            } else {
                h = this._hg
            }
            if (this.options.foreignKey) {
                e += " data-id-fk='" + this._kval_from_key(this.options.foreignKey, d) + "'"
            } else {
                if (this.options.primaryKey === null || this.options.primaryKey === undefined) {
                    this.options.primaryKey = "ig_pk";
                    r = h._getVal(d);
                    e += " data-id-fk='" + r + "'"
                } else {
                    if (this.options.primaryKey === "ig_pk") {
                        r = h._getVal(d);
                        e += " data-id-fk='" + r + "'"
                    } else {
                        e += " data-id-fk='" + this._kval_from_key(this.options.primaryKey, d) + "'"
                    }
                }
            }
            if (this.options.primaryKey === null || this.options.primaryKey === undefined) {
                this.options.primaryKey = "ig_pk";
                r = h._getVal(d);
                e += " data-id='" + r + "'"
            } else {
                if (this.options.primaryKey === "ig_pk") {
                    r = h._getVal(d);
                    e += " data-id='" + r + "'"
                } else {
                    e += " data-id='" + this._kval_from_key(this.options.primaryKey, d) + "'"
                }
            }
            if (b) {
                e += ' role="row">'
            } else {
                e += ">"
            }
            m = this.options.columnLayouts;
            g = false;
            n = h ? h.options.initialDataBindDepth > -1 : false;
            if (!n) {
                for (j = 0; m && j < m.length; j++) {
                    if (d[m[j].key]) {
                        c = m[j].key;
                        l = m[j]
                    } else {
                        c = m[j].childrenDataProperty
                    }
                    c = c || this.options.defaultChildrenDataProperty;
                    if (c) {
                        if (l && l.responseDataKey) {
                            if (d[c] && d[c][l.responseDataKey] && d[c][l.responseDataKey].length !== undefined && d[c][l.responseDataKey].length > 0) {
                                g = true;
                                break
                            }
                        } else {
                            if (d[c] && d[c].length !== undefined && d[c].length > 0) {
                                g = true;
                                break
                            }
                        }
                    }
                }
            } else {
                g = true
            }
            if (g) {
                o = '<span class="ui-iggrid-expandbuttoncontainer"><span class="ui-iggrid-expandbutton ui-icon ui-icon-plus" title="' + h.options.expandTooltip + '"></span></span>'
            }
            e += '<td class="ui-iggrid-expandcolumn" data-parent="' + g + '">' + o + "</td>";
            if (this.options.columns.length > 0) {
                p = true;
                a(this.options.columns).each(function (i) {
                    if (f.options.columns[i].hidden) {
                        return
                    }
                    p = false;
                    if (b) {
                        e += '<td role="gridcell" aria-describedby="' + this.key + '"'
                    } else {
                        e += "<td"
                    }
                    if (d[this.key] === undefined) {
                        if (f.useCustomTemplates === true) {
                            e += " ";
                            e += f._renderTemplatedCell(d[i], this)
                        } else {
                            e += ">";
                            e += f._renderCell(d[i], this)
                        }
                        e += "</td>"
                    } else {
                        if (f.useCustomTemplates === true) {
                            e += " ";
                            e += f._renderTemplatedCell(d, this)
                        } else {
                            e += ">";
                            e += f._renderCell(d[this.key], this)
                        }
                        e += "</td>"
                    }
                });
                if (p) {
                    e += '<td role="gridcell"></td>'
                }
            } else {
                if (a.type(d) === "array") {
                    for (j = 0; j < d.length; j++) {
                        if (b) {
                            e += '<td role="gridcell">' + d[j] + "</td>"
                        } else {
                            e += "<td>";
                            e += d[j];
                            e += "</td>"
                        }
                    }
                } else {
                    for (k in d) {
                        if (d.hasOwnProperty(k)) {
                            if (b) {
                                e += '<td role="gridcell" aria-describedby="' + k + '">' + d[k] + "</td>"
                            } else {
                                e += "<td>";
                                e += d[k];
                                e += "</td>"
                            }
                        }
                    }
                }
            }
            e += "</tr>";
            return e
        },

        _getVal: function (b) {
            var c;
            if (b.ig_pk) {
                c = b.ig_pk
            } else {
                c = a.ig.uid();
                b.ig_pk = c
            }
            return c
        },

        _hierarchicalRenderRecordInArray: function (e, r, f, q) {
            var k, l, c = this.options.accessibilityRendering, g = this, n, j, d, s, o = "", m, h, p, b = false;
            if (e === null) {
                e = [];
                b = true
            }
            if (q % 2 !== 0 && this.options.alternateRowStyles) {
                e.push('<tr class="' + g.css.recordAltClass + '"')
            } else {
                e.push("<tr")
            }
            if (this.options.foreignKey) {
                e.push(" data-id-fk='" + this._kval_from_key(this.options.foreignKey, f) + "'")
            } else {
                if (this.options.primaryKey === null || this.options.primaryKey === undefined) {
                    this.options.primaryKey = "ig_pk";
                    s = a.ig.uid();
                    e.push(" data-id-fk='" + s + "'");
                    f.ig_pk = s
                } else {
                    if (this.options.primaryKey === "ig_pk") {
                        s = a.ig.uid();
                        e.push(" data-id-fk='" + s + "'");
                        f.ig_pk = s
                    } else {
                        e.push(" data-id-fk='" + this._kval_from_key(this.options.primaryKey, f) + "'")
                    }
                }
            }
            if (this.options.primaryKey === null || this.options.primaryKey === undefined) {
                this.options.primaryKey = "ig_pk";
                s = a.ig.uid();
                e.push(" data-id='" + s + "'");
                f.ig_pk = s
            } else {
                if (this.options.primaryKey === "ig_pk") {
                    s = a.ig.uid();
                    e.push(" data-id='" + s + "'");
                    f.ig_pk = s
                } else {
                    e.push(" data-id='" + this._kval_from_key(this.options.primaryKey, f) + "'")
                }
            }
            if (c) {
                e.push(' role="row">')
            } else {
                e.push(">")
            }
            m = this.options.columnLayouts;
            h = false;
            j = this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            if (!j) {
                j = this.element.hasClass(".ui-iggrid-root") ? this.element : undefined
            }
            n = j ? j.options.initialDataBindDepth > -1 : false;
            if (!n) {
                for (k = 0; m && k < m.length; k++) {
                    if (f[m[k].key]) {
                        d = m[k].key
                    } else {
                        d = m[k].childrenDataProperty
                    }
                    d = d || this.options.defaultChildrenDataProperty;
                    if (d) {
                        if (this.options.responseDataKey) {
                            if (f[d] && f[d][this.options.responseDataKey] && f[d][this.options.responseDataKey].length !== undefined && f[d][this.options.responseDataKey].length > 0) {
                                h = true;
                                break
                            }
                        } else {
                            if (f[d] && f[d].length !== undefined && f[d].length > 0) {
                                h = true;
                                break
                            }
                        }
                    }
                }
            } else {
                h = true
            }
            if (h) {
                o = '<span class="ui-iggrid-expandbuttoncontainer"><span class="ui-iggrid-expandbutton ui-icon ui-icon-plus" title="' + j.options.expandTooltip + '"></span></span>'
            }
            e.push('<td class="ui-iggrid-expandcolumn" data-parent="' + h + '">' + o + "</td>");
            if (this.options.columns.length > 0) {
                p = true;
                a(this.options.columns).each(function (i) {
                    if (g.options.columns[i].hidden) {
                        return
                    }
                    p = false;
                    if (c) {
                        e.push('<td role="gridcell" aria-describedby="' + this.key + '"')
                    } else {
                        e.push("<td")
                    }
                    if (f[this.key] === undefined) {
                        if (g.useCustomTemplates === true) {
                            e.push(" ");
                            e.push(g._renderTemplatedCell(f, this))
                        } else {
                            e.push(">");
                            e.push(g._renderCell(f[i], this))
                        }
                        e.push("</td>")
                    } else {
                        if (g.useCustomTemplates === true) {
                            e.push(" ");
                            e.push(g._renderTemplatedCell(f, this))
                        } else {
                            e.push(">");
                            e.push(g._renderCell(f[this.key], this))
                        }
                        e.push("</td>")
                    }
                });
                if (p) {
                    e.push('<td role="gridcell"></td>')
                }
            } else {
                if (a.type(f) === "array") {
                    for (k = 0; k < f.length; k++) {
                        if (c) {
                            e.push('<td role="gridcell">' + f[k] + "</td>")
                        } else {
                            e.push("<td>");
                            e.push(f[k]);
                            e.push("</td>")
                        }
                    }
                } else {
                    for (l in f) {
                        if (f.hasOwnProperty(l)) {
                            if (c) {
                                e.push('<td role="gridcell" aria-describedby="' + l + '">' + f[l] + "</td>")
                            } else {
                                e.push("<td>");
                                e.push(f[l]);
                                e.push("</td>")
                            }
                        }
                    }
                }
            }
            e.push("</tr>");
            if (b) {
                r.append(e.join(""))
            }
        },

        _hierarchicalRenderColgroup: function (c, d, g, f, e, b) {
            c.apply(this, [g, f, e, b]);
            a("<col></col>").prependTo(a(g).find("colgroup")).css("width", d.options.expandColWidth).attr("data-skip", "true")
        },

        _schemaGenerated: function (e, c) {
            var f, g, j, k = c.schema, d = c.dataSource, b = c.owner, h;
            f = b.element.closest(".ui-iggrid-root").data("igHierarchicalGrid");
            if (!f) {
                f = b.element.hasClass(".ui-iggrid-root") ? b.element : undefined
            }
            if (!f || f.options.initialDataBindDepth > -1) {
                return
            }
            for (g = 0; d && d.length && a.type(d) === "array" && g < d.length; g++) {
                j = d[g];
                for (h in j) {
                    if (j.hasOwnProperty(h)) {
                        if (!b._fieldExists(h, k) && (a.type(j[h]) === "array" || a.type(j[h]) === "object")) {
                            k.fields.push({
                                name: h,
                                type: a.ig.getColType(j[h])
                            })
                        }
                    }
                }
            }
        },

        _childRendered: function (j, b) {
            var h = b.owner.element.closest("tr").prev(), g = "id" + h.attr("data-id"), c = this._eventQueue[g], f, d = true;
            for (f = 0; c.length !== undefined && f < c.length; f++) {
                if (c[f].grid.attr("id") === b.owner.element.attr("id")) {
                    c[f].done = true;
                    c[f].grid.unbind("iggridrendered", c[f].handler);
                    break
                }
            }
            for (f = 0; c.length !== undefined && f < c.length; f++) {
                if (!c[f].done) {
                    d = false;
                    break
                }
            }
            if (d) {
                this._trigger(this.events.childrenPopulated, null, {
                    owner: this,
                    parentrow: h,
                    id: c[0].id
                });
                delete this._eventQueue[g]
            }
        },

        _optsFor: function (f) {
            var b, c, e = [], d;
            if (f.columnLayouts && f.columnLayouts.length > 0 && a.type(f.columnLayouts) === "array") {
                d = f.columnLayouts;
                for (c = 0; c < d.length; c++) {
                    this._inherit(f, d[c]);
                    e.push(a.extend(true, {}, a.ui.igGrid.prototype.options, d[c]))
                }
            }
            if (f.dataSourceUrl) {
                for (b = 0; b < e.length; b++) {
                    if (!e[b].dataSource) {
                        e[b].dataSourceUrl = f.dataSourceUrl
                    } else {
                        e[b].dataSourceUrl = e[b].dataSource
                    }
                }
            }
            return e
        },

        _inherit: function (h, b) {
            var d, c, e, g;
            if (h.dataSourceType) {
                b.dataSourceType = h.dataSourceType
            }
            if (!h.features || h.features.length === undefined || h.features.length === 0) {
                return
            }
            if (!b.features || b.features.length === undefined) {
                b.features = []
            }
            for (d = 0; d < h.features.length; d++) {
                if (h.features[d].inherit === true) {
                    c = null;
                    for (e = 0; e < b.features.length; e++) {
                        if (b.features[e].name === h.features[d].name) {
                            c = b.features[e];
                            break
                        }
                    }
                    if (c === null || c === undefined) {
                        b.features.push(a.extend(true, {}, h.features[d]));
                        b.features[b.features.length - 1].columnSettings = []
                    } else {
                        g = false;
                        if (b.features[e].columnSettings && b.features[e].columnSettings.length > 0) {
                            g = true
                        }
                        b.features[e] = a.extend(true, {}, h.features[d], c);
                        if (!g) {
                            b.features[e].columnSettings = []
                        }
                    }
                }
            }
        },

        _regevents: function (f, c) {
            var g, d, i, h, j, b;
            g = a.proxy(c._headerrenderedinternal, c);
            d = a.proxy(this._handleBatchExpandRender, c);
            i = a.proxy(this._schemaGenerated, c);
            f.bind("iggridheaderrenderedinternal", g);
            f.bind("iggriddatarendered", d);
            f.bind("iggridschemagenerated", i);
            h = a.proxy(c._mouseOver, c);
            j = a.proxy(c._mouseOut, c);
            b = function (k) {
                k.stopPropagation();
                k.preventDefault();
                return false
            };
            f.data("hr", g)
        },

        _regToggleEvent: function (c, b) {
            var d;
            d = a.proxy(b._toggleInternal, b);
            c.delegate(".ui-iggrid-expandcolumn > .ui-iggrid-expandbuttoncontainer", "mousedown", d)
        },

        commit: function () {
            var b = this.element;
            b.find(".ui-iggrid-table").each(function () {
                a(this).igGrid("commit")
            });
            b.igGrid("commit")
        },

        rollback: function (c) {
            var b = this.element;
            b.find(".ui-iggrid-table").each(function () {
                a(this).igGrid("rollback", null, c)
            });
            b.igGrid("rollback", null, c)
        },

        _addToLog: function (d, h, b) {
            var e = d.data("igGrid"), c = e ? e.dataSource : null, f = c ? c._accumulatedTransactionLog : null, g = f ? f.length : 0;
            if (!g) {
                return
            }
            this._dsLog = this._dsLog || [];
            this._dsLog.push(c);
            while (g-- > 0) {
                h.push(a.extend(true, b ? {
                    layoutKey: e.options.key
                } : {}, f[g]))
            }
        },

        saveChanges: function () {
            var c = this, b = c.element, e = c.options.updateUrl, d = [];
            if ((this.options.rest || this.options.odata) && this.options.restSettings) {
                this._saveChangesForEachGrid();
                return
            }
            if (!e || !b) {
                return
            }
            delete c._dsLog;
            c._addToLog(b, d);
            b.find(".ui-iggrid-table").each(function () {
                c._addToLog(a(this), d, true)
            });
            a.post(e, {
                ig_transactions: JSON.stringify(d)
            }, function (f, k, h) {
                var j = c._dsLog, g = j ? j.length : 0;
                while (g-- > 0) {
                    j[g]._saveChangesSuccess(f, k, h)
                }
            })
        },

        _saveChangesForEachGrid: function () {
            this.rootWidget().saveChanges();
            a.each(this.allChildrenWidgets(), function () {
                this.saveChanges()
            })
        },

        _handleBatchExpandRender: function (d, b) {
            var c = 0;
            if (b.owner.element[0].id !== d.currentTarget.id) {
                return
            }
            c = b.owner.element.attr("data-level");
            if (parseInt(c, 10) > this.options.initialExpandDepth) {
                return
            }
            if ((this.options.initialDataBindDepth === -1 || this.options.initialDataBindDepth >= this.options.initialExpandDepth) && this.options.initialExpandDepth !== -1) {
                setTimeout(a.proxy(this._batchExpand, b.owner), 1)
            }
        },

        _inheritRestSettings: function (f, g, e, h, b) {
            var c = b.restSettings, i = h.restSettings, k, j, d;
            if (!f) {
                if (i.update.template || i.remove.template) {
                    f = i.update.template || i.remove.template;
                    f = f.replace("${id}", g)
                } else {
                    f = i.create.url || i.update.url || i.remove.url;
                    if (f.substr(f.length - 1) !== "/") {
                        f += "/"
                    }
                    f += g
                }
                if (e.substr(0, 1) === "/") {
                    e = e.substr(1)
                }
                if (f.substr(f.length - 1) !== "/") {
                    f += "/"
                }
                d = f + e
            } else {
                d = f
            }
            k = {
                update: {
                    url: d
                },
                create: {
                    url: d
                },
                remove: {
                    url: d
                }
            };
            if (c.create.template && i.create.template) {
                j = i.create.template.replace("${id}", g);
                c.create.template = j + "/" + c.create.template
            }
            if (c.remove.template && i.remove.template) {
                j = i.remove.template.replace("${id}", g);
                c.remove.template = j + "/" + c.remove.template
            }
            if (c.update.template && i.update.template) {
                j = i.update.template.replace("${id}", g);
                c.update.template = j + "/" + c.update.template
            }
            c = a.extend(true, c, k)
        },

        _rowExpanded: function (b) {
            var e, f, d, c;
            e = b.parentrow.next();
            if (e.length === 0 || !e.is('tr[data-container="true"]')) {
                return
            }
            f = e.outerHeight();
            d = b.parentrow.closest(".ui-iggrid-table").data("igGrid");
            c = d._getScrollContainerHeight();
            d._setScrollContainerHeight(c + f)
        },

        _rowCollapsed: function (b) {
            var e = b.parentrow.next(), f, d, c;
            if (e.length === 0 || !e.is('tr[data-container="true"]')) {
                return
            }
            f = e.outerHeight();
            d = b.parentrow.closest(".ui-iggrid-table").data("igGrid");
            c = d._getScrollContainerHeight();
            d._setScrollContainerHeight(c - f)
        },

        _hierarchicalGetFirstVisibleTR: function (d) {
            var c = "#" + this.element[0].id, b;
            b = a(c + ' > tbody > tr:not([data-container="true"])').filter(function (e) {
                return this.offsetTop + a(this).height() > d.top
            }).first();
            return b
        },

        _hierarchicalGetLastVisibleTR: function (d) {
            var c = "#" + this.element[0].id, b;
            b = a(c + ' > tbody > tr:not([data-container="true"])').filter(function (e) {
                return this.offsetTop < d.bottom
            }).last();
            return b
        },

        destroy: function () {
            this.tmpDataSource = null;
            this._rootgrid = null;
            this.rootWidget().destroy();
            a.Widget.prototype.destroy.call(this)
        }

    });

    a.extend(a.ui.igHierarchicalGrid, {
        version: "12.2.20122.1021"
    })

}(jQuery));