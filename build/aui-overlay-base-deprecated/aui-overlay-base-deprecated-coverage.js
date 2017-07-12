if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-overlay-base-deprecated/aui-overlay-base-deprecated.js']) {
   __coverage__['build/aui-overlay-base-deprecated/aui-overlay-base-deprecated.js'] = {"path":"build/aui-overlay-base-deprecated/aui-overlay-base-deprecated.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":58}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":47,"column":3}},"2":{"start":{"line":27,"column":0},"end":{"line":35,"column":3}}},"branchMap":{},"code":["(function () { YUI.add('aui-overlay-base-deprecated', function (A, NAME) {","","/**"," * Provides a basic Overlay widget, with Standard Module content support. The Overlay widget"," * provides Page XY positioning support, alignment and centering support along with basic"," * stackable support (z-index and shimming)."," *"," * @module aui-overlay"," * @submodule aui-overlay-base"," */","","/**"," * A basic Overlay Widget, which can be positioned based on Page XY co-ordinates and is stackable (z-index support)."," * It also provides alignment and centering support and uses a standard module format for it's content, with header,"," * body and footer section support."," *"," * @class OverlayBase"," * @constructor"," * @extends Component"," * @uses WidgetStdMod"," * @uses WidgetPosition"," * @uses WidgetStack"," * @uses WidgetPositionAlign"," * @uses WidgetPositionConstrain"," * @param {Object} object The user configuration for the instance."," */","A.OverlayBase = A.Component.create({","    NAME: 'overlay',","    ATTRS: {","        hideClass: {","            value: false","        }","    },","    AUGMENTS: [A.WidgetPosition, A.WidgetStack, A.WidgetPositionAlign, A.WidgetPositionConstrain, A.WidgetStdMod]","});","","","}, '3.1.0-deprecated.16', {","    \"requires\": [","        \"widget-position\",","        \"widget-stack\",","        \"widget-position-align\",","        \"widget-position-constrain\",","        \"widget-stdmod\",","        \"aui-component\"","    ]","});","","}());"]};
}
var __cov_V2S_GBcLMikKPDOtaqqDNg = __coverage__['build/aui-overlay-base-deprecated/aui-overlay-base-deprecated.js'];
__cov_V2S_GBcLMikKPDOtaqqDNg.s['1']++;YUI.add('aui-overlay-base-deprecated',function(A,NAME){__cov_V2S_GBcLMikKPDOtaqqDNg.f['1']++;__cov_V2S_GBcLMikKPDOtaqqDNg.s['2']++;A.OverlayBase=A.Component.create({NAME:'overlay',ATTRS:{hideClass:{value:false}},AUGMENTS:[A.WidgetPosition,A.WidgetStack,A.WidgetPositionAlign,A.WidgetPositionConstrain,A.WidgetStdMod]});},'3.1.0-deprecated.16',{'requires':['widget-position','widget-stack','widget-position-align','widget-position-constrain','widget-stdmod','aui-component']});
