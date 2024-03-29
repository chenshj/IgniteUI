﻿/*
 * Infragistics.Web.ClientUI infragistics.chart_categorychart.js 12.2.20122.1021
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
$.ig.util.defType("Stack$1", "Object", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.Array()
}, a: null, c: function (b) {
    this.a.add(b)
}, d: function () {
    if (this.a.length < 1) {
        return null
    }
    return this.a[this.a.length - 1]
}, e: function () {
    var b = this.a[this.a.length - 1];
    this.a.removeAt(this.a.length - 1);
    return b
}, b: function () {
    return this.a.length
}, g: function () {
    this.a.clear()
}, h: function (b) {
    return this.a.contains(b)
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
                            this.$b = this.$this.a.getEnumerator();
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
}, $type: new $.ig.Type("Stack$1", $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])}, true);
$.ig.util.defType("PolyBezierSegment", "PathSegment", {init: function () {
    $.ig.PathSegment.prototype.init.call(this);
    this.d(new $.ig.PointCollection(0))
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, a: function () {
    return $.ig.PathSegmentType.prototype.polyBezier
}, $type: new $.ig.Type("PolyBezierSegment", $.ig.PathSegment.prototype.$type)}, true);
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
$.ig.util.defType("UnknownValuePlotting", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("UnknownValuePlotting", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ArrayUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, shuffle$1: function (a) {
    if (this != null) {
        var f = new $.ig.Random();
        for (var g = this.count() - 1; g > 0; --g) {
            var h = f.b(g);
            var i = this.item(g);
            this.item(g, this.item(h));
            this.item(h, i)
        }
    }
}, insertionIndex$1: function (a, g) {
    var h = -1;
    var i = 0;
    var j = this.count();
    while (h == -1) {
        if (j <= i) {
            h = i
        } else {
            var k = $.ig.intDivide((i + j), 2);
            switch (Math.sign(g.compareTo(this.item(k)))) {
                case -1:
                    j = k;
                    break;
                case 0:
                    h = k;
                    break;
                case 1:
                    i = k + 1;
                    break
            }
        }
    }
    return h
}, insertionIndex$11111: function (a, h, i) {
    var j = -1;
    var k = 0;
    var l = this.count();
    while (j == -1) {
        if (l <= k) {
            j = k
        } else {
            var m = $.ig.intDivide((k + l), 2);
            switch (Math.sign(h(i, this.item(m)))) {
                case -1:
                    l = m;
                    break;
                case 0:
                    j = m;
                    break;
                case 1:
                    k = m + 1;
                    break
            }
        }
    }
    return j
}, binarySearch$1: function (a, g) {
    var h = 0;
    var i = this.count() - 1;
    while (h <= i) {
        var j = (h + ((i - h) >> 1));
        var k = g(this.item(j));
        if (k < 0) {
            i = j - 1
        } else {
            if (k > 0) {
                h = j + 1
            } else {
                return j
            }
        }
    }
    return ~h
}, $type: new $.ig.Type("ArrayUtil", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Clipper", "Object", {h: function (c) {
    if (arguments.length === 1) {
        if (this.b != null) {
            this.b.clear()
        }
        this.b = null;
        this.c = c;
        var d = this.c;
        if (this.d != null) {
            this.d.h(d);
            d = this.d;
            this.b = this.d
        }
        if (this.e != null) {
            this.e.h(d);
            d = this.e;
            this.e.__nextClipper = this.b;
            this.b = this.e
        }
        if (this.f != null) {
            this.f.h(d);
            d = this.f;
            this.f.__nextClipper = this.b;
            this.b = this.f
        }
        if (this.g != null) {
            this.g.h(d);
            d = this.g;
            this.g.__nextClipper = this.b;
            this.b = this.g
        }
        this.a = d;
        return c
    } else {
        return this.c
    }
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, init: function (f, d, e) {
    if (f > 0) {
        switch (f) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    var c = this;
    $.ig.Object.prototype.init.call(this);
    this.d = (function () {
        var a = new $.ig.LeftClipper();
        a.p = d.left();
        a.f = e;
        return a
    }());
    this.e = (function () {
        var a = new $.ig.BottomClipper();
        a.p = d.bottom();
        a.f = e;
        return a
    }());
    this.f = (function () {
        var a = new $.ig.RightClipper();
        a.p = d.right();
        a.f = e;
        return a
    }());
    this.g = (function () {
        var a = new $.ig.TopClipper();
        a.p = d.top();
        a.f = e;
        return a
    }())
}, init1: function (l, g, h, i, j, k) {
    var f = this;
    $.ig.Object.prototype.init.call(this);
    this.d = !isNaN(g) ? (function () {
        var a = new $.ig.LeftClipper();
        a.p = g;
        a.f = k;
        return a
    }()) : null;
    this.e = !isNaN(h) ? (function () {
        var a = new $.ig.BottomClipper();
        a.p = h;
        a.f = k;
        return a
    }()) : null;
    this.f = !isNaN(i) ? (function () {
        var a = new $.ig.RightClipper();
        a.p = i;
        a.f = k;
        return a
    }()) : null;
    this.g = !isNaN(j) ? (function () {
        var a = new $.ig.TopClipper();
        a.p = j;
        a.f = k;
        return a
    }()) : null
}, l: function (b) {
    this.a.add(b)
}, i: function (b) {
    if (arguments.length === 1) {
        if (this.d != null) {
            this.d.f = b
        }
        if (this.e != null) {
            this.e.f = b
        }
        if (this.f != null) {
            this.f.f = b
        }
        if (this.g != null) {
            this.g.f = b
        }
        return b
    } else {
        return(this.d == null || this.d.f) && (this.e == null || this.e.f) && (this.f == null || this.f.f) && (this.g == null || this.g.f)
    }
}, $type: new $.ig.Type("Clipper", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("EdgeClipper", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.b = true;
    this.g = false
}, h: function (b) {
    if (arguments.length === 1) {
        if (this.a != b) {
            this.b = true;
            this.a = b
        }
        return b
    } else {
        return this.a
    }
}, a: null, __nextClipper: null, nextClipper: function (b) {
    if (arguments.length === 1) {
        this.__nextClipper = b;
        return b
    } else {
        return this.__nextClipper
    }
}, b: null, c: null, d: null, e: null, f: null, g: null, add: function (c) {
    var d = this.m(c);
    if (this.b) {
        this.b = false;
        this.c = c
    } else {
        if (true) {
            if (d) {
                if (!this.e) {
                    this.h().add(this.n(this.d, c))
                } else {
                    if (!this.f && !this.g) {
                        this.h().add(this.d);
                        this.g = true
                    }
                }
                this.h().add(c)
            } else {
                if (this.e) {
                    if (!this.f && !this.g) {
                        this.h().add(this.d);
                        this.g = true
                    }
                    this.h().add(this.n(this.d, c))
                }
            }
        }
    }
    this.d = c;
    this.e = d
}, clear: function () {
    if (this.f && !this.b) {
        this.add(this.c)
    }
    if (this.__nextClipper != null) {
        this.__nextClipper.clear()
    }
    this.b = true;
    this.g = false
}, m: function (b) {
}, n: function (c, d) {
}, getEnumerator: function () {
    return null
}, isReadOnly: function () {
    return false
}, count: function () {
    return 0
}, remove: function (b) {
    return false
}, removeAt: function (b) {
}, o: function (c, d) {
}, contains: function (b) {
    return false
}, _item: null, item: function (d, c) {
    if (arguments.length === 2) {
        this._item = c;
        return c
    } else {
        return{__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
}, insert: function (c, d) {
}, indexOf: function (b) {
    return -1
}, $type: new $.ig.Type("EdgeClipper", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize($.ig.Point.prototype.$type)])}, true);
$.ig.util.defType("LeftClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__x >= this.p
}, n: function (c, d) {
    return{__x: this.p, __y: c.__y + (d.__y - c.__y) * (this.p - c.__x) / (d.__x - c.__x), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("LeftClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("BottomClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__y <= this.p
}, n: function (c, d) {
    return{__x: c.__x + (d.__x - c.__x) * (this.p - c.__y) / (d.__y - c.__y), __y: this.p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("BottomClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("RightClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__x <= this.p
}, n: function (c, d) {
    return{__x: this.p, __y: c.__y + (d.__y - c.__y) * (this.p - c.__x) / (d.__x - c.__x), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("RightClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("TopClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__y >= this.p
}, n: function (c, d) {
    return{__x: c.__x + (d.__x - c.__x) * (this.p - c.__y) / (d.__y - c.__y), __y: this.p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("TopClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("Flattener", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, b: function (z, A, B, C, D) {
    var y = this;
    if (isNaN(D) || D <= 0) {
        D = 1
    }
    var E = new $.ig.List$1(Number, 0);
    var F = new $.ig.Stack$1($.ig.SpiralTodo.prototype.$type);
    var G = (C - A) / (B - z);
    var H = A - G * z;
    var I = G * G;
    var J = H * H;
    var K = H * G;
    F.c((function () {
        var a = new $.ig.SpiralTodo();
        a.a = 0;
        a.b = 1;
        return a
    }()));
    while (F.b() != 0) {
        var L = F.e();
        var M = A + L.a * (C - A);
        var N = z + L.a * (B - z);
        var O = N * N;
        var P = O * N;
        var Q = A + L.b * (C - A);
        var R = z + L.b * (B - z);
        var S = R * R;
        var T = S * R;
        var U;
        if (G == 0) {
            U = J * (R - N) / 2 + K * (S - O) / 2 + I * (T - P) / 6
        } else {
            U = (Math.pow(H + G * R, 3) - Math.pow(H + G * N, 3)) / (6 * G)
        }
        var V = 0.5 * M * Q * Math.sin(R - N);
        if (U - V > D) {
            var W = 0.5 * (L.a + L.b);
            F.c((function () {
                var a = new $.ig.SpiralTodo();
                a.a = W;
                a.b = L.b;
                return a
            }()));
            F.c((function () {
                var a = new $.ig.SpiralTodo();
                a.a = L.a;
                a.b = W;
                return a
            }()))
        } else {
            E.add(L.a)
        }
    }
    E.add(1);
    return E
}, c: function (f, g, h, i) {
    var j = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    $.ig.Flattener.prototype.d(j, g, h, 0, f - 1, i);
    return j
}, d: function (h, i, j, k, l, m) {
    var g = this;
    return $.ig.Flattener.prototype.f(h, function (a) {
        return a
    }, i, j, k, l, m)
}, e: function (i, j, k, l, m, n, o) {
    var h = this;
    return $.ig.Flattener.prototype.f(i, function (a) {
        return j.item(a)
    }, k, l, m, n, o)
}, f: function (l, m, n, o, p, q, r) {
    if (p > q) {
        return l
    }
    var s = n(m(p));
    var t = o(m(p));
    while ((isNaN(s) || isNaN(t)) && p < q) {
        ++p;
        s = n(m(p));
        t = o(m(p))
    }
    var u = n(m(q));
    var v = o(m(q));
    while ((isNaN(u) || isNaN(v)) && p < q) {
        --q;
        u = n(m(q));
        v = o(m(q))
    }
    if (p == q) {
        l.add(m(p));
        return l
    }
    l.add(m(p));
    $.ig.Flattener.prototype.n(l, m, n, o, p, q, r);
    l.add(m(q));
    return l
}, g: function (k, l, m, n, o, p) {
    if (n > o) {
        return k
    }
    var q = l[n];
    var r = m[n];
    while ((isNaN(q) || isNaN(r)) && n < o) {
        ++n;
        q = l[n];
        r = m[n]
    }
    var s = l[o];
    var t = m[o];
    while ((isNaN(s) || isNaN(t)) && n < o) {
        --o;
        s = l[o];
        t = m[o]
    }
    if (n == o) {
        k.add(n);
        return k
    }
    k.add(n);
    $.ig.Flattener.prototype.l(k, l, m, n, o, p);
    k.add(o);
    return k
}, h: function (h, i, j, k, l) {
    var m;
    var n;
    if (j) {
        m = 0;
        n = 1
    } else {
        if (k) {
            m = 0;
            n = 2
        } else {
            m = 2;
            n = 3
        }
    }
    return $.ig.Flattener.prototype.i(h, i, m, n, l)
}, i: function (g, h, i, j, k) {
    var l = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    $.ig.Flattener.prototype.k(l, h, i, j, 0, g - 1, k);
    return l
}, j: function (j, k, l, m, n, o, p) {
    var q;
    var r;
    if (l) {
        q = 0;
        r = 1
    } else {
        if (m) {
            q = 0;
            r = 2
        } else {
            q = 2;
            r = 3
        }
    }
    return $.ig.Flattener.prototype.k(j, k, q, r, n, o, p)
}, k: function (n, o, p, q, r, s, t) {
    if (r > s) {
        return n
    }
    var u = o.__inner[r];
    var v, w;
    v = u[p];
    w = u[q];
    while ((isNaN(v) || isNaN(w)) && r < s) {
        ++r;
        u = o.__inner[r];
        v = u[p];
        w = u[q]
    }
    var x = o.__inner[s];
    var y, z;
    y = x[p];
    z = x[q];
    while ((isNaN(y) || isNaN(z)) && r < s) {
        --s;
        x = o.__inner[s];
        y = x[p];
        z = x[q]
    }
    if (r == s) {
        n.add(r);
        return n
    }
    n.add(r);
    $.ig.Flattener.prototype.m(n, o, p, q, r, s, t);
    n.add(s);
    return n
}, l: function (A, F, G, H, I, J) {
    var K = F[H];
    var L = G[H];
    while ((isNaN(K) || isNaN(L)) && H < I) {
        ++H;
        K = F[H];
        L = G[H]
    }
    var M = F[I];
    var N = G[I];
    while ((isNaN(M) || isNaN(N)) && H < I) {
        --I;
        M = F[I];
        N = G[I]
    }
    if (H + 1 >= I) {
        return
    }
    var O = -1;
    var P = J * J;
    var Q;
    var R;
    Q = M - K;
    R = N - L;
    var S = Q * Q + R * R;
    if (S == 0) {
        for (var T = H + 1; T < I; ++T) {
            var U = F[T];
            var V = G[T];
            if (isNaN(U) || isNaN(V)) {
                continue
            }
            Q = M - U;
            R = N - V;
            var W = Q * Q + R * R;
            if (W >= P) {
                P = W;
                O = T
            }
        }
    } else {
        var X = M - K;
        var Y = N - L;
        for (var Z = H + 1; Z < I; ++Z) {
            var aa = F[Z];
            var ab = G[Z];
            if (isNaN(aa) || isNaN(ab)) {
                continue
            }
            var ac = NaN;
            var ad = F[Z] - K;
            var B = G[Z] - L;
            var C = X * ad + Y * B;
            if (C <= 0) {
                Q = K - aa;
                R = L - ab;
                ac = Q * Q + R * R
            } else {
                var D = X * X + Y * Y;
                if (D <= C) {
                    Q = M - aa;
                    R = N - ab;
                    ac = Q * Q + R * R
                } else {
                    var E = C / D;
                    Q = K + E * X - aa;
                    R = L + E * Y - ab;
                    ac = Q * Q + R * R
                }
            }
            if (ac >= P) {
                P = ac;
                O = Z
            }
        }
    }
    if (O != -1) {
        $.ig.Flattener.prototype.l(A, F, G, H, O, J);
        A.add(O);
        $.ig.Flattener.prototype.l(A, F, G, O, I, J)
    }
    return
}, m: function (A, K, L, M, N, O, P) {
    var Q = K.__inner[N];
    var R, S;
    R = Q[L];
    S = Q[M];
    while ((isNaN(R) || isNaN(S)) && N < O) {
        ++N;
        Q = K.__inner[N];
        R = Q[L];
        S = Q[M]
    }
    var T = K.__inner[O];
    var U, V;
    U = T[L];
    V = T[M];
    while ((isNaN(U) || isNaN(V)) && N < O) {
        --O;
        T = K.__inner[O];
        U = T[L];
        V = T[M]
    }
    if (N + 1 >= O) {
        return
    }
    var W = -1;
    var X = P * P;
    var Y;
    var Z;
    Y = U - R;
    Z = V - S;
    var aa = Y * Y + Z * Z;
    if (aa == 0) {
        for (var ab = N + 1; ab < O; ++ab) {
            var ac = K.__inner[ab];
            var ad, ae;
            ad = ac[L];
            ae = ac[M];
            if (isNaN(ad) || isNaN(ae)) {
                continue
            }
            Y = U - ad;
            Z = V - ae;
            var af = Y * Y + Z * Z;
            if (af >= X) {
                X = af;
                W = ab
            }
        }
    } else {
        var ag = U - R;
        var ah = V - S;
        for (var ai = N + 1; ai < O; ++ai) {
            var B = K.__inner[ai];
            var C, D;
            C = B[L];
            D = B[M];
            if (isNaN(C) || isNaN(D)) {
                continue
            }
            var E = NaN;
            var F = C - R;
            var G = D - S;
            var H = ag * F + ah * G;
            if (H <= 0) {
                Y = R - C;
                Z = S - D;
                E = Y * Y + Z * Z
            } else {
                var I = ag * ag + ah * ah;
                if (I <= H) {
                    Y = U - C;
                    Z = V - D;
                    E = Y * Y + Z * Z
                } else {
                    var J = H / I;
                    Y = R + J * ag - C;
                    Z = S + J * ah - D;
                    E = Y * Y + Z * Z
                }
            }
            if (E >= X) {
                X = E;
                W = ai
            }
        }
    }
    if (W != -1) {
        $.ig.Flattener.prototype.m(A, K, L, M, N, W, P);
        A.add(W);
        $.ig.Flattener.prototype.m(A, K, L, M, W, O, P)
    }
    return
}, n: function (A, E, F, G, H, I, J) {
    var K = F(E(H));
    var L = G(E(H));
    while ((isNaN(K) || isNaN(L)) && H < I) {
        ++H;
        K = F(E(H));
        L = G(E(H))
    }
    var M = F(E(I));
    var N = G(E(I));
    while ((isNaN(M) || isNaN(N)) && H < I) {
        --I;
        M = F(E(I));
        N = G(E(I))
    }
    if (H + 1 >= I) {
        return
    }
    var O = -1;
    var P = J;
    var Q = $.ig.MathUtil.prototype.f(M - K, N - L);
    if (Q == 0) {
        for (var R = H + 1; R < I; ++R) {
            var S = F(E(R));
            var T = G(E(R));
            if (isNaN(S) || isNaN(T)) {
                continue
            }
            var U = $.ig.MathUtil.prototype.f(M - S, N - T);
            if (U >= P) {
                P = U;
                O = R
            }
        }
    } else {
        var V = M - K;
        var W = N - L;
        for (var X = H + 1; X < I; ++X) {
            var Y = F(E(X));
            var Z = G(E(X));
            if (isNaN(Y) || isNaN(Z)) {
                continue
            }
            var aa = NaN;
            var ab = F(E(X)) - K;
            var ac = G(E(X)) - L;
            var B = V * ab + W * ac;
            if (B <= 0) {
                aa = $.ig.MathUtil.prototype.f(K - Y, L - Z)
            } else {
                var C = V * V + W * W;
                if (C <= B) {
                    aa = $.ig.MathUtil.prototype.f(M - Y, N - Z)
                } else {
                    var D = B / C;
                    aa = $.ig.MathUtil.prototype.f(K + D * V - Y, L + D * W - Z)
                }
            }
            if (aa >= P) {
                P = aa;
                O = X
            }
        }
    }
    if (O != -1) {
        $.ig.Flattener.prototype.n(A, E, F, G, H, O, J);
        A.add(E(O));
        $.ig.Flattener.prototype.n(A, E, F, G, O, I, J)
    }
    return
}, o: function (A, C, D) {
    var E = new $.ig.PointCollection(0);
    if (A < 5) {
        for (var F = 0; F < A; ++F) {
            E.add({__x: C(F), __y: D(F), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
        return E
    }
    E.add({__x: C(0), __y: D(0), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    var G = A - 1;
    var H;
    var I = {__x: C(0), __y: D(0), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var J = {__x: C(0 + 1), __y: D(0 + 1), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var K = {__x: C(0 + 2), __y: D(0 + 2), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var L;
    var M;
    var N = {__x: J.__x - I.__x, __y: J.__y - I.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var O = $.ig.MathUtil.prototype.f(N.__x, N.__y);
    var P = {__x: K.__x - J.__x, __y: K.__y - J.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var Q = $.ig.MathUtil.prototype.f(P.__x, P.__y);
    var R;
    var S;
    var T = 0.1;
    var U = 0.3;
    R = {__x: K.__x - I.__x, __y: K.__y - I.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var V = $.ig.MathUtil.prototype.f(R.__x, R.__y);
    R.__x /= V;
    R.__y /= V;
    S = 0.5 + (N.__x * P.__x + N.__y * P.__y) / (2 * O * Q);
    E.add({__x: J.__x - R.__x * (T + U * S) * O, __y: J.__y - R.__y * (T + U * S) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    E.add(J);
    for (var W = 1; W < G - 1; ++W) {
        H = I;
        I = J;
        J = K;
        K = {__x: C(W + 2), __y: D(W + 2), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        L = N;
        M = O;
        N = P;
        O = Q;
        P = {__x: K.__x - J.__x, __y: K.__y - J.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        Q = $.ig.MathUtil.prototype.f(P.__x, P.__y);
        var X = R;
        var Y = S;
        R = {__x: K.__x - I.__x, __y: K.__y - I.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var Z = $.ig.MathUtil.prototype.f(R.__x, R.__y);
        R.__x /= Z;
        R.__y /= Z;
        S = 0.5 + (N.__x * P.__x + N.__y * P.__y) / (2 * O * Q);
        E.add({__x: I.__x + X.__x * (T + U * Y) * O, __y: I.__y + X.__y * (T + U * Y) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        E.add({__x: J.__x - R.__x * (T + U * S) * O, __y: J.__y - R.__y * (T + U * S) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        E.add(J)
    }
    H = I;
    I = J;
    J = K;
    L = N;
    M = O;
    N = P;
    O = Q;
    var aa = R;
    var B = S;
    E.add({__x: I.__x + aa.__x * (T + U * B) * O, __y: I.__y + aa.__y * (T + U * B) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    E.add(J);
    return E
}, $type: new $.ig.Type("Flattener", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SpiralTodo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, $type: new $.ig.Type("SpiralTodo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Numeric", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (j, k, l, m, n) {
    var o;
    var p = j.count();
    var q = new Array(p);
    if (k.__inner[0] == 0) {
        return false
    }
    var r = k.__inner[0];
    n.__inner[0] = m.__inner[0] / (r);
    for (o = 1; o < p; o++) {
        q[o] = l.__inner[o - 1] / r;
        r = k.__inner[o] - j.__inner[o] * q[o];
        if (r == 0) {
            return false
        }
        n.__inner[o] = (m.__inner[o] - j.__inner[o] * n.__inner[o - 1]) / r
    }
    for (o = (p - 2); o >= 0; o--) {
        n.__inner[o] -= q[o + 1] * n.__inner[o + 1]
    }
    return true
}, b: function (y, z) {
    var A = y.getLength(0);
    var B = new Array(A);
    var C = new Array(A);
    var D = new Array(A);
    for (var E = 0; E < A; E++) {
        D[E] = 0
    }
    for (var F = 0; F < A; F++) {
        var G = 0;
        var H = 0;
        var I = 0;
        for (var J = 0; J < A; J++) {
            if (D[J] != 1) {
                for (var K = 0; K < A; K++) {
                    if (D[K] == 0) {
                        if (Math.abs(y[J][K]) >= G) {
                            G = Math.abs(y[J][K]);
                            H = J;
                            I = K
                        }
                    }
                }
            }
        }
        ++(D[I]);
        if (H != I) {
            for (var L = 0; L < A; L++) {
                var M = y[H][L];
                y[H][L] = y[I][L];
                y[I][L] = M
            }
            var N = z[H];
            z[H] = z[I];
            z[I] = N
        }
        C[F] = H;
        B[F] = I;
        if (y[I][I] == 0) {
            return false
        }
        var O = 1 / y[I][I];
        y[I][I] = 1;
        for (var P = 0; P < A; P++) {
            y[I][P] *= O
        }
        z[I] *= O;
        for (var Q = 0; Q < A; Q++) {
            if (Q != I) {
                var R = y[Q][I];
                y[Q][I] = 0;
                for (var S = 0; S < A; S++) {
                    y[Q][S] -= y[I][S] * R
                }
                z[Q] -= z[I] * R
            }
        }
    }
    for (var T = A - 1; T >= 0; T--) {
        if (C[T] != B[T]) {
            for (var U = 0; U < A; U++) {
                var V = y[U][C[T]];
                y[U][C[T]] = y[U][B[T]];
                y[U][B[T]] = V
            }
        }
    }
    return true
}, c: function (i, j, k, l, m) {
    var n = new $.ig.List$1(Number, 0);
    for (var o = 0; o < i; ++o) {
        while (o < i && (isNaN(j(o)) || isNaN(k(o)))) {
            n.add(NaN);
            ++o
        }
        var p = o;
        while (o < i && !isNaN(j(o)) && !isNaN(k(o))) {
            ++o
        }
        --o;
        if (o - p > 0) {
            n.w($.ig.Numeric.prototype.d(p, o - p + 1, j, k, l, m))
        } else {
            for (; p <= o; ++p) {
                n.add(NaN)
            }
        }
    }
    return n.x()
}, d: function (h, i, j, k, l, m) {
    var g = this;
    return $.ig.Numeric.prototype.e(i, function (a) {
        return j(a + h)
    }, function (a) {
        return k(a + h)
    }, l, m)
}, e: function (n, o, p, q, r) {
    var s = new Array(n - 1);
    var t = new Array(n);
    t[0] = isNaN(q) ? 0 : -0.5;
    s[0] = isNaN(q) ? 0 : (3 / (o(1) - o(0))) * ((p(1) - p(0)) / (o(1) - o(0)) - q);
    for (var u = 1; u < n - 1; u++) {
        var v = (o(u) - o(u - 1)) / (o(u + 1) - o(u - 1));
        var w = v * t[u - 1] + 2;
        t[u] = (v - 1) / w;
        s[u] = (p(u + 1) - p(u)) / (o(u + 1) - o(u)) - (p(u) - p(u - 1)) / (o(u) - o(u - 1));
        s[u] = (6 * s[u] / (o(u + 1) - o(u - 1)) - v * s[u - 1]) / w
    }
    var x = isNaN(r) ? 0 : 0.5;
    var y = isNaN(r) ? 0 : (3 / (o(n - 1) - o(n - 2))) * (r - (p(n - 1) - p(n - 2)) / (o(n - 1) - o(n - 2)));
    t[n - 1] = (y - x * s[n - 2]) / (x * t[n - 2] + 1);
    for (var z = n - 2; z >= 0; z--) {
        t[z] = t[z] * t[z + 1] + s[z]
    }
    return t
}, f: function (k, l, m, n, o, p, q) {
    var r = n - l;
    var s = (n - k) / r;
    var t = (k - l) / r;
    return s * m + t * o + ((s * s * s - s) * p + (t * t * t - t) * q) * (r * r) / 6
}, g: function (k, l, m, n) {
    var o = new $.ig.PathFigureCollection();
    var p = 0;
    var q = -1;
    var r = NaN;
    var s = NaN;
    for (var t = 0; t < k; t++) {
        r = l(t);
        s = m(t);
        if (isNaN(r) || isNaN(s)) {
            q = t - 1;
            if (q - p > 0) {
                o.add($.ig.Numeric.prototype.h(p, q, l, m, n))
            }
            p = t + 1
        }
    }
    if (!isNaN(r) && !isNaN(s)) {
        q = k - 1
    }
    if (q - p > 0) {
        o.add($.ig.Numeric.prototype.h(p, q, l, m, n))
    }
    return o
}, h: function (B, G, H, I, J) {
    var A = this;
    J = 0.5 * $.ig.MathUtil.prototype.i(isNaN(J) ? 0.5 : J, 0, 1);
    var K = new $.ig.PathFigure();
    var L = G - B + 1;
    if (L < 2) {
        return K
    }
    if (L == 2) {
        K.__startPoint = {__x: H(B), __y: I(B), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var M = (function () {
            var a = new $.ig.LineSegment(1);
            a.d({__x: H(B + 1), __y: I(B + 1), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return a
        }());
        K.__segments.add(M);
        return K
    }
    var N = new $.ig.PolyBezierSegment();
    var O = H(B);
    var P = I(B);
    var Q = H(B + 1);
    var R = I(B + 1);
    while (Q == O && R == P && B + 1 <= G) {
        B++;
        Q = H(B + 1);
        R = I(B + 1)
    }
    var S = Q - O;
    var T = R - P;
    var U = Math.sqrt(S * S + T * T);
    for (var V = B + 1; V < G; ++V) {
        var W = H(V);
        var X = I(V);
        if (W == O && X == P) {
            continue
        }
        var Y = H(V + 1) - H(V - 1);
        var Z = I(V + 1) - I(V - 1);
        var aa = Y * Y + Z * Z;
        if (aa < 0.01) {
            Y = -(I(V + 1) - I(V));
            Z = H(V + 1) - H(V);
            aa = Y * Y + Z * Z
        }
        aa = Math.sqrt(aa);
        var ab = J * Math.sqrt((W - O) * (W - O) + (X - P) * (X - P));
        if (aa > 0.01) {
            N.d().add({__x: O + S * ab / U, __y: P + T * ab / U, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            N.d().add({__x: W - Y * ab / aa, __y: X - Z * ab / aa, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            N.d().add({__x: W, __y: X, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            O = W;
            P = X;
            S = Y;
            T = Z;
            U = aa
        }
    }
    var ac = G;
    var ad = H(ac);
    var ae = I(ac);
    var C = H(ac) - H(ac - 1);
    var D = I(ac) - I(ac - 1);
    var E = C * C + D * D;
    var F = J * Math.sqrt((ad - O) * (ad - O) + (ae - P) * (ae - P));
    N.d().add({__x: O + S * F / U, __y: P + T * F / U, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    N.d().add({__x: ad - C * F / E, __y: ae - D * F / E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    N.d().add({__x: ad, __y: ae, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    K.__startPoint = {__x: H(B), __y: I(B), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    K.__segments.add(N);
    return K
}, $type: new $.ig.Type("Numeric", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LeastSquaresFit", "Numeric", {i: function () {
    return $.ig.LeastSquaresFit.prototype.l() && $.ig.LeastSquaresFit.prototype.o() && $.ig.LeastSquaresFit.prototype.r() && $.ig.LeastSquaresFit.prototype.u() && $.ig.LeastSquaresFit.prototype.x() && $.ig.LeastSquaresFit.prototype.aa() && $.ig.LeastSquaresFit.prototype.ad() && $.ig.LeastSquaresFit.prototype.ag()
}, init: function () {
    $.ig.Numeric.prototype.init.call(this)
}, j: function (o, p, q) {
    var n = this;
    var r = 0;
    var s = 0;
    var t = 0;
    var u = 0;
    var v = 0;
    for (var w = 0; w < o; ++w) {
        var x = p(w);
        var y = q(w);
        if (!isNaN(x) && !isNaN(y)) {
            r += y;
            s += x * x;
            t += x;
            u += x * y;
            ++v
        }
    }
    if (v < 2) {
        return null
    }
    var z = (r * s - t * u) / (v * s - t * t);
    var A = (v * u - t * r) / (v * s - t * t);
    return(function () {
        var a = new Array();
        a.add(z);
        a.add(A);
        return a
    }())
}, k: function (c, d) {
    if (c.length != 2) {
        return NaN
    }
    return c[0] + c[1] * d
}, l: function () {
    var i = this;
    var j = new $.ig.Random();
    var m = new Array(2);
    for (var n = 0; n < m.length; ++n) {
        m[n] = 10 * j.a()
    }
    var o = new $.ig.List$1(Number, 0);
    var p = new $.ig.List$1(Number, 0);
    for (var q = -100; q < 100; ++q) {
        var r = q;
        var s = $.ig.LeastSquaresFit.prototype.k(m, r);
        if (!isNaN(s)) {
            o.add(r);
            p.add(s)
        }
    }
    var t = $.ig.LeastSquaresFit.prototype.j(o.count(), function (a) {
        return o.__inner[a]
    }, function (a) {
        return p.__inner[a]
    });
    for (var u = 0; u < m.length; ++u) {
        if (Math.abs(m[u] - t[u]) > 0.0001) {
        }
    }
    return true
}, m: function (p, q, r) {
    var o = this;
    var s = 0;
    var t = 0;
    var u = 0;
    var v = 0;
    var w = 0;
    for (var x = 0; x < p; ++x) {
        var y = q(x);
        var z = r(x);
        if (!isNaN(y) && !isNaN(z) && y > 0) {
            var A = Math.log(y);
            s += z * A;
            t += z;
            u += A;
            v += A * A;
            ++w
        }
    }
    if (w < 2) {
        return null
    }
    var B = (w * s - t * u) / (w * v - u * u);
    var C = (t - B * u) / w;
    return(function () {
        var a = new Array();
        a.add(C);
        a.add(B);
        return a
    }())
}, n: function (c, d) {
    if (c.length != 2 || d < 0 || Number.isInfinity(d) || isNaN(d)) {
        return NaN
    }
    return c[0] + c[1] * Math.log(d)
}, o: function () {
    var i = this;
    var j = new $.ig.Random();
    var m = new Array(2);
    for (var n = 0; n < m.length; ++n) {
        m[n] = 10 * j.a()
    }
    var o = new $.ig.List$1(Number, 0);
    var p = new $.ig.List$1(Number, 0);
    for (var q = 1; q < 100; ++q) {
        var r = q;
        var s = $.ig.LeastSquaresFit.prototype.n(m, r);
        if (!isNaN(s)) {
            o.add(r);
            p.add(s)
        }
    }
    var t = $.ig.LeastSquaresFit.prototype.m(o.count(), function (a) {
        return o.__inner[a]
    }, function (a) {
        return p.__inner[a]
    });
    for (var u = 0; u < m.length; ++u) {
        if (Math.abs(m[u] - t[u]) > 0.0001) {
        }
    }
    return true
}, p: function (q, r, s) {
    var p = this;
    var t = 0;
    var u = 0;
    var v = 0;
    var w = 0;
    var x = 0;
    var y = 0;
    for (var z = 0; z < q; ++z) {
        var A = r(z);
        var B = s(z);
        if (!isNaN(A) && !isNaN(B) && B > 0) {
            var C = Math.log(B);
            t += A * A * B;
            u += B * C;
            v += A * B;
            w += A * B * C;
            x += B;
            ++y
        }
    }
    if (y < 2) {
        return null
    }
    var D = (t * u - v * w) / (x * t - v * v);
    var E = (x * w - v * u) / (x * t - v * v);
    return(function () {
        var a = new Array();
        a.add(Math.exp(D));
        a.add(E);
        return a
    }())
}, q: function (c, d) {
    if (c.length != 2 || d < 0 || Number.isInfinity(d) || isNaN(d)) {
        return NaN
    }
    return c[0] * Math.exp(c[1] * d)
}, r: function () {
    var i = this;
    var j = new $.ig.Random();
    var m = new Array(2);
    for (var n = 0; n < m.length; ++n) {
        m[n] = 2 * j.a()
    }
    var o = new $.ig.List$1(Number, 0);
    var p = new $.ig.List$1(Number, 0);
    for (var q = 1; q < 100; ++q) {
        var r = q;
        var s = $.ig.LeastSquaresFit.prototype.q(m, r);
        if (!isNaN(s)) {
            o.add(r);
            p.add(s)
        }
    }
    var t = $.ig.LeastSquaresFit.prototype.p(o.count(), function (a) {
        return o.__inner[a]
    }, function (a) {
        return p.__inner[a]
    });
    for (var u = 0; u < m.length; ++u) {
        if (Math.abs(m[u] - t[u]) > 0.0001) {
            return false
        }
    }
    return true
}, s: function (q, r, s) {
    var p = this;
    var t = 0;
    var u = 0;
    var v = 0;
    var w = 0;
    var x = 0;
    for (var y = 0; y < q; ++y) {
        var z = r(y);
        var A = s(y);
        if (!isNaN(z) && !isNaN(A) && z > 0 && A > 0) {
            var B = Math.log(r(y));
            var C = Math.log(s(y));
            t += B * C;
            u += B;
            v += C;
            w += B * B;
            ++x
        }
    }
    if (x < 2) {
        return null
    }
    var D = (x * t - u * v) / (x * w - u * u);
    var E = Math.exp((v - D * u) / x);
    return(function () {
        var a = new Array();
        a.add(E);
        a.add(D);
        return a
    }())
}, t: function (c, d) {
    if (c.length != 2 || d < 0 || Number.isInfinity(d) || isNaN(d)) {
        return NaN
    }
    return c[0] * Math.pow(d, c[1])
}, u: function () {
    var g = this;
    var h = new $.ig.Random();
    var k = new Array(2);
    for (var l = 0; l < k.length; ++l) {
        k[l] = 10 * h.a()
    }
    var m = new $.ig.List$1(Number, 0);
    var n = new $.ig.List$1(Number, 0);
    for (var o = -100; o < 100; ++o) {
        m.add(o);
        n.add($.ig.LeastSquaresFit.prototype.t(k, o))
    }
    var p = $.ig.LeastSquaresFit.prototype.s(m.count(), function (a) {
        return m.__inner[a]
    }, function (a) {
        return n.__inner[a]
    });
    for (var q = 0; q < k.length; ++q) {
        if (Math.abs(k[q] - p[q]) > 0.0001) {
            return false
        }
    }
    return true
}, v: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 2, e, f)
}, w: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, x: function () {
    return $.ig.LeastSquaresFit.prototype.aj(2)
}, y: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 3, e, f)
}, z: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, aa: function () {
    return $.ig.LeastSquaresFit.prototype.aj(3)
}, ab: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 4, e, f)
}, ac: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, ad: function () {
    return $.ig.LeastSquaresFit.prototype.aj(4)
}, ae: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 5, e, f)
}, af: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, ag: function () {
    return $.ig.LeastSquaresFit.prototype.aj(5)
}, ah: function (v, w, x, y) {
    var u = this;
    var z = new Array(1 + 2 * w);
    for (var A = 0; A < z.length; A++) {
        z[A] = 0
    }
    var B = (function () {
        var c = new Array(w + 1);
        var a = c;
        for (var b = 0; b < w + 1; b++) {
            a[b] = new Array(w + 1)
        }
        return c
    }());
    var C = new Array(w + 1);
    for (var D = 0; D < C.length; D++) {
        C[D] = 0
    }
    var E = 0;
    for (var F = 0; F < v; ++F) {
        var G = 1;
        var H = x(F);
        if (!isNaN(H) && !isNaN(y(F))) {
            for (var I = 0; I < z.length; ++I) {
                z[I] += G;
                G *= H;
                ++E
            }
        }
    }
    if (E < w) {
        return null
    }
    for (var J = 0; J <= w; ++J) {
        for (var K = 0; K <= w; ++K) {
            B[J][K] = z[J + K]
        }
    }
    for (var L = 0; L < v; ++L) {
        var M = x(L);
        var N = y(L);
        if (!isNaN(M) && !isNaN(N)) {
            for (var O = 0; O <= w; ++O) {
                C[O] += (Math.pow(M, O) * N)
            }
        }
    }
    return $.ig.Numeric.prototype.b(B, C) ? C : null
}, ai: function (e, f) {
    if (e.length < 1 || Number.isInfinity(f) || isNaN(f)) {
        return NaN
    }
    var g = 0;
    for (var h = 0; h < e.length; ++h) {
        g += e[h] * Math.pow(f, h)
    }
    return g
}, aj: function (k) {
    var j = this;
    var n = new $.ig.Random();
    var o = new Array(k + 1);
    for (var p = 0; p < o.length; ++p) {
        o[p] = 2 * n.a()
    }
    var q = new $.ig.List$1(Number, 0);
    var r = new $.ig.List$1(Number, 0);
    for (var s = -100; s < 100; ++s) {
        var t = s;
        var u = $.ig.LeastSquaresFit.prototype.ai(o, t);
        if (!isNaN(u)) {
            q.add(t);
            r.add(u)
        }
    }
    var v = $.ig.LeastSquaresFit.prototype.ah(q.count(), k, function (a) {
        return q.__inner[a]
    }, function (a) {
        return r.__inner[a]
    });
    for (var w = 0; w < k; ++w) {
        if (Math.abs(o[w] - v[w]) > 0.0001) {
            return false
        }
    }
    return true
}, $type: new $.ig.Type("LeastSquaresFit", $.ig.Numeric.prototype.$type)}, true);
$.ig.UnknownValuePlotting.prototype.linearInterpolate = 0;
$.ig.UnknownValuePlotting.prototype.dontPlot = 1;
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
$.ig.util.defType("SplineType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("SplineType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TimeAxisDisplayType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("TimeAxisDisplayType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryDateTimeXAxis", "CategoryAxisBase", {init: function () {
    $.ig.CategoryAxisBase.prototype.init.call(this);
    this.hl = new Date();
    this.hm = new Date()
}, dl: function () {
    return new $.ig.CategoryDateTimeXAxisView(this)
}, dp: function (b) {
    $.ig.CategoryAxisBase.prototype.dp.call(this, b);
    this.hw(b)
}, _hw: null, hw: function (b) {
    if (arguments.length === 1) {
        this._hw = b;
        return b
    } else {
        return this._hw
    }
}, displayType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty)
    }
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty)
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty)
    }
}, interval: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.intervalProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.intervalProperty)
    }
}, dr: function () {
    return new $.ig.HorizontalAxisLabelPanel()
}, getCategorySize: function (c, d) {
    return d.width() / (this.itemsCount() * c.width())
}, getGroupCenter: function (d, e, f) {
    return this.getCategorySize(e, f) * 0.5
}, gz: function (f, g) {
    var h = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
    var i = 1 - 0.5 * h;
    var j = this.getCategorySize(f, g) * i;
    return j
}, hk: null, hx: function (b) {
    if (arguments.length === 1) {
        this.hk = b;
        return b
    } else {
        return this.hk
    }
}, ey: function (A) {
    var N = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var O = !N.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    var P = new $.ig.ScalerParams(N, O, this.isInverted());
    var Q = this.cz().au();
    var R = this.cz().av();
    var S = this.cz().aw();
    var T = this.cz().ax();
    this.d2();
    this.eq(Q);
    this.eq(R);
    this.eq(S);
    this.eq(T);
    this.c4().clear();
    this.c5().clear();
    this.c6().br(this);
    this.c6().bw(N);
    this.c6().bu(O);
    if (N.isEmpty() || O.isEmpty()) {
        this.df().g(0)
    }
    if (this.df().g() == 0) {
        this.c6().a3().clear()
    }
    if (this.labelSettings() != null) {
        this.labelSettings().r(this)
    }
    this.h6();
    if (!N.isEmpty() && !O.isEmpty() && this.h0() != null) {
        var U = O.bottom();
        if (this.crossingAxis() != null) {
            var V = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.crossingAxis());
            if (V != null) {
                var W = new $.ig.ScalerParams(N, O, V.isInverted());
                U = this.crossingValue();
                U = V.getScaledValue(U, W);
                if (U < O.top()) {
                    U = O.top()
                } else {
                    if (U > O.bottom()) {
                        U = O.bottom()
                    }
                }
            }
        }
        if (isNaN(U)) {
            U = 0
        }
        this.en(Q, U, O);
        this.c6().bx(U);
        if (this.displayType() == $.ig.TimeAxisDisplayType.prototype.discrete) {
            var X = (this).getFirstVisibleIndex(N, O);
            var Y = (this).getLastVisibleIndex(N, O);
            if (X < 0 || Y < 0) {
                return
            }
            for (var Z = X; Z <= Y; Z++) {
                var aa = this.hx() == null ? Z : this.hx().__inner[Z];
                var ab = this.getScaledValue(this.h0().item(aa).getTime(), P);
                if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                    ab += this.isInverted() ? -this.getGroupCenter(Z, N, O) : this.getGroupCenter(Z, N, O)
                }
                if (ab < O.left() || ab > O.right()) {
                    continue
                }
                this.ep(S, ab, O);
                if (this.gn() != null && Z < this.gn().g()) {
                    var ac = this.gn().item(aa);
                    var ad = $.ig.Axis.prototype.e2.call(this, ac);
                    if (!isNaN(ab) && !Number.isInfinity(ab)) {
                        this.c4().add1(ad);
                        this.c5().add(new $.ig.LabelPosition(ab))
                    }
                }
            }
        } else {
            var ae = this.getUnscaledValue(O.left(), P);
            var af = this.getUnscaledValue(O.right(), P);
            var ah = Math.min(ae, af);
            var ai = Math.max(ae, af);
            var aj = new $.ig.LinearNumericSnapper(0, ah, ai, O.width());
            var ak = this.hy() ? this.h5() : aj.h();
            var al = Math.floor((ah - this.actualMinimumValue().getTime()) / ak);
            var am = Math.ceil((ai - this.actualMinimumValue().getTime()) / ak);
            var B = 0;
            if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                B = this.getGroupCenter(0, N, O);
                B = this.isInverted() ? -B : B
            }
            var C = Math.ceil(O.right());
            var D = Math.floor(O.left());
            var E = this.getScaledValue(this.actualMinimumValue().getTime() + al * ak, P) + B;
            for (var F = al; F <= am; F++) {
                var G = this.getScaledValue(this.actualMinimumValue().getTime() + (F + 1) * ak, P) + B;
                if (!isNaN(E) && !Number.isInfinity(E)) {
                    var H = Math.round(E);
                    if (H <= C) {
                        if (F % 2 == 0) {
                            this.eo(R, E, G, O)
                        }
                        this.ep(S, E, O);
                        for (var I = 1; I < aj.j(); ++I) {
                            var J = this.getScaledValue(this.actualMinimumValue().getTime() + F * ak + (I * ak) / aj.j(), P) + B;
                            this.ep(T, J, O)
                        }
                    }
                    if (H >= D && H <= C) {
                        var K = this.actualMinimumValue().getTime() + F * ak;
                        var ag = Math.floor(K);
                        var L = new Date(ag);
                        var M = this.e2(L);
                        this.c4().add1(M);
                        this.c5().add(new $.ig.LabelPosition(E))
                    }
                }
                E = G
            }
        }
        if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
            if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
                this.seriesViewer().ic()
            }
        }
        this.c6().bs(this.c4());
        this.c6().bt(this.c5());
        this.g9()
    }
}, h5: function () {
    return this.hz()
}, h6: function () {
    var j = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var k = !j.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    var l = new Date();
    var m = new Date();
    if (!j.isEmpty() && !k.isEmpty() && this.h0() != null) {
        var n = $.ig.util.cast($.ig.FastItemDateTimeColumn.prototype.$type, this.h0());
        if (n != null) {
            if (this.hx() == null) {
                this.hx(n.u())
            }
        } else {
            this.hx(null)
        }
        if (this.h0().count() > 0) {
            var o = this.hx() == null ? 0 : this.hx().__inner[0];
            var p = this.hx() == null ? this.h0().count() - 1 : this.hx().__inner[this.h0().count() - 1];
            l = this.h0().item(o);
            m = this.h0().item(p);
            this.hy(false);
            if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                var q = m.getTime() - l.getTime();
                var u = Math.round(q * 1.25 / this.itemsCount() / 2);
                if (u == 0) {
                    u = 1
                }
                var t = l.getTime();
                var s = m.getTime();
                l = new Date(t - u);
                m = new Date(s + u)
            }
            if (this.h9()) {
                l = this.minimumValue()
            }
            if (this.ia()) {
                m = this.maximumValue()
            }
            if (this.h7()) {
                this.hz(this.interval());
                var r = Math.abs(m.getTime() - l.getTime());
                this.hy(this.h8() || (this.displayType() == $.ig.TimeAxisDisplayType.prototype.discrete) || (1 * r / this.h5() > k.width()) ? false : true)
            }
        }
    }
    this.actualMinimumValue(l);
    this.actualMaximumValue(m)
}, h7: function () {
    return this.interval() != 0
}, h8: function () {
    return this.hz() == 0
}, h9: function () {
    return this.minimumValue() != null
}, ia: function () {
    return this.maximumValue() != null
}, hl: null, actualMinimumValue: function (d) {
    if (arguments.length === 1) {
        var e = this.hl != d;
        if (e) {
            var f = this.hl;
            this.hl = d;
            this.ez($.ig.CategoryDateTimeXAxis.prototype.hg, f, d)
        }
        return d
    } else {
        return this.hl
    }
}, hm: null, actualMaximumValue: function (d) {
    if (arguments.length === 1) {
        var e = this.hm != d;
        if (e) {
            var f = this.hm;
            this.hm = d;
            this.ez($.ig.CategoryDateTimeXAxis.prototype.hh, f, d)
        }
        return d
    } else {
        return this.hm
    }
}, _hy: null, hy: function (b) {
    if (arguments.length === 1) {
        this._hy = b;
        return b
    } else {
        return this._hy
    }
}, hn: null, hz: function (b) {
    if (arguments.length === 1) {
        this.hn = b;
        return b
    } else {
        return this.hn
    }
}, getScaledValue: function (e, f) {
    var g;
    if (this.actualMaximumValue() == this.actualMinimumValue()) {
        g = -1
    } else {
        g = (e - this.actualMinimumValue().getTime()) / (this.actualMaximumValue().getTime() - this.actualMinimumValue().getTime())
    }
    var h = 0;
    if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
        h = this.getGroupCenter(0, f.a, f.b)
    }
    if (this.isInverted()) {
        g = 1 - g;
        h = -h
    }
    return f.b.left() + f.b.width() * (g - f.a.left()) / f.a.width() - h
}, getUnscaledValue: function (c, d) {
    return this.gy(c, d.a, d.b, this.categoryMode())
}, gy: function (f, g, h, i) {
    var j = g.left() + g.width() * (f - h.left()) / h.width();
    if (this.isInverted()) {
        j = 1 - j
    }
    return Math.floor(this.actualMinimumValue().getTime() + j * (this.actualMaximumValue().getTime() - this.actualMinimumValue().getTime()))
}, ii: function (b) {
    return this.h0() == null ? $.ig.Date.prototype.minValue() : this.h0().item(b)
}, dateTimeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty)
    }
}, h0: function (c) {
    if (arguments.length === 1) {
        if (this.ho != c) {
            var d = this.ho;
            this.ho = c;
            this.ez($.ig.CategoryDateTimeXAxis.prototype.hj, d, this.ho)
        }
        return c
    } else {
        return this.ho
    }
}, ho: null, il: function (d) {
    if (d == null) {
        return this.gn().y(null, null)
    }
    var e = null;
    var f = $.ig.SeriesViewer.prototype.getCoercionMethod(d, this.coercionMethods());
    d = f.c();
    e = f.d();
    return this.gn().y(d, e)
}, eg: function (g, h, i, j) {
    $.ig.CategoryAxisBase.prototype.eg.call(this, g, h, i, j);
    switch (h) {
        case $.ig.CategoryDateTimeXAxis.prototype.f6:
            var k = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, i);
            if (k != null) {
                k.ac(this.h0());
                this.h0(null);
                k.event = $.ig.Delegate.prototype.remove(k.event, this.im.on(this))
            }
            var l = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, j);
            if (l != null) {
                this.hx(null);
                this.h0(this.il(this.dateTimeMemberPath()));
                l.event = $.ig.Delegate.prototype.combine(l.event, this.im.on(this))
            }
            this.io(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hi:
            if (this.gn() != null) {
                this.gn().ac(this.h0());
                this.h0(this.il(this.dateTimeMemberPath()));
                this.hx(null)
            }
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hc:
            this.c7(true);
            this.es(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hd:
            this.updateRange();
            this.io(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.he:
            this.updateRange();
            this.io(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hf:
            this.c7(true);
            this.es(false);
            break
    }
}, im: function (c, d) {
    this.hx(null)
}, io: function (d) {
    if (this.gn() == null) {
        return
    }
    this.ey(d);
    var f = this.fl().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.renderSeries(d)
    }
}, ex: function () {
    var f = this.actualMinimumValue().getTime();
    var g = this.actualMaximumValue().getTime();
    var h = !this.h9() ? this.actualMinimumValue().getTime() : this.minimumValue().getTime();
    var i = !this.ia() ? this.actualMaximumValue().getTime() : this.maximumValue().getTime();
    var j = new $.ig.AxisRangeChangedEventArgs(f, h, g, i);
    this.dx(j);
    return true
}, sortedIndices: function () {
    if (this.hx() == null) {
        var a = $.ig.util.cast($.ig.FastItemDateTimeColumn.prototype.$type, this.h0());
        if (a != null) {
            this.hx(a.u())
        } else {
            this.hx(null)
        }
    }
    return this.hx()
}, getFirstVisibleIndex: function (i, j) {
    var k = new $.ig.ScalerParams(i, j, this.isInverted());
    var l, m;
    if (this.isInverted()) {
        m = this.getUnscaledValue(j.left(), k);
        l = this.getUnscaledValue(j.right(), k)
    } else {
        l = this.getUnscaledValue(j.left(), k);
        m = this.getUnscaledValue(j.right(), k)
    }
    var n = 0;
    for (var o = 0; o < this.hx().count(); o++) {
        if (this.h0() == null) {
            break
        }
        var p = this.h0().item(this.hx().__inner[o]);
        if (p.getTime() >= l) {
            break
        }
        n = o
    }
    return n
}, getLastVisibleIndex: function (k, l) {
    var m = new $.ig.ScalerParams(k, l, this.isInverted());
    var n, o;
    if (this.isInverted()) {
        o = this.getUnscaledValue(l.left(), m);
        n = this.getUnscaledValue(l.right(), m)
    } else {
        n = this.getUnscaledValue(l.left(), m);
        o = this.getUnscaledValue(l.right(), m)
    }
    var p = this.hx().count() - 1;
    var q = p;
    for (var r = p; r >= 0; r--) {
        if (this.h0() == null || this.hx().count() <= r) {
            break
        }
        var s = this.hx().__inner[r];
        if (s >= this.h0().count()) {
            break
        }
        var t = this.h0().item(s);
        if (t.getTime() < o) {
            break
        }
        q = Math.min(r + 1, this.hx().count() - 1)
    }
    return q
}, getUnscaledValueAt: function (b) {
    return this.h0() == null ? NaN : this.h0().item(b).getTime()
}, getIndexClosestToUnscaledValue: function (j) {
    var f = this;
    var k = this;
    if (this.h0() == null || k.sortedIndices() == null) {
        return -1
    }
    var l = new $.ig.SortedListView$1($.ig.Date.prototype.$type, this.h0(), k.sortedIndices());
    var r = j;
    var m = new Date(r);
    var n = -1;
    var o = l.binarySearch$1($.ig.Date.prototype.$type, function (a) {
        if (m < a) {
            return -1
        }
        if (m > a) {
            return 1
        }
        return 0
    });
    if (o >= 0) {
        n = o
    } else {
        n = ~o
    }
    if (n >= 0 && n < k.sortedIndices().count() && n - 1 >= 0 && n - 1 < k.sortedIndices().count()) {
        var p = m - l.item(n - 1);
        var q = l.item(n) - m;
        if (p < q) {
            n = n - 1
        }
    }
    if (n >= 0 && n < k.sortedIndices().count()) {
        return k.sortedIndices().__inner[n]
    }
    return -1
}, notifyDataChanged: function () {
    this.hx(null);
    this.renderAxis()
}, dd: function () {
    return $.ig.AxisOrientation.prototype.horizontal
}, $type: new $.ig.Type("CategoryDateTimeXAxis", $.ig.CategoryAxisBase.prototype.$type, [$.ig.ISortingAxis.prototype.$type])}, true);
$.ig.util.defType("CategoryDateTimeXAxisView", "CategoryAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.CategoryAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("CategoryDateTimeXAxisView", $.ig.CategoryAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("CategoryXAxis", "CategoryAxisBase", {dl: function () {
    return new $.ig.CategoryXAxisView(this)
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
    this.hd = 1;
    this.he = 1;
    $.ig.CategoryAxisBase.prototype.init.call(this)
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
}, dr: function () {
    return new $.ig.HorizontalAxisLabelPanel()
}, getCategorySize: function (c, d) {
    return d.width() / (this.itemsCount() * c.width())
}, gz: function (h, i) {
    var j = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
    var k = 0;
    if (!isNaN(this.overlap())) {
        k = Math.min(this.overlap(), 1)
    } else {
        k = 0
    }
    var l = 1 - 0.5 * j;
    var m = this.go() == 0 ? 1 : this.go();
    var n = this.getCategorySize(h, i) * l / (m - (m - 1) * k);
    return n
}, getGroupCenter: function (j, k, l) {
    var m = 0.5;
    if (this.go() > 1) {
        var n = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
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
            if (n < i.left() + 0.1 * i.width()) {
                n = n + 0.4 * i.width();
                i.x(n - 0.5 * i.width())
            }
            if (n > i.right() - 0.1 * i.width()) {
                n = n - 0.4 * i.width();
                i.x(n - 0.5 * i.width())
            }
        }
        this.seriesViewer().hx(i)
    }
}, getScaledValue: function (e, f) {
    var g = this.categoryMode() == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
    if (g < 0) {
        g = 0
    }
    var h = g >= 1 ? (e) / (g) : g == 0 ? 0.5 : NaN;
    if (this.c1()) {
        h = 1 - h
    }
    return f.b.left() + f.b.width() * (h - f.a.left()) / f.a.width()
}, getUnscaledValue: function (c, d) {
    return this.gy(c, d.a, d.b, this.categoryMode())
}, gy: function (g, h, i, j) {
    var k = h.left() + (g - i.left()) * h.width() / i.width();
    if (this.c1()) {
        k = 1 - k
    }
    var l = j == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
    if (l < 0) {
        l = 0
    }
    return k * l
}, ey: function (A) {
    var K = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var L = this.c2();
    var M = new $.ig.ScalerParams(K, L, this.isInverted());
    var N = this.cz().au();
    var O = this.cz().av();
    var P = this.cz().aw();
    var Q = this.cz().ax();
    this.d2();
    this.eq(N);
    this.eq(O);
    this.eq(P);
    this.eq(Q);
    this.c4().clear();
    this.c5().clear();
    this.cz().az(this, K, L);
    if (K.isEmpty() || L.isEmpty()) {
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
    if (!K.isEmpty() && !L.isEmpty()) {
        var R = this.getUnscaledValue(L.left(), M);
        var S = this.getUnscaledValue(L.right(), M);
        if (this.isInverted()) {
            R = Math.ceil(R);
            S = Math.floor(S)
        } else {
            R = Math.floor(R);
            S = Math.ceil(S)
        }
        var T = L.bottom();
        if (this.crossingAxis() != null) {
            var U = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.crossingAxis());
            if (U != null) {
                var V = new $.ig.ScalerParams(K, L, U.isInverted());
                T = this.crossingValue();
                T = U.getScaledValue(T, V);
                if (T < L.top()) {
                    T = L.top()
                } else {
                    if (T > L.bottom()) {
                        T = L.bottom()
                    }
                }
            }
        }
        this.en(N, T, L);
        this.cz().a3(T);
        var W = Math.min(R, S);
        var X = Math.max(R, S);
        var Y = new $.ig.LinearCategorySnapper(1, W, X, L.width(), this.interval(), this.categoryMode());
        var Z = Math.floor((W - 0) / Y.g());
        var aa = Math.ceil((X - 0) / Y.g());
        if (!isNaN(Z) && !isNaN(aa)) {
            var ab = Z;
            var ac = aa;
            var ad = this.getScaledValue(0 + ab * Y.g(), M);
            this.cz().a1(this.getScaledValue(Y.g(), M));
            var ae = Math.ceil(L.right());
            var af = Math.floor(L.left());
            for (var ag = ab; ag <= ac; ++ag) {
                var ah = this.getScaledValue(0 + (ag + 1) * Y.g(), M);
                if (ad <= L.right()) {
                    if (ag % 2 == 0) {
                        this.eo(O, ad, ah, L)
                    }
                    this.ep(P, ad, L);
                    if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0 && this.go() != 0 && this.c9()) {
                        for (var ai = 0; ai < Y.g(); ai++) {
                            for (var B = 0; B < this.go(); B++) {
                                var C = this.getGroupCenter(B, K, L);
                                if (this.isInverted()) {
                                    C = -C
                                }
                                var D = this.getScaledValue(ai + ag * Y.g(), M) + C;
                                this.ep(Q, D, L)
                            }
                        }
                    }
                }
                var E = ad;
                if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
                    var F = this.getScaledValue(ag * Y.g() + 1, M);
                    E = (ad + F) / 2
                }
                var G = Math.round(E);
                if (G >= af && G <= ae) {
                    var H = 0;
                    if (Y.g() >= 1) {
                        H = ag * Math.floor(Y.g())
                    } else {
                        if ((ag * Y.g()) * 2 % 2 == 0) {
                            H = Math.floor(ag * Y.g())
                        } else {
                            H = -1
                        }
                    }
                    if (this.gn() != null && H < this.gn().g() && H >= 0) {
                        var I = this.gn().item(H);
                        var J = this.e2(I);
                        if (!isNaN(E) && !Number.isInfinity(E)) {
                            this.c4().add1(J);
                            this.c5().add(new $.ig.LabelPosition(E))
                        }
                    }
                }
                ad = ah
            }
        }
        if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
            if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
                this.seriesViewer().ic()
            }
        }
        this.cz().a2(this.c4(), this.c5());
        this.g9()
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
}, interval: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryXAxis.prototype.intervalProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryXAxis.prototype.intervalProperty)
    }
}, g2: function (c) {
    if (c == null) {
        return false
    }
    var d = this.fg();
    if (d == null) {
        return false
    }
    return d.synchronizeHorizontally()
}, dd: function () {
    return $.ig.AxisOrientation.prototype.horizontal
}, $type: new $.ig.Type("CategoryXAxis", $.ig.CategoryAxisBase.prototype.$type)}, true);
$.ig.util.defType("CategoryXAxisView", "CategoryAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.CategoryAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("CategoryXAxisView", $.ig.CategoryAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("BarFramePreparer", "CategoryFramePreparer", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.BarFramePreparer.prototype.init1.call(this, 1, b, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, b), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, b), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, b), $.ig.util.cast($.ig.IBucketizer.prototype.$type, b))
}, init1: function (k, f, g, h, i, j) {
    $.ig.CategoryFramePreparer.prototype.init1.call(this, 1, f, g, h, i, j);
    this.am(new $.ig.DefaultCategoryTrendlineHost());
    if ($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, f) !== null) {
        this.am($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, f))
    }
    this.an(new $.ig.DefaultSingleValueProvider());
    if ($.ig.util.cast($.ig.IHasSingleValueCategory.prototype.$type, f) !== null) {
        this.an($.ig.util.cast($.ig.IHasSingleValueCategory.prototype.$type, f))
    }
}, v: function (i, j, k, l, m) {
    var n = j[1];
    var o = j[0];
    var p = new $.ig.Rect(0, n - 5, o - 5, 11, 11);
    if (!isNaN(n) && !isNaN(o) && !Number.isInfinity(n) && !Number.isInfinity(o) && k.tryAdd(p)) {
        i.f.add({__x: n, __y: o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.e().updateMarkerTemplate(m, l);
        return true
    }
    return false
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
        this.am().trendlinePreparer().prepareLine(i.u().g, this.am().trendLineType(), n, this.am().trendLinePeriod(), function (a) {
            return i.t().getScaledValue(a, m)
        }, function (a) {
            return i.r().getScaledValue(a, l)
        }, o)
    }
}, $type: new $.ig.Type("BarFramePreparer", $.ig.CategoryFramePreparer.prototype.$type)}, true);
$.ig.util.defType("BarTrendFitCalculator", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (p, q, r, s, t, u, v, w, x, y, z) {
    if (s == null) {
        switch (q) {
            case $.ig.TrendLineType.prototype.linearFit:
                s = $.ig.LeastSquaresFit.prototype.j(t, v, u);
                break;
            case $.ig.TrendLineType.prototype.quadraticFit:
                s = $.ig.LeastSquaresFit.prototype.v(t, v, u);
                break;
            case $.ig.TrendLineType.prototype.cubicFit:
                s = $.ig.LeastSquaresFit.prototype.y(t, v, u);
                break;
            case $.ig.TrendLineType.prototype.quarticFit:
                s = $.ig.LeastSquaresFit.prototype.ab(t, v, u);
                break;
            case $.ig.TrendLineType.prototype.quinticFit:
                s = $.ig.LeastSquaresFit.prototype.ae(t, v, u);
                break;
            case $.ig.TrendLineType.prototype.exponentialFit:
                s = $.ig.LeastSquaresFit.prototype.p(t, v, u);
                break;
            case $.ig.TrendLineType.prototype.logarithmicFit:
                s = $.ig.LeastSquaresFit.prototype.m(t, v, u);
                break;
            case $.ig.TrendLineType.prototype.powerLawFit:
                s = $.ig.LeastSquaresFit.prototype.s(t, v, u);
                break;
            default:
                throw new $.ig.NotImplementedException()
        }
    }
    if (s == null) {
        return null
    }
    for (var A = 0; A < r.k().height(); A += 2) {
        var B = A / (r.k().height() - 1);
        var C = y + B * (z - y);
        var D = NaN;
        switch (q) {
            case $.ig.TrendLineType.prototype.linearFit:
                D = $.ig.LeastSquaresFit.prototype.k(s, C);
                break;
            case $.ig.TrendLineType.prototype.quadraticFit:
                D = $.ig.LeastSquaresFit.prototype.w(s, C);
                break;
            case $.ig.TrendLineType.prototype.cubicFit:
                D = $.ig.LeastSquaresFit.prototype.z(s, C);
                break;
            case $.ig.TrendLineType.prototype.quarticFit:
                D = $.ig.LeastSquaresFit.prototype.ac(s, C);
                break;
            case $.ig.TrendLineType.prototype.quinticFit:
                D = $.ig.LeastSquaresFit.prototype.af(s, C);
                break;
            case $.ig.TrendLineType.prototype.exponentialFit:
                D = $.ig.LeastSquaresFit.prototype.q(s, C);
                break;
            case $.ig.TrendLineType.prototype.logarithmicFit:
                D = $.ig.LeastSquaresFit.prototype.n(s, C);
                break;
            case $.ig.TrendLineType.prototype.powerLawFit:
                D = $.ig.LeastSquaresFit.prototype.t(s, C);
                break;
            default:
                throw new $.ig.NotImplementedException()
        }
        D = w(D);
        C = x(C);
        if (!isNaN(D) && !Number.isInfinity(D)) {
            p.add({__x: D, __y: C + r.n(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
    return s
}, $type: new $.ig.Type("BarTrendFitCalculator", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TrendLineManagerBase$1", "Object", {$tTrendColumn: null, _l: null, l: function (b) {
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
}, init: function (a) {
    this.i = (function () {
        var b = new $.ig.Polyline();
        b.a6(false);
        return b
    }());
    this.$tTrendColumn = a;
    this.$type = this.$type.specialize(this.$tTrendColumn);
    $.ig.Object.prototype.init.call(this);
    this.l(new $.ig.List$1(this.$tTrendColumn, 0))
}, n: function () {
    return this.i
}, i: null, t: function (b) {
    this.w(b, null)
}, u: function (b) {
    return b == $.ig.TrendLineType.prototype.linearFit || b == $.ig.TrendLineType.prototype.quadraticFit || b == $.ig.TrendLineType.prototype.cubicFit || b == $.ig.TrendLineType.prototype.quarticFit || b == $.ig.TrendLineType.prototype.quinticFit || b == $.ig.TrendLineType.prototype.logarithmicFit || b == $.ig.TrendLineType.prototype.exponentialFit || b == $.ig.TrendLineType.prototype.powerLawFit
}, v: function (b) {
    return b == $.ig.TrendLineType.prototype.simpleAverage || b == $.ig.TrendLineType.prototype.exponentialAverage || b == $.ig.TrendLineType.prototype.modifiedAverage || b == $.ig.TrendLineType.prototype.cumulativeAverage || b == $.ig.TrendLineType.prototype.weightedAverage
}, w: function (e, f) {
    this.n().bn().clear();
    if (f != null) {
        f.h(this.n().bn())
    }
    if (e != null) {
        var h = e.getEnumerator();
        while (h.moveNext()) {
            var g = h.current();
            if (!isNaN(g.__x) && !isNaN(g.__y)) {
                if (f != null) {
                    f.l(g)
                } else {
                    this.n().bn().add(g)
                }
            }
        }
    }
    this.n().a6(this.n().bn().count() > 0)
}, x: function (d, e, f) {
    this.y(d, e, f, null)
}, y: function (f, i, j, k) {
    var e = this;
    if (k != null) {
        k.h(j)
    }
    var m = $.ig.Flattener.prototype.c(f.count(),function (a) {
        return f.item(a).__x
    },function (a) {
        return f.item(a).__y
    }, i.m()).getEnumerator();
    while (m.moveNext()) {
        var l = m.current();
        if (k != null) {
            k.l(f.item(l))
        } else {
            j.add(f.item(l))
        }
    }
}, z: function (c, d) {
    if (c == null || d == null) {
        return
    }
    if (this.n().aa() != null) {
        this.aa()
    }
    c.a3().add(this.n())
}, aa: function () {
    if (this.n() == null) {
        return
    }
    var b = $.ig.util.cast($.ig.Panel.prototype.$type, this.n().aa());
    if (b != null) {
        b.a3().remove(this.n())
    }
}, ab: function () {
    this.n().bn().clear()
}, ac: function () {
    this.m(null);
    this.l().clear()
}, ad: function (e, f, g, h) {
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.change:
        case $.ig.FastItemsSourceEventAction.prototype.replace:
        case $.ig.FastItemsSourceEventAction.prototype.insert:
        case $.ig.FastItemsSourceEventAction.prototype.remove:
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            this.ac();
            break
    }
}, ae: function (g, h, i, j, k) {
    var l = false;
    switch (h) {
        case $.ig.TrendLineManagerBase$1.prototype.b:
        case $.ig.TrendLineManagerBase$1.prototype.c:
            this.ac();
            l = true;
            break;
        case $.ig.TrendLineManagerBase$1.prototype.f:
            l = true;
            break;
        case $.ig.Series.prototype.be:
            l = true;
            this.ac();
            break
    }
    return l
}, $type: new $.ig.Type("TrendLineManagerBase$1", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryTrendLineManagerBase", "TrendLineManagerBase$1", {init: function () {
    $.ig.TrendLineManagerBase$1.prototype.init.call(this, Number)
}, prepareLine: function (h, i, j, k, l, m, n) {
}, af: function (f, g, h, i) {
    var e = this;
    if (g != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, g) !== null) {
        if (f != null) {
            f.aa()
        }
        var j = new $.ig.SortingTrendLineManager(function (a) {
            var b = a;
            var c = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, g);
            if (c != null) {
                a = Math.min(a, c.sortedIndices().count() - 1);
                b = c.sortedIndices().__inner[a]
            }
            return c.getUnscaledValueAt(b)
        }, function (a, b, c) {
            var d = new $.ig.ScalerParams(c, b, g.isInverted());
            return g.getUnscaledValue(a, d)
        });
        j.z(h, i);
        return j
    } else {
        if (!($.ig.util.cast($.ig.CategoryTrendLineManager.prototype.$type, f) !== null)) {
            if (f != null) {
                f.aa()
            }
            var k = new $.ig.CategoryTrendLineManager();
            k.z(h, i);
            return k
        }
    }
    return f
}, $type: new $.ig.Type("CategoryTrendLineManagerBase", $.ig.TrendLineManagerBase$1.prototype.$type.specialize(Number), [$.ig.IPreparesCategoryTrendline.prototype.$type])}, true);
$.ig.util.defType("CategoryTrendLineManager", "CategoryTrendLineManagerBase", {init: function () {
    $.ig.CategoryTrendLineManagerBase.prototype.init.call(this)
}, prepareLine: function (l, q, r, s, t, u, v) {
    var k = this;
    var w = v.h() * v.j();
    var x = v.i() * v.j();
    var y = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    if (q == $.ig.TrendLineType.prototype.none) {
        this.m(null);
        this.l().clear();
        return
    }
    if (this.u(q)) {
        this.l().clear();
        this.m($.ig.TrendFitCalculator.prototype.a(y, q, v, this.m(), r.count(), function (a) {
            return a + 1
        }, function (a) {
            return r.item(a)
        }, t, u, w, x))
    }
    if (this.v(q)) {
        this.m(null);
        $.ig.TrendAverageCalculator.prototype.b(q, this.l(), r, s);
        for (var z = v.h(); z <= v.i(); z += 1) {
            var A = z * v.j();
            if (A >= 0 && A < this.l().count()) {
                var B = t(A);
                var C = u(this.l().__inner[A]);
                y.add({__x: B + v.n(), __y: C, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
            }
        }
    }
    this.x(y, v, l)
}, $type: new $.ig.Type("CategoryTrendLineManager", $.ig.CategoryTrendLineManagerBase.prototype.$type)}, true);
$.ig.util.defType("BarTrendLineManager", "CategoryTrendLineManager", {init: function () {
    $.ig.CategoryTrendLineManager.prototype.init.call(this)
}, prepareLine: function (l, q, r, s, t, u, v) {
    var k = this;
    var w = v.h() * v.j();
    var x = v.i() * v.j();
    var y = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    if (q == $.ig.TrendLineType.prototype.none) {
        this.m(null);
        this.l().clear();
        return
    }
    if (this.u(q)) {
        this.l().clear();
        this.m($.ig.BarTrendFitCalculator.prototype.a(y, q, v, this.m(), r.count(), function (a) {
            return r.item(a)
        }, function (a) {
            return a + 1
        }, t, u, w, x))
    }
    if (this.v(q)) {
        this.m(null);
        $.ig.TrendAverageCalculator.prototype.b(q, this.l(), r, s);
        for (var z = v.h(); z <= v.i(); z += 1) {
            var A = z * v.j();
            if (A >= 0 && A < this.l().count()) {
                var B = t(this.l().__inner[A]);
                var C = u(A);
                y.add({__x: B, __y: C + v.n(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
            }
        }
    }
    this.x(y, v, l)
}, $type: new $.ig.Type("BarTrendLineManager", $.ig.CategoryTrendLineManager.prototype.$type)}, true);
$.ig.util.defType("AnchoredCategorySeries", "CategorySeries", {_jt: null, jt: function (b) {
    if (arguments.length === 1) {
        this._jt = b;
        return b
    } else {
        return this._jt
    }
}, ed: function () {
    var b = new $.ig.AnchoredCategorySeriesView(this);
    return b
}, ea: function (b) {
    $.ig.CategorySeries.prototype.ea.call(this, b);
    this.jt(b)
}, init: function () {
    $.ig.CategorySeries.prototype.init.call(this);
    this.ju(new $.ig.CategoryLineRasterizer());
    this.ix(new $.ig.CategoryFramePreparer(1, this, this.iy(), this, this, this.iy().c9()))
}, _ju: null, ju: function (b) {
    if (arguments.length === 1) {
        this._ju = b;
        return b
    } else {
        return this._ju
    }
}, valueMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.valueMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.valueMemberPathProperty)
    }
}, valueColumn: function (c) {
    if (arguments.length === 1) {
        if (this.jg != c) {
            var d = this.jg;
            this.jg = c;
            this.ej($.ig.AnchoredCategorySeries.prototype.jf, d, this.jg)
        }
        return c
    } else {
        return this.jg
    }
}, jg: null, trendLineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.trendLineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.trendLineTypeProperty)
    }
}, trendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.trendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.trendLineBrushProperty)
    }
}, actualTrendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.actualTrendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.actualTrendLineBrushProperty)
    }
}, trendLineThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.trendLineThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.trendLineThicknessProperty)
    }
}, trendLineDashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.trendLineDashCapProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.trendLineDashCapProperty)
    }
}, trendLineDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.trendLineDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.trendLineDashArrayProperty)
    }
}, trendLinePeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.trendLinePeriodProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.trendLinePeriodProperty)
    }
}, trendLineZIndex: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredCategorySeries.prototype.trendLineZIndexProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredCategorySeries.prototype.trendLineZIndexProperty)
    }
}, scrollIntoView: function (l) {
    var m = this.view().ac();
    var n = this.view().ab();
    var o = new $.ig.Rect(0, 0, 0, 1, 1);
    var p = !m.isEmpty() && !n.isEmpty() && this.dx() != null ? this.dx().x(l) : -1;
    var q = this.ja();
    var r = new $.ig.ScalerParams(o, o, q.isInverted());
    var s = q != null ? q.getScaledValue(p, r) : NaN;
    var t = q != null ? this.ix().x($.ig.util.cast($.ig.ICategoryScaler.prototype.$type, q), m, n) : 0;
    s += t;
    var u = this.jb();
    var v = u != null && this.valueColumn() != null && p < this.valueColumn().count() ? u.getScaledValue(this.valueColumn().item(p), r) : NaN;
    if (!isNaN(s)) {
        if (s < m.left() + 0.1 * m.width()) {
            s = s + 0.4 * m.width();
            m.x(s - 0.5 * m.width())
        }
        if (s > m.right() - 0.1 * m.width()) {
            s = s - 0.4 * m.width();
            m.x(s - 0.5 * m.width())
        }
    }
    if (!isNaN(v)) {
        if (v < m.top() + 0.1 * m.height()) {
            v = v + 0.4 * m.height();
            m.y(v - 0.5 * m.height())
        }
        if (v > m.bottom() - 0.1 * m.height()) {
            v = v - 0.4 * m.height();
            m.y(v - 0.5 * m.height())
        }
    }
    if (this.syncLink() != null) {
        this.syncLink().bp(this.seriesViewer(), m)
    }
    return p >= 0
}, e6: function (f, g, h, i) {
    $.ig.CategorySeries.prototype.e6.call(this, f, g, h, i);
    var j = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, this.jb());
    if (this.jt().dm().ae(f, g, h, i, this.trendLineDashArray())) {
        this.renderSeries(false);
        this.e5()
    }
    switch (g) {
        case $.ig.Series.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.valueColumn());
                this.valueColumn(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i) != null) {
                this.valueColumn(this.gs(this.valueMemberPath()))
            }
            if (j != null && !j.updateRange()) {
                this.jt().c9().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.AnchoredCategorySeries.prototype.je:
            if (this.dx() != null) {
                this.dx().ac(this.valueColumn());
                this.valueColumn(this.gs(this.valueMemberPath()))
            }
            this.jv(this.valueMemberPath());
            break;
        case $.ig.AnchoredCategorySeries.prototype.jf:
            this.jt().dm().ac();
            if (j != null && !j.updateRange()) {
                this.jt().c9().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.AnchoredCategorySeries.prototype.b6:
            this.fj();
            break;
        case $.ig.AnchoredCategorySeries.prototype.iq:
            this.renderSeries(false);
            break;
        case $.ig.AnchoredCategorySeries.prototype.b4:
            this.e5();
            break
    }
}, em: function (b) {
    if (this.valueColumn() == null || this.valueColumn().count() == 0) {
        return null
    }
    if (b == this.ja()) {
        return new $.ig.AxisRange(0, this.valueColumn().count() - 1)
    }
    if (b == this.jb()) {
        return new $.ig.AxisRange(this.valueColumn().minimum(), this.valueColumn().maximum())
    }
    return null
}, fc: function (e, f, g, h) {
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.reset:
        case $.ig.FastItemsSourceEventAction.prototype.insert:
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            this.jt().c9().q(this.resolution());
            break
    }
    this.jt().dm().ad(e, f, g, h)
}, j2: function (g) {
    var h = 0;
    var i = g.ac();
    var j = g.ab();
    var k = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.jb());
    if (!i.isEmpty() && !j.isEmpty() && k != null) {
        var l = new $.ig.ScalerParams(i, j, k.isInverted());
        h = k.getScaledValue(k.referenceValue(), l)
    }
    return h
}, j3: function (f, g, h) {
    var i = this.j2(h);
    if (f.count() > 0) {
        var j = i;
        f.add({__x: f.last$1($.ig.Point.prototype.$type).__x, __y: j, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        f.add({__x: f.first$1($.ig.Point.prototype.$type).__x, __y: j, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
}, j4: function (j, k, l, m) {
    var n = null;
    if (k > -1 && !m.isEmpty() && !l.isEmpty()) {
        var o = j.__inner[0][0] < l.left() - 2000 ? l.left() - 10 : NaN;
        var p = l.bottom() + 10;
        var q = j.__inner[k][0] > l.right() + 2000 ? l.right() + 10 : NaN;
        var r = l.top() - 10;
        n = new $.ig.Clipper(1, o, p, q, r, false)
    }
    return n
}, es: function (f, g, h) {
    var i = $.ig.CategorySeries.prototype.es.call(this, f, g, h);
    var j = h;
    if (this.valueColumn() == null || this.valueColumn().count() == 0 || j.c9().h() < 1) {
        i = false
    }
    return i
}, eu: function (d, e) {
    $.ig.CategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.di();
    f.dm().ab()
}, i7: function (c, d) {
    $.ig.CategorySeries.prototype.i7.call(this, c, d);
    this.jd(d).m(c, d)
}, i6: function (d, e) {
    $.ig.CategorySeries.prototype.i6.call(this, d, e);
    var f = $.ig.util.cast($.ig.AnchoredCategorySeriesView.prototype.$type, e);
    f.dm().t(d.g);
    $.ig.CategoryMarkerManager.prototype.a(this, d.f, e.da(), this.useLightweightMarkers());
    e.c1();
    this.j5(d, e)
}, j5: function (c, d) {
}, fj: function () {
    $.ig.MarkerSeries.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    this.jt().ds();
    if (this.trendLineBrush() != null) {
        this.jt().dt()
    } else {
        this.jt().du()
    }
}, el: function (c, d) {
    if (c == this.jt().dm().n()) {
        return null
    }
    return $.ig.Series.prototype.el.call(this, c, d)
}, currentCategoryMode: function () {
    return this.preferredCategoryMode($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.ja()))
}, scaler: function () {
    return $.ig.util.cast($.ig.ICategoryScaler.prototype.$type, this.ja())
}, yScaler: function () {
    return $.ig.util.cast($.ig.IScaler.prototype.$type, this.jb())
}, bucketizer: function () {
    return this.jt().c9()
}, currentMode2Index: function () {
    return this.i5()
}, provideCollisionDetector: function () {
    return new $.ig.CollisionAvoider()
}, trendlinePreparer: function () {
    return this.jt().dm()
}, _jv: null, jv: function (a) {
    if (arguments.length === 1) {
        this._jv = a;
        return a
    } else {
        return this._jv
    }
}, j8: function (a) {
}, j9: function (a) {
}, gw: function (a) {
    $.ig.MarkerSeries.prototype.gw.call(this, a);
    var b = new $.ig.PolyLineVisualData(1, "trendLine", this.jt().dm().n());
    b.tags().add("Trend");
    a.shapes().add(b)
}, $type: new $.ig.Type("AnchoredCategorySeries", $.ig.CategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type, $.ig.IHasSingleValueCategory.prototype.$type, $.ig.IHasCategoryTrendline.prototype.$type])}, true);
$.ig.util.defType("VerticalAnchoredCategorySeries", "AnchoredCategorySeries", {init: function () {
    $.ig.AnchoredCategorySeries.prototype.init.call(this)
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.VerticalAnchoredCategorySeries.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.VerticalAnchoredCategorySeries.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.VerticalAnchoredCategorySeries.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.VerticalAnchoredCategorySeries.prototype.yAxisProperty)
    }
}, ja: function () {
    return this.xAxis()
}, jb: function () {
    return this.yAxis()
}, j8: function (b) {
    this.xAxis($.ig.util.cast($.ig.NumericXAxis.prototype.$type, b))
}, j9: function (b) {
    this.yAxis($.ig.util.cast($.ig.CategoryYAxis.prototype.$type, b))
}, jc: function () {
    return this.xAxis() != null && this.xAxis().updateRange()
}, e6: function (e, f, g, h) {
    $.ig.AnchoredCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.VerticalAnchoredCategorySeries.prototype.kj:
            this.gn($.ig.util.cast($.ig.Axis.prototype.$type, g));
            this.go($.ig.util.cast($.ig.Axis.prototype.$type, h));
            this.iy().c9().q(this.resolution());
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.VerticalAnchoredCategorySeries.prototype.kk:
            this.gn($.ig.util.cast($.ig.Axis.prototype.$type, g));
            this.go($.ig.util.cast($.ig.Axis.prototype.$type, h));
            this.iy().c9().q(this.resolution());
            this.jc();
            this.renderSeries(false);
            this.e5();
            break
    }
}, $type: new $.ig.Type("VerticalAnchoredCategorySeries", $.ig.AnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("BarSeries", "VerticalAnchoredCategorySeries", {ed: function () {
    return new $.ig.BarSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.ks(b)
}, _ks: null, ks: function (b) {
    if (arguments.length === 1) {
        this._ks = b;
        return b
    } else {
        return this._ks
    }
}, init: function () {
    $.ig.VerticalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.BarSeries.prototype.$type);
    this.ix(new $.ig.BarFramePreparer(1, this, this.ks(), this, this, this.ks().c9()))
}, jd: function (c) {
    var d = $.ig.util.cast($.ig.CategorySeriesView.prototype.$type, c);
    if (d != null && d == this.dt()) {
        return new $.ig.BarFramePreparer(1, this, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, d), this.seriesViewer().fb().aj(), this, d.c9())
    } else {
        return this.ix()
    }
}, onApplyTemplate: function () {
    $.ig.CategorySeries.prototype.onApplyTemplate.call(this)
}, radiusX: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BarSeries.prototype.radiusXProperty, b);
        return b
    } else {
        return this.b($.ig.BarSeries.prototype.radiusXProperty)
    }
}, radiusY: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BarSeries.prototype.radiusYProperty, b);
        return b
    } else {
        return this.b($.ig.BarSeries.prototype.radiusYProperty)
    }
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode2
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = $.ig.util.cast($.ig.BarSeriesView.prototype.$type, e);
    if (d && f != null && f.d2() != null) {
        f.d2().g(0)
    }
}, i5: function () {
    var e = 0;
    var g = this.seriesViewer().series().getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        if (f == this) {
            return e
        }
        var h = $.ig.util.cast($.ig.IBarSeries.prototype.$type, f);
        if (h != null && h.yAxis() == this.yAxis() && h.getPreferredCategoryMode() == $.ig.CategoryMode.prototype.mode2) {
            e++
        }
    }
    $.ig.Debug.prototype.a(false, "CategorySeries.GetMode2Index failed to find series");
    return -1
}, j2: function (f) {
    var g = 0;
    var h = f.ac();
    var i = f.ab();
    var j = new $.ig.ScalerParams(h, i, this.xAxis().isInverted());
    if (!h.isEmpty() && !i.isEmpty() && this.xAxis() != null) {
        g = this.xAxis().getScaledValue(this.xAxis().referenceValue(), j)
    }
    return g
}, em: function (b) {
    if (this.valueColumn() == null || this.valueColumn().count() == 0) {
        return null
    }
    if (b == this.yAxis()) {
        return new $.ig.AxisRange(0, this.valueColumn().count() - 1)
    }
    if (b == this.xAxis()) {
        return new $.ig.AxisRange(this.valueColumn().minimum(), this.valueColumn().maximum())
    }
    return null
}, scrollIntoView: function (k) {
    var l = this.view().ac();
    var m = this.view().ab();
    var n = new $.ig.Rect(0, 0, 0, 1, 1);
    var o = !l.isEmpty() && !m.isEmpty() && this.dx() != null ? this.dx().item1(k) : -1;
    var p = new $.ig.ScalerParams(n, n, this.xAxis().isInverted());
    var q = new $.ig.ScalerParams(n, n, this.yAxis().isInverted());
    var r = this.yAxis() != null ? this.yAxis().getScaledValue(o, q) : NaN;
    var s = this.yAxis() != null ? this.ix().x(this.yAxis(), n, n) : 0;
    r += s;
    var t = this.xAxis() != null && this.valueColumn() != null && o < this.valueColumn().count() ? this.xAxis().getScaledValue(this.valueColumn().item(o), p) : NaN;
    if (!isNaN(t)) {
        if (t < l.left() + 0.1 * l.width()) {
            t = t + 0.4 * l.width();
            l.x(t - 0.5 * l.width())
        }
        if (t > l.right() - 0.1 * l.width()) {
            t = t - 0.4 * l.width();
            l.x(t - 0.5 * l.width())
        }
    }
    if (!isNaN(r)) {
        if (r < l.top() + 0.1 * l.height()) {
            r = r + 0.4 * l.height();
            l.y(r - 0.5 * l.height())
        }
        if (r > l.bottom() - 0.1 * l.height()) {
            r = r - 0.4 * l.height();
            l.y(r - 0.5 * l.height())
        }
    }
    if (this.syncLink() != null) {
        this.syncLink().bp(this.seriesViewer(), l)
    }
    return o >= 0
}, i6: function (p, q) {
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, p, q);
    var r = p.d;
    if (!q.cc()) {
        return
    }
    var s = q.ac();
    var t = q.ab();
    var u = new $.ig.ScalerParams(s, t, this.xAxis().isInverted());
    var v = this.xAxis();
    var w = v.getScaledValue(v.referenceValue(), u);
    var x = this.yAxis().gz(s, t);
    var y = $.ig.util.cast($.ig.BarSeriesView.prototype.$type, q);
    if (isNaN(x) || Number.isInfinity(x) || isNaN(w)) {
        y.d2().g(0);
        return
    }
    for (var z = 0; z < r.count(); ++z) {
        var A = r.__inner[z][0] - 0.5 * x;
        var B = r.__inner[z][1];
        var C = w;
        C = Math.max(C, -100);
        B = Math.min(B, t.width() + 100);
        var D = y.d2().item(z);
        D.w(x);
        D.v(Math.abs(B - C));
        y.ee(D, Math.min(B, C), A)
    }
    y.d2().g(r.count())
}, fc: function (e, f, g, h) {
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.reset:
        case $.ig.FastItemsSourceEventAction.prototype.insert:
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            this.jt().c9().q(this.resolution());
            break
    }
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.insert:
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.replace:
            if (this.valueMemberPath() != null && this.jt().c9().h() > 0) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.change:
            if (h == this.valueMemberPath()) {
                if (this.xAxis() != null && !this.xAxis().updateRange()) {
                    this.renderSeries(true)
                }
            }
            break
    }
}, e6: function (e, f, g, h) {
    $.ig.VerticalAnchoredCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.BarSeries.prototype.kj:
            if (g != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, g)).deregisterSeries(this)
            }
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).registerSeries(this)
            }
            this.jt().c9().q(this.resolution());
            if (this.xAxis() != null && this.xAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.BarSeries.prototype.kk:
            if (g != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, g)).deregisterSeries(this)
            }
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).registerSeries(this)
            }
            this.jt().dm($.ig.CategoryTrendLineManagerBase.prototype.af(this.jt().dm(), this.yAxis(), this.rootCanvas(), this));
            this.jt().c9().q(this.resolution());
            this.renderSeries(false);
            break;
        case $.ig.Series.prototype.be:
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.jt().c9().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.BarSeries.prototype.jf:
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.jt().c9().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.Series.prototype.bc:
            if (g != null && h == null) {
                this.gn(this.xAxis());
                this.gn(this.yAxis())
            }
            if (g == null && h != null) {
                this.go(this.xAxis());
                this.go(this.yAxis())
            }
            this.jt().c9().q(this.resolution());
            this.renderSeries(false);
            break
    }
}, eg: function (j) {
    var k = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var l = this.view().ab();
    var m = -1;
    if (this.yAxis() != null && !k.isEmpty() && !l.isEmpty()) {
        var n = this.yAxis().gy(l.top(), k, l, this.yAxis().categoryMode());
        var o = this.yAxis().gy(l.bottom(), k, l, this.yAxis().categoryMode());
        var p = (j.__y - k.top()) / k.height();
        var q = n + (p * (o - n));
        if (this.yAxis().categoryMode() != $.ig.CategoryMode.prototype.mode0) {
            q -= 0.5
        }
        var r = Math.round(q);
        m = r
    }
    return m
}, eh: function (c) {
    var d = this.eg(c);
    return d >= 0 && this.dx() != null && d < this.dx().g() ? this.dx().item(d) : null
}, getPreferredCategoryMode: function () {
    return this.preferredCategoryMode(this.yAxis())
}, currentCategoryMode: function () {
    return this.preferredCategoryMode(this.yAxis())
}, scaler: function () {
    return this.yAxis()
}, yScaler: function () {
    return this.xAxis()
}, $type: new $.ig.Type("BarSeries", $.ig.VerticalAnchoredCategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type, $.ig.IBarSeries.prototype.$type])}, true);
$.ig.util.defType("AnchoredCategorySeriesView", "CategorySeriesView", {_dl: null, dl: function (b) {
    if (arguments.length === 1) {
        this._dl = b;
        return b
    } else {
        return this._dl
    }
}, init: function (b) {
    $.ig.CategorySeriesView.prototype.init.call(this, b);
    this.dl(b);
    this.dm(new $.ig.CategoryTrendLineManager())
}, _dm: null, dm: function (b) {
    if (arguments.length === 1) {
        this._dm = b;
        return b
    } else {
        return this._dm
    }
}, ds: function () {
    this.dl().actualTrendLineBrush(null)
}, dt: function () {
    this.dl().actualTrendLineBrush(this.dl().trendLineBrush())
}, du: function () {
    this.dl().actualTrendLineBrush(this.dl().actualBrush())
}, df: function () {
    return new $.ig.AnchoredCategoryBucketCalculator(this)
}, dv: function () {
    this.c9().cacheValues()
}, dw: function () {
    this.c9().unCacheValues()
}, a1: function (d, e) {
    if (d.b()) {
        if (this.dl().trendLineType() != $.ig.TrendLineType.prototype.none && !e) {
            var f = this.dm().n();
            f.a7(this.dl().trendLineThickness());
            f.__stroke = this.dl().actualTrendLineBrush();
            f.a8(this.dl().trendLineDashArray());
            f.a9(this.dl().trendLineDashCap());
            if (this.k) {
                d.e($.ig.GradientDirection.prototype.bottomTop, null)
            }
            d.k(f)
        }
    }
    $.ig.MarkerSeriesView.prototype.a1.call(this, d, e)
}, $type: new $.ig.Type("AnchoredCategorySeriesView", $.ig.CategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("BarSeriesView", "AnchoredCategorySeriesView", {_d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, init: function (c) {
    var b = this;
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, c);
    this.d1(c);
    this.d2((function () {
        var a = new $.ig.Pool$1($.ig.Rectangle.prototype.$type);
        a.create(b.d8.on(b));
        a.activate(b.eb.on(b));
        a.disactivate(b.ec.on(b));
        a.destroy(b.ed.on(b));
        return a
    }()));
    this.dm(new $.ig.BarTrendLineManager())
}, _d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.d3(new $.ig.List$1($.ig.Rectangle.prototype.$type, 0));
    if (!this.ad()) {
        this.u().resolution(4);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, d8: function () {
    var b = new $.ig.Rectangle();
    this.d3().add(b);
    b.__visibility = $.ig.Visibility.prototype.collapsed;
    return b
}, _d3: null, d3: function (b) {
    if (arguments.length === 1) {
        this._d3 = b;
        return b
    } else {
        return this._d3
    }
}, eb: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, ec: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, ed: function (b) {
    this.d3().remove(b)
}, ee: function (e, f, g) {
    var h = false;
    if (e.x() != g) {
        h = true;
        e.x(g)
    }
    if (e.y() != f) {
        h = true;
        e.y(f)
    }
    if (h) {
        this.an()
    }
}, df: function () {
    return new $.ig.BarBucketCalculator(this)
}, ar: function (d, e) {
    $.ig.SeriesView.prototype.ar.call(this, d, e);
    var f = d;
    f.__fill = this.u().actualBrush();
    f.__stroke = this.u().actualOutline();
    f.a7(this.u().thickness());
    f.a8(this.u().dashArray());
    f.a9(this.u().dashCap())
}, at: function (e, f) {
    $.ig.SeriesView.prototype.at.call(this, e, f);
    var g = e;
    var h = this.ay(f);
    g.__fill = h;
    g.__stroke = h;
    g.a7(this.u().thickness())
}, a0: function (f, g) {
    $.ig.SeriesView.prototype.a0.call(this, f, g);
    if (f.b()) {
        for (var h = 0; h < this.d3().count(); h++) {
            var i = this.d3().__inner[h];
            this.ap(i, h, g);
            if (this.k && !g) {
                var j = i.__fill != null && i.__fill.isGradient() ? new $.ig.Rect(0, i.y(), i.x(), i.v(), i.w()) : null;
                f.e($.ig.GradientDirection.prototype.leftRight, j)
            }
            f.f(i)
        }
    }
}, b5: function (g) {
    var f = this;
    $.ig.SeriesView.prototype.b5.call(this, g);
    var k = 0;
    var l = new $.ig.List$1($.ig.Rectangle.prototype.$type, 0);
    var n = this.d2().h().getEnumerator();
    while (n.moveNext()) {
        var m = n.current();
        l.add(m)
    }
    l.t(function (a, b) {
        if (a.x() > b.x()) {
            return -1
        } else {
            if (a.x() < b.x()) {
                return 1
            } else {
                return 0
            }
        }
    });
    var p = l.getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        var q = new $.ig.RectangleVisualData(1, "column" + k, o);
        q.tags().add("Main");
        g.shapes().add(q)
    }
    k++
}, $type: new $.ig.Type("BarSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("AnchoredCategoryBucketCalculator", "CategoryBucketCalculator", {init: function (b) {
    $.ig.CategoryBucketCalculator.prototype.init.call(this, b);
    this.t(b)
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, getBucket: function (l) {
    var k = this;
    var m = this.r;
    var n = m.length;
    var o = Math.min(l * this.h(), n - 1);
    var p = Math.min(o + this.h() - 1, n - 1);
    var q = NaN;
    var r = NaN;
    var s = true;
    for (var t = o; t <= p; ++t) {
        var u = m[t];
        if (!s) {
            if (!isNaN(u)) {
                q = q < u ? q : u;
                r = r > u ? r : u
            }
        } else {
            if (!isNaN(u)) {
                q = u;
                r = u;
                s = false
            }
        }
    }
    if (!s) {
        return(function () {
            var a = new Array();
            a.add((0.5 * (o + p)));
            a.add(q);
            a.add(r);
            return a
        }())
    }
    return(function () {
        var a = new Array();
        a.add((0.5 * (o + p)));
        a.add(NaN);
        a.add(NaN);
        return a
    }())
}, r: null, cacheValues: function () {
    this.r = this.t().dl().valueColumn().asArray()
}, unCacheValues: function () {
    this.r = null
}, $type: new $.ig.Type("AnchoredCategoryBucketCalculator", $.ig.CategoryBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("BarBucketCalculator", "CategoryBucketCalculator", {init: function (b) {
    $.ig.CategoryBucketCalculator.prototype.init.call(this, b);
    this.t(b)
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, q: function (i) {
    var j = this.e().ac();
    var k = this.e().ab();
    var l = this.e().c8().dx();
    if (j.isEmpty() || k.isEmpty() || this.t().d1().yAxis() == null || l == null || l.g() == 0) {
        this.h(0);
        return
    }
    var m = $.ig.util.cast($.ig.BarSeries.prototype.$type, this.e().c8());
    var n = Math.floor(m.yAxis().gy(k.top(), j, k, $.ig.CategoryMode.prototype.mode0));
    var o = Math.ceil(m.yAxis().gy(k.bottom(), j, k, $.ig.CategoryMode.prototype.mode0));
    if (!m.yAxis().isInverted()) {
        o = Math.ceil(m.yAxis().gy(k.top(), j, k, $.ig.CategoryMode.prototype.mode0));
        n = Math.floor(m.yAxis().gy(k.bottom(), j, k, $.ig.CategoryMode.prototype.mode0))
    }
    var p = Math.floor((o - n + 1) * i / k.height());
    this.h(Math.max(1, p));
    this.f(Math.max(0, Math.floor(n / this.h()) - 1));
    this.g(Math.ceil(o / this.h()))
}, getBucket: function (k) {
    var j = this;
    var l = this.r;
    var m = l.length;
    var n = Math.min(k * this.h(), m - 1);
    var o = Math.min(n + this.h() - 1, m - 1);
    var p = NaN;
    var q = NaN;
    for (var r = n; r <= o; ++r) {
        var s = l[r];
        if (!isNaN(p)) {
            if (!isNaN(s)) {
                p = Math.min(p, s);
                q = Math.max(q, s)
            }
        } else {
            p = s;
            q = s
        }
    }
    if (!isNaN(p)) {
        return(function () {
            var a = new Array();
            a.add((0.5 * (n + o)));
            a.add(p);
            a.add(q);
            return a
        }())
    }
    return(function () {
        var a = new Array();
        a.add((0.5 * (n + o)));
        a.add(NaN);
        a.add(NaN);
        return a
    }())
}, r: null, cacheValues: function () {
    this.r = this.t().d1().valueColumn().asArray()
}, unCacheValues: function () {
    this.r = null
}, $type: new $.ig.Type("BarBucketCalculator", $.ig.CategoryBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("HorizontalAnchoredCategorySeries", "AnchoredCategorySeries", {init: function () {
    $.ig.AnchoredCategorySeries.prototype.init.call(this)
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HorizontalAnchoredCategorySeries.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HorizontalAnchoredCategorySeries.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HorizontalAnchoredCategorySeries.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HorizontalAnchoredCategorySeries.prototype.yAxisProperty)
    }
}, ja: function () {
    return this.xAxis()
}, jb: function () {
    return this.yAxis()
}, j8: function (b) {
    this.xAxis($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, b))
}, j9: function (b) {
    this.yAxis($.ig.util.cast($.ig.NumericYAxis.prototype.$type, b))
}, jc: function () {
    return this.yAxis() != null && this.yAxis().updateRange()
}, _kp: null, kp: function (b) {
    if (arguments.length === 1) {
        this._kp = b;
        return b
    } else {
        return this._kp
    }
}, _kq: null, kq: function (b) {
    if (arguments.length === 1) {
        this._kq = b;
        return b
    } else {
        return this._kq
    }
}, kv: function (b) {
    this.kp(b)
}, kw: function (b) {
    this.kq(b)
}, e6: function (e, f, g, h) {
    switch (f) {
        case $.ig.HorizontalAnchoredCategorySeries.prototype.kj:
            this.jt().dm($.ig.CategoryTrendLineManagerBase.prototype.af(this.jt().dm(), this.xAxis(), this.rootCanvas(), this));
            break
    }
    $.ig.AnchoredCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.HorizontalAnchoredCategorySeries.prototype.kj:
            this.gn($.ig.util.cast($.ig.Axis.prototype.$type, g));
            this.go($.ig.util.cast($.ig.Axis.prototype.$type, h));
            this.kp(this.xAxis());
            this.kv(this.xAxis());
            this.iy().c9().q(this.resolution());
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.HorizontalAnchoredCategorySeries.prototype.kk:
            this.gn($.ig.util.cast($.ig.Axis.prototype.$type, g));
            this.go($.ig.util.cast($.ig.Axis.prototype.$type, h));
            this.kq(this.yAxis());
            this.kw(this.yAxis());
            this.iy().c9().q(this.resolution());
            this.jc();
            this.renderSeries(false);
            this.e5();
            break
    }
}, fc: function (e, f, g, h) {
    $.ig.AnchoredCategorySeries.prototype.fc.call(this, e, f, g, h);
    if (this.kp() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.kp()) !== null) {
        ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.kp())).notifyDataChanged()
    }
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            if (this.kp() != null) {
                this.kp().updateRange()
            }
            if (this.kq() != null && !this.kq().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.insert:
            if (this.kp() != null) {
                this.kp().updateRange()
            }
            if (this.kq() != null && !this.kq().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            if (this.kp() != null) {
                this.kp().updateRange()
            }
            if (this.kq() != null && !this.kq().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.replace:
            if (this.jv() != null && this.jt().c9().h() > 0 && this.kq() != null && !this.kq().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.change:
            if (h == this.jv()) {
                if (this.xAxis() != null) {
                    this.xAxis().updateRange()
                }
                if (this.yAxis() != null && !this.yAxis().updateRange()) {
                    this.renderSeries(true)
                }
            }
            break
    }
}, $type: new $.ig.Type("HorizontalAnchoredCategorySeries", $.ig.AnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("PointSeries", "HorizontalAnchoredCategorySeries", {ed: function () {
    return new $.ig.PointSeriesView(this)
}, _ky: null, ky: function (b) {
    if (arguments.length === 1) {
        this._ky = b;
        return b
    } else {
        return this._ky
    }
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.ky(b)
}, init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.PointSeries.prototype.$type)
}, i6: function (c, d) {
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, c, d)
}, e6: function (e, f, g, h) {
    $.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, e, f, g, h)
}, $type: new $.ig.Type("PointSeries", $.ig.HorizontalAnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("PointSeriesView", "AnchoredCategorySeriesView", {_dy: null, dy: function (b) {
    if (arguments.length === 1) {
        this._dy = b;
        return b
    } else {
        return this._dy
    }
}, init: function (b) {
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, b);
    this.dy(b)
}, $type: new $.ig.Type("PointSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("SplineSeriesBaseView", "AnchoredCategorySeriesView", {_dy: null, dy: function (b) {
    if (arguments.length === 1) {
        this._dy = b;
        return b
    } else {
        return this._dy
    }
}, init: function (b) {
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, b);
    this.dy(b)
}, $type: new $.ig.Type("SplineSeriesBaseView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("SplineAreaSeriesView", "SplineSeriesBaseView", {_d6: null, d6: function (b) {
    if (arguments.length === 1) {
        this._d6 = b;
        return b
    } else {
        return this._d6
    }
}, init: function (b) {
    this.d1 = new $.ig.Path();
    this.d2 = new $.ig.Path();
    this.d3 = new $.ig.Path();
    this.d4 = new $.ig.Path();
    $.ig.SplineSeriesBaseView.prototype.init.call(this, b);
    this.d6(b)
}, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, d1: null, d2: null, d3: null, d4: null, d9: function () {
    this.d1.bp(null);
    this.d3.bp(null);
    this.d2.bp(null);
    this.d4.bp(null);
    this.an()
}, ea: function (h, i, j, k, l, m, n) {
    this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
    this.dl().ju().p(this.d1, this.d2, this.d3, this.d4, h, i, j, k, l, m, n);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.d1.__fill = this.u().actualBrush();
    this.d3.__fill = this.u().actualBrush();
    this.d3.__opacity = 0.5;
    this.d2.__stroke = this.u().actualOutline();
    this.d2.a7(this.u().thickness());
    this.d2.a8(this.u().dashArray());
    this.d2.a9(this.u().dashCap());
    this.d4.__stroke = this.u().actualOutline();
    this.d4.a7(this.u().thickness());
    this.d4.a8(this.u().dashArray());
    this.d4.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.d1.__fill = b;
    this.d3.__fill = b;
    this.d3.__opacity = 1;
    this.d2.__stroke = b;
    this.d2.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d4.__stroke = b;
    this.d4.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.d6().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.g(this.d1);
        d.g(this.d3);
        d.g(this.d2);
        d.g(this.d4)
    }
}, b5: function (f) {
    $.ig.SeriesView.prototype.b5.call(this, f);
    var g = new $.ig.PathVisualData(1, "lowerShape", this.d2);
    g.tags().add("Lower");
    var h = new $.ig.PathVisualData(1, "upperShape", this.d4);
    h.tags().add("Upper");
    h.tags().add("Main");
    var i = new $.ig.PathVisualData(1, "translucentShape", this.d1);
    i.tags().add("Translucent");
    var j = new $.ig.PathVisualData(1, "fillShape", this.d3);
    j.tags().add("Fill");
    f.shapes().add(g);
    f.shapes().add(h);
    f.shapes().add(i);
    f.shapes().add(j)
}, $type: new $.ig.Type("SplineAreaSeriesView", $.ig.SplineSeriesBaseView.prototype.$type)}, true);
$.ig.util.defType("AreaSeries", "HorizontalAnchoredCategorySeries", {ed: function () {
    return new $.ig.AreaSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.k0(b)
}, _k0: null, k0: function (b) {
    if (arguments.length === 1) {
        this._k0 = b;
        return b
    } else {
        return this._k0
    }
}, init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.AreaSeries.prototype.$type)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d5()
}, i6: function (g, h) {
    var f = this;
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, g, h);
    var i = h.c9().h();
    var j = $.ig.util.cast($.ig.AreaSeriesView.prototype.$type, h);
    var l = g.d;
    j.d6(l.count(), l, true, i, this.resolution(), function (a, b, c, d, e) {
        return f.j3(a, g.d.count(), h)
    }, this.unknownValuePlotting());
    var m = this.jb();
    j.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), m.referenceValue(), m.actualMinimumValue(), m.actualMaximumValue())
}, unknownValuePlotting: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AreaSeries.prototype.unknownValuePlottingProperty, b);
        return b
    } else {
        return this.b($.ig.AreaSeries.prototype.unknownValuePlottingProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.AreaSeries.prototype.kx:
            this.renderSeries(false);
            this.e5();
            break
    }
}, $type: new $.ig.Type("AreaSeries", $.ig.HorizontalAnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("AreaSeriesView", "AnchoredCategorySeriesView", {_d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, init: function (b) {
    this.dx = new $.ig.Path();
    this.dy = new $.ig.Path();
    this.dz = new $.ig.Path();
    this.d0 = new $.ig.Path();
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, b);
    this.d2(b)
}, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, dx: null, dy: null, dz: null, d0: null, d5: function () {
    this.dx.bp(null);
    this.dz.bp(null);
    this.dy.bp(null);
    this.d0.bp(null);
    this.an()
}, d6: function (h, i, j, k, l, m, n) {
    this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
    this.dl().ju().p(this.dx, this.dy, this.dz, this.d0, h, i, j, k, l, m, n);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dx.__fill = this.u().actualBrush();
    this.dz.__fill = this.u().actualBrush();
    this.dz.__opacity = 0.5;
    this.dy.__stroke = this.u().actualOutline();
    this.dy.a7(this.u().thickness());
    this.dy.a8(this.u().dashArray());
    this.dy.a9(this.u().dashCap());
    this.d0.__stroke = this.u().actualOutline();
    this.d0.a7(this.u().thickness());
    this.d0.a8(this.u().dashArray());
    this.d0.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dx.__fill = b;
    this.dz.__fill = b;
    this.dz.__opacity = 1;
    this.dy.__stroke = b;
    this.dy.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d0.__stroke = b;
    this.d0.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (this.k && !e) {
        var f = this.b8(this.d2().yAxis());
        d.e($.ig.GradientDirection.prototype.bottomTop, f)
    }
    d.g(this.dx);
    d.g(this.dz);
    d.g(this.dy);
    d.g(this.d0)
}, b5: function (f) {
    $.ig.SeriesView.prototype.b5.call(this, f);
    var g = new $.ig.PathVisualData(1, "lowerShape", this.dy);
    g.tags().add("Lower");
    var h = new $.ig.PathVisualData(1, "upperShape", this.d0);
    h.tags().add("Upper");
    h.tags().add("Main");
    var i = new $.ig.PathVisualData(1, "translucentShape", this.dx);
    i.tags().add("Translucent");
    var j = new $.ig.PathVisualData(1, "fillShape", this.dz);
    j.tags().add("Fill");
    f.shapes().add(g);
    f.shapes().add(h);
    f.shapes().add(i);
    f.shapes().add(j)
}, $type: new $.ig.Type("AreaSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("CategoryLineRasterizer", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.PointCollection(0)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, a: null, d: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, i: function (B, Y, Z, aa, ab, ac, ad, ae, af, ag) {
    var A = this;
    var ah = new $.ig.PathGeometry();
    var ai = new $.ig.PathGeometry();
    var aj = new $.ig.PathGeometry();
    B.bp(ah);
    Y.bp(ai);
    Z.bp(aj);
    ah.d(new $.ig.PathFigureCollection());
    ai.d(new $.ig.PathFigureCollection());
    aj.d(new $.ig.PathFigureCollection());
    var ak = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var al = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var am = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var an = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    if (ad == $.ig.UnknownValuePlotting.prototype.linearInterpolate || ad == $.ig.UnknownValuePlotting.prototype.dontPlot) {
        var ao = ad == $.ig.UnknownValuePlotting.prototype.dontPlot ? ae : null;
        var ap = 0;
        for (var aq = 0; aq < aa; aq++) {
            if (isNaN(ab.__inner[aq][1])) {
                var ar = aq - ap;
                var at = (ad == $.ig.UnknownValuePlotting.prototype.linearInterpolate && ar > 0) || (ad == $.ig.UnknownValuePlotting.prototype.dontPlot && ar > 1);
                if (at) {
                    if (ad == $.ig.UnknownValuePlotting.prototype.dontPlot || ak.count() == 0) {
                        var au = new $.ig.PolyLineSegment();
                        var av = new $.ig.PolyLineSegment();
                        var aw = new $.ig.PolyLineSegment();
                        var ax = new $.ig.PolyLineSegment();
                        ak.add(au);
                        al.add(av);
                        am.add(aw);
                        an.add(ax)
                    }
                    this.o(ak.__inner[ak.count() - 1].__points, al.__inner[al.count() - 1].__points, am.__inner[am.count() - 1].__points, an.__inner[an.count() - 1].__points, ap, aq - 1, ab, ac, ao, af, ag)
                }
                ap = aq + 1
            }
        }
        if (ad == $.ig.UnknownValuePlotting.prototype.dontPlot || ak.count() == 0) {
            var C = new $.ig.PolyLineSegment();
            var D = new $.ig.PolyLineSegment();
            var E = new $.ig.PolyLineSegment();
            var F = new $.ig.PolyLineSegment();
            ak.add(C);
            al.add(F);
            am.add(D);
            an.add(E)
        }
        this.o(ak.__inner[ak.count() - 1].__points, al.__inner[al.count() - 1].__points, am.__inner[am.count() - 1].__points, an.__inner[an.count() - 1].__points, ap, aa - 1, ab, ac, ao, af, ag);
        if (ao == null && ak.count() == 1 && ae != null) {
            this.j(ak.__inner[0], ae)
        }
    } else {
        ak.add(new $.ig.PolyLineSegment());
        al.add(new $.ig.PolyLineSegment());
        am.add(new $.ig.PolyLineSegment());
        an.add(new $.ig.PolyLineSegment());
        this.l(ak.__inner[0].__points, al.__inner[0].__points, am.__inner[0].__points, an.__inner[0].__points, aa, ab, ac, ae, af, ag)
    }
    for (var G = 0; G < ak.count(); G++) {
        var H = ak.__inner[G];
        var I = al.__inner[G];
        var J = am.__inner[G];
        var K = an.__inner[G];
        if (H.__points.count() > 0) {
            var L = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = H.__points.__inner[0];
                return a
            }());
            L.__segments.add(H);
            ah.d().add(L)
        }
        if (I.__points.count() > 0) {
            var M = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = I.__points.__inner[0];
                return a
            }());
            M.__segments.add(I);
            aj.d().add(M)
        }
        if (J.__points.count() > 0 && K.__points.count() > 0) {
            var N = new $.ig.PolyLineSegment();
            if (ae != null) {
                var O = ae.i();
                ae.i(true);
                ae.h(N.__points);
                var Q = J.__points.getEnumerator();
                while (Q.moveNext()) {
                    var P = Q.current();
                    ae.l(P)
                }
                var S = K.__points.reverse$1($.ig.Point.prototype.$type).getEnumerator();
                while (S.moveNext()) {
                    var R = S.current();
                    ae.l(R)
                }
                ae.h(null);
                ae.i(O)
            } else {
                var U = J.__points.getEnumerator();
                while (U.moveNext()) {
                    var T = U.current();
                    N.__points.add(T)
                }
                var W = K.__points.reverse$1($.ig.Point.prototype.$type).getEnumerator();
                while (W.moveNext()) {
                    var V = W.current();
                    N.__points.add(V)
                }
            }
            if (N.__points.count() > 0) {
                var X = (function () {
                    var a = new $.ig.PathFigure();
                    a.__startPoint = N.__points.__inner[0];
                    return a
                }());
                X.__segments.add(N);
                ai.d().add(X)
            }
        }
    }
}, j: function (f, g) {
    var h = f.__points;
    g.h(f.__points = new $.ig.PointCollection(0));
    var j = h.getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        g.l(i)
    }
    g.h(null)
}, k: function (k, l, m, n, o, p, q, r, s, t) {
    k.bn().clear();
    m.bn().clear();
    n.bn().clear();
    l.bn().clear();
    this.l(k.bn(), l.bn(), m.bn(), n.bn(), o, p, q, r, s, t);
    k.a6(k.bn().count() > 0);
    m.a6(m.bn().count() > 0);
    n.a6(n.bn().count() > 0);
    l.a6(l.bn().count() > 0)
}, l: function (k, l, m, n, o, p, q, r, s, t) {
    this.o(k, l, m, n, 0, o - 1, p, q, r, s, t)
}, m: function (t, u, v, w, x, y, z) {
    var A = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), w, x, y, u, v, z);
    var B = 0;
    var C = A.count();
    var D;
    var E;
    var F;
    if (x) {
        for (var G = 0; G < C; G++) {
            B = A.__inner[G];
            D = w.__inner[B];
            E = D[0];
            F = D[1];
            var H = {__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
            t.add(H)
        }
    } else {
        if (y) {
            for (var I = 0; I < C; I++) {
                B = A.__inner[I];
                D = w.__inner[B];
                E = D[0];
                F = D[2];
                var J = {__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                t.add(J)
            }
        } else {
            for (var K = 0; K < C; K++) {
                B = A.__inner[K];
                D = w.__inner[B];
                E = D[2];
                F = D[3];
                var L = {__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                t.add(L)
            }
        }
    }
}, n: function (f, g, h, i) {
    h.h(f);
    for (var j = 0; j < g.count(); j++) {
        h.l(g.__inner[j])
    }
    h.h(null)
}, o: function (y, z, A, B, C, D, E, F, G, H, I) {
    if (D > -1) {
        if (H == 1 && !this.c()) {
            var J = new $.ig.PointCollection(0);
            this.m(J, C, D, E, true, F, I);
            if (G != null) {
                this.n(y, J, G, I)
            } else {
                var L = J.getEnumerator();
                while (L.moveNext()) {
                    var K = L.current();
                    y.add(K)
                }
            }
        } else {
            var M = new $.ig.PointCollection(0);
            var N = new $.ig.PointCollection(0);
            this.m(M, C, D, E, true, F, I);
            this.m(N, C, D, E, false, F, I);
            var P = M.getEnumerator();
            while (P.moveNext()) {
                var O = P.current();
                A.add(O)
            }
            var R = N.getEnumerator();
            while (R.moveNext()) {
                var Q = R.current();
                B.add(Q)
            }
            if (G != null) {
                this.n(y, M, G, I);
                this.n(z, N, G, I)
            } else {
                var T = M.getEnumerator();
                while (T.moveNext()) {
                    var S = T.current();
                    y.add(S)
                }
                var V = N.getEnumerator();
                while (V.moveNext()) {
                    var U = V.current();
                    z.add(U)
                }
            }
        }
    }
}, p: function (B, Q, R, S, T, U, V, W, X, Y, Z) {
    var A = this;
    var aa = new $.ig.PathGeometry();
    var ab = new $.ig.PathGeometry();
    var ac = new $.ig.PathGeometry();
    var ad = new $.ig.PathGeometry();
    B.bp(aa);
    Q.bp(ab);
    R.bp(ac);
    S.bp(ad);
    aa.d(new $.ig.PathFigureCollection());
    ab.d(new $.ig.PathFigureCollection());
    ac.d(new $.ig.PathFigureCollection());
    ad.d(new $.ig.PathFigureCollection());
    var ae = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var af = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var ag = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var ah = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    if (Z == $.ig.UnknownValuePlotting.prototype.linearInterpolate || Z == $.ig.UnknownValuePlotting.prototype.dontPlot) {
        var ai = 0;
        for (var aj = 0; aj < T; aj++) {
            if (isNaN(U.__inner[aj][1])) {
                var ak = aj - ai;
                var al = (Z == $.ig.UnknownValuePlotting.prototype.linearInterpolate && ak > 0) || (Z == $.ig.UnknownValuePlotting.prototype.dontPlot && ak > 1);
                if (al) {
                    if (Z == $.ig.UnknownValuePlotting.prototype.dontPlot || af.count() == 0) {
                        var am = new $.ig.PolyLineSegment();
                        var an = new $.ig.PolyLineSegment();
                        var ao = new $.ig.PolyLineSegment();
                        var C = new $.ig.PolyLineSegment();
                        ae.add(am);
                        af.add(an);
                        ag.add(ao);
                        ah.add(C)
                    }
                    this.q(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, ai, aj - 1, U, V, W, X);
                    if (Z == $.ig.UnknownValuePlotting.prototype.dontPlot) {
                        Y(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, false)
                    }
                }
                ai = aj + 1
            }
        }
        if (Z == $.ig.UnknownValuePlotting.prototype.dontPlot || af.count() == 0) {
            var D = new $.ig.PolyLineSegment();
            var E = new $.ig.PolyLineSegment();
            var F = new $.ig.PolyLineSegment();
            var G = new $.ig.PolyLineSegment();
            ae.add(D);
            af.add(E);
            ag.add(F);
            ah.add(G)
        }
        this.q(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, ai, T - 1, U, V, W, X);
        Y(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, true)
    } else {
        ae.add(new $.ig.PolyLineSegment());
        af.add(new $.ig.PolyLineSegment());
        ag.add(new $.ig.PolyLineSegment());
        ah.add(new $.ig.PolyLineSegment());
        this.q(ae.__inner[0].__points, af.__inner[0].__points, ag.__inner[0].__points, ah.__inner[0].__points, 0, T - 1, U, V, W, X);
        Y(ae.__inner[0].__points, af.__inner[0].__points, ag.__inner[0].__points, ah.__inner[0].__points, true)
    }
    for (var H = 0; H < af.count(); H++) {
        var I = ae.__inner[H];
        var J = af.__inner[H];
        var K = ag.__inner[H];
        var L = ah.__inner[H];
        if (I.__points.count() > 0) {
            var M = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = I.__points.__inner[0];
                return a
            }());
            M.__segments.add(I);
            aa.d().add(M)
        }
        if (J.__points.count() > 0) {
            var N = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = J.__points.__inner[0];
                return a
            }());
            N.__segments.add(J);
            ab.d().add(N)
        }
        if (K.__points.count() > 0) {
            var O = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = K.__points.__inner[0];
                return a
            }());
            O.__segments.add(K);
            ac.d().add(O)
        }
        if (L.__points.count() > 0) {
            var P = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = L.__points.__inner[0];
                return a
            }());
            P.__segments.add(L);
            ad.d().add(P)
        }
    }
}, q: function (A, E, F, G, H, I, J, K, L, M) {
    this.d().clear();
    if (L == 1 && !this.c()) {
        var N = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), J, true, K, H, I, M);
        var O = N.count();
        var P = 0;
        var Q;
        var R;
        var S;
        for (var T = 0; T < O; T++) {
            P = N.__inner[T];
            Q = J.__inner[P];
            R = Q[0];
            S = Q[1];
            A.add({__x: R, __y: S, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            G.add({__x: R, __y: S, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            this.d().add({__x: R, __y: S, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    } else {
        var U = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), J, true, K, H, I, M);
        var V = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), J, false, K, H, I, M);
        var W = U.count();
        var X = V.count();
        var Y = 0;
        var Z;
        var aa;
        var ab;
        for (var ac = 0; ac < W; ac++) {
            Y = U.__inner[ac];
            Z = J.__inner[Y];
            aa = Z[0];
            ab = Z[1];
            A.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            E.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            F.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            this.d().add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
        var B;
        var C;
        for (var D = X - 1; D >= 0; D--) {
            Y = V.__inner[D];
            Z = J.__inner[Y];
            if (K) {
                B = Z[0];
                C = Z[2]
            } else {
                B = Z[2];
                C = Z[3]
            }
            G.add({__x: B, __y: C, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            F.add({__x: B, __y: C, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, $type: new $.ig.Type("CategoryLineRasterizer", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ColumnSeries", "HorizontalAnchoredCategorySeries", {ed: function () {
    return new $.ig.ColumnSeriesView(this)
}, _k2: null, k2: function (b) {
    if (arguments.length === 1) {
        this._k2 = b;
        return b
    } else {
        return this._k2
    }
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.k2(b)
}, init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.ColumnSeries.prototype.$type)
}, radiusX: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ColumnSeries.prototype.radiusXProperty, b);
        return b
    } else {
        return this.b($.ig.ColumnSeries.prototype.radiusXProperty)
    }
}, radiusY: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ColumnSeries.prototype.radiusYProperty, b);
        return b
    } else {
        return this.b($.ig.ColumnSeries.prototype.radiusYProperty)
    }
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode2
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    if (d && f.d3() != null) {
        f.d3().g(0)
    }
}, i6: function (p, q) {
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, p, q);
    var r = p.d;
    if (!q.a9()) {
        return
    }
    var s = q.ac();
    var t = q.ab();
    var u = new $.ig.ScalerParams(s, t, this.yAxis().isInverted());
    var v = this.yAxis();
    var w = v.getScaledValue(v.referenceValue(), u);
    var x = this.xAxis().gz(s, t);
    var y = q;
    if (isNaN(x) || Number.isInfinity(x)) {
        y.d3().g(0);
        return
    }
    for (var z = 0; z < r.count(); ++z) {
        var A = r.__inner[z][0] - 0.5 * x;
        var B = r.__inner[z][1];
        var C = w;
        B = Math.max(B, -100);
        C = Math.min(C, t.height() + 100);
        var D = y.d3().item(z);
        D.v(x);
        D.w(Math.abs(C - B));
        y.ec(D, A, Math.min(C, B))
    }
    y.d3().g(r.count())
}, $type: new $.ig.Type("ColumnSeries", $.ig.HorizontalAnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("ColumnSeriesView", "AnchoredCategorySeriesView", {ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.d2(new $.ig.List$1($.ig.Rectangle.prototype.$type, 0));
    if (!this.ad()) {
        this.u().resolution(4);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, _d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, init: function (c) {
    var b = this;
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, c);
    this.d1(c);
    this.d3((function () {
        var a = new $.ig.Pool$1($.ig.Rectangle.prototype.$type);
        a.create(b.d6.on(b));
        a.activate(b.d9.on(b));
        a.disactivate(b.ea.on(b));
        a.destroy(b.eb.on(b));
        return a
    }()))
}, d6: function () {
    var b = new $.ig.Rectangle();
    this.d2().add(b);
    b.__visibility = $.ig.Visibility.prototype.collapsed;
    return b
}, _d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, d9: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, ea: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, eb: function (b) {
    this.d2().remove(b)
}, ec: function (e, f, g) {
    var h = false;
    if (e.x() != g) {
        h = true;
        e.x(g)
    }
    if (e.y() != f) {
        h = true;
        e.y(f)
    }
    if (h) {
        this.an()
    }
}, ar: function (d, e) {
    $.ig.SeriesView.prototype.ar.call(this, d, e);
    var f = d;
    f.__fill = this.u().actualBrush();
    f.__stroke = this.u().actualOutline();
    f.a7(this.u().thickness());
    f.a8(this.u().dashArray());
    f.a9(this.u().dashCap())
}, at: function (e, f) {
    $.ig.SeriesView.prototype.at.call(this, e, f);
    var g = e;
    var h = this.ay(f);
    g.__fill = h;
    g.__stroke = h;
    g.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (f, g) {
    $.ig.SeriesView.prototype.a0.call(this, f, g);
    if (f.b()) {
        for (var h = 0; h < this.d2().count(); h++) {
            var i = this.d2().__inner[h];
            this.ap(i, h, g);
            if (this.k && !g) {
                var j = i.__fill != null && i.__fill.isGradient() ? new $.ig.Rect(0, i.y(), i.x(), i.v(), i.w()) : null;
                f.e($.ig.GradientDirection.prototype.bottomTop, j)
            }
            f.f(i)
        }
    }
}, _d3: null, d3: function (b) {
    if (arguments.length === 1) {
        this._d3 = b;
        return b
    } else {
        return this._d3
    }
}, b5: function (g) {
    var f = this;
    $.ig.SeriesView.prototype.b5.call(this, g);
    var k = 0;
    var l = new $.ig.List$1($.ig.Rectangle.prototype.$type, 0);
    var n = this.d3().h().getEnumerator();
    while (n.moveNext()) {
        var m = n.current();
        l.add(m)
    }
    l.t(function (a, b) {
        if (a.y() < b.y()) {
            return -1
        } else {
            if (a.y() > b.y()) {
                return 1
            } else {
                return 0
            }
        }
    });
    var p = l.getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        var q = new $.ig.RectangleVisualData(1, "column" + k, o);
        q.tags().add("Main");
        g.shapes().add(q)
    }
    k++
}, $type: new $.ig.Type("ColumnSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("LineSeries", "HorizontalAnchoredCategorySeries", {ed: function () {
    return new $.ig.LineSeriesView(this)
}, _k0: null, k0: function (b) {
    if (arguments.length === 1) {
        this._k0 = b;
        return b
    } else {
        return this._k0
    }
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.k0(b)
}, init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.LineSeries.prototype.$type)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d4()
}, i6: function (f, g) {
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, f, g);
    var h = g.c9().h();
    var i = $.ig.util.cast($.ig.LineSeriesView.prototype.$type, g);
    var j = f.d;
    i.d5(j.count(), j, true, this.unknownValuePlotting(), this.j4(j, j.count() - 1, g.ab(), g.ac()), h, this.resolution());
    i.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), NaN, NaN, NaN)
}, unknownValuePlotting: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.LineSeries.prototype.unknownValuePlottingProperty, b);
        return b
    } else {
        return this.b($.ig.LineSeries.prototype.unknownValuePlottingProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.LineSeries.prototype.kx:
            this.renderSeries(false);
            this.e5();
            break
    }
}, $type: new $.ig.Type("LineSeries", $.ig.HorizontalAnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("LineSeriesView", "AnchoredCategorySeriesView", {_d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, init: function (b) {
    this.dx = new $.ig.Path();
    this.dy = new $.ig.Path();
    this.dz = new $.ig.Path();
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, b);
    this.d1(b)
}, dx: null, dy: null, dz: null, d4: function () {
    this.dy.bp(null);
    this.dx.bp(null);
    this.dz.bp(null);
    this.an()
}, d5: function (h, i, j, k, l, m, n) {
    this.d1().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
    this.d1().ju().i(this.dx, this.dy, this.dz, h, i, j, k, l, m, n);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dx.__stroke = this.u().actualBrush();
    this.dx.a7(this.u().thickness());
    this.dx.a8(this.u().dashArray());
    this.dx.a9(this.u().dashCap());
    this.dz.__stroke = this.u().actualBrush();
    this.dz.a7(this.u().thickness());
    this.dz.a8(this.u().dashArray());
    this.dz.a9(this.u().dashCap());
    this.dy.__fill = this.u().actualBrush();
    this.dy.__opacity = 0.75
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dx.__stroke = b;
    this.dx.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.dz.__stroke = b;
    this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.dy.__fill = b;
    this.dy.__opacity = 1
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.d1().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.g(this.dy);
        d.g(this.dx);
        d.g(this.dz)
    }
}, b5: function (e) {
    $.ig.SeriesView.prototype.b5.call(this, e);
    var f = new $.ig.PathVisualData(1, "lowerShape", this.dx);
    f.tags().add("Lower");
    f.tags().add("Main");
    var g = new $.ig.PathVisualData(1, "upperShape", this.dz);
    g.tags().add("Upper");
    var h = new $.ig.PathVisualData(1, "translucentShape", this.dy);
    h.tags().add("Translucent");
    e.shapes().add(f);
    e.shapes().add(g);
    e.shapes().add(h)
}, $type: new $.ig.Type("LineSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("SplineSeriesBase", "HorizontalAnchoredCategorySeries", {init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this)
}, ed: function () {
    return new $.ig.SplineSeriesBaseView(this)
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.k3(b)
}, _k3: null, k3: function (b) {
    if (arguments.length === 1) {
        this._k3 = b;
        return b
    } else {
        return this._k3
    }
}, _k4: null, k4: function (b) {
    if (arguments.length === 1) {
        this._k4 = b;
        return b
    } else {
        return this._k4
    }
}, k9: function (b) {
    return b
}, la: function (o, R, S, T, U, V) {
    var m = this;
    var W = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, T);
    if (W == null) {
        return
    }
    var X = new $.ig.ScalerParams(R, S, T.isInverted());
    var Y = new $.ig.ScalerParams(R, S, U.isInverted());
    var Z = this.ie();
    var aa = 0;
    var ab = this.lc(T, R, S);
    var ac = function (a) {
        return a
    };
    var ad = function (a) {
        return m.valueColumn().item(W.sortedIndices().__inner[a])
    };
    var ae = this.iy().c9().g();
    var af = this.iy().c9().f();
    var ag = Math.ceil(S.width() / (ae - af));
    var ah = new $.ig.CollisionAvoider();
    var ai = this.iy().c9().h();
    if (ai <= 0 || (af <= 0 && ae <= 0)) {
        this.iy().da().g(aa);
        return
    }
    for (var aj = af; aj < ae + 1; ++aj) {
        var ak = null;
        var al = aj * ai;
        if (W != null && W.sortedIndices() != null && al >= 0 && al < W.sortedIndices().count()) {
            al = W.sortedIndices().__inner[al]
        }
        if (aj >= (this.valueColumn().count() - 1)) {
            if (Z && this.lb(o, o.d.last$1($.ig.Array.prototype.$type), ah, Math.min(al, this.dx().g() - 1), aa, V)) {
                ++aa
            }
            break
        }
        var am = ac(aj);
        var an = ad(aj);
        var A = ac(aj + 1);
        var B = ad(aj + 1);
        var C = A - am;
        var D = this.k4()[aj];
        var E = this.k4()[aj + 1];
        var F = W.getUnscaledValueAt(W.sortedIndices().__inner[aj]);
        var G = T.getScaledValue(F, X) + ab;
        var H = U.getScaledValue(an, Y);
        o.d.add((function () {
            var a = new Array();
            a.add(G);
            a.add(H);
            a.add(H);
            return a
        }()));
        for (var I = 1; I < ag; ++I) {
            var J = (I) / (ag);
            var K = am + C * J;
            var L = (A - K) / C;
            var M = (K - am) / C;
            var N = L * an + M * B + ((L * L * L - L) * D + (M * M * M - M) * E) * (C * C) / 6;
            var O = W.getUnscaledValueAt(W.sortedIndices().__inner[aj]);
            var P = W.getUnscaledValueAt(W.sortedIndices().__inner[aj + 1]);
            var Q = O + (P - O) * J;
            K = T.getScaledValue(Q, X) + ab;
            N = U.getScaledValue(N, Y);
            o.d.add((function () {
                var a = new Array();
                a.add(K);
                a.add(N);
                a.add(N);
                return a
            }()))
        }
        if (Z) {
            ak = (function () {
                var a = new Array();
                a.add(G);
                a.add(H);
                a.add(H);
                return a
            }())
        }
        if (Z && this.lb(o, ak, ah, Math.min(al, this.dx().g() - 1), aa, V)) {
            ++aa
        }
    }
    this.iy().da().g(aa)
}, lb: function (k, l, m, n, o, p) {
    var q = l[0];
    var r = l[1];
    var s = new $.ig.Rect(0, q - 5, r - 5, 11, 11);
    if (!isNaN(q) && !isNaN(r) && m.tryAdd(s)) {
        k.f.add({__x: q, __y: r, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        var t = p.da().item(o);
        ($.ig.util.cast($.ig.DataContext.prototype.$type, t.a9())).item(this.dx().item(n));
        return true
    }
    return false
}, i7: function (o, N) {
    var m = this;
    $.ig.AnchoredCategorySeries.prototype.i7.call(this, o, N);
    if (o.d.count() <= 1) {
        return
    }
    if (N.c9().h() == 0) {
        return
    }
    var O = N.ac();
    var P = N.ab();
    var Q = this.xAxis();
    var R = this.yAxis();
    var S = new $.ig.ScalerParams(O, P, Q.isInverted());
    var T = new $.ig.ScalerParams(O, P, R.isInverted());
    o.d.clear();
    o.f.clear();
    var U = this.ie();
    var V = 0;
    var W = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
    if (W != null && W.sortedIndices().count() != this.dx().g()) {
        return
    }
    var X = this.lc(Q, O, P);
    var Y = function (a) {
        return a
    };
    var Z = function (a) {
        return m.valueColumn().item(a)
    };
    var aa = N.c9().h();
    if ((this.k4() == null || this.k4().length != this.valueColumn().count()) && aa == 1) {
        var ab = this.splineType() == $.ig.SplineType.prototype.natural ? NaN : 0;
        if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices() != null) {
            var ac = new $.ig.SafeSortedReadOnlyDoubleCollection(this.valueColumn(), ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices());
            Z = function (a) {
                return ac.item(a)
            }
        }
        this.k4($.ig.Numeric.prototype.c(this.valueColumn().count(), Y, Z, ab, ab))
    }
    var ad = N.c9().g();
    var ae = N.c9().f();
    var af = Math.ceil(P.width() / (ad - ae));
    var ag = new $.ig.CollisionAvoider();
    if (W != null) {
        this.la(o, O, P, Q, R, N);
        return
    }
    this.jt().dv();
    for (var ah = ae; ah <= ad; ++ah) {
        var ai = null;
        if (aa == 1) {
            if (ah >= (this.valueColumn().count() - 1)) {
                if (U && this.lb(o, o.d.__inner[o.d.count() - 1], ag, Math.min(ah * aa, this.dx().g() - 1), V, N)) {
                    ++V
                }
                break
            }
            var t = Y(ah);
            var A = Z(ah);
            var B = Y(ah + 1);
            var C = Z(ah + 1);
            var D = B - t;
            var E = this.k4()[ah];
            var F = this.k4()[ah + 1];
            var G = Q.getScaledValue(t, S) + X;
            var H = R.getScaledValue(A, T);
            o.d.add((function () {
                var a = new Array();
                a.add(G);
                a.add(H);
                a.add(H);
                return a
            }()));
            for (var I = 1; I < af; ++I) {
                var J = t + D * I / af;
                var K = (B - J) / D;
                var L = (J - t) / D;
                var M = K * A + L * C + ((K * K * K - K) * E + (L * L * L - L) * F) * (D * D) / 6;
                J = Q.getScaledValue(J, S) + X;
                M = R.getScaledValue(M, T);
                o.d.add((function () {
                    var a = new Array();
                    a.add(J);
                    a.add(M);
                    a.add(M);
                    return a
                }()))
            }
            if (U) {
                ai = N.c9().getBucket(ah);
                ai[0] = (Q.getScaledValue(ai[0], S) + X);
                ai[1] = R.getScaledValue(ai[1], T);
                ai[2] = R.getScaledValue(ai[2], T)
            }
        } else {
            ai = N.c9().getBucket(ah);
            if (!isNaN(ai[0])) {
                ai[0] = (Q.getScaledValue(ai[0], S) + X);
                ai[1] = R.getScaledValue(ai[1], T);
                ai[2] = R.getScaledValue(ai[2], T);
                o.d.add(ai)
            }
        }
        if (U && this.lb(o, ai, ag, Math.min(ah * aa, this.dx().g() - 1), V, N)) {
            ++V
        }
    }
    this.jt().dw();
    N.da().g(V)
}, lc: function (f, g, h) {
    var i = this.preferredCategoryMode(f);
    if (i == $.ig.CategoryMode.prototype.mode0 && f.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
        i = $.ig.CategoryMode.prototype.mode1
    }
    var j = 0;
    switch (i) {
        case $.ig.CategoryMode.prototype.mode0:
            j = 0;
            break;
        case $.ig.CategoryMode.prototype.mode1:
            j = 0.5 * f.getCategorySize(g, h);
            break;
        case $.ig.CategoryMode.prototype.mode2:
            j = f.getGroupCenter(this.index(), g, h);
            break
    }
    if (f.isInverted()) {
        j = -j
    }
    return j
}, splineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SplineSeriesBase.prototype.splineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.SplineSeriesBase.prototype.splineTypeProperty)
    }
}, ld: function () {
    this.k4(null)
}, e6: function (e, f, g, h) {
    switch (f) {
        case $.ig.SplineSeriesBase.prototype.jf:
        case $.ig.SplineSeriesBase.prototype.be:
            this.ld();
            break
    }
    $.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.SplineSeriesBase.prototype.kx:
            this.ld();
            this.renderSeries(false);
            this.e5();
            break
    }
}, fc: function (e, f, g, h) {
    this.ld();
    $.ig.HorizontalAnchoredCategorySeries.prototype.fc.call(this, e, f, g, h)
}, $type: new $.ig.Type("SplineSeriesBase", $.ig.HorizontalAnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("SplineAreaSeries", "SplineSeriesBase", {ed: function () {
    return new $.ig.SplineAreaSeriesView(this)
}, ea: function (b) {
    $.ig.SplineSeriesBase.prototype.ea.call(this, b);
    this.lj(b)
}, _lj: null, lj: function (b) {
    if (arguments.length === 1) {
        this._lj = b;
        return b
    } else {
        return this._lj
    }
}, init: function () {
    $.ig.SplineSeriesBase.prototype.init.call(this);
    this.a3($.ig.SplineAreaSeries.prototype.$type)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d9()
}, i6: function (g, h) {
    var f = this;
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, g, h);
    var i = this.iy().c9().h();
    var j = $.ig.util.cast($.ig.SplineAreaSeriesView.prototype.$type, h);
    var l = g.d;
    j.ea(g.d.count(), l, true, i, this.resolution(), function (a, b, c, d, e) {
        return f.j3(a, g.d.count(), h)
    }, $.ig.UnknownValuePlotting.prototype.dontPlot);
    var m = this.jb();
    j.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), m.referenceValue(), m.actualMinimumValue(), m.actualMaximumValue());
    j.b7(g.d)
}, $type: new $.ig.Type("SplineAreaSeries", $.ig.SplineSeriesBase.prototype.$type)}, true);
$.ig.util.defType("SplineSeries", "SplineSeriesBase", {ed: function () {
    return new $.ig.SplineSeriesView(this)
}, ea: function (b) {
    $.ig.SplineSeriesBase.prototype.ea.call(this, b);
    this.lj(b)
}, _lj: null, lj: function (b) {
    if (arguments.length === 1) {
        this._lj = b;
        return b
    } else {
        return this._lj
    }
}, init: function () {
    $.ig.SplineSeriesBase.prototype.init.call(this);
    this.a3($.ig.SplineSeries.prototype.$type)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d8()
}, i6: function (f, g) {
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, f, g);
    var h = this.iy().c9().h();
    var i = $.ig.util.cast($.ig.SplineSeriesView.prototype.$type, g);
    var j = f.d;
    i.d9(j.count(), j, true, $.ig.UnknownValuePlotting.prototype.dontPlot, this.j4(j, j.count() - 1, g.ab(), g.ac()), h, this.resolution());
    i.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), NaN, NaN, NaN)
}, $type: new $.ig.Type("SplineSeries", $.ig.SplineSeriesBase.prototype.$type)}, true);
$.ig.util.defType("SplineSeriesView", "SplineSeriesBaseView", {_d5: null, d5: function (b) {
    if (arguments.length === 1) {
        this._d5 = b;
        return b
    } else {
        return this._d5
    }
}, init: function (b) {
    this.d1 = new $.ig.Path();
    this.d2 = new $.ig.Path();
    this.d3 = new $.ig.Path();
    $.ig.SplineSeriesBaseView.prototype.init.call(this, b);
    this.d5(b)
}, d1: null, d2: null, d3: null, d8: function () {
    this.d2.bp(null);
    this.d1.bp(null);
    this.d3.bp(null);
    this.an()
}, d9: function (h, i, j, k, l, m, n) {
    this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
    this.dl().ju().i(this.d1, this.d2, this.d3, h, i, j, k, l, m, n);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.d1.__stroke = this.u().actualBrush();
    this.d1.a7(this.u().thickness());
    this.d1.a8(this.u().dashArray());
    this.d1.a9(this.u().dashCap());
    this.d3.__stroke = this.u().actualBrush();
    this.d3.a7(this.u().thickness());
    this.d3.a8(this.u().dashArray());
    this.d3.a9(this.u().dashCap());
    this.d2.__fill = this.u().actualBrush();
    this.d2.__opacity = 0.75
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.d1.__stroke = b;
    this.d1.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d3.__stroke = b;
    this.d3.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d2.__fill = b;
    this.d2.__opacity = 0.75
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.d5().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.g(this.d2);
        d.g(this.d1);
        d.g(this.d3)
    }
}, b5: function (e) {
    $.ig.SeriesView.prototype.b5.call(this, e);
    var f = new $.ig.PathVisualData(1, "lowerShape", this.d1);
    f.tags().add("Lower");
    f.tags().add("Main");
    var g = new $.ig.PathVisualData(1, "upperShape", this.d3);
    g.tags().add("Upper");
    var h = new $.ig.PathVisualData(1, "translucentShape", this.d2);
    h.tags().add("Translucent");
    e.shapes().add(f);
    e.shapes().add(g);
    e.shapes().add(h)
}, $type: new $.ig.Type("SplineSeriesView", $.ig.SplineSeriesBaseView.prototype.$type)}, true);
$.ig.util.defType("StepAreaSeries", "HorizontalAnchoredCategorySeries", {ed: function () {
    return new $.ig.StepAreaSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.ky(b)
}, _ky: null, ky: function (b) {
    if (arguments.length === 1) {
        this._ky = b;
        return b
    } else {
        return this._ky
    }
}, init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.StepAreaSeries.prototype.$type)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode1
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d5()
}, k1: function (f, g, h, i, j) {
    if (g) {
        if (j) {
            if ((f & 1) == 0 || (($.ig.intDivide(f, 2)) + 1) >= h.d.count()) {
                return h.d.__inner[($.ig.intDivide(f, 2))][0]
            }
            return h.d.__inner[(($.ig.intDivide(f, 2))) + 1][0]
        }
        return h.d.__inner[($.ig.intDivide(f, 2))][0] + ((f & 1) == 1 ? -i : i)
    }
    if (j) {
        if ((f & 1) == 0 || (($.ig.intDivide(f, 2)) + 1) >= h.d.count()) {
            return h.d.__inner[($.ig.intDivide(f, 2))][0]
        }
        return h.d.__inner[(($.ig.intDivide(f, 2))) + 1][0]
    }
    return h.d.__inner[($.ig.intDivide(f, 2))][0] + ((f & 1) == 0 ? -i : i)
}, i6: function (n, o) {
    var m = this;
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, n, o);
    var p = o.ac();
    var q = o.ab();
    var s = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) != null;
    var t = this.xAxis() != null ? 0.5 * this.xAxis().getCategorySize(p, q) : 0;
    if (this.xAxis() != null && this.xAxis().isInverted()) {
        t = -t
    }
    var u = n.d.count() * 2;
    var v = new $.ig.List$1($.ig.Array.prototype.$type, 2, u);
    for (var w = 0; w < u; w++) {
        var x = new Array(4);
        x[0] = this.k1(w, false, n, t, s);
        x[1] = n.d.__inner[($.ig.intDivide(w, 2))][1];
        x[2] = this.k1(w, true, n, t, s);
        x[3] = n.d.__inner[($.ig.intDivide(w, 2))][2];
        v.add(x)
    }
    var y = this.iy().c9().h();
    var z = $.ig.util.cast($.ig.StepAreaSeriesView.prototype.$type, o);
    z.d6(u, v, false, y, this.resolution(), function (a, b, c, d, e) {
        return m.j3(a, 2 * n.d.count(), o)
    }, $.ig.UnknownValuePlotting.prototype.dontPlot);
    var A = this.jb();
    z.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), A.referenceValue(), A.actualMinimumValue(), A.actualMaximumValue())
}, currentCategoryMode: function () {
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        this.xAxis().categoryMode($.ig.CategoryMode.prototype.mode0);
        return $.ig.CategoryMode.prototype.mode0
    }
    return $.ig.CategoryMode.prototype.mode1
}, $type: new $.ig.Type("StepAreaSeries", $.ig.HorizontalAnchoredCategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type])}, true);
$.ig.util.defType("StepAreaSeriesView", "AnchoredCategorySeriesView", {_d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, init: function (b) {
    this.dx = new $.ig.Path();
    this.dy = new $.ig.Path();
    this.dz = new $.ig.Path();
    this.d0 = new $.ig.Path();
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, b);
    this.d2(b)
}, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, dx: null, dy: null, dz: null, d0: null, d5: function () {
    this.dx.bp(null);
    this.dz.bp(null);
    this.dy.bp(null);
    this.d0.bp(null);
    this.an()
}, d6: function (h, i, j, k, l, m, n) {
    this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
    this.dl().ju().p(this.dx, this.dy, this.dz, this.d0, h, i, j, k, l, m, n);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dx.__fill = this.u().actualBrush();
    this.dz.__fill = this.u().actualBrush();
    this.dz.__opacity = 0.5;
    this.dy.__stroke = this.u().actualOutline();
    this.dy.a7(this.u().thickness());
    this.dy.a8(this.u().dashArray());
    this.dy.a9(this.u().dashCap());
    this.d0.__stroke = this.u().actualOutline();
    this.d0.a7(this.u().thickness());
    this.d0.a8(this.u().dashArray());
    this.d0.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dx.__fill = b;
    this.dz.__fill = b;
    this.dz.__opacity = 1;
    this.dy.__stroke = b;
    this.dy.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d0.__stroke = b;
    this.d0.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.d2().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.g(this.dx);
        d.g(this.dz);
        d.g(this.dy);
        d.g(this.d0)
    }
}, b5: function (f) {
    $.ig.SeriesView.prototype.b5.call(this, f);
    var g = new $.ig.PathVisualData(1, "lowerShape", this.dy);
    g.tags().add("Lower");
    var h = new $.ig.PathVisualData(1, "upperShape", this.d0);
    h.tags().add("Upper");
    h.tags().add("Main");
    var i = new $.ig.PathVisualData(1, "translucentShape", this.dx);
    i.tags().add("Translucent");
    var j = new $.ig.PathVisualData(1, "fillShape", this.dz);
    j.tags().add("Fill");
    f.shapes().add(g);
    f.shapes().add(h);
    f.shapes().add(i);
    f.shapes().add(j)
}, $type: new $.ig.Type("StepAreaSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("StepLineSeries", "HorizontalAnchoredCategorySeries", {ed: function () {
    return new $.ig.StepLineSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.ky(b)
}, _ky: null, ky: function (b) {
    if (arguments.length === 1) {
        this._ky = b;
        return b
    } else {
        return this._ky
    }
}, init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.StepLineSeries.prototype.$type)
}, onApplyTemplate: function () {
    $.ig.CategorySeries.prototype.onApplyTemplate.call(this)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode1
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d4()
}, k1: function (h, i, j, k, l, m) {
    var n;
    if (i) {
        if (m) {
            n = (h & 1) == 0;
            if (n || ($.ig.intDivide(h, 2)) + 1 < 0) {
                return j.d.__inner[($.ig.intDivide(h, 2))][0]
            }
            if (j.d.count() == ($.ig.intDivide(h, 2)) + 1) {
                return j.d.__inner[($.ig.intDivide(h, 2))][0]
            }
            return j.d.__inner[($.ig.intDivide(h, 2)) + 1][0]
        }
        n = (h & 1) == 0;
        return(j.d.__inner[($.ig.intDivide(h, 2))][0] + (n ? k : -k))
    }
    if (m) {
        n = (h & 1) == 0;
        if (n || (($.ig.intDivide(h, 2)) + 1) >= j.d.count()) {
            return j.d.__inner[($.ig.intDivide(h, 2))][0]
        }
        if (j.d.count() == ($.ig.intDivide(h, 2)) + 1) {
            return j.d.__inner[($.ig.intDivide(h, 2))][0]
        }
        return(j.d.__inner[($.ig.intDivide(h, 2)) + 1][0])
    }
    n = (h & 1) == 0;
    return(j.d.__inner[($.ig.intDivide(h, 2))][0] + (n ? -k : k))
}, i6: function (q, r) {
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, q, r);
    var s = r.ac();
    var t = r.ab();
    var u = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) != null;
    var v = this.xAxis().isInverted();
    var w = 0;
    if (this.xAxis() != null) {
        w = 0.5 * this.xAxis().getCategorySize(s, t)
    }
    var x = q.d;
    var y = 2 * x.count();
    var z = new $.ig.List$1($.ig.Array.prototype.$type, 2, y);
    if (!this.xAxis().isInverted()) {
        for (var A = 0; A < y; A++) {
            var B = new Array(4);
            B[0] = this.k1(A, false, q, w, v, u);
            B[1] = q.d.__inner[($.ig.intDivide(A, 2))][1];
            B[2] = this.k1(A, true, q, w, v, u);
            B[3] = q.d.__inner[($.ig.intDivide(A, 2))][2];
            z.add(B)
        }
    } else {
        for (var C = 0; C < y; C++) {
            var D = new Array(4);
            D[0] = this.k1(C, true, q, w, v, u);
            D[1] = q.d.__inner[($.ig.intDivide(C, 2))][1];
            D[2] = this.k1(C, true, q, w, v, u);
            D[3] = q.d.__inner[($.ig.intDivide(C, 2))][2];
            z.add(D)
        }
    }
    var E = $.ig.util.cast($.ig.StepLineSeriesView.prototype.$type, r);
    var F = E.c9().h();
    E.d5(y, z, false, $.ig.UnknownValuePlotting.prototype.dontPlot, this.j4(z, y - 1, r.ab(), r.ac()), F, this.resolution());
    E.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), NaN, NaN, NaN)
}, currentCategoryMode: function () {
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        this.xAxis().categoryMode($.ig.CategoryMode.prototype.mode0);
        return $.ig.CategoryMode.prototype.mode0
    }
    return $.ig.CategoryMode.prototype.mode1
}, $type: new $.ig.Type("StepLineSeries", $.ig.HorizontalAnchoredCategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type])}, true);
$.ig.util.defType("StepLineSeriesView", "AnchoredCategorySeriesView", {_d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, init: function (b) {
    this.dx = new $.ig.Path();
    this.dy = new $.ig.Path();
    this.dz = new $.ig.Path();
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, b);
    this.d1(b)
}, dx: null, dy: null, dz: null, d4: function () {
    this.dy.bp(null);
    this.dx.bp(null);
    this.dz.bp(null);
    this.an()
}, d5: function (h, i, j, k, l, m, n) {
    this.dl().ju().c($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.c8().ja()) !== null ? true : false);
    this.dl().ju().i(this.dx, this.dy, this.dz, h, i, j, k, l, m, n);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dx.__stroke = this.u().actualBrush();
    this.dx.a7(this.u().thickness());
    this.dx.a8(this.u().dashArray());
    this.dx.a9(this.u().dashCap());
    this.dz.__stroke = this.u().actualBrush();
    this.dz.a7(this.u().thickness());
    this.dz.a8(this.u().dashArray());
    this.dz.a9(this.u().dashCap());
    this.dy.__fill = this.u().actualBrush();
    this.dy.__opacity = 0.75
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dx.__stroke = b;
    this.dx.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.dz.__stroke = b;
    this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.dy.__fill = b;
    this.dy.__opacity = 1
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.d1().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.g(this.dy);
        d.g(this.dx);
        d.g(this.dz)
    }
}, b5: function (e) {
    $.ig.SeriesView.prototype.b5.call(this, e);
    var f = new $.ig.PathVisualData(1, "lowerShape", this.dx);
    f.tags().add("Lower");
    f.tags().add("Main");
    var g = new $.ig.PathVisualData(1, "upperShape", this.dz);
    g.tags().add("Upper");
    var h = new $.ig.PathVisualData(1, "translucentShape", this.dy);
    h.tags().add("Translucent");
    e.shapes().add(f);
    e.shapes().add(g);
    e.shapes().add(h)
}, $type: new $.ig.Type("StepLineSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("WaterfallSeries", "HorizontalAnchoredCategorySeries", {ed: function () {
    return new $.ig.WaterfallSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredCategorySeries.prototype.ea.call(this, b);
    this.k4(b)
}, _k4: null, k4: function (b) {
    if (arguments.length === 1) {
        this._k4 = b;
        return b
    } else {
        return this._k4
    }
}, init: function () {
    $.ig.HorizontalAnchoredCategorySeries.prototype.init.call(this);
    this.a3($.ig.WaterfallSeries.prototype.$type)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode2
}, negativeBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.WaterfallSeries.prototype.negativeBrushProperty, b);
        return b
    } else {
        return this.b($.ig.WaterfallSeries.prototype.negativeBrushProperty)
    }
}, radiusX: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.WaterfallSeries.prototype.radiusXProperty, b);
        return b
    } else {
        return this.b($.ig.WaterfallSeries.prototype.radiusXProperty)
    }
}, radiusY: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.WaterfallSeries.prototype.radiusYProperty, b);
        return b
    } else {
        return this.b($.ig.WaterfallSeries.prototype.radiusYProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.HorizontalAnchoredCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.WaterfallSeries.prototype.kz:
        case $.ig.WaterfallSeries.prototype.ky:
        case $.ig.WaterfallSeries.prototype.kx:
            this.renderSeries(false);
            break
    }
}, eu: function (d, e) {
    $.ig.AnchoredCategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d3()
}, i6: function (u, v) {
    var t = this;
    var w = v;
    w.d3();
    $.ig.AnchoredCategorySeries.prototype.i6.call(this, u, v);
    var x = w.d4();
    var y = w.d5();
    var z = v.ac();
    var A = v.ab();
    var B = this.xAxis().gz(z, A);
    var C = this.radiusX();
    var D = this.radiusY();
    var E;
    var F;
    var G;
    var H = this.j2(v);
    var I = NaN;
    if (u.d.count() > 0) {
        G = u.d.__inner[0][0] - 0.5 * B;
        var J = u.d.__inner[0][1];
        if (!isNaN(J)) {
            if (J > H) {
                F = new $.ig.Rect(0, G, H, B, Math.abs(H - J));
                E = (function () {
                    var a = new $.ig.RectangleGeometry();
                    a.f(F);
                    a.g(C);
                    a.h(D);
                    return a
                }());
                y.d().add(E)
            } else {
                F = new $.ig.Rect(0, G, J, B, Math.abs(J - H));
                E = (function () {
                    var a = new $.ig.RectangleGeometry();
                    a.f(F);
                    a.g(C);
                    a.h(D);
                    return a
                }());
                x.d().add(E)
            }
            I = J
        } else {
            I = H
        }
    }
    for (var K = 1; K < u.d.count(); ++K) {
        var L = u.d.__inner[K];
        G = u.d.__inner[K][0] - 0.5 * B;
        var M = L[1];
        if (!isNaN(M)) {
            F = new $.ig.Rect(0, G, Math.min(I, M), B, Math.abs(I - M));
            E = (function () {
                var a = new $.ig.RectangleGeometry();
                a.f(F);
                a.g(C);
                a.h(D);
                return a
            }());
            (I > M ? x : y).d().add(E);
            I = M
        }
    }
    w.b6(this.valueColumn().minimum(), this.valueColumn().maximum(), this.yAxis().referenceValue(), this.yAxis().actualMinimumValue(), this.yAxis().actualMaximumValue())
}, $type: new $.ig.Type("WaterfallSeries", $.ig.HorizontalAnchoredCategorySeries.prototype.$type)}, true);
$.ig.util.defType("WaterfallSeriesView", "AnchoredCategorySeriesView", {_d0: null, d0: function (b) {
    if (arguments.length === 1) {
        this._d0 = b;
        return b
    } else {
        return this._d0
    }
}, init: function (b) {
    this.dx = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.GeometryGroup());
        return a
    }());
    this.dy = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.GeometryGroup());
        return a
    }());
    $.ig.AnchoredCategorySeriesView.prototype.init.call(this, b);
    this.d0(b)
}, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.d0().negativeBrush((function () {
            var b = new $.ig.Brush();
            b.__fill = "#415460";
            return b
        }()));
        this.d0().resolution(4);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.p);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, dx: null, dy: null, d3: function () {
    var c = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dx.bp());
    var d = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dy.bp());
    c.d().clear();
    d.d().clear()
}, d4: function () {
    this.an();
    return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dx.bp())
}, d5: function () {
    return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.dy.bp())
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dx.__fill = this.u().actualBrush();
    this.dx.__stroke = this.u().actualOutline();
    this.dx.a7(this.u().thickness());
    this.dx.a8(this.u().dashArray());
    this.dx.a9(this.u().dashCap());
    this.dy.__fill = this.d0().negativeBrush();
    this.dy.__stroke = this.u().actualOutline();
    this.dy.a7(this.u().thickness());
    this.dy.a8(this.u().dashArray());
    this.dy.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dx.__fill = b;
    this.dx.__stroke = b;
    this.dx.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.dy.__fill = b;
    this.dy.__stroke = b;
    this.dy.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.d0().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.g(this.dx);
        d.g(this.dy)
    }
}, b5: function (d) {
    $.ig.SeriesView.prototype.b5.call(this, d);
    var e = new $.ig.PathVisualData(1, "positivePathShape", this.dx);
    e.tags().add("Positive");
    e.tags().add("Main");
    var f = new $.ig.PathVisualData(1, "negativePathShape", this.dy);
    f.tags().add("Negative");
    d.shapes().add(e);
    d.shapes().add(f)
}, $type: new $.ig.Type("WaterfallSeriesView", $.ig.AnchoredCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("CategoryMarkerManager", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (g, h, i, j) {
    var k = g.ie();
    if (i == null) {
        return
    }
    if (k) {
        for (var l = 0; l < h.count(); ++l) {
            $.ig.CategoryMarkerManager.prototype.b(i, l, h, j)
        }
    }
}, b: function (e, f, g, h) {
    e.item(f).y(g.__inner[f].__x);
    e.item(f).x(g.__inner[f].__y)
}, $type: new $.ig.Type("CategoryMarkerManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TrendFitCalculator", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (p, q, r, s, t, u, v, w, x, y, z) {
    if (s == null) {
        switch (q) {
            case $.ig.TrendLineType.prototype.linearFit:
                s = $.ig.LeastSquaresFit.prototype.j(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.quadraticFit:
                s = $.ig.LeastSquaresFit.prototype.v(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.cubicFit:
                s = $.ig.LeastSquaresFit.prototype.y(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.quarticFit:
                s = $.ig.LeastSquaresFit.prototype.ab(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.quinticFit:
                s = $.ig.LeastSquaresFit.prototype.ae(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.exponentialFit:
                s = $.ig.LeastSquaresFit.prototype.p(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.logarithmicFit:
                s = $.ig.LeastSquaresFit.prototype.m(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.powerLawFit:
                s = $.ig.LeastSquaresFit.prototype.s(t, u, v);
                break;
            default:
                throw new $.ig.NotImplementedException()
        }
    }
    if (s == null) {
        return null
    }
    for (var A = 0; A < r.k().width(); A += 2) {
        var B = A / (r.k().width() - 1);
        var C = y + B * (z - y);
        var D = NaN;
        switch (q) {
            case $.ig.TrendLineType.prototype.linearFit:
                D = $.ig.LeastSquaresFit.prototype.k(s, C);
                break;
            case $.ig.TrendLineType.prototype.quadraticFit:
                D = $.ig.LeastSquaresFit.prototype.w(s, C);
                break;
            case $.ig.TrendLineType.prototype.cubicFit:
                D = $.ig.LeastSquaresFit.prototype.z(s, C);
                break;
            case $.ig.TrendLineType.prototype.quarticFit:
                D = $.ig.LeastSquaresFit.prototype.ac(s, C);
                break;
            case $.ig.TrendLineType.prototype.quinticFit:
                D = $.ig.LeastSquaresFit.prototype.af(s, C);
                break;
            case $.ig.TrendLineType.prototype.exponentialFit:
                D = $.ig.LeastSquaresFit.prototype.q(s, C);
                break;
            case $.ig.TrendLineType.prototype.logarithmicFit:
                D = $.ig.LeastSquaresFit.prototype.n(s, C);
                break;
            case $.ig.TrendLineType.prototype.powerLawFit:
                D = $.ig.LeastSquaresFit.prototype.t(s, C);
                break;
            default:
                throw new $.ig.NotImplementedException()
        }
        C = w(C);
        D = x(D);
        if (!isNaN(D) && !Number.isInfinity(D)) {
            p.add({__x: C + r.n(), __y: D, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
    return s
}, $type: new $.ig.Type("TrendFitCalculator", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TrendAverageCalculator", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (e, f, g) {
    var h;
    switch (e) {
        case $.ig.TrendLineType.prototype.simpleAverage:
        case $.ig.TrendLineType.prototype.exponentialAverage:
        case $.ig.TrendLineType.prototype.modifiedAverage:
        case $.ig.TrendLineType.prototype.weightedAverage:
            if (g < 1) {
                g = 1
            }
            break
    }
    switch (e) {
        case $.ig.TrendLineType.prototype.simpleAverage:
            h = $.ig.Series.prototype.sMA(f, g);
            break;
        case $.ig.TrendLineType.prototype.exponentialAverage:
            h = $.ig.Series.prototype.eMA(f, g);
            break;
        case $.ig.TrendLineType.prototype.modifiedAverage:
            h = $.ig.Series.prototype.mMA(f, g);
            break;
        case $.ig.TrendLineType.prototype.cumulativeAverage:
            h = $.ig.Series.prototype.cMA(f);
            break;
        case $.ig.TrendLineType.prototype.weightedAverage:
            h = $.ig.Series.prototype.wMA(f, g);
            break;
        default:
            throw new $.ig.NotImplementedException()
    }
    return h
}, b: function (h, i, j, k) {
    if (i.count() == 0) {
        var l = $.ig.TrendAverageCalculator.prototype.a(h, j, k);
        var n = l.getEnumerator();
        while (n.moveNext()) {
            var m = n.current();
            i.add(m)
        }
    }
}, c: function (h, i, j, k, l) {
    if (i.count() == 0) {
        var m = $.ig.TrendAverageCalculator.prototype.a(h, j, l).getEnumerator();
        var n = $.ig.TrendAverageCalculator.prototype.a(h, k, l).getEnumerator();
        while (m.moveNext() && n.moveNext()) {
            i.add({__x: m.current(), __y: n.current(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, $type: new $.ig.Type("TrendAverageCalculator", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SortingTrendLineManager", "CategoryTrendLineManagerBase", {init: function (c, d) {
    $.ig.CategoryTrendLineManagerBase.prototype.init.call(this);
    this.aj(c);
    this.ak(d)
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
}, prepareLine: function (l, m, n, o, p, q, w) {
    var k = this;
    var x = w.h() * w.j();
    var y = w.i() * w.j();
    var z = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    if (m == $.ig.TrendLineType.prototype.none) {
        this.m(null);
        this.l().clear();
        return
    }
    if (this.u(m)) {
        this.l().clear();
        this.m($.ig.TrendFitCalculator.prototype.a(z, m, w, this.m(), n.count(), function (a) {
            return a + 1
        }, function (a) {
            return n.item(a)
        }, function (a) {
            var b = Math.floor(a);
            var c = Math.ceil(a);
            var d = a - b;
            var e;
            if (c <= y) {
                e = k.aj()(b) + d * (k.aj()(c) - k.aj()(b))
            } else {
                e = k.aj()(b) + d * (k.aj()(y) - k.aj()(b))
            }
            return p(e)
        }, q, x, y))
    }
    if (this.v(m)) {
        this.m(null);
        $.ig.TrendAverageCalculator.prototype.b(m, this.l(), n, o);
        for (var A = w.h(); A <= w.i(); A += 1) {
            var B = A * w.j();
            var C = this.aj()(B);
            if (B >= 0 && B < this.l().count()) {
                var D = p(C);
                var E = q(this.l().__inner[B]);
                z.add({__x: D + w.n(), __y: E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
            }
        }
    }
    this.x(z, w, l)
}, $type: new $.ig.Type("SortingTrendLineManager", $.ig.CategoryTrendLineManagerBase.prototype.$type)}, true);
$.ig.util.defType("Legend", "LegendBase", {bu: function () {
    return new $.ig.LegendView(this)
}, bv: function (b) {
    $.ig.LegendBase.prototype.bv.call(this, b);
    this.ce(b)
}, _ce: null, ce: function (b) {
    if (arguments.length === 1) {
        this._ce = b;
        return b
    } else {
        return this._ce
    }
}, init: function () {
    var a = this;
    $.ig.LegendBase.prototype.init.call(this);
    this.a3($.ig.Legend.prototype.$type);
    this.children().collectionChanged = $.ig.Delegate.prototype.combine(this.children().collectionChanged, function (g, h) {
        if (h.oldItems() != null) {
            var j = h.oldItems().getEnumerator();
            while (j.moveNext()) {
                var i = j.current();
                a.ce().aa(i)
            }
        }
        if (h.newItems() != null) {
            var l = h.newItems().getEnumerator();
            while (l.moveNext()) {
                var k = l.current();
                a.ce().ab(k)
            }
        }
    })
}, by: function (l, m) {
    var k = this;
    var n = 0;
    var p = this.children().getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        var q;
        var r;
        var s;
        (function () {
            var a = k.bq().u(o, q, r, s);
            q = a.chart;
            r = a.series;
            s = a.item;
            return a.ret
        }());
        if (m.seriesViewer() != null && q != null && (this.ch(m.seriesViewer()) < this.ch(q) || (this.ch(m.seriesViewer()) == -1 && this.ch(q) == -1 && m.seriesViewer().getHashCode() < q.getHashCode()))) {
            break
        }
        if (m.seriesViewer() != null && q != null && m.seriesViewer() == q && r != null) {
            var t = m.index();
            var u = r.index();
            if (t <= u) {
                break
            }
        }
        n++
    }
    this.children().insert(n, l)
}, ch: function (b) {
    return -1
}, $type: new $.ig.Type("Legend", $.ig.LegendBase.prototype.$type)}, true);
$.ig.util.defType("LegendView", "LegendBaseView", {init: function (b) {
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
}, $type: new $.ig.Type("LegendView", $.ig.LegendBaseView.prototype.$type)}, true);
$.ig.util.defType("RectangleVisualData", "PrimitiveVisualData", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.PrimitiveVisualData.prototype.init.call(this, "rect1")
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
}, init1: function (e, c, d) {
    $.ig.PrimitiveVisualData.prototype.init.call(this, c);
    this.width(d.v());
    this.height(d.w());
    $.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), d)
}, type: function () {
    return"Rectangle"
}, scaleByViewport: function (b) {
    $.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, b);
    this.width(this.width() / b.width());
    this.height(this.height() / b.height())
}, getPointsOverride: function (d, e) {
    var f = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    d.add(f);
    f.add({__x: this.appearance().canvasLeft(), __y: this.appearance().canvasTop(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    f.add({__x: this.appearance().canvasLeft() + this.width(), __y: this.appearance().canvasTop(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    f.add({__x: this.appearance().canvasLeft() + this.width(), __y: this.appearance().canvasTop() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    f.add({__x: this.appearance().canvasLeft(), __y: this.appearance().canvasTop() + this.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, $type: new $.ig.Type("RectangleVisualData", $.ig.PrimitiveVisualData.prototype.$type)}, true);
$.ig.util.defType("PolyLineVisualData", "PrimitiveVisualData", {type: function () {
    return"Polyline"
}, init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.PrimitiveVisualData.prototype.init.call(this, "polyLine1")
}, init1: function (e, c, d) {
    $.ig.PrimitiveVisualData.prototype.init.call(this, c);
    this.points(d.bn());
    $.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), d)
}, _points: null, points: function (b) {
    if (arguments.length === 1) {
        this._points = b;
        return b
    } else {
        return this._points
    }
}, scaleByViewport: function (c) {
    $.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, c);
    for (var d = 0; d < this.points().count(); d++) {
        this.points().__inner[d] = {__x: (this.points().__inner[d].__x - c.left()) / c.width(), __y: (this.points().__inner[d].__y - c.top()) / c.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
}, getPointsOverride: function (e, f) {
    var g = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    e.add(g);
    for (var h = 0; h < this.points().count(); h++) {
        g.add(this.points().__inner[h])
    }
}, $type: new $.ig.Type("PolyLineVisualData", $.ig.PrimitiveVisualData.prototype.$type)}, true);
$.ig.util.defType("CollisionAvoider", "Object", {init: function () {
    this.a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    $.ig.Object.prototype.init.call(this)
}, tryAdd: function (d) {
    var c = this;
    for (var e = this.a.count() - 1; e >= 0; --e) {
        if (d.left() > this.a.__inner[e].right()) {
            break
        }
        if (this.a.__inner[e].intersectsWith(d)) {
            return false
        }
    }
    if (this.a.count() == 0 || d.right() >= this.a.__inner[this.a.count() - 1].right()) {
        this.a.add(d)
    } else {
        this.a.add(d);
        this.a.t(function (a, b) {
            return Math.sign(a.right() - b.right())
        })
    }
    return true
}, clear: function () {
    this.a.clear()
}, a: null, $type: new $.ig.Type("CollisionAvoider", $.ig.Object.prototype.$type, [$.ig.IDetectsCollisions.prototype.$type])}, true);
$.ig.util.defType("SortedListView$1", "Object", {$t: null, a: null, b: null, init: function (c, d, e) {
    this.a = null;
    this.b = null;
    this.$t = c;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = e;
    this.b = d
}, add: function (b) {
    throw new $.ig.NotImplementedException()
}, clear: function () {
    throw new $.ig.NotImplementedException()
}, contains: function (b) {
    return this.b.contains(b)
}, indexOf: function (b) {
    return this.a.indexOf(this.b.indexOf(b))
}, insert: function (c, d) {
    throw new $.ig.NotImplementedException()
}, c: function () {
    return true
}, isReadOnly: function () {
    return true
}, remove: function (b) {
    throw new $.ig.NotImplementedException()
}, removeAt: function (b) {
    throw new $.ig.NotImplementedException()
}, item: function (d, c) {
    if (arguments.length === 2) {
        throw new $.ig.NotImplementedException();
        return c
    } else {
        return this.b.item(this.a.item(d))
    }
}, count: function () {
    return this.b.count()
}, d: function () {
    throw new $.ig.NotImplementedException()
}, e: function () {
    throw new $.ig.NotImplementedException()
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
                            if (this.$a < this.$this.count()) {
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
    return new $.ig.AbstractEnumerator(a())
}, copyTo: function (c, d) {
    throw new $.ig.NotImplementedException()
}, $type: new $.ig.Type("SortedListView$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0)])}, true);
$.ig.SplineType.prototype.natural = 0;
$.ig.SplineType.prototype.clamped = 1;
$.ig.TimeAxisDisplayType.prototype.continuous = 0;
$.ig.TimeAxisDisplayType.prototype.discrete = 1;
$.ig.CategoryDateTimeXAxis.prototype.hc = "DisplayType";
$.ig.CategoryDateTimeXAxis.prototype.hd = "MinimumValue";
$.ig.CategoryDateTimeXAxis.prototype.he = "MaximumValue";
$.ig.CategoryDateTimeXAxis.prototype.hf = "Interval";
$.ig.CategoryDateTimeXAxis.prototype.hg = "ActualMinimumValue";
$.ig.CategoryDateTimeXAxis.prototype.hh = "ActualMaximumValue";
$.ig.CategoryDateTimeXAxis.prototype.hi = "DateTimeMemberPath";
$.ig.CategoryDateTimeXAxis.prototype.hj = "DateTimeColumn";
$.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hc, $.ig.TimeAxisDisplayType.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TimeAxisDisplayType.prototype.continuous, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hc, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hd, $.ig.Date.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hd, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.he, $.ig.Date.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.he, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hf, $.ig.Number.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hf, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hi, String, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hi, d.f(), d.e())
}));
$.ig.CategoryXAxis.prototype.hc = "Interval";
$.ig.CategoryXAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryXAxis.prototype.hc, Number, $.ig.CategoryXAxis.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.CategoryXAxis.prototype.$type, c)).ez($.ig.CategoryXAxis.prototype.hc, d.f(), d.e());
    ($.ig.util.cast($.ig.CategoryXAxis.prototype.$type, c)).es(false)
}));
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.AnchoredCategorySeries.prototype.je = "ValueMemberPath";
$.ig.AnchoredCategorySeries.prototype.jf = "ValueColumn";
$.ig.AnchoredCategorySeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.je, String, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.je, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.b4, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b6, $.ig.Brush.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.b6, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b7, $.ig.Brush.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.b7, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b8, Number, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.b8, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.b9, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.b3, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.b5, $.ig.Number.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.b5, d.f(), d.e())
}));
$.ig.AnchoredCategorySeries.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredCategorySeries.prototype.ca, $.ig.Number.prototype.$type, $.ig.AnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredCategorySeries.prototype.$type, c)).ej($.ig.AnchoredCategorySeries.prototype.ca, d.f(), d.e())
}));
$.ig.VerticalAnchoredCategorySeries.prototype.kj = "XAxis";
$.ig.VerticalAnchoredCategorySeries.prototype.kk = "YAxis";
$.ig.VerticalAnchoredCategorySeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.VerticalAnchoredCategorySeries.prototype.kj, $.ig.NumericXAxis.prototype.$type, $.ig.VerticalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.VerticalAnchoredCategorySeries.prototype.$type, c)).ej($.ig.VerticalAnchoredCategorySeries.prototype.kj, d.f(), d.e())
}));
$.ig.VerticalAnchoredCategorySeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.VerticalAnchoredCategorySeries.prototype.kk, $.ig.CategoryYAxis.prototype.$type, $.ig.VerticalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.VerticalAnchoredCategorySeries.prototype.$type, c)).ej($.ig.VerticalAnchoredCategorySeries.prototype.kk, d.f(), d.e())
}));
$.ig.BarSeries.prototype.kn = "RadiusX";
$.ig.BarSeries.prototype.ko = "RadiusY";
$.ig.BarSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.BarSeries.prototype.kn, Number, $.ig.BarSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.BarSeries.prototype.$type, c)).ej($.ig.BarSeries.prototype.kn, d.f(), d.e())
}));
$.ig.BarSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.BarSeries.prototype.ko, Number, $.ig.BarSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.BarSeries.prototype.$type, c)).ej($.ig.BarSeries.prototype.ko, d.f(), d.e())
}));
$.ig.HorizontalAnchoredCategorySeries.prototype.kj = "XAxis";
$.ig.HorizontalAnchoredCategorySeries.prototype.kk = "YAxis";
$.ig.HorizontalAnchoredCategorySeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalAnchoredCategorySeries.prototype.kj, $.ig.CategoryAxisBase.prototype.$type, $.ig.HorizontalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HorizontalAnchoredCategorySeries.prototype.$type, c)).ej($.ig.HorizontalAnchoredCategorySeries.prototype.kj, d.f(), d.e())
}));
$.ig.HorizontalAnchoredCategorySeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalAnchoredCategorySeries.prototype.kk, $.ig.NumericYAxis.prototype.$type, $.ig.HorizontalAnchoredCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HorizontalAnchoredCategorySeries.prototype.$type, c)).ej($.ig.HorizontalAnchoredCategorySeries.prototype.kk, d.f(), d.e())
}));
$.ig.AreaSeries.prototype.kx = "UnknownValuePlotting";
$.ig.AreaSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.AreaSeries.prototype.kx, $.ig.UnknownValuePlotting.prototype.$type, $.ig.AreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (c, d) {
    ($.ig.util.cast($.ig.AreaSeries.prototype.$type, c)).ej($.ig.AreaSeries.prototype.kx, d.f(), d.e())
}));
$.ig.ColumnSeries.prototype.kx = "RadiusX";
$.ig.ColumnSeries.prototype.ky = "RadiusY";
$.ig.ColumnSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.ColumnSeries.prototype.kx, Number, $.ig.ColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.ColumnSeries.prototype.$type, c)).ej($.ig.ColumnSeries.prototype.kx, d.f(), d.e())
}));
$.ig.ColumnSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.ColumnSeries.prototype.ky, Number, $.ig.ColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.ColumnSeries.prototype.$type, c)).ej($.ig.ColumnSeries.prototype.ky, d.f(), d.e())
}));
$.ig.LineSeries.prototype.kx = "UnknownValuePlotting";
$.ig.LineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.LineSeries.prototype.kx, $.ig.UnknownValuePlotting.prototype.$type, $.ig.LineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (c, d) {
    ($.ig.util.cast($.ig.LineSeries.prototype.$type, c)).ej($.ig.LineSeries.prototype.kx, d.f(), d.e())
}));
$.ig.SplineSeriesBase.prototype.kx = "SplineType";
$.ig.SplineSeriesBase.prototype.splineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.SplineSeriesBase.prototype.kx, $.ig.SplineType.prototype.$type, $.ig.SplineSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.SplineType.prototype.natural, function (c, d) {
    ($.ig.util.cast($.ig.SplineSeriesBase.prototype.$type, c)).ej($.ig.SplineSeriesBase.prototype.kx, d.f(), d.e())
}));
$.ig.WaterfallSeries.prototype.kx = "NegativeBrush";
$.ig.WaterfallSeries.prototype.ky = "RadiusX";
$.ig.WaterfallSeries.prototype.kz = "RadiusY";
$.ig.WaterfallSeries.prototype.negativeBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.WaterfallSeries.prototype.kx, $.ig.Brush.prototype.$type, $.ig.WaterfallSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, c)).ej($.ig.WaterfallSeries.prototype.kx, d.f(), d.e())
}));
$.ig.WaterfallSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.WaterfallSeries.prototype.ky, Number, $.ig.WaterfallSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, c)).ej($.ig.WaterfallSeries.prototype.ky, d.f(), d.e())
}));
$.ig.WaterfallSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.WaterfallSeries.prototype.kz, Number, $.ig.WaterfallSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.WaterfallSeries.prototype.$type, c)).ej($.ig.WaterfallSeries.prototype.kz, d.f(), d.e())
}));
$.ig.Legend.prototype.cc = "Orientation";
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
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));