﻿/*
 * Infragistics.Web.ClientUI PivotGrid 12.2.20122.177
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.datasource.js
 *  infragistics.ui.shared.js
 *	infragistics.util.js
 *	infragistics.grid.framework.js
 *	infragistics.olapdatasource.js
 *	infragistics.ui.grid.multicolumnheaders.js
 */
( function (a) {
    function c() {
        this[0] = []
    }

    c.prototype = [];
    c.prototype.set = function (e, d, f) {
        if (this.length < e + 1) {
            this.setRowCount(e + 1)
        }
        if (this[0].length < d + 1) {
            this.setColumnCount(d + 1)
        }
        this[e][d] = f
    };
    c.prototype.setRowCount = function (f) {
        var d, e = this.length;
        this.length = f;
        for (d = e; d < f; d++) {
            this[d] = [];
            this[d].length = this[0].length
        }
    };
    c.prototype.setColumnCount = function (d) {
        var e;
        for (e = 0; e < this.length; e++) {
            this[e].length = d
        }
    };
    var b = function (d) {
        return d === null || d === undefined
    };
    a.widget("ui.igPivotGrid", {
        css: {
            expandButton: "ui-iggrid-headerbutton ui-icon ui-icon-plus",
            collapseButton: "ui-iggrid-headerbutton ui-iggrid-headerbuttonexpanded ui-icon ui-icon-minus",
            blockArea: "ui-widget-overlay ui-iggrid-blockarea",
            loading: "ui-iggrid-loadingarea",
            buttonContainer: "ui-iggrid-buttoncontainer"
        },
        options: {
            dataSource: null,
            isParentInFrontForColumns: false,
            isParentInFrontForRows: true,
            compactColumnHeaders: false,
            compactRowHeaders: true,
            compactHeaderIndentation: 20,
            dataSourceOptions: {
                serverUrl: null,
                catalog: null,
                cube: null,
                rows: [],
                columns: [],
                measures: []
            },
            gridOptions: {
                width: null,
                height: null,
                defaultColumnWidth: null,
                virtualization: false,
                fixedHeaders: true,
                fixedFooters: true,
                caption: null,
                features: [],
                tabIndex: 0,
                autoFormat: "date",
                renderCheckboxes: false,
                alternateRowStyles: true,
                autofitLastColumn: true,
                enableHoverStyles: true
            }
        },
        events: {
            tupleMemberExpanding: "tupleMemberExpanding",
            tupleMemberExpanded: "tupleMemberExpanded",
            viewUpdating: "viewUpdating",
            viewUpdated: "viewUpdated"
        },
        _create: function () {
            var f = this.options.dataSource, k, d = this, g, e, h, j;
            if (f === null || !( f instanceof a.ig.XmlaDataSource)) {
                this._ds = new a.ig.XmlaDataSource({
                    serverUrl: this.options.dataSourceOptions.serverUrl,
                    isRemote: this.options.dataSourceOptions.isRemote,
                    catalog: this.options.dataSourceOptions.catalog,
                    cube: this.options.dataSourceOptions.cube,
                    rows: this.options.dataSourceOptions.rows,
                    columns: this.options.dataSourceOptions.columns,
                    measures: this.options.dataSourceOptions.measures
                });
                j = true
            } else {
                this._ds = f
            }
            a("<div></div>").appendTo("body").attr("id", this.element.attr("id") + "_container_block").css("position", "absolute").addClass(this.css.blockArea).data("efh", "1").hide();
            this._gridRenderedHandler = function (l, m) {
                var n = m.owner.element, i;
                n.find("tbody th > span[data-expand]").bind("click", function (p) {
                    var s = a(p.target), o, r, t, q;
                    o = s.closest("th").attr("data-axis");
                    r = parseInt(s.closest("th").attr("data-member"), 10);
                    t = parseInt(s.closest("th").attr("data-tuple"), 10);
                    q = s.attr("data-expand") === "true";
                    if (q) {
                        d._ds.expandTupleMember(o, t, r)
                    } else {
                        d._ds.collapseTupleMember(o, t, r)
                    }
                    d.updateGrid()
                });
                g = d._rowsMatrix.length > 0 ? d._rowsMatrix[0].length : 1;
                e = a(this).find("colgroup");
                for (h = 0; h < g; h++) {
                    i = a("<col></col>").prependTo(e);
                    if (d.options.gridOptions.defaultColumnWidth) {
                        i.width(d.options.gridOptions.defaultColumnWidth)
                    }
                }
            };
            a(this.element).on("iggridrendered", this._gridRenderedHandler);
            this._headerRenderedHandler = function (m, p) {
                var o = p.owner._oldCols, q = p.table, n, i, l;
                if (o === null || o === undefined) {
                    o = p.owner.options.columns
                }
                p.owner._renderRecord = a.proxy(d._renderPivotRecord, p.owner);
                d._processHeaderMarkupRecursive(o);
                n = q.find("tr").first();
                i = d._rowsMatrix.length > 0 ? d._rowsMatrix[0].length : 1;
                l = d._maxLevel + 1;
                if (a("#" + d.element.attr("id") + "_emptyCell").length === 0) {
                    a("<th></th>").prependTo(n).attr("colSpan", i).attr("rowSpan", l).addClass("ui-iggrid-header ui-widget-header").attr("id", d.element.attr("id") + "_emptyCell")
                } else {
                    a("#" + d.element.attr("id") + "_emptyCell").attr("rowSpan", l).attr("colSpan", i)
                }
                q.find("span[data-expand]").bind("click", function (s) {
                    var v = a(s.target), r, u, w, t;
                    r = v.attr("data-axis");
                    u = parseInt(v.attr("data-member"), 10);
                    w = parseInt(v.attr("data-tuple"), 10);
                    t = v.attr("data-expand") === "true";
                    if (t) {
                        d._ds.expandTupleMember(r, w, u)
                    } else {
                        d._ds.collapseTupleMember(r, w, u)
                    }
                    d.updateGrid()
                })
            };
            a(this.element).on("iggridheaderrendered", this._headerRenderedHandler);
            if (a(this.element).data("igGrid") && !j) {
                a(this.element).igGrid("destroy");
                a(this.element).empty()
            }
            if (j) {
                this.updateGrid(true)
            } else {
                k = this._configureOptions(this._ds);
                a(this.element).igGrid(k)
            }
        },
        _configureOptions: function (g) {
            var m, i, j, d, f, e, l, h, k;
            m = {
                isParentInFrontForColumns: this.options.isParentInFrontForColumns,
                isParentInFrontForRows: this.options.isParentInFrontForRows,
                compactRowHeaders: this.options.compactRowHeaders,
                compactColumnHeaders: this.options.compactColumnHeaders
            };
            i = g.columnAxis().length > 0;
            j = g.rowAxis().length > 0;
            this._tableView = new a.ig.TableView(g.result(), i, j, m);
            this._tableView.initialize();
            this._rowsMatrix = new c();
            this._fillMatrixWithHeaderCells(this._rowsMatrix, this._tableView.rowHeaders(), "No headers");
            this._maxMemberIndex = g.columnAxis().length - 1;
            d = this._generateAllGridColumns(this._tableView.columnHeaders());
            f = this._generateDataColumns(this._tableView.columnHeaders());
            e = this._transformGridData(this._tableView.resultCells(), f, f.length);
            l = {
                dataSource: e
            };
            h = new a.ig.DataSource(l);
            k = {
                autoGenerateColumns: false
            };
            a.extend(true, k, this.options.gridOptions);
            k.dataSource = h;
            k.columns = d;
            a.merge(k.features, [
                {
                    name: "MultiColumnHeaders"
                }
            ]);
            return k
        },
        grid: function () {
            return this.element.data("igGrid")
        },
        updateGrid: function (g) {
            var f = this._ds || this.options.dataSource, h, d = this, e;
            if (a(this.element).data("igGrid")) {
                a(this.element).data("igGrid")._loadingIndicator.indicatorElement().attr("class", this.css.loading);
                a(this.element).data("igGrid")._loadingIndicator.show();
                this._showBlockArea()
            }
            e = function (i) {
                a(d.element).igGrid("destroy");
                a(d.element).empty();
                h = d._configureOptions(f);
                a(d.element).igGrid(h);
                a("#" + d.element.attr("id") + "_container_block").hide()
            };
            if (g) {
                f.initialize().done(e).fail(function (i) {
                    throw i
                })
            } else {
                f.update().done(e).fail(function (i) {
                    throw i
                })
            }
        },
        _transformGridData: function (e, g, h) {
            var j = [], l = -1, d, k, f, m;
            for (k = 0; k < e.length; k++) {
                d = e[k].cellOrdinal();
                m = Math.floor(d / h);
                l = m > l ? m : l
            }
            if (l >= 0) {
                l++
            }
            for (k = 0; k < l; k++) {
                j.push({})
            }
            for (k = 0; k < e.length; k++) {
                d = e[k].cellOrdinal();
                f = d % h;
                j[Math.floor(d / h)][g[f].key] = e[k].formatedValue()
            }
            return j
        },
        _generateAllGridColumns: function (e) {
            var d = [], g = [], f;
            for (f = 0; f < e.length; f++) {
                if (!g[e[f].rowIndex()]) {
                    g[e[f].rowIndex()] = []
                }
                g[e[f].rowIndex()].push(e[f])
            }
            this._maxLevel = g.length;
            d = this._processHeadersTree(g);
            return d
        },
        _processHeadersTree: function (k) {
            var d = [], e, f, g, h = [];
            for (e = 0; k.length >= 1 && e < k[0].length; e++) {
                this._createHeader(d, k[0][e])
            }
            for (e = 1; e < k.length; e++) {
                h = [];
                h = this._parentsForLevel(e, d);
                for (f = 0; f < k[e].length; f++) {
                    g = this._findParent(h, k[e][f]);
                    if (g) {
                        this._createHeader(g, k[e][f])
                    } else {
                        if (e - 1 >= 1) {
                            this._findAndCreateUp(e - 1, e, d, k, k[e][f])
                        }
                    }
                }
            }
            return d
        },
        _findAndCreateUp: function (i, g, d, m, f) {
            var l = [], h, e, k;
            l = this._parentsForLevel(i, d);
            for (h = 0; h < m[g].length; h++) {
                e = m[g][h];
                if (e.axisName() === f.axisName() && e.columnIndex() === f.columnIndex() && e.memberIndex() === f.memberIndex() && e.tupleIndex() === f.tupleIndex() && e.caption() === f.caption()) {
                    k = this._findParent(l, e, g - i + 1);
                    if (k) {
                        this._createHeader(k, e)
                    } else {
                        if (i - 1 >= 1) {
                            this._findAndCreateUp(i - 1, g, d, m, f)
                        }
                    }
                }
            }
        },
        _parentsForLevel: function (e, g) {
            var f = [], d;
            for (d = 0; d < g.length; d++) {
                this._parentsForLevelRecursive(f, g[d], 1, e)
            }
            return f
        },
        _parentsForLevelRecursive: function (j, e, d, h) {
            var f = e.rowspan > 1 ? e.rowspan - 1 : 0, g;
            if (d === h) {
                j.push(e)
            } else {
                if (d < h && e.group !== null && e.group !== undefined) {
                    for (g = 0; g < e.group.length; g++) {
                        this._parentsForLevelRecursive(j, e.group[g], d + 1 + f, h)
                    }
                }
            }
        },
        _createHeader: function (e, d) {
            if (d.columnSpan() > 1 || (d.columnSpan() === 1 && d.isExpanded() && d.isExpandable())) {
                e.push({
                    headerText: d.caption(),
                    rowspan: d.rowSpan(),
                    colSpan: d.columnSpan(),
                    colIndex: d.columnIndex(),
                    group: [],
                    key: d.axisName() + "_" + d.tupleIndex() + "_" + d.memberIndex(),
                    expandable: d.isExpandable(),
                    expanded: d.isExpanded(),
                    axisName: d.axisName(),
                    tupleIndex: d.tupleIndex(),
                    memberIndex: d.memberIndex()
                })
            } else {
                e.push({
                    headerText: d.caption(),
                    key: d.axisName() + "_" + d.tupleIndex() + "_" + d.memberIndex(),
                    expandable: d.isExpandable(),
                    expanded: d.isExpanded(),
                    axisName: d.axisName(),
                    colSpan: d.columnSpan(),
                    rowspan: d.rowSpan(),
                    colIndex: d.columnIndex(),
                    tupleIndex: d.tupleIndex(),
                    memberIndex: d.memberIndex()
                })
            }
        },
        _findParent: function (d, e, g) {
            var f;
            if (!d || d.length === undefined || d.length === null) {
                return null
            }
            for (f = 0; f < d.length; f++) {
                if (g === undefined || (g !== undefined && d[f].rowspan === g)) {
                    if (d[f].colSpan + d[f].colIndex >= e.columnSpan() + e.columnIndex() && d[f].colIndex <= e.columnIndex()) {
                        if (!d[f].group) {
                            d[f].group = []
                        }
                        return d[f].group
                    }
                }
            }
            return null
        },
        _processMultiColumnHeadersRecursive: function (j, e, k, d) {
            var f, h = [], g;
            for (f = k; f < d; f++) {
                if (e[f].columnSpan() > 1) {
                    g = {
                        headerText: e[f].caption(),
                        group: h,
                        key: e[f].axisName() + "_" + e[f].tupleIndex() + "_" + e[f].memberIndex(),
                        expandable: e[f].isExpandable(),
                        expanded: e[f].isExpanded(),
                        axisName: e[f].axisName(),
                        tupleIndex: e[f].tupleIndex(),
                        memberIndex: e[f].memberIndex()
                    };
                    j.push(g);
                    this._processMultiColumnHeadersRecursive(h, e, ++f, f + e[f - 1].columnSpan());
                    f += e[f - 1].columnSpan() - 1
                } else {
                    j.push({
                        headerText: e[f].caption(),
                        key: e[f].axisName() + "_" + e[f].tupleIndex() + "_" + e[f].memberIndex(),
                        expandable: e[f].isExpandable(),
                        expanded: e[f].isExpanded(),
                        axisName: e[f].axisName(),
                        tupleIndex: e[f].tupleIndex(),
                        memberIndex: e[f].memberIndex()
                    })
                }
            }
        },
        _generateDataColumns: function (e) {
            var d = [], f;
            for (f = 0; f < e.length; f++) {
                if (e[f].memberIndex() !== this._maxMemberIndex) {
                    continue
                }
                if (e[f].columnSpan() === 1 && (e[f].isExpandable() === false || !e[f].isExpanded())) {
                    d.push({
                        headerText: e[f].caption(),
                        key: e[f].axisName() + "_" + e[f].tupleIndex() + "_" + e[f].memberIndex()
                    })
                }
            }
            return d
        },
        _processHeaderMarkupRecursive: function (k) {
            var l, g, f, h, e, j, m, d;
            for (l = 0; l < k.length; l++) {
                g = k[l].expanded;
                f = k[l].expandable;
                h = "<span data-expand='true' class='" + this.css.expandButton + "'/>";
                e = "<span data-expand='false' class='" + this.css.collapseButton + "'/>";
                j = a("#" + this.element.attr("id") + "_" + k[l].key);
                m = "";
                if (f && !g) {
                    m = h
                } else {
                    if (g) {
                        m = e
                    }
                }
                if (m !== "") {
                    if (j.find("span[data-expand]").length > 0) {
                        j.find("span[data-expand]").remove()
                    }
                    d = a(m).prependTo(j).attr("data-axis", k[l].axisName).attr("data-member", k[l].memberIndex).attr("data-tuple", k[l].tupleIndex)
                }
                if (k[l].group) {
                    this._processHeaderMarkupRecursive(k[l].group)
                }
            }
        },
        _showBlockArea: function () {
            var d, g, f, h, e = this.element.data("igGrid");
            d = a("#" + this.element.attr("id") + "_container_block");
            g = e.container().offset();
            f = g.left;
            h = g.top;
            if (d.outerWidth() !== e.container().outerWidth()) {
                d.css("width", e.container().outerWidth())
            }
            if (d.outerHeight() !== e.container().outerHeight()) {
                d.css("height", e.container().outerHeight())
            }
            d.css({
                left: f,
                top: h
            }).fadeToggle()
        },
        _fillMatrixWithHeaderCells: function (s, n, k) {
            var l, f, m, w, v, h, u, g, d, x, t, q, r, e = "", p, o, j;
            if (!n || n.length === 0) {
                s.set(0, 0, "<th>" + k + "</th>");
                return
            }
            l = "<span data-expand='true' class='" + this.css.expandButton + "' style='margin-left: $$margin$$px;'></span>";
            f = "<span data-expand='false' class='" + this.css.collapseButton + "' style='margin-left: $$margin$$px;'></span>";
            for (o = 0; o < n.length; o++) {
                m = n[o];
                w = m.caption();
                v = m.rowSpan();
                h = m.columnSpan();
                u = m.rowIndex();
                g = m.columnIndex();
                d = m.axisName();
                x = m.tupleIndex();
                t = m.memberIndex();
                q = m.isExpandable();
                r = m.isExpanded();
                j = "ui-iggrid-header ui-widget-header";
                s.set(u + v - 1, g + h - 1, undefined);
                e = r ? f : l;
                p = this.options.compactHeaderIndentation * m.levelNumber();
                e = e.replace("$$margin$$", p);
                if (!q) {
                    w = "<span style='margin-left:" + this.options.compactHeaderIndentation * m.levelNumber() + "px;'>" + w + "</span>"
                }
                s.set(u, g, "<th class='" + j + "' data-skip='true' rowspan='" + v + "' colspan='" + h + "' data-axis='" + d + "' data-tuple='" + x + "' data-member='" + t + "'>" + ( q ? e : "") + w + "</th>")
            }
        },
        _renderPivotRecord: function (f, n) {
            var j, k = this.options.primaryKey, d = this.options.accessibilityRendering, h = this, g = "", e = this.options.columns, m, o = "", l = this.element.data("igPivotGrid")._rowsMatrix;
            g += "<tr";
            if (n % 2 !== 0 && this.options.alternateRowStyles) {
                g += ' class="' + h.css.recordAltClass + '"'
            }
            if (!b(k)) {
                g += ' data-id="' + this._kval_from_key(k, f) + '"'
            } else {
                if (!b(f.ig_pk)) {
                    g += ' data-id="' + f.ig_pk + '"'
                }
            }
            if (this.options.virtualization && this.options.virtualizationMode === "continuous") {
                g += ' data-row-idx="' + n + '"'
            }
            if (d) {
                g += ' role="row">'
            } else {
                g += ">"
            }
            for (j = 0; j < l[n].length; j++) {
                if (l[n][j]) {
                    o += l[n][j]
                }
            }
            if (o !== "") {
                g += o
            }
            if (e.length > 0) {
                m = true;
                a(e).each(function (i) {
                    if (e[i].hidden) {
                        return
                    }
                    m = false;
                    if (d) {
                        g += '<td role="gridcell" aria-describedby="' + this.key + '"'
                    } else {
                        g += "<td"
                    }
                    if (f[this.key] === undefined) {
                        if (h.options.rowTemplate && h.options.rowTemplate.length > 0) {
                            g += " ";
                            g += h._renderTemplatedCell(f, this)
                        } else {
                            g += ">";
                            g += h._renderCell(f[i], this)
                        }
                        g += "</td>"
                    } else {
                        if (h.options.rowTemplate && h.options.rowTemplate.length > 0) {
                            g += " ";
                            g += h._renderTemplatedCell(f, this)
                        } else {
                            g += ">";
                            g += h._renderCell(f[this.key], this)
                        }
                        g += "</td>"
                    }
                });
                if (m) {
                    g += '<td role="gridcell"></td>'
                }
            } else {
                if (a.type(f) === "array") {
                    for (j = 0; j < f.length; j++) {
                        if (d) {
                            g += '<td role="gridcell">' + f[j] + "</td>"
                        } else {
                            g += "<td>";
                            g += f[j];
                            g += "</td>"
                        }
                    }
                } else {
                    for (k in f) {
                        if (f.hasOwnProperty(k)) {
                            if (d) {
                                g += '<td role="gridcell" aria-describedby="' + k + '">' + f[k] + "</td>"
                            } else {
                                g += "<td>";
                                g += f[k];
                                g += "</td>"
                            }
                        }
                    }
                }
            }
            g += "</tr>";
            return g
        },
        destroy: function () {
            var d = a("#" + this.element.attr("id") + "_container_block");
            d.remove();
            a.Widget.prototype.destroy.call(this)
        }
    });
    a.extend(a.ui.igPivotGrid, {
        version: "12.2.20122.1021"
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