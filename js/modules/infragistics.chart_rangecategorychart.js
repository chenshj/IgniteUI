﻿/*
 * Infragistics.Web.ClientUI infragistics.chart_rangecategorychart.js 12.2.20122.1021
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
$.ig.util.defType("RangeCategoryBucketCalculator", "CategoryBucketCalculator", {_u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, init: function (b) {
    this.r = null;
    this.s = null;
    $.ig.CategoryBucketCalculator.prototype.init.call(this, b);
    this.u(b)
}, getBucket: function (s) {
    var t = this.r;
    var u = this.s;
    var v = this.r.length;
    var w = this.s.length;
    var x = Math.min(v, w);
    var y = s * this.h();
    var z = Math.min(y + this.h() - 1, x - 1);
    var A = NaN;
    var B = NaN;
    var C = true;
    var D;
    var E;
    var F;
    var G;
    for (var H = y; H <= z; ++H) {
        D = t[H];
        E = u[H];
        if (D < E) {
            F = D;
            G = E
        } else {
            G = D;
            F = E
        }
        if (!C) {
            if (!isNaN(F)) {
                A = A < F ? A : F;
                B = B > F ? B : F
            }
            if (!isNaN(G)) {
                A = A < G ? A : G;
                B = B > G ? B : G
            }
        } else {
            if (!isNaN(F)) {
                if (isNaN(A)) {
                    A = F
                } else {
                    A = Math.min(A, F)
                }
                if (!isNaN(B)) {
                    B = Math.max(B, F)
                }
            }
            if (!isNaN(G)) {
                if (isNaN(B)) {
                    B = G
                } else {
                    B = Math.max(B, G)
                }
                if (!isNaN(A)) {
                    A = Math.min(A, G)
                }
            }
            if (!isNaN(A) && !isNaN(B)) {
                C = false
            }
        }
    }
    if (!C) {
        var I = new Array(3);
        I[0] = (0.5 * (y + z));
        I[1] = A;
        I[2] = B;
        return I
    }
    var J = new Array(3);
    J[0] = NaN;
    J[1] = NaN;
    J[2] = NaN;
    return J
}, r: null, s: null, cacheValues: function () {
    this.r = this.u().dk().lowColumn().asArray();
    this.s = this.u().dk().highColumn().asArray()
}, unCacheValues: function () {
    this.r = null;
    this.s = null
}, $type: new $.ig.Type("RangeCategoryBucketCalculator", $.ig.CategoryBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("IHasHighLowValueCategory", "Object", {$type: new $.ig.Type("IHasHighLowValueCategory", null)}, true);
$.ig.util.defType("RangeCategorySeries", "CategorySeries", {ed: function () {
    return new $.ig.RangeCategorySeriesView(this)
}, ea: function (b) {
    $.ig.CategorySeries.prototype.ea.call(this, b);
    this.jo(b)
}, _jo: null, jo: function (b) {
    if (arguments.length === 1) {
        this._jo = b;
        return b
    } else {
        return this._jo
    }
}, init: function () {
    $.ig.CategorySeries.prototype.init.call(this);
    this.ix(new $.ig.RangeCategoryFramePreparer(1, this, this.jo(), this, this, this.jo().c9()))
}, _ix: null, ix: function (b) {
    if (arguments.length === 1) {
        this._ix = b;
        return b
    } else {
        return this._ix
    }
}, lowMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RangeCategorySeries.prototype.lowMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.RangeCategorySeries.prototype.lowMemberPathProperty)
    }
}, lowColumn: function (c) {
    if (arguments.length === 1) {
        if (this.ji != c) {
            var d = this.ji;
            this.ji = c;
            this.ej($.ig.RangeCategorySeries.prototype.jf, d, this.ji)
        }
        return c
    } else {
        return this.ji
    }
}, ji: null, highMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RangeCategorySeries.prototype.highMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.RangeCategorySeries.prototype.highMemberPathProperty)
    }
}, highColumn: function (c) {
    if (arguments.length === 1) {
        if (this.jj != c) {
            var d = this.jj;
            this.jj = c;
            this.ej($.ig.RangeCategorySeries.prototype.jh, d, this.jj)
        }
        return c
    } else {
        return this.jj
    }
}, jj: null, i6: function (c, d) {
    $.ig.CategorySeries.prototype.i6.call(this, c, d);
    $.ig.CategoryMarkerManager.prototype.a(this, c.f, d.da(), this.useLightweightMarkers())
}, ju: function (g, h, i, j, k, l) {
    this.jo().dn(g, h, i, j, k, l)
}, scrollIntoView: function (o) {
    var p = this.view() != null ? this.view().ac() : $.ig.Rect.prototype.empty();
    var q = this.view() != null ? this.view().ab() : $.ig.Rect.prototype.empty();
    var r = !p.isEmpty() && !q.isEmpty() && this.dx() != null ? this.dx().x(o) : -1;
    var s = this.ja();
    var t;
    if (s != null) {
        var u = new $.ig.Rect(0, 0, 0, 1, 1);
        var v = new $.ig.ScalerParams(u, u, s.isInverted());
        t = s.getScaledValue(r, v)
    } else {
        t = NaN
    }
    var w = s != null ? this.ix().x($.ig.util.cast($.ig.ICategoryScaler.prototype.$type, s), new $.ig.Rect(0, 0, 0, 1, 1), new $.ig.Rect(0, 0, 0, 1, 1)) : 0;
    t += w;
    if (r >= 0 && p != null && q != null) {
        if (!isNaN(t)) {
            if (t < p.left() + 0.1 * p.width()) {
                t = t + 0.4 * p.width()
            }
            if (t > p.right() - 0.1 * p.width()) {
                t = t - 0.4 * p.width()
            }
            p.x(t - 0.5 * p.width())
        }
        var x = this.jb();
        if (x != null && this.highColumn() != null && r < this.highColumn().count()) {
            var y = new $.ig.ScalerParams(p, q, x.isInverted());
            var z = x.getScaledValue(this.highColumn().item(r), y);
            var A = x.getScaledValue(this.lowColumn().item(r), y);
            if (!isNaN(z) && !isNaN(A)) {
                var B = Math.abs(A - z);
                if (p.height() < B) {
                    p.height(B);
                    p.y(Math.min(A, z))
                } else {
                    if (A < p.top() + 0.1 * p.height()) {
                        A = A + 0.4 * p.height()
                    }
                    if (A > p.bottom() - 0.1 * p.height()) {
                        A = A - 0.4 * p.height()
                    }
                    p.y(A - 0.5 * p.height())
                }
            }
        }
        if (this.syncLink() != null) {
            this.syncLink().bp(this.seriesViewer(), p)
        }
    }
    return r >= 0
}, e6: function (e, f, g, h) {
    $.ig.CategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.Series.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, g) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, g)).ac(this.lowColumn());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, g)).ac(this.highColumn());
                this.lowColumn(null);
                this.highColumn(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                this.lowColumn(this.gs(this.lowMemberPath()));
                this.highColumn(this.gs(this.highMemberPath()))
            }
            if (!this.jc()) {
                this.iy().c9().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.RangeCategorySeries.prototype.je:
            if (this.dx() != null) {
                this.dx().ac(this.lowColumn());
                this.lowColumn(this.gs(this.lowMemberPath()))
            }
            break;
        case $.ig.RangeCategorySeries.prototype.jf:
            if (!this.jc()) {
                this.iy().c9().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.RangeCategorySeries.prototype.jg:
            if (this.dx() != null) {
                this.dx().ac(this.highColumn());
                this.highColumn(this.gs(this.highMemberPath()))
            }
            break;
        case $.ig.RangeCategorySeries.prototype.jh:
            if (!this.jc()) {
                this.iy().c9().q(this.resolution());
                this.renderSeries(false)
            }
            break
    }
}, em: function (e) {
    if (this.lowColumn() == null || this.lowColumn().count() == 0 || this.highColumn() == null || this.highColumn().count() == 0) {
        return null
    }
    if (e == this.ja()) {
        var f = Math.min(this.lowColumn().count(), this.highColumn().count());
        return new $.ig.AxisRange(0, f - 1)
    }
    if (e == this.jb()) {
        var g = Math.min(this.lowColumn().minimum(), this.highColumn().minimum());
        var h = Math.max(this.lowColumn().maximum(), this.highColumn().maximum());
        return new $.ig.AxisRange(Math.min(g, h), Math.max(g, h))
    }
    return null
}, fc: function (e, f, g, h) {
    if (this.ja() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.ja()) !== null) {
        ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.ja())).notifyDataChanged()
    }
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.change:
            if (h == this.lowMemberPath() || h == this.highMemberPath()) {
                if (!this.jc()) {
                    this.renderSeries(true)
                }
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.insert:
            this.iy().c9().q(this.resolution());
            if (!this.jc()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            this.iy().c9().q(this.resolution());
            if (!this.jc()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.replace:
            if (this.lowMemberPath() != null && this.highMemberPath() != null && this.iy().c9().h() > 0 && !this.jc()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            this.iy().c9().q(this.resolution());
            if (!this.jc()) {
                this.renderSeries(true)
            }
            break
    }
}, es: function (e, f, g) {
    var h = $.ig.CategorySeries.prototype.es.call(this, e, f, g);
    if (this.lowColumn() == null || this.lowColumn().count() == 0 || this.highColumn() == null || this.highColumn().count() == 0) {
        h = false
    }
    return h
}, i7: function (c, d) {
    this.ix().m(c, d)
}, currentCategoryMode: function () {
    return this.preferredCategoryMode($.ig.util.cast($.ig.CategoryAxisBase.prototype.$type, this.ja()))
}, scaler: function () {
    return $.ig.util.cast($.ig.ICategoryScaler.prototype.$type, this.ja())
}, yScaler: function () {
    return $.ig.util.cast($.ig.IScaler.prototype.$type, this.jb())
}, bucketizer: function () {
    return this.iy().c9()
}, currentMode2Index: function () {
    return this.i5()
}, provideCollisionDetector: function () {
    return new $.ig.CollisionAvoider()
}, er: function (a, b) {
    var g = this.dv();
    $.ig.CategorySeries.prototype.er.call(this, a, b);
    if (!g) {
        this.view().b4(b);
        return
    }
    this.view().b4(b);
    if (this.ew(this.dt())) {
        return
    }
    var h = new $.ig.RangeCategoryFramePreparer(1, this, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, this.dt()), this.seriesViewer().fb().aj(), this, (this.dt()).c9());
    this.iu = new $.ig.CategoryFrame(3);
    h.m(this.iu, this.dt());
    this.i6(this.iu, this.dt());
    this.dv(false)
}, $type: new $.ig.Type("RangeCategorySeries", $.ig.CategorySeries.prototype.$type, [$.ig.IIsCategoryBased.prototype.$type, $.ig.IHasHighLowValueCategory.prototype.$type])}, true);
$.ig.util.defType("HorizontalRangeCategorySeries", "RangeCategorySeries", {init: function () {
    $.ig.RangeCategorySeries.prototype.init.call(this)
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HorizontalRangeCategorySeries.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HorizontalRangeCategorySeries.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HorizontalRangeCategorySeries.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HorizontalRangeCategorySeries.prototype.yAxisProperty)
    }
}, ja: function () {
    return this.xAxis()
}, jb: function () {
    return this.yAxis()
}, jc: function () {
    return this.yAxis() != null && this.yAxis().updateRange()
}, e6: function (e, f, g, h) {
    $.ig.RangeCategorySeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.HorizontalRangeCategorySeries.prototype.jx:
            this.gn($.ig.util.cast($.ig.Axis.prototype.$type, g));
            this.go($.ig.util.cast($.ig.Axis.prototype.$type, h));
            this.iy().c9().q(this.resolution());
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.HorizontalRangeCategorySeries.prototype.jy:
            this.gn($.ig.util.cast($.ig.Axis.prototype.$type, g));
            this.go($.ig.util.cast($.ig.Axis.prototype.$type, h));
            this.iy().c9().q(this.resolution());
            this.jc();
            this.renderSeries(false);
            this.e5();
            break
    }
}, $type: new $.ig.Type("HorizontalRangeCategorySeries", $.ig.RangeCategorySeries.prototype.$type)}, true);
$.ig.util.defType("RangeAreaSeries", "HorizontalRangeCategorySeries", {ed: function () {
    return new $.ig.RangeAreaSeriesView(this)
}, ea: function (b) {
    $.ig.RangeCategorySeries.prototype.ea.call(this, b);
    this.j4(b)
}, _j4: null, j4: function (b) {
    if (arguments.length === 1) {
        this._j4 = b;
        return b
    } else {
        return this._j4
    }
}, init: function () {
    $.ig.HorizontalRangeCategorySeries.prototype.init.call(this);
    this.a3($.ig.RangeAreaSeries.prototype.$type)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.CategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    f.dw()
}, i6: function (j, k) {
    $.ig.RangeCategorySeries.prototype.i6.call(this, j, k);
    var l = j.d.count();
    var m = new $.ig.List$1($.ig.Array.prototype.$type, 2, l);
    for (var n = 0; n < l; n++) {
        var o = j.d.__inner[n];
        var p = new Array(4);
        p[0] = o[0];
        p[1] = o[1];
        var q = j.d.__inner[j.d.count() - 1 - n];
        p[2] = q[0];
        p[3] = q[2];
        m.add(p)
    }
    var r = $.ig.util.cast($.ig.RangeAreaSeriesView.prototype.$type, k);
    r.dx(j.d.count(), m, false);
    r.b6(Math.min(this.lowColumn().minimum(), this.highColumn().minimum()), Math.max(this.lowColumn().maximum(), this.highColumn().maximum()), NaN, NaN, NaN)
}, $type: new $.ig.Type("RangeAreaSeries", $.ig.HorizontalRangeCategorySeries.prototype.$type)}, true);
$.ig.util.defType("RangeCategorySeriesView", "CategorySeriesView", {_dk: null, dk: function (b) {
    if (arguments.length === 1) {
        this._dk = b;
        return b
    } else {
        return this._dk
    }
}, init: function (b) {
    $.ig.CategorySeriesView.prototype.init.call(this, b);
    this.dk(b)
}, dn: function (s, t, u, v, w, x) {
    s.bn().clear();
    t.bn().clear();
    u.bn().clear();
    var y = $.ig.Flattener.prototype.h(v, w, true, x, this.u().resolution());
    var z = $.ig.Flattener.prototype.h(v, w, false, x, this.u().resolution());
    var A = y.count();
    var B = z.count();
    var C;
    var D;
    var E;
    var F;
    for (var G = 0; G < A; G++) {
        C = y.item(G);
        D = w.__inner[C];
        E = D[0];
        F = D[1];
        s.bn().add({__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        t.bn().add({__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    var H;
    var I;
    for (var J = 0; J < B; J++) {
        C = z.item(J);
        D = w.__inner[C];
        if (x) {
            H = D[0];
            I = D[2]
        } else {
            H = D[2];
            I = D[3]
        }
        u.bn().add({__x: H, __y: I, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        t.bn().add({__x: H, __y: I, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    s.a6(s.bn().count() > 0);
    t.a6(t.bn().count() > 0);
    u.a6(u.bn().count() > 0)
}, df: function () {
    return new $.ig.RangeCategoryBucketCalculator(this)
}, $type: new $.ig.Type("RangeCategorySeriesView", $.ig.CategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("RangeAreaSeriesView", "RangeCategorySeriesView", {_dt: null, dt: function (b) {
    if (arguments.length === 1) {
        this._dt = b;
        return b
    } else {
        return this._dt
    }
}, init: function (b) {
    this.dp = new $.ig.Polyline();
    this.dq = new $.ig.Polygon();
    this.dr = new $.ig.Polyline();
    $.ig.RangeCategorySeriesView.prototype.init.call(this, b);
    this.dt(b)
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
}, dp: null, dq: null, dr: null, dw: function () {
    this.dq.bn().clear();
    this.dp.bn().clear();
    this.dr.bn().clear()
}, dx: function (d, e, f) {
    this.dn(this.dp, this.dq, this.dr, d, e, f);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dq.__fill = this.u().actualBrush();
    this.dp.__stroke = this.u().actualOutline();
    this.dp.a7(this.u().thickness());
    this.dp.a8(this.u().dashArray());
    this.dp.a9(this.u().dashCap());
    this.dr.__stroke = this.u().actualOutline();
    this.dr.a7(this.u().thickness());
    this.dr.a8(this.u().dashArray());
    this.dr.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dq.__fill = b;
    this.dp.__stroke = b;
    this.dp.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.dr.__stroke = b;
    this.dr.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.dt().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.j(this.dq);
        d.k(this.dp);
        d.k(this.dr)
    }
}, b5: function (e) {
    $.ig.SeriesView.prototype.b5.call(this, e);
    var f = new $.ig.PolyLineVisualData(1, "lowerShape", this.dp);
    f.tags().add("Lower");
    var g = new $.ig.PolyLineVisualData(1, "upperShape", this.dr);
    g.tags().add("Upper");
    g.tags().add("Main");
    var h = new $.ig.PolygonVisualData(1, "fillShape", this.dq);
    h.tags().add("Fill");
    e.shapes().add(f);
    e.shapes().add(g);
    e.shapes().add(h)
}, $type: new $.ig.Type("RangeAreaSeriesView", $.ig.RangeCategorySeriesView.prototype.$type)}, true);
$.ig.util.defType("RangeCategoryFramePreparer", "CategoryFramePreparerBase", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.RangeCategoryFramePreparer.prototype.init1.call(this, 1, b, $.ig.util.cast($.ig.ISupportsMarkers.prototype.$type, b), $.ig.util.cast($.ig.IProvidesViewport.prototype.$type, b), $.ig.util.cast($.ig.ISupportsErrorBars.prototype.$type, b), $.ig.util.cast($.ig.IBucketizer.prototype.$type, b))
}, init1: function (k, f, g, h, i, j) {
    $.ig.CategoryFramePreparerBase.prototype.init1.call(this, 1, f, g, h, i, j);
    this.am(new $.ig.DefaultCategoryTrendlineHost());
    if ($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, f) !== null) {
        this.am($.ig.util.cast($.ig.IHasCategoryTrendline.prototype.$type, f))
    }
    this.an(new $.ig.DefaultHighLowValueProvider());
    if ($.ig.util.cast($.ig.IHasHighLowValueCategory.prototype.$type, f) !== null) {
        this.an($.ig.util.cast($.ig.IHasHighLowValueCategory.prototype.$type, f))
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
    var p = j[2];
    if (!isNaN(n) && !isNaN(o) && !isNaN(p)) {
        i.f.add({__x: n, __y: (o + p) / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.e().updateMarkerTemplate(m, l);
        return true
    }
    return false
}, ad: function (l, m, n, o) {
    var p = l;
    var q = p.u();
    var r = p.v();
    var s = this.z(q.item(m));
    var t = this.z(r.item(m));
    var u = Math.max(s, t);
    var v = Math.min(s, t);
    if (n) {
        p.h(v);
        p.i(u)
    } else {
        p.g(u);
        p.f(v)
    }
}, ae: function (i, j, k) {
    var l = i;
    var m = l.u();
    var n = l.v();
    var o = this.z(m.item(j));
    var p = this.z(n.item(j));
    if (!isNaN(o)) {
        l.g(Math.max(l.g(), o));
        l.f(Math.min(l.f(), o))
    }
    if (!isNaN(p)) {
        l.g(Math.max(l.g(), p));
        l.f(Math.min(l.f(), p))
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
}, ah: function (g, h, i, j, k, l) {
    if (j) {
        h[0] = (h[0] + i)
    } else {
        h[0] = (g.r().getScaledValue(h[0], k) + i)
    }
    h[1] = g.t().getScaledValue(h[1], l);
    h[2] = g.t().getScaledValue(h[2], l)
}, aj: function (c) {
    var d = new $.ig.HighLowValuesHolder();
    d.u(this.an().highColumn());
    d.v(this.an().lowColumn());
    return d
}, $type: new $.ig.Type("RangeCategoryFramePreparer", $.ig.CategoryFramePreparerBase.prototype.$type)}, true);
$.ig.util.defType("HighLowValuesHolder", "ValuesHolder", {init: function () {
    $.ig.ValuesHolder.prototype.init.call(this)
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
}, e: function () {
    if (this.u() == null || this.v() == null) {
        return 0
    }
    return Math.min(this.u().count(), this.v().count())
}, $type: new $.ig.Type("HighLowValuesHolder", $.ig.ValuesHolder.prototype.$type)}, true);
$.ig.util.defType("DefaultHighLowValueProvider", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, highColumn: function () {
    return new $.ig.List$1(Number, 0)
}, lowColumn: function () {
    return new $.ig.List$1(Number, 0)
}, $type: new $.ig.Type("DefaultHighLowValueProvider", $.ig.Object.prototype.$type, [$.ig.IHasHighLowValueCategory.prototype.$type])}, true);
$.ig.util.defType("RangeColumnSeries", "HorizontalRangeCategorySeries", {ed: function () {
    return new $.ig.RangeColumnSeriesView(this)
}, ea: function (b) {
    $.ig.RangeCategorySeries.prototype.ea.call(this, b);
    this.j8(b)
}, _j8: null, j8: function (b) {
    if (arguments.length === 1) {
        this._j8 = b;
        return b
    } else {
        return this._j8
    }
}, init: function () {
    $.ig.HorizontalRangeCategorySeries.prototype.init.call(this);
    this.a3($.ig.RangeColumnSeries.prototype.$type)
}, radiusX: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RangeColumnSeries.prototype.radiusXProperty, b);
        return b
    } else {
        return this.b($.ig.RangeColumnSeries.prototype.radiusXProperty)
    }
}, radiusY: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RangeColumnSeries.prototype.radiusYProperty, b);
        return b
    } else {
        return this.b($.ig.RangeColumnSeries.prototype.radiusYProperty)
    }
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode2
}, eu: function (d, e) {
    $.ig.CategorySeries.prototype.eu.call(this, d, e);
    var f = e;
    if (d && f.du() != null) {
        f.du().g(0)
    }
}, i6: function (m, n) {
    $.ig.RangeCategorySeries.prototype.i6.call(this, m, n);
    var o = $.ig.util.cast($.ig.RangeColumnSeriesView.prototype.$type, n);
    var p = m.d;
    var q = n.ac();
    var r = n.ab();
    var s = this.xAxis().gz(q, r);
    if (isNaN(s) || Number.isInfinity(s)) {
        o.du().g(0);
        return
    }
    for (var t = 0; t < p.count(); ++t) {
        var u = p.__inner[t][0] - 0.5 * s;
        var v = Math.min(p.__inner[t][1], p.__inner[t][2]);
        var w = Math.max(p.__inner[t][1], p.__inner[t][2]);
        var x = o.du().item(t);
        x.v(s);
        x.w(Math.abs(w - v));
        o.d6(x, u, v)
    }
    o.du().g(p.count())
}, $type: new $.ig.Type("RangeColumnSeries", $.ig.HorizontalRangeCategorySeries.prototype.$type)}, true);
$.ig.util.defType("RangeColumnSeriesView", "RangeCategorySeriesView", {_dt: null, dt: function (b) {
    if (arguments.length === 1) {
        this._dt = b;
        return b
    } else {
        return this._dt
    }
}, init: function (c) {
    var b = this;
    $.ig.RangeCategorySeriesView.prototype.init.call(this, c);
    this.dt(c);
    this.du((function () {
        var a = new $.ig.Pool$1($.ig.Rectangle.prototype.$type);
        a.create(b.d2.on(b));
        a.activate(b.d3.on(b));
        a.disactivate(b.d4.on(b));
        a.destroy(b.d5.on(b));
        return a
    }()))
}, _du: null, du: function (b) {
    if (arguments.length === 1) {
        this._du = b;
        return b
    } else {
        return this._du
    }
}, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.dv(new $.ig.List$1($.ig.Rectangle.prototype.$type, 0));
    if (!this.ad()) {
        this.u().resolution(4);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, _dv: null, dv: function (b) {
    if (arguments.length === 1) {
        this._dv = b;
        return b
    } else {
        return this._dv
    }
}, d2: function () {
    var b = new $.ig.Rectangle();
    this.dv().add(b);
    b.__visibility = $.ig.Visibility.prototype.collapsed;
    return b
}, d3: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, d4: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, d5: function (b) {
    this.dv().remove(b)
}, d6: function (e, f, g) {
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
        for (var h = 0; h < this.dv().count(); h++) {
            var i = this.dv().__inner[h];
            this.ap(i, h, g);
            if (this.k && !g) {
                var j = i.__fill != null && i.__fill.isGradient() ? new $.ig.Rect(0, i.y(), i.x(), i.v(), i.w()) : null;
                f.e($.ig.GradientDirection.prototype.bottomTop, j)
            }
            f.f(i)
        }
    }
}, b5: function (g) {
    var f = this;
    $.ig.SeriesView.prototype.b5.call(this, g);
    var k = 0;
    var l = new $.ig.List$1($.ig.Rectangle.prototype.$type, 0);
    var n = this.du().h().getEnumerator();
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
}, $type: new $.ig.Type("RangeColumnSeriesView", $.ig.RangeCategorySeriesView.prototype.$type)}, true);
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
$.ig.util.defType("PolygonVisualData", "PrimitiveVisualData", {type: function () {
    return"Polygon"
}, init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.PrimitiveVisualData.prototype.init.call(this, "polygon1")
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
}, $type: new $.ig.Type("PolygonVisualData", $.ig.PrimitiveVisualData.prototype.$type)}, true);
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
$.ig.RangeCategorySeries.prototype.je = "LowMemberPath";
$.ig.RangeCategorySeries.prototype.jf = "LowColumn";
$.ig.RangeCategorySeries.prototype.jg = "HighMemberPath";
$.ig.RangeCategorySeries.prototype.jh = "HighColumn";
$.ig.RangeCategorySeries.prototype.lowMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeCategorySeries.prototype.je, String, $.ig.RangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.RangeCategorySeries.prototype.$type, c)).ej($.ig.RangeCategorySeries.prototype.je, d.f(), d.e())
}));
$.ig.RangeCategorySeries.prototype.highMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeCategorySeries.prototype.jg, String, $.ig.RangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.RangeCategorySeries.prototype.$type, c)).ej($.ig.RangeCategorySeries.prototype.jg, d.f(), d.e())
}));
$.ig.HorizontalRangeCategorySeries.prototype.jx = "XAxis";
$.ig.HorizontalRangeCategorySeries.prototype.jy = "YAxis";
$.ig.HorizontalRangeCategorySeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalRangeCategorySeries.prototype.jx, $.ig.CategoryAxisBase.prototype.$type, $.ig.HorizontalRangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HorizontalRangeCategorySeries.prototype.$type, c)).ej($.ig.HorizontalRangeCategorySeries.prototype.jx, d.f(), d.e())
}));
$.ig.HorizontalRangeCategorySeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HorizontalRangeCategorySeries.prototype.jy, $.ig.NumericYAxis.prototype.$type, $.ig.HorizontalRangeCategorySeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HorizontalRangeCategorySeries.prototype.$type, c)).ej($.ig.HorizontalRangeCategorySeries.prototype.jy, d.f(), d.e())
}));
$.ig.RangeColumnSeries.prototype.j3 = "RadiusX";
$.ig.RangeColumnSeries.prototype.j4 = "RadiusY";
$.ig.RangeColumnSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeColumnSeries.prototype.j3, Number, $.ig.RangeColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.RangeColumnSeries.prototype.$type, c)).ej($.ig.RangeColumnSeries.prototype.j3, d.f(), d.e())
}));
$.ig.RangeColumnSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.RangeColumnSeries.prototype.j4, Number, $.ig.RangeColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.RangeColumnSeries.prototype.$type, c)).ej($.ig.RangeColumnSeries.prototype.j4, d.f(), d.e())
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