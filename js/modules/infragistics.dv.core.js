﻿/*
 * Infragistics.Web.ClientUI infragistics.dv.core.js 12.2.20122.1021
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
$.ig.util.defType("Visibility", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("Visibility", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PenLineCap", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("PenLineCap", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SweepDirection", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("SweepDirection", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PathSegmentType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("PathSegmentType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("GeometryType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("GeometryType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ModifierKeys", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ModifierKeys", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Key", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("Key", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("NotifyCollectionChangedAction", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("NotifyCollectionChangedAction", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AbstractEnumerable", "Object", {a: null, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = b
}, getEnumerator: function () {
    return new $.ig.AbstractEnumerator(this.a().getEnumerator())
}, $type: new $.ig.Type("AbstractEnumerable", $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])}, true);
$.ig.util.defType("AbstractEnumerator", "Object", {a: null, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = b
}, current: function () {
    return this.a.current()
}, moveNext: function () {
    return this.a.moveNext()
}, reset: function () {
    this.a.reset()
}, $type: new $.ig.Type("AbstractEnumerator", $.ig.Object.prototype.$type, [$.ig.IEnumerator.prototype.$type])}, true);
$.ig.util.defType("IEnumerable$1", "Object", {$type: new $.ig.Type("IEnumerable$1", null, [$.ig.IEnumerable.prototype.$type])}, true);
$.ig.util.defType("ICollection$1", "Object", {$type: new $.ig.Type("ICollection$1", null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])}, true);
$.ig.util.defType("IList$1", "Object", {$type: new $.ig.Type("IList$1", null, [$.ig.ICollection$1.prototype.$type.specialize(0), $.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])}, true);
$.ig.util.defType("IArrayList", "Object", {$type: new $.ig.Type("IArrayList", null)}, true);
$.ig.util.defType("List$1", "Object", {$t: null, __inner: null, init: function (a, b) {
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
}, init1: function (d, h, e) {
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
}, init2: function (b, d, c) {
    this.a = {};
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.__inner = new $.ig.Array()
}, i: function (c, d) {
    this.__inner[c] = d
}, j: function (c, d) {
    this.__inner.insert(c, d)
}, k: function (b) {
    this.__inner.add(b)
}, l: function (b) {
    this.__inner.removeAt(b)
}, m: function () {
    this.__inner.clear()
}, item: function (d, c) {
    if (arguments.length === 2) {
        this.i(d, c);
        return c
    } else {
        return this.__inner[d]
    }
}, indexOf: function (b) {
    return this.__inner.indexOf(b)
}, insert: function (c, d) {
    this.j(c, d)
}, removeAt: function (b) {
    this.l(b)
}, count: function () {
    return this.__inner.length
}, isReadOnly: function () {
    return false
}, add: function (b) {
    this.k(b)
}, clear: function () {
    this.m()
}, contains: function (b) {
    return this.__inner.contains(b)
}, copyTo: function (d, e) {
    for (var f = 0; f < this.__inner.length; f++) {
        d[e + f] = this.__inner[f]
    }
}, remove: function (c) {
    var d = this.indexOf(c);
    if (d < 0) {
        return false
    }
    this.l(d);
    return true
}, getEnumerator: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerator$1(this.$t, a())
}, asArrayList: function () {
    return this.__inner
}, n: function (g, j) {
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
}, o: function (f, g) {
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
}, p: function (f, g) {
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
}, q: function (c, d) {
    this.__inner.splice(c, d)
}, copyTo1: function (c, d) {
    this.__inner.copyTo(c, d)
}, isFixedSize: function () {
    return false
}, add1: function (a) {
    this.k(a);
    return this.__inner.length - 1
}, contains1: function (a) {
    return this.__inner.contains(a)
}, indexOf1: function (a) {
    return this.__inner.indexOf(a)
}, insert1: function (a, b) {
    this.j(a, b)
}, remove1: function (a) {
    var b = this.indexOf1(a);
    this.l(b)
}, r: function () {
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
                        return(c).compareTo(d)
                    }
                }
            }
        }
    }
    this.s(b)
}, s: function (a) {
    this.__inner.sort(a)
}, t: function (b) {
    var a = this;
    this.__inner.sort(function (c, d) {
        var e = c;
        var f = d;
        return b(e, f)
    })
}, _h: null, h: function (a) {
    if (arguments.length === 1) {
        this._h = a;
        return a
    } else {
        return this._h
    }
}, w: function (a) {
    var c = a.getEnumerator();
    while (c.moveNext()) {
        var b = c.current();
        this.__inner.add(b)
    }
}, x: function () {
    return this.__inner.slice(0)
}, y: function (a) {
}, isSynchronized: function () {
    return true
}, a: null, syncRoot: function () {
    return this.a
}, $type: new $.ig.Type("List$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IArrayList.prototype.$type, $.ig.IList.prototype.$type])}, true);
$.ig.util.defType("Dictionary$2", "Object", {$tKey: null, $tValue: null, __inner: null, __keys: null, init: function (a, b, c) {
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
}, init1: function (b, c, e, d) {
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
}, a: null, init2: function (b, c, e, d) {
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
}, count: function () {
    return this.__inner.count()
}, item: function (d, c) {
    if (arguments.length === 2) {
        this.__inner.item(this.f(d), c);
        this.__keys.item(this.f(d), d);
        return c
    } else {
        return this.__inner.item(this.f(d))
    }
}, c: function () {
    return this.__inner.length()
}, containsKey: function (b) {
    return this.__inner.containsKey(this.f(b))
}, remove: function (c) {
    var d = this.f(c);
    if (!this.__keys.containsKey(d)) {
        return false
    }
    this.__inner.remove(d);
    this.__keys.remove(d);
    return true
}, clear: function () {
    this.__inner.clear();
    this.__keys.clear()
}, _useToString: null, b: null, _needsEnsure: null, e: function (a) {
    if (!this.b) {
        this.b = true;
        this._needsEnsure = (typeof a == "object");
        if (!this._needsEnsure) {
            this._useToString = !a.getHashCode
        }
    }
}, f: function (a) {
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
}, add: function (c, d) {
    this.__inner.item(this.f(c), d);
    this.__keys.item(this.f(c), c)
}, tryGetValue: function (c, d) {
    if (!this.__inner.containsKey(this.f(c))) {
        d = null;
        return{ret: false, value: d}
    }
    d = this.__inner.item(this.f(c));
    return{ret: true, value: d};
    return{value: d}
}, keys: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(this.$tKey, a)
}, values: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(this.$tValue, a)
}, isReadOnly: function () {
    return false
}, add1: function (b) {
    this.add(b.c(), b.d())
}, contains: function (b) {
    return this.containsKey(b.c())
}, g: function (c, d) {
    throw new $.ig.NotImplementedException()
}, remove1: function (b) {
    this.remove(b.c());
    return true
}, h: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.KeyValuePair$2.prototype.$type.specialize(this.$tKey, this.$tValue), a)
}, getEnumerator: function () {
    return this.h().getEnumerator()
}, $type: new $.ig.Type("Dictionary$2", $.ig.Object.prototype.$type, [$.ig.IDictionary$2.prototype.$type.specialize(0, 1), $.ig.IDictionary.prototype.$type])}, true);
$.ig.util.defType("GenericEnumerable$1", "Object", {$t: null, a: null, init: function (b, c) {
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = c
}, getEnumerator: function () {
    return new $.ig.GenericEnumerator$1(this.$t, this.a().getEnumerator())
}, $type: new $.ig.Type("GenericEnumerable$1", $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])}, true);
$.ig.util.defType("IEnumerator$1", "Object", {$type: new $.ig.Type("IEnumerator$1", null, [$.ig.IEnumerator.prototype.$type])}, true);
$.ig.util.defType("GenericEnumerator$1", "Object", {$t: null, a: null, init: function (b, c) {
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = c
}, current: function () {
    return this.a.current()
}, moveNext: function () {
    return this.a.moveNext()
}, reset: function () {
    this.a.reset()
}, $type: new $.ig.Type("GenericEnumerator$1", $.ig.Object.prototype.$type, [$.ig.IEnumerator$1.prototype.$type.specialize(0)])}, true);
$.ig.util.defType("NotifyCollectionChangedEventArgs", "EventArgs", {init: function (c, b) {
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
}, init1: function (h, e, f, g) {
    var d = this;
    $.ig.EventArgs.prototype.init.call(this);
    this.a = e;
    this.d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
    if (this.a == $.ig.NotifyCollectionChangedAction.prototype.remove || this.a == $.ig.NotifyCollectionChangedAction.prototype.replace) {
        this.d.add(f);
        this.e = g
    }
    if (this.a != $.ig.NotifyCollectionChangedAction.prototype.remove) {
        this.b = (function () {
            var a = new $.ig.List$1($.ig.Object.prototype.$type, 0);
            a.add(f);
            return a
        }())
    } else {
        this.b = new $.ig.List$1($.ig.Object.prototype.$type, 0)
    }
    this.c = g
}, init2: function (j, f, g, h, i) {
    var e = this;
    $.ig.EventArgs.prototype.init.call(this);
    this.a = f;
    this.b = (function () {
        var a = new $.ig.List$1($.ig.Object.prototype.$type, 0);
        a.add(g);
        return a
    }());
    this.c = i;
    this.d = (function () {
        var a = new $.ig.List$1($.ig.Object.prototype.$type, 0);
        a.add(h);
        return a
    }());
    this.e = i
}, a: null, action: function () {
    return this.a
}, b: null, newItems: function () {
    return this.b
}, c: null, newStartingIndex: function () {
    return this.c
}, d: null, oldItems: function () {
    return this.d
}, e: null, oldStartingIndex: function () {
    return this.e
}, $type: new $.ig.Type("NotifyCollectionChangedEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("KeyValuePair$2", "ValueType", {$tKey: null, $tValue: null, a: null, b: null, init: function (c, d, e, f) {
    this.$tKey = c;
    this.$tValue = d;
    this.$type = this.$type.specialize(this.$tKey, this.$tValue);
    $.ig.ValueType.prototype.init.call(this);
    this.a = e;
    this.b = f
}, c: function () {
    return this.a
}, d: function () {
    return this.b
}, $type: new $.ig.Type("KeyValuePair$2", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ObservableCollection$1", "List$1", {$t: null, init: function (a, b) {
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
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.List$1.prototype.init.call(this, this.$t)
}, init1: function (b, d, c) {
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.List$1.prototype.init1.call(this, this.$t, 1, c)
}, init2: function (b, d, c) {
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.List$1.prototype.init2.call(this, this.$t, 2, c)
}, i: function (e, f) {
    var g = this.__inner[e];
    $.ig.List$1.prototype.i.call(this, e, f);
    if (this.propertyChanged != null) {
        this.ag(new $.ig.PropertyChangedEventArgs("Item[]"))
    }
    if (this.collectionChanged != null) {
        var h = new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, f, g, e);
        this.ah(h)
    }
}, m: function () {
    $.ig.List$1.prototype.m.call(this);
    if (this.propertyChanged != null) {
        this.ag(new $.ig.PropertyChangedEventArgs("Count"));
        this.ag(new $.ig.PropertyChangedEventArgs("Item[]"))
    }
    if (this.collectionChanged != null) {
        var b = new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset);
        this.ah(b)
    }
}, j: function (d, e) {
    $.ig.List$1.prototype.j.call(this, d, e);
    if (this.propertyChanged != null) {
        this.ag(new $.ig.PropertyChangedEventArgs("Count"));
        this.ag(new $.ig.PropertyChangedEventArgs("Item[]"))
    }
    if (this.collectionChanged != null) {
        var f = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, e, d);
        this.ah(f)
    }
}, k: function (c) {
    $.ig.List$1.prototype.k.call(this, c);
    if (this.propertyChanged != null) {
        this.ag(new $.ig.PropertyChangedEventArgs("Count"));
        this.ag(new $.ig.PropertyChangedEventArgs("Item[]"))
    }
    if (this.collectionChanged != null) {
        var d = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, c, this.count() - 1);
        this.ah(d)
    }
}, l: function (d) {
    var e = this.__inner[d];
    $.ig.List$1.prototype.l.call(this, d);
    if (this.propertyChanged != null) {
        this.ag(new $.ig.PropertyChangedEventArgs("Count"));
        this.ag(new $.ig.PropertyChangedEventArgs("Item[]"))
    }
    if (this.collectionChanged != null) {
        var f = new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, e, d);
        this.ah(f)
    }
}, collectionChanged: null, propertyChanged: null, ag: function (b) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, b)
    }
}, ah: function (b) {
    if (this.collectionChanged != null) {
        this.collectionChanged(this, b)
    }
}, $type: new $.ig.Type("ObservableCollection$1", $.ig.List$1.prototype.$type.specialize(0), [$.ig.INotifyCollectionChanged.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("ReadOnlyCollection$1", "Object", {$t: null, init: function (a, b) {
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
}, init1: function (b, d, c) {
    this.b = {};
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = c
}, a: null, item: function (d, c) {
    if (arguments.length === 2) {
        this.a.item(d, c);
        return c
    } else {
        return this.a.item(d)
    }
}, indexOf: function (b) {
    return this.a.indexOf(b)
}, insert: function (c, d) {
}, removeAt: function (b) {
}, count: function () {
    return this.a.count()
}, isReadOnly: function () {
    return true
}, add: function (b) {
}, clear: function () {
}, contains: function (b) {
    return this.a.contains(b)
}, copyTo: function (c, d) {
    this.a.copyTo(c, d)
}, remove: function (b) {
    return false
}, getEnumerator: function () {
    return this.a.getEnumerator()
}, isFixedSize: function () {
    return true
}, add1: function (a) {
    return -1
}, contains1: function (a) {
    return this.a.contains(a)
}, indexOf1: function (a) {
    return this.a.indexOf(a)
}, insert1: function (a, b) {
}, remove1: function (a) {
}, copyTo1: function (a, b) {
    this.a.copyTo(a, b)
}, c: function () {
    return this.a
}, isSynchronized: function () {
    return true
}, b: null, syncRoot: function () {
    return this.b
}, $type: new $.ig.Type("ReadOnlyCollection$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IList.prototype.$type])}, true);
$.ig.util.defType("IOrderedEnumerable$1", "Object", {$type: new $.ig.Type("IOrderedEnumerable$1", null, [$.ig.IEnumerable$1.prototype.$type.specialize(0), $.ig.IEnumerable.prototype.$type])}, true);
$.ig.util.defType("Enumerable", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, where$1: function (d, e) {
    var c = this;
    var a = function () {
        return function (f, g) {
            return{$state: 0, $this: c, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(d, e)
    };
    return new $.ig.GenericEnumerable$1(d, a)
}, where$11111: function (d, e) {
    var c = this;
    var a = function () {
        return function (f, g) {
            return{$state: 0, $this: c, $current: null, $c: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(d, e)
    };
    return new $.ig.GenericEnumerable$1(d, a)
}, select$2: function (e, d, f) {
    var c = this;
    var a = function () {
        return function (h, g, i) {
            return{$state: 0, $this: c, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(e, d, f)
    };
    return new $.ig.GenericEnumerable$1(d, a)
}, selectMany$2: function (e, d, f) {
    var c = this;
    var a = function () {
        return function (h, g, i) {
            return{$state: 0, $this: c, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(e, d, f)
    };
    return new $.ig.GenericEnumerable$1(d, a)
}, ofType$1: function (c) {
    var b = this;
    var a = function () {
        return function (d) {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(c)
    };
    return new $.ig.GenericEnumerable$1(c, a)
}, last$1: function (a) {
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
}, first$1: function (a) {
    var e = this.getEnumerator();
    while (e.moveNext()) {
        var d = e.current();
        return d
    }
    return null
}, firstOrDefault$1: function (a) {
    var e = this.getEnumerator();
    while (e.moveNext()) {
        var d = e.current();
        return d
    }
    return null
}, orderBy$2: function (e, d, f) {
    var a = this;
    var g = new $.ig.SortedList$1(e, this);
    g.t(function (b, c) {
        var j = b;
        var k = c;
        var l = f(j);
        var m = f(k);
        if ($.ig.util.cast($.ig.IComparable.prototype.$type, l) !== null) {
            return($.ig.util.cast($.ig.IComparable.prototype.$type, l)).compareTo(m)
        } else {
            return l.toString().compareTo(m.toString())
        }
    });
    return g
}, toList$1: function (a) {
    var c = new $.ig.List$1(a, 1, this);
    return c
}, a: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1($.ig.Number.prototype.$type, c)
}, concat$1: function (d, e) {
    var c = this;
    var a = function () {
        return function (f, g) {
            return{$state: 0, $this: c, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(d, e)
    };
    return new $.ig.GenericEnumerable$1(d, a)
}, max: function () {
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
}, max$111: function (a, c) {
    return this.select$2(a, $.ig.Number.prototype.$type, c).max()
}, min: function () {
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
}, min$111: function (a, c) {
    return this.select$2(a, $.ig.Number.prototype.$type, c).max()
}, count$1: function (a) {
    var e = 0;
    var g = this.getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        e++
    }
    return e
}, reverse$1: function (c) {
    var b = this;
    var a = function () {
        return function (d) {
            return{$state: 0, $this: b, $current: null, $b: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(c)
    };
    return new $.ig.GenericEnumerable$1(c, a)
}, cast$1: function (a) {
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
}, take$1: function (d, e) {
    var c = this;
    var a = function () {
        return function (f, g) {
            return{$state: 0, $this: c, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(d, e)
    };
    return new $.ig.GenericEnumerable$1(d, a)
}, skip$1: function (d, e) {
    var c = this;
    var a = function () {
        return function (f, g) {
            return{$state: 0, $this: c, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
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
            }}
        }(d, e)
    };
    return new $.ig.GenericEnumerable$1(d, a)
}, any$1: function (a) {
    var e = this.getEnumerator();
    while (e.moveNext()) {
        var d = e.current();
        return true
    }
    return false
}, contains$1: function (a, e) {
    var c = this.getEnumerator();
    while (c.moveNext()) {
        var d = c.current();
        if (d === e) {
            return true
        }
    }
    return false
}, union$1: function (a, c) {
    return null
}, toArray$1: function (a) {
    var c = new $.ig.List$1(a, 1, this);
    return c.asArrayList()
}, elementAt$1: function (a, d) {
    var e = $.ig.util.cast($.ig.IList$1.prototype.$type.specialize(a), this);
    if (e != null) {
        return e.item(d)
    }
    return this.skip$1(a, d).first$1(a)
}, $type: new $.ig.Type("Enumerable", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SortedList$1", "List$1", {$tElement: null, init: function (b, c) {
    this.$tElement = b;
    this.$type = this.$type.specialize(this.$tElement);
    $.ig.List$1.prototype.init1.call(this, this.$tElement, 1, c)
}, getEnumerator: function () {
    return $.ig.List$1.prototype.getEnumerator.call(this)
}, $type: new $.ig.Type("SortedList$1", $.ig.List$1.prototype.$type.specialize(0), [$.ig.IOrderedEnumerable$1.prototype.$type.specialize(0)])}, true);
$.ig.util.defType("IArray", "Object", {$type: new $.ig.Type("IArray", null)}, true);
$.ig.util.defType("DependencyObject", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this._localValues = new $.ig.Dictionary(0);
    this.a = new $.ig.Dictionary(0)
}, _localValues: null, a: null, b: function (b) {
    if (this._localValues.containsKey(b.name())) {
        return this._localValues.item(b.name())
    }
    return b.f().c()
}, c: function (c, b) {
    if (c.e()) {
        var e = null;
        var d = this._localValues.proxy[c.__name];
        if (typeof d != "undefined") {
            e = d
        }
        this._localValues.item(c.__name, b);
        c.f().d()(this, new $.ig.DependencyPropertyChangedEventArgs(c, b, e))
    } else {
        this._localValues.item(c.__name, b)
    }
}, d: function (c, d) {
    if (c == null) {
        return
    }
    this.a.item(c.name(), d)
}, $type: new $.ig.Type("DependencyObject", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DependencyProperty", "Object", {__name: null, a: null, b: null, d: null, e: function () {
    return this.d
}, init: function (d, e, f) {
    this.d = false;
    $.ig.Object.prototype.init.call(this);
    this.__name = d;
    this.a = e;
    this.b = f;
    if (this.b != null && this.b.d() != null) {
        this.d = true
    } else {
        this.d = false
    }
}, f: function () {
    return this.b
}, g: function () {
    return this.a
}, name: function () {
    return this.__name
}, l: function (e, f, g, h) {
    return $.ig.DependencyPropertiesCollection.prototype.c().f(e, f, g, h)
}, m: function (d, e) {
    if (e == null) {
        return null
    }
    var f = $.ig.DependencyPropertiesCollection.prototype.c().e(e.typeName() + d);
    if (f != null) {
        return f
    }
    return $.ig.DependencyProperty.prototype.m(d, e.a())
}, $type: new $.ig.Type("DependencyProperty", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ArgumentException", "Error", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.Error.prototype.init1.call(this, 1, b + " is invalid.")
}, init1: function (e, c, d) {
    $.ig.Error.prototype.init1.call(this, 1, c)
}, $type: new $.ig.Type("ArgumentException", $.ig.Error.prototype.$type)}, true);
$.ig.util.defType("ArgumentNullException", "Error", {init: function (b) {
    $.ig.Error.prototype.init1.call(this, 1, b + " cannot be null.")
}, $type: new $.ig.Type("ArgumentNullException", $.ig.Error.prototype.$type)}, true);
$.ig.util.defType("Debug", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (c, d) {
}, b: function (b) {
}, c: function (b) {
}, $type: new $.ig.Type("Debug", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("NotImplementedException", "Error", {init: function () {
    $.ig.Error.prototype.init1.call(this, 1, "not implemented")
}, $type: new $.ig.Type("NotImplementedException", $.ig.Error.prototype.$type)}, true);
$.ig.util.defType("Random", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function () {
    return Math.random()
}, b: function (b) {
    return Math.round(this.a() * (b - 1))
}, c: function (c, d) {
    return c + Math.round(this.a() * ((d - c) - 1))
}, $type: new $.ig.Type("Random", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Tuple$2", "Object", {$t1: null, $t2: null, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, init: function (c, d, e, f) {
    this.$t1 = c;
    this.$t2 = d;
    this.$type = this.$type.specialize(this.$t1, this.$t2);
    $.ig.Object.prototype.init.call(this);
    this.c(e);
    this.d(f)
}, $type: new $.ig.Type("Tuple$2", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("UIElement", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, $type: new $.ig.Type("UIElement", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("UIElementCollection", "ObservableCollection$1", {ai: null, init: function (b) {
    $.ig.ObservableCollection$1.prototype.init.call(this, $.ig.UIElement.prototype.$type);
    this.ai = b
}, ah: function (f) {
    $.ig.ObservableCollection$1.prototype.ah.call(this, f);
    var h = f.oldItems().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        (g).aa(null)
    }
    var j = f.newItems().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        (i).aa(this.ai)
    }
}, m: function () {
    var d = this.getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        (c).aa(null)
    }
    $.ig.ObservableCollection$1.prototype.m.call(this)
}, $type: new $.ig.Type("UIElementCollection", $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.UIElement.prototype.$type))}, true);
$.ig.util.defType("FrameworkElement", "UIElement", {init: function () {
    this.__opacity = 1;
    $.ig.UIElement.prototype.init.call(this);
    this.__opacity = 1;
    this.z(0);
    this.__visibility = $.ig.Visibility.prototype.visible;
    this.v(NaN);
    this.w(NaN)
}, _name: null, name: function (b) {
    if (arguments.length === 1) {
        this._name = b;
        return b
    } else {
        return this._name
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, _u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, __visibility: null, visibility: function (b) {
    if (arguments.length === 1) {
        this.__visibility = b;
        return b
    } else {
        return this.__visibility
    }
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, _y: null, y: function (b) {
    if (arguments.length === 1) {
        this._y = b;
        return b
    } else {
        return this._y
    }
}, _z: null, z: function (b) {
    if (arguments.length === 1) {
        this._z = b;
        return b
    } else {
        return this._z
    }
}, _aa: null, aa: function (b) {
    if (arguments.length === 1) {
        this._aa = b;
        return b
    } else {
        return this._aa
    }
}, _dataContext: null, dataContext: function (b) {
    if (arguments.length === 1) {
        this._dataContext = b;
        return b
    } else {
        return this._dataContext
    }
}, __opacity: null, opacity: function (b) {
    if (arguments.length === 1) {
        this.__opacity = b;
        return b
    } else {
        return this.__opacity
    }
}, _ab: null, ab: function (b) {
    if (arguments.length === 1) {
        this._ab = b;
        return b
    } else {
        return this._ab
    }
}, $type: new $.ig.Type("FrameworkElement", $.ig.UIElement.prototype.$type)}, true);
$.ig.util.defType("Control", "FrameworkElement", {init: function () {
    $.ig.FrameworkElement.prototype.init.call(this)
}, _a3: null, a3: function (b) {
    if (arguments.length === 1) {
        this._a3 = b;
        return b
    } else {
        return this._a3
    }
}, a6: function () {
}, $type: new $.ig.Type("Control", $.ig.FrameworkElement.prototype.$type)}, true);
$.ig.util.defType("ContentControl", "Control", {init: function () {
    $.ig.Control.prototype.init.call(this)
}, _a9: null, a9: function (b) {
    if (arguments.length === 1) {
        this._a9 = b;
        return b
    } else {
        return this._a9
    }
}, _ba: null, ba: function (b) {
    if (arguments.length === 1) {
        this._ba = b;
        return b
    } else {
        return this._ba
    }
}, $type: new $.ig.Type("ContentControl", $.ig.Control.prototype.$type)}, true);
$.ig.util.defType("Panel", "FrameworkElement", {init: function () {
    $.ig.FrameworkElement.prototype.init.call(this);
    this.a3(new $.ig.UIElementCollection(this))
}, _a3: null, a3: function (b) {
    if (arguments.length === 1) {
        this._a3 = b;
        return b
    } else {
        return this._a3
    }
}, $type: new $.ig.Type("Panel", $.ig.FrameworkElement.prototype.$type)}, true);
$.ig.util.defType("Canvas", "Panel", {init: function () {
    $.ig.Panel.prototype.init.call(this)
}, $type: new $.ig.Type("Canvas", $.ig.Panel.prototype.$type)}, true);
$.ig.util.defType("TextBlock", "FrameworkElement", {init: function () {
    $.ig.FrameworkElement.prototype.init.call(this)
}, a2: null, a5: function (b) {
    if (arguments.length === 1) {
        if (this.a2 != b) {
            this.a2 = b;
            this.a7(-1)
        }
        return b
    } else {
        return this.a2
    }
}, _a6: null, a6: function (b) {
    if (arguments.length === 1) {
        this._a6 = b;
        return b
    } else {
        return this._a6
    }
}, _a7: null, a7: function (b) {
    if (arguments.length === 1) {
        this._a7 = b;
        return b
    } else {
        return this._a7
    }
}, $type: new $.ig.Type("TextBlock", $.ig.FrameworkElement.prototype.$type)}, true);
$.ig.util.defType("DataTemplate", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _render: null, render: function (b) {
    if (arguments.length === 1) {
        this._render = b;
        return b
    } else {
        return this._render
    }
}, _measure: null, measure: function (b) {
    if (arguments.length === 1) {
        this._measure = b;
        return b
    } else {
        return this._measure
    }
}, _passStarting: null, passStarting: function (b) {
    if (arguments.length === 1) {
        this._passStarting = b;
        return b
    } else {
        return this._passStarting
    }
}, _passCompleted: null, passCompleted: function (b) {
    if (arguments.length === 1) {
        this._passCompleted = b;
        return b
    } else {
        return this._passCompleted
    }
}, $type: new $.ig.Type("DataTemplate", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DataTemplatePassInfo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, context: null, viewportTop: null, viewportLeft: null, viewportWidth: null, viewportHeight: null, isHitTestRender: null, passID: null, $type: new $.ig.Type("DataTemplatePassInfo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DataTemplateMeasureInfo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, context: null, width: null, height: null, isConstant: null, data: null, passInfo: null, $type: new $.ig.Type("DataTemplateMeasureInfo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DataTemplateRenderInfo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, context: null, xPosition: null, yPosition: null, availableWidth: null, availableHeight: null, data: null, isHitTestRender: null, passInfo: null, $type: new $.ig.Type("DataTemplateRenderInfo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Binding", "Object", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    this.c = false;
    $.ig.Object.prototype.init.call(this)
}, init1: function (c, b) {
    this.c = false;
    $.ig.Object.prototype.init.call(this);
    this.b = new $.ig.PropertyPath(b)
}, a: null, d: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, b: null, e: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        return b
    } else {
        return this.b
    }
}, c: null, f: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        return b
    } else {
        return this.c
    }
}, $type: new $.ig.Type("Binding", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("UnsetValue", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, $type: new $.ig.Type("UnsetValue", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DependencyPropertiesCollection", "Object", {a: null, c: function () {
    if ($.ig.DependencyPropertiesCollection.prototype.b == null) {
        $.ig.DependencyPropertiesCollection.prototype.b = new $.ig.DependencyPropertiesCollection()
    }
    return $.ig.DependencyPropertiesCollection.prototype.b
}, init: function () {
    $.ig.Object.prototype.init.call(this);
    if (this.a == null) {
        this.a = new $.ig.Dictionary(0)
    }
}, e: function (b) {
    return this.a.item(b)
}, f: function (f, g, h, i) {
    var j = new $.ig.DependencyProperty(f, g, i);
    this.a.item(h.typeName() + f, j);
    return j
}, $type: new $.ig.Type("DependencyPropertiesCollection", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DependencyPropertyChangedEventArgs", "Object", {a: null, b: null, init: function (d, e, f) {
    $.ig.Object.prototype.init.call(this);
    this.a = e;
    this.b = f;
    this.c = d
}, c: null, d: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        return b
    } else {
        return this.c
    }
}, e: function () {
    return this.a
}, f: function () {
    return this.b
}, $type: new $.ig.Type("DependencyPropertyChangedEventArgs", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("MouseEventArgs", "EventArgs", {init: function () {
    $.ig.EventArgs.prototype.init.call(this)
}, _position: null, position: function (b) {
    if (arguments.length === 1) {
        this._position = b;
        return b
    } else {
        return this._position
    }
}, _originalSource: null, originalSource: function (b) {
    if (arguments.length === 1) {
        this._originalSource = b;
        return b
    } else {
        return this._originalSource
    }
}, getPosition: function (b) {
    return this.position()
}, $type: new $.ig.Type("MouseEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("MouseButtonEventArgs", "MouseEventArgs", {init: function () {
    $.ig.MouseEventArgs.prototype.init.call(this)
}, _handled: null, handled: function (b) {
    if (arguments.length === 1) {
        this._handled = b;
        return b
    } else {
        return this._handled
    }
}, $type: new $.ig.Type("MouseButtonEventArgs", $.ig.MouseEventArgs.prototype.$type)}, true);
$.ig.util.defType("Brush", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.__fill = null;
    this.a = null
}, isGradient: function () {
    return false
}, __fill: null, fill: function (b) {
    if (arguments.length === 1) {
        this.__fill = b;
        return b
    } else {
        return this.__fill
    }
}, a: null, b: null, color: function (c) {
    if (arguments.length === 1) {
        this.b = c;
        this.a = this.b.f();
        this.__fill = this.a;
        return c
    } else {
        if (this.__fill == this.a) {
            return this.b
        }
        var d = new $.ig.Color();
        if (this.__fill != null) {
            d.f(this.__fill);
            this.b = d;
            this.a = this.__fill
        }
        return d
    }
}, $type: new $.ig.Type("Brush", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Color", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.__a = 0;
    this.__r = 0;
    this.__g = 0;
    this.__b = 0;
    this.__colorString = "";
    this.a = true
}, __a: null, b: function (b) {
    if (arguments.length === 1) {
        this.__a = Math.round(b);
        this.a = true;
        return b
    } else {
        return this.__a
    }
}, __r: null, c: function (b) {
    if (arguments.length === 1) {
        this.__r = Math.round(b);
        this.a = true;
        return b
    } else {
        return this.__r
    }
}, __g: null, d: function (b) {
    if (arguments.length === 1) {
        this.__g = Math.round(b);
        this.a = true;
        return b
    } else {
        return this.__g
    }
}, __b: null, e: function (b) {
    if (arguments.length === 1) {
        this.__b = Math.round(b);
        this.a = true;
        return b
    } else {
        return this.__b
    }
}, __colorString: null, f: function (b) {
    if (arguments.length === 1) {
        this.__colorString = b;
        this.r();
        return b
    } else {
        if (this.a) {
            this.a = false;
            this.q()
        }
        return this.__colorString
    }
}, a: null, q: function () {
    this.__colorString = "rgba(" + this.__r + "," + this.__g + "," + this.__b + "," + this.__a / 255 + ")"
}, r: function () {
    var a = $.ig.util.stringToColor(this.__colorString);
    this.__a = typeof a.a != "undefined" ? Math.round(a.a) : 0;
    this.__r = typeof a.r != "undefined" ? Math.round(a.r) : 0;
    this.__g = typeof a.g != "undefined" ? Math.round(a.g) : 0;
    this.__b = typeof a.b != "undefined" ? Math.round(a.b) : 0
}, s: function (c, f, e, d) {
    var b = new $.ig.Color();
    b.__a = c | 0;
    b.__r = f | 0;
    b.__g = e | 0;
    b.__b = d | 0;
    b.a = true;
    return b
}, $type: new $.ig.Type("Color", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DoubleCollection", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, Number)
}, $type: new $.ig.Type("DoubleCollection", $.ig.List$1.prototype.$type.specialize(Number))}, true);
$.ig.util.defType("Geometry", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _a: null, a: function () {
    return this._a
}, $type: new $.ig.Type("Geometry", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("GeometryCollection", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.Geometry.prototype.$type)
}, $type: new $.ig.Type("GeometryCollection", $.ig.List$1.prototype.$type.specialize($.ig.Geometry.prototype.$type))}, true);
$.ig.util.defType("GeometryGroup", "Geometry", {init: function () {
    $.ig.Geometry.prototype.init.call(this);
    this.d(new $.ig.GeometryCollection())
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, a: function () {
    return $.ig.GeometryType.prototype.group
}, $type: new $.ig.Type("GeometryGroup", $.ig.Geometry.prototype.$type)}, true);
$.ig.util.defType("LineGeometry", "Geometry", {init: function () {
    $.ig.Geometry.prototype.init.call(this)
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, a: function () {
    return $.ig.GeometryType.prototype.line
}, $type: new $.ig.Type("LineGeometry", $.ig.Geometry.prototype.$type)}, true);
$.ig.util.defType("RectangleGeometry", "Geometry", {init: function () {
    $.ig.Geometry.prototype.init.call(this)
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, a: function () {
    return $.ig.GeometryType.prototype.rectangle
}, $type: new $.ig.Type("RectangleGeometry", $.ig.Geometry.prototype.$type)}, true);
$.ig.util.defType("EllipseGeometry", "Geometry", {init: function () {
    $.ig.Geometry.prototype.init.call(this)
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, a: function () {
    return $.ig.GeometryType.prototype.ellipse
}, $type: new $.ig.Type("EllipseGeometry", $.ig.Geometry.prototype.$type)}, true);
$.ig.util.defType("PathGeometry", "Geometry", {init: function () {
    $.ig.Geometry.prototype.init.call(this);
    this.d(new $.ig.PathFigureCollection())
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, a: function () {
    return $.ig.GeometryType.prototype.path
}, $type: new $.ig.Type("PathGeometry", $.ig.Geometry.prototype.$type)}, true);
$.ig.util.defType("PathFigure", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.__segments = new $.ig.PathSegmentCollection();
    this.__isClosed = false;
    this.__isFilled = true
}, __segments: null, segments: function (b) {
    if (arguments.length === 1) {
        this.__segments = b;
        return b
    } else {
        return this.__segments
    }
}, __startPoint: null, startPoint: function (b) {
    if (arguments.length === 1) {
        this.__startPoint = b;
        return b
    } else {
        return this.__startPoint
    }
}, __isFilled: null, isFilled: function (b) {
    if (arguments.length === 1) {
        this.__isFilled = b;
        return b
    } else {
        return this.__isFilled
    }
}, __isClosed: null, isClosed: function (b) {
    if (arguments.length === 1) {
        this.__isClosed = b;
        return b
    } else {
        return this.__isClosed
    }
}, $type: new $.ig.Type("PathFigure", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PathFigureCollection", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.PathFigure.prototype.$type)
}, $type: new $.ig.Type("PathFigureCollection", $.ig.List$1.prototype.$type.specialize($.ig.PathFigure.prototype.$type))}, true);
$.ig.util.defType("PathSegment", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _a: null, a: function () {
    return this._a
}, $type: new $.ig.Type("PathSegment", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PathSegmentCollection", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.PathSegment.prototype.$type)
}, $type: new $.ig.Type("PathSegmentCollection", $.ig.List$1.prototype.$type.specialize($.ig.PathSegment.prototype.$type))}, true);
$.ig.util.defType("LineSegment", "PathSegment", {c: null, d: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        return b
    } else {
        return this.c
    }
}, init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.PathSegment.prototype.init.call(this);
    this.d(b)
}, init1: function (a) {
    $.ig.PathSegment.prototype.init.call(this)
}, a: function () {
    return $.ig.PathSegmentType.prototype.line
}, $type: new $.ig.Type("LineSegment", $.ig.PathSegment.prototype.$type)}, true);
$.ig.util.defType("PolyLineSegment", "PathSegment", {init: function () {
    $.ig.PathSegment.prototype.init.call(this);
    this.__points = new $.ig.PointCollection(0)
}, __points: null, points: function (b) {
    if (arguments.length === 1) {
        this.__points = b;
        return b
    } else {
        return this.__points
    }
}, a: function () {
    return $.ig.PathSegmentType.prototype.polyLine
}, $type: new $.ig.Type("PolyLineSegment", $.ig.PathSegment.prototype.$type)}, true);
$.ig.util.defType("ArcSegment", "PathSegment", {init: function () {
    $.ig.PathSegment.prototype.init.call(this);
    this.i(false);
    this.j($.ig.SweepDirection.prototype.counterclockwise)
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, a: function () {
    return $.ig.PathSegmentType.prototype.arc
}, $type: new $.ig.Type("ArcSegment", $.ig.PathSegment.prototype.$type)}, true);
$.ig.util.defType("Transform", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, $type: new $.ig.Type("Transform", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("RotateTransform", "Transform", {init: function () {
    $.ig.Transform.prototype.init.call(this)
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, $type: new $.ig.Type("RotateTransform", $.ig.Transform.prototype.$type)}, true);
$.ig.util.defType("TranslateTransform", "Transform", {init: function () {
    $.ig.Transform.prototype.init.call(this)
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, $type: new $.ig.Type("TranslateTransform", $.ig.Transform.prototype.$type)}, true);
$.ig.util.defType("TransformGroup", "Transform", {_f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, init: function () {
    $.ig.Transform.prototype.init.call(this);
    this.f(new $.ig.TransformCollection())
}, $type: new $.ig.Type("TransformGroup", $.ig.Transform.prototype.$type)}, true);
$.ig.util.defType("TransformCollection", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.Transform.prototype.$type)
}, $type: new $.ig.Type("TransformCollection", $.ig.List$1.prototype.$type.specialize($.ig.Transform.prototype.$type))}, true);
$.ig.util.defType("Point", "Object", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.Object.prototype.init.call(this);
    this.__x = 0;
    this.__y = 0
}, x: function (b) {
    if (arguments.length === 1) {
        this.__x = b;
        return b
    } else {
        return this.__x
    }
}, y: function (b) {
    if (arguments.length === 1) {
        this.__y = b;
        return b
    } else {
        return this.__y
    }
}, __x: null, __y: null, init1: function (e, c, d) {
    $.ig.Object.prototype.init.call(this);
    this.__x = c;
    this.__y = d
}, $type: new $.ig.Type("Point", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PointCollection", "List$1", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.List$1.prototype.init.call(this, $.ig.Point.prototype.$type)
}, init1: function (a, b) {
    $.ig.List$1.prototype.init.call(this, $.ig.Point.prototype.$type);
    this.__inner = b.__inner
}, $type: new $.ig.Type("PointCollection", $.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type))}, true);
$.ig.util.defType("PropertyMetadata", "Object", {a: null, c: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, b: null, d: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        return b
    } else {
        return this.b
    }
}, init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.Object.prototype.init.call(this);
    this.c(null);
    this.d(b)
}, init1: function (e, c, d) {
    $.ig.Object.prototype.init.call(this);
    this.c(c);
    this.d(d)
}, $type: new $.ig.Type("PropertyMetadata", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PropertyPath", "Object", {a: null, b: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.b(b)
}, $type: new $.ig.Type("PropertyPath", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Rect", "Object", {init: function (i, e, f, g, h) {
    if (i > 0) {
        switch (i) {
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
    $.ig.Object.prototype.init.call(this);
    this.top(f);
    this.left(e);
    this.width(g);
    this.height(h)
}, init1: function (g, d, e, f) {
    $.ig.Object.prototype.init.call(this);
    this.top(e);
    this.left(d);
    this.width(f.c());
    this.height(f.d())
}, init2: function (e, c, d) {
    $.ig.Object.prototype.init.call(this);
    this.top(Math.min(c.__y, d.__y));
    this.left(Math.min(c.__x, d.__x));
    this.width(Math.max(Math.max(c.__x, d.__x) - this.left(), 0));
    this.height(Math.max(Math.max(c.__y, d.__y) - this.top(), 0))
}, init3: function (e, c, d) {
    $.ig.Object.prototype.init.call(this);
    this.top(c.__y);
    this.left(c.__x);
    this.width(d.c());
    this.height(d.d())
}, a: null, x: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        this.f = this.a;
        this.g = this.f + this.c;
        return b
    } else {
        return this.a
    }
}, b: null, y: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        this.e = this.b;
        this.h = this.e + this.d;
        return b
    } else {
        return this.b
    }
}, c: null, width: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        this.g = this.f + this.c;
        return b
    } else {
        return this.c
    }
}, d: null, height: function (b) {
    if (arguments.length === 1) {
        this.d = b;
        this.h = this.e + this.d;
        return b
    } else {
        return this.d
    }
}, e: null, top: function (b) {
    if (arguments.length === 1) {
        this.e = b;
        this.y(this.e);
        return b
    } else {
        return this.e
    }
}, f: null, left: function (b) {
    if (arguments.length === 1) {
        this.f = b;
        this.x(this.f);
        return b
    } else {
        return this.f
    }
}, g: null, right: function (b) {
    if (arguments.length === 1) {
        this.g = b;
        this.c = this.g - this.f;
        return b
    } else {
        return this.g
    }
}, h: null, bottom: function (b) {
    if (arguments.length === 1) {
        this.h = b;
        this.d = this.h - this.e;
        return b
    } else {
        return this.h
    }
}, isEmpty: function () {
    return this.c < 0
}, empty: function () {
    return new $.ig.Rect(0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)
}, equals: function (b) {
    if (b == null) {
        return false
    }
    if (b.x() == this.x() && b.y() == this.y() && b.width() == this.width() && b.height() == this.height()) {
        return true
    }
    return false
}, i: function (c, d) {
    return c >= this.a && c - this.c <= this.a && d >= this.b && d - this.d <= this.b
}, contains: function (c, d) {
    return !this.isEmpty() && this.i(c, d)
}, contains1: function (b) {
    return this.contains(b.__x, b.__y)
}, contains2: function (b) {
    return !this.isEmpty() && !b.isEmpty() && (this.a <= b.a && this.b <= b.b && this.a + this.c >= b.a + b.c) && this.b + this.d >= b.b + b.d
}, intersectsWith: function (b) {
    return !(b.left() > this.right() || b.right() < this.left() || b.top() > this.bottom() || b.bottom() < this.top())
}, intersect: function (f) {
    if (!this.intersectsWith(f)) {
        this.e = Number.POSITIVE_INFINITY;
        this.f = Number.POSITIVE_INFINITY;
        this.c = Number.NEGATIVE_INFINITY;
        this.d = Number.NEGATIVE_INFINITY
    }
    var g = Math.max(this.x(), f.x());
    var h = Math.max(this.y(), f.y());
    var i = Math.min(this.x() + this.width(), f.x() + f.width()) - g;
    var j = Math.min(this.y() + this.height(), f.y() + f.height()) - h;
    if (i < 0) {
        i = 0
    }
    if (j < 0) {
        j = 0
    }
    this.c = i;
    this.d = j;
    this.a = g;
    this.b = h;
    this.f = this.a;
    this.e = this.b;
    this.g = this.f + this.c;
    this.h = this.e + this.d
}, union: function (h) {
    if (this.isEmpty()) {
        this.a = h.x();
        this.b = h.y();
        this.c = h.width();
        this.d = h.height();
        this.f = this.a;
        this.e = this.b;
        this.g = this.f + this.c;
        this.h = this.e + this.d;
        return
    }
    if (!h.isEmpty()) {
        var i = Math.min(this.x(), h.x());
        var j = Math.min(this.y(), h.y());
        var k = this.width();
        var l = this.height();
        if (h.width() == Number.POSITIVE_INFINITY || this.width() == Number.POSITIVE_INFINITY) {
            k = Number.POSITIVE_INFINITY
        } else {
            var m = Math.max(this.right(), h.right());
            k = m - i
        }
        if (h.height() == Number.POSITIVE_INFINITY || this.height() == Number.POSITIVE_INFINITY) {
            l = Number.POSITIVE_INFINITY
        } else {
            var n = Math.max(this.bottom(), h.bottom());
            l = n - j
        }
        this.a = i;
        this.b = j;
        this.c = k;
        this.d = l;
        this.f = this.a;
        this.e = this.b;
        this.g = this.f + this.c;
        this.h = this.e + this.d
    }
}, $type: new $.ig.Type("Rect", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Shape", "FrameworkElement", {init: function () {
    this.__fill = null;
    this.__stroke = null;
    $.ig.FrameworkElement.prototype.init.call(this)
}, __fill: null, fill: function (b) {
    if (arguments.length === 1) {
        this.__fill = b;
        return b
    } else {
        return this.__fill
    }
}, __stroke: null, stroke: function (b) {
    if (arguments.length === 1) {
        this.__stroke = b;
        return b
    } else {
        return this.__stroke
    }
}, _a6: null, a6: function (b) {
    if (arguments.length === 1) {
        this._a6 = b;
        return b
    } else {
        return this._a6
    }
}, _a7: null, a7: function (b) {
    if (arguments.length === 1) {
        this._a7 = b;
        return b
    } else {
        return this._a7
    }
}, _a8: null, a8: function (b) {
    if (arguments.length === 1) {
        this._a8 = b;
        return b
    } else {
        return this._a8
    }
}, _a9: null, a9: function (b) {
    if (arguments.length === 1) {
        this._a9 = b;
        return b
    } else {
        return this._a9
    }
}, $type: new $.ig.Type("Shape", $.ig.FrameworkElement.prototype.$type)}, true);
$.ig.util.defType("Line", "Shape", {init: function () {
    $.ig.Shape.prototype.init.call(this);
    this.bq(0);
    this.br(0);
    this.bs(0);
    this.bt(0)
}, _bq: null, bq: function (b) {
    if (arguments.length === 1) {
        this._bq = b;
        return b
    } else {
        return this._bq
    }
}, _br: null, br: function (b) {
    if (arguments.length === 1) {
        this._br = b;
        return b
    } else {
        return this._br
    }
}, _bs: null, bs: function (b) {
    if (arguments.length === 1) {
        this._bs = b;
        return b
    } else {
        return this._bs
    }
}, _bt: null, bt: function (b) {
    if (arguments.length === 1) {
        this._bt = b;
        return b
    } else {
        return this._bt
    }
}, $type: new $.ig.Type("Line", $.ig.Shape.prototype.$type)}, true);
$.ig.util.defType("Path", "Shape", {init: function () {
    $.ig.Shape.prototype.init.call(this)
}, _bp: null, bp: function (b) {
    if (arguments.length === 1) {
        this._bp = b;
        return b
    } else {
        return this._bp
    }
}, bm: null, w: function (b) {
    if (arguments.length === 1) {
        this.bm = b;
        return b
    } else {
        return this.bm
    }
}, bn: null, v: function (b) {
    if (arguments.length === 1) {
        this.bn = b;
        return b
    } else {
        return this.bn
    }
}, $type: new $.ig.Type("Path", $.ig.Shape.prototype.$type)}, true);
$.ig.util.defType("Polygon", "Shape", {init: function () {
    $.ig.Shape.prototype.init.call(this);
    this.bn(new $.ig.PointCollection(0))
}, _bn: null, bn: function (b) {
    if (arguments.length === 1) {
        this._bn = b;
        return b
    } else {
        return this._bn
    }
}, $type: new $.ig.Type("Polygon", $.ig.Shape.prototype.$type)}, true);
$.ig.util.defType("Polyline", "Shape", {init: function () {
    $.ig.Shape.prototype.init.call(this);
    this.bn(new $.ig.PointCollection(0))
}, _bn: null, bn: function (b) {
    if (arguments.length === 1) {
        this._bn = b;
        return b
    } else {
        return this._bn
    }
}, $type: new $.ig.Type("Polyline", $.ig.Shape.prototype.$type)}, true);
$.ig.util.defType("Rectangle", "Shape", {bm: null, init: function () {
    $.ig.Shape.prototype.init.call(this);
    this.bm = new $.ig.Rect(0, 0, 0, 0, 0)
}, bn: function (b) {
}, $type: new $.ig.Type("Rectangle", $.ig.Shape.prototype.$type)}, true);
$.ig.util.defType("Size", "Object", {init: function (c, d) {
    $.ig.Object.prototype.init.call(this);
    this.c(c);
    this.d(d)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, $type: new $.ig.Type("Size", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Style", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, $type: new $.ig.Type("Style", $.ig.Object.prototype.$type)}, true);
$.ig.Visibility.prototype.visible = 0;
$.ig.Visibility.prototype.collapsed = 1;
$.ig.PenLineCap.prototype.flat = 0;
$.ig.PenLineCap.prototype.square = 1;
$.ig.PenLineCap.prototype.round = 2;
$.ig.PenLineCap.prototype.triangle = 3;
$.ig.SweepDirection.prototype.counterclockwise = 0;
$.ig.SweepDirection.prototype.clockwise = 1;
$.ig.PathSegmentType.prototype.line = 0;
$.ig.PathSegmentType.prototype.bezier = 1;
$.ig.PathSegmentType.prototype.polyBezier = 2;
$.ig.PathSegmentType.prototype.polyLine = 3;
$.ig.PathSegmentType.prototype.arc = 4;
$.ig.GeometryType.prototype.group = 0;
$.ig.GeometryType.prototype.line = 1;
$.ig.GeometryType.prototype.rectangle = 2;
$.ig.GeometryType.prototype.ellipse = 3;
$.ig.GeometryType.prototype.path = 4;
$.ig.ModifierKeys.prototype.none = 0;
$.ig.ModifierKeys.prototype.alt = 1;
$.ig.ModifierKeys.prototype.control = 2;
$.ig.ModifierKeys.prototype.shift = 4;
$.ig.ModifierKeys.prototype.windows = 8;
$.ig.ModifierKeys.prototype.apple = 8;
$.ig.Key.prototype.none = 0;
$.ig.Key.prototype.back = 1;
$.ig.Key.prototype.tab = 2;
$.ig.Key.prototype.enter = 3;
$.ig.Key.prototype.shift = 4;
$.ig.Key.prototype.ctrl = 5;
$.ig.Key.prototype.alt = 6;
$.ig.Key.prototype.capsLock = 7;
$.ig.Key.prototype.escape = 8;
$.ig.Key.prototype.space = 9;
$.ig.Key.prototype.pageUp = 10;
$.ig.Key.prototype.pageDown = 11;
$.ig.Key.prototype.end = 12;
$.ig.Key.prototype.home = 13;
$.ig.Key.prototype.left = 14;
$.ig.Key.prototype.up = 15;
$.ig.Key.prototype.right = 16;
$.ig.Key.prototype.down = 17;
$.ig.Key.prototype.insert = 18;
$.ig.Key.prototype.del = 19;
$.ig.Key.prototype.d0 = 20;
$.ig.Key.prototype.d1 = 21;
$.ig.Key.prototype.d2 = 22;
$.ig.Key.prototype.d3 = 23;
$.ig.Key.prototype.d4 = 24;
$.ig.Key.prototype.d5 = 25;
$.ig.Key.prototype.d6 = 26;
$.ig.Key.prototype.d7 = 27;
$.ig.Key.prototype.d8 = 28;
$.ig.Key.prototype.d9 = 29;
$.ig.Key.prototype.a = 30;
$.ig.Key.prototype.b = 31;
$.ig.Key.prototype.c = 32;
$.ig.Key.prototype.d = 33;
$.ig.Key.prototype.e = 34;
$.ig.Key.prototype.f = 35;
$.ig.Key.prototype.g = 36;
$.ig.Key.prototype.h = 37;
$.ig.Key.prototype.i = 38;
$.ig.Key.prototype.j = 39;
$.ig.Key.prototype.k = 40;
$.ig.Key.prototype.l = 41;
$.ig.Key.prototype.m = 42;
$.ig.Key.prototype.n = 43;
$.ig.Key.prototype.o = 44;
$.ig.Key.prototype.p = 45;
$.ig.Key.prototype.q = 46;
$.ig.Key.prototype.r = 47;
$.ig.Key.prototype.s = 48;
$.ig.Key.prototype.t = 49;
$.ig.Key.prototype.u = 50;
$.ig.Key.prototype.v = 51;
$.ig.Key.prototype.w = 52;
$.ig.Key.prototype.x = 53;
$.ig.Key.prototype.y = 54;
$.ig.Key.prototype.z = 55;
$.ig.Key.prototype.f1 = 56;
$.ig.Key.prototype.f2 = 57;
$.ig.Key.prototype.f3 = 58;
$.ig.Key.prototype.f4 = 59;
$.ig.Key.prototype.f5 = 60;
$.ig.Key.prototype.f6 = 61;
$.ig.Key.prototype.f7 = 62;
$.ig.Key.prototype.f8 = 63;
$.ig.Key.prototype.f9 = 64;
$.ig.Key.prototype.f10 = 65;
$.ig.Key.prototype.f11 = 66;
$.ig.Key.prototype.f12 = 67;
$.ig.Key.prototype.numPad0 = 68;
$.ig.Key.prototype.numPad1 = 69;
$.ig.Key.prototype.numPad2 = 70;
$.ig.Key.prototype.numPad3 = 71;
$.ig.Key.prototype.numPad4 = 72;
$.ig.Key.prototype.numPad5 = 73;
$.ig.Key.prototype.numPad6 = 74;
$.ig.Key.prototype.numPad7 = 75;
$.ig.Key.prototype.numPad8 = 76;
$.ig.Key.prototype.numPad9 = 77;
$.ig.Key.prototype.multiply = 78;
$.ig.Key.prototype.add = 79;
$.ig.Key.prototype.subtract = 80;
$.ig.Key.prototype.decimal = 81;
$.ig.Key.prototype.divide = 82;
$.ig.Key.prototype.unknown = 255;
$.ig.NotifyCollectionChangedAction.prototype.add = 0;
$.ig.NotifyCollectionChangedAction.prototype.remove = 1;
$.ig.NotifyCollectionChangedAction.prototype.replace = 2;
$.ig.NotifyCollectionChangedAction.prototype.reset = 4;
$.ig.DependencyProperty.prototype.c = new $.ig.UnsetValue();
$.ig.DependencyPropertiesCollection.prototype.b = null;
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
$.ig.util.bulkDefine(["BrushCollection", "EventProxy", "DOMEventProxy", "TrendCalculators", "TrendLineType", "UnknownValuePlotting", "ErrorBarCalculatorReference", "ErrorBarCalculatorType", "IErrorBarCalculator", "MouseWheelHandler", "GestureHandler", "TouchHandler", "ContactHandler", "MouseHandler", "MouseOverHandler", "KeyHandler", "IFastItemColumnInternal", "IFastItemColumnPropertyName", "IFastItemColumn$1", "FastItemColumn", "FastItemDateTimeColumn", "FastItemObjectColumn", "FastItemIntColumn", "FastItemsSource", "ColumnReference", "FastItemsSourceEventAction", "FastItemsSourceEventArgs", "FastReflectionHelper", "IRenderer", "RectChangedEventArgs", "RectChangedEventHandler", "CanvasRenderScheduler", "CanvasViewRenderer", "GradientDirection", "RenderingContext", "DependencyObjectNotifier", "InteractionState", "IOverviewPlusDetailControl", "ISchedulableRender", "NavigationSettings", "OverviewPlusDetailPaneMode", "PropertyChangedEventArgs$1", "XamOverviewPlusDetailPane", "XamOverviewPlusDetailPaneView", "XamOverviewPlusDetailPaneViewManager", "XamMultiScaleTileSource", "MapTileSource", "BingMapsTileSource", "CloudMadeTileSource", "OpenStreetMapTileSource", "ArrayUtil", "Clipper", "EdgeClipper", "LeftClipper", "BottomClipper", "RightClipper", "TopClipper", "InterpolationMode", "ColorUtil", "DoubleAnimator", "Extensions", "Flattener", "SpiralTodo", "GeometryUtil", "Numeric", "LeastSquaresFit", "MathUtil", "PathFigureUtil", "PointCollectionUtil", "PolygonUtil", "PolySimplification", "RearrangedList$1", "RectUtil", "ISmartPlaceable", "SmartPlaceableWrapper$1", "SmartPosition", "SmartPlacer", "StackPool$1", "Tile", "WriteableBitmap", "IMapRenderDeferralHandler", "XamMultiScaleImage", "Pair$2", "IEasingFunction", "XamMultiScaleImageView", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise"]);
$.ig.util.defType("InterpolationMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("InterpolationMode", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("OverviewPlusDetailPaneMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("OverviewPlusDetailPaneMode", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("InteractionState", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("InteractionState", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("GradientDirection", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("GradientDirection", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("FastItemsSourceEventAction", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("FastItemsSourceEventAction", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TrendLineType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("TrendLineType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BrushCollection", "ObservableCollection$1", {init: function () {
    $.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Brush.prototype.$type);
    this.aj = $.ig.InterpolationMode.prototype.rGB
}, al: function () {
    return this.item($.ig.BrushCollection.prototype.ai.b(this.count()))
}, am: function () {
    return this.ap($.ig.BrushCollection.prototype.ai.a() * (this.count() - 1))
}, ak: function (b) {
    if (arguments.length === 1) {
        if (this.aj != b) {
            this.aj = b;
            this.ah(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset))
        }
        return b
    } else {
        return this.aj
    }
}, aj: null, item: function (d, c) {
    if (arguments.length === 2) {
        $.ig.ObservableCollection$1.prototype.item.call(this, d, c);
        return c
    } else {
        if (d < 0 || d >= this.count()) {
            return null
        }
        return $.ig.ObservableCollection$1.prototype.item.call(this, d)
    }
}, ap: function (c) {
    if (isNaN(c)) {
        return null
    }
    c = $.ig.MathUtil.prototype.i(c, 0, this.count() - 1);
    var d = Math.floor(c);
    if (d == c) {
        return this.item(d)
    }
    return this.aq(c - d, this.item(d), this.item(d + 1), this.ak())
}, aq: function (i, j, k, l) {
    var m = j.color();
    var n = k.color();
    var o = m.getInterpolation(i, n, l);
    var p = new $.ig.Brush();
    p.color(o);
    return p
}, $type: new $.ig.Type("BrushCollection", $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Brush.prototype.$type))}, true);
$.ig.util.defType("EventProxy", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, onMouseWheel: null, onPinchStarted: null, onPinchDelta: null, onGestureCompleted: null, onContactStarted: null, onDragStarted: null, onContactMoved: null, onDragDelta: null, onContactCompleted: null, onDragCompleted: null, onMouseLeave: null, onMouseOver: null, onMouseEnter: null, onMouseDown: null, onMouseUp: null, onDoubleTap: null, onHold: null, onKeyDown: null, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, be: function () {
}, bf: function () {
}, bg: function (c, d) {
    if (this.onMouseWheel != null) {
        return this.onMouseWheel(c, d)
    }
    return false
}, bh: function (c, d) {
    if (this.onPinchStarted != null) {
        this.onPinchStarted(c, d)
    }
}, bi: function (c, d) {
    if (this.onPinchDelta != null) {
        this.onPinchDelta(c, d)
    }
}, bj: function (c, d) {
    if (this.onGestureCompleted != null) {
        this.onGestureCompleted(c, d)
    }
}, bk: function (c, d) {
    if (this.onContactStarted != null) {
        this.onContactStarted(c, d)
    }
}, bl: function (b) {
    if (this.onDragStarted != null) {
        this.onDragStarted(b)
    }
}, bm: function (c, d) {
    if (this.onContactMoved != null) {
        this.onContactMoved(c, d)
    }
}, bn: function (b) {
    if (this.onDragDelta != null) {
        this.onDragDelta(b)
    }
}, bo: function (c, d) {
    if (this.onContactCompleted != null) {
        this.onContactCompleted(c, d)
    }
}, bp: function (b) {
    if (this.onDragCompleted != null) {
        this.onDragCompleted(b)
    }
}, bq: function (b) {
    if (this.onMouseLeave != null) {
        this.onMouseLeave(b)
    }
}, br: function (d, e, f) {
    if (this.onMouseOver != null) {
        this.onMouseOver(d, e, f)
    }
}, bs: function (b) {
    if (this.onMouseEnter != null) {
        this.onMouseEnter(b)
    }
}, bt: function (b) {
    if (this.onMouseDown != null) {
        this.onMouseDown(b)
    }
}, bu: function (b) {
    if (this.onMouseUp != null) {
        this.onMouseUp(b)
    }
}, bv: function (b) {
    if (this.onKeyDown != null) {
        return this.onKeyDown(b)
    }
    return false
}, bw: function (b) {
    if (this.onDoubleTap != null) {
        this.onDoubleTap(b)
    }
}, bx: function (b) {
    if (this.onHold != null) {
        this.onHold(b)
    }
}, by: function () {
}, $type: new $.ig.Type("EventProxy", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DOMEventProxy", "EventProxy", {_cp: null, cp: function (b) {
    if (arguments.length === 1) {
        this._cp = b;
        return b
    } else {
        return this._cp
    }
}, be: function () {
    return new $.ig.DOMEventProxy(this.cp())
}, b1: null, b2: null, b3: null, b4: null, b5: null, _cq: null, cq: function (b) {
    if (arguments.length === 1) {
        this._cq = b;
        return b
    } else {
        return this._cq
    }
}, init: function (e) {
    var d = this;
    this.b1 = 0;
    this.b2 = "";
    this.b3 = false;
    this.b6 = 0;
    this.b7 = 0;
    this.b8 = 0;
    this.b9 = 0;
    this.ca = 0;
    this.cb = 1;
    this.cc = $.ig.DOMEventProxy.prototype.bz;
    this.cd = null;
    this.ce = 0;
    this.cf = 0;
    this.cg = 5;
    this.ch = false;
    this.ci = null;
    $.ig.EventProxy.prototype.init.call(this);
    $.ig.DOMEventProxy.prototype.b0++;
    this.b1 = $.ig.DOMEventProxy.prototype.b0;
    this.b2 = ".DOMProxy" + this.b1.toString();
    this.w($.ig.ModifierKeys.prototype.none);
    this.cp(e);
    $.ig.DOMEventProxy.prototype.b4 = window.navigator.msPointerEnabled;
    $.ig.DOMEventProxy.prototype.b5 = this.cy();
    if (!$.ig.DOMEventProxy.prototype.b4) {
        this.cp().mousemove(this.dv.on(this));
        this.cp().mouseleave(this.du.on(this));
        this.cp().mousedown(this.dw.on(this));
        this.cp().mouseup(this.dx.on(this))
    }
    this.cp().keydown(this.dy.on(this));
    if ($.ig.DOMEventProxy.prototype.b4) {
        var h = this.cp()[0];
        h.style.msTouchAction = "none";
        h.style.msUserSelect = "none";
        var f = this.cp()[0];
        var g = new MSGesture();
        g.target = f;
        this.cq(g);
        this.cp().bind("MSGestureStart" + this.b2, this.df.on(this));
        this.cp().bind("MSGestureChange" + this.b2, this.dg.on(this));
        this.cp().bind("MSGestureEnd" + this.b2, this.dh.on(this));
        this.cp().bind("MSPointerDown" + this.b2, this.db.on(this));
        this.cp().bind("MSPointerUp" + this.b2, this.c8.on(this));
        this.cp().bind("MSPointerCancel" + this.b2, this.da.on(this));
        this.cp().bind("MSPointerMove" + this.b2, this.dd.on(this));
        this.cp().bind("MSPointerOut" + this.b2, this.de.on(this));
        this.cp().bind("MSLostPointerCapture" + this.b2, this.c9.on(this))
    }
    this.cp().bind("DOMMouseScroll" + this.b2, this.c7.on(this));
    this.cp().bind("mousewheel" + this.b2, this.c7.on(this));
    this.cp().bind("gesturestart" + this.b2, this.df.on(this));
    this.cp().bind("gesturechange" + this.b2, this.dg.on(this));
    this.cp().bind("gestureend" + this.b2, this.dh.on(this));
    this.cp().bind("touchstart" + this.b2, this.di.on(this));
    this.cp().bind("touchmove" + this.b2, this.dn.on(this));
    this.cp().bind("touchend" + this.b2, this.dp.on(this));
    this.x(function (a) {
        return true
    })
}, cy: function () {
    var b = -1;
    var a = /Trident\/([\d.]+)/;
    if (a.exec(navigator.userAgent) != null) {
        b = parseFloat(RegExp.$1)
    }
    return b
}, b6: null, b7: null, b8: null, b9: null, ca: null, _cr: null, cr: function (b) {
    if (arguments.length === 1) {
        this._cr = b;
        return b
    } else {
        return this._cr
    }
}, _cs: null, cs: function (b) {
    if (arguments.length === 1) {
        this._cs = b;
        return b
    } else {
        return this._cs
    }
}, c3: function (i) {
    var b = $.ig.DOMEventProxy.prototype.b5 >= 6;
    var l = i.originalEvent;
    if (((typeof i.pageX == "undefined") || b) && l.clientX != null) {
        var k = i.target.ownerDocument;
        var j = k ? k : document;
        var h = j.documentElement;
        var c = j.body;
        var f = l.clientX;
        var g = l.clientY;
        var m = h && h.scrollLeft || c && c.scrollLeft || 0;
        var n = h && h.scrollTop || c && c.scrollTop || 0;
        var d = h && h.clientLeft || c && c.clientLeft || 0;
        var e = h && h.clientTop || c && c.clientTop || 0;
        i.pageX = f + (m - d);
        i.pageY = g + (n - e)
    }
}, c4: function (f) {
    var g = $.ig.DOMEventProxy.prototype.b5 >= 6;
    var s = f[0];
    var m = s.ownerDocument;
    var n = m ? m.documentElement : null;
    var v = n ? n.msContentZoomFactor : null;
    var h = n.body;
    if (v && v > 1 || g) {
        var p = s.getBoundingClientRect();
        var t = p.left;
        var u = p.top;
        var q = n && n.scrollLeft || h && h.scrollLeft || 0;
        var r = n && n.scrollTop || h && h.scrollTop || 0;
        var j = n && n.clientLeft || h && h.clientLeft || 0;
        var k = n && n.clientTop || h && h.clientTop || 0;
        var i = t + q - j;
        var l = u + r - k;
        return new $.ig.Rect(0, i, l, 0, 0)
    } else {
        var o = f.offset();
        return new $.ig.Rect(0, o.left, o.top, 0, 0)
    }
}, c5: function (c) {
    $.ig.DOMEventProxy.prototype.c3(c);
    var d = $.ig.DOMEventProxy.prototype.c4(this.cp());
    this.b6 = c.pageX - d.left();
    this.b7 = c.pageY - d.top();
    this.b8 = this.b6 - this.v().left();
    this.b9 = this.b7 - this.v().top();
    this.cr({__x: this.b6, __y: this.b7, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    this.cs({__x: this.b8, __y: this.b9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, c6: function (l) {
    $.ig.DOMEventProxy.prototype.c3(l);
    if ($.ig.DOMEventProxy.prototype.b4) {
        var g = l.pageX;
        var h = l.pageY;
        var i = $.ig.DOMEventProxy.prototype.c4(this.cp());
        this.b6 = g - i.left();
        this.b7 = h - i.top()
    } else {
        this.ca = 0;
        if (!l.originalEvent.targetTouches || l.originalEvent.targetTouches.length < 1) {
            return
        }
        this.ca = l.originalEvent.targetTouches.length;
        var j = l.originalEvent.targetTouches[0].pageX;
        var k = l.originalEvent.targetTouches[0].pageY;
        var m = $.ig.DOMEventProxy.prototype.c4(this.cp());
        this.b6 = j - m.left();
        this.b7 = k - m.top()
    }
    this.b8 = this.b6 - this.v().left();
    this.b9 = this.b7 - this.v().top();
    this.cr({__x: this.b6, __y: this.b7, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    this.cs({__x: this.b8, __y: this.b9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, c7: function (d) {
    this.dz(d);
    if (this.x()(this.cr())) {
        var c = 0;
        if (d.wheelDelta) {
            c = d.wheelDelta / 120
        }
        if (d.originalEvent && d.originalEvent.wheelDelta) {
            c = d.originalEvent.wheelDelta / 120
        }
        if (d.detail) {
            c = -d.detail / 3
        }
        if (d.originalEvent && d.originalEvent.detail) {
            c = -d.originalEvent.detail / 3
        }
        c = c / 10;
        var b = this.bg(this.cs(), c);
        if (b) {
            d.preventDefault()
        }
    }
}, cb: null, c8: function (e) {
    var c = this.dc(e);
    if (c) {
        this.ca--;
        if (this.ca < 0) {
            this.ca = 0
        }
    }
    if (this.ca < 2 && this.b3 && c) {
        this.b3 = false;
        var d = e.originalEvent.scale;
        this.bj(this.cs(), d)
    } else {
        if (c) {
            this.dp(e)
        } else {
            this.dx(e)
        }
    }
}, c9: function (e) {
    var c = this.dc(e);
    if (c) {
        this.ca--;
        if (this.ca < 0) {
            this.ca = 0
        }
    }
    if (this.ca < 2 && this.b3 && c) {
        this.b3 = false;
        var d = e.originalEvent.scale;
        this.bj(this.cs(), d)
    }
}, da: function (e) {
    var c = this.dc(e);
    if (c) {
        this.ca--;
        if (this.ca < 0) {
            this.ca = 0
        }
    }
    if (this.ca < 2 && this.b3 && c) {
        this.b3 = false;
        var d = e.originalEvent.scale;
        this.bj(this.cs(), d)
    }
}, db: function (e) {
    var c = this.dc(e);
    if (this.cq() != null && c) {
        this.ca++;
        this.cq().addPointer(e.originalEvent.pointerId)
    }
    var f = this.cp()[0];
    f.msSetPointerCapture(e.originalEvent.pointerId);
    if (this.ca > 1 && !this.b3 && c) {
        this.b3 = true;
        this.c6(e);
        var d = e.originalEvent.scale;
        this.bh(this.cs(), d)
    } else {
        if (c) {
            this.di(e)
        } else {
            this.dw(e)
        }
    }
}, dc: function (c) {
    var d = c.originalEvent;
    var b = d.pointerType == d.MSPOINTER_TYPE_TOUCH;
    return b
}, dd: function (c) {
    var b = this.dc(c);
    if (this.b3) {
        return
    }
    if (b) {
        this.dn(c)
    } else {
        this.dv(c)
    }
}, de: function (c) {
    var b = this.dc(c);
    if (this.b3) {
        return
    }
    if (b) {
    } else {
        this.du(c)
    }
}, df: function (c) {
    this.ct(true);
    this.dz(c);
    this.c6(c);
    this.dk();
    if (this.x()(this.cr())) {
        c.preventDefault();
        if ($.ig.DOMEventProxy.prototype.b4) {
            this.cb = 1
        }
        if ($.ig.DOMEventProxy.prototype.b4 && this.ca < 2) {
            return
        }
        var b = c.originalEvent.scale;
        this.bh(this.cs(), b)
    }
}, dg: function (c) {
    this.ct(true);
    this.dz(c);
    this.c6(c);
    if (this.x()(this.cr())) {
        c.preventDefault();
        if ($.ig.DOMEventProxy.prototype.b4 && this.ca < 2) {
            return
        }
        var b = c.originalEvent.scale;
        this.bi(this.cs(), b)
    }
}, dh: function (c) {
    c.preventDefault();
    var b = c.originalEvent.scale;
    this.ct(false);
    this.dz(c);
    this.c6(c);
    if (!$.ig.DOMEventProxy.prototype.b4 || this.b3) {
        this.bj(this.cs(), b)
    }
}, di: function (a) {
    this.ct(true);
    this.dz(a);
    this.c6(a);
    if (this.x()(this.cr())) {
        a.preventDefault();
        this.br(this.cr(), false, true);
        this.bt(this.cr());
        this.bk(this.cs(), true);
        this.dj()
    }
}, cc: null, cd: null, ce: null, cf: null, cg: null, dj: function () {
    if (this.cc == $.ig.DOMEventProxy.prototype.bz) {
        this.ce = this.cr().__x;
        this.cf = this.cr().__y;
        this.cc = window.setTimeout(this.dm.on(this), 1500)
    }
}, dk: function () {
    if (Math.abs(this.ce - this.cr().__x) > this.cg || Math.abs(this.cf - this.cr().__y) > this.cg) {
        this.dl()
    }
}, dl: function () {
    if (this.cc != $.ig.DOMEventProxy.prototype.bz) {
        window.clearTimeout(this.cc);
        this.cc = $.ig.DOMEventProxy.prototype.bz
    }
}, dm: function () {
    this.cc = $.ig.DOMEventProxy.prototype.bz;
    this.bx(this.cs())
}, ch: null, ci: null, dn: function (b) {
    this.ct(true);
    this.dz(b);
    this.c6(b);
    this.dk();
    this.dr();
    if (this.x()(this.cr()) && this.ca == 1) {
        b.preventDefault();
        if (!this.ch) {
            this.ch = true;
            this.ci = this.cs();
            this.bl(this.ci)
        } else {
            this.br(this.cr(), true, true);
            this.bm(this.cs(), true);
            this.bn(this.cs())
        }
    }
}, dp: function (b) {
    this.ct(false);
    this.dz(b);
    this.c6(b);
    this.dl();
    b.preventDefault();
    this.br(this.cr(), false, true);
    this.bu(this.cr());
    if (this.ca == 0) {
        this.dq(this.cr())
    }
    if (this.ch && this.ca == 0) {
        this.ch = false;
        this.ci = null;
        this.bp(this.cs())
    }
    this.bo(this.cs(), true)
}, dq: function (b) {
    if (this.cd == null) {
        this.cd = new $.ig.Rect(0, b.__x - 50, b.__y - 50, 100, 100);
        window.setTimeout(this.dr.on(this), 500)
    } else {
        if (b.__x >= this.cd.x() && b.__x <= this.cd.right() && b.__y >= this.cd.y() && b.__y <= this.cd.bottom()) {
            this.dr();
            this.bw(b)
        }
    }
}, dr: function () {
    this.cd = null
}, _ct: null, ct: function (b) {
    if (arguments.length === 1) {
        this._ct = b;
        return b
    } else {
        return this._ct
    }
}, du: function (b) {
    this.c5(b);
    if (this.ct()) {
        this.ct(false);
        this.bq(this.cs())
    }
}, dv: function (c) {
    this.c5(c);
    this.dz(c);
    var d = new $.ig.MouseEventArgs();
    d.position(this.cr());
    if (this.x()(this.cr())) {
        if (!this.ct()) {
            this.ct(true);
            this.bs(this.cr())
        }
        this.br(this.cr(), true, false);
        this.bm(this.cs(), false)
    } else {
        if (this.ct()) {
            this.du(c)
        }
    }
}, dw: function (b) {
    this.cp().focus();
    this.c5(b);
    this.dz(b);
    if (this.x()(this.cr())) {
        this.bt(this.cr());
        this.bk(this.cs(), false);
        b.preventDefault()
    }
}, dx: function (b) {
    this.dz(b);
    this.bu(this.cr());
    this.bo(this.cs(), false);
    b.preventDefault()
}, dy: function (e) {
    var f = $.ig.Key.prototype.a;
    var g = false;
    this.dz(e);
    switch (e.which) {
        case 33:
            g = true;
            f = $.ig.Key.prototype.pageUp;
            break;
        case 34:
            g = true;
            f = $.ig.Key.prototype.pageDown;
            break;
        case 36:
            g = true;
            f = $.ig.Key.prototype.home;
            break;
        case 37:
            g = true;
            f = $.ig.Key.prototype.left;
            break;
        case 38:
            g = true;
            f = $.ig.Key.prototype.up;
            break;
        case 39:
            g = true;
            f = $.ig.Key.prototype.right;
            break;
        case 40:
            g = true;
            f = $.ig.Key.prototype.down;
            break
    }
    if (g && this.x()(this.cr())) {
        var h = false;
        h = this.bv(f);
        if (h) {
            e.preventDefault()
        }
    }
}, dz: function (b) {
    this.w($.ig.ModifierKeys.prototype.none);
    if (b.shiftKey) {
        this.w(this.w() | $.ig.ModifierKeys.prototype.shift)
    }
    if (b.altKey) {
        this.w(this.w() | $.ig.ModifierKeys.prototype.alt)
    }
    if (b.ctrlKey) {
        this.w(this.w() | $.ig.ModifierKeys.prototype.control)
    }
}, by: function () {
    var d = $.ig.DOMEventProxy.prototype.c4(this.cp());
    var e = d.left();
    var f = d.top();
    return{__x: e, __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, bf: function () {
    if (this.cp() == null) {
        return
    }
    this.cp().unbind(this.b2);
    this.cp(null)
}, $type: new $.ig.Type("DOMEventProxy", $.ig.EventProxy.prototype.$type)}, true);
$.ig.util.defType("TrendCalculators", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: 0, $e: 0, $f: 0, $g: 0, $h: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$c = new Array(h);
                            this.$d = 0;
                            this.$state = 1;
                            break;
                        case 1:
                            this.$d = 0;
                            this.$state = 4;
                            break;
                        case 2:
                            this.$c[this.$d] = 0;
                            this.$state = 3;
                            break;
                        case 3:
                            this.$d++;
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$d < h) {
                                this.$state = 2
                            } else {
                                this.$state = 5
                            }
                            break;
                        case 5:
                            this.$e = NaN;
                            this.$f = NaN;
                            this.$g = NaN;
                            this.$h = NaN;
                            this.$d = 0;
                            this.$state = 6;
                            break;
                        case 6:
                            this.$j = g.getEnumerator();
                            this.$state = 18;
                            break;
                        case 7:
                            this.$i = this.$j.current();
                            this.$state = 8;
                            break;
                        case 8:
                            if (!isNaN(this.$i)) {
                                this.$state = 9
                            } else {
                                this.$state = 16
                            }
                            break;
                        case 9:
                            this.$k = this.$d % h;
                            this.$state = 10;
                            break;
                        case 10:
                            if (this.$d == 0) {
                                this.$state = 11
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 11:
                            this.$g = 1;
                            this.$h = this.$f = this.$e = this.$i;
                            this.$state = 15;
                            break;
                        case 12:
                            if (this.$d < h) {
                                this.$state = 13
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 13:
                            this.$g += (this.$d + 1);
                            this.$e += this.$i;
                            this.$f += (this.$d + 1) * this.$i;
                            this.$h = this.$f / this.$g;
                            this.$state = 15;
                            break;
                        case 14:
                            this.$f = this.$f + (h * this.$i) - this.$e;
                            this.$h = this.$f / this.$g;
                            this.$e = this.$e + this.$i - this.$c[this.$k];
                            this.$state = 15;
                            break;
                        case 15:
                            this.$c[this.$k] = this.$i;
                            ++this.$d;
                            this.$state = 16;
                            break;
                        case 16:
                            this.$current = this.$h;
                            this.$state = 17;
                            return true;
                        case 17:
                            this.$state = 18;
                            break;
                        case 18:
                            if (this.$j.moveNext()) {
                                this.$state = 7
                            } else {
                                this.$state = 19
                            }
                            break;
                        case 19:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, b: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: 0, $d: 0, $e: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$c = 0;
                            this.$d = NaN;
                            this.$e = 2 / (1 + h);
                            this.$state = 1;
                            break;
                        case 1:
                            this.$g = g.getEnumerator();
                            this.$state = 11;
                            break;
                        case 2:
                            this.$f = this.$g.current();
                            this.$state = 3;
                            break;
                        case 3:
                            if (!isNaN(this.$f)) {
                                this.$state = 4
                            } else {
                                this.$state = 9
                            }
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$c < h) {
                                this.$state = 6
                            } else {
                                this.$state = 7
                            }
                            break;
                        case 6:
                            this.$d = isNaN(this.$d) ? this.$f : (this.$d * this.$c + this.$f) / (this.$c + 1);
                            this.$state = 8;
                            break;
                        case 7:
                            this.$d = (this.$f - this.$d) * this.$e + this.$d;
                            this.$state = 8;
                            break;
                        case 8:
                            ++this.$c;
                            this.$state = 9;
                            break;
                        case 9:
                            this.$current = this.$d;
                            this.$state = 10;
                            return true;
                        case 10:
                            this.$state = 11;
                            break;
                        case 11:
                            if (this.$g.moveNext()) {
                                this.$state = 2
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 12:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, c: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: 0, $d: 0, $e: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$c = 0;
                            this.$d = NaN;
                            this.$e = 1 / h;
                            this.$state = 1;
                            break;
                        case 1:
                            this.$g = g.getEnumerator();
                            this.$state = 11;
                            break;
                        case 2:
                            this.$f = this.$g.current();
                            this.$state = 3;
                            break;
                        case 3:
                            if (!isNaN(this.$f)) {
                                this.$state = 4
                            } else {
                                this.$state = 9
                            }
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$c < h) {
                                this.$state = 6
                            } else {
                                this.$state = 7
                            }
                            break;
                        case 6:
                            this.$d = isNaN(this.$d) ? this.$f : (this.$d * this.$c + this.$f) / (this.$c + 1);
                            this.$state = 8;
                            break;
                        case 7:
                            this.$d = (this.$f - this.$d) * this.$e + this.$d;
                            this.$state = 8;
                            break;
                        case 8:
                            ++this.$c;
                            this.$state = 9;
                            break;
                        case 9:
                            this.$current = this.$d;
                            this.$state = 10;
                            return true;
                        case 10:
                            this.$state = 11;
                            break;
                        case 11:
                            if (this.$g.moveNext()) {
                                this.$state = 2
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 12:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, d: function (d) {
    var c = this;
    var b = function () {
        return function (e) {
            return{$state: 0, $this: c, $current: null, $b: 0, $c: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$b = NaN;
                            this.$c = 0;
                            this.$state = 1;
                            break;
                        case 1:
                            this.$e = e.getEnumerator();
                            this.$state = 7;
                            break;
                        case 2:
                            this.$d = this.$e.current();
                            this.$state = 3;
                            break;
                        case 3:
                            if (!isNaN(this.$d)) {
                                this.$state = 4
                            } else {
                                this.$state = 5
                            }
                            break;
                        case 4:
                            this.$b = isNaN(this.$b) ? this.$d : (this.$b * this.$c + this.$d) / (this.$c + 1);
                            ++this.$c;
                            this.$state = 5;
                            break;
                        case 5:
                            this.$current = this.$b;
                            this.$state = 6;
                            return true;
                        case 6:
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
            }}
        }(d)
    };
    return new $.ig.GenericEnumerable$1(Number, b)
}, e: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: 0, $e: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$c = new Array(h);
                            this.$d = 0;
                            this.$state = 1;
                            break;
                        case 1:
                            this.$d = 0;
                            this.$state = 4;
                            break;
                        case 2:
                            this.$c[this.$d] = 0;
                            this.$state = 3;
                            break;
                        case 3:
                            this.$d++;
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$d < h) {
                                this.$state = 2
                            } else {
                                this.$state = 5
                            }
                            break;
                        case 5:
                            this.$d = 0;
                            this.$e = NaN;
                            this.$state = 6;
                            break;
                        case 6:
                            this.$g = g.getEnumerator();
                            this.$state = 16;
                            break;
                        case 7:
                            this.$f = this.$g.current();
                            this.$state = 8;
                            break;
                        case 8:
                            if (!isNaN(this.$f)) {
                                this.$state = 9
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 9:
                            this.$h = this.$f / h;
                            this.$i = this.$d % h;
                            this.$state = 10;
                            break;
                        case 10:
                            if (this.$d < h) {
                                this.$state = 11
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 11:
                            this.$e = isNaN(this.$e) ? this.$f : (this.$e * this.$d + this.$f) / (this.$d + 1);
                            this.$state = 13;
                            break;
                        case 12:
                            this.$e = this.$e + this.$h - this.$c[this.$i];
                            this.$state = 13;
                            break;
                        case 13:
                            this.$c[this.$i] = this.$h;
                            ++this.$d;
                            this.$state = 14;
                            break;
                        case 14:
                            this.$current = this.$e;
                            this.$state = 15;
                            return true;
                        case 15:
                            this.$state = 16;
                            break;
                        case 16:
                            if (this.$g.moveNext()) {
                                this.$state = 7
                            } else {
                                this.$state = 17
                            }
                            break;
                        case 17:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, f: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: 0, $e: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$c = new Array(h);
                            this.$d = 0;
                            this.$state = 1;
                            break;
                        case 1:
                            this.$d = 0;
                            this.$state = 4;
                            break;
                        case 2:
                            this.$c[this.$d] = 0;
                            this.$state = 3;
                            break;
                        case 3:
                            this.$d++;
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$d < h) {
                                this.$state = 2
                            } else {
                                this.$state = 5
                            }
                            break;
                        case 5:
                            this.$d = 0;
                            this.$e = NaN;
                            this.$state = 6;
                            break;
                        case 6:
                            this.$g = g.getEnumerator();
                            this.$state = 16;
                            break;
                        case 7:
                            this.$f = this.$g.current();
                            this.$state = 8;
                            break;
                        case 8:
                            if (!isNaN(this.$f)) {
                                this.$state = 9
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 9:
                            this.$h = this.$f;
                            this.$i = this.$d % h;
                            this.$state = 10;
                            break;
                        case 10:
                            if (this.$d < h) {
                                this.$state = 11
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 11:
                            this.$e = isNaN(this.$e) ? this.$h : this.$e + this.$h;
                            this.$state = 13;
                            break;
                        case 12:
                            this.$e = this.$e + this.$h - this.$c[this.$i];
                            this.$state = 13;
                            break;
                        case 13:
                            this.$c[this.$i] = this.$h;
                            ++this.$d;
                            this.$state = 14;
                            break;
                        case 14:
                            this.$current = this.$e;
                            this.$state = 15;
                            return true;
                        case 15:
                            this.$state = 16;
                            break;
                        case 16:
                            if (this.$g.moveNext()) {
                                this.$state = 7
                            } else {
                                this.$state = 17
                            }
                            break;
                        case 17:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, g: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: null, $e: null, $f: 0, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$c = $.ig.TrendCalculators.prototype.e(g, h).getEnumerator();
                            this.$d = g.getEnumerator();
                            this.$e = new Array(h);
                            this.$f = 0;
                            this.$state = 1;
                            break;
                        case 1:
                            this.$f = 0;
                            this.$state = 4;
                            break;
                        case 2:
                            this.$e[this.$f] = 0;
                            this.$state = 3;
                            break;
                        case 3:
                            this.$f++;
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$f < h) {
                                this.$state = 2
                            } else {
                                this.$state = 5
                            }
                            break;
                        case 5:
                            this.$f = 0;
                            this.$state = 6;
                            break;
                        case 6:
                            this.$state = 24;
                            break;
                        case 7:
                            this.$e[(this.$f++) % h] = this.$d.current();
                            this.$g = 0;
                            this.$state = 8;
                            break;
                        case 8:
                            if (this.$f < h) {
                                this.$state = 9
                            } else {
                                this.$state = 16
                            }
                            break;
                        case 9:
                            this.$h = 0;
                            this.$state = 10;
                            break;
                        case 10:
                            this.$i = 0;
                            this.$state = 13;
                            break;
                        case 11:
                            this.$j = (this.$c.current() - this.$e[this.$i]);
                            this.$g += this.$j * this.$j;
                            this.$h++;
                            this.$state = 12;
                            break;
                        case 12:
                            this.$i++;
                            this.$state = 13;
                            break;
                        case 13:
                            if (this.$i < this.$f) {
                                this.$state = 11
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 14:
                            this.$current = Math.sqrt(this.$g / this.$h);
                            this.$state = 15;
                            return true;
                        case 15:
                            this.$state = 23;
                            break;
                        case 16:
                            this.$state = 17;
                            break;
                        case 17:
                            this.$k = 0;
                            this.$state = 20;
                            break;
                        case 18:
                            this.$l = (this.$c.current() - this.$e[this.$k]);
                            this.$g += this.$l * this.$l;
                            this.$state = 19;
                            break;
                        case 19:
                            ++this.$k;
                            this.$state = 20;
                            break;
                        case 20:
                            if (this.$k < h) {
                                this.$state = 18
                            } else {
                                this.$state = 21
                            }
                            break;
                        case 21:
                            this.$current = Math.sqrt(this.$g / h);
                            this.$state = 22;
                            return true;
                        case 22:
                            this.$state = 23;
                            break;
                        case 23:
                            this.$state = 24;
                            break;
                        case 24:
                            if (this.$d.moveNext() && this.$c.moveNext()) {
                                this.$state = 7
                            } else {
                                this.$state = 25
                            }
                            break;
                        case 25:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, $type: new $.ig.Type("TrendCalculators", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IFastItemColumnInternal", "Object", {$type: new $.ig.Type("IFastItemColumnInternal", null)}, true);
$.ig.util.defType("IFastItemColumnPropertyName", "Object", {$type: new $.ig.Type("IFastItemColumnPropertyName", null)}, true);
$.ig.util.defType("IFastItemColumn$1", "Object", {$type: new $.ig.Type("IFastItemColumn$1", null, [$.ig.IList$1.prototype.$type.specialize(0), $.ig.IFastItemColumnPropertyName.prototype.$type])}, true);
$.ig.util.defType("FastItemColumn", "Object", {a: null, init: function (d, e, f) {
    this.a = null;
    this.__propertyName = null;
    $.ig.Object.prototype.init.call(this);
    this.a = f;
    this.propertyName(e);
    this.g(d)
}, g: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        this.reset();
        return b
    } else {
        return this.b
    }
}, b: null, __propertyName: null, propertyName: function (b) {
    if (arguments.length === 1) {
        this.__propertyName = b;
        return b
    } else {
        return this.__propertyName
    }
}, minimum: function (d) {
    if (arguments.length === 1) {
        this.c = d;
        return d
    } else {
        if (isNaN(this.c) && this.h() != null) {
            this.c = Number.POSITIVE_INFINITY;
            var f = this.h().getEnumerator();
            while (f.moveNext()) {
                var e = f.current();
                if (!isNaN(e)) {
                    this.c = Math.min(this.c, e)
                }
            }
        }
        return this.c
    }
}, c: null, maximum: function (d) {
    if (arguments.length === 1) {
        this.d = d;
        return d
    } else {
        if (isNaN(this.d) && this.h() != null) {
            this.d = Number.NEGATIVE_INFINITY;
            var f = this.h().getEnumerator();
            while (f.moveNext()) {
                var e = f.current();
                if (!isNaN(e)) {
                    this.d = Math.max(this.d, e)
                }
            }
        }
        return this.d
    }
}, d: null, item: function (d, c) {
    if (arguments.length === 2) {
        this.h().__inner[d] = c;
        return c
    } else {
        return this.h().__inner[d]
    }
}, getEnumerator: function () {
    return this.h().getEnumerator()
}, contains: function (b) {
    return this.h().contains(b)
}, n: function (c, d) {
    this.h().copyTo(c, d)
}, count: function () {
    return this.h().count()
}, isReadOnly: function () {
    return true
}, indexOf: function (b) {
    return this.h().indexOf(b)
}, add: function (b) {
    throw new $.ig.NotImplementedException()
}, clear: function () {
    throw new $.ig.NotImplementedException()
}, remove: function (b) {
    throw new $.ig.NotImplementedException()
}, insert: function (c, d) {
    throw new $.ig.NotImplementedException()
}, removeAt: function (b) {
    throw new $.ig.NotImplementedException()
}, reset: function () {
    this.h(null);
    this.minimum(NaN);
    this.maximum(NaN);
    return this.g() != null ? this.insertRange(0, this.g().g()) : true
}, insertRange: function (m, n) {
    var o = new Array(n);
    var z = this.b.ad();
    var p;
    var q = this.minimum();
    var r = this.maximum();
    var s = isNaN(this.minimum());
    var t = isNaN(this.maximum());
    var u = 0;
    var w;
    if (this.a != null) {
        for (var v = m; v < m + n; ++v) {
            p = z[v][this.__propertyName];
            p = this.a(p);
            w = p == null ? NaN : p;
            var x = (w != w);
            if (s || w < q) {
                q = w;
                s = x
            }
            if (t || w > r) {
                r = w;
                t = x
            }
            o[u] = w;
            u++
        }
    } else {
        for (var v = m; v < m + n; ++v) {
            p = z[v][this.__propertyName];
            w = p == null ? NaN : p;
            var y = (w != w);
            if (s || w < q) {
                q = w;
                s = y
            }
            if (t || w > r) {
                r = w;
                t = y
            }
            o[u] = w;
            u++
        }
    }
    this.minimum(q);
    this.maximum(r);
    if (this.h() == null) {
        this.h(new $.ig.List$1(Number, 1, o))
    } else {
        this.h().p(m, o)
    }
    return true
}, removeRange: function (d, e) {
    for (var f = d; f < d + e && !isNaN(this.minimum()) && !isNaN(this.maximum()); ++f) {
        if (this.item(f) == this.minimum()) {
            this.minimum(NaN)
        }
        if (this.item(f) == this.maximum()) {
            this.maximum(NaN)
        }
    }
    this.h().q(d, e);
    return true
}, o: function (c, d) {
    if (isNaN(c)) {
        if (!isNaN(d)) {
            if (!isNaN(this.minimum())) {
                this.minimum(Math.min(d, this.minimum()))
            }
            if (!isNaN(this.maximum())) {
                this.maximum(Math.max(d, this.maximum()))
            }
        }
        return
    }
    if (isNaN(d)) {
        this.minimum(!isNaN(this.minimum()) && c == this.minimum() ? NaN : this.minimum());
        this.maximum(!isNaN(this.maximum()) && c == this.maximum() ? NaN : this.maximum());
        return
    }
    if (!isNaN(this.minimum())) {
        if (c == this.minimum() && d > this.minimum()) {
            this.minimum(NaN)
        } else {
            this.minimum(Math.min(d, this.minimum()))
        }
    }
    if (!isNaN(this.maximum())) {
        if (c == this.maximum() && d < this.maximum()) {
            this.maximum(NaN)
        } else {
            this.maximum(Math.max(d, this.maximum()))
        }
    }
}, replaceRange: function (g, h) {
    var i = false;
    for (var j = 0; j < h; ++j) {
        var k = this.h().__inner[g + j];
        var l = this.p(this.g().item(g + j));
        if (k != l) {
            this.h().__inner[g + j] = l;
            i = true;
            this.o(k, l)
        }
    }
    return i
}, e: null, p: function (b) {
    if (b == null) {
        return NaN
    }
    var c = b;
    b = c[this.__propertyName];
    if (this.a != null) {
        b = this.a(b)
    }
    if (b == null) {
        return NaN
    }
    return b;
    if ($.ig.util.cast(Number, b) !== null) {
        return b
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, s: function (d) {
    var e = new $.ig.List$1($.ig.Number.prototype.$type, 2, d.count());
    for (var f = 0; f < d.count(); f++) {
        e.add(f)
    }
    e.r();
    return e
}, t: function () {
    return $.ig.FastItemColumn.prototype.s(this.h())
}, asArray: function () {
    return this.h().asArrayList()
}, $type: new $.ig.Type("FastItemColumn", $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize(Number)])}, true);
$.ig.util.defType("FastItemDateTimeColumn", "Object", {a: null, init: function (d, e, f) {
    this.__propertyName = null;
    this.c = false;
    this.d = false;
    $.ig.Object.prototype.init.call(this);
    this.a = f;
    this.propertyName(e);
    this.i(d)
}, i: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        this.reset();
        return b
    } else {
        return this.b
    }
}, b: null, __propertyName: null, propertyName: function (b) {
    if (arguments.length === 1) {
        this.__propertyName = b;
        return b
    } else {
        return this.__propertyName
    }
}, c: null, d: null, minimum: function (d) {
    if (arguments.length === 1) {
        this.e = d;
        return d
    } else {
        if (!this.c && this.j() != null) {
            var f = this.j().getEnumerator();
            while (f.moveNext()) {
                var e = f.current();
                if (e < this.e) {
                    this.e = e
                }
            }
            if (this.j().count() > 0) {
                this.c = true
            }
        }
        return this.e
    }
}, e: null, maximum: function (d) {
    if (arguments.length === 1) {
        this.f = d;
        return d
    } else {
        if (!this.d && this.j() != null) {
            var f = this.j().getEnumerator();
            while (f.moveNext()) {
                var e = f.current();
                if (e > this.f) {
                    this.f = e
                }
            }
            if (this.j().count() > 0) {
                this.d = true
            }
        }
        return this.f
    }
}, f: null, item: function (d, c) {
    if (arguments.length === 2) {
        throw new $.ig.NotImplementedException();
        return c
    } else {
        return this.j().__inner[d]
    }
}, getEnumerator: function () {
    return this.j().getEnumerator()
}, contains: function (b) {
    return this.j().contains(b)
}, p: function (c, d) {
    this.j().copyTo(c, d)
}, count: function () {
    return this.j().count()
}, isReadOnly: function () {
    return true
}, indexOf: function (b) {
    return this.j().indexOf(b)
}, add: function (b) {
    throw new $.ig.NotImplementedException()
}, clear: function () {
    throw new $.ig.NotImplementedException()
}, remove: function (b) {
    throw new $.ig.NotImplementedException()
}, insert: function (c, d) {
    throw new $.ig.NotImplementedException()
}, removeAt: function (b) {
    throw new $.ig.NotImplementedException()
}, reset: function () {
    this.j(null);
    this.c = false;
    this.d = false;
    return this.i() != null ? this.insertRange(0, this.i().g()) : true
}, insertRange: function (i, j) {
    var k = new Array(j);
    var r = this.b.ad();
    var l;
    var m = this.minimum();
    var n = this.maximum();
    var o;
    var p = 0;
    if (this.a != null) {
        for (var q = i; q < i + j; ++q) {
            l = r[q][this.__propertyName];
            l = this.a(l);
            o = l == null ? new Date() : l;
            if (!this.c) {
                m = o;
                this.c = true
            } else {
                if (o < m) {
                    m = o
                }
            }
            if (!this.d) {
                n = o;
                this.d = true
            } else {
                if (o > n) {
                    n = o
                }
            }
            k[p] = o;
            p++
        }
    } else {
        for (var q = i; q < i + j; ++q) {
            l = r[q][this.__propertyName];
            o = l == null ? new Date() : l;
            if (!this.c) {
                m = o;
                this.c = true
            } else {
                if (o < m) {
                    m = o
                }
            }
            if (!this.d) {
                n = o;
                this.d = true
            } else {
                if (o > n) {
                    n = o
                }
            }
            k[p] = o;
            p++
        }
    }
    this.minimum(m);
    this.maximum(n);
    if (this.j() == null) {
        this.j(new $.ig.List$1($.ig.Date.prototype.$type, 1, k))
    } else {
        this.j().p(i, k)
    }
    return true
}, removeRange: function (d, e) {
    for (var f = d; f < d + e; ++f) {
        if (this.item(f) == this.minimum()) {
            this.c = false
        }
        if (this.item(f) == this.maximum()) {
            this.d = false
        }
    }
    this.j().q(d, e);
    return true
}, q: function (c, d) {
    if (c != $.ig.Date.prototype.minValue()) {
        if (d != $.ig.Date.prototype.minValue()) {
            this.minimum(d < this.minimum() ? d : this.minimum());
            this.maximum(d > this.maximum() ? d : this.maximum())
        }
        return
    }
    this.minimum(d < this.minimum() ? d : this.minimum());
    this.maximum(d > this.maximum() ? d : this.maximum())
}, replaceRange: function (g, h) {
    var i = false;
    for (var j = 0; j < h; ++j) {
        var k = this.j().__inner[g + j];
        var l = this.r(this.i().item(g + j));
        if (k != l) {
            this.j().__inner[g + j] = l;
            i = true;
            this.q(k, l)
        }
    }
    return i
}, g: null, r: function (b) {
    if (b == null) {
        return $.ig.Date.prototype.minValue()
    }
    var c = b;
    b = c[this.__propertyName];
    if (this.a != null) {
        b = this.a(b)
    }
    if (b == null) {
        return $.ig.Date.prototype.minValue()
    }
    return b
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, u: function () {
    return $.ig.FastItemColumn.prototype.s(this.j())
}, asArray: function () {
    return this.j().asArrayList()
}, $type: new $.ig.Type("FastItemDateTimeColumn", $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Date.prototype.$type)])}, true);
$.ig.util.defType("FastItemObjectColumn", "Object", {a: null, init: function (d, e, f) {
    $.ig.Object.prototype.init.call(this);
    this.a = f;
    this.propertyName(e);
    this.g(d)
}, g: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        this.reset();
        return b
    } else {
        return this.b
    }
}, b: null, __propertyName: null, propertyName: function (b) {
    if (arguments.length === 1) {
        this.__propertyName = b;
        return b
    } else {
        return this.__propertyName
    }
}, minimum: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        return b
    } else {
        return this.c
    }
}, c: null, maximum: function (b) {
    if (arguments.length === 1) {
        this.d = b;
        return b
    } else {
        return this.d
    }
}, d: null, item: function (d, c) {
    if (arguments.length === 2) {
        throw new $.ig.NotImplementedException();
        return c
    } else {
        return this.h().__inner[d]
    }
}, getEnumerator: function () {
    return this.h().getEnumerator()
}, contains: function (b) {
    return this.h().contains1(b)
}, n: function (c, d) {
    this.h().copyTo(c, d)
}, count: function () {
    return this.h().count()
}, isReadOnly: function () {
    return true
}, indexOf: function (b) {
    return this.h().indexOf1(b)
}, add: function (b) {
    throw new $.ig.NotImplementedException()
}, clear: function () {
    throw new $.ig.NotImplementedException()
}, remove: function (b) {
    throw new $.ig.NotImplementedException()
}, insert: function (c, d) {
    throw new $.ig.NotImplementedException()
}, removeAt: function (b) {
    throw new $.ig.NotImplementedException()
}, reset: function () {
    this.h(null);
    return this.g() != null ? this.insertRange(0, this.g().g()) : true
}, insertRange: function (g, h) {
    var f = this;
    var i = (function () {
        var a = new $.ig.List$1($.ig.Object.prototype.$type, 0);
        a.h(h);
        return a
    }());
    for (var j = g; j < g + h; ++j) {
        var k = this.o(this.g().item(j));
        i.add1(k)
    }
    if (this.h() == null) {
        this.h(i)
    } else {
        this.h().p(g, i)
    }
    return true
}, replaceRange: function (g, h) {
    var i = false;
    for (var j = 0; j < h; ++j) {
        var k = this.h().__inner[g + j];
        var l = this.o(this.g().item(g + j));
        if (k != l) {
            this.h().__inner[g + j] = l;
            i = true
        }
    }
    return i
}, removeRange: function (c, d) {
    this.h().q(c, d);
    return true
}, e: null, o: function (b) {
    if (b == null) {
        return null
    }
    var c = b;
    b = c[this.__propertyName];
    if (this.a != null) {
        b = this.a(b)
    }
    return b
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, r: function () {
    return $.ig.FastItemColumn.prototype.s(this.h())
}, asArray: function () {
    return this.h().asArrayList()
}, $type: new $.ig.Type("FastItemObjectColumn", $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type)])}, true);
$.ig.util.defType("FastItemIntColumn", "Object", {a: null, init: function (d, e, f) {
    this.__propertyName = null;
    $.ig.Object.prototype.init.call(this);
    this.a = f;
    this.propertyName(e);
    this.g(d)
}, g: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        this.reset();
        return b
    } else {
        return this.b
    }
}, b: null, __propertyName: null, propertyName: function (b) {
    if (arguments.length === 1) {
        this.__propertyName = b;
        return b
    } else {
        return this.__propertyName
    }
}, minimum: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        return b
    } else {
        return this.c
    }
}, c: null, maximum: function (b) {
    if (arguments.length === 1) {
        this.d = b;
        return b
    } else {
        return this.d
    }
}, d: null, item: function (d, c) {
    if (arguments.length === 2) {
        throw new $.ig.NotImplementedException();
        return c
    } else {
        return this.h().__inner[d]
    }
}, getEnumerator: function () {
    return this.h().getEnumerator()
}, contains: function (b) {
    return this.h().contains(b)
}, n: function (c, d) {
    this.h().copyTo(c, d)
}, count: function () {
    return this.h().count()
}, isReadOnly: function () {
    return true
}, indexOf: function (b) {
    return this.h().indexOf(b)
}, add: function (b) {
    throw new $.ig.NotImplementedException()
}, clear: function () {
    throw new $.ig.NotImplementedException()
}, remove: function (b) {
    throw new $.ig.NotImplementedException()
}, insert: function (c, d) {
    throw new $.ig.NotImplementedException()
}, removeAt: function (b) {
    throw new $.ig.NotImplementedException()
}, reset: function () {
    this.h(null);
    return this.g() != null ? this.insertRange(0, this.g().g()) : true
}, insertRange: function (j, k) {
    var l = new Array(k);
    var t = this.b.ad();
    var m;
    var n = this.minimum();
    var o = this.maximum();
    var p = 0;
    if (this.a != null) {
        for (var s = j; s < j + k; ++s) {
            m = t[s][this.__propertyName];
            if (this.a != null) {
                m = this.a(m)
            }
            var q = m == null ? 0 : m;
            l[p] = q;
            p++
        }
    } else {
        for (var s = j; s < j + k; ++s) {
            m = t[s][this.__propertyName];
            var r = m == null ? 0 : m;
            l[p] = r;
            p++
        }
    }
    if (this.h() == null) {
        this.h(new $.ig.List$1($.ig.Number.prototype.$type, 1, l))
    } else {
        this.h().p(j, l)
    }
    return true
}, replaceRange: function (g, h) {
    var i = false;
    for (var j = 0; j < h; ++j) {
        var k = this.h().__inner[g + j];
        var l = this.o(this.g().item(g + j));
        if (k != l) {
            this.h().__inner[g + j] = l;
            i = true
        }
    }
    return i
}, removeRange: function (c, d) {
    this.h().q(c, d);
    return true
}, e: null, o: function (b) {
    var c = b;
    b = c[this.__propertyName];
    if (this.a != null) {
        b = this.a(b)
    }
    if (b == null) {
        return 0
    }
    return b
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, r: function () {
    return $.ig.FastItemColumn.prototype.s(this.h())
}, asArray: function () {
    return this.h().asArrayList()
}, $type: new $.ig.Type("FastItemIntColumn", $.ig.Object.prototype.$type, [$.ig.IFastItemColumnInternal.prototype.$type, $.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Number.prototype.$type)])}, true);
$.ig.util.defType("FastItemsSource", "Object", {init: function () {
    this.b = new $.ig.Dictionary$2(String, $.ig.ColumnReference.prototype.$type, 0);
    this.d = new $.ig.List$1($.ig.Object.prototype.$type, 0);
    this.e = null;
    $.ig.Object.prototype.init.call(this)
}, event: null, j: function (d, e, f) {
    if (this.event != null) {
        this.event(this, new $.ig.FastItemsSourceEventArgs(0, d, e, f))
    }
}, k: function (c, d) {
    if (this.event != null) {
        this.event(this, new $.ig.FastItemsSourceEventArgs(1, c, d))
    }
}, f: function (d) {
    if (arguments.length === 1) {
        if (this.c == d) {
            return
        }
        this.n();
        this.c = d;
        this.d.clear();
        this.e = null;
        this.o();
        var f = this.b.values().getEnumerator();
        while (f.moveNext()) {
            var e = f.current();
            e.a.reset()
        }
        this.j($.ig.FastItemsSourceEventAction.prototype.insert, 0, this.d.count());
        return d
    } else {
        return this.c
    }
}, n: function () {
}, o: function () {
    this.d.o(this.d.count(), this.c)
}, p: function (g, h) {
    if (this.e != null) {
        for (var i = 0; i < h.count(); ++i) {
            this.e.add(h.item(i), g + i)
        }
        for (var j = g; j < this.d.count(); ++j) {
            this.e.item(this.d.__inner[j], j + h.count())
        }
    }
    this.d.o(g, h);
    var l = this.b.values().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        k.a.insertRange(g, h.count())
    }
    this.j($.ig.FastItemsSourceEventAction.prototype.insert, g, h.count())
}, q: function (h, i) {
    this.d.q(h, i.count());
    if (this.e != null) {
        var k = i.getEnumerator();
        while (k.moveNext()) {
            var j = k.current();
            this.e.remove(j)
        }
        for (var l = h; l < this.d.count(); ++l) {
            this.e.item(this.d.__inner[l], l)
        }
    }
    var n = this.b.values().getEnumerator();
    while (n.moveNext()) {
        var m = n.current();
        m.a.removeRange(h, i.count())
    }
    this.j($.ig.FastItemsSourceEventAction.prototype.remove, h, i.count())
}, r: function (j, k, l) {
    for (var m = 0; m < l.count(); ++m) {
        this.d.__inner[j + m] = l.item(m)
    }
    if (this.e != null) {
        var o = k.getEnumerator();
        while (o.moveNext()) {
            var n = o.current();
            this.e.remove(n)
        }
        for (var p = 0; p < l.count(); ++p) {
            this.e.add(l.item(p), j + p)
        }
    }
    var r = this.b.values().getEnumerator();
    while (r.moveNext()) {
        var q = r.current();
        q.a.replaceRange(j, l.count())
    }
    this.j($.ig.FastItemsSourceEventAction.prototype.replace, j, k.count())
}, s: function () {
    this.d.clear();
    this.e = null;
    this.d.o(0, this.c);
    var d = this.b.values().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        c.a.reset()
    }
    this.j($.ig.FastItemsSourceEventAction.prototype.reset, 0, this.d.count())
}, t: function (f, g) {
    var e = this;
    var h = null;
    var i = this.x(f);
    if (i == -1) {
        throw new $.ig.ArgumentException(0, "item")
    }
    if ((function () {
        var a = e.b.tryGetValue(g, h);
        h = a.value;
        return a.ret
    }())) {
        h.a.replaceRange(i, 1)
    }
    if ((function () {
        var a = e.b.tryGetValue(g + "_object", h);
        h = a.value;
        return a.ret
    }())) {
        h.a.replaceRange(i, 1)
    }
    this.k(i, g)
}, g: function () {
    return this.d.count()
}, item: function (a) {
    return this.d.__inner[a]
}, getEnumerator: function () {
    return this.d.getEnumerator()
}, item1: function (a) {
    return this.x(a)
}, x: function (g) {
    var f = this;
    var h;
    if (this.e == null && this.d.count() > 0) {
        this.e = new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.Number.prototype.$type, 0);
        var i = 0;
        var k = this.d.getEnumerator();
        while (k.moveNext()) {
            var j = k.current();
            if (!this.e.containsKey(j)) {
                this.e.add(j, i++)
            }
        }
    }
    if ((function () {
        var a = f.e.tryGetValue(g, h);
        h = a.value;
        return a.ret
    }())) {
        return h
    } else {
        return -1
    }
}, y: function (f, g) {
    var e = this;
    var h = null;
    if (f != null) {
        var i = null;
        if (!(function () {
            var a = e.b.tryGetValue(f, i);
            i = a.value;
            return a.ret
        }())) {
            i = new $.ig.ColumnReference(new $.ig.FastItemDateTimeColumn(this, f, g));
            this.b.add(f, i)
        }
        i.c(i.c() + 1);
        h = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Date.prototype.$type), i.a)
    }
    return h
}, z: function (g, h) {
    var f = this;
    var i = null;
    var j = g + "_object";
    if (g != null) {
        var k = null;
        if (!(function () {
            var a = f.b.tryGetValue(j, k);
            k = a.value;
            return a.ret
        }())) {
            k = new $.ig.ColumnReference(new $.ig.FastItemObjectColumn(this, g, h));
            this.b.add(j, k)
        }
        k.c(k.c() + 1);
        i = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type), k.a)
    }
    return i
}, aa: function (f, g) {
    var e = this;
    var h = null;
    if (f == null) {
        f = ""
    }
    var i = null;
    if (!(function () {
        var a = e.b.tryGetValue(f, i);
        i = a.value;
        return a.ret
    }())) {
        i = new $.ig.ColumnReference(new $.ig.FastItemIntColumn(this, f, g));
        this.b.add(f, i)
    }
    i.c(i.c() + 1);
    h = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Number.prototype.$type), i.a);
    return h
}, ab: function (f, g) {
    var e = this;
    var h = null;
    if (f == null) {
        f = ""
    }
    var i = null;
    if (!(function () {
        var a = e.b.tryGetValue(f, i);
        i = a.value;
        return a.ret
    }())) {
        i = new $.ig.ColumnReference(new $.ig.FastItemColumn(this, f, g));
        this.b.add(f, i)
    }
    i.c(i.c() + 1);
    h = $.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize(Number), i.a);
    return h
}, ac: function (f) {
    var e = this;
    var g = f != null ? f.propertyName() : null;
    var h = g;
    if ($.ig.util.cast($.ig.IFastItemColumn$1.prototype.$type.specialize($.ig.Object.prototype.$type), f) !== null) {
        h += "_object"
    }
    if (g != null) {
        var i = null;
        if ((function () {
            var a = e.b.tryGetValue(g, i);
            i = a.value;
            return a.ret
        }())) {
            i.c(i.c() - 1);
            if (i.c() == 0) {
                this.b.remove(g)
            }
        }
    }
}, b: null, c: null, d: null, e: null, ad: function () {
    return this.d.asArrayList()
}, ae: function (b) {
    switch (b.action()) {
        case $.ig.NotifyCollectionChangedAction.prototype.add:
            this.p(b.newStartingIndex(), b.newItems());
            break;
        case $.ig.NotifyCollectionChangedAction.prototype.remove:
            this.q(b.oldStartingIndex(), b.oldItems());
            break;
        case $.ig.NotifyCollectionChangedAction.prototype.replace:
            this.r(b.newStartingIndex(), b.oldItems(), b.newItems());
            break;
        case $.ig.NotifyCollectionChangedAction.prototype.reset:
            this.s();
            break
    }
}, $type: new $.ig.Type("FastItemsSource", $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])}, true);
$.ig.util.defType("ColumnReference", "Object", {init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = b;
    this.c(0)
}, a: null, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, $type: new $.ig.Type("ColumnReference", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("FastItemsSourceEventArgs", "EventArgs", {init: function (g, d, e, f) {
    if (g > 0) {
        switch (g) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.EventArgs.prototype.init.call(this);
    this.action(d);
    this.position(e);
    this.count(f);
    this.propertyName(null)
}, init1: function (e, c, d) {
    $.ig.EventArgs.prototype.init.call(this);
    this.action($.ig.FastItemsSourceEventAction.prototype.change);
    this.position(c);
    this.count(1);
    this.propertyName(d)
}, _action: null, action: function (b) {
    if (arguments.length === 1) {
        this._action = b;
        return b
    } else {
        return this._action
    }
}, _position: null, position: function (b) {
    if (arguments.length === 1) {
        this._position = b;
        return b
    } else {
        return this._position
    }
}, _count: null, count: function (b) {
    if (arguments.length === 1) {
        this._count = b;
        return b
    } else {
        return this._count
    }
}, _propertyName: null, propertyName: function (b) {
    if (arguments.length === 1) {
        this._propertyName = b;
        return b
    } else {
        return this._propertyName
    }
}, $type: new $.ig.Type("FastItemsSourceEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("FastReflectionHelper", "Object", {init: function (c, d) {
    $.ig.Object.prototype.init.call(this);
    this.b(c);
    this.d(d)
}, __propertyName: null, d: function (b) {
    this.__propertyName = b
}, _b: null, b: function (b) {
    if (arguments.length === 1) {
        this._b = b;
        return b
    } else {
        return this._b
    }
}, g: function (b) {
    var c = b;
    return c[this.__propertyName]
}, c: function () {
    return false
}, $type: new $.ig.Type("FastReflectionHelper", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IRenderer", "Object", {$type: new $.ig.Type("IRenderer", null)}, true);
$.ig.util.defType("RectChangedEventArgs", "EventArgs", {init: function (c, d) {
    $.ig.EventArgs.prototype.init.call(this);
    this.oldRect(c);
    this.newRect(d)
}, _oldRect: null, oldRect: function (b) {
    if (arguments.length === 1) {
        this._oldRect = b;
        return b
    } else {
        return this._oldRect
    }
}, _newRect: null, newRect: function (b) {
    if (arguments.length === 1) {
        this._newRect = b;
        return b
    } else {
        return this._newRect
    }
}, $type: new $.ig.Type("RectChangedEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("CanvasRenderScheduler", "Object", {init: function () {
    this.a = true;
    this.b = false;
    this.c = -1;
    $.ig.Object.prototype.init.call(this);
    this.g(new $.ig.List$1($.ig.ISchedulableRender.prototype.$type, 0));
    this.h(new $.ig.List$1($.ig.CanvasRenderScheduler.prototype.$type, 0))
}, a: null, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, m: function (b) {
    this.a = true;
    this.g().add(b)
}, n: function (b) {
    this.a = true;
    this.g().remove(b)
}, b: null, c: null, o: function () {
    if (!this.b) {
        this.b = true;
        this.c = window.setTimeout(this.r.on(this), 0)
    }
}, p: function (c, d) {
    this.o()
}, q: function () {
    if (this.c != -1) {
        window.clearTimeout(this.c);
        this.c = -1
    }
    if (this.b) {
        this.r()
    }
}, r: function () {
    this.c = -1;
    if (this.b) {
        this.b = false;
        if (this.h().count() > 0) {
            for (var b = 0; b < this.h().count(); b++) {
                this.h().__inner[b].q()
            }
        }
        if (this.a) {
            this.t()
        }
        this.s()
    }
}, s: function () {
    var f = true;
    for (var g = 0; g < this.g().count(); g++) {
        var h = this.g().__inner[g];
        h.undirty(f);
        f = false
    }
    for (var i = 0; i < this.g().count(); i++) {
        var j = this.g().__inner[i];
        j.postRender()
    }
}, t: function () {
    var a = this;
    this.g().t(function (e, f) {
        var g = e;
        var h = f;
        if (g.index() < h.index()) {
            return -1
        }
        if (g.index() > h.index()) {
            return 1
        }
        return 0
    });
    this.a = false
}, $type: new $.ig.Type("CanvasRenderScheduler", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CanvasViewRenderer", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, getUnderlyingContext: function () {
    return this.a
}, data: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, renderRectangle: function (b) {
    if (b.__visibility != $.ig.Visibility.prototype.visible) {
        return
    }
    this.a.beginPath();
    this.a.globalAlpha = b.__opacity;
    this.a.rect(b.y(), b.x(), b.v(), b.w());
    if (b.__fill != null) {
        this.a.fillStyle = b.__fill.__fill;
        this.a.fill()
    }
    if (b.__stroke != null) {
        this.a.strokeStyle = b.__stroke.__fill;
        this.a.lineWidth = b.a7();
        this.a.stroke()
    }
    this.a.globalAlpha = 1
}, renderPath: function (b) {
    if (b.__visibility != $.ig.Visibility.prototype.visible) {
        return
    }
    this.a.beginPath();
    if (b.__opacity < 1) {
        this.a.globalAlpha = b.__opacity
    }
    this.renderGeometry(b.bp());
    if (b.__fill != null) {
        this.a.fillStyle = b.__fill.__fill;
        this.a.fill()
    }
    if (b.__stroke != null) {
        this.a.strokeStyle = b.__stroke.__fill;
        this.a.lineWidth = b.a7();
        this.a.stroke()
    }
    if (b.__opacity < 1) {
        this.a.globalAlpha = 1
    }
}, renderGeometry: function (d) {
    if (d == null) {
        return
    }
    var e = d.a();
    switch (e) {
        case $.ig.GeometryType.prototype.group:
            for (var f = 0; f < (d).d().count(); f++) {
                this.renderGeometry((d).d().__inner[f])
            }
            break;
        case $.ig.GeometryType.prototype.path:
            this.d(d);
            break;
        case $.ig.GeometryType.prototype.line:
            this.k(d);
            break;
        case $.ig.GeometryType.prototype.rectangle:
            this.j(d);
            break;
        case $.ig.GeometryType.prototype.ellipse:
            this.c(d);
            break
    }
}, c: function (e) {
    var d = this;
    this.b = {__x: e.f().__x, __y: e.f().__y - e.h(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var f = (function () {
        var a = new $.ig.ArcSegment();
        a.h({__x: e.f().__x, __y: e.f().__y + e.h(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        a.i(false);
        a.k(new $.ig.Size(e.g(), e.h()));
        return a
    }());
    var g = (function () {
        var a = new $.ig.ArcSegment();
        a.h({__x: e.f().__x, __y: e.f().__y - e.h(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        a.i(false);
        a.k(new $.ig.Size(e.g(), e.h()));
        return a
    }());
    this.g(f);
    this.g(g)
}, d: function (e) {
    var f = e.d();
    var g = f.count();
    for (var h = 0; h < g; h++) {
        this.e(f.__inner[h])
    }
}, e: function (e) {
    this.a.moveTo(e.__startPoint.__x, e.__startPoint.__y);
    this.b = e.__startPoint;
    var f = e.__segments;
    var g = f.count();
    for (var h = 0; h < g; h++) {
        this.f(f.__inner[h])
    }
    if (e.__isClosed && (this.b.__x != e.__startPoint.__x || this.b.__y != e.__startPoint.__y)) {
        this.a.lineTo(e.__startPoint.__x, e.__startPoint.__y)
    }
}, f: function (c) {
    var d = c.a();
    switch (d) {
        case $.ig.PathSegmentType.prototype.line:
            this.h(c);
            break;
        case $.ig.PathSegmentType.prototype.polyLine:
            this.i(c);
            break;
        case $.ig.PathSegmentType.prototype.arc:
            this.g(c);
            break
    }
}, b: null, g: function (w) {
    var x = this.b;
    var y = w.h();
    if (w.k().c() != w.k().d()) {
        this.a.save();
        this.a.scale(w.k().c() / w.k().d(), 1);
        x = {__x: x.__x * (w.k().d() / w.k().c()), __y: x.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        y = {__x: y.__x * (w.k().d() / w.k().c()), __y: y.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
    var z = {__x: (x.__x + y.__x) / 2, __y: (x.__y + y.__y) / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var A = y.__x - x.__x;
    var B = y.__y - x.__y;
    var C = Math.sqrt(A * A + B * B);
    var D = B;
    var E = A * -1;
    var F = w.j() == $.ig.SweepDirection.prototype.counterclockwise;
    if (w.i() == F) {
        D = B * -1;
        E = A
    }
    var G = Math.max(Math.abs(D), Math.abs(E));
    D = D / G;
    E = E / G;
    var H = Math.sqrt(D * D + E * E);
    var I = D / H;
    var J = E / H;
    var K = C / 2;
    var L = Math.sqrt(w.k().d() * w.k().d() - K * K);
    if (isNaN(L)) {
        L = 0
    }
    var M = L * I;
    var N = L * J;
    var O = {__x: z.__x + M, __y: z.__y + N, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var P = Math.atan2(x.__y - O.__y, x.__x - O.__x);
    var Q = Math.atan2(y.__y - O.__y, y.__x - O.__x);
    var R = (Math.abs(Q - P) < Math.PI);
    if (w.i() == R) {
        if (P < Q) {
            P += 2 * Math.PI
        } else {
            Q += 2 * Math.PI
        }
    }
    if (!isNaN(O.__x) && !isNaN(O.__y) && !isNaN(w.k().d()) && !isNaN(P) && !isNaN(Q)) {
        this.a.arc(O.__x, O.__y, w.k().d(), P, Q, F)
    }
    this.b = w.h();
    if (w.k().c() != w.k().d()) {
        this.a.restore()
    }
}, h: function (b) {
    this.a.lineTo(b.d().__x, b.d().__y);
    this.b = b.d()
}, i: function (e) {
    var f = e.__points;
    var g = f.count();
    for (var h = 0; h < g; h++) {
        this.a.lineTo(f.__inner[h].__x, f.__inner[h].__y)
    }
    this.b = e.__points.__inner[g - 1]
}, j: function (b) {
    this.a.rect(b.f().left(), b.f().top(), b.f().width(), b.f().height())
}, k: function (b) {
    this.a.moveTo(b.e().__x, b.e().__y);
    this.a.lineTo(b.f().__x, b.f().__y)
}, renderTextBlock: function (b) {
    if (b.__visibility == $.ig.Visibility.prototype.visible) {
        this.a.fillStyle = b.a6().__fill;
        this.a.textBaseline = "top";
        this.a.fillText(b.a5(), b.y(), b.x())
    }
}, renderPolygon: function (c) {
    if (c.bn() == null || c.bn().count() < 1) {
        return
    }
    this.a.beginPath();
    this.a.globalAlpha = c.__opacity;
    this.a.moveTo(c.bn().__inner[0].__x, c.bn().__inner[0].__y);
    for (var d = 1; d < c.bn().count(); d++) {
        this.a.lineTo(c.bn().__inner[d].__x, c.bn().__inner[d].__y)
    }
    this.a.lineTo(c.bn().__inner[0].__x, c.bn().__inner[0].__y);
    if (c.__fill != null) {
        this.a.fillStyle = c.__fill.__fill;
        this.a.fill()
    }
    if (c.__stroke != null) {
        this.a.strokeStyle = c.__stroke.__fill;
        this.a.lineWidth = c.a7();
        this.a.stroke()
    }
    this.a.globalAlpha = 1
}, renderPolyline: function (c) {
    if (c.bn() == null || c.bn().count() < 1) {
        return
    }
    this.a.beginPath();
    this.a.globalAlpha = c.__opacity;
    this.a.moveTo(c.bn().__inner[0].__x, c.bn().__inner[0].__y);
    for (var d = 1; d < c.bn().count(); d++) {
        this.a.lineTo(c.bn().__inner[d].__x, c.bn().__inner[d].__y)
    }
    if (c.__fill != null) {
        this.a.fillStyle = c.__fill.__fill;
        this.a.fill()
    }
    if (c.__stroke != null) {
        this.a.strokeStyle = c.__stroke.__fill;
        this.a.lineWidth = c.a7();
        this.a.stroke()
    }
    this.a.globalAlpha = 1
}, renderContentControl: function (d, e) {
    if (e.__visibility == $.ig.Visibility.prototype.collapsed) {
        return
    }
    if (e.__opacity != 1 && !d.isHitTestRender) {
        this.a.globalAlpha = e.__opacity
    }
    var f = e.ba();
    if (f != null && f.render() != null) {
        d.context = this.a;
        d.xPosition = e.y();
        d.yPosition = e.x();
        d.data = e.a9();
        f.render()(d)
    }
    this.a.globalAlpha = 1
}, applyTransform: function (l) {
    if ($.ig.util.cast($.ig.TransformGroup.prototype.$type, l) !== null) {
        var m = l;
        for (var n = m.f().count() - 1; n >= 0; n--) {
            var o = m.f().__inner[n];
            this.applyTransform(o)
        }
    } else {
        if ($.ig.util.cast($.ig.TranslateTransform.prototype.$type, l) !== null) {
            var p = l;
            this.a.translate(p.g(), p.h())
        } else {
            if ($.ig.util.cast($.ig.RotateTransform.prototype.$type, l) !== null) {
                var q = l;
                var r = q.h() * Math.PI / 180;
                var s = Math.cos(r);
                var t = Math.sin(r);
                var u = q.i() * (1 - s) + q.j() * t;
                var v = q.j() * (1 - s) - q.i() * t;
                this.a.transform(s, t, t * -1, s, u, v)
            }
        }
    }
}, renderLine: function (b) {
    if (b.__visibility != $.ig.Visibility.prototype.visible) {
        return
    }
    this.a.beginPath();
    this.a.globalAlpha = b.__opacity;
    this.a.moveTo(b.bq(), b.bs());
    this.a.lineTo(b.br(), b.bt());
    if (b.__fill != null) {
        this.a.fillStyle = b.__fill.__fill;
        this.a.fill()
    }
    if (b.__stroke != null) {
        this.a.strokeStyle = b.__stroke.__fill;
        this.a.lineWidth = b.a7();
        this.a.stroke()
    }
    this.a.globalAlpha = 1
}, setRectangleClip: function (b) {
    this.a.beginPath();
    this.a.rect(b.left(), b.top(), b.width(), b.height());
    this.a.clip()
}, save: function () {
    this.a.save()
}, restore: function () {
    this.a.restore()
}, scale: function (c, d) {
    this.a.scale(c, d)
}, translate: function (c, d) {
    this.a.translate(c, d)
}, clearRectangle: function (e, f, g, h) {
    this.a.clearRect(e, f, g, h)
}, drawImage: function (f, g, h, i, j) {
    this.a.drawImage(f, g, h, i, j)
}, drawImage1: function (j, k, l, m, n, o, p, q, r) {
    this.a.drawImage(j, k, l, m, n, o, p, q, r)
}, getPixelAt: function (e, f) {
    var g = this.a.getImageData(e, f, 1, 1);
    var h = new Array(4);
    h[0] = g.data[0];
    h[1] = g.data[1];
    h[2] = g.data[2];
    h[3] = g.data[3];
    return h
}, setFont: function (b) {
    if (this.a.font != b) {
        this.a.font = b
    }
}, measureTextWidth: function (c) {
    var d = this.a.measureText(c);
    return d.width
}, setOpacity: function (b) {
    this.a.globalAlpha = b
}, applyStyle: function (d, g) {
    var a = this;
    if (g == null) {
        return
    }
    var b = null;
    var e = null;
    var f = NaN;
    var c = NaN;
    if (g.fill) {
        b = g.fill
    }
    if (g.stroke) {
        e = g.stroke
    }
    if (g.strokeThickness) {
        f = g.strokeThickness
    }
    if (g.opacity) {
        c = g.opacity
    }
    if (b != null) {
        d.__fill = (function () {
            var h = new $.ig.Brush();
            h.__fill = b;
            return h
        }())
    }
    if (e != null) {
        d.__stroke = (function () {
            var h = new $.ig.Brush();
            h.__fill = e;
            return h
        }())
    }
    if (!isNaN(f)) {
        d.a7(f)
    }
    if (!isNaN(c)) {
        d.__opacity = c
    }
}, $type: new $.ig.Type("CanvasViewRenderer", $.ig.Object.prototype.$type, [$.ig.IRenderer.prototype.$type])}, true);
$.ig.util.defType("RenderingContext", "Object", {a: null, c: function () {
    return this.a.getUnderlyingContext()
}, init: function (c, d) {
    this.a = null;
    $.ig.Object.prototype.init.call(this);
    this.a = c;
    this.a.data(d)
}, b: function () {
    return true
}, e: function (c, d) {
}, f: function (b) {
    this.a.renderRectangle(b)
}, g: function (b) {
    this.a.renderPath(b)
}, h: function (b) {
    this.a.renderGeometry(b)
}, i: function (b) {
    this.a.renderTextBlock(b)
}, j: function (b) {
    this.a.renderPolygon(b)
}, k: function (b) {
    this.a.renderPolyline(b)
}, l: function (c, d) {
    this.a.renderContentControl(c, d)
}, m: function (b) {
    this.a.applyTransform(b)
}, n: function (b) {
    this.a.renderLine(b)
}, o: function () {
    this.a.save()
}, p: function () {
    this.a.restore()
}, q: function (b) {
    this.a.setRectangleClip(b)
}, r: function (c, d) {
    this.a.scale(c, d)
}, s: function (c, d) {
    this.a.translate(c, d)
}, t: function (e, f, g, h) {
    this.a.clearRectangle(e, f, g, h)
}, u: function (j, k, l, m, n, o, p, q, r) {
    this.a.drawImage1(j, k, l, m, n, o, p, q, r)
}, v: function (f, g, h, i, j) {
    this.a.drawImage(f, g, h, i, j)
}, w: function (c, d) {
    return this.a.getPixelAt(c, d)
}, x: function (b) {
    this.a.setFont(b)
}, y: function (b) {
    return this.a.measureTextWidth(b)
}, z: function (b) {
    this.a.setOpacity(b)
}, aa: function (c, d) {
    this.a.applyStyle(c, d)
}, $type: new $.ig.Type("RenderingContext", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IOverviewPlusDetailControl", "Object", {$type: new $.ig.Type("IOverviewPlusDetailControl", null)}, true);
$.ig.util.defType("ISchedulableRender", "Object", {$type: new $.ig.Type("ISchedulableRender", null)}, true);
$.ig.util.defType("PropertyChangedEventArgs$1", "PropertyChangedEventArgs", {$t: null, init: function (d, e, f, g) {
    this.$t = d;
    this.$type = this.$type.specialize(this.$t);
    $.ig.PropertyChangedEventArgs.prototype.init.call(this, e);
    this.oldValue(f);
    this.newValue(g)
}, _oldValue: null, oldValue: function (b) {
    if (arguments.length === 1) {
        this._oldValue = b;
        return b
    } else {
        return this._oldValue
    }
}, _newValue: null, newValue: function (b) {
    if (arguments.length === 1) {
        this._newValue = b;
        return b
    } else {
        return this._newValue
    }
}, $type: new $.ig.Type("PropertyChangedEventArgs$1", $.ig.PropertyChangedEventArgs.prototype.$type)}, true);
$.ig.util.defType("XamOverviewPlusDetailPane", "Control", {_c3: null, c3: function (b) {
    if (arguments.length === 1) {
        this._c3 = b;
        return b
    } else {
        return this._c3
    }
}, init: function () {
    this.ci = false;
    this.cl = false;
    $.ig.Control.prototype.init.call(this);
    this.c3(new $.ig.XamOverviewPlusDetailPaneView(this));
    this.c3().a8();
    this.a3($.ig.XamOverviewPlusDetailPane.prototype.$type);
    this.dn({__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, windowChanging: null, dv: function (b) {
    if (b == null) {
        throw new $.ig.ArgumentNullException("e")
    }
    if (this.c4()) {
        this.c7(b.newValue())
    }
    if (this.windowChanging != null) {
        this.windowChanging(this, b)
    }
}, windowChanged: null, dy: function (b) {
    if (this.windowChanged != null) {
        this.windowChanged(this, b)
    }
}, thumbnailSizeChanged: null, d1: function (b) {
    if (this.thumbnailSizeChanged != null) {
        this.thumbnailSizeChanged(this, b)
    }
}, c4: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b2, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b2)
    }
}, c5: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b3, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b3)
    }
}, c6: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b4, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b4)
    }
}, c7: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b5, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b5)
    }
}, c8: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b6, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b6)
    }
}, c9: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b7, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b7)
    }
}, da: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b8, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b8)
    }
}, db: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.b9, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.b9)
    }
}, ei: function (c, d) {
    (c).ej(d.f(), d.e())
}, ej: function (c, d) {
    if (d) {
        this.eo($.ig.OverviewPlusDetailPaneMode.prototype.minimal)
    } else {
        this.eo($.ig.OverviewPlusDetailPaneMode.prototype.compact)
    }
}, dc: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.ca, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.ca)
    }
}, em: function (c, d) {
    (c).en(d.f(), d.e())
}, en: function (c, d) {
    this.eo(d)
}, eo: function (b) {
    switch (b) {
        case $.ig.OverviewPlusDetailPaneMode.prototype.full:
            this.c3().bo();
            if (this.dj()) {
                this.c3().br()
            } else {
                this.c3().bs()
            }
            break;
        case $.ig.OverviewPlusDetailPaneMode.prototype.compact:
            this.c3().bq();
            if (this.dj()) {
                this.c3().br()
            } else {
                this.c3().bs()
            }
            break;
        case $.ig.OverviewPlusDetailPaneMode.prototype.minimal:
            this.c3().bq();
            this.c3().bs();
            break
    }
}, ep: function () {
    if (this.db()) {
        this.eo($.ig.OverviewPlusDetailPaneMode.prototype.minimal)
    } else {
        this.eo($.ig.OverviewPlusDetailPaneMode.prototype.compact)
    }
}, cb: null, dd: function (d) {
    if (arguments.length === 1) {
        if (this.cb != null) {
            var e = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.cb);
            if (e != null) {
                e.propertyChanged = $.ig.Delegate.prototype.remove(e.propertyChanged, this.es.on(this))
            }
        }
        this.cb = d;
        if (this.cb != null) {
            var f = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.cb);
            if (f != null) {
                f.propertyChanged = $.ig.Delegate.prototype.combine(f.propertyChanged, this.es.on(this))
            }
        }
        this.c3().cd();
        return d
    } else {
        return this.cb
    }
}, es: function (c, d) {
    switch (d.propertyName()) {
        case"DefaultInteraction":
            this.c3().cs(this.cb.defaultInteraction());
            break
    }
}, de: function () {
    var a = this.ft(this.c5());
    return new $.ig.Rect(0, 0, 0, a.width(), a.height())
}, df: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.cc, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.cc)
    }
}, dg: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.cd, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.cd)
    }
}, dh: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.ce, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.ce)
    }
}, di: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamOverviewPlusDetailPane.prototype.cf, b);
        return b
    } else {
        return this.b($.ig.XamOverviewPlusDetailPane.prototype.cf)
    }
}, cg: null, dj: function (b) {
    if (arguments.length === 1) {
        this.cg = b;
        this.ep();
        return b
    } else {
        return this.cg
    }
}, dk: function () {
    return this.c3().aq()
}, _dl: null, dl: function (b) {
    if (arguments.length === 1) {
        this._dl = b;
        return b
    } else {
        return this._dl
    }
}, e7: function (e) {
    var f = e.c();
    var g = e.d();
    var h = !this.c5().isEmpty() ? this.c5().width() / this.c5().height() : 1;
    if (Number.isInfinity(g)) {
        if (Number.isInfinity(f)) {
            f = 128
        }
        g = f / h
    } else {
        if (Number.isInfinity(f)) {
            f = g * h
        }
    }
    return new $.ig.Size(f, g)
}, _dm: null, dm: function (b) {
    if (arguments.length === 1) {
        this._dm = b;
        return b
    } else {
        return this._dm
    }
}, _dn: null, dn: function (b) {
    if (arguments.length === 1) {
        this._dn = b;
        return b
    } else {
        return this._dn
    }
}, fc: function () {
    if (this.db()) {
        this.eo($.ig.OverviewPlusDetailPaneMode.prototype.full)
    }
}, fd: function () {
    if (this.db()) {
        this.eo($.ig.OverviewPlusDetailPaneMode.prototype.minimal)
    }
}, fe: function (b) {
    switch (b) {
        case $.ig.Key.prototype.escape:
            if (this.dm()) {
                this.c3().cf();
                this.dm(false);
                this.c9($.ig.Rect.prototype.empty());
                return true
            }
            break
    }
    return false
}, ff: function (f) {
    if (!this.cm) {
        this.ci = false
    }
    this.ch = f;
    var g = this.ft(this.c5());
    if (g.contains1(f) == false) {
        return
    }
    var h = this.dk();
    var i = !h.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
    var j = !i.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
    this.dn(this.fr(f));
    if (j.isEmpty() == false && this.c3().cg()) {
        this.dm(true);
        j = new $.ig.Rect(0, this.dn().__x - 0.5 * j.width(), this.dn().__y - 0.5 * j.height(), j.width(), j.height());
        if (!this.mobileMode()) {
            this.dv(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), j))
        }
    }
}, ch: null, fg: function (l, m, n) {
    if (isNaN(this.dn().__x) || isNaN(this.dn().__y)) {
        this.dn(this.fr(l))
    }
    var o = $.ig.XamOverviewPlusDetailPane.prototype.by;
    if (n) {
        o = $.ig.XamOverviewPlusDetailPane.prototype.bx
    }
    var p = false;
    var q = this.fs(this.dn());
    var r = new $.ig.Rect(2, q, l);
    if (r.width() > o && r.height() > o) {
        p = true
    }
    if (!this.cm) {
        if (p) {
            this.ci = false
        }
    }
    this.ch = l;
    var s = this.dk();
    var t = !s.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
    var u = !t.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
    if (this.dm()) {
        var v = this.fr(l);
        u = new $.ig.Rect(0, v.__x - 0.5 * u.width(), v.__y - 0.5 * u.height(), u.width(), u.height());
        this.dv(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), u))
    }
}, fh: function (f) {
    this.ch = f;
    var g = this.dk();
    var h = !g.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
    var i = !h.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
    if (this.dm() && !this.ci) {
        this.c3().cf();
        this.dm(false);
        var j = this.fr(f);
        i = new $.ig.Rect(0, j.__x - 0.5 * i.width(), j.__y - 0.5 * i.height(), i.width(), i.height());
        if (!this.mobileMode()) {
            this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), i))
        }
        return true
    }
    return false
}, fi: function (i) {
    var j = this.c7().getCenter();
    var k = 1 - $.ig.MathUtil.prototype.i(i, -0.5, 0.5);
    var l = j.__x - k * (j.__x - this.c7().left());
    var m = j.__y + k * (this.c7().bottom() - j.__y);
    var n = j.__x + k * (this.c7().right() - j.__x);
    var o = j.__y - k * (j.__y - this.c7().top());
    var p = new $.ig.Rect(0, l, o, n - l, m - o);
    this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), p));
    return true
}, ci: null, cj: null, fj: function (b) {
    this.cm = true;
    this.ci = true;
    this.cj = 1
}, fk: function (b) {
    if (this.c3().a2()) {
        this.fn(b)
    } else {
        this.fm(b);
        this.cj = b
    }
}, fl: function (b) {
    this.cm = false;
    this.ci = false;
    if (this.c3().a2()) {
        this.fn(b)
    } else {
        this.fm(b)
    }
}, fm: function (h) {
    var i = h - this.cj;
    if (i != 0) {
        var j = 0.03;
        var k = i < 0 ? 1 + j : 1 - j;
        var l = {__x: this.c7().x() + this.c7().width() / 2, __y: this.c7().y() + this.c7().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var m = {__x: this.c7().x() - l.__x, __y: this.c7().y() - l.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var n = new $.ig.Rect(0, m.__x * k + l.__x, m.__y * k + l.__y, this.c7().width() * k, this.c7().height() * k);
        this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), n))
    }
}, fn: function (f) {
    var g = 1 / f;
    var h = {__x: this.c7().x() + this.c7().width() / 2, __y: this.c7().y() + this.c7().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var i = {__x: this.c7().x() - h.__x, __y: this.c7().y() - h.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var j = new $.ig.Rect(0, i.__x * g + h.__x, i.__y * g + h.__y, this.c7().width() * g, this.c7().height() * g);
    this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), j))
}, propertyChanged: null, fo: function (d, e, f) {
    this.fp(new $.ig.PropertyChangedEventArgs(d))
}, fp: function (b) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, b)
    }
    switch (b.propertyName()) {
        case $.ig.XamOverviewPlusDetailPane.prototype.bq:
            this.fu(false);
            break;
        case $.ig.XamOverviewPlusDetailPane.prototype.bs:
            this.fu(false);
            break;
        case $.ig.XamOverviewPlusDetailPane.prototype.bu:
            this.fu(false);
            break
    }
}, fq: function () {
    this.c3().b3()
}, fr: function (g) {
    var h = this.dk();
    var i = !h.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
    if (!i.isEmpty()) {
        var j = h.width() / h.height() > i.width() / i.height() ? h.height() / i.height() : h.width() / i.width();
        var k = 0.5 * ((h.left() + h.right()) - (i.left() + i.right()) * j);
        var l = 0.5 * ((h.top() + h.bottom()) - (i.top() + i.bottom()) * j);
        return{__x: (g.__x - k) / j, __y: (g.__y - l) / j, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
    return{__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, fs: function (g) {
    var h = this.dk();
    var i = !h.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
    if (!i.isEmpty()) {
        var j = h.width() / h.height() > i.width() / i.height() ? h.height() / i.height() : h.width() / i.width();
        var k = 0.5 * ((h.left() + h.right()) - (i.left() + i.right()) * j);
        var l = 0.5 * ((h.top() + h.bottom()) - (i.top() + i.bottom()) * j);
        return{__x: g.__x * j + k, __y: g.__y * j + l, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
    return{__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, ft: function (g) {
    var h = this.dk();
    var i = !h.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
    if (!i.isEmpty() && !g.isEmpty()) {
        var j = h.width() / h.height() > i.width() / i.height() ? h.height() / i.height() : h.width() / i.width();
        var k = 0.5 * ((h.left() + h.right()) - (i.left() + i.right()) * j);
        var l = 0.5 * ((h.top() + h.bottom()) - (i.top() + i.bottom()) * j);
        return new $.ig.Rect(0, g.left() * j + k, g.top() * j + l, g.width() * j, g.height() * j)
    }
    return $.ig.Rect.prototype.empty()
}, fu: function (f) {
    var e = this;
    this.fx();
    if (!f) {
        if (!this.dl()) {
            this.dl(true);
            this.c3().dh(function () {
                return e.fu(true)
            })
        }
        return
    }
    this.dl(false);
    var g = this.ft(this.c5());
    var h = this.ft(this.c7());
    var i = this.ft(this.c9());
    if (this.__visibility != $.ig.Visibility.prototype.visible || g.isEmpty() || isNaN(g.x()) || isNaN(g.y())) {
        this.dl(false);
        return
    }
    this.c3().b8(g);
    this.c3().ch(g);
    this.c3().b9(g, h);
    this.c3().ca(g, i);
    if (this.dd() != null) {
        this.dd().renderPreview()
    }
    this.c3().cn()
}, _dp: null, dp: function (b) {
    if (arguments.length === 1) {
        this._dp = b;
        return b
    } else {
        return this._dp
    }
}, fx: function () {
    if (this.__visibility != $.ig.Visibility.prototype.visible || this.dd() == null || !this.c3().ce()) {
        return
    }
    var f = this.dd().viewportRect();
    var g = this.dd().worldRect();
    if (f.isEmpty() || g.isEmpty()) {
        return
    }
    this.dp(true);
    var h = this.c3().de();
    var i = this.dd().minimumZoomLevel();
    var j = this.dd().maximumZoomLevel();
    if (isNaN(i)) {
        i = Math.min(f.width() / g.width(), f.height() / g.height());
        i = Math.min(i, 0.5);
        i = Math.min(i, h)
    }
    if (isNaN(j)) {
        j = $.ig.XamOverviewPlusDetailPane.prototype.a7;
        j = Math.max(j, h)
    }
    this.c3().df(i);
    this.c3().dg(j);
    this.dp(false)
}, fy: function (b) {
    if (this.dd() != null) {
        this.dd().defaultInteraction(b)
    }
}, fz: function () {
    if (this.dd() != null) {
        this.dd().scaleToFit()
    }
}, f0: function () {
    if (this.dd() != null) {
        this.dd().zoomTo100()
    }
}, f1: function () {
    this.fu(false)
}, f2: function (b) {
    this.c3().ct(b)
}, f3: function (b) {
    this.c3().ck(b)
}, f4: function (b) {
    this.c3().cx(b)
}, cl: null, mobileMode: function (c) {
    if (arguments.length === 1) {
        var d = this.cl;
        this.cl = c;
        if (d != this.cl) {
            this.c3().c0(this.cl)
        }
        return c
    } else {
        return this.cl
    }
}, f7: function (b) {
    this.c3().c3(b)
}, f8: function (b) {
    this.c3().c6(b)
}, f9: function () {
    if (this.ch == null) {
        return
    }
    var e = this.fr(this.ch);
    var f = this.dk();
    var g = !f.isEmpty() ? this.c5() : $.ig.Rect.prototype.empty();
    var h = !g.isEmpty() ? this.c7() : $.ig.Rect.prototype.empty();
    h = new $.ig.Rect(0, e.__x - 0.5 * h.width(), e.__y - 0.5 * h.height(), h.width(), h.height());
    this.dy(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, this.c7(), this.c7()))
}, cm: null, dq: function () {
    return this.cm
}, gb: function (b) {
    this.cm = false;
    this.dn({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, $type: new $.ig.Type("XamOverviewPlusDetailPane", $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("XamOverviewPlusDetailPaneView", "Object", {_ad: null, ad: function (b) {
    if (arguments.length === 1) {
        this._ad = b;
        return b
    } else {
        return this._ad
    }
}, init: function (b) {
    this.b = null;
    this.c = false;
    this.__loadingEle = null;
    this.__backgroundImage = null;
    this.e = 0;
    this.f = 0;
    $.ig.Object.prototype.init.call(this);
    this.aq($.ig.Rect.prototype.empty());
    this.ad(b);
    this.a1(new $.ig.Size(0, 0))
}, _ae: null, ae: function (b) {
    if (arguments.length === 1) {
        this._ae = b;
        return b
    } else {
        return this._ae
    }
}, a8: function () {
    var a = this;
    this.ah(new $.ig.DoubleAnimator(0, 1, 300));
    this.ah().propertyChanged = $.ig.Delegate.prototype.combine(this.ah().propertyChanged, this.a9.on(this));
    this.ak(true);
    this.ae(new $.ig.XamOverviewPlusDetailPaneViewManager(this));
    var c = this.ad();
    var b = typeof Modernizr !== "undefined" && Modernizr.touch || (this.ae().bk() && $.support.touch);
    c.mobileMode(b);
    this.am((function () {
        var d = new $.ig.Path();
        d.a6(true);
        d.bp(new $.ig.RectangleGeometry());
        return d
    }()));
    (this.am().bp()).f($.ig.Rect.prototype.empty());
    this.ap((function () {
        var d = new $.ig.Path();
        d.a6(true);
        d.bp(new $.ig.RectangleGeometry());
        return d
    }()));
    this.an((function () {
        var d = new $.ig.Path();
        d.a6(false);
        d.bp(new $.ig.GeometryGroup());
        return d
    }()));
    ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.an().bp())).d().add(new $.ig.PathGeometry());
    ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.an().bp())).d().add(new $.ig.PathGeometry());
    this.ao((function () {
        var d = new $.ig.Path();
        d.a6(false);
        d.bp(new $.ig.GeometryGroup());
        return d
    }()));
    ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.ao().bp())).d().add(new $.ig.PathGeometry());
    ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.ao().bp())).d().add(new $.ig.PathGeometry());
    this.ai(0);
    this.aj(0);
    this.az(false)
}, a9: function (c, d) {
    if (this.al()) {
        this.aj(this.ai() + this.ah().k() * (1 - this.ai()))
    } else {
        this.aj(this.ai() - this.ah().k() * this.ai())
    }
    if (this.aj() >= 1) {
        this.ag(true);
        this.c3(this.ay());
        this.ad().fu(false)
    } else {
        if (this.ag()) {
            this.ag(false);
            this.ae().bg();
            this.c3(this.ay());
            this.ad().fu(false)
        }
    }
    this.cn()
}, _af: null, af: function (b) {
    if (arguments.length === 1) {
        this._af = b;
        return b
    } else {
        return this._af
    }
}, _ag: null, ag: function (b) {
    if (arguments.length === 1) {
        this._ag = b;
        return b
    } else {
        return this._ag
    }
}, _ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, _ai: null, ai: function (b) {
    if (arguments.length === 1) {
        this._ai = b;
        return b
    } else {
        return this._ai
    }
}, _aj: null, aj: function (b) {
    if (arguments.length === 1) {
        this._aj = b;
        return b
    } else {
        return this._aj
    }
}, _ak: null, ak: function (b) {
    if (arguments.length === 1) {
        this._ak = b;
        return b
    } else {
        return this._ak
    }
}, _al: null, al: function (b) {
    if (arguments.length === 1) {
        this._al = b;
        return b
    } else {
        return this._al
    }
}, bo: function () {
    if (this.al()) {
        return
    }
    this.al(true);
    if (this.ak()) {
        this.ai(this.aj());
        this.ah().u();
        this.ah().t()
    } else {
        this.ai(1);
        this.aj(1);
        this.cn()
    }
}, bp: function () {
}, bq: function () {
    if (!this.al()) {
        return
    }
    this.al(false);
    if (this.ak()) {
        this.ai(this.aj());
        this.ah().u();
        this.ah().t()
    } else {
        this.ai(1);
        this.aj(1);
        this.cn()
    }
}, br: function () {
}, bs: function () {
}, _am: null, am: function (b) {
    if (arguments.length === 1) {
        this._am = b;
        return b
    } else {
        return this._am
    }
}, _an: null, an: function (b) {
    if (arguments.length === 1) {
        this._an = b;
        return b
    } else {
        return this._an
    }
}, _ao: null, ao: function (b) {
    if (arguments.length === 1) {
        this._ao = b;
        return b
    } else {
        return this._ao
    }
}, _ap: null, ap: function (b) {
    if (arguments.length === 1) {
        this._ap = b;
        return b
    } else {
        return this._ap
    }
}, a: null, aq: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        if (this.ax() != null) {
            this.ax().v(this.a)
        }
        return b
    } else {
        return this.a
    }
}, b3: function () {
}, _ar: null, ar: function (b) {
    if (arguments.length === 1) {
        this._ar = b;
        return b
    } else {
        return this._ar
    }
}, _as: null, as: function (b) {
    if (arguments.length === 1) {
        this._as = b;
        return b
    } else {
        return this._as
    }
}, b8: function (i) {
    this.ar(i);
    if (this.aw() != null) {
        var q = this.aw();
        var j = i.width() / this.e;
        var k = i.height() / this.f;
        var l = (j < k) ? j : k;
        var m = this.e * l;
        var n = this.f * l;
        var o = i.width() - m;
        var p = i.height() - n;
        this.as(new $.ig.Rect(0, this.ar().left() + (o / 2), this.ar().top() + (p / 2), m, n))
    }
    (this.am().bp()).f(i);
    this.am().__visibility = i.isEmpty() ? $.ig.Visibility.prototype.collapsed : $.ig.Visibility.prototype.visible
}, b9: function (c, d) {
    ((this.an().bp()).d().__inner[0]).d(this.cc(c.inflate11(2)));
    ((this.an().bp()).d().__inner[1]).d(this.cb(d));
    this.an().__visibility = d.isEmpty() ? $.ig.Visibility.prototype.collapsed : $.ig.Visibility.prototype.visible
}, ca: function (c, d) {
    ((this.ao().bp()).d().__inner[0]).d(this.cc(c.inflate11(2)));
    ((this.ao().bp()).d().__inner[1]).d(this.cb(d));
    this.ao().__visibility = d.isEmpty() ? $.ig.Visibility.prototype.collapsed : $.ig.Visibility.prototype.visible
}, cb: function (d) {
    var e = new $.ig.PathFigureCollection();
    var f = new $.ig.PathFigure();
    f.__isClosed = true;
    f.__startPoint = {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    e.add(f);
    return e
}, cc: function (d) {
    var e = new $.ig.PathFigureCollection();
    var f = new $.ig.PathFigure();
    f.__isClosed = true;
    f.__startPoint = {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    e.add(f);
    return e
}, cd: function () {
}, ce: function () {
    return this.at() != null
}, cf: function () {
}, cg: function () {
    return true
}, ch: function (d) {
    var e = false;
    if (Math.round(this.a1().c()) != Math.round(d.width())) {
        e = true;
        this.ae().a4(d.width())
    }
    if (Math.round(this.a1().d()) != Math.round(d.height())) {
        e = true;
        this.ae().a5(d.height())
    }
    var f = this.a1();
    this.a1(new $.ig.Size(d.width(), d.height()));
    if (e) {
        this.ad().d1(new $.ig.PropertyChangedEventArgs$1($.ig.Size.prototype.$type, "ThumbnailSize", f, this.a1()))
    }
}, _at: null, at: function (b) {
    if (arguments.length === 1) {
        this._at = b;
        return b
    } else {
        return this._at
    }
}, ck: function (b) {
    this.at(b)
}, b: null, au: function (b) {
    if (arguments.length === 1) {
        if (this.b != null) {
            this.b.n(this)
        }
        this.b = b;
        if (this.b != null) {
            this.b.m(this);
            this.cn()
        }
        return b
    } else {
        return this.b
    }
}, cn: function () {
    if (!this.c && this.au() != null) {
        this.c = true;
        this.au().o()
    }
}, c: null, isDirty: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        return b
    } else {
        return this.c
    }
}, d: null, __loadingEle: null, av: function (c) {
    if (arguments.length === 1) {
        this.d = c;
        if (this.d != null) {
            this.__loadingEle = $("<img></img>");
            var d = this.__loadingEle[0];
            var f = this;
            var e = this.__loadingEle;
            e.bind("load readystatechange", function (a) {
                if (this.complete || (this.readyState == "complete" && a.type == "readystatechange")) {
                    f.downloadCompleted(a)
                }
            });
            d.src = this.d
        } else {
            if (this.__loadingEle != null) {
                var e = this.__loadingEle;
                e.unbind("load readystatechange");
                this.__loadingEle = null
            }
            this.aw(null)
        }
        return c
    } else {
        return this.d
    }
}, downloadCompleted: function (b) {
    if (!(this.__loadingEle[0]).complete) {
        return
    }
    this.aw(this.__loadingEle[0])
}, __backgroundImage: null, e: null, f: null, aw: function (b) {
    if (arguments.length === 1) {
        this.__backgroundImage = b;
        if (this.__backgroundImage != null) {
            var c = this.__backgroundImage;
            this.e = c.width;
            this.f = c.height
        } else {
            this.e = 0;
            this.f = 0
        }
        if (this.ar() != null) {
            this.b8(this.ar())
        }
        this.cn();
        return b
    } else {
        return this.__backgroundImage
    }
}, undirty: function (g) {
    this.isDirty(false);
    if (this.at() == null) {
        return
    }
    if (this.ad().__visibility == $.ig.Visibility.prototype.collapsed) {
        return
    }
    if (this.at().b()) {
        var h = 1;
        var i = 1;
        var j = 1;
        h = 0.6 + this.aj() * (1 - 0.6);
        i = 0.6 + this.aj() * (1 - 0.6);
        j = 0.7 + this.aj() * (1 - 0.7);
        this.ap().__opacity = j;
        this.ap().a7(1);
        this.ae().a6(this.ap());
        this.am().__opacity = j;
        this.am().a7(1);
        this.ae().a7(this.am());
        this.an().__opacity = j;
        this.an().a7(1.5);
        this.ae().a8(this.an());
        this.ao().__opacity = j;
        this.ao().a7(2);
        this.ae().a9(this.ao());
        var k = (this.am().bp()).f();
        if (k.isEmpty()) {
            return
        }
        this.at().o();
        this.at().s(this.ay().right(), this.ay().bottom());
        this.at().r(h, i);
        this.at().s(-this.ay().right(), -this.ay().bottom());
        this.at().g(this.ap());
        this.ae().ba(this.at(), k);
        this.at().q(k);
        this.at().g(this.am());
        if (this.aw() != null) {
            var l = this.at().c();
            l.globalAlpha = j;
            l.drawImage(this.aw(), this.as().left(), this.as().top(), this.as().width(), this.as().height());
            l.globalAlpha = 1
        }
        this.at().g(this.ao());
        this.at().g(this.an());
        this.at().p()
    }
}, index: function () {
    return 10000
}, postRender: function () {
}, cs: function (b) {
}, ct: function (b) {
    this.a3(window.navigator.msPointerEnabled);
    if (this.a3()) {
        this.a2(true)
    }
    if (b == null) {
        if (this.ax() != null) {
            this.ax().bf()
        }
        this.ae().an(null);
        this.a0(null);
        this.ax(null);
        return
    }
    this.ae().an(b);
    this.a0(this.ae().r())
}, cu: function (b) {
    if (!this.az()) {
        var d = b;
        var c = this.ad().dd();
        c.zoomLevel(d)
    }
}, _ax: null, ax: function (b) {
    if (arguments.length === 1) {
        this._ax = b;
        return b
    } else {
        return this._ax
    }
}, cx: function (c) {
    var b = this;
    if (c == null) {
        return
    }
    this.ax(c.be());
    this.ax().x(this.cz.on(this));
    this.ax().onMouseWheel = $.ig.Delegate.prototype.combine(this.ax().onMouseWheel, function (a, d) {
        return b.ad().fi(d)
    });
    this.ax().onPinchDelta = $.ig.Delegate.prototype.combine(this.ax().onPinchDelta, function (a, f) {
        return b.ad().fk(f)
    });
    this.ax().onPinchStarted = $.ig.Delegate.prototype.combine(this.ax().onPinchStarted, function (a, d) {
        return b.ad().fj(a)
    });
    this.ax().onGestureCompleted = $.ig.Delegate.prototype.combine(this.ax().onGestureCompleted, function (a, d) {
        return b.ad().gb(a)
    });
    this.ax().onMouseUp = $.ig.Delegate.prototype.combine(this.ax().onMouseUp, function (a) {
        return b.ad().fh(a)
    });
    this.ax().onMouseDown = $.ig.Delegate.prototype.combine(this.ax().onMouseDown, this.ad().ff.on(this.ad()));
    this.ax().onMouseEnter = $.ig.Delegate.prototype.combine(this.ax().onMouseEnter, function (a) {
        return b.ad().fc()
    });
    this.ax().onMouseOver = $.ig.Delegate.prototype.combine(this.ax().onMouseOver, function (a, d, e) {
        return b.ad().fg(a, d, e)
    });
    this.ax().onKeyDown = $.ig.Delegate.prototype.combine(this.ax().onKeyDown, this.ad().fe.on(this.ad()));
    this.ax().onMouseLeave = $.ig.Delegate.prototype.combine(this.ax().onMouseLeave, this.cy.on(this));
    this.ax().v(this.aq());
    this.ae().w(this.ax())
}, cy: function (b) {
    if (!this.cz({__x: this.aq().left() + b.__x, __y: this.aq().top() + b.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})) {
        this.ad().fd()
    }
}, cz: function (d) {
    if (d == null) {
        return false
    }
    if (this.ad().__visibility != $.ig.Visibility.prototype.visible) {
        return false
    }
    var e = d.__x;
    var f = d.__y;
    if (e >= this.ay().left() && f >= this.ay().top() && e < this.ay().left() + this.ay().width() && f < this.ay().top() + this.ay().height()) {
        return true
    }
    return false
}, c0: function (b) {
    if (b) {
        this.ak(false);
        if (this.ae() != null && this.ad().__visibility == $.ig.Visibility.prototype.visible) {
            this.ae().bc()
        }
    } else {
        this.ak(true);
        if (this.ae() != null) {
            this.ae().bd();
            this.bq();
            this.aj(0);
            this.ai(0);
            this.ae().bg()
        }
    }
}, _ay: null, ay: function (b) {
    if (arguments.length === 1) {
        this._ay = b;
        return b
    } else {
        return this._ay
    }
}, c3: function (d) {
    this.ay(d);
    (this.ap().bp()).f(this.ay());
    var e = d.height() - 4;
    var f = d.width() - 4;
    if (this.aj() >= 1 && !this.ad().mobileMode()) {
        e -= 20;
        this.ae().bb(this.ay(), f, e)
    }
    if (this.ae().u() != null) {
        if (this.af()) {
            this.ae().u().show()
        } else {
            this.ae().bf(true)
        }
    }
    this.aq(new $.ig.Rect(0, this.ay().left() + 2, this.ay().top() + 2, f, e));
    this.cn()
}, _az: null, az: function (b) {
    if (arguments.length === 1) {
        this._az = b;
        return b
    } else {
        return this._az
    }
}, c6: function (b) {
    this.az(true);
    this.ae().at(b);
    this.az(false)
}, c7: function () {
    this.ad().f0()
}, _a0: null, a0: function (b) {
    if (arguments.length === 1) {
        this._a0 = b;
        return b
    } else {
        return this._a0
    }
}, _a1: null, a1: function (b) {
    if (arguments.length === 1) {
        this._a1 = b;
        return b
    } else {
        return this._a1
    }
}, dc: function (b) {
}, dd: function (c, d) {
    if (!this.cz({__x: c, __y: d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})) {
        this.ad().fd()
    }
}, de: function () {
    return this.ae().aw()
}, df: function (b) {
    this.ae().ax(b)
}, dg: function (b) {
    this.ae().ay(b)
}, dh: function (b) {
    this.ae().bj(b)
}, di: function () {
    this.ad().f9()
}, _a2: null, a2: function (b) {
    if (arguments.length === 1) {
        this._a2 = b;
        return b
    } else {
        return this._a2
    }
}, _a3: null, a3: function (b) {
    if (arguments.length === 1) {
        this._a3 = b;
        return b
    } else {
        return this._a3
    }
}, $type: new $.ig.Type("XamOverviewPlusDetailPaneView", $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])}, true);
$.ig.util.defType("XamOverviewPlusDetailPaneViewManager", "Object", {_q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, _u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, _sliderEnabled: null, sliderEnabled: function (b) {
    if (arguments.length === 1) {
        this._sliderEnabled = b;
        return b
    } else {
        return this._sliderEnabled
    }
}, _isJqueryMobile: null, isJqueryMobile: function (b) {
    if (arguments.length === 1) {
        this._isJqueryMobile = b;
        return b
    } else {
        return this._isJqueryMobile
    }
}, a: null, b: null, c: null, d: null, e: null, f: null, init: function (b) {
    this.a = "Overview";
    this.b = "Close";
    this.c = "Zoom In";
    this.d = "Zoom Out";
    this.e = "Reset Zoom";
    this.g = false;
    $.ig.Object.prototype.init.call(this);
    this.f = b;
    this.isJqueryMobile(typeof $.mobile !== "undefined" && $.mobile !== null);
    var d = null;
    if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.overview) {
        d = $.ig.Chart.locale.overview
    }
    var c = null;
    if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.close) {
        c = $.ig.Chart.locale.close
    }
    var f = null;
    if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.zoomIn) {
        f = $.ig.Chart.locale.zoomIn
    }
    var g = null;
    if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.zoomOut) {
        g = $.ig.Chart.locale.zoomOut
    }
    var e = null;
    if ($.ig.Chart && $.ig.Chart.locale && $.ig.Chart.locale.resetZoom) {
        e = $.ig.Chart.locale.resetZoom
    }
    if (d != null) {
        this.a = d
    }
    if (c != null) {
        this.b = c
    }
    if (f != null) {
        this.c = f
    }
    if (g != null) {
        this.d = g
    }
    if (e != null) {
        this.e = e
    }
    this.q($("<canvas></canvas>"));
    this.r(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.q()[0]).getContext("2d")))
}, an: function (e) {
    if (e == null) {
        this.s(null);
        this.t(null);
        this.v(null);
        return
    }
    this.s($(e));
    var f = $('<div class="ui-chart-toolbar"></div>');
    f.hide();
    this.t(f);
    this.s().append(f);
    this.ao();
    if (!this.f.ad().mobileMode()) {
        this.bf(true)
    }
    var g = $('<ul class="ui-widget" style="margin: 0; padding: 0"></ul>');
    f.append(g);
    var h = $('<div class="ui-chart-slider"></div>');
    var j = this.isJqueryMobile() ? $("<input type='range' style='display:none;' max='100' min='0' />") : $("<div></div>");
    h.append(j);
    this.v(j);
    if (j.slider) {
        j.slider({mini: true});
        this.sliderEnabled(true)
    }
    if (this.sliderEnabled()) {
        j.bind(this.isJqueryMobile() ? "change" : "slide", this.a3.on(this))
    }
    var n = $("<button></button>");
    var l = $("<button></button>");
    var k = $("<button></button>");
    var o = this.d;
    var m = this.c;
    var i = this.e;
    if (this.isJqueryMobile()) {
        n = $("<div title=" + o + "></div>");
        n.buttonMarkup({iconpos: "notext", icon: "zoomout", mini: true, inline: true, corners: false});
        l = $("<div title=" + m + "></div>");
        l.buttonMarkup({iconpos: "notext", icon: "zoomin", mini: true, inline: true, corners: false});
        k = $("<div title=" + i + "></div>");
        k.buttonMarkup({iconpos: "notext", icon: "reset", mini: true, inline: true, corners: false})
    } else {
        n.button({icons: {primary: "ui-icon-zoomout"}, label: o, text: false});
        l.button({icons: {primary: "ui-icon-zoomin"}, label: m, text: false});
        k.button({icons: {primary: "ui-icon-arrow-4-diag"}, label: i, text: false})
    }
    n.click(this.ar.on(this));
    l.click(this.as.on(this));
    k.click(this.au.on(this));
    this.aq(g, n, true);
    this.aq(g, h, false);
    this.aq(g, l, true);
    this.aq(g, k, true);
    f.mouseleave(this.ap.on(this))
}, ao: function () {
    var a = $('<button toggle="closed" class="ui-chart-opd-button"></button>');
    var b = this.a;
    if (this.isJqueryMobile()) {
        a = $('<div toggle="closed" class="ui-chart-opd-button"></div>');
        a.html(b).buttonMarkup({icon: "arrow-d", iconpos: "left"})
    } else {
        a.button({icons: {secondary: "ui-icon-carat-1-s"}, label: b})
    }
    if (!this.f.af()) {
        a.hide()
    }
    a.click(this.av.on(this));
    this.u(a);
    this.s().append(a)
}, ap: function (e) {
    $.ig.DOMEventProxy.prototype.c3(e);
    var f = this.w().by();
    var g = e.pageX - f.__x;
    var h = e.pageY - f.__y;
    this.f.dd(g, h)
}, aq: function (f, g, h) {
    var i = "";
    if (h) {
        i = 'class="ui-corner-all" '
    }
    var j = $("<li></li>");
    if (h) {
        j.mousedown($.ig.XamOverviewPlusDetailPaneViewManager.prototype.az).mouseup($.ig.XamOverviewPlusDetailPaneViewManager.prototype.a0).hover($.ig.XamOverviewPlusDetailPaneViewManager.prototype.a1, $.ig.XamOverviewPlusDetailPaneViewManager.prototype.a2)
    } else {
        j.addClass("ui-chart-slider-holder")
    }
    j.append(g);
    f.append(j)
}, ar: function (b) {
    this.at(this.aw() - 0.05);
    this.f.cu(this.aw());
    b.preventDefault()
}, as: function (b) {
    this.at(this.aw() + 0.05);
    this.f.cu(this.aw());
    b.preventDefault()
}, at: function (b) {
    if (this.sliderEnabled()) {
        var a = this.v();
        if (this.isJqueryMobile()) {
            a.slider("refresh", Math.round(b * 100), true, false)
        } else {
            a.slider("option", "value", Math.round(b * 100))
        }
    }
}, au: function (b) {
    this.f.c7();
    b.preventDefault()
}, av: function (b) {
    if (this.u().attr("toggle") == "closed" || (this.isJqueryMobile() && this.u().attr("data-toggle") == "closed")) {
        this.be()
    } else {
        this.bf(false)
    }
    this.f.ad().fu(true);
    b.preventDefault()
}, aw: function () {
    if (this.sliderEnabled()) {
        var a = this.v();
        if (this.isJqueryMobile()) {
            return parseInt(a.val() || 0) / 100
        } else {
            return a.slider("option", "value") / 100
        }
    } else {
        return 0
    }
}, ax: function (b) {
    var c = Math.round(b * 100);
    if (this.sliderEnabled()) {
        var d = this.v();
        if (this.isJqueryMobile()) {
            d.attr("min", c)
        } else {
            d.slider("option", "min", c)
        }
    }
}, ay: function (b) {
    var c = Math.round(b * 100);
    if (this.sliderEnabled()) {
        var d = this.v();
        if (this.isJqueryMobile()) {
            d.attr("max", c)
        } else {
            d.slider("option", "max", c)
        }
    }
}, az: function (b) {
}, a0: function (b) {
}, a1: function (b) {
}, a2: function (b) {
}, a3: function (c, d) {
    var b = (d ? d.value : c.target.value) / 100;
    this.f.cu(b)
}, a4: function (b) {
    this.q().attr("width", b.toString())
}, a5: function (b) {
    this.q().attr("height", b.toString())
}, a6: function (c) {
    var b = this;
    c.__stroke = (function () {
        var a = new $.ig.Brush();
        a.__fill = "#AEB8C2";
        return a
    }());
    c.__fill = (function () {
        var a = new $.ig.Brush();
        a.__fill = "#C6CFD9";
        return a
    }())
}, a7: function (c) {
    var b = this;
    c.__stroke = (function () {
        var a = new $.ig.Brush();
        a.__fill = "rgba(92,105,124,.4)";
        return a
    }());
    c.__fill = (function () {
        var a = new $.ig.Brush();
        a.__fill = "rgba(147,159,175,0)";
        return a
    }())
}, a8: function (c) {
    var b = this;
    c.__stroke = (function () {
        var a = new $.ig.Brush();
        a.__fill = "rgba(68,76,88,.6)";
        return a
    }());
    c.__fill = (function () {
        var a = new $.ig.Brush();
        a.__fill = "rgba(92,105,118,.1)";
        return a
    }())
}, a9: function (c) {
    var b = this;
    c.__stroke = (function () {
        var a = new $.ig.Brush();
        a.__fill = "#2A3037";
        return a
    }())
}, ba: function (c, d) {
    c.v(this.q()[0], d.left(), d.top(), d.width(), d.height())
}, bb: function (d, e, f) {
    this.t().css("top", (d.top() + 2 + f).toString() + "px");
    this.t().css("left", (d.left() + 2).toString() + "px");
    this.t().css("width", e.toString() + "px");
    this.t().css("height", "20px");
    this.t().show()
}, g: null, bc: function () {
    this.f.ad().dc($.ig.OverviewPlusDetailPaneMode.prototype.full);
    if (this.t() != null) {
        this.t().hide()
    }
}, bd: function () {
    this.f.ad().dc($.ig.OverviewPlusDetailPaneMode.prototype.minimal)
}, be: function () {
    this.g = true;
    this.f.ad().__visibility = $.ig.Visibility.prototype.visible;
    this.bc();
    var b = this.u();
    var a = this.b;
    if (this.isJqueryMobile()) {
        b.find(".ui-btn-text").html(a);
        b.find(".ui-icon").removeClass("ui-icon-arrow-d").addClass("ui-icon-delete")
    } else {
        b.button("option", "icons", {secondary: "ui-icon-close"});
        b.button("option", "label", a)
    }
    this.u().attr("toggle", "open").attr("data-toggle", "open");
    this.t().css("left", (this.f.ad().c3().ay().left() + 5).toString() + "px");
    this.t().css("width", (this.f.ad().c3().ay().width() - 10).toString() + "px");
    this.t().css("top", (this.f.ad().c3().ay().height() - this.t().height()).toString() + "px");
    this.t().show()
}, bf: function (b) {
    if (this.g) {
        this.g = false;
        this.f.ad().__visibility = $.ig.Visibility.prototype.collapsed;
        var c = this.u();
        var d = this.a;
        if (this.isJqueryMobile()) {
            c.find(".ui-btn-text").html(d);
            c.find(".ui-icon").removeClass("ui-icon-delete").addClass("ui-icon-arrow-d")
        } else {
            c.button("option", "icons", {secondary: "ui-icon-carat-1-s"});
            c.button("option", "label", d)
        }
        this.u().attr("toggle", "closed").attr("data-toggle", "closed");
        this.f.ad().dc($.ig.OverviewPlusDetailPaneMode.prototype.minimal);
        this.t().hide();
        this.f.di()
    }
    if (b) {
        this.u().hide()
    }
}, bg: function () {
    this.t().hide()
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, bj: function (b) {
    window.setTimeout(b, 0)
}, bk: function () {
    return this.isJqueryMobile()
}, $type: new $.ig.Type("XamOverviewPlusDetailPaneViewManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ColorUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, d: function (b) {
    return $.ig.Color.prototype.s(b, $.ig.ColorUtil.prototype.a.c(0, 255), $.ig.ColorUtil.prototype.a.c(0, 255), $.ig.ColorUtil.prototype.a.c(0, 255))
}, e: function (c) {
    var d = c.getAHSV();
    return $.ig.ColorUtil.prototype.h(d[0], $.ig.ColorUtil.prototype.a.c(0, 359), d[2], d[3])
}, getInterpolation: function (k, l, a) {
    var m = this;
    switch (a) {
        case $.ig.InterpolationMode.prototype.hSV:
            var g = this.getAHSV();
            var h = l.getAHSV();
            var i = g[1] >= 0 ? g[1] : h[1];
            var j = h[1] >= 0 ? h[1] : g[1];
            if (i >= 0 && j >= 0 && Math.abs(j - i) > 180) {
                if (j > i) {
                    i += 360
                } else {
                    j += 360
                }
            }
            k = Math.max(0, Math.min(1, k));
            return $.ig.ColorUtil.prototype.h(g[0] + k * (h[0] - g[0]), i + k * (j - i), g[2] + k * (h[2] - g[2]), g[3] + k * (h[3] - g[3]));
        case $.ig.InterpolationMode.prototype.rGB:
            return $.ig.Color.prototype.s(m.__a + k * (l.__a - m.__a), m.__r + k * (l.__r - m.__r), m.__g + k * (l.__g - m.__g), m.__b + k * (l.__b - m.__b))
    }
    return this
}, f: function (f, g, h) {
    var i = f[1] >= 0 ? f[1] : h[1];
    var j = h[1] >= 0 ? h[1] : f[1];
    if (i >= 0 && j >= 0 && Math.abs(j - i) > 180) {
        if (j > i) {
            i += 360
        } else {
            j += 360
        }
    }
    g = Math.max(0, Math.min(1, g));
    return $.ig.ColorUtil.prototype.h(f[0] + g * (h[0] - f[0]), i + g * (j - i), f[2] + g * (h[2] - f[2]), f[3] + g * (h[3] - f[3]))
}, getLightened: function (a) {
    var d = this.getAHSL();
    if (a < 0) {
        return $.ig.ColorUtil.prototype.g(d[0], d[1], d[2], d[3] * (1 - $.ig.MathUtil.prototype.i(-a, 0, 1)))
    } else {
        return $.ig.ColorUtil.prototype.g(d[0], d[1], d[2], d[3] + $.ig.MathUtil.prototype.i(a, 0, 1) * (1 - d[3]))
    }
}, getAHSL: function () {
    var a = new Array(4);
    var i = this.c() / 255;
    var j = this.d() / 255;
    var k = this.e() / 255;
    var l = Math.min(Math.min(i, j), k);
    var m = Math.max(Math.max(i, j), k);
    var n = m - l;
    a[0] = this.b() / 255;
    a[3] = (m + l) / 2;
    if (n == 0) {
        a[1] = -1;
        a[2] = 0
    } else {
        a[1] = $.ig.ColorUtil.prototype.i(m, n, i, j, k);
        a[2] = a[3] < 0.5 ? n / (m + l) : n / (2 - m - l)
    }
    return a
}, getAHSV: function () {
    var a = this.b() / 255;
    var j = this.c() / 255;
    var k = this.d() / 255;
    var l = this.e() / 255;
    var m = Math.min(j, Math.min(k, l));
    var n = Math.max(j, Math.max(k, l));
    var o = n - m;
    var p = new Array(4);
    p[0] = a;
    p[3] = n;
    if (o == 0) {
        p[1] = -1;
        p[2] = 0
    } else {
        p[1] = $.ig.ColorUtil.prototype.i(n, o, j, k, l);
        p[2] = o / n
    }
    return p
}, g: function (k, l, m, n) {
    var o;
    var p;
    var q;
    if (m == 0) {
        o = n;
        p = n;
        q = n
    } else {
        var r = n < 0.5 ? n * (1 + m) : n + m - (n * m);
        var s = 2 * n - r;
        var t = l / 360;
        o = $.ig.ColorUtil.prototype.j(s, r, t + 1 / 3);
        p = $.ig.ColorUtil.prototype.j(s, r, t);
        q = $.ig.ColorUtil.prototype.j(s, r, t - 1 / 3)
    }
    return $.ig.Color.prototype.s((k * 255), (o * 255), (p * 255), (q * 255))
}, h: function (m, n, o, p) {
    var q;
    var r;
    var s;
    while (n >= 360) {
        n -= 360
    }
    if (o == 0) {
        q = p;
        r = p;
        s = p
    } else {
        n /= 60;
        var t = Math.floor(n);
        var u = n - t;
        var v = p * (1 - o);
        var w = p * (1 - o * u);
        var x = p * (1 - o * (1 - u));
        switch (t) {
            case 0:
                q = p;
                r = x;
                s = v;
                break;
            case 1:
                q = w;
                r = p;
                s = v;
                break;
            case 2:
                q = v;
                r = p;
                s = x;
                break;
            case 3:
                q = v;
                r = w;
                s = p;
                break;
            case 4:
                q = x;
                r = v;
                s = p;
                break;
            default:
                q = p;
                r = v;
                s = w;
                break
        }
    }
    return $.ig.Color.prototype.s((m * 255), (q * 255), (r * 255), (s * 255))
}, i: function (g, h, i, j, k) {
    var l = i == g ? (j - k) / h : j == g ? 2 + (k - i) / h : 4 + (i - j) / h;
    l *= 60;
    if (l < 0) {
        l += 360
    }
    return l
}, j: function (d, e, f) {
    f = f < 0 ? f + 1 : f > 1 ? f - 1 : f;
    if (f < 1 / 6) {
        return d + ((e - d) * 6 * f)
    }
    if (f < 1 / 2) {
        return e
    }
    if (f < 2 / 3) {
        return d + ((e - d) * 6 * (2 / 3 - f))
    }
    return d
}, b: null, c: function () {
    if ($.ig.ColorUtil.prototype.b == null) {
        $.ig.ColorUtil.prototype.b = new Array(100);
        $.ig.ColorUtil.prototype.b[0] = $.ig.Color.prototype.s(255, 70, 130, 180);
        $.ig.ColorUtil.prototype.b[1] = $.ig.Color.prototype.s(255, 65, 105, 225);
        $.ig.ColorUtil.prototype.b[2] = $.ig.Color.prototype.s(255, 100, 149, 237);
        $.ig.ColorUtil.prototype.b[3] = $.ig.Color.prototype.s(255, 176, 196, 222);
        $.ig.ColorUtil.prototype.b[4] = $.ig.Color.prototype.s(255, 123, 104, 238);
        $.ig.ColorUtil.prototype.b[5] = $.ig.Color.prototype.s(255, 106, 90, 205);
        $.ig.ColorUtil.prototype.b[6] = $.ig.Color.prototype.s(255, 72, 61, 139);
        $.ig.ColorUtil.prototype.b[7] = $.ig.Color.prototype.s(255, 25, 25, 112);
        for (var a = 8; a < 100; a++) {
            $.ig.ColorUtil.prototype.b[a] = $.ig.Color.prototype.s(255, $.ig.ColorUtil.prototype.a.b(255), $.ig.ColorUtil.prototype.a.b(255), $.ig.ColorUtil.prototype.a.b(255))
        }
    }
    return $.ig.ColorUtil.prototype.b
}, l: function (b) {
    b %= 100;
    return $.ig.ColorUtil.prototype.c()[b]
}, m: function (f) {
    var g = f.b() / 255;
    var h = (f.c() * g);
    var i = (f.d() * g);
    var j = (f.e() * g);
    return f.b() << 24 | h << 16 | i << 8 | j
}, n: function (b) {
    return b.color()
}, $type: new $.ig.Type("ColorUtil", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DoubleAnimator", "Object", {a: null, k: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new $.ig.PropertyChangedEventArgs("TransitionProgress"))
        }
        return b
    } else {
        return this.a
    }
}, b: null, l: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        return b
    } else {
        return this.b
    }
}, c: null, d: null, init: function (d, e, f) {
    this.c = 0;
    this.d = 0;
    this.e = false;
    this.g = -1;
    this.h = 0;
    $.ig.Object.prototype.init.call(this);
    this.c = d;
    this.d = e;
    this.b = f;
    this.m(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1000 / 60)
    })
}, e: null, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, t: function () {
    this.a = 0;
    this.h = 0;
    this.f = $.ig.Date.prototype.now();
    if (!this.e) {
        this.e = true;
        this.m()(this.v.on(this))
    }
}, u: function () {
    this.e = false;
    this.a = 0;
    this.h = 0
}, f: null, g: null, h: null, v: function () {
    if (!this.e) {
        this.u();
        return
    }
    var e = $.ig.Date.prototype.now();
    var f = e.getTime() - this.f.getTime();
    if (f > this.b) {
        f = this.b
    }
    if (f - this.h < 16 && f != this.b) {
        this.m()(this.v.on(this));
        return
    }
    var g = (f / this.b);
    var h = this.c + ((this.d - this.c) * g);
    this.k(h);
    this.h = f;
    if (f == this.b) {
        this.u()
    } else {
        this.m()(this.v.on(this))
    }
}, w: function () {
    return this.e
}, propertyChanged: null, $type: new $.ig.Type("DoubleAnimator", $.ig.Object.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("MathUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, e: function (b) {
    return Math.log(b + Math.sqrt(b * b + 1))
}, f: function (c, d) {
    return Math.sqrt(c * c + d * d)
}, g: function (b) {
    return b * b
}, h: function (h) {
    var g = this;
    if (h <= 0) {
        return NaN
    }
    var i = (function () {
        var a = new Array();
        a.add(57.1562356658629);
        a.add(-59.5979603554755);
        a.add(14.1360979747417);
        a.add(-0.49191381609762);
        a.add(3.39946499848119e-05);
        a.add(4.65236289270486e-05);
        a.add(-9.83744753048796e-05);
        a.add(0.000158088703224912);
        a.add(-0.000210264441724105);
        a.add(0.000217439618115213);
        a.add(-0.000164318106536764);
        a.add(8.44182239838528e-05);
        a.add(-2.61908384015814e-05);
        a.add(3.68991826595316e-06);
        return a
    }());
    var j = h;
    var k = (h + 0.5) * Math.log(h + 5.2421875) - (h + 5.2421875);
    var l = 0.999999999999997;
    for (var m = 0; m < 14; m++) {
        l += i[m] / ++j
    }
    return k + Math.log(2.506628274631 * l / h)
}, i: function (d, e, f) {
    return Math.min(f, Math.max(e, d))
}, j: function (b) {
    return Math.PI * b / 180
}, k: function (b) {
    return 180 * b / Math.PI
}, l: function (p, q, r) {
    var s = Math.floor(p) & 255;
    var t = Math.floor(q) & 255;
    var u = Math.floor(r) & 255;
    p -= Math.floor(p);
    q -= Math.floor(q);
    r -= Math.floor(r);
    var v = $.ig.MathUtil.prototype.m(p);
    var w = $.ig.MathUtil.prototype.m(q);
    var x = $.ig.MathUtil.prototype.m(r);
    var y = $.ig.MathUtil.prototype.d[s] + t;
    var z = $.ig.MathUtil.prototype.d[y] + u;
    var A = $.ig.MathUtil.prototype.d[y + 1] + u;
    var B = $.ig.MathUtil.prototype.d[s + 1] + t;
    var C = $.ig.MathUtil.prototype.d[B] + u;
    var D = $.ig.MathUtil.prototype.d[B + 1] + u;
    return $.ig.MathUtil.prototype.n(x, $.ig.MathUtil.prototype.n(w, $.ig.MathUtil.prototype.n(v, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[z], p, q, r), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[C], p - 1, q, r)), $.ig.MathUtil.prototype.n(v, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[A], p, q - 1, r), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[D], p - 1, q - 1, r))), $.ig.MathUtil.prototype.n(w, $.ig.MathUtil.prototype.n(v, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[z + 1], p, q, r - 1), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[C + 1], p - 1, q, r - 1)), $.ig.MathUtil.prototype.n(v, $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[A + 1], p, q - 1, r - 1), $.ig.MathUtil.prototype.o($.ig.MathUtil.prototype.d[D + 1], p - 1, q - 1, r - 1))))
}, m: function (b) {
    return b * b * b * (b * (b * 6 - 15) + 10)
}, n: function (d, e, f) {
    return e + d * (f - e)
}, o: function (h, i, j, k) {
    var l = h & 15;
    var m = l < 8 ? i : j;
    var n = l < 4 ? j : l == 12 || l == 14 ? i : k;
    return((l & 1) == 0 ? m : -m) + ((l & 2) == 0 ? n : -n)
}, p: function (e) {
    if (e == 0) {
        return 0
    }
    if (e < 0) {
        return -$.ig.MathUtil.prototype.r(-e)
    }
    var f = Math.floor(Math.log10(e));
    var g = e / $.ig.MathUtil.prototype.s(10, f);
    var h = g < 2 ? 1 : (g < 5 ? 2 : (g < 10 ? 5 : 10));
    return h * $.ig.MathUtil.prototype.s(10, f)
}, q: function (e) {
    if (e == 0) {
        return 0
    }
    if (e < 0) {
        return -$.ig.MathUtil.prototype.q(-e)
    }
    var f = Math.floor(Math.log10(e));
    var g = e / $.ig.MathUtil.prototype.s(10, f);
    var h = g < 1 ? 1 : (g < 3 ? 2 : (g < 7 ? 5 : 10));
    return h * $.ig.MathUtil.prototype.s(10, f)
}, r: function (e) {
    if (e == 0) {
        return 0
    }
    if (e < 0) {
        return -$.ig.MathUtil.prototype.p(-e)
    }
    var f = Math.floor(Math.log10(e));
    var g = e / $.ig.MathUtil.prototype.s(10, f);
    var h = g <= 1 ? 1 : (g <= 2 ? 2 : (g <= 5 ? 5 : 10));
    return h * $.ig.MathUtil.prototype.s(10, f)
}, s: function (d, e) {
    var f = 1;
    for (; e > 0; --e) {
        f *= d
    }
    for (; e < 0; ++e) {
        f /= d
    }
    return f
}, t: function (d, e, f) {
    return Math.min(d, Math.min(e, f))
}, u: function (d, e, f) {
    return Math.max(d, Math.max(e, f))
}, v: function (d) {
    var e = d[0];
    for (var f = 1; f < d.length; ++f) {
        e = Math.min(e, d[f])
    }
    return e
}, w: function (d) {
    var e = d[0];
    for (var f = 1; f < d.length; ++f) {
        e = Math.max(e, d[f])
    }
    return e
}, $type: new $.ig.Type("MathUtil", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("RectUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, getCenter: function () {
    if (this.isEmpty()) {
        return{__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
    return{__x: 0.5 * (this.left() + this.right()), __y: 0.5 * (this.bottom() + this.top()), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, getArea: function () {
    if (this.isEmpty()) {
        return 0
    }
    return this.width() * this.height()
}, duplicate: function () {
    if (this.isEmpty()) {
        return this
    }
    return new $.ig.Rect(0, this.left(), this.top(), this.width(), this.height())
}, getLeader: function (a) {
    if (this.contains1(a)) {
        return a
    }
    var h = {__x: this.left() + 0.5 * this.width(), __y: this.top() + 0.5 * this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var i = {__x: a.__x - h.__x, __y: a.__y - h.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var j;
    if (i.__x != 0) {
        j = (this.left() - h.__x) / i.__x;
        var k = h.__y + j * i.__y;
        if (k > this.top() && k < this.bottom()) {
            return j > 0 ? {__x: this.left(), __y: k, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName} : {__x: this.right(), __y: h.__y - j * i.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
        }
    }
    j = (this.top() - h.__y) / i.__y;
    var l = h.__x + j * i.__x;
    return j > 0 ? {__x: l, __y: this.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName} : {__x: h.__x - j * i.__x, __y: this.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, getDistanceSquared: function (a) {
    if (this.isEmpty()) {
        return NaN
    }
    return $.ig.RectUtil.prototype.getDistanceSquared22(this, a.__x, a.__y)
}, getDistanceSquared11: function (a) {
    if (this.isEmpty()) {
        return Number.POSITIVE_INFINITY
    }
    var d = $.ig.RectUtil.prototype.getDistanceSquared22(this, a.left(), a.top());
    if (d > 0) {
        d = Math.min(d, $.ig.RectUtil.prototype.getDistanceSquared22(this, a.left(), a.bottom()))
    }
    if (d > 0) {
        d = Math.min(d, $.ig.RectUtil.prototype.getDistanceSquared22(this, a.right(), a.bottom()))
    }
    if (d > 0) {
        d = Math.min(d, $.ig.RectUtil.prototype.getDistanceSquared22(this, a.right(), a.top()))
    }
    if (d > 0) {
        d = Math.min(d, $.ig.RectUtil.prototype.getDistanceSquared22(a, this.left(), this.top()))
    }
    if (d > 0) {
        d = Math.min(d, $.ig.RectUtil.prototype.getDistanceSquared22(a, this.left(), this.bottom()))
    }
    if (d > 0) {
        d = Math.min(d, $.ig.RectUtil.prototype.getDistanceSquared22(a, this.right(), this.bottom()))
    }
    if (d > 0) {
        d = Math.min(d, $.ig.RectUtil.prototype.getDistanceSquared22(a, this.right(), this.top()))
    }
    return d
}, getDistanceSquared22: function (a, j) {
    var k = a - this.left();
    var l = j - this.top();
    var m = this.width() * k;
    var n = this.height() * l;
    if (m > 0) {
        var o = this.width() * this.width();
        if (m < o) {
            k -= (m / o) * this.width()
        } else {
            k -= this.width()
        }
    }
    if (n > 0) {
        var p = this.height() * this.height();
        if (n < p) {
            l -= (n / p) * this.height()
        } else {
            l -= this.height()
        }
    }
    return k * k + l * l
}, contains3: function (a) {
    if (this.isEmpty() || a.isEmpty()) {
        return false
    }
    if (this.left() > a.left()) {
        return false
    }
    if (this.right() < a.right()) {
        return false
    }
    if (this.top() > a.top()) {
        return false
    }
    if (this.bottom() < a.bottom()) {
        return false
    }
    return true
}, intersectsWith1: function (a) {
    if (this.isEmpty() || a.isEmpty()) {
        return false
    }
    if (this.right() < a.left()) {
        return false
    }
    if (this.left() > a.right()) {
        return false
    }
    if (this.top() > a.bottom()) {
        return false
    }
    if (this.bottom() < a.top()) {
        return false
    }
    return true
}, intersectionArea: function (a) {
    if (this.isEmpty() || a.isEmpty()) {
        return 0
    }
    var e = Math.min(this.right(), a.right()) - Math.max(this.left(), a.left());
    if (e <= 0) {
        return 0
    }
    var f = Math.min(this.bottom(), a.bottom()) - Math.max(this.top(), a.top());
    if (f <= 0) {
        return 0
    }
    return e * f
}, getInflated: function (a, d) {
    if (this.isEmpty()) {
        return this
    }
    return new $.ig.Rect(0, this.x() - a, this.y() - d, Math.max(0, this.width() + 2 * a), Math.max(0, this.height() + 2 * d))
}, inflate: function (a, f) {
    this.x(this.x() - a);
    this.y(this.y() - f);
    var g = this.width() + 2 * a;
    var h = this.height() + 2 * f;
    this.width(g > 1 ? g : 1);
    this.height(h > 1 ? h : 1);
    return this
}, inflate11: function (a) {
    var i = this.x() - a;
    var j = this.y() - a;
    var k = this.width() + a + a;
    var l = this.height() + a + a;
    var m = k > 0 ? k : 0;
    var n = l > 0 ? l : 0;
    return new $.ig.Rect(0, i, j, m, n)
}, round: function () {
    this.x(Math.round(this.x()));
    this.y(Math.round(this.y()));
    this.width(Math.round(this.width()));
    this.height(Math.round(this.height()));
    return this
}, isNull: function () {
    return this.x() == 0 && this.y() == 0 && this.width() == 0 && this.height() == 0
}, $type: new $.ig.Type("RectUtil", $.ig.Object.prototype.$type)}, true);
$.ig.InterpolationMode.prototype.rGB = 0;
$.ig.InterpolationMode.prototype.hSV = 1;
$.ig.OverviewPlusDetailPaneMode.prototype.minimal = 0;
$.ig.OverviewPlusDetailPaneMode.prototype.full = 1;
$.ig.OverviewPlusDetailPaneMode.prototype.compact = 2;
$.ig.InteractionState.prototype.none = 0;
$.ig.InteractionState.prototype.dragZoom = 1;
$.ig.InteractionState.prototype.dragPan = 2;
$.ig.InteractionState.prototype.auto = 3;
$.ig.GradientDirection.prototype.topBottom = 0;
$.ig.GradientDirection.prototype.bottomTop = 1;
$.ig.GradientDirection.prototype.leftRight = 2;
$.ig.GradientDirection.prototype.rightLeft = 3;
$.ig.GradientDirection.prototype.radial = 4;
$.ig.FastItemsSourceEventAction.prototype.remove = 0;
$.ig.FastItemsSourceEventAction.prototype.insert = 1;
$.ig.FastItemsSourceEventAction.prototype.replace = 2;
$.ig.FastItemsSourceEventAction.prototype.change = 3;
$.ig.FastItemsSourceEventAction.prototype.reset = 4;
$.ig.TrendLineType.prototype.none = 0;
$.ig.TrendLineType.prototype.linearFit = 1;
$.ig.TrendLineType.prototype.quadraticFit = 2;
$.ig.TrendLineType.prototype.cubicFit = 3;
$.ig.TrendLineType.prototype.quarticFit = 4;
$.ig.TrendLineType.prototype.quinticFit = 5;
$.ig.TrendLineType.prototype.logarithmicFit = 6;
$.ig.TrendLineType.prototype.exponentialFit = 7;
$.ig.TrendLineType.prototype.powerLawFit = 8;
$.ig.TrendLineType.prototype.simpleAverage = 9;
$.ig.TrendLineType.prototype.exponentialAverage = 10;
$.ig.TrendLineType.prototype.modifiedAverage = 11;
$.ig.TrendLineType.prototype.cumulativeAverage = 12;
$.ig.TrendLineType.prototype.weightedAverage = 13;
$.ig.BrushCollection.prototype.ai = new $.ig.Random();
$.ig.DOMEventProxy.prototype.b0 = 0;
$.ig.DOMEventProxy.prototype.bz = -1;
$.ig.XamOverviewPlusDetailPane.prototype.a7 = 2;
$.ig.XamOverviewPlusDetailPane.prototype.a8 = "SizeStates";
$.ig.XamOverviewPlusDetailPane.prototype.a9 = "Full";
$.ig.XamOverviewPlusDetailPane.prototype.ba = "Minimal";
$.ig.XamOverviewPlusDetailPane.prototype.bb = "ZoomableStates";
$.ig.XamOverviewPlusDetailPane.prototype.bc = "ZoomEnabled";
$.ig.XamOverviewPlusDetailPane.prototype.bd = "ZoomDisabled";
$.ig.XamOverviewPlusDetailPane.prototype.be = "Root";
$.ig.XamOverviewPlusDetailPane.prototype.bf = "ContentPresenter";
$.ig.XamOverviewPlusDetailPane.prototype.bg = "ZoomOut";
$.ig.XamOverviewPlusDetailPane.prototype.bh = "ZoomLevel";
$.ig.XamOverviewPlusDetailPane.prototype.bi = "ZoomIn";
$.ig.XamOverviewPlusDetailPane.prototype.bj = "ZoomTo100";
$.ig.XamOverviewPlusDetailPane.prototype.bk = "ScaleToFit";
$.ig.XamOverviewPlusDetailPane.prototype.bl = "ButtonCursor";
$.ig.XamOverviewPlusDetailPane.prototype.bm = "DragPan";
$.ig.XamOverviewPlusDetailPane.prototype.bn = "DragZoom";
$.ig.XamOverviewPlusDetailPane.prototype.bo = "ButtonsGrid";
$.ig.XamOverviewPlusDetailPane.prototype.bp = "Immediate";
$.ig.XamOverviewPlusDetailPane.prototype.bq = "World";
$.ig.XamOverviewPlusDetailPane.prototype.br = "WorldStyle";
$.ig.XamOverviewPlusDetailPane.prototype.bs = "Window";
$.ig.XamOverviewPlusDetailPane.prototype.bt = "WindowStyle";
$.ig.XamOverviewPlusDetailPane.prototype.bu = "Preview";
$.ig.XamOverviewPlusDetailPane.prototype.bv = "PreviewStyle";
$.ig.XamOverviewPlusDetailPane.prototype.bw = "ZoomLevelLargeChange";
$.ig.XamOverviewPlusDetailPane.prototype.bx = 10;
$.ig.XamOverviewPlusDetailPane.prototype.by = 2;
$.ig.XamOverviewPlusDetailPane.prototype.b2 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bp, $.ig.Boolean.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, c)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Boolean.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bp, d.f(), d.e()))
}));
$.ig.XamOverviewPlusDetailPane.prototype.b3 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bq, $.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (c, d) {
    ($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, c)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bq, d.f(), d.e()))
}));
$.ig.XamOverviewPlusDetailPane.prototype.b4 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.br, $.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, c)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.br, $.ig.util.cast($.ig.Style.prototype.$type, d.f()), $.ig.util.cast($.ig.Style.prototype.$type, d.e())))
}));
$.ig.XamOverviewPlusDetailPane.prototype.b5 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bs, $.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (c, d) {
    ($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, c)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bs, d.f(), d.e()))
}));
$.ig.XamOverviewPlusDetailPane.prototype.b6 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bt, $.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, c)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bt, $.ig.util.cast($.ig.Style.prototype.$type, d.f()), $.ig.util.cast($.ig.Style.prototype.$type, d.e())))
}));
$.ig.XamOverviewPlusDetailPane.prototype.b7 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bu, $.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (c, d) {
    ($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, c)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Rect.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bu, d.f(), d.e()))
}));
$.ig.XamOverviewPlusDetailPane.prototype.b8 = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bv, $.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.XamOverviewPlusDetailPane.prototype.$type, c)).fp(new $.ig.PropertyChangedEventArgs$1($.ig.Style.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.bv, $.ig.util.cast($.ig.Style.prototype.$type, d.f()), $.ig.util.cast($.ig.Style.prototype.$type, d.e())))
}));
$.ig.XamOverviewPlusDetailPane.prototype.b9 = $.ig.DependencyProperty.prototype.l("ShrinkToThumbnail", $.ig.Boolean.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, true, $.ig.XamOverviewPlusDetailPane.prototype.ei));
$.ig.XamOverviewPlusDetailPane.prototype.ca = $.ig.DependencyProperty.prototype.l("Mode", $.ig.OverviewPlusDetailPaneMode.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.OverviewPlusDetailPaneMode.prototype.minimal, $.ig.XamOverviewPlusDetailPane.prototype.em));
$.ig.XamOverviewPlusDetailPane.prototype.cc = $.ig.DependencyProperty.prototype.l("ZoomTo100ButtonVisibility", $.ig.Visibility.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (c, d) {
    return(c).fo("ZoomTo100ButtonVisibility", d.f(), d.e())
}));
$.ig.XamOverviewPlusDetailPane.prototype.cd = $.ig.DependencyProperty.prototype.l("ScaleToFitButtonVisibility", $.ig.Visibility.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (c, d) {
    return(c).fo("ScaleToFitButtonVisibility", d.f(), d.e())
}));
$.ig.XamOverviewPlusDetailPane.prototype.ce = $.ig.DependencyProperty.prototype.l("InteractionStatesToolVisibility", $.ig.Visibility.prototype.$type, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (c, d) {
    return(c).fo("InteractionStatesToolVisibility", d.f(), d.e())
}));
$.ig.XamOverviewPlusDetailPane.prototype.cf = $.ig.DependencyProperty.prototype.l($.ig.XamOverviewPlusDetailPane.prototype.bw, Number, $.ig.XamOverviewPlusDetailPane.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    return(c).fo($.ig.XamOverviewPlusDetailPane.prototype.bw, d.f(), d.e())
}));
$.ig.ColorUtil.prototype.a = new $.ig.Random();
$.ig.MathUtil.prototype.a = Math.PI / 180;
$.ig.MathUtil.prototype.b = (1 + Math.sqrt(5)) / 2;
$.ig.MathUtil.prototype.c = Math.sqrt(2);
$.ig.MathUtil.prototype.d = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
$.ig.util.extCopy($.ig.ArrayUtil, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.List$1, $.ig.ReadOnlyCollection$1],
        ["shuffle$1", "insertionIndex$1", "insertionIndex$11111", "binarySearch$1"]
    ]
]);
$.ig.util.extCopy($.ig.ColorUtil, [
    [
        [$.ig.Color],
        ["getInterpolation", "getLightened", "getAHSL", "getAHSV"]
    ]
]);
$.ig.util.extCopy($.ig.Extensions, [
    [
        [$.ig.PathGeometry],
        ["reset"]
    ],
    [
        [$.ig.GeometryGroup],
        ["reset1"]
    ],
    [
        [$.ig.FrameworkElement],
        ["detach"]
    ],
    [
        [$.ig.Panel],
        ["transferChildrenTo"]
    ],
    [
        [$.ig.Point],
        ["isPlottable"]
    ],
    [
        [$.ig.Rect],
        ["isPlottable1"]
    ]
]);
$.ig.util.extCopy($.ig.PathFigureUtil, [
    [
        [$.ig.PathFigureCollection],
        ["duplicate"]
    ],
    [
        [$.ig.PathFigure],
        ["duplicate1"]
    ]
]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.List$1, $.ig.ReadOnlyCollection$1],
        ["flattenTo", "getBounds2", "clipTo"]
    ],
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2],
        ["getBounds", "getBounds11", "getCentroid", "toPointCollection", "toPointList"]
    ],
    [
        [$.ig.List$1],
        ["getBounds3", "getBounds41", "toPointCollections"]
    ]
]);
$.ig.util.extCopy($.ig.RectUtil, [
    [
        [$.ig.Rect],
        ["getCenter", "getArea", "duplicate", "getLeader", "getDistanceSquared", "getDistanceSquared11", "getDistanceSquared22", "contains3", "intersectsWith1", "intersectionArea", "getInflated", "inflate", "inflate11", "round", "isNull"]
    ]
]);
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.FastItemsSource, $.ig.EdgeClipper, $.ig.RearrangedList$1],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.FastItemsSource, $.ig.EdgeClipper, $.ig.RearrangedList$1],
        ["asQueryable"]
    ]
]);
$.ig = $.ig || {};
$.ig.util.bulkDefine(["AxisLabelPanelBaseView", "AngleAxisLabelPanelView", "AxisLabelPanelBase", "AngleAxisLabelPanel", "AutoRangeCalculator", "Axis", "AxisCollection", "AxisComponentsForView", "AxisComponentsFromView", "AxisLabelInfo", "AxisLabelManager", "LabelPosition", "AxisLabelSettings", "AxisRange", "Snapper", "LinearNumericSnapper", "LogarithmicNumericSnapper", "LinearCategorySnapper", "AxisView", "IScaler", "ICategoryScaler", "CategoryAxisBase", "IAngleScaler", "CategoryAngleAxis", "CategoryAxisBaseView", "CategoryAngleAxisView", "ISortingAxis", "CategoryDateTimeXAxis", "CategoryDateTimeXAxisView", "AxisRenderingParametersBase", "CategoryAxisRenderingParameters", "AxisRendererBase", "CategoryAxisRenderer", "CategoryXAxis", "CategoryXAxisView", "CategoryYAxis", "CategoryYAxisView", "HorizontalAxisLabelPanelBase", "HorizontalAxisLabelPanel", "HorizontalAxisLabelPanelBaseView", "NumericAxisBase", "NumericAngleAxis", "NumericAxisBaseView", "NumericAngleAxisView", "StraightNumericAxisBase", "NumericRadiusAxis", "NumericRadiusAxisView", "NumericXAxis", "StraightNumericAxisBaseView", "NumericXAxisView", "NumericYAxis", "NumericYAxisView", "PolarAxes", "PolarAxisRenderingManager", "IPolarRadialRenderingParameters", "NumericAxisRenderingParameters", "PolarAxisRenderingParameters", "RadialAxisRenderingParameters", "RadialAxes", "RadialAxisLabelPanel", "RadialAxisLabelPanelView", "GetSnapperInfoStrategy", "NumericAxisRenderer", "RangeInfo", "NumericScaler", "LinearScaler", "HorizontalLinearScaler", "LogarithmicScaler", "HorizontalLogarithmicScaler", "NumericScaleMode", "ScalerParams", "VerticalLinearScaler", "VerticalLogarithmicScaler", "TickmarkValues", "CategoryTickmarkValues", "LinearTickmarkValues", "LogarithmicTickmarkValues", "TickmarkValuesInitializationParameters", "ViewportUtils", "FramePreparer", "CategoryFramePreparerBase", "CategoryFramePreparer", "BarFramePreparer", "BarTrendFitCalculator", "TrendLineManagerBase$1", "IPreparesCategoryTrendline", "CategoryTrendLineManagerBase", "CategoryTrendLineManager", "BarTrendLineManager", "BrushScale", "MarkerManagerBase", "BubbleMarkerManager", "IProvidesViewport", "Series", "MarkerSeries", "ISupportsErrorBars", "ScatterBase", "BubbleSeries", "SeriesView", "MarkerSeriesView", "ScatterBaseView", "BubbleSeriesView", "CustomPaletteBrushScale", "SizeScale", "ValueBrushScale", "IHasCategoryAxis", "IHasCategoryModePreference", "CategorySeries", "IIsCategoryBased", "IHasSingleValueCategory", "IHasTrendline", "IHasCategoryTrendline", "AnchoredCategorySeries", "VerticalAnchoredCategorySeries", "IBarSeries", "BarSeries", "ISupportsMarkers", "CategorySeriesView", "AnchoredCategorySeriesView", "BarSeriesView", "IBucketizer", "CategoryBucketCalculator", "AnchoredCategoryBucketCalculator", "BarBucketCalculator", "RangeCategoryBucketCalculator", "HorizontalAnchoredCategorySeries", "PointSeries", "PointSeriesView", "IHasHighLowValueCategory", "RangeCategorySeries", "HorizontalRangeCategorySeries", "RangeAreaSeries", "RangeCategorySeriesView", "RangeAreaSeriesView", "RangeCategoryFramePreparer", "ValuesHolder", "HighLowValuesHolder", "DefaultHighLowValueProvider", "RangeColumnSeries", "RangeColumnSeriesView", "SplineSeriesBaseView", "SplineAreaSeriesView", "VerticalAxisLabelPanel", "VerticalAxisLabelPanelView", "AreaSeries", "AreaSeriesView", "Frame", "CategoryFrame", "SingleValuesHolder", "DefaultSingleValueProvider", "PreparationParams", "CategoryLineRasterizer", "ColumnSeries", "ColumnSeriesView", "DefaultSupportsMarkers", "DefaultProvidesViewport", "DefaultSupportsErrorBars", "LineSeries", "LineSeriesView", "SplineSeriesBase", "SplineAreaSeries", "SplineSeries", "SplineSeriesView", "StepAreaSeries", "StepAreaSeriesView", "StepLineSeries", "StepLineSeriesView", "WaterfallSeries", "WaterfallSeriesView", "MarkerTemplates", "DataSourceManager", "BrushSelectionMode", "IndicatorDisplayType", "TimeAxisDisplayType", "ChartAxisRangeChangedEventArgs", "DataChartAxisRangeChangedEventHandler", "FinancialSeries", "FinancialIndicator", "StrategyBasedIndicator", "AbsoluteVolumeOscillatorIndicator", "IndicatorCalculationStrategy", "AbsoluteVolumeOscillatorIndicatorStrategy", "AccumulationDistributionIndicator", "StreamingIndicatorCalculationStrategy", "AccumulationDistributionIndicatorStrategy", "AverageDirectionalIndexIndicator", "AverageDirectionalIndexIndicatorStrategy", "AverageTrueRangeIndicator", "AverageTrueRangeIndicatorStrategy", "FinancialOverlay", "BollingerBandsOverlay", "FinancialBucketCalculator", "BollingerBandsBucketCalculator", "FinancialSeriesView", "BollingerBandsOverlayView", "BollingerBandWidthIndicator", "BollingerBandWidthIndicatorStrategy", "ChaikinOscillatorIndicator", "ChaikinOscillatorIndicatorStrategy", "ChaikinVolatilityIndicator", "ChaikinVolatilityIndicatorStrategy", "CommodityChannelIndexIndicator", "CommodityChannelIndexIndicatorStrategy", "CustomIndicator", "CustomIndicatorStrategy", "PriceChannelOverlayView", "DetrendedPriceOscillatorIndicator", "DetrendedPriceOscillatorIndicatorStrategy", "EaseOfMovementIndicator", "EaseOfMovementIndicatorStrategy", "FastStochasticOscillatorIndicator", "FastStochasticOscillatorIndicatorStrategy", "FinancialIndicatorBucketCalculator", "FinancialIndicatorView", "ForceIndexIndicator", "ForceIndexIndicatorStrategy", "FullStochasticOscillatorIndicator", "FullStochasticOscillatorIndicatorStrategy", "PercentKCalculationStrategy", "IndicatorRenderer", "ItemwiseIndicatorCalculationStrategy", "ItemwiseStrategyBasedIndicator", "ItemwiseStrategyCalculationStrategy", "MarketFacilitationIndexIndicator", "MarketFacilitationIndexIndicatorStrategy", "MassIndexIndicator", "MassIndexIndicatorStrategy", "MedianPriceIndicator", "MedianPriceIndicatorStrategy", "MoneyFlowIndexIndicator", "MoneyFlowIndexIndicatorStrategy", "MovingAverageConvergenceDivergenceIndicator", "MovingAverageConvergenceDivergenceIndicatorStrategy", "NegativeVolumeIndexIndicator", "NegativeVolumeIndexIndicatorStrategy", "OnBalanceVolumeIndicator", "OnBalanceVolumeIndicatorStrategy", "PercentagePriceOscillatorIndicator", "PercentagePriceOscillatorIndicatorStrategy", "PercentageVolumeOscillatorIndicator", "PercentageVolumeOscillatorIndicatorStrategy", "PositiveVolumeIndexIndicator", "PositiveVolumeIndexIndicatorStrategy", "PriceChannelOverlay", "PriceChannelBucketCalculator", "PriceVolumeTrendIndicator", "PriceVolumeTrendIndicatorStrategy", "RateOfChangeAndMomentumIndicator", "RateOfChangeAndMomentumIndicatorStrategy", "RelativeStrengthIndexIndicator", "RelativeStrengthIndexIndicatorStrategy", "SlowStochasticOscillatorIndicator", "SlowStochasticOscillatorIndicatorStrategy", "StandardDeviationIndicator", "StandardDeviationIndicatorStrategy", "StochRSIIndicator", "StochRSIIndicatorStrategy", "TRIXIndicator", "TRIXIndicatorStrategy", "TypicalPriceIndicator", "TypicalPriceIndicatorStrategy", "UltimateOscillatorIndicator", "UltimateOscillatorIndicatorCalculationStrategy", "WeightedCloseIndicator", "WeightedCloseIndicatorStrategy", "WilliamsPercentRIndicator", "WilliamsPercentRIndicatorStrategy", "LegendBaseViewManager", "LegendBase", "ScaleLegend", "LegendBaseView", "ScaleLegendView", "GradientData", "GradientStopData", "PieChartViewManager", "HighDensityScatterSeries", "MouseMoveThunk", "ScatterMouseOverEventArgs", "ProgressiveLoadStatusEventArgs", "HighDensityScatterSeriesView", "KDTree2D", "KNearestResults", "KNearestResult", "KDTreeThunk", "SearchArgs", "KDTreeNode2D", "SearchData", "PointData", "ScatterLineSeries", "ScatterLineSeriesView", "SeriesViewerComponentsForView", "SeriesViewerComponentsFromView", "SeriesViewer", "XamDataChart", "SeriesViewerView", "XamDataChartView", "ChartCollection", "ChartContentManager", "ContentInfo", "ChartContentType", "DataContext", "PieSliceDataContext", "LabelPanelArranger", "LabelPanelsArrangeState", "LegendTemplates", "Marker", "CollisionAvoidanceType", "NumericMarkerManager", "CategoryMarkerManager", "MarkerManagerBucket", "PathRenderer", "NaNSegmenter", "IFlattener", "DefaultFlattener", "RenderSurface", "SeriesCollection", "SeriesComponentsForView", "SeriesComponentsFromView", "SeriesRenderingArguments", "SeriesRenderer$2", "IFastItemsSourceProvider", "SyncLink", "FastItemsSourceReference", "SyncSettings", "SyncSettingsConverter", "SyncLinkManager", "SyncManager", "DefaultCategoryTrendlineHost", "DefaultCategoryTrendlinePreparer", "TrendResolutionParams", "TrendFitCalculator", "TrendAverageCalculator", "PolarTrendLineManager", "RadialTrendLineManager", "ScatterTrendLineManager", "SortingTrendLineManager", "AxisLabelsLocation", "CategoryMode", "AxisOrientation", "GridMode", "LabelsPosition", "MarkerType", "OthersCategoryType", "PriceDisplayType", "SplineType", "WindowMode", "WindowResponse", "ErrorBarSettingsBase", "CategoryErrorBarSettings", "EnableErrorBars", "ErrorBarsHelper", "ScatterErrorBarSettings", "AxisRangeChangedEventArgs", "AxisRangeChangedEventHandler", "DataChartMouseButtonEventArgs", "DataChartMouseButtonEventHandler", "DataChartLegendMouseButtonEventArgs", "DataChartLegendMouseButtonEventHandler", "ChartMouseEventArgs", "DataChartMouseEventHandler", "ChartLegendMouseEventArgs", "DataChartLegendMouseEventHandler", "ChartCursorEventArgs", "DataChartCursorEventHandler", "FinancialEventArgs", "FinancialEventHandler", "PropertyUpdatedEventArgs", "PropertyUpdatedEventHandler", "SliceClickEventArgs", "SliceClickEventHandler", "FinancialPriceSeries", "FinancialPriceBucketCalculator", "FinancialPriceSeriesView", "FinancialCalculationDataSource", "FinancialCalculationSupportingCalculations", "SupportingCalculation$1", "SupportingCalculationStrategy", "ColumnSupportingCalculation", "ProvideColumnValuesStrategy", "DataSourceSupportingCalculation", "CalculatedColumn", "ItemLegend", "ItemLegendView", "Legend", "LegendView", "PieChartBase", "PieLabel", "IndexCollection", "IndexCollectionTypeConverter", "PieChartBaseView", "Slice", "SliceView", "XamPieChart", "XamPieChartView", "PolarBase", "PolarLineSeriesBase", "PolarAreaSeries", "PolarBaseView", "PolarLineSeriesBaseView", "PolarAreaSeriesView", "PolarAxisInfoCache", "ScatterFrameBase$1", "PolarFrame", "AngleRadiusPair", "PolarLinePlanner", "PolarLineSeries", "PolarLineSeriesView", "PolarScatterSeries", "PolarScatterSeriesView", "PolarSplineAreaSeries", "PolarSplineAreaSeriesView", "PolarSplineSeries", "PolarSplineSeriesView", "RadialBase", "AnchoredRadialSeries", "RadialBucketCalculator", "AnchoredRadialBucketCalculator", "RadialBaseView", "AnchoredRadialSeriesView", "RadialFrame", "RadialColumnSeries", "RadialColumnSeriesView", "RadialLineSeries", "RadialLineSeriesView", "RadialPieSeries", "SliceCoords", "RadialPieSeriesView", "ScatterAxisInfoCache", "DictInterpolator$3", "OwnedPoint", "ScatterFrame", "ScatterSeries", "ScatterSeriesView", "CoercionInfo", "SeriesViewerSurfaceViewer", "OverviewPlusDetailViewportHost", "SeriesViewerViewManager", "Bezier", "BezierPointComparison", "BezierOp", "BezierPoint", "ChartVisualData", "SeriesVisualDataList", "SeriesVisualData", "MarkerVisualDataList", "MarkerVisualData", "AxisVisualDataList", "AxisVisualData", "PrimitiveVisualDataList", "AxisLabelVisualDataList", "AxisLabelVisualData", "LabelAppearanceData", "PrimitiveAppearanceData", "GetPointsSettings", "PrimitiveVisualData", "RectangleVisualData", "ShapeTags", "LineVisualData", "PolyLineVisualData", "PolygonVisualData", "PathVisualData", "GeometryData", "PathGeometryData", "LineGeometryData", "RectangleGeometryData", "EllipseGeometryData", "PathFigureData", "SegmentData", "LineSegmentData", "PolylineSegmentData", "ArcSegmentData", "AppearanceHelper", "IDetectsCollisions", "CollisionAvoider", "ColumnUtil", "IPool$1", "IIndexedPool$1", "Pool$1", "IHashPool$2", "HashPool$2", "SafeEnumerable", "SafeReadOnlyDoubleCollection", "SafeSortedReadOnlyDoubleCollection", "SortedListView$1", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise", "BrushCollection", "EventProxy", "DOMEventProxy", "TrendCalculators", "TrendLineType", "UnknownValuePlotting", "ErrorBarCalculatorReference", "ErrorBarCalculatorType", "IErrorBarCalculator", "MouseWheelHandler", "GestureHandler", "TouchHandler", "ContactHandler", "MouseHandler", "MouseOverHandler", "KeyHandler", "IFastItemColumnInternal", "IFastItemColumnPropertyName", "IFastItemColumn$1", "FastItemColumn", "FastItemDateTimeColumn", "FastItemObjectColumn", "FastItemIntColumn", "FastItemsSource", "ColumnReference", "FastItemsSourceEventAction", "FastItemsSourceEventArgs", "FastReflectionHelper", "IRenderer", "RectChangedEventArgs", "RectChangedEventHandler", "CanvasRenderScheduler", "CanvasViewRenderer", "GradientDirection", "RenderingContext", "DependencyObjectNotifier", "InteractionState", "IOverviewPlusDetailControl", "ISchedulableRender", "NavigationSettings", "OverviewPlusDetailPaneMode", "PropertyChangedEventArgs$1", "XamOverviewPlusDetailPane", "XamOverviewPlusDetailPaneView", "XamOverviewPlusDetailPaneViewManager", "XamMultiScaleTileSource", "MapTileSource", "BingMapsTileSource", "CloudMadeTileSource", "OpenStreetMapTileSource", "ArrayUtil", "Clipper", "EdgeClipper", "LeftClipper", "BottomClipper", "RightClipper", "TopClipper", "InterpolationMode", "ColorUtil", "DoubleAnimator", "Extensions", "Flattener", "SpiralTodo", "GeometryUtil", "Numeric", "LeastSquaresFit", "MathUtil", "PathFigureUtil", "PointCollectionUtil", "PolygonUtil", "PolySimplification", "RearrangedList$1", "RectUtil", "ISmartPlaceable", "SmartPlaceableWrapper$1", "SmartPosition", "SmartPlacer", "StackPool$1", "Tile", "WriteableBitmap", "IMapRenderDeferralHandler", "XamMultiScaleImage", "Pair$2", "IEasingFunction", "XamMultiScaleImageView"]);
$.ig.util.defType("WindowResponse", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("WindowResponse", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("MarkerType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("MarkerType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("GridMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("GridMode", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisOrientation", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("AxisOrientation", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("CategoryMode", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisLabelsLocation", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("AxisLabelsLocation", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ChartContentType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ChartContentType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("NumericScaleMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("NumericScaleMode", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisLabelPanelBaseView", "Object", {_g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, init: function (b) {
    this.b = $.ig.Rect.prototype.empty();
    this.d = 0;
    $.ig.Object.prototype.init.call(this);
    this.g(b)
}, k: function (e, f) {
    var g = $.ig.util.cast($.ig.TextBlock.prototype.$type, e);
    if (g != null) {
        g.__visibility = $.ig.Visibility.prototype.visible;
        if (f.width() == 0 && f.height() == 0) {
            g.__visibility = $.ig.Visibility.prototype.collapsed
        }
        g.y(f.left() + this.l());
        g.x(f.top() + this.m());
        g.v(f.width());
        g.w(f.height())
    }
    if (g.f() != null) {
        var h = g.f();
        h.i(h.i() + g.y());
        h.j(h.j() + g.x())
    }
}, l: function () {
    return this.g().bv().left()
}, m: function () {
    return 0
}, n: function (c) {
    var d = c;
    d.f(null)
}, o: function (b) {
}, p: function (h, i) {
    var g = this;
    var j = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, h);
    var k = 0, l = 0;
    var m = (function () {
        var a = new $.ig.RotateTransform();
        a.h(i);
        a.i(k);
        a.j(l);
        return a
    }());
    j.f(m)
}, q: function (e, f) {
    var g = e.a5().length;
    var h = e.a5();
    while (this.h().y(h) + $.ig.AxisLabelPanelBaseView.prototype.a > f && g > 0) {
        g--;
        h = h.substr(0, g) + "\u2026"
    }
    return h
}, r: function () {
    var e = this.s();
    var g = e.getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        var h = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, f);
        if (h != null) {
            this.g().dp(h)
        }
        this.g().dn(f)
    }
}, s: function () {
    var c = this.g().dq();
    var d = this.g().dl();
    if (!this.g().br().da()) {
        return c
    } else {
        return d
    }
}, t: function (b) {
    return this.d + $.ig.AxisLabelPanelBaseView.prototype.a
}, u: function () {
}, v: function (c) {
    var d = $.ig.util.cast($.ig.TextBlock.prototype.$type, c);
    if (d != null && d.a5() != null) {
        return this.h().y(d.a5()) + $.ig.AxisLabelPanelBaseView.prototype.a
    }
    return 0
}, w: function () {
    this.g().b5(this.g().br().labelSettings().extent())
}, x: function () {
    this.ae();
    this.g().dg(new $.ig.Size(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY))
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, aa: function (b) {
    this.h(b)
}, ab: function () {
    if (this.g().bv().isEmpty()) {
        return
    }
    var b = this.g().b5();
    this.g().de(new $.ig.Size(this.g().bv().width(), this.g().bv().height()));
    if (this.g().b5() != b) {
        this.g().br().chart().ic();
        this.ac()
    }
}, ac: function () {
}, b: null, ad: function () {
    if (this.h() == null) {
        return
    }
    if (this.h().b()) {
        this.ae();
        this.b = this.g().bv();
        var e = this.g().br().chart().iq();
        if (this.g().br().labelSettings() != null && this.g().br().labelSettings().textColor() != null) {
            e = this.g().br().labelSettings().textColor()
        }
        var g = this.s().getEnumerator();
        while (g.moveNext()) {
            var f = g.current();
            var h = $.ig.util.cast($.ig.TextBlock.prototype.$type, f);
            if (h != null) {
                h.a6(e);
                if (h.f() != null) {
                    this.h().o();
                    this.h().m(h.f())
                }
                this.h().i(h);
                if (h.f() != null) {
                    this.h().p()
                }
            }
        }
    }
}, c: null, ae: function () {
    if (this.h() == null) {
        return
    }
    var b = this.g().br().seriesViewer().ir();
    if (this.g().br().labelSettings() != null && this.g().br().labelSettings().textStyle() != null) {
        b = this.g().br().labelSettings().textStyle()
    }
    if (this.c != b) {
        this.af()
    }
    this.h().x(b)
}, d: null, af: function () {
    if (this.g().br() != null && this.g().br().seriesViewer() != null) {
        if (this.g().br().labelSettings() == null || this.g().br().labelSettings().textStyle() == null) {
            this.d = this.g().br().seriesViewer().fb().ax();
            return
        }
        if (this.d == 0) {
            this.d = this.g().br().seriesViewer().fb().ax()
        }
        var c = this.d;
        var d = this.g().br().seriesViewer().fb().aq().ax(this.g().br().labelSettings().textStyle());
        this.d = d;
        if (c != this.d) {
            this.g().br().seriesViewer().ic()
        }
    }
}, $type: new $.ig.Type("AxisLabelPanelBaseView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisLabelPanelBase", "Panel", {b6: function () {
    return new $.ig.AxisLabelPanelBaseView(this)
}, b7: function (b) {
}, _bp: null, bp: function (b) {
    if (arguments.length === 1) {
        this._bp = b;
        return b
    } else {
        return this._bp
    }
}, init: function () {
    $.ig.Panel.prototype.init.call(this);
    this.bu($.ig.Rect.prototype.empty());
    this.bv($.ig.Rect.prototype.empty());
    this.bp(this.b6());
    this.b7(this.bp());
    this.bp().u();
    this.by(new $.ig.List$1($.ig.FrameworkElement.prototype.$type, 0));
    this.bt(new $.ig.List$1($.ig.LabelPosition.prototype.$type, 0));
    this.bz(new $.ig.List$1($.ig.Rect.prototype.$type, 0));
    this.b2(false);
    this.b1(false);
    this.b3(false);
    this.b0(false)
}, _bq: null, bq: function (b) {
    if (arguments.length === 1) {
        this._bq = b;
        return b
    } else {
        return this._bq
    }
}, _br: null, br: function (b) {
    if (arguments.length === 1) {
        this._br = b;
        return b
    } else {
        return this._br
    }
}, _bs: null, bs: function (b) {
    if (arguments.length === 1) {
        this._bs = b;
        return b
    } else {
        return this._bs
    }
}, _bt: null, bt: function (b) {
    if (arguments.length === 1) {
        this._bt = b;
        return b
    } else {
        return this._bt
    }
}, _bu: null, bu: function (b) {
    if (arguments.length === 1) {
        this._bu = b;
        return b
    } else {
        return this._bu
    }
}, _bv: null, bv: function (b) {
    if (arguments.length === 1) {
        this._bv = b;
        return b
    } else {
        return this._bv
    }
}, _bw: null, bw: function (b) {
    if (arguments.length === 1) {
        this._bw = b;
        return b
    } else {
        return this._bw
    }
}, a7: null, bx: function (b) {
    if (arguments.length === 1) {
        this.a7 = b;
        return b
    } else {
        return this.a7
    }
}, _by: null, by: function (b) {
    if (arguments.length === 1) {
        this._by = b;
        return b
    } else {
        return this._by
    }
}, _bz: null, bz: function (b) {
    if (arguments.length === 1) {
        this._bz = b;
        return b
    } else {
        return this._bz
    }
}, _b0: null, b0: function (b) {
    if (arguments.length === 1) {
        this._b0 = b;
        return b
    } else {
        return this._b0
    }
}, _b1: null, b1: function (b) {
    if (arguments.length === 1) {
        this._b1 = b;
        return b
    } else {
        return this._b1
    }
}, _b2: null, b2: function (b) {
    if (arguments.length === 1) {
        this._b2 = b;
        return b
    } else {
        return this._b2
    }
}, _b3: null, b3: function (b) {
    if (arguments.length === 1) {
        this._b3 = b;
        return b
    } else {
        return this._b3
    }
}, _b4: null, b4: function (b) {
    if (arguments.length === 1) {
        this._b4 = b;
        return b
    } else {
        return this._b4
    }
}, c4: function (d) {
    for (var e = 0; e < d.count() - 1; e++) {
        for (var f = e; f < d.count() - 1; f++) {
            if (d.__inner[e].intersectsWith(d.__inner[f + 1])) {
                return true
            }
        }
    }
    return false
}, c5: function (c, d) {
    return{ret: 0, rectangles: d};
    return{rectangles: d}
}, c6: function () {
    return null
}, c7: function () {
}, c8: function (b) {
}, c9: function () {
    return this.br().labelSettings() != null ? this.br().labelSettings().angle() : 0
}, da: function (c, d) {
    return true
}, db: function (b) {
    return this.bp().v(b)
}, dc: function (b) {
    return this.bp().t(b)
}, dd: function () {
    if (this.a3().count() < 1 || this.bt().count() == 0) {
        return new $.ig.List$1($.ig.Rect.prototype.$type, 0)
    }
    this.by(new $.ig.List$1($.ig.FrameworkElement.prototype.$type, 0));
    this.bz(new $.ig.List$1($.ig.Rect.prototype.$type, 0));
    this.c7();
    this.bp().r();
    var b = this.c9();
    if (b % 360 == 0) {
        this.b1(false)
    }
    if (this.by().count() == 0) {
        return new $.ig.List$1($.ig.Rect.prototype.$type, 0)
    }
    this.bz(this.c6());
    return this.bz()
}, de: function (d) {
    if (this.br() == null || this.a3().count() == 0) {
        return d
    }
    this.bz(this.dd());
    if (this.by().count() != this.bz().count()) {
        return d
    }
    if (this.b1()) {
        for (var e = 0; e < this.by().count(); e++) {
            if (this.da(e, this.bz().__inner[e])) {
                this.bp().k(this.by().__inner[e], this.bz().__inner[e])
            }
            this.df(this.by().__inner[e], this.c9())
        }
    }
    for (var f = 0; f < this.by().count(); f++) {
        if (!this.b1()) {
            this.bp().n(this.by().__inner[f])
        }
        if (this.da(f, this.bz().__inner[f])) {
            this.bp().k(this.by().__inner[f], this.bz().__inner[f])
        } else {
            this.bp().k(this.by().__inner[f], new $.ig.Rect(0, 0, 0, 0, 0))
        }
    }
    this.c8(d);
    return d
}, df: function (d, e) {
    var f = this.c9();
    this.bp().p(d, f)
}, dg: function (f) {
    var h = this.a3().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        this.bp().o(g)
    }
    var i = (this.br() == null || this.b5() <= 0) ? 50 : this.b5();
    var j = new $.ig.Size(i, i);
    if (Number.isInfinity(j.c())) {
        j.c(50)
    }
    if (Number.isInfinity(j.d())) {
        j.d(50)
    }
    return j
}, b5: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AxisLabelPanelBase.prototype.a8, b);
        return b
    } else {
        return this.b($.ig.AxisLabelPanelBase.prototype.a8)
    }
}, dj: function () {
    return $.ig.AxisLabelsLocation.prototype.outsideBottom
}, dk: function (b) {
    return true
}, dl: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$b = this.$this.a3().getEnumerator();
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.Object.prototype.$type, a)
}, dm: function (e, f, g) {
    var h = this.bp().q(f, g);
    return h
}, dn: function (b) {
    if (this.b4() == null || this.db(this.b4()) < this.db(b)) {
        this.b4(b)
    }
}, dp: function (b) {
    this.by().add(b)
}, dq: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$a = 0;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$current = this.$this.br().df().item(this.$a);
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$a++;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$a < this.$this.br().df().g()) {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.Object.prototype.$type, a)
}, dr: function () {
    this.ds()
}, ds: function () {
    this.bz(this.dd())
}, dt: function () {
    this.bp().x()
}, du: function (b) {
    this.bp().aa(b)
}, dv: function () {
    this.bp().ab()
}, dw: function () {
    this.bp().ad()
}, $type: new $.ig.Type("AxisLabelPanelBase", $.ig.Panel.prototype.$type)}, true);
$.ig.util.defType("AutoRangeCalculator", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (b) {
    return b.c2().width()
}, b: function (b) {
    return b.c2().height()
}, c: function (r, s, t, u, v, w, x) {
    w = !isNaN(s) && !Number.isInfinity(s) ? s : Number.POSITIVE_INFINITY;
    x = !isNaN(t) && !Number.isInfinity(t) ? t : Number.NEGATIVE_INFINITY;
    if (Number.isInfinity(w) || Number.isInfinity(x)) {
        if (r != null) {
            var y = r.hj();
            if (y != null) {
                w = Math.min(w, y.c());
                x = Math.max(x, y.d())
            }
        }
    }
    if (!Number.isInfinity(w) && !Number.isInfinity(x)) {
        if (w == x && w != 0) {
            w *= w > 0 ? 0.9 : 1.1;
            x *= x > 0 ? 1.1 : 0.9
        }
        if (w == x && w == 0) {
            x = 1
        }
        if (s > t) {
            var z = t;
            t = s;
            s = z
        }
        var A = isNaN(s) || Number.isInfinity(s) ? w : s;
        var B = isNaN(t) || Number.isInfinity(t) ? x : t;
        if (u) {
            if (A <= 0) {
                if (B > 1) {
                    A = 1
                } else {
                    A = Math.pow(v, Math.floor(Math.logBase(B, v)))
                }
            }
            if (isNaN(s) || Number.isInfinity(s)) {
                w = Math.pow(v, Math.floor(Math.logBase(A, v)))
            } else {
                w = A
            }
            if (isNaN(t) || Number.isInfinity(t)) {
                x = Math.pow(v, Math.ceil(Math.logBase(B, v)))
            } else {
                x = B
            }
        } else {
            var C = Math.pow(10, Math.floor(Math.log10(B - A)) - 1);
            var D = $.ig.AutoRangeCalculator.prototype.a(r);
            if ($.ig.util.cast($.ig.NumericYAxis.prototype.$type, r) !== null) {
                D = $.ig.AutoRangeCalculator.prototype.b(r)
            }
            if ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, r) !== null && D > 0) {
                var E = (r).im();
                var F = (r).io();
                D = Math.min($.ig.AutoRangeCalculator.prototype.a(r), $.ig.AutoRangeCalculator.prototype.b(r)) * (E - F) / 2;
                D = Math.max(D, 14)
            }
            if (r != null && D > 0 && (!r.hasUserMinimum() && !r.hasUserMaximum())) {
                var G = new $.ig.LinearNumericSnapper(0, w, x, D);
                C = G.h()
            }
            if ((isNaN(s) || Number.isInfinity(s)) && !isNaN(w) && !isNaN(C) && C != 0) {
                w = C * Math.floor(w / C)
            } else {
                w = A
            }
            if ((isNaN(t) || Number.isInfinity(t)) && !isNaN(x) && !isNaN(C) && C != 0) {
                var H = Math.ceil(x / C);
                x = C * H
            } else {
                x = B
            }
        }
    }
    return{minimumValue: w, maximumValue: x}
}, $type: new $.ig.Type("AutoRangeCalculator", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Axis", "Control", {dl: function () {
    return new $.ig.AxisView(this)
}, _cz: null, cz: function (b) {
    if (arguments.length === 1) {
        this._cz = b;
        return b
    } else {
        return this._cz
    }
}, dp: function (b) {
}, init: function () {
    var a = this;
    this.bw = $.ig.Rect.prototype.empty();
    this.bx = false;
    this.b0 = new $.ig.AxisComponentsForView();
    this.b1 = new $.ig.AxisLabelSettings();
    $.ig.Control.prototype.init.call(this);
    this.cz(this.dl());
    this.dp(this.cz());
    this.cz().w();
    this.df((function () {
        var b = new $.ig.Pool$1($.ig.TextBlock.prototype.$type);
        b.create(a.cz().ag.on(a.cz()));
        b.activate(a.cz().ah.on(a.cz()));
        b.disactivate(a.cz().ai.on(a.cz()));
        b.destroy(a.cz().aj.on(a.cz()));
        return b
    }()));
    this.c3($.ig.Rect.prototype.empty());
    this.c4(new $.ig.List$1($.ig.Object.prototype.$type, 0));
    this.c5(new $.ig.List$1($.ig.LabelPosition.prototype.$type, 0));
    this.c6(this.dr());
    this.c6().br(this);
    this.dc(new $.ig.List$1($.ig.Series.prototype.$type, 0));
    this.a3($.ig.Axis.prototype.$type);
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (c, d) {
        return a.eg(c, d.propertyName(), d.oldValue(), d.newValue())
    });
    this.bu = function (b, e) {
        return a.ec(e.oldRect(), e.newRect())
    };
    this.cz().a4()
}, formatLabel: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.formatLabelProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.formatLabelProperty)
    }
}, dq: function (c, d) {
    if (!c.equals(d)) {
        this.d9(c, d)
    }
}, dr: function () {
}, onApplyTemplate: function () {
    $.ig.Control.prototype.a6.call(this);
    this.cz().ak()
}, _rootCanvas: null, rootCanvas: function (b) {
    if (arguments.length === 1) {
        this._rootCanvas = b;
        return b
    } else {
        return this._rootCanvas
    }
}, c0: function (c) {
    if (arguments.length === 1) {
        if (this.c0() != c) {
            var d = this.c0();
            this.bs = c;
            this.ez($.ig.Axis.prototype.a9, d, this.bs)
        }
        return c
    } else {
        return this.bs
    }
}, bs: null, seriesViewer: function (c) {
    if (arguments.length === 1) {
        if (this.seriesViewer() != c) {
            var d = this.seriesViewer();
            this.bt = c;
            this.ez($.ig.Axis.prototype.ba, d, this.bt)
        }
        return c
    } else {
        return this.bt
    }
}, bt: null, chart: function (b) {
    if (arguments.length === 1) {
        this.seriesViewer(b);
        return b
    } else {
        return $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer())
    }
}, bu: null, stroke: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.strokeProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.strokeProperty)
    }
}, strokeThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.strokeThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.strokeThicknessProperty)
    }
}, strokeDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.strokeDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.strokeDashArrayProperty)
    }
}, strip: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.stripProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.stripProperty)
    }
}, majorStroke: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.majorStrokeProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.majorStrokeProperty)
    }
}, majorStrokeThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.majorStrokeThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.majorStrokeThicknessProperty)
    }
}, majorStrokeDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.majorStrokeDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.majorStrokeDashArrayProperty)
    }
}, minorStroke: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.minorStrokeProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.minorStrokeProperty)
    }
}, minorStrokeThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.minorStrokeThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.minorStrokeThicknessProperty)
    }
}, minorStrokeDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.minorStrokeDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.minorStrokeDashArrayProperty)
    }
}, isDisabled: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.isDisabledProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.isDisabledProperty)
    }
}, isInverted: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.isInvertedProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.isInvertedProperty)
    }
}, _c1: null, c1: function (b) {
    if (arguments.length === 1) {
        this._c1 = b;
        return b
    } else {
        return this._c1
    }
}, labelSettings: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.labelSettingsProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.labelSettingsProperty)
    }
}, labelPanelStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.labelPanelStyleProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.labelPanelStyleProperty)
    }
}, crossingAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.crossingAxisProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.crossingAxisProperty)
    }
}, crossingValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.crossingValueProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.crossingValueProperty)
    }
}, rangeChanged: null, dx: function (b) {
    if (this.rangeChanged != null) {
        this.rangeChanged(this, b)
    }
}, bw: null, c2: function (b) {
    if (arguments.length === 1) {
        this.bw = b;
        return b
    } else {
        if (this.c3().isEmpty()) {
            return this.bw
        }
        return this.c3()
    }
}, _c3: null, c3: function (b) {
    if (arguments.length === 1) {
        this._c3 = b;
        return b
    } else {
        return this._c3
    }
}, d2: function () {
    var c = $.ig.Visibility.prototype.visible;
    var d = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
    if (d != null && d.gridMode() == $.ig.GridMode.prototype.none) {
        c = $.ig.Visibility.prototype.collapsed
    }
    this.cz().ap(c)
}, _c4: null, c4: function (b) {
    if (arguments.length === 1) {
        this._c4 = b;
        return b
    } else {
        return this._c4
    }
}, _c5: null, c5: function (b) {
    if (arguments.length === 1) {
        this._c5 = b;
        return b
    } else {
        return this._c5
    }
}, _c6: null, c6: function (b) {
    if (arguments.length === 1) {
        this._c6 = b;
        return b
    } else {
        return this._c6
    }
}, d9: function (c, d) {
    this.c2(d);
    this.c7(true);
    this.updateRange();
    this.es(false);
    if (this.seriesViewer() != null) {
        this.seriesViewer().fc().ag($.ig.ChartContentType.prototype.axis, this, this.c8(), d)
    }
}, bx: null, c7: function (b) {
    if (arguments.length === 1) {
        this.bx = b;
        return b
    } else {
        return this.bx
    }
}, ec: function (c, d) {
    this.c7(true);
    this.es(true)
}, ed: function () {
    this.es(false)
}, _c8: null, c8: function (b) {
    if (arguments.length === 1) {
        this._c8 = b;
        return b
    } else {
        return this._c8
    }
}, eg: function (l, m, n, o) {
    var k = this;
    switch (m) {
        case $.ig.Axis.prototype.ba:
            var p = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, n);
            if (p != null) {
                p.windowRectChanged = $.ig.Delegate.prototype.combine(p.windowRectChanged, this.bu);
                p.fc().s($.ig.ChartContentType.prototype.axis, this);
                this.cz().bf(p)
            }
            var q = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, o);
            if (q != null) {
                q.windowRectChanged = $.ig.Delegate.prototype.combine(q.windowRectChanged, this.bu);
                this.c8(q.fc().r($.ig.ChartContentType.prototype.axis, this, this.et.on(this)));
                this.cz().bg(q);
                if (this.db() && !this.c8().m()) {
                    this.db(false);
                    this.updateRange()
                }
            }
            break;
        case $.ig.Axis.prototype.bl:
            this.es(false);
            break;
        case $.ig.Axis.prototype.bm:
            this.c1(this.isInverted());
            var r = new $.ig.AxisRangeChangedEventArgs(0, 0, 1, 1);
            this.e9(r);
            var t = this.dc().getEnumerator();
            while (t.moveNext()) {
                var s = t.current();
                s.fs();
                if (s.seriesViewer() != null) {
                    s.e5()
                }
            }
            break;
        case $.ig.Axis.prototype.br:
            if ($.ig.util.cast($.ig.DataTemplate.prototype.$type, o) !== null) {
                this.da(true)
            } else {
                this.da(false)
            }
            this.c7(true);
            this.ej();
            this.es(false);
            break;
        case $.ig.Axis.prototype.bg:
        case $.ig.Axis.prototype.bj:
        case $.ig.Axis.prototype.bc:
            this.es(false);
            break;
        case $.ig.Axis.prototype.bo:
            this.cz().x(o);
            this.es(false);
            break;
        case $.ig.Axis.prototype.bn:
            var u = $.ig.util.cast($.ig.AxisLabelSettings.prototype.$type, o);
            if (u != null) {
                u.r(this);
                this.b1 = u
            } else {
                this.b1 = new $.ig.AxisLabelSettings()
            }
            if (this.cz().al()) {
                this.cz().ar(this.b1)
            }
            break;
        case $.ig.Axis.prototype.bi:
            if (o != null) {
                this.c9(true);
                this.es(false)
            } else {
                this.c9(false)
            }
            break;
        case $.ig.Axis.prototype.a7:
        case $.ig.Axis.prototype.bf:
        case $.ig.Axis.prototype.bb:
        case $.ig.Axis.prototype.bd:
        case $.ig.Axis.prototype.bh:
        case $.ig.Axis.prototype.bk:
            this.es(false);
            break
    }
}, _coercionMethods: null, coercionMethods: function (b) {
    if (arguments.length === 1) {
        this._coercionMethods = b;
        return b
    } else {
        return this._coercionMethods
    }
}, _c9: null, c9: function (b) {
    if (arguments.length === 1) {
        this._c9 = b;
        return b
    } else {
        return this._c9
    }
}, ej: function () {
    this.df().g(0);
    if (this.cz().al()) {
        this.cz().aq()
    }
}, _da: null, da: function (b) {
    if (arguments.length === 1) {
        this._da = b;
        return b
    } else {
        return this._da
    }
}, em: function (h, i, j, k) {
    var l = Math.min(i, j);
    var m = Math.max(i, j);
    if (l < k.bottom() && m > k.top()) {
        var n = new $.ig.RectangleGeometry();
        n.f(new $.ig.Rect(0, k.left(), l, k.width(), m - l));
        h.add(n)
    }
}, en: function (e, f, g) {
    if (f <= g.bottom() && f >= g.top()) {
        var h = new $.ig.LineGeometry();
        h.e({__x: g.left(), __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        h.f({__x: g.right(), __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        e.add(h)
    }
}, eo: function (h, i, j, k) {
    var l = Math.min(i, j);
    var m = Math.max(i, j);
    if (m > k.left() && l < k.right()) {
        var n = new $.ig.RectangleGeometry();
        n.f(new $.ig.Rect(0, l, k.top(), m - l, k.height()));
        h.add(n)
    }
}, ep: function (e, f, g) {
    if (f >= g.left() && f <= g.right()) {
        var h = new $.ig.LineGeometry();
        h.e({__x: f, __y: g.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        h.f({__x: f, __y: g.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        e.add(h)
    }
}, eq: function (b) {
    this.cz().at(b)
}, er: function () {
    this.df().g(0);
    this.cz().ao();
    this.c4().clear();
    this.c5().clear()
}, renderAxis: function () {
    this.es(false)
}, es: function (b) {
    if (this.seriesViewer() != null) {
        this.seriesViewer().fc().u($.ig.ChartContentType.prototype.axis, this, this.c8(), b)
    }
}, et: function (d) {
    if (this.cz().bh()) {
        return
    }
    var e = 0;
    if (this.c5() != null && this.c5().count() > 0) {
        e = this.c5().last$1($.ig.LabelPosition.prototype.$type).b()
    }
    this.ey(d);
    var f = 1;
    if (this.c5() != null && this.c5().count() > 0) {
        f = this.c5().last$1($.ig.LabelPosition.prototype.$type).b()
    }
    if (f != e || this.c7()) {
        this.c7(false);
        if (this.cz().al()) {
            this.cz().am()
        }
    }
    this.cz().be();
    this.eu()
}, eu: function () {
    if (!this.cz().al()) {
        return
    }
    if (!this.e8()) {
        this.cz().an()
    }
}, _db: null, db: function (b) {
    if (arguments.length === 1) {
        this._db = b;
        return b
    } else {
        return this._db
    }
}, updateRange: function () {
    return this.updateRange1(false)
}, updateRange1: function (c) {
    if (c || this.seriesViewer() == null) {
        var d = this.ex();
        if (d) {
            this.c7(true)
        }
        this.db(false);
        return d
    }
    if (!this.db()) {
        this.db(true);
        this.seriesViewer().fc().ah(this, this.c8())
    }
    return false
}, ex: function () {
    return false
}, ey: function (b) {
}, propertyChanged: null, propertyUpdated: null, ez: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, _dc: null, dc: function (b) {
    if (arguments.length === 1) {
        this._dc = b;
        return b
    } else {
        return this._dc
    }
}, registerSeries: function (c) {
    var d = this.dc().contains(c);
    if (!d) {
        this.dc().add(c)
    }
    return !d
}, deregisterSeries: function (c) {
    var d = this.dc().contains(c);
    if (d) {
        this.dc().remove(c)
    }
    return d
}, label: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Axis.prototype.labelProperty, b);
        return b
    } else {
        return this.b($.ig.Axis.prototype.labelProperty)
    }
}, e2: function (b) {
    return this.cz().a5(b)
}, getScaledValue: function (c, d) {
    return 0
}, getScaledValue1: function (e, f, g) {
    var h = new $.ig.ScalerParams(f, g, this.isInverted());
    return this.getScaledValue(e, h)
}, getScaledValueList: function (e, f, g, h) {
}, getUnscaledValue: function (c, d) {
    return 0
}, getUnscaledValue1: function (e, f, g) {
    var h = new $.ig.ScalerParams(f, g, this.isInverted());
    return this.getUnscaledValue(e, h)
}, getUnscaledValueList: function (e, f, g, h) {
}, scaleValue: function (c) {
    var d = new $.ig.ScalerParams(this.seriesViewer().windowRect(), this.c2(), this.isInverted());
    d.c = this.seriesViewer().effectiveViewport();
    return this.getScaledValue(c, d)
}, _dd: null, dd: function () {
    return this._dd
}, _de: null, de: function (b) {
    if (arguments.length === 1) {
        this._de = b;
        return b
    } else {
        return this._de
    }
}, e6: function () {
    this.c3(new $.ig.Rect(0, 0, 0, this.de().c(), this.de().d()))
}, b0: null, e7: function () {
    this.b0.b(this.c6());
    return this.b0
}, e8: function () {
    if (this.labelSettings() == null) {
        return false
    } else {
        return this.labelSettings().z()
    }
}, e9: function (b) {
    this.dx(b)
}, _df: null, df: function (b) {
    if (arguments.length === 1) {
        this._df = b;
        return b
    } else {
        return this._df
    }
}, dg: function () {
    return this.fh().e()
}, dh: function () {
    return this.fh().f()
}, di: function () {
    return this.cz().as().g()
}, dj: function () {
    return this.fh().h()
}, fg: function () {
    return $.ig.SyncManager.prototype.e(this.bt)
}, fh: function () {
    return this.cz().as()
}, b1: null, dk: function () {
    return this.b1
}, fj: function (c, d) {
    if (this.c6() != null) {
        this.c6().du(c)
    }
    this.cz().ba(c, d)
}, fk: function () {
    return false
}, exportVisualData: function () {
    var f = this;
    var g = new $.ig.AxisVisualData();
    g.viewport(this.c2());
    g.type(this.getType().typeName());
    g.name(this.name());
    g.axisLine(new $.ig.PathVisualData(1, "axisLine", this.cz().n()));
    g.minorLines(new $.ig.PathVisualData(1, "minorLines", this.cz().q()));
    g.majorLines(new $.ig.PathVisualData(1, "majorLines", this.cz().o()));
    for (var h = 0; h < this.c6().bt().count(); h++) {
        var i = this.c6().bt().__inner[h];
        var j = this.c6().bs().__inner[h];
        var k = (function () {
            var a = new $.ig.AxisLabelVisualData();
            a.labelPosition(i.b());
            a.labelValue(j);
            return a
        }());
        k.appearance($.ig.AppearanceHelper.prototype.fromTextElement(this.c6().by().__inner[h]));
        g.labels().add(k)
    }
    return g
}, fl: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$a = 0;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$b = this.$this.dc().__inner[this.$a];
                            this.$current = this.$b;
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$a++;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$a < this.$this.dc().count()) {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.Series.prototype.$type, a)
}, $type: new $.ig.Type("Axis", $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("AxisCollection", "ObservableCollection$1", {init: function () {
    var a = this;
    $.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Axis.prototype.$type);
    this.propertyChanged = $.ig.Delegate.prototype.combine(this.propertyChanged, function (d, e) {
        if (e.propertyName() == "Name") {
            for (var f = 0; f < a.count(); ++f) {
                if (a.__inner[f].name() == e.propertyName()) {
                    a.ah(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, a.__inner[f], a.__inner[f], f))
                }
            }
        }
    })
}, collectionResetting: null, m: function () {
    if (this.collectionResetting != null) {
        this.collectionResetting(this, null)
    }
    $.ig.ObservableCollection$1.prototype.m.call(this)
}, $type: new $.ig.Type("AxisCollection", $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Axis.prototype.$type))}, true);
$.ig.util.defType("AxisComponentsForView", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _b: null, b: function (b) {
    if (arguments.length === 1) {
        this._b = b;
        return b
    } else {
        return this._b
    }
}, $type: new $.ig.Type("AxisComponentsForView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisComponentsFromView", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, $type: new $.ig.Type("AxisComponentsFromView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisLabelManager", "Object", {_g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, init: function () {
    var a = this;
    $.ig.Object.prototype.init.call(this);
    this.k(function (b) {
    })
}, w: function (c, d) {
    this.g().clear();
    this.h().clear();
    this.i().br(this.j());
    this.i().bw(c);
    this.i().bu(d);
    if (d.isEmpty() || c.isEmpty()) {
        this.ae(0)
    }
    if (this.j().df().g() == 0) {
        this.i().a3().clear()
    }
}, x: function (c, d) {
    this.g().add1(c);
    this.h().add(d)
}, y: function () {
    this.i().bs(this.g());
    this.i().bt(this.h())
}, z: function (b) {
}, aa: function (b) {
    this.i().a3().add(b)
}, ab: function (b) {
    this.i().bq(b)
}, ac: function (b) {
    this.k()(b)
}, ad: function (c) {
    var d = this.j().df().item(c);
    return d
}, ae: function (b) {
    this.j().df().g(b)
}, l: function () {
    if (this.j().labelSettings() == null) {
        return false
    }
    return this.j().labelSettings().visibility() != $.ig.Visibility.prototype.visible
}, ag: function () {
    this.j().df().g(0);
    this.j().c6().by().clear()
}, $type: new $.ig.Type("AxisLabelManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LabelPosition", "Object", {_b: null, b: function (b) {
    if (arguments.length === 1) {
        this._b = b;
        return b
    } else {
        return this._b
    }
}, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.b(b)
}, $type: new $.ig.Type("LabelPosition", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisLabelSettings", "Object", {init: function () {
    var a = this;
    this.h = null;
    this.i = $.ig.AxisLabelsLocation.prototype.outsideBottom;
    this.j = $.ig.Visibility.prototype.visible;
    this.k = 0;
    this.l = NaN;
    $.ig.Object.prototype.init.call(this);
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (c, d) {
        return a.x(c, d.propertyName(), d.oldValue(), d.newValue())
    })
}, g: null, textStyle: function (c) {
    if (arguments.length === 1) {
        var d = this.g;
        this.g = c;
        this.w($.ig.AxisLabelSettings.prototype.a, d, c);
        return c
    } else {
        return this.g
    }
}, h: null, textColor: function (c) {
    if (arguments.length === 1) {
        var d = this.h;
        this.h = c;
        this.w($.ig.AxisLabelSettings.prototype.b, d, c);
        return c
    } else {
        return this.h
    }
}, location: function (c) {
    if (arguments.length === 1) {
        var d = this.i;
        this.i = c;
        this.w($.ig.AxisLabelSettings.prototype.c, d, c);
        return c
    } else {
        return this.i
    }
}, i: null, visibility: function (c) {
    if (arguments.length === 1) {
        var d = this.j;
        this.j = c;
        this.w($.ig.AxisLabelSettings.prototype.d, d, c);
        return c
    } else {
        return this.j
    }
}, j: null, _q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, angle: function (c) {
    if (arguments.length === 1) {
        var d = this.k;
        this.k = c;
        this.w($.ig.AxisLabelSettings.prototype.e, d, c);
        return c
    } else {
        return this.k
    }
}, k: null, extent: function (c) {
    if (arguments.length === 1) {
        var d = this.l;
        this.l = c;
        this.w($.ig.AxisLabelSettings.prototype.f, d, c);
        return c
    } else {
        return this.l
    }
}, l: null, propertyChanged: null, propertyUpdated: null, w: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, x: function (e, f, g, h) {
    switch (f) {
        case $.ig.AxisLabelSettings.prototype.c:
            this.q(this.location());
            break
    }
    if (this.r() == null || this.r().chart() == null) {
        return
    }
    switch (f) {
        case $.ig.AxisLabelSettings.prototype.e:
            this.r().c7(true);
            this.r().renderAxis();
            break;
        case $.ig.AxisLabelSettings.prototype.c:
            this.r().c7(true);
            if (this.r().seriesViewer() != null) {
                this.r().seriesViewer().ic()
            }
            this.r().renderAxis();
            break;
        case $.ig.AxisLabelSettings.prototype.f:
            this.r().c7(true);
            if (this.r().seriesViewer() != null) {
                this.r().seriesViewer().ic()
            }
            this.r().renderAxis();
            break;
        case $.ig.AxisLabelSettings.prototype.d:
            this.r().c7(true);
            if (this.r().seriesViewer() != null) {
                this.r().seriesViewer().ic()
            }
            this.r().renderAxis();
            break;
        case $.ig.AxisLabelSettings.prototype.a:
            this.r().c7(true);
            if (this.r().seriesViewer() != null) {
                this.r().seriesViewer().ic()
            }
            this.r().renderAxis();
            break;
        case $.ig.AxisLabelSettings.prototype.b:
            this.r().renderAxis();
            break
    }
}, y: function () {
    return this.k != 0
}, z: function () {
    return !isNaN(this.l)
}, $type: new $.ig.Type("AxisLabelSettings", $.ig.Object.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("AxisRange", "Object", {init: function (c, d) {
    $.ig.Object.prototype.init.call(this);
    this.c(c);
    this.d(d)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, equals: function (b) {
    return b != null && this.c() == b.c() && this.d() == b.d()
}, equals1: function (b) {
    return this.equals($.ig.util.cast($.ig.AxisRange.prototype.$type, b))
}, getHashCode: function () {
    return $.ig.Object.prototype.getHashCode.call(this)
}, $type: new $.ig.Type("AxisRange", $.ig.Object.prototype.$type, [$.ig.IEquatable$1.prototype.$type.specialize($.ig.AxisRange.prototype.$type)])}, true);
$.ig.util.defType("Snapper", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, b: function (d, e) {
    var f = 1;
    if (e > 0) {
        for (; e > 0; --e) {
            f *= d
        }
    } else {
        for (; e < 0; ++e) {
            f /= d
        }
    }
    return f
}, c: function (g, h) {
    var i = Math.floor(Math.log10(g));
    var j = g / Math.pow(10, i);
    if (h) {
        var k = j < 1.5 ? 1 : j < 3 ? 2 : j < 7 ? 5 : 10;
        return k * Math.pow(10, i)
    } else {
        var l = j <= 1 ? 1 : j <= 2 ? 2 : j <= 5 ? 5 : 10;
        return l * Math.pow(10, i)
    }
}, d: function (d, e) {
    var f = $.ig.Date.prototype.zero;
    if (d.totalDays() > 1) {
        f = $.ig.Date.prototype.fromDays(Math.ceil(d.totalDays()))
    } else {
        if (d.totalHours() > 1) {
            f = $.ig.Date.prototype.fromHours(Math.ceil(d.totalHours()))
        } else {
            if (d.totalMinutes() > 1) {
                f = $.ig.Date.prototype.fromMinutes(Math.ceil(d.totalMinutes()))
            } else {
                if (d.totalSeconds() > 1) {
                    f = $.ig.Date.prototype.fromSeconds(Math.ceil(d.totalSeconds()))
                } else {
                    if (d.totalMilliseconds() > 1) {
                        f = $.ig.Date.prototype.fromMilliseconds(Math.ceil(d.totalMilliseconds()))
                    }
                }
            }
        }
    }
    return f
}, $type: new $.ig.Type("Snapper", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LinearNumericSnapper", "Snapper", {init: function (g, d, e, f) {
    if (g > 0) {
        switch (g) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.Snapper.prototype.init.call(this);
    this.k(d, e, f, 10)
}, init1: function (i, e, f, g, h) {
    $.ig.Snapper.prototype.init.call(this);
    this.k(e, f, g, h)
}, k: function (i, j, k, l) {
    this.h(NaN);
    this.i(0);
    this.j(0);
    var m = Math.min(l, (k / $.ig.LinearNumericSnapper.prototype.a));
    if (m > 0) {
        var n = $.ig.LinearNumericSnapper.prototype.c(j - i, false);
        this.h($.ig.LinearNumericSnapper.prototype.c(n / (m - 1), true));
        var o = Math.floor(i / this.h()) * this.h();
        var p = Math.ceil(j / this.h()) * this.h();
        m = Math.round((p - o) / this.h());
        if (k / m > $.ig.LinearNumericSnapper.prototype.a * 10) {
            this.j(10)
        } else {
            if (k / m > $.ig.LinearNumericSnapper.prototype.a * 5) {
                this.j(5)
            } else {
                if (k / m > $.ig.LinearNumericSnapper.prototype.a * 2) {
                    this.j(2)
                }
            }
        }
        this.i(Math.max(-Math.floor(Math.log10(this.h())), 0))
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, $type: new $.ig.Type("LinearNumericSnapper", $.ig.Snapper.prototype.$type)}, true);
$.ig.util.defType("LogarithmicNumericSnapper", "Snapper", {init: function (e, f, g, h) {
    $.ig.Snapper.prototype.init.call(this);
    this.g(1);
    this.h(g)
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, $type: new $.ig.Type("LogarithmicNumericSnapper", $.ig.Snapper.prototype.$type)}, true);
$.ig.util.defType("LinearCategorySnapper", "Snapper", {init: function (g, d, e, f) {
    if (g > 0) {
        switch (g) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.LinearCategorySnapper.prototype.init1.call(this, 1, d, e, f, NaN, $.ig.CategoryMode.prototype.mode0)
}, init1: function (s, j, k, l, m, n) {
    $.ig.Snapper.prototype.init.call(this);
    this.g(m);
    this.h(0);
    var o = Math.min(10, (l / $.ig.LinearCategorySnapper.prototype.a));
    if (o > 0) {
        var p = $.ig.LinearCategorySnapper.prototype.c(k - j, false);
        if (isNaN(this.g())) {
            this.g($.ig.LinearCategorySnapper.prototype.c(p / (o - 1), true))
        }
        if (this.g() < 1) {
            this.g(1)
        }
        var q = Math.floor(j / this.g()) * this.g();
        var r = Math.ceil(k / this.g()) * this.g();
        o = Math.round((r - q) / this.g());
        if (l / o > $.ig.LinearCategorySnapper.prototype.a * 10) {
            this.h(10)
        } else {
            if (l / o > $.ig.LinearCategorySnapper.prototype.a * 5) {
                this.h(5)
            } else {
                if (l / o > $.ig.LinearCategorySnapper.prototype.a * 2) {
                    this.h(2)
                }
            }
        }
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, $type: new $.ig.Type("LinearCategorySnapper", $.ig.Snapper.prototype.$type)}, true);
$.ig.util.defType("AxisView", "Object", {_m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, init: function (b) {
    this.a = new $.ig.AxisComponentsFromView();
    this.c = false;
    this.d = $.ig.Rect.prototype.empty();
    $.ig.Object.prototype.init.call(this);
    this.m(b);
    this.b = new $.ig.Rectangle()
}, w: function () {
    var a = this;
    this.n((function () {
        var b = new $.ig.Path();
        b.bp(new $.ig.GeometryGroup());
        return b
    }()));
    this.p((function () {
        var b = new $.ig.Path();
        b.bp(new $.ig.GeometryGroup());
        b.a6(false);
        b.__stroke = null;
        return b
    }()));
    this.o((function () {
        var b = new $.ig.Path();
        b.bp(new $.ig.GeometryGroup());
        b.a6(false);
        return b
    }()));
    this.q((function () {
        var b = new $.ig.Path();
        b.bp(new $.ig.GeometryGroup());
        b.a6(false);
        return b
    }()));
    this.m().majorStrokeThickness(1);
    this.m().strokeThickness(1)
}, x: function (b) {
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, _q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, ag: function () {
    var b = new $.ig.TextBlock();
    return b
}, ah: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible;
    if (b.aa() == null) {
        this.m().c6().a3().add(b)
    }
}, ai: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, aj: function (b) {
    if (this.m().c6().a3().contains(b)) {
        this.m().c6().a3().remove(b)
    }
}, ak: function () {
}, al: function () {
    return true
}, index: function () {
    var a = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.m().chart());
    var d = 0;
    if (a == null) {
        return 0
    }
    if (a != null && a.gridMode() == $.ig.GridMode.prototype.beforeSeries) {
        d = a.series().count()
    }
    return d + a.axes().indexOf(this.m())
}, am: function () {
    this.r().dt();
    this.r().dv()
}, an: function () {
    this.r().dr()
}, ao: function () {
    if (this.r() != null) {
        this.r().a3().clear()
    }
    this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.n().bp())).d());
    this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.p().bp())).d());
    this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.o().bp())).d());
    this.at(($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.q().bp())).d());
    this.bb()
}, ap: function (b) {
    this.n().__visibility = b;
    this.o().__visibility = b;
    this.p().__visibility = b;
    this.q().__visibility = b
}, aq: function () {
}, ar: function (b) {
    this.m().c7(true);
    if (this.m().seriesViewer() != null) {
        this.m().seriesViewer().ic()
    }
    this.m().renderAxis()
}, a: null, as: function () {
    this.a.e(this.n());
    this.a.f(this.o());
    this.a.h(this.q());
    this.a.g(this.p());
    return this.a
}, at: function (b) {
    if (b != null) {
        b.clear()
    }
}, au: function () {
    return($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.n().bp())).d()
}, av: function () {
    return($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.p().bp())).d()
}, aw: function () {
    return($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.o().bp())).d()
}, ax: function () {
    return($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.q().bp())).d()
}, r: function () {
    return this.m().e7().b()
}, az: function (d, e, f) {
    this.r().br(d);
    this.r().bw(e);
    this.r().bu(f);
    this.bb()
}, a0: function () {
    this.r().a3().clear();
    this.bb()
}, a1: function (b) {
    this.r().bq(b);
    this.bb()
}, a2: function (c, d) {
    this.r().bs(c);
    this.r().bt(d)
}, a3: function (b) {
    this.r().bx(b)
}, a4: function () {
}, a5: function (a) {
    if (this.m().formatLabel() != null) {
        return this.m().formatLabel()(a)
    }
    var b = this.m().label();
    return(typeof a[b] != "undefined") ? a[b] : b
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, ba: function (c, d) {
    this.t(c);
    this.s(d)
}, _isDirty: null, isDirty: function (b) {
    if (arguments.length === 1) {
        this._isDirty = b;
        return b
    } else {
        return this._isDirty
    }
}, bb: function () {
    if (this.m().chart() == null) {
        return
    }
    if (!this.isDirty()) {
        this.isDirty(true);
        this.m().chart().canvasRenderScheduler().o()
    }
}, undirty: function (b) {
    this.isDirty(false);
    this.bc(b)
}, b: null, c: null, bc: function (f) {
    if (this.t() == null) {
        return
    }
    if (this.t().b()) {
        var g = this.d;
        var h = this.m().chart().getContainerRect();
        if (!g.isEmpty() && f) {
            this.t().t(h.left(), h.top(), h.width(), h.height())
        }
        if (f) {
            if (this.m().seriesViewer().plotAreaBackground() != null) {
                this.b.x(this.m().c2().top());
                this.b.y(this.m().c2().left());
                this.b.v(this.m().c2().width());
                this.b.w(this.m().c2().height());
                this.b.__fill = this.m().seriesViewer().plotAreaBackground();
                if (this.c) {
                    this.t().e($.ig.GradientDirection.prototype.bottomTop, this.m().c2())
                }
                this.t().f(this.b)
            }
        }
        this.t().o();
        this.t().q(this.m().c2());
        this.bd();
        this.t().p()
    }
    if (this.s().b()) {
        var i = this.d;
        var j = this.m().chart().getContainerRect();
        if (!i.isEmpty() && f) {
            this.s().t(j.left(), j.top(), j.width(), j.height())
        }
    }
}, postRender: function () {
    this.r().dw()
}, d: null, bd: function () {
    if (this.t().b()) {
        if (this.m().stroke() == null) {
            this.n().__stroke = this.m().chart().is()
        } else {
            this.n().__stroke = this.m().stroke()
        }
        this.p().__fill = this.m().strip();
        this.q().__stroke = this.m().minorStroke();
        if (this.m().majorStroke() == null) {
            this.o().__stroke = this.m().chart().is()
        } else {
            this.o().__stroke = this.m().majorStroke()
        }
        this.q().a7(this.m().minorStrokeThickness());
        this.o().a7(this.m().majorStrokeThickness());
        this.n().a7(this.m().strokeThickness());
        this.q().a8(this.m().minorStrokeDashArray());
        this.o().a8(this.m().majorStrokeDashArray());
        this.n().a8(this.m().strokeDashArray());
        this.d = this.m().c2();
        if (this.c) {
            this.t().e($.ig.GradientDirection.prototype.bottomTop, null)
        }
        this.t().g(this.n());
        this.t().g(this.p());
        this.t().g(this.o());
        this.t().g(this.q())
    }
}, be: function () {
    this.bb()
}, bf: function (b) {
    if (b != null) {
        b.canvasRenderScheduler().n(this)
    }
}, bg: function (b) {
    if (b != null) {
        b.canvasRenderScheduler().m(this);
        this.bb()
    }
}, bh: function () {
    return this.t() == null
}, $type: new $.ig.Type("AxisView", $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])}, true);
$.ig.util.defType("IScaler", "Object", {$type: new $.ig.Type("IScaler", null)}, true);
$.ig.util.defType("ICategoryScaler", "Object", {$type: new $.ig.Type("ICategoryScaler", null, [$.ig.IScaler.prototype.$type])}, true);
$.ig.util.defType("CategoryAxisBase", "Axis", {dl: function () {
    return new $.ig.CategoryAxisBaseView(this)
}, dp: function (b) {
    $.ig.Axis.prototype.dp.call(this, b);
    this.gm(b)
}, _gm: null, gm: function (b) {
    if (arguments.length === 1) {
        this._gm = b;
        return b
    } else {
        return this._gm
    }
}, init: function () {
    this.gf = 0;
    this.gg = false;
    $.ig.Axis.prototype.init.call(this)
}, gr: function () {
    if (this.gn() != null && this.c0() != null && this.itemsSource() != null) {
        this.gn(this.c0().releaseFastItemsSource(this.itemsSource()))
    }
}, gs: function () {
    if (this.gn() == null && this.c0() != null && this.itemsSource() != null) {
        this.gn(this.c0().getFastItemsSource(this.itemsSource()))
    }
}, gn: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryAxisBase.prototype.fastItemsSourceProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryAxisBase.prototype.fastItemsSourceProperty)
    }
}, gd: null, itemsSource: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryAxisBase.prototype.itemsSourceProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryAxisBase.prototype.itemsSourceProperty)
    }
}, itemsCount: function () {
    return this.gd == null ? 0 : this.gd.g()
}, categoryMode: function (c) {
    if (arguments.length === 1) {
        if (this.ge != c) {
            var d = this.ge;
            this.ge = c;
            this.ez($.ig.CategoryAxisBase.prototype.f9, d, c)
        }
        return c
    } else {
        return this.ge
    }
}, ge: null, gap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryAxisBase.prototype.gapProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryAxisBase.prototype.gapProperty)
    }
}, overlap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryAxisBase.prototype.overlapProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryAxisBase.prototype.overlapProperty)
    }
}, go: function (c) {
    if (arguments.length === 1) {
        if (c != this.gf) {
            var d = this.gf;
            this.gf = c;
            this.ez($.ig.CategoryAxisBase.prototype.gc, d, this.gf)
        }
        return c
    } else {
        return this.gf
    }
}, gf: null, getUnscaledValue: function (c, d) {
    return NaN
}, gy: function (e, f, g, h) {
    return NaN
}, getCategorySize: function (c, d) {
    return NaN
}, gz: function (c, d) {
    return NaN
}, getGroupCenter: function (d, e, f) {
    return NaN
}, unscaleValue: function (e) {
    var f = this.seriesViewer().windowRect();
    var g = this.c2();
    var h = new $.ig.ScalerParams(f, g, this.isInverted());
    return this.getUnscaledValue(e, h)
}, g0: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$b = this.$this.dc().getEnumerator();
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
                            this.$state = 6;
                            break;
                        case 6:
                            if (this.$this.seriesViewer() != null && this.$this.seriesViewer().fl() && this.$this.g2(this.$this.seriesViewer())) {
                                this.$state = 7
                            } else {
                                this.$state = 20
                            }
                            break;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            this.$d = this.$this.seriesViewer().h1().getEnumerator();
                            this.$state = 18;
                            break;
                        case 9:
                            this.$c = this.$d.current();
                            this.$state = 10;
                            break;
                        case 10:
                            if (this.$c != this.$this.seriesViewer()) {
                                this.$state = 11
                            } else {
                                this.$state = 17
                            }
                            break;
                        case 11:
                            this.$state = 12;
                            break;
                        case 12:
                            this.$f = this.$c.series().getEnumerator();
                            this.$state = 15;
                            break;
                        case 13:
                            this.$e = this.$f.current();
                            this.$current = this.$e;
                            this.$state = 14;
                            return true;
                        case 14:
                            this.$state = 15;
                            break;
                        case 15:
                            if (this.$f.moveNext()) {
                                this.$state = 13
                            } else {
                                this.$state = 16
                            }
                            break;
                        case 16:
                            this.$state = 17;
                            break;
                        case 17:
                            this.$state = 18;
                            break;
                        case 18:
                            if (this.$d.moveNext()) {
                                this.$state = 9
                            } else {
                                this.$state = 19
                            }
                            break;
                        case 19:
                            this.$state = 20;
                            break;
                        case 20:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.Series.prototype.$type, a)
}, g1: function (b) {
    return this.dc().contains(b)
}, g2: function (b) {
    return false
}, g3: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, $a: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$a = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.$this.seriesViewer());
                            this.$state = 1;
                            break;
                        case 1:
                            if (this.$a != null && this.$a.fl() && this.$this.g2(this.$a)) {
                                this.$state = 2
                            } else {
                                this.$state = 18
                            }
                            break;
                        case 2:
                            this.$state = 3;
                            break;
                        case 3:
                            this.$c = this.$a.h1().getEnumerator();
                            this.$state = 16;
                            break;
                        case 4:
                            this.$b = this.$c.current();
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$b != this.$this.seriesViewer()) {
                                this.$state = 6
                            } else {
                                this.$state = 15
                            }
                            break;
                        case 6:
                            this.$state = 7;
                            break;
                        case 7:
                            this.$e = this.$a.axes().getEnumerator();
                            this.$state = 13;
                            break;
                        case 8:
                            this.$d = this.$e.current();
                            this.$state = 9;
                            break;
                        case 9:
                            if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.$d) !== null) {
                                this.$state = 10
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 10:
                            this.$current = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.$d);
                            this.$state = 11;
                            return true;
                        case 11:
                            this.$state = 12;
                            break;
                        case 12:
                            this.$state = 13;
                            break;
                        case 13:
                            if (this.$e.moveNext()) {
                                this.$state = 8
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 14:
                            this.$state = 15;
                            break;
                        case 15:
                            this.$state = 16;
                            break;
                        case 16:
                            if (this.$c.moveNext()) {
                                this.$state = 4
                            } else {
                                this.$state = 17
                            }
                            break;
                        case 17:
                            this.$state = 18;
                            break;
                        case 18:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.CategoryAxisBase.prototype.$type, a)
}, gg: null, g4: function () {
    if (this.gg) {
        return
    }
    try {
        this.gg = true;
        var j = $.ig.CategoryMode.prototype.mode0;
        var k = 0;
        var l = false;
        var n = this.g0().getEnumerator();
        while (n.moveNext()) {
            var m = n.current();
            var o = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, m);
            if (o != null) {
                var p = o.preferredCategoryMode(this);
                if (p == $.ig.CategoryMode.prototype.mode2) {
                    j = $.ig.CategoryMode.prototype.mode2;
                    l = true;
                    if (this.g1(m)) {
                        k++
                    }
                }
                if (p == $.ig.CategoryMode.prototype.mode1 && !l) {
                    j = $.ig.CategoryMode.prototype.mode1
                }
            }
        }
        var r = this.g3().getEnumerator();
        while (r.moveNext()) {
            var q = r.current();
            q.g4()
        }
        this.categoryMode(j);
        this.go(k)
    } finally {
        this.gg = false
    }
}, eg: function (q, r, s, t) {
    var p = this;
    $.ig.Axis.prototype.eg.call(this, q, r, s, t);
    switch (r) {
        case $.ig.CategoryAxisBase.prototype.a9:
            if (($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, s)) != null) {
                this.gn(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, s)).releaseFastItemsSource(this.itemsSource()))
            }
            if (($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, t)) != null) {
                this.gn(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, t)).getFastItemsSource(this.itemsSource()))
            }
            this.g4();
            break;
        case $.ig.CategoryAxisBase.prototype.f7:
            if (this.c0() != null) {
                this.gn(this.c0().getFastItemsSource(this.itemsSource()))
            }
            break;
        case $.ig.CategoryAxisBase.prototype.f6:
            var u = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, s);
            this.g8();
            this.c7(true);
            if (u != null) {
                u.event = $.ig.Delegate.prototype.remove(u.event, this.g5.on(this))
            }
            if (this.gn() != null) {
                this.gn().event = $.ig.Delegate.prototype.combine(this.gn().event, this.g5.on(this));
                this.es(false);
                var w = this.fl().getEnumerator();
                while (w.moveNext()) {
                    var v = w.current();
                    v.renderSeries(false);
                    if (v.seriesViewer() != null) {
                        v.e5()
                    }
                }
            } else {
                this.er();
                var y = this.fl().getEnumerator();
                while (y.moveNext()) {
                    var x = y.current();
                    x.eu(true, x.view());
                    if (x.seriesViewer() != null) {
                        x.e5()
                    }
                }
            }
            break;
        case $.ig.CategoryAxisBase.prototype.f8:
            this.dx(new $.ig.AxisRangeChangedEventArgs(0, 0, (s) - 1, (t) - 1));
            this.es(false);
            break;
        case $.ig.CategoryAxisBase.prototype.f9:
            this.c7(true);
            this.es(false);
            this.g7();
            var A = this.fl().getEnumerator();
            while (A.moveNext()) {
                var z = A.current();
                var B = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, z);
                if (B != null && B.preferredCategoryMode(this) == s) {
                    z.renderSeries(false)
                }
            }
            break;
        case $.ig.CategoryAxisBase.prototype.gb:
        case $.ig.CategoryAxisBase.prototype.ga:
            this.c7(true);
            var D = this.fl().getEnumerator();
            while (D.moveNext()) {
                var C = D.current();
                C.dv(true);
                var E = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, C);
                if (E != null && E.preferredCategoryMode(this) == $.ig.CategoryMode.prototype.mode2) {
                    C.renderSeries(false)
                }
            }
            this.es(false);
            if (this.seriesViewer() != null) {
                this.seriesViewer().i8()
            }
            break;
        case $.ig.CategoryAxisBase.prototype.bq:
        case $.ig.CategoryAxisBase.prototype.bp:
            this.c7(true);
            this.es(true);
            break
    }
}, g5: function (c, d) {
    switch (d.action()) {
        case $.ig.FastItemsSourceEventAction.prototype.change:
        case $.ig.FastItemsSourceEventAction.prototype.remove:
        case $.ig.FastItemsSourceEventAction.prototype.insert:
        case $.ig.FastItemsSourceEventAction.prototype.replace:
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            this.es(false);
            break
    }
}, g6: function () {
    var g = false, h = false;
    var j = this.dc().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        var k = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, i);
        if (k == null) {
            continue
        }
        var l = k.preferredCategoryMode(this);
        g |= l == $.ig.CategoryMode.prototype.mode1;
        h |= l == $.ig.CategoryMode.prototype.mode2
    }
    this.categoryMode(h ? $.ig.CategoryMode.prototype.mode2 : g ? $.ig.CategoryMode.prototype.mode1 : $.ig.CategoryMode.prototype.mode0)
}, registerSeries: function (g) {
    var h = $.ig.Axis.prototype.registerSeries.call(this, g);
    if (h) {
        this.g4();
        var i = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, g);
        if (i != null && i.preferredCategoryMode(this) == $.ig.CategoryMode.prototype.mode2) {
            var k = this.fl().getEnumerator();
            while (k.moveNext()) {
                var j = k.current();
                var l = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, j);
                if (l != null && l != i && l.preferredCategoryMode(this) == $.ig.CategoryMode.prototype.mode2) {
                    j.renderSeries(false)
                }
            }
        }
        this.es(false);
        this.updateRange()
    }
    return h
}, deregisterSeries: function (g) {
    var h = $.ig.Axis.prototype.deregisterSeries.call(this, g);
    if (h) {
        this.g4();
        var i = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, g);
        if (i != null && i.preferredCategoryMode(this) != $.ig.CategoryMode.prototype.mode0) {
            var k = this.fl().getEnumerator();
            while (k.moveNext()) {
                var j = k.current();
                var l = $.ig.util.cast($.ig.IHasCategoryModePreference.prototype.$type, j);
                if (l != null) {
                    j.renderSeries(false)
                }
            }
        }
        this.es(false)
    }
    return h
}, g7: function () {
    var f = null;
    var h = this.fl().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        var i = $.ig.util.cast($.ig.CategorySeries.prototype.$type, g);
        if (i != null) {
            var j = i.jb();
            if (j != null && j.crossingAxis() == this) {
                f = j
            }
        }
    }
    if (f != null) {
        f.renderAxis()
    }
}, g8: function () {
    this.gd = this.gn()
}, g9: function () {
    var a = this.labelSettings();
    if (a == null) {
        a = new $.ig.AxisLabelSettings()
    }
    if (a.visibility() == $.ig.Visibility.prototype.collapsed) {
        this.df().g(0)
    } else {
        var b = 0;
        b = this.gm().bm(this.c4());
        this.df().g(b)
    }
}, handleCollectionChanged: function (a) {
    if (this.gn() != null) {
        this.gn().ae(a)
    }
}, notifySetItem: function (a, b, c) {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, c, b, a))
}, notifyClearItems: function () {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset))
}, notifyInsertItem: function (a, b) {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, b, a))
}, notifyRemoveItem: function (a, b) {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, b, a))
}, $type: new $.ig.Type("CategoryAxisBase", $.ig.Axis.prototype.$type, [$.ig.ICategoryScaler.prototype.$type])}, true);
$.ig.util.defType("CategoryAxisBaseView", "AxisView", {_bj: null, bj: function (b) {
    if (arguments.length === 1) {
        this._bj = b;
        return b
    } else {
        return this._bj
    }
}, init: function (b) {
    $.ig.AxisView.prototype.init.call(this, b);
    this.bj(b)
}, bm: function (e) {
    var f = 0;
    for (var g = 0; g < e.count(); g++) {
        var h = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, e.__inner[g]);
        if (h == null) {
            h = this.m().df().item(g);
            ($.ig.util.cast($.ig.TextBlock.prototype.$type, h)).a5(e.__inner[g].toString());
            f++
        } else {
            this.r().a3().add(h)
        }
    }
    return f
}, $type: new $.ig.Type("CategoryAxisBaseView", $.ig.AxisView.prototype.$type)}, true);
$.ig.util.defType("ISortingAxis", "Object", {$type: new $.ig.Type("ISortingAxis", null)}, true);
$.ig.util.defType("AxisRenderingParametersBase", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.t(new $.ig.List$1($.ig.RangeInfo.prototype.$type, 0))
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, _u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, _y: null, y: function (b) {
    if (arguments.length === 1) {
        this._y = b;
        return b
    } else {
        return this._y
    }
}, _z: null, z: function (b) {
    if (arguments.length === 1) {
        this._z = b;
        return b
    } else {
        return this._z
    }
}, _aa: null, aa: function (b) {
    if (arguments.length === 1) {
        this._aa = b;
        return b
    } else {
        return this._aa
    }
}, _ab: null, ab: function (b) {
    if (arguments.length === 1) {
        this._ab = b;
        return b
    } else {
        return this._ab
    }
}, _ac: null, ac: function (b) {
    if (arguments.length === 1) {
        this._ac = b;
        return b
    } else {
        return this._ac
    }
}, _ad: null, ad: function (b) {
    if (arguments.length === 1) {
        this._ad = b;
        return b
    } else {
        return this._ad
    }
}, _ae: null, ae: function (b) {
    if (arguments.length === 1) {
        this._ae = b;
        return b
    } else {
        return this._ae
    }
}, _af: null, af: function (b) {
    if (arguments.length === 1) {
        this._af = b;
        return b
    } else {
        return this._af
    }
}, _ag: null, ag: function (b) {
    if (arguments.length === 1) {
        this._ag = b;
        return b
    } else {
        return this._ag
    }
}, _ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, $type: new $.ig.Type("AxisRenderingParametersBase", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryAxisRenderingParameters", "AxisRenderingParametersBase", {init: function () {
    $.ig.AxisRenderingParametersBase.prototype.init.call(this)
}, _bl: null, bl: function (b) {
    if (arguments.length === 1) {
        this._bl = b;
        return b
    } else {
        return this._bl
    }
}, _bm: null, bm: function (b) {
    if (arguments.length === 1) {
        this._bm = b;
        return b
    } else {
        return this._bm
    }
}, _bn: null, bn: function (b) {
    if (arguments.length === 1) {
        this._bn = b;
        return b
    } else {
        return this._bn
    }
}, _bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, _bp: null, bp: function (b) {
    if (arguments.length === 1) {
        this._bp = b;
        return b
    } else {
        return this._bp
    }
}, $type: new $.ig.Type("CategoryAxisRenderingParameters", $.ig.AxisRenderingParametersBase.prototype.$type)}, true);
$.ig.util.defType("AxisRendererBase", "Object", {init: function (c) {
    var b = this;
    $.ig.Object.prototype.init.call(this);
    this.am(function () {
    });
    this.an(function (a, d) {
        return false
    });
    this.ao(function () {
    });
    this.ap(function (a, f) {
        return f
    });
    this.aq(function (a, d, e, j) {
    });
    this.ar(function (a, d, e) {
    });
    this.as(function (a, d) {
        return false
    });
    this.at(function (a, d) {
        return b.as()(a, d)
    });
    this.au(function (a) {
    });
    this.av(function (a) {
    });
    this.aw(function (a, d, e) {
        return false
    });
    this.ax(function (a, d) {
        return new $.ig.LabelPosition(d)
    });
    this.ay(function (a, d) {
        return d
    });
    this.a0(function (a) {
        return null
    });
    this.a2(function (a, d, e, f) {
        return d
    });
    this.a3(function (a, d, e, f) {
        return d
    });
    this.az(c);
    this.a1(function (a, d) {
        return null
    })
}, _am: null, am: function (b) {
    if (arguments.length === 1) {
        this._am = b;
        return b
    } else {
        return this._am
    }
}, _an: null, an: function (b) {
    if (arguments.length === 1) {
        this._an = b;
        return b
    } else {
        return this._an
    }
}, _ao: null, ao: function (b) {
    if (arguments.length === 1) {
        this._ao = b;
        return b
    } else {
        return this._ao
    }
}, _ap: null, ap: function (b) {
    if (arguments.length === 1) {
        this._ap = b;
        return b
    } else {
        return this._ap
    }
}, _aq: null, aq: function (b) {
    if (arguments.length === 1) {
        this._aq = b;
        return b
    } else {
        return this._aq
    }
}, _ar: null, ar: function (b) {
    if (arguments.length === 1) {
        this._ar = b;
        return b
    } else {
        return this._ar
    }
}, _as: null, as: function (b) {
    if (arguments.length === 1) {
        this._as = b;
        return b
    } else {
        return this._as
    }
}, _at: null, at: function (b) {
    if (arguments.length === 1) {
        this._at = b;
        return b
    } else {
        return this._at
    }
}, _au: null, au: function (b) {
    if (arguments.length === 1) {
        this._au = b;
        return b
    } else {
        return this._au
    }
}, _av: null, av: function (b) {
    if (arguments.length === 1) {
        this._av = b;
        return b
    } else {
        return this._av
    }
}, _aw: null, aw: function (b) {
    if (arguments.length === 1) {
        this._aw = b;
        return b
    } else {
        return this._aw
    }
}, _ax: null, ax: function (b) {
    if (arguments.length === 1) {
        this._ax = b;
        return b
    } else {
        return this._ax
    }
}, _ay: null, ay: function (b) {
    if (arguments.length === 1) {
        this._ay = b;
        return b
    } else {
        return this._ay
    }
}, _az: null, az: function (b) {
    if (arguments.length === 1) {
        this._az = b;
        return b
    } else {
        return this._az
    }
}, _a0: null, a0: function (b) {
    if (arguments.length === 1) {
        this._a0 = b;
        return b
    } else {
        return this._a0
    }
}, _a1: null, a1: function (b) {
    if (arguments.length === 1) {
        this._a1 = b;
        return b
    } else {
        return this._a1
    }
}, _a2: null, a2: function (b) {
    if (arguments.length === 1) {
        this._a2 = b;
        return b
    } else {
        return this._a2
    }
}, _a3: null, a3: function (b) {
    if (arguments.length === 1) {
        this._a3 = b;
        return b
    } else {
        return this._a3
    }
}, _a4: null, a4: function (b) {
    if (arguments.length === 1) {
        this._a4 = b;
        return b
    } else {
        return this._a4
    }
}, _a5: null, a5: function (b) {
    if (arguments.length === 1) {
        this._a5 = b;
        return b
    } else {
        return this._a5
    }
}, ca: function (l, m, n) {
    var j = this;
    this.cd(n, m);
    if (this.an()(m, n)) {
        this.ao()();
        var o = this.a1()(m, n);
        this.cd(n, m);
        if (o == null) {
            this.cb();
            return
        }
        if (o.t().count() > 1 && !o.af()) {
            this.cc(o)
        }
        var q = o.t().getEnumerator();
        while (q.moveNext()) {
            var p = q.current();
            o.u(p);
            if (isNaN(p.g()) || Number.isInfinity(p.g()) || isNaN(p.f()) || Number.isInfinity(p.f())) {
                continue
            }
            if (p.f() == p.g()) {
                continue
            }
            this.av()(o);
            this.az().ac(o.ac());
            var r = $.ig.CategoryMode.prototype.mode0;
            var s = 0;
            var t = false;
            var u = function (a) {
                return a
            };
            if (this.a4() != null) {
                u = this.a5()
            }
            if ($.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, o) !== null) {
                r = (o).bm();
                s = (o).bo();
                t = (o).bp()
            }
            o.v(this.cf(o));
            o.v().o((function () {
                var a = new $.ig.TickmarkValuesInitializationParameters();
                a.r(o.u().f());
                a.s(o.u().g());
                a.t(o.aa());
                a.u(o.ab());
                a.v(o.u().i());
                a.w(o.af());
                a.x(o.ae());
                a.y(o.u().h());
                a.z(o.u().j());
                a.aa(r);
                a.ab(s);
                a.ad(o.s());
                a.ac(o.r());
                a.ae(t);
                a.ah(u);
                return a
            }()));
            this.cg(o)
        }
        this.ce()
    }
}, cb: function () {
    this.az().ag()
}, cc: function (m) {
    var g = this;
    var n = -Number.MAX_VALUE;
    var o = -Number.MAX_VALUE;
    var p = $.ig.CategoryMode.prototype.mode0;
    var q = 0;
    var r = false;
    var s = function (a) {
        return a
    };
    if (this.a4() != null) {
        s = this.a5()
    }
    if ($.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, m) !== null) {
        p = (m).bm();
        q = (m).bo();
        r = (m).bp()
    }
    var u = m.t().getEnumerator();
    while (u.moveNext()) {
        var t = u.current();
        m.u(t);
        m.v().o((function () {
            var a = new $.ig.TickmarkValuesInitializationParameters();
            a.r(t.f());
            a.s(t.g());
            a.t(m.aa());
            a.u(m.ab());
            a.v(t.i());
            a.w(m.af());
            a.x(m.ae());
            a.y(t.h());
            a.z(t.j());
            a.aa(p);
            a.ab(q);
            a.ad(m.s());
            a.ac(m.r());
            a.ae(r);
            a.ah(s);
            return a
        }()));
        t.h(m.v().k());
        t.j(m.v().n());
        if (!isNaN(m.v().k())) {
            n = Math.max(n, m.v().k());
            o = Math.max(o, m.v().n())
        }
    }
    var w = m.t().getEnumerator();
    while (w.moveNext()) {
        var v = w.current();
        if (v.h() == n) {
            v.h(-1);
            v.j(-1)
        } else {
            v.h(n);
            v.j(o)
        }
    }
}, cd: function (c, d) {
    this.am()();
    this.az().w(c, d);
    this.az().y()
}, ce: function () {
    this.az().y();
    if (this.az().l()) {
        this.az().ae(0)
    } else {
        var e = 0;
        var g = this.az().g().getEnumerator();
        while (g.moveNext()) {
            var f = g.current();
            var h = $.ig.util.cast($.ig.FrameworkElement.prototype.$type, f);
            if (h == null) {
                h = this.az().ad(e);
                (h).a5(f.toString());
                e++
            } else {
                this.az().aa(h)
            }
        }
        this.az().ae(e)
    }
}, cf: function (g) {
    var h = $.ig.util.cast($.ig.LogarithmicTickmarkValues.prototype.$type, g.v());
    if (h != null) {
        var i = Math.min(g.u().f(), g.u().g());
        var j = Math.max(g.u().f(), g.u().g());
        var k = Math.floor(Math.logBase(i, h.af()));
        var l = Math.ceil(Math.logBase(j, h.af()));
        if (l - k < 2) {
            return new $.ig.LinearTickmarkValues()
        }
    }
    return g.v()
}, cg: function (o) {
    var p = o.v().x().toArray$1(Number);
    var q = o.v().y().toArray$1(Number);
    this.az().ab(this.ap()(o, o.v().k()));
    this.au()(o);
    for (var r = 0; r < p.length; r++) {
        var s = o.v().l() + r;
        var t = p[r];
        var u = t;
        var v = 0;
        if (r < p.length - 1) {
            v = p[r + 1]
        } else {
            v = Number.POSITIVE_INFINITY
        }
        u = this.a2()(o, u, s, o.v().k());
        v = this.a2()(o, v, s, o.v().k());
        var w = this.ap()(o, u);
        var x = this.ap()(o, v);
        if (this.as()(o, w)) {
            if (s % 2 == 0 && this.at()(o, x) && !Number.isInfinity(x)) {
                this.aq()(o, o.w(), w, x)
            }
            this.ar()(o, o.x(), w)
        }
        w = this.a3()(o, w, s, o.v().k());
        if (!isNaN(w) && !Number.isInfinity(w) && this.aw()(o, w, r == p.length - 1)) {
            var y = this.ch(o, u, s, o.v().k());
            if (y != null) {
                this.az().x(y, this.ax()(o, w))
            }
        }
    }
    if (o.ah()) {
        for (var z = 0; z < q.length; z++) {
            var A = q[z];
            var B = this.ap()(o, A);
            this.ar()(o, o.y(), B)
        }
    }
}, ch: function (e, f, g, h) {
    return null
}, $type: new $.ig.Type("AxisRendererBase", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryYAxis", "CategoryAxisBase", {dl: function () {
    return new $.ig.CategoryYAxisView(this)
}, dp: function (b) {
    $.ig.CategoryAxisBase.prototype.dp.call(this, b);
    this.hh(b)
}, _hh: null, hh: function (b) {
    if (arguments.length === 1) {
        this._hh = b;
        return b
    } else {
        return this._hh
    }
}, init: function () {
    var a = this;
    this.hd = 1;
    this.he = 1;
    $.ig.CategoryAxisBase.prototype.init.call(this);
    this.labelSettings((function () {
        var b = new $.ig.AxisLabelSettings();
        b.location($.ig.AxisLabelsLocation.prototype.outsideLeft);
        b.r(a);
        return b
    }()))
}, interval: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryYAxis.prototype.intervalProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryYAxis.prototype.intervalProperty)
    }
}, hd: null, hi: function (b) {
    if (arguments.length === 1) {
        this.hd = b;
        return b
    } else {
        return this.hd
    }
}, he: null, hj: function (b) {
    if (arguments.length === 1) {
        this.he = b;
        return b
    } else {
        return this.he
    }
}, getScaledValue: function (e, f) {
    var g = this.categoryMode() == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
    if (g < 0) {
        g = 0
    }
    var h = g >= 1 ? (e) / (g) : g == 0 ? 0.5 : NaN;
    if (!this.c1()) {
        h = 1 - h
    }
    return f.b.top() + f.b.height() * (h - f.a.top()) / f.a.height()
}, getUnscaledValue: function (c, d) {
    return this.gy(c, d.a, d.b, this.categoryMode())
}, gy: function (g, h, i, j) {
    var k = h.top() + (g - i.top()) * h.height() / i.height();
    if (!this.c1()) {
        k = 1 - k
    }
    var l = j == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
    if (l < 0) {
        l = 0
    }
    return k * l
}, dr: function () {
    return new $.ig.VerticalAxisLabelPanel()
}, getCategorySize: function (c, d) {
    return d.height() / (this.itemsCount() * c.height())
}, gz: function (g, h) {
    var i = 0;
    if (!isNaN(this.gap())) {
        i = $.ig.MathUtil.prototype.i(this.gap(), 0, 1)
    }
    var j = 0;
    if (!isNaN(this.overlap())) {
        j = Math.min(this.overlap(), 1)
    }
    var k = 1 - 0.5 * i;
    var l = this.getCategorySize(g, h) * k / (this.go() - (this.go() - 1) * j);
    return l
}, getGroupCenter: function (j, k, l) {
    var m = 0.5;
    if (this.go() > 1) {
        var n = 0;
        if (!isNaN(this.gap())) {
            n = $.ig.MathUtil.prototype.i(this.gap(), 0, 1)
        }
        var o = 0;
        if (!isNaN(this.overlap())) {
            o = Math.min(this.overlap(), 1)
        }
        var p = 1 - 0.5 * n;
        var q = p / (this.go() - (this.go() - 1) * o);
        var r = (p - q) / (this.go() - 1);
        m = 0.25 * n + 0.5 * q + j * r
    }
    return this.getCategorySize(k, l) * m
}, scrollIntoView: function (h) {
    var i = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var j = this.c2();
    var k = new $.ig.Rect(0, 0, 0, 1, 1);
    var l = new $.ig.ScalerParams(k, k, this.isInverted());
    var m = !i.isEmpty() && !j.isEmpty() && this.gn() != null ? this.gn().x(h) : -1;
    var n = m > -1 ? this.getScaledValue(m, l) : NaN;
    if (!isNaN(n) && this.seriesViewer().fl()) {
        if (!isNaN(n)) {
            if (n < i.top() + 0.1 * i.height()) {
                n = n + 0.4 * i.height();
                i.y(n - 0.5 * i.height())
            }
            if (n > i.bottom() - 0.1 * i.height()) {
                n = n - 0.4 * i.height();
                i.y(n - 0.5 * i.height())
            }
        }
        this.seriesViewer().hx(i)
    }
}, ex: function () {
    if (this.gn() == null) {
        return false
    }
    var c = this.gn().g();
    if (c != this.hj()) {
        var d = new $.ig.AxisRangeChangedEventArgs(1, 1, this.hj(), c);
        this.hj(c);
        this.dx(d);
        return true
    }
    return false
}, g2: function (c) {
    if (c == null) {
        return false
    }
    var d = this.fg();
    if (d == null) {
        return false
    }
    return d.synchronizeVertically()
}, ey: function (A) {
    var H = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var I = this.c2();
    var J = new $.ig.ScalerParams(H, I, this.isInverted());
    var K = this.cz().au();
    var L = this.cz().av();
    var M = this.cz().aw();
    var N = this.cz().ax();
    this.d2();
    this.eq(K);
    this.eq(L);
    this.eq(M);
    this.eq(N);
    this.c4().clear();
    this.c5().clear();
    this.cz().az(this, H, I);
    if (H.isEmpty() || I.isEmpty()) {
        this.df().g(0)
    }
    if (this.df().g() == 0) {
        this.cz().a0()
    }
    if (this.labelSettings() != null) {
        this.labelSettings().r(this)
    }
    if (this.itemsSource() == null) {
        return
    }
    if (!H.isEmpty() && !I.isEmpty()) {
        var O = this.getUnscaledValue(I.top(), J);
        var P = this.getUnscaledValue(I.bottom(), J);
        if (!this.isInverted()) {
            O = Math.ceil(O);
            P = Math.floor(P)
        } else {
            O = Math.floor(O);
            P = Math.ceil(P)
        }
        var Q = I.left();
        if (this.crossingAxis() != null) {
            var R = $.ig.util.cast($.ig.NumericXAxis.prototype.$type, this.crossingAxis());
            if (R != null) {
                var S = new $.ig.ScalerParams(H, I, R.isInverted());
                Q = this.crossingValue();
                Q = R.getScaledValue(Q, S);
                if (Q < I.left()) {
                    Q = I.left()
                } else {
                    if (Q > I.right()) {
                        Q = I.right()
                    }
                }
            }
        }
        this.ep(K, Q, I);
        this.cz().a3(Q);
        var T = Math.min(O, P);
        var U = Math.max(O, P);
        var V = new $.ig.LinearCategorySnapper(1, T, U, I.height(), this.interval(), this.categoryMode());
        var W = Math.floor((T - 0) / V.g());
        var X = Math.ceil((U - 0) / V.g());
        if (!isNaN(W) && !isNaN(X)) {
            var Y = W;
            var Z = X;
            var aa = this.getScaledValue(0 + Y * V.g(), J);
            this.c6().bq(this.getScaledValue(V.g(), J));
            for (var ab = Y; ab <= Z; ++ab) {
                var ac = this.getScaledValue(0 + (ab + 1) * V.g(), J);
                if (aa <= I.bottom()) {
                    if (ab % 2 == 0) {
                        this.em(L, aa, ac, I)
                    }
                    this.en(M, aa, I);
                    if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0 && this.go() != 0) {
                        for (var ad = 0; ad < V.g(); ad++) {
                            for (var ae = 0; ae < this.go(); ae++) {
                                var af = this.getGroupCenter(ae, H, I);
                                if (!this.isInverted()) {
                                    af = -af
                                }
                                var B = this.getScaledValue(ad + ab * V.g(), J) + af;
                                this.en(N, B, I)
                            }
                        }
                    }
                }
                var C = aa;
                if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
                    var D = this.getScaledValue(ab * V.g() + 1, J);
                    C = (aa + D) / 2
                }
                if (C <= I.bottom() && C >= I.top()) {
                    var E = 0;
                    if (V.g() >= 1) {
                        E = ab * Math.floor(V.g())
                    } else {
                        if ((ab * V.g()) * 2 % 2 == 0) {
                            E = Math.floor(ab * V.g())
                        } else {
                            E = -1
                        }
                    }
                    if (this.gn() != null && E < this.gn().g() && E >= 0) {
                        var F = this.gn().item(E);
                        var G = this.e2(F);
                        if (!isNaN(C) && !Number.isInfinity(C)) {
                            this.c4().add1(G);
                            this.c5().add(new $.ig.LabelPosition(C))
                        }
                    }
                }
                aa = ac
            }
        }
        if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
            if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideLeft || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideRight)) {
                this.seriesViewer().ic()
            }
        }
        this.cz().a2(this.c4(), this.c5());
        this.g9()
    }
}, dd: function () {
    return $.ig.AxisOrientation.prototype.vertical
}, $type: new $.ig.Type("CategoryYAxis", $.ig.CategoryAxisBase.prototype.$type)}, true);
$.ig.util.defType("CategoryYAxisView", "CategoryAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.CategoryAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("CategoryYAxisView", $.ig.CategoryAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("HorizontalAxisLabelPanelBase", "AxisLabelPanelBase", {init: function () {
    $.ig.AxisLabelPanelBase.prototype.init.call(this)
}, b6: function () {
    return new $.ig.HorizontalAxisLabelPanelBaseView(this)
}, b7: function (b) {
    $.ig.AxisLabelPanelBase.prototype.b7.call(this, b);
    this.d0(b)
}, _d0: null, d0: function (b) {
    if (arguments.length === 1) {
        this._d0 = b;
        return b
    } else {
        return this._d0
    }
}, _d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, c7: function () {
    this.d0().ak()
}, d6: function () {
    return this.br().labelSettings() != null && this.br().labelSettings().y() && this.c9() % 360 != 0
}, d7: function () {
    return this.b0() && !this.b1()
}, c6: function () {
    var t = this;
    var u = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    this.b2(false);
    this.b1(false);
    this.b3(false);
    var v = Math.abs(this.c9() % 180);
    var w = this.br().labelSettings() != null ? (this.br().labelSettings().angle() * Math.PI / 180) : 0;
    if (this.d6()) {
        this.b1(true)
    }
    this.d0().al(u, w);
    this.b0(this.b0() || this.c4(u));
    if (this.b0()) {
        this.d9(u)
    } else {
        this.ea()
    }
    if (!this.br().e8()) {
        if (!this.b0()) {
            this.b5(this.d1())
        } else {
            var x = this.br().labelSettings() != null && !isNaN(this.br().labelSettings().extent()) ? this.br().labelSettings().extent() : $.ig.AxisLabelSettings.prototype.extentPropertyDefault;
            this.b5(Math.min(x, this.dc(this.b4())))
        }
    } else {
        this.bp().w()
    }
    if (this.b1()) {
        for (var y = 0; y < u.count(); y++) {
            var z = u.__inner[y];
            z.x(this.bt().__inner[y].b());
            u.__inner[y] = z
        }
    }
    var A = 0;
    if (this.d7()) {
        A = (function () {
            var a = t.c5(t.d1(), u);
            u = a.rectangles;
            return a.ret
        }())
    }
    if (this.b0() && !this.b2()) {
        if (A > 0) {
            if (this.d0().am()) {
                this.b3(true)
            }
        }
    }
    if (this.b0() && this.ec()) {
        var B = this.bv().width();
        var C = this.bt().count() > 1 ? this.bt().__inner[1].b() - this.bt().__inner[0].b() : B;
        var D = Math.abs(C * 0.8);
        var E = 0;
        var F = Math.abs(Math.atan(this.d1() / C) * 180 / Math.PI);
        for (var G = 0; G < u.count(); G++) {
            var H = Math.min(this.db(this.by().__inner[G]), D);
            E = this.b1() ? this.bt().__inner[G].b() : this.bt().__inner[G].b() - H / 2;
            var I = v >= F && v <= 180 - F;
            if (this.b1() && I) {
                var J = this.db(this.by().__inner[G]);
                D = Math.min(this.b5() / Math.abs(Math.sin(w)), J)
            }
            var K = u.__inner[G];
            K.x(E);
            K.width(D);
            u.__inner[G] = K;
            if (!($.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[G]) !== null)) {
                this.by().__inner[G].v(D)
            }
            var L = $.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[G]);
            if (L != null) {
                var M = this.dm(G, L, D);
                if (this.b3()) {
                    L.w(this.b5())
                } else {
                    if (!L.a5().equals(M)) {
                        L.a5(M);
                        this.by().__inner[G].v(D)
                    }
                }
            }
        }
    }
    if (this.eb()) {
        this.d8(u)
    }
    return u
}, d8: function (b) {
    this.d0().an(b)
}, d9: function (b) {
}, ea: function () {
}, df: function (g, h) {
    var f = this;
    var i = 0;
    var j = this.d1() / 2;
    var k = (function () {
        var a = new $.ig.RotateTransform();
        a.h(f.c9());
        a.i(i);
        a.j(j);
        return a
    }());
    g.f(k)
}, eb: function () {
    return !this.b2() && !this.b1()
}, ec: function () {
    return true
}, c5: function (g, h) {
    var i = 0;
    var j = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    if (g * 3 <= this.b5()) {
        i = 3
    } else {
        if (g * 2 <= this.b5()) {
            i = 2
        } else {
            return{ret: i, rectangles: h}
        }
    }
    for (var k = 0; k < h.count(); k++) {
        var l = h.__inner[k].duplicate();
        if (k % i == 0) {
            l.y(0)
        } else {
            if (k % i == i - 1) {
                l.y(this.b5() - l.height())
            } else {
                l.y(this.b5() / 2 - l.height() / 2)
            }
        }
        j.add(l)
    }
    this.b0(this.c4(j));
    if (!this.b0()) {
        this.b2(true);
        h = j
    }
    return{ret: i, rectangles: h};
    return{rectangles: h}
}, $type: new $.ig.Type("HorizontalAxisLabelPanelBase", $.ig.AxisLabelPanelBase.prototype.$type)}, true);
$.ig.util.defType("HorizontalAxisLabelPanel", "HorizontalAxisLabelPanelBase", {init: function () {
    $.ig.HorizontalAxisLabelPanelBase.prototype.init.call(this)
}, dj: function () {
    return $.ig.AxisLabelsLocation.prototype.outsideBottom
}, dk: function (b) {
    return b == $.ig.AxisLabelsLocation.prototype.insideBottom || b == $.ig.AxisLabelsLocation.prototype.insideTop || b == $.ig.AxisLabelsLocation.prototype.outsideBottom || b == $.ig.AxisLabelsLocation.prototype.outsideTop
}, $type: new $.ig.Type("HorizontalAxisLabelPanel", $.ig.HorizontalAxisLabelPanelBase.prototype.$type)}, true);
$.ig.util.defType("HorizontalAxisLabelPanelBaseView", "AxisLabelPanelBaseView", {_ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, init: function (b) {
    $.ig.AxisLabelPanelBaseView.prototype.init.call(this, b);
    this.ah(b)
}, ak: function () {
}, al: function (m, n) {
    this.ah().d1(-Number.MAX_VALUE);
    for (var o = 0; o < this.g().by().count(); o++) {
        if (this.g().bt() == null || o >= this.g().bt().count()) {
            break
        }
        var p, q, r, s, t;
        var u = this.g().by().__inner[o];
        t = this.v(u);
        if (this.g().b1()) {
            p = this.g().bt().__inner[o].b()
        } else {
            p = this.g().bt().__inner[o].b() - t / 2
        }
        q = 0;
        r = this.v(u);
        s = this.t(u);
        this.ah().d1(Math.max(s, this.ah().d1()));
        var v = new $.ig.Rect(0, p, q, r, s);
        m.add(v);
        var w = t * Math.abs(Math.sin(n));
        var x = this.g().bv().height();
        this.g().b0(w > x)
    }
}, am: function () {
    return false
}, an: function (b) {
}, l: function () {
    return 0
}, m: function () {
    return this.g().bv().top()
}, $type: new $.ig.Type("HorizontalAxisLabelPanelBaseView", $.ig.AxisLabelPanelBaseView.prototype.$type)}, true);
$.ig.util.defType("NumericAxisBase", "Axis", {dl: function () {
    return new $.ig.NumericAxisBaseView(this)
}, dp: function (b) {
    $.ig.Axis.prototype.dp.call(this, b);
    this.gy(b)
}, _gy: null, gy: function (b) {
    if (arguments.length === 1) {
        this._gy = b;
        return b
    } else {
        return this._gy
    }
}, init: function () {
    $.ig.Axis.prototype.init.call(this);
    this.g2(10)
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAxisBase.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.NumericAxisBase.prototype.minimumValueProperty)
    }
}, actualMinimumValue: function (c) {
    if (arguments.length === 1) {
        if (this.actualMinimumValue() != c) {
            var d = this.gh;
            this.gh = c;
            this.gz(Math.log(this.actualMinimumValue()));
            this.ez($.ig.NumericAxisBase.prototype.f7, d, this.actualMinimumValue())
        }
        return c
    } else {
        return this.gh
    }
}, gh: null, _gz: null, gz: function (b) {
    if (arguments.length === 1) {
        this._gz = b;
        return b
    } else {
        return this._gz
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAxisBase.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.NumericAxisBase.prototype.maximumValueProperty)
    }
}, actualMaximumValue: function (c) {
    if (arguments.length === 1) {
        if (this.actualMaximumValue() != c) {
            var d = this.gi;
            this.gi = c;
            this.g0(Math.log(this.actualMaximumValue()));
            this.ez($.ig.NumericAxisBase.prototype.f9, d, this.actualMaximumValue())
        }
        return c
    } else {
        return this.gi
    }
}, gi: null, _g0: null, g0: function (b) {
    if (arguments.length === 1) {
        this._g0 = b;
        return b
    } else {
        return this._g0
    }
}, interval: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAxisBase.prototype.intervalProperty, b);
        return b
    } else {
        return this.b($.ig.NumericAxisBase.prototype.intervalProperty)
    }
}, referenceValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAxisBase.prototype.referenceValueProperty, b);
        return b
    } else {
        return this.b($.ig.NumericAxisBase.prototype.referenceValueProperty)
    }
}, isLogarithmic: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAxisBase.prototype.isLogarithmicProperty, b);
        return b
    } else {
        return this.b($.ig.NumericAxisBase.prototype.isLogarithmicProperty)
    }
}, gj: null, actualIsLogarithmic: function (c) {
    if (arguments.length === 1) {
        if (this.actualIsLogarithmic() != c) {
            var d = this.gj;
            if (d != c) {
                this.gj = c;
                this.ez($.ig.NumericAxisBase.prototype.gd, d, this.actualIsLogarithmic())
            }
        }
        return c
    } else {
        return this.gj
    }
}, g1: function () {
    return this.actualIsLogarithmic() && this.actualMinimumValue() > 0 && this.g2() > 1
}, logarithmBase: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAxisBase.prototype.logarithmBaseProperty, b);
        return b
    } else {
        return this.b($.ig.NumericAxisBase.prototype.logarithmBaseProperty)
    }
}, _g2: null, g2: function (b) {
    if (arguments.length === 1) {
        this._g2 = b;
        return b
    } else {
        return this._g2
    }
}, _g3: null, g3: function (b) {
    if (arguments.length === 1) {
        this._g3 = b;
        return b
    } else {
        return this._g3
    }
}, eg: function (g, h, i, j) {
    var f = this;
    $.ig.Axis.prototype.eg.call(this, g, h, i, j);
    switch (h) {
        case $.ig.NumericAxisBase.prototype.f6:
            this.updateRange();
            this.es(false);
            break;
        case $.ig.NumericAxisBase.prototype.f8:
            this.updateRange();
            this.es(false);
            break;
        case $.ig.NumericAxisBase.prototype.gc:
            this.actualIsLogarithmic(this.isLogarithmic());
            break;
        case $.ig.Axis.prototype.bq:
        case $.ig.Axis.prototype.bp:
        case $.ig.NumericAxisBase.prototype.ga:
            this.c7(true);
            this.es(false);
            break;
        case $.ig.NumericAxisBase.prototype.ge:
            this.g2(this.logarithmBase());
            if (this.actualIsLogarithmic()) {
                this.updateRange();
                this.hi();
                this.es(false)
            }
            break;
        case $.ig.NumericAxisBase.prototype.gb:
            var k = new $.ig.AxisRangeChangedEventArgs(this.actualMinimumValue(), this.actualMinimumValue(), this.actualMaximumValue(), this.actualMaximumValue());
            this.dx(k);
            this.c7(true);
            this.es(false);
            break;
        case $.ig.NumericAxisBase.prototype.bn:
            this.g3(this.hm());
            this.c7(true);
            this.es(false);
            break;
        case $.ig.NumericAxisBase.prototype.gf:
            this.hs();
            break;
        case $.ig.NumericAxisBase.prototype.gd:
            this.updateRange();
            this.hi();
            this.c7(true);
            this.hs();
            this.es(false);
            break;
        case $.ig.NumericAxisBase.prototype.gg:
            this.c7(true);
            this.es(false);
            break
    }
}, hi: function () {
    var d = this.fl().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        c.renderSeries(false)
    }
}, hj: function () {
    var f = new $.ig.AxisRange(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
    var g = false;
    if (this.seriesViewer() != null) {
        var i = this.fl().getEnumerator();
        while (i.moveNext()) {
            var h = i.current();
            var j = h.em(this);
            if (j != null) {
                g = true;
                f = new $.ig.AxisRange(Math.min(f.c(), j.c()), Math.max(f.d(), j.d()))
            }
        }
    }
    if (g) {
        return f
    }
    return null
}, hk: function (i, j, k, l, m, n, o) {
    var h = this;
    (function () {
        var a = $.ig.AutoRangeCalculator.prototype.c(i, j, k, l, m, n, o);
        n = a.minimumValue;
        o = a.maximumValue;
        return a.ret
    }());
    return{actualMinimumValue: n, actualMaximumValue: o}
}, ex: function () {
    var e = this;
    var f = this.actualIsLogarithmic() && !isNaN(this.logarithmBase()) && !Number.isInfinity(this.logarithmBase()) && this.logarithmBase() > 1;
    var g;
    var h;
    (function () {
        var a = e.hk(e, e.minimumValue(), e.maximumValue(), f, e.logarithmBase(), g, h);
        g = a.actualMinimumValue;
        h = a.actualMaximumValue;
        return a.ret
    }());
    if (g != this.actualMinimumValue() || h != this.actualMaximumValue()) {
        var i = new $.ig.AxisRangeChangedEventArgs(this.actualMinimumValue(), g, this.actualMaximumValue(), h);
        this.actualMinimumValue(g);
        this.actualMaximumValue(h);
        this.dx(i);
        this.hl(i);
        this.es(true);
        return true
    }
    return false
}, hl: function (b) {
}, registerSeries: function (c) {
    var d = $.ig.Axis.prototype.registerSeries.call(this, c);
    if (d) {
        this.updateRange()
    }
    return d
}, deregisterSeries: function (c) {
    var d = $.ig.Axis.prototype.deregisterSeries.call(this, c);
    if (d) {
        this.updateRange()
    }
    return d
}, hm: function () {
    var c = this;
    var d = (function () {
        var a = new $.ig.AxisLabelManager();
        a.j(c);
        a.h(c.c5());
        a.g(c.c4());
        a.i(c.c6());
        return a
    }());
    if (this.labelSettings() != null) {
        this.labelSettings().r(this)
    }
    var e = new $.ig.NumericAxisRenderer(d);
    e.am(function () {
        var a = c.cz().au();
        var b = c.cz().av();
        var g = c.cz().aw();
        var h = c.cz().ax();
        c.d2();
        c.eq(a);
        c.eq(b);
        c.eq(g);
        c.eq(h)
    });
    e.an(function (a, b) {
        return !b.isEmpty() && !a.isEmpty()
    });
    e.a1(function (a, b) {
        return c.hq(a, b)
    });
    e.a0(function (a) {
        return c.e2(a)
    });
    return e
}, hn: function () {
    return new $.ig.NumericAxisRenderingParameters()
}, ho: function () {
}, hp: function () {
    return null
}, hq: function (h, i) {
    var j = this.hn();
    var k = this.cz().au();
    var l = this.cz().av();
    var m = this.cz().aw();
    var n = this.cz().ax();
    j.z(k);
    j.w(l);
    j.x(m);
    j.y(n);
    j.ab(this.actualMaximumValue());
    j.aa(this.actualMinimumValue());
    j.ag(this.hasUserMaximum());
    j.v(this.actualTickmarkValues());
    j.r(h);
    j.s(i);
    j.af(this.hr());
    j.ae(this.interval());
    j.ad(this.label());
    if (this.label() == null && this.formatLabel() != null) {
        j.ad("Format")
    }
    j.ah(this.c9());
    return j
}, unscaleValue: function (c) {
    var d = new $.ig.ScalerParams(this.seriesViewer().windowRect(), this.c2(), this.isInverted());
    d.c = this.seriesViewer().effectiveViewport();
    return this.getUnscaledValue(c, d)
}, hr: function () {
    return !isNaN(this.interval())
}, hasUserMinimum: function () {
    return !isNaN(this.minimumValue())
}, hasUserMaximum: function () {
    return !isNaN(this.maximumValue())
}, hs: function () {
    if (this.tickmarkValues() != null) {
        this.actualTickmarkValues(this.tickmarkValues())
    } else {
        if (this.actualIsLogarithmic()) {
            this.actualTickmarkValues(new $.ig.LogarithmicTickmarkValues());
            this.gy().bm()
        } else {
            this.actualTickmarkValues(new $.ig.LinearTickmarkValues())
        }
    }
}, tickmarkValues: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAxisBase.prototype.tickmarkValuesProperty, b);
        return b
    } else {
        return $.ig.util.cast($.ig.TickmarkValues.prototype.$type, this.b($.ig.NumericAxisBase.prototype.tickmarkValuesProperty))
    }
}, gk: null, actualTickmarkValues: function (d) {
    if (arguments.length === 1) {
        var e = this.gk;
        var f = e != d;
        if (f) {
            this.gk = d;
            this.ez($.ig.NumericAxisBase.prototype.gg, e, d)
        }
        return d
    } else {
        if (this.gk == null) {
            this.hs()
        }
        return this.gk
    }
}, $type: new $.ig.Type("NumericAxisBase", $.ig.Axis.prototype.$type)}, true);
$.ig.util.defType("NumericAxisBaseView", "AxisView", {_bj: null, bj: function (b) {
    if (arguments.length === 1) {
        this._bj = b;
        return b
    } else {
        return this._bj
    }
}, init: function (b) {
    $.ig.AxisView.prototype.init.call(this, b);
    this.bj(b)
}, bm: function () {
}, $type: new $.ig.Type("NumericAxisBaseView", $.ig.AxisView.prototype.$type)}, true);
$.ig.util.defType("StraightNumericAxisBase", "NumericAxisBase", {init: function () {
    $.ig.NumericAxisBase.prototype.init.call(this);
    this.im()
}, dl: function () {
    return new $.ig.StraightNumericAxisBaseView(this)
}, dp: function (b) {
    $.ig.NumericAxisBase.prototype.dp.call(this, b);
    this.h9(b)
}, _h9: null, h9: function (b) {
    if (arguments.length === 1) {
        this._h9 = b;
        return b
    } else {
        return this._h9
    }
}, scaleMode: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.StraightNumericAxisBase.prototype.scaleModeProperty, b);
        return b
    } else {
        return this.b($.ig.StraightNumericAxisBase.prototype.scaleModeProperty)
    }
}, scaler: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.StraightNumericAxisBase.prototype.scalerProperty, b);
        return b
    } else {
        return this.b($.ig.StraightNumericAxisBase.prototype.scalerProperty)
    }
}, ie: function (d, e) {
    var f = $.ig.util.cast($.ig.StraightNumericAxisBase.prototype.$type, d);
    f.im();
    f.ez($.ig.StraightNumericAxisBase.prototype.h3, e.f(), e.e())
}, ig: function () {
    return null
}, h5: null, ia: function (d) {
    if (arguments.length === 1) {
        var e = this.h5 != d;
        if (e) {
            var f = this.h5;
            this.h5 = d;
            this.ez($.ig.StraightNumericAxisBase.prototype.h4, f, d)
        }
        return d
    } else {
        if (this.h5 == null) {
            this.im()
        }
        return this.h5
    }
}, hk: function (i, j, k, l, m, n, o) {
    var h = this;
    (function () {
        var a = h.ia().q(i, j, k, n, o);
        n = a.actualMinimumValue;
        o = a.actualMaximumValue;
        return a.ret
    }());
    return{actualMinimumValue: n, actualMaximumValue: o}
}, ij: function (c) {
    var d = this.ib();
    this.ib(true);
    c.invoke();
    this.ib(d)
}, _ib: null, ib: function (b) {
    if (arguments.length === 1) {
        this._ib = b;
        return b
    } else {
        return this._ib
    }
}, im: function () {
    var b = this.scaler();
    if (b == null) {
        b = this.hp()
    }
    this.ia(b);
    if (this.ia() == null) {
        throw new $.ig.ArgumentNullException("ActualScaler")
    }
    this.io()
}, io: function () {
    this.h9().br()
}, eg: function (f, g, h, i) {
    var e = this;
    if (this.ib()) {
        return
    }
    $.ig.NumericAxisBase.prototype.eg.call(this, f, g, h, i);
    switch (g) {
        case $.ig.NumericAxisBase.prototype.ge:
            this.im();
            break;
        case $.ig.NumericAxisBase.prototype.gc:
            this.im();
            break;
        case $.ig.StraightNumericAxisBase.prototype.h2:
            this.im();
            break;
        case $.ig.StraightNumericAxisBase.prototype.h3:
            this.im();
            break;
        case $.ig.StraightNumericAxisBase.prototype.h4:
            this.actualIsLogarithmic($.ig.util.cast($.ig.LogarithmicScaler.prototype.$type, this.ia()) !== null);
            this.io();
            this.updateRange();
            this.es(false);
            break;
        case $.ig.NumericAxisBase.prototype.f9:
            this.iq();
            break;
        case $.ig.NumericAxisBase.prototype.f7:
            this.ip();
            this.im();
            break
    }
}, ip: function () {
    this.ia().v(this.actualMinimumValue())
}, iq: function () {
    this.ia().w(this.actualMaximumValue())
}, $type: new $.ig.Type("StraightNumericAxisBase", $.ig.NumericAxisBase.prototype.$type)}, true);
$.ig.util.defType("NumericXAxis", "StraightNumericAxisBase", {dl: function () {
    return new $.ig.NumericXAxisView(this)
}, dp: function (b) {
    $.ig.StraightNumericAxisBase.prototype.dp.call(this, b);
    this.iv(b)
}, _iv: null, iv: function (b) {
    if (arguments.length === 1) {
        this._iv = b;
        return b
    } else {
        return this._iv
    }
}, init: function () {
    $.ig.StraightNumericAxisBase.prototype.init.call(this);
    this.g3(this.hm())
}, dr: function () {
    return new $.ig.HorizontalAxisLabelPanel()
}, hm: function () {
    var b = this;
    var c = $.ig.NumericAxisBase.prototype.hm.call(this);
    c.az().k(function (a) {
        if ((b.labelSettings() == null || b.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && b.crossingAxis() != null) {
            b.c6().bx(a);
            if (b.labelSettings() != null && (b.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || b.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
                b.seriesViewer().ic()
            }
        }
    });
    c.ar(function (a, f, g) {
        b.ep(f, g, a.r())
    });
    c.aq(function (a, d, e, j) {
        b.eo(d, e, j, a.r())
    });
    c.ap(function (a, d) {
        var e = new $.ig.ScalerParams(a.s(), a.r(), b.c1());
        return b.getScaledValue(d, e)
    });
    c.as(function (a, d) {
        return true
    });
    c.au(function (a) {
        b.en(a.z(), a.ac(), a.r())
    });
    c.av(function (a) {
        a.ac(a.r().bottom());
        var d = new $.ig.ScalerParams(a.s(), a.r(), b.c1());
        if (b.crossingAxis() != null && b.crossingAxis().seriesViewer() != null) {
            a.ac(b.crossingValue());
            a.ac(b.crossingAxis().getScaledValue(a.ac(), d));
            var e = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, b.crossingAxis());
            if (e != null && e.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                var f = 0.5 * e.getCategorySize(a.s(), a.r());
                if (!e.isInverted()) {
                    f = -f
                }
                a.ac(a.ac() + f)
            }
            if (a.ac() < a.r().top()) {
                a.ac(a.r().top())
            } else {
                if (a.ac() > a.r().bottom()) {
                    a.ac(a.r().bottom())
                }
            }
        }
    });
    c.aw(function (a, d, e) {
        var f = Math.round(d);
        return f >= Math.floor(a.r().left()) && f <= Math.ceil(a.r().right())
    });
    return c
}, getScaledValue: function (c, d) {
    if (this.h5 != null) {
        return this.h5.ac(c, d)
    }
    return this.ia().ac(c, d)
}, getUnscaledValue: function (c, d) {
    if (this.h5 != null) {
        return this.h5.ab(c, d)
    }
    return this.ia().ab(c, d)
}, getScaledValueList: function (e, f, g, h) {
    if (this.h5 != null) {
        this.h5.ae(e, f, g, h);
        return
    }
    this.ia().ae(e, f, g, h)
}, getUnscaledValueList: function (e, f, g, h) {
    if (this.h5 != null) {
        this.h5.ad(e, f, g, h);
        return
    }
    this.ia().ad(e, f, g, h)
}, hq: function (j, k) {
    var i = this;
    var l = $.ig.NumericAxisBase.prototype.hq.call(this, j, k);
    var m = new $.ig.ScalerParams(k, j, this.isInverted());
    var n = NaN;
    var o = NaN;
    if (!this.isInverted() && k.right() == 1) {
        o = this.actualMaximumValue()
    } else {
        if (this.isInverted() && k.left() == 0) {
            n = this.actualMaximumValue()
        }
    }
    if (isNaN(n)) {
        n = this.getUnscaledValue(j.left(), m)
    }
    if (isNaN(o)) {
        o = this.getUnscaledValue(j.right(), m)
    }
    var p = Math.min(n, o);
    var q = Math.max(n, o);
    l.t().add((function () {
        var a = new $.ig.RangeInfo();
        a.f(p);
        a.g(q);
        a.i(j.width());
        return a
    }()));
    return l
}, ey: function (d) {
    var e = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var f = !e.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    this.g3().ca(d, f, e)
}, d9: function (c, d) {
    $.ig.Axis.prototype.d9.call(this, c, d);
    if (d.height() != c.height()) {
        this.updateRange()
    }
}, dd: function () {
    return $.ig.AxisOrientation.prototype.horizontal
}, hp: function () {
    if (this.isLogarithmic()) {
        return new $.ig.HorizontalLogarithmicScaler()
    }
    switch (this.scaleMode()) {
        case $.ig.NumericScaleMode.prototype.linear:
            return new $.ig.HorizontalLinearScaler();
        case $.ig.NumericScaleMode.prototype.logarithmic:
            return new $.ig.HorizontalLogarithmicScaler()
    }
    return null
}, $type: new $.ig.Type("NumericXAxis", $.ig.StraightNumericAxisBase.prototype.$type, [$.ig.IScaler.prototype.$type])}, true);
$.ig.util.defType("StraightNumericAxisBaseView", "NumericAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.NumericAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, br: function () {
    this.bo().ia().w(this.bo().actualMaximumValue());
    this.bo().ia().v(this.bo().actualMinimumValue())
}, $type: new $.ig.Type("StraightNumericAxisBaseView", $.ig.NumericAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("NumericXAxisView", "StraightNumericAxisBaseView", {_bt: null, bt: function (b) {
    if (arguments.length === 1) {
        this._bt = b;
        return b
    } else {
        return this._bt
    }
}, init: function (b) {
    $.ig.StraightNumericAxisBaseView.prototype.init.call(this, b);
    this.bt(b)
}, $type: new $.ig.Type("NumericXAxisView", $.ig.StraightNumericAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("NumericYAxis", "StraightNumericAxisBase", {dl: function () {
    return new $.ig.NumericYAxisView(this)
}, init: function () {
    $.ig.StraightNumericAxisBase.prototype.init.call(this);
    this.g3(this.hm())
}, dr: function () {
    return new $.ig.VerticalAxisLabelPanel()
}, getScaledValue: function (c, d) {
    if (this.h5 != null) {
        return this.h5.ac(c, d)
    }
    return this.ia().ac(c, d)
}, getScaledValueList: function (e, f, g, h) {
    if (this.h5 != null) {
        this.h5.ae(e, f, g, h);
        return
    }
    this.ia().ae(e, f, g, h)
}, getUnscaledValue: function (c, d) {
    if (this.h5 != null) {
        return this.h5.ab(c, d)
    }
    return this.ia().ab(c, d)
}, getUnscaledValueList: function (e, f, g, h) {
    if (this.h5 != null) {
        this.h5.ad(e, f, g, h);
        return
    }
    this.ia().ad(e, f, g, h)
}, hm: function () {
    var b = this;
    var c = $.ig.NumericAxisBase.prototype.hm.call(this);
    c.az().k(function (a) {
        if (b.labelSettings() == null || b.labelSettings().visibility() == $.ig.Visibility.prototype.visible) {
            b.c6().bx(a);
            if (b.labelSettings() != null && (b.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideRight || b.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideLeft)) {
                b.seriesViewer().ic()
            }
        }
    });
    c.ar(function (a, f, g) {
        b.en(f, g, a.r())
    });
    c.aq(function (a, d, e, j) {
        b.em(d, e, j, a.r())
    });
    c.ap(function (a, d) {
        var e = new $.ig.ScalerParams(a.s(), a.r(), b.c1());
        return b.getScaledValue(d, e)
    });
    c.as(function (a, d) {
        return true
    });
    c.au(function (a) {
        b.ep(a.z(), a.ac(), a.r())
    });
    c.av(function (a) {
        a.ac(a.r().left());
        var d = new $.ig.ScalerParams(a.s(), a.r(), b.c1());
        if (b.crossingAxis() != null && b.crossingAxis().seriesViewer() != null) {
            a.ac(b.crossingValue());
            a.ac(b.crossingAxis().getScaledValue(a.ac(), d));
            var e = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, b.crossingAxis());
            if (e != null && e.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                var f = 0.5 * e.getCategorySize(a.s(), a.r());
                if (e.isInverted()) {
                    f = -f
                }
                a.ac(a.ac() + f)
            }
            if (a.ac() < a.r().left()) {
                a.ac(a.r().left())
            } else {
                if (a.ac() > a.r().right()) {
                    a.ac(a.r().right())
                }
            }
        }
    });
    c.aw(function (a, d, e) {
        var f = Math.round(d);
        return f >= Math.floor(a.r().top()) && f <= Math.ceil(a.r().bottom())
    });
    return c
}, hq: function (k, l) {
    var j = this;
    var m = $.ig.NumericAxisBase.prototype.hq.call(this, k, l);
    var n = new $.ig.ScalerParams(l, k, this.isInverted());
    var o = NaN;
    var p = NaN;
    if (!this.isInverted() && l.top() == 0) {
        p = this.actualMaximumValue()
    } else {
        if (this.isInverted() && l.bottom() == 1) {
            o = this.actualMaximumValue()
        }
    }
    if (isNaN(o)) {
        o = this.getUnscaledValue(k.bottom(), n)
    }
    if (isNaN(p)) {
        p = this.getUnscaledValue(k.top(), n)
    }
    var q = Math.min(o, p);
    var r = Math.max(o, p);
    var s = (function () {
        var a = new $.ig.RangeInfo();
        a.f(q);
        a.g(r);
        a.i(k.height());
        return a
    }());
    m.t().add(s);
    return m
}, ey: function (d) {
    var e = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var f = this.c2();
    this.g3().ca(d, f, e)
}, d9: function (c, d) {
    $.ig.Axis.prototype.d9.call(this, c, d);
    if (d.height() != c.height()) {
        this.updateRange()
    }
}, dd: function () {
    return $.ig.AxisOrientation.prototype.vertical
}, hp: function () {
    if (this.isLogarithmic()) {
        return new $.ig.VerticalLogarithmicScaler()
    }
    switch (this.scaleMode()) {
        case $.ig.NumericScaleMode.prototype.linear:
            return new $.ig.VerticalLinearScaler();
        case $.ig.NumericScaleMode.prototype.logarithmic:
            return new $.ig.VerticalLogarithmicScaler()
    }
    return null
}, ig: function () {
    return new $.ig.VerticalLinearScaler()
}, $type: new $.ig.Type("NumericYAxis", $.ig.StraightNumericAxisBase.prototype.$type, [$.ig.IScaler.prototype.$type])}, true);
$.ig.util.defType("NumericYAxisView", "StraightNumericAxisBaseView", {init: function (b) {
    $.ig.StraightNumericAxisBaseView.prototype.init.call(this, b);
    this.bt(b)
}, _bt: null, bt: function (b) {
    if (arguments.length === 1) {
        this._bt = b;
        return b
    } else {
        return this._bt
    }
}, $type: new $.ig.Type("NumericYAxisView", $.ig.StraightNumericAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("NumericAxisRenderingParameters", "AxisRenderingParametersBase", {init: function () {
    $.ig.AxisRenderingParametersBase.prototype.init.call(this)
}, $type: new $.ig.Type("NumericAxisRenderingParameters", $.ig.AxisRenderingParametersBase.prototype.$type)}, true);
$.ig.util.defType("NumericAxisRenderer", "AxisRendererBase", {init: function (b) {
    $.ig.AxisRendererBase.prototype.init.call(this, b)
}, ch: function (f, g, h, i) {
    var j;
    if (f.ad() != null) {
        j = this.a0()(g)
    } else {
        g = Math.round(g * 1000000) / 1000000;
        j = g.toString()
    }
    return j
}, $type: new $.ig.Type("NumericAxisRenderer", $.ig.AxisRendererBase.prototype.$type)}, true);
$.ig.util.defType("RangeInfo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.h(-1);
    this.j(-1)
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, $type: new $.ig.Type("RangeInfo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("NumericScaler", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, q: function (f, g, h, i, j) {
    return{actualMinimumValue: i, actualMaximumValue: j}
}, n: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericScaler.prototype.g, b);
        return b
    } else {
        return this.b($.ig.NumericScaler.prototype.g)
    }
}, o: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericScaler.prototype.h, b);
        return b
    } else {
        return this.b($.ig.NumericScaler.prototype.h)
    }
}, i: null, j: null, v: function (b) {
    this.n(b)
}, w: function (b) {
    this.o(b)
}, x: function (d, e, f) {
    switch (d) {
        case $.ig.NumericScaler.prototype.e:
            this.i = this.n();
            this.y();
            break;
        case $.ig.NumericScaler.prototype.f:
            this.j = this.o();
            this.y();
            break
    }
}, y: function () {
    if (isNaN(this.n()) || isNaN(this.o()) || Number.isInfinity(this.n()) || Number.isInfinity(this.o()) || this.n() < ($.ig.Number.prototype.MIN_VALUE) || this.o() > ($.ig.Number.prototype.MAX_VALUE)) {
        this.p(this.o() - this.n())
    } else {
        this.p(this.o() - this.n())
    }
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, ab: function (c, d) {
}, ac: function (c, d) {
}, ad: function (g, h, i, j) {
    var k = new $.ig.List$1(Number, 2, g.count());
    for (var l = h; l < i; l++) {
        k.add(this.ab(g.item(l), j))
    }
    return k
}, ae: function (f, g, h, i) {
    for (var j = g; j < h; j++) {
        f.item(j, this.ac(f.item(j), i))
    }
}, $type: new $.ig.Type("NumericScaler", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("LinearScaler", "NumericScaler", {init: function () {
    $.ig.NumericScaler.prototype.init.call(this)
}, q: function (g, h, i, j, k) {
    var f = this;
    (function () {
        var a = $.ig.AutoRangeCalculator.prototype.c(g, h, i, false, -1, j, k);
        j = a.minimumValue;
        k = a.maximumValue;
        return a.ret
    }());
    return{actualMinimumValue: j, actualMaximumValue: k}
}, $type: new $.ig.Type("LinearScaler", $.ig.NumericScaler.prototype.$type)}, true);
$.ig.util.defType("HorizontalLinearScaler", "LinearScaler", {init: function () {
    $.ig.LinearScaler.prototype.init.call(this)
}, ab: function (c, d) {
    return this.ah(c, d.a, d.b, d.d)
}, ac: function (c, d) {
    return this.ai(c, d.a, d.b, d.d)
}, ah: function (f, g, h, i) {
    var j = g.left() + g.width() * (f - h.left()) / h.width();
    if (i) {
        j = 1 - j
    }
    return this.i + j * (this.p())
}, ai: function (f, g, h, i) {
    var j = (f - this.i) / (this.p());
    if (i) {
        j = 1 - j
    }
    return h.left() + h.width() * (j - g.left()) / g.width()
}, $type: new $.ig.Type("HorizontalLinearScaler", $.ig.LinearScaler.prototype.$type)}, true);
$.ig.util.defType("LogarithmicScaler", "NumericScaler", {init: function () {
    $.ig.NumericScaler.prototype.init.call(this)
}, _aj: null, aj: function (b) {
    if (arguments.length === 1) {
        this._aj = b;
        return b
    } else {
        return this._aj
    }
}, _ak: null, ak: function (b) {
    if (arguments.length === 1) {
        this._ak = b;
        return b
    } else {
        return this._ak
    }
}, x: function (d, e, f) {
    $.ig.NumericScaler.prototype.x.call(this, d, e, f);
    switch (d) {
        case $.ig.LogarithmicScaler.prototype.e:
            this.aj(Math.log(this.n()));
            break;
        case $.ig.LogarithmicScaler.prototype.f:
            this.ak(Math.log(this.o()));
            break
    }
}, q: function (g, h, i, j, k) {
    var f = this;
    (function () {
        var a = $.ig.AutoRangeCalculator.prototype.c(g, h, i, true, g.logarithmBase(), j, k);
        j = a.minimumValue;
        k = a.maximumValue;
        return a.ret
    }());
    return{actualMinimumValue: j, actualMaximumValue: k}
}, $type: new $.ig.Type("LogarithmicScaler", $.ig.NumericScaler.prototype.$type)}, true);
$.ig.util.defType("HorizontalLogarithmicScaler", "LogarithmicScaler", {init: function () {
    $.ig.LogarithmicScaler.prototype.init.call(this)
}, ab: function (c, d) {
    return this.ap(c, d.a, d.b, d.d)
}, ac: function (c, d) {
    return this.aq(c, d.a, d.b, d.d)
}, ap: function (f, g, h, i) {
    var j = g.left() + g.width() * (f - h.left()) / h.width();
    if (i) {
        j = 1 - j
    }
    return Math.exp(j * (this.ak() - this.aj()) + this.aj())
}, aq: function (f, g, h, i) {
    if (isNaN(f)) {
        return NaN
    }
    var j = 0;
    if (f <= 0) {
        j = (Math.log(this.i) - this.aj()) / (this.ak() - this.aj())
    } else {
        j = (Math.log(f) - this.aj()) / (this.ak() - this.aj())
    }
    if (i) {
        j = 1 - j
    }
    return h.left() + h.width() * (j - g.left()) / g.width()
}, $type: new $.ig.Type("HorizontalLogarithmicScaler", $.ig.LogarithmicScaler.prototype.$type)}, true);
$.ig.util.defType("ScalerParams", "Object", {init: function (d, e, f) {
    $.ig.Object.prototype.init.call(this);
    this.a = d;
    this.b = e;
    this.c = $.ig.Rect.prototype.empty();
    this.d = f
}, a: null, b: null, c: null, d: null, $type: new $.ig.Type("ScalerParams", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("VerticalLinearScaler", "LinearScaler", {init: function () {
    $.ig.LinearScaler.prototype.init.call(this)
}, ab: function (c, d) {
    return this.ai(c, d.a, d.b, d.d)
}, ac: function (c, d) {
    return this.ah(c, d.a, d.b, d.d)
}, ah: function (f, g, h, i) {
    var j = (f - this.i) / (this.p());
    if (!i) {
        j = 1 - j
    }
    return h.top() + h.height() * (j - g.top()) / g.height()
}, ai: function (f, g, h, i) {
    var j = g.top() + g.height() * (f - h.top()) / h.height();
    if (!i) {
        j = 1 - j
    }
    return this.i + j * (this.p())
}, $type: new $.ig.Type("VerticalLinearScaler", $.ig.LinearScaler.prototype.$type)}, true);
$.ig.util.defType("VerticalLogarithmicScaler", "LogarithmicScaler", {init: function () {
    $.ig.LogarithmicScaler.prototype.init.call(this)
}, ab: function (c, d) {
    return this.aq(c, d.a, d.b, d.d)
}, ac: function (c, d) {
    return this.ap(c, d.a, d.b, d.d)
}, ap: function (f, g, h, i) {
    if (isNaN(f)) {
        return NaN
    }
    var j;
    if (f <= 0) {
        j = (Math.log(this.i) - this.aj()) / (this.ak() - this.aj())
    } else {
        j = (Math.log(f) - this.aj()) / (this.ak() - this.aj())
    }
    if (!i) {
        j = 1 - j
    }
    return h.top() + h.height() * (j - g.top()) / g.height()
}, aq: function (f, g, h, i) {
    var j = g.top() + g.height() * (f - h.top()) / h.height();
    if (!i) {
        j = 1 - j
    }
    return Math.exp(j * (this.ak() - this.aj()) + this.aj())
}, $type: new $.ig.Type("VerticalLogarithmicScaler", $.ig.LogarithmicScaler.prototype.$type)}, true);
$.ig.util.defType("TickmarkValues", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, o: function (b) {
    this.j(b.s())
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, x: function () {
}, y: function () {
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, $type: new $.ig.Type("TickmarkValues", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("LinearTickmarkValues", "TickmarkValues", {init: function () {
    $.ig.TickmarkValues.prototype.init.call(this);
    this.ad(0)
}, _ad: null, ad: function (b) {
    if (arguments.length === 1) {
        this._ad = b;
        return b
    } else {
        return this._ad
    }
}, o: function (c) {
    $.ig.TickmarkValues.prototype.o.call(this, c);
    var d;
    if (this.ad() != 0) {
        d = new $.ig.LinearNumericSnapper(1, c.r(), c.s(), c.v(), this.ad())
    } else {
        d = new $.ig.LinearNumericSnapper(0, c.r(), c.s(), c.v())
    }
    this.k(d.h());
    if ((c.w()) && c.x() > 0 && (c.s() - c.r()) / c.x() < 1000) {
        this.k(c.x())
    }
    if (c.y() != -1) {
        this.k(c.y())
    }
    this.l(Math.floor((c.r() - c.t()) / this.k()));
    this.m(Math.ceil((c.s() - c.t()) / this.k()));
    this.n(d.j());
    if (c.z() != -1) {
        this.n(c.z())
    }
    this.ae(c.t())
}, _ae: null, ae: function (b) {
    if (arguments.length === 1) {
        this._ae = b;
        return b
    } else {
        return this._ae
    }
}, x: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            if (isNaN(this.$this.k())) {
                                this.$state = 2
                            } else {
                                this.$state = 4
                            }
                            break;
                        case 2:
                            this.$state = -2;
                            return false;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            this.$a = this.$this.l();
                            this.$state = 9;
                            break;
                        case 6:
                            this.$b = this.$this.ae() + this.$a * this.$this.k();
                            this.$current = this.$b;
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            ++this.$a;
                            this.$state = 9;
                            break;
                        case 9:
                            if (this.$a <= this.$this.m()) {
                                this.$state = 6
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, y: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$a = this.$this.l();
                            this.$state = 13;
                            break;
                        case 2:
                            this.$state = 3;
                            break;
                        case 3:
                            this.$b = 1;
                            this.$state = 10;
                            break;
                        case 4:
                            this.$c = this.$this.ae() + this.$a * this.$this.k() + (this.$b * this.$this.k() / this.$this.n());
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$c <= this.$this.j()) {
                                this.$state = 6
                            } else {
                                this.$state = 8
                            }
                            break;
                        case 6:
                            this.$current = this.$c;
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            this.$state = 9;
                            break;
                        case 9:
                            ++this.$b;
                            this.$state = 10;
                            break;
                        case 10:
                            if (this.$b < this.$this.n()) {
                                this.$state = 4
                            } else {
                                this.$state = 11
                            }
                            break;
                        case 11:
                            this.$state = 12;
                            break;
                        case 12:
                            ++this.$a;
                            this.$state = 13;
                            break;
                        case 13:
                            if (this.$a < this.$this.m()) {
                                this.$state = 2
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 14:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, $type: new $.ig.Type("LinearTickmarkValues", $.ig.TickmarkValues.prototype.$type)}, true);
$.ig.util.defType("LogarithmicTickmarkValues", "TickmarkValues", {init: function () {
    $.ig.TickmarkValues.prototype.init.call(this)
}, o: function (c) {
    $.ig.TickmarkValues.prototype.o.call(this, c);
    var d = new $.ig.LogarithmicNumericSnapper(c.r(), c.s(), this.af(), c.v());
    this.k(1);
    this.n(d.h());
    this.l(Math.floor(Math.logBase(Math.max($.ig.LogarithmicTickmarkValues.prototype.ab, c.r()), this.af())));
    this.m(Math.ceil(Math.logBase(Math.max($.ig.LogarithmicTickmarkValues.prototype.ab, c.s()), this.af())))
}, af: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.LogarithmicTickmarkValues.prototype.ad, b);
        return b
    } else {
        return this.b($.ig.LogarithmicTickmarkValues.prototype.ad)
    }
}, ai: function (c) {
    var d = c * this.k();
    return Math.pow(this.af(), d)
}, x: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$a = this.$this.l();
                            this.$state = 8;
                            break;
                        case 2:
                            this.$b = this.$this.ai(this.$a);
                            this.$state = 3;
                            break;
                        case 3:
                            if (this.$b <= this.$this.j()) {
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
                            ++this.$a;
                            this.$state = 8;
                            break;
                        case 8:
                            if (this.$a <= this.$this.m()) {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, y: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$a = this.$this.l();
                            this.$state = 13;
                            break;
                        case 2:
                            this.$b = this.$this.ai(this.$a);
                            this.$c = Math.pow(this.$this.af(), this.$a);
                            this.$state = 3;
                            break;
                        case 3:
                            this.$d = 1;
                            this.$state = 10;
                            break;
                        case 4:
                            this.$e = this.$b + this.$d * this.$c;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$e <= this.$this.j()) {
                                this.$state = 6
                            } else {
                                this.$state = 8
                            }
                            break;
                        case 6:
                            this.$current = this.$e;
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            this.$state = 9;
                            break;
                        case 9:
                            ++this.$d;
                            this.$state = 10;
                            break;
                        case 10:
                            if (this.$d < this.$this.n() - 1) {
                                this.$state = 4
                            } else {
                                this.$state = 11
                            }
                            break;
                        case 11:
                            this.$state = 12;
                            break;
                        case 12:
                            ++this.$a;
                            this.$state = 13;
                            break;
                        case 13:
                            if (this.$a <= this.$this.m()) {
                                this.$state = 2
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 14:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, $type: new $.ig.Type("LogarithmicTickmarkValues", $.ig.TickmarkValues.prototype.$type)}, true);
$.ig.util.defType("TickmarkValuesInitializationParameters", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, _u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, _y: null, y: function (b) {
    if (arguments.length === 1) {
        this._y = b;
        return b
    } else {
        return this._y
    }
}, _z: null, z: function (b) {
    if (arguments.length === 1) {
        this._z = b;
        return b
    } else {
        return this._z
    }
}, _aa: null, aa: function (b) {
    if (arguments.length === 1) {
        this._aa = b;
        return b
    } else {
        return this._aa
    }
}, _ab: null, ab: function (b) {
    if (arguments.length === 1) {
        this._ab = b;
        return b
    } else {
        return this._ab
    }
}, _ac: null, ac: function (b) {
    if (arguments.length === 1) {
        this._ac = b;
        return b
    } else {
        return this._ac
    }
}, _ad: null, ad: function (b) {
    if (arguments.length === 1) {
        this._ad = b;
        return b
    } else {
        return this._ad
    }
}, _ae: null, ae: function (b) {
    if (arguments.length === 1) {
        this._ae = b;
        return b
    } else {
        return this._ae
    }
}, _af: null, af: function (b) {
    if (arguments.length === 1) {
        this._af = b;
        return b
    } else {
        return this._af
    }
}, _ag: null, ag: function (b) {
    if (arguments.length === 1) {
        this._ag = b;
        return b
    } else {
        return this._ag
    }
}, _ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, $type: new $.ig.Type("TickmarkValuesInitializationParameters", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("FramePreparer", "Object", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.FramePreparer.prototype.init1.call(this, 1, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, b), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, b), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, b))
}, init1: function (g, d, e, f) {
    $.ig.Object.prototype.init.call(this);
    this.e(new $.ig.DefaultSupportsMarkers());
    this.f(new $.ig.DefaultProvidesViewport());
    this.d(new $.ig.DefaultSupportsErrorBars());
    if (d != null) {
        this.e(d)
    }
    if (e != null) {
        this.f(e)
    }
    if (f != null) {
        this.d(f)
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, m: function (c, d) {
}, $type: new $.ig.Type("FramePreparer", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryFramePreparerBase", "FramePreparer", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.CategoryFramePreparerBase.prototype.init1.call(this, 1, b, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, b), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, b), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, b), $.ig.util.cast($.ig.IBucketizer.prototype.$type, b))
}, init1: function (k, f, g, h, i, j) {
    $.ig.FramePreparer.prototype.init1.call(this, 1, g, h, i);
    this.q(f);
    this.p(j)
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, _q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, v: function (f, g, h, i, j) {
}, w: function (j) {
    var i = this;
    var k = new $.ig.PreparationParams();
    k.r(this.q().scaler());
    k.t(this.q().yScaler());
    k.s($.ig.util.cast($.ig.ISortingAxis.prototype.$type, k.r()));
    k.u($.ig.util.cast($.ig.CategoryFrame.prototype.$type, j));
    if (k.u() == null || k.r() == null || k.t() == null) {
        return null
    }
    var l;
    var m;
    var n;
    var o;
    (function () {
        var a = i.p().getBucketInfo(l, m, n, o);
        l = a.firstBucket;
        m = a.lastBucket;
        n = a.bucketSize;
        o = a.resolution;
        return a.ret
    }());
    k.l(l);
    k.m(m);
    k.n(n);
    k.o(o);
    if (k.m() < k.l()) {
        return null
    }
    var p;
    var q;
    (function () {
        var a = i.f().getViewInfo(q, p);
        q = a.viewportRect;
        p = a.windowRect;
        return a.ret
    }());
    k.p(p);
    k.q(q);
    if (k.p() == $.ig.Rect.prototype.empty() || k.q() == $.ig.Rect.prototype.empty()) {
        return null
    }
    return k
}, x: function (f, g, h) {
    var i = this.q().currentCategoryMode();
    var j = 0;
    if (i == $.ig.CategoryMode.prototype.mode0 && f.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
        i = $.ig.CategoryMode.prototype.mode1
    }
    switch (i) {
        case $.ig.CategoryMode.prototype.mode0:
            j = 0;
            break;
        case $.ig.CategoryMode.prototype.mode1:
            j = 0.5 * f.getCategorySize(g, h);
            break;
        case $.ig.CategoryMode.prototype.mode2:
            j = f.getGroupCenter(this.q().currentMode2Index(), g, h);
            break
    }
    if ($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, f) !== null) {
        if (!f.isInverted()) {
            j = -j
        }
    } else {
        if (f.isInverted()) {
            j = -j
        }
    }
    return j
}, y: function (b) {
    return this.x(b.r(), b.p(), b.q())
}, m: function (i, j) {
    var k = this.w(i);
    if (k == null || this.p() == null) {
        return
    }
    k.u().d.clear();
    k.u().e.clear();
    k.u().f.clear();
    k.u().g.clear();
    k.u().h.clear();
    k.u().i.clear();
    var l = this.e().shouldDisplayMarkers();
    var m = false;
    var n = this.y(k);
    var o = this.aj(k);
    if (k.s() != null && k.s().sortedIndices().count() != o.e()) {
        return
    }
    if (k.s() != null && $.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, k.s()) !== null) {
        (k.s()).h6()
    }
    this.ai(k, o, n);
    var p = this.ab(k, o, n, l, m);
    this.e().updateMarkerCount(p);
    this.aa($.ig.util.cast($.ig.CategoryFrame.prototype.$type, i), j);
    return
}, z: function (b) {
    return b
}, aa: function (c, d) {
}, ab: function (w, x, y, z, A) {
    var v = this;
    var B = 0;
    var C = false;
    var D = null;
    var E = false;
    var F = w.s() != null;
    var G = w.p();
    var H = w.q();
    var I = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, w.t()) !== null && ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, w.t())).g1();
    var J = this.q().provideCollisionDetector();
    var K = 0;
    var L = new $.ig.ScalerParams(G, H, w.r().isInverted());
    var M = new $.ig.ScalerParams(G, H, w.t().isInverted());
    if (F) {
        K = this.z(w.r().getUnscaledValue(2, L) - w.r().getUnscaledValue(1, L));
        E = this.ac()
    }
    this.p().cacheValues();
    for (var N = w.l(); N <= w.m(); ++N) {
        var O;
        if (!F) {
            O = this.p().getBucket(N)
        } else {
            O = (function () {
                var a = v.ag(w, N, x, K, C, D, y);
                N = a.currentIndex;
                C = a.isCluster;
                D = a.endBucket;
                return a.ret
            }())
        }
        var P = !I || (I && O[1] > 0);
        if (!isNaN(O[0])) {
            this.ah(w, O, y, F, L, M);
            w.u().d.add(O);
            if (C && E) {
                if (D != null) {
                    this.ah(w, D, y, F, L, M);
                    w.u().d.add(D)
                }
            }
            if (z && P) {
                var Q = N * w.n();
                if (F && w.s().sortedIndices() != null && Q >= 0 && Q < w.s().sortedIndices().count()) {
                    Q = w.s().sortedIndices().__inner[Q]
                }
                if (this.v(w.u(), O, J, Math.min(Q, x.e() - 1), B)) {
                    ++B
                }
            }
        }
    }
    this.p().unCacheValues();
    return B
}, ac: function () {
    var b = $.ig.util.cast($.ig.LineSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.SplineSeriesBase.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.AreaSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.StepLineSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.StepAreaSeries.prototype.$type, this.q()) !== null || $.ig.util.cast($.ig.RangeAreaSeries.prototype.$type, this.q()) !== null;
    return b
}, ad: function (e, f, g, h) {
}, ae: function (d, e, f) {
}, af: function (c, d) {
}, ag: function (y, z, A, B, C, D, E) {
    var x = this;
    var F;
    D = null;
    C = false;
    var G = $.ig.util.cast($.ig.CategorySeries.prototype.$type, this.q());
    var H = $.ig.util.cast($.ig.RangeCategorySeries.prototype.$type, this.q());
    var I = $.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, this.q());
    var J = y.q();
    var K = y.p();
    var L = new $.ig.ScalerParams(K, J, y.r().isInverted());
    var M = new $.ig.ScalerParams(K, J, y.t().isInverted());
    var N = y.v();
    if (y.s() == null || y.s().sortedIndices() == null || y.s().sortedIndices().count() == 0) {
        return{ret: (function () {
            var a = new Array();
            a.add(NaN);
            a.add(NaN);
            a.add(NaN);
            return a
        }()), currentIndex: z, isCluster: C, endBucket: D}
    }
    if (G != null && G.dx() != null && G.dx().g() < y.s().sortedIndices().count()) {
        return{ret: (function () {
            var a = new Array();
            a.add(NaN);
            a.add(NaN);
            a.add(NaN);
            return a
        }()), currentIndex: z, isCluster: C, endBucket: D}
    }
    var O = y.s().sortedIndices().__inner[z];
    var P = y.s().getUnscaledValueAt(O);
    var Q = P;
    this.ad(A, O, false, N);
    while (z < y.m()) {
        O = y.s().sortedIndices().__inner[z + 1];
        Q = y.s().getUnscaledValueAt(O);
        this.ad(A, O, true, N);
        if (Q - P >= B || isNaN(A.h()) || isNaN(A.i())) {
            if (C) {
                var R = y.s().sortedIndices().__inner[z];
                this.ad(A, R, true, N);
                D = (function () {
                    var a = new Array();
                    a.add(y.r().getScaledValue(P + B, L));
                    a.add(A.h());
                    a.add(A.i());
                    return a
                }())
            }
            break
        }
        if (!C && this.ac()) {
            var S = y.s().sortedIndices().__inner[z];
            this.ad(A, S, true, N);
            var T = (function () {
                var a = new Array();
                a.add(y.r().getScaledValue(P, L));
                a.add(A.h());
                a.add(A.i());
                return a
            }());
            if (!isNaN(T[0])) {
                if (!isNaN(T[1]) && !isNaN(T[2])) {
                    this.ah(y, T, E, y.s() != null, L, M);
                    y.u().d.add(T);
                    C = true
                } else {
                    break
                }
            }
        }
        z++;
        this.ae(A, O, N)
    }
    var U = NaN;
    if (!isNaN(P)) {
        U = y.r().getScaledValue(P, L)
    }
    F = this.af(U, A);
    return{ret: F, currentIndex: z, isCluster: C, endBucket: D};
    return{currentIndex: z, isCluster: C, endBucket: D}
}, ah: function (g, h, i, j, k, l) {
}, ai: function (d, e, f) {
}, aj: function (b) {
}, $type: new $.ig.Type("CategoryFramePreparerBase", $.ig.FramePreparer.prototype.$type)}, true);
$.ig.util.defType("CategoryFramePreparer", "CategoryFramePreparerBase", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.CategoryFramePreparer.prototype.init1.call(this, 1, b, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, b), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, b), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, b), $.ig.util.cast($.ig.IBucketizer.prototype.$type, b))
}, init1: function (k, f, g, h, i, j) {
    $.ig.CategoryFramePreparerBase.prototype.init1.call(this, 1, f, g, h, i, j);
    this.am(new $.ig.DefaultCategoryTrendlineHost());
    if ($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, f) !== null) {
        this.am($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, f))
    }
    this.an(new $.ig.DefaultSingleValueProvider());
    if ($.ig.util.cast($.ig.IHasSingleValueCategory.prototype.$type, f) !== null) {
        this.an($.ig.util.cast($.ig.IHasSingleValueCategory.prototype.$type, f))
    }
}, _am: null, am: function (b) {
    if (arguments.length === 1) {
        this._am = b;
        return b
    } else {
        return this._am
    }
}, _an: null, an: function (b) {
    if (arguments.length === 1) {
        this._an = b;
        return b
    } else {
        return this._an
    }
}, v: function (i, j, k, l, m) {
    var n = j[0];
    var o = j[1];
    var p = new $.ig.Rect(0, n - 5, o - 5, 11, 11);
    if (!isNaN(n) && !isNaN(o) && !Number.isInfinity(n) && !Number.isInfinity(o) && k.tryAdd(p)) {
        i.f.add({__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.e().updateMarkerTemplate(m, l);
        return true
    }
    return false
}, aj: function (d) {
    var e = new $.ig.SingleValuesHolder();
    var f = this.an().valueColumn();
    e.t(f);
    return e
}, ah: function (g, h, i, j, k, l) {
    if (j) {
        h[0] = (h[0] + i)
    } else {
        h[0] = (g.r().getScaledValue(h[0], k) + i)
    }
    h[1] = g.t().getScaledValue(h[1], l);
    if (g.n() > 1 || j) {
        h[2] = g.t().getScaledValue(h[2], l)
    } else {
        h[2] = h[1]
    }
}, ai: function (i, j, k) {
    var h = this;
    if (this.am().trendLineType() == $.ig.TrendLineType.prototype.none || this.am().trendlinePreparer() == null || this.am().trendLinePeriod() < 1) {
        return
    }
    var l = new $.ig.ScalerParams(i.p(), i.q(), i.r().isInverted());
    var m = new $.ig.ScalerParams(i.p(), i.q(), i.t().isInverted());
    var n = (j).t();
    if (i.s() != null && i.s().sortedIndices() != null) {
        n = new $.ig.SafeSortedReadOnlyDoubleCollection(n, i.s().sortedIndices())
    }
    var o = (function () {
        var a = new $.ig.TrendResolutionParams();
        a.j(i.n());
        a.h(i.l());
        a.i(i.m());
        a.n(k);
        a.m(i.o());
        a.k(i.q());
        return a
    }());
    if (this.am().trendLineType() != $.ig.TrendLineType.prototype.none) {
        if ($.ig.util.cast($.ig.IBarSeries.prototype.$type, this.am()) !== null) {
            this.am().trendlinePreparer().prepareLine(i.u().g, this.am().trendLineType(), n, this.am().trendLinePeriod(), function (a) {
                return i.t().getScaledValue(a, m)
            }, function (a) {
                return i.r().getScaledValue(a, l)
            }, o)
        } else {
            this.am().trendlinePreparer().prepareLine(i.u().g, this.am().trendLineType(), n, this.am().trendLinePeriod(), function (a) {
                return i.r().getScaledValue(a, l)
            }, function (a) {
                return i.t().getScaledValue(a, m)
            }, o)
        }
    }
}, ad: function (i, j, k, l) {
    var m = i;
    var n = m.t();
    var o = this.z(n.item(j));
    var p = o;
    if (k) {
        m.h(o);
        m.i(p)
    } else {
        m.f(o);
        m.g(p)
    }
}, ae: function (g, h, i) {
    var j = g;
    var k = j.t();
    if (h < k.count()) {
        var l;
        l = this.z(k.item(h));
        j.f(Math.min(j.f(), l));
        j.g(Math.max(j.g(), l))
    }
}, af: function (e, f) {
    var d = this;
    var g = f;
    return(function () {
        var a = new Array();
        a.add(d.z(e));
        a.add(g.f());
        a.add(g.g());
        return a
    }())
}, $type: new $.ig.Type("CategoryFramePreparer", $.ig.CategoryFramePreparerBase.prototype.$type)}, true);
$.ig.util.defType("IPreparesCategoryTrendline", "Object", {$type: new $.ig.Type("IPreparesCategoryTrendline", null)}, true);
$.ig.util.defType("BrushScale", "DependencyObject", {init: function () {
    var a = this;
    this.e = null;
    $.ig.DependencyObject.prototype.init.call(this);
    this.i(new $.ig.List$1($.ig.Series.prototype.$type, 0));
    this.brushes(new $.ig.BrushCollection());
    this.brushes().collectionChanged = $.ig.Delegate.prototype.combine(this.brushes().collectionChanged, this.j.on(this));
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (c, d) {
        return a.o(c, d.propertyName(), d.oldValue(), d.newValue())
    })
}, j: function (e, f) {
    var h = this.i().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.renderSeries(false);
        g.e5()
    }
}, brushes: function (d) {
    if (arguments.length === 1) {
        if (this.e != null) {
            this.e.collectionChanged = $.ig.Delegate.prototype.remove(this.e.collectionChanged, this.j.on(this))
        }
        this.e = d;
        if (this.e != null) {
            this.e.collectionChanged = $.ig.Delegate.prototype.combine(this.e.collectionChanged, this.j.on(this))
        }
        var f = this.i().getEnumerator();
        while (f.moveNext()) {
            var e = f.current();
            e.renderSeries(false);
            e.e5()
        }
        return d
    } else {
        return this.e
    }
}, e: null, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, registerSeries: function (b) {
    if (!this.i().contains(b)) {
        this.i().add(b)
    }
}, unregisterSeries: function (b) {
    if (this.i().contains(b)) {
        this.i().remove(b)
    }
}, getBrush: function (b) {
    if (this.brushes() == null || b < 0 || b >= this.brushes().count()) {
        return null
    }
    return this.brushes().item(b)
}, m: function (b) {
    if (this.brushes() == null || this.brushes().count() == 0 || b < 0) {
        return null
    }
    return this.brushes().ap(b)
}, propertyChanged: null, propertyUpdated: null, n: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, o: function (g, h, i, j) {
    var l = this.i().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        k.renderSeries(false);
        k.e5()
    }
}, $type: new $.ig.Type("BrushScale", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("IProvidesViewport", "Object", {$type: new $.ig.Type("IProvidesViewport", null)}, true);
$.ig.util.defType("Series", "Control", {_view: null, view: function (b) {
    if (arguments.length === 1) {
        this._view = b;
        return b
    } else {
        return this._view
    }
}, init: function () {
    var a = this;
    this.ce = true;
    this.cp = new $.ig.SeriesComponentsForView();
    $.ig.Control.prototype.init.call(this);
    this.dv(true);
    this.view(this.ed());
    this.view().ab($.ig.Rect.prototype.empty());
    this.ea(this.view());
    this.view().ag();
    this.a3($.ig.Series.prototype.$type);
    this.cj = function (c, d) {
        a.ey(d.oldRect(), d.newRect())
    };
    this.ci = function (b, e) {
        a.e6(b, e.propertyName(), e.oldValue(), e.newValue())
    };
    this.cl = function (b, c) {
        if (a.seriesViewer() != null) {
            a.dv(true);
            a.seriesViewer().i7()
        }
        a.fc(c.action(), c.position(), c.count(), c.propertyName())
    };
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (b, c) {
        a.e6(b, c.propertyName(), c.oldValue(), c.newValue())
    });
    this.rootCanvas(new $.ig.Canvas());
    this.dr(new $.ig.DoubleAnimator(0, 1, this.transitionDuration()));
    this.dr().propertyChanged = $.ig.Delegate.prototype.combine(this.dr().propertyChanged, this.d7.on(this));
    this.d($.ig.Series.prototype.cb, (function () {
        var b = new $.ig.Binding(1, "Visibility");
        b.d(a);
        return b
    }()))
}, d7: function (c, d) {
    this.dz(this.dr().k())
}, _dr: null, dr: function (b) {
    if (arguments.length === 1) {
        this._dr = b;
        return b
    } else {
        return this._dr
    }
}, ea: function (b) {
}, eb: function () {
    this.gh(this.actualLegend(), this.actualLegend());
    if (this.dx() == null && this.syncLink() != null && this.itemsSource() != null) {
        this.dx(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, this.syncLink())).getFastItemsSource(this.itemsSource()))
    }
}, ec: function () {
    this.gg();
    if (this.dx() != null && this.syncLink() != null && this.itemsSource() != null) {
        this.dx(($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, this.syncLink())).releaseFastItemsSource(this.itemsSource()))
    }
    this.view().ba()
}, ed: function () {
    return new $.ig.SeriesView(this)
}, _rootCanvas: null, rootCanvas: function (b) {
    if (arguments.length === 1) {
        this._rootCanvas = b;
        return b
    } else {
        return this._rootCanvas
    }
}, ef: function () {
    return false
}, eg: function (b) {
    return -1
}, eh: function (b) {
    return null
}, ei: function (c, d) {
    return c.eh(d)
}, propertyChanged: null, propertyUpdated: null, ej: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, ds: function () {
    return false
}, el: function (h, i) {
    var j = this.view().bf(h);
    var k = j != null ? j.item() : null;
    if (k == null) {
        var l = this.view().ab();
        var m = this.view().ac();
        var n = {__x: m.left() + m.width() * (i.__x - l.left()) / l.width(), __y: m.top() + m.height() * (i.__y - l.top()) / l.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        k = this.eh(n)
    }
    return k
}, scrollIntoView: function (b) {
    return false
}, em: function (b) {
    return new $.ig.AxisRange(NaN, NaN)
}, renderSeries: function (b) {
    if (this.seriesViewer() != null) {
        this.seriesViewer().fc().u($.ig.ChartContentType.prototype.series, this, this.du(), b)
    }
}, en: function (b) {
    this.eo(b)
}, eo: function (b) {
}, _dt: null, dt: function (b) {
    if (arguments.length === 1) {
        this._dt = b;
        return b
    } else {
        return this._dt
    }
}, er: function (c, d) {
    if (this.dt() == null) {
        this.dt(this.ed());
        this.dt().ad(true);
        if (this.seriesViewer() != null) {
            this.seriesViewer().fp().m(this.dt())
        }
        this.dt().ag()
    }
    this.dt().ab(c)
}, getViewInfo: function (c, d) {
    c = this.view().ab();
    d = this.view().ac();
    return{viewportRect: c, windowRect: d}
}, es: function (d, e, f) {
    return this.__visibility == $.ig.Visibility.prototype.visible
}, et: function (b) {
    this.eu(b, this.view())
}, eu: function (c, d) {
    if (c) {
        this.dv(true)
    }
}, ev: function () {
    return this.ew(this.view())
}, ew: function (d) {
    var e = d.ab();
    var f = d.ac();
    if (!this.es(e, f, d)) {
        this.eu(true, d);
        return true
    }
    return false
}, ex: function (c, d) {
    this.view().ab(d);
    this.ez(c, d);
    if (this.seriesViewer() != null) {
        this.seriesViewer().fc().ag($.ig.ChartContentType.prototype.series, this, this.du(), d)
    }
}, ey: function (c, d) {
}, ez: function (c, d) {
}, _du: null, du: function (b) {
    if (arguments.length === 1) {
        this._du = b;
        return b
    } else {
        return this._du
    }
}, ce: null, dv: function (b) {
    if (arguments.length === 1) {
        this.ce = b;
        return b
    } else {
        return this.ce
    }
}, e4: function () {
    this.dv(true);
    if (this.seriesViewer() != null) {
        this.seriesViewer().i7()
    }
}, e5: function () {
    this.dv(true);
    if (this.seriesViewer() != null) {
        this.seriesViewer().i8()
    }
}, e6: function (f, g, h, i) {
    var e = this;
    switch (g) {
        case $.ig.Series.prototype.bb:
            if ($.ig.util.cast($.ig.SyncLink.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.SyncLink.prototype.$type, h)).propertyUpdated = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SyncLink.prototype.$type, h)).propertyUpdated, this.ci);
                this.gj($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, h))
            }
            if ($.ig.util.cast($.ig.SyncLink.prototype.$type, i) != null) {
                ($.ig.util.cast($.ig.SyncLink.prototype.$type, i)).propertyUpdated = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SyncLink.prototype.$type, i)).propertyUpdated, this.ci);
                this.gk($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, i))
            }
            if (this.index() == -1) {
                this.index($.ig.XamDataChart.prototype.k1(this))
            }
            break;
        case $.ig.XamDataChart.prototype.kg:
        case $.ig.XamDataChart.prototype.kj:
        case $.ig.XamDataChart.prototype.kh:
        case $.ig.XamDataChart.prototype.ki:
            this.fi();
            break;
        case $.ig.Series.prototype.bc:
            if ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h)).windowRectChanged = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h)).windowRectChanged, this.cj);
                ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h)).series().collectionChanged = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h)).series().collectionChanged, this.ch);
                ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h)).propertyUpdated = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h)).propertyUpdated, this.ci);
                ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, h)).fc().s($.ig.ChartContentType.prototype.series, this);
                this.view().b0(h)
            }
            if ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i) != null) {
                ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i)).windowRectChanged = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i)).windowRectChanged, this.cj);
                ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i)).series().collectionChanged = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i)).series().collectionChanged, this.ch);
                ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i)).propertyUpdated = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i)).propertyUpdated, this.ci);
                this.du(($.ig.util.cast($.ig.SeriesViewer.prototype.$type, i)).fc().r($.ig.ChartContentType.prototype.series, this, this.en.on(this)));
                this.view().b1(i)
            }
            if (this.index() == -1 || i == null) {
                this.index($.ig.XamDataChart.prototype.k1(this))
            }
            this.actualLegend(this.gl());
            this.gf($.ig.util.cast($.ig.XamDataChart.prototype.$type, h), $.ig.util.cast($.ig.XamDataChart.prototype.$type, i));
            break;
        case $.ig.Series.prototype.bq:
            if (this.view() != null) {
                this.view().cb()
            }
            break;
        case $.ig.Series.prototype.bs:
        case $.ig.Series.prototype.bu:
            this.view().b9();
            break;
        case $.ig.Series.prototype.br:
        case $.ig.Series.prototype.bt:
        case $.ig.Series.prototype.bz:
        case $.ig.Series.prototype.by:
        case $.ig.Series.prototype.bl:
            this.fi();
            this.renderSeries(false);
            break;
        case $.ig.Series.prototype.bd:
            if (this.syncLink() != null) {
                this.gk(this.syncLink())
            }
            break;
        case $.ig.Series.prototype.be:
            this.e4();
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).event = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).event, this.cl)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i)).event = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i)).event, this.cl)
            }
            break;
        case $.ig.XamDataChart.prototype.a8:
            if (i != null) {
                if (f == this) {
                    ($.ig.util.cast($.ig.LegendBase.prototype.$type, i)).br(this)
                } else {
                    if ($.ig.util.cast($.ig.XamDataChart.prototype.$type, f) !== null) {
                        ($.ig.util.cast($.ig.LegendBase.prototype.$type, i)).bs(f)
                    }
                }
            }
            this.actualLegend(this.gl());
            break;
        case $.ig.Series.prototype.bg:
            this.gh($.ig.util.cast($.ig.LegendBase.prototype.$type, h), $.ig.util.cast($.ig.LegendBase.prototype.$type, i));
            break;
        case $.ig.Series.prototype.bf:
            this.gi($.ig.util.cast($.ig.Control.prototype.$type, h), $.ig.util.cast($.ig.Control.prototype.$type, i));
            break;
        case $.ig.Series.prototype.bh:
            this.view().ca();
            break;
        case $.ig.Series.prototype.b0:
            this.view().a6(this.toolTip());
            break;
        case $.ig.XamDataChart.prototype.a7:
            if (this.seriesViewer() != null) {
                if (!this.dw()) {
                    this.seriesViewer().gc(this, this.eh(this.seriesViewer().crosshairPoint()))
                }
            }
            break;
        case $.ig.Series.prototype.bp:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.Series.prototype.bx:
            this.view().b9();
            this.renderSeries(false);
            break;
        case $.ig.Series.prototype.bn:
        case $.ig.Series.prototype.bm:
            this.dy(true);
            this.dr().l(this.transitionDuration());
            break;
        case $.ig.Series.prototype.bk:
            this.renderSeries(false);
            break;
        case $.ig.Series.prototype.a9:
            if (h != i) {
                this.renderSeries(false)
            }
            this.e5();
            break
    }
}, _dw: null, dw: function (b) {
    if (arguments.length === 1) {
        this._dw = b;
        return b
    } else {
        return this._dw
    }
}, e9: function (b) {
    b.dw(true)
}, syncLink: function (c) {
    if (arguments.length === 1) {
        if (this.syncLink() != c) {
            var d = this.syncLink();
            this.cf = c;
            this.ej($.ig.Series.prototype.bb, d, this.syncLink())
        }
        return c
    } else {
        return this.cf
    }
}, cf: null, seriesViewer: function (c) {
    if (arguments.length === 1) {
        if (this.seriesViewer() != c) {
            var d = this.seriesViewer();
            this.cg = c;
            this.ej($.ig.Series.prototype.bc, d, this.cg)
        }
        return c
    } else {
        return this.cg
    }
}, cg: null, chart: function (b) {
    if (arguments.length === 1) {
        this.seriesViewer(b);
        return b
    } else {
        return $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer())
    }
}, ch: null, ci: null, cj: null, itemsSource: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.itemsSourceProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.itemsSourceProperty)
    }
}, dx: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.ck, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.ck)
    }
}, cl: null, fc: function (e, f, g, h) {
}, legend: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.legendProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.legendProperty)
    }
}, legendItem: function (c) {
    if (arguments.length === 1) {
        if (this.legendItem() != c) {
            var d = this.legendItem();
            this.cm = c;
            this.ej($.ig.Series.prototype.bf, d, this.cm)
        }
        return c
    } else {
        return this.cm
    }
}, cm: null, fe: function () {
    return this.ff()
}, ff: function () {
    var c = this;
    var d = $.ig.util.cast($.ig.ContentControl.prototype.$type, this.legendItem());
    var e = this.legendItemTemplate();
    if (e != null) {
        if (d == null) {
            d = new $.ig.ContentControl()
        }
        d.a9((function () {
            var a = new $.ig.DataContext();
            a.series(c);
            a.item(null);
            return a
        }()));
        d.ba(e)
    } else {
        d = null
    }
    return d
}, actualLegend: function (c) {
    if (arguments.length === 1) {
        if (this.actualLegend() != c) {
            var d = this.cn;
            this.cn = c;
            this.ej($.ig.Series.prototype.bg, d, this.cn)
        }
        return c
    } else {
        return this.cn
    }
}, cn: null, legendItemVisibility: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.legendItemVisibilityProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.legendItemVisibilityProperty)
    }
}, legendItemBadgeTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.legendItemBadgeTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.legendItemBadgeTemplateProperty)
    }
}, legendItemTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.legendItemTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.legendItemTemplateProperty)
    }
}, discreteLegendItemTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.discreteLegendItemTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.discreteLegendItemTemplateProperty)
    }
}, index: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.indexProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.indexProperty)
    }
}, fh: function () {
    this.fj()
}, fi: function () {
    this.fj()
}, fj: function () {
    this.e5();
    if (this.index() < 0) {
        return
    }
    if (this.brush() != null) {
        this.view().bb();
        this.view().bc()
    } else {
        this.actualBrush(this.seriesViewer() == null ? null : this.seriesViewer().fx(this.index()))
    }
    if (this.outline() != null) {
        this.view().bd();
        this.view().be()
    } else {
        this.actualOutline(this.seriesViewer() == null ? null : this.seriesViewer().fy(this.index()))
    }
}, _dy: null, dy: function (b) {
    if (arguments.length === 1) {
        this._dy = b;
        return b
    } else {
        return this._dy
    }
}, transitionDuration: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.transitionDurationProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.transitionDurationProperty)
    }
}, dz: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.co, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.co)
    }
}, fo: function () {
    return this.dr().w()
}, fp: function () {
    this.dr().t()
}, resolution: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.resolutionProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.resolutionProperty)
    }
}, title: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.titleProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.titleProperty)
    }
}, brush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.brushProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.brushProperty)
    }
}, actualBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.actualBrushProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.actualBrushProperty)
    }
}, outline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.outlineProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.outlineProperty)
    }
}, actualOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.actualOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.actualOutlineProperty)
    }
}, miterLimit: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.miterLimitProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.miterLimitProperty)
    }
}, thickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.thicknessProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.thicknessProperty)
    }
}, dashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.dashCapProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.dashCapProperty)
    }
}, dashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.dashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.dashArrayProperty)
    }
}, toolTip: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.toolTipProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.toolTipProperty)
    }
}, fs: function () {
}, wMA: function (c, d) {
    return $.ig.TrendCalculators.prototype.a(c, d)
}, eMA: function (c, d) {
    return $.ig.TrendCalculators.prototype.b(c, d)
}, mMA: function (c, d) {
    return $.ig.TrendCalculators.prototype.c(c, d)
}, cMA: function (b) {
    return $.ig.TrendCalculators.prototype.d(b)
}, sMA: function (c, d) {
    return $.ig.TrendCalculators.prototype.e(c, d)
}, movingSum: function (c, d) {
    return $.ig.TrendCalculators.prototype.f(c, d)
}, sTDEV: function (c, d) {
    return $.ig.TrendCalculators.prototype.g(c, d)
}, toEnumerableRange: function (f, g, h) {
    var e = this;
    var d = function () {
        return function (i, j, k) {
            return{$state: 0, $this: e, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$d = j;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$current = i(this.$d);
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$d++;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$d < k) {
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
            }}
        }(f, g, h)
    };
    return new $.ig.GenericEnumerable$1(Number, d)
}, toEnumerable: function (c, d) {
    return $.ig.Series.prototype.toEnumerableRange(c, 0, d)
}, startCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.startCapProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.startCapProperty)
    }
}, endCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Series.prototype.endCapProperty, b);
        return b
    } else {
        return this.b($.ig.Series.prototype.endCapProperty)
    }
}, cp: null, ft: function () {
    return this.cp
}, fu: function (b) {
    this.gq(b)
}, fv: function () {
    return this.transitionDuration()
}, _d0: null, d0: function (b) {
    if (arguments.length === 1) {
        this._d0 = b;
        return b
    } else {
        return this._d0
    }
}, _d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, _d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, d3: function () {
    return false
}, cq: null, d4: function (b) {
    if (arguments.length === 1) {
        this.cq = b;
        return b
    } else {
        return this.cq
    }
}, cr: null, d5: function (b) {
    if (arguments.length === 1) {
        this.cr = b;
        return b
    } else {
        return this.cr
    }
}, f7: function (e, f, g) {
    this.view().a3();
    this.d1(true);
    var h = this.el(f, e);
    this.d0(h);
    if (this.seriesViewer() != null && !this.du().j()) {
        this.view().bo(e, h, g)
    }
    this.d4(false);
    if (this.d3() && h == null) {
        this.d4(true)
    }
    if (this.seriesViewer() != null && !this.d4()) {
        if (this.d3()) {
            this.d5(true)
        }
        this.seriesViewer().f5(this, h, g)
    }
}, f8: function (e, f, g) {
    this.d1(true);
    var h = this.el(f, e);
    this.view().bo(e, h, g);
    if (h != null) {
        this.d0(h)
    }
    if (this.seriesViewer() != null && h != null && this.d4()) {
        this.d4(false);
        this.d5(true);
        this.seriesViewer().f5(this, h, g)
    }
    if (this.seriesViewer() != null && (!this.d3() || h != null) && !this.d4()) {
        this.seriesViewer().f6(this, h, g)
    }
    if (h == null && !this.d4() && this.d3()) {
        this.seriesViewer().f7(this, this.d0(), g);
        this.d5(false);
        this.d4(true)
    }
}, f9: function (e, f, g) {
    this.view().a4();
    this.d1(false);
    var h = this.d0();
    this.view().a5();
    if (this.seriesViewer() != null && (this.d5() || !this.d3())) {
        this.d5(false);
        this.d4(false);
        this.seriesViewer().f7(this, h, g)
    }
}, ga: function (d, e, f) {
    this.d2(true);
    if (this.seriesViewer() != null) {
        this.seriesViewer().f8(this, this.el(e, d), f)
    }
}, gb: function (d, e, f) {
    this.d2(false);
    if (this.seriesViewer() != null && this.d1()) {
        this.seriesViewer().f9(this, this.el(e, d), f)
    }
}, gc: function (d, e, f) {
    if (this.d2()) {
        this.gb(d, e, f)
    }
    if (this.d1()) {
        this.f9(d, e, f)
    }
}, gd: function (d, e, f) {
    if (this.seriesViewer() != null) {
        this.seriesViewer().ga(this, this.el(e, d), f)
    }
}, ge: function (d, e, f) {
    if (this.seriesViewer() != null) {
        this.seriesViewer().gb(this, this.el(e, d), f)
    }
}, gf: function (c, d) {
    if (this.actualLegend() != null && this.legendItem() != null) {
        if (d == null && this.actualLegend().children().contains(this.legendItem())) {
            this.actualLegend().children().remove(this.legendItem())
        }
        if (d != null && !this.actualLegend().children().contains(this.legendItem()) && this.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
            this.actualLegend().by(this.legendItem(), this)
        }
    }
}, gg: function () {
    if (this.actualLegend() == null || this.legendItem() == null) {
        return
    }
    this.actualLegend().children().remove(this.legendItem())
}, gh: function (c, d) {
    if (this.legendItem() != null) {
        if (c != null && c.children().contains(this.legendItem())) {
            c.children().remove(this.legendItem())
        }
        if (this.seriesViewer() != null && d != null && !d.children().contains(this.legendItem()) && this.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
            d.by(this.legendItem(), this)
        }
    }
}, gi: function (c, d) {
    if (this.actualLegend() != null && c != null && this.actualLegend().children().contains(c)) {
        this.actualLegend().children().remove(c)
    }
    if (this.seriesViewer() != null && this.actualLegend() != null && d != null && this.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
        this.actualLegend().by(d, this)
    }
}, gj: function (b) {
    this.dx(b.releaseFastItemsSource(this.itemsSource()))
}, gk: function (b) {
    this.dx(b.getFastItemsSource(this.itemsSource()))
}, gl: function () {
    if (this.legend() != null) {
        return this.legend()
    }
    if (this.seriesViewer() != null && this.seriesViewer().legend() != null) {
        return this.seriesViewer().legend()
    }
    return null
}, gm: function (b) {
    return(b && this.fv() > 0) || this.fo()
}, gn: function (b) {
    if (b != null) {
        b.deregisterSeries(this)
    }
}, go: function (b) {
    if (b != null) {
        b.registerSeries(this)
    }
}, gp: function () {
    return this.view().a7()
}, gq: function (b) {
    this.view().a8(b)
}, gr: function (c, d) {
    this.view().bp(c, d)
}, provideContext: function (c, d) {
    this.view().bu(c, d)
}, provideViewport: function (b) {
    this.ex(this.d6(), b)
}, handleCollectionChanged: function (b) {
    if (this.dx() != null) {
        this.dx().ae(b)
    }
}, notifySetItem: function (d, e, f) {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, f, e, d))
}, notifyClearItems: function () {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset))
}, notifyInsertItem: function (c, d) {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, d, c))
}, notifyRemoveItem: function (c, d) {
    this.handleCollectionChanged(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, d, c))
}, styleUpdated: function () {
    this.renderSeries(false)
}, __coercionMethods: null, coercionMethods: function (b) {
    if (arguments.length === 1) {
        this.__coercionMethods = b;
        return b
    } else {
        return this.__coercionMethods
    }
}, getHitDataContext: function (b) {
    return null
}, gs: function (d) {
    if (d == null) {
        return this.dx().ab(null, null)
    }
    var e = null;
    var f = $.ig.SeriesViewer.prototype.getCoercionMethod(d, this.coercionMethods());
    d = f.c();
    e = f.d();
    return this.dx().ab(d, e)
}, gt: function (d) {
    if (d == null) {
        return this.dx().aa(null, null)
    }
    var e = null;
    var f = $.ig.SeriesViewer.prototype.getCoercionMethod(d, this.coercionMethods());
    d = f.c();
    e = f.d();
    return this.dx().aa(d, e)
}, gu: function (d) {
    if (d == null) {
        return this.dx().z(null, null)
    }
    var e = null;
    var f = $.ig.SeriesViewer.prototype.getCoercionMethod(d, this.coercionMethods());
    d = f.c();
    e = f.d();
    return this.dx().z(d, e)
}, d6: function () {
    return this.view() != null ? this.view().ab() : $.ig.Rect.prototype.empty()
}, exportVisualData: function () {
    var b = new $.ig.SeriesVisualData();
    b.viewport(this.d6());
    b.type(this.getType().typeName());
    b.name(this.name());
    this.gw(b);
    this.view().b5(b);
    return b
}, gw: function (b) {
}, $type: new $.ig.Type("Series", $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type, $.ig.IProvidesViewport.prototype.$type])}, true);
$.ig.util.defType("MarkerSeries", "Series", {init: function () {
    $.ig.Series.prototype.init.call(this)
}, _h8: null, h8: function (b) {
    if (arguments.length === 1) {
        this._h8 = b;
        return b
    } else {
        return this._h8
    }
}, ea: function (b) {
    $.ig.Series.prototype.ea.call(this, b);
    this.h8(b)
}, ds: function () {
    return true
}, markerType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.markerTypeProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.markerTypeProperty)
    }
}, markerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.markerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.markerTemplateProperty)
    }
}, actualMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.actualMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.actualMarkerTemplateProperty)
    }
}, markerBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.markerBrushProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.markerBrushProperty)
    }
}, actualMarkerBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.actualMarkerBrushProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.actualMarkerBrushProperty)
    }
}, markerOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.markerOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.markerOutlineProperty)
    }
}, actualMarkerOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.actualMarkerOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.actualMarkerOutlineProperty)
    }
}, markerStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.markerStyleProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.markerStyleProperty)
    }
}, useLightweightMarkers: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MarkerSeries.prototype.useLightweightMarkersProperty, b);
        return b
    } else {
        return this.b($.ig.MarkerSeries.prototype.useLightweightMarkersProperty)
    }
}, ie: function () {
    return this.actualMarkerTemplate() != null && ((this.markerType() != $.ig.MarkerType.prototype.none && this.markerType() != $.ig.MarkerType.prototype.unset) || this.markerTemplate() != null)
}, e6: function (f, g, h, i) {
    $.ig.Series.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.MarkerSeries.prototype.hs:
        case $.ig.MarkerSeries.prototype.hp:
        case $.ig.MarkerSeries.prototype.hu:
        case $.ig.MarkerSeries.prototype.hq:
            this.fj();
            break;
        case $.ig.MarkerSeries.prototype.hr:
            if (h == $.ig.MarkerSeries.prototype.nullMarkerTemplate || i == $.ig.MarkerSeries.prototype.nullMarkerTemplate || (h == null || i != null)) {
                this.h8().ck();
                var j = $.ig.util.cast($.ig.MarkerSeriesView.prototype.$type, this.dt());
                if (j != null) {
                    j.ck()
                }
                this.renderSeries(false)
            }
            this.e5();
            break;
        case $.ig.MarkerSeries.prototype.hx:
            this.h8().cl(this.useLightweightMarkers());
            this.renderSeries(false);
            break
    }
}, getMarkerTemplatePropertyName: function (b) {
    switch (b) {
        case $.ig.MarkerType.prototype.circle:
            return $.ig.XamDataChart.prototype.b8;
        case $.ig.MarkerType.prototype.triangle:
            return $.ig.XamDataChart.prototype.b9;
        case $.ig.MarkerType.prototype.pyramid:
            return $.ig.XamDataChart.prototype.ca;
        case $.ig.MarkerType.prototype.square:
            return $.ig.XamDataChart.prototype.cb;
        case $.ig.MarkerType.prototype.diamond:
            return $.ig.XamDataChart.prototype.cc;
        case $.ig.MarkerType.prototype.pentagon:
            return $.ig.XamDataChart.prototype.cd;
        case $.ig.MarkerType.prototype.hexagon:
            return $.ig.XamDataChart.prototype.ce;
        case $.ig.MarkerType.prototype.tetragram:
            return $.ig.XamDataChart.prototype.cf;
        case $.ig.MarkerType.prototype.pentagram:
            return $.ig.XamDataChart.prototype.cg;
        case $.ig.MarkerType.prototype.hexagram:
            return $.ig.XamDataChart.prototype.ch;
        default:
        case $.ig.MarkerType.prototype.unset:
        case $.ig.MarkerType.prototype.none:
            return null
    }
}, resolveMarkerType: function (f, g) {
    var e = this;
    var h = f.seriesViewer() != null ? g : $.ig.MarkerType.prototype.none;
    if (h == $.ig.MarkerType.prototype.automatic) {
        var i = (function () {
            var a = new Array();
            a.add($.ig.MarkerType.prototype.circle);
            a.add($.ig.MarkerType.prototype.triangle);
            a.add($.ig.MarkerType.prototype.pentagon);
            a.add($.ig.MarkerType.prototype.tetragram);
            a.add($.ig.MarkerType.prototype.diamond);
            a.add($.ig.MarkerType.prototype.square);
            a.add($.ig.MarkerType.prototype.hexagon);
            a.add($.ig.MarkerType.prototype.pentagram);
            a.add($.ig.MarkerType.prototype.pyramid);
            a.add($.ig.MarkerType.prototype.hexagram);
            return a
        }());
        h = f.index() >= 0 ? i[f.index() % i.length] : $.ig.MarkerType.prototype.none
    }
    return h
}, fj: function () {
    $.ig.Series.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    if (this.h8().ct()) {
        this.h8().cu();
        this.h8().cv()
    } else {
        var c = $.ig.MarkerSeries.prototype.resolveMarkerType(this, this.markerType());
        var d = $.ig.MarkerSeries.prototype.getMarkerTemplatePropertyName(c);
        if (d == null) {
            this.actualMarkerTemplate($.ig.MarkerSeries.prototype.nullMarkerTemplate)
        } else {
            this.h8().cw(d)
        }
    }
    if (this.markerBrush() != null) {
        this.h8().cx();
        this.h8().cy()
    } else {
        this.actualMarkerBrush(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerBrushByIndex(this.index()))
    }
    if (this.markerOutline() != null) {
        this.h8().cz();
        this.h8().c0()
    } else {
        this.actualMarkerOutline(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerOutlineByIndex(this.index()))
    }
}, gw: function (c) {
    var b = this;
    $.ig.Series.prototype.gw.call(this, c);
    this.h8().cp(function (a) {
        var e = new $.ig.MarkerVisualData();
        e.x(a.y());
        e.y(a.x());
        e.index(-1);
        e.contentTemplate(a.ba());
        if (a.a9() != null && $.ig.util.cast($.ig.DataContext.prototype.$type, a.a9()) !== null && a.__visibility == $.ig.Visibility.prototype.visible) {
            var f = a.a9();
            if (f.item() != null) {
                e.index(b.dx().x(f.item()))
            }
        }
        e.visibility(a.__visibility);
        c.markerShapes().add(e)
    })
}, getHitDataContext: function (d) {
    var e = this.h8().c4(d);
    var f = null;
    if (e != null) {
        f = e.a9()
    }
    return f
}, $type: new $.ig.Type("MarkerSeries", $.ig.Series.prototype.$type)}, true);
$.ig.util.defType("ISupportsErrorBars", "Object", {$type: new $.ig.Type("ISupportsErrorBars", null)}, true);
$.ig.util.defType("SeriesView", "Object", {_u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, init: function (b) {
    this.d = $.ig.Rect.prototype.empty();
    this.e = new $.ig.Brush();
    this.__toolTipObject = null;
    this.f = null;
    this.g = new $.ig.SeriesComponentsFromView();
    this.h = true;
    this.i = false;
    this.j = false;
    this.k = false;
    $.ig.Object.prototype.init.call(this);
    this.u(b);
    this.ad(false);
    this.c = new $.ig.Rectangle()
}, ag: function () {
    var a = this;
    if (!this.ad()) {
        this.u().legendItemTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render(a.aj());
            b.measure(a.ak());
            return b
        }()));
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render(a.al());
            b.measure(a.am());
            return b
        }()));
        this.u().discreteLegendItemTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render(a.ah());
            b.measure(a.ai());
            return b
        }()));
        this.y(new $.ig.DataContext());
        this.y().series(this.u())
    }
}, ah: function () {
    return $.ig.LegendTemplates.prototype.b
}, ai: function () {
    return $.ig.LegendTemplates.prototype.j
}, aj: function () {
    return $.ig.LegendTemplates.prototype.a
}, ak: function () {
    return $.ig.LegendTemplates.prototype.i
}, al: function () {
    return $.ig.LegendTemplates.prototype.f
}, am: function () {
    return $.ig.LegendTemplates.prototype.k
}, _isDirty: null, isDirty: function (b) {
    if (arguments.length === 1) {
        this._isDirty = b;
        return b
    } else {
        return this._isDirty
    }
}, index: function () {
    var a = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.u().chart());
    var d = 0;
    if (a != null) {
        if (a.gridMode() == $.ig.GridMode.prototype.behindSeries || a.gridMode() == $.ig.GridMode.prototype.none) {
            d = a.axes().count()
        }
    }
    return d + this.u().seriesViewer().series().indexOf(this.u())
}, an: function () {
    if (this.u().seriesViewer() == null) {
        return
    }
    if (!this.isDirty()) {
        this.isDirty(true);
        if (this.j) {
            this.u().seriesViewer().fp().p(this.z(), this.aa())
        } else {
            this.u().seriesViewer().canvasRenderScheduler().p(this.z(), this.aa())
        }
    }
}, undirty: function (b) {
    this.isDirty(false);
    this.ao(b)
}, c: null, ao: function (d) {
    if (this.z() == null) {
        return
    }
    if (this.d.isEmpty()) {
        this.d = this.ab()
    }
    var e = this.d;
    var f = this.u().seriesViewer().getContainerRect();
    if (this.z().b()) {
        if (!e.isEmpty() && d) {
            this.z().t(f.left(), f.top(), f.width(), f.height())
        }
        if (d) {
            if (this.u().seriesViewer().plotAreaBackground() != null) {
                this.c.x(this.ab().top());
                this.c.y(this.ab().left());
                this.c.v(this.ab().width());
                this.c.w(this.ab().height());
                this.c.__fill = this.u().seriesViewer().plotAreaBackground();
                if (this.k) {
                    this.z().e($.ig.GradientDirection.prototype.bottomTop, this.ab())
                }
                this.z().f(this.c)
            }
        }
    }
    if (this.aa() != null) {
        if (this.aa().b()) {
            if (!e.isEmpty() && d) {
                this.aa().t(e.left(), e.top(), e.width(), e.height())
            }
            this.av(true);
            this.a0(this.aa(), true);
            this.a1(this.aa(), true)
        }
    }
    if (this.z().b()) {
        this.z().o();
        this.z().q(this.ab());
        this.av(false);
        this.a0(this.z(), false);
        this.a1(this.z(), false);
        this.z().p()
    }
}, d: null, ap: function (d, e, f) {
    if (f) {
        this.at(d, e)
    } else {
        this.ar(d, e)
    }
}, aq: function (d, e, f) {
    if (f) {
        this.au(d, e)
    } else {
        this.as(d, e)
    }
}, ar: function (c, d) {
}, as: function (c, d) {
}, at: function (c, d) {
}, au: function (c, d) {
}, av: function (b) {
    if (b) {
        this.ax()
    } else {
        this.aw()
    }
}, aw: function () {
}, ax: function () {
}, e: null, ay: function (b) {
    return this.az()
}, az: function () {
    var e = this.u().index();
    var i = (e + 1) * $.ig.SeriesView.prototype.a;
    var f = (i & 63) << 2;
    i = i >> 6;
    var g = (i & 63) << 2;
    i = i >> 6;
    var h = (i & 63) << 2;
    this.e.__fill = "rgb(" + f + "," + g + "," + h + ")";
    return this.e
}, a0: function (c, d) {
    this.d = this.ab()
}, a1: function (c, d) {
}, a2: function () {
}, a3: function () {
}, a4: function () {
}, a5: function () {
    if (this.__toolTipObject != null && this.x()) {
        this.x(false);
        var a = this.y();
        if (this.__toolTipObject.hideToolTip) {
            this.__toolTipObject.hideToolTip(a)
        }
    }
}, __toolTipObject: null, f: null, a6: function (c) {
    var d = this.__toolTipObject;
    this.f = null;
    this.__toolTipObject = null;
    if ($.ig.util.cast(String, c) !== null || typeof c === "string") {
        this.f = c
    } else {
        this.__toolTipObject = c;
        if (this.__toolTipObject != null) {
            this.__toolTipObject.css("position", "absolute");
            this.__toolTipObject.css("top", "0");
            this.__toolTipObject.css("left", "0");
            this.__toolTipObject.css("z-index", "10000")
        } else {
            if (!this.h && d != null) {
                this.u().seriesViewer().iv(d);
                this.h = true
            }
        }
    }
}, g: null, a7: function () {
    return this.g
}, a8: function (b) {
}, a9: function () {
    return true
}, ba: function () {
}, bb: function () {
    this.u().actualBrush(null)
}, bc: function () {
    this.u().actualBrush(this.u().brush())
}, bd: function () {
    this.u().actualOutline(null)
}, be: function () {
    this.u().actualOutline(this.u().outline())
}, bf: function (b) {
    if ($.ig.util.cast($.ig.DataContext.prototype.$type, b) !== null) {
        return b
    }
    return null
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, _y: null, y: function (b) {
    if (arguments.length === 1) {
        this._y = b;
        return b
    } else {
        return this._y
    }
}, h: null, i: null, bo: function (e, f, g) {
    if (this.u().seriesViewer() == null || this.u().seriesViewer().dragCrosshairActivated()) {
        return
    }
    this.x(true);
    this.v(e);
    this.w(f);
    this.y().item(f);
    var i = this.u().seriesViewer().getContainerOffsets();
    var j = {__x: e.__x + 15 + i.c(), __y: e.__y + 15 + i.d(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var h = this.y();
    if (this.__toolTipObject != null) {
        if (this.i) {
            this.i = false;
            this.__toolTipObject.remove();
            this.__toolTipObject.css("position", "absolute");
            this.__toolTipObject.addClass(this.u().seriesViewer().tooltipStyle());
            this.u().seriesViewer().addTooltipToView(this.__toolTipObject);
            this.__toolTipObject.hide()
        }
        if (this.h) {
            this.u().seriesViewer().addTooltipToView(this.__toolTipObject);
            this.h = false
        }
        h.hideOthers = true;
        if (this.__toolTipObject.updateToolTip) {
            this.__toolTipObject.updateToolTip(h)
        }
        if (this.__toolTipObject.offset) {
            this.__toolTipObject.offset({left: j.__x, top: j.__y})
        }
    }
}, bp: function (e, f) {
    this.x(true);
    var g = {__x: e.__x + this.ab().left(), __y: e.__y + this.ab().top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var i = this.u().el(null, g);
    if (this.y() != null) {
        this.y().series(this.u());
        this.y().item(i)
    }
    var j = this.__toolTipObject;
    var h = this.y();
    if (h != null) {
        h.hideOthers = false
    }
    if (!this.i && j != null) {
        this.i = true;
        j.remove();
        j.css("position", "relative");
        j.css("top", "");
        j.css("left", "");
        j.removeClass(this.u().seriesViewer().tooltipStyle())
    }
    if (this.__toolTipObject != null) {
        if (j.updateToolTip) {
            j.updateToolTip(h)
        }
    }
    if (j != null) {
        f(j)
    }
}, _z: null, z: function (b) {
    if (arguments.length === 1) {
        this._z = b;
        return b
    } else {
        return this._z
    }
}, _aa: null, aa: function (b) {
    if (arguments.length === 1) {
        this._aa = b;
        return b
    } else {
        return this._aa
    }
}, bu: function (c, d) {
    this.z(c);
    this.aa(d)
}, _ab: null, ab: function (b) {
    if (arguments.length === 1) {
        this._ab = b;
        return b
    } else {
        return this._ab
    }
}, ac: function () {
    if (this.ad()) {
        return $.ig.XamDataChart.prototype.de
    } else {
        return this.u().seriesViewer() != null ? this.u().seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty()
    }
}, j: null, ad: function (b) {
    if (arguments.length === 1) {
        this.j = b;
        return b
    } else {
        return this.j
    }
}, b0: function (b) {
    if (b != null) {
        b.canvasRenderScheduler().n(this);
        if (this.u().dt() != null) {
            b.fp().n(this.u().dt())
        }
    }
}, b1: function (b) {
    if (b != null) {
        b.canvasRenderScheduler().m(this);
        if (this.u().dt() != null) {
            b.fp().m(this.u().dt());
            this.u().dt().an()
        }
        this.an()
    }
}, postRender: function () {
    this.b2()
}, b2: function () {
}, b3: function (b) {
    return null
}, b4: function (b) {
    this.u().dt().z(b.b())
}, b5: function (b) {
}, b6: function (f, g, h, i, j) {
}, b7: function (b) {
}, b8: function (b) {
    return $.ig.Rect.prototype.empty()
}, b9: function () {
    if (this.u().seriesViewer() != null) {
        var c = (this.u().legend() != null) ? this.u().legend() : this.u().seriesViewer().legend();
        if (c != null && this.u().legendItem() != null && c.children().contains(this.u().legendItem())) {
            c.children().remove(this.u().legendItem());
            var d = this.u().fe();
            (d.a9()).actualItemBrush(this.u().actualBrush());
            (d.a9()).outline(this.u().outline());
            (d.a9()).thickness(this.u().thickness());
            c.by(this.u().legendItem(), this.u())
        }
    }
}, ca: function () {
    this.u().gh(this.u().actualLegend(), this.u().actualLegend())
}, cb: function () {
    this.u().gh(this.u().actualLegend(), this.u().actualLegend())
}, getViewInfo: function (c, d) {
    c = this.ab();
    d = this.ac();
    return{viewportRect: c, windowRect: d}
}, cc: function () {
    return this.z() != null
}, k: null, $type: new $.ig.Type("SeriesView", $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type, $.ig.IProvidesViewport.prototype.$type])}, true);
$.ig.util.defType("MarkerSeriesView", "SeriesView", {_cg: null, cg: function (b) {
    if (arguments.length === 1) {
        this._cg = b;
        return b
    } else {
        return this._cg
    }
}, init: function (b) {
    $.ig.SeriesView.prototype.init.call(this, b);
    this.cg(b)
}, ag: function () {
    var a = this;
    $.ig.SeriesView.prototype.ag.call(this);
    this.ch(new $.ig.List$1($.ig.Marker.prototype.$type, 0));
    this.cd = (function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.h);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }())
}, ck: function () {
    var d = this.ch().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        c.ba(this.cg().actualMarkerTemplate())
    }
    this.an()
}, cl: function (b) {
}, _ch: null, ch: function (b) {
    if (arguments.length === 1) {
        this._ch = b;
        return b
    } else {
        return this._ch
    }
}, co: function () {
    var b = this;
    var c = new $.ig.Marker();
    c.a9((function () {
        var a = new $.ig.DataContext();
        a.series(b.u());
        return a
    }()));
    c.ba(this.cg().actualMarkerTemplate());
    this.ch().add(c);
    return c
}, cp: function (b) {
}, cq: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, cr: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, cs: function (b) {
    this.ch().remove(b)
}, ct: function () {
    return this.cg().markerTemplate() != null
}, cu: function () {
    this.cg().actualMarkerTemplate(null)
}, cv: function () {
    this.cg().actualMarkerTemplate(this.cg().markerTemplate())
}, cw: function (c) {
    var b = this;
    switch (c) {
        case $.ig.XamDataChart.prototype.b8:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().circleMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.b9:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().triangleMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.ca:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().pyramidMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.cb:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().squareMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.cc:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().diamondMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.cd:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().pentagonMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.ce:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().hexagonMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.cf:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().tetragramMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.cg:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().pentagramMarkerTemplate());
            break;
        case $.ig.XamDataChart.prototype.ch:
            this.cg().actualMarkerTemplate(this.cg().seriesViewer().hexagramMarkerTemplate());
            break
    }
}, cx: function () {
    this.cg().actualMarkerBrush(null)
}, cy: function () {
    this.cg().actualMarkerBrush(this.cg().markerBrush())
}, cz: function () {
    this.cg().actualMarkerOutline(null)
}, c0: function () {
    this.cg().actualMarkerOutline(this.cg().markerOutline())
}, c1: function () {
    this.an()
}, as: function (e, f) {
    $.ig.SeriesView.prototype.as.call(this, e, f);
    var g = e;
    var h = g.a9();
    if (h != null) {
        h.actualItemBrush(this.cg().actualMarkerBrush());
        if (h.itemBrush() != null) {
            h.actualItemBrush(h.itemBrush())
        }
        h.outline(this.cg().actualMarkerOutline());
        h.thickness(0.5)
    }
}, au: function (f, g) {
    $.ig.SeriesView.prototype.au.call(this, f, g);
    var h = f;
    var i = this.ay(g);
    var j = h.a9();
    if (j != null) {
        j.actualItemBrush(i);
        j.outline(i);
        j.thickness(1 + $.ig.SeriesView.prototype.b)
    }
}, b3: function (b) {
    if (b >= 0 && b < this.ch().count()) {
        return this.ch().__inner[b].a9()
    }
    return $.ig.SeriesView.prototype.b3.call(this, b)
}, cd: null, a1: function (n, o) {
    $.ig.SeriesView.prototype.a1.call(this, n, o);
    if (n.b()) {
        var p = new $.ig.DataTemplatePassInfo();
        p.isHitTestRender = o;
        p.context = n.c();
        p.viewportTop = this.ab().top();
        p.viewportLeft = this.ab().left();
        p.viewportWidth = this.ab().width();
        p.viewportHeight = this.ab().height();
        p.passID = "Markers";
        var q = new $.ig.DataTemplateRenderInfo();
        q.isHitTestRender = o;
        q.passInfo = p;
        var r = new $.ig.DataTemplateMeasureInfo();
        r.passInfo = p;
        var s = false;
        var t = n.c();
        r.context = t;
        q.context = t;
        var u = 0;
        var v = 0;
        var w = true;
        if (this.cg().actualMarkerTemplate() != null && this.cg().actualMarkerTemplate().passStarting() != null) {
            this.cg().actualMarkerTemplate().passStarting()(p)
        }
        for (var x = 0; x < this.ch().count(); x++) {
            var y = this.ch().__inner[x];
            if (y.__visibility == $.ig.Visibility.prototype.collapsed) {
                continue
            }
            this.aq(y, x, o);
            if (!s) {
                r.data = y.a9();
                r.width = y.v();
                r.height = y.w();
                var z = y.ba();
                if (z.measure() != null) {
                    r.data = y.a9();
                    z.measure()(r);
                    s = r.isConstant;
                    if (s) {
                        u = r.width;
                        v = r.height
                    }
                }
                q.availableWidth = r.width;
                q.availableHeight = r.height
            } else {
                q.availableWidth = u;
                q.availableHeight = v
            }
            if (!isNaN(y.v()) && !Number.isInfinity(y.v())) {
                q.availableWidth = y.v()
            }
            if (!isNaN(y.w()) && !Number.isInfinity(y.w())) {
                q.availableHeight = y.w()
            }
            w = false;
            n.l(q, y);
            y.t(q.availableWidth);
            y.u(q.availableHeight)
        }
        if (this.cg().actualMarkerTemplate() != null && this.cg().actualMarkerTemplate().passCompleted() != null) {
            this.cg().actualMarkerTemplate().passCompleted()(p)
        }
    }
}, c2: function (b) {
    b.create(this.co.on(this));
    b.destroy(this.cs.on(this));
    b.activate(this.cq.on(this));
    b.disactivate(this.cr.on(this))
}, c3: function (b) {
    b.create(this.co.on(this));
    b.destroy(this.cs.on(this));
    b.activate(this.cq.on(this));
    b.disactivate(this.cr.on(this))
}, c4: function (e) {
    var g = this.ch().getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        if (f.__visibility == $.ig.Visibility.prototype.collapsed) {
            continue
        }
        var h = (f.t() / 2) + $.ig.MarkerSeriesView.prototype.b;
        if (f.y() - h <= e.__x && f.y() + h >= e.__x && f.x() - h <= e.__y && f.x() + h >= e.__y) {
            return f
        }
    }
    return null
}, $type: new $.ig.Type("MarkerSeriesView", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("IHasCategoryModePreference", "Object", {$type: new $.ig.Type("IHasCategoryModePreference", null, [$.ig.IHasCategoryAxis.prototype.$type])}, true);
$.ig.util.defType("CategorySeries", "MarkerSeries", {_ix: null, ix: function (b) {
    if (arguments.length === 1) {
        this._ix = b;
        return b
    } else {
        return this._ix
    }
}, ed: function () {
    var b = new $.ig.CategorySeriesView(this);
    return b
}, _iy: null, iy: function (b) {
    if (arguments.length === 1) {
        this._iy = b;
        return b
    } else {
        return this._iy
    }
}, ea: function (b) {
    $.ig.MarkerSeries.prototype.ea.call(this, b);
    this.iy(b)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode0
}, categoryAxis: function () {
    return $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.ja())
}, init: function () {
    this.ir = new $.ig.CategoryFrame(3);
    this.is = new $.ig.CategoryFrame(3);
    this.it = new $.ig.CategoryFrame(3);
    this.iu = new $.ig.CategoryFrame(3);
    $.ig.MarkerSeries.prototype.init.call(this);
    this.a3($.ig.CategorySeries.prototype.$type)
}, onApplyTemplate: function () {
    $.ig.Control.prototype.a6.call(this);
    this.iy().c9().q(this.resolution())
}, eu: function (c, d) {
    $.ig.Series.prototype.eu.call(this, c, d);
    if (c) {
        this.i8(d)
    }
}, ft: function () {
    var b = $.ig.Series.prototype.ft.call(this);
    return b
}, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    var c = this.ja();
    if (c != null) {
        c.es(false)
    }
    var d = this.jb();
    if (d != null) {
        d.es(false)
    }
}, ey: function (c, d) {
    $.ig.Series.prototype.ey.call(this, c, d);
    this.iy().c9().q(this.resolution());
    this.renderSeries(false)
}, ez: function (c, d) {
    $.ig.Series.prototype.ez.call(this, c, d);
    this.iy().c9().q(this.resolution());
    this.renderSeries(false)
}, e6: function (g, h, i, j) {
    $.ig.MarkerSeries.prototype.e6.call(this, g, h, i, j);
    var k = this.jb();
    var l = this.ja();
    switch (h) {
        case $.ig.Series.prototype.bc:
            if (i != null && j == null) {
                this.gn(l);
                this.gn(k)
            }
            if (i == null && j != null) {
                this.go(l);
                this.go(k)
            }
            this.iy().c9().q(this.resolution());
            this.renderSeries(false);
            break;
        case $.ig.Series.prototype.bb:
            if (this.syncLink() != null && this.seriesViewer() != null) {
                this.iy().c9().q(this.resolution())
            }
            this.renderSeries(false);
            break;
        case $.ig.Series.prototype.bo:
            this.is.a(this.dz(), this.ir, this.it);
            if (this.ew(this.view())) {
                return
            }
            if (this.dz() == 1) {
                this.i6(this.it, this.iy())
            } else {
                this.i6(this.is, this.iy())
            }
            break;
        case $.ig.CategorySeries.prototype.iq:
            this.e5();
            break
    }
}, i3: function (l) {
    var m = this.view().ac();
    var n = this.view().ab();
    if (m.isEmpty() || n.isEmpty()) {
        return -1
    }
    var o = this.ja();
    var p = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, o);
    var q = new $.ig.ScalerParams(m, n, o.isInverted());
    var r = o.getUnscaledValue(n.left(), q);
    var s = o.getUnscaledValue(n.right(), q);
    var t = (l.__x - m.left()) / m.width();
    var u = r + ((s - r) * t);
    var v = p.getIndexClosestToUnscaledValue(u);
    return v
}, eh: function (d) {
    var e = 0;
    var f = this.ja();
    if ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, f) !== null) {
        e = this.i3(d);
        if (e == -1) {
            return null
        }
    } else {
        e = this.eg(d)
    }
    return e >= 0 && this.dx() != null && e < this.dx().g() ? this.dx().item(e) : null
}, eg: function (k) {
    var l = this.view().ac();
    var m = this.view().ab();
    var n = -1;
    var o = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.ja());
    if (o != null && !l.isEmpty() && !m.isEmpty()) {
        var p = o.gy(m.left(), l, m, o.categoryMode());
        var q = o.gy(m.right(), l, m, o.categoryMode());
        var r = (k.__x - l.left()) / l.width();
        var s = p + (r * (q - p));
        if (o.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
            s -= 0.5
        }
        var t = Math.round(s);
        n = t
    }
    return n
}, ir: null, is: null, it: null, iu: null, es: function (f, g, h) {
    var i = $.ig.Series.prototype.es.call(this, f, g, h);
    i &= this.i4(this.ja());
    i &= this.i4(this.jb());
    var j = h;
    if (!h.cc() || g.isEmpty() || f.isEmpty() || this.dx() == null) {
        i = false
    }
    if (!i) {
        j.c9().h(0)
    }
    return i
}, i4: function (d) {
    if (d == null || d.seriesViewer() == null) {
        return false
    }
    var e = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, d);
    if (e != null) {
        return e.itemsSource() != null
    } else {
        var f = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, d);
        if (f != null) {
            return f.actualMinimumValue() != f.actualMaximumValue()
        }
    }
    return true
}, eo: function (c) {
    $.ig.Series.prototype.eo.call(this, c);
    this.iy().c9().q(this.resolution());
    if (this.ew(this.view())) {
        return
    }
    if (this.gm(c)) {
        var d = this.ir;
        if (this.fo()) {
            this.ir = this.is;
            this.is = d
        } else {
            this.ir = this.it;
            this.it = d
        }
        this.i7(this.it, this.iy());
        this.fp()
    } else {
        this.i7(this.it, this.iy());
        this.i6(this.it, this.iy())
    }
}, i5: function () {
    var g = 0;
    var h = this.ja();
    var j = this.seriesViewer().series().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        if (i == this) {
            return g
        }
        var k = $.ig.util.cast($.ig.CategorySeries.prototype.$type, i);
        if (k != null) {
            var l = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, k.ja());
            if (l == h && k.preferredCategoryMode(l) == $.ig.CategoryMode.prototype.mode2) {
                g++
            }
        }
    }
    return -1
}, xAxis: function () {
    return this.ja()
}, yAxis: function () {
    return this.jb()
}, i6: function (c, d) {
}, i7: function (c, d) {
}, i8: function (c) {
    var d = c;
    d.da().g(0)
}, er: function (d, e) {
    $.ig.Series.prototype.er.call(this, d, e);
    if (!this.dv()) {
        this.view().b4(e);
        return
    }
    var f = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, this.dt());
    f.c9().q(this.resolution());
    this.view().b4(e);
    if (this.ew(this.dt())) {
        return
    }
    this.i9();
    this.dv(false)
}, i9: function () {
    var b = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, this.dt());
    this.i7(this.iu, b);
    this.i6(this.iu, b)
}, ja: function () {
}, jb: function () {
}, jc: function () {
}, jd: function (c) {
    var d = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, c);
    if (d != null && d == this.dt()) {
        return new $.ig.CategoryFramePreparer(1, $.ig.util.cast($.ig.IIsCategoryBased.prototype.$type, this), $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, d), this.seriesViewer().fb().aj(), this, d.c9())
    } else {
        return this.ix()
    }
}, $type: new $.ig.Type("CategorySeries", $.ig.MarkerSeries.prototype.$type, [$.ig.IHasCategoryModePreference.prototype.$type, $.ig.ISupportsErrorBars.prototype.$type])}, true);
$.ig.util.defType("IIsCategoryBased", "Object", {$type: new $.ig.Type("IIsCategoryBased", null)}, true);
$.ig.util.defType("IHasSingleValueCategory", "Object", {$type: new $.ig.Type("IHasSingleValueCategory", null)}, true);
$.ig.util.defType("IHasTrendline", "Object", {$type: new $.ig.Type("IHasTrendline", null)}, true);
$.ig.util.defType("IHasCategoryTrendline", "Object", {$type: new $.ig.Type("IHasCategoryTrendline", null, [$.ig.IHasTrendline.prototype.$type])}, true);
$.ig.util.defType("IBarSeries", "Object", {$type: new $.ig.Type("IBarSeries", null)}, true);
$.ig.util.defType("ISupportsMarkers", "Object", {$type: new $.ig.Type("ISupportsMarkers", null)}, true);
$.ig.util.defType("CategorySeriesView", "MarkerSeriesView", {_c8: null, c8: function (b) {
    if (arguments.length === 1) {
        this._c8 = b;
        return b
    } else {
        return this._c8
    }
}, init: function (c) {
    var b = this;
    $.ig.MarkerSeriesView.prototype.init.call(this, c);
    this.c8(c);
    this.c9(this.df());
    this.da((function () {
        var a = new $.ig.Pool$1($.ig.Marker.prototype.$type);
        a.create(b.co.on(b));
        a.activate(b.cq.on(b));
        a.disactivate(b.cr.on(b));
        a.destroy(b.cs.on(b));
        return a
    }()))
}, updateMarkerTemplate: function (d, e) {
    if (!this.cg().useLightweightMarkers()) {
        var f = this.da().item(d);
        ($.ig.util.cast($.ig.DataContext.prototype.$type, f.a9())).item(this.u().dx().item(e))
    }
}, _c9: null, c9: function (b) {
    if (arguments.length === 1) {
        this._c9 = b;
        return b
    } else {
        return this._c9
    }
}, df: function () {
    return new $.ig.CategoryBucketCalculator(this)
}, _da: null, da: function (b) {
    if (arguments.length === 1) {
        this._da = b;
        return b
    } else {
        return this._da
    }
}, shouldDisplayMarkers: function () {
    return this.c8().ie()
}, updateMarkerCount: function (b) {
    this.da().g(b)
}, cp: function (b) {
    this.da().p(b)
}, di: function () {
}, $type: new $.ig.Type("CategorySeriesView", $.ig.MarkerSeriesView.prototype.$type, [$.ig.ISupportsMarkers.prototype.$type])}, true);
$.ig.util.defType("IBucketizer", "Object", {$type: new $.ig.Type("IBucketizer", null)}, true);
$.ig.util.defType("CategoryBucketCalculator", "Object", {_e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    if (b == null) {
        throw new $.ig.ArgumentNullException("view")
    }
    this.e(b);
    this.f(-1);
    this.g(this.g());
    this.h(0)
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, getBucket: function (b) {
    return null
}, getErrorBucket: function (c, d) {
    return NaN
}, q: function (j) {
    var k = this.e().ac();
    var l = this.e().ab();
    var m = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.e().c8().ja());
    var n = this.e().c8().dx();
    if (k.isEmpty() || l.isEmpty() || m == null || n == null || n.g() == 0) {
        this.h(0);
        return
    }
    var o = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, m);
    if (o == null || o.sortedIndices() == null) {
        var p = Math.floor(m.gy(l.left(), k, l, $.ig.CategoryMode.prototype.mode0));
        var q = Math.ceil(m.gy(l.right(), k, l, $.ig.CategoryMode.prototype.mode0));
        if (m.isInverted()) {
            q = Math.ceil(m.gy(l.left(), k, l, $.ig.CategoryMode.prototype.mode0));
            p = Math.floor(m.gy(l.right(), k, l, $.ig.CategoryMode.prototype.mode0))
        }
        var r = Math.floor((q - p + 1) * j / l.width());
        this.h(Math.max(1, r));
        this.f(Math.max(0, Math.floor(p / this.h()) - 1));
        this.g(Math.ceil(q / this.h()))
    } else {
        this.f(o.getFirstVisibleIndex(k, l));
        this.g(o.getLastVisibleIndex(k, l));
        this.h(1)
    }
}, getBucketInfo: function (e, f, g, h) {
    e = this.f();
    f = this.g();
    g = this.h();
    h = this.e().c8().resolution();
    return{firstBucket: e, lastBucket: f, bucketSize: g, resolution: h}
}, cacheValues: function () {
}, unCacheValues: function () {
}, $type: new $.ig.Type("CategoryBucketCalculator", $.ig.Object.prototype.$type, [$.ig.IBucketizer.prototype.$type])}, true);
$.ig.util.defType("ValuesHolder", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _e: null, e: function () {
    return this._e
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, $type: new $.ig.Type("ValuesHolder", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("VerticalAxisLabelPanel", "AxisLabelPanelBase", {init: function () {
    $.ig.AxisLabelPanelBase.prototype.init.call(this)
}, b6: function () {
    return new $.ig.VerticalAxisLabelPanelView(this)
}, b7: function (b) {
    $.ig.AxisLabelPanelBase.prototype.b7.call(this, b);
    this.d1(b)
}, _d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, _d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, _d3: null, d3: function (b) {
    if (arguments.length === 1) {
        this._d3 = b;
        return b
    } else {
        return this._d3
    }
}, c7: function () {
    this.d1().ak()
}, c6: function () {
    var A = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    this.b2(false);
    this.b1(false);
    if (this.br().labelSettings() != null && this.br().labelSettings().y() && this.c9() % 360 != 0) {
        this.b1(true)
    }
    this.d2(-Number.MAX_VALUE);
    this.d3(-Number.MAX_VALUE);
    for (var B = 0; B < this.by().count(); B++) {
        var C = this.by().__inner[B];
        var D = this.dc(C);
        var E = this.db(C);
        var F = 0;
        var G = this.bt().__inner[B].b() - D / 2;
        this.d2(Math.max(E, this.d2()));
        this.d3(Math.max(D, this.d3()));
        var H = new $.ig.Rect(0, F, G, E, D);
        A.add(H)
    }
    var I = 0;
    if (this.b1()) {
        I = this.c9() % 360;
        if (I < 0) {
            I += 360
        }
    }
    if (!this.br().e8()) {
        if (this.b1()) {
            if (I >= 90 && I <= 270) {
                this.b5(this.d3())
            } else {
                var J = I * (Math.PI / 180);
                var K = Math.abs(this.d2() * Math.cos(J)) + Math.abs(this.d3() * Math.sin(J));
                this.b5(K)
            }
        } else {
            this.b5(this.d2())
        }
    } else {
        this.bp().w()
    }
    if (this.b1()) {
        for (var L = 0; L < A.count(); L++) {
            var M = A.__inner[L];
            M.y(this.bt().__inner[L].b() - this.d3() / 2);
            A.__inner[L] = M
        }
    }
    var N = false;
    if (!this.b1() && this.d2() <= this.b5()) {
        N = true
    }
    if (!N) {
        var O = this.bv().height();
        var P = this.b5();
        var Q = this.bt().count() > 1 ? Math.abs(this.bt().__inner[1].b() - this.bt().__inner[0].b()) : O;
        var R = Math.abs(Math.asin(Q / this.d2()) * (180 / Math.PI));
        var S = (I >= R && I <= 180 - R) || (I - 180 >= R && I - 180 <= 180 - R);
        for (var T = 0; T < A.count(); T++) {
            if (this.b1()) {
                var U = I * (Math.PI / 180);
                var V = this.db(this.by().__inner[T]);
                P = Math.min(this.b5() / Math.abs(Math.cos(U)), V);
                if (S) {
                    var W;
                    if (I > 0 && I < 90) {
                        W = (Math.PI / 180) * (90 - I)
                    } else {
                        if (I > 270 && I < 360) {
                            W = (Math.PI / 180) * (I - 270)
                        } else {
                            W = 0
                        }
                    }
                    P = Q / Math.cos(W)
                }
            }
            var X = A.__inner[T];
            X.x(0);
            X.width(P);
            A.__inner[T] = X;
            if (!($.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[T]) !== null)) {
                this.by().__inner[T].v(P)
            }
            var Y = $.ig.util.cast($.ig.TextBlock.prototype.$type, this.by().__inner[T]);
            if (Y != null) {
                var Z = this.dm(T, Y, P);
                if (!Y.a5().equals(Z)) {
                    Y.a5(Z);
                    this.by().__inner[T].v(P)
                }
            }
        }
    }
    if (this.eb()) {
        this.ea(A)
    }
    return A
}, ea: function (b) {
    this.d1().al(b, this.d2())
}, df: function (g, h) {
    var f = this;
    var i = 0;
    var j = this.d3() / 2;
    var k = (function () {
        var a = new $.ig.RotateTransform();
        a.h(f.c9());
        a.i(i);
        a.j(j);
        return a
    }());
    g.f(k)
}, eb: function () {
    return !this.b2() && !this.b1()
}, dj: function () {
    return $.ig.AxisLabelsLocation.prototype.outsideLeft
}, dk: function (b) {
    return b == $.ig.AxisLabelsLocation.prototype.outsideLeft || b == $.ig.AxisLabelsLocation.prototype.outsideRight || b == $.ig.AxisLabelsLocation.prototype.insideLeft || b == $.ig.AxisLabelsLocation.prototype.insideRight
}, $type: new $.ig.Type("VerticalAxisLabelPanel", $.ig.AxisLabelPanelBase.prototype.$type)}, true);
$.ig.util.defType("VerticalAxisLabelPanelView", "AxisLabelPanelBaseView", {_ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, init: function (b) {
    $.ig.AxisLabelPanelBaseView.prototype.init.call(this, b);
    this.ah(b)
}, ak: function () {
}, al: function (c, d) {
}, $type: new $.ig.Type("VerticalAxisLabelPanelView", $.ig.AxisLabelPanelBaseView.prototype.$type)}, true);
$.ig.util.defType("Frame", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (d, e, f) {
}, b: function (n, o, p, q) {
    var r = p.count();
    var s = q.count();
    var t = Math.max(r, s);
    var u = 1 - o;
    if (n.count() < t) {
        n.p(n.count(), new Array(t - n.count()))
    }
    if (n.count() > t) {
        n.q(t, n.count() - t)
    }
    for (var v = 0; v < Math.min(r, s); ++v) {
        n.__inner[v] = {__x: p.__inner[v].__x * u + q.__inner[v].__x * o, __y: p.__inner[v].__y * u + q.__inner[v].__y * o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
    if (r < s) {
        var w = r > 0 ? p.__inner[r - 1] : {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        for (var x = r; x < s; ++x) {
            n.__inner[x] = {__x: w.__x * u + q.__inner[x].__x * o, __y: w.__y * u + q.__inner[x].__y * o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
        }
    }
    if (r > s) {
        var y = s > 0 ? q.__inner[s - 1] : {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        for (var z = s; z < r; ++z) {
            n.__inner[z] = {__x: p.__inner[z].__x * u + y.__x * o, __y: p.__inner[z].__y * u + y.__y * o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
        }
    }
}, c: function (p, q, r, s) {
    var t = r.count();
    var u = s.count();
    var v = Math.max(t, u);
    var w = 1 - q;
    if (p.count() < v) {
        var x = new Array(v - p.count());
        for (var y = 0; y < v - p.count(); y++) {
            x[y] = 0
        }
        p.p(p.count(), x)
    }
    if (p.count() > v) {
        p.q(v, p.count() - v)
    }
    for (var z = 0; z < Math.min(t, u); ++z) {
        p.__inner[z] = r.__inner[z] * w + s.__inner[z] * q
    }
    if (t < u) {
        var A = t > 0 ? r.__inner[t - 1] : 0;
        for (var B = t; B < u; ++B) {
            p.__inner[B] = A * w + s.__inner[B] * q
        }
    }
    if (t > u) {
        var C = u > 0 ? s.__inner[u - 1] : 0;
        for (var D = u; D < t; ++D) {
            p.__inner[D] = r.__inner[D] * w + C * q
        }
    }
}, $type: new $.ig.Type("Frame", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryFrame", "Frame", {init: function (b) {
    this.d = new $.ig.List$1($.ig.Array.prototype.$type, 0);
    this.e = new $.ig.List$1($.ig.Single.prototype.$type, 0);
    this.f = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    this.g = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    this.h = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    this.i = new $.ig.List$1(Number, 0);
    $.ig.Frame.prototype.init.call(this);
    this.j = b
}, d: null, e: null, f: null, g: null, h: null, i: null, j: null, a: function (v, w, x) {
    var y = $.ig.util.cast($.ig.CategoryFrame.prototype.$type, w);
    var z = $.ig.util.cast($.ig.CategoryFrame.prototype.$type, x);
    var A = y.d.count();
    var B = z.d.count();
    var C = Math.max(A, B);
    if (this.d.count() < C) {
        while (this.d.count() < C) {
            this.d.add(new Array(this.j))
        }
    }
    if (this.d.count() > C) {
        this.d.q(C, this.d.count() - C)
    }
    for (var D = 0; D < Math.min(A, B); ++D) {
        var E = this.d.__inner[D];
        for (var F = 0; F < this.j; ++F) {
            E[F] = y.d.__inner[D][F] + v * (z.d.__inner[D][F] - y.d.__inner[D][F])
        }
    }
    if (A < B) {
        var G = new Array(this.j);
        for (var H = this.j - 1; H >= 0; --H) {
            G[H] = y.d.count() > 0 ? y.d.__inner[y.d.count() - 1][H] : 0
        }
        for (var I = A; I < B; ++I) {
            var J = this.d.__inner[I];
            for (var K = this.j - 1; K >= 0; --K) {
                J[K] = G[K] + v * (z.d.__inner[I][K] - G[K])
            }
        }
    }
    if (A > B) {
        var L = new Array(this.j);
        for (var M = this.j - 1; M >= 0; --M) {
            L[M] = z.d.count() > 0 ? z.d.__inner[z.d.count() - 1][M] : 0
        }
        for (var N = B; N < A; ++N) {
            var O = this.d.__inner[N];
            for (var P = this.j - 1; P >= 0; --P) {
                O[P] = y.d.__inner[N][P] + v * (L[P] - y.d.__inner[N][P])
            }
        }
    }
    $.ig.CategoryFrame.prototype.b(this.f, v, y.f, z.f);
    $.ig.CategoryFrame.prototype.b(this.g, v, y.g, z.g);
    $.ig.CategoryFrame.prototype.b(this.h, v, y.h, z.h);
    $.ig.CategoryFrame.prototype.c(this.i, v, y.i, z.i)
}, $type: new $.ig.Type("CategoryFrame", $.ig.Frame.prototype.$type)}, true);
$.ig.util.defType("SingleValuesHolder", "ValuesHolder", {init: function () {
    $.ig.ValuesHolder.prototype.init.call(this)
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, e: function () {
    if (this.t() != null) {
        return this.t().count()
    }
    return 0
}, $type: new $.ig.Type("SingleValuesHolder", $.ig.ValuesHolder.prototype.$type)}, true);
$.ig.util.defType("DefaultSingleValueProvider", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, valueColumn: function () {
    return new $.ig.List$1(Number, 0)
}, $type: new $.ig.Type("DefaultSingleValueProvider", $.ig.Object.prototype.$type, [$.ig.IHasSingleValueCategory.prototype.$type])}, true);
$.ig.util.defType("PreparationParams", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, _q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, _u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, $type: new $.ig.Type("PreparationParams", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DefaultSupportsMarkers", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, shouldDisplayMarkers: function () {
    return false
}, updateMarkerCount: function (b) {
}, updateMarkerTemplate: function (c, d) {
}, $type: new $.ig.Type("DefaultSupportsMarkers", $.ig.Object.prototype.$type, [$.ig.ISupportsMarkers.prototype.$type])}, true);
$.ig.util.defType("DefaultProvidesViewport", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, getViewInfo: function (c, d) {
    c = $.ig.Rect.prototype.empty();
    d = $.ig.Rect.prototype.empty();
    return{viewportRect: c, windowRect: d}
}, $type: new $.ig.Type("DefaultProvidesViewport", $.ig.Object.prototype.$type, [$.ig.IProvidesViewport.prototype.$type])}, true);
$.ig.util.defType("DefaultSupportsErrorBars", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, xAxis: function () {
    return null
}, yAxis: function () {
    return null
}, $type: new $.ig.Type("DefaultSupportsErrorBars", $.ig.Object.prototype.$type, [$.ig.ISupportsErrorBars.prototype.$type])}, true);
$.ig.util.defType("MarkerTemplates", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (e, f) {
    e.beginPath();
    var g = f.actualItemBrush();
    var h = f.outline();
    if (g != null && e.fillStyle != g.__fill) {
        e.fillStyle = g.__fill
    }
    if (f.outline() != null && e.strokeStyle != h.__fill) {
        e.strokeStyle = f.outline().__fill;
        e.lineWidth = f.thickness()
    }
}, b: function (c, d) {
    if (d.actualItemBrush() != null) {
        c.fill()
    }
    if (d.outline() != null) {
        c.stroke()
    }
    c.closePath()
}, c: function (b) {
    b.isConstant = true;
    b.width = 8;
    b.height = 8
}, d: function (e) {
    var f = e.context;
    var g = e.data;
    $.ig.MarkerTemplates.prototype.a(f, g);
    var h = Math.min(e.availableWidth, e.availableHeight) / 2;
    f.arc(e.xPosition, e.yPosition, h, 0, (Math.PI * 2), false);
    $.ig.MarkerTemplates.prototype.b(f, g)
}, e: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m, n);
    i.lineTo(m + l, n + h.availableHeight);
    i.lineTo(m + h.availableWidth, n + 0);
    i.lineTo(m, n);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, f: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m, n + h.availableHeight);
    i.lineTo(m + l, n + 0);
    i.lineTo(m + h.availableWidth, n + h.availableHeight);
    i.lineTo(m, n + h.availableHeight);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, g: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.rect(m, n, h.availableWidth, h.availableHeight);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, h: function (f) {
    var g = f.context;
    var h = f.data;
    $.ig.MarkerTemplates.prototype.a(g, h);
    var i = (f.availableHeight / 2);
    var j = (f.availableWidth / 2);
    var k = (f.xPosition - j);
    var l = (f.yPosition - i);
    g.rect(k | 0, l | 0, f.availableWidth, f.availableHeight);
    $.ig.MarkerTemplates.prototype.b(g, h)
}, i: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m + 0, n + k);
    i.lineTo(m + l, n + h.availableHeight);
    i.lineTo(m + h.availableWidth, n + k);
    i.lineTo(m + l, n + 0);
    i.lineTo(m + 0, n + k);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, j: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m + ((4 / 8) * h.availableWidth), n + 0);
    i.lineTo(m + ((0.1956 / 8) * h.availableWidth), n + ((2.764 / 8) * h.availableHeight));
    i.lineTo(m + ((1.65 / 8) * h.availableWidth), n + ((7.236 / 8) * h.availableHeight));
    i.lineTo(m + ((6.35 / 8) * h.availableWidth), n + ((7.236 / 8) * h.availableHeight));
    i.lineTo(m + ((7.8044 / 8) * h.availableWidth), n + ((2.764 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + 0);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, k: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m + ((4 / 8) * h.availableWidth), n + 0);
    i.lineTo(m + ((0.356 / 8) * h.availableWidth), n + ((2 / 8) * h.availableHeight));
    i.lineTo(m + ((0.356 / 8) * h.availableWidth), n + ((6 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + (h.availableHeight));
    i.lineTo(m + ((7.464 / 8) * h.availableWidth), n + ((6 / 8) * h.availableHeight));
    i.lineTo(m + ((7.464 / 8) * h.availableWidth), n + ((2 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + 0);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, l: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m + ((4 / 8) * h.availableWidth), n + 0);
    i.lineTo(m + ((2.5856 / 8) * h.availableWidth), n + ((2.5856 / 8) * h.availableHeight));
    i.lineTo(m + ((0 / 8) * h.availableWidth), n + ((4 / 8) * h.availableHeight));
    i.lineTo(m + ((2.5856 / 8) * h.availableWidth), n + ((5.4144 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + ((8 / 8) * h.availableHeight));
    i.lineTo(m + ((5.4144 / 8) * h.availableWidth), n + ((5.4144 / 8) * h.availableHeight));
    i.lineTo(m + ((8 / 8) * h.availableWidth), n + ((4 / 8) * h.availableHeight));
    i.lineTo(m + ((5.4144 / 8) * h.availableWidth), n + ((2.5856 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + 0);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, m: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m + ((4 / 8) * h.availableWidth), n + 0);
    i.lineTo(m + ((2.8244 / 8) * h.availableWidth), n + ((2.382 / 8) * h.availableHeight));
    i.lineTo(m + ((0.1956 / 8) * h.availableWidth), n + ((2.764 / 8) * h.availableHeight));
    i.lineTo(m + ((2.098 / 8) * h.availableWidth), n + ((4.618 / 8) * h.availableHeight));
    i.lineTo(m + ((1.6488 / 8) * h.availableWidth), n + ((7.236 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + ((6 / 8) * h.availableHeight));
    i.lineTo(m + ((6.3512 / 8) * h.availableWidth), n + ((7.236 / 8) * h.availableHeight));
    i.lineTo(m + ((5.902 / 8) * h.availableWidth), n + ((4.618 / 8) * h.availableHeight));
    i.lineTo(m + ((7.8044 / 8) * h.availableWidth), n + ((2.764 / 8) * h.availableHeight));
    i.lineTo(m + ((5.1756 / 8) * h.availableWidth), n + ((2.382 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + 0);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, n: function (h) {
    var i = h.context;
    var j = h.data;
    $.ig.MarkerTemplates.prototype.a(i, j);
    var k = (h.availableHeight / 2);
    var l = (h.availableWidth / 2);
    var m = (h.xPosition - l);
    var n = (h.yPosition - k);
    i.moveTo(m + ((4 / 8) * h.availableWidth), n + 0);
    i.lineTo(m + ((3 / 8) * h.availableWidth), n + ((2.268 / 8) * h.availableHeight));
    i.lineTo(m + ((0.536 / 8) * h.availableWidth), n + ((2 / 8) * h.availableHeight));
    i.lineTo(m + ((2 / 8) * h.availableWidth), n + ((4 / 8) * h.availableHeight));
    i.lineTo(m + ((0.536 / 8) * h.availableWidth), n + ((6 / 8) * h.availableHeight));
    i.lineTo(m + ((3 / 8) * h.availableWidth), n + ((5.732 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + ((8 / 8) * h.availableHeight));
    i.lineTo(m + ((5 / 8) * h.availableWidth), n + ((5.732 / 8) * h.availableHeight));
    i.lineTo(m + ((7.464 / 8) * h.availableWidth), n + ((6 / 8) * h.availableHeight));
    i.lineTo(m + ((6 / 8) * h.availableWidth), n + ((4 / 8) * h.availableHeight));
    i.lineTo(m + ((7.464 / 8) * h.availableWidth), n + ((2 / 8) * h.availableHeight));
    i.lineTo(m + ((5 / 8) * h.availableWidth), n + ((2.268 / 8) * h.availableHeight));
    i.lineTo(m + ((4 / 8) * h.availableWidth), n + 0);
    $.ig.MarkerTemplates.prototype.b(i, j)
}, $type: new $.ig.Type("MarkerTemplates", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ChartAxisRangeChangedEventArgs", "EventArgs", {init: function (g, h, i, j, k, l) {
    $.ig.EventArgs.prototype.init.call(this);
    this.chart(g);
    this.axis(h);
    this.oldMinimumValue(i);
    this.minimumValue(j);
    this.oldMaximumValue(k);
    this.maximumValue(l)
}, _chart: null, chart: function (b) {
    if (arguments.length === 1) {
        this._chart = b;
        return b
    } else {
        return this._chart
    }
}, _axis: null, axis: function (b) {
    if (arguments.length === 1) {
        this._axis = b;
        return b
    } else {
        return this._axis
    }
}, _oldMinimumValue: null, oldMinimumValue: function (b) {
    if (arguments.length === 1) {
        this._oldMinimumValue = b;
        return b
    } else {
        return this._oldMinimumValue
    }
}, _minimumValue: null, minimumValue: function (b) {
    if (arguments.length === 1) {
        this._minimumValue = b;
        return b
    } else {
        return this._minimumValue
    }
}, _oldMaximumValue: null, oldMaximumValue: function (b) {
    if (arguments.length === 1) {
        this._oldMaximumValue = b;
        return b
    } else {
        return this._oldMaximumValue
    }
}, _maximumValue: null, maximumValue: function (b) {
    if (arguments.length === 1) {
        this._maximumValue = b;
        return b
    } else {
        return this._maximumValue
    }
}, $type: new $.ig.Type("ChartAxisRangeChangedEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("LegendBaseViewManager", "Object", {a: null, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = b;
    this.i(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.JQueryObject.prototype.$type, 0))
}, l: function (b) {
    this.h($(b));
    this.g($("<table></table>"));
    this.g().addClass(this.a.j());
    this.h().append(this.g())
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, q: function (i, j) {
    var k = $.ig.util.cast($.ig.ContentControl.prototype.$type, i);
    var l = $("<tr></tr>");
    l.addClass(this.a.k());
    if (k != null) {
        var m = $.ig.util.cast($.ig.DataContext.prototype.$type, k.a9());
        if (m != null && k.ba() != null) {
            var n = new $.ig.DataTemplatePassInfo();
            n.context = l;
            n.passID = "LegendItem";
            var o = new $.ig.DataTemplateMeasureInfo();
            o.passInfo = n;
            o.width = NaN;
            o.height = NaN;
            o.data = m;
            o.context = l;
            var p = new $.ig.DataTemplateRenderInfo();
            p.passInfo = n;
            if (k.ba().measure() != null) {
                k.ba().measure()(o)
            }
            p.context = l;
            p.availableWidth = o.width;
            p.availableHeight = o.height;
            p.data = m;
            p.xPosition = 0;
            p.yPosition = 0;
            k.ba().render()(p);
            l.find(".ui-legend-item-badge").removeClass("ui-legend-item-badge").addClass(this.a.l());
            l.find(".ui-legend-item-text").removeClass("ui-legend-item-text").addClass(this.a.m())
        }
    }
    return l
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, t: function (e, f) {
    var g = this.q(e, this.g());
    g.attr("id", f.toString());
    g.mouseup(this.a.an.on(this.a));
    g.mousedown(this.a.am.on(this.a));
    g.mouseleave(this.a.al.on(this.a));
    g.mousemove(this.a.ak.on(this.a));
    this.i().add(e, g);
    if ((this.g().children().size() == 0) || (f >= this.g().children().size())) {
        this.g().append(g)
    } else {
        var h = this.g().children().eq(f);
        h.after(g)
    }
}, u: function (b) {
}, v: function (d) {
    var c = this;
    var e;
    if ((function () {
        var a = c.i().tryGetValue(d, e);
        e = a.value;
        return a.ret
    }())) {
        e.remove();
        this.i().remove(d)
    }
}, w: function (f) {
    var h = this.i().keys().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        var i = $.ig.util.cast($.ig.ContentControl.prototype.$type, g);
        if (i != null && i.a9() != null) {
            var j = $.ig.util.cast($.ig.DataContext.prototype.$type, i.a9());
            if (j != null && j.itemLabel() == f.itemLabel() && j.series() == f.series() && j.itemBrush() == f.itemBrush()) {
                return true
            }
        }
    }
    return false
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, ab: function (e) {
    var f = this.h().width();
    var g = this.h().height();
    var h = $('<div style="position : relative;" />');
    this.j($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.h().append(h);
    h.append(this.j());
    this.k(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.j()[0]).getContext("2d")));
    this.j().attr("width", f.toString());
    this.j().attr("height", g.toString());
    return this.k()
}, ac: function () {
    return new $.ig.Size(this.h().width(), Math.max(10, this.h().height() - 15))
}, ad: function (j, k, l, m) {
    var n = j.c();
    n.beginPath();
    n.moveTo(k.bn().__inner[0].__x, k.bn().__inner[0].__y);
    for (var o = 1; o < k.bn().count(); o++) {
        n.lineTo(k.bn().__inner[o].__x, k.bn().__inner[o].__y)
    }
    n.lineTo(k.bn().__inner[0].__x, k.bn().__inner[0].__y);
    var p = n.createLinearGradient(m.left(), m.top(), m.left(), m.top() + m.height());
    var r = l.b().getEnumerator();
    while (r.moveNext()) {
        var q = r.current();
        p.a(q.c(), q.d().__fill)
    }
    n.fillStyle = p;
    n.fill()
}, $type: new $.ig.Type("LegendBaseViewManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LegendBase", "ContentControl", {bu: function () {
    return new $.ig.LegendBaseView(this)
}, bv: function (b) {
    this.bq(b)
}, _bq: null, bq: function (b) {
    if (arguments.length === 1) {
        this._bq = b;
        return b
    } else {
        return this._bq
    }
}, init: function () {
    $.ig.ContentControl.prototype.init.call(this);
    var b = this.bu();
    this.bv(b);
    b.r();
    this.children(new $.ig.ObservableCollection$1($.ig.UIElement.prototype.$type, 0))
}, by: function (c, d) {
}, bz: function (c, d) {
}, _children: null, children: function (b) {
    if (arguments.length === 1) {
        this._children = b;
        return b
    } else {
        return this._children
    }
}, _br: null, br: function (b) {
    if (arguments.length === 1) {
        this._br = b;
        return b
    } else {
        return this._br
    }
}, _bs: null, bs: function (b) {
    if (arguments.length === 1) {
        this._bs = b;
        return b
    } else {
        return this._bs
    }
}, bt: function () {
    if (this.br() != null) {
        return this.br()
    } else {
        return this.bs()
    }
}, propertyChanged: null, propertyUpdated: null, b6: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, legendItemMouseLeftButtonDown: null, b7: function (b) {
    if (this.legendItemMouseLeftButtonDown != null) {
        this.legendItemMouseLeftButtonDown(this, b)
    }
}, legendItemMouseLeftButtonUp: null, b8: function (b) {
    if (this.legendItemMouseLeftButtonUp != null) {
        this.legendItemMouseLeftButtonUp(this, b)
    }
}, legendItemMouseEnter: null, b9: function (b) {
    if (this.legendItemMouseEnter != null) {
        this.legendItemMouseEnter(this, b)
    }
}, legendItemMouseLeave: null, ca: function (b) {
    if (this.legendItemMouseLeave != null) {
        this.legendItemMouseLeave(this, b)
    }
}, legendItemMouseMove: null, cb: function (b) {
    if (this.legendItemMouseMove != null) {
        this.legendItemMouseMove(this, b)
    }
}, provideContainer: function (b) {
    this.bq().z(b)
}, legendItemsListStyle: function (b) {
    if (arguments.length === 1) {
        this.bq().j(b);
        return b
    } else {
        return this.bq().j()
    }
}, legendItemStyle: function (b) {
    if (arguments.length === 1) {
        this.bq().k(b);
        return b
    } else {
        return this.bq().k()
    }
}, legendItemBadgeStyle: function (b) {
    if (arguments.length === 1) {
        this.bq().l(b);
        return b
    } else {
        return this.bq().l()
    }
}, legendItemTextStyle: function (b) {
    if (arguments.length === 1) {
        this.bq().m(b);
        return b
    } else {
        return this.bq().m()
    }
}, $type: new $.ig.Type("LegendBase", $.ig.ContentControl.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("LegendBaseView", "Object", {init: function (b) {
    this.a = false;
    $.ig.Object.prototype.init.call(this);
    this.i(b);
    this.h(new $.ig.LegendBaseViewManager(this))
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, r: function () {
}, s: function (h) {
    var g = this;
    var i;
    var j;
    var k;
    (function () {
        var a = g.u(h, i, j, k);
        i = a.chart;
        j = a.series;
        k = a.item;
        return a.ret
    }());
    var l = new $.ig.MouseButtonEventArgs();
    var m = new $.ig.DataChartLegendMouseButtonEventArgs(i, j, k, l, h);
    return m
}, t: function (h) {
    var g = this;
    var i;
    var j;
    var k;
    (function () {
        var a = g.u(h, i, j, k);
        i = a.chart;
        j = a.series;
        k = a.item;
        return a.ret
    }());
    var l = new $.ig.MouseEventArgs();
    var m = new $.ig.ChartLegendMouseEventArgs(i, j, k, l, h);
    return m
}, u: function (g, h, i, j) {
    h = ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, this.i().bt()));
    i = null;
    j = null;
    if (g != null) {
        var k = $.ig.util.cast($.ig.ContentControl.prototype.$type, g);
        if (k != null && k.a9() != null && $.ig.util.cast($.ig.DataContext.prototype.$type, k.a9()) !== null) {
            var l = $.ig.util.cast($.ig.DataContext.prototype.$type, k.a9());
            i = $.ig.util.cast($.ig.Series.prototype.$type, l.series());
            if (i != null) {
                h = i.seriesViewer()
            }
            j = l.item()
        }
    }
    return{chart: h, series: i, item: j}
}, v: function () {
}, w: function () {
    return true
}, x: function (b) {
}, y: function (b) {
}, z: function (b) {
    this.h().l(b)
}, aa: function (b) {
    this.h().v(b)
}, ab: function (c) {
    var d = this.i().children().indexOf1(c);
    this.h().t(c, d)
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, a: null, ak: function (a) {
    if (!this.a) {
        this.a = true;
        this.i().b9(this.t(this.ao(a)))
    }
}, al: function (a) {
    this.a = false;
    this.i().ca(this.t(this.ao(a)))
}, am: function (a) {
    this.i().b7(this.s(this.ao(a)))
}, an: function (a) {
    this.i().b8(this.s(this.ao(a)))
}, ao: function (a) {
    var b = null;
    b = $(a.currentTarget).attr("id");
    return this.i().children().__inner[$.ig.Number.prototype.parseInt(b)]
}, $type: new $.ig.Type("LegendBaseView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("GradientData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.b(new $.ig.List$1($.ig.GradientStopData.prototype.$type, 0))
}, _b: null, b: function (b) {
    if (arguments.length === 1) {
        this._b = b;
        return b
    } else {
        return this._b
    }
}, $type: new $.ig.Type("GradientData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("GradientStopData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, $type: new $.ig.Type("GradientStopData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesViewerComponentsForView", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, $type: new $.ig.Type("SeriesViewerComponentsForView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesViewerComponentsFromView", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _b: null, b: function (b) {
    if (arguments.length === 1) {
        this._b = b;
        return b
    } else {
        return this._b
    }
}, $type: new $.ig.Type("SeriesViewerComponentsFromView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesViewer", "Control", {_fb: null, fb: function (b) {
    if (arguments.length === 1) {
        this._fb = b;
        return b
    } else {
        return this._fb
    }
}, staticInit: function () {
    $.ig.SeriesViewer.prototype.de = new $.ig.Rect(0, 0, 0, 1, 1)
}, init: function () {
    var a = this;
    this.cn = new $.ig.SeriesCollection();
    this.cx = $.ig.Rect.prototype.empty();
    this.cy = $.ig.Rect.prototype.empty();
    this.cz = new $.ig.SeriesViewerComponentsForView();
    this.c0 = false;
    this.c1 = $.ig.InteractionState.prototype.none;
    this.c2 = false;
    this.c3 = false;
    this.c5 = false;
    this.da = 0;
    this.db = false;
    this.dc = $.ig.Rect.prototype.empty();
    this.df = false;
    this.dg = null;
    this.dh = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0);
    this.di = NaN;
    this.dj = NaN;
    this.dk = NaN;
    this.dl = NaN;
    this.dm = 20;
    this.dn = NaN;
    this.dq = 0;
    this.dr = 0;
    this.ds = 1;
    this.dt = 1;
    $.ig.Control.prototype.init.call(this);
    this.canvasRenderScheduler(new $.ig.CanvasRenderScheduler());
    this.fp(new $.ig.CanvasRenderScheduler());
    $.ig.SeriesViewer.prototype.de = new $.ig.Rect(0, 0, 0, 1, 1);
    this.syncSettings((function () {
        var b = new $.ig.SyncSettings();
        b.synchronizeHorizontally(true);
        b.synchronizeVertically(true);
        return b
    }()));
    this.ff($.ig.Rect.prototype.empty());
    this.fk($.ig.Rect.prototype.empty());
    this.fb(this.io());
    this.ip(this.fb());
    this.fb().a6();
    this.fi(this.crosshairVisibility() == $.ig.Visibility.prototype.visible);
    this.fn().thumbnailSizeChanged = $.ig.Delegate.prototype.combine(this.fn().thumbnailSizeChanged, function (e, f) {
        (a.fn().dd()).u(true);
        var h = a.series().getEnumerator();
        while (h.moveNext()) {
            var g = h.current();
            g.dv(true)
        }
    });
    this.actualSyncLink(new $.ig.SyncLink());
    this.hv(null, this.actualSyncLink());
    this.fc(new $.ig.ChartContentManager(this));
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (b, c) {
        a.ig(b, c.propertyName(), c.oldValue(), c.newValue())
    });
    this.series().collectionChanged = $.ig.Delegate.prototype.combine(this.series().collectionChanged, this.fs.on(this));
    this.series().collectionResetting = $.ig.Delegate.prototype.combine(this.series().collectionResetting, this.fu.on(this));
    this.fb().bx();
    this.i1()
}, series: function () {
    return this.cn
}, cn: null, fs: function (g, h) {
    if (h.oldItems() != null) {
        var j = h.oldItems().getEnumerator();
        while (j.moveNext()) {
            var i = j.current();
            i.syncLink(null);
            i.seriesViewer(null);
            this.ft(i);
            this.fb().bp(i)
        }
    }
    if (h.newItems() != null) {
        var l = h.newItems().getEnumerator();
        while (l.moveNext()) {
            var k = l.current();
            if (!this.fb().br(k)) {
                this.iy(k);
                this.fb().bw(k);
                k.syncLink(this.actualSyncLink());
                k.seriesViewer(this);
                k.fh()
            }
        }
    }
    this.i8()
}, ft: function (b) {
    if ($.ig.util.cast($.ig.Series.prototype.$type, b) !== null) {
        (b).itemsSource(null)
    } else {
        if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, b) !== null) {
            (b).itemsSource(null)
        }
    }
    this.removeSpecificDataSource((b).name(), true)
}, fu: function (e, f) {
    var h = this.series().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.syncLink(null);
        g.seriesViewer(null);
        this.ft(g);
        this.fb().bp(g)
    }
}, fv: function (l, m, n, o) {
    var p = this.viewportRect();
    var q = p.width();
    var r = p.height();
    var s = q / r;
    var t = l / m;
    if (isNaN(s)) {
        return{width: l, height: m}
    }
    if (isNaN(t) || n || o || Math.abs(s - t) > 0.0001) {
        if (n && o) {
            if (l > m) {
                m = l / s
            } else {
                l = m * s
            }
        } else {
            if (n) {
                m = l / s
            } else {
                l = m * s
            }
        }
    }
    if (m > 1) {
        var u = 1 / m;
        m = 1;
        l = l * u
    }
    if (l > 1) {
        var v = 1 / l;
        l = 1;
        m = m * v
    }
    return{width: l, height: m}
}, fw: function () {
    return false
}, fx: function (b) {
    return null
}, fy: function (b) {
    return null
}, getMarkerBrushByIndex: function (b) {
    return null
}, getMarkerOutlineByIndex: function (b) {
    return null
}, _fc: null, fc: function (b) {
    if (arguments.length === 1) {
        this._fc = b;
        return b
    } else {
        return this._fc
    }
}, crosshairPoint: function (c) {
    if (arguments.length === 1) {
        if (this.co != c) {
            var d = this.co;
            this.co = c;
            this.f2($.ig.SeriesViewer.prototype.a7, d, this.co)
        }
        return c
    } else {
        return this.co
    }
}, co: null, fd: function () {
    return this.fe() == $.ig.InteractionState.prototype.dragZoom || this.fe() == $.ig.InteractionState.prototype.dragPan
}, legend: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.legendProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.legendProperty)
    }
}, animateSeriesWhenAxisRangeChanges: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.animateSeriesWhenAxisRangeChangesProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.animateSeriesWhenAxisRangeChangesProperty)
    }
}, propertyChanged: null, propertyUpdated: null, f2: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, f3: function () {
    this.f4(this.series())
}, f4: function (f) {
    var h = f.getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        var i = g.actualLegend();
        if (i == null) {
            continue
        }
        var j = g.legendItem();
        if (j == null) {
            continue
        }
        if (i.children().contains(j)) {
            i.children().remove(j)
        }
        if (!i.children().contains(j) && g.legendItemVisibility() != $.ig.Visibility.prototype.collapsed) {
            i.by(j, g)
        }
    }
}, f5: function (d, e, f) {
    this.gg(d, e, $.ig.util.cast($.ig.MouseEventArgs.prototype.$type, f))
}, f6: function (d, e, f) {
    this.gf(d, e, $.ig.util.cast($.ig.MouseEventArgs.prototype.$type, f))
}, f7: function (d, e, f) {
    this.gh(d, e, $.ig.util.cast($.ig.MouseEventArgs.prototype.$type, f))
}, f8: function (d, e, f) {
    this.gd(d, e, $.ig.util.cast($.ig.MouseButtonEventArgs.prototype.$type, f))
}, f9: function (e, f, g) {
    var h = $.ig.util.cast($.ig.MouseButtonEventArgs.prototype.$type, g);
    if (h != null) {
        this.ge(e, f, $.ig.util.cast($.ig.MouseButtonEventArgs.prototype.$type, g))
    }
}, ga: function (d, e, f) {
}, gb: function (d, e, f) {
}, seriesCursorMouseMove: null, gc: function (c, d) {
    if (this.seriesCursorMouseMove != null && this.fi()) {
        this.seriesCursorMouseMove(this, new $.ig.ChartCursorEventArgs(this, c, d))
    }
}, seriesMouseLeftButtonDown: null, gd: function (d, e, f) {
    if (this.seriesMouseLeftButtonDown != null) {
        this.seriesMouseLeftButtonDown(this, new $.ig.DataChartMouseButtonEventArgs(this, d, e, f))
    }
}, seriesMouseLeftButtonUp: null, ge: function (d, e, f) {
    if (this.seriesMouseLeftButtonUp != null) {
        this.seriesMouseLeftButtonUp(this, new $.ig.DataChartMouseButtonEventArgs(this, d, e, f))
    }
}, seriesMouseMove: null, gf: function (d, e, f) {
    if (this.seriesMouseMove != null) {
        this.seriesMouseMove(this, new $.ig.ChartMouseEventArgs(this, d, e, f))
    }
}, seriesMouseEnter: null, gg: function (d, e, f) {
    if (this.seriesMouseEnter != null) {
        this.seriesMouseEnter(this, new $.ig.ChartMouseEventArgs(this, d, e, f))
    }
}, seriesMouseLeave: null, gh: function (d, e, f) {
    if (this.seriesMouseLeave != null) {
        this.seriesMouseLeave(this, new $.ig.ChartMouseEventArgs(this, d, e, f))
    }
}, cx: null, viewportRect: function () {
    return this.cx
}, cy: null, effectiveViewport: function () {
    return this.cy
}, gi: function (b) {
    return $.ig.Rect.prototype.empty()
}, gj: function (b) {
    b.c2(this.viewportRect())
}, windowRect: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.windowRectProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.windowRectProperty)
    }
}, gk: function (c, d) {
    if (!d.isEmpty()) {
        this.cx = d;
        this.cy = this.gi(this.cx);
        this.fb().ee(this.cx)
    }
    if (this.fw()) {
        if (this.actualSyncLink() != null) {
            this.hx(this.actualWindowRect())
        }
    }
    this.h9(c, d)
}, cz: null, gl: function () {
    return this.cz
}, horizontalZoomable: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.horizontalZoomableProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.horizontalZoomableProperty)
    }
}, horizontalZoombarVisibility: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.horizontalZoombarVisibilityProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.horizontalZoombarVisibilityProperty)
    }
}, verticalZoomable: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.verticalZoomableProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.verticalZoomableProperty)
    }
}, verticalZoombarVisibility: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.verticalZoombarVisibilityProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.verticalZoombarVisibilityProperty)
    }
}, gm: function () {
    $.ig.SyncManager.prototype.a(this)
}, gn: function () {
    $.ig.SyncManager.prototype.b(this)
}, fe: function (b) {
    if (arguments.length === 1) {
        if (this.fe() != b) {
            this.c1 = b;
            switch (this.c1) {
                case $.ig.InteractionState.prototype.none:
                    this.fb().bj();
                    this.ie();
                    this.fb().bk();
                    break;
                case $.ig.InteractionState.prototype.dragZoom:
                    this.fb().bl();
                    this.fb().bm();
                    this.ie();
                    this.fb().bn();
                    break;
                case $.ig.InteractionState.prototype.dragPan:
                    this.fb().bl();
                    this.fb().bm();
                    this.ie();
                    this.fb().bo();
                    break
            }
        }
        return b
    } else {
        return this.c1
    }
}, c0: null, c1: null, _ff: null, ff: function (b) {
    if (arguments.length === 1) {
        this._ff = b;
        return b
    } else {
        return this._ff
    }
}, _fg: null, fg: function (b) {
    if (arguments.length === 1) {
        this._fg = b;
        return b
    } else {
        return this._fg
    }
}, gu: function (b) {
    this.hw(this.h2(b))
}, gv: function (b) {
    this.hw({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, gw: function (j, k) {
    var l = this.actualWindowRect().left() + this.actualWindowRect().width() * j.__x / this.viewportRect().width();
    var m = this.actualWindowRect().top() + this.actualWindowRect().height() * j.__y / this.viewportRect().height();
    var n = 1 - $.ig.MathUtil.prototype.i(k, -0.5, 0.5);
    var o = Math.max(0, l - n * (l - this.actualWindowRect().left()));
    var p = Math.min(1, m + n * (this.actualWindowRect().bottom() - m));
    var q = Math.min(1, l + n * (this.actualWindowRect().right() - l));
    var r = Math.max(0, m - n * (m - this.actualWindowRect().top()));
    this.hx(new $.ig.Rect(0, o, r, q - o, p - r));
    return this.horizontalZoomable() || this.verticalZoomable()
}, gx: function (i) {
    var j = this.actualWindowRect().left() + this.actualWindowRect().width() * i.__x / this.viewportRect().width();
    var k = this.actualWindowRect().top() + this.actualWindowRect().height() * i.__y / this.viewportRect().height();
    var l = 0.7;
    var m = Math.max(0, j - l * (j - this.actualWindowRect().left()));
    var n = Math.min(1, k + l * (this.actualWindowRect().bottom() - k));
    var o = Math.min(1, j + l * (this.actualWindowRect().right() - j));
    var p = Math.max(0, k - l * (k - this.actualWindowRect().top()));
    this.hx(new $.ig.Rect(0, m, p, o - m, n - p))
}, _fh: null, fh: function (b) {
    if (arguments.length === 1) {
        this._fh = b;
        return b
    } else {
        return this._fh
    }
}, onKeyDown: function (d) {
    if (this.fe() == $.ig.InteractionState.prototype.dragPan && d == $.ig.Key.prototype.escape) {
        this.fb().by();
        this.fe($.ig.InteractionState.prototype.none);
        this.hy($.ig.Rect.prototype.empty());
        if (this.windowResponse() == $.ig.WindowResponse.prototype.immediate) {
            this.hx(this.fh())
        }
        return true
    }
    if (this.fe() == $.ig.InteractionState.prototype.dragZoom && d == $.ig.Key.prototype.escape) {
        this.fb().by();
        this.fe($.ig.InteractionState.prototype.none);
        this.fb().bz();
        this.hy($.ig.Rect.prototype.empty());
        return true
    }
    var e = $.ig.Rect.prototype.empty();
    var f = false;
    switch (d) {
        case $.ig.Key.prototype.home:
            f = true;
            e = new $.ig.Rect(0, 0, 0, 1, 1);
            break;
        case $.ig.Key.prototype.pageDown:
            f = true;
            e = new $.ig.Rect(0, this.actualWindowRect().left() - 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top() - 0.1 * this.actualWindowRect().height(), 1.2 * this.actualWindowRect().width(), 1.2 * this.actualWindowRect().height());
            break;
        case $.ig.Key.prototype.pageUp:
            f = true;
            e = new $.ig.Rect(0, this.actualWindowRect().left() + 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top() + 0.1 * this.actualWindowRect().height(), 0.8 * this.actualWindowRect().width(), 0.8 * this.actualWindowRect().height());
            break;
        case $.ig.Key.prototype.left:
            f = true;
            e = new $.ig.Rect(0, this.actualWindowRect().left() - 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top(), this.actualWindowRect().width(), this.actualWindowRect().height());
            e.x(e.x() - Math.min(e.left(), 0));
            break;
        case $.ig.Key.prototype.right:
            f = true;
            e = new $.ig.Rect(0, this.actualWindowRect().left() + 0.1 * this.actualWindowRect().width(), this.actualWindowRect().top(), this.actualWindowRect().width(), this.actualWindowRect().height());
            e.x(e.x() - Math.max(e.right() - 1, 0));
            break;
        case $.ig.Key.prototype.up:
            f = true;
            e = new $.ig.Rect(0, this.actualWindowRect().left(), this.actualWindowRect().top() - 0.1 * this.actualWindowRect().height(), this.actualWindowRect().width(), this.actualWindowRect().height());
            e.y(e.y() - Math.min(e.top(), 0));
            break;
        case $.ig.Key.prototype.down:
            f = true;
            e = new $.ig.Rect(0, this.actualWindowRect().left(), this.actualWindowRect().top() + 0.1 * this.actualWindowRect().height(), this.actualWindowRect().width(), this.actualWindowRect().height());
            e.y(e.y() - Math.max(e.bottom() - 1, 0));
            break
    }
    if (!e.isEmpty() && e != this.actualWindowRect()) {
        this.hx(e)
    }
    return f
}, c2: null, _fi: null, fi: function (b) {
    if (arguments.length === 1) {
        this._fi = b;
        return b
    } else {
        return this._fi
    }
}, c3: null, c4: null, g2: function (b) {
    if (b.__x >= 0 && b.__y >= 0 && b.__x <= this.viewportRect().width() && b.__y <= this.viewportRect().height()) {
        this.g3(b)
    } else {
        this.hg()
    }
}, g3: function (e) {
    if (this.c3 && this.fi()) {
        var f = this.viewportRect().height() > this.viewportRect().width();
        this.fb().ek(f);
        var h = this.series().getEnumerator();
        while (h.moveNext()) {
            var g = h.current();
            if (g.__visibility == $.ig.Visibility.prototype.visible) {
                g.gr(e, this.fb().el.on(this.fb()))
            }
        }
        this.fb().ej()
    }
}, dragCrosshairActivated: function () {
    return this.c3
}, _tooltipStyle: null, tooltipStyle: function (b) {
    if (arguments.length === 1) {
        this._tooltipStyle = b;
        return b
    } else {
        return this._tooltipStyle
    }
}, g4: function (b) {
    if (this.fi() || this.isDragCrosshairEnabled()) {
        this.c3 = true;
        this.ff(new $.ig.Rect(0, b.__x, b.__y, 0, 0));
        this.fg(new $.ig.Rect(0, b.__x, b.__y, 0, 0));
        this.fe($.ig.InteractionState.prototype.none);
        this.hw(this.h2(b))
    }
}, g5: function (b) {
    this.g4(b);
    this.g3(b);
    this.ie()
}, g6: function (b) {
    if (!this.c3) {
        this.hm(b, true)
    }
}, g7: function (b) {
    this.fk($.ig.Rect.prototype.empty());
    this.hg()
}, fj: function () {
    return this.c2
}, g9: function (b) {
    this.c4 = 1;
    this.c3 = false;
    this.fb().ck();
    this.fb().bz();
    this.fb().ei();
    this.fb().cj();
    this.fb().cg();
    this.fb().bm();
    this.fe($.ig.InteractionState.prototype.none);
    this.c5 = true;
    this.c2 = true
}, ha: function (b) {
    this.fb().cj();
    this.fb().cg();
    if (this.fb().a3()) {
        this.hh(b)
    } else {
        this.hi(b);
        this.c4 = b
    }
}, hb: function (b) {
    this.ff(new $.ig.Rect(0, b.__x, b.__y, 0, 0));
    this.fg(new $.ig.Rect(0, b.__x, b.__y, 0, 0))
}, hc: function (i, j) {
    var k = this.actualWindowRect().width();
    var l = this.actualWindowRect().height();
    var m = this.actualWindowRect().left() + k / 2;
    var n = this.actualWindowRect().top() + l / 2;
    k = k / i;
    l = l / i;
    var o = m - k / 2;
    var p = n - l / 2;
    this.hx(new $.ig.Rect(0, o, p, k, l))
}, hd: function (b) {
    if (this.fb().a3()) {
        this.hh(b)
    } else {
        this.hi(b)
    }
    this.ff($.ig.Rect.prototype.empty());
    this.c2 = false
}, he: function (b) {
    this.c2 = false;
    this.ff($.ig.Rect.prototype.empty());
    this.hg()
}, hf: function (b) {
    this.fb().en(b.d())
}, hg: function () {
    if (this.c3) {
        this.hw({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.fb().ei()
    }
    this.c3 = false
}, hh: function (f) {
    var g = 1 / f;
    var h = {__x: this.windowRect().x() + this.windowRect().width() / 2, __y: this.windowRect().y() + this.windowRect().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var i = {__x: this.windowRect().x() - h.__x, __y: this.windowRect().y() - h.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var j = new $.ig.Rect(0, i.__x * g + h.__x, i.__y * g + h.__y, this.windowRect().width() * g, this.windowRect().height() * g);
    this.hx(j)
}, hi: function (h) {
    var i = h - this.c4;
    if (i != 0) {
        var j = 0.03;
        var k = i < 0 ? 1 + j : 1 - j;
        var l = {__x: this.windowRect().x() + this.windowRect().width() / 2, __y: this.windowRect().y() + this.windowRect().height() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var m = {__x: this.windowRect().x() - l.__x, __y: this.windowRect().y() - l.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var n = new $.ig.Rect(0, m.__x * k + l.__x, m.__y * k + l.__y, this.windowRect().width() * k, this.windowRect().height() * k);
        this.hx(n)
    }
}, hj: function (b) {
    this.hy($.ig.Rect.prototype.empty());
    this.hx(b)
}, hk: function (c, d) {
    if (!this.c2) {
        this.c5 = false
    }
    this.hm(c, d)
}, hl: function (b) {
    if (this.defaultInteraction() != $.ig.InteractionState.prototype.auto) {
        return this.defaultInteraction()
    }
    return this.fb().eu(b)
}, hm: function (e, f) {
    var g;
    var h = this.hl(f);
    if (this.fb().a2() == $.ig.ModifierKeys.prototype.none) {
        switch (h) {
            case $.ig.InteractionState.prototype.dragZoom:
                g = this.horizontalZoomable() || this.verticalZoomable() ? h : $.ig.InteractionState.prototype.none;
                break;
            default:
                g = h;
                break
        }
    } else {
        if (this.fb().a2() == this.dragModifier()) {
            g = $.ig.InteractionState.prototype.dragZoom
        } else {
            if (this.fb().a2() == this.panModifier()) {
                g = $.ig.InteractionState.prototype.dragPan
            } else {
                g = $.ig.InteractionState.prototype.none
            }
        }
    }
    switch (g) {
        case $.ig.InteractionState.prototype.dragZoom:
        case $.ig.InteractionState.prototype.dragPan:
            this.fb().b0();
            this.fb().b1();
            break
    }
    this.fe(g);
    switch (this.fe()) {
        case $.ig.InteractionState.prototype.dragZoom:
            this.ff(new $.ig.Rect(0, e.__x, e.__y, 0, 0));
            this.fg(new $.ig.Rect(0, e.__x, e.__y, 0, 0));
            this.fk(new $.ig.Rect(0, e.__x, e.__y, 0, 0));
            this.fb().b6();
            this.fb().b7(this.ff());
            this.hy($.ig.Rect.prototype.empty());
            break;
        case $.ig.InteractionState.prototype.dragPan:
            this.ff(new $.ig.Rect(0, e.__x, e.__y, 0, 0));
            this.fk(new $.ig.Rect(0, e.__x, e.__y, 0, 0));
            break
    }
    this.fh(this.actualWindowRect())
}, _fk: null, fk: function (b) {
    if (arguments.length === 1) {
        this._fk = b;
        return b
    } else {
        return this._fk
    }
}, hp: function () {
    return this.fe() == $.ig.InteractionState.prototype.dragPan
}, hq: function (b) {
    return this.windowResponse() == $.ig.WindowResponse.prototype.immediate || b
}, hr: function () {
    return this.fe() == $.ig.InteractionState.prototype.dragZoom
}, hs: function (l, m) {
    if (this.ff().isEmpty() && m) {
        this.hm(l, m)
    }
    var n = $.ig.SeriesViewer.prototype.bg;
    if (m) {
        n = $.ig.SeriesViewer.prototype.bf
    }
    var o = false;
    var p = new $.ig.Rect(2, {__x: this.ff().x(), __y: this.ff().y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, l);
    var q = new $.ig.Rect(0, 0, 0, 0, 0);
    if (!this.fk().isEmpty()) {
        q = new $.ig.Rect(2, {__x: this.fk().x(), __y: this.fk().y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, l)
    }
    if (q.width() > n && q.height() > n) {
        o = true
    }
    if (!this.c2) {
        if (o) {
            this.c5 = false
        }
    }
    if (!this.c2) {
        this.hw(this.h2(l))
    }
    if (this.hr()) {
        if (o) {
            var r = this.h3(p);
            this.hy(r)
        } else {
            this.hy($.ig.Rect.prototype.empty())
        }
        this.fb().b7(p)
    }
    if (this.hp()) {
        var s = this.viewportRect();
        var t = this.actualWindowRect().left() + this.actualWindowRect().width() * (this.ff().x() - l.__x) / s.width();
        var u = this.actualWindowRect().top() + this.actualWindowRect().height() * (this.ff().y() - l.__y) / s.height();
        var v = new $.ig.Rect(0, t, u, this.actualWindowRect().width(), this.actualWindowRect().height());
        if (this.hq(m)) {
            this.hy($.ig.Rect.prototype.empty());
            this.hx(v);
            this.ff(new $.ig.Rect(3, l, new $.ig.Size(0, 0)));
            this.fg(new $.ig.Rect(3, l, new $.ig.Size(0, 0)))
        } else {
            this.hy(v)
        }
    }
    if (m) {
        this.fg(new $.ig.Rect(3, l, new $.ig.Size(0, 0)))
    }
    this.fb().er(l)
}, c5: null, ht: function (i, j) {
    if (!this.c5) {
        var k = $.ig.SeriesViewer.prototype.bg;
        if (j) {
            k = $.ig.SeriesViewer.prototype.bf
        }
        var l = false;
        var m = new $.ig.Rect(2, {__x: this.ff().x(), __y: this.ff().y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, i);
        if (m.width() > k && m.height() > k) {
            l = true
        }
        if (this.fe() == $.ig.InteractionState.prototype.dragZoom) {
            this.fb().b8();
            this.fb().bz();
            if (l) {
                this.hx(this.h3(m))
            }
            this.hy($.ig.Rect.prototype.empty())
        }
        if (this.fe() == $.ig.InteractionState.prototype.dragPan) {
            this.fb().b8();
            var n = this.viewportRect();
            var o = this.actualWindowRect().left() + this.actualWindowRect().width() * (this.ff().x() - i.__x) / n.width();
            var p = this.actualWindowRect().top() + this.actualWindowRect().height() * (this.ff().y() - i.__y) / n.height();
            this.hx(new $.ig.Rect(0, o, p, this.actualWindowRect().width(), this.actualWindowRect().height()));
            this.hy($.ig.Rect.prototype.empty())
        }
    }
    this.fe($.ig.InteractionState.prototype.none);
    this.fb().cj();
    this.fb().cg();
    if (j) {
        this.fb().bm();
        this.fb().ei()
    }
}, hu: function (c, d) {
    if (d.propertyName() == $.ig.SyncSettings.prototype.a2) {
        $.ig.SyncManager.prototype.c(this, d.oldValue(), d.newValue())
    }
}, hv: function (e, f) {
    if (e != null) {
        e.bb().remove(this);
        e.propertyUpdated = $.ig.Delegate.prototype.remove(e.propertyUpdated, this.propertyUpdated)
    }
    if (f != null) {
        f.bb().add(this);
        f.propertyUpdated = $.ig.Delegate.prototype.combine(f.propertyUpdated, this.propertyUpdated)
    }
    var h = this.series().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.syncLink(this.actualSyncLink());
        g.seriesViewer(this)
    }
}, hw: function (b) {
    this.actualSyncLink().bn(this, b)
}, hx: function (b) {
    this.actualSyncLink().bp(this, b)
}, hy: function (b) {
    this.actualSyncLink().bo(this, b)
}, hz: function (b) {
    if (this.windowResponse() == $.ig.WindowResponse.prototype.immediate) {
        this.hy($.ig.Rect.prototype.empty());
        this.hx(b)
    } else {
        this.hy(b)
    }
}, fl: function () {
    return this.actualSyncLink() != null
}, h1: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            if (this.$this.actualSyncLink() == null) {
                                this.$state = 2
                            } else {
                                this.$state = 4
                            }
                            break;
                        case 2:
                            this.$state = -2;
                            return false;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            this.$b = this.$this.actualSyncLink().ba().getEnumerator();
                            this.$state = 8;
                            break;
                        case 6:
                            this.$a = this.$b.current();
                            this.$current = this.$a;
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            if (this.$b.moveNext()) {
                                this.$state = 6
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.SeriesViewer.prototype.$type, a)
}, h2: function (e) {
    var f = this.viewportRect();
    var g = this.actualWindowRect().left() + this.actualWindowRect().width() * e.__x / f.width();
    var h = this.actualWindowRect().top() + this.actualWindowRect().height() * e.__y / f.height();
    return{__x: g, __y: h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, h3: function (g) {
    var h = this.viewportRect();
    var i = this.actualWindowRect().left() + this.actualWindowRect().width() * g.left() / h.width();
    var j = this.actualWindowRect().top() + this.actualWindowRect().height() * g.top() / h.height();
    var k = this.actualWindowRect().left() + this.actualWindowRect().width() * g.right() / h.width();
    var l = this.actualWindowRect().top() + this.actualWindowRect().height() * g.bottom() / h.height();
    return new $.ig.Rect(0, i, j, k - i, l - j)
}, windowRectChanged: null, h4: function (c, d) {
    if (this.windowRectChanged != null && c != d) {
        this.windowRectChanged(this, new $.ig.RectChangedEventArgs(c, d))
    }
}, h5: function (c, d) {
    this.h4(c, d)
}, h6: function (c, d) {
    if (c.width() != d.width() || c.height() != d.height() || c.x() != d.x() || c.y() != d.y()) {
        return true
    }
    return false
}, actualWindowRectChanged: null, h7: function (c, d) {
    if (this.actualWindowRectChanged != null && this.h6(c, d)) {
        this.actualWindowRectChanged(this, new $.ig.RectChangedEventArgs(c, d))
    }
}, resetZoom: function () {
    this.fb().cw()
}, gridAreaRectChanged: null, h8: function (c, d) {
    if (this.gridAreaRectChanged != null && c != d) {
        this.gridAreaRectChanged(this, new $.ig.RectChangedEventArgs(c, d))
    }
}, h9: function (c, d) {
    this.h8(c, d);
    this.i1()
}, windowResponse: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.windowResponseProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.windowResponseProperty)
    }
}, _fm: null, fm: function (b) {
    if (arguments.length === 1) {
        this._fm = b;
        return b
    } else {
        return this._fm
    }
}, windowRectMinWidth: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.windowRectMinWidthProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.windowRectMinWidthProperty)
    }
}, _syncChannel: null, syncChannel: function (b) {
    if (arguments.length === 1) {
        this._syncChannel = b;
        return b
    } else {
        return this._syncChannel
    }
}, c9: null, actualSyncLink: function (c) {
    if (arguments.length === 1) {
        var d = this.c9;
        this.c9 = c;
        this.f2($.ig.SeriesViewer.prototype.bj, d, this.c9);
        return c
    } else {
        return this.c9
    }
}, ic: function () {
    this.fb().ds()
}, overviewPlusDetailPaneVisibility: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.overviewPlusDetailPaneVisibilityProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.overviewPlusDetailPaneVisibilityProperty)
    }
}, fn: function () {
    return this.fb().cu().b()
}, crosshairVisibility: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.crosshairVisibilityProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.crosshairVisibilityProperty)
    }
}, isDragCrosshairEnabled: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.isDragCrosshairEnabledProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.isDragCrosshairEnabledProperty)
    }
}, plotAreaBorderBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.plotAreaBorderBrushProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.plotAreaBorderBrushProperty)
    }
}, plotAreaBackground: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.plotAreaBackgroundProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.plotAreaBackgroundProperty)
    }
}, plotAreaMinWidth: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.plotAreaMinWidthProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.plotAreaMinWidthProperty)
    }
}, plotAreaMinHeight: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.plotAreaMinHeightProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.plotAreaMinHeightProperty)
    }
}, ie: function () {
    var f = this.crosshairPoint();
    var g = this.fe() == $.ig.InteractionState.prototype.none && (this.fi() || this.c3) && !this.c2;
    var h = this.viewportRect();
    if (g && !isNaN(f.__x) && !h.isEmpty()) {
        var i = h.width() * (f.__x - this.actualWindowRect().left()) / this.actualWindowRect().width();
        this.fb().ca(h.left() + i, h.top(), h.left() + i, h.bottom());
        this.fb().cf();
        this.fb().em(i)
    } else {
        this.fb().cg()
    }
    if (g && !isNaN(f.__y) && !h.isEmpty()) {
        var j = h.height() * (f.__y - this.actualWindowRect().top()) / this.actualWindowRect().height();
        this.fb().ch(h.left(), h.top() + j, h.right(), h.top() + j);
        this.fb().ci()
    } else {
        this.fb().cj()
    }
}, da: null, ig: function (g, h, i, j) {
    var f = this;
    switch (h) {
        case $.ig.SeriesViewer.prototype.bj:
            this.hv($.ig.util.cast($.ig.SyncLink.prototype.$type, i), $.ig.util.cast($.ig.SyncLink.prototype.$type, j));
            break;
        case $.ig.SeriesViewer.prototype.bl:
            if (this.crosshairVisibility() != $.ig.Visibility.prototype.collapsed) {
                this.fi(true)
            } else {
                this.fi(this.mobileMode())
            }
            this.ie();
            break;
        case $.ig.SeriesViewer.prototype.a7:
            this.ie();
            break;
        case $.ig.SeriesViewer.prototype.ba:
            if (this.actualSyncLink() != null) {
                this.da++;
                this.hx(j);
                this.da--
            }
            if (!this.windowRect().equals(i) && this.da == 0) {
                this.h5(i, this.windowRect())
            }
            this.i1();
            break;
        case $.ig.SeriesViewer.prototype.bx:
            this.actualWindowScaleHorizontal(this.windowScaleHorizontal());
            break;
        case $.ig.SeriesViewer.prototype.by:
            this.actualWindowScaleVertical(this.windowScaleVertical());
            break;
        case $.ig.SeriesViewer.prototype.bv:
            this.actualWindowPositionHorizontal(this.windowPositionHorizontal());
            break;
        case $.ig.SeriesViewer.prototype.bw:
            this.actualWindowPositionVertical(this.windowPositionVertical());
            break;
        case $.ig.SeriesViewer.prototype.cl:
        case $.ig.SeriesViewer.prototype.cm:
        case $.ig.SeriesViewer.prototype.ck:
        case $.ig.SeriesViewer.prototype.cj:
            if (!this.fo()) {
                var k = this.windowRectMinWidth();
                this.windowRect(new $.ig.Rect(0, this.actualWindowPositionHorizontal(), this.actualWindowPositionVertical(), $.ig.MathUtil.prototype.i(this.actualWindowScaleHorizontal(), k, 1), $.ig.MathUtil.prototype.i(this.actualWindowScaleVertical(), k, 1)))
            }
            break;
        case $.ig.SeriesViewer.prototype.bk:
            if (!this.mobileMode()) {
                this.db = this.overviewPlusDetailPaneVisibility() == $.ig.Visibility.prototype.visible;
                this.fn().c3().af(false);
                this.fb().d2();
                this.fb().bd();
                this.ic()
            } else {
                this.db = this.overviewPlusDetailPaneVisibility() == $.ig.Visibility.prototype.visible;
                this.fn().c3().af(this.db);
                this.ic()
            }
            break;
        case $.ig.SeriesViewer.prototype.ci:
            if (i != j) {
                this.ik()
            }
            this.h7(i, j);
            break;
        case $.ig.SeriesViewer.prototype.bp:
            this.fb().eq(j);
            break;
        case $.ig.SeriesViewer.prototype.bb:
        case $.ig.SeriesViewer.prototype.bd:
            this.ih();
            break
    }
}, ih: function () {
    if (this.fn() == null) {
        return
    }
    this.fn().dj(this.horizontalZoomable() || this.verticalZoomable())
}, db: null, _fo: null, fo: function (b) {
    if (arguments.length === 1) {
        this._fo = b;
        return b
    } else {
        return this._fo
    }
}, defaultInteraction: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.defaultInteractionProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.defaultInteractionProperty)
    }
}, dragModifier: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.dragModifierProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.dragModifierProperty)
    }
}, panModifier: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.panModifierProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.panModifierProperty)
    }
}, dc: null, previewRect: function (c) {
    if (arguments.length === 1) {
        var d = this.dc;
        this.dc = c;
        if (this.dc.isEmpty()) {
            this.fb().ck()
        } else {
            this.fb().cn(this.viewportRect(), this.il(this.previewRect()));
            this.fb().co();
            this.f2("PreviewRect", d, this.dc)
        }
        return c
    } else {
        return this.dc
    }
}, ik: function () {
    var b = this.fo();
    this.fo(true);
    this.actualWindowPositionHorizontal(this.actualWindowRect().x());
    this.actualWindowPositionVertical(this.actualWindowRect().y());
    this.actualWindowScaleHorizontal(this.actualWindowRect().width());
    this.actualWindowScaleVertical(this.actualWindowRect().height());
    this.fo(b);
    this.fb().bm();
    this.fb().cp(this.actualWindowRect())
}, windowPositionHorizontal: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.windowPositionHorizontalProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.windowPositionHorizontalProperty)
    }
}, windowPositionVertical: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.windowPositionVerticalProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.windowPositionVerticalProperty)
    }
}, windowScaleHorizontal: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.windowScaleHorizontalProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.windowScaleHorizontalProperty)
    }
}, windowScaleVertical: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.windowScaleVerticalProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.windowScaleVerticalProperty)
    }
}, il: function (g) {
    if (this.viewportRect().isEmpty()) {
        return $.ig.Rect.prototype.empty()
    }
    var h = this.viewportRect();
    var i = h.left() + (h.width() * (g.left() - this.actualWindowRect().left()) / this.actualWindowRect().width());
    var j = h.top() + (h.height() * (g.top() - this.actualWindowRect().top()) / this.actualWindowRect().height());
    var k = h.left() + (h.width() * (g.right() - this.actualWindowRect().left()) / this.actualWindowRect().width());
    var l = h.top() + (h.height() * (g.bottom() - this.actualWindowRect().top()) / this.actualWindowRect().height());
    return new $.ig.Rect(0, i, j, k - i, l - j)
}, refreshCompleted: null, im: function () {
    if (this.refreshCompleted != null) {
        this.refreshCompleted(this, new $.ig.EventArgs())
    }
}, io: function () {
}, ip: function (b) {
    this.ih()
}, crosshairLineStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.crosshairLineStyleProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.crosshairLineStyleProperty)
    }
}, previewPathStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.previewPathStyleProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.previewPathStyleProperty)
    }
}, zoombarStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.zoombarStyleProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.zoombarStyleProperty)
    }
}, circleMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.circleMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.circleMarkerTemplateProperty)
    }
}, triangleMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.triangleMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.triangleMarkerTemplateProperty)
    }
}, pyramidMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.pyramidMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.pyramidMarkerTemplateProperty)
    }
}, squareMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.squareMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.squareMarkerTemplateProperty)
    }
}, diamondMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.diamondMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.diamondMarkerTemplateProperty)
    }
}, pentagonMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.pentagonMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.pentagonMarkerTemplateProperty)
    }
}, hexagonMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.hexagonMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.hexagonMarkerTemplateProperty)
    }
}, tetragramMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.tetragramMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.tetragramMarkerTemplateProperty)
    }
}, pentagramMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.pentagramMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.pentagramMarkerTemplateProperty)
    }
}, hexagramMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewer.prototype.hexagramMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.SeriesViewer.prototype.hexagramMarkerTemplateProperty)
    }
}, iq: function () {
}, ir: function () {
}, is: function () {
}, provideContainer: function (b) {
    this.fb().c9(b)
}, onContainerResized: function (c, d) {
    this.fb().dr(c, d)
}, notifyContainerResized: function () {
    this.fb().dq()
}, getContainerRect: function () {
    return this.fb().dy()
}, getContainerOffsets: function () {
    return this.fb().dz()
}, attachSeries: function (b) {
    this.fb().bw(b)
}, removeSeries: function (b) {
    this.fb().bp(b)
}, _canvasRenderScheduler: null, canvasRenderScheduler: function (b) {
    if (arguments.length === 1) {
        this._canvasRenderScheduler = b;
        return b
    } else {
        return this._canvasRenderScheduler
    }
}, _fp: null, fp: function (b) {
    if (arguments.length === 1) {
        this._fp = b;
        return b
    } else {
        return this._fp
    }
}, df: null, mobileMode: function (c) {
    if (arguments.length === 1) {
        var d = this.df;
        this.df = c;
        if (d != this.df) {
            this.fb().ef(this.df)
        }
        return c
    } else {
        return this.df
    }
}, _syncSettings: null, syncSettings: function (b) {
    if (arguments.length === 1) {
        this._syncSettings = b;
        return b
    } else {
        return this._syncSettings
    }
}, addTooltipToView: function (b) {
    this.fb().eo(b)
}, iv: function (b) {
    this.fb().ep(b)
}, notifySetItem: function (i, e, f, g) {
    if (i.dataView && i.dataSource) {
        i = i.dataView()
    }
    var h = this.actualSyncLink().bf(i);
    if (h == null) {
        return
    }
    h.ae(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, g, f, e))
}, notifyClearItems: function (c) {
    if (c.dataView && c.dataSource) {
        c = c.dataView()
    }
    var b = this.actualSyncLink().bf(c);
    if (b == null) {
        return
    }
    b.ae(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset))
}, notifyInsertItem: function (g, d, e) {
    if (g.dataView && g.dataSource) {
        g = g.dataView()
    }
    var f = this.actualSyncLink().bf(g);
    if (f == null) {
        return
    }
    f.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, e, d))
}, notifyRemoveItem: function (g, d, e) {
    if (g.dataView && g.dataSource) {
        g = g.dataView()
    }
    var f = this.actualSyncLink().bf(g);
    if (f == null) {
        return
    }
    f.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, e, d))
}, dg: null, dh: null, _manageDataSources: null, manageDataSources: function (b) {
    if (arguments.length === 1) {
        this._manageDataSources = b;
        return b
    } else {
        return this._manageDataSources
    }
}, destroy: function () {
    var d = new $.ig.List$1($.ig.Series.prototype.$type, 0);
    for (var e = 0; e < this.series().count(); e++) {
        d.add(this.series().__inner[e])
    }
    for (var f = 0; f < d.count(); f++) {
        this.series().remove(d.__inner[f]);
        this.removeSpecificDataSource(d.__inner[f].name(), true);
        d.__inner[f].itemsSource(null);
        d.__inner[f].provideContext(null, null)
    }
    this.iw();
    this.removeWidgetLevelDataSource();
    this.fb().c9(null)
}, iw: function () {
}, setWidgetLevelDataSource: function (a) {
    if (a.dataView && a.dataSource) {
        a = a.dataView()
    }
    this.dg = a;
    this.iz()
}, removeWidgetLevelDataSource: function () {
    this.dg = null;
    this.iz()
}, setSpecificDataSource: function (b, c) {
    if (c.dataView && c.dataSource) {
        c = c.dataView()
    }
    if (!this.dh.containsKey(b)) {
        this.dh.add(b, c)
    } else {
        this.dh.item(b, c)
    }
    this.iz()
}, removeSpecificDataSource: function (c, d) {
    if (this.dh.containsKey(c)) {
        this.dh.remove(c)
    }
    if (!d) {
        this.iz()
    }
}, ix: function (c, d) {
    if (c.itemsSource() != d) {
        c.itemsSource(d)
    }
}, iy: function (f) {
    if (!this.manageDataSources()) {
        return
    }
    if ($.ig.util.cast($.ig.Series.prototype.$type, f) !== null) {
        var g = f;
        if (this.dh.containsKey(g.name())) {
            var h = this.dh.item(g.name());
            this.ix(g, h)
        } else {
            this.ix(g, this.dg)
        }
    }
    if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, f) !== null) {
        var i = f;
        if (this.dh.containsKey(i.name())) {
            var j = this.dh.item(i.name());
            if (i.itemsSource() != j) {
                i.itemsSource(j)
            }
        } else {
            if (i.itemsSource() != this.dg) {
                i.itemsSource(this.dg)
            }
        }
    }
}, iz: function () {
    if (!this.manageDataSources()) {
        return
    }
    var d = this.series().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        this.iy(c)
    }
}, di: null, topMargin: function (b) {
    if (arguments.length === 1) {
        this.di = b;
        this.ic();
        return b
    } else {
        return this.di
    }
}, dj: null, leftMargin: function (b) {
    if (arguments.length === 1) {
        this.dj = b;
        this.ic();
        return b
    } else {
        return this.dj
    }
}, dk: null, rightMargin: function (b) {
    if (arguments.length === 1) {
        this.dk = b;
        this.ic();
        return b
    } else {
        return this.dk
    }
}, dl: null, bottomMargin: function (b) {
    if (arguments.length === 1) {
        this.dl = b;
        this.ic();
        return b
    } else {
        return this.dl
    }
}, dm: null, autoMarginWidth: function (b) {
    if (arguments.length === 1) {
        this.dm = b;
        this.ic();
        return b
    } else {
        return this.dm
    }
}, dn: null, autoMarginHeight: function (b) {
    if (arguments.length === 1) {
        this.dn = b;
        this.ic();
        return b
    } else {
        return this.dn
    }
}, shouldAddAutoMargins: function () {
    return false
}, getCoercionMethod: function (e, f) {
    var g = new $.ig.CoercionInfo();
    g.c(e);
    g.d(null);
    var h = $.ig.SeriesViewer.prototype.parseMemberPath(e);
    if (h.d() == null) {
        return g
    }
    if (f != null) {
        var j = f;
        var i = h.d();
        var k = null;
        if (typeof j[i] != "undefined") {
            k = j[i]
        }
        g.c(h.c());
        g.d(k)
    }
    return g
}, parseMemberPath: function (c) {
    var d = c.split("!");
    if (d.length == 2) {
        return new $.ig.Tuple$2(String, String, d[0], d[1])
    } else {
        return new $.ig.Tuple$2(String, String, c, null)
    }
}, overviewPlusDetailPaneBackgroundImageUri: function (b) {
    if (arguments.length === 1) {
        this.fn().c3().av(b);
        return b
    } else {
        return this.fn().c3().av()
    }
}, dp: null, actualWindowRect: function (d) {
    if (arguments.length === 1) {
        var e = this.dp != d;
        if (e) {
            var f = this.dp;
            this.dp = d;
            this.f2($.ig.SeriesViewer.prototype.ci, f, d)
        }
        return d
    } else {
        return this.dp
    }
}, i1: function () {
    this.actualWindowRect(this.i2())
}, i2: function () {
    return new $.ig.Rect(0, Math.min(1, Math.max(0, this.windowRect().left())), Math.min(1, Math.max(0, this.windowRect().top())), Math.min(1, Math.max(0, this.windowRect().width())), Math.min(1, Math.max(0, this.windowRect().height())))
}, dq: null, actualWindowPositionHorizontal: function (c) {
    if (arguments.length === 1) {
        var d = this.dq;
        this.dq = c;
        this.f2($.ig.SeriesViewer.prototype.cj, d, this.dq);
        return c
    } else {
        return this.dq
    }
}, dr: null, actualWindowPositionVertical: function (c) {
    if (arguments.length === 1) {
        var d = this.dr;
        this.dr = c;
        this.f2($.ig.SeriesViewer.prototype.ck, d, this.dr);
        return c
    } else {
        return this.dr
    }
}, ds: null, actualWindowScaleHorizontal: function (c) {
    if (arguments.length === 1) {
        var d = this.ds;
        this.ds = c;
        this.f2($.ig.SeriesViewer.prototype.cl, d, this.ds);
        return c
    } else {
        return this.ds
    }
}, dt: null, actualWindowScaleVertical: function (c) {
    if (arguments.length === 1) {
        var d = this.dt;
        this.dt = c;
        this.f2($.ig.SeriesViewer.prototype.cm, d, this.dt);
        return c
    } else {
        return this.dt
    }
}, i7: function () {
    if (this.db) {
        (this.fn().dd()).u(true);
        this.fn().fu(false)
    }
}, i8: function () {
    if (this.db) {
        (this.fn().dd()).u(true);
        this.fn().fu(false)
    }
}, flush: function () {
    this.fc().y();
    this.fb().eh();
    this.fc().y();
    this.canvasRenderScheduler().q()
}, useFixedAspectZoom: function () {
    return false
}, du: null, dv: null, i9: function (c, d) {
    if (this.du != null) {
        this.ja(this.du);
        this.du = null;
        this.dv = null
    }
    this.du = c;
    this.dv = this.fc().r($.ig.ChartContentType.prototype.background, c, d)
}, ja: function (b) {
    this.fc().s($.ig.ChartContentType.prototype.background, b);
    this.du = null;
    this.dv = null
}, jb: function () {
    this.fc().u($.ig.ChartContentType.prototype.background, this.du, this.dv, false)
}, $type: new $.ig.Type("SeriesViewer", $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("XamDataChart", "SeriesViewer", {kl: null, km: null, staticInit: function () {
    $.ig.XamDataChart.prototype.kl = -Number.MAX_VALUE;
    $.ig.XamDataChart.prototype.km = Number.MAX_VALUE
}, k1: function (e) {
    var c = this;
    if (e.seriesViewer() == null) {
        return -1
    }
    var f = $.ig.XamDataChartView.prototype.cv(e);
    if (f.count$1($.ig.Series.prototype.$type) == 0) {
        return -1
    }
    var g = f.max$111($.ig.Series.prototype.$type, function (a) {
        return a.index()
    }) + 1;
    return g
}, init: function () {
    var a = this;
    this.kn = new $.ig.AxisCollection();
    $.ig.SeriesViewer.prototype.init.call(this);
    this.a3($.ig.XamDataChart.prototype.$type);
    this.axes().collectionChanged = $.ig.Delegate.prototype.combine(this.axes().collectionChanged, this.k2.on(this));
    this.axes().collectionResetting = $.ig.Delegate.prototype.combine(this.axes().collectionResetting, this.k3.on(this))
}, ig: function (g, h, i, j) {
    $.ig.SeriesViewer.prototype.ig.call(this, g, h, i, j);
    switch (h) {
        case $.ig.XamDataChart.prototype.kf:
            (this.fb()).fa(j);
            var l = this.axes().getEnumerator();
            while (l.moveNext()) {
                var k = l.current();
                k.renderAxis()
            }
            break
    }
}, isSquare: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamDataChart.prototype.isSquareProperty, b);
        return b
    } else {
        return this.b($.ig.XamDataChart.prototype.isSquareProperty)
    }
}, gridMode: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamDataChart.prototype.gridModeProperty, b);
        return b
    } else {
        return this.b($.ig.XamDataChart.prototype.gridModeProperty)
    }
}, brushes: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamDataChart.prototype.brushesProperty, b);
        return b
    } else {
        return this.b($.ig.XamDataChart.prototype.brushesProperty)
    }
}, markerBrushes: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamDataChart.prototype.markerBrushesProperty, b);
        return b
    } else {
        return this.b($.ig.XamDataChart.prototype.markerBrushesProperty)
    }
}, outlines: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamDataChart.prototype.outlinesProperty, b);
        return b
    } else {
        return this.b($.ig.XamDataChart.prototype.outlinesProperty)
    }
}, markerOutlines: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamDataChart.prototype.markerOutlinesProperty, b);
        return b
    } else {
        return this.b($.ig.XamDataChart.prototype.markerOutlinesProperty)
    }
}, axes: function () {
    return this.kn
}, kn: null, k2: function (i, j) {
    if (j.oldItems() != null) {
        var l = j.oldItems().getEnumerator();
        while (l.moveNext()) {
            var k = l.current();
            if (k != null) {
                k.c0(null);
                k.seriesViewer(null);
                this.ft(k);
                this.fb().cq(k);
                k.rangeChanged = $.ig.Delegate.prototype.remove(k.rangeChanged, this.k4.on(this));
                this.fb().cr(k);
                if (k.dc() != null) {
                    var n = k.fl().getEnumerator();
                    while (n.moveNext()) {
                        var m = n.current();
                        m.renderSeries(false)
                    }
                }
            }
        }
        if (this.axes().count() == 0) {
            this.resetZoom()
        }
    }
    if (j.newItems() != null) {
        var p = j.newItems().getEnumerator();
        while (p.moveNext()) {
            var o = p.current();
            if (o != null) {
                this.iy(o);
                o.c0(this.actualSyncLink());
                o.seriesViewer(this);
                this.fb().cs(o);
                o.rangeChanged = $.ig.Delegate.prototype.combine(o.rangeChanged, this.k4.on(this));
                this.fb().ct(o)
            }
        }
    }
    this.i8()
}, k3: function (l, m) {
    var n = new $.ig.List$1($.ig.Series.prototype.$type, 0);
    var p = this.axes().getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        if (o.dc() != null) {
            var r = o.fl().getEnumerator();
            while (r.moveNext()) {
                var q = r.current();
                if (!n.contains(q)) {
                    n.add(q)
                }
            }
        }
        o.c0(null);
        o.seriesViewer(null);
        this.ft(o);
        this.fb().cq(o);
        o.rangeChanged = $.ig.Delegate.prototype.remove(o.rangeChanged, this.k4.on(this));
        this.fb().cr(o);
        this.resetZoom()
    }
    var t = this.series().getEnumerator();
    while (t.moveNext()) {
        var s = t.current();
        if (!n.contains(s)) {
            n.add(s)
        }
    }
    var v = n.getEnumerator();
    while (v.moveNext()) {
        var u = v.current();
        u.renderSeries(false)
    }
}, axisRangeChanged: null, k4: function (k, l) {
    var m = $.ig.util.cast($.ig.Axis.prototype.$type, k);
    if (m == null) {
        return
    }
    this.i8();
    if (this.axisRangeChanged != null) {
        this.axisRangeChanged(this, new $.ig.ChartAxisRangeChangedEventArgs(this, m, l.oldMinimumValue(), l.minimumValue(), l.oldMaximumValue(), l.maximumValue()))
    }
    if (m.crossingAxis() != null) {
        m.crossingAxis().ed()
    }
    m.ed();
    var n = this.animateSeriesWhenAxisRangeChanges();
    if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, m) !== null) {
        n = true
    }
    var p = m.fl().getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        o.dv(true);
        this.i8();
        o.renderSeries(n)
    }
    var r = m.seriesViewer().series().getEnumerator();
    while (r.moveNext()) {
        var q = r.current();
        $.ig.XamDataChart.prototype.k5(m, n, q)
    }
    var t = this.axes().getEnumerator();
    while (t.moveNext()) {
        var s = t.current();
        if (s != m && s.crossingAxis() != null && s.crossingAxis() == m) {
            s.ed()
        }
    }
}, k5: function (d, e, f) {
}, hv: function (e, f) {
    $.ig.SeriesViewer.prototype.hv.call(this, e, f);
    var h = this.axes().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.c0(this.actualSyncLink());
        g.seriesViewer(this)
    }
}, gridZIndex: function () {
    return this.gridMode() == $.ig.GridMode.prototype.beforeSeries ? 2 : 1
}, seriesZIndex: function () {
    return this.gridMode() == $.ig.GridMode.prototype.beforeSeries ? 1 : 2
}, styleUpdated: function () {
    this.fb().d1();
    var f = this.axes().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.es(false)
    }
    var h = this.series().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.view().b9();
        g.renderSeries(false)
    }
}, iq: function () {
    return this.k0().e5()
}, iw: function () {
    $.ig.SeriesViewer.prototype.iw.call(this);
    var e = new $.ig.List$1($.ig.Axis.prototype.$type, 0);
    for (var f = 0; f < this.axes().count(); f++) {
        e.add(this.axes().__inner[f])
    }
    for (var g = 0; g < e.count(); g++) {
        this.axes().remove(e.__inner[g]);
        if ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, e.__inner[g]) !== null) {
            var h = e.__inner[g];
            this.removeSpecificDataSource(h.name(), true);
            h.itemsSource(null)
        }
        e.__inner[g].fj(null, null)
    }
}, ir: function () {
    return this.k0().e7()
}, is: function () {
    return this.k0().e6()
}, shouldAddAutoMargins: function () {
    return true
}, iz: function () {
    $.ig.SeriesViewer.prototype.iz.call(this);
    if (!this.manageDataSources()) {
        return
    }
    var d = this.axes().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        this.iy(c)
    }
}, fx: function (b) {
    return this.k6(b, this.brushes())
}, k6: function (c, d) {
    if (d != null && d.count() > 0) {
        return d.item(c % d.count())
    } else {
        return null
    }
}, getMarkerBrushByIndex: function (b) {
    return this.k6(b, this.markerBrushes())
}, getMarkerOutlineByIndex: function (b) {
    return this.k6(b, this.markerOutlines())
}, fy: function (b) {
    return this.k6(b, this.outlines())
}, fw: function () {
    if (this.isSquare()) {
        return true
    }
    return this.k7()
}, k7: function () {
    var a = this;
    var c = ((this.series()).where$1($.ig.Series.prototype.$type, function (b) {
        return $.ig.util.cast($.ig.PolarBase.prototype.$type, b) !== null || $.ig.util.cast($.ig.RadialBase.prototype.$type, b) !== null
    }));
    if (c.any$1($.ig.Series.prototype.$type)) {
        return true
    }
    var e = ((this.axes()).where$1($.ig.Series.prototype.$type, function (b) {
        return $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, b) !== null || $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, b) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, b) !== null
    }));
    if (e.any$1($.ig.Series.prototype.$type)) {
        return true
    }
    return false
}, io: function () {
    return new $.ig.XamDataChartView(this)
}, ip: function (b) {
    $.ig.SeriesViewer.prototype.ip.call(this, b);
    this.k0(b)
}, _k0: null, k0: function (b) {
    if (arguments.length === 1) {
        this._k0 = b;
        return b
    } else {
        return this._k0
    }
}, plotAreaBackgroundContent: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamDataChart.prototype.plotAreaBackgroundContentProperty, b);
        return b
    } else {
        return this.b($.ig.XamDataChart.prototype.plotAreaBackgroundContentProperty)
    }
}, exportVisualData: function () {
    var f = new $.ig.ChartVisualData();
    for (var g = 0; g < this.axes().count(); g++) {
        var h = this.axes().__inner[g].exportVisualData();
        f.axes().add(h)
    }
    for (var i = 0; i < this.series().count(); i++) {
        var j = this.series().__inner[i].exportVisualData();
        f.series().add(j)
    }
    f.name(this.name());
    return f
}, $type: new $.ig.Type("XamDataChart", $.ig.SeriesViewer.prototype.$type)}, true);
$.ig.util.defType("SeriesViewerView", "Object", {init: function (c) {
    var b = this;
    this.a = new $.ig.SeriesViewerComponentsFromView();
    this.b = $.ig.Rect.prototype.empty();
    this.c = false;
    this.d = $.ig.Rect.prototype.empty();
    this.e = false;
    this.f = false;
    this.g = false;
    this.h = false;
    $.ig.Object.prototype.init.call(this);
    this.ag(c);
    this.ag().crosshairPoint({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    this.ag().windowResponse($.ig.WindowResponse.prototype.immediate);
    this.aq(new $.ig.SeriesViewerViewManager(this));
    this.ap((function () {
        var a = new $.ig.Line();
        a.__visibility = $.ig.Visibility.prototype.collapsed;
        return a
    }()));
    this.ao((function () {
        var a = new $.ig.Line();
        a.__visibility = $.ig.Visibility.prototype.collapsed;
        return a
    }()))
}, _ag: null, ag: function (b) {
    if (arguments.length === 1) {
        this._ag = b;
        return b
    } else {
        return this._ag
    }
}, a6: function () {
    this.ag().crosshairVisibility($.ig.Visibility.prototype.collapsed);
    var b = this.ag();
    var a = typeof Modernizr !== "undefined" && Modernizr.touch || (typeof $.mobile !== "undefined" && $.mobile !== null && $.support.touch);
    b.mobileMode(a);
    this.an(new $.ig.Path());
    this.am(new $.ig.Rectangle());
    this.d0();
    this.ak(new $.ig.SeriesCollection());
    this.al(new $.ig.AxisCollection());
    this.ai(new $.ig.XamOverviewPlusDetailPane());
    this.bd();
    this.ai().c5(new $.ig.Rect(0, 0, 0, 1, 1));
    this.ai().c7(this.ag().windowRect());
    this.ai().dd(new $.ig.SeriesViewerSurfaceViewer(this.ag(), this));
    this.ag().windowRectChanged = $.ig.Delegate.prototype.combine(this.ag().windowRectChanged, this.be.on(this));
    this.ag().gridAreaRectChanged = $.ig.Delegate.prototype.combine(this.ag().gridAreaRectChanged, this.bf.on(this));
    this.aj(new $.ig.OverviewPlusDetailViewportHost(this));
    this.ah(new $.ig.CanvasRenderScheduler());
    this.ah().m(this);
    this.ah().h().add(this.ag().fp());
    if (this.ag().fn() != null) {
        this.ag().fn().c3().au(this.ah());
        this.ai().windowChanging = $.ig.Delegate.prototype.combine(this.ai().windowChanging, this.bb.on(this));
        this.ai().windowChanged = $.ig.Delegate.prototype.combine(this.ai().windowChanged, this.bc.on(this))
    }
    this.d2()
}, _ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, _ai: null, ai: function (b) {
    if (arguments.length === 1) {
        this._ai = b;
        return b
    } else {
        return this._ai
    }
}, bb: function (e, f) {
    var g = $.ig.SeriesViewerSurfaceViewer.prototype.am(f.oldValue(), f.newValue(), this.ag().horizontalZoomable(), this.ag().verticalZoomable(), this.ai().c5());
    if (g.isEmpty()) {
        this.ai().c7(f.oldValue())
    } else {
        if (!g.equals(f.newValue())) {
            this.ai().c7(g)
        }
    }
    if (this.ag().windowResponse() == $.ig.WindowResponse.prototype.immediate) {
        var h = this.ag().viewportRect().width() / this.ag().viewportRect().height();
        g = new $.ig.Rect(0, g.left() / h, g.top(), g.width() / h, g.height());
        this.ag().windowRect(g)
    }
}, bc: function (e, f) {
    var g = $.ig.SeriesViewerSurfaceViewer.prototype.am(f.oldValue(), f.newValue(), this.ag().horizontalZoomable(), this.ag().verticalZoomable(), this.ai().c5());
    if (g.isEmpty()) {
        g = f.oldValue()
    } else {
        if (!g.equals(f.newValue())) {
            this.ai().c7(g)
        }
    }
    var h = this.ag().viewportRect().width() / this.ag().viewportRect().height();
    g = new $.ig.Rect(0, g.left() / h, g.top(), g.width() / h, g.height());
    this.ag().windowRect(g)
}, bd: function () {
    if (this.ag().overviewPlusDetailPaneVisibility() != $.ig.Visibility.prototype.visible) {
        return
    }
    var d = 1;
    if (this.ag().viewportRect().isEmpty() == false) {
        d = this.ag().viewportRect().width() / this.ag().viewportRect().height()
    }
    var e = this.ai().c5();
    var f = new $.ig.Rect(0, 0, 0, d, 1);
    this.ai().c5(f);
    if (e.width() != f.width() || e.height() != f.height() || e.x() != f.x() || e.y() != f.y()) {
        (this.ai().dd()).u(true)
    }
    this.ai().c7(new $.ig.Rect(0, this.ag().windowRect().left() * d, this.ag().windowRect().top(), this.ag().windowRect().width() * d, this.ag().windowRect().height()))
}, be: function (c, d) {
    this.bd()
}, bf: function (c, d) {
    this.bd()
}, _aj: null, aj: function (b) {
    if (arguments.length === 1) {
        this._aj = b;
        return b
    } else {
        return this._aj
    }
}, bi: function (g, h, i) {
    var j = true;
    var l = this.ag().series().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        if (j && k.dv()) {
            j = false;
            i.b().t(0, 0, g, h)
        }
        k.er(new $.ig.Rect(0, 0, 0, g, h), i)
    }
}, bj: function () {
    this.aq().au()
}, bk: function () {
}, bl: function () {
    this.aq().av()
}, bm: function () {
    for (var b = 0; b < this.ag().series().count(); b++) {
        this.ag().series().__inner[b].view().a5()
    }
}, bn: function () {
}, bo: function () {
}, bp: function (c) {
    var d = this.ak().indexOf(c);
    if (d >= 0) {
        this.ak().removeAt(d)
    }
    c.provideContext(null, null);
    this.bq()
}, bq: function () {
}, br: function (b) {
    b.ex(b.view().ab(), this.b);
    return this.ak().contains(b)
}, _ak: null, ak: function (b) {
    if (arguments.length === 1) {
        this._ak = b;
        return b
    } else {
        return this._ak
    }
}, _al: null, al: function (b) {
    if (arguments.length === 1) {
        this._al = b;
        return b
    } else {
        return this._al
    }
}, bw: function (b) {
    if (!this.ak().contains(b)) {
        this.ak().add(b)
    }
    b.provideContext(this.at(), this.au())
}, bx: function () {
}, by: function () {
    this.bz();
    this.bm()
}, bz: function () {
    this.am().__visibility = $.ig.Visibility.prototype.collapsed;
    this.dv()
}, b0: function () {
}, b1: function () {
}, _am: null, am: function (b) {
    if (arguments.length === 1) {
        this._am = b;
        return b
    } else {
        return this._am
    }
}, _an: null, an: function (b) {
    if (arguments.length === 1) {
        this._an = b;
        return b
    } else {
        return this._an
    }
}, b6: function () {
    this.am().__visibility = $.ig.Visibility.prototype.visible;
    this.dv()
}, b7: function (b) {
    this.am().x(b.top() + this.ag().viewportRect().top());
    this.am().y(b.left() + this.ag().viewportRect().left());
    this.am().v(b.width());
    this.am().w(b.height());
    this.am().__stroke = this.aq().aw();
    this.am().__fill = null;
    this.am().a7(0.5);
    this.dv()
}, b8: function () {
}, b9: function () {
}, ca: function (e, f, g, h) {
    this.ao().bq(e);
    this.ao().bs(f);
    this.ao().br(g);
    this.ao().bt(h);
    this.dv()
}, _ao: null, ao: function (b) {
    if (arguments.length === 1) {
        this._ao = b;
        return b
    } else {
        return this._ao
    }
}, _ap: null, ap: function (b) {
    if (arguments.length === 1) {
        this._ap = b;
        return b
    } else {
        return this._ap
    }
}, cf: function () {
    this.ao().__visibility = $.ig.Visibility.prototype.visible;
    this.dv()
}, cg: function () {
    if (this.ao().__visibility == $.ig.Visibility.prototype.visible) {
        this.ao().__visibility = $.ig.Visibility.prototype.collapsed;
        this.dv()
    }
}, ch: function (e, f, g, h) {
    this.ap().bq(e);
    this.ap().bs(f);
    this.ap().br(g);
    this.ap().bt(h);
    this.dv()
}, ci: function () {
    this.ap().__visibility = $.ig.Visibility.prototype.visible;
    this.dv()
}, cj: function () {
    if (this.ap().__visibility == $.ig.Visibility.prototype.visible) {
        this.ap().__visibility = $.ig.Visibility.prototype.collapsed;
        this.dv()
    }
}, ck: function () {
    this.an().__visibility = $.ig.Visibility.prototype.collapsed;
    this.dv()
}, cl: function (d) {
    var e = new $.ig.PathFigureCollection();
    var f = new $.ig.PathFigure();
    f.__isClosed = true;
    f.__startPoint = {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    e.add(f);
    return e
}, cm: function (d) {
    var e = new $.ig.PathFigureCollection();
    var f = new $.ig.PathFigure();
    f.__isClosed = true;
    f.__startPoint = {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.right(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    f.__segments.add(new $.ig.LineSegment(0, {__x: d.left(), __y: d.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    e.add(f);
    return e
}, cn: function (f, g) {
    g.intersect(f);
    var h = new $.ig.PathGeometry();
    h.d(this.cm(f));
    var i = new $.ig.PathGeometry();
    i.d(this.cl(g));
    var j = new $.ig.GeometryGroup();
    j.d().add(h);
    j.d().add(i);
    this.an().bp(j);
    this.an().__fill = this.aq().aw();
    this.an().__opacity = 0.1;
    this.dv()
}, co: function () {
    this.an().__visibility = $.ig.Visibility.prototype.visible;
    this.dv()
}, cp: function (b) {
}, cq: function (c) {
    var d = this.al().indexOf(c);
    this.al().removeAt(d);
    c.fj(null, null);
    this.dt();
    this.ag().removeSpecificDataSource(c.name(), true)
}, cr: function (b) {
}, cs: function (b) {
    if (!this.al().contains(b)) {
        this.al().add(b)
    }
    b.fj(this.at(), this.au());
    this.dt()
}, ct: function (b) {
}, a: null, cu: function () {
    this.a.b(this.ai());
    return this.a
}, cv: function (c) {
    var d = c.seriesViewer().series();
    return d
}, cw: function () {
    this.ag().windowRect(new $.ig.Rect(0, 0, 0, 1, 1))
}, _aq: null, aq: function (b) {
    if (arguments.length === 1) {
        this._aq = b;
        return b
    } else {
        return this._aq
    }
}, _ar: null, ar: function (b) {
    if (arguments.length === 1) {
        this._ar = b;
        return b
    } else {
        return this._ar
    }
}, _as: null, as: function (b) {
    if (arguments.length === 1) {
        this._as = b;
        return b
    } else {
        return this._as
    }
}, _at: null, at: function (b) {
    if (arguments.length === 1) {
        this._at = b;
        return b
    } else {
        return this._at
    }
}, _au: null, au: function (b) {
    if (arguments.length === 1) {
        this._au = b;
        return b
    } else {
        return this._au
    }
}, _av: null, av: function (b) {
    if (arguments.length === 1) {
        this._av = b;
        return b
    } else {
        return this._av
    }
}, c9: function (c) {
    var b = this;
    if (c == null) {
        if (this.aw() != null) {
            this.aw().bf()
        }
        this.aq().at(null);
        this.ar(null);
        this.as(null);
        this.at(null);
        this.au(null);
        this.aw(null);
        if (this.ag().fn() != null) {
            this.ag().fn().f3(null);
            this.ag().fn().f2(null);
            this.ag().fn().f4(null)
        }
        return
    }
    this.aq().at(c);
    this.ar(this.aq().r());
    this.as(this.aq().s());
    this.at(this.aq().t());
    this.au(this.aq().u());
    this.av(window.navigator.msPointerEnabled);
    if (this.av()) {
        this.a3(true)
    }
    this.aw(this.aq().v());
    this.aw().v(this.ag().viewportRect());
    this.aw().x(this.d3.on(this));
    this.aw().onContactCompleted = $.ig.Delegate.prototype.combine(this.aw().onContactCompleted, this.dd.on(this));
    this.aw().onContactMoved = $.ig.Delegate.prototype.combine(this.aw().onContactMoved, this.da.on(this));
    this.aw().onContactStarted = $.ig.Delegate.prototype.combine(this.aw().onContactStarted, this.db.on(this));
    this.aw().onDragCompleted = $.ig.Delegate.prototype.combine(this.aw().onDragCompleted, this.ag().g7.on(this.ag()));
    this.aw().onDragDelta = $.ig.Delegate.prototype.combine(this.aw().onDragDelta, this.ag().g2.on(this.ag()));
    this.aw().onDragStarted = $.ig.Delegate.prototype.combine(this.aw().onDragStarted, this.ag().g6.on(this.ag()));
    this.aw().onGestureCompleted = $.ig.Delegate.prototype.combine(this.aw().onGestureCompleted, function (a, d) {
        return b.ag().he(a)
    });
    this.aw().onKeyDown = $.ig.Delegate.prototype.combine(this.aw().onKeyDown, this.ag().onKeyDown.on(this.ag()));
    this.aw().onMouseDown = $.ig.Delegate.prototype.combine(this.aw().onMouseDown, this.ea.on(this));
    this.aw().onMouseLeave = $.ig.Delegate.prototype.combine(this.aw().onMouseLeave, this.d9.on(this));
    this.aw().onMouseOver = $.ig.Delegate.prototype.combine(this.aw().onMouseOver, this.d8.on(this));
    this.aw().onMouseUp = $.ig.Delegate.prototype.combine(this.aw().onMouseUp, this.eb.on(this));
    this.aw().onMouseWheel = $.ig.Delegate.prototype.combine(this.aw().onMouseWheel, this.ag().gw.on(this.ag()));
    this.aw().onPinchDelta = $.ig.Delegate.prototype.combine(this.aw().onPinchDelta, function (a, f) {
        return b.ag().ha(f)
    });
    this.aw().onPinchStarted = $.ig.Delegate.prototype.combine(this.aw().onPinchStarted, function (a, d) {
        return b.ag().g9(a)
    });
    this.aw().onDoubleTap = $.ig.Delegate.prototype.combine(this.aw().onDoubleTap, function (a) {
        return b.ag().gx(a)
    });
    this.aw().onHold = $.ig.Delegate.prototype.combine(this.aw().onHold, this.dc.on(this));
    if (this.ag().fn() != null) {
        this.ag().fn().f3(this.as());
        this.ag().fn().f2(c);
        this.ag().fn().f4(this.aw())
    }
}, da: function (c, d) {
    this.ag().hs(c, d)
}, db: function (c, d) {
    if (!d && this.ag().mobileMode()) {
        this.ag().mobileMode(false)
    }
    if (d && !this.ag().mobileMode()) {
        this.ag().mobileMode(true)
    }
    this.ag().hk(c, d)
}, dc: function (b) {
    this.ag().g5(b)
}, dd: function (c, d) {
    this.ag().ht(c, d)
}, de: function (b) {
}, _aw: null, aw: function (b) {
    if (arguments.length === 1) {
        this._aw = b;
        return b
    } else {
        return this._aw
    }
}, dh: function () {
    this.ax(this.aq().ax(this.ag().ir()))
}, _ax: null, ax: function (b) {
    if (arguments.length === 1) {
        this._ax = b;
        return b
    } else {
        return this._ax
    }
}, dk: function (l, m, n) {
    var o = Math.round(l.__x);
    var p = Math.round(l.__y);
    n = null;
    var q = this.au().w(o, p);
    if ((q[0] > 0 || q[1] > 0 || q[2] > 0) && q[3] == 255) {
        var z = q[2];
        if (z % 4 != 0) {
            z = z + (4 - (z % 4))
        }
        var y = q[1];
        if (y % 4 != 0) {
            y = y + (4 - (y % 4))
        }
        var x = q[0];
        if (x % 4 != 0) {
            x = x + (4 - (x % 4))
        }
        var w = 0;
        w = z >> 2;
        w = w << 6;
        w = w | (y >> 2);
        w = w << 6;
        w = w | (x >> 2);
        var r = Math.floor($.ig.intDivide(w, $.ig.SeriesView.prototype.a));
        r--;
        var s = null;
        var u = this.ak().getEnumerator();
        while (u.moveNext()) {
            var t = u.current();
            if (t.index() == r) {
                s = t;
                break
            }
        }
        if (s != null) {
            var v = s.getHitDataContext({__x: o, __y: p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            if (v != null) {
                n = v
            }
        }
        return{ret: s, context: n}
    }
    return{ret: null, context: n};
    return{context: n}
}, _ay: null, ay: function (b) {
    if (arguments.length === 1) {
        this._ay = b;
        return b
    } else {
        return this._ay
    }
}, _az: null, az: function (b) {
    if (arguments.length === 1) {
        this._az = b;
        return b
    } else {
        return this._az
    }
}, b: null, c: null, dq: function () {
    this.aq().ba()
}, dr: function (c, d) {
    if (this.ay() != c) {
        this.c = true
    }
    this.ay(c);
    if (this.az() != d) {
        this.c = true
    }
    this.az(d);
    this.ds()
}, ds: function () {
    this.dt()
}, dt: function () {
    var v = this;
    var w = this.ay();
    var G = this.az();
    var H = this.ag().leftMargin();
    var I = this.ag().rightMargin();
    var J = this.ag().bottomMargin();
    var K = this.ag().topMargin();
    var L = this.ag().autoMarginHeight();
    var M = this.ag().autoMarginWidth();
    if (isNaN(L)) {
        L = this.ax() / 2
    }
    if (isNaN(M)) {
        M = 0
    }
    var N = this.ag().shouldAddAutoMargins();
    var O = new $.ig.List$1($.ig.AxisLabelPanelBase.prototype.$type, 0);
    var Q = this.al().getEnumerator();
    while (Q.moveNext()) {
        var P = Q.current();
        if (P.c6() != null) {
            O.add(P.c6())
        }
    }
    if (N) {
        var R = false;
        var S = false;
        var T = false;
        var U = false;
        var W = O.getEnumerator();
        while (W.moveNext()) {
            var V = W.current();
            if ($.ig.LabelPanelArranger.prototype.c(V) == $.ig.AxisLabelsLocation.prototype.outsideLeft && (V.br().labelSettings() == null || V.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
                R = true
            }
            if ($.ig.LabelPanelArranger.prototype.c(V) == $.ig.AxisLabelsLocation.prototype.outsideRight && (V.br().labelSettings() == null || V.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
                S = true
            }
            if ($.ig.LabelPanelArranger.prototype.c(V) == $.ig.AxisLabelsLocation.prototype.outsideTop && (V.br().labelSettings() == null || V.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
                T = true
            }
            if ($.ig.LabelPanelArranger.prototype.c(V) == $.ig.AxisLabelsLocation.prototype.outsideBottom && (V.br().labelSettings() == null || V.br().labelSettings().visibility() == $.ig.Visibility.prototype.visible)) {
                U = true
            }
        }
        if (R || S) {
            if (!T && isNaN(K)) {
                K = L
            }
            if (!U && isNaN(J)) {
                J = L
            }
        }
        if (U || T) {
            if (!R && isNaN(H)) {
                H = M
            }
            if (!S && isNaN(I)) {
                I = M
            }
        }
    }
    if (isNaN(K)) {
        K = 0
    }
    if (isNaN(H)) {
        H = 0
    }
    if (isNaN(I)) {
        I = 0
    }
    if (isNaN(J)) {
        J = 0
    }
    var X = new $.ig.Rect(0, H, K, w - (H + I), G - (K + J));
    X = $.ig.LabelPanelArranger.prototype.a(O, X);
    var Y = new $.ig.Size(w - (H + I), G - (K + J));
    if (this.ag().fw() && X.width() != X.height()) {
        if (X.width() < X.height()) {
            K += (X.height() - X.width()) / 2;
            X.top(X.top() + ((X.height() - X.width()) / 2));
            Y.d(Y.d() - (X.height() - X.width()));
            X.height(X.width())
        } else {
            H += (X.width() - X.height()) / 2;
            X.left(X.left() + ((X.width() - X.height()) / 2));
            Y.c(Y.c() - (X.width() - X.height()));
            X.width(X.height())
        }
    }
    var Z = (function () {
        var a = new $.ig.LabelPanelsArrangeState();
        a.m(H);
        a.o(H);
        a.i(K + Y.d());
        a.k(K + Y.d());
        a.n(H + Y.c());
        a.p(H + Y.c());
        a.j(K);
        a.l(K);
        return a
    }());
    $.ig.LabelPanelArranger.prototype.e(O, Z, X, function (a, b) {
        return a.bv(b)
    });
    var aa = false;
    if (this.c) {
        this.c = false;
        aa = true
    }
    if (aa) {
        this.aq().ay(this.ay(), this.az())
    }
    this.b = X;
    this.ag().gk(this.ag().viewportRect(), X);
    var ac = this.al().getEnumerator();
    while (ac.moveNext()) {
        var ab = ac.current();
        ab.dq(ab.c2(), X)
    }
    var B = this.ak().getEnumerator();
    while (B.moveNext()) {
        var A = B.current();
        A.ex(A.view().ab(), X)
    }
    if (this.ag().fn() != null) {
        var C = this.ag().fn();
        var D = (this.ag().mobileMode()) ? X.width() : Number.POSITIVE_INFINITY;
        var E = (this.ag().mobileMode()) ? X.height() : Number.POSITIVE_INFINITY;
        var F = C.e7(new $.ig.Size(D, E));
        this.ag().fn().f7(new $.ig.Rect(0, X.right() - F.c(), X.bottom() - F.d(), F.c(), F.d()))
    }
    this.du(X)
}, du: function (b) {
}, dv: function () {
    if (!this.g) {
        this.g = true;
        this.ah().o()
    }
}, d: null, dw: function () {
    if (this.as() == null) {
        return
    }
    if (this.as().b()) {
        if (!this.d.isEmpty()) {
            this.as().t(this.d.left(), this.d.top(), this.d.width(), this.d.height())
        }
    }
    this.dx()
}, e: null, dx: function () {
    if (this.as().b()) {
        this.d = new $.ig.Rect(0, 0, 0, this.ay(), this.az());
        this.as().n(this.ap());
        this.as().n(this.ao());
        if (this.e) {
            this.as().e($.ig.GradientDirection.prototype.bottomTop, null)
        }
        this.as().g(this.an());
        this.as().f(this.am())
    }
}, dy: function () {
    return new $.ig.Rect(0, 0, 0, this.ay(), this.az())
}, dz: function () {
    return this.aq().az()
}, d0: function () {
    var a = this;
    this.ag().circleMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.d);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().triangleMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.e);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().pyramidMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.f);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().squareMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.g);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().diamondMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.i);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().pentagonMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.j);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().hexagonMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.k);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().tetragramMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.l);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().pentagramMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.m);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()));
    this.ag().hexagramMarkerTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.MarkerTemplates.prototype.n);
        b.measure($.ig.MarkerTemplates.prototype.c);
        return b
    }()))
}, d1: function () {
    this.ec();
    var b = this.ax();
    this.dh();
    if (b != this.ax()) {
        this.ag().ic()
    }
}, d2: function () {
    if (this.ag().fn() != null) {
        this.ag().fn().__visibility = this.ag().overviewPlusDetailPaneVisibility();
        this.ag().fn().fu(false)
    }
}, d3: function (e) {
    if (e == null) {
        return false
    }
    var f = e.__x;
    var g = e.__y;
    if (f >= this.ag().viewportRect().left() && g >= this.ag().viewportRect().top() && f <= this.ag().viewportRect().left() + this.ag().viewportRect().width() && g <= this.ag().viewportRect().top() + this.ag().viewportRect().height()) {
        var h = this.ag().fn();
        if (h != null && h.__visibility == $.ig.Visibility.prototype.visible && f >= h.c3().ay().left() && g >= h.c3().ay().top() && f <= h.c3().ay().left() + h.c3().ay().width() && g <= h.c3().ay().top() + h.c3().ay().height()) {
            return false
        }
        return true
    }
    return false
}, _a0: null, a0: function (b) {
    if (arguments.length === 1) {
        this._a0 = b;
        return b
    } else {
        return this._a0
    }
}, _a1: null, a1: function (b) {
    if (arguments.length === 1) {
        this._a1 = b;
        return b
    } else {
        return this._a1
    }
}, d8: function (k, l, m) {
    var j = this;
    if (!m && this.ag().mobileMode()) {
        this.ag().mobileMode(false)
    }
    var n = new $.ig.MouseEventArgs();
    n.position(k);
    if (this.ag().fe() == $.ig.InteractionState.prototype.dragPan || this.ag().fe() == $.ig.InteractionState.prototype.dragZoom || this.ag().fj() || (this.ag().fn() == null || this.ag().fn().dq())) {
        if (this.a0() != null) {
            if (this.f) {
                this.eb(k)
            }
            this.a0().f9(n.position(), this.a1(), n);
            this.a0(null)
        }
        return
    }
    var o = null;
    var p = (function () {
        var a = j.dk(k, !l, o);
        o = a.context;
        return a.ret
    }());
    this.a1(o);
    if (p != null) {
        var q = false;
        if (this.a0() == null) {
            q = true
        }
        this.a0(p);
        if (q) {
            p.f7(n.position(), o, n)
        } else {
            p.f8(n.position(), o, n)
        }
    } else {
        if (this.a0() != null) {
            this.a0().f9(n.position(), o, n);
            this.a0(null)
        }
        for (var r = 0; r < this.ag().series().count(); r++) {
            var s = this.ag().series().__inner[r];
            if (s.d5()) {
                s.f9(n.position(), s.d0(), n)
            }
        }
    }
}, d9: function (c) {
    if (this.a0() != null) {
        var d = new $.ig.MouseEventArgs();
        d.position(c);
        this.a0().f9(d.position(), null, d);
        this.a0(null)
    }
    this.ag().gv(c)
}, f: null, ea: function (c) {
    if (this.a0() != null) {
        this.f = true;
        var d = new $.ig.MouseButtonEventArgs();
        d.position(c);
        this.a0().ga(d.position(), this.a1(), d)
    }
}, eb: function (c) {
    if (this.a0() != null) {
        this.f = false;
        var d = new $.ig.MouseButtonEventArgs();
        d.position(c);
        this.a0().gb(d.position(), this.a1(), d)
    }
}, ec: function () {
}, a2: function () {
    return this.aw().w()
}, ee: function (b) {
    if (this.aw() != null) {
        this.aw().v(this.ag().viewportRect())
    }
}, ef: function (b) {
    this.ag().fi(this.ag().mobileMode() || this.ag().crosshairVisibility() == $.ig.Visibility.prototype.visible);
    this.eg(b)
}, eg: function (b) {
    if (this.ag().fn() != null) {
        this.ag().fn().mobileMode(b);
        if (!b) {
            this.ag().fn().__visibility = this.ag().overviewPlusDetailPaneVisibility();
            this.ag().fn().c3().af(false)
        } else {
            this.ag().fn().__visibility = $.ig.Visibility.prototype.collapsed;
            this.ag().fn().c3().af(this.ag().overviewPlusDetailPaneVisibility() == $.ig.Visibility.prototype.visible)
        }
        this.ag().ic()
    }
}, g: null, isDirty: function (b) {
    if (arguments.length === 1) {
        this.g = b;
        return b
    } else {
        return this.g
    }
}, undirty: function (b) {
    this.g = false;
    this.dw()
}, index: function () {
    return 10
}, postRender: function () {
}, eh: function () {
    this.ds()
}, h: null, ei: function () {
    this.aq().a6()
}, ej: function () {
    this.aq().a7()
}, ek: function (b) {
    this.aq().a2()
}, el: function (b) {
    this.aq().a5(b)
}, em: function (b) {
    this.aq().a3(b)
}, en: function (b) {
    this.aq().a4(b)
}, eo: function (b) {
    this.aq().a8(b)
}, ep: function (b) {
    this.aq().a9(b)
}, eq: function (b) {
    this.ag().canvasRenderScheduler().o()
}, er: function (b) {
}, _a3: null, a3: function (b) {
    if (arguments.length === 1) {
        this._a3 = b;
        return b
    } else {
        return this._a3
    }
}, eu: function (b) {
    if (this.ag().mobileMode()) {
        return $.ig.InteractionState.prototype.dragPan
    } else {
        return $.ig.InteractionState.prototype.dragZoom
    }
}, $type: new $.ig.Type("SeriesViewerView", $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])}, true);
$.ig.util.defType("XamDataChartView", "SeriesViewerView", {init: function (b) {
    $.ig.SeriesViewerView.prototype.init.call(this, b);
    this.e4(b)
}, _e4: null, e4: function (b) {
    if (arguments.length === 1) {
        this._e4 = b;
        return b
    } else {
        return this._e4
    }
}, fa: function (b) {
}, ec: function () {
    var f = this;
    var g;
    var h;
    var i;
    var j;
    var k;
    (function () {
        var a = f.aq().a1(g, h, i, j, k);
        g = a.brushes;
        h = a.outlines;
        i = a.fontBrush;
        j = a.font;
        k = a.axisLineBrush;
        return a.ret
    }());
    this.e4().brushes(g);
    this.e4().outlines(h);
    this.e4().markerBrushes(g);
    this.e4().markerOutlines(h);
    this.e5(i);
    this.e7(j);
    this.e6(k)
}, _e5: null, e5: function (b) {
    if (arguments.length === 1) {
        this._e5 = b;
        return b
    } else {
        return this._e5
    }
}, _e6: null, e6: function (b) {
    if (arguments.length === 1) {
        this._e6 = b;
        return b
    } else {
        return this._e6
    }
}, c9: function (b) {
    $.ig.SeriesViewerView.prototype.c9.call(this, b)
}, dx: function () {
    this.ap().a7(1);
    this.ao().a7(1);
    this.ap().__stroke = this.e5();
    this.ao().__stroke = this.e5();
    $.ig.SeriesViewerView.prototype.dx.call(this)
}, _e7: null, e7: function (b) {
    if (arguments.length === 1) {
        this._e7 = b;
        return b
    } else {
        return this._e7
    }
}, $type: new $.ig.Type("XamDataChartView", $.ig.SeriesViewerView.prototype.$type)}, true);
$.ig.util.defType("ChartCollection", "ObservableCollection$1", {init: function () {
    $.ig.ObservableCollection$1.prototype.init.call(this, $.ig.SeriesViewer.prototype.$type)
}, collectionResetting: null, m: function () {
    if (this.collectionResetting != null) {
        this.collectionResetting(this, null)
    }
    $.ig.ObservableCollection$1.prototype.m.call(this)
}, item: function (a) {
    var f = this.getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        if (a == e.name()) {
            return e
        }
    }
    return null
}, $type: new $.ig.Type("ChartCollection", $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.SeriesViewer.prototype.$type))}, true);
$.ig.util.defType("ChartContentManager", "DependencyObject", {e: null, f: null, g: null, l: function (b) {
    if (arguments.length === 1) {
        this.g = b;
        return b
    } else {
        return this.g
    }
}, init: function (b) {
    this.e = null;
    this.f = new $.ig.Dictionary$2($.ig.ChartContentType.prototype.$type, $.ig.Dictionary$2.prototype.$type.specialize($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type), 0);
    this.g = new $.ig.List$1($.ig.Series.prototype.$type, 0);
    this.h = false;
    $.ig.DependencyObject.prototype.init.call(this);
    this.o(true);
    this.n(true);
    this.f.add($.ig.ChartContentType.prototype.series, new $.ig.Dictionary$2($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type, 0));
    this.f.add($.ig.ChartContentType.prototype.axis, new $.ig.Dictionary$2($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type, 0));
    this.f.add($.ig.ChartContentType.prototype.background, new $.ig.Dictionary$2($.ig.DependencyObject.prototype.$type, $.ig.ContentInfo.prototype.$type, 0));
    this.e = b
}, r: function (e, f, g) {
    var h = this.x(e, f);
    h.h(g);
    return h
}, s: function (e, f) {
    var g = this.f.item(e);
    if (g.containsKey(f)) {
        g.remove(f)
    }
    var h = $.ig.util.cast($.ig.Series.prototype.$type, f);
    if (h != null && this.l().contains(h)) {
        this.l().remove(h)
    }
}, h: null, t: function () {
    if (!this.h) {
        this.h = true;
        window.setTimeout(this.z.on(this), 0)
    }
}, u: function (f, g, h, i) {
    var j = h;
    if (!j.j()) {
        j.i(i)
    } else {
        if (!i) {
            j.i(false)
        }
    }
    if (!j.j()) {
        j.j(true);
        this.t()
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, x: function (g, h) {
    var f = this;
    var i = this.f.item(g);
    var j = null;
    if (!(function () {
        var a = i.tryGetValue(h, j);
        j = a.value;
        return a.ret
    }())) {
        j = new $.ig.ContentInfo();
        j.g(h);
        i.add(h, j);
        var k = $.ig.util.cast($.ig.Series.prototype.$type, h);
        if (k != null && !this.l().contains(k)) {
            this.l().add(k)
        }
    }
    return j
}, y: function () {
    this.z()
}, z: function () {
    if (this.e == null || this.f == null) {
        return
    }
    if (!this.h) {
        return
    }
    this.h = false;
    var d = this.aa().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        c.z()
    }
    if (!this.h) {
        this.e.im()
    }
}, aa: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, $a: null, $d: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$a = null;
                            this.$a = this.$this.f.item($.ig.ChartContentType.prototype.axis);
                            this.$state = 1;
                            break;
                        case 1:
                            this.$c = this.$a.values().getEnumerator();
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
                            this.$a = this.$this.f.item($.ig.ChartContentType.prototype.series);
                            this.$d = new $.ig.List$1($.ig.ContentInfo.prototype.$type, 0);
                            this.$state = 6;
                            break;
                        case 6:
                            this.$f = this.$this.l().getEnumerator();
                            this.$state = 8;
                            break;
                        case 7:
                            this.$e = this.$f.current();
                            this.$d.add(this.$a.item(this.$e));
                            this.$state = 8;
                            break;
                        case 8:
                            if (this.$f.moveNext()) {
                                this.$state = 7
                            } else {
                                this.$state = 9
                            }
                            break;
                        case 9:
                            this.$state = 10;
                            break;
                        case 10:
                            this.$h = this.$d.getEnumerator();
                            this.$state = 13;
                            break;
                        case 11:
                            this.$g = this.$h.current();
                            this.$current = this.$g;
                            this.$state = 12;
                            return true;
                        case 12:
                            this.$state = 13;
                            break;
                        case 13:
                            if (this.$h.moveNext()) {
                                this.$state = 11
                            } else {
                                this.$state = 14
                            }
                            break;
                        case 14:
                            this.$a = this.$this.f.item($.ig.ChartContentType.prototype.background);
                            this.$state = 15;
                            break;
                        case 15:
                            this.$j = this.$a.values().getEnumerator();
                            this.$state = 18;
                            break;
                        case 16:
                            this.$i = this.$j.current();
                            this.$current = this.$i;
                            this.$state = 17;
                            return true;
                        case 17:
                            this.$state = 18;
                            break;
                        case 18:
                            if (this.$j.moveNext()) {
                                this.$state = 16
                            } else {
                                this.$state = 19
                            }
                            break;
                        case 19:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1($.ig.ContentInfo.prototype.$type, a)
}, ab: function (h) {
    var j = this.f.item($.ig.ChartContentType.prototype.axis).values().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        ($.ig.util.cast($.ig.Axis.prototype.$type, i.g())).e6()
    }
    var l = this.f.item($.ig.ChartContentType.prototype.axis).values().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        k.z()
    }
    var n = this.f.item($.ig.ChartContentType.prototype.axis).values().getEnumerator();
    while (n.moveNext()) {
        var m = n.current();
        ($.ig.util.cast($.ig.Axis.prototype.$type, m.g())).c3($.ig.Rect.prototype.empty())
    }
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, ag: function (e, f, g, h) {
    g.k(h)
}, ah: function (c, d) {
    if (!d.m()) {
        d.m(true);
        this.t()
    }
}, $type: new $.ig.Type("ChartContentManager", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("ContentInfo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, l: function () {
    if (this.k().isEmpty()) {
        return false
    }
    if (this.k().width() == 0 && this.k().height() == 0) {
        return false
    }
    return true
}, y: function () {
    if (this.m() && $.ig.util.cast($.ig.Axis.prototype.$type, this.g()) !== null) {
        this.m(false);
        var c = this.j();
        this.j(true);
        var d = ($.ig.util.cast($.ig.Axis.prototype.$type, this.g())).updateRange1(true);
        if (!d) {
            this.j(c)
        }
    }
}, z: function () {
    this.y();
    if ($.ig.util.cast($.ig.Axis.prototype.$type, this.g()) !== null) {
        var c = $.ig.util.cast($.ig.Axis.prototype.$type, this.g());
        if (c.crossingAxis() != null) {
            var d = c.crossingAxis();
            if (d.c8() != null && d.c8().m()) {
                d.c8().y()
            }
        }
    }
    if (this.j()) {
        this.j(false);
        this.h()(this.i());
        this.i(false)
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, $type: new $.ig.Type("ContentInfo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DataContext", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _series: null, series: function (b) {
    if (arguments.length === 1) {
        this._series = b;
        return b
    } else {
        return this._series
    }
}, _item: null, item: function (b) {
    if (arguments.length === 1) {
        this._item = b;
        return b
    } else {
        return this._item
    }
}, _actualItemBrush: null, actualItemBrush: function (b) {
    if (arguments.length === 1) {
        this._actualItemBrush = b;
        return b
    } else {
        return this._actualItemBrush
    }
}, _outline: null, outline: function (b) {
    if (arguments.length === 1) {
        this._outline = b;
        return b
    } else {
        return this._outline
    }
}, _itemLabel: null, itemLabel: function (b) {
    if (arguments.length === 1) {
        this._itemLabel = b;
        return b
    } else {
        return this._itemLabel
    }
}, _itemBrush: null, itemBrush: function (b) {
    if (arguments.length === 1) {
        this._itemBrush = b;
        return b
    } else {
        return this._itemBrush
    }
}, _thickness: null, thickness: function (b) {
    if (arguments.length === 1) {
        this._thickness = b;
        return b
    } else {
        return this._thickness
    }
}, $type: new $.ig.Type("DataContext", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LabelPanelArranger", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (j, k) {
    var m = j.getEnumerator();
    while (m.moveNext()) {
        var l = m.current();
        var n = l.br();
        var o = n.crossingAxis();
        o = $.ig.LabelPanelArranger.prototype.b(l, n, o);
        var p = $.ig.LabelPanelArranger.prototype.c(l);
        var q = 0;
        var r = 0;
        q = l.b5();
        r = l.b5();
        if (l.br().labelSettings() != null && l.br().labelSettings().visibility() != $.ig.Visibility.prototype.visible) {
            r = 0;
            q = 0
        }
        if ($.ig.util.cast($.ig.HorizontalAxisLabelPanelBase.prototype.$type, l) !== null) {
            switch (p) {
                case $.ig.AxisLabelsLocation.prototype.outsideTop:
                    k.y(Math.max(0, k.top() + r));
                    k.height(Math.max(0, k.height() - r));
                    n.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideTop);
                    break;
                case $.ig.AxisLabelsLocation.prototype.insideTop:
                    if (o != null && (l.bx() - k.top() < r && $.ig.util.cast($.ig.HorizontalAxisLabelPanel.prototype.$type, l) !== null)) {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideBottom)
                    } else {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideTop)
                    }
                    break;
                case $.ig.AxisLabelsLocation.prototype.insideBottom:
                    if (o != null && (k.bottom() - l.bx() < r && $.ig.util.cast($.ig.HorizontalAxisLabelPanel.prototype.$type, l) !== null)) {
                        if (n.labelSettings() != null) {
                            n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideTop)
                        }
                    } else {
                        if (n.labelSettings() != null) {
                            n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideBottom)
                        }
                    }
                    break;
                case $.ig.AxisLabelsLocation.prototype.outsideBottom:
                default:
                    if (n.labelSettings() != null) {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideBottom)
                    }
                    k.height(Math.max(0, k.height() - r));
                    break
            }
        }
        if ($.ig.util.cast($.ig.VerticalAxisLabelPanel.prototype.$type, l) !== null) {
            switch (p) {
                case $.ig.AxisLabelsLocation.prototype.outsideRight:
                    k.width(Math.max(0, k.width() - q));
                    n.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideRight);
                    break;
                case $.ig.AxisLabelsLocation.prototype.insideLeft:
                    if (o != null && l.bx() - k.left() < q) {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideRight)
                    } else {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideLeft)
                    }
                    break;
                case $.ig.AxisLabelsLocation.prototype.insideRight:
                    if (o != null && k.right() - l.bx() < q) {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideLeft)
                    } else {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.insideRight)
                    }
                    break;
                case $.ig.AxisLabelsLocation.prototype.outsideLeft:
                default:
                    if (n.labelSettings() != null) {
                        n.labelSettings().q($.ig.AxisLabelsLocation.prototype.outsideLeft)
                    }
                    k.x(Math.max(0, k.left() + q));
                    k.width(Math.max(0, k.width() - q));
                    break
            }
        }
        if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, l) !== null) {
            if (n.labelSettings() != null) {
                n.labelSettings().q(p)
            }
        }
    }
    return k
}, b: function (d, e, f) {
    if ($.ig.util.cast($.ig.RadialAxisLabelPanel.prototype.$type, d) !== null && $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, e) !== null) {
        f = ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, e)).iq()
    }
    if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, d) !== null && $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, e) !== null) {
        f = ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, e)).id()
    }
    if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, d) !== null && $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, e) !== null) {
        f = ($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, e)).hq()
    }
    return f
}, c: function (d) {
    if (d == null) {
        return $.ig.AxisLabelsLocation.prototype.outsideBottom
    } else {
        var e = d.br();
        if (e != null && e.labelSettings() != null) {
            var f = e.labelSettings().q();
            if (!d.dk(f)) {
                return d.dj()
            }
            return f
        } else {
            return d.dj()
        }
    }
}, d: function (k, l, m, n) {
    var o = k.br();
    var p = o.crossingAxis();
    p = $.ig.LabelPanelArranger.prototype.b(k, o, p);
    var q = $.ig.LabelPanelArranger.prototype.c(k);
    var r;
    var s = k.b5();
    var t = k.b5();
    switch (q) {
        case $.ig.AxisLabelsLocation.prototype.outsideRight:
            l.n(l.n() - t);
            l.p(l.p() - t);
            r = new $.ig.Rect(0, l.n(), m.top(), t, m.height());
            n(k, r);
            break;
        case $.ig.AxisLabelsLocation.prototype.outsideLeft:
            r = new $.ig.Rect(0, l.m(), m.top(), t, m.height());
            n(k, r);
            l.m(l.m() + t);
            l.o(l.o() + t);
            break;
        case $.ig.AxisLabelsLocation.prototype.insideRight:
            if (p != null) {
                r = new $.ig.Rect(0, l.m() + k.bx(), m.top(), t, m.height())
            } else {
                l.p(l.p() - t);
                r = new $.ig.Rect(0, l.p(), m.top(), t, m.height())
            }
            n(k, r);
            break;
        case $.ig.AxisLabelsLocation.prototype.insideLeft:
            if (p != null) {
                r = new $.ig.Rect(0, l.m() + k.bx() - t, m.top(), t, m.height())
            } else {
                r = new $.ig.Rect(0, l.o(), m.top(), t, m.height());
                l.o(l.o() + t)
            }
            n(k, r);
            break;
        case $.ig.AxisLabelsLocation.prototype.outsideBottom:
            l.i(l.i() - s);
            l.k(l.k() - s);
            r = new $.ig.Rect(0, m.left(), l.i(), m.width(), s);
            n(k, r);
            break;
        case $.ig.AxisLabelsLocation.prototype.outsideTop:
            r = new $.ig.Rect(0, m.left(), l.j(), m.width(), s);
            n(k, r);
            l.j(l.j() + s);
            l.l(l.l() + s);
            break;
        case $.ig.AxisLabelsLocation.prototype.insideBottom:
            if (p != null) {
                r = new $.ig.Rect(0, m.left(), l.j() + k.bx(), m.width(), s)
            } else {
                l.k(l.k() - s);
                r = new $.ig.Rect(0, m.left(), l.k(), m.width(), s)
            }
            n(k, r);
            break;
        case $.ig.AxisLabelsLocation.prototype.insideTop:
            if (p != null) {
                r = new $.ig.Rect(0, m.left(), l.j() + k.bx() - s, m.width(), s)
            } else {
                r = new $.ig.Rect(0, m.left(), l.l(), m.width(), s);
                l.l(l.l() + s)
            }
            n(k, r);
            break
    }
    if ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, k) !== null) {
        r = new $.ig.Rect(0, m.left(), m.top(), m.width(), m.height());
        n(k, r)
    }
}, e: function (n, o, p, q) {
    var r = new $.ig.List$1($.ig.AxisLabelPanelBase.prototype.$type, 0);
    var s = new $.ig.List$1($.ig.AxisLabelPanelBase.prototype.$type, 0);
    var u = n.getEnumerator();
    while (u.moveNext()) {
        var t = u.current();
        var v = $.ig.LabelPanelArranger.prototype.c(t);
        switch (v) {
            case $.ig.AxisLabelsLocation.prototype.outsideBottom:
            case $.ig.AxisLabelsLocation.prototype.outsideLeft:
            case $.ig.AxisLabelsLocation.prototype.outsideTop:
            case $.ig.AxisLabelsLocation.prototype.outsideRight:
                s.add(t);
                break;
            case $.ig.AxisLabelsLocation.prototype.insideBottom:
            case $.ig.AxisLabelsLocation.prototype.insideLeft:
            case $.ig.AxisLabelsLocation.prototype.insideTop:
            case $.ig.AxisLabelsLocation.prototype.insideRight:
                r.add(t);
                break
        }
    }
    var x = s.getEnumerator();
    while (x.moveNext()) {
        var w = x.current();
        $.ig.LabelPanelArranger.prototype.d(w, o, p, q)
    }
    var z = r.getEnumerator();
    while (z.moveNext()) {
        var y = z.current();
        $.ig.LabelPanelArranger.prototype.d(y, o, p, q)
    }
}, $type: new $.ig.Type("LabelPanelArranger", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LabelPanelsArrangeState", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, $type: new $.ig.Type("LabelPanelsArrangeState", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LegendTemplates", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (f) {
    var g = f.data;
    var h = g.series();
    var i = h.legendItemBadgeTemplate();
    var j = h.title();
    if (j == null) {
        j = "Series Title"
    }
    $.ig.LegendTemplates.prototype.d(f.context, f.xPosition, f.yPosition, f.availableWidth, f.availableHeight, f.data, j.toString(), i, f.passInfo)
}, b: function (f) {
    var g = f.data;
    var h = g.series();
    var i = h.legendItemBadgeTemplate();
    var j = g.itemLabel();
    if (j == null) {
        j = "Series Item"
    }
    $.ig.LegendTemplates.prototype.d(f.context, f.xPosition, f.yPosition, f.availableWidth, f.availableHeight, f.data, j.toString(), i, f.passInfo)
}, c: function (f) {
    var g = f.data;
    var h = g.series();
    var i = h.legendItemBadgeTemplate();
    var j = g.itemLabel();
    if (j == null) {
        j = "Pie Item"
    }
    $.ig.LegendTemplates.prototype.d(f.context, f.xPosition, f.yPosition, f.availableWidth, f.availableHeight, f.data, j.toString(), i, f.passInfo)
}, d: function (r, s, t, u, v, w, x, y, z) {
    var A = r;
    var B = w;
    if (B != null && B.series() != null) {
        if (y != null) {
            var C = $("<canvas></canvas>");
            C.attr("width", "18");
            C.attr("height", "16");
            var D = $("<td class='ui-legend-item-badge'></td>");
            D.append(C);
            var E = (C[0]).getContext("2d");
            var F = new $.ig.DataTemplateMeasureInfo();
            F.passInfo = z;
            F.context = E;
            F.width = 18;
            F.height = 16;
            F.data = B;
            y.measure()(F);
            var G = new $.ig.DataTemplateRenderInfo();
            G.availableWidth = isNaN(F.width) ? 18 : Math.min(F.width, 18);
            G.availableHeight = isNaN(F.height) ? 16 : Math.min(F.height, 16);
            G.passInfo = z;
            G.context = E;
            G.data = B;
            G.xPosition = 0;
            G.yPosition = 0;
            y.render()(G);
            A.append(D)
        }
        var H = $("<td class='ui-legend-item-text'><span>" + x + "</span></td>");
        A.append(H)
    }
}, e: function (g) {
    var h = g.data;
    var i = g.context;
    if (h.itemBrush() != null) {
        h.actualItemBrush(h.itemBrush())
    } else {
        h.actualItemBrush(h.itemBrush())
    }
    var j = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), i);
    var k = h.slice();
    var l = new $.ig.Rectangle();
    l.v(g.availableWidth - (k.c2() * 2) - 2);
    l.w(g.availableHeight - (k.c2() * 2));
    l.y(k.c2() + 1);
    l.x(k.c2());
    l.a7(k.c2());
    l.__fill = k.c9();
    l.__stroke = k.da();
    j.f(l)
}, f: function (h) {
    var i = h.data;
    var j = h.context;
    var k = i.series();
    if (i.itemBrush() != null) {
        i.actualItemBrush(i.itemBrush())
    } else {
        i.actualItemBrush(k.actualBrush())
    }
    var l = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), j);
    var m = new $.ig.Line();
    m.bq(0);
    m.bs(h.availableHeight / 2);
    m.br(h.availableWidth);
    m.bt(h.availableHeight / 2);
    m.a7(k.thickness());
    m.__stroke = i.actualItemBrush();
    l.n(m);
    var n = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, i.series());
    if (n != null && n.actualMarkerTemplate() != null && n.actualMarkerTemplate().render() != null) {
        i.outline(k.actualOutline());
        $.ig.LegendTemplates.prototype.g(n.actualMarkerTemplate(), h)
    }
}, g: function (e, f) {
    var g = new $.ig.DataTemplateMeasureInfo();
    g.passInfo = f.passInfo;
    g.width = 11;
    g.height = 11;
    g.data = f.data;
    g.context = f.context;
    if (e.measure() != null) {
        e.measure()(g);
        if (isNaN(g.width) || Number.isInfinity(g.width) || g.width > 11) {
            g.width = 11
        }
        if (isNaN(g.height) || Number.isInfinity(g.height) || g.height > 11) {
            g.height = 11
        }
    }
    var h = new $.ig.DataTemplateRenderInfo();
    h.passInfo = f.passInfo;
    h.availableWidth = g.width;
    h.availableHeight = g.height;
    h.xPosition = f.availableWidth / 2;
    h.yPosition = f.availableHeight / 2;
    h.data = f.data;
    h.context = f.context;
    e.render()(h)
}, h: function (c) {
    var d = null;
    if ($.ig.util.cast($.ig.Series.prototype.$type, c.series()) !== null) {
        d = c.series()
    }
    if (c.itemBrush() != null) {
        c.actualItemBrush(c.itemBrush())
    } else {
        if (d != null) {
            c.actualItemBrush(d.actualBrush())
        } else {
            c.actualItemBrush(c.itemBrush())
        }
    }
}, i: function (b) {
}, j: function (b) {
}, k: function (b) {
}, l: function (j) {
    var i = this;
    var k = j.data;
    var l = j.context;
    $.ig.LegendTemplates.prototype.h(k);
    var m = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), l);
    var n = new $.ig.Path();
    var o = new $.ig.PathGeometry();
    var p = new $.ig.PathFigure();
    p.__isFilled = true;
    p.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    p.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    p.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    p.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    p.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    p.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    p.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    o.d().add(p);
    n.bp(o);
    if ($.ig.util.cast($.ig.Series.prototype.$type, k.series()) !== null) {
        n.a7((k.series()).thickness());
        n.__stroke = (k.series()).actualOutline()
    }
    n.__fill = k.actualItemBrush();
    m.g(n);
    var q = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, k.series());
    if (q != null && q.actualMarkerTemplate() != null && q.actualMarkerTemplate().render() != null) {
        if ($.ig.util.cast($.ig.Series.prototype.$type, k.series()) !== null) {
            k.outline((k.series()).actualOutline())
        }
        $.ig.LegendTemplates.prototype.g(q.actualMarkerTemplate(), j)
    }
}, m: function (i) {
    var h = this;
    var j = i.data;
    var k = i.context;
    $.ig.LegendTemplates.prototype.h(j);
    var l = new $.ig.Path();
    var m = new $.ig.PathGeometry();
    var n = new $.ig.PathFigure();
    n.__isFilled = true;
    n.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    n.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    n.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    n.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    n.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    n.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    n.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    m.d().add(n);
    l.bp(m);
    if ($.ig.util.cast($.ig.Series.prototype.$type, j.series()) !== null) {
        l.a7((j.series()).thickness());
        l.__stroke = (j.series()).actualOutline()
    }
    l.__fill = j.actualItemBrush();
    var o = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), k);
    o.g(l)
}, n: function (g) {
    var h = g.data;
    var i = g.context;
    var j = h.series();
    if (h.itemBrush() != null) {
        h.actualItemBrush(h.itemBrush())
    } else {
        h.actualItemBrush(j.actualBrush())
    }
    var k = new $.ig.Line();
    k.bq(0);
    k.bs(g.availableHeight / 2);
    k.br(g.availableWidth);
    k.bt(g.availableHeight / 2);
    k.a7(j.thickness());
    k.__stroke = h.actualItemBrush();
    var l = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), i);
    l.n(k)
}, o: function (d) {
    var e = d.data;
    $.ig.LegendTemplates.prototype.h(e);
    var f = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, e.series());
    if (f != null && f.actualMarkerTemplate() != null && f.actualMarkerTemplate().render() != null) {
        if ($.ig.util.cast($.ig.Series.prototype.$type, e.series()) !== null) {
            e.outline((e.series()).actualOutline())
        }
        $.ig.LegendTemplates.prototype.g(f.actualMarkerTemplate(), d)
    }
}, p: function (n) {
    var m = this;
    var o = n.data;
    var p = n.context;
    var q = o.series();
    if (o.itemBrush() != null) {
        o.actualItemBrush(o.itemBrush())
    } else {
        o.actualItemBrush(q.actualBrush())
    }
    var r = new $.ig.Path();
    var s = new $.ig.PathGeometry();
    var t = new $.ig.PathFigure();
    t.__isFilled = true;
    t.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    t.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    t.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    t.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    t.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    s.d().add(t);
    r.bp(s);
    if ($.ig.util.cast($.ig.Series.prototype.$type, o.series()) !== null) {
        r.a7((o.series()).thickness());
        r.__stroke = (o.series()).actualOutline()
    }
    r.__fill = o.actualItemBrush();
    var u = new $.ig.Path();
    var v = new $.ig.PathGeometry();
    var w = new $.ig.PathFigure();
    w.__isFilled = true;
    w.__startPoint = {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    w.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    w.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    w.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    v.d().add(w);
    u.bp(v);
    if ($.ig.util.cast($.ig.Series.prototype.$type, o.series()) !== null) {
        u.a7((o.series()).thickness());
        u.__stroke = (o.series()).actualOutline()
    }
    if ($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, o.series()) !== null) {
        u.__fill = (o.series()).negativeBrush()
    }
    var x = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), p);
    x.g(r);
    x.g(u);
    var y = $.ig.util.cast($.ig.MarkerSeries.prototype.$type, o.series());
    if (y != null && y.actualMarkerTemplate() != null && y.actualMarkerTemplate().render() != null) {
        if ($.ig.util.cast($.ig.Series.prototype.$type, o.series()) !== null) {
            o.outline((o.series()).actualOutline())
        }
        $.ig.LegendTemplates.prototype.g(y.actualMarkerTemplate(), n)
    }
}, q: function (m) {
    var l = this;
    var n = m.data;
    var o = m.context;
    var p = n.series();
    if (n.itemBrush() != null) {
        n.actualItemBrush(n.itemBrush())
    } else {
        n.actualItemBrush(p.actualBrush())
    }
    var q = new $.ig.Path();
    var r = new $.ig.PathGeometry();
    var s = new $.ig.PathFigure();
    s.__isFilled = true;
    s.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    s.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    s.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    s.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    s.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    r.d().add(s);
    q.bp(r);
    if ($.ig.util.cast($.ig.Series.prototype.$type, n.series()) !== null) {
        q.a7((n.series()).thickness());
        q.__stroke = (n.series()).actualOutline()
    }
    q.__fill = n.actualItemBrush();
    var t = new $.ig.Path();
    var u = new $.ig.PathGeometry();
    var v = new $.ig.PathFigure();
    v.__isFilled = true;
    v.__startPoint = {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    v.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    v.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    v.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    u.d().add(v);
    t.bp(u);
    if ($.ig.util.cast($.ig.Series.prototype.$type, n.series()) !== null) {
        t.a7((n.series()).thickness());
        t.__stroke = (n.series()).actualOutline()
    }
    if ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, n.series()) !== null) {
        t.__fill = (n.series()).negativeBrush()
    }
    var w = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), o);
    w.g(q);
    w.g(t)
}, r: function (m) {
    var l = this;
    var n = m.data;
    var o = m.context;
    var p = n.series();
    if (n.itemBrush() != null) {
        n.actualItemBrush(n.itemBrush())
    } else {
        n.actualItemBrush(p.actualBrush())
    }
    var q = new $.ig.Path();
    var r = new $.ig.PathGeometry();
    var s = new $.ig.PathFigure();
    s.__isFilled = true;
    s.__startPoint = {__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    s.__segments.add(new $.ig.LineSegment(0, {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    s.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    s.__segments.add(new $.ig.LineSegment(0, {__x: 5, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    s.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 0, __y: 5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    r.d().add(s);
    q.bp(r);
    if ($.ig.util.cast($.ig.Series.prototype.$type, n.series()) !== null) {
        q.a7((n.series()).thickness());
        q.__stroke = (n.series()).actualOutline()
    }
    q.__fill = n.actualItemBrush();
    var t = new $.ig.Path();
    var u = new $.ig.PathGeometry();
    var v = new $.ig.PathFigure();
    v.__isFilled = true;
    v.__startPoint = {__x: 0, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    v.__segments.add(new $.ig.LineSegment(0, {__x: 11, __y: 14, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    v.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.k(new $.ig.Size(5, 5));
        a.i(false);
        a.h({__x: 16, __y: 9, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    v.__segments.add(new $.ig.LineSegment(0, {__x: 16, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}));
    u.d().add(v);
    t.bp(u);
    if ($.ig.util.cast($.ig.Series.prototype.$type, n.series()) !== null) {
        t.a7((n.series()).thickness());
        t.__stroke = (n.series()).actualOutline()
    }
    if ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, n.series()) !== null) {
        t.__fill = (n.series()).negativeBrush()
    }
    var w = new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), o);
    w.g(q);
    w.g(t)
}, $type: new $.ig.Type("LegendTemplates", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Marker", "ContentControl", {init: function () {
    $.ig.ContentControl.prototype.init.call(this)
}, _bi: null, bi: function (b) {
    if (arguments.length === 1) {
        this._bi = b;
        return b
    } else {
        return this._bi
    }
}, _bj: null, bj: function (b) {
    if (arguments.length === 1) {
        this._bj = b;
        return b
    } else {
        return this._bj
    }
}, _z: null, z: function (b) {
    if (arguments.length === 1) {
        this._z = b;
        return b
    } else {
        return this._z
    }
}, $type: new $.ig.Type("Marker", $.ig.ContentControl.prototype.$type)}, true);
$.ig.util.defType("RenderSurface", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _b: null, b: function (b) {
    if (arguments.length === 1) {
        this._b = b;
        return b
    } else {
        return this._b
    }
}, $type: new $.ig.Type("RenderSurface", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesCollection", "ObservableCollection$1", {init: function () {
    $.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Series.prototype.$type)
}, collectionResetting: null, m: function () {
    if (this.collectionResetting != null) {
        this.collectionResetting(this, null)
    }
    $.ig.ObservableCollection$1.prototype.m.call(this)
}, $type: new $.ig.Type("SeriesCollection", $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Series.prototype.$type))}, true);
$.ig.util.defType("SeriesComponentsForView", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, $type: new $.ig.Type("SeriesComponentsForView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesComponentsFromView", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, $type: new $.ig.Type("SeriesComponentsFromView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IFastItemsSourceProvider", "Object", {$type: new $.ig.Type("IFastItemsSourceProvider", null)}, true);
$.ig.util.defType("SyncLink", "FrameworkElement", {init: function () {
    var a = this;
    this.a2 = new $.ig.Dictionary$2($.ig.IEnumerable.prototype.$type, $.ig.FastItemsSourceReference.prototype.$type, 0);
    $.ig.FrameworkElement.prototype.init.call(this);
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (c, d) {
        a.be(c, d.propertyName(), d.oldValue(), d.newValue())
    });
    this.bb(new $.ig.ChartCollection());
    this.bb().collectionChanged = $.ig.Delegate.prototype.combine(this.bb().collectionChanged, this.bm.on(this));
    this.a9(new $.ig.Rect(0, 0, 0, 1, 1))
}, _a8: null, a8: function (b) {
    if (arguments.length === 1) {
        this._a8 = b;
        return b
    } else {
        return this._a8
    }
}, be: function (e, f, g, h) {
}, releaseFastItemsSource: function (d) {
    var c = this;
    if (d != null) {
        var e = null;
        if ((function () {
            var a = c.a2.tryGetValue(d, e);
            e = a.value;
            return a.ret
        }())) {
            --e.b;
            if (e.b == 0) {
                this.a2.remove(d)
            }
        }
    }
    return null
}, getFastItemsSource: function (e) {
    var d = this;
    var f = null;
    if (e != null) {
        var g = null;
        if (!(function () {
            var a = d.a2.tryGetValue(e, g);
            g = a.value;
            return a.ret
        }())) {
            f = (function () {
                var a = new $.ig.FastItemsSource();
                a.f(e);
                return a
            }());
            g = new $.ig.FastItemsSourceReference(f);
            this.a2.add(e, g)
        }
        g.b++;
        f = g.a
    }
    return f
}, bf: function (e) {
    var d = this;
    var f = null;
    if (e != null) {
        var g = null;
        if (!(function () {
            var a = d.a2.tryGetValue(e, g);
            g = a.value;
            return a.ret
        }())) {
            return null
        }
        f = g.a
    }
    return f
}, a2: null, _a9: null, a9: function (b) {
    if (arguments.length === 1) {
        this._a9 = b;
        return b
    } else {
        return this._a9
    }
}, bi: function (v, w, x) {
    var u = this;
    if (!x.isEmpty()) {
        var y = 0.5 * (x.left() + x.right());
        var z = 0.5 * (x.top() + x.bottom());
        var A = v.windowRectMinWidth();
        if (w == v) {
            if (!w.horizontalZoomable()) {
                x.x(w.windowRect().x());
                x.width(w.windowRect().width())
            }
            if (!w.verticalZoomable()) {
                x.y(w.windowRect().y());
                x.height(w.windowRect().height())
            }
        } else {
            var B = $.ig.SyncManager.prototype.e(w);
            if (B == null || !B.synchronizeHorizontally()) {
                x.x(w.windowRect().x());
                x.width(w.windowRect().width())
            }
            if (B == null || !B.synchronizeVertically()) {
                x.y(w.windowRect().y());
                x.height(w.windowRect().height())
            }
        }
        var C = $.ig.MathUtil.prototype.i(x.width(), A, 1);
        var D = $.ig.MathUtil.prototype.i(x.height(), A, 1);
        if (v.useFixedAspectZoom() && !v.viewportRect().isEmpty()) {
            var E = v.viewportRect();
            var F = E.width() / E.height();
            var G = C * E.width();
            var H = D * E.height();
            var I = G / H;
            if (I != F) {
                if (H * F > G) {
                    G = H * F;
                    C = G / E.width()
                } else {
                    H = G / F;
                    D = H / E.height()
                }
            }
        } else {
            if (v.fw()) {
                var J = false;
                var K = false;
                if (Math.abs(C - v.actualWindowRect().width()) > A) {
                    J = true
                }
                if (Math.abs(D - v.actualWindowRect().height()) > A) {
                    K = true
                }
                (function () {
                    var a = v.fv(C, D, J, K);
                    C = a.width;
                    D = a.height;
                    return a.ret
                }());
                C = $.ig.MathUtil.prototype.i(C, A, 1);
                D = $.ig.MathUtil.prototype.i(D, A, 1)
            }
        }
        var L = y - 0.5 * C;
        var M = z - 0.5 * D;
        var N = y + 0.5 * C;
        var O = z + 0.5 * D;
        if (L < 0) {
            L = 0;
            N = L + C
        }
        if (N > 1) {
            N = 1;
            L = N - C
        }
        if (M < 0) {
            M = 0;
            O = M + D
        }
        if (O > 1) {
            O = 1;
            M = O - D
        }
        x = new $.ig.Rect(0, L, M, N - L, O - M)
    }
    return x
}, ba: function () {
    return this.bb()
}, _bb: null, bb: function (b) {
    if (arguments.length === 1) {
        this._bb = b;
        return b
    } else {
        return this._bb
    }
}, bm: function (e, f) {
    if (f.newItems() != null) {
        var h = f.newItems().getEnumerator();
        while (h.moveNext()) {
            var g = h.current();
            if (g.windowRect().isEmpty()) {
                g.windowRect(this.bi(null, g, this.a9()))
            }
        }
    }
}, bn: function (g, h) {
    var j = this.ba().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        if (i == g) {
            i.crosshairPoint(h)
        } else {
            var k = h;
            var l = $.ig.SyncManager.prototype.e(i);
            if (l == null || !l.synchronizeHorizontally()) {
                k.__x = NaN
            }
            if (l == null || !l.synchronizeVertically()) {
                k.__y = NaN
            }
            i.crosshairPoint(k)
        }
    }
}, bo: function (e, f) {
    var h = this.ba().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.previewRect(this.bi(e, g, f))
    }
}, bp: function (f, g) {
    var h = g.isEmpty() || isNaN(g.x()) || isNaN(g.y()) || isNaN(g.width()) || isNaN(g.height());
    $.ig.Debug.prototype.a(!h, "SyncLink attempted to apply an invalid WindowRect");
    if (!h && !f.fm()) {
        var j = this.ba().getEnumerator();
        while (j.moveNext()) {
            var i = j.current();
            i.fm(true);
            i.windowRect(this.bi(f, i, g));
            i.fm(false)
        }
    }
}, propertyChanged: null, propertyUpdated: null, bs: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, $type: new $.ig.Type("SyncLink", $.ig.FrameworkElement.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type, $.ig.IFastItemsSourceProvider.prototype.$type])}, true);
$.ig.util.defType("FastItemsSourceReference", "Object", {init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = b;
    this.b = 0
}, a: null, b: null, $type: new $.ig.Type("FastItemsSourceReference", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SyncSettings", "FrameworkElement", {init: function () {
    $.ig.FrameworkElement.prototype.init.call(this)
}, syncChannel: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SyncSettings.prototype.syncChannelProperty, b);
        return b
    } else {
        return this.b($.ig.SyncSettings.prototype.syncChannelProperty)
    }
}, synchronizeVertically: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SyncSettings.prototype.synchronizeVerticallyProperty, b);
        return b
    } else {
        return this.b($.ig.SyncSettings.prototype.synchronizeVerticallyProperty)
    }
}, synchronizeHorizontally: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SyncSettings.prototype.synchronizeHorizontallyProperty, b);
        return b
    } else {
        return this.b($.ig.SyncSettings.prototype.synchronizeHorizontallyProperty)
    }
}, ba: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, propertyChanged: null, propertyUpdated: null, $type: new $.ig.Type("SyncSettings", $.ig.FrameworkElement.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("SyncLinkManager", "Object", {a: null, instance: function () {
    if ($.ig.SyncLinkManager.prototype.a == null) {
        $.ig.SyncLinkManager.prototype.a = new $.ig.SyncLinkManager()
    }
    return $.ig.SyncLinkManager.prototype.a
}, b: null, c: function () {
    return this.b.count()
}, init: function () {
    $.ig.Object.prototype.init.call(this);
    this.b = new $.ig.Dictionary$2(String, $.ig.SyncLink.prototype.$type, 0)
}, getLink: function (d) {
    var c = this;
    var e;
    if ((function () {
        var a = c.b.tryGetValue(d, e);
        e = a.value;
        return a.ret
    }())) {
        return e
    }
    e = new $.ig.SyncLink();
    e.a8(d);
    this.b.add(d, e);
    return e
}, releaseLink: function (b) {
    if (b.ba().count() == 0 && b.a8() != null && this.b.containsKey(b.a8())) {
        this.b.remove(b.a8())
    }
}, $type: new $.ig.Type("SyncLinkManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SyncManager", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (c) {
    var d = $.ig.SyncManager.prototype.e(c);
    if (d == null) {
        return
    }
    if (!c.fl()) {
        return
    }
    if (c.syncChannel() != d.syncChannel()) {
        return
    }
    $.ig.SyncManager.prototype.c(c, c.syncChannel(), null)
}, b: function (d) {
    var e = $.ig.SyncManager.prototype.e(d);
    if (e == null) {
        return
    }
    if (d.fl() && d.syncChannel() == e.syncChannel()) {
        return
    }
    var f = null;
    if (d.fl()) {
        f = d.syncChannel()
    }
    $.ig.SyncManager.prototype.c(d, f, e.syncChannel())
}, c: function (f, g, h) {
    if (f != null) {
        if (String.isNullOrEmpty(h)) {
            var i = f.actualSyncLink();
            f.actualSyncLink(null);
            f.actualSyncLink(new $.ig.SyncLink());
            if (i != null) {
                $.ig.SyncLinkManager.prototype.instance().releaseLink(i)
            }
        } else {
            if (!String.isNullOrEmpty(g)) {
                var j = f.actualSyncLink();
                f.actualSyncLink(null);
                if (j != null) {
                    $.ig.SyncLinkManager.prototype.instance().releaseLink(j)
                }
            }
            f.actualSyncLink($.ig.SyncLinkManager.prototype.instance().getLink(h))
        }
    }
}, d: function (c, d) {
    (c).syncSettings(d)
}, e: function (b) {
    return(b).syncSettings()
}, $type: new $.ig.Type("SyncManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DefaultCategoryTrendlineHost", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.DefaultCategoryTrendlinePreparer()
}, a: null, trendlinePreparer: function () {
    return this.a
}, trendLineType: function () {
    return $.ig.TrendLineType.prototype.none
}, trendLinePeriod: function () {
    return 1
}, $type: new $.ig.Type("DefaultCategoryTrendlineHost", $.ig.Object.prototype.$type, [$.ig.IHasCategoryTrendline.prototype.$type])}, true);
$.ig.util.defType("DefaultCategoryTrendlinePreparer", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, prepareLine: function (h, i, j, k, l, m, n) {
}, $type: new $.ig.Type("DefaultCategoryTrendlinePreparer", $.ig.Object.prototype.$type, [$.ig.IPreparesCategoryTrendline.prototype.$type])}, true);
$.ig.util.defType("TrendResolutionParams", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, $type: new $.ig.Type("TrendResolutionParams", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisRangeChangedEventArgs", "EventArgs", {init: function (e, f, g, h) {
    $.ig.EventArgs.prototype.init.call(this);
    this.oldMinimumValue(e);
    this.minimumValue(f);
    this.oldMaximumValue(g);
    this.maximumValue(h)
}, _oldMinimumValue: null, oldMinimumValue: function (b) {
    if (arguments.length === 1) {
        this._oldMinimumValue = b;
        return b
    } else {
        return this._oldMinimumValue
    }
}, _minimumValue: null, minimumValue: function (b) {
    if (arguments.length === 1) {
        this._minimumValue = b;
        return b
    } else {
        return this._minimumValue
    }
}, _oldMaximumValue: null, oldMaximumValue: function (b) {
    if (arguments.length === 1) {
        this._oldMaximumValue = b;
        return b
    } else {
        return this._oldMaximumValue
    }
}, _maximumValue: null, maximumValue: function (b) {
    if (arguments.length === 1) {
        this._maximumValue = b;
        return b
    } else {
        return this._maximumValue
    }
}, $type: new $.ig.Type("AxisRangeChangedEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("DataChartMouseButtonEventArgs", "EventArgs", {init: function (e, f, g, h) {
    $.ig.EventArgs.prototype.init.call(this);
    this.chart(e);
    this.series(f);
    this.item(g);
    this.originalEvent(h)
}, toString: function () {
    return this.chart().name() + ", " + this.series().name() + ", " + (this.item() != null ? this.item().toString() : "") + ", " + this.getPosition(null).toString()
}, _originalEvent: null, originalEvent: function (b) {
    if (arguments.length === 1) {
        this._originalEvent = b;
        return b
    } else {
        return this._originalEvent
    }
}, handled: function (b) {
    if (arguments.length === 1) {
        this.originalEvent().handled(b);
        return b
    } else {
        return this.originalEvent().handled()
    }
}, getPosition: function (b) {
    return this.originalEvent().getPosition(b)
}, originalSource: function () {
    return this.originalEvent().originalSource()
}, _item: null, item: function (b) {
    if (arguments.length === 1) {
        this._item = b;
        return b
    } else {
        return this._item
    }
}, _series: null, series: function (b) {
    if (arguments.length === 1) {
        this._series = b;
        return b
    } else {
        return this._series
    }
}, _chart: null, chart: function (b) {
    if (arguments.length === 1) {
        this._chart = b;
        return b
    } else {
        return this._chart
    }
}, $type: new $.ig.Type("DataChartMouseButtonEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("DataChartLegendMouseButtonEventArgs", "DataChartMouseButtonEventArgs", {init: function (f, g, h, i, j) {
    $.ig.DataChartMouseButtonEventArgs.prototype.init.call(this, f, g, h, i);
    this.legendItem(j)
}, _legendItem: null, legendItem: function (b) {
    if (arguments.length === 1) {
        this._legendItem = b;
        return b
    } else {
        return this._legendItem
    }
}, $type: new $.ig.Type("DataChartLegendMouseButtonEventArgs", $.ig.DataChartMouseButtonEventArgs.prototype.$type)}, true);
$.ig.util.defType("ChartMouseEventArgs", "EventArgs", {init: function (e, f, g, h) {
    $.ig.EventArgs.prototype.init.call(this);
    this.chart(e);
    this.series(f);
    this.item(g);
    this.originalEvent(h)
}, toString: function () {
    return this.chart().name() + ", " + this.series().name() + ", " + (this.item() != null ? this.item().toString() : "") + ", " + this.getPosition(null).toString()
}, _originalEvent: null, originalEvent: function (b) {
    if (arguments.length === 1) {
        this._originalEvent = b;
        return b
    } else {
        return this._originalEvent
    }
}, getPosition: function (b) {
    return this.originalEvent().getPosition(b)
}, originalSource: function () {
    return this.originalEvent().originalSource()
}, _item: null, item: function (b) {
    if (arguments.length === 1) {
        this._item = b;
        return b
    } else {
        return this._item
    }
}, _series: null, series: function (b) {
    if (arguments.length === 1) {
        this._series = b;
        return b
    } else {
        return this._series
    }
}, _chart: null, chart: function (b) {
    if (arguments.length === 1) {
        this._chart = b;
        return b
    } else {
        return this._chart
    }
}, $type: new $.ig.Type("ChartMouseEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("ChartLegendMouseEventArgs", "ChartMouseEventArgs", {init: function (f, g, h, i, j) {
    $.ig.ChartMouseEventArgs.prototype.init.call(this, f, g, h, i);
    this.legendItem(j)
}, _legendItem: null, legendItem: function (b) {
    if (arguments.length === 1) {
        this._legendItem = b;
        return b
    } else {
        return this._legendItem
    }
}, $type: new $.ig.Type("ChartLegendMouseEventArgs", $.ig.ChartMouseEventArgs.prototype.$type)}, true);
$.ig.util.defType("ChartCursorEventArgs", "EventArgs", {init: function (d, e, f) {
    $.ig.EventArgs.prototype.init.call(this);
    this.seriesViewer(d);
    this.series(e);
    this.item(f)
}, toString: function () {
    return this.seriesViewer().name() + ", " + this.series().name() + ", " + (this.item() != null ? this.item().toString() : "")
}, _item: null, item: function (b) {
    if (arguments.length === 1) {
        this._item = b;
        return b
    } else {
        return this._item
    }
}, _series: null, series: function (b) {
    if (arguments.length === 1) {
        this._series = b;
        return b
    } else {
        return this._series
    }
}, _seriesViewer: null, seriesViewer: function (b) {
    if (arguments.length === 1) {
        this._seriesViewer = b;
        return b
    } else {
        return this._seriesViewer
    }
}, chart: function () {
    return $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer())
}, $type: new $.ig.Type("ChartCursorEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("PropertyUpdatedEventArgs", "EventArgs", {init: function (d, e, f) {
    $.ig.EventArgs.prototype.init.call(this);
    this.propertyName(d);
    this.oldValue(e);
    this.newValue(f)
}, _propertyName: null, propertyName: function (b) {
    if (arguments.length === 1) {
        this._propertyName = b;
        return b
    } else {
        return this._propertyName
    }
}, _oldValue: null, oldValue: function (b) {
    if (arguments.length === 1) {
        this._oldValue = b;
        return b
    } else {
        return this._oldValue
    }
}, _newValue: null, newValue: function (b) {
    if (arguments.length === 1) {
        this._newValue = b;
        return b
    } else {
        return this._newValue
    }
}, $type: new $.ig.Type("PropertyUpdatedEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("ItemLegend", "LegendBase", {bu: function () {
    return new $.ig.ItemLegendView(this)
}, bv: function (b) {
    $.ig.LegendBase.prototype.bv.call(this, b);
    this.cf(b)
}, _cf: null, cf: function (b) {
    if (arguments.length === 1) {
        this._cf = b;
        return b
    } else {
        return this._cf
    }
}, init: function () {
    var a = this;
    $.ig.LegendBase.prototype.init.call(this);
    this.a3($.ig.ItemLegend.prototype.$type);
    this.children().collectionChanged = $.ig.Delegate.prototype.combine(this.children().collectionChanged, function (g, h) {
        if (h.oldItems() != null) {
            var j = h.oldItems().getEnumerator();
            while (j.moveNext()) {
                var i = j.current();
                a.cf().aa(i)
            }
        }
        if (h.newItems() != null) {
            var l = h.newItems().getEnumerator();
            while (l.moveNext()) {
                var k = l.current();
                a.cf().ab(k)
            }
        }
    })
}, by: function (c, d) {
    if (!this.bq().w()) {
        return
    }
    this.ck(d)
}, bz: function (g, h) {
    this.cl(h);
    if (h == null || g == null || g.count() == 0) {
        return
    }
    var j = g.getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        var k = $.ig.util.cast($.ig.ContentControl.prototype.$type, i);
        if (k != null && k.a9() != null) {
            var l = $.ig.util.cast($.ig.DataContext.prototype.$type, k.a9());
            if (l != null && !this.cm(l)) {
                this.children().add(i)
            }
        }
    }
}, ck: function (g) {
    this.cl(g);
    var h = $.ig.util.cast($.ig.BubbleSeries.prototype.$type, g);
    if (h != null && h.lk() != null && h.li() != null && h.li().count() > 0) {
        var j = h.li().getEnumerator();
        while (j.moveNext()) {
            var i = j.current();
            var k = $.ig.util.cast($.ig.ContentControl.prototype.$type, i);
            if (k != null && k.a9() != null) {
                var l = $.ig.util.cast($.ig.DataContext.prototype.$type, k.a9());
                if (l != null && !this.cm(l)) {
                    this.children().add(i)
                }
            }
        }
    }
}, cl: function (i) {
    if (i == null || this.children() == null || this.children().count() == 0) {
        return
    }
    var j = new $.ig.ObservableCollection$1($.ig.UIElement.prototype.$type, 0);
    var l = this.children().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        var m = $.ig.util.cast($.ig.ContentControl.prototype.$type, k);
        if (m != null && m.a9() != null) {
            var n = $.ig.util.cast($.ig.DataContext.prototype.$type, m.a9());
            if (n != null && n.series() == i) {
                j.add(k)
            }
        }
    }
    var p = j.getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        this.children().remove(o)
    }
}, cm: function (b) {
    return this.cf().at(b)
}, _cg: null, cg: function (b) {
    if (arguments.length === 1) {
        this._cg = b;
        return b
    } else {
        return this._cg
    }
}, _ch: null, ch: function (b) {
    if (arguments.length === 1) {
        this._ch = b;
        return b
    } else {
        return this._ch
    }
}, $type: new $.ig.Type("ItemLegend", $.ig.LegendBase.prototype.$type)}, true);
$.ig.util.defType("ItemLegendView", "LegendBaseView", {init: function (b) {
    $.ig.LegendBaseView.prototype.init.call(this, b);
    this.aq(b)
}, _aq: null, aq: function (b) {
    if (arguments.length === 1) {
        this._aq = b;
        return b
    } else {
        return this._aq
    }
}, r: function () {
    $.ig.LegendBaseView.prototype.r.call(this)
}, at: function (b) {
    return this.h().w(b)
}, $type: new $.ig.Type("ItemLegendView", $.ig.LegendBaseView.prototype.$type)}, true);
$.ig.util.defType("CoercionInfo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, $type: new $.ig.Type("CoercionInfo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesViewerSurfaceViewer", "DependencyObject", {init: function (c, d) {
    this.h = true;
    $.ig.DependencyObject.prototype.init.call(this);
    if (c == null || d == null) {
        throw new $.ig.ArgumentNullException("model")
    }
    this.s(c);
    this.s().windowRectChanged = $.ig.Delegate.prototype.combine(this.s().windowRectChanged, this.z.on(this));
    this.q(d);
    this.t(new $.ig.Canvas());
    this.ak()
}, _q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, z: function (d, e) {
    var f = this.r();
    this.r(true);
    this.zoomLevel(1 - Math.min(e.newRect().height(), e.newRect().width()));
    this.r(f)
}, g: null, s: function (d) {
    if (arguments.length === 1) {
        if (this.g != null) {
            var e = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.g);
            if (e != null) {
                e.propertyChanged = $.ig.Delegate.prototype.remove(e.propertyChanged, this.ac.on(this))
            }
        }
        this.g = d;
        if (this.g != null) {
            var f = $.ig.util.cast($.ig.INotifyPropertyChanged.prototype.$type, this.g);
            if (f != null) {
                f.propertyChanged = $.ig.Delegate.prototype.combine(f.propertyChanged, this.ac.on(this))
            }
        }
        return d
    } else {
        return this.g
    }
}, ac: function (c, d) {
    if (d.propertyName() == "DefaultInteraction") {
        this.k = this.s().defaultInteraction();
        this.aj(d.propertyName(), this.defaultInteraction(), this.defaultInteraction())
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, zoomTo100: function () {
    this.s().windowRect($.ig.XamDataChart.prototype.de)
}, scaleToFit: function () {
    this.s().windowRect($.ig.XamDataChart.prototype.de)
}, renderPreview: function () {
    if (!this.u()) {
        return
    }
    var c = new $.ig.RenderSurface();
    c.b(this.q().ai().c3().a0());
    if (c.b() != null && c.b().b()) {
        var d = this.q().ai().c3().a1();
        this.q().bi(d.c(), d.d(), c)
    }
    this.u(false)
}, worldRect: function () {
    return $.ig.XamDataChart.prototype.de
}, viewportRect: function () {
    return this.s().viewportRect()
}, minimumZoomLevel: function () {
    return 0
}, maximumZoomLevel: function () {
    if (this.s().windowRectMinWidth() == 0.0001) {
        return 0.9
    } else {
        return 1 - this.s().windowRectMinWidth()
    }
}, h: null, u: function (b) {
    if (arguments.length === 1) {
        this.h = b;
        return b
    } else {
        return this.h
    }
}, zoomLevel: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SeriesViewerSurfaceViewer.prototype.i, b);
        return b
    } else {
        return this.b($.ig.SeriesViewerSurfaceViewer.prototype.i)
    }
}, aj: function (h, i, j) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(h))
    }
    switch (h) {
        case $.ig.SeriesViewerSurfaceViewer.prototype.e:
            if (j - this.minimumZoomLevel() < -1e-05) {
                this.zoomLevel(this.minimumZoomLevel());
                return
            }
            if (j - this.maximumZoomLevel() > 0.0001) {
                this.zoomLevel(this.maximumZoomLevel());
                return
            }
            var k = this.s() != null && this.s().fn() != null && this.s().fn().dp();
            if (!this.r() && !k) {
                var l = 1 - this.zoomLevel();
                var m = this.s().actualWindowRect().getCenter();
                var n = new $.ig.Rect(0, m.__x - l / 2, m.__y - l / 2, l, l);
                this.s().windowRect($.ig.SeriesViewerSurfaceViewer.prototype.am(this.s().windowRect(), n, this.s().horizontalZoomable(), this.s().verticalZoomable(), this.worldRect()))
            }
            this.ak();
            if (this.s().fn() != null) {
                this.s().fn().f8(this.zoomLevel())
            }
            break
    }
}, ak: function () {
    var b = Math.round(100 * (1 / (1 - this.zoomLevel())));
    if (b <= 1000) {
        this.zoomLevelDisplayText(b.toString())
    } else {
        this.zoomLevelDisplayText("> 1000")
    }
}, j: null, zoomLevelDisplayText: function (d) {
    if (arguments.length === 1) {
        var e = this.zoomLevelDisplayText() != d;
        if (e) {
            var f = this.zoomLevelDisplayText();
            this.j = d;
            this.aj($.ig.SeriesViewerSurfaceViewer.prototype.f, f, d)
        }
        return d
    } else {
        return this.j
    }
}, k: null, defaultInteraction: function (b) {
    if (arguments.length === 1) {
        this.k = b;
        this.s().defaultInteraction(b);
        return b
    } else {
        return this.k
    }
}, propertyChanged: null, am: function (q, r, s, t, u) {
    var v, w, x, y;
    if (s) {
        v = r.left();
        x = r.width()
    } else {
        v = q.left();
        x = q.width()
    }
    if (t) {
        w = r.top();
        y = r.height()
    } else {
        w = q.top();
        y = q.height()
    }
    var z = v + x;
    var A = w + y;
    var B = Math.max(0, u.left() - v);
    var C = Math.max(0, z - u.right());
    var D = Math.max(0, u.top() - w);
    var E = Math.max(0, A - u.bottom());
    v += B - C;
    w += D - E;
    var F = new $.ig.Rect(0, v, w, x, y);
    F.intersect(u);
    return F
}, $type: new $.ig.Type("SeriesViewerSurfaceViewer", $.ig.DependencyObject.prototype.$type, [$.ig.IOverviewPlusDetailControl.prototype.$type, $.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("OverviewPlusDetailViewportHost", "Object", {init: function (b) {
    $.ig.Object.prototype.init.call(this);
    if (b == null) {
        throw new $.ig.ArgumentNullException("view")
    }
    this.b(b)
}, _b: null, b: function (b) {
    if (arguments.length === 1) {
        this._b = b;
        return b
    } else {
        return this._b
    }
}, getViewInfo: function (c, d) {
    c = new $.ig.Rect(0, 0, 0, this.b().ai().c3().ar().width(), this.b().ai().c3().ar().height());
    d = $.ig.SeriesViewer.prototype.de;
    return{viewportRect: c, windowRect: d}
}, $type: new $.ig.Type("OverviewPlusDetailViewportHost", $.ig.Object.prototype.$type, [$.ig.IProvidesViewport.prototype.$type])}, true);
$.ig.util.defType("SeriesViewerViewManager", "Object", {_m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, _q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, _u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, a: null, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = b
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, at: function (c) {
    if (c == null) {
        if (this.v() != null) {
            this.v().bf()
        }
        this.m(null);
        this.n(null);
        this.o(null);
        this.p(null);
        this.q(null);
        this.r(null);
        this.s(null);
        this.t(null);
        this.u(null);
        this.w(null);
        this.v(null);
        return
    }
    var d = c;
    this.m($(d));
    this.a.ec();
    this.a.dh();
    this.m().css("position", "relative");
    this.n($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.o($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.p($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.q($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.m().append(this.n());
    this.m().append(this.p());
    this.m().append(this.o());
    this.r(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.n()[0]).getContext("2d")));
    this.s(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.o()[0]).getContext("2d")));
    this.t(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.p()[0]).getContext("2d")));
    this.u(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.q()[0]).getContext("2d")));
    this.a.de(this.r());
    this.a.dr(this.m().width(), this.m().height());
    this.v(new $.ig.DOMEventProxy(this.o()));
    this.w($("<div></div>"));
    this.w().hide();
    this.w().css("position", "absolute");
    this.w().css("z-index", "10000");
    this.w().addClass(this.a.ag().tooltipStyle());
    this.m().append(this.w())
}, au: function () {
    this.o().css("cursor", "default")
}, av: function () {
    this.o().css("cursor", "pointer")
}, aw: function () {
    var a = this;
    return(function () {
        var b = new $.ig.Brush();
        b.__fill = "#000000";
        return b
    }())
}, ax: function (c) {
    var f = $("<span>M</span>");
    var d = $("body");
    d.append(f);
    f.css("font", c);
    var e = f.attr("offsetHeight");
    if (isNaN(e)) {
        e = f[0].offsetHeight
    }
    f.remove();
    return parseInt(e)
}, ay: function (c, d) {
    this.n().attr("width", c.toString());
    this.n().attr("height", d.toString());
    this.o().attr("width", c.toString());
    this.o().attr("height", d.toString());
    this.o().attr("tabindex", "0");
    this.o().css("outline", "0");
    this.p().attr("width", c.toString());
    this.p().attr("height", d.toString());
    this.q().attr("width", c.toString());
    this.q().attr("height", d.toString())
}, az: function () {
    var b = $.ig.DOMEventProxy.prototype.c4(this.m());
    return new $.ig.Size(b.left(), b.top())
}, a0: function (f, g) {
    var h = new Array(2);
    g.addClass(f);
    var i = new $.ig.Brush();
    i.__fill = g.css("background-color");
    var j = new $.ig.Brush();
    j.__fill = g.css("border-top-color");
    g.removeClass(f);
    h[0] = i;
    h[1] = j;
    return h
}, a1: function (A, G, H, I, J) {
    A = new $.ig.BrushCollection();
    G = new $.ig.BrushCollection();
    var K = 1;
    var L = true;
    var M = $("<div></div>");
    var N = $.ig.util.getClassCount(".ui-chart-palette-", true);
    if (N == 0) {
        var O = new $.ig.Brush();
        O.__fill = "#B1BFC9";
        var P = new $.ig.Brush();
        P.__fill = "#50a8be";
        var Q = new $.ig.Brush();
        Q.__fill = "#798995";
        var R = new $.ig.Brush();
        R.__fill = "#fc6754";
        var S = new $.ig.Brush();
        S.__fill = "#4F606C";
        var T = new $.ig.Brush();
        T.__fill = "#fec33c";
        var U = new $.ig.Brush();
        U.__fill = "#374650";
        var V = new $.ig.Brush();
        V.__fill = "#3c6399";
        var W = new $.ig.Brush();
        W.__fill = "#162C3B";
        var X = new $.ig.Brush();
        X.__fill = "#91af49";
        A.add(P);
        A.add(R);
        A.add(T);
        A.add(V);
        A.add(X);
        G.add(O);
        G.add(Q);
        G.add(S);
        G.add(U);
        G.add(W);
        K = 6;
        N = 5
    }
    var Y = $.ig.util.getClassCount(".ui-chart-axis", false);
    if (Y == 0) {
        L = false
    }
    this.m().append(M);
    for (var Z = K; Z <= N; Z++) {
        var aa = this.a0("ui-chart-palette-" + Z, M);
        A.add(aa[0]);
        G.add(aa[1])
    }
    if (L) {
        var ab = this.a0("ui-chart-axis", M);
        J = ab[1]
    } else {
        var ac = new $.ig.Brush();
        ac.__fill = "#989EA3";
        J = ac
    }
    M.remove();
    H = new $.ig.Brush();
    H.__fill = this.m().css("color");
    var ad = this.m().css("font-style");
    var ae = this.m().css("font-variant");
    var B = this.m().css("font-weight");
    var C = this.m().css("font-size");
    var D = this.m().css("line-height");
    var E = this.m().css("font-family");
    I = "";
    var F = true;
    if (ad.length > 0) {
        if (!F) {
            I += " "
        } else {
            F = false
        }
        I += ad
    }
    if (ae.length > 0) {
        if (!F) {
            I += " "
        } else {
            F = false
        }
        I += ae
    }
    if (B.length > 0) {
        if (!F) {
            I += " "
        } else {
            F = false
        }
        I += B
    }
    if (C.length > 0) {
        if (!F) {
            I += " "
        } else {
            F = false
        }
        I += C
    }
    if (D.length > 0) {
        if (!F) {
            I += "/"
        } else {
            F = false
        }
        I += D
    }
    if (E.length > 0) {
        if (!F) {
            I += " "
        } else {
            F = false
        }
        I += E
    }
    return{brushes: A, outlines: G, fontBrush: H, font: I, axisLineBrush: J}
}, a2: function () {
    this.w().children().remove()
}, a3: function (e) {
    var c = this.w();
    var d = $.ig.DOMEventProxy.prototype.c4(this.w());
    var b = this.az();
    e = b.c() + this.a.ag().viewportRect().left() + e;
    c.offset({left: e, top: d.top})
}, a4: function (e) {
    var c = this.w();
    var d = this.w().offset();
    var b = this.az();
    e = b.d() + this.a.ag().viewportRect().top() + e;
    c.offset({left: d.left, top: e})
}, a5: function (c) {
    var d = c;
    d.show();
    this.w().append(d)
}, a6: function () {
    this.w().hide()
}, a7: function () {
    this.w().show()
}, a8: function (b) {
    $("body").append(b)
}, a9: function (b) {
    (b).remove()
}, ba: function () {
    this.a.dr(this.m().width(), this.m().height())
}, $type: new $.ig.Type("SeriesViewerViewManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ChartVisualData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.axes(new $.ig.AxisVisualDataList());
    this.series(new $.ig.SeriesVisualDataList())
}, _axes: null, axes: function (b) {
    if (arguments.length === 1) {
        this._axes = b;
        return b
    } else {
        return this._axes
    }
}, _series: null, series: function (b) {
    if (arguments.length === 1) {
        this._series = b;
        return b
    } else {
        return this._series
    }
}, _name: null, name: function (b) {
    if (arguments.length === 1) {
        this._name = b;
        return b
    } else {
        return this._name
    }
}, _isViewportScaled: null, isViewportScaled: function (b) {
    if (arguments.length === 1) {
        this._isViewportScaled = b;
        return b
    } else {
        return this._isViewportScaled
    }
}, scaleByViewport: function () {
    var f = this.axes().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.h()
    }
    var h = this.series().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.f()
    }
}, $type: new $.ig.Type("ChartVisualData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesVisualDataList", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.SeriesVisualData.prototype.$type)
}, $type: new $.ig.Type("SeriesVisualDataList", $.ig.List$1.prototype.$type.specialize($.ig.SeriesVisualData.prototype.$type))}, true);
$.ig.util.defType("SeriesVisualData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.shapes(new $.ig.PrimitiveVisualDataList());
    this.markerShapes(new $.ig.MarkerVisualDataList())
}, _name: null, name: function (b) {
    if (arguments.length === 1) {
        this._name = b;
        return b
    } else {
        return this._name
    }
}, _type: null, type: function (b) {
    if (arguments.length === 1) {
        this._type = b;
        return b
    } else {
        return this._type
    }
}, _viewport: null, viewport: function (b) {
    if (arguments.length === 1) {
        this._viewport = b;
        return b
    } else {
        return this._viewport
    }
}, _shapes: null, shapes: function (b) {
    if (arguments.length === 1) {
        this._shapes = b;
        return b
    } else {
        return this._shapes
    }
}, _markerShapes: null, markerShapes: function (b) {
    if (arguments.length === 1) {
        this._markerShapes = b;
        return b
    } else {
        return this._markerShapes
    }
}, f: function () {
    var f = this.shapes().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.scaleByViewport(this.viewport())
    }
    var h = this.markerShapes().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        g.f(this.viewport())
    }
}, $type: new $.ig.Type("SeriesVisualData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("MarkerVisualDataList", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.MarkerVisualData.prototype.$type)
}, $type: new $.ig.Type("MarkerVisualDataList", $.ig.List$1.prototype.$type.specialize($.ig.MarkerVisualData.prototype.$type))}, true);
$.ig.util.defType("MarkerVisualData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, _y: null, y: function (b) {
    if (arguments.length === 1) {
        this._y = b;
        return b
    } else {
        return this._y
    }
}, _index: null, index: function (b) {
    if (arguments.length === 1) {
        this._index = b;
        return b
    } else {
        return this._index
    }
}, _contentTemplate: null, contentTemplate: function (b) {
    if (arguments.length === 1) {
        this._contentTemplate = b;
        return b
    } else {
        return this._contentTemplate
    }
}, _visibility: null, visibility: function (b) {
    if (arguments.length === 1) {
        this._visibility = b;
        return b
    } else {
        return this._visibility
    }
}, f: function (b) {
    this.x((this.x() - b.left()) / b.width());
    this.y((this.y() - b.top()) / b.height())
}, $type: new $.ig.Type("MarkerVisualData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AxisVisualDataList", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.AxisVisualData.prototype.$type)
}, $type: new $.ig.Type("AxisVisualDataList", $.ig.List$1.prototype.$type.specialize($.ig.AxisVisualData.prototype.$type))}, true);
$.ig.util.defType("AxisVisualData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.labels(new $.ig.AxisLabelVisualDataList())
}, _name: null, name: function (b) {
    if (arguments.length === 1) {
        this._name = b;
        return b
    } else {
        return this._name
    }
}, _type: null, type: function (b) {
    if (arguments.length === 1) {
        this._type = b;
        return b
    } else {
        return this._type
    }
}, _viewport: null, viewport: function (b) {
    if (arguments.length === 1) {
        this._viewport = b;
        return b
    } else {
        return this._viewport
    }
}, _labels: null, labels: function (b) {
    if (arguments.length === 1) {
        this._labels = b;
        return b
    } else {
        return this._labels
    }
}, _axisLine: null, axisLine: function (b) {
    if (arguments.length === 1) {
        this._axisLine = b;
        return b
    } else {
        return this._axisLine
    }
}, _majorLines: null, majorLines: function (b) {
    if (arguments.length === 1) {
        this._majorLines = b;
        return b
    } else {
        return this._majorLines
    }
}, _minorLines: null, minorLines: function (b) {
    if (arguments.length === 1) {
        this._minorLines = b;
        return b
    } else {
        return this._minorLines
    }
}, h: function () {
    var d = true;
    if (this.type() == "NumericYAxis" || this.type() == "CategoryYAxis") {
        d = false
    }
    var f = this.labels().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.d(this.viewport(), d)
    }
    this.axisLine().scaleByViewport(this.viewport())
}, $type: new $.ig.Type("AxisVisualData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PrimitiveVisualDataList", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.PrimitiveVisualData.prototype.$type)
}, containingTag: function (f) {
    var g = new $.ig.PrimitiveVisualDataList();
    for (var h = 0; h < this.count(); h++) {
        var i = this.__inner[h];
        for (var j = 0; j < i.tags().count(); j++) {
            if (i.tags().__inner[j] == f) {
                g.add(i);
                break
            }
        }
    }
    return g
}, $type: new $.ig.Type("PrimitiveVisualDataList", $.ig.List$1.prototype.$type.specialize($.ig.PrimitiveVisualData.prototype.$type))}, true);
$.ig.util.defType("AxisLabelVisualDataList", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, $.ig.AxisLabelVisualData.prototype.$type)
}, $type: new $.ig.Type("AxisLabelVisualDataList", $.ig.List$1.prototype.$type.specialize($.ig.AxisLabelVisualData.prototype.$type))}, true);
$.ig.util.defType("AxisLabelVisualData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _labelValue: null, labelValue: function (b) {
    if (arguments.length === 1) {
        this._labelValue = b;
        return b
    } else {
        return this._labelValue
    }
}, _labelPosition: null, labelPosition: function (b) {
    if (arguments.length === 1) {
        this._labelPosition = b;
        return b
    } else {
        return this._labelPosition
    }
}, _appearance: null, appearance: function (b) {
    if (arguments.length === 1) {
        this._appearance = b;
        return b
    } else {
        return this._appearance
    }
}, d: function (c, d) {
    if (d) {
        this.labelPosition((this.labelPosition() - c.left()) / c.width())
    } else {
        this.labelPosition((this.labelPosition() - c.top()) / c.height())
    }
}, $type: new $.ig.Type("AxisLabelVisualData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LabelAppearanceData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _text: null, text: function (b) {
    if (arguments.length === 1) {
        this._text = b;
        return b
    } else {
        return this._text
    }
}, $type: new $.ig.Type("LabelAppearanceData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PrimitiveAppearanceData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _stroke: null, stroke: function (b) {
    if (arguments.length === 1) {
        this._stroke = b;
        return b
    } else {
        return this._stroke
    }
}, _fill: null, fill: function (b) {
    if (arguments.length === 1) {
        this._fill = b;
        return b
    } else {
        return this._fill
    }
}, _strokeThickness: null, strokeThickness: function (b) {
    if (arguments.length === 1) {
        this._strokeThickness = b;
        return b
    } else {
        return this._strokeThickness
    }
}, _visibility: null, visibility: function (b) {
    if (arguments.length === 1) {
        this._visibility = b;
        return b
    } else {
        return this._visibility
    }
}, _opacity: null, opacity: function (b) {
    if (arguments.length === 1) {
        this._opacity = b;
        return b
    } else {
        return this._opacity
    }
}, _canvasLeft: null, canvasLeft: function (b) {
    if (arguments.length === 1) {
        this._canvasLeft = b;
        return b
    } else {
        return this._canvasLeft
    }
}, _canvasTop: null, canvasTop: function (b) {
    if (arguments.length === 1) {
        this._canvasTop = b;
        return b
    } else {
        return this._canvasTop
    }
}, _canvaZIndex: null, canvaZIndex: function (b) {
    if (arguments.length === 1) {
        this._canvaZIndex = b;
        return b
    } else {
        return this._canvaZIndex
    }
}, _dashArray: null, dashArray: function (b) {
    if (arguments.length === 1) {
        this._dashArray = b;
        return b
    } else {
        return this._dashArray
    }
}, _dashCap: null, dashCap: function (b) {
    if (arguments.length === 1) {
        this._dashCap = b;
        return b
    } else {
        return this._dashCap
    }
}, k: function (b) {
    this.canvasLeft((this.canvasLeft() - b.left()) / b.width());
    this.canvasTop((this.canvasTop() - b.top()) / b.height())
}, $type: new $.ig.Type("PrimitiveAppearanceData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("GetPointsSettings", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _ignoreFigureStartPoint: null, ignoreFigureStartPoint: function (b) {
    if (arguments.length === 1) {
        this._ignoreFigureStartPoint = b;
        return b
    } else {
        return this._ignoreFigureStartPoint
    }
}, $type: new $.ig.Type("GetPointsSettings", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PrimitiveVisualData", "Object", {init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.name(b);
    this.tags(new $.ig.ShapeTags());
    this.appearance(new $.ig.PrimitiveAppearanceData())
}, _appearance: null, appearance: function (b) {
    if (arguments.length === 1) {
        this._appearance = b;
        return b
    } else {
        return this._appearance
    }
}, _tags: null, tags: function (b) {
    if (arguments.length === 1) {
        this._tags = b;
        return b
    } else {
        return this._tags
    }
}, _type: null, type: function () {
    return this._type
}, _name: null, name: function (b) {
    if (arguments.length === 1) {
        this._name = b;
        return b
    } else {
        return this._name
    }
}, scaleByViewport: function (b) {
    this.appearance().k(b)
}, getPoints: function (c) {
    var d = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
    this.getPointsOverride(d, c);
    return d
}, getPointsOverride: function (c, d) {
}, $type: new $.ig.Type("PrimitiveVisualData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ShapeTags", "List$1", {init: function () {
    $.ig.List$1.prototype.init.call(this, String)
}, $type: new $.ig.Type("ShapeTags", $.ig.List$1.prototype.$type.specialize(String))}, true);
$.ig.util.defType("PathVisualData", "PrimitiveVisualData", {type: function () {
    return"Path"
}, init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.PrimitiveVisualData.prototype.init.call(this, "path1");
    this.data(new $.ig.List$1($.ig.GeometryData.prototype.$type, 0))
}, init1: function (e, c, d) {
    $.ig.PrimitiveVisualData.prototype.init.call(this, c);
    this.data($.ig.AppearanceHelper.prototype.fromGeometry(d.bp()));
    $.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), d)
}, _data: null, data: function (b) {
    if (arguments.length === 1) {
        this._data = b;
        return b
    } else {
        return this._data
    }
}, scaleByViewport: function (d) {
    $.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, d);
    var f = this.data().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.scaleByViewport(d)
    }
}, getPointsOverride: function (e, f) {
    for (var g = 0; g < this.data().count(); g++) {
        var h = this.data().__inner[g];
        h.getPointsOverride(e, f)
    }
}, $type: new $.ig.Type("PathVisualData", $.ig.PrimitiveVisualData.prototype.$type)}, true);
$.ig.util.defType("GeometryData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _type: null, type: function () {
    return this._type
}, scaleByViewport: function (b) {
}, getPointsOverride: function (c, d) {
}, $type: new $.ig.Type("GeometryData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PathGeometryData", "GeometryData", {init: function () {
    $.ig.GeometryData.prototype.init.call(this);
    this.figures(new $.ig.List$1($.ig.PathFigureData.prototype.$type, 0))
}, type: function () {
    return"Path"
}, _figures: null, figures: function (b) {
    if (arguments.length === 1) {
        this._figures = b;
        return b
    } else {
        return this._figures
    }
}, scaleByViewport: function (d) {
    var f = this.figures().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.c(d)
    }
}, getPointsOverride: function (e, f) {
    for (var g = 0; g < this.figures().count(); g++) {
        var h = this.figures().__inner[g];
        h.getPointsOverride(e, f)
    }
}, $type: new $.ig.Type("PathGeometryData", $.ig.GeometryData.prototype.$type)}, true);
$.ig.util.defType("LineGeometryData", "GeometryData", {init: function () {
    $.ig.GeometryData.prototype.init.call(this)
}, type: function () {
    return"Line"
}, _x1: null, x1: function (b) {
    if (arguments.length === 1) {
        this._x1 = b;
        return b
    } else {
        return this._x1
    }
}, _y1: null, y1: function (b) {
    if (arguments.length === 1) {
        this._y1 = b;
        return b
    } else {
        return this._y1
    }
}, _x2: null, x2: function (b) {
    if (arguments.length === 1) {
        this._x2 = b;
        return b
    } else {
        return this._x2
    }
}, _y2: null, y2: function (b) {
    if (arguments.length === 1) {
        this._y2 = b;
        return b
    } else {
        return this._y2
    }
}, scaleByViewport: function (b) {
    this.x1((this.x1() - b.left()) / b.width());
    this.y1((this.y1() - b.top()) / b.height());
    this.x2((this.x2() - b.left()) / b.width());
    this.y2((this.y2() - b.top()) / b.height())
}, getPointsOverride: function (d, e) {
    var f = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    d.add(f);
    f.add({__x: this.x1(), __y: this.y1(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    f.add({__x: this.x2(), __y: this.y2(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, $type: new $.ig.Type("LineGeometryData", $.ig.GeometryData.prototype.$type)}, true);
$.ig.util.defType("RectangleGeometryData", "GeometryData", {init: function () {
    $.ig.GeometryData.prototype.init.call(this)
}, type: function () {
    return"Rectangle"
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, _y: null, y: function (b) {
    if (arguments.length === 1) {
        this._y = b;
        return b
    } else {
        return this._y
    }
}, _width: null, width: function (b) {
    if (arguments.length === 1) {
        this._width = b;
        return b
    } else {
        return this._width
    }
}, _height: null, height: function (b) {
    if (arguments.length === 1) {
        this._height = b;
        return b
    } else {
        return this._height
    }
}, scaleByViewport: function (b) {
    this.x((this.x() - b.left()) / b.width());
    this.y((this.y() - b.top()) / b.height());
    this.width(this.width() / b.width());
    this.height(this.height() / b.height())
}, getPointsOverride: function (d, e) {
    var f = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    d.add(f);
    f.add({__x: this.x(), __y: this.y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    f.add({__x: this.x() + this.width(), __y: this.y(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    f.add({__x: this.x() + this.width(), __y: this.y() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    f.add({__x: this.x(), __y: this.y() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, $type: new $.ig.Type("RectangleGeometryData", $.ig.GeometryData.prototype.$type)}, true);
$.ig.util.defType("EllipseGeometryData", "GeometryData", {init: function () {
    $.ig.GeometryData.prototype.init.call(this)
}, type: function () {
    return"Ellipse"
}, _centerX: null, centerX: function (b) {
    if (arguments.length === 1) {
        this._centerX = b;
        return b
    } else {
        return this._centerX
    }
}, _centerY: null, centerY: function (b) {
    if (arguments.length === 1) {
        this._centerY = b;
        return b
    } else {
        return this._centerY
    }
}, _radiusX: null, radiusX: function (b) {
    if (arguments.length === 1) {
        this._radiusX = b;
        return b
    } else {
        return this._radiusX
    }
}, _radiusY: null, radiusY: function (b) {
    if (arguments.length === 1) {
        this._radiusY = b;
        return b
    } else {
        return this._radiusY
    }
}, scaleByViewport: function (b) {
    this.centerX((this.centerX() - b.left()) / b.width());
    this.centerX((this.centerY() - b.top()) / b.height());
    this.radiusX(this.radiusX() / b.width());
    this.radiusY(this.radiusY() / b.height())
}, getPointsOverride: function (d, e) {
    var f = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    d.add(f);
    f.add({__x: this.centerX(), __y: this.centerY(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, $type: new $.ig.Type("EllipseGeometryData", $.ig.GeometryData.prototype.$type)}, true);
$.ig.util.defType("PathFigureData", "Object", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.Object.prototype.init.call(this);
    this.segments(new $.ig.List$1($.ig.SegmentData.prototype.$type, 0));
    this.startPoint(new $.ig.Point(0))
}, init1: function (i, e) {
    $.ig.Object.prototype.init.call(this);
    this.segments(new $.ig.List$1($.ig.SegmentData.prototype.$type, 0));
    this.startPoint(e.__startPoint);
    for (var f = 0; f < e.__segments.count(); f++) {
        var g = e.__segments.__inner[f];
        var h = null;
        switch (g.a()) {
            case $.ig.PathSegmentType.prototype.line:
                h = new $.ig.LineSegmentData(1, g);
                break;
            case $.ig.PathSegmentType.prototype.polyLine:
                h = new $.ig.PolylineSegmentData(1, g);
                break;
            case $.ig.PathSegmentType.prototype.arc:
                h = new $.ig.ArcSegmentData(1, g);
                break
        }
        this.segments().add(h)
    }
}, _startPoint: null, startPoint: function (b) {
    if (arguments.length === 1) {
        this._startPoint = b;
        return b
    } else {
        return this._startPoint
    }
}, _segments: null, segments: function (b) {
    if (arguments.length === 1) {
        this._segments = b;
        return b
    } else {
        return this._segments
    }
}, c: function (c) {
    this.startPoint({__x: (this.startPoint().__x - c.left()) / c.width(), __y: (this.startPoint().__y - c.top()) / c.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    for (var d = 0; d < this.segments().count(); d++) {
        this.segments().__inner[d].scaleByViewport(c)
    }
}, getPointsOverride: function (e, f) {
    var g = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    e.add(g);
    if (!f.ignoreFigureStartPoint()) {
        g.add({__x: this.startPoint().__x, __y: this.startPoint().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    for (var h = 0; h < this.segments().count(); h++) {
        this.segments().__inner[h].getPointsOverride(g, f)
    }
}, $type: new $.ig.Type("PathFigureData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SegmentData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _type: null, type: function () {
    return this._type
}, scaleByViewport: function (b) {
}, getPointsOverride: function (c, d) {
}, $type: new $.ig.Type("SegmentData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LineSegmentData", "SegmentData", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.SegmentData.prototype.init.call(this);
    this.point(new $.ig.Point(0))
}, init1: function (c, b) {
    $.ig.SegmentData.prototype.init.call(this);
    this.point(b.d())
}, type: function () {
    return"Line"
}, _point: null, point: function (b) {
    if (arguments.length === 1) {
        this._point = b;
        return b
    } else {
        return this._point
    }
}, scaleByViewport: function (b) {
    this.point({__x: (this.point().__x - b.left()) / b.width(), __y: (this.point().__y - b.top()) / b.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, getPointsOverride: function (c, d) {
    c.add({__x: this.point().__x, __y: this.point().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, $type: new $.ig.Type("LineSegmentData", $.ig.SegmentData.prototype.$type)}, true);
$.ig.util.defType("PolylineSegmentData", "SegmentData", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.SegmentData.prototype.init.call(this);
    this.points(new $.ig.PointCollection(0))
}, init1: function (c, b) {
    $.ig.SegmentData.prototype.init.call(this);
    this.points(b.__points)
}, type: function () {
    return"Polyline"
}, _points: null, points: function (b) {
    if (arguments.length === 1) {
        this._points = b;
        return b
    } else {
        return this._points
    }
}, scaleByViewport: function (c) {
    for (var d = 0; d < this.points().count(); d++) {
        this.points().__inner[d] = {__x: (this.points().__inner[d].__x - c.left()) / c.width(), __y: (this.points().__inner[d].__y - c.top()) / c.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
}, getPointsOverride: function (d, e) {
    for (var f = 0; f < this.points().count(); f++) {
        d.add({__x: this.points().__inner[f].__x, __y: this.points().__inner[f].__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
}, $type: new $.ig.Type("PolylineSegmentData", $.ig.SegmentData.prototype.$type)}, true);
$.ig.util.defType("ArcSegmentData", "SegmentData", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.SegmentData.prototype.init.call(this);
    this.point(new $.ig.Point(0));
    this.isLargeArc(false);
    this.isCounterClockwise(true);
    this.rotationAngle(0)
}, init1: function (c, b) {
    $.ig.SegmentData.prototype.init.call(this);
    this.point(b.h());
    this.isLargeArc(b.i());
    this.isCounterClockwise(b.j() == $.ig.SweepDirection.prototype.counterclockwise);
    this.sizeX(b.k().c());
    this.sizeY(b.k().d());
    this.rotationAngle(b.l())
}, type: function () {
    return"Arc"
}, _point: null, point: function (b) {
    if (arguments.length === 1) {
        this._point = b;
        return b
    } else {
        return this._point
    }
}, _isLargeArc: null, isLargeArc: function (b) {
    if (arguments.length === 1) {
        this._isLargeArc = b;
        return b
    } else {
        return this._isLargeArc
    }
}, _isCounterClockwise: null, isCounterClockwise: function (b) {
    if (arguments.length === 1) {
        this._isCounterClockwise = b;
        return b
    } else {
        return this._isCounterClockwise
    }
}, _sizeX: null, sizeX: function (b) {
    if (arguments.length === 1) {
        this._sizeX = b;
        return b
    } else {
        return this._sizeX
    }
}, _sizeY: null, sizeY: function (b) {
    if (arguments.length === 1) {
        this._sizeY = b;
        return b
    } else {
        return this._sizeY
    }
}, _rotationAngle: null, rotationAngle: function (b) {
    if (arguments.length === 1) {
        this._rotationAngle = b;
        return b
    } else {
        return this._rotationAngle
    }
}, scaleByViewport: function (b) {
    this.point({__x: (this.point().__x - b.left()) / b.width(), __y: (this.point().__y - b.top()) / b.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    this.sizeX(this.sizeX() / b.width());
    this.sizeY(this.sizeY() / b.height())
}, getPointsOverride: function (c, d) {
    c.add({__x: this.point().__x, __y: this.point().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, $type: new $.ig.Type("ArcSegmentData", $.ig.SegmentData.prototype.$type)}, true);
$.ig.util.defType("AppearanceHelper", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, fromBrush: function (b) {
    if (b == null) {
        return $.ig.Color.prototype.s(0, 0, 0, 0)
    }
    return b.color()
}, getCanvasLeft: function (b) {
    return b.y()
}, getCanvasTop: function (b) {
    return b.x()
}, getCanvasZIndex: function (b) {
    return b.z()
}, fromPathData: function (b) {
    return $.ig.AppearanceHelper.prototype.fromGeometry(b.bp())
}, fromGeometry: function (g) {
    if (g == null) {
        return new $.ig.List$1($.ig.GeometryData.prototype.$type, 0)
    }
    if ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, g) !== null) {
        var h = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
        var i = g;
        for (var j = 0; j < i.d().count(); j++) {
            var k = $.ig.AppearanceHelper.prototype.fromGeometry(i.d().__inner[j]);
            for (var l = 0; l < k.count(); l++) {
                h.add(k.__inner[l])
            }
        }
        return h
    } else {
        if ($.ig.util.cast($.ig.PathGeometry.prototype.$type, g) !== null) {
            return $.ig.AppearanceHelper.prototype.d(g)
        } else {
            if ($.ig.util.cast($.ig.LineGeometry.prototype.$type, g) !== null) {
                return $.ig.AppearanceHelper.prototype.c(g)
            } else {
                if ($.ig.util.cast($.ig.RectangleGeometry.prototype.$type, g) !== null) {
                    return $.ig.AppearanceHelper.prototype.b(g)
                } else {
                    if ($.ig.util.cast($.ig.EllipseGeometry.prototype.$type, g) !== null) {
                        return $.ig.AppearanceHelper.prototype.a(g)
                    } else {
                        throw new $.ig.Error(1, "not supported")
                    }
                }
            }
        }
    }
}, a: function (d) {
    var e = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
    var f = new $.ig.EllipseGeometryData();
    e.add(f);
    f.centerX(d.f().__x);
    f.centerY(d.f().__y);
    f.radiusX(d.g());
    f.radiusY(d.h());
    return e
}, b: function (d) {
    var e = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
    var f = new $.ig.RectangleGeometryData();
    e.add(f);
    f.x(d.f().x());
    f.y(d.f().y());
    f.width(d.f().width());
    f.height(d.f().height());
    return e
}, c: function (d) {
    var e = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
    var f = new $.ig.LineGeometryData();
    e.add(f);
    f.x1(d.e().__x);
    f.y1(d.e().__y);
    f.x2(d.f().__x);
    f.y2(d.f().__y);
    return e
}, d: function (g) {
    var h = new $.ig.List$1($.ig.GeometryData.prototype.$type, 0);
    var i = new $.ig.PathGeometryData();
    h.add(i);
    for (var j = 0; j < g.d().count(); j++) {
        var k = g.d().__inner[j];
        var l = new $.ig.PathFigureData(1, k);
        i.figures().add(l)
    }
    return h
}, getShapeAppearance: function (c, d) {
    c.stroke($.ig.AppearanceHelper.prototype.fromBrush(d.__stroke));
    c.fill($.ig.AppearanceHelper.prototype.fromBrush(d.__fill));
    c.strokeThickness(d.a7());
    c.dashArray(null);
    if (d.a8() != null) {
        c.dashArray(d.a8().asArrayList())
    }
    c.dashCap(d.a9());
    c.visibility(d.__visibility);
    c.opacity(d.__opacity);
    c.canvasLeft($.ig.AppearanceHelper.prototype.getCanvasLeft(d));
    c.canvasTop($.ig.AppearanceHelper.prototype.getCanvasTop(d));
    c.canvaZIndex($.ig.AppearanceHelper.prototype.getCanvasZIndex(d))
}, fromTextElement: function (d) {
    var e = new $.ig.LabelAppearanceData();
    var f = d;
    e.text(f.a5());
    return e
}, $type: new $.ig.Type("AppearanceHelper", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IDetectsCollisions", "Object", {$type: new $.ig.Type("IDetectsCollisions", null)}, true);
$.ig.util.defType("Pool$1", "Object", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.h(new $.ig.List$1(this.$t, 0));
    this.i(new $.ig.List$1(this.$t, 0))
}, _create: null, create: function (b) {
    if (arguments.length === 1) {
        this._create = b;
        return b
    } else {
        return this._create
    }
}, _disactivate: null, disactivate: function (b) {
    if (arguments.length === 1) {
        this._disactivate = b;
        return b
    } else {
        return this._disactivate
    }
}, _activate: null, activate: function (b) {
    if (arguments.length === 1) {
        this._activate = b;
        return b
    } else {
        return this._activate
    }
}, _destroy: null, destroy: function (b) {
    if (arguments.length === 1) {
        this._destroy = b;
        return b
    } else {
        return this._destroy
    }
}, item: function (a) {
    if (a >= this.g()) {
        this.g(a + 1)
    }
    return this.h().__inner[a]
}, clear: function () {
    this.g(0)
}, g: function (h) {
    if (arguments.length === 1) {
        var i = this.h().count();
        while (h > this.h().count() && this.i().count() > 0) {
            var j = this.i().__inner[this.i().count() - 1];
            this.h().add(j);
            this.i().removeAt(this.i().count() - 1);
            if (this.activate() != null) {
                this.activate()(j)
            }
        }
        while (h > this.h().count() && this.i().count() == 0) {
            var k = this.create()();
            this.h().add(k);
            if (this.activate() != null) {
                this.activate()(k)
            }
        }
        var l = 2;
        while (i != 0) {
            i >>= 1;
            l <<= 1
        }
        while (h < this.h().count()) {
            var m = this.h().__inner[this.h().count() - 1];
            this.h().removeAt(this.h().count() - 1);
            if (this.disactivate() != null) {
                this.disactivate()(m)
            }
            if (this.i().count() < l) {
                this.i().add(m)
            } else {
                if (this.destroy() != null) {
                    this.destroy()(m)
                }
            }
        }
        if (l < this.i().count()) {
            for (var n = l; n < this.i().count(); ++n) {
                this.destroy()(this.i().__inner[n])
            }
            this.i().q(l, this.i().count() - l)
        }
        return h
    } else {
        return this.h().count()
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, p: function (f) {
    var h = this.i().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        f(g)
    }
    var j = this.h().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        f(i)
    }
}, $type: new $.ig.Type("Pool$1", $.ig.Object.prototype.$type, [$.ig.IIndexedPool$1.prototype.$type.specialize(0)])}, true);
$.ig.util.defType("HashPool$2", "Object", {$tKey: null, $tValue: null, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, init: function (a, b) {
    this.$tKey = a;
    this.$tValue = b;
    this.$type = this.$type.specialize(this.$tKey, this.$tValue);
    $.ig.Object.prototype.init.call(this);
    this.g(new $.ig.List$1(this.$tValue, 0));
    this.h(new $.ig.Dictionary$2(this.$tKey, this.$tValue, 0))
}, _create: null, create: function (b) {
    if (arguments.length === 1) {
        this._create = b;
        return b
    } else {
        return this._create
    }
}, _disactivate: null, disactivate: function (b) {
    if (arguments.length === 1) {
        this._disactivate = b;
        return b
    } else {
        return this._disactivate
    }
}, _activate: null, activate: function (b) {
    if (arguments.length === 1) {
        this._activate = b;
        return b
    } else {
        return this._activate
    }
}, _destroy: null, destroy: function (b) {
    if (arguments.length === 1) {
        this._destroy = b;
        return b
    } else {
        return this._destroy
    }
}, item: function (d) {
    var a = this;
    var e;
    if (!(function () {
        var b = a.h().tryGetValue(d, e);
        e = b.value;
        return b.ret
    }())) {
        if (this.g().count() > 0) {
            e = this.g().__inner[this.g().count() - 1];
            this.g().removeAt(this.g().count() - 1)
        } else {
            e = this.create()()
        }
        if (this.activate() != null) {
            this.activate()(e)
        }
        this.h().item(d, e)
    }
    return e
}, i: function () {
    return this.h().keys()
}, t: function (b) {
    return this.h().containsKey(b)
}, u: function (g) {
    var f = this;
    var h;
    if ((function () {
        var a = f.h().tryGetValue(g, h);
        h = a.value;
        return a.ret
    }())) {
        this.h().remove(g);
        if (this.disactivate() != null) {
            this.disactivate()(h)
        }
        this.g().add(h);
        var i = this.h().count();
        var j = 2;
        while (i != 0) {
            i >>= 1;
            j <<= 1
        }
        if (j < this.g().count()) {
            for (var k = j; k < this.g().count(); ++k) {
                this.destroy()(this.g().item(k))
            }
            this.g().q(j, this.g().count() - j)
        }
    }
}, clear: function () {
    var f = new $.ig.List$1(this.$tKey, 0);
    var h = this.h().keys().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        f.add(g)
    }
    var j = f.getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        this.u(i)
    }
}, j: function () {
    return this.h().count()
}, w: function (f) {
    var h = this.g().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        f(g)
    }
    var j = this.h().values().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        f(i)
    }
}, $type: new $.ig.Type("HashPool$2", $.ig.Object.prototype.$type, [$.ig.IHashPool$2.prototype.$type.specialize(0, 1)])}, true);
$.ig.util.defType("SafeEnumerable", "Object", {a: null, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = b
}, b: function (b) {
    if (Number.isInfinity(b) || isNaN(b)) {
        return 0
    }
    return b
}, c: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            if (this.$this.a == null) {
                                this.$state = 2
                            } else {
                                this.$state = 4
                            }
                            break;
                        case 2:
                            this.$state = -2;
                            return false;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            this.$b = this.$this.a.getEnumerator();
                            this.$state = 8;
                            break;
                        case 6:
                            this.$a = this.$b.current();
                            this.$current = this.$this.b(this.$a);
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            if (this.$b.moveNext()) {
                                this.$state = 6
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
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, getEnumerator: function () {
    return this.c().getEnumerator()
}, $type: new $.ig.Type("SafeEnumerable", $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number)])}, true);
$.ig.util.defType("SafeReadOnlyDoubleCollection", "Object", {a: null, b: function (b) {
    if (Number.isInfinity(b) || isNaN(b)) {
        return 0
    }
    return b
}, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.ReadOnlyCollection$1(Number, 1, b)
}, indexOf: function (b) {
    return this.a.indexOf(b)
}, insert: function (c, d) {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).insert(c, d)
}, removeAt: function (b) {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).removeAt(b)
}, item: function (d, c) {
    if (arguments.length === 2) {
        ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).item(d, c);
        return c
    } else {
        return this.b(this.a.item(d))
    }
}, add: function (b) {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).add(b)
}, clear: function () {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).clear()
}, contains: function (b) {
    return this.a.contains(b)
}, c: function (d, e) {
    for (var f = e; f < d.length; f++) {
        d[f] = this.item(f)
    }
}, count: function () {
    return this.a.count()
}, isReadOnly: function () {
    return($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).isReadOnly()
}, remove: function (b) {
    return($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).remove(b)
}, getEnumerator: function () {
    return new $.ig.SafeEnumerable(this.a).getEnumerator()
}, $type: new $.ig.Type("SafeReadOnlyDoubleCollection", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(Number)])}, true);
$.ig.util.defType("SafeSortedReadOnlyDoubleCollection", "Object", {a: null, b: null, c: function (b) {
    if (Number.isInfinity(b) || isNaN(b)) {
        return 0
    }
    return b
}, init: function (c, d) {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.SafeReadOnlyDoubleCollection(c);
    this.b = d
}, indexOf: function (c) {
    var d = this.a.indexOf(c);
    return this.b.indexOf(d)
}, insert: function (c, d) {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).insert(c, d)
}, removeAt: function (b) {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).removeAt(b)
}, item: function (e, d) {
    if (arguments.length === 2) {
        ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).item(e, d);
        return d
    } else {
        var f = this.b.item(e);
        return this.c(this.a.item(f))
    }
}, add: function (b) {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).add(b)
}, clear: function () {
    ($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).clear()
}, contains: function (b) {
    return this.a.contains(b)
}, d: function (d, e) {
    for (var f = e; f < d.length; f++) {
        d[f] = this.item(f)
    }
}, count: function () {
    return this.a.count()
}, isReadOnly: function () {
    return($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).isReadOnly()
}, remove: function (b) {
    return($.ig.util.cast($.ig.IList$1.prototype.$type.specialize(Number), this.a)).remove(b)
}, getEnumerator: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$a = 0;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$current = this.$this.item(this.$a);
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$a++;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$a < this.$this.a.count()) {
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
            }}
        }()
    };
    return new $.ig.GenericEnumerator$1(Number, a())
}, $type: new $.ig.Type("SafeSortedReadOnlyDoubleCollection", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(Number)])}, true);
$.ig.WindowResponse.prototype.deferred = 0;
$.ig.WindowResponse.prototype.immediate = 1;
$.ig.MarkerType.prototype.unset = 0;
$.ig.MarkerType.prototype.none = 1;
$.ig.MarkerType.prototype.automatic = 2;
$.ig.MarkerType.prototype.circle = 3;
$.ig.MarkerType.prototype.triangle = 4;
$.ig.MarkerType.prototype.pyramid = 5;
$.ig.MarkerType.prototype.square = 6;
$.ig.MarkerType.prototype.diamond = 7;
$.ig.MarkerType.prototype.pentagon = 8;
$.ig.MarkerType.prototype.hexagon = 9;
$.ig.MarkerType.prototype.tetragram = 10;
$.ig.MarkerType.prototype.pentagram = 11;
$.ig.MarkerType.prototype.hexagram = 12;
$.ig.GridMode.prototype.none = 0;
$.ig.GridMode.prototype.beforeSeries = 1;
$.ig.GridMode.prototype.behindSeries = 2;
$.ig.AxisOrientation.prototype.horizontal = 0;
$.ig.AxisOrientation.prototype.vertical = 1;
$.ig.AxisOrientation.prototype.angular = 2;
$.ig.AxisOrientation.prototype.radial = 3;
$.ig.CategoryMode.prototype.mode0 = 0;
$.ig.CategoryMode.prototype.mode1 = 1;
$.ig.CategoryMode.prototype.mode2 = 2;
$.ig.AxisLabelsLocation.prototype.outsideTop = 0;
$.ig.AxisLabelsLocation.prototype.outsideBottom = 1;
$.ig.AxisLabelsLocation.prototype.outsideLeft = 2;
$.ig.AxisLabelsLocation.prototype.outsideRight = 3;
$.ig.AxisLabelsLocation.prototype.insideTop = 4;
$.ig.AxisLabelsLocation.prototype.insideBottom = 5;
$.ig.AxisLabelsLocation.prototype.insideLeft = 6;
$.ig.AxisLabelsLocation.prototype.insideRight = 7;
$.ig.ChartContentType.prototype.series = 0;
$.ig.ChartContentType.prototype.axis = 1;
$.ig.ChartContentType.prototype.background = 2;
$.ig.NumericScaleMode.prototype.linear = 0;
$.ig.NumericScaleMode.prototype.logarithmic = 1;
$.ig.AxisLabelPanelBaseView.prototype.a = 4;
$.ig.AxisLabelPanelBase.prototype.a6 = "Extent";
$.ig.AxisLabelPanelBase.prototype.a8 = $.ig.DependencyProperty.prototype.l($.ig.AxisLabelPanelBase.prototype.a6, Number, $.ig.AxisLabelPanelBase.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (c, d) {
}));
$.ig.Axis.prototype.a7 = "FormatLabel";
$.ig.Axis.prototype.a8 = "RootCanvas";
$.ig.Axis.prototype.a9 = "FastItemsSourceProvider";
$.ig.Axis.prototype.ba = "SeriesViewer";
$.ig.Axis.prototype.bb = "Stroke";
$.ig.Axis.prototype.bc = "StrokeThickness";
$.ig.Axis.prototype.bd = "StrokeDashArray";
$.ig.Axis.prototype.be = "Strip";
$.ig.Axis.prototype.bf = "MajorStroke";
$.ig.Axis.prototype.bg = "MajorStrokeThickness";
$.ig.Axis.prototype.bh = "MajorStrokeDashArray";
$.ig.Axis.prototype.bi = "MinorStroke";
$.ig.Axis.prototype.bj = "MinorStrokeThickness";
$.ig.Axis.prototype.bk = "MinorStrokeDashArray";
$.ig.Axis.prototype.bl = "IsDisabled";
$.ig.Axis.prototype.bm = "IsInverted";
$.ig.Axis.prototype.bn = "LabelSettings";
$.ig.Axis.prototype.bo = "LabelPanelStyle";
$.ig.Axis.prototype.bp = "CrossingAxis";
$.ig.Axis.prototype.bq = "CrossingValue";
$.ig.Axis.prototype.br = "Label";
$.ig.Axis.prototype.formatLabelProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.a7, $.ig.Func$2.prototype.$type.specialize($.ig.Object.prototype.$type, String), $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.a7, d.f(), d.e())
}));
$.ig.Axis.prototype.strokeProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bb, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bb, d.f(), d.e())
}));
$.ig.Axis.prototype.strokeThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bc, Number, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bc, d.f(), d.e())
}));
$.ig.Axis.prototype.strokeDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bd, $.ig.DoubleCollection.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bd, d.f(), d.e())
}));
$.ig.Axis.prototype.stripProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.be, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.be, d.f(), d.e())
}));
$.ig.Axis.prototype.majorStrokeProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bf, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bf, d.f(), d.e())
}));
$.ig.Axis.prototype.majorStrokeThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bg, Number, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bg, d.f(), d.e())
}));
$.ig.Axis.prototype.majorStrokeDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bh, $.ig.DoubleCollection.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bh, d.f(), d.e())
}));
$.ig.Axis.prototype.minorStrokeProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bi, $.ig.Brush.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bi, d.f(), d.e())
}));
$.ig.Axis.prototype.minorStrokeThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bj, Number, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bj, d.f(), d.e())
}));
$.ig.Axis.prototype.minorStrokeDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bk, $.ig.DoubleCollection.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bk, d.f(), d.e())
}));
$.ig.Axis.prototype.isDisabledProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bl, $.ig.Boolean.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bl, d.f(), d.e())
}));
$.ig.Axis.prototype.isInvertedProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bm, $.ig.Boolean.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bm, d.f(), d.e())
}));
$.ig.Axis.prototype.labelSettingsProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bn, $.ig.AxisLabelSettings.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bn, d.f(), d.e())
}));
$.ig.Axis.prototype.labelPanelStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bo, $.ig.Style.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bo, d.f(), d.e())
}));
$.ig.Axis.prototype.crossingAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bp, $.ig.Axis.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bp, d.f(), d.e())
}));
$.ig.Axis.prototype.crossingValueProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.bq, $.ig.Object.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.bq, d.f(), d.e())
}));
$.ig.Axis.prototype.labelProperty = $.ig.DependencyProperty.prototype.l($.ig.Axis.prototype.br, $.ig.Object.prototype.$type, $.ig.Axis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.Axis.prototype.$type, c)).ez($.ig.Axis.prototype.br, d.f(), d.e())
}));
$.ig.AxisLabelSettings.prototype.a = "TextStyle";
$.ig.AxisLabelSettings.prototype.b = "TextColor";
$.ig.AxisLabelSettings.prototype.c = "Location";
$.ig.AxisLabelSettings.prototype.d = "Visibility";
$.ig.AxisLabelSettings.prototype.e = "Angle";
$.ig.AxisLabelSettings.prototype.f = "Extent";
$.ig.AxisLabelSettings.prototype.extentPropertyDefault = 50;
$.ig.Snapper.prototype.a = 7;
$.ig.CategoryAxisBase.prototype.f6 = "FastItemsSource";
$.ig.CategoryAxisBase.prototype.f7 = "ItemsSource";
$.ig.CategoryAxisBase.prototype.f8 = "ItemsCount";
$.ig.CategoryAxisBase.prototype.f9 = "CategoryMode";
$.ig.CategoryAxisBase.prototype.ga = "Gap";
$.ig.CategoryAxisBase.prototype.gb = "Overlap";
$.ig.CategoryAxisBase.prototype.gc = "GroupCount";
$.ig.CategoryAxisBase.prototype.fastItemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.f6, $.ig.FastItemsSource.prototype.$type, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, c)).ez($.ig.CategoryAxisBase.prototype.f6, d.f(), d.e())
}));
$.ig.CategoryAxisBase.prototype.itemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.f7, $.ig.IEnumerable.prototype.$type, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (d, e) {
    var f = $.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, d);
    if (f.c0() != null) {
        f.c0().releaseFastItemsSource(e.f())
    }
    ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, d)).ez($.ig.CategoryAxisBase.prototype.f7, e.f(), e.e())
}));
$.ig.CategoryAxisBase.prototype.gapProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.ga, Number, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 0.2, function (c, d) {
    ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, c)).ez($.ig.CategoryAxisBase.prototype.ga, d.f(), d.e())
}));
$.ig.CategoryAxisBase.prototype.overlapProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAxisBase.prototype.gb, Number, $.ig.CategoryAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, c)).ez($.ig.CategoryAxisBase.prototype.gb, d.f(), d.e())
}));
$.ig.CategoryYAxis.prototype.hc = "Interval";
$.ig.CategoryYAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryYAxis.prototype.hc, Number, $.ig.CategoryYAxis.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, c)).ez($.ig.CategoryYAxis.prototype.hc, d.f(), d.e());
    ($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, c)).es(false)
}));
$.ig.NumericAxisBase.prototype.f6 = "MinimumValue";
$.ig.NumericAxisBase.prototype.f7 = "ActualMinimumValue";
$.ig.NumericAxisBase.prototype.f8 = "MaximumValue";
$.ig.NumericAxisBase.prototype.f9 = "ActualMaximumValue";
$.ig.NumericAxisBase.prototype.ga = "Interval";
$.ig.NumericAxisBase.prototype.gb = "ReferenceValue";
$.ig.NumericAxisBase.prototype.gc = "IsLogarithmic";
$.ig.NumericAxisBase.prototype.gd = "ActualIsLogarithmic";
$.ig.NumericAxisBase.prototype.ge = "LogarithmBase";
$.ig.NumericAxisBase.prototype.gf = "TickmarkValues";
$.ig.NumericAxisBase.prototype.gg = "ActualTickmarkValues";
$.ig.NumericAxisBase.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.f6, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, c)).ez($.ig.NumericAxisBase.prototype.f6, d.f(), d.e())
}));
$.ig.NumericAxisBase.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.f8, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, c)).ez($.ig.NumericAxisBase.prototype.f8, d.f(), d.e())
}));
$.ig.NumericAxisBase.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.ga, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, c)).ez($.ig.NumericAxisBase.prototype.ga, d.f(), d.e())
}));
$.ig.NumericAxisBase.prototype.referenceValueProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.gb, Number, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, c)).ez($.ig.NumericAxisBase.prototype.gb, d.f(), d.e())
}));
$.ig.NumericAxisBase.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.gc, $.ig.Boolean.prototype.$type, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, c)).ez($.ig.NumericAxisBase.prototype.gc, d.f(), d.e())
}));
$.ig.NumericAxisBase.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.ge, $.ig.Number.prototype.$type, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
    ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, c)).ez($.ig.NumericAxisBase.prototype.ge, d.f(), d.e())
}));
$.ig.NumericAxisBase.prototype.tickmarkValuesProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAxisBase.prototype.gf, $.ig.TickmarkValues.prototype.$type, $.ig.NumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.NumericAxisBase.prototype.$type, c)).ez($.ig.NumericAxisBase.prototype.gf, d.f(), d.e())
}));
$.ig.StraightNumericAxisBase.prototype.h2 = "ScaleMode";
$.ig.StraightNumericAxisBase.prototype.h3 = "Scaler";
$.ig.StraightNumericAxisBase.prototype.h4 = "ActualScaler";
$.ig.StraightNumericAxisBase.prototype.scaleModeProperty = $.ig.DependencyProperty.prototype.l($.ig.StraightNumericAxisBase.prototype.h2, $.ig.NumericScaleMode.prototype.$type, $.ig.StraightNumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.NumericScaleMode.prototype.linear, function (c, d) {
    ($.ig.util.cast($.ig.StraightNumericAxisBase.prototype.$type, c)).ez($.ig.StraightNumericAxisBase.prototype.h2, d.f(), d.e())
}));
$.ig.StraightNumericAxisBase.prototype.scalerProperty = $.ig.DependencyProperty.prototype.l($.ig.StraightNumericAxisBase.prototype.h3, $.ig.NumericScaler.prototype.$type, $.ig.StraightNumericAxisBase.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.StraightNumericAxisBase.prototype.ie));
$.ig.NumericScaler.prototype.e = "ActualMinimumValue";
$.ig.NumericScaler.prototype.f = "ActualMaximumValue";
$.ig.NumericScaler.prototype.g = $.ig.DependencyProperty.prototype.l($.ig.NumericScaler.prototype.e, Number, $.ig.NumericScaler.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.NumericScaler.prototype.$type, c)).x($.ig.NumericScaler.prototype.e, d.f(), d.e())
}));
$.ig.NumericScaler.prototype.h = $.ig.DependencyProperty.prototype.l($.ig.NumericScaler.prototype.f, Number, $.ig.NumericScaler.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.NumericScaler.prototype.$type, c)).x($.ig.NumericScaler.prototype.f, d.f(), d.e())
}));
$.ig.LogarithmicTickmarkValues.prototype.ab = 4.94065645841247e-324;
$.ig.LogarithmicTickmarkValues.prototype.ac = "LogarithmBase";
$.ig.LogarithmicTickmarkValues.prototype.ad = $.ig.DependencyProperty.prototype.l($.ig.LogarithmicTickmarkValues.prototype.ac, $.ig.Number.prototype.$type, $.ig.LogarithmicTickmarkValues.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
}));
$.ig.Series.prototype.a7 = "MouseOver";
$.ig.Series.prototype.a8 = "Normal";
$.ig.Series.prototype.a9 = "VisibilityProxy";
$.ig.Series.prototype.ba = "RootCanvas";
$.ig.Series.prototype.bb = "SyncLink";
$.ig.Series.prototype.bc = "SeriesViewer";
$.ig.Series.prototype.bd = "ItemsSource";
$.ig.Series.prototype.be = "FastItemsSource";
$.ig.Series.prototype.bf = "LegendItem";
$.ig.Series.prototype.bg = "ActualLegend";
$.ig.Series.prototype.bh = "LegendItemVisibility";
$.ig.Series.prototype.bi = "LegendItemBadgeTemplate";
$.ig.Series.prototype.bj = "LegendItemTemplate";
$.ig.Series.prototype.bk = "DiscreteLegendItemTemplate";
$.ig.Series.prototype.bl = "Index";
$.ig.Series.prototype.bm = "TransitionEasingFunction";
$.ig.Series.prototype.bn = "TransitionDuration";
$.ig.Series.prototype.bo = "TransitionProgress";
$.ig.Series.prototype.bp = "Resolution";
$.ig.Series.prototype.bq = "Title";
$.ig.Series.prototype.br = "Brush";
$.ig.Series.prototype.bs = "ActualBrush";
$.ig.Series.prototype.bt = "Outline";
$.ig.Series.prototype.bu = "ActualOutline";
$.ig.Series.prototype.bv = "LineJoin";
$.ig.Series.prototype.bw = "MiterLimit";
$.ig.Series.prototype.bx = "Thickness";
$.ig.Series.prototype.by = "DashCap";
$.ig.Series.prototype.bz = "DashArray";
$.ig.Series.prototype.b0 = "ToolTip";
$.ig.Series.prototype.b1 = "StartCap";
$.ig.Series.prototype.b2 = "EndCap";
$.ig.Series.prototype.b3 = "TrendLineDashArray";
$.ig.Series.prototype.b4 = "TrendLineType";
$.ig.Series.prototype.b5 = "TrendLinePeriod";
$.ig.Series.prototype.b6 = "TrendLineBrush";
$.ig.Series.prototype.b7 = "ActualTrendLineBrush";
$.ig.Series.prototype.b8 = "TrendLineThickness";
$.ig.Series.prototype.b9 = "TrendLineDashCap";
$.ig.Series.prototype.ca = "TrendLineZIndex";
$.ig.Series.prototype.cb = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.a9, $.ig.Visibility.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.Series.prototype.a9, d.f(), d.e())
}));
$.ig.Series.prototype.itemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bd, $.ig.IEnumerable.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (d, e) {
    var f = $.ig.util.cast($.ig.Series.prototype.$type, d);
    if (f.syncLink() != null) {
        ($.ig.util.cast($.ig.IFastItemsSourceProvider.prototype.$type, f.syncLink())).releaseFastItemsSource(e.f())
    }
    ($.ig.util.cast($.ig.Series.prototype.$type, d)).ej($.ig.Series.prototype.bd, e.f(), e.e())
}));
$.ig.Series.prototype.ck = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.be, $.ig.FastItemsSource.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.be, d.f(), d.e())
}));
$.ig.Series.prototype.legendProperty = $.ig.DependencyProperty.prototype.l("Legend", $.ig.LegendBase.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (d, e) {
    var f = $.ig.util.cast($.ig.Series.prototype.$type, d);
    f.ej($.ig.XamDataChart.prototype.a8, e.f(), e.e())
}));
$.ig.Series.prototype.legendItemVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bh, $.ig.Visibility.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bh, d.f(), d.e())
}));
$.ig.Series.prototype.legendItemBadgeTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bi, $.ig.DataTemplate.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (d, e) {
    var f = $.ig.util.cast($.ig.Series.prototype.$type, d);
    f.ej($.ig.Series.prototype.bi, e.f(), e.e());
    f.legendItem(f.ff())
}));
$.ig.Series.prototype.legendItemTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bj, $.ig.DataTemplate.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (d, e) {
    var f = $.ig.util.cast($.ig.Series.prototype.$type, d);
    f.ej($.ig.Series.prototype.bj, e.f(), e.e());
    f.legendItem(f.ff())
}));
$.ig.Series.prototype.discreteLegendItemTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bk, $.ig.DataTemplate.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (d, e) {
    var f = $.ig.util.cast($.ig.Series.prototype.$type, d);
    f.ej($.ig.Series.prototype.bk, e.f(), e.e())
}));
$.ig.Series.prototype.indexProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bl, $.ig.Number.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, -1, function (d, e) {
    var f = $.ig.util.cast($.ig.Series.prototype.$type, d);
    f.ej($.ig.Series.prototype.bl, e.f(), e.e());
    f.legendItem(f.ff())
}));
$.ig.Series.prototype.transitionDurationProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bn, $.ig.Number.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bn, d.f(), d.e())
}));
$.ig.Series.prototype.co = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bo, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bo, d.f(), d.e())
}));
$.ig.Series.prototype.resolutionProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bp, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bp, d.f(), d.e())
}));
$.ig.Series.prototype.titleProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bq, $.ig.Object.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, "Series Title", function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bq, d.f(), d.e())
}));
$.ig.Series.prototype.brushProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.br, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.br, d.f(), d.e())
}));
$.ig.Series.prototype.actualBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bs, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bs, d.f(), d.e())
}));
$.ig.Series.prototype.outlineProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bt, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bt, d.f(), d.e())
}));
$.ig.Series.prototype.actualOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bu, $.ig.Brush.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bu, d.f(), d.e())
}));
$.ig.Series.prototype.miterLimitProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bw, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bw, d.f(), d.e())
}));
$.ig.Series.prototype.thicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bx, Number, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bx, d.f(), d.e())
}));
$.ig.Series.prototype.dashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.by, $.ig.PenLineCap.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.by, d.f(), d.e())
}));
$.ig.Series.prototype.dashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.bz, $.ig.DoubleCollection.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.bz, d.f(), d.e())
}));
$.ig.Series.prototype.toolTipProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.b0, $.ig.Object.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.b0, d.f(), d.e())
}));
$.ig.Series.prototype.startCapProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.b1, $.ig.PenLineCap.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.PenLineCap.prototype.round, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.b1, d.f(), d.e())
}));
$.ig.Series.prototype.endCapProperty = $.ig.DependencyProperty.prototype.l($.ig.Series.prototype.b2, $.ig.PenLineCap.prototype.$type, $.ig.Series.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.PenLineCap.prototype.round, function (c, d) {
    ($.ig.util.cast($.ig.Series.prototype.$type, c)).ej($.ig.Series.prototype.b2, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.hp = "MarkerType";
$.ig.MarkerSeries.prototype.hq = "MarkerTemplate";
$.ig.MarkerSeries.prototype.hr = "ActualMarkerTemplate";
$.ig.MarkerSeries.prototype.hs = "MarkerBrush";
$.ig.MarkerSeries.prototype.ht = "ActualMarkerBrush";
$.ig.MarkerSeries.prototype.hu = "MarkerOutline";
$.ig.MarkerSeries.prototype.hv = "ActualMarkerOutline";
$.ig.MarkerSeries.prototype.hw = "MarkerStyle";
$.ig.MarkerSeries.prototype.hx = "UseLightweightMarkers";
$.ig.MarkerSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hp, $.ig.MarkerType.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.hp, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hq, $.ig.DataTemplate.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.hq, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.actualMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hr, $.ig.DataTemplate.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.hr, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.nullMarkerTemplate = new $.ig.DataTemplate();
$.ig.MarkerSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hs, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (d, e) {
    var f = ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, d));
    f.ej($.ig.MarkerSeries.prototype.hs, e.f(), e.e())
}));
$.ig.MarkerSeries.prototype.actualMarkerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.ht, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.ht, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hu, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.hu, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.actualMarkerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hv, $.ig.Brush.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.hv, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.markerStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hw, $.ig.Style.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.hw, d.f(), d.e())
}));
$.ig.MarkerSeries.prototype.useLightweightMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.MarkerSeries.prototype.hx, $.ig.Boolean.prototype.$type, $.ig.MarkerSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.MarkerSeries.prototype.$type, c)).ej($.ig.MarkerSeries.prototype.hx, d.f(), d.e())
}));
$.ig.SeriesView.prototype.a = 1000;
$.ig.SeriesView.prototype.b = 3;
$.ig.CategorySeries.prototype.iq = "ErrorBarSettings";
$.ig.SeriesViewer.prototype.a7 = "CrosshairPoint";
$.ig.SeriesViewer.prototype.a8 = "Legend";
$.ig.SeriesViewer.prototype.a9 = "AnimateSeriesWhenAxisRangeChanges";
$.ig.SeriesViewer.prototype.ba = "WindowRect";
$.ig.SeriesViewer.prototype.bb = "HorizontalZoomable";
$.ig.SeriesViewer.prototype.bc = "HorizontalZoombarVisibility";
$.ig.SeriesViewer.prototype.bd = "VerticalZoomable";
$.ig.SeriesViewer.prototype.be = "VerticalZoombarVisibility";
$.ig.SeriesViewer.prototype.bf = 10;
$.ig.SeriesViewer.prototype.bg = 2;
$.ig.SeriesViewer.prototype.bh = "WindowResponse";
$.ig.SeriesViewer.prototype.bi = "WindowRectMinWidth";
$.ig.SeriesViewer.prototype.bj = "ActualSyncLink";
$.ig.SeriesViewer.prototype.bk = "OverviewPlusDetailPaneVisibility";
$.ig.SeriesViewer.prototype.bl = "CrosshairVisibility";
$.ig.SeriesViewer.prototype.bm = "IsDragCrosshairEnabled";
$.ig.SeriesViewer.prototype.bn = "PlotAreaBorderBrush";
$.ig.SeriesViewer.prototype.bo = "PlotAreaBorderThickness";
$.ig.SeriesViewer.prototype.bp = "PlotAreaBackground";
$.ig.SeriesViewer.prototype.bq = "PlotAreaMinWidth";
$.ig.SeriesViewer.prototype.br = "PlotAreaMinHeight";
$.ig.SeriesViewer.prototype.bs = "DefaultInteraction";
$.ig.SeriesViewer.prototype.bt = "DragModifier";
$.ig.SeriesViewer.prototype.bu = "PanModifier";
$.ig.SeriesViewer.prototype.bv = "WindowPositionHorizontal";
$.ig.SeriesViewer.prototype.bw = "WindowPositionVertical";
$.ig.SeriesViewer.prototype.bx = "WindowScaleHorizontal";
$.ig.SeriesViewer.prototype.by = "WindowScaleVertical";
$.ig.SeriesViewer.prototype.bz = "ContentPresenter";
$.ig.SeriesViewer.prototype.b0 = "CrosshairLineStyle";
$.ig.SeriesViewer.prototype.b1 = "Idle";
$.ig.SeriesViewer.prototype.b2 = "Dragging";
$.ig.SeriesViewer.prototype.b3 = "Panning";
$.ig.SeriesViewer.prototype.b4 = "Inking";
$.ig.SeriesViewer.prototype.b5 = "Erasing";
$.ig.SeriesViewer.prototype.b6 = "PreviewPathStyle";
$.ig.SeriesViewer.prototype.b7 = "ZoombarStyle";
$.ig.SeriesViewer.prototype.b8 = "CircleMarkerTemplate";
$.ig.SeriesViewer.prototype.b9 = "TriangleMarkerTemplate";
$.ig.SeriesViewer.prototype.ca = "PyramidMarkerTemplate";
$.ig.SeriesViewer.prototype.cb = "SquareMarkerTemplate";
$.ig.SeriesViewer.prototype.cc = "DiamondMarkerTemplate";
$.ig.SeriesViewer.prototype.cd = "PentagonMarkerTemplate";
$.ig.SeriesViewer.prototype.ce = "HexagonMarkerTemplate";
$.ig.SeriesViewer.prototype.cf = "TetragramMarkerTemplate";
$.ig.SeriesViewer.prototype.cg = "PentagramMarkerTemplate";
$.ig.SeriesViewer.prototype.ch = "HexagramMarkerTemplate";
$.ig.SeriesViewer.prototype.ci = "ActualWindowRect";
$.ig.SeriesViewer.prototype.cj = "ActualWindowPositionHorizontal";
$.ig.SeriesViewer.prototype.ck = "ActualWindowPositionVertical";
$.ig.SeriesViewer.prototype.cl = "ActualWindowScaleHorizontal";
$.ig.SeriesViewer.prototype.cm = "ActualWindowScaleVertical";
$.ig.SeriesViewer.prototype.legendProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.a8, $.ig.LegendBase.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (d, e) {
    var f = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, d);
    f.f2($.ig.SeriesViewer.prototype.a8, e.f(), e.e())
}));
$.ig.SeriesViewer.prototype.animateSeriesWhenAxisRangeChangesProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.a9, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (d, e) {
    var f = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, d);
    f.f2($.ig.SeriesViewer.prototype.a9, e.f(), e.e())
}));
$.ig.SeriesViewer.prototype.windowRectProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ba, $.ig.Rect.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, new $.ig.Rect(0, 0, 0, 1, 1), function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.ba, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.horizontalZoomableProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bb, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bb, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.horizontalZoombarVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bc, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.collapsed, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bc, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.verticalZoomableProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bd, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bd, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.verticalZoombarVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.be, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.collapsed, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.be, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.windowResponseProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bh, $.ig.WindowResponse.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.WindowResponse.prototype.deferred, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bh, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.windowRectMinWidthProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bi, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, 0.0001, function (c, d) {
    return($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bi, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.overviewPlusDetailPaneVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bk, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.collapsed, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bk, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.crosshairVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bl, $.ig.Visibility.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bl, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.isDragCrosshairEnabledProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bm, $.ig.Boolean.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bm, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.plotAreaBorderBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bn, $.ig.Brush.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bn, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.plotAreaBackgroundProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bp, $.ig.Brush.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bp, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.plotAreaMinWidthProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bq, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bq, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.plotAreaMinHeightProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.br, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.br, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.defaultInteractionProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bs, $.ig.InteractionState.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.InteractionState.prototype.auto, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bs, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.dragModifierProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bt, $.ig.ModifierKeys.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ModifierKeys.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bt, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.panModifierProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bu, $.ig.ModifierKeys.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ModifierKeys.prototype.shift, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bu, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.windowPositionHorizontalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bv, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bv, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.windowPositionVerticalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bw, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bw, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.windowScaleHorizontalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.bx, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.bx, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.windowScaleVerticalProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.by, Number, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.by, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.crosshairLineStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b0, $.ig.Style.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.b0, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.previewPathStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b6, $.ig.Style.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.b6, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.de = $.ig.Rect.prototype.empty();
$.ig.SeriesViewer.prototype.zoombarStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b7, $.ig.Style.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.b7, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.circleMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b8, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.b8, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.triangleMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.b9, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.b9, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.pyramidMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ca, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.ca, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.squareMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cb, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.cb, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.diamondMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cc, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.cc, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.pentagonMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cd, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.cd, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.hexagonMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ce, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.ce, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.tetragramMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cf, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.cf, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.pentagramMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.cg, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.cg, d.f(), d.e())
}));
$.ig.SeriesViewer.prototype.hexagramMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.SeriesViewer.prototype.ch, $.ig.DataTemplate.prototype.$type, $.ig.SeriesViewer.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewer.prototype.$type, c)).f2($.ig.SeriesViewer.prototype.ch, d.f(), d.e())
}));
$.ig.XamDataChart.prototype.ke = "IsSquare";
$.ig.XamDataChart.prototype.kf = "GridMode";
$.ig.XamDataChart.prototype.kg = "Brushes";
$.ig.XamDataChart.prototype.kh = "MarkerBrushes";
$.ig.XamDataChart.prototype.ki = "Outlines";
$.ig.XamDataChart.prototype.kj = "MarkerOutlines";
$.ig.XamDataChart.prototype.kk = "PlotAreaBackgroundContent";
$.ig.XamDataChart.prototype.isSquareProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.ke, $.ig.Boolean.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.XamDataChart.prototype.$type, c)).f2($.ig.XamDataChart.prototype.ke, d.f(), d.e())
}));
$.ig.XamDataChart.prototype.gridModeProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kf, $.ig.GridMode.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.GridMode.prototype.behindSeries, function (c, d) {
    ($.ig.util.cast($.ig.XamDataChart.prototype.$type, c)).f2($.ig.XamDataChart.prototype.kf, d.f(), d.e())
}));
$.ig.XamDataChart.prototype.brushesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kg, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.XamDataChart.prototype.$type, c)).f2($.ig.XamDataChart.prototype.kg, d.f(), d.e())
}));
$.ig.XamDataChart.prototype.markerBrushesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kh, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.XamDataChart.prototype.$type, c)).f2($.ig.XamDataChart.prototype.kh, d.f(), d.e())
}));
$.ig.XamDataChart.prototype.outlinesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.ki, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.XamDataChart.prototype.$type, c)).f2($.ig.XamDataChart.prototype.ki, d.f(), d.e())
}));
$.ig.XamDataChart.prototype.markerOutlinesProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kj, $.ig.BrushCollection.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.XamDataChart.prototype.$type, c)).f2($.ig.XamDataChart.prototype.kj, d.f(), d.e())
}));
$.ig.XamDataChart.prototype.plotAreaBackgroundContentProperty = $.ig.DependencyProperty.prototype.l($.ig.XamDataChart.prototype.kk, $.ig.FrameworkElement.prototype.$type, $.ig.XamDataChart.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.XamDataChart.prototype.$type, c)).f2($.ig.XamDataChart.prototype.kk, d.f(), d.e())
}));
$.ig.SyncSettings.prototype.a2 = "SyncChannel";
$.ig.SyncSettings.prototype.a3 = "SynchronizeVertically";
$.ig.SyncSettings.prototype.a4 = "SynchronizeHorizontally";
$.ig.SyncSettings.prototype.syncChannelProperty = $.ig.DependencyProperty.prototype.l($.ig.SyncSettings.prototype.a2, String, $.ig.SyncSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.SyncSettings.prototype.$type, c)).ba($.ig.SyncSettings.prototype.a2, d.f(), d.e())
}));
$.ig.SyncSettings.prototype.synchronizeVerticallyProperty = $.ig.DependencyProperty.prototype.l($.ig.SyncSettings.prototype.a3, $.ig.Boolean.prototype.$type, $.ig.SyncSettings.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.SyncSettings.prototype.$type, c)).ba($.ig.SyncSettings.prototype.a3, d.f(), d.e())
}));
$.ig.SyncSettings.prototype.synchronizeHorizontallyProperty = $.ig.DependencyProperty.prototype.l($.ig.SyncSettings.prototype.a4, $.ig.Boolean.prototype.$type, $.ig.SyncSettings.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.SyncSettings.prototype.$type, c)).ba($.ig.SyncSettings.prototype.a4, d.f(), d.e())
}));
$.ig.SeriesViewerSurfaceViewer.prototype.e = "ZoomLevel";
$.ig.SeriesViewerSurfaceViewer.prototype.f = "ZoomLevelDisplayText";
$.ig.SeriesViewerSurfaceViewer.prototype.i = $.ig.DependencyProperty.prototype.l("ZoomLevel", Number, $.ig.SeriesViewerSurfaceViewer.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.SeriesViewerSurfaceViewer.prototype.$type, c)).aj($.ig.SeriesViewerSurfaceViewer.prototype.e, d.f(), d.e())
}));
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["getBounds", "getBounds11", "getCentroid", "toPointCollection", "toPointList"]
    ],
    [
        [$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["flattenTo", "getBounds2", "clipTo"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["asQueryable"]
    ]
]);
$.ig.util.extCopy($.ig.ArrayUtil, [
    [
        [$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["shuffle$1", "insertionIndex$1", "insertionIndex$11111", "binarySearch$1"]
    ]
]);
$.ig = $.ig || {};
$.ig.util.bulkDefine(["SphericalMercatorHorizontalScaler", "SphericalMercatorVerticalScaler", "ColorScale", "ColorScaleInterpolationMode", "CustomPaletteColorScale", "GeographicMapImagery", "BingMapsMapImagery", "GeographicMapImageryView", "BingMapsMapImageryView", "CloudMadeMapImagery", "CloudMadeMapImageryView", "OpenStreetMapImagery", "HostSeriesView$1", "GeographicProportionalSymbolSeriesView", "GeographicMapSeriesHost$1", "GeographicXYTriangulatingSeries", "GeographicContourLineSeries", "GeographicXYTriangulatingSeriesView", "GeographicContourLineSeriesView", "GeographicHighDensityScatterSeries", "GeographicHighDensityScatterSeriesView", "GeographicShapeSeriesBase", "GeographicPolylineSeries", "GeographicProportionalSymbolSeries", "GeographicScatterAreaSeries", "GeographicScatterAreaSeriesView", "GeographicShapeSeries", "GeographicShapeSeriesBaseView", "GeographicShapeSeriesView", "GeographicSymbolSeries", "GeographicSymbolSeriesView", "XYTriangulatingSeries", "ContourLineSeries", "PolylineBuilder", "ContourBuilder", "ContourLineSeriesView", "ContourValueResolver", "LinearContourValueResolver", "ShapeSeriesBase", "PolylineSeries", "ShapeSeriesViewBase", "PolylineSeriesView", "ScatterAreaSeries", "TriangleRasterizer", "ScatterAreaSeriesView", "ShapeSeries", "ShapeAxisInfoCache", "FlattenedShape", "ShapeSeriesView", "ShapeHitRegion", "ShapefileConverter", "ShapefileRecord", "ShapeFileUtil", "Header", "XBaseDataType", "XBaseField", "ShapeType", "StyleSelector", "ItfConverter", "Triangle", "TriangulationSource", "TriangulatorContext", "Triangulator", "TriangulationStatusEventHandler", "TriangulationStatusEventArgs", "HalfEdge", "HalfEdgeSet", "EdgeComparer", "PointTester", "TriangulationSourcePointRecord", "XamGeographicMap", "XamGeographicMapView", "TestEnum", "AxisLabelPanelBaseView", "AngleAxisLabelPanelView", "AxisLabelPanelBase", "AngleAxisLabelPanel", "AutoRangeCalculator", "Axis", "AxisCollection", "AxisComponentsForView", "AxisComponentsFromView", "AxisLabelInfo", "AxisLabelManager", "LabelPosition", "AxisLabelSettings", "AxisRange", "Snapper", "LinearNumericSnapper", "LogarithmicNumericSnapper", "LinearCategorySnapper", "AxisView", "IScaler", "ICategoryScaler", "CategoryAxisBase", "IAngleScaler", "CategoryAngleAxis", "CategoryAxisBaseView", "CategoryAngleAxisView", "ISortingAxis", "CategoryDateTimeXAxis", "CategoryDateTimeXAxisView", "AxisRenderingParametersBase", "CategoryAxisRenderingParameters", "AxisRendererBase", "CategoryAxisRenderer", "CategoryXAxis", "CategoryXAxisView", "CategoryYAxis", "CategoryYAxisView", "HorizontalAxisLabelPanelBase", "HorizontalAxisLabelPanel", "HorizontalAxisLabelPanelBaseView", "NumericAxisBase", "NumericAngleAxis", "NumericAxisBaseView", "NumericAngleAxisView", "StraightNumericAxisBase", "NumericRadiusAxis", "NumericRadiusAxisView", "NumericXAxis", "StraightNumericAxisBaseView", "NumericXAxisView", "NumericYAxis", "NumericYAxisView", "PolarAxes", "PolarAxisRenderingManager", "IPolarRadialRenderingParameters", "NumericAxisRenderingParameters", "PolarAxisRenderingParameters", "RadialAxisRenderingParameters", "RadialAxes", "RadialAxisLabelPanel", "RadialAxisLabelPanelView", "GetSnapperInfoStrategy", "NumericAxisRenderer", "RangeInfo", "NumericScaler", "LinearScaler", "HorizontalLinearScaler", "LogarithmicScaler", "HorizontalLogarithmicScaler", "NumericScaleMode", "ScalerParams", "VerticalLinearScaler", "VerticalLogarithmicScaler", "TickmarkValues", "CategoryTickmarkValues", "LinearTickmarkValues", "LogarithmicTickmarkValues", "TickmarkValuesInitializationParameters", "ViewportUtils", "FramePreparer", "CategoryFramePreparerBase", "CategoryFramePreparer", "BarFramePreparer", "BarTrendFitCalculator", "TrendLineManagerBase$1", "IPreparesCategoryTrendline", "CategoryTrendLineManagerBase", "CategoryTrendLineManager", "BarTrendLineManager", "BrushScale", "MarkerManagerBase", "BubbleMarkerManager", "IProvidesViewport", "Series", "MarkerSeries", "ISupportsErrorBars", "ScatterBase", "BubbleSeries", "SeriesView", "MarkerSeriesView", "ScatterBaseView", "BubbleSeriesView", "CustomPaletteBrushScale", "SizeScale", "ValueBrushScale", "IHasCategoryAxis", "IHasCategoryModePreference", "CategorySeries", "IIsCategoryBased", "IHasSingleValueCategory", "IHasTrendline", "IHasCategoryTrendline", "AnchoredCategorySeries", "VerticalAnchoredCategorySeries", "IBarSeries", "BarSeries", "ISupportsMarkers", "CategorySeriesView", "AnchoredCategorySeriesView", "BarSeriesView", "IBucketizer", "CategoryBucketCalculator", "AnchoredCategoryBucketCalculator", "BarBucketCalculator", "RangeCategoryBucketCalculator", "HorizontalAnchoredCategorySeries", "PointSeries", "PointSeriesView", "IHasHighLowValueCategory", "RangeCategorySeries", "HorizontalRangeCategorySeries", "RangeAreaSeries", "RangeCategorySeriesView", "RangeAreaSeriesView", "RangeCategoryFramePreparer", "ValuesHolder", "HighLowValuesHolder", "DefaultHighLowValueProvider", "RangeColumnSeries", "RangeColumnSeriesView", "SplineSeriesBaseView", "SplineAreaSeriesView", "VerticalAxisLabelPanel", "VerticalAxisLabelPanelView", "AreaSeries", "AreaSeriesView", "Frame", "CategoryFrame", "SingleValuesHolder", "DefaultSingleValueProvider", "PreparationParams", "CategoryLineRasterizer", "ColumnSeries", "ColumnSeriesView", "DefaultSupportsMarkers", "DefaultProvidesViewport", "DefaultSupportsErrorBars", "LineSeries", "LineSeriesView", "SplineSeriesBase", "SplineAreaSeries", "SplineSeries", "SplineSeriesView", "StepAreaSeries", "StepAreaSeriesView", "StepLineSeries", "StepLineSeriesView", "WaterfallSeries", "WaterfallSeriesView", "MarkerTemplates", "DataSourceManager", "BrushSelectionMode", "IndicatorDisplayType", "TimeAxisDisplayType", "ChartAxisRangeChangedEventArgs", "DataChartAxisRangeChangedEventHandler", "FinancialSeries", "FinancialIndicator", "StrategyBasedIndicator", "AbsoluteVolumeOscillatorIndicator", "IndicatorCalculationStrategy", "AbsoluteVolumeOscillatorIndicatorStrategy", "AccumulationDistributionIndicator", "StreamingIndicatorCalculationStrategy", "AccumulationDistributionIndicatorStrategy", "AverageDirectionalIndexIndicator", "AverageDirectionalIndexIndicatorStrategy", "AverageTrueRangeIndicator", "AverageTrueRangeIndicatorStrategy", "FinancialOverlay", "BollingerBandsOverlay", "FinancialBucketCalculator", "BollingerBandsBucketCalculator", "FinancialSeriesView", "BollingerBandsOverlayView", "BollingerBandWidthIndicator", "BollingerBandWidthIndicatorStrategy", "ChaikinOscillatorIndicator", "ChaikinOscillatorIndicatorStrategy", "ChaikinVolatilityIndicator", "ChaikinVolatilityIndicatorStrategy", "CommodityChannelIndexIndicator", "CommodityChannelIndexIndicatorStrategy", "CustomIndicator", "CustomIndicatorStrategy", "PriceChannelOverlayView", "DetrendedPriceOscillatorIndicator", "DetrendedPriceOscillatorIndicatorStrategy", "EaseOfMovementIndicator", "EaseOfMovementIndicatorStrategy", "FastStochasticOscillatorIndicator", "FastStochasticOscillatorIndicatorStrategy", "FinancialIndicatorBucketCalculator", "FinancialIndicatorView", "ForceIndexIndicator", "ForceIndexIndicatorStrategy", "FullStochasticOscillatorIndicator", "FullStochasticOscillatorIndicatorStrategy", "PercentKCalculationStrategy", "IndicatorRenderer", "ItemwiseIndicatorCalculationStrategy", "ItemwiseStrategyBasedIndicator", "ItemwiseStrategyCalculationStrategy", "MarketFacilitationIndexIndicator", "MarketFacilitationIndexIndicatorStrategy", "MassIndexIndicator", "MassIndexIndicatorStrategy", "MedianPriceIndicator", "MedianPriceIndicatorStrategy", "MoneyFlowIndexIndicator", "MoneyFlowIndexIndicatorStrategy", "MovingAverageConvergenceDivergenceIndicator", "MovingAverageConvergenceDivergenceIndicatorStrategy", "NegativeVolumeIndexIndicator", "NegativeVolumeIndexIndicatorStrategy", "OnBalanceVolumeIndicator", "OnBalanceVolumeIndicatorStrategy", "PercentagePriceOscillatorIndicator", "PercentagePriceOscillatorIndicatorStrategy", "PercentageVolumeOscillatorIndicator", "PercentageVolumeOscillatorIndicatorStrategy", "PositiveVolumeIndexIndicator", "PositiveVolumeIndexIndicatorStrategy", "PriceChannelOverlay", "PriceChannelBucketCalculator", "PriceVolumeTrendIndicator", "PriceVolumeTrendIndicatorStrategy", "RateOfChangeAndMomentumIndicator", "RateOfChangeAndMomentumIndicatorStrategy", "RelativeStrengthIndexIndicator", "RelativeStrengthIndexIndicatorStrategy", "SlowStochasticOscillatorIndicator", "SlowStochasticOscillatorIndicatorStrategy", "StandardDeviationIndicator", "StandardDeviationIndicatorStrategy", "StochRSIIndicator", "StochRSIIndicatorStrategy", "TRIXIndicator", "TRIXIndicatorStrategy", "TypicalPriceIndicator", "TypicalPriceIndicatorStrategy", "UltimateOscillatorIndicator", "UltimateOscillatorIndicatorCalculationStrategy", "WeightedCloseIndicator", "WeightedCloseIndicatorStrategy", "WilliamsPercentRIndicator", "WilliamsPercentRIndicatorStrategy", "LegendBaseViewManager", "LegendBase", "ScaleLegend", "LegendBaseView", "ScaleLegendView", "GradientData", "GradientStopData", "PieChartViewManager", "HighDensityScatterSeries", "MouseMoveThunk", "ScatterMouseOverEventArgs", "ProgressiveLoadStatusEventArgs", "HighDensityScatterSeriesView", "KDTree2D", "KNearestResults", "KNearestResult", "KDTreeThunk", "SearchArgs", "KDTreeNode2D", "SearchData", "PointData", "ScatterLineSeries", "ScatterLineSeriesView", "SeriesViewerComponentsForView", "SeriesViewerComponentsFromView", "SeriesViewer", "XamDataChart", "SeriesViewerView", "XamDataChartView", "ChartCollection", "ChartContentManager", "ContentInfo", "ChartContentType", "DataContext", "PieSliceDataContext", "LabelPanelArranger", "LabelPanelsArrangeState", "LegendTemplates", "Marker", "CollisionAvoidanceType", "NumericMarkerManager", "CategoryMarkerManager", "MarkerManagerBucket", "PathRenderer", "NaNSegmenter", "IFlattener", "DefaultFlattener", "RenderSurface", "SeriesCollection", "SeriesComponentsForView", "SeriesComponentsFromView", "SeriesRenderingArguments", "SeriesRenderer$2", "IFastItemsSourceProvider", "SyncLink", "FastItemsSourceReference", "SyncSettings", "SyncSettingsConverter", "SyncLinkManager", "SyncManager", "DefaultCategoryTrendlineHost", "DefaultCategoryTrendlinePreparer", "TrendResolutionParams", "TrendFitCalculator", "TrendAverageCalculator", "PolarTrendLineManager", "RadialTrendLineManager", "ScatterTrendLineManager", "SortingTrendLineManager", "AxisLabelsLocation", "CategoryMode", "AxisOrientation", "GridMode", "LabelsPosition", "MarkerType", "OthersCategoryType", "PriceDisplayType", "SplineType", "WindowMode", "WindowResponse", "ErrorBarSettingsBase", "CategoryErrorBarSettings", "EnableErrorBars", "ErrorBarsHelper", "ScatterErrorBarSettings", "AxisRangeChangedEventArgs", "AxisRangeChangedEventHandler", "DataChartMouseButtonEventArgs", "DataChartMouseButtonEventHandler", "DataChartLegendMouseButtonEventArgs", "DataChartLegendMouseButtonEventHandler", "ChartMouseEventArgs", "DataChartMouseEventHandler", "ChartLegendMouseEventArgs", "DataChartLegendMouseEventHandler", "ChartCursorEventArgs", "DataChartCursorEventHandler", "FinancialEventArgs", "FinancialEventHandler", "PropertyUpdatedEventArgs", "PropertyUpdatedEventHandler", "SliceClickEventArgs", "SliceClickEventHandler", "FinancialPriceSeries", "FinancialPriceBucketCalculator", "FinancialPriceSeriesView", "FinancialCalculationDataSource", "FinancialCalculationSupportingCalculations", "SupportingCalculation$1", "SupportingCalculationStrategy", "ColumnSupportingCalculation", "ProvideColumnValuesStrategy", "DataSourceSupportingCalculation", "CalculatedColumn", "ItemLegend", "ItemLegendView", "Legend", "LegendView", "PieChartBase", "PieLabel", "IndexCollection", "IndexCollectionTypeConverter", "PieChartBaseView", "Slice", "SliceView", "XamPieChart", "XamPieChartView", "PolarBase", "PolarLineSeriesBase", "PolarAreaSeries", "PolarBaseView", "PolarLineSeriesBaseView", "PolarAreaSeriesView", "PolarAxisInfoCache", "ScatterFrameBase$1", "PolarFrame", "AngleRadiusPair", "PolarLinePlanner", "PolarLineSeries", "PolarLineSeriesView", "PolarScatterSeries", "PolarScatterSeriesView", "PolarSplineAreaSeries", "PolarSplineAreaSeriesView", "PolarSplineSeries", "PolarSplineSeriesView", "RadialBase", "AnchoredRadialSeries", "RadialBucketCalculator", "AnchoredRadialBucketCalculator", "RadialBaseView", "AnchoredRadialSeriesView", "RadialFrame", "RadialColumnSeries", "RadialColumnSeriesView", "RadialLineSeries", "RadialLineSeriesView", "RadialPieSeries", "SliceCoords", "RadialPieSeriesView", "ScatterAxisInfoCache", "DictInterpolator$3", "OwnedPoint", "ScatterFrame", "ScatterSeries", "ScatterSeriesView", "CoercionInfo", "SeriesViewerSurfaceViewer", "OverviewPlusDetailViewportHost", "SeriesViewerViewManager", "Bezier", "BezierPointComparison", "BezierOp", "BezierPoint", "ChartVisualData", "SeriesVisualDataList", "SeriesVisualData", "MarkerVisualDataList", "MarkerVisualData", "AxisVisualDataList", "AxisVisualData", "PrimitiveVisualDataList", "AxisLabelVisualDataList", "AxisLabelVisualData", "LabelAppearanceData", "PrimitiveAppearanceData", "GetPointsSettings", "PrimitiveVisualData", "RectangleVisualData", "ShapeTags", "LineVisualData", "PolyLineVisualData", "PolygonVisualData", "PathVisualData", "GeometryData", "PathGeometryData", "LineGeometryData", "RectangleGeometryData", "EllipseGeometryData", "PathFigureData", "SegmentData", "LineSegmentData", "PolylineSegmentData", "ArcSegmentData", "AppearanceHelper", "IDetectsCollisions", "CollisionAvoider", "ColumnUtil", "IPool$1", "IIndexedPool$1", "Pool$1", "IHashPool$2", "HashPool$2", "SafeEnumerable", "SafeReadOnlyDoubleCollection", "SafeSortedReadOnlyDoubleCollection", "SortedListView$1", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise", "BrushCollection", "EventProxy", "DOMEventProxy", "TrendCalculators", "TrendLineType", "UnknownValuePlotting", "ErrorBarCalculatorReference", "ErrorBarCalculatorType", "IErrorBarCalculator", "MouseWheelHandler", "GestureHandler", "TouchHandler", "ContactHandler", "MouseHandler", "MouseOverHandler", "KeyHandler", "IFastItemColumnInternal", "IFastItemColumnPropertyName", "IFastItemColumn$1", "FastItemColumn", "FastItemDateTimeColumn", "FastItemObjectColumn", "FastItemIntColumn", "FastItemsSource", "ColumnReference", "FastItemsSourceEventAction", "FastItemsSourceEventArgs", "FastReflectionHelper", "IRenderer", "RectChangedEventArgs", "RectChangedEventHandler", "CanvasRenderScheduler", "CanvasViewRenderer", "GradientDirection", "RenderingContext", "DependencyObjectNotifier", "InteractionState", "IOverviewPlusDetailControl", "ISchedulableRender", "NavigationSettings", "OverviewPlusDetailPaneMode", "PropertyChangedEventArgs$1", "XamOverviewPlusDetailPane", "XamOverviewPlusDetailPaneView", "XamOverviewPlusDetailPaneViewManager", "XamMultiScaleTileSource", "MapTileSource", "BingMapsTileSource", "CloudMadeTileSource", "OpenStreetMapTileSource", "ArrayUtil", "Clipper", "EdgeClipper", "LeftClipper", "BottomClipper", "RightClipper", "TopClipper", "InterpolationMode", "ColorUtil", "DoubleAnimator", "Extensions", "Flattener", "SpiralTodo", "GeometryUtil", "Numeric", "LeastSquaresFit", "MathUtil", "PathFigureUtil", "PointCollectionUtil", "PolygonUtil", "PolySimplification", "RearrangedList$1", "RectUtil", "ISmartPlaceable", "SmartPlaceableWrapper$1", "SmartPosition", "SmartPlacer", "StackPool$1", "Tile", "WriteableBitmap", "IMapRenderDeferralHandler", "XamMultiScaleImage", "Pair$2", "IEasingFunction", "XamMultiScaleImageView"]);
$.ig.util.extCopy($.ig.ArrayUtil, [
    [
        [$.ig.ShapefileConverter],
        ["shuffle$1", "insertionIndex$1", "insertionIndex$11111", "binarySearch$1"]
    ]
]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [
    [
        [$.ig.ShapefileConverter],
        ["flattenTo", "getBounds2", "clipTo"]
    ],
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["getBounds", "getBounds11", "getCentroid", "toPointCollection", "toPointList"]
    ]
]);
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["asQueryable"]
    ]
]);
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));