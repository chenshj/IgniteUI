﻿/*
 * Infragistics.Web.ClientUI Grid Paging 12.2.20122.1021
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
 *  ig.ui.editors.js
 *  ig.ui.shared.js
 *  ig.dataSource.js
 *	ig.util.js
 */
if (typeof (jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}

(function (a) {

    a.widget("ui.igGridPaging", {

        css: {
            pagerClass: "ui-widget ui-iggrid-pager ui-helper-clearfix ui-corner-bottom ui-widget-header ui-iggrid-footer",
            pageLink: "ui-iggrid-pagelink ui-helper-reset",
            page: "ui-iggrid-page ui-state-default ui-corner-all",
            pageHover: "ui-iggrid-page-hover ui-state-hover",
            pageList: "ui-helper-reset ui-iggrid-pagelist ui-iggrid-paging-item",
            pageLinkCurrent: "ui-iggrid-pagelinkcurrent",
            pageCurrent: "ui-iggrid-pagecurrent ui-state-active ui-corner-all",
            pageFocused: "ui-iggrid-pagefocused ui-state-focus",
            nextPage: "ui-iggrid-nextpage ui-iggrid-paging-item ui-state-default",
            prevPage: "ui-iggrid-prevpage ui-iggrid-paging-item ui-state-default",
            firstPage: "ui-iggrid-firstpage ui-iggrid-paging-item ui-state-default ui-corner-left",
            lastPage: "ui-iggrid-lastpage ui-iggrid-paging-item ui-state-default ui-corner-right",
            nextPageLabel: "ui-iggrid-nextpagelabel",
            prevPageLabel: "ui-iggrid-prevpagelabel",
            firstPageLabel: "ui-iggrid-firstpagelabel",
            lastPageLabel: "ui-iggrid-lastpagelabel",
            nextPageLabelDisabled: "ui-iggrid-nextpagelabeldisabled ui-state-disabled",
            prevPageLabelDisabled: "ui-iggrid-prevpagelabeldisabled ui-state-disabled",
            firstPageLabelDisabled: "ui-iggrid-firstpagelabeldisabled ui-state-disabled",
            lastPageLabelDisabled: "ui-iggrid-lastpagelabeldisabled ui-state-disabled",
            nextPageImage: "ui-iggrid-pageimg ui-iggrid-nextpageimg ui-icon ui-icon-triangle-1-e",
            prevPageImage: "ui-iggrid-pageimg ui-iggrid-prevpageimg ui-icon ui-icon-triangle-1-w",
            firstPageImage: "ui-iggrid-pageimg ui-iggrid-firstpageimg ui-icon ui-icon-arrowstop-1-w",
            lastPageImage: "ui-iggrid-pageimg ui-iggrid-lastpageimg ui-icon ui-icon-arrowstop-1-e",
            nextPageImageDisabled: "ui-iggrid-pageimg ui-iggrid-nextpageimgdisabled ui-icon ui-state-disabled ui-icon-triangle-1-e",
            prevPageImageDisabled: "ui-iggrid-pageimg ui-iggrid-prevpageimgdisabled ui-icon ui-state-disabled ui-icon-triangle-1-w",
            firstPageImageDisabled: "ui-iggrid-pageimg ui-iggrid-firstpageimgdisabled ui-icon ui-state-disabled ui-icon-arrowstop-1-w",
            lastPageImageDisabled: "ui-iggrid-pageimg ui-iggrid-lastpageimgdisabled ui-icon ui-state-disabled ui-icon-arrowstop-1-e",
            pagerRecordsLabel: "ui-iggrid-pagerrecordslabel ui-iggrid-results",
            pageSizeLabel: "ui-iggrid-pagesizelabel",
            pageSizeDropDown: "ui-iggrid-pagesizedropdown",
            pageSizeDropDownContainer: "ui-helper-clearfix ui-iggrid-pagesizedropdowncontainer",
            pageSizeDropDownContainerAbove: "ui-widget ui-helper-clearfix ui-iggrid-pagesizedropdowncontainerabove ui-iggrid-toolbar ui-widget-header and ui-corner-top",
            pageDropDownContainer: "ui-iggrid-pagedropdowncontainer",
            pageDropDownLabels: "ui-iggrid-pagedropdownlabels",
            pageDropDown: "ui-iggrid-pagedropdown",
            pagerRightAreaContainer: "ui-iggrid-paging",
            pagingResults: "ui-iggrid-results"
        },

        options: {
            pageSize: 25,
            recordCountKey: null,
            pageSizeUrlKey: null,
            pageIndexUrlKey: null,
            currentPageIndex: 0,
            type: null,
            showPageSizeDropDown: true,
            pageSizeDropDownLabel: a.ig.GridPaging.locale.pageSizeDropDownLabel,
            pageSizeDropDownTrailingLabel: a.ig.GridPaging.locale.pageSizeDropDownTrailingLabel,
            pageSizeDropDownLocation: "above",
            showPagerRecordsLabel: true,
            pagerRecordsLabelTemplate: a.ig.GridPaging.locale.pagerRecordsLabelTemplate,
            nextPageLabelText: a.ig.GridPaging.locale.nextPageLabelText,
            prevPageLabelText: a.ig.GridPaging.locale.prevPageLabelText,
            firstPageLabelText: a.ig.GridPaging.locale.firstPageLabelText,
            lastPageLabelText: a.ig.GridPaging.locale.lastPageLabelText,
            showFirstLastPages: true,
            showPrevNextPages: true,
            currentPageDropDownLeadingLabel: a.ig.GridPaging.locale.currentPageDropDownLeadingLabel,
            currentPageDropDownTrailingLabel: a.ig.GridPaging.locale.currentPageDropDownTrailingLabel,
            currentPageDropDownTooltip: a.ig.GridPaging.locale.currentPageDropDownTooltip,
            pageSizeDropDownTooltip: a.ig.GridPaging.locale.pageSizeDropDownTooltip,
            pagerRecordsLabelTooltip: a.ig.GridPaging.locale.pagerRecordsLabelTooltip,
            prevPageTooltip: a.ig.GridPaging.locale.prevPageTooltip,
            nextPageTooltip: a.ig.GridPaging.locale.nextPageTooltip,
            firstPageTooltip: a.ig.GridPaging.locale.firstPageTooltip,
            lastPageTooltip: a.ig.GridPaging.locale.lastPageTooltip,
            pageTooltipFormat: a.ig.GridPaging.locale.pageTooltipFormat,
            pageSizeList: [],
            pageCountLimit: 10,
            visiblePageCount: 5,
            defaultDropDownWidth: 70
        },

        events: {
            pageIndexChanging: "pageIndexChanging",
            pageIndexChanged: "pageIndexChanged",
            pageSizeChanging: "pageSizeChanging",
            pageSizeChanged: "pageSizeChanged",
            pagerRendering: "pagerRendering",
            pagerRendered: "pagerRendered"
        },

        _loadingIndicator: null,

        _isPaging: false,

        _create: function () {
        },

        _setOption: function (d, g) {
            var c, e, b, f;
            b = this.grid.element[0].id;
            f = a("#" + b + "_pager");
            a.Widget.prototype._setOption.apply(this, arguments);
            if (d === "type" || d === "showPageSizeDropDown" || d === "pageSizeDropDownLocation" || d === "showPagerRecordsLabel" || d === "visiblePageCount") {
                throw new Error(a.ig.Grid.locale.optionChangeNotSupported + " " + d)
            }
            if (d === "pageSize") {
                this.pageSize(g)
            } else {
                if (d === "currentPageIndex") {
                    this.pageIndex(g)
                } else {
                    if (d === "showFirstLastPages") {
                        if (g === true) {
                            f.find(".ui-iggrid-firstpage").show();
                            f.find(".ui-iggrid-lastpage").show()
                        } else {
                            f.find(".ui-iggrid-firstpage").hide();
                            f.find(".ui-iggrid-lastpage").hide()
                        }
                    } else {
                        if (d === "showPrevNextPages") {
                            if (g === true) {
                                f.find(".ui-iggrid-prevpage").show();
                                f.find(".ui-iggrid-nextpage").show()
                            } else {
                                f.find(".ui-iggrid-prevpage").hide();
                                f.find(".ui-iggrid-nextpage").hide()
                            }
                        } else {
                            if (d === "pageSizeList") {
                                if (a.type(g) === "string") {
                                    c = g.split(",")
                                } else {
                                    c = g
                                }
                                if (this._pageSizeDD) {
                                    this._pageSizeDD.igEditor("option", "listItems", c)
                                }
                            } else {
                                if (d === "nextPageLabelText") {
                                    e = f.find(".ui-iggrid-nextpagelabel");
                                    e = e.length === 0 ? f.find(".ui-iggrid-nextpagelabeldisabled") : e;
                                    e.text(g)
                                } else {
                                    if (d === "prevPageLabelText") {
                                        e = f.find(".ui-iggrid-prevpagelabel");
                                        e = e.length === 0 ? f.find(".ui-iggrid-prevpagelabeldisabled") : e;
                                        e.text(g)
                                    } else {
                                        if (d === "firstPageLabelText") {
                                            e = f.find(".ui-iggrid-firstpagelabel");
                                            e = e.length === 0 ? f.find(".ui-iggrid-firstpagelabeldisabled") : e;
                                            e.text(g)
                                        } else {
                                            if (d === "lastPageLabelText") {
                                                e = f.find(".ui-iggrid-lastpagelabel");
                                                e = e.length === 0 ? f.find(".ui-iggrid-nextpagelabeldisabled") : e;
                                                e.text(g)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        pageIndex: function (b) {
            if (b !== null && b !== undefined) {
                this._overrideLabel = true;
                this.options.currentPageIndex = b
            }
            if (b !== undefined && b !== null) {
                this.grid.element.trigger("iggriduisoftdirty", {
                    owner: this
                })
            }
            return this.grid.dataSource.pageIndex(b)
        },

        pageSize: function (c) {
            var b = true;
            if (c) {
                this.grid.dataSource.settings.paging.pageIndex = 0;
                this.options.currentPageIndex = 0;
                b = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                if (b) {
                    this._showLoading();
                    this.grid.dataSource.pageSize(c)
                }
                if (this._pageSizeDD) {
                    this._pageSizeDD.igEditor("value", c)
                }
            } else {
                return this.grid.dataSource.pageSize()
            }
        },

        _initLoadingIndicator: function () {
            this._loadingIndicator = this.grid.container().igLoading().data("igLoading").indicator()
        },

        _nextPage: function (b) {
            var c = true, d = true;
            c = this._trigger(this.events.pageIndexChanging, null, {
                newPageIndex: this.options.currentPageIndex + 1,
                currentPageIndex: this.options.currentPageIndex,
                owner: this
            });
            if (c) {
                if (this.options.currentPageIndex >= this.grid.dataSource.pageCount() - 1) {
                    return
                }
                this.options.currentPageIndex = this.options.currentPageIndex + 1;
                d = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                this._shouldFirePageIndexChanged = true;
                if (d) {
                    this._showLoading();
                    this._overrideLabel = true;
                    this.grid.dataSource.nextPage()
                }
            }
            if (b) {
                b.stopPropagation();
                b.preventDefault()
            }
        },

        _prevPage: function (b) {
            var c = true, d = true;
            c = this._trigger(this.events.pageIndexChanging, null, {
                newPageIndex: this.options.currentPageIndex - 1,
                currentPageIndex: this.options.currentPageIndex,
                owner: this
            });
            if (c) {
                if (this.options.currentPageIndex === 0) {
                    return
                }
                this.options.currentPageIndex = this.options.currentPageIndex - 1;
                d = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                this._shouldFirePageIndexChanged = true;
                if (d) {
                    this._showLoading();
                    this._overrideLabel = true;
                    this.grid.dataSource.prevPage()
                }
            }
            if (b) {
                b.stopPropagation();
                b.preventDefault()
            }
        },

        _firstPage: function (b) {
            var c = true, d = true;
            c = this._trigger(this.events.pageIndexChanging, null, {
                newPageIndex: 0,
                currentPageIndex: this.options.currentPageIndex,
                owner: this
            });
            if (c) {
                d = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                this._shouldFirePageIndexChanged = true;
                if (d) {
                    this._showLoading();
                    this.pageIndex(0)
                }
            }
            if (b) {
                b.stopPropagation();
                b.preventDefault()
            }
        },

        _lastPage: function (b) {
            var c = true, d = true;
            c = this._trigger(this.events.pageIndexChanging, null, {
                newPageIndex: this.grid.dataSource.pageCount() - 1,
                currentPageIndex: this.options.currentPageIndex,
                owner: this
            });
            if (c) {
                d = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                this._shouldFirePageIndexChanged = true;
                if (d) {
                    this._showLoading();
                    this.pageIndex(this.grid.dataSource.pageCount() - 1)
                }
            }
            if (b) {
                b.stopPropagation();
                b.preventDefault()
            }
        },

        _showLoading: function () {
            this._loadingIndicator.show()
        },

        _hideLoading: function () {
            this._loadingIndicator.hide()
        },

        _bindEvents: function (f) {
            var g = this, b = this.grid, d = true, c, e = true;
            c = "#" + b.element[0].id + "_pager";
            a(c + " li a").bind({
                mousedown: function (h) {
                    var i = a(h.target).parent().data("pageIndex");
                    if (a.type(i) === "number" && i !== g.options.currentPageIndex) {
                        d = g._trigger(g.events.pageIndexChanging, h, {
                            newPageIndex: i,
                            currentPageIndex: g.options.currentPageIndex,
                            owner: g
                        });
                        g._shouldFirePageIndexChanged = true;
                        if (d) {
                            e = g.grid._trigger(g.grid.events.dataBinding, null, {
                                owner: g.grid
                            });
                            if (e) {
                                g._showLoading(b.element.children("tbody"));
                                g.pageIndex(i)
                            }
                        }
                    }
                }
            });
            a(c + " li").bind({
                mouseover: function (h) {
                    a(h.currentTarget).addClass(g.css.pageHover)
                },
                mouseout: function (h) {
                    a(h.currentTarget).removeClass(g.css.pageHover)
                }
            })
        },

        _gridRendered: function (b) {
            if (this.options.showPageSizeDropDown === true && this.options.pageSizeDropDownLocation === "above" && !this._pageSizeDropDownRendered) {
                this._renderPageSizeDropDown(b, true);
                if (this.grid.options.autoAdjustHeight) {
                    this.grid._initializeHeights();
                    this.grid._adjustLastColumnWidth()
                }
                if (this.grid.options.caption !== null) {
                    a("#" + this.grid.element[0].id + "_caption").removeClass("ui-corner-top")
                }
            }
        },

        _dataRendered: function () {
            var g = this.grid.element[0].id, k, f, e, o = toStaticHTML('<div id="' + g + '_pager"></div>'), l = toStaticHTML('<li class="${pageClass}"><a class="${pageLinkClass}" href="javascript:void(0);">${page}</a></li>'), n = null, v = 0, d = 0, r = 0, h = 0, j = true, m, q, b, u = 0, c = 0, w = this.options.pagerRecordsLabelTemplate, t = this, p = null, y = this.options.visiblePageCount, x = 0, s = null;
            this._deleteOld();
            j = this._trigger(this.events.pagerRendering, null, {
                dataSource: this.grid.dataSource,
                owner: this
            });
            if (j) {
                if (this.grid._shouldResetPaging) {
                    this.options.currentPageIndex = 0;
                    this.grid._shouldResetPaging = false
                }
                if (a("#" + g + "_pager_label").length > 0) {
                    a("#" + g + "_pager .ui-iggrid-paging").remove()
                } else {
                    a("#" + g + "_pager").empty()
                }
                this._initLoadingIndicator();
                if (this.grid.dataSource.pageSizeDirty()) {
                    this.options.currentPageIndex = this.grid.dataSource.pageIndex();
                    this.grid.dataSource.pageSizeDirty(false)
                }
                if (a("#" + g + "_pager").length === 0) {
                    g = this.grid.element[0].id;
                    n = a(o).appendTo("#" + g + "_container")
                } else {
                    n = a("#" + g + "_pager")
                }
                n.addClass(this.css.pagerClass);
                if (this.options.showPagerRecordsLabel) {
                    r = this.grid.dataSource.totalRecordsCount() > 0 ? this.grid.dataSource.totalRecordsCount() : this.grid.dataSource.totalLocalRecordsCount();
                    v = this.options.currentPageIndex === 0 ? 1 : this.options.currentPageIndex * this.pageSize() + 1;
                    if (this.grid.dataSource._filter) {
                        r = this.grid.dataSource._filteredData.length;
                        h = this.grid.dataSource._filteredData.length
                    } else {
                        h = this.grid.dataSource.totalLocalRecordsCount()
                    }
                    d = this.options.currentPageIndex === 0 && this.pageSize() <= r ? this.pageSize() : v + this.pageSize() > r ? r : (v - 1) + this.pageSize();
                    if (this.grid.dataSource.totalLocalRecordsCount() === 0) {
                        v = 0;
                        d = 0
                    }
                    if (d > h && this.options.type === "local") {
                        d = h
                    }
                    if (this._overrideLabel || !this.grid.dataSource._filter) {
                        a("#" + n[0].id + "_label").remove();
                        w = w.replace("${startRecord}", v).replace("${endRecord}", d).replace("${recordCount}", r);
                        s = a("<span>" + w + "</span>").appendTo(n).attr("id", n[0].id + "_label").addClass(this.css.pagerRecordsLabel).attr("title", this.options.pagerRecordsLabelTooltip).show()
                    } else {
                        if (a("#" + n[0].id + "_label").length === 0) {
                            s = a("<span></span>").appendTo(n).attr("id", n[0].id + "_label").addClass(this.css.pagerRecordsLabel).attr("title", this.options.pagerRecordsLabelTooltip).show()
                        }
                    }
                    if (s) {
                        s.data("hideflag", false)
                    }
                    a(n[0].id + "_label").show();
                    this._overrideLabel = false
                }
                k = this.grid.dataSource.pageCount();
                p = a("<div></div>").appendTo(n).addClass(this.css.pagerRightAreaContainer);
                if (this.options.showFirstLastPages === true) {
                    this._renderFirstPage(p)
                }
                if (this.options.showPrevNextPages === true) {
                    this._renderPrevPage(p)
                }
                if (this.grid.dataSource.pageCount() <= this.options.pageCountLimit) {
                    m = a("<ul></ul>").appendTo(p).addClass(this.css.pageList);
                    a("#" + g + "_pager").delegate("li a", {
                        keydown: function (i) {
                            if (i.keyCode === a.ui.keyCode.ENTER || i.keyCode === a.ui.keyCode.SPACE) {
                                t._showLoading();
                                t.pageIndex(a(i.currentTarget).closest("li").data("pageIndex"));
                                i.stopPropagation();
                                i.preventDefault()
                            }
                        },
                        focus: function (i) {
                            a(i.currentTarget).closest("li").addClass(t.css.pageFocused)
                        },
                        blur: function (i) {
                            a(i.currentTarget).closest("li").removeClass(t.css.pageFocused)
                        }
                    });
                    x = Math.floor(parseInt(y, 10) / 2);
                    u = this.options.currentPageIndex - x;
                    if (u < 0) {
                        u = 0
                    }
                    c = this.options.currentPageIndex + x;
                    if (this.options.currentPageIndex - u < x) {
                        c += x - (this.options.currentPageIndex - u)
                    }
                    if (this.grid.dataSource.pageCount() - (this.options.currentPageIndex + 1) < x && y % 2 !== 0) {
                        u = u - (x - (this.grid.dataSource.pageCount() - (this.options.currentPageIndex + 1)))
                    }
                    if (c >= this.grid.dataSource.pageCount()) {
                        c = this.grid.dataSource.pageCount() - 1
                    }
                    if (u < 0) {
                        u = 0
                    }
                    if (y % 2 === 0 && c - u < y - 1) {
                        u -= (y - 1) - (c - u)
                    }
                    if (u < 0) {
                        u = 0
                    }
                    for (f = u; f <= c && f - u < y; f++) {
                        e = l.replace("${page}", (f + 1)).replace("${pageLinkClass}", f === this.options.currentPageIndex ? this.css.pageLinkCurrent : this.css.pageLink);
                        e = e.replace("${pageClass}", f === this.options.currentPageIndex ? this.css.pageCurrent : this.css.page);
                        a(e).appendTo(m).attr("title", this.options.pageTooltipFormat.replace("${index}", f + 1)).data("pageIndex", f)
                    }
                } else {
                    q = [];
                    for (f = 1; f <= k; f++) {
                        q.push(f + this._empty())
                    }
                    b = a("<div></div>").appendTo(p).addClass(this.css.pageDropDownContainer).attr("title", this.options.currentPageDropDownTooltip);
                    a("<span></span>").appendTo(b).text(this.options.currentPageDropDownLeadingLabel).addClass(this.css.pageDropDownLabels);
                    this._curPageDD = a("<span />").css("display", "none").appendTo(b).addClass(this.css.pageDropDownContainer).igEditor({
                        listItems: q,
                        readOnly: false,
                        listMatchOnly: true,
                        width: this.options.defaultDropDownWidth,
                        nullable: false,
                        listAutoComplete: true,
                        button: "dropdown",
                        type: "text",
                        value: this.options.currentPageIndex + 1,
                        dropDownTriggers: "button,focus",
                        textChanged: a.proxy(this._dropDownPageIndex, this)
                    }).css("display", "");
                    a("<span></span>").appendTo(b).text(this.options.currentPageDropDownTrailingLabel.replace("${count}", this.grid.dataSource.pageCount())).addClass(this.css.pageDropDownLabels)
                }
                if (this.options.showPrevNextPages === true) {
                    this._renderNextPage(p)
                }
                if (this.options.showFirstLastPages === true) {
                    this._renderLastPage(p)
                }
                if (this.options.showPageSizeDropDown && this.options.pageSizeDropDownLocation === "inpager") {
                    this._renderPageSizeDropDown(p)
                }
                this._bindEvents(n);
                this._hideLoading(this.grid.element.children("tbody"));
                n.show();
                this._trigger(this.events.pagerRendered, null, {
                    dataSource: this.grid.dataSource,
                    owner: this
                });
                if (this._shouldFirePageIndexChanged) {
                    this._shouldFirePageIndexChanged = false;
                    this._trigger(this.events.pageIndexChanged, null, {
                        pageIndex: this.options.currentPageIndex,
                        owner: this
                    })
                }
            }
        },

        _dropDownPageIndex: function (c, b) {
            var d = true, e = true;
            d = this._trigger(this.events.pageIndexChanging, null, {
                newPageIndex: parseInt(b.text, 10) - 1,
                currentPageIndex: this.options.currentPageIndex,
                owner: this
            });
            if (d) {
                e = this.grid._trigger(this.grid.events.dataBinding, null, {
                    owner: this.grid
                });
                if (e) {
                    this._shouldFirePageIndexChanged = true;
                    if (b.text) {
                        this._showLoading();
                        this.pageIndex(parseInt(b.text, 10) - 1)
                    }
                }
                this.grid.element.trigger("iggriduisoftdirty", {
                    owner: this
                })
            }
        },

        _renderPrevPage: function (c) {
            var d, e = this, b;
            d = a("<div></div>").appendTo(c).addClass(this.css.prevPage).attr("title", this.options.prevPageTooltip);
            if (this.options.currentPageIndex === 0) {
                a("<span></span>").appendTo(d).addClass(this.css.prevPageImageDisabled);
                a("<span></span>").appendTo(d).addClass(this.css.prevPageLabelDisabled).append(this.options.prevPageLabelText)
            } else {
                d.bind("mousedown", a.proxy(this._prevPage, this));
                b = a("<span></span>").appendTo(d).addClass(this.css.prevPageImage);
                a("<span></span>").appendTo(d).addClass(this.css.prevPageLabel).append(this.options.prevPageLabelText);
                b.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));
                b.parent().bind({
                    keydown: function (f) {
                        if (f.keyCode === a.ui.keyCode.ENTER || f.keyCode === a.ui.keyCode.SPACE) {
                            e._prevPage();
                            f.stopPropagation();
                            f.preventDefault()
                        }
                    },
                    focus: function (f) {
                        a(f.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")
                    },
                    blur: function (f) {
                        a(f.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")
                    }
                })
            }
        },

        _renderNextPage: function (d) {
            var c, e, f = this, b;
            c = a("<div></div>").appendTo(d).addClass(this.css.nextPage).attr("title", this.options.nextPageTooltip);
            e = this.grid.dataSource.totalRecordsCount() > 0 ? this.grid.dataSource.totalRecordsCount() : this.grid.dataSource.data().length;
            if (this.options.currentPageIndex === this.grid.dataSource.pageCount() - 1) {
                a("<span></span>").appendTo(c).addClass(this.css.nextPageLabelDisabled).append(this.options.nextPageLabelText);
                a("<span></span>").appendTo(c).addClass(this.css.nextPageImageDisabled)
            } else {
                c.bind("mousedown", a.proxy(this._nextPage, this));
                a("<span></span>").appendTo(c).addClass(this.css.nextPageLabel).append(this.options.nextPageLabelText);
                b = a("<span></span>").appendTo(c).addClass(this.css.nextPageImage);
                b.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));
                b.parent().bind({
                    keydown: function (g) {
                        if (g.keyCode === a.ui.keyCode.ENTER || g.keyCode === a.ui.keyCode.SPACE) {
                            f._nextPage();
                            g.stopPropagation();
                            g.preventDefault()
                        }
                    },
                    focus: function (g) {
                        a(g.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")
                    },
                    blur: function (g) {
                        a(g.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")
                    }
                })
            }
        },

        _renderFirstPage: function (d) {
            var b, e = this, c;
            b = a("<div></div>").appendTo(d).addClass(this.css.firstPage).attr("title", this.options.firstPageTooltip);
            if (this.options.currentPageIndex === 0) {
                a("<span></span>").appendTo(b).addClass(this.css.firstPageImageDisabled);
                a("<span></span>").appendTo(b).addClass(this.css.firstPageLabelDisabled).append(this.options.firstPageLabelText)
            } else {
                b.bind("mousedown", a.proxy(this._firstPage, this));
                c = a("<span></span>").appendTo(b).addClass(this.css.firstPageImage);
                a("<span></span>").appendTo(b).addClass(this.css.firstPageLabel).append(this.options.firstPageLabelText);
                c.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));
                c.parent().bind({
                    keydown: function (f) {
                        if (f.keyCode === a.ui.keyCode.ENTER || f.keyCode === a.ui.keyCode.SPACE) {
                            e._firstPage();
                            f.stopPropagation();
                            f.preventDefault()
                        }
                    },
                    focus: function (f) {
                        a(f.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")
                    },
                    blur: function (f) {
                        a(f.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")
                    }
                })
            }
        },

        _renderLastPage: function (d) {
            var c, e = this, b;
            c = a("<div></div>").appendTo(d).addClass(this.css.lastPage).attr("title", this.options.lastPageTooltip);
            if (this.options.currentPageIndex === this.grid.dataSource.pageCount() - 1) {
                a("<span></span>").appendTo(c).addClass(this.css.lastPageLabelDisabled).append(this.options.lastPageLabelText);
                a("<span></span>").appendTo(c).addClass(this.css.lastPageImageDisabled)
            } else {
                c.bind("mousedown", a.proxy(this._lastPage, this));
                a("<span></span>").appendTo(c).addClass(this.css.lastPageLabel).append(this.options.lastPageLabelText);
                b = a("<span></span>").appendTo(c).addClass(this.css.lastPageImage);
                b.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));
                b.parent().bind({
                    keydown: function (f) {
                        if (f.keyCode === a.ui.keyCode.ENTER || f.keyCode === a.ui.keyCode.SPACE) {
                            e._lastPage();
                            f.stopPropagation();
                            f.preventDefault()
                        }
                    },
                    focus: function (f) {
                        a(f.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")
                    },
                    blur: function (f) {
                        a(f.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")
                    }
                })
            }
        },

        _renderPageSizeDropDown: function (e, f) {
            var c = this.grid.id() + "_editor", b, d;
            b = this.options.pageSizeDropDownLocation === "above" ? this.css.pageSizeDropDownContainerAbove : this.css.pageSizeDropDownContainer;
            if (f) {
                e = a("<div></div>").prependTo(e).addClass(b)
            } else {
                e = a("<div></div>").appendTo(e).addClass(b)
            }
            e.attr("title", this.options.pageSizeDropDownTooltip);
            e = a("<div></div>").appendTo(e).addClass(this.css.pagingResults);
            if (f) {
                a("<span>" + this.options.pageSizeDropDownTrailingLabel + "</span>").prependTo(e).addClass(this.css.pageSizeLabel);
                a("<span></span>").prependTo(e).attr("id", c).addClass(this.css.pageSizeDropDown);
                a("<span>" + this.options.pageSizeDropDownLabel + "</span>").prependTo(e).addClass(this.css.pageSizeLabel)
            } else {
                a("<span>" + this.options.pageSizeDropDownLabel + "</span>").appendTo(e).addClass(this.css.pageSizeLabel);
                a("<span></span>").appendTo(e).attr("id", c).addClass(this.css.pageSizeDropDown);
                a("<span>" + this.options.pageSizeDropDownTrailingLabel + "</span>").appendTo(e).addClass(this.css.pageSizeLabel)
            }
            d = (this.options.pageSizeList === null || this.options.pageSizeList.length === 0) ? [5, 10, 20, 25, 50, 75, 100] : this.options.pageSizeList;
            if (a.type(d) === "string") {
                d = d.split(",")
            }
            this._pageSizeDD = a("#" + c).css("display", "none").igEditor({
                width: this.options.defaultDropDownWidth,
                button: "dropdown",
                dropDownOnReadOnly: true,
                dropDownTriggers: "button,focus",
                listItems: d,
                listMatchOnly: true,
                readOnly: true,
                textAlign: "left",
                type: "numeric",
                value: this.pageSize(),
                textChanged: a.proxy(this._changePageSize, this)
            }).css("display", "");
            this._pageSizeDropDownRendered = true;
            this._trigger("pagingdropdownrendered")
        },

        _changePageSize: function (c, b) {
            var d = true, e = parseInt(b.text, 10);
            d = this._trigger(this.events.pageSizeChanging, null, {
                currentPageSize: this.pageSize(),
                newPageSize: e,
                owner: this
            });
            if (d) {
                this.grid.element.trigger("iggriduidirty", {
                    owner: this
                });
                this.pageSize(e);
                this._trigger(this.events.pageSizeChanged, null, {
                    pageSize: e,
                    owner: this
                })
            }
        },

        _deleteOld: function (b) {
            if (this._curPageDD) {
                this._curPageDD.igEditor("destroy");
                delete this._curPageDD
            }
            if (this._pageSizeDD && (b || this.options.pageSizeDropDownLocation === "inpager")) {
                this._pageSizeDD.igEditor("destroy");
                delete this._pageSizeDD
            }
        },

        destroy: function () {
            var b = a("#" + this.grid.element[0].id + "_pager");
            this.pageSize(0);
            this._deleteOld(true);
            if (this.options.showPageSizeDropDown === true && this.options.pageSizeDropDownLocation === "above") {
                a("#" + this.grid.container()[0].id + " .ui-iggrid-pagesizedropdowncontainerabove").remove()
            }
            b.remove();
            a.Widget.prototype.destroy.call(this);
            return this
        },

        _injectGrid: function (b, c) {
            this.grid = b;
            if (this.options.type === null) {
                this.options.type = this.grid._inferOpType()
            }
            this.grid.dataSource.settings.paging.type = this.options.type || "remote";
            this.grid.dataSource.settings.paging.pageIndex = this.options.currentPageIndex;
            this.grid.dataSource.settings.paging.pageSize = parseInt(this.options.pageSize, 10);
            if (this.options.pageSizeUrlKey !== null && this.options.pageIndexUrlKey) {
                this.grid.dataSource.settings.paging.pageSizeUrlKey = this.options.pageSizeUrlKey;
                this.grid.dataSource.settings.paging.pageIndexUrlKey = this.options.pageIndexUrlKey
            }
            if (this.options.recordCountKey !== null) {
                this.grid.dataSource.settings.responseTotalRecCountKey = this.options.recordCountKey
            }
            this.grid.dataSource.settings.paging.enabled = true;
            if (this._pageSizeDD) {
                this._pageSizeDD.igEditor("option", "value", this.options.pageSize)
            }
        },

        _empty: function () {
            return ""
        }

    });

    a.extend(a.ui.igGridPaging, {
        version: "12.2.20122.1021"
    })

}(jQuery));