YUI.add("aui-form-field-required",function(e,t){var n=e.getClassName("form","field","required"),r=e.getClassName("form","field","title");e.FormFieldRequired=function(){},e.FormFieldRequired.prototype={TPL_REQUIRED:'<span class="'+n+'">*</span>',initializer:function(){this._uiSetRequired(this.get("required")),this.after({requiredChange:this._afterRequiredChange})},_afterRequiredChange:function(){this._uiSetRequired(this.get("required"))},_uiSetRequired:function(e){var t=this.get("content").one("."+r);e?t.append(this.TPL_REQUIRED):t.one("."+n)&&t.one("."+n).remove(!0)}},e.FormFieldRequired.ATTRS={required:{validator:e.Lang.isBoolean,value:!1}}},"3.1.0-deprecated.4",{requires:["aui-form-field"]});
