YUI.add("aui-audio",function(e,t){var n=e.Lang,r=e.UA,i=e.config.doc,s=e.Object.owns,o=e.getClassName,u=o("audio","node"),a=/\.([^\.]+)$/,f=e.Component.create({NAME:"audio",ATTRS:{fixedAttributes:{value:{},validator:n.isObject},oggUrl:{value:"",validator:n.isString},render:{value:!0,validator:n.isBoolean},role:{value:"application",validator:n.isString},type:{value:"mp3",validator:n.isString},url:{value:"",validator:n.isString},useARIA:{value:!0,validator:n.isBoolean,writeOnce:"initOnly"}},BIND_UI_ATTRS:["url","oggUrl","fixedAttributes"],SYNC_UI_ATTRS:["url","oggUrl"],prototype:{renderUI:function(){var t=this;t._renderAudioTask=e.debounce(t._renderAudio,1,t),t._renderAudio(!t.get("oggUrl")),t._audio.on("play",e.bind("_onPlay",t)),t._audio.on("pause",e.bind("_onPause",t))},bindUI:function(){var e=this;e.publish("audioReady",{fireOnce:!0}),e.publish("play"),e.publish("pause")},syncUI:function(){var t=this;t.get("useARIA")&&t.plug(e.Plugin.Aria,{roleName:t.get("role")})},load:function(){var e=this;e._audio.hasMethod("load")&&e._audio.invoke("load")},pause:function(){var e=this;e._audio.hasMethod("pause")&&e._audio.invoke("pause")},play:function(){var e=this;e._audio.hasMethod("play")&&e._audio.invoke("play")},_onPause:function(e){this.fire("play",{cropType:e.type})},_onPlay:function(e){this.fire("pause",{cropType:e.type})},_createSource:function(t){var n=new e.Node(i.createElement("source"));return n.attr("type",t),n},_renderAudio:function(t){var r=this,i=f.TPL_AUDIO,s=n.sub(i,[e.guid()]),o=e.Node.create(s);return r.get("contentBox").append(o),r._audio=o,o},_uiSetOggUrl:function(e){var t=this;if(r.gecko||r.opera){var n=t._audio,i=t._usingAudio();if(!e&&i||e&&!i)n.remove(!0),n=t._renderAudio(!e);if(e){var s=t._sourceOgg;s||(s=t._createSource("audio/ogg"),n.append(s),t._sourceOgg=s),s.attr("src",e)}}},_uiSetUrl:function(e){var t=this,n=t.get("oggUrl"),i=t._audio,s=t._sourceMp3;if(r.gecko&&!t._usingAudio())s&&(s.remove(!0),t._sourceMp3=null);else if(i||!n)s||(s=t._createSource("audio/mp3"),i.append(s),t._sourceMp3=s),s.attr("src",e)},_usingAudio:function(){var e=this;return e._audio.get("nodeName").toLowerCase()==="audio"}}});f.TPL_AUDIO='<audio id="{0}" controls="controls" class="'+u+'"></audio>',e.Audio=f},"3.1.0-deprecated.46",{requires:["aui-aria","aui-node","aui-component","node-event-html5","querystring-stringify-simple"],skinnable:!0});
