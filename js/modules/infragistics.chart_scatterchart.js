﻿/*
 * Infragistics.Web.ClientUI infragistics.chart_scatterchart.js 12.2.20122.1021
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
$.ig.util.defType("IDictionary$2", "Object", {$type: new $.ig.Type("IDictionary$2", null, [$.ig.ICollection$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable.prototype.$type])}, true);
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
$.ig.util.defType("SmartPosition", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("SmartPosition", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ErrorBarCalculatorType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ErrorBarCalculatorType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ErrorBarCalculatorReference", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ErrorBarCalculatorReference", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("UnknownValuePlotting", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("UnknownValuePlotting", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IErrorBarCalculator", "Object", {$type: new $.ig.Type("IErrorBarCalculator", null)}, true);
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
$.ig.util.defType("ISmartPlaceable", "Object", {$type: new $.ig.Type("ISmartPlaceable", null)}, true);
$.ig.util.defType("SmartPlaceableWrapper$1", "Object", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.i(false)
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, a: null, j: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
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
}, getSmartPositions: function () {
    if (this.i()) {
        return $.ig.SmartPlaceableWrapper$1.prototype.b
    } else {
        return $.ig.SmartPlaceableWrapper$1.prototype.c
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, x: function () {
    return this.m()
}, getSmartBounds: function (f) {
    var g = this.x();
    var h = g.c();
    var i = g.d();
    var j;
    j = this.y(f, h, i);
    return new $.ig.Rect(0, this.l().__x + j.__x, this.l().__y + j.__y, h, i)
}, opacity: function (b) {
    if (arguments.length === 1) {
        this.j().__opacity = b;
        return b
    } else {
        return this.j().__opacity
    }
}, smartPosition: function (f) {
    if (arguments.length === 1) {
        this.d = f;
        var g = this.x();
        var h = g.d();
        var i = g.c();
        var j;
        j = this.y(this.d, i, h);
        this.k({__x: this.l().__x + j.__x, __y: this.l().__y + j.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return f
    } else {
        return this.d
    }
}, d: null, y: function (e, f, g) {
    var h = 0.25;
    switch (e) {
        case $.ig.SmartPosition.prototype.leftTop:
            return{__x: -f * h, __y: -g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.centerTop:
            return{__x: 0, __y: -g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.rightTop:
            return{__x: f * h, __y: -g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.leftCenter:
            return{__x: -f * h, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.centerCenter:
            return{__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.rightCenter:
            return{__x: f * h, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.leftBottom:
            return{__x: -f * h, __y: g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.centerBottom:
            return{__x: 0, __y: g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        default:
            return{__x: f * h, __y: g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
}, $type: new $.ig.Type("SmartPlaceableWrapper$1", $.ig.Object.prototype.$type, [$.ig.ISmartPlaceable.prototype.$type])}, true);
$.ig.util.defType("SmartPlacer", "Object", {init: function () {
    this.a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    $.ig.Object.prototype.init.call(this);
    this.e($.ig.Rect.prototype.empty());
    this.f(0.3);
    this.g(2)
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
}, n: function (m) {
    if (m == null) {
        return
    }
    var n = Number.MAX_VALUE;
    var o = $.ig.Rect.prototype.empty();
    var p = $.ig.SmartPosition.prototype.centerBottom;
    var q = false;
    for (var s = 0; s < m.getSmartPositions().length; s++) {
        var r = m.getSmartPositions()[s];
        var t = m.getSmartBounds(r);
        if (this.e().isEmpty() || this.e().contains2(t)) {
            var u = 0;
            var w = this.a.getEnumerator();
            while (w.moveNext()) {
                var v = w.current();
                u += t.intersectionArea(v)
            }
            if (u == 0) {
                n = u;
                p = r;
                o = t;
                q = true;
                break
            }
            if (u < n) {
                n = u;
                p = r;
                o = t;
                q = true
            }
        }
    }
    var x = 0;
    if (q) {
        x = n / o.getArea()
    }
    if (!q || x > this.f()) {
        m.opacity(0)
    } else {
        if (n > 0) {
            m.opacity(Math.pow(1 - $.ig.MathUtil.prototype.i(0, x, 1), this.g()))
        } else {
            m.opacity(1)
        }
        m.smartPosition(p);
        this.a.add(o)
    }
}, a: null, $type: new $.ig.Type("SmartPlacer", $.ig.Object.prototype.$type)}, true);
$.ig.SmartPosition.prototype.leftTop = 0;
$.ig.SmartPosition.prototype.centerTop = 1;
$.ig.SmartPosition.prototype.rightTop = 2;
$.ig.SmartPosition.prototype.leftCenter = 3;
$.ig.SmartPosition.prototype.centerCenter = 4;
$.ig.SmartPosition.prototype.rightCenter = 5;
$.ig.SmartPosition.prototype.leftBottom = 6;
$.ig.SmartPosition.prototype.centerBottom = 7;
$.ig.SmartPosition.prototype.rightBottom = 8;
$.ig.ErrorBarCalculatorType.prototype.fixed = 0;
$.ig.ErrorBarCalculatorType.prototype.percentage = 1;
$.ig.ErrorBarCalculatorType.prototype.data = 2;
$.ig.ErrorBarCalculatorType.prototype.standardDeviation = 3;
$.ig.ErrorBarCalculatorType.prototype.standardError = 4;
$.ig.ErrorBarCalculatorReference.prototype.x = 0;
$.ig.ErrorBarCalculatorReference.prototype.y = 1;
$.ig.UnknownValuePlotting.prototype.linearInterpolate = 0;
$.ig.UnknownValuePlotting.prototype.dontPlot = 1;
$.ig.SmartPlaceableWrapper$1.prototype.b = [$.ig.SmartPosition.prototype.centerCenter];
$.ig.SmartPlaceableWrapper$1.prototype.c = [$.ig.SmartPosition.prototype.centerCenter, $.ig.SmartPosition.prototype.rightCenter, $.ig.SmartPosition.prototype.rightTop, $.ig.SmartPosition.prototype.centerTop, $.ig.SmartPosition.prototype.rightBottom, $.ig.SmartPosition.prototype.centerBottom, $.ig.SmartPosition.prototype.leftTop, $.ig.SmartPosition.prototype.leftCenter, $.ig.SmartPosition.prototype.leftBottom];
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
$.ig.util.defType("EnableErrorBars", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("EnableErrorBars", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CollisionAvoidanceType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("CollisionAvoidanceType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BrushSelectionMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("BrushSelectionMode", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("MarkerManagerBase", "Object", {_g: null, g: function (b) {
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
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, init: function (f, g, h, i, j) {
    $.ig.Object.prototype.init.call(this);
    this.h(f);
    this.j(g);
    this.i(h);
    this.g(i);
    this.k(j)
}, y: function (f, g, h, i, j) {
}, z: function (c, d) {
}, aa: function (h, i) {
    var j = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var k = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var m = i.getEnumerator();
    while (m.moveNext()) {
        var l = m.current();
        if (h.item(l).d().count() > 0) {
            j.add(l)
        } else {
            k.add(l)
        }
    }
    var n = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    n.w(j);
    n.w(k);
    return n
}, ab: function (q, r, s, t) {
    var p = this;
    while (q > 0) {
        if (q < s.count()) {
            if (!this.l()) {
                s.shuffle$1($.ig.Number.prototype.$type)
            }
            s = this.aa(r, s);
            var u = q;
            for (var v = 0; v < u; v++) {
                var w = v;
                var x = r.item(s.__inner[w]);
                var y;
                var z = (function () {
                    var a = x.h(y);
                    y = a.wasPriority;
                    return a.ret
                }());
                t.add(z);
                q--;
                if (x.e()) {
                    r.remove(s.__inner[w])
                }
            }
        } else {
            var B = s.getEnumerator();
            while (B.moveNext()) {
                var A = B.current();
                var C = r.item(A);
                var D;
                var E = (function () {
                    var a = C.h(D);
                    D = a.wasPriority;
                    return a.ret
                }());
                t.add(E);
                q--;
                if (C.e()) {
                    r.remove(A)
                }
            }
            s = new $.ig.List$1($.ig.Number.prototype.$type, 1, r.keys())
        }
    }
}, ac: function (l, m, n, o) {
    var p = m.left();
    var q = m.right();
    var r = m.top();
    var s = m.bottom();
    if (!l.isEmpty() && !m.isEmpty()) {
        for (var t = 0; t < n.count(); ++t) {
            var u = n.item(t).__x;
            if (isNaN(u)) {
                continue
            }
            var v = n.item(t).__y;
            if (isNaN(v)) {
                continue
            }
            if (u < p || u > q) {
                continue
            }
            if (v < r || v > s) {
                continue
            }
            o.add(t)
        }
    }
}, ad: function (s, t, u, v) {
    var r = this;
    var w = new Array(v.count());
    var y = this.k()().getEnumerator();
    while (y.moveNext()) {
        var x = y.current();
        if (x != -1) {
            w[x] = true
        }
    }
    var z = Math.floor(s.width() / u);
    var A = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.MarkerManagerBucket.prototype.$type, 0);
    var C = t.getEnumerator();
    while (C.moveNext()) {
        var B = C.current();
        var D = v.item(B).__x;
        var E = v.item(B).__y;
        var F = Math.floor(E / u);
        var G = Math.floor(D / u);
        var H = (F * z) + G;
        var I;
        if (!(function () {
            var a = A.tryGetValue(H, I);
            I = a.value;
            return a.ret
        }())) {
            I = new $.ig.MarkerManagerBucket();
            A.add(H, I)
        }
        if (w[B]) {
            I.d().add(B)
        } else {
            I.c().add(B)
        }
    }
    return A
}, $type: new $.ig.Type("MarkerManagerBase", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BubbleMarkerManager", "MarkerManagerBase", {_ah: null, ah: function (b) {
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
}, init: function (f, g, h, i, j) {
    $.ig.MarkerManagerBase.prototype.init.call(this, f, g, h, i, j);
    this.ai(new $.ig.List$1(Number, 0));
    this.aj(new $.ig.List$1($.ig.Marker.prototype.$type, 0))
}, y: function (r, s, t, u, v) {
    var w = this.g()();
    r.clear();
    this.ai().clear();
    this.aj().clear();
    var x = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    s = Math.max(0, s);
    var y = null;
    this.ac(t, u, w, x);
    if (s >= x.count()) {
        y = x
    } else {
        y = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var z = Math.max(8, v);
        var A = this.ad(u, x, z, w);
        var B = new $.ig.List$1($.ig.Number.prototype.$type, 1, A.keys());
        if (this.l()) {
            B.r()
        }
        this.ab(s, A, B, y)
    }
    for (var C = 0; C < y.count(); ++C) {
        var D = w[y.__inner[C]].__x;
        var E = w[y.__inner[C]].__y;
        var F = this.ah().item(y.__inner[C]);
        this.ai().add(F);
        var G = this.h()(this.j()(y.__inner[C]));
        ($.ig.util.cast($.ig.DataContext.prototype.$type, G.a9())).item(this.j()(y.__inner[C]));
        var H = new $.ig.OwnedPoint();
        H.e(($.ig.util.cast($.ig.DataContext.prototype.$type, G.a9())).item());
        H.d({__x: D, __y: E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        if (!r.containsKey(H.e())) {
            r.add(H.e(), H);
            this.aj().add(G)
        }
    }
}, z: function (e, f) {
    var d = this;
    var g = new $.ig.List$1($.ig.Object.prototype.$type, 1, e.keys());
    if (this.l()) {
        g.t(function (a, b) {
            var c = e.item(a);
            var j = e.item(b);
            var k = Math.pow(c.d().__x, 2) + Math.pow(c.d().__y, 2);
            var l = Math.pow(j.d().__x, 2) + Math.pow(j.d().__y, 2);
            return k.compareTo(l)
        })
    }
    var i = g.getEnumerator();
    while (i.moveNext()) {
        var h = i.current();
        var n = e.item(h);
        var o = this.h()(n.e());
        o.z(g.indexOf1(h));
        o.y(n.d().__x);
        o.x(n.d().__y)
    }
    this.i()(e)
}, $type: new $.ig.Type("BubbleMarkerManager", $.ig.MarkerManagerBase.prototype.$type)}, true);
$.ig.util.defType("ScatterBase", "MarkerSeries", {ed: function () {
    return new $.ig.ScatterBaseView(this)
}, ea: function (b) {
    $.ig.MarkerSeries.prototype.ea.call(this, b);
    this.jn(b)
}, _jn: null, jn: function (b) {
    if (arguments.length === 1) {
        this._jn = b;
        return b
    } else {
        return this._jn
    }
}, init: function () {
    $.ig.MarkerSeries.prototype.init.call(this);
    this.i2 = $.ig.Rect.prototype.empty();
    this.i1 = $.ig.Rect.prototype.empty()
}, _jo: null, jo: function (b) {
    if (arguments.length === 1) {
        this._jo = b;
        return b
    } else {
        return this._jo
    }
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.yAxisProperty)
    }
}, xMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.xMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.xMemberPathProperty)
    }
}, jp: function (c) {
    if (arguments.length === 1) {
        if (this.iz != c) {
            var d = this.jp();
            this.iz = c;
            this.ej($.ig.ScatterBase.prototype.it, d, this.jp())
        }
        return c
    } else {
        return this.iz
    }
}, iz: null, yMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.yMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.yMemberPathProperty)
    }
}, jq: function (c) {
    if (arguments.length === 1) {
        if (this.i0 != c) {
            var d = this.jq();
            this.i0 = c;
            this.ej($.ig.ScatterBase.prototype.iv, d, this.jq())
        }
        return c
    } else {
        return this.i0
    }
}, i0: null, trendLineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineTypeProperty)
    }
}, trendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineBrushProperty)
    }
}, actualTrendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.actualTrendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.actualTrendLineBrushProperty)
    }
}, trendLineThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineThicknessProperty)
    }
}, trendLineDashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineDashCapProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineDashCapProperty)
    }
}, trendLineDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineDashArrayProperty)
    }
}, trendLinePeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLinePeriodProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLinePeriodProperty)
    }
}, markerCollisionAvoidance: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty)
    }
}, trendLineZIndex: function (a) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineZIndexProperty, a);
        return a
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineZIndexProperty)
    }
}, maximumMarkers: function (a) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.maximumMarkersProperty, a);
        return a
    } else {
        return this.b($.ig.ScatterBase.prototype.maximumMarkersProperty)
    }
}, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    if (this.xAxis() != null) {
        this.xAxis().es(false)
    }
    if (this.yAxis() != null) {
        this.yAxis().es(false)
    }
}, errorBarSettings: function (a) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.errorBarSettingsProperty, a);
        return a
    } else {
        return this.b($.ig.ScatterBase.prototype.errorBarSettingsProperty)
    }
}, e6: function (b, c, d, e) {
    var a = this;
    $.ig.MarkerSeries.prototype.e6.call(this, b, c, d, e);
    if (this.jn().dk().ae(b, c, d, e, this.trendLineDashArray())) {
        this.renderSeries(false);
        this.e5()
    }
    switch (c) {
        case $.ig.ScatterBase.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).ac(this.jp());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).ac(this.jq());
                this.jp(null);
                this.jq(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, e) != null) {
                this.jp(this.gs(this.xMemberPath()));
                this.jq(this.gs(this.yMemberPath()))
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (this.xAxis() != null && !this.xAxis().updateRange())) {
                this.renderSeries(false)
            }
            break;
        case $.ig.ScatterBase.prototype.iq:
            if (d != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, d)).deregisterSeries(this)
            }
            if (e != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, e)).registerSeries(this)
            }
            if ((this.xAxis() != null && !this.xAxis().updateRange()) || (e == null && d != null)) {
                this.renderSeries(false)
            }
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.ir:
            if (d != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, d)).deregisterSeries(this)
            }
            if (e != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, e)).registerSeries(this)
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (e == null && d != null)) {
                this.renderSeries(false)
            }
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.is:
            if (this.dx() != null) {
                this.dx().ac(this.jp());
                this.jp(this.gs(this.xMemberPath()))
            }
            break;
        case $.ig.ScatterBase.prototype.it:
            this.jn().dk().ac();
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.ScatterBase.prototype.iu:
            if (this.dx() != null) {
                this.dx().ac(this.jq());
                this.jq(this.gs(this.yMemberPath()))
            }
            break;
        case $.ig.ScatterBase.prototype.iv:
            this.jn().dk().ac();
            if (this.yAxis() != null && !this.yAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.ScatterBase.prototype.iw:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.ix:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.bo:
            this.i4.a(this.dz(), this.i3, this.i5);
            this.j1();
            try {
                if (this.ew(this.view())) {
                    return
                }
                if ((Math.round(this.dz() * 100000) / 100000) == 1) {
                    this.j7(this.i5, this.jn())
                } else {
                    this.j7(this.i4, this.jn())
                }
            } finally {
                this.j0()
            }
            break;
        case $.ig.ScatterBase.prototype.b6:
            this.fj();
            break;
        case $.ig.ScatterBase.prototype.iy:
            if (this.errorBarSettings() != null) {
                this.errorBarSettings().bl(this)
            }
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.b4:
            this.e5();
            break
    }
}, j0: function () {
    this.i1 = $.ig.Rect.prototype.empty();
    this.i2 = $.ig.Rect.prototype.empty()
}, i1: null, i2: null, j1: function () {
    var a = this;
    (function () {
        var b = a.getViewInfo(a.i1, a.i2);
        a.i1 = b.viewportRect;
        a.i2 = b.windowRect;
        return b.ret
    }())
}, j2: function (a, b) {
    if (b != $.ig.FastItemsSourceEventAction.prototype.change) {
        return true
    }
    if (a == null) {
        return true
    }
    if (this.xMemberPath() == a || this.yMemberPath() == a) {
        return true
    }
    return false
}, fc: function (a, b, c, d) {
    var e = false;
    if (!this.j2(d, a)) {
        return
    }
    this.jn().dk().ad(a, b, c, d);
    if (this.xAxis() != null && !this.xAxis().updateRange()) {
        e = true
    }
    if (this.yAxis() != null && !this.yAxis().updateRange()) {
        e = true
    }
    if (e) {
        this.renderSeries(true)
    }
}, j3: function (a) {
    this.j4(a, null)
}, j4: function (j, k) {
    var a = this;
    var l = this.jp() != null ? this.jp().count() : 0;
    var b = this.jq() != null ? this.jq().count() : 0;
    var c = Math.min(l, b);
    if (c <= this.maximumMarkers()) {
        j.v().clear();
        var d = new $.ig.List$1($.ig.OwnedPoint.prototype.$type, 0);
        var f = j.a5().values().getEnumerator();
        while (f.moveNext()) {
            var e = f.current();
            d.add(e)
        }
        var g = this.dx();
        d.t(function (m, n) {
            var o = g.x(m.e());
            var p = g.x(n.e());
            if (o < p) {
                return -1
            }
            if (o > p) {
                return 1
            }
            return 0
        });
        if (k != null) {
            k.h(j.v())
        }
        var i = d.getEnumerator();
        while (i.moveNext()) {
            var h = i.current();
            if (g.x(h.e()) >= 0) {
                if (k != null) {
                    k.l(h.d())
                } else {
                    j.v().add({__x: h.d().__x, __y: h.d().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
                }
            }
        }
    }
}, em: function (a) {
    if (a != null && a == this.xAxis() && this.jp() != null) {
        return new $.ig.AxisRange(this.jp().minimum(), this.jp().maximum())
    }
    if (a != null && a == this.yAxis() && this.jq() != null) {
        return new $.ig.AxisRange(this.jq().minimum(), this.jq().maximum())
    }
    return null
}, eh: function (a) {
    return null
}, eg: function (a) {
    return -1
}, scrollIntoView: function (a) {
    var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var c = this.seriesViewer() != null ? this.seriesViewer().viewportRect() : $.ig.Rect.prototype.empty();
    var d = new $.ig.Rect(0, 0, 0, 1, 1);
    var e = new $.ig.ScalerParams(d, d, this.xAxis().isInverted());
    var f = new $.ig.ScalerParams(d, d, this.yAxis().isInverted());
    var g = !b.isEmpty() && !c.isEmpty() && this.dx() != null ? this.dx().x(a) : -1;
    var h = this.xAxis() != null && this.jp() != null && g < this.jp().count() ? this.xAxis().getScaledValue(this.jp().item(g), e) : NaN;
    var i = this.yAxis() != null && this.jq() != null && g < this.jq().count() ? this.yAxis().getScaledValue(this.jq().item(g), f) : NaN;
    if (!isNaN(h)) {
        if (h < b.left() + 0.1 * b.width()) {
            h = h + 0.4 * b.width();
            b.x(h - 0.5 * b.width())
        }
        if (h > b.right() - 0.1 * b.width()) {
            h = h - 0.4 * b.width();
            b.x(h - 0.5 * b.width())
        }
    }
    if (!isNaN(i)) {
        if (i < b.top() + 0.1 * b.height()) {
            i = i + 0.4 * b.height();
            b.y(i - 0.5 * b.height())
        }
        if (i > b.bottom() - 0.1 * b.height()) {
            i = i - 0.4 * b.height();
            b.y(i - 0.5 * b.height())
        }
    }
    if (this.syncLink() != null) {
        this.syncLink().bp(this.seriesViewer(), b)
    }
    return g >= 0
}, ez: function (a, b) {
    this.renderSeries(false)
}, ey: function (a, b) {
    this.renderSeries(false)
}, i3: null, i4: null, i5: null, j5: function (b, c, d, e) {
    var a = this;
    b.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, c));
    var f = this.dx();
    var g;
    var h;
    var i = (function () {
        var p = new $.ig.ScalerParams(d, e, a.jo().h());
        p.c = a.seriesViewer().effectiveViewport();
        return p
    }());
    var j = (function () {
        var p = new $.ig.ScalerParams(d, e, a.jo().i());
        p.c = a.seriesViewer().effectiveViewport();
        return p
    }());
    for (var k = 0; k < c; k++) {
        g = this.jp().item(k);
        h = this.jq().item(k);
        var l = {__x: this.jo().f().getScaledValue(g, i), __y: this.jo().g().getScaledValue(h, j), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        if (!Number.isInfinity(l.__x) && !Number.isInfinity(l.__y)) {
            var m = f.item(k);
            if (!b.u().containsKey(m)) {
                var n = {__x: g, __y: h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                var o = {__x: l.__x, __y: l.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                b.u().add(m, (function () {
                    var p = new $.ig.OwnedPoint();
                    p.e(m);
                    p.f(n);
                    p.d(o);
                    return p
                }()))
            }
        }
    }
}, j6: function (b, c) {
    var a = this;
    b.t().clear();
    b.w().clear();
    b.x().clear();
    b.y().clear();
    b.z().clear();
    b.aa().clear();
    var d = Math.min(this.jp() != null ? this.jp().count() : 0, this.jq() != null ? this.jq().count() : 0);
    var e = c.ac();
    var f = c.ab();
    var g = new $.ig.ScalerParams(e, f, this.xAxis().isInverted());
    g.c = this.seriesViewer().effectiveViewport();
    var h = new $.ig.ScalerParams(e, f, this.yAxis().isInverted());
    h.c = this.seriesViewer().effectiveViewport();
    if (d < 1) {
        return
    }
    this.jo((function () {
        var l = new $.ig.ScatterAxisInfoCache();
        l.f(a.xAxis());
        l.g(a.yAxis());
        l.h(a.xAxis().isInverted());
        l.i(a.yAxis().isInverted());
        l.j(a.dx());
        return l
    }()));
    if (d <= this.maximumMarkers()) {
        this.j5(b, d, e, f)
    }
    if (this.ie()) {
        c.de().y(b.t(), this.maximumMarkers(), e, f, this.resolution())
    }
    var i = (function () {
        var l = new $.ig.Clipper(0, f, false);
        l.h(b.w());
        return l
    }());
    var j = this.xAxis().getUnscaledValue(f.left(), g);
    var k = this.xAxis().getUnscaledValue(f.right(), g);
    c.dk().af(b.w(), this.trendLineType(), this.jp(), this.jq(), this.trendLinePeriod(), function (l) {
        return a.xAxis().getScaledValue(l, g)
    }, function (l) {
        return a.yAxis().getScaledValue(l, h)
    }, (function () {
        var l = new $.ig.TrendResolutionParams();
        l.m(a.resolution());
        l.k(f);
        l.l(e);
        return l
    }()), i, j, k);
    this.j8(b, c)
}, eu: function (a, b) {
    $.ig.Series.prototype.eu.call(this, a, b);
    var c = b;
    c.ee(a)
}, j7: function (b, c) {
    var a = this;
    var d = c.ab();
    this.jo((function () {
        var f = new $.ig.ScatterAxisInfoCache();
        f.f(a.xAxis());
        f.g(a.yAxis());
        f.h(a.xAxis().isInverted());
        f.i(a.yAxis().isInverted());
        return f
    }()));
    if (this.ie()) {
        c.de().z(b.t(), this.useLightweightMarkers())
    }
    c.c1();
    var e = (function () {
        var f = new $.ig.Clipper(1, NaN, d.bottom(), NaN, d.top(), false);
        f.h(c.dk().n().bn());
        return f
    }());
    c.dk().w(b.w(), e);
    this.j9(b, c)
}, j8: function (l, b) {
    var a = this;
    var c = new $.ig.ErrorBarsHelper(this, b);
    if (this.errorBarSettings() == null) {
        return
    }
    var d = this.errorBarSettings().a9();
    var e = this.errorBarSettings().bg();
    var f = 0;
    var g = 0;
    var h = 0;
    var i = 0;
    if (d != null && c.i(d)) {
        (function () {
            var D = c.j(d, f);
            f = D.position;
            return D.ret
        }());
        (function () {
            var D = c.k(d, a.jo().f(), h);
            h = D.errorBarSize;
            return D.ret
        }())
    }
    if (e != null && c.i(e)) {
        (function () {
            var D = c.j(e, g);
            g = D.position;
            return D.ret
        }());
        (function () {
            var D = c.k(e, a.jo().g(), i);
            i = D.errorBarSize;
            return D.ret
        }())
    }
    var k = l.t().keys().getEnumerator();
    while (k.moveNext()) {
        var j = k.current();
        var m = l.t().item(j);
        if (d != null) {
            if (d.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.percentage) {
                var n;
                var o, p;
                p = this.jo().f();
                if (this.errorBarSettings().a8() == $.ig.ErrorBarCalculatorReference.prototype.x) {
                    n = m.d().__x;
                    o = this.jo().f()
                } else {
                    n = m.d().__y;
                    o = this.jo().g()
                }
                (function () {
                    var D = c.m(n, d, o, p, h);
                    h = D.errorBarSize;
                    return D.ret
                }())
            } else {
                if (d.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.data) {
                    var q = d.getItemColumn();
                    var r = this.dx().x(j);
                    if (q != null && r < q.count()) {
                        var s = q.item(this.dx().x(j));
                        (function () {
                            var D = c.n(s, a.jo().f(), h);
                            h = D.errorBarSize;
                            return D.ret
                        }())
                    } else {
                        h = NaN
                    }
                }
            }
            var t = new $.ig.OwnedPoint();
            var u = c.q(d, this.jo().f(), m.d(), f);
            t.d(u);
            t.e(m.e());
            l.x().add(j, t);
            l.z().add(j, h)
        }
        if (e != null) {
            if (e.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.percentage) {
                var v;
                var w, x;
                x = this.jo().g();
                if (this.errorBarSettings().bf() == $.ig.ErrorBarCalculatorReference.prototype.x) {
                    v = m.d().__x;
                    w = this.jo().f()
                } else {
                    v = m.d().__y;
                    w = this.jo().g()
                }
                (function () {
                    var D = c.m(v, e, w, x, i);
                    i = D.errorBarSize;
                    return D.ret
                }())
            } else {
                if (e.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.data) {
                    var y = e.getItemColumn();
                    var z = this.dx().x(j);
                    if (y != null && z < y.count()) {
                        var A = y.item(this.dx().x(j));
                        (function () {
                            var D = c.n(A, a.jo().g(), i);
                            i = D.errorBarSize;
                            return D.ret
                        }())
                    } else {
                        i = NaN
                    }
                }
            }
            var B = new $.ig.OwnedPoint();
            var C = c.r(e, this.jo().g(), m.d(), g);
            B.d(C);
            B.e(m.e());
            l.y().add(j, B);
            l.aa().add(j, i)
        }
    }
}, j9: function (a, b) {
    if (!b.cc() || this.errorBarSettings() == null) {
        b.ed();
        return
    }
    this.ka(a, b);
    this.kb(a, b)
}, ka: function (c, d) {
    d.d6();
    var e = new $.ig.ErrorBarsHelper(this, d);
    var f = new $.ig.PathGeometry();
    var g = this.errorBarSettings().a9();
    var i = c.t().keys().getEnumerator();
    while (i.moveNext()) {
        var h = i.current();
        if (g != null && c.z().containsKey(h)) {
            var a = c.z().item(h);
            if (!isNaN(a)) {
                var b = c.x().item(h).d();
                if (this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.positive) {
                    e.p(f, b, a, true)
                }
                if (this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.negative) {
                    e.p(f, b, a, false)
                }
            }
        }
    }
    d.d7(f)
}, kb: function (a, b) {
    b.d8();
    var c = new $.ig.ErrorBarsHelper(this, b);
    var d = new $.ig.PathGeometry();
    var e = this.errorBarSettings().bg();
    var g = a.t().keys().getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        if (e != null && a.aa().containsKey(f)) {
            var h = a.aa().item(f);
            if (!isNaN(h)) {
                var i = a.y().item(f).d();
                if (this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.positive) {
                    c.o(d, i, h, true)
                }
                if (this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.negative) {
                    c.o(d, i, h, false)
                }
            }
        }
    }
}, es: function (a, b, c) {
    var d = true;
    if (!$.ig.Series.prototype.es.call(this, a, b, c) || b.isEmpty() || a.isEmpty() || this.xAxis() == null || this.yAxis() == null || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.jp() == null || this.jq() == null || this.jp().count() == 0 || this.jq().count() == 0 || this.dx() == null || this.dx().g() != this.jp().count() || this.dx().g() != this.jq().count() || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.xAxis().actualMinimumValue() == this.xAxis().actualMaximumValue() || this.yAxis().actualMinimumValue() == this.yAxis().actualMaximumValue()) {
        d = false
    }
    return d
}, getViewInfo: function (a, b) {
    if (!this.i1.isEmpty() && !this.i2.isEmpty()) {
        a = this.i1;
        b = this.i2;
        return{viewportRect: a, windowRect: b}
    }
    a = this.view().ab();
    b = this.view().ac();
    return{viewportRect: a, windowRect: b}
}, eo: function (a) {
    this.j1();
    try {
        if (this.ew(this.view())) {
            return
        }
        if (this.dx() != null && this.dx().g() > this.maximumMarkers()) {
            a = false
        }
        if (this.gm(a)) {
            var b = this.i3;
            if (this.fo()) {
                this.i3 = this.i4;
                this.i4 = b
            } else {
                this.i3 = this.i5;
                this.i5 = b
            }
            this.j6(this.i5, this.jn());
            this.fp()
        } else {
            this.j6(this.i5, this.jn());
            this.j7(this.i5, this.jn())
        }
    } finally {
        this.j0()
    }
}, fj: function () {
    $.ig.MarkerSeries.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    this.jn().ea()
}, er: function (a, b) {
    $.ig.Series.prototype.er.call(this, a, b);
    if (!this.dv()) {
        this.view().b4(b);
        return
    }
    this.view().b4(b);
    if (this.ew(this.dt())) {
        return
    }
    var c = $.ig.util.cast($.ig.ScatterBaseView.prototype.$type, this.dt());
    var d = new $.ig.ScatterFrame();
    this.j6(d, c);
    this.j7(d, c);
    this.dv(false)
}, kc: function (a, b) {
    var c = new $.ig.List$1($.ig.Object.prototype.$type, 0);
    var e = b.i().getEnumerator();
    while (e.moveNext()) {
        var d = e.current();
        if (!a.containsKey(d)) {
            c.add1(d)
        }
    }
    var g = c.getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        b.u(f)
    }
}, kd: function (l, m, n, o) {
    var a = this;
    if (m == null || m.length != this.jo().j().g()) {
        m = new Array(this.jo().j().g());
        for (var p = 0; p < this.jo().j().g(); p++) {
            m[p] = new $.ig.Point(0)
        }
    }
    var b = (function () {
        var w = new $.ig.ScalerParams(n, o, a.xAxis().isInverted());
        w.c = a.seriesViewer().effectiveViewport();
        return w
    }());
    var c = (function () {
        var w = new $.ig.ScalerParams(n, o, a.yAxis().isInverted());
        w.c = a.seriesViewer().effectiveViewport();
        return w
    }());
    var d = this.jo().f().getUnscaledValue(o.left(), b);
    var e = this.jo().f().getUnscaledValue(o.right(), b);
    var f = this.jo().g().getUnscaledValue(o.bottom(), c);
    var g = this.jo().g().getUnscaledValue(o.top(), c);
    if (this.jo().h()) {
        var h = d;
        d = e;
        e = h
    }
    if (this.jo().i()) {
        var i = f;
        f = g;
        g = i
    }
    var j = this.jo();
    var k = j.f();
    var q = j.g();
    var r;
    var s;
    var t = this.jp();
    var u = this.jq();
    for (var v = 0; v < this.jo().j().g(); v++) {
        r = t.item(v);
        s = u.item(v);
        if (r >= d && r <= e && s >= f && s <= g) {
            m[v].__x = k.getScaledValue(r, b);
            m[v].__y = q.getScaledValue(s, c)
        } else {
            m[v].__x = NaN;
            m[v].__y = NaN
        }
    }
    return m
}, ke: function (a, b) {
    if (b == null || b.length != a.j()) {
        b = new Array(a.j())
    }
    var c = 0;
    var d = this.dx();
    var f = a.i().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        b[c] = d.x(e);
        c++
    }
    return b
}, $type: new $.ig.Type("ScatterBase", $.ig.MarkerSeries.prototype.$type, [$.ig.ISupportsErrorBars.prototype.$type])}, true);
$.ig.util.defType("BubbleSeries", "ScatterBase", {ed: function () {
    return new $.ig.BubbleSeriesView(this)
}, ea: function (b) {
    $.ig.ScatterBase.prototype.ea.call(this, b);
    this.le(b)
}, _le: null, le: function (b) {
    if (arguments.length === 1) {
        this._le = b;
        return b
    } else {
        return this._le
    }
}, init: function () {
    $.ig.ScatterBase.prototype.init.call(this);
    this.a3($.ig.BubbleSeries.prototype.$type);
    this.i3 = new $.ig.ScatterFrame();
    this.i4 = new $.ig.ScatterFrame();
    this.i5 = new $.ig.ScatterFrame()
}, _lf: null, lf: function (b) {
    if (arguments.length === 1) {
        this._lf = b;
        return b
    } else {
        return this._lf
    }
}, _lg: null, lg: function (b) {
    if (arguments.length === 1) {
        this._lg = b;
        return b
    } else {
        return this._lg
    }
}, lh: function () {
    return this.lj()
}, _li: null, li: function (b) {
    if (arguments.length === 1) {
        this._li = b;
        return b
    } else {
        return this._li
    }
}, radiusMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.radiusMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.radiusMemberPathProperty)
    }
}, lj: function (c) {
    if (arguments.length === 1) {
        if (this.k2 != c) {
            var d = this.lj();
            this.k2 = c;
            this.ej($.ig.BubbleSeries.prototype.kv, d, this.lj())
        }
        return c
    } else {
        return this.k2
    }
}, k2: null, radiusScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.radiusScaleProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.radiusScaleProperty)
    }
}, labelMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.labelMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.labelMemberPathProperty)
    }
}, k3: null, lk: function (c) {
    if (arguments.length === 1) {
        if (this.k3 != c) {
            var d = this.lk();
            this.k3 = c;
            this.ej($.ig.BubbleSeries.prototype.ky, d, this.lk())
        }
        return c
    } else {
        return this.k3
    }
}, fillMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.fillMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.fillMemberPathProperty)
    }
}, fillScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.fillScaleProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.fillScaleProperty)
    }
}, k4: null, ll: function (c) {
    if (arguments.length === 1) {
        if (this.k4 != c) {
            var d = this.ll();
            this.k4 = c;
            this.ej($.ig.BubbleSeries.prototype.k1, d, this.ll())
        }
        return c
    } else {
        return this.k4
    }
}, j5: function (o, p, q, r) {
    var n = this;
    if (p <= this.maximumMarkers()) {
        o.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, p))
    }
    var s = this.dx();
    var t;
    var u;
    var v = new $.ig.ScalerParams(q, r, this.jo().h());
    var w = new $.ig.ScalerParams(q, r, this.jo().i());
    for (var x = 0; x < p; x++) {
        t = this.jp().item(x);
        u = this.jq().item(x);
        var y = {__x: this.jo().f().getScaledValue(t, v), __y: this.jo().g().getScaledValue(u, w), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        if (!Number.isInfinity(y.__x) && !Number.isInfinity(y.__y)) {
            var z = s.item(x);
            if (p <= this.maximumMarkers()) {
                if (!o.u().containsKey(z)) {
                    var A = {__x: t, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                    o.u().add(z, (function () {
                        var a = new $.ig.OwnedPoint();
                        a.e(z);
                        a.f(A);
                        a.d(y);
                        return a
                    }()))
                }
            }
        }
    }
}, j7: function (f, g) {
    var e = this;
    this.jo((function () {
        var a = new $.ig.ScatterAxisInfoCache();
        a.f(e.xAxis());
        a.g(e.yAxis());
        a.h(e.xAxis().isInverted());
        a.i(e.yAxis().isInverted());
        return a
    }()));
    var h = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, g);
    h.de().z(f.t(), this.useLightweightMarkers());
    var i = (function () {
        var a = new $.ig.Clipper(1, NaN, g.ab().bottom(), NaN, g.ab().top(), false);
        a.h(g.dk().n().bn());
        return a
    }());
    g.dk().w(f.w(), i)
}, j6: function (n, o) {
    var m = this;
    n.t().clear();
    n.w().clear();
    var p = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, o);
    var q = p.de();
    q.ah(this.lj());
    var r = Math.min(this.jp() != null ? this.jp().count() : 0, this.jq() != null ? this.jq().count() : 0);
    var s = o.ac();
    var t = o.ab();
    var u = new $.ig.ScalerParams(s, t, this.xAxis().isInverted());
    var v = new $.ig.ScalerParams(s, t, this.yAxis().isInverted());
    if (r < 1) {
        return
    }
    this.jo((function () {
        var a = new $.ig.ScatterAxisInfoCache();
        a.f(m.xAxis());
        a.g(m.yAxis());
        a.h(m.xAxis().isInverted());
        a.i(m.yAxis().isInverted());
        a.j(m.dx());
        return a
    }()));
    this.j5(n, r, s, t);
    p.de().y(n.t(), this.maximumMarkers(), s, t, this.resolution());
    p.em();
    p.en();
    this.l1();
    var w = (function () {
        var a = new $.ig.Clipper(0, t, false);
        a.h(n.w());
        return a
    }());
    var x = this.xAxis().getUnscaledValue(t.left(), u);
    var y = this.xAxis().getUnscaledValue(t.right(), u);
    p.dk().af(n.w(), this.trendLineType(), this.jp(), this.jq(), this.trendLinePeriod(), function (a) {
        return m.xAxis().getScaledValue(a, u)
    }, function (a) {
        return m.yAxis().getScaledValue(a, v)
    }, (function () {
        var a = new $.ig.TrendResolutionParams();
        a.m(m.resolution());
        a.k(t);
        a.l(s);
        return a
    }()), w, x, y)
}, l1: function () {
    if (this.seriesViewer() == null) {
        return
    }
    var c = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.actualLegend());
    if (c != null) {
        c.cl(this);
        this.l4();
        c.ck(this)
    }
    var d = $.ig.util.cast($.ig.ScaleLegend.prototype.$type, this.actualLegend());
    if (d != null) {
        d.dk();
        d.dn(this)
    }
}, l2: function (g, h, i, j, k) {
    if (k <= g || isNaN(k) || Number.isInfinity(k)) {
        return i
    }
    if (k >= h) {
        return j
    }
    var l = i + ((j - i) / (h - g)) * (k - g);
    return l
}, l3: function (j, k, l, m, n, o) {
    var p = Math.logBase(o, n);
    var q = Math.logBase(j, n);
    var r = Math.logBase(k, n);
    return $.ig.BubbleSeries.prototype.l2(q, r, l, m, p)
}, es: function (e, f, g) {
    var h = $.ig.ScatterBase.prototype.es.call(this, e, f, g);
    if (this.lj() == null || this.dx() == null || this.lj().count() == 0 || this.dx().g() != this.lj().count()) {
        h = false
    }
    return h
}, j2: function (c, d) {
    if (d != $.ig.FastItemsSourceEventAction.prototype.change) {
        return true
    }
    if (c == null) {
        return true
    }
    if (this.xMemberPath() == c || this.yMemberPath() == c || this.radiusMemberPath() == c) {
        return true
    }
    return false
}, l4: function () {
    var f = this;
    var g = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.actualLegend());
    if (g == null || this.dx() == null) {
        return
    }
    this.li(new $.ig.List$1($.ig.UIElement.prototype.$type, 0));
    for (var h = 0; h < this.dx().g(); h++) {
        var i = null;
        if ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.fillScale()) !== null && this.ll() != null) {
            i = (this.fillScale()).getBrushByIndex(h, this.ll())
        }
        if ($.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.fillScale()) !== null) {
            i = (this.fillScale()).getBrush(h, this.dx().g())
        }
        var j = new $.ig.ContentControl();
        var k = this.lk() != null && this.lk().item(h) != null ? this.lk().item(h).toString() : "";
        j.a9((function () {
            var a = new $.ig.DataContext();
            a.series(f);
            a.item(f.dx().item(h));
            a.itemBrush(i);
            a.itemLabel(k);
            return a
        }()));
        j.ba(this.discreteLegendItemTemplate());
        this.li().add(j)
    }
}, fc: function (e, f, g, h) {
    $.ig.ScatterBase.prototype.fc.call(this, e, f, g, h);
    this.l1()
}, e6: function (l, m, n, o) {
    var k = this;
    $.ig.ScatterBase.prototype.e6.call(this, l, m, n, o);
    switch (m) {
        case $.ig.BubbleSeries.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.lj());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.ll());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.lk());
                this.lj(null);
                this.ll(null);
                this.lk(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, o) != null) {
                this.lj(this.gs(this.radiusMemberPath()));
                if (!String.isNullOrEmpty(this.fillMemberPath())) {
                    this.ll(this.gs(this.fillMemberPath()))
                }
                this.lk(this.gu(this.labelMemberPath()))
            }
            this.renderSeries(false);
            this.l1();
            break;
        case $.ig.BubbleSeries.prototype.ku:
            if (this.dx() != null) {
                this.dx().ac(this.lj());
                this.lj(this.gs(this.radiusMemberPath()));
                this.l1()
            }
            break;
        case $.ig.BubbleSeries.prototype.kv:
            this.jn().dk().ac();
            this.renderSeries(false);
            this.e4();
            break;
        case $.ig.BubbleSeries.prototype.kw:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.BubbleSeries.prototype.k0:
            this.renderSeries(false);
            this.l1();
            this.e5();
            break;
        case $.ig.BubbleSeries.prototype.k1:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.BubbleSeries.prototype.kz:
            if (this.dx() != null) {
                this.dx().ac(this.ll());
                this.ll(this.gs(this.fillMemberPath()));
                this.l1()
            }
            break;
        case $.ig.BubbleSeries.prototype.kx:
            if (this.dx() != null) {
                this.dx().ac(this.lk());
                this.lk(this.gu(this.labelMemberPath()));
                this.l1()
            }
            break;
        case $.ig.BubbleSeries.prototype.bg:
            var p = $.ig.util.cast($.ig.ItemLegend.prototype.$type, n);
            if (p != null) {
                p.cl(this)
            }
            var q = $.ig.util.cast($.ig.ScaleLegend.prototype.$type, n);
            if (q != null) {
                var r = true;
                var s = null;
                if (this.seriesViewer() != null) {
                    var u = this.seriesViewer().series().getEnumerator();
                    while (u.moveNext()) {
                        var t = u.current();
                        if (t.legend() == q) {
                            s = t;
                            r = false
                        }
                    }
                }
                if (r) {
                    q.dk()
                } else {
                    q.dn(s)
                }
            }
            this.l1();
            break
    }
}, l5: function (q, r, s, t) {
    var u = this.lj().minimum();
    var v = this.lj().maximum();
    if (this.radiusScale() != null) {
        var w = this.radiusScale().minimumValue();
        var x = this.radiusScale().maximumValue();
        var y = this.radiusScale().logarithmBase();
        if (!this.radiusScale().p().contains(this)) {
            this.radiusScale().p().add(this)
        }
        if (this.radiusScale().isLogarithmic()) {
            for (var z = 0; z < r.count(); z++) {
                r.__inner[z] = $.ig.BubbleSeries.prototype.l3(u, v, w, x, y, r.__inner[z])
            }
        } else {
            for (var A = 0; A < r.count(); A++) {
                r.__inner[A] = $.ig.BubbleSeries.prototype.l2(u, v, w, x, r.__inner[A])
            }
        }
    }
    if (t) {
        var B = s.width();
        if (!this.view().ab().isEmpty()) {
            B = this.view().ab().width()
        } else {
            if (this.seriesViewer() != null && !this.seriesViewer().viewportRect().isEmpty()) {
                B = this.seriesViewer().viewportRect().width()
            }
        }
        var C = s.width() / B;
        for (var D = 0; D < r.count(); D++) {
            r.__inner[D] = r.__inner[D] * C
        }
    }
    for (var E = 0; E < q.count(); E++) {
        var F = q.__inner[E];
        F.v(Math.max(0, r.__inner[E]));
        F.w(Math.max(0, r.__inner[E]))
    }
}, l6: function (l) {
    if (this.fillScale() != null && !this.fillScale().i().contains(this)) {
        this.fillScale().i().add(this)
    }
    var m = $.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.fillScale());
    var n = $.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.fillScale());
    var o = this.fillScale() == null || this.fillScale().brushes() == null || this.fillScale().brushes().count() == 0 || (n != null && this.fillMemberPath() == null);
    if (o) {
        this.le().eo();
        var p = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, this.dt());
        if (p != null) {
            p.eo()
        }
        return
    }
    var q = l.count();
    for (var r = 0; r < q; r++) {
        var s = l.__inner[r];
        var t = $.ig.util.cast($.ig.DataContext.prototype.$type, s.a9());
        if (t != null) {
            var u = null;
            var v = this.dx().x(t.item());
            if (m != null) {
                u = m.getBrush(v, this.dx().g())
            }
            if (n != null) {
                u = n.getBrushByIndex(v, this.ll())
            }
            t.itemBrush(u)
        }
    }
}, $type: new $.ig.Type("BubbleSeries", $.ig.ScatterBase.prototype.$type)}, true);
$.ig.util.defType("ScatterBaseView", "MarkerSeriesView", {_de: null, de: function (b) {
    if (arguments.length === 1) {
        this._de = b;
        return b
    } else {
        return this._de
    }
}, _df: null, df: function (b) {
    if (arguments.length === 1) {
        this._df = b;
        return b
    } else {
        return this._df
    }
}, _dg: null, dg: function (b) {
    if (arguments.length === 1) {
        this._dg = b;
        return b
    } else {
        return this._dg
    }
}, _dh: null, dh: function (b) {
    if (arguments.length === 1) {
        this._dh = b;
        return b
    } else {
        return this._dh
    }
}, init: function (b) {
    this.c5 = null;
    $.ig.MarkerSeriesView.prototype.init.call(this, b);
    this.dg(b);
    this.dl(new $.ig.HashPool$2($.ig.Object.prototype.$type, $.ig.Marker.prototype.$type));
    this.c2(this.dl());
    this.dk(new $.ig.ScatterTrendLineManager())
}, _di: null, di: function (b) {
    if (arguments.length === 1) {
        this._di = b;
        return b
    } else {
        return this._di
    }
}, _dj: null, dj: function (b) {
    if (arguments.length === 1) {
        this._dj = b;
        return b
    } else {
        return this._dj
    }
}, _dk: null, dk: function (b) {
    if (arguments.length === 1) {
        this._dk = b;
        return b
    } else {
        return this._dk
    }
}, ag: function () {
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.de(this.d2());
    this.di(new $.ig.Path());
    this.dj(new $.ig.Path());
    if (!this.ad()) {
        this.dg().maximumMarkers(2000)
    }
}, c5: null, d1: function (c) {
    if (this.c5 == null) {
        this.c5 = new $.ig.DataTemplateMeasureInfo();
        this.c5.context = this.z().c()
    }
    this.c5.width = c.v();
    this.c5.height = c.w();
    this.c5.data = c.a9();
    var d = c.ba();
    if (d.measure() != null) {
        d.measure()(this.c5)
    }
    return new $.ig.Size(this.c5.width, this.c5.height)
}, d2: function () {
    var a = this;
    var b = new $.ig.NumericMarkerManager(1, function (c) {
        return a.dl().item(c)
    }, function (c) {
        return a.dg().jo().j().item(c)
    }, this.d3.on(this), this.d4.on(this), this.d5.on(this), function () {
        return a.dg().markerCollisionAvoidance()
    });
    b.an(this.d1.on(this));
    return b
}, d3: function (b) {
    this.dg().kc(b, this.dl())
}, d4: function () {
    this.df(this.dg().kd(this.dl(), this.df(), this.ac(), this.ab()));
    return this.df()
}, d5: function () {
    this.dh(this.dg().ke(this.dl(), this.dh()));
    return this.dh()
}, d6: function () {
}, d7: function (b) {
}, d8: function () {
}, d9: function (b) {
}, ea: function () {
    if (this.dg().trendLineBrush() != null) {
        this.dg().actualTrendLineBrush(this.dg().trendLineBrush())
    } else {
        this.dg().actualTrendLineBrush(this.dg().actualBrush())
    }
}, _dl: null, dl: function (b) {
    if (arguments.length === 1) {
        this._dl = b;
        return b
    } else {
        return this._dl
    }
}, cp: function (b) {
    this.dl().w(b)
}, ed: function () {
}, a1: function (d, e) {
    if (d.b()) {
        if (this.dg().trendLineType() != $.ig.TrendLineType.prototype.none && !e) {
            var f = this.dk().n();
            f.a7(this.dg().trendLineThickness());
            f.__stroke = this.dg().actualTrendLineBrush();
            f.a8(this.dg().trendLineDashArray());
            f.a9(this.dg().trendLineDashCap());
            if (this.k && !e) {
                d.e($.ig.GradientDirection.prototype.bottomTop, this.ab())
            }
            d.k(f)
        }
    }
    $.ig.MarkerSeriesView.prototype.a1.call(this, d, e)
}, ee: function (b) {
    if (b) {
        this.ed();
        this.dl().clear()
    }
    this.dk().ab()
}, $type: new $.ig.Type("ScatterBaseView", $.ig.MarkerSeriesView.prototype.$type)}, true);
$.ig.util.defType("BubbleSeriesView", "ScatterBaseView", {_ej: null, ej: function (b) {
    if (arguments.length === 1) {
        this._ej = b;
        return b
    } else {
        return this._ej
    }
}, init: function (b) {
    $.ig.ScatterBaseView.prototype.init.call(this, b);
    this.ej(b);
    this.dk(new $.ig.ScatterTrendLineManager())
}, ag: function () {
    $.ig.ScatterBaseView.prototype.ag.call(this);
    if (!this.ad()) {
        this.cg().markerType($.ig.MarkerType.prototype.automatic)
    }
}, d2: function () {
    var a = this;
    return new $.ig.BubbleMarkerManager(function (b) {
        return a.dl().item(b)
    }, function (c) {
        return a.u().dx().item(c)
    }, this.d3.on(this), this.d4.on(this), this.d5.on(this))
}, em: function () {
    var b = this.de();
    this.ej().l5(b.aj(), b.ai(), this.ab(), this == this.u().dt());
    this.an()
}, en: function () {
    var b = this.de();
    this.ej().l6(b.aj())
}, eo: function () {
    var e = this.de();
    var g = e.aj().getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        var h = $.ig.util.cast($.ig.DataContext.prototype.$type, f.a9());
        if (h != null) {
            h.itemBrush(null)
        }
    }
}, $type: new $.ig.Type("BubbleSeriesView", $.ig.ScatterBaseView.prototype.$type)}, true);
$.ig.util.defType("CustomPaletteBrushScale", "BrushScale", {init: function () {
    $.ig.BrushScale.prototype.init.call(this)
}, brushSelectionMode: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty, b);
        return b
    } else {
        return this.b($.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty)
    }
}, getBrush: function (d, e) {
    if (this.brushes() == null || this.brushes().count() == 0) {
        return null
    }
    if (this.brushSelectionMode() == $.ig.BrushSelectionMode.prototype.select) {
        return $.ig.BrushScale.prototype.getBrush.call(this, d % this.brushes().count())
    }
    var f = $.ig.BubbleSeries.prototype.l2(0, e - 1, 0, this.brushes().count() - 1, d);
    return this.m(f)
}, $type: new $.ig.Type("CustomPaletteBrushScale", $.ig.BrushScale.prototype.$type)}, true);
$.ig.util.defType("SizeScale", "DependencyObject", {init: function () {
    var a = this;
    $.ig.DependencyObject.prototype.init.call(this);
    this.p(new $.ig.List$1($.ig.Series.prototype.$type, 0));
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (c, d) {
        return a.t(c, d.propertyName(), d.oldValue(), d.newValue())
    })
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.minimumValueProperty)
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.maximumValueProperty)
    }
}, isLogarithmic: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.isLogarithmicProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.isLogarithmicProperty)
    }
}, logarithmBase: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.logarithmBaseProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.logarithmBaseProperty)
    }
}, propertyChanged: null, propertyUpdated: null, s: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, t: function (g, h, i, j) {
    var l = this.p().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        k.renderSeries(false);
        if (k.seriesViewer() != null) {
            k.e5()
        }
    }
}, $type: new $.ig.Type("SizeScale", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("ValueBrushScale", "BrushScale", {init: function () {
    $.ig.BrushScale.prototype.init.call(this)
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.minimumValueProperty)
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.maximumValueProperty)
    }
}, isLogarithmic: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.isLogarithmicProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.isLogarithmicProperty)
    }
}, logarithmBase: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.logarithmBaseProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.logarithmBaseProperty)
    }
}, getBrushByIndex: function (f, g) {
    if (g == null || this.brushes() == null || this.brushes().count() == 0 || f < 0 || f >= g.count()) {
        return null
    }
    if (g.count() == 0) {
        return this.brushes().item(0)
    }
    var h = isNaN(this.minimumValue()) || Number.isInfinity(this.minimumValue()) ? g.minimum() : this.minimumValue();
    var i = isNaN(this.maximumValue()) || Number.isInfinity(this.maximumValue()) ? g.maximum() : this.maximumValue();
    var j = g.item(f);
    if (h == i) {
        return j == h ? this.brushes().item(0) : null
    }
    return this.y(h, i, j)
}, getBrushByValue: function (e, f) {
    if (f == null || this.brushes() == null || this.brushes().count() == 0) {
        return null
    }
    if (f.count() <= 1) {
        return this.brushes().item(0)
    }
    var g = isNaN(this.minimumValue()) || Number.isInfinity(this.minimumValue()) ? f.minimum() : this.minimumValue();
    var h = isNaN(this.maximumValue()) || Number.isInfinity(this.maximumValue()) ? f.maximum() : this.maximumValue();
    if (e < g) {
        return null
    }
    if (e > h) {
        return null
    }
    return this.y(g, h, e)
}, y: function (g, h, i) {
    if (this.isLogarithmic() && this.logarithmBase() > 0) {
        var j = Math.logBase(g, this.logarithmBase());
        var k = Math.logBase(h, this.logarithmBase());
        var l = Math.logBase(i, this.logarithmBase());
        return this.z(j, k, l)
    }
    return this.z(g, h, i)
}, z: function (f, g, h) {
    if (h < f || h > g) {
        return null
    }
    var i = (h - f) / (g - f);
    var j = i * (this.brushes().count() - 1);
    return this.m(j)
}, $type: new $.ig.Type("ValueBrushScale", $.ig.BrushScale.prototype.$type)}, true);
$.ig.util.defType("ScaleLegend", "LegendBase", {bu: function () {
    return new $.ig.ScaleLegendView(this)
}, bv: function (b) {
    $.ig.LegendBase.prototype.bv.call(this, b);
    this.cq(b)
}, _cq: null, cq: function (b) {
    if (arguments.length === 1) {
        this._cq = b;
        return b
    } else {
        return this._cq
    }
}, legendScaleElement: function () {
    return this.cq().a2()
}, minText: function () {
    return this.cq().a3()
}, maxText: function () {
    return this.cq().a4()
}, init: function () {
    $.ig.LegendBase.prototype.init.call(this);
    this.a3($.ig.ScaleLegend.prototype.$type)
}, cr: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScaleLegend.prototype.ce, b);
        return b
    } else {
        return this.b($.ig.ScaleLegend.prototype.ce)
    }
}, cs: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScaleLegend.prototype.cf, b);
        return b
    } else {
        return this.b($.ig.ScaleLegend.prototype.cf)
    }
}, _ct: null, ct: function (b) {
    if (arguments.length === 1) {
        this._ct = b;
        return b
    } else {
        return this._ct
    }
}, _cu: null, cu: function (b) {
    if (arguments.length === 1) {
        this._cu = b;
        return b
    } else {
        return this._cu
    }
}, _cv: null, cv: function (b) {
    if (arguments.length === 1) {
        this._cv = b;
        return b
    } else {
        return this._cv
    }
}, _cw: null, cw: function (b) {
    if (arguments.length === 1) {
        this._cw = b;
        return b
    } else {
        return this._cw
    }
}, _cx: null, cx: function (b) {
    if (arguments.length === 1) {
        this._cx = b;
        return b
    } else {
        return this._cx
    }
}, _cy: null, cy: function (b) {
    if (arguments.length === 1) {
        this._cy = b;
        return b
    } else {
        return this._cy
    }
}, cg: null, cz: function (c) {
    if (arguments.length === 1) {
        var b = this;
        this.cg = c;
        this.d($.ig.ScaleLegend.prototype.ce, (function () {
            var a = new $.ig.Binding(1, "Visibility");
            a.d(b.cg);
            return a
        }()));
        this.d($.ig.ScaleLegend.prototype.cf, (function () {
            var a = new $.ig.Binding(1, $.ig.MarkerSeries.prototype.hs);
            a.d(b.cg);
            return a
        }()));
        return c
    } else {
        return this.cg
    }
}, dk: function () {
    this.cq().bi()
}, dl: function (d) {
    if (this.cz() == null) {
        return null
    }
    var e = $.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.cz().fillScale());
    if (e != null && this.cz().dx() != null) {
        return e.getBrush(d, this.cz().dx().g())
    }
    var f = $.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.cz().fillScale());
    if (f != null) {
        return f.getBrushByIndex(d, this.cx())
    }
    return null
}, dm: function (b) {
    if (b == null) {
        return this.cq().bj()
    }
    return $.ig.ColorUtil.prototype.n(b)
}, dn: function (c) {
    var d = $.ig.util.cast($.ig.BubbleSeries.prototype.$type, c);
    if (d == null || c.__visibility != $.ig.Visibility.prototype.visible) {
        return
    }
    this.cw(d.lh());
    this.cy(d.fillScale());
    this.cx(d.ll());
    this.cz(d);
    this.cv(new $.ig.ObservableCollection$1($.ig.Brush.prototype.$type, 0));
    this.dp()
}, dp: function () {
    if (this.legendScaleElement() == null || this.cw() == null || this.cw().count() == 0) {
        return
    }
    if (this.cz() == null || this.cz().actualLegend() != this) {
        return
    }
    var j = false;
    var k = $.ig.util.cast($.ig.Shape.prototype.$type, this.legendScaleElement());
    if (k != null) {
        var l = this.cq().bk();
        for (var m = 0; m < this.cw().count(); m++) {
            if (this.cy() == null || this.cy().brushes() == null || this.cy().brushes().count() == 0) {
                if (this.cz() != null) {
                    j = true
                }
                break
            }
            var n = NaN;
            if (this.cx() != null) {
                n = (this.cx().item(m) - this.cx().minimum()) / (this.cx().maximum() - this.cx().minimum())
            }
            var o = (this.cw().item(m) - this.cw().minimum()) / (this.cw().maximum() - this.cw().minimum());
            if (isNaN(n)) {
                n = 0
            }
            if (isNaN(o)) {
                o = n
            }
            var p = this.cz() != null ? this.dm(this.cz().actualMarkerBrush()) : this.cq().bj();
            var q = this.dl(m);
            var r = q != null ? this.dm(q) : p;
            this.cq().bl(l, r, o)
        }
        this.cq().bm(k, j, l)
    }
    if (this.minText() != null) {
        this.minText().a5((Math.round(this.cw().minimum() * 1000) / 1000).toString())
    }
    if (this.maxText() != null) {
        this.maxText().a5((Math.round(this.cw().maximum() * 1000) / 1000).toString())
    }
}, $type: new $.ig.Type("ScaleLegend", $.ig.LegendBase.prototype.$type)}, true);
$.ig.util.defType("ScaleLegendView", "LegendBaseView", {init: function (b) {
    this.ar = false;
    $.ig.LegendBaseView.prototype.init.call(this, b);
    this.a1(b);
    this.a3(new $.ig.TextBlock());
    this.a4(new $.ig.TextBlock());
    this.a2(new $.ig.Polygon())
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
}, bi: function () {
}, v: function () {
}, bj: function () {
    return $.ig.Color.prototype.s(0, 0, 0, 0)
}, bk: function () {
    return new $.ig.GradientData()
}, bl: function (f, g, h) {
    var e = this;
    var i = f;
    i.b().add((function () {
        var a = new $.ig.GradientStopData();
        a.d((function () {
            var b = new $.ig.Brush();
            b.color(g);
            return b
        }()));
        a.c(h);
        return a
    }()))
}, bm: function (d, e, f) {
    this.a5(f)
}, _a5: null, a5: function (b) {
    if (arguments.length === 1) {
        this._a5 = b;
        return b
    } else {
        return this._a5
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
}, z: function (b) {
    $.ig.LegendBaseView.prototype.z.call(this, b);
    this.a6(this.h().ab(b));
    this.a7(this.h().ac());
    this.bt()
}, ar: null, bt: function () {
    if (!this.ar) {
        this.ar = true;
        window.setTimeout(this.bu.on(this), 0)
    }
}, bu: function () {
    if (this.ar) {
        this.ar = false;
        this.bv()
    }
}, bv: function () {
    if (this.a6() == null) {
        return
    }
    this.b2()
}, bw: function (c) {
    var d = $.ig.util.cast($.ig.TextBlock.prototype.$type, c);
    if (d != null && d.a5() != null) {
        return this.a6().y(d.a5()) + $.ig.ScaleLegendView.prototype.aq
    }
    return 0
}, bx: function (b) {
    return this.a8() + $.ig.ScaleLegendView.prototype.aq
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
}, b2: function () {
    if (this.a1().cz() == null || this.a1().cz().seriesViewer() == null || this.a5() == null) {
        return
    }
    if (this.a6().b()) {
        this.a6().x(this.a1().cz().seriesViewer().ir());
        this.a8(this.a1().cz().seriesViewer().fb().ax());
        this.a9(this.a1().cz().seriesViewer().iq());
        var p = this.bw(this.a3());
        var q = this.bw(this.a4());
        var r = Math.max(p, q) + 4;
        if (r >= this.a7().c()) {
            r = 0
        }
        var s = this.a7().c() - r;
        var t = 2;
        var u = 2;
        s = s - 4;
        var v = this.a7().d() - 4;
        var w = t + s + 4;
        var x = u;
        var y = v;
        var z = {__x: t + (3 / 5) * s, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var A = {__x: t + (5 / 5) * s, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var B = {__x: t + (5 / 5) * s, __y: v, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var C = {__x: t, __y: v, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var D = this.a2();
        D.bn().clear();
        D.bn().add(z);
        D.bn().add(A);
        D.bn().add(B);
        D.bn().add(C);
        this.a3().y(w);
        this.a3().x(x);
        this.a3().a6(this.a9());
        this.a4().y(w);
        this.a4().x(x + y - (this.bx(this.a3())));
        this.a4().a6(this.a9());
        this.a6().t(0, 0, this.a7().c(), this.a7().d());
        this.h().ad(this.a6(), D, this.a5(), new $.ig.Rect(0, u, t, s, v));
        if (r > 0) {
            this.a6().i(this.a3());
            this.a6().i(this.a4())
        }
    }
}, $type: new $.ig.Type("ScaleLegendView", $.ig.LegendBaseView.prototype.$type)}, true);
$.ig.util.defType("HighDensityScatterSeries", "Series", {init: function () {
    this.h3 = null;
    this.ia = 0;
    this.ib = 0;
    this.ic = false;
    this.il = 0;
    this.__itemIndexes = null;
    $.ig.Series.prototype.init.call(this);
    this.a3($.ig.HighDensityScatterSeries.prototype.$type)
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.yAxisProperty)
    }
}, xMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.xMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.xMemberPathProperty)
    }
}, iz: function (c) {
    if (arguments.length === 1) {
        if (this.h1 != c) {
            var d = this.iz();
            this.h1 = c;
            this.ej($.ig.HighDensityScatterSeries.prototype.hs, d, this.iz())
        }
        return c
    } else {
        return this.h1
    }
}, h1: null, yMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.yMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.yMemberPathProperty)
    }
}, i0: function (c) {
    if (arguments.length === 1) {
        if (this.h2 != c) {
            var d = this.i0();
            this.h2 = c;
            this.ej($.ig.HighDensityScatterSeries.prototype.hu, d, this.i0())
        }
        return c
    } else {
        return this.h2
    }
}, h2: null, useBruteForce: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.useBruteForceProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.useBruteForceProperty)
    }
}, progressiveLoad: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty)
    }
}, mouseOverEnabled: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty)
    }
}, useSquareCutoffStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty)
    }
}, heatMinimum: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.heatMinimumProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.heatMinimumProperty)
    }
}, heatMaximum: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.heatMaximumProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.heatMaximumProperty)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.Series.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.HighDensityScatterSeries.prototype.be:
            if (this.h3 != null) {
                this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this))
            }
            this.h3 = null;
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.iz());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.i0());
                this.iz(null);
                this.i0(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i) != null) {
                this.iz(this.gs(this.xMemberPath()));
                this.i0(this.gs(this.yMemberPath()))
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (this.xAxis() != null && !this.xAxis().updateRange())) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hp:
            this.h6 = this.xAxis();
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            if ((this.xAxis() != null && !this.xAxis().updateRange()) || (i == null && h != null)) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hq:
            this.h7 = this.yAxis();
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (i == null && h != null)) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hx:
            this.h8 = this.mouseOverEnabled();
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.hr:
            if (this.dx() != null) {
                this.dx().ac(this.iz());
                this.iz(this.gs(this.xMemberPath()))
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hs:
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.ht:
            if (this.dx() != null) {
                this.dx().ac(this.i0());
                this.i0(this.gs(this.yMemberPath()))
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hu:
            if (this.yAxis() != null && !this.yAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hv:
            if (this.h3 != null) {
                this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this))
            }
            this.h3 = null;
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.hz:
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.h0:
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.hy:
            this.renderSeries(false);
            break
    }
}, h3: null, h4: null, h5: null, h6: null, h7: null, h8: null, es: function (e, f, g) {
    var h = $.ig.Series.prototype.es.call(this, e, f, g);
    if (this.yAxis() == null || this.xAxis() == null || this.i0() == null || this.iz() == null || this.i0().count() < 1 || this.iz().count() < 1 || this.i0().count() != this.iz().count() || this.d6().isEmpty()) {
        h = false
    }
    return h
}, eo: function (g) {
    var f = this;
    $.ig.Series.prototype.eo.call(this, g);
    if (this.ev()) {
        return
    }
    if (this.h3 == null && !this.useBruteForce()) {
        var h = new Array(this.iz().count());
        for (var i = 0; i < this.iz().count(); i++) {
            h[i] = (function () {
                var a = new $.ig.PointData();
                a.a = f.iz().item(i);
                a.b = f.i0().item(i);
                a.c = i;
                return a
            }())
        }
        if (this.progressiveLoad()) {
            this.ib = 1;
            this.ia = Math.logBase(h.length, 2) + 3;
            if (this.progressiveLoadStatusChanged != null) {
                this.progressiveLoadStatusChanged(this, new $.ig.ProgressiveLoadStatusEventArgs(((this.ib / this.ia) * 100)))
            }
            this.h3 = $.ig.KDTree2D.prototype.n(h, 1);
            this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.combine(this.h3.progressiveThunkCompleted, this.i9.on(this));
            if (!this.h3.o()) {
                this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this))
            }
        } else {
            var j = $.ig.Date.prototype.now();
            this.h3 = new $.ig.KDTree2D(0, h, 1);
            var k = $.ig.Date.prototype.now()
        }
    }
    if (this.progressiveLoad() && !this.useBruteForce()) {
        this.i8()
    } else {
        this.i7()
    }
}, h9: null, ia: null, ib: null, ic: null, i6: function () {
    var d = this.ii * this.ij;
    if (this.h8) {
        if (this.__itemIndexes == null || this.__itemIndexes.length != d) {
            this.__itemIndexes = new Array(d);
            for (var e = 0; e < d; e++) {
                this.__itemIndexes[e] = 0
            }
        } else {
            for (var f = 0; f < d; f++) {
                this.__itemIndexes[f] = 0
            }
        }
    }
}, i7: function () {
    var d = this;
    var e;
    var f;
    (function () {
        var a = d.getViewInfo(f, e);
        f = a.viewportRect;
        e = a.windowRect;
        return a.ret
    }());
    this.h4 = new $.ig.ScalerParams(this.seriesViewer().actualWindowRect(), f, this.h6.isInverted());
    this.h4.c = this.seriesViewer().effectiveViewport();
    this.h5 = new $.ig.ScalerParams(this.seriesViewer().actualWindowRect(), f, this.h7.isInverted());
    this.h5.c = this.seriesViewer().effectiveViewport();
    this.ji();
    this.i6();
    this.h9 = Math.round(this.resolution());
    this.ic = this.useSquareCutoffStyle();
    this.ik = this.i1().cx();
    for (var g = 0; g < this.ik.length; g++) {
        this.ik[g] = 0
    }
    if (this.useBruteForce()) {
        this.ja()
    } else {
        this.jb()
    }
    this.i1().cy()
}, i8: function () {
    this.i7()
}, progressiveLoadStatusChanged: null, i9: function (d, e) {
    var c = this;
    this.i1().cz(function () {
        $.ig.Debug.prototype.b("thunk");
        if (c.ib < c.ia - 1) {
            c.ib++
        }
        if (c.progressiveLoadStatusChanged != null) {
            c.progressiveLoadStatusChanged(c, new $.ig.ProgressiveLoadStatusEventArgs(((c.ib / c.ia) * 100)))
        }
        c.i8();
        if (!c.h3.o()) {
            c.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(c.h3.progressiveThunkCompleted, c.i9.on(c));
            if (c.progressiveLoadStatusChanged != null) {
                c.progressiveLoadStatusChanged(c, new $.ig.ProgressiveLoadStatusEventArgs(100))
            }
        }
    })
}, ja: function () {
    var g = this.iz().asArray().clone();
    this.xAxis().getScaledValueList(g, 0, g.length, this.h4);
    var h = this.i0().asArray().clone();
    this.yAxis().getScaledValueList(h, 0, h.length, this.h5);
    for (var i = 0; i < g.length; i++) {
        var j = g[i];
        var k = h[i];
        j = Math.floor(j);
        k = Math.floor(k);
        if (j < 0 || j >= this.ii || k < 0 || k >= this.ij) {
            continue
        }
        var l = (k * 4 * this.ii) + j * 4;
        this.ik[l] = 0;
        this.ik[l + 1] = 0;
        this.ik[l + 2] = 0;
        this.ik[l + 3] = 255;
        this.il++;
        if (this.h8) {
            this.__itemIndexes[l] = i + 1
        }
    }
}, ie: null, jb: function () {
    var k = this;
    if (this.ie == null) {
        this.ie = new $.ig.List$1($.ig.KDTreeNode2D.prototype.$type, 2, Math.round(this.d6().width() * this.d6().height()))
    } else {
        this.ie.clear()
    }
    var l = this.xAxis().getUnscaledValue(this.d6().left(), this.h4);
    var m = this.xAxis().getUnscaledValue(this.d6().right(), this.h4);
    var n = this.yAxis().getUnscaledValue(this.d6().bottom(), this.h5);
    var o = this.yAxis().getUnscaledValue(this.d6().top(), this.h5);
    var p = Math.abs(this.xAxis().getUnscaledValue(this.d6().left() + this.resolution(), this.h4) - this.xAxis().getUnscaledValue(this.d6().left(), this.h4));
    var q = Math.abs(this.yAxis().getUnscaledValue(this.d6().top() + this.resolution(), this.h5) - this.yAxis().getUnscaledValue(this.d6().top(), this.h5));
    var r = Math.min(p, q);
    var s = (function () {
        var a = new $.ig.SearchArgs();
        a.a = l;
        a.c = m;
        a.b = n;
        a.d = o;
        a.e = p;
        a.f = q;
        a.g = $.ig.Number.prototype.MAX_VALUE;
        return a
    }());
    this.h3.y(this.ie, s, this.xAxis().actualMinimumValue(), this.xAxis().actualMaximumValue(), this.yAxis().actualMinimumValue(), this.yAxis().actualMaximumValue());
    $.ig.Debug.prototype.b("nodes returned: " + this.ie.count());
    var t;
    this.ig = this.heatMinimum();
    this.ih = this.heatMaximum();
    this.il = 0;
    for (var u = 0; u < this.ie.count(); u++) {
        t = this.ie.__inner[u];
        this.jc(t)
    }
    $.ig.Debug.prototype.b("rendered: " + this.il)
}, ig: null, ih: null, jc: function (g) {
    if (g.a) {
        return
    }
    var h = g.h != null && g.h.a;
    var i = g.g == null ? 0 : g.g.length;
    var j = (g.c - i);
    if (j > 0) {
        j = (j - this.ig) / (this.ih - this.ig);
        if (j < 0) {
            j = 0
        }
        if (j > 1) {
            j = 1
        }
    } else {
        j = 0
    }
    this.jd(g.d, j, h, g.c, g.h);
    if (i > 0 && !h) {
        var k;
        for (var l = 0; l < i; l++) {
            k = g.g[l];
            this.jd(k, 0, false, g.c, g.h)
        }
    }
    if (g.h != null) {
        g.h.a = false
    }
}, jd: function (A, D, E, F, G) {
    var H = this.jf(D);
    var I = A.c;
    if (E) {
        if (this.ic) {
            var J = this.h6.getScaledValue(A.a, this.h4);
            var K = this.h7.getScaledValue(A.b, this.h5);
            J = Math.floor(J);
            K = Math.floor(K);
            var L = $.ig.intDivide(this.h9, 2);
            var M = this.h9 - L;
            var N = this.h9 - M;
            var O = this.h9 * this.h9;
            var P = F / O;
            var Q = this.je(D, P);
            for (var R = J - N; R < J + M; R++) {
                for (var S = K - N; S < K + M; S++) {
                    this.jh(I, R, S, Q, D)
                }
            }
        } else {
            var T = this.h6.getScaledValue(G.b, this.h4);
            var U = this.h6.getScaledValue(G.c, this.h4);
            var V = this.h7.getScaledValue(G.d, this.h5);
            var W = this.h7.getScaledValue(G.e, this.h5);
            T = Math.floor(T);
            U = Math.floor(U);
            W = Math.floor(W);
            V = Math.floor(V);
            var X = (U - T + 1) * (V - W + 1);
            var Y = F / X;
            if (Y > 1) {
                Y = 1
            }
            if (Y < 0.2) {
                Y = 0.2
            }
            var Z = this.je(D, Y);
            for (var aa = T; aa <= U; aa++) {
                for (var ab = W; ab <= V; ab++) {
                    this.jh(I, aa, ab, Z, D)
                }
            }
        }
    } else {
        var B = this.h6.getScaledValue(A.a, this.h4);
        var C = this.h7.getScaledValue(A.b, this.h5);
        B = Math.floor(B);
        C = Math.floor(C);
        this.jh(I, B, C, H, D)
    }
}, je: function (c, d) {
    return(Math.floor(255 * d)) << 24 | Math.floor(c * d * 255) << 16 | 0 << 8 | 0
}, jf: function (b) {
    return 255 << 24 | Math.floor(b * 255) << 16 | 0 << 8 | 0
}, jg: function (b) {
    return(b >> 24 & 255) / 255
}, jh: function (h, i, j, k, l) {
    if (i < 0 || i >= this.ii || j < 0 || j >= this.ij) {
        return
    }
    var m = (j * 4 * this.ii) + i * 4;
    var n = this.ik[m];
    if (n <= l) {
        this.ik[m] = k >> 16 & 255;
        this.ik[m + 1] = k >> 8 & 255;
        this.ik[m + 2] = k & 255;
        this.ik[m + 3] = k >> 24 & 255
    }
    if (this.h8) {
        this.__itemIndexes[$.ig.intDivide(m, 4)] = h + 1
    }
    this.il++
}, ii: null, ij: null, ik: null, il: null, ji: function () {
    this.i1().cw()
}, ed: function () {
    return new $.ig.HighDensityScatterSeriesView(this)
}, ea: function (b) {
    $.ig.Series.prototype.ea.call(this, b);
    this.i1(b)
}, _i1: null, i1: function (b) {
    if (arguments.length === 1) {
        this._i1 = b;
        return b
    } else {
        return this._i1
    }
}, em: function (b) {
    if (b != null && b == this.xAxis() && this.iz() != null) {
        return new $.ig.AxisRange(this.iz().minimum(), this.iz().maximum())
    }
    if (b != null && b == this.yAxis() && this.i0() != null) {
        return new $.ig.AxisRange(this.i0().minimum(), this.i0().maximum())
    }
    return null
}, ez: function (c, d) {
    this.renderSeries(false)
}, ey: function (c, d) {
    this.renderSeries(false)
}, __itemIndexes: null, eh: function (i) {
    if (!this.h8 || this.__itemIndexes == null || this.__itemIndexes.length != (this.ii * this.ij)) {
        return null
    }
    var j = this.seriesViewer().windowRect();
    var k = (i.__x - j.left()) / j.width();
    var l = (i.__y - j.top()) / j.height();
    var m = Math.round((this.d6().width() * k));
    var n = Math.round((this.d6().height() * l));
    var o = (this.ii * n) + m;
    if (o < 0 || o > this.__itemIndexes.length - 1) {
        return null
    }
    var p = this.__itemIndexes[o] - 1;
    if (p < 0 || p > this.dx().g()) {
        return null
    }
    return this.dx().item(p)
}, scatterMouseOver: null, jl: function (d, e, f) {
    this.ik = d;
    this.ii = e;
    this.ij = f
}, d3: function () {
    return true
}, $type: new $.ig.Type("HighDensityScatterSeries", $.ig.Series.prototype.$type)}, true);
$.ig.util.defType("ProgressiveLoadStatusEventArgs", "EventArgs", {_currentStatus: null, currentStatus: function (b) {
    if (arguments.length === 1) {
        this._currentStatus = b;
        return b
    } else {
        return this._currentStatus
    }
}, init: function (b) {
    $.ig.EventArgs.prototype.init.call(this);
    this.currentStatus(b)
}, $type: new $.ig.Type("ProgressiveLoadStatusEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("HighDensityScatterSeriesView", "SeriesView", {init: function (b) {
    $.ig.SeriesView.prototype.init.call(this, b);
    this.ck(b)
}, ag: function () {
    $.ig.SeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().resolution(4)
    }
}, _ck: null, ck: function (b) {
    if (arguments.length === 1) {
        this._ck = b;
        return b
    } else {
        return this._ck
    }
}, cd: null, ce: null, cf: null, _cl: null, cl: function (b) {
    if (arguments.length === 1) {
        this._cl = b;
        return b
    } else {
        return this._cl
    }
}, _cm: null, cm: function (b) {
    if (arguments.length === 1) {
        this._cm = b;
        return b
    } else {
        return this._cm
    }
}, _cn: null, cn: function (b) {
    if (arguments.length === 1) {
        this._cn = b;
        return b
    } else {
        return this._cn
    }
}, cw: function () {
    if (this.cl() == null) {
        this.cl($("<canvas></canvas>"));
        var g = (this.cl()[0]).getContext("2d");
        this.cn(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), g))
    }
    var h = this.u().seriesViewer().getContainerRect();
    var i = Math.round(h.left());
    var j = Math.round(h.top());
    var k = Math.round(h.width());
    var l = Math.round(h.height());
    this.ce = k;
    this.cf = l;
    this.cl().attr("width", k.toString());
    this.cl().attr("height", l.toString());
    this.cm((this.cn().c()).getImageData(0, 0, k, l));
    this.cd = this.cm().data;
    this.ck().jl(this.cd, this.ce, this.cf)
}, cx: function () {
    return this.cd
}, cy: function () {
    var e = Math.round(this.ab().left());
    var f = Math.round(this.ab().left());
    var g = Math.round(this.ab().width());
    var h = Math.round(this.ab().height());
    (this.cn().c()).putImageData(this.cm(), 0, 0);
    this.an()
}, cz: function (b) {
    window.setTimeout(b, 0)
}, a0: function (h, i) {
    $.ig.SeriesView.prototype.a0.call(this, h, i);
    if (i) {
        if (!this.ck().mouseOverEnabled()) {
            return
        }
        var j = new $.ig.Rectangle();
        j.y(this.ab().left());
        j.x(this.ab().top());
        j.v(this.ab().width());
        j.w(this.ab().height());
        j.__fill = this.az();
        h.f(j);
        return
    }
    if (this.cl() == null) {
        return
    }
    var k = Math.round(this.ab().left());
    var l = Math.round(this.ab().top());
    var m = Math.round(this.ab().width());
    var n = Math.round(this.ab().height());
    this.z().u(this.cl()[0], k, l, m, n, k, l, m, n)
}, $type: new $.ig.Type("HighDensityScatterSeriesView", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("KDTree2D", "Object", {init: function (e, c, d) {
    if (e > 0) {
        switch (e) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    this.d = 0;
    this.e = {};
    this.g = new $.ig.Random();
    $.ig.Object.prototype.init.call(this);
    this.j(this.r(c, 0, c.length - 1, 0, d))
}, init1: function (a) {
    this.d = 0;
    this.e = {};
    this.g = new $.ig.Random();
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, i: function () {
    return this.e
}, progressiveThunkCompleted: null, n: function (e, f) {
    var d = this;
    var g = new $.ig.KDTree2D(1);
    g.j(new $.ig.KDTreeNode2D());
    g.j().a = true;
    g.a = e;
    g.b = new $.ig.Stack$1($.ig.KDTreeThunk.prototype.$type);
    g.c = new $.ig.List$1($.ig.KDTreeThunk.prototype.$type, 0);
    g.b.c((function () {
        var a = new $.ig.KDTreeThunk();
        a.a = 0;
        a.b = e.length - 1;
        a.c = 0;
        a.d = f;
        a.e = g.j();
        return a
    }()));
    return g
}, o: function () {
    if (this.b.b() == 0) {
        this.a = null;
        return false
    }
    this.d = this.b.d().c;
    while (this.b.b() > 0 && this.b.d().c == this.d) {
        this.c.add(this.b.e())
    }
    window.setTimeout(this.p.on(this), 0);
    return true
}, p: function () {
    var c;
    for (var d = 0; d < this.c.count(); d++) {
        c = this.c.__inner[d];
        this.q(c.e, this.a, c.a, c.b, c.c, c.d)
    }
    this.c.clear();
    if (this.progressiveThunkCompleted != null) {
        this.progressiveThunkCompleted(this, new $.ig.EventArgs())
    }
}, q: function (l, m, n, o, p, q) {
    var k = this;
    l.a = false;
    l.b = (p % 2) == 0;
    l.c = o - n;
    if (n == o) {
        l.d = m[n];
        return
    }
    if (n > o) {
        return
    }
    if (o - n + 1 <= q) {
        l.d = m[n];
        l.g = new Array(o - n + 1);
        var r = 0;
        for (var s = n; s <= o; s++) {
            l.g[r++] = m[s]
        }
        return
    }
    var t = Math.max($.ig.intDivide((o - n), 2), 1);
    var u = this.t(m, n, o, l.b, t);
    l.d = m[u];
    if (n <= u - 1) {
        l.e = (function () {
            var a = new $.ig.KDTreeNode2D();
            a.a = true;
            return a
        }());
        l.c = (u - 1) - n + 1;
        this.b.c((function () {
            var a = new $.ig.KDTreeThunk();
            a.a = n;
            a.b = u - 1;
            a.c = p + 1;
            a.d = q;
            a.e = l.e;
            return a
        }()))
    } else {
        l.e = null
    }
    if (u + 1 <= o) {
        l.f = (function () {
            var a = new $.ig.KDTreeNode2D();
            a.a = true;
            return a
        }());
        l.c = o - (u + 1) + 1;
        this.b.c((function () {
            var a = new $.ig.KDTreeThunk();
            a.a = u + 1;
            a.b = o;
            a.c = p + 1;
            a.d = q;
            a.e = l.f;
            return a
        }()))
    } else {
        l.f = null
    }
}, r: function (k, l, m, n, o) {
    var p = new $.ig.KDTreeNode2D();
    p.b = (n % 2) == 0;
    p.c = m - l;
    if (l == m) {
        p.d = k[l];
        return p
    }
    if (l > m) {
        return null
    }
    if (m - l + 1 <= o) {
        p.d = k[l];
        p.g = new Array(m - l + 1);
        var q = 0;
        for (var r = l; r <= m; r++) {
            p.g[q++] = k[r]
        }
        return p
    }
    var s = Math.max($.ig.intDivide((m - l), 2), 1);
    var t = this.t(k, l, m, p.b, s);
    p.d = k[t];
    p.e = this.r(k, l, t - 1, n + 1, o);
    p.f = this.r(k, t + 1, m, n + 1, o);
    return p
}, s: function (k, l, m, n, o) {
    var p = l ? k[o].a : k[o].b;
    var q = k[o];
    k[o] = k[n];
    k[n] = q;
    var r = m;
    for (var s = m; s < n; s++) {
        var t;
        if (l) {
            t = k[s].a
        } else {
            t = k[s].b
        }
        if (t <= p) {
            q = k[r];
            k[r] = k[s];
            k[s] = q;
            r++
        }
    }
    q = k[n];
    k[n] = k[r];
    k[r] = q;
    return r
}, g: null, t: function (i, j, k, l, m) {
    if (j == k) {
        return j
    }
    var n = this.g.c(j, k);
    var o = this.s(i, l, j, k, n);
    var p = o - j + 1;
    if (p == m) {
        return o
    } else {
        if (m < p) {
            return this.t(i, j, o - 1, l, m)
        } else {
            return this.t(i, o + 1, k, l, m - p)
        }
    }
}, u: function (e, f, g, h) {
    this.v(e, f, g, h, this.j())
}, v: function (g, h, i, j, k) {
    if (k == null || k.a) {
        return
    }
    if (k.e == null && k.f == null) {
        this.w(g, h, i, k, k.d, true, 0, j);
        if (g.d) {
            return
        }
        if (k.g != null && k.g.length > 0) {
            for (var l = 0; l < k.g.length; l++) {
                this.w(g, h, i, k, k.g[l], false, l, j);
                if (g.d) {
                    return
                }
            }
        }
        return
    }
    this.w(g, h, i, k, k.d, true, 0, j);
    if (g.d) {
        return
    }
    if (k.b) {
        if (h <= k.d.a) {
            this.v(g, h, i, j, k.e);
            if (g.d) {
                return
            }
            if (this.x(h, i, k.d.a, i) < g.f) {
                this.v(g, h, i, j, k.f)
            }
            if (g.d) {
                return
            }
        } else {
            this.v(g, h, i, j, k.f);
            if (g.d) {
                return
            }
            if (this.x(h, i, k.d.a, i) < g.f) {
                this.v(g, h, i, j, k.e)
            }
            if (g.d) {
                return
            }
        }
    } else {
        if (i <= k.d.b) {
            this.v(g, h, i, j, k.e);
            if (g.d) {
                return
            }
            if (this.x(h, i, h, k.d.b) < g.f) {
                this.v(g, h, i, j, k.f)
            }
            if (g.d) {
                return
            }
        } else {
            this.v(g, h, i, j, k.f);
            if (g.d) {
                return
            }
            if (this.x(h, i, h, k.d.b) < g.f) {
                this.v(g, h, i, j, k.e)
            }
            if (g.d) {
                return
            }
        }
    }
}, w: function (p, q, r, s, t, u, v, w) {
    var o = this;
    if (p.d) {
        return
    }
    if (p.a > p.b) {
        p.d = true;
        return
    }
    if (p.c.count() < w) {
        if (isNaN(p.e)) {
            p.e = this.x(q, r, t.a, t.b);
            p.f = p.e;
            p.g = 0
        }
        p.c.add((function () {
            var a = new $.ig.KNearestResult();
            a.b = u;
            a.a = v;
            a.e = s;
            a.c = t.a;
            a.d = t.b;
            return a
        }()));
        p.a++;
        var x = this.x(q, r, t.a, t.b);
        if (x < p.e) {
            p.e = x
        }
        if (x > p.f) {
            p.f = x;
            p.g = p.c.count() - 1
        }
        return
    }
    var y = 0;
    if (y < p.f) {
        if (y < p.e) {
            p.e = y
        }
        p.c.__inner[p.g] = (function () {
            var a = new $.ig.KNearestResult();
            a.b = u;
            a.a = v;
            a.e = s;
            a.c = t.a;
            a.d = t.b;
            return a
        }());
        var z = 0;
        var A = 0;
        for (var B = 0; B < p.c.count(); B++) {
            var C = this.x(q, r, p.c.__inner[B].c, p.c.__inner[B].d);
            if (C > z) {
                z = C;
                A = B
            }
        }
        p.a++
    }
}, x: function (e, f, g, h) {
    return(e - g) * (e - g) + (f - h) * (f - h)
}, y: function (g, h, i, j, k, l) {
    this.z(g, this.j(), h, i, j, k, l, false, 0)
}, z: function (s, t, u, v, w, x, y, z, A) {
    if (t == null) {
        return
    }
    if (A > u.g || ((y - x) < u.f && (w - v) < u.e)) {
        if (t.h == null) {
            t.h = new $.ig.SearchData()
        }
        var B = t.h;
        B.a = true;
        B.b = v;
        B.c = w;
        B.d = x;
        B.e = y;
        s.add(t);
        return
    }
    if (t.e == null && t.f == null) {
        s.add(t);
        return
    }
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    if (t.b) {
        C = v;
        D = t.d.a;
        E = x;
        F = y;
        G = t.d.a;
        H = w;
        I = x;
        J = y
    } else {
        C = v;
        D = w;
        E = x;
        F = t.d.b;
        G = v;
        H = w;
        I = t.d.b;
        J = y
    }
    if (z) {
        s.add(t);
        this.z(s, t.e, u, C, D, E, F, true, A + 1);
        this.z(s, t.f, u, G, H, I, J, true, A + 1)
    } else {
        if (C >= u.a && D <= u.c && E >= u.b && F <= u.d) {
            this.z(s, t.e, u, C, D, E, F, true, A + 1)
        } else {
            if (!(u.a > D || u.c < C || u.b > F || u.d < E)) {
                s.add(t);
                this.z(s, t.e, u, C, D, E, F, false, A + 1)
            }
        }
        if (G >= u.a && H <= u.c && I >= u.b && J <= u.d) {
            this.z(s, t.f, u, G, H, I, J, true, A + 1)
        } else {
            if (!(u.a > H || u.c < G || u.b > J || u.d < I)) {
                s.add(t);
                this.z(s, t.f, u, G, H, I, J, false, A + 1)
            }
        }
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, $type: new $.ig.Type("KDTree2D", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KNearestResults", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, $type: new $.ig.Type("KNearestResults", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KNearestResult", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, $type: new $.ig.Type("KNearestResult", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KDTreeThunk", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, $type: new $.ig.Type("KDTreeThunk", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SearchArgs", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, $type: new $.ig.Type("SearchArgs", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KDTreeNode2D", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null, $type: new $.ig.Type("KDTreeNode2D", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SearchData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, $type: new $.ig.Type("SearchData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PointData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, $type: new $.ig.Type("PointData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ScatterLineSeries", "ScatterBase", {init: function () {
    var a = this;
    $.ig.ScatterBase.prototype.init.call(this);
    this.a3($.ig.ScatterLineSeries.prototype.$type);
    this.i3 = new $.ig.ScatterFrame();
    this.i4 = new $.ig.ScatterFrame();
    this.i5 = new $.ig.ScatterFrame();
    var b = function (g, h, i) {
        var j = a.dx().item(g.e());
        if (j == -1 || j == 0) {
            return g
        }
        var k = a.dx().item(j - 1);
        var l;
        if (!(function () {
            var c = h.u().tryGetValue(k, l);
            l = c.value;
            return c.ret
        }())) {
            return g
        }
        return l
    };
    this.i3.s(b);
    this.i4.s(b);
    this.i5.s(b)
}, ed: function () {
    return new $.ig.ScatterLineSeriesView(this)
}, j6: function (k, u) {
    var i = this;
    $.ig.ScatterBase.prototype.j6.call(this, k, u);
    k.v().clear();
    k.a5().clear();
    var v = u.ac();
    var w = u.ab();
    var x = this.resolution() * this.resolution();
    var y = 0;
    if (this.jp() != null) {
        y = this.jp().count()
    }
    if (this.jq() != null) {
        y = Math.min(this.jq().count(), y)
    }
    var z = new $.ig.ScalerParams(v, w, this.jo().h());
    var A = new $.ig.ScalerParams(v, w, this.jo().i());
    var B = function (a) {
        return i.jo().f().getScaledValue(i.jp().item(a), z)
    };
    var C = function (a) {
        return i.jo().g().getScaledValue(i.jq().item(a), A)
    };
    var D = w.top() - 10;
    var E = w.bottom() + 10;
    var F = w.left() - 10;
    var G = w.right() + 10;
    var H = (function () {
        var a = new $.ig.Clipper(1, F, E, G, D, false);
        a.h(k.v());
        return a
    }());
    for (var I = 0; I < y;) {
        var J = I;
        ++I;
        if (y > this.maximumMarkers()) {
            while (I < y && this.ky(B, C, J, I) < x) {
                ++I
            }
            H.l(this.kx(B, C, J, I - 1))
        } else {
            var K = new $.ig.OwnedPoint();
            K.d({__x: B(J), __y: C(J), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            K.e(this.dx().item(J));
            if (!k.a5().containsKey(K.e())) {
                k.a5().add(K.e(), K)
            }
        }
    }
    if (y > this.maximumMarkers()) {
        H.h(null)
    }
}, kx: function (i, j, k, l) {
    if (k == l) {
        return{__x: i(k), __y: j(k), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
    var m = 0;
    var n = 0;
    var o = (l - k + 1);
    for (var p = k; p <= l; ++p) {
        m += i(p);
        n += j(p)
    }
    return{__x: m / o, __y: n / o, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, ky: function (g, h, i, j) {
    var k = g(j) - g(i);
    var l = h(j) - h(i);
    return k * k + l * l
}, j7: function (f, g) {
    var e = this;
    g.ee(false);
    $.ig.ScatterBase.prototype.j7.call(this, f, g);
    var h = new $.ig.Rect(0, g.ab().left(), g.ab().top(), g.ab().width(), g.ab().height());
    h.inflate(this.thickness(), this.thickness());
    this.j4(f, new $.ig.Clipper(0, h, false));
    var i = $.ig.util.cast($.ig.ScatterLineSeriesView.prototype.$type, g);
    this.kz(i.ei, f.v().count(), function (a) {
        return f.v().__inner[a].__x
    }, function (a) {
        return f.v().__inner[a].__y
    }, this.unknownValuePlotting(), this.resolution())
}, kz: function (r, s, t, u, v, w) {
    var q = this;
    var x = new $.ig.PathGeometry();
    r.bp(x);
    x.d(new $.ig.PathFigureCollection());
    var y = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var z = 0;
    for (var A = 0; A < s; A++) {
        if (isNaN(t(A)) || isNaN(u(A))) {
            var B = A - z;
            if (B > 0) {
                if (v == $.ig.UnknownValuePlotting.prototype.dontPlot || y.count() == 0) {
                    var C = new $.ig.PolyLineSegment();
                    y.add(C)
                }
                this.k1(y.__inner[y.count() - 1].__points, z, A - 1, t, u, w)
            }
            z = A + 1
        }
    }
    if (v == $.ig.UnknownValuePlotting.prototype.dontPlot || y.count() == 0) {
        var D = new $.ig.PolyLineSegment();
        y.add(D)
    }
    this.k1(y.__inner[y.count() - 1].__points, z, s - 1, t, u, w);
    for (var E = 0; E < y.count(); E++) {
        var F = y.__inner[E];
        if (F.__points.count() > 0) {
            var G = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = F.__points.__inner[0];
                return a
            }());
            G.__segments.add(F);
            x.d().add(G)
        }
    }
}, k0: function (l, m, n, o, p, q) {
    var r = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var s = o;
    var t = p;
    var u = t - s + 1;
    while (u > 0) {
        if (u <= $.ig.ScatterLineSeries.prototype.ku) {
            $.ig.Flattener.prototype.d(r, m, n, s, t, q);
            s = t + 1
        } else {
            var v = s + $.ig.ScatterLineSeries.prototype.ku - 1;
            $.ig.Flattener.prototype.d(r, m, n, s, v, q);
            s = v + 1
        }
        u = t - s + 1
    }
    return r
}, k1: function (k, l, m, n, o, p) {
    if (m > -1) {
        var q = this.resolution();
        var r = this.k0(new $.ig.List$1($.ig.Number.prototype.$type, 0), n, o, l, m, q);
        var s;
        for (var t = 0; t < r.count(); t++) {
            s = r.item(t);
            k.add({__x: n(s), __y: o(s), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, unknownValuePlotting: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterLineSeries.prototype.unknownValuePlottingProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterLineSeries.prototype.unknownValuePlottingProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.ScatterBase.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.ScatterLineSeries.prototype.kv:
            this.renderSeries(false);
            this.e5();
            break
    }
}, $type: new $.ig.Type("ScatterLineSeries", $.ig.ScatterBase.prototype.$type)}, true);
$.ig.util.defType("ScatterLineSeriesView", "ScatterBaseView", {init: function (b) {
    this.ei = new $.ig.Path();
    $.ig.ScatterBaseView.prototype.init.call(this, b)
}, ei: null, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.ei.__stroke = this.u().actualBrush();
    this.ei.a7(this.u().thickness())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.ei.__stroke = b;
    this.ei.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (c, d) {
    $.ig.SeriesView.prototype.a0.call(this, c, d);
    if (c.b()) {
        c.g(this.ei)
    }
}, ee: function (b) {
    $.ig.ScatterBaseView.prototype.ee.call(this, b);
    this.ei.bp(null)
}, $type: new $.ig.Type("ScatterLineSeriesView", $.ig.ScatterBaseView.prototype.$type)}, true);
$.ig.util.defType("NumericMarkerManager", "MarkerManagerBase", {init: function (k, f, g, h, i, j) {
    if (k > 0) {
        switch (k) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.NumericMarkerManager.prototype.init1.call(this, 1, f, g, h, i, j, function () {
        return $.ig.CollisionAvoidanceType.prototype.none
    })
}, init1: function (n, h, i, j, k, l, m) {
    var g = this;
    $.ig.MarkerManagerBase.prototype.init.call(this, h, i, j, k, l);
    this.ak(false);
    this.al(function (a) {
        return{__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    });
    this.am(m)
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
}, y: function (l, m, n, o, p) {
    var q = this.g()();
    l.clear();
    var r = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    m = Math.max(0, m);
    var s = null;
    this.ac(n, o, q, r);
    if (m >= r.count()) {
        s = r
    } else {
        s = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var t = Math.max(8, p);
        var u = this.ad(o, r, t, q);
        var v = new $.ig.List$1($.ig.Number.prototype.$type, 1, u.keys());
        if (this.l()) {
            v.r()
        }
        this.ab(m, u, v, s)
    }
    this.aw(l, q, s)
}, aw: function (j, k, l) {
    for (var m = 0; m < l.count(); ++m) {
        var n = l.__inner[m];
        var o = k[n];
        var p = this.j()(n);
        var q = this.h()(p);
        if (q.a9() != null) {
            ($.ig.util.cast($.ig.DataContext.prototype.$type, q.a9())).item(p)
        }
        var r = new $.ig.OwnedPoint();
        if (this.ak()) {
            r.f(this.al()(n))
        }
        r.e(p);
        r.d({__x: o.__x, __y: o.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        if (!j.containsKey(p)) {
            j.add(p, r)
        }
    }
}, z: function (f, g) {
    var e = this;
    var h = f.keys();
    if (this.l()) {
        var i = new $.ig.List$1($.ig.Object.prototype.$type, 1, f.keys());
        i.t(function (a, b) {
            var c = f.item(a);
            var d = f.item(b);
            var k = Math.pow(c.d().__x, 2) + Math.pow(c.d().__y, 2);
            var l = Math.pow(d.d().__x, 2) + Math.pow(d.d().__y, 2);
            return k.compareTo(l)
        });
        h = i
    }
    var j = null;
    var q = null;
    switch (this.am()()) {
        case $.ig.CollisionAvoidanceType.prototype.none:
            break;
        case $.ig.CollisionAvoidanceType.prototype.omit:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.3);
                a.g(0);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            q.i(true);
            break;
        case $.ig.CollisionAvoidanceType.prototype.fade:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.6);
                a.g(2);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            q.i(true);
            break;
        case $.ig.CollisionAvoidanceType.prototype.omitAndShift:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.3);
                a.g(0);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            break;
        case $.ig.CollisionAvoidanceType.prototype.fadeAndShift:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.6);
                a.g(2);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            break
    }
    var s = h.getEnumerator();
    while (s.moveNext()) {
        var r = s.current();
        var t = f.item(r);
        var u = this.h()(t.e());
        if (j != null && q != null) {
            q.j(u);
            q.m(this.an()(u));
            q.l(t.d());
            j.n(q);
            if (q.opacity() == 0) {
                q.smartPosition(q.smartPosition())
            }
            t.d(q.k())
        } else {
            u.__opacity = 1;
            u.__visibility = $.ig.Visibility.prototype.visible
        }
        this.ax(u, t, g)
    }
    this.i()(f)
}, ax: function (d, e, f) {
    d.y(e.d().__x);
    d.x(e.d().__y)
}, $type: new $.ig.Type("NumericMarkerManager", $.ig.MarkerManagerBase.prototype.$type)}, true);
$.ig.util.defType("MarkerManagerBucket", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, c: function () {
    if (this.a == null) {
        this.a = new $.ig.List$1($.ig.Number.prototype.$type, 0)
    }
    return this.a
}, b: null, d: function () {
    if (this.b == null) {
        this.b = new $.ig.List$1($.ig.Number.prototype.$type, 0)
    }
    return this.b
}, h: function (d) {
    if (this.d().count() > 0) {
        var e = this.d().__inner[this.d().count() - 1];
        this.d().removeAt(this.d().count() - 1);
        d = true;
        return{ret: e, wasPriority: d}
    }
    var f = this.c().__inner[this.c().count() - 1];
    this.c().removeAt(this.c().count() - 1);
    d = false;
    return{ret: f, wasPriority: d};
    return{wasPriority: d}
}, e: function () {
    return this.c().count() == 0 && this.d().count() == 0
}, $type: new $.ig.Type("MarkerManagerBucket", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("ScatterTrendLineManager", "TrendLineManagerBase$1", {init: function () {
    $.ig.TrendLineManagerBase$1.prototype.init.call(this, $.ig.Point.prototype.$type)
}, af: function (q, v, w, x, y, z, A, B, C, D, E) {
    var p = this;
    var F = D;
    var G = E;
    var H = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    var I = 0;
    if (w != null) {
        I = w.count()
    }
    if (x != null) {
        I = Math.min(I, x.count())
    }
    if (!B.l().isEmpty() && !B.k().isEmpty()) {
        if (v == $.ig.TrendLineType.prototype.none) {
            this.m(null);
            this.l().clear()
        } else {
            if (this.u(v)) {
                this.l().clear();
                this.m($.ig.TrendFitCalculator.prototype.a(H, v, B, this.m(), I, function (a) {
                    return w.item(a)
                }, function (a) {
                    return x.item(a)
                }, z, A, F, G))
            } else {
                if (this.v(v)) {
                    this.m(null);
                    this.l().clear();
                    $.ig.TrendAverageCalculator.prototype.c(v, this.l(), w, x, y);
                    var K = this.l().getEnumerator();
                    while (K.moveNext()) {
                        var J = K.current();
                        var L = z(J.__x);
                        var M = A(J.__y);
                        if (!isNaN(L) && !isNaN(M)) {
                            H.add({__x: L, __y: M, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
                        }
                    }
                }
            }
        }
        this.y(H, B, q, C)
    }
}, $type: new $.ig.Type("ScatterTrendLineManager", $.ig.TrendLineManagerBase$1.prototype.$type.specialize($.ig.Point.prototype.$type))}, true);
$.ig.util.defType("ErrorBarSettingsBase", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this);
    this.j(new $.ig.Style())
}, j: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ErrorBarSettingsBase.prototype.f, b);
        return b
    } else {
        return this.b($.ig.ErrorBarSettingsBase.prototype.f)
    }
}, propertyChanged: null, propertyUpdated: null, o: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, $type: new $.ig.Type("ErrorBarSettingsBase", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("ErrorBarsHelper", "Object", {init: function (c, d) {
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
}, i: function (c) {
    var d = c.getCalculatorType();
    if (d == $.ig.ErrorBarCalculatorType.prototype.percentage || d == $.ig.ErrorBarCalculatorType.prototype.data) {
        return false
    } else {
        return true
    }
}, j: function (c, d) {
    if (c.hasConstantPosition()) {
        d = c.getPosition()
    }
    return{position: d}
}, k: function (j, k, l) {
    var i = this;
    var m;
    var n;
    (function () {
        var a = i.d().getViewInfo(n, m);
        n = a.viewportRect;
        m = a.windowRect;
        return a.ret
    }());
    var o = new $.ig.ScalerParams(m, n, k.isInverted());
    var p = k.getScaledValue(k.referenceValue(), o);
    var q = j.getIndependentValue();
    l = Math.abs(Math.round(p - k.getScaledValue(q, o)));
    return{errorBarSize: l}
}, l: function (l, m, n, o) {
    var k = this;
    var p;
    var q;
    (function () {
        var a = k.d().getViewInfo(q, p);
        q = a.viewportRect;
        p = a.windowRect;
        return a.ret
    }());
    var r = new $.ig.ScalerParams(p, q, n.isInverted());
    var s = n.getUnscaledValue(l, r);
    var t = m.getDependentValue(s);
    var u = n.getScaledValue(n.referenceValue(), r);
    o = Math.abs(Math.round(u - n.getScaledValue(t, r)));
    return{errorBarSize: o}
}, m: function (n, o, p, q, r) {
    var m = this;
    var s;
    var t;
    (function () {
        var a = m.d().getViewInfo(t, s);
        t = a.viewportRect;
        s = a.windowRect;
        return a.ret
    }());
    var u = new $.ig.ScalerParams(s, t, p.isInverted());
    var v = new $.ig.ScalerParams(s, t, q.isInverted());
    var w = p.getUnscaledValue(n, u);
    var x = o.getDependentValue(w);
    var y = q.getScaledValue(q.referenceValue(), v);
    r = Math.abs(Math.round(y - q.getScaledValue(x, v)));
    return{errorBarSize: r}
}, n: function (i, j, k) {
    var h = this;
    var l;
    var m;
    (function () {
        var a = h.d().getViewInfo(m, l);
        m = a.viewportRect;
        l = a.windowRect;
        return a.ret
    }());
    var n = new $.ig.ScalerParams(l, m, j.isInverted());
    var o = j.getScaledValue(j.referenceValue(), n);
    k = Math.abs(Math.round(o - j.getScaledValue(i, n)));
    return{errorBarSize: k}
}, o: function (e, f, g, h) {
}, p: function (e, f, g, h) {
}, q: function (j, k, l, m) {
    var i = this;
    var n = new $.ig.Point(0);
    if (j.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.standardDeviation) {
        var o;
        var p;
        (function () {
            var a = i.d().getViewInfo(p, o);
            p = a.viewportRect;
            o = a.windowRect;
            return a.ret
        }());
        var q = new $.ig.ScalerParams(o, p, k.isInverted());
        n.__x = Math.round(k.getScaledValue(m, q));
        n.__y = Math.round(l.__y)
    } else {
        n.__x = Math.round(l.__x);
        n.__y = Math.round(l.__y)
    }
    return n
}, r: function (j, k, l, m) {
    var i = this;
    var n = new $.ig.Point(0);
    if (j.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.standardDeviation) {
        var o;
        var p;
        (function () {
            var a = i.d().getViewInfo(p, o);
            p = a.viewportRect;
            o = a.windowRect;
            return a.ret
        }());
        var q = new $.ig.ScalerParams(o, p, k.isInverted());
        n.__x = Math.round(l.__x);
        n.__y = Math.round(k.getScaledValue(m, q))
    } else {
        n.__x = Math.round(l.__x);
        n.__y = Math.round(l.__y)
    }
    return n
}, $type: new $.ig.Type("ErrorBarsHelper", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ScatterErrorBarSettings", "ErrorBarSettingsBase", {init: function () {
    $.ig.ErrorBarSettingsBase.prototype.init.call(this);
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, this.cg.on(this))
}, a7: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ae, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ae)
    }
}, a8: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.af, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.af)
    }
}, a9: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ag, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ag)
    }
}, ba: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ah, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ah)
    }
}, bb: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ai, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ai)
    }
}, bc: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.aj, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.aj)
    }
}, bd: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ak, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ak)
    }
}, be: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.al, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.al)
    }
}, bf: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.am, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.am)
    }
}, bg: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.an, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.an)
    }
}, bh: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ao, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ao)
    }
}, bi: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ap, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ap)
    }
}, bj: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.aq, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.aq)
    }
}, bk: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ar, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ar)
    }
}, as: null, bl: function (b) {
    if (arguments.length === 1) {
        this.as = b;
        return b
    } else {
        return this.as
    }
}, cg: function (f, g) {
    var e = this;
    switch (g.propertyName()) {
        case $.ig.ScatterErrorBarSettings.prototype.s:
        case $.ig.ScatterErrorBarSettings.prototype.z:
            var h = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, g.oldValue());
            if (h != null) {
                h.changed = $.ig.Delegate.prototype.remove(h.changed, this.ch.on(this))
            }
            if (this.bl() != null) {
                this.bl().renderSeries(false);
                if (this.bl().seriesViewer() != null) {
                    this.bl().e5()
                }
            }
            var i = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, g.newValue());
            if (i != null) {
                i.changed = $.ig.Delegate.prototype.combine(i.changed, this.ch.on(this))
            }
            break;
        case $.ig.ScatterErrorBarSettings.prototype.q:
        case $.ig.ScatterErrorBarSettings.prototype.x:
        case $.ig.ScatterErrorBarSettings.prototype.r:
        case $.ig.ScatterErrorBarSettings.prototype.t:
        case $.ig.ScatterErrorBarSettings.prototype.w:
        case $.ig.ScatterErrorBarSettings.prototype.u:
        case $.ig.ScatterErrorBarSettings.prototype.v:
        case $.ig.ScatterErrorBarSettings.prototype.y:
        case $.ig.ScatterErrorBarSettings.prototype.aa:
        case $.ig.ScatterErrorBarSettings.prototype.ad:
        case $.ig.ScatterErrorBarSettings.prototype.ab:
        case $.ig.ScatterErrorBarSettings.prototype.ac:
            if (this.bl() != null) {
                this.bl().renderSeries(false);
                if (this.bl().seriesViewer() != null) {
                    this.bl().e5()
                }
            }
            break
    }
}, ch: function (d, e) {
    var f = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, d);
    if (f != null) {
        f.changed = $.ig.Delegate.prototype.remove(f.changed, this.ch.on(this));
        if (this.bl() != null) {
            this.bl().renderSeries(false)
        }
        f.changed = $.ig.Delegate.prototype.combine(f.changed, this.ch.on(this))
    }
}, $type: new $.ig.Type("ScatterErrorBarSettings", $.ig.ErrorBarSettingsBase.prototype.$type)}, true);
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
$.ig.util.defType("ScatterFrameBase$1", "Frame", {$t: null, init: function (b) {
    var a = this;
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Frame.prototype.init.call(this);
    this.v(new $.ig.List$1($.ig.Point.prototype.$type, 0));
    this.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.t(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.w(new $.ig.List$1($.ig.Point.prototype.$type, 0));
    this.x(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.y(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.z(new $.ig.Dictionary$2($.ig.Object.prototype.$type, Number, 0));
    this.aa(new $.ig.Dictionary$2($.ig.Object.prototype.$type, Number, 0));
    this.s(function (d, e, f) {
        return d
    });
    this.r(new $.ig.DictInterpolator$3($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, this.$t, this.ai.on(this), function (c) {
        return c.e()
    }, function (c) {
        return !isNaN(c.d().__x) && !isNaN(c.d().__y)
    }, function () {
        return new $.ig.OwnedPoint()
    }))
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, a: function (f, g, h) {
    var i = g;
    var j = h;
    if (i == null || j == null) {
        return
    }
    this.r().q(this.u(), f, i.u(), j.u(), i, j);
    $.ig.ScatterFrameBase$1.prototype.b(this.v(), f, i.v(), j.v());
    this.r().q(this.t(), f, i.t(), j.t(), i, j);
    this.r().q(this.x(), f, i.x(), j.x(), i, j);
    this.r().q(this.y(), f, i.y(), j.y(), i, j);
    this.ae(this.t(), f, i, j);
    $.ig.ScatterFrameBase$1.prototype.b(this.w(), f, i.w(), j.w());
    this.z(j.z());
    this.aa(j.aa());
    this.ad(f, i, j)
}, ad: function (d, e, f) {
}, ae: function (j, k, l, m) {
    var e = this;
    var o = l.u().values().where$1($.ig.OwnedPoint.prototype.$type,function (a) {
        return !j.containsKey(a.e())
    }).getEnumerator();
    while (o.moveNext()) {
        var n = o.current();
        var p;
        if (!(function () {
            var a = m.u().tryGetValue(n.e(), p);
            p = a.value;
            return a.ret
        }()) || (p.f().__x == n.f().__x && p.f().__y == n.f().__y)) {
            continue
        }
        var q = new $.ig.OwnedPoint();
        this.ai(q, k, n, p, l, m);
        if (isNaN(q.d().__x) || isNaN(q.d().__y)) {
            continue
        }
        j.add(q.e(), q)
    }
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, ah: function (e, f, g, h) {
    if (g != null) {
        e.f({__x: g.f().__x, __y: g.f().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    } else {
        if (h != null) {
            e.f({__x: h.f().__x, __y: h.f().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, ai: function (l, m, n, o, p, q) {
    var k = this;
    var r;
    var s;
    if (n == null) {
        if (o != null) {
            var t;
            if ((function () {
                var a = p.u().tryGetValue(o.e(), t);
                t = a.value;
                return a.ret
            }())) {
                r = t
            } else {
                r = this.s()(o, p, q)
            }
        } else {
            l.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return
        }
    } else {
        r = n;
        if (l.e() == null) {
            l.e(n.e())
        }
    }
    if (o == null) {
        if (n != null) {
            var u;
            if ((function () {
                var a = q.u().tryGetValue(n.e(), u);
                u = a.value;
                return a.ret
            }())) {
                s = u
            } else {
                l.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                return
            }
        } else {
            l.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return
        }
    } else {
        s = o;
        if (l.e() == null) {
            l.e(o.e())
        }
    }
    this.ah(l, m, r, s);
    if (isNaN(r.d().__x) || isNaN(r.d().__y)) {
        r = s
    }
    this.aj(l, m, r, s)
}, aj: function (f, g, h, i) {
    var j = 1 - g;
    f.d({__x: h.d().__x * j + i.d().__x * g, __y: h.d().__y * j + i.d().__y * g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
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
}, $type: new $.ig.Type("ScatterFrameBase$1", $.ig.Frame.prototype.$type)}, true);
$.ig.util.defType("ScatterAxisInfoCache", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
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
}, $type: new $.ig.Type("ScatterAxisInfoCache", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DictInterpolator$3", "Object", {$tKey: null, $tValue: null, $tFrame: null, init: function (f, g, e, h, i, j, k) {
    this.$tKey = f;
    this.$tValue = g;
    this.$tFrame = e;
    this.$type = this.$type.specialize(this.$tKey, this.$tValue, this.$tFrame);
    $.ig.Object.prototype.init.call(this);
    this.e(h);
    this.f(i);
    this.g(j);
    this.h(k)
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
}, q: function (B, F, G, H, I, J) {
    var A = this;
    var K = new $.ig.List$1(this.$tKey, 0);
    var M = B.keys().getEnumerator();
    while (M.moveNext()) {
        var L = M.current();
        var N;
        var O;
        var P = B.item(L);
        var Q = (function () {
            var a = G.tryGetValue(L, N);
            N = a.value;
            return a.ret
        }());
        var R = (function () {
            var a = H.tryGetValue(L, O);
            O = a.value;
            return a.ret
        }());
        if (!Q && !R) {
            K.add(L)
        } else {
            this.e()(P, F, N, O, I, J);
            if (!this.g()(P)) {
                K.add(L)
            }
        }
    }
    var T = K.getEnumerator();
    while (T.moveNext()) {
        var S = T.current();
        B.remove(S)
    }
    var V = G.keys().getEnumerator();
    while (V.moveNext()) {
        var U = V.current();
        var W = G.item(U);
        var X;
        var Y;
        (function () {
            var a = H.tryGetValue(U, X);
            X = a.value;
            return a.ret
        }());
        var Z = (function () {
            var a = B.tryGetValue(U, Y);
            Y = a.value;
            return a.ret
        }());
        if (!Z) {
            Y = this.h()();
            this.e()(Y, F, W, X, I, J);
            if (!this.g()(Y)) {
                continue
            }
            B.add(this.f()(Y), Y)
        }
    }
    var ab = H.keys().getEnumerator();
    while (ab.moveNext()) {
        var aa = ab.current();
        var ac = H.item(aa);
        var ad;
        var C;
        var D = (function () {
            var a = G.tryGetValue(aa, ad);
            ad = a.value;
            return a.ret
        }());
        var E = (function () {
            var a = B.tryGetValue(aa, C);
            C = a.value;
            return a.ret
        }());
        if (!E && !D) {
            C = this.h()();
            this.e()(C, F, ad, ac, I, J);
            if (!this.g()(C)) {
                continue
            }
            B.add(this.f()(C), C)
        }
    }
}, $type: new $.ig.Type("DictInterpolator$3", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("OwnedPoint", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.f({__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
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
}, $type: new $.ig.Type("OwnedPoint", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ScatterFrame", "ScatterFrameBase$1", {init: function () {
    $.ig.ScatterFrameBase$1.prototype.init.call(this, $.ig.ScatterFrame.prototype.$type);
    this.a5(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0))
}, _a5: null, a5: function (b) {
    if (arguments.length === 1) {
        this._a5 = b;
        return b
    } else {
        return this._a5
    }
}, ad: function (f, g, h) {
    $.ig.ScatterFrameBase$1.prototype.ad.call(this, f, g, h);
    var i = $.ig.util.cast($.ig.ScatterFrame.prototype.$type, g);
    var j = $.ig.util.cast($.ig.ScatterFrame.prototype.$type, h);
    if (i == null || j == null) {
        return
    }
    this.r().q(this.a5(), f, i.a5(), j.a5(), i, j)
}, $type: new $.ig.Type("ScatterFrame", $.ig.ScatterFrameBase$1.prototype.$type.specialize($.ig.ScatterFrame.prototype.$type))}, true);
$.ig.util.defType("ScatterSeries", "ScatterBase", {ed: function () {
    return new $.ig.ScatterSeriesView(this)
}, ea: function (b) {
    $.ig.ScatterBase.prototype.ea.call(this, b);
    this.kv(b)
}, _kv: null, kv: function (b) {
    if (arguments.length === 1) {
        this._kv = b;
        return b
    } else {
        return this._kv
    }
}, init: function () {
    $.ig.ScatterBase.prototype.init.call(this);
    this.a3($.ig.ScatterSeries.prototype.$type);
    this.i3 = new $.ig.ScatterFrame();
    this.i4 = new $.ig.ScatterFrame();
    this.i5 = new $.ig.ScatterFrame()
}, $type: new $.ig.Type("ScatterSeries", $.ig.ScatterBase.prototype.$type)}, true);
$.ig.util.defType("ScatterSeriesView", "ScatterBaseView", {_ej: null, ej: function (b) {
    if (arguments.length === 1) {
        this._ej = b;
        return b
    } else {
        return this._ej
    }
}, init: function (b) {
    $.ig.ScatterBaseView.prototype.init.call(this, b);
    this.ej(b)
}, ag: function () {
    var a = this;
    $.ig.ScatterBaseView.prototype.ag.call(this);
    if (!this.ad()) {
        this.cg().markerType($.ig.MarkerType.prototype.automatic);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.o);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, $type: new $.ig.Type("ScatterSeriesView", $.ig.ScatterBaseView.prototype.$type)}, true);
$.ig.EnableErrorBars.prototype.none = 0;
$.ig.EnableErrorBars.prototype.both = 1;
$.ig.EnableErrorBars.prototype.positive = 2;
$.ig.EnableErrorBars.prototype.negative = 3;
$.ig.CollisionAvoidanceType.prototype.none = 0;
$.ig.CollisionAvoidanceType.prototype.omit = 1;
$.ig.CollisionAvoidanceType.prototype.fade = 2;
$.ig.CollisionAvoidanceType.prototype.omitAndShift = 3;
$.ig.CollisionAvoidanceType.prototype.fadeAndShift = 4;
$.ig.BrushSelectionMode.prototype.select = 0;
$.ig.BrushSelectionMode.prototype.interpolate = 1;
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.ScatterBase.prototype.iq = "XAxis";
$.ig.ScatterBase.prototype.ir = "YAxis";
$.ig.ScatterBase.prototype.is = "XMemberPath";
$.ig.ScatterBase.prototype.it = "XColumn";
$.ig.ScatterBase.prototype.iu = "YMemberPath";
$.ig.ScatterBase.prototype.iv = "YColumn";
$.ig.ScatterBase.prototype.iw = "MarkerCollisionAvoidance";
$.ig.ScatterBase.prototype.ix = "MaximumMarkers";
$.ig.ScatterBase.prototype.iy = "ErrorBarSettings";
$.ig.ScatterBase.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iq, $.ig.NumericXAxis.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.iq, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ir, $.ig.NumericYAxis.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.ir, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.is, String, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.is, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iu, String, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.iu, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b4, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b6, $.ig.Brush.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b6, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b7, $.ig.Brush.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b7, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b8, Number, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b8, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b9, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b3, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b5, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b5, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iw, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.iw, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ca, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (a, b) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.ca, b.f(), b.e())
}));
$.ig.ScatterBase.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ix, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (a, b) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.ix, b.f(), b.e())
}));
$.ig.ScatterBase.prototype.errorBarSettingsProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iy, $.ig.ScatterErrorBarSettings.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.iy, b.f(), b.e())
}));
$.ig.BubbleSeries.prototype.ku = "RadiusMemberPath";
$.ig.BubbleSeries.prototype.kv = "RadiusColumn";
$.ig.BubbleSeries.prototype.kw = "RadiusScale";
$.ig.BubbleSeries.prototype.kx = "LabelMemberPath";
$.ig.BubbleSeries.prototype.ky = "LabelColumn";
$.ig.BubbleSeries.prototype.kz = "FillMemberPath";
$.ig.BubbleSeries.prototype.k0 = "FillScale";
$.ig.BubbleSeries.prototype.k1 = "FillColumn";
$.ig.BubbleSeries.prototype.radiusMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.ku, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.ku, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.radiusScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kw, $.ig.SizeScale.prototype.$type, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.kw, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.labelMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kx, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.kx, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.fillMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kz, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.kz, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.k0, $.ig.BrushScale.prototype.$type, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.k0, d.f(), d.e())
}));
$.ig.CustomPaletteBrushScale.prototype.q = "BrushSelectionMode";
$.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteBrushScale.prototype.q, $.ig.BrushSelectionMode.prototype.$type, $.ig.CustomPaletteBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.BrushSelectionMode.prototype.select, function (c, d) {
    ($.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, c)).n($.ig.CustomPaletteBrushScale.prototype.q, d.f(), d.e())
}));
$.ig.SizeScale.prototype.e = "MinimumValue";
$.ig.SizeScale.prototype.f = "MaximumValue";
$.ig.SizeScale.prototype.g = "IsLogarithmic";
$.ig.SizeScale.prototype.h = "LogarithmBase";
$.ig.SizeScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.e, Number, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.e, d.f(), d.e())
}));
$.ig.SizeScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.f, Number, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.f, d.f(), d.e())
}));
$.ig.SizeScale.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.g, $.ig.Boolean.prototype.$type, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.g, d.f(), d.e())
}));
$.ig.SizeScale.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.h, $.ig.Number.prototype.$type, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.h, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.q = "MinimumValue";
$.ig.ValueBrushScale.prototype.r = "MaximumValue";
$.ig.ValueBrushScale.prototype.s = "IsLogarithmic";
$.ig.ValueBrushScale.prototype.t = "LogarithmBase";
$.ig.ValueBrushScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.q, Number, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.q, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.r, Number, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.r, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.s, $.ig.Boolean.prototype.$type, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.s, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.t, $.ig.Number.prototype.$type, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.t, d.f(), d.e())
}));
$.ig.ScaleLegend.prototype.cc = "ParentVisibility";
$.ig.ScaleLegend.prototype.cd = "SeriesMarkerBrush";
$.ig.ScaleLegend.prototype.ce = $.ig.DependencyProperty.prototype.l($.ig.ScaleLegend.prototype.cc, $.ig.Visibility.prototype.$type, $.ig.ScaleLegend.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    if (d.e() != $.ig.Visibility.prototype.visible) {
        ($.ig.util.cast($.ig.ScaleLegend.prototype.$type, c)).dk()
    } else {
        ($.ig.util.cast($.ig.ScaleLegend.prototype.$type, c)).dp()
    }
}));
$.ig.ScaleLegend.prototype.cf = $.ig.DependencyProperty.prototype.l($.ig.ScaleLegend.prototype.cd, $.ig.Brush.prototype.$type, $.ig.ScaleLegend.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.ScaleLegend.prototype.$type, c)).dp()
}));
$.ig.ScaleLegendView.prototype.ap = "LegendScale";
$.ig.ScaleLegendView.prototype.aq = 0;
$.ig.HighDensityScatterSeries.prototype.hp = "XAxis";
$.ig.HighDensityScatterSeries.prototype.hq = "YAxis";
$.ig.HighDensityScatterSeries.prototype.hr = "XMemberPath";
$.ig.HighDensityScatterSeries.prototype.hs = "XColumn";
$.ig.HighDensityScatterSeries.prototype.ht = "YMemberPath";
$.ig.HighDensityScatterSeries.prototype.hu = "YColumn";
$.ig.HighDensityScatterSeries.prototype.hv = "UseBruteForce";
$.ig.HighDensityScatterSeries.prototype.hw = "ProgressiveLoad";
$.ig.HighDensityScatterSeries.prototype.hx = "MouseOverEnabled";
$.ig.HighDensityScatterSeries.prototype.hy = "UseSquareCutoffStyle";
$.ig.HighDensityScatterSeries.prototype.hz = "HeatMinimum";
$.ig.HighDensityScatterSeries.prototype.h0 = "HeatMaximum";
$.ig.HighDensityScatterSeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hp, $.ig.NumericXAxis.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hp, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hq, $.ig.NumericYAxis.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hq, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hr, String, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hr, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.ht, String, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.ht, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.useBruteForceProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hv, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hv, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hw, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hw, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hx, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hx, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hy, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hy, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.heatMinimumProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hz, Number, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hz, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.heatMaximumProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.h0, Number, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.h0, d.f(), d.e())
}));
$.ig.ScatterLineSeries.prototype.ku = 512;
$.ig.ScatterLineSeries.prototype.kv = "UnknownValuePlotting";
$.ig.ScatterLineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterLineSeries.prototype.kv, $.ig.UnknownValuePlotting.prototype.$type, $.ig.ScatterLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (c, d) {
    ($.ig.util.cast($.ig.ScatterLineSeries.prototype.$type, c)).ej($.ig.ScatterLineSeries.prototype.kv, d.f(), d.e())
}));
$.ig.ErrorBarSettingsBase.prototype.e = "DefaultErrorBarStyle";
$.ig.ErrorBarSettingsBase.prototype.f = $.ig.DependencyProperty.prototype.l($.ig.ErrorBarSettingsBase.prototype.e, $.ig.Style.prototype.$type, $.ig.ErrorBarSettingsBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ErrorBarSettingsBase.prototype.$type, c)).o($.ig.ErrorBarSettingsBase.prototype.e, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.q = "EnableErrorBarsHorizontal";
$.ig.ScatterErrorBarSettings.prototype.r = "HorizontalCalculatorReference";
$.ig.ScatterErrorBarSettings.prototype.s = "HorizontalCalculator";
$.ig.ScatterErrorBarSettings.prototype.t = "HorizontalErrorBarCapLength";
$.ig.ScatterErrorBarSettings.prototype.u = "HorizontalStroke";
$.ig.ScatterErrorBarSettings.prototype.v = "HorizontalStrokeThickness";
$.ig.ScatterErrorBarSettings.prototype.w = "HorizontalErrorBarStyle";
$.ig.ScatterErrorBarSettings.prototype.x = "EnableErrorBarsVertical";
$.ig.ScatterErrorBarSettings.prototype.y = "VerticalCalculatorReference";
$.ig.ScatterErrorBarSettings.prototype.z = "VerticalCalculator";
$.ig.ScatterErrorBarSettings.prototype.aa = "VerticalErrorBarCapLength";
$.ig.ScatterErrorBarSettings.prototype.ab = "VerticalStroke";
$.ig.ScatterErrorBarSettings.prototype.ac = "VerticalStrokeThickness";
$.ig.ScatterErrorBarSettings.prototype.ad = "VerticalErrorBarStyle";
$.ig.ScatterErrorBarSettings.prototype.ae = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.q, $.ig.EnableErrorBars.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.EnableErrorBars.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.q, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.af = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.r, $.ig.ErrorBarCalculatorReference.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ErrorBarCalculatorReference.prototype.x, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.r, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ag = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.s, $.ig.IErrorBarCalculator.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.s, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ah = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.t, $.ig.Number.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 6, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.t, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ai = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.u, $.ig.Brush.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.u, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.aj = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.v, Number, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.v, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ak = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.w, $.ig.Style.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.w, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.al = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.x, $.ig.EnableErrorBars.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.EnableErrorBars.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.x, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.am = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.y, $.ig.ErrorBarCalculatorReference.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ErrorBarCalculatorReference.prototype.y, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.y, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.an = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.z, $.ig.IErrorBarCalculator.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.z, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ao = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.aa, $.ig.Number.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 6, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.aa, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ap = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ab, $.ig.Brush.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.ab, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.aq = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ac, Number, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.ac, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ar = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ad, $.ig.Style.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.ad, d.f(), d.e())
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