YUI.add("aui-button-core",function(e,t){var n={BUTTON:e.getClassName("btn"),BUTTON_DEFAULT:e.getClassName("btn","default"),BUTTON_GROUP:e.getClassName("btn","group"),DISABLED:e.getClassName("disabled"),LABEL:e.getClassName("label"),PRIMARY:e.getClassName("btn","primary"),SELECTED:e.getClassName("active"),TOGGLE:e.getClassName("togglebtn")},r=function(e){e&&e.domType&&this._domTypeValidator(e.domType)&&this._setEarlyButtonDomType(e.domType)};r.ATTRS={cssClass:{validator:e.Lang.isString,value:""},discardDefaultButtonCssClasses:{validator:e.Lang.isBoolean,value:!1,writeOnce:!0},domType:{validator:"_domTypeValidator",writeOnce:!0},icon:{},iconElement:{valueFn:function(){return e.Node.create(this.ICON_TEMPLATE)}},iconAlign:{validator:e.Lang.isString,value:"left"}},r.HTML_PARSER={iconElement:"span"},r.getTypedButtonTemplate=function(t,n){return e.Lang.sub(t,{type:' type="'+n+'"'})},r.prototype={ICON_TEMPLATE:"<span></span>",TEMPLATE:"<button{type}></button>",initializer:function(){this.before(this.renderButtonExtUI,this,"renderUI"),this.after(this.syncButtonExtUI,this,"syncUI"),this.after({iconChange:this._afterIconChange,iconAlignChange:this._afterIconAlignChange})},renderButtonExtUI:function(){var e=this.get("cssClass");this.get("discardDefaultButtonCssClasses")||(e=[e,n.BUTTON_DEFAULT,n.BUTTON].join(" "),this.set("cssClass",e))},syncButtonExtUI:function(){this._uiSetIcon(this.get("icon")),this._setButtonRole()},_afterIconAlignChange:function(e){this._uiSetIconAlign(e.newVal)},_afterIconChange:function(e){this._uiSetIcon(e.newVal)},_domTypeValidator:function(e){return e.toLowerCase()==="button"||e.toLowerCase()==="submit"},_setButtonRole:function(){this.get("boundingBox").setAttribute("role","button")},_setEarlyButtonDomType:function(t){this.BOUNDING_TEMPLATE=e.ButtonExt.getTypedButtonTemplate(r.prototype.TEMPLATE,t)},_uiSetIcon:function(e){e&&(this.get("iconElement").set("className",e),this._uiSetIconAlign(this.get("iconAlign")))},_uiSetIconAlign:function(t){var n=this.getNode().one(e.ButtonExt.HTML_PARSER.iconElement);n||(n=this.get("iconElement")),e.Button.syncIconUI(this.get("boundingBox"),n,t)}},e.ButtonExt=r,e.ButtonCore.CLASS_NAMES=n;var i=e.Button;i.NAME="aui-button",i.CSS_PREFIX="aui-button",i.CLASS_NAMES=n,e.Button=e.Base.create(i.NAME,i,[r,e.WidgetCssClass,e.WidgetToggle],{},{getWidgetLazyConstructorFromNodeData:function(e){var t=e.getData("widgetConstructor")||{};return t.boundingBox=e,t.render=!0,t},hasWidgetLazyConstructorData:function(e){return e.getData("widgetConstructor")!==undefined},setWidgetLazyConstructorNodeData:function(e,t){e.setData("widgetConstructor",t)},syncIconUI:function(t,n,r){var i=0,s=e.config.doc.createTextNode(" ");r==="right"&&(i=null),t.insert(s,i),t.insert(n,i)}});var s=e.ToggleButton;s.NAME="togglebtn",s.CSS_PREFIX=n.TOGGLE,s.CLASS_NAMES=n,e.ToggleButton=e.Base.create(s.NAME,s,[r,e.WidgetCssClass],{},{});var o=e.ButtonGroup;o.NAME="btngroup",o.CSS_PREFIX=n.BUTTON_GROUP,o.CLASS_NAMES=n,e.mix(o.prototype,{CONTENT_TEMPLATE:null,initializer:function(){this.after("selectionChange",this._afterSelectionChange)},renderUI:function(){var t=this.get("boundingBox"),n=this.get("type");this.getButtons().each(function(t){!t.button&&!e.instanceOf(e.Widget.getByNode(t),e.Button)&&(t.addClass(e.ButtonCore.CLASS_NAMES.BUTTON_DEFAULT),t.setAttribute("role","option"),e.Button.hasWidgetLazyConstructorData(t)?(new e.Button(e.Button.getWidgetLazyConstructorFromNodeData(t)),e.Button.setWidgetLazyConstructorNodeData(t,null)):t.plug(e.Plugin.Button))}),t.setAttrs({"aria-multiselectable":n==="checkbox"?!0:!1,role:"listbox"}),this.syncAriaSelected(this.getButtons())},item:function(t){var n,r;return r=this.getButtons().item(t),n=e.Widget.getByNode(r),e.instanceOf(n,i)?n:r},select:function(e){return this.toggleSelect(e,!0)},syncAriaSelected:function(t){var n;t.each(function(t){n=t.hasClass(e.ButtonGroup.CLASS_NAMES.SELECTED),t.setAttribute("aria-selected",n)})},toggleSelect:function(t,n){var r=this.getButtons(),i=this,s=this.get("type");e.Lang.isUndefined(t)&&(t=r.getDOMNodes()),e.Lang.isArray(t)||(t=e.Array(t)),e.Array.each(t,function(t){e.Lang.isNumber(t)&&(t=r.item(t)),t=e.one(t);if(s==="checkbox")if(t.hasClass(e.ButtonGroup.CLASS_NAMES.SELECTED)){if(n===!0)return}else if(n===!1)return;i._handleClick({target:t})})},unselect:function(e){return this.toggleSelect(e,!1)},_afterSelectionChange:function(){this.syncAriaSelected(this.getButtons())}},!0)},"3.1.0-deprecated.68",{requires:["button","button-group","button-plugin","aui-component","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0});
