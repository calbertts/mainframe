System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "optimisation.modules.system",
      "es7.decorators"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dependency-bundle.js": [
      "github:systemjs/plugin-text@0.0.4",
      "github:systemjs/plugin-text@0.0.4/text",
      "npm:reflux@0.3.0",
      "npm:reflux@0.3.0/src/index",
      "npm:reflux@0.3.0/src/connect",
      "npm:reflux@0.3.0/src/ListenerMixin",
      "npm:reflux-core@0.3.0",
      "npm:reflux@0.3.0/src/listenTo",
      "npm:reflux@0.3.0/src/connectFilter",
      "npm:reflux@0.3.0/src/listenToMany",
      "npm:reflux-core@0.3.0/lib/ListenerMethods",
      "npm:reflux-core@0.3.0/lib/index",
      "npm:reflux-core@0.3.0/lib/utils",
      "npm:reflux-core@0.3.0/lib/StoreMethods",
      "npm:reflux-core@0.3.0/lib/createAction",
      "npm:reflux-core@0.3.0/lib/joins",
      "npm:reflux-core@0.3.0/lib/PublisherMethods",
      "npm:reflux-core@0.3.0/lib/createStore",
      "npm:reflux-core@0.3.0/lib/Keep",
      "npm:reflux-core@0.3.0/lib/ActionMethods",
      "npm:eventemitter3@1.1.1",
      "npm:reflux-core@0.3.0/lib/bindMethods",
      "npm:reflux-core@0.3.0/lib/mixer",
      "npm:eventemitter3@1.1.1/index",
      "npm:react-tap-event-plugin@0.2.1",
      "npm:react-tap-event-plugin@0.2.1/src/injectTapEventPlugin",
      "npm:react@0.14.3/lib/EventPluginHub",
      "npm:react@0.14.3/lib/EventPluginRegistry",
      "npm:react@0.14.3/lib/EventPluginUtils",
      "npm:react@0.14.3/lib/ReactErrorUtils",
      "npm:react@0.14.3/lib/accumulateInto",
      "npm:react@0.14.3/lib/forEachAccumulated",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/warning",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.14.3/lib/EventConstants",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:fbjs@0.3.2/lib/keyMirror",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "npm:react-tap-event-plugin@0.2.1/src/TapEventPlugin",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:react@0.14.3/lib/SyntheticUIEvent",
      "npm:react@0.14.3/lib/ViewportMetrics",
      "npm:react@0.14.3/lib/SyntheticEvent",
      "npm:react@0.14.3/lib/getEventTarget",
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react-tap-event-plugin@0.2.1/src/TouchEventUtils",
      "npm:fbjs@0.2.1/lib/keyOf",
      "npm:react-router@1.0.1",
      "npm:react-router@1.0.1/lib/index",
      "npm:react-router@1.0.1/lib/IndexLink",
      "npm:react@0.14.3",
      "npm:react@0.14.3/react",
      "npm:react@0.14.3/lib/React",
      "npm:react@0.14.3/lib/ReactDOM",
      "npm:react@0.14.3/lib/ReactDOMServer",
      "npm:react@0.14.3/lib/ReactIsomorphic",
      "npm:react@0.14.3/lib/deprecated",
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactDOMTextComponent",
      "npm:react@0.14.3/lib/ReactDefaultInjection",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/ReactVersion",
      "npm:react@0.14.3/lib/findDOMNode",
      "npm:react@0.14.3/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:react@0.14.3/lib/ReactServerRendering",
      "npm:react@0.14.3/lib/ReactChildren",
      "npm:react@0.14.3/lib/ReactComponent",
      "npm:react@0.14.3/lib/ReactClass",
      "npm:react@0.14.3/lib/ReactDOMFactories",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactElementValidator",
      "npm:react@0.14.3/lib/ReactPropTypes",
      "npm:react@0.14.3/lib/onlyChild",
      "npm:react@0.14.3/lib/DOMChildrenOperations",
      "npm:react@0.14.3/lib/DOMPropertyOperations",
      "npm:react@0.14.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.3/lib/escapeTextContentForBrowser",
      "npm:react@0.14.3/lib/setTextContent",
      "npm:react@0.14.3/lib/validateDOMNesting",
      "npm:react@0.14.3/lib/BeforeInputEventPlugin",
      "npm:react@0.14.3/lib/ChangeEventPlugin",
      "npm:react@0.14.3/lib/ClientReactRootIndex",
      "npm:react@0.14.3/lib/DefaultEventPluginOrder",
      "npm:react@0.14.3/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.3/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.3/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.3/lib/ReactDOMComponent",
      "npm:react@0.14.3/lib/ReactEventListener",
      "npm:react@0.14.3/lib/ReactInjection",
      "npm:react@0.14.3/lib/ReactReconcileTransaction",
      "npm:react@0.14.3/lib/SelectEventPlugin",
      "npm:react@0.14.3/lib/ServerReactRootIndex",
      "npm:react@0.14.3/lib/SimpleEventPlugin",
      "npm:react@0.14.3/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.3/lib/ReactDefaultPerf",
      "npm:react@0.14.3/lib/ReactRootIndex",
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.3/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.3/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/ReactMarkupChecksum",
      "npm:react@0.14.3/lib/ReactUpdateQueue",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:fbjs@0.3.2/lib/containsNode",
      "npm:react@0.14.3/lib/instantiateReactComponent",
      "npm:react@0.14.3/lib/setInnerHTML",
      "npm:react@0.14.3/lib/shouldUpdateReactComponent",
      "npm:react@0.14.3/lib/ReactRef",
      "npm:react@0.14.3/lib/CallbackQueue",
      "npm:react@0.14.3/lib/Transaction",
      "npm:react@0.14.3/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.3/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.3/lib/traverseAllChildren",
      "npm:react@0.14.3/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.3/lib/canDefineProperty",
      "npm:react@0.14.3/lib/ReactPropTypeLocations",
      "npm:react@0.14.3/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:fbjs@0.3.2/lib/mapObject",
      "npm:react@0.14.3/lib/getIteratorFn",
      "npm:react@0.14.3/lib/Danger",
      "npm:react@0.14.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.3/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.3/lib/ReactDOMIDOperations",
      "npm:react@0.14.3/lib/FallbackCompositionState",
      "npm:react@0.14.3/lib/SyntheticCompositionEvent",
      "npm:react@0.14.3/lib/SyntheticInputEvent",
      "npm:react@0.14.3/lib/isEventSupported",
      "npm:react@0.14.3/lib/isTextInputElement",
      "npm:react@0.14.3/lib/SyntheticMouseEvent",
      "npm:react@0.14.3/lib/AutoFocusUtils",
      "npm:react@0.14.3/lib/CSSPropertyOperations",
      "npm:react@0.14.3/lib/ReactDOMButton",
      "npm:react@0.14.3/lib/ReactDOMInput",
      "npm:react@0.14.3/lib/ReactDOMOption",
      "npm:react@0.14.3/lib/ReactDOMSelect",
      "npm:react@0.14.3/lib/ReactDOMTextarea",
      "npm:react@0.14.3/lib/ReactMultiChild",
      "npm:fbjs@0.3.2/lib/shallowEqual",
      "npm:fbjs@0.3.2/lib/EventListener",
      "npm:fbjs@0.3.2/lib/getUnboundedScrollPosition",
      "npm:react@0.14.3/lib/ReactComponentEnvironment",
      "npm:react@0.14.3/lib/ReactEmptyComponent",
      "npm:react@0.14.3/lib/ReactNativeComponent",
      "npm:react@0.14.3/lib/ReactInputSelection",
      "npm:fbjs@0.3.2/lib/getActiveElement",
      "npm:react@0.14.3/lib/SyntheticClipboardEvent",
      "npm:react@0.14.3/lib/SyntheticFocusEvent",
      "npm:react@0.14.3/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.3/lib/SyntheticDragEvent",
      "npm:react@0.14.3/lib/SyntheticTouchEvent",
      "npm:react@0.14.3/lib/SyntheticWheelEvent",
      "npm:react@0.14.3/lib/getEventCharCode",
      "npm:react@0.14.3/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.3.2/lib/performanceNow",
      "npm:react@0.14.3/lib/ReactEventEmitterMixin",
      "npm:react@0.14.3/lib/adler32",
      "npm:fbjs@0.3.2/lib/isTextNode",
      "npm:react@0.14.3/lib/ReactCompositeComponent",
      "npm:react@0.14.3/lib/ReactOwner",
      "npm:fbjs@0.3.2/lib/createNodesFromMarkup",
      "npm:fbjs@0.3.2/lib/getMarkupWrap",
      "npm:react@0.14.3/lib/getTextContentAccessor",
      "npm:react@0.14.3/lib/getEventModifierState",
      "npm:fbjs@0.3.2/lib/focusNode",
      "npm:react@0.14.3/lib/CSSProperty",
      "npm:fbjs@0.3.2/lib/camelizeStyleName",
      "npm:react@0.14.3/lib/dangerousStyleValue",
      "npm:fbjs@0.3.2/lib/hyphenateStyleName",
      "npm:fbjs@0.3.2/lib/memoizeStringOnly",
      "npm:react@0.14.3/lib/LinkedValueUtils",
      "npm:react@0.14.3/lib/ReactChildReconciler",
      "npm:react@0.14.3/lib/flattenChildren",
      "npm:react@0.14.3/lib/ReactDOMSelection",
      "npm:react@0.14.3/lib/getEventKey",
      "npm:fbjs@0.3.2/lib/performance",
      "npm:fbjs@0.3.2/lib/isNode",
      "npm:fbjs@0.3.2/lib/createArrayFromMixed",
      "npm:fbjs@0.3.2/lib/camelize",
      "npm:fbjs@0.3.2/lib/hyphenate",
      "npm:react@0.14.3/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.3.2/lib/toArray",
      "npm:react-router@1.0.1/lib/Link",
      "npm:react-router@1.0.1/lib/Router",
      "npm:warning@2.1.0",
      "npm:warning@2.1.0/browser",
      "npm:react-router@1.0.1/lib/IndexRedirect",
      "npm:react-router@1.0.1/lib/IndexRoute",
      "npm:react-router@1.0.1/lib/Redirect",
      "npm:react-router@1.0.1/lib/Route",
      "npm:react-router@1.0.1/lib/History",
      "npm:react-router@1.0.1/lib/Lifecycle",
      "npm:react-router@1.0.1/lib/RouteContext",
      "npm:react-router@1.0.1/lib/useRoutes",
      "npm:react-router@1.0.1/lib/RouteUtils",
      "npm:react-router@1.0.1/lib/RoutingContext",
      "npm:react-router@1.0.1/lib/PropTypes",
      "npm:react-router@1.0.1/lib/match",
      "npm:invariant@2.2.0",
      "npm:history@1.14.0/lib/createHashHistory",
      "npm:react-router@1.0.1/lib/PatternUtils",
      "npm:history@1.14.0/lib/Actions",
      "npm:react-router@1.0.1/lib/computeChangedRoutes",
      "npm:history@1.14.0/lib/useQueries",
      "npm:react-router@1.0.1/lib/TransitionUtils",
      "npm:react-router@1.0.1/lib/isActive",
      "npm:react-router@1.0.1/lib/getComponents",
      "npm:react-router@1.0.1/lib/matchRoutes",
      "npm:react-router@1.0.1/lib/getRouteParams",
      "npm:history@1.14.0/lib/createMemoryHistory",
      "npm:history@1.14.0/lib/useBasename",
      "npm:invariant@2.2.0/browser",
      "npm:history@1.14.0/lib/ExecutionEnvironment",
      "npm:history@1.14.0/lib/DOMUtils",
      "npm:history@1.14.0/lib/DOMStateStorage",
      "npm:history@1.14.0/lib/createDOMHistory",
      "npm:query-string@3.0.0",
      "npm:history@1.14.0/lib/runTransitionHook",
      "npm:history@1.14.0/lib/parsePath",
      "npm:history@1.14.0/lib/deprecate",
      "npm:react-router@1.0.1/lib/AsyncUtils",
      "npm:history@1.14.0/lib/createHistory",
      "npm:history@1.14.0/lib/extractPath",
      "npm:query-string@3.0.0/index",
      "npm:history@1.14.0/lib/createLocation",
      "npm:history@1.14.0/lib/AsyncUtils",
      "npm:deep-equal@1.0.1",
      "npm:strict-uri-encode@1.0.2",
      "npm:deep-equal@1.0.1/index",
      "npm:strict-uri-encode@1.0.2/index",
      "npm:deep-equal@1.0.1/lib/keys",
      "npm:deep-equal@1.0.1/lib/is_arguments",
      "npm:react-dom@0.14.3",
      "npm:react-dom@0.14.3/index",
      "npm:radium@0.15.3",
      "npm:radium@0.15.3/lib/index",
      "npm:radium@0.15.3/lib/plugins/index",
      "npm:radium@0.15.3/lib/components/print-style-sheet",
      "npm:radium@0.15.3/lib/components/style",
      "npm:radium@0.15.3/lib/enhancer",
      "npm:radium@0.15.3/lib/get-state",
      "npm:radium@0.15.3/lib/resolve-styles",
      "npm:radium@0.15.3/lib/keyframes",
      "npm:radium@0.15.3/lib/plugins/check-props-plugin",
      "npm:radium@0.15.3/lib/plugins/prefix-plugin",
      "npm:radium@0.15.3/lib/plugins/resolve-interaction-styles-plugin",
      "npm:radium@0.15.3/lib/plugins/merge-style-array-plugin",
      "npm:radium@0.15.3/lib/plugins/resolve-media-queries-plugin",
      "npm:radium@0.15.3/lib/print-styles",
      "npm:radium@0.15.3/lib/camel-case-props-to-dash-case",
      "npm:radium@0.15.3/lib/prefixer",
      "npm:inline-style-prefixer@0.5.4",
      "npm:inline-style-prefixer@0.5.4/lib/Prefixer",
      "npm:inline-style-prefixer@0.5.4/lib/getBrowserInformation",
      "npm:inline-style-prefixer@0.5.4/lib/getPrefixedKeyframes",
      "npm:inline-style-prefixer@0.5.4/lib/caniuseData",
      "npm:inline-style-prefixer@0.5.4/lib/Plugins",
      "npm:bowser@1.0.0",
      "npm:inline-style-prefixer@0.5.4/lib/plugins/cursor",
      "npm:inline-style-prefixer@0.5.4/lib/plugins/flex",
      "npm:inline-style-prefixer@0.5.4/lib/plugins/sizing",
      "npm:inline-style-prefixer@0.5.4/lib/plugins/gradient",
      "npm:inline-style-prefixer@0.5.4/lib/plugins/flexboxIE",
      "npm:inline-style-prefixer@0.5.4/lib/plugins/flexboxOld",
      "npm:bowser@1.0.0/bowser",
      "npm:radium@0.15.3/lib/get-state-key",
      "npm:radium@0.15.3/lib/create-markup-for-styles",
      "npm:exenv@1.2.0",
      "npm:radium@0.15.3/lib/merge-styles",
      "npm:radium@0.15.3/lib/plugins/mouse-up-listener",
      "npm:exenv@1.2.0/index",
      "npm:is-plain-object@2.0.1",
      "npm:is-plain-object@2.0.1/index",
      "npm:isobject@1.0.2",
      "npm:isobject@1.0.2/index",
      "npm:material-ui@0.14.0-rc1",
      "npm:material-ui@0.14.0-rc1/lib",
      "npm:material-ui@0.14.0-rc1/lib/index",
      "npm:material-ui@0.14.0-rc1/lib/app-bar",
      "npm:material-ui@0.14.0-rc1/lib/avatar",
      "npm:material-ui@0.14.0-rc1/lib/auto-complete",
      "npm:material-ui@0.14.0-rc1/lib/badge",
      "npm:material-ui@0.14.0-rc1/lib/before-after-wrapper",
      "npm:material-ui@0.14.0-rc1/lib/card/card",
      "npm:material-ui@0.14.0-rc1/lib/card/card-actions",
      "npm:material-ui@0.14.0-rc1/lib/card/card-header",
      "npm:material-ui@0.14.0-rc1/lib/card/card-expandable",
      "npm:material-ui@0.14.0-rc1/lib/card/card-media",
      "npm:material-ui@0.14.0-rc1/lib/card/card-text",
      "npm:material-ui@0.14.0-rc1/lib/card/card-title",
      "npm:material-ui@0.14.0-rc1/lib/checkbox",
      "npm:material-ui@0.14.0-rc1/lib/circular-progress",
      "npm:material-ui@0.14.0-rc1/lib/clearfix",
      "npm:material-ui@0.14.0-rc1/lib/app-canvas",
      "npm:material-ui@0.14.0-rc1/lib/dialog",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/date-picker-dialog",
      "npm:material-ui@0.14.0-rc1/lib/drop-down-icon",
      "npm:material-ui@0.14.0-rc1/lib/drop-down-menu",
      "npm:material-ui@0.14.0-rc1/lib/enhanced-button",
      "npm:material-ui@0.14.0-rc1/lib/font-icon",
      "npm:material-ui@0.14.0-rc1/lib/floating-action-button",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/date-picker",
      "npm:material-ui@0.14.0-rc1/lib/grid-list/grid-list",
      "npm:material-ui@0.14.0-rc1/lib/grid-list/grid-tile",
      "npm:material-ui@0.14.0-rc1/lib/left-nav",
      "npm:material-ui@0.14.0-rc1/lib/menus/icon-menu",
      "npm:material-ui@0.14.0-rc1/lib/linear-progress",
      "npm:material-ui@0.14.0-rc1/lib/lists/list-divider",
      "npm:material-ui@0.14.0-rc1/lib/lists/list",
      "npm:material-ui@0.14.0-rc1/lib/lists/list-item",
      "npm:material-ui@0.14.0-rc1/lib/menu/menu",
      "npm:material-ui@0.14.0-rc1/lib/menu/menu-item",
      "npm:material-ui@0.14.0-rc1/lib/mixins/index",
      "npm:material-ui@0.14.0-rc1/lib/overlay",
      "npm:material-ui@0.14.0-rc1/lib/icon-button",
      "npm:material-ui@0.14.0-rc1/lib/paper",
      "npm:material-ui@0.14.0-rc1/lib/popover/popover",
      "npm:material-ui@0.14.0-rc1/lib/radio-button",
      "npm:material-ui@0.14.0-rc1/lib/raised-button",
      "npm:material-ui@0.14.0-rc1/lib/radio-button-group",
      "npm:material-ui@0.14.0-rc1/lib/refresh-indicator",
      "npm:material-ui@0.14.0-rc1/lib/select-field",
      "npm:material-ui@0.14.0-rc1/lib/hoc/selectable-enhance",
      "npm:material-ui@0.14.0-rc1/lib/ripples/index",
      "npm:material-ui@0.14.0-rc1/lib/slider",
      "npm:material-ui@0.14.0-rc1/lib/flat-button",
      "npm:material-ui@0.14.0-rc1/lib/svg-icon",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/navigation/menu",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/navigation/chevron-left",
      "npm:material-ui@0.14.0-rc1/lib/styles/index",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/navigation/chevron-right",
      "npm:material-ui@0.14.0-rc1/lib/snackbar",
      "npm:material-ui@0.14.0-rc1/lib/tabs/tabs",
      "npm:material-ui@0.14.0-rc1/lib/tabs/tab",
      "npm:material-ui@0.14.0-rc1/lib/table/table",
      "npm:material-ui@0.14.0-rc1/lib/table/table-footer",
      "npm:material-ui@0.14.0-rc1/lib/table/table-header",
      "npm:material-ui@0.14.0-rc1/lib/table/table-body",
      "npm:material-ui@0.14.0-rc1/lib/table/table-header-column",
      "npm:material-ui@0.14.0-rc1/lib/table/table-row",
      "npm:material-ui@0.14.0-rc1/lib/table/table-row-column",
      "npm:material-ui@0.14.0-rc1/lib/toggle",
      "npm:material-ui@0.14.0-rc1/lib/theme-wrapper",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/index",
      "npm:material-ui@0.14.0-rc1/lib/text-field",
      "npm:material-ui@0.14.0-rc1/lib/toolbar/toolbar",
      "npm:material-ui@0.14.0-rc1/lib/toolbar/toolbar-group",
      "npm:material-ui@0.14.0-rc1/lib/toolbar/toolbar-separator",
      "npm:material-ui@0.14.0-rc1/lib/toolbar/toolbar-title",
      "npm:material-ui@0.14.0-rc1/lib/tooltip",
      "npm:material-ui@0.14.0-rc1/lib/utils/index",
      "npm:material-ui@0.14.0-rc1/lib/mixins/style-propable",
      "npm:material-ui@0.14.0-rc1/lib/styles/raw-themes/light-raw-theme",
      "npm:material-ui@0.14.0-rc1/lib/styles/theme-manager",
      "npm:material-ui@0.14.0-rc1/lib/utils/prop-types",
      "npm:material-ui@0.14.0-rc1/lib/styles/typography",
      "npm:material-ui@0.14.0-rc1/lib/styles/colors",
      "npm:react-addons-transition-group@0.14.3",
      "npm:material-ui@0.14.0-rc1/lib/menus/menu",
      "npm:material-ui@0.14.0-rc1/lib/utils/key-code",
      "npm:material-ui@0.14.0-rc1/lib/mixins/click-awayable",
      "npm:material-ui@0.14.0-rc1/lib/menus/menu-item",
      "npm:material-ui@0.14.0-rc1/lib/menus/menu-divider",
      "npm:material-ui@0.14.0-rc1/lib/styles/auto-prefix",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/hardware/keyboard-arrow-down",
      "npm:material-ui@0.14.0-rc1/lib/utils/extend",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/hardware/keyboard-arrow-up",
      "npm:material-ui@0.14.0-rc1/lib/mixins/context-pure",
      "npm:material-ui@0.14.0-rc1/lib/enhanced-switch",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/toggle/check-box",
      "npm:material-ui@0.14.0-rc1/lib/styles/transitions",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/toggle/check-box-outline-blank",
      "npm:material-ui@0.14.0-rc1/lib/render-to-layer",
      "npm:material-ui@0.14.0-rc1/lib/mixins/window-listenable",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/calendar",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/date-picker-inline",
      "npm:material-ui@0.14.0-rc1/lib/utils/date-time",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/navigation/arrow-drop-down",
      "npm:react-addons-pure-render-mixin@0.14.3",
      "npm:material-ui@0.14.0-rc1/lib/utils/children",
      "npm:material-ui@0.14.0-rc1/lib/utils/events",
      "npm:material-ui@0.14.0-rc1/lib/ripples/focus-ripple",
      "npm:material-ui@0.14.0-rc1/lib/ripples/touch-ripple",
      "npm:material-ui@0.14.0-rc1/lib/utils/color-manipulator",
      "npm:material-ui@0.14.0-rc1/lib/utils/is-browser",
      "npm:material-ui@0.14.0-rc1/lib/utils/modernizr.custom",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/navigation/arrow-drop-up",
      "npm:material-ui@0.14.0-rc1/lib/lists/nested-list",
      "npm:material-ui@0.14.0-rc1/lib/utils/css-event",
      "npm:material-ui@0.14.0-rc1/lib/utils/key-line",
      "npm:material-ui@0.14.0-rc1/lib/menu/link-menu-item",
      "npm:material-ui@0.14.0-rc1/lib/menu/subheader-menu-item",
      "npm:material-ui@0.14.0-rc1/lib/mixins/style-resizable",
      "npm:lodash.throttle@3.0.4",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/toggle/radio-button-unchecked",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/toggle/radio-button-checked",
      "npm:material-ui@0.14.0-rc1/lib/ripples/circle-ripple",
      "npm:material-ui@0.14.0-rc1/lib/utils/immutability-helper",
      "npm:material-ui@0.14.0-rc1/lib/styles/spacing",
      "npm:material-ui@0.14.0-rc1/lib/buttons/flat-button-label",
      "npm:material-ui@0.14.0-rc1/lib/styles/theme-decorator",
      "npm:material-ui@0.14.0-rc1/lib/styles/raw-themes/dark-raw-theme",
      "npm:material-ui@0.14.0-rc1/lib/ink-bar",
      "npm:material-ui@0.14.0-rc1/lib/tabs/tabTemplate",
      "npm:material-ui@0.14.0-rc1/lib/mixins/controllable",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/time-picker",
      "npm:material-ui@0.14.0-rc1/lib/utils/unique-id",
      "npm:material-ui@0.14.0-rc1/lib/enhanced-textarea",
      "npm:material-ui@0.14.0-rc1/lib/utils/dom",
      "npm:material-ui@0.14.0-rc1/lib/utils/styles",
      "npm:react-addons-transition-group@0.14.3/index",
      "npm:react-addons-update@0.14.3",
      "npm:material-ui@0.14.0-rc1/lib/svg-icons/navigation/check",
      "npm:material-ui@0.14.0-rc1/lib/utils/shallow-equal",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/calendar-month",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/date-display",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/calendar-toolbar",
      "npm:material-ui@0.14.0-rc1/lib/transition-groups/slide-in",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/calendar-year",
      "npm:react-addons-pure-render-mixin@0.14.3/index",
      "npm:react-addons-create-fragment@0.14.3",
      "npm:material-ui@0.14.0-rc1/lib/transition-groups/scale-in",
      "npm:lodash.throttle@3.0.4/index",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/time-picker-dialog",
      "npm:react-addons-update@0.14.3/index",
      "npm:react@0.14.3/lib/ReactTransitionGroup",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/day-button",
      "npm:material-ui@0.14.0-rc1/lib/transition-groups/slide-in-child",
      "npm:material-ui@0.14.0-rc1/lib/date-picker/year-button",
      "npm:react@0.14.3/lib/ReactComponentWithPureRenderMixin",
      "npm:react-addons-create-fragment@0.14.3/index",
      "npm:material-ui@0.14.0-rc1/lib/transition-groups/scale-in-child",
      "npm:lodash.debounce@3.1.1",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/clock",
      "npm:react@0.14.3/lib/update",
      "npm:react@0.14.3/lib/ReactTransitionChildMapping",
      "npm:react@0.14.3/lib/shallowCompare",
      "npm:react@0.14.3/lib/ReactFragment",
      "npm:lodash.debounce@3.1.1/index",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/time-display",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/clock-button",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/clock-minutes",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/clock-hours",
      "npm:lodash._getnative@3.9.1",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/clock-number",
      "npm:material-ui@0.14.0-rc1/lib/time-picker/clock-pointer",
      "npm:lodash._getnative@3.9.1/index",
      "github:floatdrop/plugin-jsx@1.1.0",
      "github:floatdrop/plugin-jsx@1.1.0/jsx",
      "npm:react-tools@0.13.3",
      "npm:react-tools@0.13.3/main",
      "npm:jstransform@10.1.0",
      "npm:jstransform@10.1.0/visitors/type-syntax",
      "npm:react-tools@0.13.3/vendor/inline-source-map",
      "github:jspm/nodelibs-buffer@0.1.0",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:buffer@3.5.5",
      "npm:buffer@3.5.5/index",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.6",
      "npm:isarray@1.0.0",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:ieee754@1.1.6/index",
      "npm:isarray@1.0.0/index",
      "npm:react-tools@0.13.3/vendor/fbtransform/visitors",
      "npm:jstransform@10.1.0/src/jstransform",
      "npm:jstransform@10.1.0/src/utils",
      "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "npm:jstransform@10.1.0/visitors/es6-arrow-function-visitors",
      "npm:jstransform@10.1.0/visitors/es6-class-visitors",
      "npm:jstransform@10.1.0/visitors/es6-destructuring-visitors",
      "npm:jstransform@10.1.0/visitors/es6-object-concise-method-visitors",
      "npm:jstransform@10.1.0/visitors/es6-object-short-notation-visitors",
      "npm:jstransform@10.1.0/visitors/es6-template-visitors",
      "npm:jstransform@10.1.0/visitors/es6-rest-param-visitors",
      "npm:jstransform@10.1.0/visitors/es6-call-spread-visitors",
      "npm:jstransform@10.1.0/visitors/es7-spread-property-visitors",
      "npm:react-tools@0.13.3/vendor/fbtransform/transforms/react",
      "npm:react-tools@0.13.3/vendor/fbtransform/transforms/reactDisplayName",
      "npm:jstransform@10.1.0/visitors/reserved-words-visitors",
      "npm:source-map@0.1.31",
      "npm:jstransform@10.1.0/src/docblock",
      "npm:jstransform@10.1.0/visitors/reserved-words-helper",
      "npm:base62@0.1.1",
      "npm:esprima-fb@13001.1001.0-dev-harmony-fb/esprima",
      "npm:jstransform@10.1.0/visitors/es7-rest-property-helpers",
      "npm:react-tools@0.13.3/vendor/fbtransform/transforms/jsx",
      "npm:source-map@0.1.31/lib/source-map",
      "npm:base62@0.1.1/base62",
      "npm:source-map@0.1.31/lib/source-map/source-map-generator",
      "npm:source-map@0.1.31/lib/source-map/source-map-consumer",
      "npm:source-map@0.1.31/lib/source-map/source-node",
      "npm:amdefine@1.0.0",
      "npm:source-map@0.1.31/lib/source-map/util",
      "npm:source-map@0.1.31/lib/source-map/array-set",
      "npm:source-map@0.1.31/lib/source-map/binary-search",
      "npm:source-map@0.1.31/lib/source-map/base64-vlq",
      "npm:amdefine@1.0.0/amdefine",
      "npm:source-map@0.1.31/lib/source-map/base64",
      "github:jspm/nodelibs-path@0.1.0",
      "github:jspm/nodelibs-path@0.1.0/index",
      "npm:path-browserify@0.0.0",
      "npm:path-browserify@0.0.0/index",
      "github:systemjs/plugin-json@0.1.0",
      "github:systemjs/plugin-json@0.1.0/json",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "npm:whatwg-fetch@0.7.0",
      "npm:whatwg-fetch@0.7.0/fetch",
      "npm:eve@0.5.0",
      "npm:eve@0.5.0/eve",
      "npm:diagram-js@0.12.1",
      "npm:diagram-js@0.12.1/index",
      "npm:diagram-js@0.12.1/lib/Diagram",
      "npm:didi@0.1.0",
      "npm:diagram-js@0.12.1/lib/core/index",
      "npm:didi@0.1.0/lib/index",
      "npm:diagram-js@0.12.1/lib/draw/index",
      "npm:diagram-js@0.12.1/lib/core/Canvas",
      "npm:diagram-js@0.12.1/lib/core/ElementRegistry",
      "npm:diagram-js@0.12.1/lib/core/ElementFactory",
      "npm:diagram-js@0.12.1/lib/core/EventBus",
      "npm:diagram-js@0.12.1/lib/core/GraphicsFactory",
      "npm:didi@0.1.0/lib/annotation",
      "npm:didi@0.1.0/lib/module",
      "npm:didi@0.1.0/lib/injector",
      "npm:diagram-js@0.12.1/lib/draw/DefaultRenderer",
      "npm:diagram-js@0.12.1/lib/draw/Styles",
      "npm:lodash@3.10.1/lang/isNumber",
      "npm:lodash@3.10.1/object/assign",
      "npm:lodash@3.10.1/collection/forEach",
      "npm:lodash@3.10.1/collection/every",
      "npm:lodash@3.10.1/function/debounce",
      "npm:diagram-js@0.12.1/lib/util/Collections",
      "npm:diagram-js@0.12.1/vendor/snapsvg",
      "npm:diagram-js@0.12.1/lib/model/index",
      "npm:lodash@3.10.1/lang/isFunction",
      "npm:lodash@3.10.1/lang/isArray",
      "npm:lodash@3.10.1/function/bind",
      "npm:lodash@3.10.1/collection/reduce",
      "npm:diagram-js@0.12.1/lib/util/GraphicsUtil",
      "npm:min-dom@0.2.0/lib/clear",
      "npm:inherits@2.0.1",
      "npm:diagram-js@0.12.1/lib/draw/BaseRenderer",
      "npm:diagram-js@0.12.1/lib/util/RenderUtil",
      "npm:lodash@3.10.1/internal/isObjectLike",
      "npm:lodash@3.10.1/internal/assignWith",
      "npm:lodash@3.10.1/internal/baseAssign",
      "npm:lodash@3.10.1/internal/createAssigner",
      "npm:lodash@3.10.1/internal/arrayEach",
      "npm:lodash@3.10.1/internal/baseEach",
      "npm:lodash@3.10.1/internal/createForEach",
      "npm:lodash@3.10.1/internal/arrayEvery",
      "npm:lodash@3.10.1/internal/baseCallback",
      "npm:lodash@3.10.1/internal/baseEvery",
      "npm:lodash@3.10.1/internal/isIterateeCall",
      "npm:lodash@3.10.1/lang/isObject",
      "npm:lodash@3.10.1/date/now",
      "github:Nikku/Snap.svg@0.3.0-browserify",
      "npm:object-refs@0.1.1",
      "npm:lodash@3.10.1/internal/getNative",
      "npm:lodash@3.10.1/internal/isLength",
      "npm:lodash@3.10.1/internal/createWrapper",
      "npm:lodash@3.10.1/internal/replaceHolders",
      "npm:lodash@3.10.1/function/restParam",
      "npm:lodash@3.10.1/internal/arrayReduce",
      "npm:lodash@3.10.1/internal/createReduce",
      "npm:inherits@2.0.1/inherits_browser",
      "npm:lodash@3.10.1/object/keys",
      "npm:lodash@3.10.1/internal/baseCopy",
      "npm:lodash@3.10.1/internal/bindCallback",
      "npm:lodash@3.10.1/internal/baseForOwn",
      "npm:lodash@3.10.1/internal/createBaseEach",
      "npm:lodash@3.10.1/internal/baseMatches",
      "npm:lodash@3.10.1/internal/baseMatchesProperty",
      "npm:lodash@3.10.1/utility/identity",
      "npm:lodash@3.10.1/utility/property",
      "npm:lodash@3.10.1/internal/isArrayLike",
      "npm:lodash@3.10.1/internal/isIndex",
      "github:Nikku/Snap.svg@0.3.0-browserify/dist/snap.svg",
      "npm:object-refs@0.1.1/index",
      "npm:lodash@3.10.1/lang/isNative",
      "npm:lodash@3.10.1/internal/baseSetData",
      "npm:lodash@3.10.1/internal/createBindWrapper",
      "npm:lodash@3.10.1/internal/createHybridWrapper",
      "npm:lodash@3.10.1/internal/createPartialWrapper",
      "npm:lodash@3.10.1/internal/getData",
      "npm:lodash@3.10.1/internal/mergeData",
      "npm:lodash@3.10.1/internal/setData",
      "npm:lodash@3.10.1/internal/baseReduce",
      "npm:lodash@3.10.1/internal/shimKeys",
      "npm:lodash@3.10.1/internal/baseFor",
      "npm:lodash@3.10.1/internal/getLength",
      "npm:lodash@3.10.1/internal/toObject",
      "npm:lodash@3.10.1/internal/baseIsMatch",
      "npm:lodash@3.10.1/internal/getMatchData",
      "npm:lodash@3.10.1/internal/baseGet",
      "npm:lodash@3.10.1/internal/baseIsEqual",
      "npm:lodash@3.10.1/internal/baseSlice",
      "npm:lodash@3.10.1/internal/isKey",
      "npm:lodash@3.10.1/internal/isStrictComparable",
      "npm:lodash@3.10.1/array/last",
      "npm:lodash@3.10.1/internal/toPath",
      "npm:lodash@3.10.1/internal/baseProperty",
      "npm:lodash@3.10.1/internal/basePropertyDeep",
      "npm:object-refs@0.1.1/lib/refs",
      "npm:object-refs@0.1.1/lib/collection",
      "npm:lodash@3.10.1/internal/metaMap",
      "npm:lodash@3.10.1/internal/createCtorWrapper",
      "npm:lodash@3.10.1/internal/arrayCopy",
      "npm:lodash@3.10.1/internal/composeArgs",
      "npm:lodash@3.10.1/internal/composeArgsRight",
      "npm:lodash@3.10.1/internal/isLaziable",
      "npm:lodash@3.10.1/internal/reorder",
      "npm:lodash@3.10.1/utility/noop",
      "npm:lodash@3.10.1/lang/isArguments",
      "npm:lodash@3.10.1/object/keysIn",
      "npm:lodash@3.10.1/internal/createBaseFor",
      "npm:lodash@3.10.1/object/pairs",
      "npm:lodash@3.10.1/internal/baseIsEqualDeep",
      "npm:lodash@3.10.1/internal/baseToString",
      "npm:lodash@3.10.1/internal/baseCreate",
      "npm:lodash@3.10.1/internal/LazyWrapper",
      "npm:lodash@3.10.1/internal/getFuncName",
      "npm:lodash@3.10.1/chain/lodash",
      "npm:lodash@3.10.1/internal/equalArrays",
      "npm:lodash@3.10.1/internal/equalByTag",
      "npm:lodash@3.10.1/internal/equalObjects",
      "npm:lodash@3.10.1/lang/isTypedArray",
      "npm:lodash@3.10.1/internal/baseLodash",
      "npm:lodash@3.10.1/internal/realNames",
      "npm:lodash@3.10.1/internal/LodashWrapper",
      "npm:lodash@3.10.1/internal/wrapperClone",
      "npm:lodash@3.10.1/internal/arraySome",
      "github:systemjs/plugin-css@0.1.20",
      "github:systemjs/plugin-css@0.1.20/css",
      "npm:bpmn-js@0.12.1",
      "npm:bpmn-js@0.12.1/index",
      "npm:bpmn-js@0.12.1/lib/Viewer",
      "npm:bpmn-moddle@0.10.1",
      "npm:lodash@3.10.1/object/omit",
      "npm:lodash@3.10.1/lang/isString",
      "npm:min-dom@0.2.0/lib/domify",
      "npm:min-dom@0.2.0/lib/query",
      "npm:min-dom@0.2.0/lib/remove",
      "npm:bpmn-js@0.12.1/lib/import/Importer",
      "npm:bpmn-js@0.12.1/lib/core/index",
      "npm:diagram-js@0.12.1/lib/features/selection",
      "npm:diagram-js@0.12.1/lib/features/overlays",
      "npm:bpmn-moddle@0.10.1/index",
      "npm:lodash@3.10.1/internal/arrayMap",
      "npm:lodash@3.10.1/internal/baseDifference",
      "npm:lodash@3.10.1/internal/baseFlatten",
      "npm:lodash@3.10.1/internal/pickByArray",
      "npm:lodash@3.10.1/internal/pickByCallback",
      "npm:domify@1.4.0",
      "npm:component-query@0.0.3",
      "npm:bpmn-js@0.12.1/lib/import/BpmnTreeWalker",
      "npm:bpmn-js@0.12.1/lib/import/index",
      "npm:bpmn-js@0.12.1/lib/draw/index",
      "npm:diagram-js@0.12.1/lib/features/selection/index",
      "npm:diagram-js@0.12.1/lib/features/overlays/index",
      "npm:bpmn-moddle@0.10.1/lib/simple",
      "npm:lodash@3.10.1/internal/baseIndexOf",
      "npm:lodash@3.10.1/internal/createCache",
      "npm:lodash@3.10.1/internal/cacheIndexOf",
      "npm:lodash@3.10.1/internal/arrayPush",
      "npm:lodash@3.10.1/internal/baseForIn",
      "npm:component-query@0.0.3/index",
      "npm:domify@1.4.0/index",
      "npm:lodash@3.10.1/collection/filter",
      "npm:lodash@3.10.1/collection/find",
      "npm:bpmn-js@0.12.1/lib/import/Util",
      "npm:bpmn-js@0.12.1/lib/import/BpmnImporter",
      "npm:bpmn-js@0.12.1/lib/draw/PathMap",
      "npm:bpmn-js@0.12.1/lib/draw/BpmnRenderer",
      "npm:diagram-js@0.12.1/lib/features/interaction-events/index",
      "npm:diagram-js@0.12.1/lib/features/outline/index",
      "npm:diagram-js@0.12.1/lib/features/selection/Selection",
      "npm:diagram-js@0.12.1/lib/features/selection/SelectionVisuals",
      "npm:diagram-js@0.12.1/lib/features/selection/SelectionBehavior",
      "npm:diagram-js@0.12.1/lib/features/overlays/Overlays",
      "npm:bpmn-moddle@0.10.1/lib/bpmn-moddle",
      "npm:lodash@3.10.1/internal/indexOfNaN",
      "npm:lodash@3.10.1/internal/SetCache",
      "npm:lodash@3.10.1/internal/arrayFilter",
      "npm:lodash@3.10.1/internal/baseFilter",
      "npm:lodash@3.10.1/internal/createFind",
      "npm:bpmn-js@0.12.1/lib/util/ModelUtil",
      "npm:bpmn-js@0.12.1/lib/util/DiUtil",
      "npm:bpmn-js@0.12.1/lib/util/LabelUtil",
      "npm:lodash@3.10.1/collection/map",
      "npm:lodash@3.10.1/collection/includes",
      "npm:lodash@3.10.1/collection/some",
      "npm:diagram-js@0.12.1/lib/util/Text",
      "npm:diagram-js@0.12.1/lib/features/interaction-events/InteractionEvents",
      "npm:diagram-js@0.12.1/lib/features/outline/Outline",
      "npm:diagram-js@0.12.1/lib/util/Mouse",
      "npm:diagram-js@0.12.1/lib/util/Elements",
      "npm:min-dom@0.2.0/lib/classes",
      "npm:diagram-js@0.12.1/lib/util/IdGenerator",
      "npm:moddle@0.6.1",
      "npm:moddle-xml@0.9.2/lib/writer",
      "npm:moddle-xml@0.9.2/lib/reader",
      "npm:lodash@3.10.1/internal/cachePush",
      "npm:lodash@3.10.1/internal/baseFind",
      "npm:lodash@3.10.1/internal/baseFindIndex",
      "npm:lodash@3.10.1/internal/baseMap",
      "npm:lodash@3.10.1/object/values",
      "npm:lodash@3.10.1/internal/baseSome",
      "npm:lodash@3.10.1/object/merge",
      "npm:lodash@3.10.1/object/pick",
      "npm:min-dom@0.2.0/lib/delegate",
      "npm:diagram-js@0.12.1/lib/util/Event",
      "npm:diagram-js@0.12.1/lib/util/Platform",
      "npm:lodash@3.10.1/collection/groupBy",
      "npm:component-classes@1.2.4",
      "npm:bpmn-moddle@0.10.1/resources/bpmn/json/bpmn.json!github:systemjs/plugin-json@0.1.0",
      "npm:bpmn-moddle@0.10.1/resources/bpmn/json/dc.json!github:systemjs/plugin-json@0.1.0",
      "npm:bpmn-moddle@0.10.1/resources/bpmn/json/bpmndi.json!github:systemjs/plugin-json@0.1.0",
      "npm:bpmn-moddle@0.10.1/resources/bpmn/json/di.json!github:systemjs/plugin-json@0.1.0",
      "npm:moddle@0.6.1/index",
      "npm:moddle@0.6.1/lib/types",
      "npm:moddle@0.6.1/lib/ns",
      "npm:moddle-xml@0.9.2/lib/common",
      "npm:tiny-stack@0.1.0",
      "npm:sax@0.6.1",
      "npm:lodash@3.10.1/function/defer",
      "npm:lodash@3.10.1/internal/baseValues",
      "npm:lodash@3.10.1/internal/baseMerge",
      "npm:component-delegate@0.2.3",
      "npm:lodash@3.10.1/internal/createAggregator",
      "npm:component-classes@1.2.4/index",
      "npm:moddle@0.6.1/lib/moddle",
      "npm:tiny-stack@0.1.0/lib/tiny-stack",
      "npm:sax@0.6.1/lib/sax",
      "npm:lodash@3.10.1/internal/baseDelay",
      "npm:lodash@3.10.1/internal/baseMergeDeep",
      "npm:component-delegate@0.2.3/index",
      "npm:component-indexof@0.0.3",
      "npm:moddle@0.6.1/lib/factory",
      "npm:moddle@0.6.1/lib/registry",
      "npm:moddle@0.6.1/lib/properties",
      "github:jspm/nodelibs-stream@0.1.0",
      "github:jspm/nodelibs-string_decoder@0.1.0",
      "npm:lodash@3.10.1/lang/isPlainObject",
      "npm:lodash@3.10.1/lang/toPlainObject",
      "npm:component-event@0.1.4",
      "npm:component-closest@0.1.4",
      "npm:component-indexof@0.0.3/index",
      "npm:moddle@0.6.1/lib/base",
      "npm:moddle@0.6.1/lib/descriptor-builder",
      "github:jspm/nodelibs-stream@0.1.0/index",
      "github:jspm/nodelibs-string_decoder@0.1.0/index",
      "npm:component-event@0.1.4/index",
      "npm:component-closest@0.1.4/index",
      "npm:stream-browserify@1.0.0",
      "npm:string_decoder@0.10.31",
      "npm:component-matches-selector@0.1.5",
      "npm:string_decoder@0.10.31/index",
      "npm:stream-browserify@1.0.0/index",
      "npm:component-matches-selector@0.1.5/index",
      "github:jspm/nodelibs-events@0.1.1",
      "npm:readable-stream@1.1.13/readable",
      "npm:readable-stream@1.1.13/writable",
      "npm:readable-stream@1.1.13/duplex",
      "npm:readable-stream@1.1.13/transform",
      "npm:readable-stream@1.1.13/passthrough",
      "github:jspm/nodelibs-events@0.1.1/index",
      "npm:readable-stream@1.1.13/lib/_stream_readable",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:readable-stream@1.1.13/lib/_stream_writable",
      "npm:readable-stream@1.1.13/lib/_stream_transform",
      "npm:readable-stream@1.1.13/lib/_stream_passthrough",
      "npm:events@1.0.2",
      "npm:core-util-is@1.0.2",
      "npm:isarray@0.0.1",
      "npm:events@1.0.2/events",
      "npm:core-util-is@1.0.2/lib/util",
      "npm:isarray@0.0.1/index",
      "github:ajaxorg/ace-builds@1.2.2",
      "github:ajaxorg/ace-builds@1.2.2/ace"
    ]
  },
  buildCSS: false,

  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.2",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bpmn-js": "npm:bpmn-js@0.12.1",
    "bpmn-moddle": "npm:bpmn-moddle@0.10.1",
    "buffer": "github:jspm/nodelibs-buffer@0.1.0",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "custom": "./custom",
    "diagram-js": "npm:diagram-js@0.12.1",
    "diagram-js-direct-editing": "npm:diagram-js-direct-editing@0.12.0",
    "didi": "npm:didi@0.0.4",
    "eve": "npm:eve@0.5.0",
    "fetch": "npm:whatwg-fetch@0.7.0",
    "fs": "github:jspm/nodelibs-fs@0.1.2",
    "ids": "npm:ids@0.1.1",
    "inherits": "npm:inherits@2.0.1",
    "jquery": "github:components/jquery@2.1.4",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "lodash": "npm:lodash@3.10.1",
    "material-ui": "npm:material-ui@0.14.0-rc1",
    "min-dom": "npm:min-dom@0.2.0",
    "modeler": "./modeler",
    "object-refs": "npm:object-refs@0.1.1",
    "path": "github:jspm/nodelibs-path@0.1.0",
    "process": "github:jspm/nodelibs-process@0.1.2",
    "radium": "npm:radium@0.15.3",
    "react": "npm:react@0.14.3",
    "react-dom": "npm:react-dom@0.14.3",
    "react-router": "npm:react-router@1.0.1",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.1",
    "reflux": "npm:reflux@0.3.0",
    "systemjs-json": "github:systemjs/plugin-json@0.1.0",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.5"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ansi-green@0.1.1": {
      "ansi-wrap": "npm:ansi-wrap@0.1.0"
    },
    "npm:ansi@0.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.1",
      "micromatch": "npm:micromatch@2.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:are-we-there-yet@1.0.5": {
      "delegates": "npm:delegates@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-diff@2.0.0": {
      "arr-flatten": "npm:arr-flatten@1.0.1"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel@5.8.34": {
      "babel-core": "npm:babel-core@5.8.34",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@1.4.1",
      "commander": "npm:commander@2.9.0",
      "convert-source-map": "npm:convert-source-map@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-readdir-recursive": "npm:fs-readdir-recursive@0.1.2",
      "glob": "npm:glob@5.0.15",
      "lodash": "npm:lodash@3.10.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "output-file-sync": "npm:output-file-sync@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "repl": "github:jspm/nodelibs-repl@0.1.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:binary-extensions@1.4.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bl@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:block-stream@0.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:bpmn-js@0.12.1": {
      "bpmn-moddle": "npm:bpmn-moddle@0.10.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "diagram-js": "npm:diagram-js@0.12.1",
      "diagram-js-direct-editing": "npm:diagram-js-direct-editing@0.12.0",
      "didi": "npm:didi@0.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ids": "npm:ids@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "lodash": "npm:lodash@3.10.1",
      "min-dom": "npm:min-dom@0.2.0",
      "object-refs": "npm:object-refs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bpmn-moddle@0.10.1": {
      "lodash": "npm:lodash@3.10.1",
      "moddle": "npm:moddle@0.6.1",
      "moddle-xml": "npm:moddle-xml@0.9.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:brace-expansion@1.1.2": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.2": {
      "expand-range": "npm:expand-range@1.8.1",
      "lazy-cache": "npm:lazy-cache@0.2.7",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@1.0.1": {
      "caniuse-db": "npm:caniuse-db@1.0.30000377",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.5": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:caniuse-api@1.4.1": {
      "browserslist": "npm:browserslist@1.0.1",
      "caniuse-db": "npm:caniuse-db@1.0.30000377",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash.memoize": "npm:lodash.memoize@2.4.1",
      "lodash.uniq": "npm:lodash.uniq@3.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "shelljs": "npm:shelljs@0.5.3"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chokidar@1.4.1": {
      "anymatch": "npm:anymatch@1.3.0",
      "async-each": "npm:async-each@0.1.6",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.0.6",
      "glob-parent": "npm:glob-parent@2.0.0",
      "inherits": "npm:inherits@2.0.1",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.39",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:component-classes@1.2.4": {
      "component-indexof": "npm:component-indexof@0.0.3"
    },
    "npm:component-closest@0.1.4": {
      "component-matches-selector": "npm:component-matches-selector@0.1.5"
    },
    "npm:component-delegate@0.2.3": {
      "component-closest": "npm:component-closest@0.1.4",
      "component-event": "npm:component-event@0.1.4"
    },
    "npm:component-matches-selector@0.1.5": {
      "component-query": "npm:component-query@0.0.3"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:dashdash@1.10.1": {
      "assert-plus": "npm:assert-plus@0.1.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:deep-extend@0.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diagram-js-direct-editing@0.12.0": {
      "diagram-js": "npm:diagram-js@0.12.1",
      "lodash": "npm:lodash@3.10.1",
      "min-dom": "npm:min-dom@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diagram-js@0.12.1": {
      "didi": "npm:didi@0.1.0",
      "eve": "npm:eve@0.4.2",
      "hammerjs": "npm:hammerjs@2.0.4",
      "inherits": "npm:inherits@2.0.1",
      "lodash": "npm:lodash@3.10.1",
      "min-dom": "npm:min-dom@0.2.0",
      "object-refs": "npm:object-refs@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "snapsvg": "github:Nikku/Snap.svg@0.3.0-browserify"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.5.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:expand-range@1.8.1": {
      "fill-range": "npm:fill-range@2.2.3"
    },
    "npm:extglob@0.3.1": {
      "ansi-green": "npm:ansi-green@0.1.1",
      "is-extglob": "npm:is-extglob@1.0.0",
      "success-symbol": "npm:success-symbol@0.1.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fbjs@0.2.1": {
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.6",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fill-range@2.2.3": {
      "is-number": "npm:is-number@2.1.0",
      "isobject": "npm:isobject@2.0.0",
      "randomatic": "npm:randomatic@1.1.5",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:for-own@0.1.3": {
      "for-in": "npm:for-in@0.1.4"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc3": {
      "async": "npm:async@1.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs-readdir-recursive@0.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fsevents@1.0.6": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.1.0",
      "node-pre-gyp": "npm:node-pre-gyp@0.6.17",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream-ignore@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fstream@1.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "inherits": "npm:inherits@2.0.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.4.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gauge@1.2.2": {
      "ansi": "npm:ansi@0.3.0",
      "has-unicode": "npm:has-unicode@1.0.1",
      "lodash.pad": "npm:lodash.pad@3.1.1",
      "lodash.padleft": "npm:lodash.padleft@3.1.1",
      "lodash.padright": "npm:lodash.padright@3.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:glob-base@0.3.0": {
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hammerjs@2.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:har-validator@2.0.3": {
      "chalk": "npm:chalk@1.1.1",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.12.3",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-unicode@1.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@3.1.2": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:history@1.14.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.0": {
      "assert-plus": "npm:assert-plus@0.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.2.2",
      "sshpk": "npm:sshpk@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ids@0.1.1": {
      "hat": "npm:hat@0.0.3"
    },
    "npm:ids@0.1.2": {
      "hat": "npm:hat@0.0.3"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inline-style-prefixer@0.5.4": {
      "bowser": "npm:bowser@1.0.0",
      "caniuse-api": "npm:caniuse-api@1.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:is-glob@2.0.1": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:is-my-json-valid@2.12.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-number@2.1.0": {
      "kind-of": "npm:kind-of@3.0.2"
    },
    "npm:is-plain-object@2.0.1": {
      "isobject": "npm:isobject@1.0.2"
    },
    "npm:isobject@2.0.0": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jodid25519@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsprim@1.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:kind-of@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.0"
    },
    "npm:lazy-cache@0.2.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basecallback@3.3.1": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.pairs": "npm:lodash.pairs@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseisequal@3.0.7": {
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseuniq@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._createcache@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash._createpadding@3.6.1": {
      "lodash.repeat": "npm:lodash.repeat@3.0.1"
    },
    "npm:lodash.debounce@3.1.1": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.memoize@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash.pad@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.padleft@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.padright@3.1.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
    },
    "npm:lodash.pairs@3.0.1": {
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.repeat@3.0.1": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
    },
    "npm:lodash.throttle@3.0.4": {
      "lodash.debounce": "npm:lodash.debounce@3.1.1"
    },
    "npm:lodash.uniq@3.2.2": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseuniq": "npm:lodash._baseuniq@3.0.3",
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:material-ui@0.14.0-rc1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inline-style-prefixer": "npm:inline-style-prefixer@0.5.4",
      "lodash.throttle": "npm:lodash.throttle@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.3",
      "react-addons-create-fragment": "npm:react-addons-create-fragment@0.14.3",
      "react-addons-pure-render-mixin": "npm:react-addons-pure-render-mixin@0.14.3",
      "react-addons-transition-group": "npm:react-addons-transition-group@0.14.3",
      "react-addons-update": "npm:react-addons-update@0.14.3",
      "react-dom": "npm:react-dom@0.14.3",
      "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:micromatch@2.3.5": {
      "arr-diff": "npm:arr-diff@2.0.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.2",
      "expand-brackets": "npm:expand-brackets@0.1.4",
      "extglob": "npm:extglob@0.3.1",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "kind-of": "npm:kind-of@3.0.2",
      "lazy-cache": "npm:lazy-cache@0.2.7",
      "normalize-path": "npm:normalize-path@2.0.1",
      "object.omit": "npm:object.omit@2.0.0",
      "parse-glob": "npm:parse-glob@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-cache": "npm:regex-cache@0.4.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.20.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.8": {
      "mime-db": "npm:mime-db@1.20.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:min-dom@0.2.0": {
      "component-classes": "npm:component-classes@1.2.4",
      "component-closest": "npm:component-closest@0.1.4",
      "component-delegate": "npm:component-delegate@0.2.3",
      "component-event": "npm:component-event@0.1.4",
      "component-matches-selector": "npm:component-matches-selector@0.1.5",
      "component-query": "npm:component-query@0.0.3",
      "domify": "npm:domify@1.4.0"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:moddle-xml@0.9.2": {
      "lodash": "npm:lodash@3.10.1",
      "moddle": "npm:moddle@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sax": "npm:sax@0.6.1",
      "tiny-stack": "npm:tiny-stack@0.1.0"
    },
    "npm:moddle@0.6.1": {
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:nan@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-pre-gyp@0.6.17": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@3.0.6",
      "npmlog": "npm:npmlog@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.1.5",
      "request": "npm:request@2.67.0",
      "rimraf": "npm:rimraf@2.4.4",
      "semver": "npm:semver@5.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tar": "npm:tar@2.2.1",
      "tar-pack": "npm:tar-pack@3.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nopt@3.0.6": {
      "abbrev": "npm:abbrev@1.0.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:npmlog@2.0.0": {
      "ansi": "npm:ansi@0.3.0",
      "are-we-there-yet": "npm:are-we-there-yet@1.0.5",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@1.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object.omit@2.0.0": {
      "for-own": "npm:for-own@0.1.3",
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:output-file-sync@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-glob@3.0.4": {
      "glob-base": "npm:glob-base@0.3.0",
      "is-dotfile": "npm:is-dotfile@1.0.2",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pinkie-promise@2.0.0": {
      "pinkie": "npm:pinkie@2.0.1"
    },
    "npm:pinkie@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.0": {
      "strict-uri-encode": "npm:strict-uri-encode@1.0.2"
    },
    "npm:radium@0.15.3": {
      "array-find": "npm:array-find@1.0.0",
      "babel": "npm:babel@5.8.34",
      "babel-plugin-flow-comments": "npm:babel-plugin-flow-comments@1.0.9",
      "exenv": "npm:exenv@1.2.0",
      "inline-style-prefixer": "npm:inline-style-prefixer@0.5.4",
      "is-plain-object": "npm:is-plain-object@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.4.4"
    },
    "npm:randomatic@1.1.5": {
      "is-number": "npm:is-number@2.1.0",
      "kind-of": "npm:kind-of@3.0.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rc@1.1.5": {
      "deep-extend": "npm:deep-extend@0.4.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@1.0.4"
    },
    "npm:react-addons-create-fragment@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-addons-pure-render-mixin@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-addons-transition-group@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-addons-update@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-router@1.0.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "history": "npm:history@1.14.0",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-tap-event-plugin@0.2.1": {
      "fbjs": "npm:fbjs@0.2.1",
      "react": "npm:react@0.14.3"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.3": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "minimatch": "npm:minimatch@2.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.10.39": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.12",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:reflux-core@0.3.0": {
      "eventemitter3": "npm:eventemitter3@1.1.1"
    },
    "npm:reflux@0.3.0": {
      "eventemitter3": "npm:eventemitter3@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.3",
      "reflux-core": "npm:reflux-core@0.3.0"
    },
    "npm:regex-cache@0.4.2": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:request@2.67.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "bl": "npm:bl@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.3",
      "hawk": "npm:hawk@3.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.8",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@5.2.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:rimraf@2.4.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sax@0.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:semver@5.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shelljs@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sshpk@1.7.1": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.10.1",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.13.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:success-symbol@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tar-pack@3.1.2": {
      "debug": "npm:debug@0.7.4",
      "fstream": "npm:fstream@1.0.8",
      "fstream-ignore": "npm:fstream-ignore@1.0.3",
      "once": "npm:once@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.4",
      "rimraf": "npm:rimraf@2.4.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tar": "npm:tar@2.2.1",
      "uid-number": "npm:uid-number@0.0.3",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:tough-cookie@2.2.1": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:uid-number@0.0.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
