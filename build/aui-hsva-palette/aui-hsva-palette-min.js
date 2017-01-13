YUI.add("aui-hsva-palette",function(e,t){var n=e.Lang,r=e.Color,i=e.Widget,s=e.getClassName,o=0,u=255,a=360,f=100,l=100,c=8,h=s("hsv-container-alpha"),p=s("hsv-alpha-canvas"),d=s("hsv-alpha-slider-container"),v=s("hsv-alpha-slider-wrapper"),m=s("hsv-alpha-thumb"),g=s("hsv-alpha-image"),y=/^([a-f0-9]{6}|[a-f0-9]{8}|[a-f0-9]{3})$/i,b=e.Base.create("hsva-palette",e.HSVPalette,[],{CSS_VALUE_RIGHT_SIDE_CONTAINER:"col-sm-8 col-xs-8",TPL_ALPHA_CANVAS:'<span class="'+p+'"></span>',TPL_ALPHA_SLIDER_WRAPPER:'<div class="col-sm-2 col-xs-2 '+v+'"><div class="'+d+'"></div></div>',TPL_ALPHA_THUMB:'<span class="'+m+'"><span class="'+g+'"></span></span>',initializer:function(){var e=this;e.set("fieldValidator.hex",y),e.after("selectedChange",e._updateAlphaValue,e),e.onceAfter("render",e._updateAlphaValue,e)},_afterHexInputChange:function(e){var t=this,n=e.hexColor,r=n.substr(6,2),s=parseInt(r,16);t._alphaSlider.set("value",u-s,{src:i.UI_SRC}),t._alphaSliderContainer.setStyle("backgroundColor",n),t._resultView.setStyle("opacity",s/u),t._setFieldValue(t._aContainer,s)},_calculateRGBArray:function(e,t,n){var i=this,s;return s=255-i._alphaSlider.get("value"),r.fromArray([e,t,n,s],"RGBA")},_calculateRGBColor:function(t,n,r){var i=this,s=255-i._alphaSlider.get("value");return e.UA.ie===8?i._calculateRGB(t,n,r,s):i._calculateRGBA(t,n,r,s)},_calculateRGBA:function(e,t,i,s){var o="rgb(255, 0, 0, 0)",u,c;if(e!==a||n.toInt(t)!==f||n.toInt(i)!==l)u="hsva("+(e===a?a-1:e)+", "+t+"%, "+i+"%, "+s+")",o=r.toRGBA(u),n.toInt(s)===0&&(c=r.toArray(o),c[3]="0",o=r.fromArray(c,"RGBA"));return o},_convertColor:function(e,t,n){var i,s;return s=n==="hex",t==="hex"&&(e="#"+e),s?n="Hex":n=(n+"a").toUpperCase(),i=r["to"+n](e),s&&(i=i.substr(1)),i},_getContainerClassName:function(){var t=this,n;return n=e.HSVAPalette.superclass._getContainerClassName.call(t),n+=" "+h,n},_getHexValue:function(e,t){var n,r;return n=parseInt(t[3],10).toString(16),n.length===1&&(n="0"+n),r=e+n,r.substring(1)},_getHSVArray:function(e){return r.toArray(e,"HSVA")},_createAlphaSlider:function(){var t=this,n,r,i;r=t.get("contentBox"),i=new e.Slider({axis:"y",min:o,max:u}),i.RAIL_TEMPLATE=t.TPL_ALPHA_CANVAS,i.THUMB_TEMPLATE=t.TPL_ALPHA_THUMB,i.render(t._alphaSliderContainer),n=r.one("."+g).get("offsetHeight"),i.set("length",t._alphaSliderContainer.get("offsetHeight")+n/2),i.on(["slideStart","railMouseDown"],t._setHSContainerXY,t),i.on("valueChange",t._onAlphaChange,t),t._alphaSlider=i},_createSliders:function(){var t=this;e.HSVAPalette.superclass._createSliders.call(t),t._createAlphaSlider()},_getHexContainerConfig:function(){var e=this;return{label:e.get("strings").hex,maxlength:c,suffix:"-hex",type:"hex",unit:"",value:"ff0000ff"}},_normalizeHexValue:function(e){var t="";return e.length===3?t="fffff":e.length===6&&(t="ff"),e+=t},_onAlphaChange:function(e){var t=this,n,s,o,a,f,c,h,p,d,v;e.src!==i.UI_SRC&&(n=e.newVal,t._resultView.setStyle("opacity",1-n/u),s=t._colorThumb.getXY(),o=s[0]-t._hsContainerXY[0]+t._colorThumbGutter,a=s[1]-t._hsContainerXY[1]+t._colorThumbGutter,f=t._calculateHue(o),c=t._calculateSaturation(a),h=l-t._valueSlider.get("value"),p=t._calculateRGBA(f,c,h,u-n),d=r.toArray(p),v=t._getHexValue(r.toHex(p),d),t._setFieldValue(t._outputContainer,v),t._setFieldValue(t._aContainer,u-n),t._setFieldValue(t._rContainer,d[0]),t._setFieldValue(t._gContainer,d[1]),t._setFieldValue(t._bContainer,d[2]))},_renderAlphaSliderContainer:function(){var t=this,n;n=e.Node.create(this.TPL_ALPHA_SLIDER_WRAPPER),t._valueSliderWrapper.insert(n,"after"),t._alphaSliderContainer=n.one("."+d)},_renderFields:function(){var t=this;e.HSVAPalette.superclass._renderFields.apply(t,arguments),t._aContainer=t._renderField(t._labelValueHSVContainer,{label:t.get("strings").a,max:255,maxlength:3,min:0,suffix:"-a",type:"alpha",unit:"",value:u})},_renderViewContainerContent:function(){var t=this;e.HSVAPalette.superclass._renderViewContainerContent.call(t),t._renderAlphaSliderContainer()},_updateAlphaValue:function(){var e=this._getFieldValue(this._aContainer),t="#"+this.get("selected").substr(0,6);this._alphaSlider.set("value",u-e,{src:i.UI_SRC}),this._alphaSliderContainer.setStyle("backgroundColor",t),this._resultView.setStyle("opacity",e/u)}},{NAME:"hsva-palette",NS:"hsva-palette"});e.HSVAPalette=b},"3.1.0-deprecated.4",{requires:["aui-hsv-palette"],skinnable:!0});
