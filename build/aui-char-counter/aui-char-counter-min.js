YUI.add("aui-char-counter",function(e,t){var n=e.Lang,r=n.isNumber;e.Node.DOM_EVENTS.compositionend=1,e.Node.DOM_EVENTS.compositionstart=1;var i=e.Component.create({NAME:"char-counter",ATTRS:{counter:{setter:e.one},input:{setter:e.one},maxLength:{lazyAdd:!1,setter:function(e){return this._setMaxLength(e)},validator:r,value:Infinity}},EXTENDS:e.Base,prototype:{_eventHandles:null,_inputComposition:!1,initializer:function(){var e=this;e.bindUI(),e.checkLength()},bindUI:function(){var t=this,n=t.get("input");t.publish("maxLength"),t.after("maxLengthChange",t.checkLength),n&&(t._eventHandles=[n.on("compositionend",e.bind(t._onInputCompositionEnd,t)),n.on("compositionstart",e.bind(t._onInputCompositionStart,t)),n.on("input",e.bind(t._onInputChange,t))])},syncUI:function(){var e=this,t=e.get("counter");if(t){var n=e.get("input").val(),r=e.get("maxLength")-e._getNormalizedLength(n);t.html(r)}},destroy:function(){var t=this;(new e.EventHandle(t._eventHandles)).detach()},checkLength:function(){var e=this,t=e.get("input"),n=!1;if(t){var r=e.get("maxLength"),i=t.val(),s=e._getNormalizedLength(i);n=!0;if(s>r){var o=t.get("scrollTop"),u=t.get("scrollLeft"),a=r-(s-i.length);i=i.substring(0,a),t.val(i),t.set("scrollTop",o),t.set("scrollLeft",u),n=i}e.syncUI(),s>=r&&e.fire("maxLength")}return n},_getNormalizedLength:function(e){var t=e.match(/(\r\n|\n|\r)/g),n=0;return t!==null&&(n=t.length),e.length+n},_onInputChange:function(){var e=this;e._inputComposition||e.checkLength()},_onInputCompositionEnd:function(){var e=this;e._inputComposition=!1,e.checkLength()},_onInputCompositionStart:function(){var e=this;e._inputComposition=!0},_setMaxLength:function(e){var t=this,n=t.get("input");return n&&e<Infinity&&n.set("maxLength",e),e}}});e.CharCounter=i},"3.1.0-deprecated.4",{requires:["aui-node","aui-event-input","aui-component"]});
