﻿/*
 * Infragistics.Web.ClientUI infragistics.olapdatasource.js 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends:
 *     jquery-1.4.4.js
 *     jquery.ui.core.js
 *     jquery.ui.widget.js
 *     infragistics.util.js
 */
$.ig = $.ig || {};
$.ig.util.bulkDefine(["AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise"]);
$.ig.util.defType("TaskStatus", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("TaskStatus", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ListSortDirection", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("ListSortDirection", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("NotifyCollectionChangedAction", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("NotifyCollectionChangedAction", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("AbstractEnumerable", "Object", {
    a: null,
    init: function (b) {
        $.ig.Object.prototype.init.call(this);
        this.a = b
    },
    getEnumerator: function () {
        return new $.ig.AbstractEnumerator(this.a().getEnumerator())
    },
    $type: new $.ig.Type("AbstractEnumerable", $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);
$.ig.util.defType("AbstractEnumerator", "Object", {
    a: null,
    init: function (b) {
        $.ig.Object.prototype.init.call(this);
        this.a = b
    },
    current: function () {
        return this.a.current()
    },
    moveNext: function () {
        return this.a.moveNext()
    },
    reset: function () {
        this.a.reset()
    },
    $type: new $.ig.Type("AbstractEnumerator", $.ig.Object.prototype.$type, [$.ig.IEnumerator.prototype.$type])
}, true);
$.ig.util.defType("IEnumerable$1", "Object", {
    $type: new $.ig.Type("IEnumerable$1", null, [$.ig.IEnumerable.prototype.$type])
}, true);
$.ig.util.defType("ICollection$1", "Object", {
    $type: new $.ig.Type("ICollection$1", null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);
$.ig.util.defType("IList$1", "Object", {
    $type: new $.ig.Type("IList$1", null, [$.ig.ICollection$1.prototype.$type.specialize(0), $.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);
$.ig.util.defType("IArrayList", "Object", {
    $type: new $.ig.Type("IArrayList", null)
}, true);
$.ig.util.defType("List$1", "Object", {
    $t: null,
    __inner: null,
    init: function (a, b) {
        if (b > 0) {
            switch (b) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break
            }
            return
        }
        this.a = {};
        this.$t = a;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this.__inner = new $.ig.Array()
    },
    init1: function (d, h, e) {
        this.a = {};
        this.$t = d;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this.__inner = new $.ig.Array();
        if (this.n(0, e)) {
            return
        }
        var g = e.getEnumerator();
        while (g.moveNext()) {
            var f = g.current();
            this.add(f)
        }
    },
    init2: function (b, d, c) {
        this.a = {};
        this.$t = b;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this.__inner = new $.ig.Array()
    },
    i: function (c, d) {
        this.__inner[c] = d
    },
    j: function (c, d) {
        this.__inner.insert(c, d)
    },
    k: function (b) {
        this.__inner.add(b)
    },
    l: function (b) {
        this.__inner.removeAt(b)
    },
    m: function () {
        this.__inner.clear()
    },
    item: function (d, c) {
        if (arguments.length === 2) {
            this.i(d, c);
            return c
        } else {
            return this.__inner[d]
        }
    },
    indexOf: function (b) {
        return this.__inner.indexOf(b)
    },
    insert: function (c, d) {
        this.j(c, d)
    },
    removeAt: function (b) {
        this.l(b)
    },
    count: function () {
        return this.__inner.length
    },
    isReadOnly: function () {
        return false
    },
    add: function (b) {
        this.k(b)
    },
    clear: function () {
        this.m()
    },
    contains: function (b) {
        return this.__inner.contains(b)
    },
    copyTo: function (d, e) {
        for (var f = 0; f < this.__inner.length; f++) {
            d[e + f] = this.__inner[f]
        }
    },
    remove: function (c) {
        var d = this.indexOf(c);
        if (d < 0) {
            return false
        }
        this.l(d);
        return true
    },
    getEnumerator: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$b = this.$this.__inner.getEnumerator();
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$a = this.$b.current();
                                    this.$current = this.$a;
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$b.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerator$1(this.$t, a())
    },
    asArrayList: function () {
        return this.__inner
    },
    n: function (g, j) {
        var h = $.ig.util.cast($.ig.IArrayList.prototype.$type, j);
        if (h != null) {
            this.__inner.insertRange1(g, h.asArrayList());
            return true
        }
        var i = $.ig.util.cast($.ig.IArray.prototype.$type, j);
        if (i != null) {
            this.__inner.insertRange(g, i.asArray());
            return true
        }
        var k = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize(this.$t), j);
        if (k != null) {
            for (var l = 0; l < k.count(); l++) {
                this.__inner.insert(g + l, k.item(l))
            }
            return true
        }
        var m = $.isArray(j) ? j : null;
        if (m != null) {
            this.__inner.insertRange(g, m);
            return true
        }
        return false
    },
    o: function (f, g) {
        if (this.n(f, g)) {
            return
        }
        var h = 0;
        var j = g.getEnumerator();
        while (j.moveNext()) {
            var i = j.current();
            this.__inner.insert(f + h, i);
            h++
        }
    },
    p: function (f, g) {
        if (this.n(f, g)) {
            return
        }
        var h = 0;
        var j = g.getEnumerator();
        while (j.moveNext()) {
            var i = j.current();
            this.__inner.insert(f + h, i);
            h++
        }
    },
    q: function (c, d) {
        this.__inner.splice(c, d)
    },
    copyTo1: function (c, d) {
        this.__inner.copyTo(c, d)
    },
    isFixedSize: function () {
        return false
    },
    add1: function (a) {
        this.k(a);
        return this.__inner.length - 1
    },
    contains1: function (a) {
        return this.__inner.contains(a)
    },
    indexOf1: function (a) {
        return this.__inner.indexOf(a)
    },
    insert1: function (a, b) {
        this.j(a, b)
    },
    remove1: function (a) {
        var b = this.indexOf1(a);
        this.l(b)
    },
    r: function () {
        var a = this;
        var b = null;
        if (this.$t == Number) {
            b = function (c, d) {
                var e = c;
                var f = d;
                if (e < f) {
                    return -1
                }
                if (e == f) {
                    return 0
                }
                return 1
            }
        } else {
            if (this.$t == $.ig.Single.prototype.$type) {
                b = function (c, d) {
                    var e = c;
                    var f = d;
                    if (e < f) {
                        return -1
                    }
                    if (e == f) {
                        return 0
                    }
                    return 1
                }
            } else {
                if (this.$t == $.ig.Number.prototype.$type) {
                    b = function (c, d) {
                        var e = c;
                        var f = d;
                        if (e < f) {
                            return -1
                        }
                        if (e == f) {
                            return 0
                        }
                        return 1
                    }
                } else {
                    if (this.$t == $.ig.Date.prototype.$type) {
                        b = function (c, d) {
                            var e = c;
                            var f = d;
                            if (e.getTime() < f.getTime()) {
                                return -1
                            }
                            if (e.getTime() == f.getTime()) {
                                return 0
                            }
                            return 1
                        }
                    } else {
                        b = function (c, d) {
                            return (c).compareTo(d)
                        }
                    }
                }
            }
        }
        this.s(b)
    },
    s: function (a) {
        this.__inner.sort(a)
    },
    t: function (b) {
        var a = this;
        this.__inner.sort(function (c, d) {
            var e = c;
            var f = d;
            return b(e, f)
        })
    },
    _h: null,
    h: function (a) {
        if (arguments.length === 1) {
            this._h = a;
            return a
        } else {
            return this._h
        }
    },
    w: function (a) {
        var c = a.getEnumerator();
        while (c.moveNext()) {
            var b = c.current();
            this.__inner.add(b)
        }
    },
    x: function () {
        return this.__inner.slice(0)
    },
    y: function (a) {
    },
    isSynchronized: function () {
        return true
    },
    a: null,
    syncRoot: function () {
        return this.a
    },
    $type: new $.ig.Type("List$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IArrayList.prototype.$type, $.ig.IList.prototype.$type])
}, true);
$.ig.util.defType("IDictionary$2", "Object", {
    $type: new $.ig.Type("IDictionary$2", null, [$.ig.ICollection$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable.prototype.$type])
}, true);
$.ig.util.defType("Dictionary$2", "Object", {
    $tKey: null,
    $tValue: null,
    __inner: null,
    __keys: null,
    init: function (a, b, c) {
        if (c > 0) {
            switch (c) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break
            }
            return
        }
        this.a = null;
        this._useToString = false;
        this.b = false;
        this._needsEnsure = false;
        this.$tKey = a;
        this.$tValue = b;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        $.ig.Object.prototype.init.call(this);
        this.__inner = new $.ig.Dictionary(0);
        this.__keys = new $.ig.Dictionary(0)
    },
    init1: function (b, c, e, d) {
        this.a = null;
        this._useToString = false;
        this.b = false;
        this._needsEnsure = false;
        this.$tKey = b;
        this.$tValue = c;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        $.ig.Object.prototype.init.call(this);
        this.__inner = new $.ig.Dictionary(1, d);
        this.__keys = new $.ig.Dictionary(0)
    },
    a: null,
    init2: function (b, c, e, d) {
        this.a = null;
        this._useToString = false;
        this.b = false;
        this._needsEnsure = false;
        this.$tKey = b;
        this.$tValue = c;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        $.ig.Object.prototype.init.call(this);
        this.__inner = new $.ig.Dictionary(0);
        this.__keys = new $.ig.Dictionary(0);
        this.a = d
    },
    count: function () {
        return this.__inner.count()
    },
    item: function (d, c) {
        if (arguments.length === 2) {
            this.__inner.item(this.f(d), c);
            this.__keys.item(this.f(d), d);
            return c
        } else {
            return this.__inner.item(this.f(d))
        }
    },
    c: function () {
        return this.__inner.length()
    },
    containsKey: function (b) {
        return this.__inner.containsKey(this.f(b))
    },
    remove: function (c) {
        var d = this.f(c);
        if (!this.__keys.containsKey(d)) {
            return false
        }
        this.__inner.remove(d);
        this.__keys.remove(d);
        return true
    },
    clear: function () {
        this.__inner.clear();
        this.__keys.clear()
    },
    _useToString: null,
    b: null,
    _needsEnsure: null,
    e: function (a) {
        if (!this.b) {
            this.b = true;
            this._needsEnsure = ( typeof a == "object");
            if (!this._needsEnsure) {
                this._useToString = !a.getHashCode
            }
        }
    },
    f: function (a) {
        this.e(a);
        if (this._needsEnsure) {
            $.ig.util.ensureUniqueId(a)
        }
        if (this.a != null) {
            return this.a.getHashCode(a).toString()
        }
        if (this._useToString) {
            return a.toString()
        } else {
            return a.getHashCode().toString()
        }
    },
    add: function (c, d) {
        this.__inner.item(this.f(c), d);
        this.__keys.item(this.f(c), c)
    },
    tryGetValue: function (c, d) {
        if (!this.__inner.containsKey(this.f(c))) {
            d = null;
            return {
                ret: false,
                value: d
            }
        }
        d = this.__inner.item(this.f(c));
        return {
            ret: true,
            value: d
        };
        return {
            value: d
        }
    },
    keys: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$c = this.$this.__keys.values().getEnumerator();
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$b = this.$c.current();
                                    this.$current = this.$b;
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$c.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerable$1(this.$tKey, a)
    },
    values: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$c = this.$this.__inner.values().getEnumerator();
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$b = this.$c.current();
                                    this.$current = this.$b;
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$c.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerable$1(this.$tValue, a)
    },
    isReadOnly: function () {
        return false
    },
    add1: function (b) {
        this.add(b.c(), b.d())
    },
    contains: function (b) {
        return this.containsKey(b.c())
    },
    g: function (c, d) {
        throw new $.ig.NotImplementedException()
    },
    remove1: function (b) {
        this.remove(b.c());
        return true
    },
    h: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$b = this.$this.__keys.values().getEnumerator();
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$a = this.$b.current();
                                    this.$current = new $.ig.KeyValuePair$2(this.$tKey, this.$tValue, this.$a, this.$this.__inner.item(this.$this.f(this.$a)));
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$b.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerable$1($.ig.KeyValuePair$2.prototype.$type.specialize(this.$tKey, this.$tValue), a)
    },
    getEnumerator: function () {
        return this.h().getEnumerator()
    },
    $type: new $.ig.Type("Dictionary$2", $.ig.Object.prototype.$type, [$.ig.IDictionary$2.prototype.$type.specialize(0, 1), $.ig.IDictionary.prototype.$type])
}, true);
$.ig.util.defType("GenericEnumerable$1", "Object", {
    $t: null,
    a: null,
    init: function (b, c) {
        this.$t = b;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this.a = c
    },
    getEnumerator: function () {
        return new $.ig.GenericEnumerator$1(this.$t, this.a().getEnumerator())
    },
    $type: new $.ig.Type("GenericEnumerable$1", $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])
}, true);
$.ig.util.defType("IEnumerator$1", "Object", {
    $type: new $.ig.Type("IEnumerator$1", null, [$.ig.IEnumerator.prototype.$type])
}, true);
$.ig.util.defType("GenericEnumerator$1", "Object", {
    $t: null,
    a: null,
    init: function (b, c) {
        this.$t = b;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this.a = c
    },
    current: function () {
        return this.a.current()
    },
    moveNext: function () {
        return this.a.moveNext()
    },
    reset: function () {
        this.a.reset()
    },
    $type: new $.ig.Type("GenericEnumerator$1", $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0)])
}, true);
$.ig.util.defType("INotifyCollectionChanged", "Object", {
    $type: new $.ig.Type("INotifyCollectionChanged", null)
}, true);
$.ig.util.defType("NotifyCollectionChangedEventArgs", "EventArgs", {
    init: function (c, b) {
        if (c > 0) {
            switch (c) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.EventArgs.prototype.init.call(this);
        this.a = b;
        this.d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
        this.b = new $.ig.List$1($.ig.Object.prototype.$type, 0)
    },
    init1: function (h, e, f, g) {
        var d = this;
        $.ig.EventArgs.prototype.init.call(this);
        this.a = e;
        this.d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
        if (this.a == $.ig.NotifyCollectionChangedAction.prototype.remove || this.a == $.ig.NotifyCollectionChangedAction.prototype.replace) {
            this.d.add(f);
            this.e = g
        }
        if (this.a != $.ig.NotifyCollectionChangedAction.prototype.remove) {
            this.b = ( function () {
                var a = new $.ig.List$1($.ig.Object.prototype.$type, 0);
                a.add(f);
                return a
            }())
        } else {
            this.b = new $.ig.List$1($.ig.Object.prototype.$type, 0)
        }
        this.c = g
    },
    init2: function (j, f, g, h, i) {
        var e = this;
        $.ig.EventArgs.prototype.init.call(this);
        this.a = f;
        this.b = ( function () {
            var a = new $.ig.List$1($.ig.Object.prototype.$type, 0);
            a.add(g);
            return a
        }());
        this.c = i;
        this.d = ( function () {
            var a = new $.ig.List$1($.ig.Object.prototype.$type, 0);
            a.add(h);
            return a
        }());
        this.e = i
    },
    a: null,
    action: function () {
        return this.a
    },
    b: null,
    newItems: function () {
        return this.b
    },
    c: null,
    newStartingIndex: function () {
        return this.c
    },
    d: null,
    oldItems: function () {
        return this.d
    },
    e: null,
    oldStartingIndex: function () {
        return this.e
    },
    $type: new $.ig.Type("NotifyCollectionChangedEventArgs", $.ig.EventArgs.prototype.$type)
}, true);
$.ig.util.defType("KeyValuePair$2", "ValueType", {
    $tKey: null,
    $tValue: null,
    a: null,
    b: null,
    init: function (c, d, e, f) {
        this.$tKey = c;
        this.$tValue = d;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        $.ig.ValueType.prototype.init.call(this);
        this.a = e;
        this.b = f
    },
    c: function () {
        return this.a
    },
    d: function () {
        return this.b
    },
    $type: new $.ig.Type("KeyValuePair$2", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ReadOnlyCollection$1", "Object", {
    $t: null,
    init: function (a, b) {
        if (b > 0) {
            switch (b) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        this.b = {};
        this.$t = a;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this)
    },
    init1: function (b, d, c) {
        this.b = {};
        this.$t = b;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this.a = c
    },
    a: null,
    item: function (d, c) {
        if (arguments.length === 2) {
            this.a.item(d, c);
            return c
        } else {
            return this.a.item(d)
        }
    },
    indexOf: function (b) {
        return this.a.indexOf(b)
    },
    insert: function (c, d) {
    },
    removeAt: function (b) {
    },
    count: function () {
        return this.a.count()
    },
    isReadOnly: function () {
        return true
    },
    add: function (b) {
    },
    clear: function () {
    },
    contains: function (b) {
        return this.a.contains(b)
    },
    copyTo: function (c, d) {
        this.a.copyTo(c, d)
    },
    remove: function (b) {
        return false
    },
    getEnumerator: function () {
        return this.a.getEnumerator()
    },
    isFixedSize: function () {
        return true
    },
    add1: function (a) {
        return -1
    },
    contains1: function (a) {
        return this.a.contains(a)
    },
    indexOf1: function (a) {
        return this.a.indexOf(a)
    },
    insert1: function (a, b) {
    },
    remove1: function (a) {
    },
    copyTo1: function (a, b) {
        this.a.copyTo(a, b)
    },
    c: function () {
        return this.a
    },
    isSynchronized: function () {
        return true
    },
    b: null,
    syncRoot: function () {
        return this.b
    },
    $type: new $.ig.Type("ReadOnlyCollection$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IList.prototype.$type])
}, true);
$.ig.util.defType("NameValueCollection", "Object", {
    a: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.a = new $.ig.Dictionary$2(String, String, 0)
    },
    item: function (d, c) {
        if (arguments.length === 2) {
            if (this.a.containsKey(d)) {
                this.a.item(d, c)
            } else {
                this.a.add(d, c)
            }
            return c
        } else {
            if (this.a.containsKey(d)) {
                return this.a.item(d)
            } else {
                return null
            }
        }
    },
    $type: new $.ig.Type("NameValueCollection", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("IOrderedEnumerable$1", "Object", {
    $type: new $.ig.Type("IOrderedEnumerable$1", null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])
}, true);
$.ig.util.defType("Enumerable", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    where$1: function (d, e) {
        var c = this;
        var a = function () {
            return function (f, g) {
                return {
                    $state: 0,
                    $this: c,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$d = this.$this.getEnumerator();
                                    this.$state = 7;
                                    break;
                                case 2:
                                    this.$c = this.$d.current();
                                    this.$state = 3;
                                    break;
                                case 3:
                                    if (g(this.$c)) {
                                        this.$state = 4
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 4:
                                    this.$current = this.$c;
                                    this.$state = 5;
                                    return true;
                                case 5:
                                    this.$state = 6;
                                    break;
                                case 6:
                                    this.$state = 7;
                                    break;
                                case 7:
                                    if (this.$d.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 8
                                    }
                                    break;
                                case 8:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(d, e)
        };
        return new $.ig.GenericEnumerable$1(d, a)
    },
    where$11111: function (d, e) {
        var c = this;
        var a = function () {
            return function (f, g) {
                return {
                    $state: 0,
                    $this: c,
                    $current: null,
                    $c: 0,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$c = 0;
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$e = this.$this.getEnumerator();
                                    this.$state = 7;
                                    break;
                                case 2:
                                    this.$d = this.$e.current();
                                    this.$state = 3;
                                    break;
                                case 3:
                                    if (g(this.$d, this.$c)) {
                                        this.$state = 4
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 4:
                                    this.$current = this.$d;
                                    this.$state = 5;
                                    return true;
                                case 5:
                                    this.$state = 6;
                                    break;
                                case 6:
                                    this.$c++;
                                    this.$state = 7;
                                    break;
                                case 7:
                                    if (this.$e.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 8
                                    }
                                    break;
                                case 8:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(d, e)
        };
        return new $.ig.GenericEnumerable$1(d, a)
    },
    select$2: function (e, d, f) {
        var c = this;
        var a = function () {
            return function (h, g, i) {
                return {
                    $state: 0,
                    $this: c,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$d = this.$this.getEnumerator();
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$c = this.$d.current();
                                    this.$current = i(this.$c);
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$d.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(e, d, f)
        };
        return new $.ig.GenericEnumerable$1(d, a)
    },
    selectMany$2: function (e, d, f) {
        var c = this;
        var a = function () {
            return function (h, g, i) {
                return {
                    $state: 0,
                    $this: c,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$d = this.$this.getEnumerator();
                                    this.$state = 8;
                                    break;
                                case 2:
                                    this.$c = this.$d.current();
                                    this.$state = 3;
                                    break;
                                case 3:
                                    this.$f = i(this.$c).getEnumerator();
                                    this.$state = 6;
                                    break;
                                case 4:
                                    this.$e = this.$f.current();
                                    this.$current = this.$e;
                                    this.$state = 5;
                                    return true;
                                case 5:
                                    this.$state = 6;
                                    break;
                                case 6:
                                    if (this.$f.moveNext()) {
                                        this.$state = 4
                                    } else {
                                        this.$state = 7
                                    }
                                    break;
                                case 7:
                                    this.$state = 8;
                                    break;
                                case 8:
                                    if (this.$d.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 9
                                    }
                                    break;
                                case 9:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(e, d, f)
        };
        return new $.ig.GenericEnumerable$1(d, a)
    },
    ofType$1: function (c) {
        var b = this;
        var a = function () {
            return function (d) {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$c = this.$this.getEnumerator();
                                    this.$state = 7;
                                    break;
                                case 2:
                                    this.$b = this.$c.current();
                                    this.$state = 3;
                                    break;
                                case 3:
                                    if ($.ig.util.cast(d, this.$b) !== null) {
                                        this.$state = 4
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 4:
                                    this.$current = this.$b;
                                    this.$state = 5;
                                    return true;
                                case 5:
                                    this.$state = 6;
                                    break;
                                case 6:
                                    this.$state = 7;
                                    break;
                                case 7:
                                    if (this.$c.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 8
                                    }
                                    break;
                                case 8:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(c)
        };
        return new $.ig.GenericEnumerable$1(c, a)
    },
    last$1: function (a) {
        var f = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize(a), this);
        if (f != null) {
            return f.item(f.count() - 1)
        }
        var g = null;
        var i = this.getEnumerator();
        while (i.moveNext()) {
            var h = i.current();
            g = h
        }
        return g
    },
    first$1: function (a) {
        var e = this.getEnumerator();
        while (e.moveNext()) {
            var d = e.current();
            return d
        }
        return null
    },
    firstOrDefault$1: function (a) {
        var e = this.getEnumerator();
        while (e.moveNext()) {
            var d = e.current();
            return d
        }
        return null
    },
    orderBy$2: function (e, d, f) {
        var a = this;
        var g = new $.ig.SortedList$1(e, this);
        g.t(function (b, c) {
            var j = b;
            var k = c;
            var l = f(j);
            var m = f(k);
            if ($.ig.util.cast($.ig.IComparable.prototype.$type, l) !== null) {
                return ($.ig.util.cast($.ig.IComparable.prototype.$type, l)).compareTo(m)
            } else {
                return l.toString().compareTo(m.toString())
            }
        });
        return g
    },
    toList$1: function (a) {
        var c = new $.ig.List$1(a, 1, this);
        return c
    },
    a: function (e, f) {
        var d = this;
        var c = function () {
            return function (g, h) {
                return {
                    $state: 0,
                    $this: d,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$c = g;
                                    this.$state = 5;
                                    break;
                                case 2:
                                    this.$current = this.$c;
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    this.$c++;
                                    this.$state = 5;
                                    break;
                                case 5:
                                    if (this.$c < h) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 6:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(e, f)
        };
        return new $.ig.GenericEnumerable$1($.ig.Number.prototype.$type, c)
    },
    concat$1: function (d, e) {
        var c = this;
        var a = function () {
            return function (f, g) {
                return {
                    $state: 0,
                    $this: c,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$d = this.$this.getEnumerator();
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$c = this.$d.current();
                                    this.$current = this.$c;
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$d.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = 6;
                                    break;
                                case 6:
                                    this.$f = g.getEnumerator();
                                    this.$state = 9;
                                    break;
                                case 7:
                                    this.$e = this.$f.current();
                                    this.$current = this.$e;
                                    this.$state = 8;
                                    return true;
                                case 8:
                                    this.$state = 9;
                                    break;
                                case 9:
                                    if (this.$f.moveNext()) {
                                        this.$state = 7
                                    } else {
                                        this.$state = 10
                                    }
                                    break;
                                case 10:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(d, e)
        };
        return new $.ig.GenericEnumerable$1(d, a)
    },
    max: function () {
        var a = true;
        var f = 0;
        var h = this.getEnumerator();
        while (h.moveNext()) {
            var g = h.current();
            if (a) {
                a = false;
                f = g
            } else {
                f = Math.max(f, g)
            }
        }
        return f
    },
    max$111: function (a, c) {
        return this.select$2(a, $.ig.Number.prototype.$type, c).max()
    },
    min: function () {
        var a = true;
        var f = 0;
        var h = this.getEnumerator();
        while (h.moveNext()) {
            var g = h.current();
            if (a) {
                a = false;
                f = g
            } else {
                f = Math.min(f, g)
            }
        }
        return f
    },
    min$111: function (a, c) {
        return this.select$2(a, $.ig.Number.prototype.$type, c).max()
    },
    count$1: function (a) {
        var e = 0;
        var g = this.getEnumerator();
        while (g.moveNext()) {
            var f = g.current();
            e++
        }
        return e
    },
    reverse$1: function (c) {
        var b = this;
        var a = function () {
            return function (d) {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    $b: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$b = new $.ig.List$1(d, 1, this.$this);
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$c = this.$b.count() - 1;
                                    this.$state = 5;
                                    break;
                                case 2:
                                    this.$current = this.$b.__inner[this.$c];
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    this.$c--;
                                    this.$state = 5;
                                    break;
                                case 5:
                                    if (this.$c > 0) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 6:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(c)
        };
        return new $.ig.GenericEnumerable$1(c, a)
    },
    cast$1: function (a) {
        if (this == null) {
            throw new $.ig.ArgumentNullException("source")
        }
        var f = $.ig.util.cast($.ig.IEnumerable$1.prototype.$type.specialize(a), this);
        if (f != null) {
            return f
        }
        var g = new $.ig.List$1(a, 0);
        var i = this.getEnumerator();
        while (i.moveNext()) {
            var h = i.current();
            if ($.ig.util.cast(a, h) !== null) {
                g.add(h)
            } else {
                g.add(null)
            }
        }
        return g
    },
    take$1: function (d, e) {
        var c = this;
        var a = function () {
            return function (f, g) {
                return {
                    $state: 0,
                    $this: c,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$d = this.$this.getEnumerator();
                                    this.$state = 9;
                                    break;
                                case 2:
                                    this.$c = this.$d.current();
                                    this.$state = 3;
                                    break;
                                case 3:
                                    if (g > 0) {
                                        this.$state = 4
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 4:
                                    g--;
                                    this.$current = this.$c;
                                    this.$state = 5;
                                    return true;
                                case 5:
                                    this.$state = 8;
                                    break;
                                case 6:
                                    this.$state = -2;
                                    return false;
                                case 7:
                                    this.$state = 8;
                                    break;
                                case 8:
                                    this.$state = 9;
                                    break;
                                case 9:
                                    if (this.$d.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 10
                                    }
                                    break;
                                case 10:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(d, e)
        };
        return new $.ig.GenericEnumerable$1(d, a)
    },
    skip$1: function (d, e) {
        var c = this;
        var a = function () {
            return function (f, g) {
                return {
                    $state: 0,
                    $this: c,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$d = this.$this.getEnumerator();
                                    this.$state = 8;
                                    break;
                                case 2:
                                    this.$c = this.$d.current();
                                    this.$state = 3;
                                    break;
                                case 3:
                                    if (g <= 0) {
                                        this.$state = 4
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 4:
                                    this.$current = this.$c;
                                    this.$state = 5;
                                    return true;
                                case 5:
                                    this.$state = 7;
                                    break;
                                case 6:
                                    g--;
                                    this.$state = 7;
                                    break;
                                case 7:
                                    this.$state = 8;
                                    break;
                                case 8:
                                    if (this.$d.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 9
                                    }
                                    break;
                                case 9:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }(d, e)
        };
        return new $.ig.GenericEnumerable$1(d, a)
    },
    any$1: function (a) {
        var e = this.getEnumerator();
        while (e.moveNext()) {
            var d = e.current();
            return true
        }
        return false
    },
    contains$1: function (a, e) {
        var c = this.getEnumerator();
        while (c.moveNext()) {
            var d = c.current();
            if (d === e) {
                return true
            }
        }
        return false
    },
    union$1: function (a, c) {
        return null
    },
    toArray$1: function (a) {
        var c = new $.ig.List$1(a, 1, this);
        return c.asArrayList()
    },
    elementAt$1: function (a, d) {
        var e = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize(a), this);
        if (e != null) {
            return e.item(d)
        }
        return this.skip$1(a, d).first$1(a)
    },
    $type: new $.ig.Type("Enumerable", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("SortedList$1", "List$1", {
    $tElement: null,
    init: function (b, c) {
        this.$tElement = b;
        this.$type = this.$type.specialize(this.$tElement);
        $.ig.List$1.prototype.init1.call(this, this.$tElement, 1, c)
    },
    getEnumerator: function () {
        return $.ig.List$1.prototype.getEnumerator.call(this)
    },
    $type: new $.ig.Type("SortedList$1", $.ig.List$1.prototype.$type.specialize(0), [$.ig.IOrderedEnumerable$1.prototype.$type.specialize(0)])
}, true);
$.ig.util.defType("IArray", "Object", {
    $type: new $.ig.Type("IArray", null)
}, true);
$.ig.util.defType("AggregateException", "Error", {
    init: function (a) {
        if (a > 0) {
            switch (a) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.Error.prototype.init.call(this)
    },
    init1: function (c, b) {
        $.ig.Error.prototype.init1.call(this, 1, b)
    },
    init2: function (e, c, d) {
        $.ig.Error.prototype.init2.call(this, 2, c, d)
    },
    $type: new $.ig.Type("AggregateException", $.ig.Error.prototype.$type)
}, true);
$.ig.util.defType("ArgumentException", "Error", {
    init: function (c, b) {
        if (c > 0) {
            switch (c) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.Error.prototype.init1.call(this, 1, b + " is invalid.")
    },
    init1: function (e, c, d) {
        $.ig.Error.prototype.init1.call(this, 1, c)
    },
    $type: new $.ig.Type("ArgumentException", $.ig.Error.prototype.$type)
}, true);
$.ig.util.defType("ArgumentNullException", "Error", {
    init: function (b) {
        $.ig.Error.prototype.init1.call(this, 1, b + " cannot be null.")
    },
    $type: new $.ig.Type("ArgumentNullException", $.ig.Error.prototype.$type)
}, true);
$.ig.util.defType("AsyncCompletedEventArgs", "EventArgs", {
    a: null,
    b: null,
    c: null,
    init: function (d, e, f) {
        $.ig.EventArgs.prototype.init.call(this);
        this.b = e;
        this.a = d;
        this.c = f
    },
    error: function () {
        return this.a
    },
    cancelled: function () {
        return this.b
    },
    userState: function () {
        return this.c
    },
    d: function () {
        if (this.error() != null) {
            throw this.error()
        }
    },
    $type: new $.ig.Type("AsyncCompletedEventArgs", $.ig.EventArgs.prototype.$type)
}, true);
$.ig.util.defType("Environment", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    a: function () {
        return "\n"
    },
    $type: new $.ig.Type("Environment", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("InvalidOperationException", "Error", {
    init: function (a) {
        if (a > 0) {
            switch (a) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.Error.prototype.init1.call(this, 1, "Invalid operation")
    },
    init1: function (c, b) {
        $.ig.Error.prototype.init1.call(this, 1, b)
    },
    $type: new $.ig.Type("InvalidOperationException", $.ig.Error.prototype.$type)
}, true);
$.ig.util.defType("Debug", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    a: function (c, d) {
    },
    b: function (b) {
    },
    c: function (b) {
    },
    $type: new $.ig.Type("Debug", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ICredentials", "Object", {
    $type: new $.ig.Type("ICredentials", null)
}, true);
$.ig.util.defType("NetworkCredential", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("NetworkCredential", $.ig.Object.prototype.$type, [$.ig.ICredentials.prototype.$type])
}, true);
$.ig.util.defType("UploadStringCompletedEventArgs", "AsyncCompletedEventArgs", {
    e: null,
    init: function (e, f, g, h) {
        $.ig.AsyncCompletedEventArgs.prototype.init.call(this, f, g, h);
        this.e = e
    },
    result: function () {
        this.d();
        return this.e
    },
    $type: new $.ig.Type("UploadStringCompletedEventArgs", $.ig.AsyncCompletedEventArgs.prototype.$type)
}, true);
$.ig.util.defType("WebClient", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.f(new $.ig.WebHeaderCollection())
    },
    _e: null,
    e: function (b) {
        if (arguments.length === 1) {
            this._e = b;
            return b
        } else {
            return this._e
        }
    },
    _f: null,
    f: function (b) {
        if (arguments.length === 1) {
            this._f = b;
            return b
        } else {
            return this._f
        }
    },
    _g: null,
    g: function (b) {
        if (arguments.length === 1) {
            this._g = b;
            return b
        } else {
            return this._g
        }
    },
    uploadStringCompleted: null,
    p: function (f, g, h, i) {
        var e = this;
        this.q(f, g, h).ac(function (a) {
            if (e.uploadStringCompleted != null) {
                var c = null;
                var d = null;
                try {
                    c = a.aa()
                } catch (b) {
                    d = b
                }
                e.uploadStringCompleted(e, new $.ig.UploadStringCompletedEventArgs(c, d, a.i() == $.ig.TaskStatus.prototype.canceled, i))
            }
        })
    },
    q: function (e, f, g) {
        var l = e.value();
        var k = f;
        var j = g;
        var h = this.f().item("Content-Type");
        var i = $.ig.util.ajax(l, h, j, k);
        return new $.ig.Task$1(String, i, null)
    },
    r: function (e, f, g, h) {
        e.i(f)
    },
    s: function (e, f, g, h) {
        e.h(new $.ig.Error(1, h))
    },
    $type: new $.ig.Type("WebClient", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("WebHeaderCollection", "NameValueCollection", {
    init: function () {
        $.ig.NameValueCollection.prototype.init.call(this)
    },
    $type: new $.ig.Type("WebHeaderCollection", $.ig.NameValueCollection.prototype.$type)
}, true);
$.ig.util.defType("FaultCode", "Object", {
    init: function (b) {
        $.ig.Object.prototype.init.call(this);
        this.b(b)
    },
    _b: null,
    b: function (b) {
        if (arguments.length === 1) {
            this._b = b;
            return b
        } else {
            return this._b
        }
    },
    $type: new $.ig.Type("FaultCode", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("FaultException", "Error", {
    init: function (d, e, f) {
        $.ig.Error.prototype.init.call(this);
        this.reason(d);
        this.code(e);
        this.action(f)
    },
    _action: null,
    action: function (b) {
        if (arguments.length === 1) {
            this._action = b;
            return b
        } else {
            return this._action
        }
    },
    _code: null,
    code: function (b) {
        if (arguments.length === 1) {
            this._code = b;
            return b
        } else {
            return this._code
        }
    },
    _reason: null,
    reason: function (b) {
        if (arguments.length === 1) {
            this._reason = b;
            return b
        } else {
            return this._reason
        }
    },
    $type: new $.ig.Type("FaultException", $.ig.Error.prototype.$type)
}, true);
$.ig.util.defType("FaultException$1", "FaultException", {
    $tDetail: null,
    init: function (e, f, g, h, i) {
        this.$tDetail = e;
        this.$type = this.$type.specialize(this.$tDetail);
        $.ig.FaultException.prototype.init.call(this, g, h, i);
        this.detail(f)
    },
    _detail: null,
    detail: function (b) {
        if (arguments.length === 1) {
            this._detail = b;
            return b
        } else {
            return this._detail
        }
    },
    $type: new $.ig.Type("FaultException$1", $.ig.FaultException.prototype.$type)
}, true);
$.ig.util.defType("FaultReason", "Object", {
    a: null,
    init: function (b) {
        $.ig.Object.prototype.init.call(this);
        this.a = b
    },
    toString: function () {
        return this.a
    },
    $type: new $.ig.Type("FaultReason", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("StringBuilder", "Object", {
    _internal: null,
    internal: function (b) {
        if (arguments.length === 1) {
            this._internal = b;
            return b
        } else {
            return this._internal
        }
    },
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this._internal = []
    },
    d: function (a) {
        this._internal.push(a);
        return this
    },
    e: function (b) {
        var c = b.toString();
        this._internal.push(c);
        return this
    },
    f: function (a) {
        this._internal.push(a);
        return this
    },
    g: function (a) {
        this._internal.push(a + String.fromCharCode(10));
        return this
    },
    h: function (b, a) {
        this._internal.splice(b, 0, a);
        return this
    },
    i: function (a, b) {
        this._internal.splice(a, 0, b);
        return this
    },
    j: function (b, a) {
        this._internal.splice(b, a);
        return this
    },
    toString: function () {
        return this._internal.join("")
    },
    $type: new $.ig.Type("StringBuilder", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("NotImplementedException", "Error", {
    init: function () {
        $.ig.Error.prototype.init1.call(this, 1, "not implemented")
    },
    $type: new $.ig.Type("NotImplementedException", $.ig.Error.prototype.$type)
}, true);
$.ig.util.defType("Encoding", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    a: null,
    uTF8: function () {
        if ($.ig.Encoding.prototype.a == null) {
            $.ig.Encoding.prototype.a = new $.ig.UTF8Encoding()
        }
        return $.ig.Encoding.prototype.a
    },
    getString: function (d, e, f) {
        return ""
    },
    $type: new $.ig.Type("Encoding", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("UTF8Encoding", "Encoding", {
    init: function () {
        $.ig.Encoding.prototype.init.call(this)
    },
    getString: function (f, d, e) {
        var g = "";
        for (var h = d; h < e; h++) {
            if (f[h] == 0) {
                break
            }
            g = g + String.fromCharCode(f[h])
        }
        return g
    },
    $type: new $.ig.Type("UTF8Encoding", $.ig.Encoding.prototype.$type)
}, true);
$.ig.util.defType("Task", "Object", {
    _f: null,
    f: function (b) {
        if (arguments.length === 1) {
            this._f = b;
            return b
        } else {
            return this._f
        }
    },
    _g: null,
    g: function (b) {
        if (arguments.length === 1) {
            this._g = b;
            return b
        } else {
            return this._g
        }
    },
    _h: null,
    h: function (b) {
        if (arguments.length === 1) {
            this._h = b;
            return b
        } else {
            return this._h
        }
    },
    init: function (c, b) {
        if (c > 0) {
            switch (c) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.Task.prototype.init1.call(this, 1, b, null)
    },
    init1: function (j, f, g) {
        var d = this;
        $.ig.Object.prototype.init.call(this);
        var h = function () {
        };
        var i = function (a) {
            if (a == null) {
                d.g(true)
            } else {
                d.h(new $.ig.AggregateException(2, "Exception occurred during task execution", a))
            }
        };
        this.f(f.then(h, i));
        this.j(g)
    },
    i: function () {
        if (this.g()) {
            return $.ig.TaskStatus.prototype.canceled
        }
        switch (this.f().state()) {
            case"pending":
                return $.ig.TaskStatus.prototype.created;
            case"resolved":
                return $.ig.TaskStatus.prototype.ranToCompletion;
            case"rejected":
                return $.ig.TaskStatus.prototype.faulted;
            default:
                return $.ig.TaskStatus.prototype.created
        }
    },
    _j: null,
    j: function (b) {
        if (arguments.length === 1) {
            this._j = b;
            return b
        } else {
            return this._j
        }
    },
    t: function (f) {
        var c = this;
        var g = function () {
            return f(c)
        };
        var h = function (a) {
            return f(c)
        };
        var i = this.f().then(g, h);
        return new $.ig.Task(0, i)
    },
    v: function (e, g) {
        var c = this;
        var i = new $.ig.TaskCompletionSource$1(e, 0);
        var j = function () {
            try {
                var a = g(c);
                i.i(a)
            } catch (b) {
                i.h(b)
            }
        };
        var k = function (a) {
            return j()
        };
        var l = function (a) {
            return j()
        };
        this.f().then(k, l);
        return i.d()
    },
    $type: new $.ig.Type("Task", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("Task$1", "Task", {
    $tResult: null,
    init: function (d, f, h) {
        var c = this;
        this.y = false;
        this.$tResult = d;
        this.$type = this.$type.specialize(this.$tResult);
        $.ig.Task.prototype.init1.call(this, 1, f, h);
        var i = function (a) {
            var b = a;
            c.z = b;
            c.y = true
        };
        var j = function (a) {
            c.y = true
        };
        this.f().then(i, j)
    },
    y: null,
    z: null,
    aa: function () {
        if (!this.y) {
            throw "Result is not ready yet"
        }
        if (this.h() != null) {
            throw this.h()
        }
        return this.z
    },
    ac: function (c) {
        var b = this;
        return $.ig.Task.prototype.t.call(this, function (a) {
            return c(a)
        })
    },
    ae: function (d, e) {
        var b = this;
        var f = function (a) {
            return e(a)
        };
        return this.ag($.ig.Object.prototype.$type, f).ag($.ig.Object.prototype.$type, function (a) {
            return (a).aa()
        })
    },
    ag: function (b, c) {
        return $.ig.Task.prototype.v.call(this, b, c)
    },
    $type: new $.ig.Type("Task$1", $.ig.Task.prototype.$type)
}, true);
$.ig.util.defType("TaskCompletionSource$1", "Object", {
    $tResult: null,
    _c: null,
    c: function (b) {
        if (arguments.length === 1) {
            this._c = b;
            return b
        } else {
            return this._c
        }
    },
    init: function (a, b) {
        if (b > 0) {
            switch (b) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        this.$tResult = a;
        this.$type = this.$type.specialize(this.$tResult);
        $.ig.TaskCompletionSource$1.prototype.init1.call(this, 1, null)
    },
    init1: function (b, d, c) {
        this.$tResult = b;
        this.$type = this.$type.specialize(this.$tResult);
        $.ig.Object.prototype.init.call(this);
        this.c($.ig.util.deferred());
        this.d(new $.ig.Task$1(this.$tResult, this.c().promise(), c))
    },
    g: function () {
        this.c().reject(null)
    },
    h: function (b) {
        this.c().reject(b)
    },
    i: function (b) {
        this.c().resolve(b)
    },
    _d: null,
    d: function (b) {
        if (arguments.length === 1) {
            this._d = b;
            return b
        } else {
            return this._d
        }
    },
    $type: new $.ig.Type("TaskCompletionSource$1", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("TaskFactory", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    a: function (d, e) {
        var c = this;
        return new $.ig.Task(0, this.i(this.h(d)).always(function () {
            return e(d)
        }))
    },
    c: function (e, f, g) {
        var d = this;
        var h = new $.ig.TaskCompletionSource$1(e, 0);
        this.i(this.h(f)).always(function () {
            try {
                var a = g(f);
                h.i(a)
            } catch (b) {
                h.h(b)
            }
        });
        return h.d()
    },
    e: function (d, e, f) {
        var c = this;
        return this.e(d, e, function (a) {
            return f(a)
        })
    },
    g: function (e, f, g, h) {
        var c = this;
        var i = function (a) {
            return h(a)
        };
        return this.c($.ig.Object.prototype.$type, g, i).ae(f, function (a) {
            return a.aa()
        })
    },
    h: function (d) {
        var e = new Array(d.length);
        for (var f = 0; f < d.length; f++) {
            e[f] = d[f].f()
        }
        return e
    },
    i: function (c) {
        var e = c;
        var d = (function (a) {
            function b() {
                var j = $.ig.util.deferred();
                if (arguments.length === 0) {
                    j.resolve();
                    return j
                }
                var f = arguments.length;
                var h = true;
                for (var g = 0; g < arguments.length; g++) {
                    arguments[g].then(function () {
                        h = h && true
                    },function () {
                        h = h && false
                    }).always(function () {
                            f--;
                            if (f <= 0) {
                                if (h) {
                                    j.resolve()
                                } else {
                                    j.reject()
                                }
                            }
                        })
                }
                return j
            }

            return b.apply($, a)
        })(e);
        return d
    },
    $type: new $.ig.Type("TaskFactory", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("Tuple$2", "Object", {
    $t1: null,
    $t2: null,
    _c: null,
    c: function (b) {
        if (arguments.length === 1) {
            this._c = b;
            return b
        } else {
            return this._c
        }
    },
    _d: null,
    d: function (b) {
        if (arguments.length === 1) {
            this._d = b;
            return b
        } else {
            return this._d
        }
    },
    init: function (c, d, e, f) {
        this.$t1 = c;
        this.$t2 = d;
        this.$type = this.$type.specialize(this.$t1, this.$t2);
        $.ig.Object.prototype.init.call(this);
        this.c(e);
        this.d(f)
    },
    $type: new $.ig.Type("Tuple$2", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("Uri", "Object", {
    init: function (b) {
        $.ig.Object.prototype.init.call(this);
        this.value(b)
    },
    _value: null,
    value: function (b) {
        if (arguments.length === 1) {
            this._value = b;
            return b
        } else {
            return this._value
        }
    },
    $type: new $.ig.Type("Uri", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("JavaScriptSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    a: function (b) {
        var c = b;
        return JSON.parse(c)
    },
    b: function (b) {
        var c = b;
        return JSON.stringify(c)
    },
    $type: new $.ig.Type("JavaScriptSerializer", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XObject", "Object", {
    init: function (b) {
        $.ig.Object.prototype.init.call(this);
        this.b(b)
    },
    _b: null,
    b: function (b) {
        if (arguments.length === 1) {
            this._b = b;
            return b
        } else {
            return this._b
        }
    },
    _c: null,
    c: function () {
        return this._c
    },
    toString: function () {
        if (this.b() != null) {
            return $.ig.XmlUtils.prototype.h(this.b())
        } else {
            return ""
        }
    },
    $type: new $.ig.Type("XObject", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XAttribute", "XObject", {
    init: function (b) {
        $.ig.XObject.prototype.init.call(this, b)
    },
    h: function (b) {
        this.b(this.b().cloneNode(true));
        b.setAttributeNode(this.b())
    },
    c: function () {
        return $.ig.XmlNodeType.prototype.attribute
    },
    g: function () {
        return $.ig.XmlUtils.prototype.p(this.b())
    },
    $type: new $.ig.Type("XAttribute", $.ig.XObject.prototype.$type)
}, true);
$.ig.util.defType("XNode", "XObject", {
    init: function (b) {
        $.ig.XObject.prototype.init.call(this, b)
    },
    $type: new $.ig.Type("XNode", $.ig.XObject.prototype.$type)
}, true);
$.ig.util.defType("XContainer", "XNode", {
    init: function (b) {
        $.ig.XNode.prototype.init.call(this, b)
    },
    g: function (e) {
        var f = null;
        for (var g = 0; g < this.b().childNodes.length; g++) {
            var h = this.b().childNodes.item(g);
            if (h.nodeType == $.ig.XmlNodeType.prototype.element && $.ig.XmlUtils.prototype.n(h) == e.c() && h.namespaceURI == e.d()) {
                f = h
            }
        }
        if (f == null) {
            return null
        } else {
            return new $.ig.XElement(0, f)
        }
    },
    h: function () {
        return this.j(null)
    },
    i: function (b) {
        return this.j(b)
    },
    j: function (f) {
        var g = new $.ig.List$1($.ig.XElement.prototype.$type, 0);
        for (var h = 0; h < this.b().childNodes.length; h++) {
            var i = this.b().childNodes.item(h);
            if (i.nodeType == $.ig.XmlNodeType.prototype.element) {
                var j = false;
                if (f != null) {
                    if ($.ig.XmlUtils.prototype.n(i) == f.c() && i.namespaceURI == f.d()) {
                        j = true
                    }
                } else {
                    j = true
                }
                if (j) {
                    g.add(new $.ig.XElement(0, i))
                }
            }
        }
        return g
    },
    k: function (d) {
        var e = this.b();
        var f;
        if ($.ig.util.cast($.ig.XDocument.prototype.$type, this) !== null) {
            f = this.b()
        } else {
            f = this.b().ownerDocument
        }
        if ($.ig.util.cast($.ig.XAttribute.prototype.$type, d) !== null) {
            (d).h(e)
        } else {
            if ($.ig.util.cast($.ig.XElement.prototype.$type, d) !== null) {
                (d).r(e, f)
            }
        }
    },
    $type: new $.ig.Type("XContainer", $.ig.XNode.prototype.$type)
}, true);
$.ig.util.defType("XDocument", "XContainer", {
    init: function (c, b) {
        if (c > 0) {
            switch (c) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.XContainer.prototype.init.call(this, b)
    },
    init1: function (a) {
        $.ig.XContainer.prototype.init.call(this, $.ig.XmlUtils.prototype.i())
    },
    c: function () {
        return $.ig.XmlNodeType.prototype.document
    },
    l: function (b) {
        return new $.ig.XDocument(0, $.ig.XmlUtils.prototype.g(b))
    },
    $type: new $.ig.Type("XDocument", $.ig.XContainer.prototype.$type)
}, true);
$.ig.util.defType("XElement", "XContainer", {
    init: function (c, b) {
        if (c > 0) {
            switch (c) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.XContainer.prototype.init.call(this, b)
    },
    init1: function (c, b) {
        $.ig.XElement.prototype.init2.call(this, 2, b, null)
    },
    init2: function (g, d, e) {
        $.ig.XContainer.prototype.init.call(this, $.ig.XmlUtils.prototype.j(d.c(), d.d()));
        var f = e == null ? "" : e.toString();
        this.l(f)
    },
    l: function (b) {
        if (arguments.length === 1) {
            $.ig.XmlUtils.prototype.l(this.b(), b);
            return b
        } else {
            return $.ig.XmlUtils.prototype.k(this.b())
        }
    },
    c: function () {
        return $.ig.XmlNodeType.prototype.element
    },
    m: function () {
        return $.ig.XName.prototype.i($.ig.XmlUtils.prototype.n(this.b()), this.b().namespaceURI)
    },
    q: function (b) {
        return new $.ig.XAttribute($.ig.XmlUtils.prototype.o(this.b(), b.c(), b.d()))
    },
    r: function (c, d) {
        if (this.b().ownerDocument != d) {
            this.b($.ig.XmlUtils.prototype.m(d, this.b()))
        }
        c.appendChild(this.b())
    },
    $type: new $.ig.Type("XElement", $.ig.XContainer.prototype.$type)
}, true);
$.ig.util.defType("XmlUtils", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    a: function () {
        return !!window.DOMParser
    },
    b: function (b) {
        var c = b;
        return (new DOMParser()).parseFromString(c, "text/xml")
    },
    c: function (b) {
        var c = b;
        return (function (a) {
            var d = new ActiveXObject("Microsoft.XMLDOM");
            d.async = false;
            d.loadXML(a);
            return d
        })(c)
    },
    d: function (b) {
        var c = b;
        return (new XMLSerializer()).serializeToString(c)
    },
    e: function (b) {
        var c = b;
        return c.xml
    },
    f: function () {
        return new ActiveXObject("Microsoft.XMLDOM")
    },
    g: function (b) {
        if ($.ig.XmlUtils.prototype.a()) {
            return $.ig.XmlUtils.prototype.b(b)
        } else {
            return $.ig.XmlUtils.prototype.c(b)
        }
    },
    h: function (b) {
        if ($.ig.XmlUtils.prototype.a()) {
            return $.ig.XmlUtils.prototype.d(b)
        } else {
            return $.ig.XmlUtils.prototype.e(b)
        }
    },
    i: function () {
        var b;
        if ($.ig.XmlUtils.prototype.a()) {
            b = $.ig.XmlUtils.prototype.b("<dummy/>");
            b.removeChild(b.documentElement)
        } else {
            b = $.ig.XmlUtils.prototype.f()
        }
        return b
    },
    j: function (c, d) {
        var e = $.ig.XmlUtils.prototype.i();
        if ($.ig.XmlUtils.prototype.a()) {
            return e.createElementNS(d, c)
        } else {
            var f = c;
            var g = d;
            return e.createNode(1, f, g)
        }
    },
    k: function (b) {
        if ($.ig.XmlUtils.prototype.a()) {
            return b.textContent
        } else {
            var c = b;
            return c.text
        }
    },
    l: function (c, d) {
        if ($.ig.XmlUtils.prototype.a()) {
            c.textContent = d
        } else {
            var e = c;
            var f = d;
            e.text = f
        }
    },
    m: function (c, d) {
        if ($.ig.XmlUtils.prototype.a()) {
            return c.importNode(d, true)
        } else {
            return d
        }
    },
    n: function (b) {
        if ($.ig.XmlUtils.prototype.a()) {
            return b.localName
        } else {
            var c = b;
            return c.baseName
        }
    },
    o: function (d, e, f) {
        if ($.ig.XmlUtils.prototype.a()) {
            return d.getAttributeNodeNS(f, e)
        } else {
            var g = d;
            return g.attributes.getQualifiedItem(localName, namespaceName)
        }
    },
    p: function (b) {
        if ($.ig.XmlUtils.prototype.a()) {
            return b.nodeValue
        } else {
            var c = b;
            return c.value
        }
    },
    $type: new $.ig.Type("XmlUtils", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XName", "Object", {
    a: null,
    b: null,
    init: function (c, d) {
        $.ig.Object.prototype.init.call(this);
        this.a = c;
        this.b = d
    },
    c: function () {
        return this.a
    },
    d: function () {
        return this.b
    },
    e: function () {
        return $.ig.XNamespace.prototype.d(this.b)
    },
    i: function (c, d) {
        return new $.ig.XName(c, d)
    },
    $type: new $.ig.Type("XName", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XNamespace", "Object", {
    a: null,
    init: function (b) {
        $.ig.Object.prototype.init.call(this);
        this.a = b
    },
    d: function (b) {
        return new $.ig.XNamespace(b)
    },
    b: function () {
        return $.ig.XNamespace.prototype.d("http://www.w3.org/2000/xmlns/")
    },
    c: function () {
        return this.a
    },
    $type: new $.ig.Type("XNamespace", $.ig.Object.prototype.$type)
}, true);
$.ig.TaskStatus.prototype.created = 0;
$.ig.TaskStatus.prototype.ranToCompletion = 5;
$.ig.TaskStatus.prototype.canceled = 6;
$.ig.TaskStatus.prototype.faulted = 7;
$.ig.ListSortDirection.prototype.ascending = 0;
$.ig.ListSortDirection.prototype.descending = 1;
$.ig.NotifyCollectionChangedAction.prototype.add = 0;
$.ig.NotifyCollectionChangedAction.prototype.remove = 1;
$.ig.NotifyCollectionChangedAction.prototype.replace = 2;
$.ig.NotifyCollectionChangedAction.prototype.reset = 4;
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap],
        ["asQueryable"]
    ]
]);
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.IEnumerable$1],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig = $.ig || {};
$.ig.util.bulkDefine(["ICoreOlapElement", "Cube", "Catalog", "Dimension", "CubeType", "ScopeType", "DimensionType", "LevelType", "HierarchyOrigin", "AggregatorType", "CardinalityType", "MemberType", "Hierarchy", "Level", "Measure", "MeasureGroup", "MeasureGroupDimension", "Member", "OlapResult", "OlapResultAxis", "IPosition$2", "OlapResultTuple", "IPositionItem$2", "IHierarchicalPositionItem$2", "OlapResultAxisMember", "OlapResultCell", "HeaderCellsLayoutOrientation", "LevelSpanManager", "SpanSource", "ITableViewHeadersFactory", "TableViewHeadersFactory", "TableCompactViewHeadersFactory", "TableViewHeaderCellSource", "TableViewImpl", "TableViewSettings", "TableViewHeaderCell", "TableViewResultCell", "ArrayListCollection$1", "IOlapDataSource", "MeasureList", "MeasureListLocation", "MetadataTreeItemType", "MetadataTreeItem", "MetaTreeHelper", "HierarchyItemPosition", "MeasureGroupMetaItemsCache", "DataSourceBaseOptions", "CubeMetaItemsCache", "SourceInitHelper", "AxisDefinitionParser", "AxisElement", "PivotActionStatus", "PivotAction", "AxisItemsChangeType", "AxisChangedAction", "AxisItemsChangedAction", "ExpansionStateChangeType", "ExpansionStateChangedAction", "PivotActionManager", "PositionItemInfo$2", "PositionResolver$2", "LevelSortDirection", "LevelSortBehavior", "HierarchyFilterView", "FilterMember", "FilterMemberStateChangedEventArgs", "jQueryUtils", "TableView", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise"]);
$.ig.util.defType("LevelSortBehavior", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("LevelSortBehavior", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MetadataTreeItemType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("MetadataTreeItemType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureListLocation", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("MeasureListLocation", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("HeaderCellsLayoutOrientation", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("HeaderCellsLayoutOrientation", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MemberType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("MemberType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("CardinalityType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("CardinalityType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("AggregatorType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("AggregatorType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("HierarchyOrigin", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("HierarchyOrigin", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("DimensionType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("DimensionType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("CubeType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("CubeType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ICoreOlapElement", "Object", {
    $type: new $.ig.Type("ICoreOlapElement", null)
}, true);
$.ig.util.defType("Cube", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _catalogName: null,
    catalogName: function (a) {
        if (arguments.length === 1) {
            this._catalogName = a;
            return a
        } else {
            return this._catalogName
        }
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _cubeType: null,
    cubeType: function (a) {
        if (arguments.length === 1) {
            this._cubeType = a;
            return a
        } else {
            return this._cubeType
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _lastProcessed: null,
    lastProcessed: function (a) {
        if (arguments.length === 1) {
            this._lastProcessed = a;
            return a
        } else {
            return this._lastProcessed
        }
    },
    _lastUpdated: null,
    lastUpdated: function (a) {
        if (arguments.length === 1) {
            this._lastUpdated = a;
            return a
        } else {
            return this._lastUpdated
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this.name(a);
            return a
        } else {
            return this.name()
        }
    },
    $type: new $.ig.Type("Cube", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("Catalog", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _uniqueName: null,
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this._uniqueName = a;
            return a
        } else {
            return this._uniqueName
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    $type: new $.ig.Type("Catalog", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("Dimension", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _uniqueName: null,
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this._uniqueName = a;
            return a
        } else {
            return this._uniqueName
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _dimensionType: null,
    dimensionType: function (a) {
        if (arguments.length === 1) {
            this._dimensionType = a;
            return a
        } else {
            return this._dimensionType
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    $type: new $.ig.Type("Dimension", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("Hierarchy", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _uniqueName: null,
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this._uniqueName = a;
            return a
        } else {
            return this._uniqueName
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    _defaultMember: null,
    defaultMember: function (a) {
        if (arguments.length === 1) {
            this._defaultMember = a;
            return a
        } else {
            return this._defaultMember
        }
    },
    _allMember: null,
    allMember: function (a) {
        if (arguments.length === 1) {
            this._allMember = a;
            return a
        } else {
            return this._allMember
        }
    },
    _dimensionUniqueName: null,
    dimensionUniqueName: function (a) {
        if (arguments.length === 1) {
            this._dimensionUniqueName = a;
            return a
        } else {
            return this._dimensionUniqueName
        }
    },
    _hierarchyOrigin: null,
    hierarchyOrigin: function (a) {
        if (arguments.length === 1) {
            this._hierarchyOrigin = a;
            return a
        } else {
            return this._hierarchyOrigin
        }
    },
    _hierarchyDisplayFolder: null,
    hierarchyDisplayFolder: function (a) {
        if (arguments.length === 1) {
            this._hierarchyDisplayFolder = a;
            return a
        } else {
            return this._hierarchyDisplayFolder
        }
    },
    $type: new $.ig.Type("Hierarchy", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("Level", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _uniqueName: null,
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this._uniqueName = a;
            return a
        } else {
            return this._uniqueName
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    _depth: null,
    depth: function (a) {
        if (arguments.length === 1) {
            this._depth = a;
            return a
        } else {
            return this._depth
        }
    },
    _hierarchyUniqueName: null,
    hierarchyUniqueName: function (a) {
        if (arguments.length === 1) {
            this._hierarchyUniqueName = a;
            return a
        } else {
            return this._hierarchyUniqueName
        }
    },
    _dimensionUniqueName: null,
    dimensionUniqueName: function (a) {
        if (arguments.length === 1) {
            this._dimensionUniqueName = a;
            return a
        } else {
            return this._dimensionUniqueName
        }
    },
    _membersCount: null,
    membersCount: function (a) {
        if (arguments.length === 1) {
            this._membersCount = a;
            return a
        } else {
            return this._membersCount
        }
    },
    _levelOrigin: null,
    levelOrigin: function (a) {
        if (arguments.length === 1) {
            this._levelOrigin = a;
            return a
        } else {
            return this._levelOrigin
        }
    },
    _levelOrderingProperty: null,
    levelOrderingProperty: function (a) {
        if (arguments.length === 1) {
            this._levelOrderingProperty = a;
            return a
        } else {
            return this._levelOrderingProperty
        }
    },
    $type: new $.ig.Type("Level", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("Measure", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _uniqueName: null,
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this._uniqueName = a;
            return a
        } else {
            return this._uniqueName
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    _measureGroupName: null,
    measureGroupName: function (a) {
        if (arguments.length === 1) {
            this._measureGroupName = a;
            return a
        } else {
            return this._measureGroupName
        }
    },
    _aggregatorType: null,
    aggregatorType: function (a) {
        if (arguments.length === 1) {
            this._aggregatorType = a;
            return a
        } else {
            return this._aggregatorType
        }
    },
    _defaultFormatString: null,
    defaultFormatString: function (a) {
        if (arguments.length === 1) {
            this._defaultFormatString = a;
            return a
        } else {
            return this._defaultFormatString
        }
    },
    _measureDisplayFolder: null,
    measureDisplayFolder: function (a) {
        if (arguments.length === 1) {
            this._measureDisplayFolder = a;
            return a
        } else {
            return this._measureDisplayFolder
        }
    },
    $type: new $.ig.Type("Measure", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("MeasureGroup", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _cubeName: null,
    cubeName: function (a) {
        if (arguments.length === 1) {
            this._cubeName = a;
            return a
        } else {
            return this._cubeName
        }
    },
    _catalogName: null,
    catalogName: function (a) {
        if (arguments.length === 1) {
            this._catalogName = a;
            return a
        } else {
            return this._catalogName
        }
    },
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this.name(a);
            return a
        } else {
            return this.name()
        }
    },
    $type: new $.ig.Type("MeasureGroup", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("MeasureGroupDimension", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _cubeName: null,
    cubeName: function (a) {
        if (arguments.length === 1) {
            this._cubeName = a;
            return a
        } else {
            return this._cubeName
        }
    },
    _catalogName: null,
    catalogName: function (a) {
        if (arguments.length === 1) {
            this._catalogName = a;
            return a
        } else {
            return this._catalogName
        }
    },
    _measureGroupName: null,
    measureGroupName: function (a) {
        if (arguments.length === 1) {
            this._measureGroupName = a;
            return a
        } else {
            return this._measureGroupName
        }
    },
    _dimensionUniqueName: null,
    dimensionUniqueName: function (a) {
        if (arguments.length === 1) {
            this._dimensionUniqueName = a;
            return a
        } else {
            return this._dimensionUniqueName
        }
    },
    _measureGroupCardinality: null,
    measureGroupCardinality: function (a) {
        if (arguments.length === 1) {
            this._measureGroupCardinality = a;
            return a
        } else {
            return this._measureGroupCardinality
        }
    },
    _dimensionCardinality: null,
    dimensionCardinality: function (a) {
        if (arguments.length === 1) {
            this._dimensionCardinality = a;
            return a
        } else {
            return this._dimensionCardinality
        }
    },
    _isDimensionVisible: null,
    isDimensionVisible: function (a) {
        if (arguments.length === 1) {
            this._isDimensionVisible = a;
            return a
        } else {
            return this._isDimensionVisible
        }
    },
    _isFactDimension: null,
    isFactDimension: function (a) {
        if (arguments.length === 1) {
            this._isFactDimension = a;
            return a
        } else {
            return this._isFactDimension
        }
    },
    _dimensionPath: null,
    dimensionPath: function (a) {
        if (arguments.length === 1) {
            this._dimensionPath = a;
            return a
        } else {
            return this._dimensionPath
        }
    },
    _dimensionGranularity: null,
    dimensionGranularity: function (a) {
        if (arguments.length === 1) {
            this._dimensionGranularity = a;
            return a
        } else {
            return this._dimensionGranularity
        }
    },
    $type: new $.ig.Type("MeasureGroupDimension", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("Member", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _cubeName: null,
    cubeName: function (a) {
        if (arguments.length === 1) {
            this._cubeName = a;
            return a
        } else {
            return this._cubeName
        }
    },
    _catalogName: null,
    catalogName: function (a) {
        if (arguments.length === 1) {
            this._catalogName = a;
            return a
        } else {
            return this._catalogName
        }
    },
    _dimensionUniqueName: null,
    dimensionUniqueName: function (a) {
        if (arguments.length === 1) {
            this._dimensionUniqueName = a;
            return a
        } else {
            return this._dimensionUniqueName
        }
    },
    _hierarchyUniqueName: null,
    hierarchyUniqueName: function (a) {
        if (arguments.length === 1) {
            this._hierarchyUniqueName = a;
            return a
        } else {
            return this._hierarchyUniqueName
        }
    },
    _levelUniqueName: null,
    levelUniqueName: function (a) {
        if (arguments.length === 1) {
            this._levelUniqueName = a;
            return a
        } else {
            return this._levelUniqueName
        }
    },
    _levelDepth: null,
    levelDepth: function (a) {
        if (arguments.length === 1) {
            this._levelDepth = a;
            return a
        } else {
            return this._levelDepth
        }
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _uniqueName: null,
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this._uniqueName = a;
            return a
        } else {
            return this._uniqueName
        }
    },
    _memberType: null,
    memberType: function (a) {
        if (arguments.length === 1) {
            this._memberType = a;
            return a
        } else {
            return this._memberType
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _childrenCardinality: null,
    childrenCardinality: function (a) {
        if (arguments.length === 1) {
            this._childrenCardinality = a;
            return a
        } else {
            return this._childrenCardinality
        }
    },
    _parentLevel: null,
    parentLevel: function (a) {
        if (arguments.length === 1) {
            this._parentLevel = a;
            return a
        } else {
            return this._parentLevel
        }
    },
    _parentUniqueName: null,
    parentUniqueName: function (a) {
        if (arguments.length === 1) {
            this._parentUniqueName = a;
            return a
        } else {
            return this._parentUniqueName
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    _scope: null,
    scope: function (a) {
        if (arguments.length === 1) {
            this._scope = a;
            return a
        } else {
            return this._scope
        }
    },
    $type: new $.ig.Type("Member", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("OlapResult", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _isEmpty: null,
    isEmpty: function (a) {
        if (arguments.length === 1) {
            this._isEmpty = a;
            return a
        } else {
            return this._isEmpty
        }
    },
    _axes: null,
    axes: function (a) {
        if (arguments.length === 1) {
            this._axes = a;
            return a
        } else {
            return this._axes
        }
    },
    _cells: null,
    cells: function (a) {
        if (arguments.length === 1) {
            this._cells = a;
            return a
        } else {
            return this._cells
        }
    },
    $type: new $.ig.Type("OlapResult", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("OlapResultAxis", "Object", {
    init: function (a, b) {
        $.ig.Object.prototype.init.call(this);
        this.tuples(a.toList$1($.ig.OlapResultTuple.prototype.$type));
        this.tupleSize(b);
        this.positionResolver(new $.ig.PositionResolver$2(String, $.ig.Object.prototype.$type, a, b))
    },
    _positionResolver: null,
    positionResolver: function (a) {
        if (arguments.length === 1) {
            this._positionResolver = a;
            return a
        } else {
            return this._positionResolver
        }
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _tupleSize: null,
    tupleSize: function (a) {
        if (arguments.length === 1) {
            this._tupleSize = a;
            return a
        } else {
            return this._tupleSize
        }
    },
    _tuples: null,
    tuples: function (a) {
        if (arguments.length === 1) {
            this._tuples = a;
            return a
        } else {
            return this._tuples
        }
    },
    $type: new $.ig.Type("OlapResultAxis", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("IPosition$2", "Object", {
    $type: new $.ig.Type("IPosition$2", null)
}, true);
$.ig.util.defType("OlapResultTuple", "Object", {
    init: function (a) {
        $.ig.Object.prototype.init.call(this);
        this.members(new $.ig.ReadOnlyCollection$1($.ig.OlapResultAxisMember.prototype.$type, 1, a))
    },
    _members: null,
    members: function (a) {
        if (arguments.length === 1) {
            this._members = a;
            return a
        } else {
            return this._members
        }
    },
    getItems: function () {
        return this.members()
    },
    itemsCount: function () {
        return this.members().count()
    },
    indexOf: function (a) {
        return this.members().indexOf(a)
    },
    item: function (a) {
        return this.members().item(a)
    },
    isEmpty: function () {
        return false
    },
    $type: new $.ig.Type("OlapResultTuple", $.ig.Object.prototype.$type, [$.ig.IPosition$2.prototype.$type.specialize(String, $.ig.Object.prototype.$type)])
}, true);
$.ig.util.defType("IPositionItem$2", "Object", {
    $type: new $.ig.Type("IPositionItem$2", null)
}, true);
$.ig.util.defType("IHierarchicalPositionItem$2", "Object", {
    $type: new $.ig.Type("IHierarchicalPositionItem$2", null, [$.ig.IPositionItem$2.prototype.$type.specialize(0, 1)])
}, true);
$.ig.util.defType("OlapResultAxisMember", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.properties(new $.ig.Dictionary$2(String, String, 0))
    },
    _uniqueName: null,
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this._uniqueName = a;
            return a
        } else {
            return this._uniqueName
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _levelUniqueName: null,
    levelUniqueName: function (a) {
        if (arguments.length === 1) {
            this._levelUniqueName = a;
            return a
        } else {
            return this._levelUniqueName
        }
    },
    _hierarchyUniqueName: null,
    hierarchyUniqueName: function (a) {
        if (arguments.length === 1) {
            this._hierarchyUniqueName = a;
            return a
        } else {
            return this._hierarchyUniqueName
        }
    },
    _levelNumber: null,
    levelNumber: function (a) {
        if (arguments.length === 1) {
            this._levelNumber = a;
            return a
        } else {
            return this._levelNumber
        }
    },
    _displayInfo: null,
    displayInfo: function (a) {
        if (arguments.length === 1) {
            this._displayInfo = a;
            return a
        } else {
            return this._displayInfo
        }
    },
    childCount: function () {
        return ((this.displayInfo() & ~65536) & ~131072)
    },
    drilledDown: function () {
        return (this.displayInfo() & 65536) == 65536
    },
    parentSameAsPrev: function () {
        return (this.displayInfo() & 131072) == 131072
    },
    _properties: null,
    properties: function (a) {
        if (arguments.length === 1) {
            this._properties = a;
            return a
        } else {
            return this._properties
        }
    },
    _position: null,
    position: function (a) {
        if (arguments.length === 1) {
            this._position = a;
            return a
        } else {
            return this._position
        }
    },
    key: function () {
        return this.uniqueName()
    },
    sortKey: function () {
        var a = parseFloat(this.caption());
        if (!isNaN(a)) {
            return a
        }
        return this.caption()
    },
    hierarchyKey: function () {
        return this.hierarchyUniqueName()
    },
    parentKey: function () {
        var a = this;
        var b;
        ( function () {
            var c = a.properties().tryGetValue("PARENT_UNIQUE_NAME", b);
            b = c.value;
            return c.ret
        }());
        return b
    },
    depth: function () {
        return this.levelNumber()
    },
    isExpandable: function () {
        return this.childCount() > 0
    },
    $type: new $.ig.Type("OlapResultAxisMember", $.ig.Object.prototype.$type, [$.ig.IHierarchicalPositionItem$2.prototype.$type.specialize(String, $.ig.Object.prototype.$type)])
}, true);
$.ig.util.defType("OlapResultCell", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.properties(new $.ig.Dictionary$2(String, String, 0))
    },
    _cellOrdinal: null,
    cellOrdinal: function (a) {
        if (arguments.length === 1) {
            this._cellOrdinal = a;
            return a
        } else {
            return this._cellOrdinal
        }
    },
    _properties: null,
    properties: function (a) {
        if (arguments.length === 1) {
            this._properties = a;
            return a
        } else {
            return this._properties
        }
    },
    $type: new $.ig.Type("OlapResultCell", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("LevelSpanManager", "Object", {
    __spanSourceTable: null,
    init: function (a) {
        $.ig.Object.prototype.init.call(this);
        this.positionSize(a);
        this.__spanSourceTable = new Array(a)
    },
    _positionSize: null,
    positionSize: function (a) {
        if (arguments.length === 1) {
            this._positionSize = a;
            return a
        } else {
            return this._positionSize
        }
    },
    getSpanSource: function (e, d) {
        var a = this;
        var c = this.__spanSourceTable[e];
        if (c == null) {
            c = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.SpanSource.prototype.$type, 0);
            this.__spanSourceTable[e] = c
        }
        var f;
        if (!( function () {
            var g = c.tryGetValue(d, f);
            f = g.value;
            return g.ret
        }())) {
            f = new $.ig.SpanSource();
            if (d > 0) {
                var b;
                if (( function () {
                    var g = c.tryGetValue(d - 1, b);
                    b = g.value;
                    return g.ret
                }())) {
                    f.parent(b);
                    b.increaseSpanForChildren()
                }
            }
            c.add(d, f)
        }
        return f
    },
    $type: new $.ig.Type("LevelSpanManager", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("SpanSource", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__spanValue = 1
    },
    _parent: null,
    parent: function (a) {
        if (arguments.length === 1) {
            this._parent = a;
            return a
        } else {
            return this._parent
        }
    },
    __spanValue: null,
    spanValue: function (b) {
        if (arguments.length === 1) {
            if (this.__spanValue != b) {
                var a = b - this.__spanValue;
                if (this.parent() != null) {
                    this.parent().spanValue(this.parent().spanValue() + a)
                }
                this.__spanValue = b
            }
            return b
        } else {
            return this.__spanValue
        }
    },
    __hasChildren: null,
    increaseSpanForChildren: function () {
        if (!this.__hasChildren) {
            this.__hasChildren = true;
            this.spanValue(this.spanValue() + 1)
        }
    },
    $type: new $.ig.Type("SpanSource", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ITableViewHeadersFactory", "Object", {
    $type: new $.ig.Type("ITableViewHeadersFactory", null)
}, true);
$.ig.util.defType("TableViewHeadersFactory", "Object", {
    _sourceAxis: null,
    sourceAxis: function (a) {
        if (arguments.length === 1) {
            this._sourceAxis = a;
            return a
        } else {
            return this._sourceAxis
        }
    },
    _layoutOrientation: null,
    layoutOrientation: function (a) {
        if (arguments.length === 1) {
            this._layoutOrientation = a;
            return a
        } else {
            return this._layoutOrientation
        }
    },
    _isParentInFront: null,
    isParentInFront: function (a) {
        if (arguments.length === 1) {
            this._isParentInFront = a;
            return a
        } else {
            return this._isParentInFront
        }
    },
    _orderedTuples: null,
    orderedTuples: function (a) {
        if (arguments.length === 1) {
            this._orderedTuples = a;
            return a
        } else {
            return this._orderedTuples
        }
    },
    init: function (d, b, a, c) {
        $.ig.Object.prototype.init.call(this);
        this.sourceAxis(d);
        this.layoutOrientation(b);
        this.isParentInFront(a);
        this.orderedTuples(c)
    },
    createHeaderCells: function () {
        var a = this;
        if (this.sourceAxis().positionResolver().hasUnregisterdPositions()) {
            this.sourceAxis().positionResolver().completeRegisterPositions()
        }
        var q = this.sourceAxis().positionResolver().rootPositionInfo();
        var h = new $.ig.List$1($.ig.IList$1.prototype.$type.specialize($.ig.TableViewHeaderCellSource.prototype.$type), 0);
        for (var k = 0; k < q.positionSize(); k++) {
            h.add(new $.ig.List$1($.ig.TableViewHeaderCellSource.prototype.$type, 0))
        }
        $.ig.TableViewHeadersFactory.prototype.createHeaderCells1(q, q.childTopMostPositionItemDepth(), h, this.isParentInFront(), this.orderedTuples());
        var p = new $.ig.ArrayListCollection$1($.ig.TableViewHeaderCell.prototype.$type);
        var l = 0;
        for (var k = 0; k < q.positionSize(); k++) {
            var j = h.item(k);
            var e = 0;
            var m = 0;
            var f = j.getEnumerator();
            while (f.moveNext()) {
                var b = f.current();
                var c;
                var d;
                var r;
                var s;
                if (this.layoutOrientation() == $.ig.HeaderCellsLayoutOrientation.prototype.horizontal) {
                    c = e;
                    d = b.headerSpanSource().spanValue();
                    r = b.positionItemInfo().positionItemDepth() + l;
                    s = b.levelSpanSource().spanValue()
                } else {
                    r = e;
                    s = b.headerSpanSource().spanValue();
                    c = b.positionItemInfo().positionItemDepth() + l;
                    d = b.levelSpanSource().spanValue()
                }
                var n = this.sourceAxis().tuples().__inner[b.positionItemInfo().positionIndex()];
                var o = n.item(b.positionItemInfo().positionItemIndex());
                var g = ( function () {
                    var i = new $.ig.TableViewHeaderCell();
                    i.axisName(a.sourceAxis().name());
                    i.levelNumber(b.positionItemInfo().positionItemDepth());
                    i.caption(o.caption());
                    i.columnIndex(c);
                    i.columnSpan(d);
                    i.isExpanded(b.isExpanded());
                    i.isExpandable(b.isExpandable());
                    i.tupleIndex(b.tupleIndex());
                    i.memberIndex(b.positionItemInfo().positionItemIndex());
                    i.rowIndex(r);
                    i.rowSpan(s);
                    return i
                }());
                if (!b.isHeaderCellGroup()) {
                    e = e + b.headerSpanSource().spanValue()
                }
                m = Math.max(m, b.positionItemInfo().positionItemDepth());
                p.add(g)
            }
            l += m + 1
        }
        return p
    },
    createHeaderCells1: function (e, k, c, f, g) {
        var a = this;
        var i = new $.ig.LevelSpanManager(e.positionSize());
        var b = e.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (l) {
            return l.positionItemDepth() == k
        }).getEnumerator();
        while (b.moveNext()) {
            var h = b.current();
            var j;
            var d;
            ( function () {
                var l = $.ig.TableViewHeadersFactory.prototype.createHeaderCells2(e, h, c, i, f, g, j, d);
                j = l.headerCellSource;
                d = l.totalSpan;
                return l.ret
            }())
        }
    },
    createHostedHeaderCells: function (k, c, l, i, d, j) {
        var a = this;
        var h = k.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (m) {
            return m.positionItemDepth() == k.childTopMostPositionItemDepth()
        }).toList$1($.ig.PositionItemInfo$2.prototype.$type);
        if (h.count() > 0) {
            var b = h.getEnumerator();
            while (b.moveNext()) {
                var g = b.current();
                var f;
                var e;
                ( function () {
                    var m = $.ig.TableViewHeadersFactory.prototype.createHeaderCells2(k, g, c, l, i, j, f, e);
                    f = m.headerCellSource;
                    e = m.totalSpan;
                    return m.ret
                }());
                d.headerSpanSource().spanValue(d.headerSpanSource().spanValue() + e);
                if (f.isHeaderCellGroup()) {
                    d.headerSpanSource().spanValue(d.headerSpanSource().spanValue() + 1)
                }
            }
            d.headerSpanSource().spanValue(d.headerSpanSource().spanValue() - 1)
        } else {
            j.add(k.positionIndex())
        }
        d.tupleIndex(k.positionIndex())
    },
    createHeaderCells2: function (l, p, h, q, m, o, i, r) {
        var a = this;
        var j = h.item(p.positionItemIndex());
        var n = q.getSpanSource(p.positionItemIndex(), p.positionItemDepth());
        var g = ( function () {
            var s = new $.ig.TableViewHeaderCellSource();
            s.levelSpanSource(n);
            s.positionItemInfo(p);
            s.isExpandable(p.isExpandable());
            return s
        }());
        i = g;
        if (m) {
            j.add(g);
            $.ig.TableViewHeadersFactory.prototype.createHostedHeaderCells(p, h, q, true, g, o)
        }
        var e = l.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (s) {
            return s.parentKey() == p.key()
        }).toList$1($.ig.PositionItemInfo$2.prototype.$type);
        if (e.count() > 0) {
            var k = ( function () {
                var s = new $.ig.TableViewHeaderCellSource();
                s.isHeaderCellGroup(true);
                s.positionItemInfo(p);
                s.isExpandable(p.isExpandable());
                return s
            }());
            j.add(k);
            var f = e.getEnumerator();
            while (f.moveNext()) {
                var c = f.current();
                var b;
                var d;
                ( function () {
                    var s = $.ig.TableViewHeadersFactory.prototype.createHeaderCells2(l, c, h, q, m, o, b, d);
                    b = s.headerCellSource;
                    d = s.totalSpan;
                    return s.ret
                }());
                k.headerSpanSource().spanValue(k.headerSpanSource().spanValue() + d);
                if (b.isHeaderCellGroup()) {
                    k.headerSpanSource().spanValue(k.headerSpanSource().spanValue() + 1)
                }
            }
            k.headerSpanSource().spanValue(k.headerSpanSource().spanValue() - 1);
            g.isExpanded(true);
            g.isExpandable(false);
            k.isExpanded(true);
            g.headerCellGroup(k);
            if (!m) {
                j.add(g);
                $.ig.TableViewHeadersFactory.prototype.createHostedHeaderCells(p, h, q, false, g, o)
            }
            k.tupleIndex(g.tupleIndex());
            i = k;
            r = g.headerSpanSource().spanValue() + k.headerSpanSource().spanValue() - 1
        } else {
            if (!m) {
                j.add(g);
                $.ig.TableViewHeadersFactory.prototype.createHostedHeaderCells(p, h, q, false, g, o)
            }
            r = g.headerSpanSource().spanValue()
        }
        return {
            headerCellSource: i,
            totalSpan: r
        }
    },
    $type: new $.ig.Type("TableViewHeadersFactory", $.ig.Object.prototype.$type, [$.ig.ITableViewHeadersFactory.prototype.$type])
}, true);
$.ig.util.defType("TableCompactViewHeadersFactory", "Object", {
    _sourceAxis: null,
    sourceAxis: function (a) {
        if (arguments.length === 1) {
            this._sourceAxis = a;
            return a
        } else {
            return this._sourceAxis
        }
    },
    _layoutOrientation: null,
    layoutOrientation: function (a) {
        if (arguments.length === 1) {
            this._layoutOrientation = a;
            return a
        } else {
            return this._layoutOrientation
        }
    },
    _isParentInFront: null,
    isParentInFront: function (a) {
        if (arguments.length === 1) {
            this._isParentInFront = a;
            return a
        } else {
            return this._isParentInFront
        }
    },
    _orderedTuples: null,
    orderedTuples: function (a) {
        if (arguments.length === 1) {
            this._orderedTuples = a;
            return a
        } else {
            return this._orderedTuples
        }
    },
    init: function (d, b, a, c) {
        $.ig.Object.prototype.init.call(this);
        this.sourceAxis(d);
        this.layoutOrientation(b);
        this.isParentInFront(a);
        this.orderedTuples(c)
    },
    createHeaderCells: function () {
        var a = this;
        if (this.sourceAxis().positionResolver().hasUnregisterdPositions()) {
            this.sourceAxis().positionResolver().completeRegisterPositions()
        }
        var q = this.sourceAxis().positionResolver().rootPositionInfo();
        var h = new $.ig.List$1($.ig.IList$1.prototype.$type.specialize($.ig.TableViewHeaderCellSource.prototype.$type), 0);
        for (var k = 0; k < q.positionSize(); k++) {
            h.add(new $.ig.List$1($.ig.TableViewHeaderCellSource.prototype.$type, 0))
        }
        $.ig.TableCompactViewHeadersFactory.prototype.createHeaderCells1(q, q.childTopMostPositionItemDepth(), h, this.isParentInFront(), this.orderedTuples());
        var p = new $.ig.ArrayListCollection$1($.ig.TableViewHeaderCell.prototype.$type);
        var l = 0;
        for (var k = 0; k < q.positionSize(); k++) {
            var j = h.item(k);
            var e = 0;
            var m = 0;
            var f = j.getEnumerator();
            while (f.moveNext()) {
                var b = f.current();
                var c;
                var d;
                var r;
                var s;
                if (this.layoutOrientation() == $.ig.HeaderCellsLayoutOrientation.prototype.horizontal) {
                    c = e;
                    d = b.headerSpanSource().spanValue();
                    r = l;
                    s = 1
                } else {
                    r = e;
                    s = b.headerSpanSource().spanValue();
                    c = l;
                    d = 1
                }
                var n = this.sourceAxis().tuples().__inner[b.positionItemInfo().positionIndex()];
                var o = n.item(b.positionItemInfo().positionItemIndex());
                var g = ( function () {
                    var i = new $.ig.TableViewHeaderCell();
                    i.axisName(a.sourceAxis().name());
                    i.levelNumber(b.positionItemInfo().positionItemDepth());
                    i.caption(o.caption());
                    i.columnIndex(c);
                    i.columnSpan(d);
                    i.isExpanded(b.isExpanded());
                    i.isExpandable(b.isExpandable());
                    i.tupleIndex(b.tupleIndex());
                    i.memberIndex(b.positionItemInfo().positionItemIndex());
                    i.rowIndex(r);
                    i.rowSpan(s);
                    return i
                }());
                if (!b.isHeaderCellGroup()) {
                    e = e + b.headerSpanSource().spanValue()
                }
                p.add(g)
            }
            l += m + 1
        }
        return p
    },
    createHeaderCells1: function (e, k, c, f, g) {
        var a = this;
        var i = new $.ig.LevelSpanManager(e.positionSize());
        var b = e.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (l) {
            return l.positionItemDepth() == k
        }).getEnumerator();
        while (b.moveNext()) {
            var h = b.current();
            var j;
            var d;
            ( function () {
                var l = $.ig.TableCompactViewHeadersFactory.prototype.createHeaderCells2(e, h, c, i, f, g, j, d);
                j = l.headerCellSource;
                d = l.totalSpan;
                return l.ret
            }())
        }
    },
    createHostedHeaderCells: function (k, c, l, i, d, j) {
        var a = this;
        var h = k.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (m) {
            return m.positionItemDepth() == k.childTopMostPositionItemDepth()
        }).toList$1($.ig.PositionItemInfo$2.prototype.$type);
        if (h.count() > 0) {
            var b = h.getEnumerator();
            while (b.moveNext()) {
                var g = b.current();
                var f;
                var e;
                ( function () {
                    var m = $.ig.TableCompactViewHeadersFactory.prototype.createHeaderCells2(k, g, c, l, i, j, f, e);
                    f = m.headerCellSource;
                    e = m.totalSpan;
                    return m.ret
                }());
                d.headerSpanSource().spanValue(d.headerSpanSource().spanValue() + e);
                if (f.headerCellGroup() != null) {
                    d.headerSpanSource().spanValue(d.headerSpanSource().spanValue() + 1)
                }
            }
            d.headerSpanSource().spanValue(d.headerSpanSource().spanValue() - 1)
        } else {
            j.add(k.positionIndex())
        }
        d.tupleIndex(k.positionIndex())
    },
    createHeaderCells2: function (l, p, h, q, m, o, i, r) {
        var a = this;
        var j = h.item(p.positionItemIndex());
        var n = q.getSpanSource(p.positionItemIndex(), p.positionItemDepth());
        var g = ( function () {
            var s = new $.ig.TableViewHeaderCellSource();
            s.levelSpanSource(n);
            s.positionItemInfo(p);
            s.isExpandable(p.isExpandable());
            return s
        }());
        i = g;
        if (m) {
            j.add(g);
            $.ig.TableCompactViewHeadersFactory.prototype.createHostedHeaderCells(p, h, q, true, g, o)
        }
        var e = l.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (s) {
            return s.parentKey() == p.key()
        }).toList$1($.ig.PositionItemInfo$2.prototype.$type);
        if (e.count() > 0) {
            var k = ( function () {
                var s = new $.ig.TableViewHeaderCellSource();
                s.isHeaderCellGroup(true);
                s.positionItemInfo(p);
                s.isExpandable(p.isExpandable());
                return s
            }());
            var f = e.getEnumerator();
            while (f.moveNext()) {
                var c = f.current();
                var b;
                var d;
                ( function () {
                    var s = $.ig.TableCompactViewHeadersFactory.prototype.createHeaderCells2(l, c, h, q, m, o, b, d);
                    b = s.headerCellSource;
                    d = s.totalSpan;
                    return s.ret
                }());
                k.headerSpanSource().spanValue(k.headerSpanSource().spanValue() + d);
                if (b.headerCellGroup() != null) {
                    k.headerSpanSource().spanValue(k.headerSpanSource().spanValue() + 1)
                }
            }
            k.headerSpanSource().spanValue(k.headerSpanSource().spanValue() - 1);
            g.isExpanded(true);
            g.isExpandable(true);
            g.headerCellGroup(k);
            if (!m) {
                j.add(g);
                $.ig.TableCompactViewHeadersFactory.prototype.createHostedHeaderCells(p, h, q, false, g, o)
            }
            k.tupleIndex(g.tupleIndex());
            r = g.headerSpanSource().spanValue() + k.headerSpanSource().spanValue() - 1
        } else {
            if (!m) {
                j.add(g);
                $.ig.TableCompactViewHeadersFactory.prototype.createHostedHeaderCells(p, h, q, false, g, o)
            }
            r = g.headerSpanSource().spanValue()
        }
        return {
            headerCellSource: i,
            totalSpan: r
        }
    },
    $type: new $.ig.Type("TableCompactViewHeadersFactory", $.ig.Object.prototype.$type, [$.ig.ITableViewHeadersFactory.prototype.$type])
}, true);
$.ig.util.defType("TableViewHeaderCellSource", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.headerSpanSource(new $.ig.SpanSource());
        this.levelSpanSource(new $.ig.SpanSource())
    },
    _isHeaderCellGroup: null,
    isHeaderCellGroup: function (a) {
        if (arguments.length === 1) {
            this._isHeaderCellGroup = a;
            return a
        } else {
            return this._isHeaderCellGroup
        }
    },
    _rowIndex: null,
    rowIndex: function (a) {
        if (arguments.length === 1) {
            this._rowIndex = a;
            return a
        } else {
            return this._rowIndex
        }
    },
    _columnIndex: null,
    columnIndex: function (a) {
        if (arguments.length === 1) {
            this._columnIndex = a;
            return a
        } else {
            return this._columnIndex
        }
    },
    _levelSpanSource: null,
    levelSpanSource: function (a) {
        if (arguments.length === 1) {
            this._levelSpanSource = a;
            return a
        } else {
            return this._levelSpanSource
        }
    },
    _headerSpanSource: null,
    headerSpanSource: function (a) {
        if (arguments.length === 1) {
            this._headerSpanSource = a;
            return a
        } else {
            return this._headerSpanSource
        }
    },
    _headerCellGroup: null,
    headerCellGroup: function (a) {
        if (arguments.length === 1) {
            this._headerCellGroup = a;
            return a
        } else {
            return this._headerCellGroup
        }
    },
    _positionItemInfo: null,
    positionItemInfo: function (a) {
        if (arguments.length === 1) {
            this._positionItemInfo = a;
            return a
        } else {
            return this._positionItemInfo
        }
    },
    _tupleIndex: null,
    tupleIndex: function (a) {
        if (arguments.length === 1) {
            this._tupleIndex = a;
            return a
        } else {
            return this._tupleIndex
        }
    },
    _memberIndex: null,
    memberIndex: function (a) {
        if (arguments.length === 1) {
            this._memberIndex = a;
            return a
        } else {
            return this._memberIndex
        }
    },
    _isExpanded: null,
    isExpanded: function (a) {
        if (arguments.length === 1) {
            this._isExpanded = a;
            return a
        } else {
            return this._isExpanded
        }
    },
    _isExpandable: null,
    isExpandable: function (a) {
        if (arguments.length === 1) {
            this._isExpandable = a;
            return a
        } else {
            return this._isExpandable
        }
    },
    $type: new $.ig.Type("TableViewHeaderCellSource", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("TableViewImpl", "Object", {
    init: function (c, a, b, d) {
        $.ig.Object.prototype.init.call(this);
        if (c == null) {
            throw new $.ig.ArgumentNullException("result")
        } else {
            this.result(c)
        }
        if (d == null) {
            this.viewSettings(new $.ig.TableViewSettings())
        } else {
            this.viewSettings(d)
        }
        this.hasColumns(a);
        this.hasRows(b)
    },
    _viewSettings: null,
    viewSettings: function (a) {
        if (arguments.length === 1) {
            this._viewSettings = a;
            return a
        } else {
            return this._viewSettings
        }
    },
    _result: null,
    result: function (a) {
        if (arguments.length === 1) {
            this._result = a;
            return a
        } else {
            return this._result
        }
    },
    _hasRows: null,
    hasRows: function (a) {
        if (arguments.length === 1) {
            this._hasRows = a;
            return a
        } else {
            return this._hasRows
        }
    },
    _hasColumns: null,
    hasColumns: function (a) {
        if (arguments.length === 1) {
            this._hasColumns = a;
            return a
        } else {
            return this._hasColumns
        }
    },
    _rowHeadersFactory: null,
    rowHeadersFactory: function (a) {
        if (arguments.length === 1) {
            this._rowHeadersFactory = a;
            return a
        } else {
            return this._rowHeadersFactory
        }
    },
    _columnHeadersFactory: null,
    columnHeadersFactory: function (a) {
        if (arguments.length === 1) {
            this._columnHeadersFactory = a;
            return a
        } else {
            return this._columnHeadersFactory
        }
    },
    _isInitialized: null,
    isInitialized: function (a) {
        if (arguments.length === 1) {
            this._isInitialized = a;
            return a
        } else {
            return this._isInitialized
        }
    },
    __rowHeaders: null,
    __columnHeaders: null,
    __resultCells: null,
    rowHeaders: function (a) {
        if (arguments.length === 1) {
            this.__rowHeaders = a;
            return a
        } else {
            if (!this.isInitialized()) {
                this.initialize()
            }
            return this.__rowHeaders
        }
    },
    columnHeaders: function (a) {
        if (arguments.length === 1) {
            this.__columnHeaders = a;
            return a
        } else {
            if (!this.isInitialized()) {
                this.initialize()
            }
            return this.__columnHeaders
        }
    },
    resultCells: function (a) {
        if (arguments.length === 1) {
            this.__resultCells = a;
            return a
        } else {
            if (!this.isInitialized()) {
                this.initialize()
            }
            return this.__resultCells
        }
    },
    initialize: function () {
        var a = this;
        this.rowHeadersFactory(null);
        this.columnHeadersFactory(null);
        if (this.result().isEmpty()) {
            this.isInitialized(true);
            return
        }
        var b = 0;
        var h = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
        var j = 1;
        if (this.hasColumns()) {
            var f = this.result().axes().item(b);
            b++;
            var o = this.initializeColumnHeaders(f);
            for (var l = 0; l < o.count(); l++) {
                var m = o.item(l);
                h.add(m, l)
            }
            j = f.tuples().count()
        }
        var s = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
        if (this.hasRows()) {
            var q = this.result().axes().item(b);
            var o = this.initializeRowHeaders(q);
            for (var l = 0; l < o.count(); l++) {
                var m = o.item(l);
                s.add(m, l)
            }
        }
        var p = new $.ig.ArrayListCollection$1($.ig.TableViewResultCell.prototype.$type);
        for (var l = 0; l < this.result().cells().count(); l++) {
            var c = this.result().cells().item(l);
            var e;
            ( function () {
                var i = c.properties().tryGetValue("Value", e);
                e = i.value;
                return i.ret
            }());
            var k;
            ( function () {
                var i = c.properties().tryGetValue("FmtValue", k);
                k = i.value;
                return i.ret
            }());
            var d = c.cellOrdinal();
            if (this.hasColumns()) {
                var g = d % j;
                var n = h.item(g);
                if (g != n) {
                    var r = $.ig.intDivide(d, j);
                    d = r * j + n
                }
            }
            if (this.hasRows()) {
                var r = $.ig.intDivide(d, j);
                var n = s.item(r);
                if (r != n) {
                    var g = d % j;
                    d = n * j + g
                }
            }
            p.add(( function () {
                var i = new $.ig.TableViewResultCell();
                i.value(e);
                i.formatedValue(k);
                i.cellOrdinal(d);
                i.resultCellIndex(l);
                return i
            }()));
            this.resultCells(p)
        }
        this.isInitialized(true)
    },
    initializeColumnHeaders: function (a) {
        var b = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        if (this.viewSettings().compactColumnHeaders()) {
            this.columnHeadersFactory(new $.ig.TableCompactViewHeadersFactory(a, $.ig.HeaderCellsLayoutOrientation.prototype.horizontal, this.viewSettings().isParentInFrontForColumns(), b))
        } else {
            this.columnHeadersFactory(new $.ig.TableViewHeadersFactory(a, $.ig.HeaderCellsLayoutOrientation.prototype.horizontal, this.viewSettings().isParentInFrontForColumns(), b))
        }
        this.columnHeaders(this.columnHeadersFactory().createHeaderCells());
        return b
    },
    initializeRowHeaders: function (b) {
        var a = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        if (this.viewSettings().compactRowHeaders()) {
            this.rowHeadersFactory(new $.ig.TableCompactViewHeadersFactory(b, $.ig.HeaderCellsLayoutOrientation.prototype.vertical, this.viewSettings().isParentInFrontForRows(), a))
        } else {
            this.rowHeadersFactory(new $.ig.TableViewHeadersFactory(b, $.ig.HeaderCellsLayoutOrientation.prototype.vertical, this.viewSettings().isParentInFrontForRows(), a))
        }
        this.rowHeaders(this.rowHeadersFactory().createHeaderCells());
        return a
    },
    $type: new $.ig.Type("TableViewImpl", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("TableViewSettings", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.levelDefaultSortDirections(new $.ig.List$1($.ig.LevelSortDirection.prototype.$type, 0))
    },
    _isParentInFrontForColumns: null,
    isParentInFrontForColumns: function (a) {
        if (arguments.length === 1) {
            this._isParentInFrontForColumns = a;
            return a
        } else {
            return this._isParentInFrontForColumns
        }
    },
    _isParentInFrontForRows: null,
    isParentInFrontForRows: function (a) {
        if (arguments.length === 1) {
            this._isParentInFrontForRows = a;
            return a
        } else {
            return this._isParentInFrontForRows
        }
    },
    _levelDefaultSortDirections: null,
    levelDefaultSortDirections: function (a) {
        if (arguments.length === 1) {
            this._levelDefaultSortDirections = a;
            return a
        } else {
            return this._levelDefaultSortDirections
        }
    },
    _levelFirstSortDirection: null,
    levelFirstSortDirection: function (a) {
        if (arguments.length === 1) {
            this._levelFirstSortDirection = a;
            return a
        } else {
            return this._levelFirstSortDirection
        }
    },
    _preserveMembersOrder: null,
    preserveMembersOrder: function (a) {
        if (arguments.length === 1) {
            this._preserveMembersOrder = a;
            return a
        } else {
            return this._preserveMembersOrder
        }
    },
    _compactRowHeaders: null,
    compactRowHeaders: function (a) {
        if (arguments.length === 1) {
            this._compactRowHeaders = a;
            return a
        } else {
            return this._compactRowHeaders
        }
    },
    _compactColumnHeaders: null,
    compactColumnHeaders: function (a) {
        if (arguments.length === 1) {
            this._compactColumnHeaders = a;
            return a
        } else {
            return this._compactColumnHeaders
        }
    },
    $type: new $.ig.Type("TableViewSettings", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("TableViewHeaderCell", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.columnSpan(1);
        this.rowSpan(1)
    },
    _id: null,
    id: function (a) {
        if (arguments.length === 1) {
            this._id = a;
            return a
        } else {
            return this._id
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _isExpanded: null,
    isExpanded: function (a) {
        if (arguments.length === 1) {
            this._isExpanded = a;
            return a
        } else {
            return this._isExpanded
        }
    },
    _isExpandable: null,
    isExpandable: function (a) {
        if (arguments.length === 1) {
            this._isExpandable = a;
            return a
        } else {
            return this._isExpandable
        }
    },
    _rowIndex: null,
    rowIndex: function (a) {
        if (arguments.length === 1) {
            this._rowIndex = a;
            return a
        } else {
            return this._rowIndex
        }
    },
    _rowSpan: null,
    rowSpan: function (a) {
        if (arguments.length === 1) {
            this._rowSpan = a;
            return a
        } else {
            return this._rowSpan
        }
    },
    _columnIndex: null,
    columnIndex: function (a) {
        if (arguments.length === 1) {
            this._columnIndex = a;
            return a
        } else {
            return this._columnIndex
        }
    },
    _columnSpan: null,
    columnSpan: function (a) {
        if (arguments.length === 1) {
            this._columnSpan = a;
            return a
        } else {
            return this._columnSpan
        }
    },
    _axisName: null,
    axisName: function (a) {
        if (arguments.length === 1) {
            this._axisName = a;
            return a
        } else {
            return this._axisName
        }
    },
    _tupleIndex: null,
    tupleIndex: function (a) {
        if (arguments.length === 1) {
            this._tupleIndex = a;
            return a
        } else {
            return this._tupleIndex
        }
    },
    _memberIndex: null,
    memberIndex: function (a) {
        if (arguments.length === 1) {
            this._memberIndex = a;
            return a
        } else {
            return this._memberIndex
        }
    },
    _levelNumber: null,
    levelNumber: function (a) {
        if (arguments.length === 1) {
            this._levelNumber = a;
            return a
        } else {
            return this._levelNumber
        }
    },
    toString: function () {
        return this.caption()
    },
    $type: new $.ig.Type("TableViewHeaderCell", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("TableViewResultCell", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _value: null,
    value: function (a) {
        if (arguments.length === 1) {
            this._value = a;
            return a
        } else {
            return this._value
        }
    },
    _formatedValue: null,
    formatedValue: function (a) {
        if (arguments.length === 1) {
            this._formatedValue = a;
            return a
        } else {
            return this._formatedValue
        }
    },
    _cellOrdinal: null,
    cellOrdinal: function (a) {
        if (arguments.length === 1) {
            this._cellOrdinal = a;
            return a
        } else {
            return this._cellOrdinal
        }
    },
    _resultCellIndex: null,
    resultCellIndex: function (a) {
        if (arguments.length === 1) {
            this._resultCellIndex = a;
            return a
        } else {
            return this._resultCellIndex
        }
    },
    $type: new $.ig.Type("TableViewResultCell", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ArrayListCollection$1", "Object", {
    $t: null,
    init: function (a) {
        this.$t = a;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);
        this.inner(new $.ig.Array())
    },
    _inner: null,
    inner: function (a) {
        if (arguments.length === 1) {
            this._inner = a;
            return a
        } else {
            return this._inner
        }
    },
    collectionChanged: null,
    indexOf: function (a) {
        return this.inner().indexOf(a)
    },
    insert: function (a, b) {
        this.inner().insert(a, b);
        this.triggerItemAdded(a, b)
    },
    removeAt: function (a) {
        var b = this.inner()[a];
        this.inner().removeAt(a);
        this.triggerItemRemoved(a, b)
    },
    item: function (a, b) {
        if (arguments.length === 2) {
            this.inner()[a] = b;
            return b
        } else {
            return this.inner()[a]
        }
    },
    add: function (a) {
        this.inner().add(a);
        this.triggerItemAdded(this.inner().length - 1, a)
    },
    clear: function () {
        this.inner().clear();
        this.triggerClear()
    },
    contains: function (a) {
        return this.inner().contains(a)
    },
    copyTo: function (a, b) {
        throw new $.ig.NotImplementedException()
    },
    count: function () {
        return this.inner().length
    },
    isReadOnly: function () {
        return false
    },
    remove: function (b) {
        var a = this.inner().indexOf(b);
        if (a >= 0) {
            this.inner().removeAt(a);
            this.triggerItemRemoved(a, b);
            return true
        }
        return false
    },
    enumerate: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$i = 0;
                                    this.$state = 5;
                                    break;
                                case 2:
                                    this.$current = this.$this.inner()[this.$i];
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    this.$i++;
                                    this.$state = 5;
                                    break;
                                case 5:
                                    if (this.$i < this.$this.inner().length) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 6
                                    }
                                    break;
                                case 6:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerable$1(this.$t, a)
    },
    getEnumerator: function () {
        return this.enumerate().getEnumerator()
    },
    triggerItemAdded: function (b, c) {
        if (this.collectionChanged != null) {
            var a = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, c, b);
            this.collectionChanged(this, a)
        }
    },
    triggerItemRemoved: function (b, c) {
        if (this.collectionChanged != null) {
            var a = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, c, b);
            this.collectionChanged(this, a)
        }
    },
    triggerClear: function () {
        if (this.collectionChanged != null) {
            var a = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.reset, null, -1);
            this.collectionChanged(this, a)
        }
    },
    $type: new $.ig.Type("ArrayListCollection$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.INotifyCollectionChanged.prototype.$type])
}, true);
$.ig.util.defType("IOlapDataSource", "Object", {
    $type: new $.ig.Type("IOlapDataSource", null)
}, true);
$.ig.util.defType("MeasureList", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    uniqueName: function (a) {
        if (arguments.length === 1) {
            this.name(a);
            return a
        } else {
            return this.name()
        }
    },
    _measures: null,
    measures: function (a) {
        if (arguments.length === 1) {
            this._measures = a;
            return a
        } else {
            return this._measures
        }
    },
    $type: new $.ig.Type("MeasureList", $.ig.Object.prototype.$type, [$.ig.ICoreOlapElement.prototype.$type])
}, true);
$.ig.util.defType("MetadataTreeItem", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _item: null,
    item: function (a) {
        if (arguments.length === 1) {
            this._item = a;
            return a
        } else {
            return this._item
        }
    },
    _type: null,
    type: function (a) {
        if (arguments.length === 1) {
            this._type = a;
            return a
        } else {
            return this._type
        }
    },
    _caption: null,
    caption: function (a) {
        if (arguments.length === 1) {
            this._caption = a;
            return a
        } else {
            return this._caption
        }
    },
    _children: null,
    children: function (a) {
        if (arguments.length === 1) {
            this._children = a;
            return a
        } else {
            return this._children
        }
    },
    addChild: function (b) {
        if (this.children() == null) {
            this.children(new Array(1));
            this.children()[0] = b;
            return
        }
        var a = new Array(this.children().length + 1);
        $.ig.Array.prototype.copy(this.children(), 0, a, 0, this.children().length);
        a[this.children().length] = b;
        this.children(a)
    },
    $type: new $.ig.Type("MetadataTreeItem", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MetaTreeHelper", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    getDimensionMetaItems: function (e, o, g, m, b) {
        var a = this;
        var q = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
        var k = new $.ig.HierarchyItemPosition();
        k.hierarchyIndex(0);
        k.levelIndex(0);
        var h = new $.ig.List$1($.ig.Hierarchy.prototype.$type, 0);
        var f = g.getEnumerator();
        while (f.moveNext()) {
            var j = f.current();
            h.add(j)
        }
        var n = new $.ig.List$1($.ig.Level.prototype.$type, 0);
        var f = m.getEnumerator();
        while (f.moveNext()) {
            var l = f.current();
            n.add(l)
        }
        var f = e.getEnumerator();
        while (f.moveNext()) {
            var c = f.current();
            var i = $.ig.MetaTreeHelper.prototype.getHierarchyMetaItems(h, n, c, k);
            if (c.dimensionType() != $.ig.DimensionType.prototype.measure) {
                var d = ( function () {
                    var r = new $.ig.MetadataTreeItem();
                    r.type($.ig.MetadataTreeItemType.prototype.dimension);
                    r.caption(c.caption());
                    r.item(c);
                    return r
                }());
                $.ig.MetaTreeHelper.prototype.setMetaItemChildren(d, i);
                q.add(d)
            } else {
                var p = $.ig.MetaTreeHelper.prototype.getMeasureMetadataItem(o, c, b);
                q.insert(0, p)
            }
        }
        return q
    },
    setMetaItemChildren: function (d, a) {
        if (a.count() > 0) {
            var b = new Array(a.count());
            for (var c = 0; c < a.count(); c++) {
                b[c] = a.item(c)
            }
            d.children(b)
        }
    },
    getHierarchyMetaItems: function (h, r, b, p) {
        var a = this;
        var m = new $.ig.Dictionary$2(String, $.ig.MetadataTreeItem.prototype.$type, 0);
        var j = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
        var k = h.item(p.hierarchyIndex());
        while (k.dimensionUniqueName() != b.uniqueName()) {
            p.hierarchyIndex(p.hierarchyIndex() + 1);
            k = h.item(p.hierarchyIndex())
        }
        while (k.dimensionUniqueName() == b.uniqueName()) {
            var t = null;
            if (!String.isNullOrEmpty(k.hierarchyDisplayFolder())) {
                var f = String.empty();
                var g = $.ig.MetaTreeHelper.prototype.parseFolderPath(k.hierarchyDisplayFolder());
                for (var o = 0; o < g.length; o++) {
                    var e = g[o];
                    f += e + "\\";
                    var d = null;
                    if (!( function () {
                        var i = m.tryGetValue(f, d);
                        d = i.value;
                        return i.ret
                    }())) {
                        d = ( function () {
                            var i = new $.ig.MetadataTreeItem();
                            i.type($.ig.MetadataTreeItemType.prototype.group);
                            i.caption(e);
                            return i
                        }());
                        m.add(f, d);
                        if (t != null) {
                            t.addChild(d)
                        }
                    }
                    t = d
                }
            }
            var s;
            switch (k.hierarchyOrigin()) {
                case $.ig.HierarchyOrigin.prototype.systemEnabled:
                    s = $.ig.MetadataTreeItemType.prototype.systemEnabledHierarchy;
                    break;
                case $.ig.HierarchyOrigin.prototype.userDefined:
                    s = $.ig.MetadataTreeItemType.prototype.userDefinedHierarchy;
                    break;
                default:
                    s = $.ig.MetadataTreeItemType.prototype.parentChildHierarchy;
                    break
            }
            var q = $.ig.MetaTreeHelper.prototype.getLevelMetaItems(r, k, p);
            var n = ( function () {
                var i = new $.ig.MetadataTreeItem();
                i.type(s);
                i.caption(k.caption());
                i.item(k);
                return i
            }());
            $.ig.MetaTreeHelper.prototype.setMetaItemChildren(n, q);
            if (t != null) {
                t.addChild(n)
            } else {
                j.add(n)
            }
            if (p.hierarchyIndex() + 1 >= h.count()) {
                break
            }
            p.hierarchyIndex(p.hierarchyIndex() + 1);
            k = h.item(p.hierarchyIndex())
        }
        var l = 0;
        var c = m.values().getEnumerator();
        while (c.moveNext()) {
            var d = c.current();
            j.insert(l, d);
            l++
        }
        return j
    },
    getLevelMetaItems: function (h, b, c) {
        var a = this;
        var g = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
        var e = h.item(c.levelIndex());
        while (e.hierarchyUniqueName() != b.uniqueName()) {
            c.levelIndex(c.levelIndex() + 1);
            e = h.item(c.levelIndex())
        }
        while (e.hierarchyUniqueName() == b.uniqueName()) {
            var d;
            switch (e.depth()) {
                case 0:
                case 1:
                    d = $.ig.MetadataTreeItemType.prototype.level1;
                    break;
                case 2:
                    d = $.ig.MetadataTreeItemType.prototype.level2;
                    break;
                case 3:
                    d = $.ig.MetadataTreeItemType.prototype.level3;
                    break;
                case 4:
                    d = $.ig.MetadataTreeItemType.prototype.level4;
                    break;
                default:
                    d = $.ig.MetadataTreeItemType.prototype.level5;
                    break
            }
            var f = ( function () {
                var i = new $.ig.MetadataTreeItem();
                i.type(d);
                i.caption(e.caption());
                i.item(e);
                return i
            }());
            g.add(f);
            if (c.levelIndex() + 1 >= h.count()) {
                break
            }
            c.levelIndex(c.levelIndex() + 1);
            e = h.item(c.levelIndex())
        }
        return g
    },
    getMeasureMetadataItem: function (q, o, b) {
        var a = this;
        var t = new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0);
        var x = new $.ig.Dictionary$2(String, $.ig.Tuple$2.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type)), 0);
        var v = new $.ig.Dictionary$2(String, $.ig.Tuple$2.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type)), 0);
        var r = ( function () {
            var i = new $.ig.MetadataTreeItem();
            i.type($.ig.MetadataTreeItemType.prototype.measure);
            i.caption(o.caption());
            i.item(o);
            return i
        }());
        var m = 0;
        var w = new $.ig.Tuple$2($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type), r, t);
        var c = q.getEnumerator();
        while (c.moveNext()) {
            var n = c.current();
            var k = null;
            if (b && !String.isNullOrEmpty(n.measureGroupName())) {
                if (!( function () {
                    var i = v.tryGetValue(n.measureGroupName(), k);
                    k = i.value;
                    return i.ret
                }())) {
                    var j = ( function () {
                        var i = new $.ig.MetadataTreeItem();
                        i.type($.ig.MetadataTreeItemType.prototype.group);
                        i.caption(n.measureGroupName());
                        return i
                    }());
                    k = new $.ig.Tuple$2($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type), j, new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0));
                    v.add(n.measureGroupName(), k);
                    w.item2().insert(m, j);
                    m++
                }
            } else {
                k = w
            }
            var y = k;
            if (!String.isNullOrEmpty(n.measureDisplayFolder())) {
                var f = n.measureGroupName() == null ? String.empty() : n.measureGroupName() + "\\";
                var g = $.ig.MetaTreeHelper.prototype.parseFolderPath(n.measureDisplayFolder());
                for (var l = 0; l < g.length; l++) {
                    var e = g[l];
                    f += e + "\\";
                    var h;
                    if (!( function () {
                        var i = x.tryGetValue(f, h);
                        h = i.value;
                        return i.ret
                    }())) {
                        var d = ( function () {
                            var i = new $.ig.MetadataTreeItem();
                            i.type($.ig.MetadataTreeItemType.prototype.group);
                            i.caption(e);
                            return i
                        }());
                        h = new $.ig.Tuple$2($.ig.MetadataTreeItem.prototype.$type, $.ig.IList$1.prototype.$type.specialize($.ig.MetadataTreeItem.prototype.$type), d, new $.ig.List$1($.ig.MetadataTreeItem.prototype.$type, 0));
                        x.add(f, h);
                        if (y == w) {
                            y.item2().insert(m, d);
                            m++
                        } else {
                            y.item2().add(d)
                        }
                    }
                    y = h
                }
            }
            var p = ( function () {
                var i = new $.ig.MetadataTreeItem();
                i.type($.ig.MetadataTreeItemType.prototype.measure);
                i.caption(n.caption());
                i.item(n);
                return i
            }());
            y.item2().add(p)
        }
        var c = v.values().getEnumerator();
        while (c.moveNext()) {
            var u = c.current();
            var s = u.item1();
            $.ig.MetaTreeHelper.prototype.setMetaItemChildren(s, u.item2())
        }
        var c = x.values().getEnumerator();
        while (c.moveNext()) {
            var u = c.current();
            var s = u.item1();
            $.ig.MetaTreeHelper.prototype.setMetaItemChildren(s, u.item2())
        }
        $.ig.MetaTreeHelper.prototype.setMetaItemChildren(r, t);
        return r
    },
    parseFolderPath: function (a) {
        var b = a.split("\\");
        return b
    },
    $type: new $.ig.Type("MetaTreeHelper", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("HierarchyItemPosition", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _hierarchyIndex: null,
    hierarchyIndex: function (a) {
        if (arguments.length === 1) {
            this._hierarchyIndex = a;
            return a
        } else {
            return this._hierarchyIndex
        }
    },
    _levelIndex: null,
    levelIndex: function (a) {
        if (arguments.length === 1) {
            this._levelIndex = a;
            return a
        } else {
            return this._levelIndex
        }
    },
    $type: new $.ig.Type("HierarchyItemPosition", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureGroupMetaItemsCache", "Object", {
    __measureGroupDimensions: null,
    __measureGroupMeasures: null,
    __measureGroupDimensionsCollection: null,
    __dimensions: null,
    __measures: null,
    init: function (a, c, b) {
        $.ig.Object.prototype.init.call(this);
        this.__measureGroupDimensions = new $.ig.Dictionary$2(String, $.ig.IEnumerable$1.prototype.$type.specialize($.ig.Dimension.prototype.$type), 0);
        this.__measureGroupMeasures = new $.ig.Dictionary$2(String, $.ig.IEnumerable$1.prototype.$type.specialize($.ig.Measure.prototype.$type), 0);
        this.__measureGroupDimensionsCollection = b;
        this.__dimensions = a;
        this.__measures = c
    },
    getMeasureGroupDimensions: function (h) {
        var a = this;
        var g;
        if (!( function () {
            var i = a.__measureGroupDimensions.tryGetValue(h, g);
            g = i.value;
            return i.ret
        }())) {
            var c = new $.ig.List$1(String, 0);
            var e = this.__measureGroupDimensionsCollection.getEnumerator();
            while (e.moveNext()) {
                var f = e.current();
                if (f.measureGroupName() == h) {
                    c.add(f.dimensionUniqueName())
                }
            }
            var d = new $.ig.List$1($.ig.Dimension.prototype.$type, 0);
            var e = this.__dimensions.getEnumerator();
            while (e.moveNext()) {
                var b = e.current();
                if (c.contains(b.uniqueName()) || b.dimensionType() == $.ig.DimensionType.prototype.measure) {
                    d.add(b)
                }
            }
            this.__measureGroupDimensions.add(h, d);
            g = d
        }
        return g
    },
    getMeasureGroupMeasures: function (e) {
        var a = this;
        var d;
        if (!( function () {
            var g = a.__measureGroupMeasures.tryGetValue(e, d);
            d = g.value;
            return g.ret
        }())) {
            var f = new $.ig.List$1($.ig.Measure.prototype.$type, 0);
            var b = this.__measures.getEnumerator();
            while (b.moveNext()) {
                var c = b.current();
                if (c.measureGroupName() == e) {
                    f.add(c)
                }
            }
            this.__measureGroupMeasures.add(e, f);
            d = f
        }
        return d
    },
    $type: new $.ig.Type("MeasureGroupMetaItemsCache", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("DataSourceBaseOptions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _measures: null,
    measures: function (a) {
        if (arguments.length === 1) {
            this._measures = a;
            return a
        } else {
            return this._measures
        }
    },
    _filters: null,
    filters: function (a) {
        if (arguments.length === 1) {
            this._filters = a;
            return a
        } else {
            return this._filters
        }
    },
    _columns: null,
    columns: function (a) {
        if (arguments.length === 1) {
            this._columns = a;
            return a
        } else {
            return this._columns
        }
    },
    _rows: null,
    rows: function (a) {
        if (arguments.length === 1) {
            this._rows = a;
            return a
        } else {
            return this._rows
        }
    },
    $type: new $.ig.Type("DataSourceBaseOptions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("CubeMetaItemsCache", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _measures: null,
    measures: function (a) {
        if (arguments.length === 1) {
            this._measures = a;
            return a
        } else {
            return this._measures
        }
    },
    _dimensionItems: null,
    dimensionItems: function (a) {
        if (arguments.length === 1) {
            this._dimensionItems = a;
            return a
        } else {
            return this._dimensionItems
        }
    },
    _hierarchyItems: null,
    hierarchyItems: function (a) {
        if (arguments.length === 1) {
            this._hierarchyItems = a;
            return a
        } else {
            return this._hierarchyItems
        }
    },
    _levelItems: null,
    levelItems: function (a) {
        if (arguments.length === 1) {
            this._levelItems = a;
            return a
        } else {
            return this._levelItems
        }
    },
    _measureGroupDimensions: null,
    measureGroupDimensions: function (a) {
        if (arguments.length === 1) {
            this._measureGroupDimensions = a;
            return a
        } else {
            return this._measureGroupDimensions
        }
    },
    _measureGroupDimensionsCache: null,
    measureGroupDimensionsCache: function (a) {
        if (arguments.length === 1) {
            this._measureGroupDimensionsCache = a;
            return a
        } else {
            return this._measureGroupDimensionsCache
        }
    },
    $type: new $.ig.Type("CubeMetaItemsCache", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("AxisDefinitionParser", "Object", {
    init: function (a) {
        $.ig.Object.prototype.init.call(this);
        this.position(-1);
        this.initString(a)
    },
    _isFilter: null,
    isFilter: function (a) {
        if (arguments.length === 1) {
            this._isFilter = a;
            return a
        } else {
            return this._isFilter
        }
    },
    _elementName: null,
    elementName: function (a) {
        if (arguments.length === 1) {
            this._elementName = a;
            return a
        } else {
            return this._elementName
        }
    },
    _position: null,
    position: function (a) {
        if (arguments.length === 1) {
            this._position = a;
            return a
        } else {
            return this._position
        }
    },
    _initString: null,
    initString: function (a) {
        if (arguments.length === 1) {
            this._initString = a;
            return a
        } else {
            return this._initString
        }
    },
    readNextElement: function () {
        if (this.position() == this.initString().length - 1) {
            return false
        }
        var a = -1;
        var b = -1;
        var d = false;
        while (this.position() + 1 < this.initString().length) {
            this.position(this.position() + 1);
            var e = this.initString().substr(this.position(), 1);
            switch (e) {
                case $.ig.AxisDefinitionParser.prototype.elementBegin:
                    if (a == -1) {
                        a = this.position()
                    }
                    break;
                case $.ig.AxisDefinitionParser.prototype.elementEnd:
                    b = this.position();
                    while (this.position() + 1 < this.initString().length) {
                        e = this.initString().substr(this.position() + 1, 1);
                        switch (e) {
                            case $.ig.AxisDefinitionParser.prototype.elementEnd:
                                b = this.position() + 1;
                                break;
                            case $.ig.AxisDefinitionParser.prototype.elementSeparator:
                            case $.ig.AxisDefinitionParser.prototype.filterGroupBegin:
                            case $.ig.AxisDefinitionParser.prototype.filterGroupEnd:
                                d = true;
                                break
                        }
                        if (d) {
                            break
                        }
                        this.position(this.position() + 1)
                    }
                    break;
                case $.ig.AxisDefinitionParser.prototype.elementSeparator:
                    d = true;
                    break;
                case $.ig.AxisDefinitionParser.prototype.filterGroupBegin:
                    this.isFilter(true);
                    break;
                case $.ig.AxisDefinitionParser.prototype.filterGroupEnd:
                    $.ig.Debug.prototype.assert1(this.isFilter());
                    d = true;
                    this.isFilter(false);
                    break
            }
            if (d) {
                d = false;
                if (a > -1 && b > -1) {
                    break
                }
            }
        }
        if (this.position() == this.initString().length - 1) {
            if (b == -1 || a == -1) {
                return false
            }
        }
        var c = this.initString().substr(a, b - a + 1).trim();
        this.elementName(c);
        return true
    },
    parse: function () {
        var b = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
        var c = null;
        while (this.readNextElement()) {
            if (!this.isFilter()) {
                c = new $.ig.List$1(String, 0);
                var a = new $.ig.AxisElement(this.elementName(), c);
                b.add(a)
            } else {
                if (c != null) {
                    c.add(this.elementName())
                }
            }
        }
        return b
    },
    $type: new $.ig.Type("AxisDefinitionParser", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("AxisElement", "Object", {
    init: function (b, a) {
        $.ig.Object.prototype.init.call(this);
        this.name(b);
        this.memberNames(a)
    },
    _name: null,
    name: function (a) {
        if (arguments.length === 1) {
            this._name = a;
            return a
        } else {
            return this._name
        }
    },
    _memberNames: null,
    memberNames: function (a) {
        if (arguments.length === 1) {
            this._memberNames = a;
            return a
        } else {
            return this._memberNames
        }
    },
    $type: new $.ig.Type("AxisElement", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("PositionItemInfo$2", "Dictionary$2", {
    $tKey: null,
    $tSortKey: null,
    init: function (a, b, e, g, f, c, d, h) {
        this.$tKey = a;
        this.$tSortKey = b;
        this.$type = this.$type.specialize(this.$tKey, this.$tSortKey);
        $.ig.Dictionary$2.prototype.init.call(this, this.$tKey, $.ig.PositionItemInfo$2.prototype.$type.specialize(this.$tKey, this.$tSortKey));
        this.positionIndex(e);
        this.positionItemIndex(g);
        this.positionItemDepth(f);
        this.positionSize(h);
        this.key(c);
        this.parentKey(d);
        this.childTopMostPositionItemDepth(-1)
    },
    createInstance: function (a, c, d, b, e, f) {
        return new $.ig.PositionItemInfo$2(this.$tKey, this.$tSortKey, a, c, d, b, e, f)
    },
    _childTopMostPositionItemDepth: null,
    childTopMostPositionItemDepth: function (a) {
        if (arguments.length === 1) {
            this._childTopMostPositionItemDepth = a;
            return a
        } else {
            return this._childTopMostPositionItemDepth
        }
    },
    _positionIndex: null,
    positionIndex: function (a) {
        if (arguments.length === 1) {
            this._positionIndex = a;
            return a
        } else {
            return this._positionIndex
        }
    },
    _positionItemDepth: null,
    positionItemDepth: function (a) {
        if (arguments.length === 1) {
            this._positionItemDepth = a;
            return a
        } else {
            return this._positionItemDepth
        }
    },
    _positionItemIndex: null,
    positionItemIndex: function (a) {
        if (arguments.length === 1) {
            this._positionItemIndex = a;
            return a
        } else {
            return this._positionItemIndex
        }
    },
    _positionSize: null,
    positionSize: function (a) {
        if (arguments.length === 1) {
            this._positionSize = a;
            return a
        } else {
            return this._positionSize
        }
    },
    _key: null,
    key: function (a) {
        if (arguments.length === 1) {
            this._key = a;
            return a
        } else {
            return this._key
        }
    },
    _parentKey: null,
    parentKey: function (a) {
        if (arguments.length === 1) {
            this._parentKey = a;
            return a
        } else {
            return this._parentKey
        }
    },
    _hierarchyKey: null,
    hierarchyKey: function (a) {
        if (arguments.length === 1) {
            this._hierarchyKey = a;
            return a
        } else {
            return this._hierarchyKey
        }
    },
    _sortKey: null,
    sortKey: function (a) {
        if (arguments.length === 1) {
            this._sortKey = a;
            return a
        } else {
            return this._sortKey
        }
    },
    _isExpandable: null,
    isExpandable: function (a) {
        if (arguments.length === 1) {
            this._isExpandable = a;
            return a
        } else {
            return this._isExpandable
        }
    },
    _isExpanded: null,
    isExpanded: function (a) {
        if (arguments.length === 1) {
            this._isExpanded = a;
            return a
        } else {
            return this._isExpanded
        }
    },
    addChildObject: function (g, b, c, d) {
        var f = false;
        if (this.positionItemIndex() == -1) {
            f = true
        } else {
            if (d != null) {
                if (g.item(this.positionItemIndex()).key() != null) {
                    var e = d.item(this.positionItemIndex());
                    f = g.item(this.positionItemIndex()).key().equals(e.key())
                }
            }
        }
        if (this.positionItemIndex() + 1 == c) {
            return f
        }
        var a = this.addChildObject1(g, b, this.positionItemIndex() + 1, c, d);
        return f && a
    },
    onChildAdded: function (b, a) {
    },
    addChildObject1: function (h, b, j, c, e) {
        var a = this;
        var f;
        var i = h.item(j);
        if (!this.containsKey(i.key())) {
            var d = this.createInstance(b, j, i.depth(), i.key(), i.parentKey(), this.positionSize());
            d.isExpandable(i.isExpandable());
            d.sortKey(i.sortKey());
            d.hierarchyKey(i.hierarchyKey());
            var g = this.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (l) {
                return l.key().equals(i.parentKey())
            }).firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
            if (g != null) {
                g.isExpanded(true)
            }
            f = d.addChildObject(h, b, c, e);
            this.add(i.key(), d);
            if (this.childTopMostPositionItemDepth() == -1) {
                this.childTopMostPositionItemDepth(i.depth())
            } else {
                this.childTopMostPositionItemDepth(Math.min(this.childTopMostPositionItemDepth(), i.depth()))
            }
            this.onChildAdded(h, d)
        } else {
            var k = this.item(i.key());
            f = k.addChildObject(h, b, c, e)
        }
        return f
    },
    getIndex: function (c) {
        var b = new Array(c.count());
        for (var a = 0; a < b.length; a++) {
            b[a] = c.item(a).key()
        }
        return this.getIndex1(b)
    },
    getIndex1: function (a) {
        return this.getIndex2(a, a.length)
    },
    getIndex2: function (c, b) {
        var a = this;
        if (this.positionItemIndex() == b - 1) {
            return this.positionIndex()
        }
        var d;
        if (!( function () {
            var e = a.tryGetValue(c[a.positionItemIndex() + 1], d);
            d = e.value;
            return e.ret
        }())) {
            return -1
        }
        if (d.count() == 0) {
            return d.positionIndex()
        }
        return d.getIndex2(c, b)
    },
    $type: new $.ig.Type("PositionItemInfo$2", $.ig.Dictionary$2.prototype.$type.specialize(0, $.ig.PositionItemInfo$2.prototype.$type.specialize(0, 1)))
}, true);
$.ig.util.defType("PositionResolver$2", "Object", {
    $tKey: null,
    $tSortKey: null,
    __registeredPositionsCount: null,
    __rootPositionInfo: null,
    __rootTupleInfoKey: null,
    __rootTupleInfoParentKey: null,
    init: function (a, b, c, d) {
        this.__registeredPositionsCount = 0;
        this.$tKey = a;
        this.$tSortKey = b;
        this.$type = this.$type.specialize(this.$tKey, this.$tSortKey);
        $.ig.Object.prototype.init.call(this);
        this.positions(c.toList$1($.ig.IPosition$2.prototype.$type));
        this.positionSize(d)
    },
    getPositionIndexCompleted: null,
    _positions: null,
    positions: function (a) {
        if (arguments.length === 1) {
            this._positions = a;
            return a
        } else {
            return this._positions
        }
    },
    _positionSize: null,
    positionSize: function (a) {
        if (arguments.length === 1) {
            this._positionSize = a;
            return a
        } else {
            return this._positionSize
        }
    },
    rootPositionInfo: function () {
        if (this.__rootPositionInfo == null) {
            this.__rootPositionInfo = this.resolverRootPositionInfo()
        }
        return this.__rootPositionInfo
    },
    resolverRootPositionInfo: function () {
        return new $.ig.PositionItemInfo$2(this.$tKey, this.$tSortKey, -1, -1, -1, this.__rootTupleInfoKey, this.__rootTupleInfoParentKey, this.positionSize())
    },
    hasUnregisterdPositions: function () {
        return this.__registeredPositionsCount < this.positions().count()
    },
    completeRegisterPositions: function () {
        if (this.hasUnregisterdPositions()) {
            this.registerAndGetPositionIndex(null)
        }
    },
    resolveParentPositionItem: function (h, g) {
        g = -1;
        var a = $.ig.util.cast($.ig.IHierarchicalPositionItem$2.prototype.$type.specialize(this.$tKey, this.$tSortKey), h);
        if (a == null || a.parentKey() == null) {
            return {
                ret: null,
                parentPositionIndex: g
            }
        }
        var d = a.position().indexOf(a);
        var c = new Array(a.position().itemsCount());
        for (var b = 0; b < a.position().itemsCount(); b++) {
            c[b] = a.position().item(b).key()
        }
        c[d] = a.parentKey();
        g = this.rootPositionInfo().getIndex1(c);
        if (g == -1) {
            return {
                ret: null,
                parentPositionIndex: g
            }
        }
        var f = this.positions().__inner[g];
        var e = f.item(d);
        return {
            ret: e,
            parentPositionIndex: g
        };
        return {
            parentPositionIndex: g
        }
    },
    getHostPositionItemInfo: function (e, g) {
        var a = this;
        var c = this.rootPositionInfo();
        var f = e.item(g);
        for (var b = 0; b < g; b++) {
            var d;
            if (( function () {
                var h = c.tryGetValue(e.item(b).key(), d);
                d = h.value;
                return h.ret
            }())) {
                c = d
            } else {
                c = null;
                break
            }
        }
        if (c == null) {
            return null
        }
        if (!c.containsKey(f.key())) {
            return null
        }
        return c
    },
    getChildren: function (c, e) {
        var a = this;
        if (this.hasUnregisterdPositions()) {
            this.completeRegisterPositions()
        }
        var b = this.getHostPositionItemInfo(c, e);
        var d = c.item(e);
        return b.values().where$1($.ig.PositionItemInfo$2.prototype.$type, function (f) {
            return d.key().equals(f.parentKey())
        })
    },
    isMemberExpanded: function (k) {
        var a = this;
        if (this.hasUnregisterdPositions()) {
            this.completeRegisterPositions()
        }
        var j = this.getPositionIndex(k.position());
        if (j == -1 || this.rootPositionInfo().count() == 0) {
            return null
        }
        var f = k.position().indexOf(k);
        var g = this.rootPositionInfo();
        for (var d = 0; d < f; d++) {
            var h;
            if (( function () {
                var e = g.tryGetValue(k.position().item(d).key(), h);
                h = e.value;
                return e.ret
            }())) {
                g = h
            } else {
                g = null;
                break
            }
        }
        if (g == null) {
            return null
        }
        if (!g.containsKey(k.key())) {
            return null
        }
        var b = null;
        var c = g.values().getEnumerator();
        while (c.moveNext()) {
            if (k.key().equals(c.current().parentKey())) {
                b = c.current();
                break
            }
        }
        return b != null
    },
    getPositionIndex: function (a) {
        if (a == null) {
            return -1
        }
        if (a.itemsCount() != this.positionSize()) {
            return -1
        }
        if (a.isEmpty() && this.positions().count() == 1 && this.positions().__inner[0].isEmpty()) {
            return 0
        }
        if (this.__registeredPositionsCount > 0) {
            var b = this.getPositionIndexImpl(a);
            if (b > -1) {
                return b
            }
            if (this.__registeredPositionsCount == this.positions().count()) {
                return -1
            }
        }
        return this.registerAndGetPositionIndex(a)
    },
    getPositionIndexImpl: function (a) {
        if (a.isEmpty() && this.positions().count() == 1 && this.positions().__inner[0].isEmpty()) {
            return 0
        }
        return this.rootPositionInfo().getIndex(a.getItems().toList$1($.ig.IPositionItem$2.prototype.$type))
    },
    registerAndGetPositionIndex: function (b) {
        var f = b == null;
        var e = -1;
        for (var a = this.__registeredPositionsCount; a < this.positions().count(); a++) {
            var c = this.positions().__inner[a];
            var d = this.rootPositionInfo().addChildObject(c, a, this.positionSize(), b);
            this.__registeredPositionsCount++;
            if (e == -1 && d) {
                e = a;
                if (!f) {
                    break
                }
            }
        }
        return e
    },
    $type: new $.ig.Type("PositionResolver$2", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("LevelSortDirection", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.sortBehavior($.ig.LevelSortBehavior.prototype.system)
    },
    _levelUniqueName: null,
    levelUniqueName: function (a) {
        if (arguments.length === 1) {
            this._levelUniqueName = a;
            return a
        } else {
            return this._levelUniqueName
        }
    },
    _sortDirection: null,
    sortDirection: function (a) {
        if (arguments.length === 1) {
            this._sortDirection = a;
            return a
        } else {
            return this._sortDirection
        }
    },
    _sortBehavior: null,
    sortBehavior: function (a) {
        if (arguments.length === 1) {
            this._sortBehavior = a;
            return a
        } else {
            return this._sortBehavior
        }
    },
    $type: new $.ig.Type("LevelSortDirection", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("jQueryUtils", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    javascriptObjectToDictionary$1: function (a, c) {
        if (c == null) {
            return null
        }
        var d = c;
        var b = new $.ig.Dictionary$2(String, a, 0);
        (function (h, e) {
            var f = $.ig.Dictionary.prototype.getDictionary(h), g = $.ig.Dictionary.prototype.getDictionary(h);
            e.__inner = f;
            e.__keys = g
        })(d, b);
        return b
    },
    javascriptObjectFromDictionary$1: function (a, b) {
        if (b == null) {
            return null
        }
        var c = b;
        return c.__inner.proxy
    },
    convertToObjectDictionary: function (a) {
        return $.ig.jQueryUtils.prototype.javascriptObjectToDictionary$1($.ig.Object.prototype.$type, a)
    },
    convertToStringDictionary: function (a) {
        return $.ig.jQueryUtils.prototype.javascriptObjectToDictionary$1(String, a)
    },
    convertFromObjectDictionary: function (a) {
        return $.ig.jQueryUtils.prototype.javascriptObjectFromDictionary$1($.ig.Object.prototype.$type, a)
    },
    convertFromStringDictionary: function (a) {
        return $.ig.jQueryUtils.prototype.javascriptObjectFromDictionary$1(String, a)
    },
    createJavascriptObject: function () {
        return {}
    },
    getJavascriptObjectProperty: function (a, c) {
        var b = a;
        var d = c;
        return b[d]
    },
    setJavascriptObjectProperty: function (a, c, e) {
        var b = a;
        var d = c;
        var f = e;
        b[d] = f
    },
    $type: new $.ig.Type("jQueryUtils", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("TableView", "Object", {
    __tableViewImpl: null,
    init: function (c, a, b, e) {
        $.ig.Object.prototype.init.call(this);
        var d = this.settingsFromJavascriptObject(e);
        this.__tableViewImpl = new $.ig.TableViewImpl(c, a, b, d)
    },
    rowHeaders: function () {
        if (this.__tableViewImpl.rowHeaders() == null) {
            return null
        }
        return (this.__tableViewImpl.rowHeaders()).inner()
    },
    columnHeaders: function () {
        if (this.__tableViewImpl.columnHeaders() == null) {
            return null
        }
        return (this.__tableViewImpl.columnHeaders()).inner()
    },
    resultCells: function () {
        if (this.__tableViewImpl.resultCells() == null) {
            return null
        }
        return (this.__tableViewImpl.resultCells()).inner()
    },
    initialize: function () {
        this.__tableViewImpl.initialize()
    },
    settingsFromJavascriptObject: function (k) {
        var a = this;
        var e = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(k, "isParentInFrontForColumns");
        var f = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(k, "isParentInFrontForRows");
        var l = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(k, "preserveMembersOrder");
        var b = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(k, "compactColumnHeaders");
        var c = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(k, "compactRowHeaders");
        var j = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(k, "levelFirstSortDirection");
        var g = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(k, "levelDefaultSortDirections");
        var h = new $.ig.List$1($.ig.LevelSortDirection.prototype.$type, 0);
        if (g != null) {
            for (var d = 0; d < g.length; d++) {
                if ($.ig.util.cast($.ig.LevelSortDirection.prototype.$type, g[d]) !== null) {
                    h.add(g[d])
                }
            }
        }
        return ( function () {
            var i = new $.ig.TableViewSettings();
            i.isParentInFrontForColumns(e);
            i.isParentInFrontForRows(f);
            i.levelDefaultSortDirections(h);
            i.levelFirstSortDirection(j);
            i.preserveMembersOrder(l);
            i.compactColumnHeaders(b);
            i.compactRowHeaders(c);
            return i
        }())
    },
    $type: new $.ig.Type("TableView", $.ig.Object.prototype.$type)
}, true);
$.ig.LevelSortBehavior.prototype.alphabetical = 0;
$.ig.LevelSortBehavior.prototype.system = 1;
$.ig.MetadataTreeItemType.prototype.cube = 0;
$.ig.MetadataTreeItemType.prototype.dimension = 1;
$.ig.MetadataTreeItemType.prototype.group = 2;
$.ig.MetadataTreeItemType.prototype.userDefinedHierarchy = 3;
$.ig.MetadataTreeItemType.prototype.systemEnabledHierarchy = 4;
$.ig.MetadataTreeItemType.prototype.parentChildHierarchy = 5;
$.ig.MetadataTreeItemType.prototype.measure = 6;
$.ig.MetadataTreeItemType.prototype.level1 = 7;
$.ig.MetadataTreeItemType.prototype.level2 = 8;
$.ig.MetadataTreeItemType.prototype.level3 = 9;
$.ig.MetadataTreeItemType.prototype.level4 = 10;
$.ig.MetadataTreeItemType.prototype.level5 = 11;
$.ig.MeasureListLocation.prototype.rows = 0;
$.ig.MeasureListLocation.prototype.columns = 1;
$.ig.HeaderCellsLayoutOrientation.prototype.horizontal = 0;
$.ig.HeaderCellsLayoutOrientation.prototype.vertical = 1;
$.ig.MemberType.prototype.unknown = 0;
$.ig.MemberType.prototype.regular = 0;
$.ig.MemberType.prototype.all = 1;
$.ig.MemberType.prototype.measure = 2;
$.ig.MemberType.prototype.formula = 3;
$.ig.CardinalityType.prototype.one = 0;
$.ig.CardinalityType.prototype.many = 1;
$.ig.AggregatorType.prototype.unknown = 0;
$.ig.AggregatorType.prototype.sum = 1;
$.ig.AggregatorType.prototype.count = 2;
$.ig.AggregatorType.prototype.min = 3;
$.ig.AggregatorType.prototype.max = 4;
$.ig.AggregatorType.prototype.average = 5;
$.ig.AggregatorType.prototype.variance = 6;
$.ig.AggregatorType.prototype.std = 7;
$.ig.AggregatorType.prototype.distinctCount = 8;
$.ig.AggregatorType.prototype.none = 9;
$.ig.AggregatorType.prototype.averageOfChildren = 10;
$.ig.AggregatorType.prototype.firstNonEmpty = 13;
$.ig.AggregatorType.prototype.lastNonEmpty = 14;
$.ig.AggregatorType.prototype.byAccount = 15;
$.ig.AggregatorType.prototype.calculated = 127;
$.ig.HierarchyOrigin.prototype.userDefined = 1;
$.ig.HierarchyOrigin.prototype.systemEnabled = 2;
$.ig.HierarchyOrigin.prototype.systemInternal = 4;
$.ig.DimensionType.prototype.unknown = 0;
$.ig.DimensionType.prototype.time = 1;
$.ig.DimensionType.prototype.measure = 2;
$.ig.DimensionType.prototype.other = 3;
$.ig.DimensionType.prototype.quantitative = 5;
$.ig.DimensionType.prototype.accounts = 6;
$.ig.DimensionType.prototype.customers = 7;
$.ig.DimensionType.prototype.products = 8;
$.ig.DimensionType.prototype.scenario = 9;
$.ig.DimensionType.prototype.utility = 10;
$.ig.DimensionType.prototype.currency = 11;
$.ig.DimensionType.prototype.rates = 12;
$.ig.DimensionType.prototype.channel = 13;
$.ig.DimensionType.prototype.promotion = 14;
$.ig.DimensionType.prototype.organization = 15;
$.ig.DimensionType.prototype.billOfMaterials = 16;
$.ig.DimensionType.prototype.geography = 17;
$.ig.CubeType.prototype.cube = 0;
$.ig.CubeType.prototype.dimension = 1;
$.ig.CubeType.prototype.unknown = 2;
$.ig.AxisDefinitionParser.prototype.elementBegin = "[";
$.ig.AxisDefinitionParser.prototype.elementEnd = "]";
$.ig.AxisDefinitionParser.prototype.filterGroupBegin = "{";
$.ig.AxisDefinitionParser.prototype.filterGroupEnd = "}";
$.ig.AxisDefinitionParser.prototype.elementSeparator = ",";
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.ArrayListCollection$1],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.ArrayListCollection$1],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.ArrayListCollection$1],
        ["asQueryable"]
    ]
]);
$.ig = $.ig || {};
$.ig.util.bulkDefine(["IConnection", "IXmlaDataProvider", "KeyValueItem", "XmlaDataProvider", "CatalogConstants", "ColumnsConstants", "ProviderTypeConstants", "TableConstants", "DbSchemaConstants", "CatalogRestrictions", "ColumnsRestrictions", "ProviderTypeRestrictions", "TableRestrictions", "CubeConstants", "DimensionConstants", "HierarchyConstants", "InstanceConstants", "LevelConstants", "MeasureConstants", "MeasureGroupConstants", "MeasureGroupDimensionConstants", "MemberConstants", "OlapSchemaConstants", "CubeRestrictions", "DimensionRestrictions", "HierarchyRestrictions", "LevelRestrictions", "MeasureRestrictions", "MeasureGroupRestrictions", "MeasureGroupDimensionRestrictions", "MemberRestrictions", "ICoreXmlaConnection", "ArraySerializer", "IXmlTypeSerializer$1", "AxisXmlTypeSerializer", "TupleXmlTypeSerializer", "AxisMemberXmlTypeSerializer", "CellXmlTypeSerializer", "CubeXmlTypeSerializer", "DatabaseXmlTypeSerializer", "DimensionXmlTypeSerializer", "ErrorXmlTypeSerializer", "HierarchyXmlTypeSerializer", "LevelXmlTypeSerializer", "MeasureGroupDimensionXmlTypeSerializer", "MeasureGroupXmlTypeSerializer", "MeasureXmlTypeSerializer", "MemberXmlTypeSerializer", "ResultXmlTypeSerializer", "SerializerUtils", "XmlaConstants", "XmlaSoapFaultXmlTypeSerializer", "IXmlaMethodResult", "XmlaSoapMethodResult", "DiscoverResponseResult", "XmlaSoapMessageHeader", "FaultError", "RequestCompletedEventArgs$1", "ExecuteResponseResult", "FaultDetail", "IXmlaSoapMethod", "XmlaNamespace", "XmlaPropertiesCollection", "XmlaQueryProperty", "XmlaSoapFault", "XmlaSoapMessageBuilder", "XmlaSoapMethod", "XmlaSoapMethodDiscover", "XmlaSoapMethodExecute", "XmlaSoapWebClient", "XmlaSoapWebClient$1", "Session", "IMdxExpression", "IMdxElement", "IAxisFilterElement", "IMdxAxis", "IMdxAxisProvider", "IMdxCalculatedMembersCacheProvider", "IMdxCollectionElement", "IMdxDimensionAxisProvider", "IMdxExtendedFilterInfo", "IMdxFilterInfo", "IMdxItemElement", "IMdxQuery", "IMdxSet", "MdxAxis", "MdxAxisFilterElement", "MdxCalculatedMembersCache", "MdxElement", "MdxSingleElement", "MdxDimensionMember", "MdxChildrenCollectionElement", "MdxConstantElement", "MdxElementCollectionElement", "MdxElementType", "MdxLevelMembersElement", "MdxQueryBuilder", "MdxSet", "MdxSettings", "IMdxSlicerAxis", "MdxSlicerAxis", "MdxSlicerSet", "MdxDimensionAxisCreateMode", "MdxDimensionAxisProvider", "MdxSlicerAxisProvider", "MdxSlicerAxisBuilder", "IXmlaDataProviderFactory", "DefaultXmlaDataProviderFactory", "RemoteXmlaDataProviderFactory", "IRemoteXmlaRequestSerializer", "IRemoteXmlaResponseSerializer", "JsonRemoteXmlaRequestSerializer", "JsonRemoteXmlaResponseSerializer", "ArrayJsonSerializer", "IJsonTypeSerializer$1", "JsonTypeSeriazlierBase$1", "AxisJsonTypeSeriazlier", "AxisMemberJsonTypeSeriazlier", "CatalogJsonTypeSeriazlier", "CellJsonTypeSeriazlier", "CubeJsonTypeSeriazlier", "DimensionJsonTypeSeriazlier", "HierarchyJsonTypeSeriazlier", "JsonSerializerUtils", "LevelJsonTypeSeriazlier", "MeasureGroupDimensionJsonTypeSeriazlier", "MeasureGroupJsonTypeSeriazlier", "MeasureJsonTypeSeriazlier", "MemberJsonTypeSeriazlier", "RemoteXmlaRequestJsonTypeSeriazlier", "ResultJsonTypeSeriazlier", "TupleJsonTypeSeriazlier", "RemoteXmlaDataProvder", "RemoteXmlaRequest", "RemoteXmlaRequestType", "XmlaConnection", "XmlaDataSourceImpl", "PositionInfo", "TaskExtensions", "XmlaDiscoverProperties", "XmlaDataSourceOptions", "CustomRemoteXmlaRequestSerializer", "CustomRemoteXmlaResponseSerializer", "XmlaDataSource", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "ICoreOlapElement", "Cube", "Catalog", "Dimension", "CubeType", "ScopeType", "DimensionType", "LevelType", "HierarchyOrigin", "AggregatorType", "CardinalityType", "MemberType", "Hierarchy", "Level", "Measure", "MeasureGroup", "MeasureGroupDimension", "Member", "OlapResult", "OlapResultAxis", "IPosition$2", "OlapResultTuple", "IPositionItem$2", "IHierarchicalPositionItem$2", "OlapResultAxisMember", "OlapResultCell", "HeaderCellsLayoutOrientation", "LevelSpanManager", "SpanSource", "ITableViewHeadersFactory", "TableViewHeadersFactory", "TableCompactViewHeadersFactory", "TableViewHeaderCellSource", "TableViewImpl", "TableViewSettings", "TableViewHeaderCell", "TableViewResultCell", "ArrayListCollection$1", "IOlapDataSource", "MeasureList", "MeasureListLocation", "MetadataTreeItemType", "MetadataTreeItem", "MetaTreeHelper", "HierarchyItemPosition", "MeasureGroupMetaItemsCache", "DataSourceBaseOptions", "CubeMetaItemsCache", "SourceInitHelper", "AxisDefinitionParser", "AxisElement", "PivotActionStatus", "PivotAction", "AxisItemsChangeType", "AxisChangedAction", "AxisItemsChangedAction", "ExpansionStateChangeType", "ExpansionStateChangedAction", "PivotActionManager", "PositionItemInfo$2", "PositionResolver$2", "LevelSortDirection", "LevelSortBehavior", "HierarchyFilterView", "FilterMember", "FilterMemberStateChangedEventArgs", "jQueryUtils", "TableView", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise"]);
$.ig.util.defType("RemoteXmlaRequestType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("RemoteXmlaRequestType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MdxDimensionAxisCreateMode", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("MdxDimensionAxisCreateMode", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MdxElementType", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("MdxElementType", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaSoapMessageHeader", "Enum", {
    init: function () {
        $.ig.Enum.prototype.init.call(this)
    },
    $type: new $.ig.Type("XmlaSoapMessageHeader", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("IXmlaDataProvider", "Object", {
    $type: new $.ig.Type("IXmlaDataProvider", null)
}, true);
$.ig.util.defType("KeyValueItem", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _key: null,
    key: function (a) {
        if (arguments.length === 1) {
            this._key = a;
            return a
        } else {
            return this._key
        }
    },
    _value: null,
    value: function (a) {
        if (arguments.length === 1) {
            this._value = a;
            return a
        } else {
            return this._value
        }
    },
    $type: new $.ig.Type("KeyValueItem", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaDataProvider", "Object", {
    __xmlaConnection: null,
    __initXmlaMethod: null,
    init: function (b, a) {
        $.ig.Object.prototype.init.call(this);
        this.__xmlaConnection = b;
        this.__initXmlaMethod = a
    },
    discoverCatalogsAsync: function (a, b) {
        return this.discoverAsync$1($.ig.Catalog.prototype.$type, new $.ig.DatabaseXmlTypeSerializer(), $.ig.DbSchemaConstants.prototype.catalogs, a, b)
    },
    discoverCubesAsync: function (a, b) {
        return this.discoverAsync$1($.ig.Cube.prototype.$type, new $.ig.CubeXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.cubes, a, b)
    },
    discoverDimensionsAsync: function (a, b) {
        return this.discoverAsync$1($.ig.Dimension.prototype.$type, new $.ig.DimensionXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.dimensions, a, b)
    },
    discoverHierarchiesAsync: function (a, b) {
        return this.discoverAsync$1($.ig.Hierarchy.prototype.$type, new $.ig.HierarchyXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.hierarchies, a, b)
    },
    discoverLevelsAsync: function (a, b) {
        return this.discoverAsync$1($.ig.Level.prototype.$type, new $.ig.LevelXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.levels, a, b)
    },
    discoverMeasuresAsync: function (a, b) {
        return this.discoverAsync$1($.ig.Measure.prototype.$type, new $.ig.MeasureXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.measures, a, b)
    },
    discoverMeasureGroupsAsync: function (a, b) {
        return this.discoverAsync$1($.ig.MeasureGroup.prototype.$type, new $.ig.MeasureGroupXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.measureGroups, a, b)
    },
    discoverMeasureGroupDimensionsAsync: function (a, b) {
        return this.discoverAsync$1($.ig.MeasureGroupDimension.prototype.$type, new $.ig.MeasureGroupDimensionXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.measureGroupDimensions, a, b)
    },
    discoverMembersAsync: function (a, b) {
        return this.discoverAsync$1($.ig.Member.prototype.$type, new $.ig.MemberXmlTypeSerializer(), $.ig.OlapSchemaConstants.prototype.members, a, b)
    },
    executeStatementAsync: function (g, e, d) {
        var a = this;
        var h = new $.ig.TaskCompletionSource$1($.ig.OlapResult.prototype.$type, 0);
        var b = this.__xmlaConnection.getXmlaSoapWebClient$1($.ig.ExecuteResponseResult.prototype.$type);
        var f = new $.ig.ResultXmlTypeSerializer();
        b.requestCompleted = $.ig.Delegate.prototype.combine(b.requestCompleted, function (j, i) {
            return a.executeAsyncCompleted$1($.ig.OlapResult.prototype.$type, f, i, h)
        });
        var c = new $.ig.XmlaSoapMethodExecute(g);
        this.initializeExecuteMethod(c, e, d);
        b.requestAsync(c);
        return h.task()
    },
    discoverAsync$1: function (b, h, f, e, g) {
        var a = this;
        var i = new $.ig.TaskCompletionSource$1($.ig.IEnumerable$1.prototype.$type.specialize(b), 0);
        var c = this.__xmlaConnection.getXmlaSoapWebClient$1($.ig.DiscoverResponseResult.prototype.$type);
        c.requestCompleted = $.ig.Delegate.prototype.combine(c.requestCompleted, function (k, j) {
            return a.discoverAsyncCompleted$1(b, h, j, i)
        });
        var d = new $.ig.XmlaSoapMethodDiscover(f);
        this.initializeDiscoverMethod(d, e, g);
        c.requestAsync(d);
        return i.task()
    },
    initializeDiscoverMethod: function (b, c, f) {
        if (f != null) {
            var a = f.getEnumerator();
            while (a.moveNext()) {
                var e = a.current();
                b.restrictions().add(e.key(), e.value())
            }
        }
        if (c != null) {
            var a = c.getEnumerator();
            while (a.moveNext()) {
                var d = a.current();
                b.properties().add(new $.ig.XmlaQueryProperty(1, d.key(), d.value()))
            }
        }
        if (this.__initXmlaMethod != null) {
            this.__initXmlaMethod(b)
        }
    },
    initializeExecuteMethod: function (b, d, c) {
        if (c != null) {
            var a = c.getEnumerator();
            while (a.moveNext()) {
                var f = a.current()
            }
        }
        if (d != null) {
            var a = d.getEnumerator();
            while (a.moveNext()) {
                var e = a.current();
                b.properties().add(new $.ig.XmlaQueryProperty(1, e.key(), e.value()))
            }
        }
        if (this.__initXmlaMethod != null) {
            this.__initXmlaMethod(b)
        }
    },
    discoverAsyncCompleted$1: function (a, f, c, g) {
        if (c.error() != null) {
            g.setException(c.error())
        } else {
            if (c.cancelled()) {
                g.setCanceled()
            } else {
                var d = c.result();
                if (d != null) {
                    var b = new $.ig.ArraySerializer();
                    var h = b.deserialize$1(a, c.result().returnElement(), $.ig.XName.prototype.get("row", $.ig.XmlaNamespace.prototype.rowset), f);
                    g.setResult(h)
                }
            }
        }
    },
    executeAsyncCompleted$1: function (a, d, b, f) {
        if (b.error() != null) {
            f.setException(b.error())
        } else {
            if (b.cancelled()) {
                f.setCanceled()
            } else {
                var c = b.result();
                if (c != null) {
                    var g = d.deserialize(b.result().returnElement());
                    f.setResult(g)
                }
            }
        }
    },
    $type: new $.ig.Type("XmlaDataProvider", $.ig.Object.prototype.$type, [$.ig.IXmlaDataProvider.prototype.$type])
}, true);
$.ig.util.defType("CatalogConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("CatalogConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("DbSchemaConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("DbSchemaConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("CubeConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("CubeConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("DimensionConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("DimensionConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("HierarchyConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("HierarchyConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("InstanceConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("InstanceConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("LevelConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("LevelConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MeasureConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureGroupConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MeasureGroupConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureGroupDimensionConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MeasureGroupDimensionConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MemberConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MemberConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("OlapSchemaConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("OlapSchemaConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("CubeRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("CubeRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("DimensionRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("DimensionRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("HierarchyRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("HierarchyRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("LevelRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("LevelRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MeasureRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureGroupRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MeasureGroupRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MeasureGroupDimensionRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MeasureGroupDimensionRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MemberRestrictions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("MemberRestrictions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ICoreXmlaConnection", "Object", {
    $type: new $.ig.Type("ICoreXmlaConnection", null, [$.ig.IConnection.prototype.$type])
}, true);
$.ig.util.defType("ArraySerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize$1: function (a, b, f, g) {
        var d = new $.ig.List$1(a, 0);
        var c = b.elements1(f).getEnumerator();
        while (c.moveNext()) {
            var e = c.current();
            d.add(g.deserialize(e))
        }
        return d
    },
    $type: new $.ig.Type("ArraySerializer", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("IXmlTypeSerializer$1", "Object", {
    $type: new $.ig.Type("IXmlTypeSerializer$1", null)
}, true);
$.ig.util.defType("AxisXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (e) {
        var a = this;
        if (e.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var d = e;
        var c = $.ig.SerializerUtils.prototype.getText1(d.attribute($.ig.XName.prototype.get("name", "")));
        var g = d.element($.ig.XName.prototype.get("Tuples", $.ig.XmlaNamespace.prototype.mdDataset));
        var b = new $.ig.ArraySerializer();
        var f = b.deserialize$1($.ig.OlapResultTuple.prototype.$type, g, $.ig.XName.prototype.get("Tuple", $.ig.XmlaNamespace.prototype.mdDataset), new $.ig.TupleXmlTypeSerializer());
        var h = 0;
        if (f.count() > 0) {
            h = f.__inner[0].members().count()
        }
        return ( function () {
            var i = new $.ig.OlapResultAxis(f, h);
            i.name(c);
            return i
        }())
    },
    $type: new $.ig.Type("AxisXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultAxis.prototype.$type)])
}, true);
$.ig.util.defType("TupleXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (f) {
        if (f.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var c = f;
        var a = new $.ig.ArraySerializer();
        var e = a.deserialize$1($.ig.OlapResultAxisMember.prototype.$type, c, $.ig.XName.prototype.get("Member", $.ig.XmlaNamespace.prototype.mdDataset), new $.ig.AxisMemberXmlTypeSerializer());
        var g = new $.ig.OlapResultTuple(e);
        var d = e.getEnumerator();
        while (d.moveNext()) {
            var b = d.current();
            b.position(g)
        }
        return g
    },
    $type: new $.ig.Type("TupleXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultTuple.prototype.$type)])
}, true);
$.ig.util.defType("AxisMemberXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (i) {
        var a = this;
        if (i.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var d = i;
        var k = $.ig.SerializerUtils.prototype.getText(d.element($.ig.XName.prototype.get("UName", $.ig.XmlaNamespace.prototype.mdDataset)));
        var h = $.ig.SerializerUtils.prototype.getText(d.element($.ig.XName.prototype.get("LName", $.ig.XmlaNamespace.prototype.mdDataset)));
        var b = $.ig.SerializerUtils.prototype.getText(d.element($.ig.XName.prototype.get("Caption", $.ig.XmlaNamespace.prototype.mdDataset)));
        var g = $.ig.SerializerUtils.prototype.getText(d.element($.ig.XName.prototype.get("LNum", $.ig.XmlaNamespace.prototype.mdDataset)));
        var c = $.ig.SerializerUtils.prototype.getText(d.element($.ig.XName.prototype.get("DisplayInfo", $.ig.XmlaNamespace.prototype.mdDataset)));
        var f = d.attribute($.ig.XName.prototype.get("Hierarchy", "")).value();
        var j = ( function () {
            var m = new $.ig.OlapResultAxisMember();
            m.hierarchyUniqueName(f);
            m.levelUniqueName(h);
            m.levelNumber($.ig.Number.prototype.parseInt(g));
            m.uniqueName(k);
            m.caption(b);
            m.displayInfo(String.isNullOrEmpty(c) ? 0 : $.ig.Number.prototype.parseInt(c));
            return m
        }());
        var e = d.elements().getEnumerator();
        while (e.moveNext()) {
            var l = e.current();
            switch (l.name().localName()) {
                case"UName":
                case"LName":
                case"Caption":
                case"LNum":
                case"DisplayInfo":
                    continue;
                default:
                    j.properties().add(l.name().localName(), l.value());
                    break
            }
        }
        return j
    },
    $type: new $.ig.Type("AxisMemberXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultAxisMember.prototype.$type)])
}, true);
$.ig.util.defType("CellXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (f) {
        var a = this;
        if (f.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var d = f;
        var c = d.attribute($.ig.XName.prototype.get("CellOrdinal", "")).value();
        var b = ( function () {
            var h = new $.ig.OlapResultCell();
            h.cellOrdinal($.ig.Number.prototype.parseInt(c));
            return h
        }());
        var e = d.elements().getEnumerator();
        while (e.moveNext()) {
            var g = e.current();
            b.properties().add(g.name().localName(), g.value())
        }
        return b
    },
    $type: new $.ig.Type("CellXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResultCell.prototype.$type)])
}, true);
$.ig.util.defType("CubeXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (k) {
        var a = this;
        if (k.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var g = k;
        var j = $.ig.SerializerUtils.prototype.getText(g.element($.ig.XName.prototype.get($.ig.CubeConstants.prototype.cubeName, $.ig.XmlaNamespace.prototype.rowset)));
        var b = $.ig.SerializerUtils.prototype.getText(g.element($.ig.XName.prototype.get($.ig.CubeConstants.prototype.cubeCaption, $.ig.XmlaNamespace.prototype.rowset)));
        var f = $.ig.SerializerUtils.prototype.getText(g.element($.ig.XName.prototype.get($.ig.CubeConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        var d;
        var e = $.ig.SerializerUtils.prototype.getText(g.element($.ig.XName.prototype.get($.ig.CubeConstants.prototype.cubeType, $.ig.XmlaNamespace.prototype.rowset)));
        switch (e) {
            case $.ig.XmlaConstants.prototype.cubeStringConstant:
                d = $.ig.CubeType.prototype.cube;
                break;
            case $.ig.XmlaConstants.prototype.dimensionStringConstant:
                d = $.ig.CubeType.prototype.dimension;
                break;
            default:
                d = $.ig.CubeType.prototype.unknown;
                break
        }
        var c = $.ig.SerializerUtils.prototype.getText(g.element($.ig.XName.prototype.get($.ig.CubeConstants.prototype.catalogName, $.ig.XmlaNamespace.prototype.rowset)));
        var h = $.ig.SerializerUtils.prototype.getDateTime(g.element($.ig.XName.prototype.get($.ig.CubeConstants.prototype.lastDataUpdate, $.ig.XmlaNamespace.prototype.rowset)));
        var i = $.ig.SerializerUtils.prototype.getDateTime(g.element($.ig.XName.prototype.get($.ig.CubeConstants.prototype.lastSchemaUpdate, $.ig.XmlaNamespace.prototype.rowset)));
        return ( function () {
            var l = new $.ig.Cube();
            l.name(j);
            l.caption(b);
            l.description(f);
            l.cubeType(d);
            l.catalogName(c);
            l.lastProcessed(h);
            l.lastUpdated(i);
            return l
        }())
    },
    $type: new $.ig.Type("CubeXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Cube.prototype.$type)])
}, true);
$.ig.util.defType("DatabaseXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (e) {
        var a = this;
        if (e.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var c = e;
        var d = $.ig.SerializerUtils.prototype.getText(c.element($.ig.XName.prototype.get($.ig.CatalogConstants.prototype.catalogName, $.ig.XmlaNamespace.prototype.rowset)));
        var b = $.ig.SerializerUtils.prototype.getText(c.element($.ig.XName.prototype.get($.ig.CatalogConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        return ( function () {
            var f = new $.ig.Catalog();
            f.name(d);
            f.caption(d);
            f.uniqueName(d);
            f.description(b);
            return f
        }())
    },
    $type: new $.ig.Type("DatabaseXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Catalog.prototype.$type)])
}, true);
$.ig.util.defType("DimensionXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (g) {
        var a = this;
        if (g.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var e = g;
        var f = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.DimensionConstants.prototype.dimensionName, $.ig.XmlaNamespace.prototype.rowset)));
        var i = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.DimensionConstants.prototype.dimensionUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var b = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.DimensionConstants.prototype.dimensionCaption, $.ig.XmlaNamespace.prototype.rowset)));
        var c = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.DimensionConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        var h = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.DimensionConstants.prototype.dimensionType, $.ig.XmlaNamespace.prototype.rowset)));
        var d = ($.ig.Number.prototype.parseInt(h));
        return ( function () {
            var j = new $.ig.Dimension();
            j.name(f);
            j.uniqueName(i);
            j.caption(b);
            j.description(c);
            j.dimensionType(d);
            return j
        }())
    },
    $type: new $.ig.Type("DimensionXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Dimension.prototype.$type)])
}, true);
$.ig.util.defType("FaultError", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _errorCode: null,
    errorCode: function (a) {
        if (arguments.length === 1) {
            this._errorCode = a;
            return a
        } else {
            return this._errorCode
        }
    },
    _description: null,
    description: function (a) {
        if (arguments.length === 1) {
            this._description = a;
            return a
        } else {
            return this._description
        }
    },
    _source: null,
    source: function (a) {
        if (arguments.length === 1) {
            this._source = a;
            return a
        } else {
            return this._source
        }
    },
    _helpFile: null,
    helpFile: function (a) {
        if (arguments.length === 1) {
            this._helpFile = a;
            return a
        } else {
            return this._helpFile
        }
    },
    _severity: null,
    severity: function (a) {
        if (arguments.length === 1) {
            this._severity = a;
            return a
        } else {
            return this._severity
        }
    },
    $type: new $.ig.Type("FaultError", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("ErrorXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (c) {
        var a = new $.ig.FaultError();
        var b = c;
        a.errorCode($.ig.SerializerUtils.prototype.getText1(b.attribute($.ig.XName.prototype.get("ErrorCode", ""))));
        a.description($.ig.SerializerUtils.prototype.getText1(b.attribute($.ig.XName.prototype.get("Description", ""))));
        a.source($.ig.SerializerUtils.prototype.getText1(b.attribute($.ig.XName.prototype.get("Source", ""))));
        a.helpFile($.ig.SerializerUtils.prototype.getText1(b.attribute($.ig.XName.prototype.get("HelpFile", ""))));
        a.severity($.ig.SerializerUtils.prototype.getText1(b.attribute($.ig.XName.prototype.get("Severity", ""))));
        return a
    },
    $type: new $.ig.Type("ErrorXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.FaultError.prototype.$type)])
}, true);
$.ig.util.defType("HierarchyXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (l) {
        var a = this;
        if (l.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var h = l;
        var k = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.hierarchyName, $.ig.XmlaNamespace.prototype.rowset)));
        var m = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.hierarchyUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var c = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.hierarchyCaption, $.ig.XmlaNamespace.prototype.rowset)));
        var e = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        var d = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.defaultMember, $.ig.XmlaNamespace.prototype.rowset)));
        var b = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.allMember, $.ig.XmlaNamespace.prototype.rowset)));
        var f = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.dimensionUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var g = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.hierarchyDisplayFolder, $.ig.XmlaNamespace.prototype.rowset)));
        var j = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.HierarchyConstants.prototype.hierarchyOrigin, $.ig.XmlaNamespace.prototype.rowset)));
        var i = (j == null ? 1 : $.ig.Number.prototype.parseInt(j));
        return ( function () {
            var n = new $.ig.Hierarchy();
            n.name(k);
            n.uniqueName(m);
            n.caption(c);
            n.description(e);
            n.defaultMember(d);
            n.allMember(b);
            n.dimensionUniqueName(f);
            n.hierarchyDisplayFolder(g);
            n.hierarchyOrigin(i);
            return n
        }())
    },
    $type: new $.ig.Type("HierarchyXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Hierarchy.prototype.$type)])
}, true);
$.ig.util.defType("LevelXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (l) {
        var a = this;
        if (l.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var e = l;
        var k = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.levelName, $.ig.XmlaNamespace.prototype.rowset)));
        var m = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.levelUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var b = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.levelCaption, $.ig.XmlaNamespace.prototype.rowset)));
        var c = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        var d = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.dimensionUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var f = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.hierarchyUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var h = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.levelNumber, $.ig.XmlaNamespace.prototype.rowset)));
        var g = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.levelCardinality, $.ig.XmlaNamespace.prototype.rowset)));
        var j = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.levelOrigin, $.ig.XmlaNamespace.prototype.rowset)));
        var i = $.ig.SerializerUtils.prototype.getText(e.element($.ig.XName.prototype.get($.ig.LevelConstants.prototype.levelOrderingProperty, $.ig.XmlaNamespace.prototype.rowset)));
        return ( function () {
            var n = new $.ig.Level();
            n.name(k);
            n.uniqueName(m);
            n.caption(b);
            n.description(c);
            n.dimensionUniqueName(d);
            n.hierarchyUniqueName(f);
            n.depth($.ig.Number.prototype.parseInt(h));
            n.membersCount($.ig.Number.prototype.parseInt(g));
            n.levelOrigin(String.isNullOrEmpty(j) ? 0 : $.ig.Number.prototype.parseInt(j));
            n.levelOrderingProperty(i);
            return n
        }())
    },
    $type: new $.ig.Type("LevelXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Level.prototype.$type)])
}, true);
$.ig.util.defType("MeasureGroupDimensionXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (o) {
        var a = this;
        if (o.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var i = o;
        var b = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.catalogName, $.ig.XmlaNamespace.prototype.rowset)));
        var c = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.cubeName, $.ig.XmlaNamespace.prototype.rowset)));
        var n = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.measureGroupName, $.ig.XmlaNamespace.prototype.rowset)));
        var h = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.dimensionUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var l = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.measureGroupCardinality, $.ig.XmlaNamespace.prototype.rowset)));
        var m = l == "ONE" ? $.ig.CardinalityType.prototype.one : $.ig.CardinalityType.prototype.many;
        var d = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.dimensionCardinality, $.ig.XmlaNamespace.prototype.rowset)));
        var e = d == "ONE" ? $.ig.CardinalityType.prototype.one : $.ig.CardinalityType.prototype.many;
        var j = $.ig.SerializerUtils.prototype.getBoolean(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.dimensionIsVisible, $.ig.XmlaNamespace.prototype.rowset)));
        var k = $.ig.SerializerUtils.prototype.getBoolean(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.dimensionIsFactDimension, $.ig.XmlaNamespace.prototype.rowset)));
        var g = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.dimensionPath, $.ig.XmlaNamespace.prototype.rowset)));
        var f = $.ig.SerializerUtils.prototype.getText(i.element($.ig.XName.prototype.get($.ig.MeasureGroupDimensionConstants.prototype.dimensionGranularity, $.ig.XmlaNamespace.prototype.rowset)));
        return ( function () {
            var p = new $.ig.MeasureGroupDimension();
            p.catalogName(b);
            p.cubeName(c);
            p.measureGroupName(n);
            p.dimensionUniqueName(h);
            p.measureGroupCardinality(m);
            p.dimensionCardinality(e);
            p.isDimensionVisible(j);
            p.isFactDimension(k);
            p.dimensionPath(g);
            p.dimensionGranularity(f);
            return p
        }())
    },
    $type: new $.ig.Type("MeasureGroupDimensionXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.MeasureGroupDimension.prototype.$type)])
}, true);
$.ig.util.defType("MeasureGroupXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (h) {
        var a = this;
        if (h.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var f = h;
        var c = $.ig.SerializerUtils.prototype.getText(f.element($.ig.XName.prototype.get($.ig.MeasureGroupConstants.prototype.catalogName, $.ig.XmlaNamespace.prototype.rowset)));
        var d = $.ig.SerializerUtils.prototype.getText(f.element($.ig.XName.prototype.get($.ig.MeasureGroupConstants.prototype.cubeName, $.ig.XmlaNamespace.prototype.rowset)));
        var g = $.ig.SerializerUtils.prototype.getText(f.element($.ig.XName.prototype.get($.ig.MeasureGroupConstants.prototype.measureGroupName, $.ig.XmlaNamespace.prototype.rowset)));
        var b = $.ig.SerializerUtils.prototype.getText(f.element($.ig.XName.prototype.get($.ig.MeasureGroupConstants.prototype.measureGroupCaption, $.ig.XmlaNamespace.prototype.rowset)));
        var e = $.ig.SerializerUtils.prototype.getText(f.element($.ig.XName.prototype.get($.ig.MeasureGroupConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        return ( function () {
            var i = new $.ig.MeasureGroup();
            i.catalogName(c);
            i.cubeName(d);
            i.name(g);
            i.caption(b);
            i.description(e);
            return i
        }())
    },
    $type: new $.ig.Type("MeasureGroupXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.MeasureGroup.prototype.$type)])
}, true);
$.ig.util.defType("MeasureXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (k) {
        var a = this;
        if (k.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var h = k;
        var j = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.measureName, $.ig.XmlaNamespace.prototype.rowset)));
        var l = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.measureUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var d = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.measureCaption, $.ig.XmlaNamespace.prototype.rowset)));
        var f = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        var e = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.defaultFormatString, $.ig.XmlaNamespace.prototype.rowset)));
        var i = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.measureGroupName, $.ig.XmlaNamespace.prototype.rowset)));
        var c = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.measureAggregator, $.ig.XmlaNamespace.prototype.rowset)));
        var b = ($.ig.Number.prototype.parseInt(c));
        var g = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MeasureConstants.prototype.measureDisplayFolder, $.ig.XmlaNamespace.prototype.rowset)));
        return ( function () {
            var m = new $.ig.Measure();
            m.name(j);
            m.uniqueName(l);
            m.caption(d);
            m.description(f);
            m.defaultFormatString(e);
            m.measureGroupName(i);
            m.aggregatorType(b);
            m.measureDisplayFolder(g);
            return m
        }())
    },
    $type: new $.ig.Type("MeasureXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Measure.prototype.$type)])
}, true);
$.ig.util.defType("MemberXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (n) {
        var a = this;
        if (n.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var h = n;
        var c = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.catalogName, $.ig.XmlaNamespace.prototype.rowset)));
        var e = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.cubeName, $.ig.XmlaNamespace.prototype.rowset)));
        var m = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.memberName, $.ig.XmlaNamespace.prototype.rowset)));
        var r = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.memberUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var l = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.memberType, $.ig.XmlaNamespace.prototype.rowset)));
        var g = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.dimensionUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var i = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.hierarchyUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var k = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.levelUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var b = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.memberCaption, $.ig.XmlaNamespace.prototype.rowset)));
        var f = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.description, $.ig.XmlaNamespace.prototype.rowset)));
        var j = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.levelNumber, $.ig.XmlaNamespace.prototype.rowset)));
        var d = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.childrenCardinality, $.ig.XmlaNamespace.prototype.rowset)));
        var p = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.parentUniqueName, $.ig.XmlaNamespace.prototype.rowset)));
        var q = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.scope, $.ig.XmlaNamespace.prototype.rowset)));
        var o = $.ig.SerializerUtils.prototype.getText(h.element($.ig.XName.prototype.get($.ig.MemberConstants.prototype.parentLevel, $.ig.XmlaNamespace.prototype.rowset)));
        return ( function () {
            var s = new $.ig.Member();
            s.catalogName(c);
            s.cubeName(e);
            s.dimensionUniqueName(g);
            s.hierarchyUniqueName(i);
            s.levelUniqueName(k);
            s.levelDepth($.ig.Number.prototype.parseInt(j));
            s.name(m);
            s.uniqueName(r);
            s.memberType($.ig.Number.prototype.parseInt(l));
            s.caption(b);
            s.childrenCardinality($.ig.Number.prototype.parseInt(d));
            s.description(f);
            s.parentUniqueName(p);
            s.scope($.ig.util.toNullable($.ig.Number.prototype.$type, q == null ? null : $.ig.Number.prototype.parseInt(q)));
            s.parentLevel(String.isNullOrEmpty(o) ? 0 : $.ig.Number.prototype.parseInt(o));
            return s
        }())
    },
    $type: new $.ig.Type("MemberXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.Member.prototype.$type)])
}, true);
$.ig.util.defType("ResultXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (i) {
        var a = this;
        if (i.nodeType() != $.ig.XmlNodeType.prototype.element) {
            return null
        }
        var j = i;
        var h = j.name().namespaceName();
        switch (h) {
            case $.ig.XmlaNamespace.prototype.empty:
                return ( function () {
                    var k = new $.ig.OlapResult();
                    k.isEmpty(true);
                    return k
                }());
            case $.ig.XmlaNamespace.prototype.mdDataset:
                var e = j.element($.ig.XName.prototype.get("OlapInfo", $.ig.XmlaNamespace.prototype.mdDataset));
                var d = j.element($.ig.XName.prototype.get("Axes", $.ig.XmlaNamespace.prototype.mdDataset));
                var b = new $.ig.ArraySerializer();
                var c = b.deserialize$1($.ig.OlapResultAxis.prototype.$type, d, $.ig.XName.prototype.get("Axis", $.ig.XmlaNamespace.prototype.mdDataset), new $.ig.AxisXmlTypeSerializer());
                var f = j.element($.ig.XName.prototype.get("CellData", $.ig.XmlaNamespace.prototype.mdDataset));
                var g = b.deserialize$1($.ig.OlapResultAxis.prototype.$type, f, $.ig.XName.prototype.get("Cell", $.ig.XmlaNamespace.prototype.mdDataset), new $.ig.CellXmlTypeSerializer());
                return ( function () {
                    var k = new $.ig.OlapResult();
                    k.axes(c);
                    k.cells(g);
                    return k
                }())
        }
        return null
    },
    $type: new $.ig.Type("ResultXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.OlapResult.prototype.$type)])
}, true);
$.ig.util.defType("SerializerUtils", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    getText: function (a) {
        if (a != null) {
            return a.value()
        } else {
            return null
        }
    },
    getText1: function (a) {
        if (a != null) {
            return a.value()
        } else {
            return null
        }
    },
    getBoolean: function (a) {
        var b = $.ig.SerializerUtils.prototype.getText(a).toLowerCase();
        return b == "true"
    },
    getDateTime: function (a) {
        if (a != null && !String.isNullOrEmpty(a.value())) {
            return $.ig.SerializerUtils.prototype.parseDate(a.value())
        } else {
            return $.ig.SerializerUtils.prototype.getDefaultDate()
        }
    },
    parseDate: function (b) {
        var c = b;
        var a;
        a = (function (j) {
            var f = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.*)$/.exec(j);
            if (!f) {
                throw "Invalid textual date representation."
            }
            var k = parseInt(f[1], 10);
            var h = parseInt(f[2], 10) - 1;
            var d = parseInt(f[3], 10);
            var e = parseInt(f[4], 10);
            var g = parseInt(f[5], 10);
            var i = parseInt(f[6], 10);
            return new Date(k, h, d, e, g, i)
        })(c);
        return a
    },
    getDefaultDate: function () {
        var a;
        a = new Date(2000, 0, 1);
        return a
    },
    $type: new $.ig.Type("SerializerUtils", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaConstants", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("XmlaConstants", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaSoapFault", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _faultCode: null,
    faultCode: function (a) {
        if (arguments.length === 1) {
            this._faultCode = a;
            return a
        } else {
            return this._faultCode
        }
    },
    _faultString: null,
    faultString: function (a) {
        if (arguments.length === 1) {
            this._faultString = a;
            return a
        } else {
            return this._faultString
        }
    },
    _faultActor: null,
    faultActor: function (a) {
        if (arguments.length === 1) {
            this._faultActor = a;
            return a
        } else {
            return this._faultActor
        }
    },
    _faultDetail: null,
    faultDetail: function (a) {
        if (arguments.length === 1) {
            this._faultDetail = a;
            return a
        } else {
            return this._faultDetail
        }
    },
    $type: new $.ig.Type("XmlaSoapFault", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaSoapFaultXmlTypeSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (l) {
        var a = this;
        var k = l;
        var j = new $.ig.XmlaSoapFault();
        var d = k.elements().getEnumerator();
        while (d.moveNext()) {
            var m = d.current();
            switch (m.name().localName()) {
                case"faultcode":
                    j.faultCode($.ig.SerializerUtils.prototype.getText(m));
                    break;
                case"faultstring":
                    j.faultString($.ig.SerializerUtils.prototype.getText(m));
                    break;
                case"faultactor":
                    j.faultActor($.ig.SerializerUtils.prototype.getText(m));
                    break
            }
        }
        var b = k.element($.ig.XName.prototype.get("detail", ""));
        if (b != null) {
            var g = b.elements1($.ig.XName.prototype.get("Error", ""));
            var h = new $.ig.List$1($.ig.FaultError.prototype.$type, 0);
            var i = new $.ig.ErrorXmlTypeSerializer();
            var d = g.getEnumerator();
            while (d.moveNext()) {
                var f = d.current();
                var c = i.deserialize(f);
                h.add(c)
            }
            j.faultDetail(( function () {
                var e = new $.ig.FaultDetail();
                e.error(h.toArray());
                return e
            }()))
        }
        return j
    },
    $type: new $.ig.Type("XmlaSoapFaultXmlTypeSerializer", $.ig.Object.prototype.$type, [$.ig.IXmlTypeSerializer$1.prototype.$type.specialize($.ig.XmlaSoapFault.prototype.$type)])
}, true);
$.ig.util.defType("XmlaSoapMethodResult", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    __returnField: null,
    returnElement: function (a) {
        if (arguments.length === 1) {
            this.__returnField = a;
            return a
        } else {
            return this.__returnField
        }
    },
    _sessionId: null,
    sessionId: function (a) {
        if (arguments.length === 1) {
            this._sessionId = a;
            return a
        } else {
            return this._sessionId
        }
    },
    $type: new $.ig.Type("XmlaSoapMethodResult", $.ig.Object.prototype.$type, [$.ig.IXmlaMethodResult.prototype.$type])
}, true);
$.ig.util.defType("DiscoverResponseResult", "XmlaSoapMethodResult", {
    init: function () {
        $.ig.XmlaSoapMethodResult.prototype.init.call(this)
    },
    $type: new $.ig.Type("DiscoverResponseResult", $.ig.XmlaSoapMethodResult.prototype.$type)
}, true);
$.ig.util.defType("RequestCompletedEventArgs$1", "AsyncCompletedEventArgs", {
    $t: null,
    __result: null,
    init: function (a, d, c, b, e) {
        this.$t = a;
        this.$type = this.$type.specialize(this.$t);
        $.ig.AsyncCompletedEventArgs.prototype.init.call(this, c, b, e);
        this.__result = d
    },
    result: function () {
        $.ig.AsyncCompletedEventArgs.prototype.raiseExceptionIfNecessary.call(this);
        return this.__result
    },
    $type: new $.ig.Type("RequestCompletedEventArgs$1", $.ig.AsyncCompletedEventArgs.prototype.$type)
}, true);
$.ig.util.defType("ExecuteResponseResult", "XmlaSoapMethodResult", {
    init: function () {
        $.ig.XmlaSoapMethodResult.prototype.init.call(this)
    },
    $type: new $.ig.Type("ExecuteResponseResult", $.ig.XmlaSoapMethodResult.prototype.$type)
}, true);
$.ig.util.defType("FaultDetail", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _error: null,
    error: function (a) {
        if (arguments.length === 1) {
            this._error = a;
            return a
        } else {
            return this._error
        }
    },
    $type: new $.ig.Type("FaultDetail", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("IXmlaSoapMethod", "Object", {
    $type: new $.ig.Type("IXmlaSoapMethod", null)
}, true);
$.ig.util.defType("XmlaNamespace", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("XmlaNamespace", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaQueryProperty", "Object", {
    init: function (a) {
        if (a > 0) {
            switch (a) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.Object.prototype.init.call(this)
    },
    init1: function (a, b, c) {
        $.ig.Object.prototype.init.call(this);
        this.propertyName(b);
        this.value(c)
    },
    _propertyName: null,
    propertyName: function (a) {
        if (arguments.length === 1) {
            this._propertyName = a;
            return a
        } else {
            return this._propertyName
        }
    },
    _value: null,
    value: function (a) {
        if (arguments.length === 1) {
            this._value = a;
            return a
        } else {
            return this._value
        }
    },
    toString: function () {
        return String.concat5(this.propertyName(), " = ", this.value())
    },
    $type: new $.ig.Type("XmlaQueryProperty", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaPropertiesCollection", "Object", {
    __internalDictionary: null,
    __itemsMap: null,
    __items: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__internalDictionary = new $.ig.Dictionary$2(String, $.ig.XmlaQueryProperty.prototype.$type, 0);
        this.__itemsMap = new $.ig.Dictionary$2(String, $.ig.Number.prototype.$type, 0);
        this.__items = new $.ig.List$1($.ig.XmlaQueryProperty.prototype.$type, 0)
    },
    tryGetValue: function (b, c) {
        var a = this;
        return {
            ret: ( function () {
                var d = a.__internalDictionary.tryGetValue(b, c);
                c = d.value;
                return d.ret
            }()),
            value: c
        };
        return {
            value: c
        }
    },
    contains: function (a) {
        return this.__internalDictionary.containsKey(a)
    },
    indexOf: function (a) {
        return this.__items.indexOf(a)
    },
    insert: function (a, b) {
        this.__internalDictionary.add(b.propertyName(), b);
        this.__items.insert(a, b)
    },
    removeAt: function (a) {
        if (a < this.__items.count()) {
            var b = this.__items.item(a);
            if (this.__internalDictionary.remove(b.propertyName())) {
                this.__items.removeAt(a)
            }
        }
    },
    item: function (a, c) {
        if (arguments.length === 2) {
            var b = this.__items.item(a);
            this.__internalDictionary.remove(b.propertyName());
            this.__internalDictionary.add(c.propertyName(), c);
            this.__items.item(a, c);
            return c
        } else {
            return this.__items.item(a)
        }
    },
    add: function (a) {
        this.__internalDictionary.add(a.propertyName(), a);
        this.__items.add(a)
    },
    clear: function () {
        this.__items.clear();
        this.__internalDictionary.clear()
    },
    contains1: function (a) {
        return this.__items.contains(a)
    },
    copyTo: function (a, b) {
        this.__items.copyTo(a, b)
    },
    count: function () {
        return this.__items.count()
    },
    isReadOnly: function () {
        return this.__items.isReadOnly()
    },
    remove: function (a) {
        if (this.__items.remove(a)) {
            return this.__internalDictionary.remove(a.propertyName())
        }
        return false
    },
    getEnumerator: function () {
        return this.__items.getEnumerator()
    },
    isFixedSize: function () {
        return false
    },
    isSynchronized: function () {
        return (this.__items).isSynchronized()
    },
    syncRoot: function () {
        return (this.__items).syncRoot()
    },
    $type: new $.ig.Type("XmlaPropertiesCollection", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize($.ig.XmlaQueryProperty.prototype.$type), $.ig.IList.prototype.$type])
}, true);
$.ig.util.defType("XmlaSoapMessageBuilder", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _xmlaMethod: null,
    xmlaMethod: function (a) {
        if (arguments.length === 1) {
            this._xmlaMethod = a;
            return a
        } else {
            return this._xmlaMethod
        }
    },
    build: function () {
        if (this.xmlaMethod() == null) {
            throw new $.ig.InvalidOperationException(1, "XmlaMethod is not specified.")
        }
        var b = $.ig.XNamespace.prototype.get($.ig.XmlaSoapMessageBuilder.prototype.xmlnsEnvelope);
        this.xmlaMethod().construct(b);
        var a = this.createEnvelope();
        return a.toString()
    },
    createEnvelope: function () {
        var a = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMessageBuilder.prototype.envelopeConstant, $.ig.XmlaSoapMessageBuilder.prototype.xmlnsEnvelope));
        this.addHeader(a);
        this.addBody(a);
        return a
    },
    addHeader: function (d) {
        var c = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMessageBuilder.prototype.headerConstant, d.name().namespace().namespaceName()));
        d.add(c);
        var b = this.xmlaMethod().headers().getEnumerator();
        while (b.moveNext()) {
            var a = b.current();
            c.add(a)
        }
    },
    addBody: function (e) {
        var a = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMessageBuilder.prototype.bodyConstant, e.name().namespace().namespaceName()));
        e.add(a);
        var d = new $.ig.XElement(1, $.ig.XName.prototype.get(this.xmlaMethod().name(), $.ig.XmlaNamespace.prototype.analysis));
        a.add(d);
        var c = this.xmlaMethod().parameters().getEnumerator();
        while (c.moveNext()) {
            var b = c.current();
            d.add(b)
        }
    },
    $type: new $.ig.Type("XmlaSoapMessageBuilder", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaSoapMethod", "Object", {
    __parameters: null,
    __headers: null,
    __parametersList: null,
    __headersList: null,
    __properties: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__parametersList = new $.ig.List$1($.ig.XElement.prototype.$type, 0);
        this.__headersList = new $.ig.List$1($.ig.XElement.prototype.$type, 0);
        this.__parameters = new $.ig.ReadOnlyCollection$1($.ig.XElement.prototype.$type, 1, this.__parametersList);
        this.__headers = new $.ig.ReadOnlyCollection$1($.ig.XElement.prototype.$type, 1, this.__headersList);
        this.__properties = new $.ig.XmlaPropertiesCollection()
    },
    properties: function () {
        return this.__properties
    },
    _name: null,
    name: function () {
        return this._name
    },
    parameters: function () {
        return this.__parameters
    },
    headers: function () {
        return this.__headers
    },
    parametersList: function () {
        return this.__parametersList
    },
    headersList: function () {
        return this.__headersList
    },
    construct: function (a) {
    },
    mergeProperties: function (c) {
        var a = this;
        if (c == null) {
            return
        }
        var b = c.getEnumerator();
        while (b.moveNext()) {
            var e = b.current();
            var d;
            if (( function () {
                var f = a.properties().tryGetValue(e.propertyName(), d);
                d = f.value;
                return f.ret
            }())) {
                d.value(e.value())
            } else {
                this.properties().add(e)
            }
        }
    },
    $type: new $.ig.Type("XmlaSoapMethod", $.ig.Object.prototype.$type, [$.ig.IXmlaSoapMethod.prototype.$type])
}, true);
$.ig.util.defType("XmlaSoapMethodDiscover", "XmlaSoapMethod", {
    __restrictions: null,
    init: function (a) {
        $.ig.XmlaSoapMethod.prototype.init.call(this);
        this.headerType($.ig.XmlaSoapMessageHeader.prototype.none);
        this.requestType(a);
        this.__restrictions = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0)
    },
    restrictions: function () {
        return this.__restrictions
    },
    _requestType: null,
    requestType: function (a) {
        if (arguments.length === 1) {
            this._requestType = a;
            return a
        } else {
            return this._requestType
        }
    },
    name: function () {
        return $.ig.XmlaSoapMethodDiscover.prototype.methodName
    },
    _headerType: null,
    headerType: function (a) {
        if (arguments.length === 1) {
            this._headerType = a;
            return a
        } else {
            return this._headerType
        }
    },
    _sessionId: null,
    sessionId: function (a) {
        if (arguments.length === 1) {
            this._sessionId = a;
            return a
        } else {
            return this._sessionId
        }
    },
    construct: function (c) {
        var a = $.ig.XNamespace.prototype.get($.ig.XmlaNamespace.prototype.analysis);
        var g = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodDiscover.prototype.requestTypeConstant, a.namespaceName()));
        g.value(this.requestType());
        var d = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodDiscover.prototype.propertiesConstant, $.ig.XmlaNamespace.prototype.analysis));
        var f = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodDiscover.prototype.propertyListConstant, d.name().namespace().namespaceName()));
        d.add(f);
        var j = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodDiscover.prototype.restrictionsConstant, $.ig.XmlaNamespace.prototype.analysis));
        var i = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodDiscover.prototype.restrictionListConstant, j.name().namespace().namespaceName()));
        j.add(i);
        var b = this.properties().getEnumerator();
        while (b.moveNext()) {
            var e = b.current();
            f.add(new $.ig.XElement(2, $.ig.XName.prototype.get(e.propertyName(), $.ig.XmlaNamespace.prototype.analysis), e.value()))
        }
        var b = this.__restrictions.getEnumerator();
        while (b.moveNext()) {
            var h = b.current();
            i.add(new $.ig.XElement(2, $.ig.XName.prototype.get(h.key(), ""), h.value()))
        }
        this.parametersList().add(g);
        this.parametersList().add(j);
        this.parametersList().add(d)
    },
    $type: new $.ig.Type("XmlaSoapMethodDiscover", $.ig.XmlaSoapMethod.prototype.$type)
}, true);
$.ig.util.defType("XmlaSoapMethodExecute", "XmlaSoapMethod", {
    init: function (a) {
        $.ig.XmlaSoapMethod.prototype.init.call(this);
        this.statement(a)
    },
    name: function () {
        return $.ig.XmlaSoapMethodExecute.prototype.methodName
    },
    _statement: null,
    statement: function (a) {
        if (arguments.length === 1) {
            this._statement = a;
            return a
        } else {
            return this._statement
        }
    },
    construct: function (d) {
        var a = $.ig.XNamespace.prototype.get($.ig.XmlaNamespace.prototype.analysis);
        var b = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodExecute.prototype.commandConstant, a.namespaceName()));
        var h = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodExecute.prototype.statementConstant, a.namespaceName()));
        h.value(this.statement());
        b.add(h);
        var e = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodExecute.prototype.propertiesConstant, $.ig.XmlaNamespace.prototype.analysis));
        var g = new $.ig.XElement(1, $.ig.XName.prototype.get($.ig.XmlaSoapMethodExecute.prototype.propertyListConstant, e.name().namespace().namespaceName()));
        e.add(g);
        var c = this.properties().getEnumerator();
        while (c.moveNext()) {
            var f = c.current();
            g.add(new $.ig.XElement(2, $.ig.XName.prototype.get(f.propertyName(), $.ig.XmlaNamespace.prototype.analysis), f.value()))
        }
        this.parametersList().add(b);
        this.parametersList().add(e)
    },
    $type: new $.ig.Type("XmlaSoapMethodExecute", $.ig.XmlaSoapMethod.prototype.$type)
}, true);
$.ig.util.defType("XmlaSoapWebClient", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _registeredPrefixes: null,
    staticInit: function () {
        $.ig.XmlaSoapWebClient.prototype._registeredPrefixes = new $.ig.List$1(String, 0)
    },
    $type: new $.ig.Type("XmlaSoapWebClient", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaSoapWebClient$1", "XmlaSoapWebClient", {
    $t: null,
    __webClient: null,
    __requestCompleted: null,
    init: function (a, c, b) {
        this.$t = a;
        this.$type = this.$type.specialize(this.$t);
        $.ig.XmlaSoapWebClient.prototype.init.call(this);
        this.__webClient = new $.ig.WebClient();
        this.__webClient.encoding(b);
        this.__webClient.uploadStringCompleted = $.ig.Delegate.prototype.combine(this.__webClient.uploadStringCompleted, this.requestAsyncCompleted.on(this));
        this.serverUri(c)
    },
    requestCompleted: null,
    _credentials: null,
    credentials: function (a) {
        if (arguments.length === 1) {
            this._credentials = a;
            return a
        } else {
            return this._credentials
        }
    },
    _serverUri: null,
    serverUri: function (a) {
        if (arguments.length === 1) {
            this._serverUri = a;
            return a
        } else {
            return this._serverUri
        }
    },
    isCompleted: function () {
        return this.__requestCompleted
    },
    requestAsync: function (a) {
        this.requestAsync1(a, null)
    },
    requestAsync1: function (d, b) {
        var a = new $.ig.XmlaSoapMessageBuilder();
        a.xmlaMethod(d);
        var c = a.build();
        if (this.credentials() != null) {
            this.__webClient.credentials(this.credentials())
        } else {
            this.__webClient.credentials(null)
        }
        this.__webClient.headers().item("Content-Type", "text/xml");
        this.__webClient.uploadStringAsync(this.serverUri(), "POST", c, b)
    },
    onRequestCompleted: function (a) {
        if (this.requestCompleted != null) {
            this.requestCompleted(this, a)
        }
    },
    requestAsyncCompleted: function (b, a) {
        this.__requestCompleted = true;
        this.onRequestCompletedImpl(a)
    },
    onRequestCompletedImpl: function (f) {
        var o = null;
        var l = null;
        if (!f.cancelled() && f.error() == null) {
            var p = $.ig.XDocument.prototype.parse(f.result());
            var g = p.element($.ig.XName.prototype.get("Envelope", "http://schemas.xmlsoap.org/soap/envelope/"));
            var b = g.element($.ig.XName.prototype.get("Body", "http://schemas.xmlsoap.org/soap/envelope/"));
            var k = b.element($.ig.XName.prototype.get("Fault", "http://schemas.xmlsoap.org/soap/envelope/"));
            if (k != null) {
                var m = new $.ig.XmlaSoapFaultXmlTypeSerializer();
                var j = m.deserialize(k);
                l = new $.ig.FaultException$1($.ig.XmlaSoapFault.prototype.$type, j, new $.ig.FaultReason(j.faultString()), new $.ig.FaultCode(j.faultCode()), null)
            } else {
                if (this.$t == $.ig.DiscoverResponseResult.prototype.$type) {
                    var c = b.element($.ig.XName.prototype.get("DiscoverResponse", $.ig.XmlaNamespace.prototype.analysis));
                    var q = c.element($.ig.XName.prototype.get("return", $.ig.XmlaNamespace.prototype.analysis));
                    var r = q.element($.ig.XName.prototype.get("root", $.ig.XmlaNamespace.prototype.rowset));
                    var d = new $.ig.DiscoverResponseResult();
                    d.returnElement(r);
                    o = d
                }
                if (this.$t == $.ig.ExecuteResponseResult.prototype.$type) {
                    var n = b.element($.ig.XName.prototype.get("ExecuteResponse", $.ig.XmlaNamespace.prototype.analysis));
                    var q = n.element($.ig.XName.prototype.get("return", $.ig.XmlaNamespace.prototype.analysis));
                    var r = q.element($.ig.XName.prototype.get("root", $.ig.XmlaNamespace.prototype.mdDataset));
                    var i = new $.ig.ExecuteResponseResult();
                    i.returnElement(r);
                    o = i
                }
            }
        }
        var h = f.error() != null ? f.error() : l;
        var a = new $.ig.RequestCompletedEventArgs$1(this.$t, o, h, f.cancelled(), f.userState());
        this.onRequestCompleted(a)
    },
    $type: new $.ig.Type("XmlaSoapWebClient$1", $.ig.XmlaSoapWebClient.prototype.$type)
}, true);
$.ig.util.defType("IMdxExpression", "Object", {
    $type: new $.ig.Type("IMdxExpression", null)
}, true);
$.ig.util.defType("IMdxElement", "Object", {
    $type: new $.ig.Type("IMdxElement", null, [$.ig.IMdxExpression.prototype.$type])
}, true);
$.ig.util.defType("IAxisFilterElement", "Object", {
    $type: new $.ig.Type("IAxisFilterElement", null, [$.ig.IMdxElement.prototype.$type])
}, true);
$.ig.util.defType("IMdxAxis", "Object", {
    $type: new $.ig.Type("IMdxAxis", null, [$.ig.IMdxExpression.prototype.$type])
}, true);
$.ig.util.defType("IMdxCollectionElement", "Object", {
    $type: new $.ig.Type("IMdxCollectionElement", null, [$.ig.IMdxElement.prototype.$type])
}, true);
$.ig.util.defType("IMdxExtendedFilterInfo", "Object", {
    $type: new $.ig.Type("IMdxExtendedFilterInfo", null)
}, true);
$.ig.util.defType("IMdxFilterInfo", "Object", {
    $type: new $.ig.Type("IMdxFilterInfo", null)
}, true);
$.ig.util.defType("IMdxSet", "Object", {
    $type: new $.ig.Type("IMdxSet", null, [$.ig.IMdxExpression.prototype.$type])
}, true);
$.ig.util.defType("MdxAxis", "Object", {
    __setsList: null,
    __sets: null,
    __isExpressionReady: null,
    __expression: null,
    __axisIndex: null,
    __axisNames: null,
    init: function (b, a) {
        if (b > 0) {
            switch (b) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        this.__axisNames = ( function () {
            var c = new Array();
            c.add("COLUMNS");
            c.add("ROWS");
            c.add("PAGES");
            return c
        }());
        $.ig.MdxAxis.prototype.init1.call(this, 1, a, new $.ig.MdxSettings())
    },
    init1: function (c, b, d) {
        var a = this;
        this.__axisNames = ( function () {
            var e = new Array();
            e.add("COLUMNS");
            e.add("ROWS");
            e.add("PAGES");
            return e
        }());
        $.ig.Object.prototype.init.call(this);
        this.axisIndex(b);
        this.mdxSettings(d != null ? d : new $.ig.MdxSettings());
        this.__setsList = new $.ig.List$1($.ig.IMdxSet.prototype.$type, 0);
        this.__sets = new $.ig.ReadOnlyCollection$1($.ig.IMdxSet.prototype.$type, 1, this.__setsList)
    },
    axisIndex: function (a) {
        if (arguments.length === 1) {
            if (this.__axisIndex != a) {
                this.__axisIndex = a;
                this.__isExpressionReady = false
            }
            return a
        } else {
            return this.__axisIndex
        }
    },
    _mdxSettings: null,
    mdxSettings: function (a) {
        if (arguments.length === 1) {
            this._mdxSettings = a;
            return a
        } else {
            return this._mdxSettings
        }
    },
    sets: function () {
        return this.__sets
    },
    mdxExpression: function () {
        if (!this.__isExpressionReady) {
            this.__expression = this.getMdxExpression();
            this.__isExpressionReady = true
        }
        return this.__expression
    },
    rebuildExpression: function () {
        this.__expression = this.getMdxExpression();
        this.__isExpressionReady = true
    },
    getMdxSets: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    $e: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$e = this.$this.__sets.getEnumerator();
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$current = this.$e.current();
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$e.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerable$1($.ig.IMdxSet.prototype.$type, a)
    },
    addSet: function (a) {
        this.__setsList.add(a);
        this.__isExpressionReady = false
    },
    getMdxExpression: function () {
        var e = new $.ig.StringBuilder();
        var a = false;
        var b = this.sets().getEnumerator();
        while (b.moveNext()) {
            var c = b.current();
            if (!c.isEnabled()) {
                continue
            }
            if (a) {
                e.append(",");
                e.append($.ig.Environment.prototype.newLine())
            }
            e.append(c.mdxExpression());
            a = true
        }
        if (this.sets().count() > 1) {
            e.insert1(0, "{");
            e.append("}")
        }
        var d = this.mdxSettings() != null ? this.mdxSettings() : new $.ig.MdxSettings();
        this.addDisctinct(e, d);
        this.addNonEmpty(e, d);
        this.addDimensionProperties(e, d);
        this.addAxisName(e);
        return e.toString()
    },
    addDisctinct: function (c, b) {
        var a = this.axisIndex() == 0 ? b.addDistinctOnColumns() : b.addDistinctOnRows();
        if (a) {
            c.insert1(0, "Distinct(");
            c.append(")")
        }
    },
    addNonEmpty: function (c, b) {
        var a = this.axisIndex() == 0 ? b.nonEmptyOnColumns() : b.nonEmptyOnRows();
        if (a) {
            c.insert1(0, $.ig.Environment.prototype.newLine());
            c.insert1(0, "NON EMPTY")
        }
    },
    addDimensionProperties: function (g, f) {
        var b = this.axisIndex() == 0 ? f.addDimensionPropertiesOnColumns() : f.addDimensionPropertiesOnRows();
        if (b) {
            g.append($.ig.Environment.prototype.newLine());
            g.append("DIMENSION PROPERTIES");
            var d = this.axisIndex() == 0 ? f.dimensionPropertiesOnColumns() : f.dimensionPropertiesOnRows();
            var a = false;
            var c = d.getEnumerator();
            while (c.moveNext()) {
                var e = c.current();
                g.append($.ig.Environment.prototype.newLine());
                if (a) {
                    g.append(",")
                }
                g.append(e);
                a = true
            }
        }
    },
    addAxisName: function (a) {
        if (this.axisIndex() < 2) {
            a.append($.ig.Environment.prototype.newLine());
            a.append(String.concat2("ON ", this.__axisNames[this.axisIndex()]))
        }
    },
    $type: new $.ig.Type("MdxAxis", $.ig.Object.prototype.$type, [$.ig.IMdxAxis.prototype.$type])
}, true);
$.ig.util.defType("MdxAxisFilterElement", "Object", {
    __filterCollection: null,
    __singleFilterElements: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__singleFilterElements = new $.ig.List$1($.ig.IMdxElement.prototype.$type, 0);
        this.singleFilterElements(new $.ig.ReadOnlyCollection$1($.ig.IMdxElement.prototype.$type, 1, this.__singleFilterElements));
        this.__filterCollection = new $.ig.MdxElementCollectionElement()
    },
    mdxExpression: function () {
        var a = this;
        if (this.__filterCollection.collectionElements().count() > 1) {
            this.__filterCollection.wrapExpressionWithBrackets(( function () {
                var b = new Array();
                b.add("(");
                b.add(")");
                return b
            }()))
        }
        return this.__filterCollection.mdxExpression()
    },
    _singleFilterElements: null,
    singleFilterElements: function (a) {
        if (arguments.length === 1) {
            this._singleFilterElements = a;
            return a
        } else {
            return this._singleFilterElements
        }
    },
    filterCollection: function () {
        return this.__filterCollection.collectionElements()
    },
    rebuildExpression: function () {
        this.__filterCollection.rebuildExpression()
    },
    addFilterPart: function (b, a) {
        if (b.collectionElements().count() > 0) {
            if (b.collectionElements().count() == 1 && a) {
                this.__singleFilterElements.add(b.collectionElements().item(0));
                return
            }
            this.__filterCollection.addElement(b)
        }
    },
    elementType: function () {
        return $.ig.MdxElementType.prototype.filter
    },
    $type: new $.ig.Type("MdxAxisFilterElement", $.ig.Object.prototype.$type, [$.ig.IAxisFilterElement.prototype.$type])
}, true);
$.ig.util.defType("MdxCalculatedMembersCache", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__registeredMembers = new $.ig.List$1(String, 0);
        this.__memberExpression = new $.ig.Dictionary$2(String, String, 0)
    },
    __registeredMembers: null,
    __memberExpression: null,
    getCalculatedMembers: function (b) {
        var d = new $.ig.StringBuilder();
        var c = b.getMemberAliasExpressionPairs().getEnumerator();
        while (c.moveNext()) {
            var a = c.current();
            $.ig.MdxCalculatedMembersCache.prototype.addCalculatedMemberWithClause(d, a.key(), a.value())
        }
        return d.toString()
    },
    addMember: function (c, b, a) {
        if (!this.__registeredMembers.contains(c)) {
            this.__registeredMembers.add(c)
        }
        if (!this.__memberExpression.containsKey(b)) {
            this.__memberExpression.add(b, a)
        }
    },
    getMemberAliasExpressionPairs: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    $e: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$e = this.$this.__memberExpression.getEnumerator();
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$current = this.$e.current();
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$e.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerable$1($.ig.KeyValuePair$2.prototype.$type.specialize(String, String), a)
    },
    checkCacheMember: function (a) {
        return this.__registeredMembers.contains(a)
    },
    addCalculatedMemberWithClause: function (c, a, b) {
        c.append(String.concat7("MEMBER ", a, " AS", $.ig.Environment.prototype.newLine()));
        c.append(b);
        c.append($.ig.Environment.prototype.newLine())
    },
    $type: new $.ig.Type("MdxCalculatedMembersCache", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MdxElement", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.elementType($.ig.MdxElementType.prototype.userDefined)
    },
    _mdxExpression: null,
    mdxExpression: function () {
        return this._mdxExpression
    },
    _elementType: null,
    elementType: function (a) {
        if (arguments.length === 1) {
            this._elementType = a;
            return a
        } else {
            return this._elementType
        }
    },
    _sourceItemExpression: null,
    sourceItemExpression: function (a) {
        if (arguments.length === 1) {
            this._sourceItemExpression = a;
            return a
        } else {
            return this._sourceItemExpression
        }
    },
    rebuildExpression: function () {
    },
    $type: new $.ig.Type("MdxElement", $.ig.Object.prototype.$type, [$.ig.IMdxItemElement.prototype.$type])
}, true);
$.ig.util.defType("MdxSingleElement", "MdxElement", {
    init: function (c, a, b, d) {
        if (c > 0) {
            switch (c) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.MdxSingleElement.prototype.init1.call(this, 1, a, b, d, $.ig.MdxElementType.prototype.member)
    },
    init1: function (d, a, c, e, b) {
        $.ig.MdxElement.prototype.init.call(this);
        this.memberDepth(e);
        switch (b) {
            case $.ig.MdxElementType.prototype.member:
            case $.ig.MdxElementType.prototype.calculated:
                this.sourceItemExpression(a);
                this.elementUniqueName(c);
                this.elementType(b);
                break;
            default:
                throw new $.ig.ArgumentException(1, "Element type could be MdxElementType.Member or MdxElementType.Calculated", "elementType")
        }
    },
    mdxExpression: function () {
        return this.sourceItemExpression()
    },
    _elementUniqueName: null,
    elementUniqueName: function (a) {
        if (arguments.length === 1) {
            this._elementUniqueName = a;
            return a
        } else {
            return this._elementUniqueName
        }
    },
    _memberDepth: null,
    memberDepth: function (a) {
        if (arguments.length === 1) {
            this._memberDepth = a;
            return a
        } else {
            return this._memberDepth
        }
    },
    $type: new $.ig.Type("MdxSingleElement", $.ig.MdxElement.prototype.$type)
}, true);
$.ig.util.defType("MdxDimensionMember", "MdxSingleElement", {
    init: function (a, b, c, e, d) {
        $.ig.MdxSingleElement.prototype.init.call(this, a, b, c);
        this.parentHierarchyUniqueName(e);
        this.parent(d)
    },
    _parentHierarchyUniqueName: null,
    parentHierarchyUniqueName: function (a) {
        if (arguments.length === 1) {
            this._parentHierarchyUniqueName = a;
            return a
        } else {
            return this._parentHierarchyUniqueName
        }
    },
    _parent: null,
    parent: function (a) {
        if (arguments.length === 1) {
            this._parent = a;
            return a
        } else {
            return this._parent
        }
    },
    $type: new $.ig.Type("MdxDimensionMember", $.ig.MdxSingleElement.prototype.$type)
}, true);
$.ig.util.defType("MdxChildrenCollectionElement", "MdxDimensionMember", {
    init: function (a, b, c, e, d) {
        $.ig.MdxDimensionMember.prototype.init.call(this, a, b, c, e, d)
    },
    mdxExpression: function () {
        return String.concat2($.ig.MdxElement.prototype.sourceItemExpression.call(this), ".Children")
    },
    $type: new $.ig.Type("MdxChildrenCollectionElement", $.ig.MdxDimensionMember.prototype.$type)
}, true);
$.ig.util.defType("MdxElementCollectionElement", "Object", {
    __collectionElementsList: null,
    __isExpressionReady: null,
    __expression: null,
    __wrapExpressionWithBrackets: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__collectionElementsList = new $.ig.List$1($.ig.IMdxElement.prototype.$type, 0);
        this.collectionElements(new $.ig.ReadOnlyCollection$1($.ig.IMdxElement.prototype.$type, 1, this.__collectionElementsList))
    },
    wrapExpressionWithBrackets: function (a) {
        if (arguments.length === 1) {
            if (this.__wrapExpressionWithBrackets != a) {
                this.__isExpressionReady = false;
                this.__wrapExpressionWithBrackets = a
            }
            return a
        } else {
            return this.__wrapExpressionWithBrackets
        }
    },
    _collectionElements: null,
    collectionElements: function (a) {
        if (arguments.length === 1) {
            this._collectionElements = a;
            return a
        } else {
            return this._collectionElements
        }
    },
    elementType: function () {
        return $.ig.MdxElementType.prototype.collection
    },
    mdxExpression: function () {
        if (!this.__isExpressionReady) {
            this.__expression = this.getMdxExpression();
            this.__isExpressionReady = true
        }
        return this.__expression
    },
    rebuildExpression: function () {
        this.__expression = this.getMdxExpression();
        this.__isExpressionReady = true
    },
    addElement: function (b) {
        var a = this;
        this.__collectionElementsList.add(b);
        if (this.collectionElements().count() > 1) {
            this.wrapExpressionWithBrackets(( function () {
                var c = new Array();
                c.add("{");
                c.add("}");
                return c
            }()))
        }
        this.__isExpressionReady = false
    },
    getMdxExpression: function () {
        if (this.collectionElements().count() == 0) {
            return String.empty()
        }
        var d = new $.ig.StringBuilder();
        var a = false;
        var b = this.collectionElements().getEnumerator();
        while (b.moveNext()) {
            var c = b.current();
            if (a) {
                d.append(",");
                d.append($.ig.Environment.prototype.newLine())
            }
            d.append(c.mdxExpression());
            a = true
        }
        if (this.wrapExpressionWithBrackets() != null && this.wrapExpressionWithBrackets().length == 2) {
            d.insert1(0, this.wrapExpressionWithBrackets()[0]);
            d.append(this.wrapExpressionWithBrackets()[1])
        }
        return d.toString()
    },
    $type: new $.ig.Type("MdxElementCollectionElement", $.ig.Object.prototype.$type, [$.ig.IMdxCollectionElement.prototype.$type])
}, true);
$.ig.util.defType("MdxLevelMembersElement", "MdxSingleElement", {
    init: function (a, b, c) {
        $.ig.MdxSingleElement.prototype.init.call(this, a, b, c)
    },
    mdxExpression: function () {
        return String.concat2(this.sourceItemExpression(), ".MEMBERS")
    },
    $type: new $.ig.Type("MdxLevelMembersElement", $.ig.MdxSingleElement.prototype.$type)
}, true);
$.ig.util.defType("MdxQueryBuilder", "Object", {
    __mdxSettings: null,
    init: function (a) {
        if (a > 0) {
            switch (a) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.MdxQueryBuilder.prototype.init1.call(this, 1, new $.ig.MdxSettings())
    },
    init1: function (a, b) {
        $.ig.Object.prototype.init.call(this);
        this.mdxSettings(b)
    },
    mdxSettings: function (a) {
        if (arguments.length === 1) {
            this.__mdxSettings = a;
            return a
        } else {
            if (this.__mdxSettings == null) {
                this.__mdxSettings = new $.ig.MdxSettings()
            }
            return this.__mdxSettings
        }
    },
    buildMdxQuery: function (e, f, g, a, b) {
        var c = g;
        var k = this.getCalculatedMembers(e, f, c, a);
        var j = this.getWhereClause(c);
        var d = this.getFromClause(c, b);
        var i = new $.ig.StringBuilder();
        if (!String.isNullOrEmpty(k)) {
            i.append(String.concat2("WITH", $.ig.Environment.prototype.newLine()))
        }
        i.append(k);
        i.append("SELECT");
        i.append($.ig.Environment.prototype.newLine());
        if (e != null) {
            i.append(e.mdxExpression())
        }
        if (f != null) {
            if (e == null) {
                f.axisIndex(0)
            } else {
                i.append(String.concat2(",", $.ig.Environment.prototype.newLine()))
            }
            i.append(f.mdxExpression())
        }
        i.append($.ig.Environment.prototype.newLine());
        i.append(d);
        if (!String.isNullOrEmpty(j)) {
            i.append($.ig.Environment.prototype.newLine());
            i.append(j)
        }
        var h = i.toString();
        return h
    },
    getCalculatedMembers: function (c, d, b, a) {
        return $.ig.MdxCalculatedMembersCache.prototype.getCalculatedMembers(a)
    },
    getFromClause: function (c, a) {
        var d = String.concat7("FROM ", "[", a, "]");
        d = this.getFilterFromClause(d, c.filtersFilter());
        if (c.columnsFilter() != null) {
            d = this.getFilterFromClause(d, c.columnsFilter(), c.rowsFilter())
        } else {
            d = this.getFilterFromClause(d, c.rowsFilter())
        }
        var b = $.ig.util.cast($.ig.IMdxExtendedFilterInfo.prototype.$type, c);
        if (b != null) {
            d = this.getExtendedFilterInfoFromClause(d, b)
        }
        return d
    },
    getExtendedFilterInfoFromClause: function (d, b) {
        if (b.filterElements() != null && b.filterElements().count() > 0) {
            var a = b.filterElements().getEnumerator();
            while (a.moveNext()) {
                var c = a.current();
                var e = new $.ig.StringBuilder();
                e.insert1(0, String.concat("FROM", $.ig.Environment.prototype.newLine(), "(", $.ig.Environment.prototype.newLine(), "SELECT", $.ig.Environment.prototype.newLine()));
                e.append(String.concat5(c.mdxExpression(), " ON COLUMNS", $.ig.Environment.prototype.newLine()));
                e.append(d);
                e.append(String.concat2(")", $.ig.Environment.prototype.newLine()));
                d = e.toString()
            }
        }
        return d
    },
    getFilterFromClause: function (c, a, b) {
        if (a == null || a.filterCollection().count() == 0) {
            return c
        }
        var d = new $.ig.StringBuilder();
        d.append("FROM");
        d.append($.ig.Environment.prototype.newLine());
        d.append("(");
        d.append($.ig.Environment.prototype.newLine());
        d.append("SELECT");
        d.append($.ig.Environment.prototype.newLine());
        d.append(a.mdxExpression());
        d.append(" ON COLUMNS");
        if (b != null && b.filterCollection().count() > 0) {
            d.append($.ig.Environment.prototype.newLine());
            d.append(", ");
            d.append(b.mdxExpression());
            d.append(" ON ROWS")
        }
        d.append($.ig.Environment.prototype.newLine());
        d.append(c);
        d.append($.ig.Environment.prototype.newLine());
        d.append(")");
        return d.toString()
    },
    getWhereClause: function (c) {
        var a = this;
        var e = new $.ig.MdxElementCollectionElement();
        if (c.measureFilter() != null && c.measureFilter().singleFilterElements().count() == 1) {
            e.addElement(c.measureFilter().singleFilterElements().item(0))
        }
        if (c.filtersFilter() != null) {
            var b = c.filtersFilter().singleFilterElements().getEnumerator();
            while (b.moveNext()) {
                var d = b.current();
                e.addElement(d)
            }
        }
        if (e.collectionElements().count() == 0) {
            return String.empty()
        }
        e.wrapExpressionWithBrackets(( function () {
            var f = new Array();
            f.add("(");
            f.add(")");
            return f
        }()));
        return String.concat2("WHERE ", e.mdxExpression())
    },
    $type: new $.ig.Type("MdxQueryBuilder", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MdxSet", "Object", {
    __elementsList: null,
    __elements: null,
    __isExpressionReady: null,
    __expression: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__elementsList = new $.ig.List$1($.ig.IMdxElement.prototype.$type, 0);
        this.__elements = new $.ig.ReadOnlyCollection$1($.ig.IMdxElement.prototype.$type, 1, this.__elementsList);
        this.isEnabled(true)
    },
    _mdxSettings: null,
    mdxSettings: function (a) {
        if (arguments.length === 1) {
            this._mdxSettings = a;
            return a
        } else {
            return this._mdxSettings
        }
    },
    _isEnabled: null,
    isEnabled: function (a) {
        if (arguments.length === 1) {
            this._isEnabled = a;
            return a
        } else {
            return this._isEnabled
        }
    },
    elements: function () {
        return this.__elements
    },
    mdxExpression: function () {
        if (!this.__isExpressionReady) {
            this.__expression = this.getMdxExpression();
            this.__isExpressionReady = true
        }
        return this.__expression
    },
    rebuildExpression: function () {
        this.__expression = this.getMdxExpression();
        this.__isExpressionReady = true
    },
    addElement: function (a) {
        if (this.supportsElementType(a)) {
            this.__elementsList.add(a);
            this.__isExpressionReady = false
        }
    },
    getMdxElements: function () {
        var b = this;
        var a = function () {
            return function () {
                return {
                    $state: 0,
                    $this: b,
                    $current: null,
                    $e: null,
                    getEnumerator: function () {
                        if (this.$state === -1) {
                            this.$state = 0
                        }
                        return this
                    },
                    current: function () {
                        return this.$current
                    },
                    moveNext: function () {
                        do {
                            switch (this.$state) {
                                case 0:
                                    this.$e = this.$this.__elementsList.getEnumerator();
                                    this.$state = 1;
                                    break;
                                case 1:
                                    this.$state = 4;
                                    break;
                                case 2:
                                    this.$current = this.$e.current();
                                    this.$state = 3;
                                    return true;
                                case 3:
                                    this.$state = 4;
                                    break;
                                case 4:
                                    if (this.$e.moveNext()) {
                                        this.$state = 2
                                    } else {
                                        this.$state = 5
                                    }
                                    break;
                                case 5:
                                    this.$state = -2;
                                    break;
                                case -2:
                                    return false
                            }
                        } while (this.$state > 0)
                    }
                }
            }()
        };
        return new $.ig.GenericEnumerable$1($.ig.IMdxElement.prototype.$type, a)
    },
    supportsElementType: function (a) {
        switch (a.elementType()) {
            case $.ig.MdxElementType.prototype.memberTree:
            case $.ig.MdxElementType.prototype.member:
            case $.ig.MdxElementType.prototype.calculated:
            case $.ig.MdxElementType.prototype.collection:
                return true
        }
        return false
    },
    getMdxExpression: function () {
        $.ig.Debug.prototype.assert(this.elements().count() > 0, "MdxSet.Elements collection is empty.");
        var d = new $.ig.StringBuilder();
        var c = this.mdxSettings() != null ? this.mdxSettings() : new $.ig.MdxSettings();
        var e = this.elements().item(0);
        this.addElementExpression(d, e);
        for (var a = 1; a < this.elements().count(); a++) {
            d.insert1(0, "CrossJoin(");
            d.insert1(10, $.ig.Environment.prototype.newLine());
            d.append(",");
            d.append($.ig.Environment.prototype.newLine());
            var b = this.elements().item(a);
            this.addElementExpression(d, b);
            d.append(")")
        }
        return d.toString()
    },
    addElementExpression: function (e, b) {
        var d = new $.ig.StringBuilder();
        switch (b.elementType()) {
            case $.ig.MdxElementType.prototype.calculated:
                var a = b;
                var c = a.elementUniqueName();
                d.append("{");
                d.append(c);
                d.append("}");
                break;
            case $.ig.MdxElementType.prototype.member:
                d.append("{");
                d.append(b.mdxExpression());
                d.append("}");
                break;
            case $.ig.MdxElementType.prototype.collection:
            case $.ig.MdxElementType.prototype.memberTree:
                d.append(b.mdxExpression());
                break
        }
        switch (b.elementType()) {
            case $.ig.MdxElementType.prototype.memberTree:
            case $.ig.MdxElementType.prototype.member:
                this.addVisualTotals(d, b);
                this.addCalculatedMembers(d, b);
                break
        }
        e.append1(d)
    },
    addVisualTotals: function (b, a) {
    },
    addCalculatedMembers: function (b, a) {
    },
    clone: function () {
        var c = new $.ig.MdxSet();
        var a = this.elements().getEnumerator();
        while (a.moveNext()) {
            var b = a.current();
            c.addElement(b)
        }
        return c
    },
    $type: new $.ig.Type("MdxSet", $.ig.Object.prototype.$type, [$.ig.IMdxSet.prototype.$type])
}, true);
$.ig.util.defType("MdxSettings", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.nonEmptyOnRows(true);
        this.nonEmptyOnColumns(true);
        this.dimensionPropertiesOnRows(new $.ig.List$1(String, 0));
        this.dimensionPropertiesOnColumns(new $.ig.List$1(String, 0));
        this.addDimensionPropertiesOnRows(true);
        this.addDimensionPropertiesOnColumns(true);
        this.resetToDefaultDimensionPropertiesImpl(this.dimensionPropertiesOnRows());
        this.resetToDefaultDimensionPropertiesImpl(this.dimensionPropertiesOnColumns())
    },
    _addVisualTotals: null,
    addVisualTotals: function (a) {
        if (arguments.length === 1) {
            this._addVisualTotals = a;
            return a
        } else {
            return this._addVisualTotals
        }
    },
    _addCalculatedMembers: null,
    addCalculatedMembers: function (a) {
        if (arguments.length === 1) {
            this._addCalculatedMembers = a;
            return a
        } else {
            return this._addCalculatedMembers
        }
    },
    _addHierarchize: null,
    addHierarchize: function (a) {
        if (arguments.length === 1) {
            this._addHierarchize = a;
            return a
        } else {
            return this._addHierarchize
        }
    },
    _addDistinctOnRows: null,
    addDistinctOnRows: function (a) {
        if (arguments.length === 1) {
            this._addDistinctOnRows = a;
            return a
        } else {
            return this._addDistinctOnRows
        }
    },
    _addDistinctOnColumns: null,
    addDistinctOnColumns: function (a) {
        if (arguments.length === 1) {
            this._addDistinctOnColumns = a;
            return a
        } else {
            return this._addDistinctOnColumns
        }
    },
    _nonEmptyOnRows: null,
    nonEmptyOnRows: function (a) {
        if (arguments.length === 1) {
            this._nonEmptyOnRows = a;
            return a
        } else {
            return this._nonEmptyOnRows
        }
    },
    _nonEmptyOnColumns: null,
    nonEmptyOnColumns: function (a) {
        if (arguments.length === 1) {
            this._nonEmptyOnColumns = a;
            return a
        } else {
            return this._nonEmptyOnColumns
        }
    },
    _addDimensionPropertiesOnRows: null,
    addDimensionPropertiesOnRows: function (a) {
        if (arguments.length === 1) {
            this._addDimensionPropertiesOnRows = a;
            return a
        } else {
            return this._addDimensionPropertiesOnRows
        }
    },
    _addDimensionPropertiesOnColumns: null,
    addDimensionPropertiesOnColumns: function (a) {
        if (arguments.length === 1) {
            this._addDimensionPropertiesOnColumns = a;
            return a
        } else {
            return this._addDimensionPropertiesOnColumns
        }
    },
    _dimensionPropertiesOnRows: null,
    dimensionPropertiesOnRows: function (a) {
        if (arguments.length === 1) {
            this._dimensionPropertiesOnRows = a;
            return a
        } else {
            return this._dimensionPropertiesOnRows
        }
    },
    _dimensionPropertiesOnColumns: null,
    dimensionPropertiesOnColumns: function (a) {
        if (arguments.length === 1) {
            this._dimensionPropertiesOnColumns = a;
            return a
        } else {
            return this._dimensionPropertiesOnColumns
        }
    },
    resetToDefaultDimensionProperties: function (a) {
        this.resetToDefaultDimensionPropertiesImpl(a)
    },
    resetToDefaultDimensionPropertiesImpl: function (a) {
        a.clear();
        a.add("CHILDREN_CARDINALITY");
        a.add("PARENT_UNIQUE_NAME")
    },
    $type: new $.ig.Type("MdxSettings", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("MdxSlicerAxis", "MdxAxis", {
    init: function (a) {
        $.ig.MdxAxis.prototype.init1.call(this, 1, 2, a)
    },
    _columnsFilter: null,
    columnsFilter: function (a) {
        if (arguments.length === 1) {
            this._columnsFilter = a;
            return a
        } else {
            return this._columnsFilter
        }
    },
    _rowsFilter: null,
    rowsFilter: function (a) {
        if (arguments.length === 1) {
            this._rowsFilter = a;
            return a
        } else {
            return this._rowsFilter
        }
    },
    _filtersFilter: null,
    filtersFilter: function (a) {
        if (arguments.length === 1) {
            this._filtersFilter = a;
            return a
        } else {
            return this._filtersFilter
        }
    },
    _measureFilter: null,
    measureFilter: function (a) {
        if (arguments.length === 1) {
            this._measureFilter = a;
            return a
        } else {
            return this._measureFilter
        }
    },
    _filterElements: null,
    filterElements: function (a) {
        if (arguments.length === 1) {
            this._filterElements = a;
            return a
        } else {
            return this._filterElements
        }
    },
    $type: new $.ig.Type("MdxSlicerAxis", $.ig.MdxAxis.prototype.$type, [$.ig.IMdxSlicerAxis.prototype.$type])
}, true);
$.ig.util.defType("MdxSlicerSet", "MdxSet", {
    init: function () {
        $.ig.MdxSet.prototype.init.call(this)
    },
    supportsElementType: function (a) {
        return $.ig.util.cast($.ig.IAxisFilterElement.prototype.$type, a) !== null
    },
    $type: new $.ig.Type("MdxSlicerSet", $.ig.MdxSet.prototype.$type)
}, true);
$.ig.util.defType("MdxDimensionAxisProvider", "Object", {
    __hierarchyLevelsCollection: null,
    __measureNames: null,
    init: function (b, d, c, a) {
        if (b > 0) {
            switch (b) {
                case 1:
                    this.init1.apply(this, arguments);
                    break;
                case 2:
                    this.init2.apply(this, arguments);
                    break;
                case 3:
                    this.init3.apply(this, arguments);
                    break
            }
            return
        }
        this.__hierarchyLevelsCollection = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
        this.__measureNames = new $.ig.List$1(String, 0);
        $.ig.Object.prototype.init.call(this);
        if (d == null) {
            throw new $.ig.ArgumentNullException("xmlaDataSource")
        }
        if (c == null) {
            throw new $.ig.ArgumentNullException("sourceAxis")
        }
        if (a == null) {
            throw new $.ig.ArgumentNullException("currentResultAxis")
        }
        this.createMode($.ig.MdxDimensionAxisCreateMode.prototype.change);
        this.xmlaDataSource(d);
        this.sourceAxis(c);
        this.rootPositionInfo(a.positionResolver().rootPositionInfo())
    },
    init1: function (a, c, b) {
        this.__hierarchyLevelsCollection = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
        this.__measureNames = new $.ig.List$1(String, 0);
        $.ig.Object.prototype.init.call(this);
        if (c == null) {
            throw new $.ig.ArgumentNullException("xmlaDataSource")
        }
        if (b == null) {
            throw new $.ig.ArgumentNullException("sourceAxis")
        }
        this.createMode($.ig.MdxDimensionAxisCreateMode.prototype.create);
        this.xmlaDataSource(c);
        this.sourceAxis(b)
    },
    init2: function (b, c, a) {
        this.__hierarchyLevelsCollection = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
        this.__measureNames = new $.ig.List$1(String, 0);
        $.ig.Object.prototype.init.call(this);
        if (c == null) {
            throw new $.ig.ArgumentNullException("xmlaDataSource")
        }
        if (a == null) {
            throw new $.ig.ArgumentNullException("currentResultAxis")
        }
        this.createMode($.ig.MdxDimensionAxisCreateMode.prototype.create);
        this.xmlaDataSource(c);
        this.rootPositionInfo(a.positionResolver().rootPositionInfo())
    },
    init3: function (b, a, c) {
        this.__hierarchyLevelsCollection = new $.ig.Dictionary$2(String, $.ig.MdxElementCollectionElement.prototype.$type, 0);
        this.__measureNames = new $.ig.List$1(String, 0);
        $.ig.Object.prototype.init.call(this);
        this.createMode($.ig.MdxDimensionAxisCreateMode.prototype.extend);
        this.currentResultAxis(a);
        this.positionsToExtend(c)
    },
    _xmlaDataSource: null,
    xmlaDataSource: function (a) {
        if (arguments.length === 1) {
            this._xmlaDataSource = a;
            return a
        } else {
            return this._xmlaDataSource
        }
    },
    _sourceAxis: null,
    sourceAxis: function (a) {
        if (arguments.length === 1) {
            this._sourceAxis = a;
            return a
        } else {
            return this._sourceAxis
        }
    },
    _rootPositionInfo: null,
    rootPositionInfo: function (a) {
        if (arguments.length === 1) {
            this._rootPositionInfo = a;
            return a
        } else {
            return this._rootPositionInfo
        }
    },
    _positionsToExtend: null,
    positionsToExtend: function (a) {
        if (arguments.length === 1) {
            this._positionsToExtend = a;
            return a
        } else {
            return this._positionsToExtend
        }
    },
    _currentResultAxis: null,
    currentResultAxis: function (a) {
        if (arguments.length === 1) {
            this._currentResultAxis = a;
            return a
        } else {
            return this._currentResultAxis
        }
    },
    _createMode: null,
    createMode: function (a) {
        if (arguments.length === 1) {
            this._createMode = a;
            return a
        } else {
            return this._createMode
        }
    },
    extendAxis: function (c, b) {
        var a = this;
        if (this.createMode() != $.ig.MdxDimensionAxisCreateMode.prototype.extend) {
            throw new $.ig.InvalidOperationException(1, "This axis provider cannot be used to extend mdx axis. For extending mdx axis please use the appropriate provider constructor.")
        }
        var m = this.positionsToExtend();
        var l = this.currentResultAxis().positionResolver();
        var h = new $.ig.MdxAxis(0, c.axisIndex());
        var d = m.getEnumerator();
        while (d.moveNext()) {
            var k = d.current();
            var g = new $.ig.MdxSet();
            var o = new $.ig.List$1($.ig.IMdxSet.prototype.$type, 0);
            var e = l.getHostPositionItemInfo(k.position(), k.position().indexOf(k));
            var d = k.position().getItems().getEnumerator();
            while (d.moveNext()) {
                var i = d.current();
                var f;
                if (i == k) {
                    f = new $.ig.MdxChildrenCollectionElement(i.key(), i.key(), -1, null, null);
                    g.addElement(f);
                    break
                }
                f = new $.ig.MdxSingleElement(0, i.key(), i.key(), i.depth());
                g.addElement(f)
            }
            var j = e.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (p) {
                return p.key() == k.key()
            }).firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
            if (j != null) {
                if (j.count() == 0) {
                    o.add(g)
                } else {
                    this.addRootPositionsToSet(j, g, o, false, true, false)
                }
                var d = o.getEnumerator();
                while (d.moveNext()) {
                    var n = d.current();
                    c.addSet(n);
                    h.addSet(n)
                }
            }
        }
        return h
    },
    createAxis: function (b) {
        if (this.createMode() == $.ig.MdxDimensionAxisCreateMode.prototype.create && this.rootPositionInfo() == null) {
            return this.createAxis1(b, this.sourceAxis())
        }
        this.createValidationEntries();
        this.validateHostedItems(this.rootPositionInfo());
        if (this.rootPositionInfo().count() == 0) {
            return this.createAxis1(b, this.sourceAxis())
        }
        var e = new $.ig.List$1($.ig.IMdxSet.prototype.$type, 0);
        this.addRootPositionsToSet(this.rootPositionInfo(), new $.ig.MdxSet(), e, false, false, true);
        var a = new $.ig.MdxAxis(0, b);
        var c = e.getEnumerator();
        while (c.moveNext()) {
            var d = c.current();
            a.addSet(d)
        }
        return a
    },
    createValidationEntries: function () {
        if (this.createMode() == $.ig.MdxDimensionAxisCreateMode.prototype.change) {
            var a = this.xmlaDataSource().measures().getEnumerator();
            while (a.moveNext()) {
                var b = a.current();
                this.__measureNames.add(b.uniqueName())
            }
        }
    },
    validateHostedItems: function (h) {
        if (this.createMode() == $.ig.MdxDimensionAxisCreateMode.prototype.change) {
            if (this.sourceAxis() != null) {
                var e = h.positionItemIndex() + 1;
                if (e < this.sourceAxis().count()) {
                    var a = this.sourceAxis().item(e);
                    var g = $.ig.util.cast($.ig.MeasureList.prototype.$type, a);
                    if (g != null) {
                        var i = h.values().toList$1($.ig.PositionItemInfo$2.prototype.$type);
                        var b = i.getEnumerator();
                        while (b.moveNext()) {
                            var f = b.current();
                            if (!this.__measureNames.contains(f.key())) {
                                h.remove(f.key())
                            }
                        }
                    }
                    var c = $.ig.util.cast($.ig.Hierarchy.prototype.$type, a);
                    if (c != null) {
                        var d = h.values().firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
                        if (d != null) {
                            if (d.hierarchyKey() != c.uniqueName()) {
                                h.clear()
                            }
                        }
                    }
                } else {
                    h.clear()
                }
            }
        }
    },
    createAxis1: function (b, c) {
        var d = new $.ig.MdxSet();
        this.addElementsToSet(c, 0, d);
        var a = new $.ig.MdxAxis(0, b);
        a.addSet(d);
        return a
    },
    addElementsToSet: function (d, n, k) {
        var a = this;
        if (d == null) {
            return
        }
        for (var g = n; g < d.count(); g++) {
            var c = d.item(g);
            var f = $.ig.util.cast($.ig.Hierarchy.prototype.$type, c);
            if (f != null) {
                k.addElement(new $.ig.MdxSingleElement(0, f.defaultMember(), f.defaultMember(), 0));
                continue
            }
            var h = $.ig.util.cast($.ig.Level.prototype.$type, c);
            if (h != null) {
                var j;
                if (!( function () {
                    var i = a.__hierarchyLevelsCollection.tryGetValue(h.hierarchyUniqueName(), j);
                    j = i.value;
                    return i.ret
                }())) {
                    j = new $.ig.MdxElementCollectionElement();
                    k.addElement(j);
                    this.__hierarchyLevelsCollection.add(h.hierarchyUniqueName(), j)
                }
                j.addElement(new $.ig.MdxLevelMembersElement(h.uniqueName(), h.uniqueName(), h.depth()));
                continue
            }
            var m = $.ig.util.cast($.ig.MeasureList.prototype.$type, c);
            if (m != null) {
                var b = new $.ig.MdxElementCollectionElement();
                var e = m.measures().getEnumerator();
                while (e.moveNext()) {
                    var l = e.current();
                    b.addElement(new $.ig.MdxSingleElement(0, l.uniqueName(), l.uniqueName(), 0))
                }
                k.addElement(b)
            }
        }
    },
    addPositionToSet: function (d, e, f, h, b, c, a) {
        var g = (f).clone();
        f.addElement(new $.ig.MdxSingleElement(0, e.key(), e.key(), e.positionItemDepth()));
        this.validateHostedItems(e);
        if (e.count() == 0) {
            if (b) {
                if (c) {
                    h.add(f);
                    this.addElementsToSet(this.sourceAxis(), e.positionItemIndex() + 1, f)
                }
            } else {
                h.add(f);
                this.addElementsToSet(this.sourceAxis(), e.positionItemIndex() + 1, f)
            }
        } else {
            this.addRootPositionsToSet(e, f, h, b, c, a)
        }
        if (a && e.isExpanded()) {
            this.addChildrenPositionsToSet(e, h, d, g)
        }
    },
    addChildrenPositionsToSet: function (f, j, e, i) {
        var a = this;
        var c = e.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (k) {
            return k.parentKey() == f.key()
        }).toList$1($.ig.PositionItemInfo$2.prototype.$type);
        if (c.count() > 0) {
            var g = (i).clone();
            g.addElement(new $.ig.MdxChildrenCollectionElement(f.key(), f.key(), f.positionItemDepth(), null, null));
            this.validateHostedItems(f);
            if (f.count() == 0) {
                j.add(g);
                this.addElementsToSet(this.sourceAxis(), f.positionItemIndex() + 1, g)
            } else {
                this.addRootPositionsToSet(f, g, j, true, true, false)
            }
        }
        var d = c.getEnumerator();
        while (d.moveNext()) {
            var b = d.current();
            var h = (i).clone();
            h.addElement(new $.ig.MdxSingleElement(0, b.key(), b.key(), b.positionItemDepth()));
            this.validateHostedItems(b);
            if (b.isExpanded()) {
                this.addChildrenPositionsToSet(b, j, e, i)
            }
            this.addRootPositionsToSet(b, h, j, true, false, true)
        }
    },
    addRootPositionsToSet: function (f, h, j, c, e, b) {
        var a = this;
        var d = f.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (k) {
            return k.positionItemDepth() == f.childTopMostPositionItemDepth()
        }).getEnumerator();
        while (d.moveNext()) {
            var g = d.current();
            var i = (h).clone();
            this.addPositionToSet(f, g, i, j, c, e, b)
        }
    },
    $type: new $.ig.Type("MdxDimensionAxisProvider", $.ig.Object.prototype.$type, [$.ig.IMdxDimensionAxisProvider.prototype.$type])
}, true);
$.ig.util.defType("MdxSlicerAxisProvider", "Object", {
    __columnFilters: null,
    __rowFilters: null,
    __filterFilters: null,
    init: function (b, a, e, c, d) {
        this.__columnFilters = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
        this.__rowFilters = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
        this.__filterFilters = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
        $.ig.Object.prototype.init.call(this);
        this.dataSource(b);
        this.mdxSettings(d);
        this.__columnFilters = a;
        this.__rowFilters = e;
        this.__filterFilters = c
    },
    _dataSource: null,
    dataSource: function (a) {
        if (arguments.length === 1) {
            this._dataSource = a;
            return a
        } else {
            return this._dataSource
        }
    },
    _mdxSettings: null,
    mdxSettings: function (a) {
        if (arguments.length === 1) {
            this._mdxSettings = a;
            return a
        } else {
            return this._mdxSettings
        }
    },
    createAxis: function (a) {
        var b = new $.ig.MdxSlicerAxis(this.mdxSettings());
        b.axisIndex(a);
        b.columnsFilter($.ig.MdxSlicerAxisBuilder.prototype.createFilterElement(this.__columnFilters, b));
        b.rowsFilter($.ig.MdxSlicerAxisBuilder.prototype.createFilterElement(this.__rowFilters, b));
        b.filtersFilter($.ig.MdxSlicerAxisBuilder.prototype.createFilterElement(this.__filterFilters, b));
        b.measureFilter($.ig.MdxSlicerAxisBuilder.prototype.createMeasureFilterElement(this.dataSource().measures(), b));
        return b
    },
    $type: new $.ig.Type("MdxSlicerAxisProvider", $.ig.Object.prototype.$type, [$.ig.IMdxAxisProvider.prototype.$type])
}, true);
$.ig.util.defType("MdxSlicerAxisBuilder", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    createMeasureFilterElement: function (e, h) {
        if (e.count$1($.ig.Measure.prototype.$type) == 0) {
            return null
        }
        var c = new $.ig.MdxAxisFilterElement();
        var g = new $.ig.MdxElementCollectionElement();
        var a = e.getEnumerator();
        while (a.moveNext()) {
            var b = a.current();
            var d = new $.ig.MdxSingleElement(0, b.uniqueName(), b.uniqueName(), 0);
            g.addElement(d)
        }
        var f = new $.ig.MdxSlicerSet();
        f.addElement(c);
        h.addSet(f);
        c.addFilterPart(g, true);
        return c
    },
    createFilterElement: function (c, j) {
        var a = this;
        var d = new $.ig.MdxAxisFilterElement();
        var e = c.getEnumerator();
        while (e.moveNext()) {
            var b = e.current();
            var f = new $.ig.MdxElementCollectionElement();
            var h = new $.ig.Dictionary$2(String, $.ig.MdxSingleElement.prototype.$type, 0);
            var e = b.memberNames().getEnumerator();
            while (e.moveNext()) {
                var g = e.current();
                var i;
                if (!( function () {
                    var l = h.tryGetValue(g, i);
                    i = l.value;
                    return l.ret
                }())) {
                    i = new $.ig.MdxSingleElement(0, g, g, -1);
                    h.add(g, i)
                }
                f.addElement(i)
            }
            d.addFilterPart(f, false)
        }
        if (d.filterCollection().count() == 0 && d.singleFilterElements().count() == 0) {
            return null
        }
        var k = new $.ig.MdxSlicerSet();
        k.addElement(d);
        j.addSet(k);
        return d
    },
    $type: new $.ig.Type("MdxSlicerAxisBuilder", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("IXmlaDataProviderFactory", "Object", {
    $type: new $.ig.Type("IXmlaDataProviderFactory", null)
}, true);
$.ig.util.defType("DefaultXmlaDataProviderFactory", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    createDataProvider: function (b, a) {
        return new $.ig.XmlaDataProvider(new $.ig.XmlaConnection(new $.ig.Uri(b), a), null)
    },
    $type: new $.ig.Type("DefaultXmlaDataProviderFactory", $.ig.Object.prototype.$type, [$.ig.IXmlaDataProviderFactory.prototype.$type])
}, true);
$.ig.util.defType("RemoteXmlaDataProviderFactory", "Object", {
    __requestSerializer: null,
    __responseSerializer: null,
    init: function (a) {
        if (a > 0) {
            switch (a) {
                case 1:
                    this.init1.apply(this, arguments);
                    break
            }
            return
        }
        $.ig.Object.prototype.init.call(this);
        this.__requestSerializer = new $.ig.JsonRemoteXmlaRequestSerializer();
        this.__responseSerializer = new $.ig.JsonRemoteXmlaResponseSerializer()
    },
    init1: function (a, b, c) {
        $.ig.Object.prototype.init.call(this);
        this.__requestSerializer = b;
        this.__responseSerializer = c
    },
    createDataProvider: function (b, a) {
        return new $.ig.RemoteXmlaDataProvder(b, a, this.__requestSerializer, this.__responseSerializer)
    },
    $type: new $.ig.Type("RemoteXmlaDataProviderFactory", $.ig.Object.prototype.$type, [$.ig.IXmlaDataProviderFactory.prototype.$type])
}, true);
$.ig.util.defType("IRemoteXmlaRequestSerializer", "Object", {
    $type: new $.ig.Type("IRemoteXmlaRequestSerializer", null)
}, true);
$.ig.util.defType("IRemoteXmlaResponseSerializer", "Object", {
    $type: new $.ig.Type("IRemoteXmlaResponseSerializer", null)
}, true);
$.ig.util.defType("JsonRemoteXmlaRequestSerializer", "Object", {
    __serializer: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__serializer = new $.ig.JavaScriptSerializer()
    },
    serializeRequest: function (a) {
        return $.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype.instance().serialize(a, this.__serializer)
    },
    deserializeRequest: function (a) {
        return $.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype.instance().deserialize(a, this.__serializer)
    },
    $type: new $.ig.Type("JsonRemoteXmlaRequestSerializer", $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaRequestSerializer.prototype.$type])
}, true);
$.ig.util.defType("JsonRemoteXmlaResponseSerializer", "Object", {
    __serializer: null,
    init: function () {
        $.ig.Object.prototype.init.call(this);
        this.__serializer = new $.ig.JavaScriptSerializer()
    },
    serializeResponse: function (a, b) {
        switch (b) {
            case $.ig.RemoteXmlaRequestType.prototype.discoverCatalogs:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.Catalog.prototype.$type, a, $.ig.CatalogJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverCubes:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.Cube.prototype.$type, a, $.ig.CubeJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverDimensions:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.Dimension.prototype.$type, a, $.ig.DimensionJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverHierarchies:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.Hierarchy.prototype.$type, a, $.ig.HierarchyJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverLevels:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.Level.prototype.$type, a, $.ig.LevelJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMeasures:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.Measure.prototype.$type, a, $.ig.MeasureJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.MeasureGroup.prototype.$type, a, $.ig.MeasureGroupJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.MeasureGroupDimension.prototype.$type, a, $.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMembers:
                return $.ig.ArrayJsonSerializer.prototype.instance().serialize$1($.ig.Member.prototype.$type, a, $.ig.MemberJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.executeStatement:
                return $.ig.ResultJsonTypeSeriazlier.prototype.instance().serialize(a, this.__serializer);
            default:
                throw new $.ig.Error(1, "Unknown RemoteXmlaRequestType.")
        }
    },
    deserializeResponse: function (a, b) {
        switch (b) {
            case $.ig.RemoteXmlaRequestType.prototype.discoverCatalogs:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.Catalog.prototype.$type, a, $.ig.CatalogJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverCubes:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.Cube.prototype.$type, a, $.ig.CubeJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverDimensions:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.Dimension.prototype.$type, a, $.ig.DimensionJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverHierarchies:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.Hierarchy.prototype.$type, a, $.ig.HierarchyJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverLevels:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.Level.prototype.$type, a, $.ig.LevelJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMeasures:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.Measure.prototype.$type, a, $.ig.MeasureJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.MeasureGroup.prototype.$type, a, $.ig.MeasureGroupJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.MeasureGroupDimension.prototype.$type, a, $.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.discoverMembers:
                return $.ig.ArrayJsonSerializer.prototype.instance().deserialize$1($.ig.Member.prototype.$type, a, $.ig.MemberJsonTypeSeriazlier.prototype.instance(), this.__serializer);
            case $.ig.RemoteXmlaRequestType.prototype.executeStatement:
                return $.ig.ResultJsonTypeSeriazlier.prototype.instance().deserialize(a, this.__serializer);
            default:
                throw new $.ig.Error(1, "Unknown RemoteXmlaRequestType.")
        }
    },
    $type: new $.ig.Type("JsonRemoteXmlaResponseSerializer", $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaResponseSerializer.prototype.$type])
}, true);
$.ig.util.defType("ArrayJsonSerializer", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    instance: function () {
        return $.ig.ArrayJsonSerializer.prototype._instance
    },
    deserialize$1: function (a, d, c, e) {
        var b = e.deserializeObject(d);
        return this.fromJsonArray$1(a, b, c)
    },
    serialize$1: function (a, b, c, e) {
        var d = this.toJsonArray$1(a, b, c);
        return e.serialize(d)
    },
    fromJsonArray$1: function (a, b, d) {
        var f = new $.ig.List$1(a, 0);
        for (var c = 0; c < b.length; c++) {
            var e = b[c];
            f.add(d.fromJsonObject(e))
        }
        return f
    },
    toJsonArray$1: function (a, e, d) {
        var b = e.toArray$1(a);
        var f = new Array(b.length);
        for (var c = 0; c < b.length; c++) {
            f[c] = d.toJsonObject(b[c])
        }
        return f
    },
    $type: new $.ig.Type("ArrayJsonSerializer", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("IJsonTypeSerializer$1", "Object", {
    $type: new $.ig.Type("IJsonTypeSerializer$1", null)
}, true);
$.ig.util.defType("JsonTypeSeriazlierBase$1", "Object", {
    $t: null,
    init: function (a) {
        this.$t = a;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this)
    },
    deserialize: function (a, b) {
        return this.fromJsonObject(b.deserializeObject(a))
    },
    serialize: function (a, b) {
        return b.serialize(this.toJsonObject(a))
    },
    fromJsonObject: function (a) {
    },
    toJsonObject: function (a) {
    },
    $type: new $.ig.Type("JsonTypeSeriazlierBase$1", $.ig.Object.prototype.$type, [$.ig.IJsonTypeSerializer$1.prototype.$type.specialize(0)])
}, true);
$.ig.util.defType("AxisJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultAxis.prototype.$type)
    },
    instance: function () {
        return $.ig.AxisJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (c) {
        var a = this;
        var b = $.ig.JsonSerializerUtils.prototype.getObjectProperty(c, "n");
        var d = $.ig.ArrayJsonSerializer.prototype.instance().fromJsonArray$1($.ig.OlapResultTuple.prototype.$type, $.ig.JsonSerializerUtils.prototype.getObjectProperty(c, "t"), $.ig.TupleJsonTypeSeriazlier.prototype.instance());
        var e = 0;
        if (d.count() > 0) {
            e = d.item(0).members().count()
        }
        return ( function () {
            var f = new $.ig.OlapResultAxis(d, e);
            f.name(b);
            return f
        }())
    },
    toJsonObject: function (b) {
        var c = $.ig.ArrayJsonSerializer.prototype.instance().toJsonArray$1($.ig.OlapResultTuple.prototype.$type, b.tuples(), $.ig.TupleJsonTypeSeriazlier.prototype.instance());
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "t", c);
        return a
    },
    $type: new $.ig.Type("AxisJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultAxis.prototype.$type))
}, true);
$.ig.util.defType("AxisMemberJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultAxisMember.prototype.$type)
    },
    instance: function () {
        return $.ig.AxisMemberJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.OlapResultAxisMember();
            c.uniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "un"));
            c.levelUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "lun"));
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.levelNumber($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "ln"));
            c.displayInfo($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "di"));
            c.properties($.ig.JsonSerializerUtils.prototype.getStringDictionaryProperty(b, "p"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "un", b.uniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "lun", b.levelUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "ln", b.levelNumber());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "di", b.displayInfo());
        $.ig.JsonSerializerUtils.prototype.setStringDictionaryProperty(a, "p", b.properties());
        return a
    },
    $type: new $.ig.Type("AxisMemberJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultAxisMember.prototype.$type))
}, true);
$.ig.util.defType("CatalogJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Catalog.prototype.$type)
    },
    instance: function () {
        return $.ig.CatalogJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.Catalog();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.uniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "un"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "un", b.uniqueName());
        return a
    },
    $type: new $.ig.Type("CatalogJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Catalog.prototype.$type))
}, true);
$.ig.util.defType("CellJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultCell.prototype.$type)
    },
    instance: function () {
        return $.ig.CellJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.OlapResultCell();
            c.cellOrdinal($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "co"));
            c.properties($.ig.JsonSerializerUtils.prototype.getStringDictionaryProperty(b, "p"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "co", b.cellOrdinal());
        $.ig.JsonSerializerUtils.prototype.setStringDictionaryProperty(a, "p", b.properties());
        return a
    },
    $type: new $.ig.Type("CellJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultCell.prototype.$type))
}, true);
$.ig.util.defType("CubeJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Cube.prototype.$type)
    },
    instance: function () {
        return $.ig.CubeJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.Cube();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.catalogName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cn"));
            c.cubeType($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "ct"));
            c.lastProcessed($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "lp"));
            c.lastUpdated($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "lu"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cn", b.catalogName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "ct", b.cubeType());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "lp", b.lastProcessed());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "lu", b.lastUpdated());
        return a
    },
    $type: new $.ig.Type("CubeJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Cube.prototype.$type))
}, true);
$.ig.util.defType("DimensionJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Dimension.prototype.$type)
    },
    instance: function () {
        return $.ig.DimensionJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.Dimension();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.uniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "un"));
            c.dimensionType($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dt"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "un", b.uniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dt", b.dimensionType());
        return a
    },
    $type: new $.ig.Type("DimensionJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Dimension.prototype.$type))
}, true);
$.ig.util.defType("HierarchyJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Hierarchy.prototype.$type)
    },
    instance: function () {
        return $.ig.HierarchyJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.Hierarchy();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.uniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "un"));
            c.allMember($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "am"));
            c.defaultMember($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dm"));
            c.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dun"));
            c.hierarchyDisplayFolder($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "hdf"));
            c.hierarchyOrigin($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "ho"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "un", b.uniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "am", b.allMember());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dm", b.defaultMember());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dun", b.dimensionUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "hdf", b.hierarchyDisplayFolder());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "ho", b.hierarchyOrigin());
        return a
    },
    $type: new $.ig.Type("HierarchyJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Hierarchy.prototype.$type))
}, true);
$.ig.util.defType("JsonSerializerUtils", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    createObject: function () {
        return $.ig.jQueryUtils.prototype.createJavascriptObject()
    },
    getObjectProperty: function (a, b) {
        return $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, b)
    },
    setObjectProperty: function (a, b, c) {
        $.ig.jQueryUtils.prototype.setJavascriptObjectProperty(a, b, c)
    },
    getObjectDictionaryProperty: function (a, b) {
        return $.ig.jQueryUtils.prototype.convertToObjectDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, b))
    },
    setObjectDictionaryProperty: function (a, c, d) {
        var b = $.ig.jQueryUtils.prototype.convertFromObjectDictionary(d);
        $.ig.jQueryUtils.prototype.setJavascriptObjectProperty(a, c, b)
    },
    getStringDictionaryProperty: function (a, b) {
        return $.ig.jQueryUtils.prototype.convertToStringDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(a, b))
    },
    setStringDictionaryProperty: function (a, c, d) {
        var b = $.ig.jQueryUtils.prototype.convertFromStringDictionary(d);
        $.ig.jQueryUtils.prototype.setJavascriptObjectProperty(a, c, b)
    },
    $type: new $.ig.Type("JsonSerializerUtils", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("LevelJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Level.prototype.$type)
    },
    instance: function () {
        return $.ig.LevelJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.Level();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.uniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "un"));
            c.depth($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dun"));
            c.hierarchyUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "hun"));
            c.levelOrderingProperty($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "lop"));
            c.levelOrigin($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "lo"));
            c.membersCount($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "mc"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "un", b.uniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.depth());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dun", b.dimensionUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "hun", b.hierarchyUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "lop", b.levelOrderingProperty());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "lo", b.levelOrigin());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "mc", b.membersCount());
        return a
    },
    $type: new $.ig.Type("LevelJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Level.prototype.$type))
}, true);
$.ig.util.defType("MeasureGroupDimensionJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.MeasureGroupDimension.prototype.$type)
    },
    instance: function () {
        return $.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.MeasureGroupDimension();
            c.catalogName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cn"));
            c.cubeName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cbn"));
            c.dimensionCardinality($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dc"));
            c.dimensionGranularity($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dg"));
            c.dimensionPath($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dap"));
            c.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dun"));
            c.isDimensionVisible($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "idv"));
            c.isFactDimension($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "iafd"));
            c.measureGroupCardinality($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "mgc"));
            c.measureGroupName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "mgn"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cn", b.catalogName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cbn", b.cubeName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dc", b.dimensionCardinality());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dg", b.dimensionGranularity());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dap", b.dimensionPath());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dun", b.dimensionUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "idv", b.isDimensionVisible());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "iafd", b.isFactDimension());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "mgc", b.measureGroupCardinality());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "mgn", b.measureGroupName());
        return a
    },
    $type: new $.ig.Type("MeasureGroupDimensionJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.MeasureGroupDimension.prototype.$type))
}, true);
$.ig.util.defType("MeasureGroupJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.MeasureGroup.prototype.$type)
    },
    instance: function () {
        return $.ig.MeasureGroupJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.MeasureGroup();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.catalogName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cn"));
            c.cubeName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cbn"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cn", b.catalogName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cbn", b.cubeName());
        return a
    },
    $type: new $.ig.Type("MeasureGroupJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.MeasureGroup.prototype.$type))
}, true);
$.ig.util.defType("MeasureJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Measure.prototype.$type)
    },
    instance: function () {
        return $.ig.MeasureJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.Measure();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.uniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "un"));
            c.aggregatorType($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "at"));
            c.defaultFormatString($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dfs"));
            c.measureDisplayFolder($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "mdf"));
            c.measureGroupName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "mgn"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "un", b.uniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "at", b.aggregatorType());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dfs", b.defaultFormatString());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "mdf", b.measureDisplayFolder());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "mgn", b.measureGroupName());
        return a
    },
    $type: new $.ig.Type("MeasureJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Measure.prototype.$type))
}, true);
$.ig.util.defType("MemberJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.Member.prototype.$type)
    },
    instance: function () {
        return $.ig.MemberJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.Member();
            c.caption($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "c"));
            c.description($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "d"));
            c.name($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "n"));
            c.uniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "un"));
            c.catalogName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cn"));
            c.childrenCardinality($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cc"));
            c.cubeName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "cbn"));
            c.dimensionUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "dun"));
            c.hierarchyUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "hun"));
            c.levelDepth($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "ld"));
            c.levelUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "lun"));
            c.memberType($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "mt"));
            c.parentLevel($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "pl"));
            c.parentUniqueName($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "pun"));
            c.scope($.ig.util.toNullable($.ig.Number.prototype.$type, $.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "s")));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "c", b.caption());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "d", b.description());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "n", b.name());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "un", b.uniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cn", b.catalogName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cc", b.childrenCardinality());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "cbn", b.cubeName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "dun", b.dimensionUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "hun", b.hierarchyUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "ld", b.levelDepth());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "lun", b.levelUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "mt", b.memberType());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "pl", b.parentLevel());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "pun", b.parentUniqueName());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "s", b.scope());
        return a
    },
    $type: new $.ig.Type("MemberJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.Member.prototype.$type))
}, true);
$.ig.util.defType("RemoteXmlaRequestJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.RemoteXmlaRequest.prototype.$type)
    },
    instance: function () {
        return $.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (b) {
        var a = this;
        return ( function () {
            var c = new $.ig.RemoteXmlaRequest();
            c.type($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "t"));
            c.properties($.ig.JsonSerializerUtils.prototype.getStringDictionaryProperty(b, "p"));
            c.restrictions($.ig.JsonSerializerUtils.prototype.getStringDictionaryProperty(b, "r"));
            c.parameters($.ig.JsonSerializerUtils.prototype.getStringDictionaryProperty(b, "par"));
            c.statement($.ig.JsonSerializerUtils.prototype.getObjectProperty(b, "s"));
            return c
        }())
    },
    toJsonObject: function (b) {
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "t", b.type());
        $.ig.JsonSerializerUtils.prototype.setStringDictionaryProperty(a, "p", b.properties());
        $.ig.JsonSerializerUtils.prototype.setStringDictionaryProperty(a, "r", b.restrictions());
        $.ig.JsonSerializerUtils.prototype.setStringDictionaryProperty(a, "par", b.parameters());
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "s", b.statement());
        return a
    },
    $type: new $.ig.Type("RemoteXmlaRequestJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.RemoteXmlaRequest.prototype.$type))
}, true);
$.ig.util.defType("ResultJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResult.prototype.$type)
    },
    instance: function () {
        return $.ig.ResultJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (e) {
        var a = this;
        var d = $.ig.JsonSerializerUtils.prototype.getObjectProperty(e, "ie");
        if (d) {
            return ( function () {
                var f = new $.ig.OlapResult();
                f.isEmpty(true);
                return f
            }())
        } else {
            var b = $.ig.ArrayJsonSerializer.prototype.instance().fromJsonArray$1($.ig.OlapResultAxis.prototype.$type, $.ig.JsonSerializerUtils.prototype.getObjectProperty(e, "a"), $.ig.AxisJsonTypeSeriazlier.prototype.instance());
            var c = $.ig.ArrayJsonSerializer.prototype.instance().fromJsonArray$1($.ig.OlapResultAxis.prototype.$type, $.ig.JsonSerializerUtils.prototype.getObjectProperty(e, "c"), $.ig.CellJsonTypeSeriazlier.prototype.instance());
            return ( function () {
                var f = new $.ig.OlapResult();
                f.axes(b);
                f.cells(c);
                return f
            }())
        }
    },
    toJsonObject: function (d) {
        var c = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(c, "ie", d.isEmpty());
        if (!d.isEmpty()) {
            var a = $.ig.ArrayJsonSerializer.prototype.instance().toJsonArray$1($.ig.OlapResultAxis.prototype.$type, d.axes(), $.ig.AxisJsonTypeSeriazlier.prototype.instance());
            var b = $.ig.ArrayJsonSerializer.prototype.instance().toJsonArray$1($.ig.OlapResultAxis.prototype.$type, d.cells(), $.ig.CellJsonTypeSeriazlier.prototype.instance());
            $.ig.JsonSerializerUtils.prototype.setObjectProperty(c, "a", a);
            $.ig.JsonSerializerUtils.prototype.setObjectProperty(c, "c", b)
        }
        return c
    },
    $type: new $.ig.Type("ResultJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResult.prototype.$type))
}, true);
$.ig.util.defType("TupleJsonTypeSeriazlier", "JsonTypeSeriazlierBase$1", {
    init: function () {
        $.ig.JsonTypeSeriazlierBase$1.prototype.init.call(this, $.ig.OlapResultTuple.prototype.$type)
    },
    instance: function () {
        return $.ig.TupleJsonTypeSeriazlier.prototype._instance
    },
    fromJsonObject: function (d) {
        var c = $.ig.ArrayJsonSerializer.prototype.instance().fromJsonArray$1($.ig.OlapResultAxisMember.prototype.$type, $.ig.JsonSerializerUtils.prototype.getObjectProperty(d, "m"), $.ig.AxisMemberJsonTypeSeriazlier.prototype.instance());
        var e = new $.ig.OlapResultTuple(c);
        var b = c.getEnumerator();
        while (b.moveNext()) {
            var a = b.current();
            a.position(e)
        }
        return e
    },
    toJsonObject: function (c) {
        var b = $.ig.ArrayJsonSerializer.prototype.instance().toJsonArray$1($.ig.OlapResultAxisMember.prototype.$type, c.members(), $.ig.AxisMemberJsonTypeSeriazlier.prototype.instance());
        var a = $.ig.JsonSerializerUtils.prototype.createObject();
        $.ig.JsonSerializerUtils.prototype.setObjectProperty(a, "m", b);
        return a
    },
    $type: new $.ig.Type("TupleJsonTypeSeriazlier", $.ig.JsonTypeSeriazlierBase$1.prototype.$type.specialize($.ig.OlapResultTuple.prototype.$type))
}, true);
$.ig.util.defType("RemoteXmlaDataProvder", "Object", {
    __serverUrl: null,
    __credentials: null,
    __requestSerializer: null,
    __responseSerializer: null,
    init: function (d, a, b, c) {
        $.ig.Object.prototype.init.call(this);
        this.__serverUrl = d;
        this.__credentials = a;
        this.__requestSerializer = b;
        this.__responseSerializer = c
    },
    discoverCatalogsAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverCatalogs, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverCatalogs)
        })
    },
    discoverCubesAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverCubes, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverCubes)
        })
    },
    discoverDimensionsAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverDimensions, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverDimensions)
        })
    },
    discoverHierarchiesAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverHierarchies, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverHierarchies)
        })
    },
    discoverLevelsAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverLevels, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverLevels)
        })
    },
    discoverMeasuresAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverMeasures, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverMeasures)
        })
    },
    discoverMeasureGroupsAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups)
        })
    },
    discoverMeasureGroupDimensionsAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions)
        })
    },
    discoverMembersAsync: function (b, d) {
        var a = this;
        var c = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.discoverMembers, b, d, null, null).continueWith$11($.ig.IEnumerable$1.prototype.$type, function (e) {
            return c.deserializeResponse(e.result(), $.ig.RemoteXmlaRequestType.prototype.discoverMembers)
        })
    },
    executeStatementAsync: function (e, c, b) {
        var a = this;
        var d = this.__responseSerializer;
        return this.sendRequest($.ig.RemoteXmlaRequestType.prototype.executeStatement, c, null, b, e).continueWith$11($.ig.OlapResult.prototype.$type, function (f) {
            return d.deserializeResponse(f.result(), $.ig.RemoteXmlaRequestType.prototype.executeStatement)
        })
    },
    sendRequest: function (h, c, e, b, f) {
        var a = this;
        var i = ( function () {
            var j = new $.ig.WebClient();
            j.credentials(a.__credentials);
            return j
        }());
        var d = this.__requestSerializer.serializeRequest(( function () {
            var j = new $.ig.RemoteXmlaRequest();
            j.type(h);
            j.properties(a.dictionaryFromKVPCollection(c));
            j.restrictions(a.dictionaryFromKVPCollection(e));
            j.parameters(a.dictionaryFromKVPCollection(b));
            j.statement(f);
            return j
        }()));
        var g = new $.ig.TaskCompletionSource$1(String, 0);
        i.uploadStringCompleted = $.ig.Delegate.prototype.combine(i.uploadStringCompleted, this.uploadStringAsyncCompleted.on(this));
        i.uploadStringAsync(new $.ig.Uri(this.__serverUrl), "POST", d, g);
        return g.task()
    },
    uploadStringAsyncCompleted: function (b, a) {
        var c = a.userState();
        if (a.cancelled()) {
            c.setCanceled()
        } else {
            if (a.error() != null) {
                c.setException(a.error())
            } else {
                c.setResult(a.result())
            }
        }
    },
    dictionaryFromKVPCollection: function (a) {
        if (a == null) {
            return null
        }
        var b = new $.ig.Dictionary$2(String, String, 0);
        var c = a.getEnumerator();
        while (c.moveNext()) {
            var d = c.current();
            b.add(d.key(), d.value())
        }
        return b
    },
    $type: new $.ig.Type("RemoteXmlaDataProvder", $.ig.Object.prototype.$type, [$.ig.IXmlaDataProvider.prototype.$type])
}, true);
$.ig.util.defType("RemoteXmlaRequest", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _type: null,
    type: function (a) {
        if (arguments.length === 1) {
            this._type = a;
            return a
        } else {
            return this._type
        }
    },
    _properties: null,
    properties: function (a) {
        if (arguments.length === 1) {
            this._properties = a;
            return a
        } else {
            return this._properties
        }
    },
    _restrictions: null,
    restrictions: function (a) {
        if (arguments.length === 1) {
            this._restrictions = a;
            return a
        } else {
            return this._restrictions
        }
    },
    _parameters: null,
    parameters: function (a) {
        if (arguments.length === 1) {
            this._parameters = a;
            return a
        } else {
            return this._parameters
        }
    },
    _statement: null,
    statement: function (a) {
        if (arguments.length === 1) {
            this._statement = a;
            return a
        } else {
            return this._statement
        }
    },
    $type: new $.ig.Type("RemoteXmlaRequest", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaConnection", "Object", {
    __serverUri: null,
    __credentials: null,
    init: function (b, a) {
        $.ig.Object.prototype.init.call(this);
        this.__serverUri = b
    },
    getXmlaSoapWebClient$1: function (a) {
        var b = new $.ig.XmlaSoapWebClient$1(a, this.__serverUri, $.ig.Encoding.prototype.uTF8());
        return b
    },
    $type: new $.ig.Type("XmlaConnection", $.ig.Object.prototype.$type, [$.ig.ICoreXmlaConnection.prototype.$type])
}, true);
$.ig.util.defType("XmlaDataSourceImpl", "Object", {
    __cubeCache: null,
    __mdxAxes: null,
    __positionsToExpand: null,
    __positionsToCollapse: null,
    __columnFilters: null,
    __rowFilters: null,
    __filterFilters: null,
    __isColumnsAxisChanged: null,
    __isRowsAxisChanged: null,
    __isFiltersAxisChanged: null,
    __isMeasuresAxisChanged: null,
    init: function (a) {
        this.__mdxAxes = new $.ig.List$1($.ig.IMdxAxis.prototype.$type, 0);
        this.__positionsToExpand = new $.ig.List$1($.ig.PositionInfo.prototype.$type, 0);
        this.__positionsToCollapse = new $.ig.List$1($.ig.PositionInfo.prototype.$type, 0);
        this.__columnFilters = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
        this.__rowFilters = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
        this.__filterFilters = new $.ig.List$1($.ig.AxisElement.prototype.$type, 0);
        $.ig.Object.prototype.init.call(this);
        this.isInitialized(false);
        this.sourceOptions(a);
        if (a.dataProviderFactory() == null) {
            this.dataProviderFactory(new $.ig.DefaultXmlaDataProviderFactory())
        } else {
            this.dataProviderFactory(a.dataProviderFactory())
        }
        this.catalogs(new $.ig.ArrayListCollection$1($.ig.Catalog.prototype.$type));
        this.cubes(new $.ig.ArrayListCollection$1($.ig.Cube.prototype.$type));
        this.measureGroups(new $.ig.ArrayListCollection$1($.ig.MeasureGroup.prototype.$type))
    },
    _isInitialized: null,
    isInitialized: function (a) {
        if (arguments.length === 1) {
            this._isInitialized = a;
            return a
        } else {
            return this._isInitialized
        }
    },
    _catalogs: null,
    catalogs: function (a) {
        if (arguments.length === 1) {
            this._catalogs = a;
            return a
        } else {
            return this._catalogs
        }
    },
    _catalog: null,
    catalog: function (a) {
        if (arguments.length === 1) {
            this._catalog = a;
            return a
        } else {
            return this._catalog
        }
    },
    _cubes: null,
    cubes: function (a) {
        if (arguments.length === 1) {
            this._cubes = a;
            return a
        } else {
            return this._cubes
        }
    },
    _cube: null,
    cube: function (a) {
        if (arguments.length === 1) {
            this._cube = a;
            return a
        } else {
            return this._cube
        }
    },
    _measureGroup: null,
    measureGroup: function (a) {
        if (arguments.length === 1) {
            this._measureGroup = a;
            return a
        } else {
            return this._measureGroup
        }
    },
    _measureGroups: null,
    measureGroups: function (a) {
        if (arguments.length === 1) {
            this._measureGroups = a;
            return a
        } else {
            return this._measureGroups
        }
    },
    _sourceOptions: null,
    sourceOptions: function (a) {
        if (arguments.length === 1) {
            this._sourceOptions = a;
            return a
        } else {
            return this._sourceOptions
        }
    },
    _dataProviderFactory: null,
    dataProviderFactory: function (a) {
        if (arguments.length === 1) {
            this._dataProviderFactory = a;
            return a
        } else {
            return this._dataProviderFactory
        }
    },
    _metadataTree: null,
    metadataTree: function (a) {
        if (arguments.length === 1) {
            this._metadataTree = a;
            return a
        } else {
            return this._metadataTree
        }
    },
    _rowAxis: null,
    rowAxis: function (a) {
        if (arguments.length === 1) {
            this._rowAxis = a;
            return a
        } else {
            return this._rowAxis
        }
    },
    _columnAxis: null,
    columnAxis: function (a) {
        if (arguments.length === 1) {
            this._columnAxis = a;
            return a
        } else {
            return this._columnAxis
        }
    },
    _filters: null,
    filters: function (a) {
        if (arguments.length === 1) {
            this._filters = a;
            return a
        } else {
            return this._filters
        }
    },
    _measures: null,
    measures: function (a) {
        if (arguments.length === 1) {
            this._measures = a;
            return a
        } else {
            return this._measures
        }
    },
    _measureListIndex: null,
    measureListIndex: function (a) {
        if (arguments.length === 1) {
            this._measureListIndex = a;
            return a
        } else {
            return this._measureListIndex
        }
    },
    _measureListLocation: null,
    measureListLocation: function (a) {
        if (arguments.length === 1) {
            this._measureListLocation = a;
            return a
        } else {
            return this._measureListLocation
        }
    },
    _result: null,
    result: function (a) {
        if (arguments.length === 1) {
            this._result = a;
            return a
        } else {
            return this._result
        }
    },
    getCoreElement: function (b, a) {
        return this.getCoreElements(b, a).firstOrDefault$1($.ig.Object.prototype.$type)
    },
    getCoreElements: function (c, b) {
        var a = this;
        if (b == $.ig.Dimension.prototype.$type) {
            return this.__cubeCache.dimensionItems().where$1($.ig.Dimension.prototype.$type, function (e) {
                return c(e)
            })
        }
        if (b == $.ig.Hierarchy.prototype.$type) {
            return this.__cubeCache.hierarchyItems().where$1($.ig.Dimension.prototype.$type, function (e) {
                return c(e)
            })
        }
        if (b == $.ig.Level.prototype.$type) {
            return this.__cubeCache.levelItems().where$1($.ig.Dimension.prototype.$type, function (e) {
                return c(e)
            })
        }
        if (b == $.ig.Measure.prototype.$type) {
            return this.__cubeCache.measures().where$1($.ig.Dimension.prototype.$type, function (e) {
                return c(e)
            })
        }
        throw new $.ig.NotSupportedException(0, "Supported types are Dimension, Hierarchy, Level and Measure")
    },
    expandTupleMember: function (b, f, c) {
        var a = this;
        var e = this.getResultAxis(b);
        if (e == null) {
            throw new $.ig.InvalidOperationException(1, "No axis found for the specified index.")
        }
        var d = this.__positionsToExpand.where$1($.ig.PositionInfo.prototype.$type,function (g) {
            return g.axisName() == b && g.tupleIndex() == f && g.memberIndex() == c
        }).firstOrDefault$1($.ig.PositionInfo.prototype.$type);
        if (d == null) {
            d = ( function () {
                var g = new $.ig.PositionInfo();
                g.axisName(b);
                g.memberIndex(c);
                g.tupleIndex(f);
                return g
            }());
            this.__positionsToExpand.add(d)
        } else {
            this.__positionsToExpand.remove(d)
        }
    },
    collapseTupleMember: function (b, f, c) {
        var a = this;
        var e = this.getResultAxis(b);
        if (e == null) {
            throw new $.ig.InvalidOperationException(1, "No axis found for the specified index.")
        }
        var d = this.__positionsToExpand.where$1($.ig.PositionInfo.prototype.$type,function (g) {
            return g.axisName() == b && g.tupleIndex() == f && g.memberIndex() == c
        }).firstOrDefault$1($.ig.PositionInfo.prototype.$type);
        if (d == null) {
            d = ( function () {
                var g = new $.ig.PositionInfo();
                g.axisName(b);
                g.memberIndex(c);
                g.tupleIndex(f);
                return g
            }());
            this.__positionsToCollapse.add(d)
        } else {
            this.__positionsToExpand.remove(d)
        }
    },
    clearPendingChanges: function () {
        this.__positionsToCollapse.clear();
        this.__positionsToExpand.clear()
    },
    update: function () {
        var a = this;
        var c = null;
        var e = null;
        var b = 0;
        this.__isMeasuresAxisChanged = false;
        this.__isFiltersAxisChanged = false;
        this.collapseTupleMembersImpl();
        c = this.getMdxAxis(this.columnAxis(), this.__isColumnsAxisChanged, b);
        this.__isColumnsAxisChanged = false;
        if (c != null) {
            b++
        }
        e = this.getMdxAxis(this.rowAxis(), this.__isRowsAxisChanged, b);
        this.__isRowsAxisChanged = false;
        if (e != null) {
            e.axisIndex(b);
            b++
        }
        if (this.rowAxis().count() == 0 && this.columnAxis().count() == 0 && this.measures().count() == 0) {
            var i = ( function () {
                var o = new $.ig.OlapResult();
                o.isEmpty(true);
                return o
            }());
            var n = new $.ig.TaskCompletionSource$1($.ig.OlapResult.prototype.$type, 0);
            n.setResult(i);
            this.result(i);
            this.clearPendingChanges();
            return n.task()
        }
        this.expandTupleMembersImpl();
        var j = new $.ig.MdxSettings();
        var l = new $.ig.MdxSlicerAxisProvider(this, this.__columnFilters, this.__rowFilters, this.__filterFilters, j);
        var k = l.createAxis(b);
        var d = new $.ig.MdxQueryBuilder(1, j);
        var m = d.buildMdxQuery(c, e, k, new $.ig.MdxCalculatedMembersCache(), this.cube().name());
        var f = this.getProviderDefaultProperties();
        var h = this.getProviderDefaultRestrictions();
        var g = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        return g.executeStatementAsync(m, f, h).continueWith$11($.ig.OlapResult.prototype.$type, function (o) {
            a.result(o.result());
            a.clearPendingChanges();
            return a.result()
        })
    },
    expandTupleMembersImpl: function () {
        var a = this;
        var d = this.__positionsToExpand.getEnumerator();
        while (d.moveNext()) {
            var g = d.current();
            var i = this.getResultAxis(g.axisName());
            if (i == null) {
                continue
            }
            var c = this.result().axes().indexOf(i);
            var e = this.getMdxDimensionAxis(c);
            var f = i.tuples().__inner[g.tupleIndex()];
            var h = f.item(g.memberIndex());
            var b = new $.ig.MdxDimensionAxisProvider(3, i, ( function () {
                var j = new $.ig.List$1($.ig.IPositionItem$2.prototype.$type.specialize(String, $.ig.Object.prototype.$type), 0);
                j.add(h);
                return j
            }()));
            b.extendAxis(e, e.axisIndex())
        }
    },
    getMdxAxis: function (c, d, a) {
        var e = null;
        if (c.count() > 0) {
            e = this.getMdxDimensionAxis(a);
            if (d) {
                if (e == null) {
                    var b = new $.ig.MdxDimensionAxisProvider(1, this, c);
                    e = b.createAxis(a);
                    this.setMdxDimensionAxis(a, e)
                } else {
                    var f = this.result().axes().item(a);
                    var b = new $.ig.MdxDimensionAxisProvider(0, this, c, f);
                    e = b.createAxis(a);
                    this.setMdxDimensionAxis(a, e)
                }
            }
        }
        return e
    },
    collapseTupleMembersImpl: function () {
        var a = this;
        if (this.result() != null) {
            var d = new $.ig.List$1($.ig.OlapResultAxis.prototype.$type, 0);
            var f = this.__positionsToCollapse.getEnumerator();
            while (f.moveNext()) {
                var k = f.current();
                var m = this.getResultAxis(k.axisName());
                if (m == null) {
                    continue
                }
                if (!d.contains(m)) {
                    d.add(m)
                }
                var j = m.tuples().__inner[k.tupleIndex()];
                var l = j.item(k.memberIndex());
                var g = m.positionResolver().getHostPositionItemInfo(j, k.memberIndex());
                var h = g.values().where$1($.ig.PositionItemInfo$2.prototype.$type,function (n) {
                    return n.key() == l.key()
                }).firstOrDefault$1($.ig.PositionItemInfo$2.prototype.$type);
                if (h != null) {
                    h.isExpanded(false)
                }
            }
            var f = d.getEnumerator();
            while (f.moveNext()) {
                var b = f.current();
                var c = new $.ig.MdxDimensionAxisProvider(2, this, b);
                var e = this.result().axes().indexOf(b);
                var i = c.createAxis(e);
                this.setMdxDimensionAxis(e, i)
            }
        }
    },
    setCatalog: function (a) {
        if (!this.isInitialized()) {
            throw new $.ig.InvalidOperationException(1, "Data source is not initialized.")
        }
        return this.setCatalogInternal(a)
    },
    setCube: function (a) {
        if (!this.isInitialized()) {
            throw new $.ig.InvalidOperationException(1, "Data source is not initialized.")
        }
        return this.setCubeInternal(a, null)
    },
    setMeasureGroup: function (a) {
        if (!this.isInitialized()) {
            throw new $.ig.InvalidOperationException(1, "Data source is not initialized.")
        }
        return this.setMeasureGroupInternal(a)
    },
    initialize: function () {
        var a = this;
        var h = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
        if (this.isInitialized()) {
            h.setResult(this.metadataTree());
            return h.task()
        }
        var b = this.sourceOptions().catalog();
        var c = this.sourceOptions().cube();
        var e = this.sourceOptions().measureGroup();
        this.rowAxis(new $.ig.ArrayListCollection$1($.ig.ICoreOlapElement.prototype.$type));
        this.columnAxis(new $.ig.ArrayListCollection$1($.ig.ICoreOlapElement.prototype.$type));
        this.filters(new $.ig.ArrayListCollection$1($.ig.Hierarchy.prototype.$type));
        this.measures(new $.ig.ArrayListCollection$1($.ig.Measure.prototype.$type));
        (this.columnAxis()).collectionChanged = $.ig.Delegate.prototype.combine((this.columnAxis()).collectionChanged, this.columnsAxisChanged.on(this));
        (this.rowAxis()).collectionChanged = $.ig.Delegate.prototype.combine((this.rowAxis()).collectionChanged, this.rowsAxisChanged.on(this));
        (this.filters()).collectionChanged = $.ig.Delegate.prototype.combine((this.filters()).collectionChanged, this.filtersAxisChanged.on(this));
        (this.measures()).collectionChanged = $.ig.Delegate.prototype.combine((this.measures()).collectionChanged, this.measuresAxisChanged.on(this));
        var d = this.loadCatalogs();
        if (String.isNullOrEmpty(b)) {
            d.continueWith(function (i) {
                if (i.exception() == null) {
                    a.initializeCompleted();
                    h.setResult(null);
                    return
                }
                h.setException(i.exception())
            });
            return h.task()
        }
        var f = d.continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IList$1.prototype.$type, function (j) {
            if (j.exception() == null) {
                return a.setCatalogInternal(b)
            }
            var i = new $.ig.TaskCompletionSource$1($.ig.IList$1.prototype.$type.specialize($.ig.Cube.prototype.$type), 0);
            i.setException(j.exception());
            return i.task()
        });
        if (String.isNullOrEmpty(c)) {
            f.continueWith(function (i) {
                if (i.exception() == null) {
                    a.initializeCompleted();
                    h.setResult(null);
                    return
                }
                h.setException(i.exception())
            });
            return h.task()
        }
        var g = f.continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IList$1.prototype.$type, function (i) {
            return a.setCubeInternal(c, e)
        });
        return g.continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IList$1.prototype.$type, function (i) {
            return a.initializeAxes()
        })
    },
    addFilterMember: function (d, e) {
        var a = this;
        var c;
        var b = ( function () {
            var f = a.findAxisElement(d, c);
            c = f.filtersCollection;
            return f.ret
        }());
        if (b == null) {
            b = new $.ig.AxisElement(d, ( function () {
                var f = new $.ig.List$1(String, 0);
                f.add(e);
                return f
            }()));
            c.add(b)
        } else {
            if (!b.memberNames().contains(e)) {
                b.memberNames().add(e)
            }
        }
    },
    getFilterMemberNames: function (d) {
        var a = this;
        var c;
        var b = ( function () {
            var e = a.findAxisElement(d, c);
            c = e.filtersCollection;
            return e.ret
        }());
        if (b != null) {
            return b.memberNames()
        }
        return new $.ig.List$1(String, 0)
    },
    removeFilterMember: function (d, e) {
        var a = this;
        var c;
        var b = ( function () {
            var f = a.findAxisElement(d, c);
            c = f.filtersCollection;
            return f.ret
        }());
        if (b == null) {
            return
        }
        b.memberNames().remove(e)
    },
    removeAllFilterMembers: function (d) {
        var a = this;
        var c;
        var b = ( function () {
            var e = a.findAxisElement(d, c);
            c = e.filtersCollection;
            return e.ret
        }());
        if (b == null) {
            return
        }
        b.memberNames().clear()
    },
    getProviderDefaultProperties: function () {
        var a = this;
        var d = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
        if (this.sourceOptions().discoverProperties() != null) {
            var b = this.sourceOptions().discoverProperties().getEnumerator();
            while (b.moveNext()) {
                var c = b.current();
                var e = new $.ig.XmlaQueryProperty(1, c.key(), c.value());
                d.add(( function () {
                    var f = new $.ig.KeyValueItem();
                    f.key(e.propertyName());
                    f.value(e.value());
                    return f
                }()))
            }
        }
        if (this.catalog() != null) {
            this.ensureEntryValue(d, $.ig.XmlaDiscoverProperties.prototype.catalog, this.catalog().name())
        }
        return d
    },
    getProviderDefaultRestrictions: function () {
        var a = this;
        var b = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
        if (this.catalog() != null) {
            b.add(( function () {
                var c = new $.ig.KeyValueItem();
                c.key($.ig.MeasureGroupRestrictions.prototype.catalogName);
                c.value(a.catalog().name());
                return c
            }()));
            if (this.cube() != null) {
                b.add(( function () {
                    var c = new $.ig.KeyValueItem();
                    c.key($.ig.MeasureGroupRestrictions.prototype.cubeName);
                    c.value(a.cube().name());
                    return c
                }()))
            }
        }
        return b
    },
    getMembersOfLevel: function (b) {
        var a = this;
        var c = this.getProviderDefaultProperties();
        var d = this.getProviderDefaultRestrictions();
        if (d != null) {
            d.add(( function () {
                var f = new $.ig.KeyValueItem();
                f.key($.ig.MemberRestrictions.prototype.levelUniqueName);
                f.value(b);
                return f
            }()))
        }
        var e = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        return e.discoverMembersAsync(c, d)
    },
    getMembersOfHierarchy: function (b) {
        var a = this;
        var c = this.getProviderDefaultProperties();
        var d = this.getProviderDefaultRestrictions();
        if (d != null) {
            d.add(( function () {
                var f = new $.ig.KeyValueItem();
                f.key($.ig.MemberRestrictions.prototype.hierarchyUniqueName);
                f.value(b);
                return f
            }()))
        }
        var e = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        return e.discoverMembersAsync(c, d)
    },
    getMembersOfMember: function (b) {
        var a = this;
        var c = this.getProviderDefaultProperties();
        var d = this.getProviderDefaultRestrictions();
        if (d != null) {
            d.add(( function () {
                var f = new $.ig.KeyValueItem();
                f.key($.ig.MemberRestrictions.prototype.memberUniqueName);
                f.value(b);
                return f
            }()));
            d.add(( function () {
                var f = new $.ig.KeyValueItem();
                f.key($.ig.MemberRestrictions.prototype.treeOp);
                f.value("1");
                return f
            }()))
        }
        var e = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        return e.discoverMembersAsync(c, d)
    },
    initializeAxes: function () {
        var a = this;
        if (!String.isNullOrEmpty(this.sourceOptions().columns())) {
            var d = new $.ig.AxisDefinitionParser(this.sourceOptions().columns());
            var c = d.parse();
            if (c != null && c.count() > 0) {
                var e = c.getEnumerator();
                while (e.moveNext()) {
                    var b = e.current();
                    this.addCoreElementToAxis$1($.ig.ICoreOlapElement.prototype.$type, b.name(), this.columnAxis(), $.ig.Hierarchy.prototype.$type);
                    if (b.memberNames().count() > 0) {
                        this.__columnFilters.add(b)
                    }
                }
            }
        }
        if (!String.isNullOrEmpty(this.sourceOptions().rows())) {
            var l = new $.ig.AxisDefinitionParser(this.sourceOptions().rows());
            var k = l.parse();
            if (k != null && k.count() > 0) {
                var e = k.getEnumerator();
                while (e.moveNext()) {
                    var b = e.current();
                    this.addCoreElementToAxis$1($.ig.ICoreOlapElement.prototype.$type, b.name(), this.rowAxis(), $.ig.Hierarchy.prototype.$type);
                    if (b.memberNames().count() > 0) {
                        this.__rowFilters.add(b)
                    }
                }
            }
        }
        if (!String.isNullOrEmpty(this.sourceOptions().filters())) {
            var g = new $.ig.AxisDefinitionParser(this.sourceOptions().filters());
            var f = g.parse();
            if (f != null && f.count() > 0) {
                var e = f.getEnumerator();
                while (e.moveNext()) {
                    var b = e.current();
                    this.addCoreElementToAxis$1($.ig.Hierarchy.prototype.$type, b.name(), this.filters(), $.ig.Hierarchy.prototype.$type);
                    if (b.memberNames().count() > 0) {
                        this.__filterFilters.add(b)
                    }
                }
            }
        }
        if (!String.isNullOrEmpty(this.sourceOptions().measures())) {
            var j = new $.ig.AxisDefinitionParser(this.sourceOptions().measures());
            var i = j.parse();
            if (i != null && i.count() > 0) {
                var e = i.getEnumerator();
                while (e.moveNext()) {
                    var h = e.current();
                    this.addCoreElementToAxis$1($.ig.Measure.prototype.$type, h.name(), this.measures(), $.ig.Measure.prototype.$type)
                }
            }
        }
        if (this.__isColumnsAxisChanged || this.__isRowsAxisChanged || this.__isFiltersAxisChanged || this.__isMeasuresAxisChanged) {
            return this.update().continueWithTask$21($.ig.OlapResult.prototype.$type, $.ig.MetadataTreeItem.prototype.$type, function (n) {
                a.initializeCompleted();
                var o = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
                o.setResult(a.metadataTree());
                return o.task()
            })
        }
        this.initializeCompleted();
        var m = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
        m.setResult(this.metadataTree());
        return m.task()
    },
    addCoreElementToAxis$1: function (b, f, c, e) {
        var a = this;
        var g = function (h) {
            return (h).uniqueName() == f
        };
        var d = this.getCoreElement(g, e);
        if (d != null && !c.contains$1($.ig.Object.prototype.$type, d)) {
            c.add(d)
        }
    },
    initializeCompleted: function () {
        this.isInitialized(true)
    },
    toArrayListCollection$1: function (a, c) {
        var e = new $.ig.ArrayListCollection$1(a);
        var b = c.getEnumerator();
        while (b.moveNext()) {
            var d = b.current();
            e.add(d)
        }
        return e
    },
    updateAxisState: function (c, e) {
        var a = this;
        switch (c.action()) {
            case $.ig.NotifyCollectionChangedAction.prototype.add:
                var d = c.newItems().getEnumerator();
                while (d.moveNext()) {
                    var h = d.current();
                    var f = $.ig.util.cast($.ig.Hierarchy.prototype.$type, h);
                    if (f != null) {
                        if (this.isInitialized()) {
                            e.add(new $.ig.AxisElement(f.uniqueName(), new $.ig.List$1(String, 0)))
                        }
                    }
                }
                break;
            case $.ig.NotifyCollectionChangedAction.prototype.remove:
                var d = c.oldItems().getEnumerator();
                while (d.moveNext()) {
                    var i = d.current();
                    var f = $.ig.util.cast($.ig.Hierarchy.prototype.$type, i);
                    if (f != null) {
                        var b = e.where$1($.ig.AxisElement.prototype.$type,function (j) {
                            return j.name() == f.uniqueName()
                        }).firstOrDefault$1($.ig.AxisElement.prototype.$type);
                        if (b != null) {
                            e.remove(b)
                        }
                    } else {
                        var g = $.ig.util.cast($.ig.MeasureList.prototype.$type, i);
                        if (g != null && !this.__isMeasuresAxisChanged) {
                            this.measures().clear()
                        }
                    }
                }
                break
        }
    },
    columnsAxisChanged: function (b, a) {
        this.__isColumnsAxisChanged = true;
        this.updateMdxAxesItems(0, this.columnAxis(), this.rowAxis());
        this.updateAxisState(a, this.__columnFilters)
    },
    rowsAxisChanged: function (b, a) {
        this.__isRowsAxisChanged = true;
        this.updateMdxAxesItems(1, this.rowAxis(), this.columnAxis());
        this.updateAxisState(a, this.__rowFilters)
    },
    updateMdxAxesItems: function (b, a, c) {
        if (a.count() > 0) {
            if (c.count() > 0) {
                if (this.__mdxAxes.count() < 2) {
                    this.__mdxAxes.insert(b, null)
                }
            } else {
                if (this.__mdxAxes.count() == 0) {
                    this.__mdxAxes.insert(0, null)
                }
            }
        } else {
            if (this.__mdxAxes.count() > 1) {
                this.__mdxAxes.removeAt(b)
            } else {
                this.__mdxAxes.removeAt(0)
            }
        }
    },
    filtersAxisChanged: function (b, a) {
        this.__isFiltersAxisChanged = true;
        this.updateAxisState(a, this.__filterFilters)
    },
    measuresAxisChanged: function (i, c) {
        var a = this;
        this.__isMeasuresAxisChanged = true;
        var g;
        if (this.measureListLocation() == $.ig.MeasureListLocation.prototype.columns) {
            g = this.columnAxis()
        } else {
            g = this.rowAxis()
        }
        var f = null;
        var h = 0;
        var d = g.getEnumerator();
        while (d.moveNext()) {
            var b = d.current();
            f = $.ig.util.cast($.ig.MeasureList.prototype.$type, b);
            if (f != null) {
                break
            }
            h++
        }
        if (this.measures().count() > 1) {
            if (f == null) {
                f = ( function () {
                    var e = new $.ig.MeasureList();
                    e.measures(a.measures());
                    return e
                }());
                if (this.measureListIndex() > g.count()) {
                    g.add(f)
                } else {
                    g.insert(this.measureListIndex(), f)
                }
            } else {
                if (h != this.measureListIndex()) {
                    g.removeAt(h);
                    if (this.measureListIndex() > g.count()) {
                        g.add(f)
                    } else {
                        g.insert(this.measureListIndex(), f)
                    }
                }
            }
        } else {
            if (f != null) {
                g.removeAt(h)
            }
        }
    },
    loadCatalogs: function () {
        var a = this;
        var c = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        var b = this.getProviderDefaultProperties();
        var d = c.discoverCatalogsAsync(b, null).continueWithTask$21($.ig.IEnumerable$1.prototype.$type, $.ig.IEnumerable$1.prototype.$type, function (e) {
            a.catalogs(a.toArrayListCollection$1($.ig.Catalog.prototype.$type, e.result()));
            return e
        });
        return d
    },
    loadCubes: function (b) {
        var a = this;
        var f = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        var g = ( function () {
            var j = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
            j.add(( function () {
                var k = new $.ig.KeyValueItem();
                k.key($.ig.CubeRestrictions.prototype.catalogName);
                k.value(b);
                return k
            }()));
            return j
        }());
        var e = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
        if (this.sourceOptions().discoverProperties() != null) {
            var c = this.sourceOptions().discoverProperties().getEnumerator();
            while (c.moveNext()) {
                var d = c.current();
                var i = new $.ig.XmlaQueryProperty(1, d.key(), d.value());
                e.add(( function () {
                    var j = new $.ig.KeyValueItem();
                    j.key(i.propertyName());
                    j.value(i.value());
                    return j
                }()))
            }
        }
        this.ensureEntryValue(e, $.ig.XmlaDiscoverProperties.prototype.catalog, b);
        var h = f.discoverCubesAsync(e, g).continueWith$11($.ig.IList$1.prototype.$type, function (j) {
            a.cubes(a.toArrayListCollection$1($.ig.Cube.prototype.$type, j.result()));
            return a.cubes()
        });
        return h
    },
    loadMeasureGroups: function (b, c) {
        var a = this;
        var g = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        var h = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
        h.add(( function () {
            var k = new $.ig.KeyValueItem();
            k.key($.ig.MeasureGroupRestrictions.prototype.catalogName);
            k.value(b);
            return k
        }()));
        h.add(( function () {
            var k = new $.ig.KeyValueItem();
            k.key($.ig.MeasureGroupRestrictions.prototype.cubeName);
            k.value(c);
            return k
        }()));
        var f = new $.ig.List$1($.ig.KeyValueItem.prototype.$type, 0);
        if (this.sourceOptions().discoverProperties() != null) {
            var d = this.sourceOptions().discoverProperties().getEnumerator();
            while (d.moveNext()) {
                var e = d.current();
                var j = new $.ig.XmlaQueryProperty(1, e.key(), e.value());
                f.add(( function () {
                    var k = new $.ig.KeyValueItem();
                    k.key(j.propertyName());
                    k.value(j.value());
                    return k
                }()))
            }
        }
        this.ensureEntryValue(f, $.ig.XmlaDiscoverProperties.prototype.catalog, b);
        var i = g.discoverMeasureGroupsAsync(f, h).continueWith$11($.ig.IList$1.prototype.$type, function (k) {
            a.measureGroups(a.toArrayListCollection$1($.ig.MeasureGroup.prototype.$type, k.result()));
            return a.measureGroups()
        });
        return i
    },
    setCatalogInternal: function (c) {
        var a = this;
        var e = new $.ig.TaskCompletionSource$1($.ig.IList$1.prototype.$type.specialize($.ig.Cube.prototype.$type), 0);
        if (this.catalog() != null) {
            if (this.catalog().name() == c) {
                e.setResult(this.cubes());
                return e.task()
            }
            this.clearCatalogCache()
        }
        var d = this.catalogs().getEnumerator();
        while (d.moveNext()) {
            var b = d.current();
            if (b.name() == c) {
                this.catalog(b);
                break
            }
        }
        if (this.cubes() == null || this.cubes().count() == 0) {
            this.loadCubes(c).continueWith(function (f) {
                if (f.exception() == null) {
                    e.setResult(f.result());
                    return
                }
                e.setException(f.exception())
            })
        } else {
            e.setResult(this.cubes())
        }
        return e.task()
    },
    clearCatalogCache: function () {
        this.catalog(null);
        this.cubes(new $.ig.ArrayListCollection$1($.ig.Cube.prototype.$type));
        this.clearCubeCache()
    },
    clearCubeCache: function () {
        this.cube(null);
        this.measureGroups(new $.ig.ArrayListCollection$1($.ig.MeasureGroup.prototype.$type));
        this.__cubeCache = null;
        this.clearMeasureGroupCache()
    },
    clearMeasureGroupCache: function () {
        this.measureGroup(null);
        this.metadataTree(null)
    },
    setCubeInternal: function (c, e) {
        var a = this;
        if (this.catalog() == null) {
            throw new $.ig.InvalidOperationException(1, "Data source has no Catalog set.")
        }
        var h = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
        if (this.cube() != null) {
            if (this.cube().name() == c) {
                h.setResult(this.metadataTree());
                return h.task()
            }
            this.clearCubeCache()
        }
        var k = new $.ig.List$1($.ig.Task.prototype.$type, 0);
        var d = this.cubes().getEnumerator();
        while (d.moveNext()) {
            var b = d.current();
            if (b.name() == c) {
                this.cube(b);
                break
            }
        }
        var f = this.getProviderDefaultProperties();
        var g = this.getProviderDefaultRestrictions();
        this.ensureEntryValue(g, $.ig.DimensionRestrictions.prototype.cubeName, c);
        var m = this.dataProviderFactory().createDataProvider(this.sourceOptions().serverUrl(), this.sourceOptions().credentials());
        k.add(m.discoverMeasuresAsync(f, g));
        k.add(m.discoverDimensionsAsync(f, g));
        k.add(m.discoverHierarchiesAsync(f, g));
        k.add(m.discoverLevelsAsync(f, g));
        k.add(m.discoverMeasureGroupDimensionsAsync(f, g));
        k.add(this.loadMeasureGroups(this.catalog().name(), c));
        var j = new Array(k.count());
        k.copyTo(j, 0);
        var l = new $.ig.TaskFactory();
        var i = l.continueWhenAll(j,function (n) {
            return a.cacheCubeMetaItems(n)
        }).continueWithTask$1($.ig.MetadataTreeItem.prototype.$type, function (n) {
                return a.setMeasureGroupInternal(e)
            });
        return i
    },
    setMeasureGroupInternal: function (d) {
        var a = this;
        if (this.catalog() == null) {
            throw new $.ig.InvalidOperationException(1, "Data source has no Catalog set.")
        }
        if (this.cube() == null) {
            throw new $.ig.InvalidOperationException(1, "Data source has no Cube set.")
        }
        var e = new $.ig.TaskCompletionSource$1($.ig.MetadataTreeItem.prototype.$type, 0);
        if (this.measureGroup() != null) {
            if (this.measureGroup().name() == d) {
                e.setResult(this.metadataTree());
                return e.task()
            }
            this.clearMeasureGroupCache()
        }
        if (this.measureGroups() == null || this.measureGroups().count() == 0) {
            var f = this.loadMeasureGroups(this.catalog().name(), this.cube().name()).continueWithTask$21($.ig.IList$1.prototype.$type, $.ig.MetadataTreeItem.prototype.$type, function (g) {
                return a.setMeasureGroupInternal(d)
            });
            return f
        }
        var b = this.measureGroups().getEnumerator();
        while (b.moveNext()) {
            var c = b.current();
            if (c.name() == d) {
                this.measureGroup(c);
                break
            }
        }
        this.metadataTree(this.createMetadataTree(d));
        e.setResult(this.metadataTree());
        return e.task()
    },
    createMetadataTree: function (f) {
        var a = this;
        var c = ( function () {
            var h = new $.ig.MetadataTreeItem();
            h.type($.ig.MetadataTreeItemType.prototype.cube);
            h.caption(a.cube().caption());
            h.item(a.cube());
            return h
        }());
        var e;
        var g;
        var b = true;
        if (String.isNullOrEmpty(f) || this.measureGroups() == null) {
            e = this.__cubeCache.dimensionItems();
            g = this.__cubeCache.measures()
        } else {
            b = false;
            e = this.__cubeCache.measureGroupDimensionsCache().getMeasureGroupDimensions(f);
            g = this.__cubeCache.measureGroupDimensionsCache().getMeasureGroupMeasures(f)
        }
        var d = $.ig.MetaTreeHelper.prototype.getDimensionMetaItems(e, g, this.__cubeCache.hierarchyItems(), this.__cubeCache.levelItems(), b);
        $.ig.MetaTreeHelper.prototype.setMetaItemChildren(c, d);
        return c
    },
    cacheCubeMetaItems: function (f) {
        this.__cubeCache = new $.ig.CubeMetaItemsCache();
        var e = f[0];
        var a = f[1];
        var b = f[2];
        var c = f[3];
        var d = f[4];
        this.__cubeCache.measures(e.result());
        this.__cubeCache.dimensionItems(a.result());
        this.__cubeCache.hierarchyItems(b.result());
        this.__cubeCache.levelItems(c.result());
        if (this.measureGroups() != null) {
            this.__cubeCache.measureGroupDimensions(d.result());
            this.__cubeCache.measureGroupDimensionsCache(new $.ig.MeasureGroupMetaItemsCache(this.__cubeCache.dimensionItems(), this.__cubeCache.measures(), this.__cubeCache.measureGroupDimensions()))
        }
    },
    ensureEntryValue: function (c, d, g) {
        var a = this;
        var e = null;
        var b = c.getEnumerator();
        while (b.moveNext()) {
            var f = b.current();
            if (f.key() == d) {
                e = f;
                break
            }
        }
        if (e == null) {
            c.add(( function () {
                var h = new $.ig.KeyValueItem();
                h.key(d);
                h.value(g);
                return h
            }()))
        }
    },
    getResultAxis: function (b) {
        var a = this;
        if (this.result() != null && this.result().axes().count() > 0) {
            return this.result().axes().where$1($.ig.OlapResultAxis.prototype.$type,function (c) {
                return c.name() == b
            }).firstOrDefault$1($.ig.OlapResultAxis.prototype.$type)
        }
        return null
    },
    getMdxDimensionAxis: function (a) {
        if (a < this.__mdxAxes.count()) {
            return this.__mdxAxes.item(a)
        }
        return null
    },
    setMdxDimensionAxis: function (a, b) {
        this.__mdxAxes.item(a, b)
    },
    findAxisElement: function (d, c) {
        var a = this;
        var b = this.__columnFilters.where$1($.ig.AxisElement.prototype.$type,function (e) {
            return e.name() == d
        }).firstOrDefault$1($.ig.AxisElement.prototype.$type);
        if (b != null) {
            c = this.__columnFilters;
            return {
                ret: b,
                filtersCollection: c
            }
        }
        b = this.__rowFilters.where$1($.ig.AxisElement.prototype.$type,function (e) {
            return e.name() == d
        }).firstOrDefault$1($.ig.AxisElement.prototype.$type);
        if (b != null) {
            c = this.__rowFilters;
            return {
                ret: b,
                filtersCollection: c
            }
        }
        b = this.__filterFilters.where$1($.ig.AxisElement.prototype.$type,function (e) {
            return e.name() == d
        }).firstOrDefault$1($.ig.AxisElement.prototype.$type);
        if (b != null) {
            c = this.__filterFilters;
            return {
                ret: b,
                filtersCollection: c
            }
        }
        c = null;
        return {
            ret: null,
            filtersCollection: c
        };
        return {
            filtersCollection: c
        }
    },
    $type: new $.ig.Type("XmlaDataSourceImpl", $.ig.Object.prototype.$type, [$.ig.IOlapDataSource.prototype.$type])
}, true);
$.ig.util.defType("PositionInfo", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    _axisName: null,
    axisName: function (a) {
        if (arguments.length === 1) {
            this._axisName = a;
            return a
        } else {
            return this._axisName
        }
    },
    _tupleIndex: null,
    tupleIndex: function (a) {
        if (arguments.length === 1) {
            this._tupleIndex = a;
            return a
        } else {
            return this._tupleIndex
        }
    },
    _memberIndex: null,
    memberIndex: function (a) {
        if (arguments.length === 1) {
            this._memberIndex = a;
            return a
        } else {
            return this._memberIndex
        }
    },
    $type: new $.ig.Type("PositionInfo", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("TaskExtensions", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    continueWithTask$1: function (b, c) {
        var a = this;
        var d = new $.ig.TaskCompletionSource$1(b, 0);
        this.continueWith(function (h) {
            var e = e;
            if (h.exception() == null) {
                try {
                    c(h).continueWith(function (i) {
                        if (i.exception() == null) {
                            d.setResult(i.result());
                            return
                        }
                        d.setException(i.exception())
                    })
                } catch (f) {
                    var g;
                    g = f;
                    d.setException(g)
                }
            } else {
                d.setException(h.exception())
            }
        });
        return d.task()
    },
    continueWithTask$21: function (b, c, d) {
        var a = this;
        return this.continueWithTask$1(c, function (e) {
            return d(e)
        })
    },
    $type: new $.ig.Type("TaskExtensions", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaDiscoverProperties", "Object", {
    init: function () {
        $.ig.Object.prototype.init.call(this)
    },
    $type: new $.ig.Type("XmlaDiscoverProperties", $.ig.Object.prototype.$type)
}, true);
$.ig.util.defType("XmlaDataSourceOptions", "DataSourceBaseOptions", {
    init: function () {
        $.ig.DataSourceBaseOptions.prototype.init.call(this)
    },
    _serverUrl: null,
    serverUrl: function (a) {
        if (arguments.length === 1) {
            this._serverUrl = a;
            return a
        } else {
            return this._serverUrl
        }
    },
    _credentials: null,
    credentials: function (a) {
        if (arguments.length === 1) {
            this._credentials = a;
            return a
        } else {
            return this._credentials
        }
    },
    _catalog: null,
    catalog: function (a) {
        if (arguments.length === 1) {
            this._catalog = a;
            return a
        } else {
            return this._catalog
        }
    },
    _cube: null,
    cube: function (a) {
        if (arguments.length === 1) {
            this._cube = a;
            return a
        } else {
            return this._cube
        }
    },
    _measureGroup: null,
    measureGroup: function (a) {
        if (arguments.length === 1) {
            this._measureGroup = a;
            return a
        } else {
            return this._measureGroup
        }
    },
    _discoverProperties: null,
    discoverProperties: function (a) {
        if (arguments.length === 1) {
            this._discoverProperties = a;
            return a
        } else {
            return this._discoverProperties
        }
    },
    _executeProperties: null,
    executeProperties: function (a) {
        if (arguments.length === 1) {
            this._executeProperties = a;
            return a
        } else {
            return this._executeProperties
        }
    },
    _dataProviderFactory: null,
    dataProviderFactory: function (a) {
        if (arguments.length === 1) {
            this._dataProviderFactory = a;
            return a
        } else {
            return this._dataProviderFactory
        }
    },
    $type: new $.ig.Type("XmlaDataSourceOptions", $.ig.DataSourceBaseOptions.prototype.$type)
}, true);
$.ig.util.defType("CustomRemoteXmlaRequestSerializer", "Object", {
    __serializeRequest: null,
    init: function (a) {
        $.ig.Object.prototype.init.call(this);
        this.__serializeRequest = a
    },
    serializeRequest: function (a) {
        return this.__serializeRequest(a)
    },
    deserializeRequest: function (a) {
        throw new $.ig.NotSupportedException(1)
    },
    $type: new $.ig.Type("CustomRemoteXmlaRequestSerializer", $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaRequestSerializer.prototype.$type])
}, true);
$.ig.util.defType("CustomRemoteXmlaResponseSerializer", "Object", {
    __deserializeResponse: null,
    init: function (a) {
        $.ig.Object.prototype.init.call(this);
        this.__deserializeResponse = a
    },
    serializeResponse: function (a, b) {
        throw new $.ig.NotSupportedException(1)
    },
    deserializeResponse: function (a, b) {
        return this.__deserializeResponse(a, b)
    },
    $type: new $.ig.Type("CustomRemoteXmlaResponseSerializer", $.ig.Object.prototype.$type, [$.ig.IRemoteXmlaResponseSerializer.prototype.$type])
}, true);
$.ig.util.defType("XmlaDataSource", "Object", {
    __dataSource: null,
    init: function (o) {
        var a = this;
        $.ig.Object.prototype.init.call(this);
        var s = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "serverUrl");
        var b = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "catalog");
        var d = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "cube");
        var n = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "measures");
        var m = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "measureGroup");
        var k = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "filters");
        var c = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "columns");
        var q = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "rows");
        var i = $.ig.jQueryUtils.prototype.convertToStringDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "discoverProperties"));
        var j = $.ig.jQueryUtils.prototype.convertToStringDictionary($.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "executeProperties"));
        var l = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "isRemote");
        var r = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "serializeRequest");
        var h = $.ig.jQueryUtils.prototype.getJavascriptObjectProperty(o, "deserializeResponse");
        var e = new $.ig.CustomRemoteXmlaRequestSerializer(r);
        var f = new $.ig.CustomRemoteXmlaResponseSerializer(h);
        var p = new $.ig.RemoteXmlaDataProviderFactory(1, e, f);
        var g = ( function () {
            var t = new $.ig.XmlaDataSourceOptions();
            t.serverUrl(s);
            t.catalog(b);
            t.cube(d);
            t.measures(n);
            t.measureGroup(m);
            t.filters(k);
            t.columns(c);
            t.rows(q);
            t.discoverProperties(i);
            t.executeProperties(j);
            return t
        }());
        if (l) {
            g.dataProviderFactory(new $.ig.RemoteXmlaDataProviderFactory(0))
        }
        this.__dataSource = new $.ig.XmlaDataSourceImpl(g)
    },
    isInitialized: function () {
        return this.__dataSource.isInitialized()
    },
    initialize: function () {
        return this.__dataSource.initialize().promise()
    },
    catalogs: function () {
        return (this.__dataSource.catalogs()).inner()
    },
    catalog: function () {
        return this.__dataSource.catalog()
    },
    setCatalog: function (b) {
        var a = this;
        return this.__dataSource.setCatalog(b).continueWith$11($.ig.Array.prototype.$type,function (c) {
            return (c.result()).inner()
        }).promise()
    },
    cubes: function () {
        return (this.__dataSource.cubes()).inner()
    },
    cube: function () {
        return this.__dataSource.cube()
    },
    setCube: function (b) {
        var a = this;
        return this.__dataSource.setCube(b).continueWith$11($.ig.MetadataTreeItem.prototype.$type,function (c) {
            return c.result()
        }).promise()
    },
    measureGroups: function () {
        return (this.__dataSource.measureGroups()).inner()
    },
    measureGroup: function () {
        return this.__dataSource.measureGroup()
    },
    setMeasureGroup: function (b) {
        var a = this;
        return this.__dataSource.setMeasureGroup(b).continueWith$11($.ig.MetadataTreeItem.prototype.$type,function (c) {
            return c.result()
        }).promise()
    },
    metadataTree: function () {
        return this.__dataSource.metadataTree()
    },
    addRowItem: function (a) {
        if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
            this.__dataSource.rowAxis().add(a)
        }
    },
    removeRowItem: function (a) {
        if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null || $.ig.util.cast($.ig.MeasureList.prototype.$type, a) !== null) {
            this.__dataSource.rowAxis().remove(a)
        }
    },
    addColumnItem: function (a) {
        if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
            this.__dataSource.columnAxis().add(a)
        }
    },
    removeColumnItem: function (a) {
        if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null || $.ig.util.cast($.ig.MeasureList.prototype.$type, a) !== null) {
            this.__dataSource.columnAxis().remove(a)
        }
    },
    addFilterItem: function (a) {
        if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
            this.__dataSource.filters().add(a)
        }
    },
    removeFilterItem: function (a) {
        if ($.ig.util.cast($.ig.Hierarchy.prototype.$type, a) !== null) {
            this.__dataSource.filters().remove(a)
        }
    },
    addMeasureItem: function (a) {
        if ($.ig.util.cast($.ig.Measure.prototype.$type, a) !== null) {
            this.__dataSource.measures().add(a)
        }
    },
    removeMeasureItem: function (a) {
        if ($.ig.util.cast($.ig.Measure.prototype.$type, a) !== null) {
            this.__dataSource.measures().remove(a)
        }
    },
    setMasureListIndex: function (a) {
        this.__dataSource.measureListIndex(a)
    },
    setMeasureListLocation: function (a) {
        switch (a) {
            case"rows":
                this.__dataSource.measureListLocation($.ig.MeasureListLocation.prototype.rows);
                break;
            case"columns":
                this.__dataSource.measureListLocation($.ig.MeasureListLocation.prototype.columns);
                break;
            default:
                break
        }
    },
    expandTupleMember: function (a, c, b) {
        this.__dataSource.expandTupleMember(a, c, b)
    },
    collapseTupleMember: function (a, c, b) {
        this.__dataSource.collapseTupleMember(a, c, b)
    },
    rowAxis: function () {
        return (this.__dataSource.rowAxis()).inner()
    },
    columnAxis: function () {
        return (this.__dataSource.columnAxis()).inner()
    },
    filters: function () {
        return (this.__dataSource.filters()).inner()
    },
    measures: function () {
        return (this.__dataSource.measures()).inner()
    },
    result: function () {
        return this.__dataSource.result()
    },
    clearPendingChanges: function () {
        this.__dataSource.clearPendingChanges()
    },
    update: function () {
        return this.__dataSource.update().promise()
    },
    $type: new $.ig.Type("XmlaDataSource", $.ig.Object.prototype.$type)
}, true);
$.ig.RemoteXmlaRequestType.prototype.discoverCatalogs = 0;
$.ig.RemoteXmlaRequestType.prototype.discoverCubes = 1;
$.ig.RemoteXmlaRequestType.prototype.discoverDimensions = 2;
$.ig.RemoteXmlaRequestType.prototype.discoverHierarchies = 3;
$.ig.RemoteXmlaRequestType.prototype.discoverLevels = 4;
$.ig.RemoteXmlaRequestType.prototype.discoverMeasures = 5;
$.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroups = 6;
$.ig.RemoteXmlaRequestType.prototype.discoverMeasureGroupDimensions = 7;
$.ig.RemoteXmlaRequestType.prototype.discoverMembers = 8;
$.ig.RemoteXmlaRequestType.prototype.executeStatement = 9;
$.ig.MdxDimensionAxisCreateMode.prototype.create = 0;
$.ig.MdxDimensionAxisCreateMode.prototype.extend = 1;
$.ig.MdxDimensionAxisCreateMode.prototype.change = 2;
$.ig.MdxElementType.prototype.member = 0;
$.ig.MdxElementType.prototype.memberTree = 1;
$.ig.MdxElementType.prototype.calculated = 2;
$.ig.MdxElementType.prototype.filter = 3;
$.ig.MdxElementType.prototype.collection = 4;
$.ig.MdxElementType.prototype.userDefined = 5;
$.ig.XmlaSoapMessageHeader.prototype.none = 0;
$.ig.XmlaSoapMessageHeader.prototype.session = 1;
$.ig.XmlaSoapMessageHeader.prototype.beginSession = 2;
$.ig.XmlaSoapMessageHeader.prototype.endSession = 3;
$.ig.CatalogConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.CatalogConstants.prototype.description = "DESCRIPTION";
$.ig.CatalogConstants.prototype.roles = "ROLES";
$.ig.CatalogConstants.prototype.dateModified = "DATE_MODIFIED";
$.ig.DbSchemaConstants.prototype.catalogs = "DBSCHEMA_CATALOGS";
$.ig.DbSchemaConstants.prototype.columns = "DBSCHEMA_COLUMNS";
$.ig.DbSchemaConstants.prototype.tables = "DBSCHEMA_TABLES";
$.ig.DbSchemaConstants.prototype.providerTypes = "DBSCHEMA_PROVIDER_TYPES";
$.ig.CubeConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.CubeConstants.prototype.schemaName = "SCHEMA_NAME";
$.ig.CubeConstants.prototype.cubeName = "CUBE_NAME";
$.ig.CubeConstants.prototype.cubeType = "CUBE_TYPE";
$.ig.CubeConstants.prototype.lastSchemaUpdate = "LAST_SCHEMA_UPDATE";
$.ig.CubeConstants.prototype.lastDataUpdate = "LAST_DATA_UPDATE";
$.ig.CubeConstants.prototype.description = "DESCRIPTION";
$.ig.CubeConstants.prototype.isDrillThroughEnabled = "IS_DRILLTHROUGH_ENABLED";
$.ig.CubeConstants.prototype.isLinkable = "IS_LINKABLE";
$.ig.CubeConstants.prototype.isWriteEnabled = "IS_WRITE_ENABLED";
$.ig.CubeConstants.prototype.isSQLEnabledConstatnt = "IS_SQL_ENABLED";
$.ig.CubeConstants.prototype.cubeCaption = "CUBE_CAPTION";
$.ig.CubeConstants.prototype.baseCubeName = "BASE_CUBE_NAME";
$.ig.CubeConstants.prototype.annotations = "ANNOTATIONS";
$.ig.DimensionConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.DimensionConstants.prototype.schemaName = "SCHEMA_NAME";
$.ig.DimensionConstants.prototype.cubeName = "CUBE_NAME";
$.ig.DimensionConstants.prototype.dimensionName = "DIMENSION_NAME";
$.ig.DimensionConstants.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.DimensionConstants.prototype.dimensionCaption = "DIMENSION_CAPTION";
$.ig.DimensionConstants.prototype.dimensionOrdinal = "DIMENSION_ORDINAL";
$.ig.DimensionConstants.prototype.dimensionType = "DIMENSION_TYPE";
$.ig.DimensionConstants.prototype.dimensionCardinality = "DIMENSION_CARDINALITY";
$.ig.DimensionConstants.prototype.defaultHierarchy = "DEFAULT_HIERARCHY";
$.ig.DimensionConstants.prototype.description = "DESCRIPTION";
$.ig.DimensionConstants.prototype.isVirtual = "IS_VIRTUAL";
$.ig.DimensionConstants.prototype.isReadWrite = "IS_READWRITE";
$.ig.DimensionConstants.prototype.dimensionUniqueSettings = "DIMENSION_UNIQUE_SETTINGS";
$.ig.DimensionConstants.prototype.dimensionMasterName = "DIMENSION_MASTER_NAME";
$.ig.DimensionConstants.prototype.dimensionIsVisible = "DIMENSION_IS_VISIBLE";
$.ig.HierarchyConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.HierarchyConstants.prototype.cubeName = "CUBE_NAME";
$.ig.HierarchyConstants.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.HierarchyConstants.prototype.hierarchyName = "HIERARCHY_NAME";
$.ig.HierarchyConstants.prototype.hierarchyUniqueName = "HIERARCHY_UNIQUE_NAME";
$.ig.HierarchyConstants.prototype.hierarchyCaption = "HIERARCHY_CAPTION";
$.ig.HierarchyConstants.prototype.dimensionType = "DIMENSION_TYPE";
$.ig.HierarchyConstants.prototype.hierarchyCardinality = "HIERARCHY_CARDINALITY";
$.ig.HierarchyConstants.prototype.defaultMember = "DEFAULT_MEMBER";
$.ig.HierarchyConstants.prototype.allMember = "ALL_MEMBER";
$.ig.HierarchyConstants.prototype.description = "DESCRIPTION";
$.ig.HierarchyConstants.prototype.isVirtual = "IS_VIRTUAL";
$.ig.HierarchyConstants.prototype.isReadWrite = "IS_READWRITE";
$.ig.HierarchyConstants.prototype.dimensionUniqueSettings = "DIMENSION_UNIQUE_SETTINGS";
$.ig.HierarchyConstants.prototype.dimensionIsVisible = "DIMENSION_IS_VISIBLE";
$.ig.HierarchyConstants.prototype.dimensionMasterUniqueName = "DIMENSION_MASTER_UNIQUE_NAME";
$.ig.HierarchyConstants.prototype.hierarchyOrdinal = "HIERARCHY_ORDINAL";
$.ig.HierarchyConstants.prototype.dimensionIsShared = "DIMENSION_IS_SHARED";
$.ig.HierarchyConstants.prototype.hierarchyIsVisible = "HIERARCHY_IS_VISIBLE";
$.ig.HierarchyConstants.prototype.hierarchyOrigin = "HIERARCHY_ORIGIN";
$.ig.HierarchyConstants.prototype.hierarchyDisplayFolder = "HIERARCHY_DISPLAY_FOLDER";
$.ig.HierarchyConstants.prototype.instanceSelection = "INSTANCE_SELECTION";
$.ig.HierarchyConstants.prototype.groupingBehavior = "GROUPING_BEHAVIOR";
$.ig.HierarchyConstants.prototype.structureType = "STRUCTURE_TYPE";
$.ig.InstanceConstants.prototype.instanceName = "INSTANCE_NAME";
$.ig.InstanceConstants.prototype.instancePortNumber = "INSTANCE_PORT_NUMBER";
$.ig.InstanceConstants.prototype.instanceState = "INSTANCE_STATE";
$.ig.LevelConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.LevelConstants.prototype.cubeName = "CUBE_NAME";
$.ig.LevelConstants.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.LevelConstants.prototype.hierarchyUniqueName = "HIERARCHY_UNIQUE_NAME";
$.ig.LevelConstants.prototype.levelName = "LEVEL_NAME";
$.ig.LevelConstants.prototype.levelUniqueName = "LEVEL_UNIQUE_NAME";
$.ig.LevelConstants.prototype.levelCaption = "LEVEL_CAPTION";
$.ig.LevelConstants.prototype.levelNumber = "LEVEL_NUMBER";
$.ig.LevelConstants.prototype.levelCardinality = "LEVEL_CARDINALITY";
$.ig.LevelConstants.prototype.levelType = "LEVEL_TYPE";
$.ig.LevelConstants.prototype.description = "DESCRIPTION";
$.ig.LevelConstants.prototype.customRollupSettings = "CUSTOM_ROLLUP_SETTINGS";
$.ig.LevelConstants.prototype.levelUniqueSettings = "LEVEL_UNIQUE_SETTINGS";
$.ig.LevelConstants.prototype.levelIsVisible = "LEVEL_IS_VISIBLE";
$.ig.LevelConstants.prototype.levelOrderingProperty = "LEVEL_ORDERING_PROPERTY";
$.ig.LevelConstants.prototype.levelDbType = "LEVEL_DBTYPE";
$.ig.LevelConstants.prototype.levelKeyCardinality = "LEVEL_KEY_CARDINALITY";
$.ig.LevelConstants.prototype.levelOrigin = "LEVEL_ORIGIN";
$.ig.MeasureConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.MeasureConstants.prototype.schemaName = "SCHEMA_NAME";
$.ig.MeasureConstants.prototype.cubeName = "CUBE_NAME";
$.ig.MeasureConstants.prototype.measureName = "MEASURE_NAME";
$.ig.MeasureConstants.prototype.measureUniqueName = "MEASURE_UNIQUE_NAME";
$.ig.MeasureConstants.prototype.measureCaption = "MEASURE_CAPTION";
$.ig.MeasureConstants.prototype.measureAggregator = "MEASURE_AGGREGATOR";
$.ig.MeasureConstants.prototype.dataType = "DATA_TYPE";
$.ig.MeasureConstants.prototype.numericPrecision = "NUMERIC_PRECISION";
$.ig.MeasureConstants.prototype.numericScale = "NUMERIC_SCALE";
$.ig.MeasureConstants.prototype.expression = "EXPRESSION";
$.ig.MeasureConstants.prototype.description = "DESCRIPTION";
$.ig.MeasureConstants.prototype.measureIsVisible = "MEASURE_IS_VISIBLE";
$.ig.MeasureConstants.prototype.measureNameSqlCoulmnName = "MEASURE_NAME_SQL_COLUMN_NAME";
$.ig.MeasureConstants.prototype.measureUnqualifiedCaption = "MEASURE_UNQUALIFIED_CAPTION";
$.ig.MeasureConstants.prototype.measureGroupName = "MEASUREGROUP_NAME";
$.ig.MeasureConstants.prototype.measureDisplayFolder = "MEASURE_DISPLAY_FOLDER";
$.ig.MeasureConstants.prototype.defaultFormatString = "DEFAULT_FORMAT_STRING";
$.ig.MeasureGroupConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.MeasureGroupConstants.prototype.schemaName = "SCHEMA_NAME";
$.ig.MeasureGroupConstants.prototype.cubeName = "CUBE_NAME";
$.ig.MeasureGroupConstants.prototype.measureGroupName = "MEASUREGROUP_NAME";
$.ig.MeasureGroupConstants.prototype.description = "DESCRIPTION";
$.ig.MeasureGroupConstants.prototype.measureGroupCaption = "MEASUREGROUP_CAPTION";
$.ig.MeasureGroupDimensionConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.schemaName = "SCHEMA_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.cubeName = "CUBE_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.measureGroupName = "MEASUREGROUP_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.measureGroupCardinality = "MEASUREGROUP_CARDINALITY";
$.ig.MeasureGroupDimensionConstants.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.MeasureGroupDimensionConstants.prototype.dimensionCardinality = "DIMENSION_CARDINALITY";
$.ig.MeasureGroupDimensionConstants.prototype.dimensionIsVisible = "DIMENSION_IS_VISIBLE";
$.ig.MeasureGroupDimensionConstants.prototype.dimensionIsFactDimension = "DIMENSION_IS_FACT_DIMENSION";
$.ig.MeasureGroupDimensionConstants.prototype.dimensionPath = "DIMENSION_PATH";
$.ig.MeasureGroupDimensionConstants.prototype.dimensionGranularity = "DIMENSION_GRANULARITY";
$.ig.MemberConstants.prototype.catalogName = "CATALOG_NAME";
$.ig.MemberConstants.prototype.schemaName = "SCHEMA_NAME";
$.ig.MemberConstants.prototype.cubeName = "CUBE_NAME";
$.ig.MemberConstants.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.MemberConstants.prototype.hierarchyUniqueName = "HIERARCHY_UNIQUE_NAME";
$.ig.MemberConstants.prototype.levelUniqueName = "LEVEL_UNIQUE_NAME";
$.ig.MemberConstants.prototype.levelNumber = "LEVEL_NUMBER";
$.ig.MemberConstants.prototype.memberName = "MEMBER_NAME";
$.ig.MemberConstants.prototype.memberUniqueName = "MEMBER_UNIQUE_NAME";
$.ig.MemberConstants.prototype.memberType = "MEMBER_TYPE";
$.ig.MemberConstants.prototype.memberGuid = "MEMBER_GUID";
$.ig.MemberConstants.prototype.memberCaption = "MEMBER_CAPTION";
$.ig.MemberConstants.prototype.childrenCardinality = "CHILDREN_CARDINALITY";
$.ig.MemberConstants.prototype.parentLevel = "PARENT_LEVEL";
$.ig.MemberConstants.prototype.parentUniqueName = "PARENT_UNIQUE_NAME";
$.ig.MemberConstants.prototype.parentCount = "PARENT_COUNT";
$.ig.MemberConstants.prototype.description = "DESCRIPTION";
$.ig.MemberConstants.prototype.expression = "EXPRESSION";
$.ig.MemberConstants.prototype.memberKey = "MEMBER_KEY";
$.ig.MemberConstants.prototype.isPlaceholderMember = "IS_PLACEHOLDERMEMBER";
$.ig.MemberConstants.prototype.isDataMember = "IS_DATAMEMBER";
$.ig.MemberConstants.prototype.scope = "SCOPE";
$.ig.OlapSchemaConstants.prototype.cubes = "MDSCHEMA_CUBES";
$.ig.OlapSchemaConstants.prototype.dimensions = "MDSCHEMA_DIMENSIONS";
$.ig.OlapSchemaConstants.prototype.measureGroups = "MDSCHEMA_MEASUREGROUPS";
$.ig.OlapSchemaConstants.prototype.measureGroupDimensions = "MDSCHEMA_MEASUREGROUP_DIMENSIONS";
$.ig.OlapSchemaConstants.prototype.measures = "MDSCHEMA_MEASURES";
$.ig.OlapSchemaConstants.prototype.hierarchies = "MDSCHEMA_HIERARCHIES";
$.ig.OlapSchemaConstants.prototype.levels = "MDSCHEMA_LEVELS";
$.ig.OlapSchemaConstants.prototype.members = "MDSCHEMA_MEMBERS";
$.ig.CubeRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.CubeRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.CubeRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.CubeRestrictions.prototype.cubeSource = "CUBE_SOURCE";
$.ig.DimensionRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.DimensionRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.DimensionRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.DimensionRestrictions.prototype.dimensionName = "DIMENSION_NAME";
$.ig.DimensionRestrictions.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.DimensionRestrictions.prototype.cubeSource = "CUBE_SOURCE";
$.ig.DimensionRestrictions.prototype.dimensionVisibility = "DIMENSION_VISIBILITY";
$.ig.HierarchyRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.HierarchyRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.HierarchyRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.HierarchyRestrictions.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.HierarchyRestrictions.prototype.hierarchyName = "HIERARCHY_NAME";
$.ig.HierarchyRestrictions.prototype.hierarchyUniqueName = "HIERARCHY_UNIQUE_NAME";
$.ig.HierarchyRestrictions.prototype.hierarchyOrigin = "HIERARCHY_ORIGIN";
$.ig.HierarchyRestrictions.prototype.cubeSource = "CUBE_SOURCE";
$.ig.HierarchyRestrictions.prototype.hierarchyVisibility = "HIERARCHY_VISIBILITY";
$.ig.LevelRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.LevelRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.LevelRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.LevelRestrictions.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.LevelRestrictions.prototype.hierarchyUniqueName = "HIERARCHY_UNIQUE_NAME";
$.ig.LevelRestrictions.prototype.levelName = "LEVEL_NAME";
$.ig.LevelRestrictions.prototype.levelUniqueName = "LEVEL_UNIQUE_NAME";
$.ig.LevelRestrictions.prototype.levelOrigin = "LEVEL_ORIGIN";
$.ig.LevelRestrictions.prototype.cubeSource = "CUBE_SOURCE";
$.ig.LevelRestrictions.prototype.levelVisibility = "LEVEL_VISIBILITY";
$.ig.MeasureRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.MeasureRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.MeasureRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.MeasureRestrictions.prototype.measureName = "MEASURE_NAME";
$.ig.MeasureRestrictions.prototype.measureUniqueName = "MEASURE_UNIQUE_NAME";
$.ig.MeasureRestrictions.prototype.measureGroupName = "MEASUREGROUP_NAME";
$.ig.MeasureRestrictions.prototype.cubeSource = "CUBE_SOURCE";
$.ig.MeasureRestrictions.prototype.measureVisibility = "MEASURE_VISIBILITY";
$.ig.MeasureGroupRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.MeasureGroupRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.MeasureGroupRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.MeasureGroupRestrictions.prototype.measureGroupName = "MEASUREGROUP_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.measureGroupName = "MEASUREGROUP_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.MeasureGroupDimensionRestrictions.prototype.dimensionVisibility = "DIMENSION_VISIBILITY";
$.ig.MemberRestrictions.prototype.catalogName = "CATALOG_NAME";
$.ig.MemberRestrictions.prototype.schemaName = "SCHEMA_NAME";
$.ig.MemberRestrictions.prototype.cubeName = "CUBE_NAME";
$.ig.MemberRestrictions.prototype.dimensionUniqueName = "DIMENSION_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.hierarchyUniqueName = "HIERARCHY_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.levelUniqueName = "LEVEL_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.levelNumber = "LEVEL_NUMBER";
$.ig.MemberRestrictions.prototype.memberName = "MEMBER_NAME";
$.ig.MemberRestrictions.prototype.memberUniqueName = "MEMBER_UNIQUE_NAME";
$.ig.MemberRestrictions.prototype.memberType = "MEMBER_TYPE";
$.ig.MemberRestrictions.prototype.treeOp = "TREE_OP";
$.ig.MemberRestrictions.prototype.cubeSource = "CUBE_SOURCE";
$.ig.XmlaConstants.prototype.schemaCatalogsStringConstant = "DBSCHEMA_CATALOGS";
$.ig.XmlaConstants.prototype.schemaCubesStringConstant = "MDSCHEMA_CUBES";
$.ig.XmlaConstants.prototype.restrictionListStringConstant = "RestrictionList";
$.ig.XmlaConstants.prototype.propertyListStringConstant = "PropertyList";
$.ig.XmlaConstants.prototype.dataSourceInfoStringConstant = "DataSourceInfo";
$.ig.XmlaConstants.prototype.catalogPropertyNameStringConstant = "Catalog";
$.ig.XmlaConstants.prototype.schemaNameStringConstant = "SCHEMA_NAME";
$.ig.XmlaConstants.prototype.rowStringConstant = "row";
$.ig.XmlaConstants.prototype.descriptionStringConstant = "DESCRIPTION";
$.ig.XmlaConstants.prototype.cubeStringConstant = "CUBE";
$.ig.XmlaConstants.prototype.dimensionStringConstant = "DIMENSION";
$.ig.XmlaConstants.prototype.schemaDimensionsStringConstant = "MDSCHEMA_DIMENSIONS";
$.ig.XmlaConstants.prototype.schemaMeasureGroupsStringConstant = "MDSCHEMA_MEASUREGROUPS";
$.ig.XmlaConstants.prototype.measureGroupNameStringConstant = "MEASUREGROUP_NAME";
$.ig.XmlaConstants.prototype.measureGroupCaptionStringConstant = "MEASUREGROUP_CAPTION";
$.ig.XmlaConstants.prototype.schemaMeasureGroupDimensionsStringConstant = "MDSCHEMA_MEASUREGROUP_DIMENSIONS";
$.ig.XmlaConstants.prototype.dimensionNameStringConstant = "DIMENSION_NAME";
$.ig.XmlaConstants.prototype.dimensionUniqueNameStringConstant = "DIMENSION_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.dimensionCaptionStringConstant = "DIMENSION_CAPTION";
$.ig.XmlaConstants.prototype.schemaMeasuresStringConstant = "MDSCHEMA_MEASURES";
$.ig.XmlaConstants.prototype.measureNameStringConstant = "MEASURE_NAME";
$.ig.XmlaConstants.prototype.measureUniqueNameStringConstant = "MEASURE_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.measureCaptionStringConstant = "MEASURE_CAPTION";
$.ig.XmlaConstants.prototype.measureAggregatorStringConstant = "MEASURE_AGGREGATOR";
$.ig.XmlaConstants.prototype.dimensionTypeStringConstant = "DIMENSION_TYPE";
$.ig.XmlaConstants.prototype.schemaHierarchiesStringConstant = "MDSCHEMA_HIERARCHIES";
$.ig.XmlaConstants.prototype.hierarchyNameStringConstant = "HIERARCHY_NAME";
$.ig.XmlaConstants.prototype.hierarchyUniqueNameStringConstant = "HIERARCHY_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.hierarchyCaptionStringConstant = "HIERARCHY_CAPTION";
$.ig.XmlaConstants.prototype.hierarchyOriginStringConstant = "HIERARCHY_ORIGIN";
$.ig.XmlaConstants.prototype.defaultMemberStringConstant = "DEFAULT_MEMBER";
$.ig.XmlaConstants.prototype.allMemberStringConstant = "ALL_MEMBER";
$.ig.XmlaConstants.prototype.levelNameStringConstant = "LEVEL_NAME";
$.ig.XmlaConstants.prototype.levelCaptionStringConstant = "LEVEL_CAPTION";
$.ig.XmlaConstants.prototype.levelUniqueNameStringConstant = "LEVEL_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.levelNumberStringConstant = "LEVEL_NUMBER";
$.ig.XmlaConstants.prototype.levelCardinalityStringConstant = "LEVEL_CARDINALITY";
$.ig.XmlaConstants.prototype.schemaLevelsStringConstant = "MDSCHEMA_LEVELS";
$.ig.XmlaConstants.prototype.schemaMembersStringConstant = "MDSCHEMA_MEMBERS";
$.ig.XmlaConstants.prototype.treeOpStringConstant = "TREE_OP";
$.ig.XmlaConstants.prototype.memberNameStringConstant = "MEMBER_NAME";
$.ig.XmlaConstants.prototype.memberUniqueNameStringConstant = "MEMBER_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.memberCaptionStringConstant = "MEMBER_CAPTION";
$.ig.XmlaConstants.prototype.parentUniqueNameStringConstant = "PARENT_UNIQUE_NAME";
$.ig.XmlaConstants.prototype.childrenCardinalityStringConstant = "CHILDREN_CARDINALITY";
$.ig.XmlaConstants.prototype.defaultFormatStringConstant = "DEFAULT_FORMAT_STRING";
$.ig.XmlaConstants.prototype.hierarchyDisplayFolderStringConstant = "HIERARCHY_DISPLAY_FOLDER";
$.ig.XmlaConstants.prototype.scopeStringConstant = "SCOPE";
$.ig.XmlaSoapMethodResult.prototype.returnPropertyName = "return";
$.ig.XmlaNamespace.prototype.sql = "urn:schemas-microsoft-com:xml-sql";
$.ig.XmlaNamespace.prototype.analysis = "urn:schemas-microsoft-com:xml-analysis";
$.ig.XmlaNamespace.prototype.mdDataset = "urn:schemas-microsoft-com:xml-analysis:mddataset";
$.ig.XmlaNamespace.prototype.rowset = "urn:schemas-microsoft-com:xml-analysis:rowset";
$.ig.XmlaNamespace.prototype.empty = "urn:schemas-microsoft-com:xml-analysis:empty";
$.ig.XmlaNamespace.prototype.exception = "urn:schemas-microsoft-com:xml-analysis:exception";
$.ig.XmlaSoapMessageBuilder.prototype.envelopeConstant = "Envelope";
$.ig.XmlaSoapMessageBuilder.prototype.headerConstant = "Header";
$.ig.XmlaSoapMessageBuilder.prototype.bodyConstant = "Body";
$.ig.XmlaSoapMessageBuilder.prototype.soapPrefixConstant = "soap";
$.ig.XmlaSoapMessageBuilder.prototype.xmlnsEnvelope = "http://schemas.xmlsoap.org/soap/envelope/";
$.ig.XmlaSoapMethod.prototype.propertiesConstant = "Properties";
$.ig.XmlaSoapMethod.prototype.propertyListConstant = "PropertyList";
$.ig.XmlaSoapMethodDiscover.prototype.methodName = "Discover";
$.ig.XmlaSoapMethodDiscover.prototype.requestTypeConstant = "RequestType";
$.ig.XmlaSoapMethodDiscover.prototype.restrictionsConstant = "Restrictions";
$.ig.XmlaSoapMethodDiscover.prototype.restrictionListConstant = "RestrictionList";
$.ig.XmlaSoapMethodDiscover.prototype.sessionIdConstant = "SessionId";
$.ig.XmlaSoapMethodExecute.prototype.methodName = "Execute";
$.ig.XmlaSoapMethodExecute.prototype.commandConstant = "Command";
$.ig.XmlaSoapMethodExecute.prototype.statementConstant = "Statement";
$.ig.ArrayJsonSerializer.prototype._instance = new $.ig.ArrayJsonSerializer();
$.ig.AxisJsonTypeSeriazlier.prototype._instance = new $.ig.AxisJsonTypeSeriazlier();
$.ig.AxisMemberJsonTypeSeriazlier.prototype._instance = new $.ig.AxisMemberJsonTypeSeriazlier();
$.ig.CatalogJsonTypeSeriazlier.prototype._instance = new $.ig.CatalogJsonTypeSeriazlier();
$.ig.CellJsonTypeSeriazlier.prototype._instance = new $.ig.CellJsonTypeSeriazlier();
$.ig.CubeJsonTypeSeriazlier.prototype._instance = new $.ig.CubeJsonTypeSeriazlier();
$.ig.DimensionJsonTypeSeriazlier.prototype._instance = new $.ig.DimensionJsonTypeSeriazlier();
$.ig.HierarchyJsonTypeSeriazlier.prototype._instance = new $.ig.HierarchyJsonTypeSeriazlier();
$.ig.LevelJsonTypeSeriazlier.prototype._instance = new $.ig.LevelJsonTypeSeriazlier();
$.ig.MeasureGroupDimensionJsonTypeSeriazlier.prototype._instance = new $.ig.MeasureGroupDimensionJsonTypeSeriazlier();
$.ig.MeasureGroupJsonTypeSeriazlier.prototype._instance = new $.ig.MeasureGroupJsonTypeSeriazlier();
$.ig.MeasureJsonTypeSeriazlier.prototype._instance = new $.ig.MeasureJsonTypeSeriazlier();
$.ig.MemberJsonTypeSeriazlier.prototype._instance = new $.ig.MemberJsonTypeSeriazlier();
$.ig.RemoteXmlaRequestJsonTypeSeriazlier.prototype._instance = new $.ig.RemoteXmlaRequestJsonTypeSeriazlier();
$.ig.ResultJsonTypeSeriazlier.prototype._instance = new $.ig.ResultJsonTypeSeriazlier();
$.ig.TupleJsonTypeSeriazlier.prototype._instance = new $.ig.TupleJsonTypeSeriazlier();
$.ig.XmlaDiscoverProperties.prototype.catalog = "Catalog";
$.ig.util.extCopy($.ig.TaskExtensions, [
    [
        [$.ig.Task],
        ["continueWithTask$1"]
    ],
    [
        [$.ig.Task$1],
        ["continueWithTask$21"]
    ]
]);
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.XmlaPropertiesCollection],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.XmlaPropertiesCollection],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.XmlaPropertiesCollection],
        ["asQueryable"]
    ]
]);
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