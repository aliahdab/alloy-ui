YUI.add("aui-boolean-data-editor",function(e,t){var n=e.getClassName("boolean","data","editor"),r=e.getClassName("boolean","data","editor","content"),i=e.getClassName("boolean","data","editor","switch","button");e.BooleanDataEditor=e.Base.create("boolean-data-editor",e.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+n+'">'+'<div><div class="'+r+'"></div>'+'<div class="'+i+'"></div></div></div>',initializer:function(){this._createSwitchButton(),this._uiSetEditedValue(this.get("editedValue")),this._buttonSwitch.on("activatedChange",e.bind(this._afterButtonSwitchActivatedChange,this)),this.after({checkedContentChange:this._afterCheckedContentChange,editedValueChange:this._afterEditedValueChange,innerLabelLeftChange:this._afterInnerLabelLeftChange,innerLabelRightChange:this._afterInnerLabelRightChange,uncheckedContentChange:this._afterUncheckedContentChange})},_afterButtonSwitchActivatedChange:function(e){this.set("editedValue",e.newVal)},_afterCheckedContentChange:function(){this.get("editedValue")&&this._updateContent(this.get("checkedContent"))},_afterEditedValueChange:function(){this._uiSetEditedValue(this.get("editedValue"))},_afterInnerLabelLeftChange:function(e){this._buttonSwitch.set("innerLabelLeft",e.newVal)},_afterInnerLabelRightChange:function(e){this._buttonSwitch.set("innerLabelRight",e.newVal)},_afterUncheckedContentChange:function(){this.get("editedValue")||this._updateContent(this.get("uncheckedContent"))},_createSwitchButton:function(){this._buttonSwitch=(new e.ButtonSwitch({innerLabelLeft:this.get("innerLabelLeft"),innerLabelRight:this.get("innerLabelRight")})).render(this.get("node").one("."+i))},_setContent:function(t){return e.Lang.isString(t)&&(t=e.Node.create(t)),t},_uiSetEditedValue:function(e){this._buttonSwitch.set("activated",e),e?this._updateContent(this.get("checkedContent")):this._updateContent(this.get("uncheckedContent"))},_updateContent:function(e){this.get("node").one("."+r).setHTML(e)},_validateContent:function(t){return e.Lang.isString(t)||e.instanceOf(t,e.Node)}},{ATTRS:{checkedContent:{setter:"_setContent",validator:"_validateContent",value:""},editedValue:{value:!1},innerLabelLeft:{validator:e.Lang.isString,value:""},innerLabelRight:{validator:e.Lang.isString,value:""},originalValue:{value:!1},uncheckedContent:{setter:"_setContent",validator:"_validateContent",value:""}}})},"3.1.0-deprecated.68",{requires:["aui-button-switch","aui-data-editor"]});
