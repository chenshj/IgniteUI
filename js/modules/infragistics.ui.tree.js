﻿/*
 * Infragistics.Web.ClientUI Tree localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.Tree) {
    $.ig.Tree = {};
    $.extend($.ig.Tree, {
        locale: {
            invalidArgumentType: "Invalid argument type provided.",
            errorOnRequest: "An error has occurred while retrieving data: ",
            noDataSourceUrl: "The igTree control requires a dataSourceUrl provided in order to initiate a request for data to that URL.",
            incorrectPath: "A node was not found at the provided path: ",
            incorrectNodeObject: "The provided argument is not a jQuery node element.",
            setOptionError: "Runtime changes are not allowed for the following option: ",
            moveTo: "<strong>Move to</strong> {0}",
            moveBetween: "<strong>Move between</strong> {0} and {1}",
            moveAfter: "<strong>Move after</strong> {0}",
            moveBefore: "<strong>Move before</strong> {0}",
            copyTo: "<strong>Copy to</strong> {0}",
            copyBetween: "<strong>Copy between</strong> {0} and {1}",
            copyAfter: "<strong>Copy after</strong> {0}",
            copyBefore: "<strong>Copy before</strong> {0}",
            and: "and"
        }
    });
    /*
     * Infragistics.Web.ClientUI Tree 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     *  jquery-1.4.4.js
     *	jquery.ui.core.js
     *	jquery.ui.widget.js
     *	jquery.ui.draggable.js
     *	jquery.ui.droppable.js
     *	infragistics.templating.js
     *	infragistics.dataSource.js
     *  infragistics.ui.shared.js
     *	infragistics.util.js
     *	infragistics.ui.tree-en.js
     */
}
if (typeof jQuery !== "function") {
    throw new Error("jQuery is undefined")
}
( function (a) {
    a.widget("ui.igTree", {
        _const: {
            dragCursorAt: {
                top: -10,
                left: -10
            }
        },
        css: {
            tree: "ui-widget ui-igtree",
            treeCollection: "ui-igtree-collection",
            treeNode: "ui-igtree-node",
            treeRoot: "ui-igtree-root ui-widget-content",
            treeRootNode: "ui-igtree-noderoot",
            nodeNoChildren: "ui-igtree-node-nochildren",
            parentNode: "ui-igtree-parentnode",
            collapseIcon: "ui-icon ui-icon-triangle-1-s",
            expandIcon: "ui-icon ui-icon-triangle-1-e",
            nodeExpander: "ui-igtree-expander",
            nodeNormal: "ui-state-default",
            nodeHightlight: "ui-state-highlight",
            nodeHovered: "ui-state-hover",
            nodeSelected: "ui-state-active",
            nodeActive: "ui-state-focus",
            checkbox: "ui-state-default ui-corner-all ui-igcheckbox-normal",
            checkboxOff: "ui-icon ui-icon-check ui-igcheckbox-normal-off",
            checkboxOn: "ui-icon ui-icon-check ui-igcheckbox-normal-on",
            checkboxPartial: "ui-icon ui-icon-check ui-state-disabled ui-igcheckbox-normal-on",
            invalidDropIndicator: "ui-widget ui-igtree-dropindicator ui-state-error ui-corner-all",
            dropIndicator: "ui-widget ui-igtree-dropindicator ui-state-highlight ui-corner-all",
            moveMarkupIcon: "ui-icon ui-icon-arrowthick-1-e",
            invalidMoveMarkupIcon: "ui-icon ui-icon-cancel",
            copyMarkupIcon: "ui-icon ui-icon-plus",
            insertLine: "ui-state-default ui-igtree-insertline"
        },
        options: {
            width: null,
            height: null,
            checkboxMode: "off",
            singleBranchExpand: false,
            hotTracking: true,
            parentNodeImageUrl: null,
            parentNodeImageClass: null,
            parentNodeImageTooltip: null,
            leafNodeImageUrl: null,
            leafNodeImageClass: null,
            leafNodeImageTooltip: null,
            animationDuration: 200,
            pathSeparator: "_",
            dataSource: null,
            dataSourceUrl: null,
            dataSourceType: null,
            responseDataKey: null,
            responseDataType: null,
            initialExpandDepth: -1,
            loadOnDemand: false,
            bindings: {
                textKey: "Text",
                textXPath: "@Text",
                valueKey: "Value",
                valueXPath: "@Value",
                imageUrlKey: "ImageUrl",
                imageUrlXPath: "@ImageUrl",
                navigateUrlKey: "NavigateUrl",
                navigateUrlXPath: "@NavigateUrl",
                targetKey: "Target",
                expandedKey: "Expanded",
                primaryKey: null,
                nodeContentTemplate: null,
                childDataProperty: "Nodes",
                childDataXPath: "Children",
                searchFieldXPath: "Nodes",
                bindings: {}
            },
            defaultNodeTarget: "_self",
            dragAndDrop: false,
            updateUrl: null,
            dragAndDropSettings: {
                allowDrop: false,
                dragAndDropMode: "default",
                dragOpacity: 0.75,
                revert: true,
                revertDuration: 500,
                zIndex: 10,
                dragStartDelay: 200,
                expandDelay: 1000,
                helper: "default",
                customDropValidation: null,
                containment: false,
                invalidMoveToMarkup: "<div><p><span></span><strong>{0}</strong></p></div>",
                moveToMarkup: "<div><p><span></span><strong>Move to</strong> {0}</p></div>",
                moveBetweenMarkup: "<div><p><span></span><strong>Move between</strong> {0} and {1}</p></div>",
                moveAfterMarkup: "<div><p><span></span><strong>Move after</strong> {0}</p></div>",
                moveBeforeMarkup: "<div><p><span></span><strong>Move before</strong> {0}</p></div>",
                copyToMarkup: "<div><p><span></span><strong>Copy to</strong> {0}</p></div>",
                copyBetweenMarkup: "<div><p><span></span><strong>Copy between</strong> {0} and {1}</p></div>",
                copyAfterMarkup: "<div><p><span></span><strong>Copy after</strong> {0}</p></div>",
                copyBeforeMarkup: "<div><p><span></span><strong>Copy before</strong> {0}</p></div>"
            }
        },
        events: {
            dataBinding: "dataBinding",
            dataBound: "dataBound",
            rendering: "rendering",
            rendered: "rendered",
            selectionChanging: "selectionChanging",
            selectionChanged: "selectionChanged",
            nodeCheckstateChanging: "nodeCheckstateChanging",
            nodeCheckstateChanged: "nodeCheckstateChanged",
            nodePopulating: "nodePopulating",
            nodePopulated: "nodePopulated",
            nodeCollapsing: "nodeCollapsing",
            nodeCollapsed: "nodeCollapsed",
            nodeExpanding: "nodeExpanding",
            nodeExpanded: "nodeExpanded",
            nodeClick: "nodeClick",
            nodeDoubleClick: "nodeDoubleClick",
            dragStart: "dragStart",
            drag: "drag",
            dragStop: "dragStop",
            nodeDropping: "nodeDropping",
            nodeDropped: "nodeDropped"
        },
        widget: function () {
            return this.element
        },
        _createWidget: function (c, b) {
            this.options.bindings = null;
            this.options.dragAndDropSettings.moveToMarkup = "<div><p><span></span>" + a.ig.Tree.locale.moveTo + "</p></div>";
            this.options.dragAndDropSettings.moveBetweenMarkup = "<div><p><span></span>" + a.ig.Tree.locale.moveBetween + "</p></div>";
            this.options.dragAndDropSettings.moveAfterMarkup = "<div><p><span></span>" + a.ig.Tree.locale.moveAfter + "</p></div>";
            this.options.dragAndDropSettings.moveBeforeMarkup = "<div><p><span></span>" + a.ig.Tree.locale.moveBefore + "</p></div>";
            this.options.dragAndDropSettings.copyToMarkup = "<div><p><span></span>" + a.ig.Tree.locale.copyTo + "</p></div>";
            this.options.dragAndDropSettings.copyBetweenMarkup = "<div><p><span></span>" + a.ig.Tree.locale.copyBetween + "</p></div>";
            this.options.dragAndDropSettings.copyAfterMarkup = "<div><p><span></span>" + a.ig.Tree.locale.copyAfter + "</p></div>";
            this.options.dragAndDropSettings.copyBeforeMarkup = "<div><p><span></span>" + a.ig.Tree.locale.copyBefore + "</p></div>";
            a.Widget.prototype._createWidget.apply(this, arguments)
        },
        _create: function () {
            var b = this.options;
            this.dataBind();
            this.element.addClass(this.css.tree);
            if (a.browser.msie && parseInt(a.browser.version, 10) === 7 && this.element.css("position") === "static") {
                this.element.css("position", "relative")
            }
            if (b.width) {
                this.element.css("width", b.width)
            }
            if (b.height) {
                this.element.css("height", b.height)
            }
        },
        _setOption: function (d, e) {
            var b = this.css, c;
            if (this.options[d] === e) {
                return
            }
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (d) {
                case"width":
                    this.element.css("width", e);
                    break;
                case"height":
                    this.element.css("height", e);
                    break;
                case"pathSeparator":
                    throw new Error(a.ig.Tree.locale.setOptionError + d);
                case"loadOnDemand":
                    throw new Error(a.ig.Tree.locale.setOptionError + d);
                case"initialExpandDepth":
                    throw new Error(a.ig.Tree.locale.setOptionError + d);
                case"parentNodeImageUrl":
                    c = this.element.find("img[data-role=parent-node-image]");
                    if (c.length > 0) {
                        c.attr("src", e)
                    } else {
                        throw new Error(a.ig.Tree.locale.setOptionError + d)
                    }
                    break;
                case"parentNodeImageTooltip":
                    c = this.element.find("img[data-role=parent-node-image]");
                    if (c.length <= 0) {
                        c = this.element.find("span[data-role=parent-node-image]")
                    }
                    if (c.length > 0) {
                        c.attr("title", e)
                    } else {
                        throw new Error(a.ig.Tree.locale.setOptionError + d)
                    }
                    break;
                case"parentNodeImageClass":
                    c = this.element.find("span[data-role=parent-node-image]");
                    if (c.length > 0) {
                        c.removeClass();
                        c.addClass(e)
                    } else {
                        throw new Error(a.ig.Tree.locale.setOptionError + d)
                    }
                    break;
                case"leafNodeImageUrl":
                    c = this.element.find("img[data-role=leaf-node-image]");
                    if (c.length > 0) {
                        c.attr("src", e)
                    } else {
                        throw new Error(a.ig.Tree.locale.setOptionError + d)
                    }
                    break;
                case"leafNodeImageTooltip":
                    c = this.element.find("img[data-role=leaf-node-image]");
                    if (c.length <= 0) {
                        c = this.element.find("span[data-role=leaf-node-image]")
                    }
                    if (c.length > 0) {
                        c.attr("title", e)
                    } else {
                        throw new Error(a.ig.Tree.locale.setOptionError + d)
                    }
                    break;
                case"leafNodeImageClass":
                    c = this.element.find("span[data-role=leaf-node-image]");
                    if (c.length > 0) {
                        c.removeClass();
                        c.addClass(e)
                    } else {
                        throw new Error(a.ig.Tree.locale.setOptionError + d)
                    }
                    break;
                case"hotTracking":
                    if (e) {
                        this.element.find("li > a").bind({
                            mouseover: function (f) {
                                a(f.target).addClass(b.nodeHovered)
                            },
                            mouseout: function (f) {
                                a(f.target).removeClass(b.nodeHovered)
                            }
                        })
                    } else {
                        this.element.find("li > a").unbind("mouseover");
                        this.element.find("li > a").unbind("mouseout")
                    }
                    break;
                case"checkboxMode":
                    if (e.toLowerCase() === "off") {
                        this._removeCheckboxes()
                    }
                    break;
                case"dataSource":
                    this.dataBind();
                    break;
                case"dragAndDrop":
                    if (e) {
                        this._initDragAndDrop()
                    } else {
                        this._destroyDragAndDrop()
                    }
                    break;
                case"updateUrl":
                    this.options.dataSource.root().settings.updateUrl = e;
                    break;
                default:
                    break
            }
        },
        _removeCheckboxes: function () {
            this.element.find("span[data-role=checkbox]").remove()
        },
        _initDataOptions: function () {
            var b, d, c;
            c = this._initDataSourceSchema();
            if (!this.options.dataSource && !this.options.dataSourceUrl) {
                if (!this.element.is("ul")) {
                    d = this.element.children("ul");
                    this.options.dataSource = d[0]
                } else {
                    this.options.dataSource = this.element[0]
                }
            } else {
                if (!this.options.dataSource && this.options.dataSourceUrl) {
                    this.options.dataSource = this.options.dataSourceUrl
                }
            }
            b = {
                callback: this._constructFromData,
                callee: this,
                dataSource: this.options.dataSource,
                defaultChildrenDataProperty: this.options.bindings.childDataProperty,
                responseDataType: this.options.responseDataType,
                primaryKey: this.options.primaryKey,
                localSchemaTransform: this.options.dataSourceType && this.options.dataSourceType === "xml" ? true : false,
                schema: c,
                updateUrl: this.options.updateUrl
            };
            if (this.options.dataSourceType) {
                b.type = this.options.dataSourceType
            }
            if (this.options.responseDataKey) {
                b.responseDataKey = this.options.responseDataKey
            }
            return b
        },
        _initDataSourceSchema: function () {
            var d = {}, c = this.options, b = c.bindings;
            if (b === null) {
                c.bindings = {};
                d.text = {
                    name: "Text",
                    type: "string"
                };
                c.bindings.textKey = "Text";
                d.value = {
                    name: "Value",
                    type: "string"
                };
                c.bindings.valueKey = "Value";
                d.imageUrl = {
                    name: "ImageUrl",
                    type: "string"
                };
                c.bindings.imageUrlKey = "ImageUrl";
                d.navigateUrl = {
                    name: "NavigateUrl",
                    type: "string"
                };
                c.bindings.navigateUrlKey = "NavigateUrl";
                d.childData = {
                    name: "Nodes",
                    type: "object"
                };
                c.bindings.childDataProperty = "Nodes";
                d.target = {
                    name: "Target",
                    type: "string"
                };
                c.bindings.targetKey = "Target";
                b = c.bindings
            } else {
                if (c.dataSourceType === "xml") {
                    if (b.searchFieldXPath) {
                        d.searchField = b.searchFieldXPath
                    }
                }
            }
            d.fields = [];
            if (b.textKey) {
                d.fields.push({
                    name: b.textKey,
                    type: "string",
                    xpath: b.textXPath
                });
                d.textKey = b.textKey
            }
            if (b.valueKey) {
                d.fields.push({
                    name: b.valueKey,
                    type: "string",
                    xpath: b.valueXPath
                });
                d.valueKey = b.valueKey
            }
            if (b.navigateUrlKey) {
                d.fields.push({
                    name: b.navigateUrlKey,
                    type: "string",
                    xpath: b.navigateUrlXPath
                });
                d.navigateUrlKey = b.navigateUrlKey
            }
            if (b.imageUrlKey) {
                d.fields.push({
                    name: b.imageUrlKey,
                    type: "string",
                    xpath: b.imageUrlXPath
                });
                d.imageUrlKey = b.imageUrlKey
            }
            if (b.targetKey) {
                d.fields.push({
                    name: b.targetKey,
                    type: "string"
                });
                d.targetKey = b.targetKey
            }
            if (b.expandedKey) {
                d.fields.push({
                    name: "Expanded",
                    type: "boolean"
                });
                d.expandedKey = b.expandedKey
            }
            if (b.primaryKey) {
                d.fields.push({
                    name: b.primaryKey,
                    type: "string"
                });
                d.primaryKey = b.primaryKey
            }
            if (b.childDataProperty) {
                d.fields.push({
                    name: b.childDataProperty,
                    type: "object",
                    xpath: b.childDataXPath
                });
                d.childDataProperty = b.childDataProperty
            }
            if (!d.searchField && c.responseDataKey) {
                d.searchField = c.responseDataKey
            }
            return d
        },
        _initDataSource: function (b) {
            var c = this.options;
            if (!(c.dataSource instanceof a.ig.HierarchicalDataSource)) {
                c.dataSource = new a.ig.HierarchicalDataSource(b)
            }
        },
        _helper: null,
        _insertLine: {
            html: null
        },
        _originalHelper: {
            html: null
        },
        _sourceNode: {
            data: null,
            element: null,
            owner: null
        },
        _validationObject: {
            valid: true,
            dropAfter: true,
            expandTimeout: null,
            target: null
        },
        _helperDirty: false,
        _dropAfter: true,
        _initDragOptions: function () {
            var e = this, b = e.options.dragAndDropSettings, c = b.helper === "default" ? function (f) {
                var h = a(f.target).closest("li[data-role=node]"), g = a(e.options.dragAndDropSettings.invalidMoveToMarkup.replace("{0}", h.children("a").text()));
                g.addClass(e.css.invalidDropIndicator).find("span").addClass(e.css.invalidMoveMarkupIcon);
                return g
            } : b.helper, d = {
                revert: b.revert ? "invalid" : false,
                opacity: b.dragOpacity,
                zIndex: b.zIndex,
                cursorAt: this._const.dragCursorAt,
                helper: c,
                revertDuration: b.revertDuration,
                appendTo: e.element,
                delay: b.dragStartDelay,
                containment: b.containment,
                start: function (f, i) {
                    var h = e.nodeFromElement(a(this)), g;
                    g = e._triggerDragStart(f, i, h.element);
                    if (g) {
                        e._originalHelper.html = i.helper.html();
                        e._sourceNode.data = a.extend(true, {}, h.data);
                        e._sourceNode.owner = e;
                        e._sourceNode.element = a(this)
                    } else {
                        return false
                    }
                },
                drag: function (f, h) {
                    var g = e._triggerDrag(f, h, e._sourceNode.element);
                    if (g) {
                        e._performDrag(f, h)
                    } else {
                        return false
                    }
                },
                stop: function (f, g) {
                    e._triggerDragStop(f, g);
                    a(document).find("div[data-role=insert-line]").remove();
                    e._helperDirty = false;
                    e._resetSourceNode();
                    e._resetValidationObject()
                }
            };
            return d
        },
        _performDrag: function (d, i) {
            var g = a(d.originalEvent.target), e, b = (d.ctrlKey && this.options.dragAndDropSettings.dragAndDropMode === "default") || this.options.dragAndDropSettings.dragAndDropMode === "copy", h, c, f = this;
            if (g.is("div[data-role=insert-line]")) {
                return
            }
            this._validationObject.valid = this._accept(this._sourceNode.element, g);
            a(document).find("div[data-role=insert-line]").remove();
            if ((g.is("a") || g.closest("a").parent().is("li[data-role=node]")) && this._validationObject.target !== g.closest("li[data-role=node]")) {
                clearTimeout(this._validationObject.expandTimeout);
                this._validationObject.target = g.closest("li[data-role=node]");
                if (this._validationObject.target.hasClass("ui-igtree-parentnode")) {
                    this._validationObject.expandTimeout = setTimeout(function () {
                        f.expand(f._validationObject.target)
                    }, this.options.dragAndDropSettings.expandDelay)
                }
            } else {
                clearTimeout(this._validationObject.expandTimeout);
                this._validationObject.expandTimeout = null;
                this._validationObject.target = null
            }
            if ((g.is("a") || g.closest("a").parent().is("li[data-role=node]")) && this._validationObject.valid) {
                if (b) {
                    e = a(this.options.dragAndDropSettings.copyToMarkup.replace("{0}", g.text()));
                    e.find("span").addClass(this.css.copyMarkupIcon)
                } else {
                    e = a(this.options.dragAndDropSettings.moveToMarkup.replace("{0}", g.text()));
                    e.find("span").addClass(this.css.moveMarkupIcon)
                }
                this._helper = e.html();
                i.helper.removeClass(this.css.invalidDropIndicator).addClass(this.css.dropIndicator).html(this._helper);
                this._helperDirty = true
            } else {
                if (g.is("li[data-role=node]") && this._validationObject.valid) {
                    h = g.offset().top + g.height() / 2;
                    c = i.offset.top + this._const.dragCursorAt.top;
                    if (c > h) {
                        this._validationObject.dropAfter = true;
                        if (b) {
                            if (g.next("li[data-role=node]").length > 0) {
                                e = a(this.options.dragAndDropSettings.copyBetweenMarkup.replace("{0}", g.children("a").text()).replace("{1}", g.next("li[data-role=node]").children("a").text()));
                                e.find("span").addClass(this.css.copyMarkupIcon)
                            } else {
                                e = a(this.options.dragAndDropSettings.copyAfterMarkup.replace("{0}", g.children("a").text()));
                                e.find("span").addClass(this.css.copyMarkupIcon)
                            }
                        } else {
                            if (g.next("li[data-role=node]").length > 0) {
                                e = a(this.options.dragAndDropSettings.moveBetweenMarkup.replace("{0}", g.children("a").text()).replace("{1}", g.next("li[data-role=node]").children("a").text()));
                                e.find("span").addClass(this.css.moveMarkupIcon)
                            } else {
                                e = a(this.options.dragAndDropSettings.moveAfterMarkup.replace("{0}", g.children("a").text()));
                                e.find("span").addClass(this.css.moveMarkupIcon)
                            }
                        }
                        a(this._insertLine.html).appendTo(g);
                        this._helper = e.html();
                        i.helper.removeClass(this.css.invalidDropIndicator).addClass(this.css.dropIndicator).html(this._helper)
                    } else {
                        this._validationObject.dropAfter = false;
                        if (b) {
                            if (g.prev("li[data-role=node]").length > 0) {
                                e = a(this.options.dragAndDropSettings.copyBetweenMarkup.replace("{0}", g.children("a").text()).replace("{1}", g.prev("li[data-role=node]").children("a").text()));
                                e.find("span").addClass(this.css.copyMarkupIcon)
                            } else {
                                e = a(this.options.dragAndDropSettings.copyBeforeMarkup.replace("{0}", g.children("a").text()));
                                e.find("span").addClass(this.css.copyMarkupIcon)
                            }
                        } else {
                            if (g.prev("li[data-role=node]").length > 0) {
                                e = a(this.options.dragAndDropSettings.moveBetweenMarkup.replace("{0}", g.prev("li[data-role=node]").children("a").text()).replace("{1}", g.children("a").text()));
                                e.find("span").addClass(this.css.moveMarkupIcon)
                            } else {
                                e = a(this.options.dragAndDropSettings.moveBeforeMarkup.replace("{0}", g.children("a").text()));
                                e.find("span").addClass(this.css.moveMarkupIcon)
                            }
                        }
                        if (g.index() === 0) {
                            a(this._insertLine.html).prependTo(g).css("padding-bottom", "0.1em")
                        } else {
                            a(this._insertLine.html).appendTo(g.prev())
                        }
                        this._helper = e.html();
                        i.helper.removeClass(this.css.invalidDropIndicator).addClass(this.css.dropIndicator).html(this._helper)
                    }
                    this._helperDirty = true
                } else {
                    a(document).find("div[data-role=insert-line]").remove();
                    if (this._helperDirty) {
                        this._helper = null;
                        i.helper.removeClass(this.css.dropIndicator).addClass(this.css.invalidDropIndicator).html(this._originalHelper.html);
                        this._helperDirty = false
                    }
                }
            }
        },
        _resetSourceNode: function () {
            this._originalHelper.html = null;
            this._sourceNode.data = null;
            this._sourceNode.owner = null;
            this._sourceNode.element = null
        },
        _resetValidationObject: function () {
            this._validationObject.valid = true;
            this._validationObject.dropAfter = true;
            clearTimeout(this._validationObject.expandTimeout);
            this._validationObject.expandTimeout = null;
            this._validationObject.target = null
        },
        _initDropOptions: function () {
            var c = this, b = {
                tolerance: "pointer",
                greedy: true,
                drop: function (d, e) {
                    return c._performDrop(d, e)
                },
                accept: function (d) {
                    return c._validationObject.valid
                }
            };
            return b
        },
        _performDrop: function (b, g) {
            var e = this, d, f = a(b.originalEvent.target), c;
            if (f.is("div[data-role=insert-line]")) {
                f = f.closest("li[data-role=node]")
            }
            e.element.find("div[data-role=insert-line]").remove();
            c = e._triggerNodeDropping(b, g, f.closest("li[data-role=node]"), f.next("li[data-role=node]").length > 0 || !e._validationObject.dropAfter ? f.index() + (e._validationObject.dropAfter ? 1 : 0) : f.index());
            if (c) {
                if (f.is("a") || f.closest("a").parent().is("li[data-role=node]")) {
                    f = f.closest("li[data-role=node]");
                    switch (e.options.dragAndDropSettings.dragAndDropMode) {
                        case"move":
                            e.addNode(e._sourceNode.data, f);
                            e._sourceNode.owner.removeAt(e._sourceNode.element.attr("data-path"));
                            break;
                        case"copy":
                            e.addNode(e._sourceNode.data, f);
                            break;
                        default:
                            if (!b.ctrlKey) {
                                e.addNode(e._sourceNode.data, f);
                                e._sourceNode.owner.removeAt(e._sourceNode.element.attr("data-path"))
                            } else {
                                e.addNode(e._sourceNode.data, f)
                            }
                            break
                    }
                } else {
                    if (f.is("li")) {
                        d = e.parentNode(f);
                        switch (e.options.dragAndDropSettings.dragAndDropMode) {
                            case"move":
                                e.addNode(e._sourceNode.data, d, f.next("li[data-role=node]").length > 0 || !e._validationObject.dropAfter ? f.index() + (e._validationObject.dropAfter ? 1 : 0) : null);
                                e._sourceNode.element.attr("data-path", e._sourceNode.element.attr("data-path") + "_remove");
                                e._sourceNode.owner.removeAt(e._sourceNode.element.attr("data-path"));
                                break;
                            case"copy":
                                e.addNode(e._sourceNode.data, d, f.next("li[data-role=node]").length > 0 || !e._validationObject.dropAfter ? f.index() + (e._validationObject.dropAfter ? 1 : 0) : null);
                                break;
                            default:
                                if (!b.ctrlKey) {
                                    e.addNode(e._sourceNode.data, d, f.next("li[data-role=node]").length > 0 || !e._validationObject.dropAfter ? f.index() + (e._validationObject.dropAfter ? 1 : 0) : null);
                                    e._sourceNode.element.attr("data-path", e._sourceNode.element.attr("data-path") + "_remove");
                                    e._sourceNode.owner.removeAt(e._sourceNode.element.attr("data-path"))
                                } else {
                                    e.addNode(e._sourceNode.data, d, f.next("li[data-role=node]").length > 0 || !e._validationObject.dropAfter ? f.index() + (e._validationObject.dropAfter ? 1 : 0) : null)
                                }
                                break
                        }
                    }
                }
                e._triggerNodeDropped(b, g, f)
            } else {
                return false
            }
        },
        _accept: function (c, g) {
            var i = true, e = g.closest("li[data-role=node]"), d = c.attr("data-path"), h = g.closest(".ui-widget.ui-igtree"), f = this._retrieveCurrentDepthBinding(parseInt(this._sourceNode.element.closest("ul").attr("data-depth"), 10)), b;
            if (g.is("a") || g.closest("a").parent().is("li[data-role=node]")) {
                b = h.data("igTree")._retrieveCurrentDepthBinding(parseInt(g.closest("ul").attr("data-depth"), 10) + 1)
            } else {
                if (g.is("li[data-role=node]")) {
                    b = h.data("igTree")._retrieveCurrentDepthBinding(parseInt(g.closest("ul").attr("data-depth"), 10))
                } else {
                    b = false
                }
            }
            if (e.length <= 0) {
                i = false
            } else {
                if ((e.attr("data-path") === d || e.attr("data-path").indexOf(d) === 0) && this === h.data("igTree")) {
                    i = false
                } else {
                    if (this !== h.data("igTree") && !h.igTree("option", "dragAndDropSettings").allowDrop) {
                        i = false
                    } else {
                        if (typeof h.igTree("option", "dragAndDropSettings").customDropValidation === "function") {
                            i = h.igTree("option", "dragAndDropSettings").customDropValidation.apply(g, c)
                        }
                    }
                }
            }
            if (f && b && i) {
                i = this._validateBindings(f, b)
            }
            return i
        },
        _validateBindings: function (c, b) {
            var d = true;
            if (b.hasOwnProperty("primaryKey")) {
                if (!c.hasOwnProperty("primaryKey") || c.primaryKey !== b.primaryKey) {
                    d = false
                }
            }
            if (b.textKey !== c.textKey) {
                d = false
            }
            if (b.hasOwnProperty("valueKey") && c.hasOwnProperty("valueKey") && b.valueKey !== c.valueKey) {
                d = false
            }
            if (b.hasOwnProperty("childDataProperty") && c.hasOwnProperty("childDataProperty") && b.childDataProperty !== c.childDataProperty) {
                d = false
            }
            return d
        },
        _initDragAndDrop: function (d) {
            var b = this._initDragOptions(), c = this._initDropOptions();
            if (!this._insertLine.html) {
                this._insertLine.html = '<div data-role="insert-line" class="' + this.css.insertLine + '"></div>'
            }
            if (!d) {
                this.element.find("li[data-role=node]").draggable(b);
                this.element.droppable(c);
                this.element.find("a").mousedown(function (e) {
                    a(this).focus()
                })
            } else {
                d.draggable(b);
                d.find("li[data-role=node]").draggable(b);
                d.find("a").mousedown(function (e) {
                    a(this).focus()
                })
            }
        },
        _destroyDragAndDrop: function () {
            this.element.find("li[data-role=node]").draggable("destroy");
            this.element.droppable("destroy");
            this.element.find("a").unbind("mousedown")
        },
        _constructFromData: function () {
            var c, b = this.options.dataSource._rootds.data();
            this._triggerDataBound(b);
            this._triggerRendering(b);
            this.element.attr("data-scroll", true);
            if (this.element.is("ul")) {
                this.element.empty();
                c = this.element;
                c.addClass(this.css.treeCollection).addClass(this.css.treeRoot).attr("data-depth", 0);
                c.html(this._initChildrenRecursively("", b));
                this._attachEvents(c);
                this._triggerRendered()
            } else {
                this.element.empty();
                c = '<ul class="' + this.css.treeCollection + " " + this.css.treeRoot + '" data-depth="0">';
                c += this._initChildrenRecursively("", b);
                c += "</ul>";
                c = a(c);
                this._attachEvents(c);
                c.appendTo(this.element);
                this._triggerRendered()
            }
            if (this.options.dragAndDrop) {
                this._initDragAndDrop();
                if (typeof this.options.dragAndDropSettings.customDropValidation === "string") {
                    if (window.hasOwnProperty(this.options.dragAndDropSettings.customDropValidation) && typeof window[this.options.dragAndDropSettings.customDropValidation] === "function") {
                        this.options.dragAndDropSettings.customDropValidation = window[this.options.dragAndDropSettings.customDropValidation]
                    }
                }
            }
        },
        _attachEvents: function (d) {
            var e = this, b = this.css, c, f;
            d.find("span[data-role=expander]").bind("click", function (g) {
                e.toggle(a(g.target).closest("li[data-role=node]"), g)
            });
            if (this.options.hotTracking) {
                d.find("a").bind({
                    click: function (g) {
                        f = a(g.target).closest("a");
                        c = e._triggerNodeClick(g, f.parent());
                        if (c) {
                            e.select(f.parent(), g);
                            if (a.browser.webkit) {
                                f.focus()
                            }
                        } else {
                            g.preventDefault()
                        }
                    },
                    dblclick: function (g) {
                        g.preventDefault();
                        e._triggerNodeDoubleClick(g, a(g.target.parentNode))
                    },
                    keydown: function (g) {
                        e._kbNavigation(g)
                    },
                    focus: function (g) {
                        e._focusNode(g)
                    },
                    blur: function (g) {
                        e._blurNode(g)
                    },
                    mouseover: function (g) {
                        f = a(g.target).closest("a");
                        f.addClass(b.nodeHovered)
                    },
                    mouseout: function (g) {
                        f = a(g.target).closest("a");
                        f.removeClass(b.nodeHovered)
                    }
                })
            } else {
                d.find("a").bind({
                    click: function (g) {
                        f = a(g.target).closest("a");
                        c = e._triggerNodeClick(g, f.parent());
                        if (c) {
                            e.select(f.parent(), g);
                            if (a.browser.webkit) {
                                f.focus()
                            }
                        } else {
                            g.preventDefault()
                        }
                    },
                    dblclick: function (g) {
                        g.preventDefault();
                        e._triggerNodeDoubleClick(g, a(g.target.parentNode))
                    },
                    keydown: function (g) {
                        e._kbNavigation(g)
                    },
                    focus: function (g) {
                        e._focusNode(g)
                    },
                    blur: function (g) {
                        e._blurNode(g)
                    }
                })
            }
            d.find("span[data-role=checkbox] > span").bind({
                click: function (g) {
                    e.toggleCheckstate(a(g.target).closest("li[data-role=node]"), g)
                },
                mouseover: function (g) {
                    a(g.target).closest("span[data-role=checkbox]").addClass(b.nodeHovered)
                },
                mouseout: function (g) {
                    a(g.target).closest("span[data-role=checkbox]").removeClass(b.nodeHovered)
                }
            })
        },
        _initChildrenRecursively: function (o, f, g, c, k) {
            var e, n = this.options, d, b, p, h = "block", m = [], j = 0, l;
            if (!k) {
                k = 0
            }
            if (!g) {
                g = 0
            }
            b = this._retrieveCurrentDepthBinding(g);
            if (!f.hasOwnProperty("length") && f.hasOwnProperty(b.textKey)) {
                f = [f]
            }
            for (j; j < f.length; j++) {
                e = "";
                p = "";
                if (o.length <= 0) {
                    d = b.hasOwnProperty("primaryKey") && f[j].hasOwnProperty(b.primaryKey) ? f[j][b.primaryKey] : (j + k)
                } else {
                    d = b.hasOwnProperty("primaryKey") && f[j].hasOwnProperty(b.primaryKey) ? o + n.pathSeparator + f[j][b.primaryKey] : o + n.pathSeparator + (j + k)
                }
                if (b.hasOwnProperty("valueKey") && f[j].hasOwnProperty(b.valueKey)) {
                    p = f[j][b.valueKey]
                }
                l = '<li class="' + this._buildNodeCssString(f[j], g, b) + '" data-path="' + d + '" data-value="' + p + '" data-role="node">';
                if ((f[j][b.childDataProperty] && f[j][b.childDataProperty].length > 0) || (f[j][b.childDataProperty] && n.loadOnDemand)) {
                    if ((g <= n.initialExpandDepth && !n.loadOnDemand) || (b.hasOwnProperty("expandedKey") && f[j].hasOwnProperty(b.expandedKey))) {
                        l += this._renderExpanderImage(true)
                    } else {
                        l += this._renderExpanderImage(false);
                        h = "none"
                    }
                }
                if (n.checkboxMode && n.checkboxMode.toLowerCase() !== "off") {
                    l += this._renderCheckbox(c)
                }
                l += this._renderNodeImage(f[j], b);
                if (!b.nodeContentTemplate) {
                    l += this._renderAnchor(f[j], b)
                } else {
                    l += this._renderNodeTemplate(f[j], b.nodeContentTemplate)
                }
                if ((f[j][b.childDataProperty] && f[j][b.childDataProperty].length > 0) || (f[j][b.childDataProperty] && n.loadOnDemand)) {
                    e = '<ul style="display: ' + h + '" data-depth="' + (g + 1) + '"';
                    if (f[j][b.childDataProperty].length > 0 && !n.loadOnDemand) {
                        e += ">" + this._initChildrenRecursively(d, f[j][b.childDataProperty], g + 1, c)
                    } else {
                        e += ' data-populated="false">'
                    }
                    e += "</ul>"
                }
                l += e;
                l += "</li>";
                m.push(l)
            }
            return m.join("")
        },
        _buildNodeCssString: function (d, e, b) {
            var c = this.css, f = c.treeNode;
            if (e === 0) {
                f += " " + c.treeRootNode
            }
            if ((d[b.childDataProperty] && d[b.childDataProperty].length > 0) || (d[b.childDataProperty] && this.options.loadOnDemand)) {
                f += " " + c.parentNode
            } else {
                f += " " + c.nodeNoChildren
            }
            return f
        },
        _retrieveCurrentDepthBinding: function (c) {
            var b = this.options.bindings, d = 0;
            for (d; d < c; d++) {
                if (b.hasOwnProperty("bindings")) {
                    b = b.bindings
                } else {
                    break
                }
            }
            return b
        },
        _renderExpanderImage: function (c) {
            var e = this, b = e.css, d = "";
            if (c) {
                d = '<span data-role="expander" data-exp="true" class="' + b.collapseIcon + " " + b.nodeExpander + '"></span>'
            } else {
                d = '<span data-role="expander" data-exp="false" class="' + b.expandIcon + " " + b.nodeExpander + '"></span>'
            }
            return d
        },
        _renderAnchor: function (c, b) {
            var d, e;
            if (b.hasOwnProperty("navigateUrlKey") && c[b.navigateUrlKey] && c[b.navigateUrlKey].length > 0) {
                d = c[b.navigateUrlKey]
            } else {
                d = "#"
            }
            if (b.targetKey && b.targetKey.length > 0 && c.hasOwnProperty(b.targetKey)) {
                e = c[b.targetKey]
            } else {
                e = this.options.defaultNodeTarget
            }
            return '<a href="' + d + '" target="' + e + '">' + c[b.textKey] + "</a>"
        },
        _renderNodeTemplate: function (b, e) {
            var c = a("<div></div>"), d;
            if (typeof a.ig.tmpl === "function") {
                c.html(a.ig.tmpl(e, b));
                if (c.children("a").length <= 0) {
                    d = '<a href="#">' + c.html() + "</a>"
                } else {
                    if (!c.children("a").attr("href")) {
                        c.children("a").attr("href", "#");
                        d = c.html()
                    } else {
                        d = c.html()
                    }
                }
            } else {
                a.tmpl(e, b).appendTo(c);
                if (c.children("a").length <= 0) {
                    d = '<a href="#">' + c.html() + "</a>"
                } else {
                    if (!c.children("a").attr("href")) {
                        c.children("a").attr("href", "#");
                        d = c.html()
                    } else {
                        d = c.html()
                    }
                }
            }
            return d
        },
        _renderCheckbox: function (b) {
            var d = this, c = d.css;
            return '<span data-chk="' + ( b ? "on" : "off") + '" data-role="checkbox" class="' + c.checkbox + '"><span class="' + ( b ? c.checkboxOn : c.checkboxOff) + '"></span></span>'
        },
        _renderNodeImage: function (c, b) {
            var f = this.options, d, e = "";
            d = (c[b.childDataProperty] && c[b.childDataProperty].length > 0) || (c[b.childDataProperty] && f.loadOnDemand);
            if (b.hasOwnProperty("imageUrlKey") && c.hasOwnProperty(b.imageUrlKey) && c[b.imageUrlKey].length > 0) {
                e = '<img src="' + c[b.imageUrlKey] + '" alt="error" data-role="node-image" />'
            }
            if (f.parentNodeImageUrl && d) {
                e += '<img src="' + f.parentNodeImageUrl + '" alt="error" title="' + (f.parentNodeImageTooltip !== null ? f.parentNodeImageTooltip : "") + '" data-role="parent-node-image" />'
            } else {
                if (f.parentNodeImageClass && d) {
                    e += '<span title="' + (f.parentNodeImageTooltip !== null ? f.parentNodeImageTooltip : "") + '" class="' + f.parentNodeImageClass + '" data-role="parent-node-image"></span>'
                } else {
                    if (!d && f.leafNodeImageUrl) {
                        e += '<img src="' + f.leafNodeImageUrl + '" alt="error" title="' + (f.leafNodeImageTooltip !== null ? f.leafNodeImageTooltip : "") + '" data-role="leaf-node-image" />'
                    } else {
                        if (!d && f.leafNodeImageClass) {
                            e += '<span title="' + (f.leafNodeImageTooltip !== null ? f.leafNodeImageTooltip : "") + '" class="' + f.leafNodeImageClass + '" data-role="leaf-node-image"></span>'
                        }
                    }
                }
            }
            return e
        },
        _focusNode: function (b) {
            a(b.target).addClass(this.css.nodeActive)
        },
        _blurNode: function (b) {
            a(b.target).removeClass(this.css.nodeActive)
        },
        _kbNavigation: function (c) {
            var g = this.options, b = this.css, e = a(c.target.parentNode), f, h = e.index(), d;
            if (c.keyCode === a.ui.keyCode.UP) {
                f = this._nextVisibleNodeUp(e, h);
                if (!f) {
                    return
                }
                if (c.ctrlKey) {
                    e.children("a").blur();
                    f.children("a").focus()
                } else {
                    if (c.shiftKey && g.multipleSelection) {
                        g = this.options
                    } else {
                        e.children("a").blur();
                        f.children("a").focus();
                        this.select(f, null)
                    }
                }
                c.preventDefault()
            } else {
                if (c.keyCode === a.ui.keyCode.DOWN) {
                    f = this._nextVisibleNodeDown(e, h);
                    if (!f) {
                        return
                    }
                    if (c.ctrlKey) {
                        e.children("a").blur();
                        f.children("a").focus()
                    } else {
                        if (c.shiftKey && g.multipleSelection) {
                            g = this.options
                        } else {
                            e.children("a").blur();
                            f.children("a").focus();
                            this.select(f, null)
                        }
                    }
                    c.preventDefault()
                } else {
                    if (c.keyCode === a.ui.keyCode.RIGHT) {
                        if (e.children("ul").length > 0) {
                            d = e.children("." + b.nodeExpander);
                            if (!d.attr("data-exp") || d.attr("data-exp") === "false") {
                                this.toggle(e, null)
                            } else {
                                f = e.find("ul > li:first");
                                if (f.length > 0) {
                                    if (c.ctrlKey) {
                                        e.children("a").blur();
                                        f.children("a").focus()
                                    } else {
                                        if (c.shiftKey && g.multipleSelection) {
                                            g = this.options
                                        } else {
                                            e.children("a").blur();
                                            f.children("a").focus();
                                            this.select(f, null)
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (c.keyCode === a.ui.keyCode.LEFT) {
                            d = e.children("." + b.nodeExpander);
                            if (d.attr("data-exp") && d.attr("data-exp") !== "false") {
                                this.toggle(e, null)
                            } else {
                                if (e.parent().parent().is("li")) {
                                    f = e.parent().parent();
                                    if (c.ctrlKey) {
                                        e.children("a").blur();
                                        f.children("a").focus()
                                    } else {
                                        if (c.shiftKey && g.multipleSelection) {
                                            g = this.options
                                        } else {
                                            e.children("a").blur();
                                            f.children("a").focus();
                                            this.select(f, null)
                                        }
                                    }
                                }
                            }
                        } else {
                            if (c.keyCode === a.ui.keyCode.NUMPAD_ADD) {
                                if (e.children("ul").length > 0) {
                                    d = e.children("." + b.nodeExpander);
                                    if (!d.attr("data-exp") || d.attr("data-exp") === "false") {
                                        this.toggle(e, null)
                                    }
                                }
                            } else {
                                if (c.keyCode === a.ui.keyCode.NUMPAD_SUBTRACT) {
                                    if (e.children("ul").length > 0) {
                                        d = e.children("." + b.nodeExpander);
                                        if (d.attr("data-exp") && d.attr("data-exp") !== "false") {
                                            this.toggle(e, null)
                                        }
                                    }
                                } else {
                                    if (c.keyCode === a.ui.keyCode.SPACE) {
                                        if (g.checkboxMode && g.checkboxMode.toLowerCase() !== "off") {
                                            this.toggleCheckstate(e, null);
                                            c.preventDefault()
                                        }
                                    } else {
                                        if (c.keyCode === a.ui.keyCode.HOME) {
                                            e.children("a").blur();
                                            e = this.element.find("li:first");
                                            if (e.length > 0) {
                                                e.children("a").focus();
                                                this.select(e)
                                            }
                                            c.preventDefault()
                                        } else {
                                            if (c.keyCode === a.ui.keyCode.END) {
                                                e.children("a").blur();
                                                e = this._lastVisibleNode();
                                                if (e) {
                                                    e.children("a").focus();
                                                    this.select(e)
                                                }
                                                c.preventDefault()
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
        _nextVisibleNodeDown: function (c, d) {
            var b = c.children("." + this.css.nodeExpander), e, g = d, f = null;
            if (b.length > 0 && b.attr("data-exp") && b.attr("data-exp") !== "false" && c.children("ul").children("li:first").length > 0) {
                return c.children("ul").children("li:first")
            }
            if (g === c.siblings().length) {
                e = c.parent().parent();
                while (e.is("li")) {
                    g = e.index();
                    if (g !== e.siblings().length) {
                        f = e.next();
                        break
                    }
                    e = e.parent().parent()
                }
            } else {
                f = c.next()
            }
            return f
        },
        _nextVisibleNodeUp: function (d, e) {
            var c = d.prev(), b, f = null;
            if (c.length <= 0) {
                if (d.parent().parent().is("li")) {
                    f = d.parent().parent()
                }
            } else {
                while (c.length > 0) {
                    b = c.children("." + this.css.nodeExpander);
                    if (c.children("ul").children("li").length <= 0 || !b.attr("data-exp") || b.attr("data-exp") === "false") {
                        f = c;
                        break
                    } else {
                        c = c.children("ul").children("li:last")
                    }
                }
            }
            return f
        },
        _lastVisibleNode: function () {
            var c = this.element.is("ul") ? this.element.children("li:last") : this.element.children("ul").children("li:last"), b, d;
            if (c.length <= 0) {
                d = null
            } else {
                while (c.length > 0) {
                    b = c.children("." + this.css.nodeExpander);
                    if (c.children("ul").children("li").length <= 0 || !b.attr("data-exp") || b.attr("data-exp") === "false") {
                        d = c;
                        break
                    } else {
                        c = c.children("ul").children("li:last")
                    }
                }
            }
            return d
        },
        _populatingNode: null,
        _populateNodeData: function (i, f, d) {
            if (!i) {
                throw new Error(a.ig.Tree.locale.errorOnRequest + f)
            }
            var j = this._populatingNode.ul, h = this.nodeDataFor(this._populatingNode.node.attr("data-path")), e = j.attr("data-depth"), b = this._retrieveCurrentDepthBinding(e - 1), c, g = d.data();
            if (this.options.checkboxMode.toLowerCase() === "tristate") {
                c = this.isChecked(this._populatingNode.node)
            }
            j.empty();
            j.hide();
            h[b.childDataProperty] = g;
            this._triggerNodePopulated(null, this._populatingNode.node);
            this._triggerRendering(g);
            j.html(this._initChildrenRecursively(this._populatingNode.node.attr("data-path"), g, parseInt(j.attr("data-depth"), 10), c));
            j.attr("data-populated", true);
            this._attachEvents(j);
            if (this.options.dragAndDrop) {
                this._initDragAndDrop(j)
            }
            this._triggerRendered();
            this.toggle(this._populatingNode.node);
            this._populatingNode.indicator.hide();
            this._populatingNode.indicator.destroy();
            this._populatingNode = null
        },
        _prepareRequest: function (g, d) {
            var h = this.options, k, j, e, c, b, i, f;
            if (this._populatingNode !== null) {
                return
            }
            f = this._triggerNodePopulating(d, g);
            if (f) {
                k = this._buildRequestString(g);
                b = this._retrieveCurrentDepthBinding(parseInt(g.children("ul").attr("data-depth"), 10));
                if (!k) {
                    return
                }
                j = k[0];
                e = k[1];
                c = this.nodeDataFor(g.attr("data-path"));
                i = this._retrieveCurrentDepthBinding(parseInt(g.children("ul").attr("data-depth"), 10) - 1);
                if (c.hasOwnProperty(i.childDataProperty)) {
                    c = c[i.childDataProperty]
                }
                if (c && c.__deferred && c.__deferred.uri) {
                    this._executeODataRequest(g, c)
                } else {
                    if (c.length > 0 && !h.dataSourceUrl) {
                        this._renderOnDemand(g, c)
                    } else {
                        this._executeUrlRequest(g, b, j, e)
                    }
                }
            }
        },
        _executeODataRequest: function (e, b) {
            var c, g, d, f = this.options;
            c = new a.ig.JSONPDataSource({
                dataSource: b.__deferred.uri + "?$format=json&$callback=?",
                responseDataKey: f.responseDataKey
            });
            g = e.children("ul");
            a('<li style="width: 20px">&nbsp;</li>').appendTo(g);
            g.show();
            d = g.children("li").igLoading({
                includeVerticalOffset: false
            }).data("igLoading").indicator();
            d.show();
            this._populatingNode = {
                ul: g,
                node: e,
                indicator: d
            };
            c.dataBind(this._populateNodeData, this)
        },
        _renderOnDemand: function (d, c) {
            var e, b;
            e = d.children("ul");
            if (this.options.checkboxMode.toLowerCase() === "tristate") {
                b = this.isChecked(d)
            }
            this._triggerNodePopulated(null, d);
            this._triggerRendering(c);
            e.html(this._initChildrenRecursively(d.attr("data-path"), c, parseInt(e.attr("data-depth"), 10), b));
            e.attr("data-populated", true);
            this._attachEvents(e);
            if (this.options.dragAndDrop) {
                this._initDragAndDrop(e)
            }
            this._triggerRendered();
            this.toggle(d)
        },
        _executeUrlRequest: function (f, b, h, e) {
            var g = this.options, i, d, c;
            if (g.dataSourceUrl && g.dataSourceUrl.lastIndexOf("?") === -1) {
                g.dataSourceUrl += "?"
            } else {
                if (!g.dataSourceUrl) {
                    throw new Error(a.ig.Tree.locale.noDataSourceUrl)
                }
            }
            c = new a.ig.DataSource({
                dataSource: g.dataSourceUrl + "&" + this._encodeUrlPath(h, e) + "&" + this._encodeBinding(b) + "&depth=" + f.parent().attr("data-depth"),
                dataSourceType: "remoteUrl"
            });
            i = f.children("ul");
            a('<li style="width: 20px">&nbsp;</li>').appendTo(i);
            i.show();
            d = i.children("li").igLoading({
                includeVerticalOffset: false
            }).data("igLoading").indicator();
            d.show();
            this._populatingNode = {
                ul: i,
                node: f,
                indicator: d
            };
            c.dataBind(this._populateNodeData, this)
        },
        _buildRequestString: function (e) {
            var f, d = "", g = "", b = this.options.bindings, c, h;
            f = e.attr("data-path").split(this.options.pathSeparator);
            for (c = 0; c < f.length; c++) {
                if (d.length > 0) {
                    d += "/"
                }
                d += b.childDataProperty;
                if (g.length > 0) {
                    g += "/"
                }
                g += (b.primaryKey ? b.primaryKey + ":" : "") + f[c];
                if (b.bindings) {
                    b = b.bindings
                }
            }
            if (g.length <= 0) {
                h = null
            } else {
                h = [g, d]
            }
            return h
        },
        _encodeBinding: function (b) {
            var d = "binding=", c;
            for (c in b) {
                if (b.hasOwnProperty(c) && c !== "bindings" && c !== "nodeContentTemplate") {
                    d += c.toString() + ":" + b[c] + ","
                }
            }
            d = d.substr(0, d.length - 1);
            return d
        },
        _encodeUrlPath: function (c, b) {
            var d;
            if (c.lastIndexOf("/") === -1) {
                c += "/@" + b;
                d = "path=" + c
            } else {
                d = "path=" + c.substr(c.lastIndexOf("/") + 1, c.length) + "/@" + b.substr(b.lastIndexOf("/") + 1, b.length)
            }
            return d
        },
        _updateParentState: function (c) {
            var b = c.children("span[data-role=expander]"), d = this;
            if (b.length <= 0) {
                c.removeClass(this.css.nodeNoChildren).addClass(this.css.parentNode);
                a(this._renderExpanderImage(false)).prependTo(c).bind("click", function (e) {
                    d.toggle(a(e.target).closest("li[data-role=node]"), e)
                })
            } else {
                if (c.children("ul").children("li").length <= 0) {
                    c.removeClass(this.css.parentNode).addClass(this.css.nodeNoChildren);
                    c.children("ul").remove();
                    b.remove()
                }
            }
            this._updateImage(c)
        },
        _updateParentCheckbox: function (g) {
            var b = g.children("span[data-role=checkbox]"), d = b.children("span"), e = b.attr("data-chk"), h, c = 0, f = this.css;
            g.children("ul").children("li").each(function (j, i) {
                if (a(i).children("span[data-role=checkbox]").attr("data-chk") === "on") {
                    c++
                }
            });
            if (c === 0) {
                h = "off"
            } else {
                if (c === g.children("ul").children("li").length) {
                    h = "on"
                } else {
                    h = "partial"
                }
            }
            if (e !== h) {
                b.attr("data-chk", h);
                switch (h) {
                    case"off":
                        d.removeClass(f.checkboxOn).removeClass(f.checkboxPartial).addClass(f.checkboxOff);
                        break;
                    case"partial":
                        d.removeClass(f.checkboxOn).removeClass(f.checkboxOff).addClass(f.checkboxPartial);
                        break;
                    case"on":
                        d.removeClass(f.checkboxPartial).removeClass(f.checkboxOff).addClass(f.checkboxOn);
                        break;
                    default:
                        d.removeClass(f.checkboxOn).removeClass(f.checkboxPartial).addClass(f.checkboxOff)
                }
                g = this.parentNode(g);
                if (g) {
                    this._updateParentCheckbox(g)
                }
            }
        },
        _updateImage: function (e) {
            var b = e.children("ul").children("li").length > 0, d = this.options, c;
            if (!b) {
                if (d.leafNodeImageUrl) {
                    c = e.children("img[data-role=parent-node-image]");
                    if (c.length > 0) {
                        c.attr("title", (d.leafNodeImageTooltip !== null ? d.leafNodeImageTooltip : ""));
                        c.attr("src", d.leafNodeImageUrl);
                        c.attr("data-role", "leaf-node-image")
                    }
                } else {
                    if (d.leafNodeImageClass) {
                        c = e.children("span[data-role=parent-node-image]");
                        if (c.length > 0) {
                            c.attr("title", (d.leafNodeImageTooltip !== null ? d.leafNodeImageTooltip : ""));
                            c.removeClass(d.parentNodeImageClass).addClass(d.leafNodeImageClass);
                            c.attr("data-role", "leaf-node-image")
                        }
                    }
                }
            } else {
                if (d.parentNodeImageUrl) {
                    c = e.children("img[data-role=leaf-node-image]");
                    if (c.length > 0) {
                        c.attr("title", (d.parentNodeImageTooltip !== null ? d.parentNodeImageTooltip : ""));
                        c.attr("src", d.parentNodeImageUrl);
                        c.attr("data-role", "parent-node-image")
                    }
                } else {
                    if (d.parentNodeImageClass) {
                        c = e.children("span[data-role=leaf-node-image]");
                        if (c.length > 0) {
                            c.attr("title", (d.parentNodeImageTooltip !== null ? d.parentNodeImageTooltip : ""));
                            c.removeClass(d.leafNodeImageClass).addClass(d.parentNodeImageClass);
                            c.attr("data-role", "parent-node-image")
                        }
                    }
                }
            }
        },
        _addData: function (c, g, e, d) {
            var f = this.nodeDataFor(g), b = this._retrieveCurrentDepthBinding(e), h;
            if (!b.hasOwnProperty("primaryKey")) {
                if (!f) {
                    if (d === 0) {
                        if (a.type(c) === "array") {
                            this.options.dataSource._rootds._data = c.concat(this.options.dataSource._rootds._data)
                        } else {
                            this.options.dataSource._rootds._data = [c].concat(this.options.dataSource._rootds._data)
                        }
                    } else {
                        if (!d) {
                            this.options.dataSource._rootds._data = this.options.dataSource._rootds._data.concat(c)
                        } else {
                            h = this.options.dataSource._rootds._data.slice(0, d);
                            h = h.concat(c);
                            h = h.concat(this.options.dataSource._rootds._data.slice(d));
                            this.options.dataSource._rootds._data = h
                        }
                    }
                } else {
                    if (!f.hasOwnProperty(b.childDataProperty) || !f[b.childDataProperty] || f[b.childDataProperty].length === 0) {
                        f[b.childDataProperty] = []
                    }
                    if (d === 0) {
                        if (a.type(c) === "array") {
                            f[b.childDataProperty] = c.concat(f[b.childDataProperty])
                        } else {
                            f[b.childDataProperty] = [c].concat(f[b.childDataProperty])
                        }
                    } else {
                        if (!d) {
                            f[b.childDataProperty] = f[b.childDataProperty].concat(c)
                        } else {
                            h = f[b.childDataProperty].slice(0, d);
                            h = h.concat(c);
                            f[b.childDataProperty] = h.concat(f[b.childDataProperty].slice(d))
                        }
                    }
                }
            } else {
                if (!f) {
                    this.options.dataSource._rootds._data = this.options.dataSource._rootds._data.concat(c)
                } else {
                    if (!f.hasOwnProperty(b.childDataProperty) || !f[b.childDataProperty] || f[b.childDataProperty].length === 0) {
                        f[b.childDataProperty] = []
                    }
                    f[b.childDataProperty] = f[b.childDataProperty].concat(c)
                }
            }
        },
        _removeData: function (f) {
            var g = f.split(this.options.pathSeparator), c = this.options.dataSource._rootds.data(), d, e, b = this.options.bindings;
            if (g.length === 1) {
                if (!b.hasOwnProperty("primaryKey")) {
                    c.splice(parseInt(g[0], 10), 1)
                } else {
                    for (e = 0; e < c.length; e++) {
                        if (c[e].hasOwnProperty(b.primaryKey) && c[e][b.primaryKey].toString() === g[0].toString()) {
                            c.splice(e, 1);
                            break
                        }
                    }
                }
                return
            }
            for (d = 0; d < g.length - 1; d++) {
                if (!b.hasOwnProperty("primaryKey")) {
                    c = c[parseInt(g[d], 10)]
                } else {
                    for (e = 0; e < c.length; e++) {
                        if (c[e].hasOwnProperty(b.primaryKey) && c[e][b.primaryKey].toString() === g[d].toString()) {
                            c = c[e];
                            break
                        }
                    }
                }
                if (d < g.length - 2) {
                    c = c[b.childDataProperty]
                }
                if (b.hasOwnProperty("bindings") && d < g.length - 2) {
                    b = b.bindings
                }
            }
            if (c[b.childDataProperty] && c[b.childDataProperty].length <= 1) {
                delete c[b.childDataProperty]
            } else {
                c = c[b.childDataProperty];
                if (b.hasOwnProperty("bindings")) {
                    b = b.bindings
                }
                if (!b.hasOwnProperty("primaryKey") && c.length) {
                    c.splice(parseInt(g[g.length - 1], 10), 1)
                } else {
                    for (e = 0; e < c.length; e++) {
                        if (c[e].hasOwnProperty(b.primaryKey) && c[e][b.primaryKey].toString() === g[d].toString()) {
                            c.splice(e, 1);
                            break
                        }
                    }
                }
            }
        },
        _recalculatePaths: function (g) {
            var h = g.split(this.options.pathSeparator), c = g.length > 0 ? h[h.length - 1] : 0, e, f, d, i, b;
            if (h.length > 1) {
                h.splice(h.length - 1, 1);
                f = h.join(this.options.pathSeparator);
                e = this.nodeByPath(f);
                for (c; c < e.children("ul").children("li").length; c++) {
                    d = f + this.options.pathSeparator + c;
                    b = a(e.children("ul").children("li")[c]);
                    b.attr("data-path", d);
                    if (b.children("ul").length > 0 && b.children("ul").children("li").length > 0) {
                        this._recalculatePaths(d + this.options.pathSeparator + "0")
                    }
                }
            } else {
                i = this.element.is("ul") ? this.element : this.element.children("ul");
                for (c; c < i.children("li").length; c++) {
                    b = a(i.children("li")[c]);
                    b.attr("data-path", c);
                    if (b.children("ul").length > 0 && b.children("ul").children("li").length > 0) {
                        this._recalculatePaths(c + this.options.pathSeparator + "0")
                    }
                }
            }
        },
        dataBind: function () {
            var b;
            b = this._initDataOptions();
            this._initDataSource(b);
            this._triggerDataBinding();
            this.options.dataSource.dataBind(this._constructFromData, this)
        },
        toggleCheckstate: function (i, g) {
            var l = this, j = l.options, f = l.css, d, e, b, c, k, h;
            if (!i) {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
            if (!j.checkboxMode || j.checkboxMode.toLowerCase() === "off") {
                return
            }
            b = i.children("span[data-role=checkbox]");
            c = b.children("span");
            h = l._triggerNodeCheckstateChanging(g, i);
            if (h) {
                if (j.checkboxMode.toLowerCase() === "tristate") {
                    if (b.attr("data-chk") === "on" || b.attr("data-chk") === "partial") {
                        d = i.find("span[data-role=checkbox]");
                        e = d.children("span");
                        b.attr("data-chk", "off");
                        c.removeClass(f.checkboxOn).removeClass(f.checkboxPartial).addClass(f.checkboxOff);
                        d.attr("data-chk", "off");
                        e.removeClass(f.checkboxOn).removeClass(f.checkboxPartial).addClass(f.checkboxOff);
                        k = b.parent().parent().parent();
                        while (k && k.is("li")) {
                            if (k.find("ul > li > span[data-chk=on]").length <= 0) {
                                b = k.children("span[data-role=checkbox]");
                                c = b.children("span");
                                b.attr("data-chk", "off");
                                c.removeClass(f.checkboxOn).removeClass(f.checkboxPartial).addClass(f.checkboxOff);
                                k = this.parentNode(k)
                            } else {
                                b = k.children("span[data-role=checkbox]");
                                c = b.children("span");
                                b.attr("data-chk", "partial");
                                c.removeClass(f.checkboxOn).removeClass(f.checkboxOff).addClass(f.checkboxPartial);
                                k = this.parentNode(k)
                            }
                        }
                    } else {
                        d = i.find("span[data-role=checkbox]");
                        e = d.children("span");
                        b.attr("data-chk", "on");
                        c.removeClass(f.checkboxOff).removeClass(f.checkboxPartial).addClass(f.checkboxOn);
                        d.attr("data-chk", "on");
                        e.removeClass(f.checkboxOff).removeClass(f.checkboxPartial).addClass(f.checkboxOn);
                        k = b.parent().parent().parent();
                        while (k && k.is("li")) {
                            if (k.find("ul > li > span[data-chk=on]").length === k.find("ul > li").length) {
                                b = k.children("span[data-role=checkbox]");
                                c = b.children("span");
                                b.attr("data-chk", "on");
                                c.removeClass(f.checkboxOff).removeClass(f.checkboxPartial).addClass(f.checkboxOn);
                                k = this.parentNode(k)
                            } else {
                                b = k.children("span[data-role=checkbox]");
                                c = b.children("span");
                                b.attr("data-chk", "partial");
                                c.removeClass(f.checkboxOn).removeClass(f.checkboxOff).addClass(f.checkboxPartial);
                                k = this.parentNode(k)
                            }
                        }
                    }
                } else {
                    if (b.attr("data-chk") === "on" || b.attr("data-chk") === "partial") {
                        b.attr("data-chk", "off");
                        c.removeClass(f.checkboxOn).removeClass(f.checkboxPartial).addClass(f.checkboxOff)
                    } else {
                        b.attr("data-chk", "on");
                        c.removeClass(f.checkboxOff).addClass(f.checkboxOn)
                    }
                }
                l._triggerNodeCheckstateChanged(g, i)
            }
        },
        toggle: function (g, c) {
            var j = this, h = j.options, b = j.css, f, k, l, e = 0, d;
            if (!g) {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
            if (!c) {
                d = g.children("." + b.nodeExpander)
            } else {
                d = a(c.target).closest("span[data-role=expander]")
            }
            if (g.children("ul").attr("data-populated") && g.children("ul").attr("data-populated") === "false") {
                this._prepareRequest(g, c);
                return
            }
            if (d.attr("data-exp") && d.attr("data-exp") !== "false") {
                f = j._triggerNodeCollapsing(c, g);
                if (f) {
                    a(g).children("ul").hide(h.animationDuration, function () {
                        j._triggerNodeCollapsed(c, g)
                    });
                    d.removeClass(b.collapseIcon).addClass(b.expandIcon).attr("data-exp", false)
                }
            } else {
                f = j._triggerNodeExpanding(c, g);
                if (f) {
                    if (h.singleBranchExpand) {
                        k = g.siblings();
                        for (e; e < k.length; e++) {
                            l = a(k[e]).children("." + b.nodeExpander);
                            if (l.length > 0 && (l.attr("data-exp") === "true" || l.attr("data-exp") === true)) {
                                f = j._triggerNodeCollapsing(c, a(k[e]));
                                if (f) {
                                    a(k[e]).children("ul").hide(h.animationDuration, a.proxy(this._triggerNodeCollapsed(c, a(k[e])), this));
                                    l.removeClass(b.collapseIcon).addClass(b.expandIcon).attr("data-exp", false)
                                }
                            }
                        }
                    }
                    g.children("ul").show(h.animationDuration, function () {
                        j._triggerNodeExpanded(c, g)
                    });
                    d.removeClass(b.expandIcon).addClass(b.collapseIcon).attr("data-exp", true)
                }
            }
        },
        expandToNode: function (c) {
            var d, b;
            if (c && c.length > 0) {
                d = this.parentNode(c);
                b = this.options.animationDuration;
                this.options.animationDuration = 0;
                while (d) {
                    this.expand(d);
                    d = this.parentNode(d)
                }
                this.options.animationDuration = b
            } else {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
        },
        expand: function (e) {
            var g = this, f = g.options, b = g.css, h, j, d = 0, c;
            if (!e || e.length <= 0) {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
            if (e.children("ul").attr("data-populated") && e.children("ul").attr("data-populated") === "false") {
                this._prepareRequest(e);
                return
            }
            c = e.children("." + b.nodeExpander);
            if (!c.attr("data-exp") || c.attr("data-exp") === "false") {
                if (f.singleBranchExpand) {
                    h = e.siblings();
                    for (d; d < h.length; d++) {
                        j = a(h[d]).children("." + b.nodeExpander);
                        if (j.length > 0 && (j.attr("data-exp") === "true" || j.attr("data-exp") === true)) {
                            a(h[d]).children("ul").hide(f.animationDuration);
                            j.removeClass(b.collapseIcon).addClass(b.expandIcon).attr("data-exp", false)
                        }
                    }
                }
                e.children("ul").show(f.animationDuration);
                c.removeClass(b.expandIcon).addClass(b.collapseIcon).attr("data-exp", true)
            }
        },
        collapse: function (d) {
            var f = this, e = f.options, b = f.css, c;
            if (!d || d.length <= 0) {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
            c = d.children("." + b.nodeExpander);
            if (c.attr("data-exp") && c.attr("data-exp") !== "false") {
                a(d).children("ul").hide(e.animationDuration);
                c.removeClass(b.collapseIcon).addClass(b.expandIcon).attr("data-exp", false)
            }
        },
        parentNode: function (b) {
            if (!b) {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
            var c = b.parent().closest("li[data-role=node]");
            return c.length > 0 ? c : null
        },
        nodeByPath: function (b) {
            return this.element.find('li[data-path="' + b + '"]')
        },
        nodesByValue: function (b) {
            return this.element.find('li[data-value="' + b + '"]')
        },
        checkedNodes: function () {
            var c = this.element.find("span[data-chk=on]").parent(), d = 0, b = [];
            if (c.length > 0) {
                for (d; d < c.length; d++) {
                    b.push(this.nodeFromElement(a(c[d])))
                }
                return b
            }
        },
        uncheckedNodes: function () {
            var c = this.element.find("span[data-chk=off]").parent(), d = 0, b = [];
            if (c.length > 0) {
                for (d; d < c.length; d++) {
                    b.push(this.nodeFromElement(a(c[d])))
                }
                return b
            }
        },
        partiallyCheckedNodes: function () {
            var c = this.element.find("span[data-chk=partial]").parent(), d = 0, b = [];
            if (c.length > 0) {
                for (d; d < c.length; d++) {
                    b.push(this.nodeFromElement(a(c[d])))
                }
                return b
            }
        },
        select: function (e, c) {
            if (!e || e.length <= 0) {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
            var b = this.css, f = e.attr("data-path"), d, g = false;
            if (c && (e.children("a").attr("href") === "#" || e.children("a").attr("href") === document.URLUnencoded + "#")) {
                g = true
            }
            if (!this._selectedNode) {
                this._selectedNode = [
                    {
                        path: null,
                        element: null,
                        data: null,
                        binding: null
                    }
                ]
            }
            if (this._selectedNode[0].path !== null) {
                if (this._selectedNode[0].path !== f) {
                    d = this._triggerSelectionChanging(c, e);
                    if (d) {
                        this._selectedNode[0].element.children("a").removeClass(b.nodeSelected);
                        e.children("a").addClass(b.nodeSelected);
                        this._selectedNode[0] = this.nodeFromElement(e);
                        this._triggerSelectionChanged(c)
                    } else {
                        if (c) {
                            g = true
                        }
                    }
                }
            } else {
                d = this._triggerSelectionChanging(c, e);
                if (d) {
                    e.children("a").addClass(b.nodeSelected);
                    this._selectedNode[0] = this.nodeFromElement(e);
                    this._triggerSelectionChanged(c)
                } else {
                    if (c) {
                        g = true
                    }
                }
            }
            if (g) {
                c.preventDefault()
            }
        },
        deselect: function (c) {
            if (!c) {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
            var e = this.options, b = this.css, d = c.attr("data-path");
            if (!this._selectedNode) {
                this._selectedNode = [
                    {
                        path: null,
                        element: null,
                        data: null,
                        binding: null
                    }
                ]
            }
            if (e.multipleSelection) {
                e = this.options
            } else {
                if (this._selectedNode[0].path !== null) {
                    if (this._selectedNode[0].path === d) {
                        c.children("a").removeClass(b.nodeSelected);
                        this._selectedNode[0].path = null;
                        this._selectedNode[0].element = null;
                        this._selectedNode[0].data = null;
                        this._selectedNode[0].binding = null
                    }
                }
            }
        },
        clearSelection: function () {
            var b = this.css, c = 0;
            if (this._selectedNode[0].path !== null) {
                for (c; c < this._selectedNode.length; c++) {
                    this._selectedNode[c].element.children("a").removeClass(b.nodeSelected)
                }
                this._selectedNode = [
                    {
                        path: null,
                        element: null,
                        data: null,
                        binding: null
                    }
                ]
            }
        },
        selectedNode: function () {
            if (!this._selectedNode) {
                this._selectedNode = [
                    {
                        path: null,
                        element: null,
                        data: null,
                        binding: null
                    }
                ]
            }
            return this._selectedNode[0]
        },
        findNodesByText: function (j, f) {
            var d, b, h, g, c = [], e;
            if (f && f.length > 0) {
                d = this.nodeDataFor(f.attr("data-path"));
                b = this._retrieveCurrentDepthBinding(f.parent().attr("data-depth"));
                if (b.hasOwnProperty("childDataProperty") && d.hasOwnProperty(b.childDataProperty)) {
                    d = d[b.childDataProperty];
                    h = f.attr("data-path") + this.options.pathSeparator;
                    if (b.hasOwnProperty("bindings")) {
                        b = b.bindings
                    }
                } else {
                    return c
                }
            } else {
                d = this.options.dataSource.root().data();
                b = this.options.bindings;
                h = ""
            }
            if (d) {
                for (e = 0; e < d.length; e++) {
                    if (d[e][b.textKey].toString() === j) {
                        if (b.hasOwnProperty("primaryKey") && d[e].hasOwnProperty(b.primaryKey)) {
                            g = this.nodeByPath(h + d[e][b.primaryKey]);
                            c.push(this.nodeFromElement(g));
                            c = c.concat(this.findNodesByText(j, g))
                        } else {
                            g = this.nodeByPath(h + e);
                            c.push(this.nodeFromElement(g));
                            c = c.concat(this.findNodesByText(j, g))
                        }
                    } else {
                        if (b.hasOwnProperty("primaryKey") && d[e].hasOwnProperty(b.primaryKey)) {
                            g = this.nodeByPath(h + d[e][b.primaryKey]);
                            c = c.concat(this.findNodesByText(j, g))
                        } else {
                            g = this.nodeByPath(h + e);
                            c = c.concat(this.findNodesByText(j, g))
                        }
                    }
                }
            }
            return c
        },
        findImmediateNodesByText: function (j, f) {
            var d, e, b, c = [], h, g;
            if (f && f.length > 0) {
                b = this._retrieveCurrentDepthBinding(f.parent().attr("data-depth"));
                d = this.nodeDataFor(f.attr("data-path"));
                if (b.hasOwnProperty("childDataProperty") && d.hasOwnProperty(b.childDataProperty)) {
                    d = d[b.childDataProperty];
                    h = f.attr("data-path");
                    if (b.hasOwnProperty("bindings")) {
                        b = b.bindings
                    }
                } else {
                    return c
                }
                for (e = 0; e < d.length; e++) {
                    if (d[e][b.textKey].toString() === j) {
                        if (b.hasOwnProperty("primaryKey") && d[e].hasOwnProperty(b.primaryKey)) {
                            g = this.nodeByPath(h + this.options.pathSeparator + d[e][b.primaryKey]);
                            c.push(this.nodeFromElement(g))
                        } else {
                            g = this.nodeByPath(h + this.options.pathSeparator + e);
                            c.push(this.nodeFromElement(g))
                        }
                    }
                }
            } else {
                b = this.options.bindings;
                d = this.options.dataSource.root().data();
                for (e = 0; e < d.length; e++) {
                    if (d[e][b.textKey].toString() === j) {
                        if (b.hasOwnProperty("primaryKey") && d[e].hasOwnProperty(b.primaryKey)) {
                            g = this.nodeByPath(d[e][b.primaryKey]);
                            c.push(this.nodeFromElement(g))
                        } else {
                            g = this.nodeByPath(e);
                            c.push(this.nodeFromElement(g))
                        }
                    }
                }
            }
            return c
        },
        nodeByIndex: function (b, d) {
            var c;
            if (!d) {
                if (this.element.is("ul")) {
                    c = this.element.children().eq(b)
                } else {
                    c = this.element.children("ul").children().eq(b)
                }
            } else {
                c = d.children("ul").children().eq(b)
            }
            return c
        },
        nodeFromElement: function (b) {
            if (b.length > 0) {
                var c = {
                    path: b.attr("data-path"),
                    element: b,
                    data: this.nodeDataFor(b.attr("data-path")),
                    binding: this._retrieveCurrentDepthBinding(b.parent().attr("data-depth"))
                };
                return c
            }
        },
        children: function (d) {
            var c = [], e = this, b, f;
            if (d && d.length > 0) {
                f = d.children("ul");
                if (f.length > 0) {
                    f.children("li").each(function (g) {
                        b = a(this);
                        c.push(e.nodeFromElement(b))
                    })
                }
                return c
            }
            throw new Error(a.ig.Tree.locale.incorrectNodeObject)
        },
        childrenByPath: function (e) {
            var d = this.nodeByPath(e), c = [], f = this, b, g;
            if (d.length > 0) {
                g = d.children("ul");
                if (g.length > 0) {
                    g.children("li").each(function (h) {
                        b = a(this);
                        c.push(f.nodeFromElement(b))
                    })
                }
                return c
            }
            throw new Error(a.ig.Tree.locale.incorrectPath + e)
        },
        isSelected: function (b) {
            if (!this._selectedNode) {
                this._selectedNode = [
                    {
                        path: null,
                        element: null,
                        data: null,
                        binding: null
                    }
                ]
            }
            if (b && b.length > 0) {
                return this._selectedNode[0].path === b.attr("data-path")
            }
            throw new Error(a.ig.Tree.locale.incorrectNodeObject)
        },
        isExpanded: function (c) {
            if (c && c.length > 0) {
                var b = c.children("span[data-role=expander]");
                if (b.length > 0) {
                    return b.attr("data-exp") === "true"
                }
            } else {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
        },
        isChecked: function (c) {
            if (c && c.length > 0) {
                var b = c.children("span[data-role=checkbox]");
                if (b.length > 0) {
                    return b.attr("data-chk") === "on"
                }
            } else {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
        },
        checkState: function (c) {
            if (c && c.length > 0) {
                var b = c.children("span[data-role=checkbox]");
                if (b.length > 0) {
                    return b.attr("data-chk")
                }
            } else {
                throw new Error(a.ig.Tree.locale.incorrectNodeObject)
            }
        },
        addNode: function (g, i, h) {
            if (!g || g.length <= 0) {
                return
            }
            if (!h && typeof i === "number") {
                h = i;
                i = null
            }
            var l, j, c, e, f, d, k, b;
            if (!i) {
                i = this.element.is("ul") ? this.element : this.element.children("ul");
                if (i.children().length <= 0) {
                    this._addData(g, "", 0);
                    this._triggerRendering(g);
                    k = a(this._initChildrenRecursively("", g)).appendTo(i);
                    if (this.options.dragAndDrop) {
                        this._initDragAndDrop(k)
                    }
                    this._attachEvents(i);
                    this._triggerRendered();
                    this.options.dataSource.root().addNode({
                        data: g,
                        parentPath: "",
                        path: k.attr("data-path")
                    });
                    return
                }
            }
            e = i.is("li");
            l = e ? i.children("ul") : i;
            if (l.length <= 0) {
                l = a('<ul data-depth="' + (parseInt(i.parent().attr("data-depth"), 10) + 1) + '" style="display: none"></ul>').appendTo(i)
            }
            j = e ? i.attr("data-path") : "";
            b = this._retrieveCurrentDepthBinding(parseInt(l.attr("data-depth"), 10));
            if (this.options.checkboxMode.toLowerCase() === "tristate") {
                c = e ? this.isChecked(i) : false
            }
            this._addData(g, j, parseInt(l.attr("data-depth"), 10) - 1, h);
            this._triggerRendering(g);
            d = l.children("li").length <= 0;
            if (h === 0) {
                f = a(this._initChildrenRecursively(j, g, parseInt(l.attr("data-depth"), 10), c, l.children("li").length)).prependTo(l);
                if (!b.hasOwnProperty("primaryKey")) {
                    this._recalculatePaths(j)
                }
            } else {
                if (!h) {
                    f = a(this._initChildrenRecursively(j, g, parseInt(l.attr("data-depth"), 10), c, l.children("li").length)).appendTo(l)
                } else {
                    f = a(this._initChildrenRecursively(j, g, parseInt(l.attr("data-depth"), 10), c, l.children("li").length)).insertBefore(l.children("li:eq(" + h + ")"));
                    if (!b.hasOwnProperty("primaryKey")) {
                        this._recalculatePaths(j)
                    }
                }
            }
            if (e && d) {
                this._updateParentState(i)
            }
            if (this.options.dragAndDrop) {
                this._initDragAndDrop(f)
            }
            this._attachEvents(f);
            this._triggerRendered();
            k = [];
            f.each(function (m, n) {
                k.push(a(n).attr("data-path"))
            });
            this.options.dataSource.root().addNode({
                data: g,
                parentPath: j,
                path: k
            })
        },
        removeAt: function (g) {
            var e = this.nodeByPath(g), d = parseInt(e.parent().attr("data-depth"), 10), b, f = this.parentNode(e), c;
            if (e.length <= 0) {
                return
            }
            if (g.indexOf("_remove") !== -1) {
                g = g.replace("_remove", "")
            }
            b = this._retrieveCurrentDepthBinding(d);
            c = {
                data: a.extend(true, {}, this.nodeDataFor(g)),
                path: g
            };
            this._removeData(g, b);
            e.remove();
            if (!b.hasOwnProperty("primaryKey")) {
                this._recalculatePaths(g)
            }
            if (f && f.children("ul").children("li").length <= 0) {
                this._updateParentState(f)
            }
            if (this.options.checkboxMode.toLowerCase() === "tristate" && f) {
                this._updateParentCheckbox(f)
            }
            this.options.dataSource.root().removeNode(c)
        },
        removeNodesByValue: function (d) {
            var b = this.nodesByValue(d), c = this;
            b.each(function (e, f) {
                c.removeAt(a(f).attr("data-path"))
            })
        },
        transactionLog: function () {
            return this.options.dataSource.root()._transactionLog
        },
        _triggerSelectionChanging: function (c, d) {
            var b = {
                owner: this,
                selectedNodes: this._selectedNode,
                newNodes: [this._constructNodeObject(d)]
            };
            return this._trigger(this.events.selectionChanging, c, b)
        },
        _triggerSelectionChanged: function (c) {
            var b = {
                owner: this,
                selectedNodes: this._selectedNode,
                newNodes: this._selectedNode
            };
            this._trigger(this.events.selectionChanged, c, b)
        },
        _triggerNodeCollapsing: function (c, d) {
            var b = {
                owner: this,
                node: this._constructNodeObject(d)
            };
            return this._trigger(this.events.nodeCollapsing, c, b)
        },
        _triggerNodeCollapsed: function (c, d) {
            var b = {
                owner: this,
                node: this._constructNodeObject(d)
            };
            this._trigger(this.events.nodeCollapsed, c, b)
        },
        _triggerNodeExpanding: function (c, d) {
            var b = {
                owner: this,
                node: this._constructNodeObject(d)
            };
            return this._trigger(this.events.nodeExpanding, c, b)
        },
        _triggerNodeExpanded: function (c, d) {
            var b = {
                owner: this,
                node: this._constructNodeObject(d)
            };
            this._trigger(this.events.nodeExpanded, c, b)
        },
        _triggerNodePopulating: function (c, d) {
            var b = this._constructNodeObject(d);
            return this._trigger(this.events.nodePopulating, c, b)
        },
        _triggerNodePopulated: function (c, d) {
            var b = this._constructNodeObject(d);
            this._trigger(this.events.nodePopulated, c, b)
        },
        _triggerNodeCheckstateChanging: function (c, d) {
            var e = d.children("span[data-role=checkbox]").attr("data-chk"), b = {
                owner: this,
                node: this._constructNodeObject(d),
                currentState: e,
                newState: e === "off" ? "on" : "off",
                currentCheckedNodes: this.checkedNodes()
            };
            return this._trigger(this.events.nodeCheckstateChanging, c, b)
        },
        _triggerNodeCheckstateChanged: function (c, d) {
            var e = d.children("span[data-role=checkbox]").attr("data-chk"), b = {
                owner: this,
                node: this._constructNodeObject(d),
                newState: e,
                newCheckedNodes: this.checkedNodes(),
                newPartiallyCheckedNodes: this.partiallyCheckedNodes()
            };
            return this._trigger(this.events.nodeCheckstateChanged, c, b)
        },
        _triggerNodeClick: function (c, d) {
            var b = {
                owner: this,
                node: this._constructNodeObject(d)
            };
            return this._trigger(this.events.nodeClick, c, b)
        },
        _triggerNodeDoubleClick: function (c, d) {
            var b = this._constructNodeObject(d);
            return this._trigger(this.events.nodeDoubleClick, c, b)
        },
        _triggerDataBinding: function () {
            var b = {
                owner: this
            };
            this._trigger(this.events.dataBinding, null, b)
        },
        _triggerDataBound: function (c) {
            var b = {
                owner: this,
                dataView: c
            };
            this._trigger(this.events.dataBound, null, b)
        },
        _triggerRendering: function (c) {
            var b = {
                owner: this,
                dataView: c
            };
            this._trigger(this.events.rendering, null, b)
        },
        _triggerRendered: function () {
            var b = {
                owner: this
            };
            this._trigger(this.events.rendered, null, b)
        },
        _triggerDragStart: function (c, f, d) {
            var e = this._constructNodeObject(d), b = a.extend(true, e, f);
            return this._trigger(this.events.dragStart, c, b)
        },
        _triggerDrag: function (c, f, d) {
            var e = this._constructNodeObject(d), b = a.extend(true, e, f);
            return this._trigger(this.events.drag, c, b)
        },
        _triggerDragStop: function (b, c) {
            this._trigger(this.events.dragStop, b, c)
        },
        _triggerNodeDropping: function (c, g, d, f) {
            var e = this._constructNodeObject(d), b;
            e.targetIndex = f;
            e.originalIndex = g.draggable.index();
            b = a.extend(true, e, g);
            return this._trigger(this.events.nodeDropping, c, b)
        },
        _triggerNodeDropped: function (c, f, d) {
            var e = this._constructNodeObject(d), b = a.extend(true, e, f);
            this._trigger(this.events.nodeDropped, c, b)
        },
        _constructNodeObject: function (b) {
            var c = this.nodeDataFor(b !== null ? b.attr("data-path") : null), d = {
                path: b !== null ? b.attr("data-path") : null,
                element: b !== null ? b : null,
                data: c,
                binding: b !== null ? this._retrieveCurrentDepthBinding(parseInt(b.parent().attr("data-depth"), 10)) : null
            };
            return d
        },
        nodeDataFor: function (f) {
            if (!f) {
                return
            }
            var g = f.split(this.options.pathSeparator), c = this.options.dataSource._rootds.data(), d, e, b = this.options.bindings;
            for (d = 0; d < g.length - 1; d++) {
                if (!b.hasOwnProperty("primaryKey")) {
                    c = c[parseInt(g[d], 10)][b.childDataProperty]
                } else {
                    for (e = 0; e < c.length; e++) {
                        if (c[e].hasOwnProperty(b.primaryKey) && c[e][b.primaryKey].toString() === g[d].toString()) {
                            c = c[e][b.childDataProperty];
                            break
                        }
                    }
                }
                if (b.hasOwnProperty("bindings")) {
                    b = b.bindings
                }
            }
            if (!b.hasOwnProperty("primaryKey") && c.length) {
                c = c[parseInt(g[g.length - 1], 10)]
            } else {
                for (e = 0; e < c.length; e++) {
                    if (c[e].hasOwnProperty(b.primaryKey) && c[e][b.primaryKey].toString() === g[d].toString()) {
                        c = c[e];
                        break
                    }
                }
            }
            return c
        },
        destroy: function () {
            a.Widget.prototype.destroy.apply(this, arguments);
            this.element.find("a").unbind();
            this.element.find("span").unbind();
            this.element.removeClass(this.css.tree);
            this.element.removeClass(this.css.treeCollection);
            this.element.removeClass(this.css.treeRoot);
            if (this.options.width) {
                this.element.css("width", "")
            }
            if (this.options.height) {
                this.element.css("height", "")
            }
            if (this.options.dragAndDrop) {
                this._destroyDragAndDrop()
            }
            this.element.removeAttr("data-depth");
            this.element.removeAttr("data-scroll");
            this.element.empty();
            return this
        }
    });
    a.extend(a.ui.igTree, {
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