if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-field-required/aui-form-field-required.js']) {
   __coverage__['build/aui-form-field-required/aui-form-field-required.js'] = {"path":"build/aui-form-field-required/aui-form-field-required.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":54}}},"2":{"name":"(anonymous_2)","line":21,"loc":{"start":{"line":21,"column":22},"end":{"line":21,"column":33}}},"3":{"name":"(anonymous_3)","line":32,"loc":{"start":{"line":32,"column":17},"end":{"line":32,"column":28}}},"4":{"name":"(anonymous_4)","line":46,"loc":{"start":{"line":46,"column":26},"end":{"line":46,"column":37}}},"5":{"name":"(anonymous_5)","line":57,"loc":{"start":{"line":57,"column":20},"end":{"line":57,"column":39}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":93,"column":59}},"2":{"start":{"line":10,"column":0},"end":{"line":11,"column":63}},"3":{"start":{"line":21,"column":0},"end":{"line":21,"column":36}},"4":{"start":{"line":23,"column":0},"end":{"line":68,"column":2}},"5":{"start":{"line":33,"column":8},"end":{"line":33,"column":50}},"6":{"start":{"line":35,"column":8},"end":{"line":37,"column":11}},"7":{"start":{"line":47,"column":8},"end":{"line":47,"column":50}},"8":{"start":{"line":58,"column":8},"end":{"line":58,"column":71}},"9":{"start":{"line":60,"column":8},"end":{"line":66,"column":9}},"10":{"start":{"line":61,"column":12},"end":{"line":61,"column":48}},"11":{"start":{"line":63,"column":12},"end":{"line":65,"column":13}},"12":{"start":{"line":64,"column":16},"end":{"line":64,"column":69}},"13":{"start":{"line":79,"column":0},"end":{"line":91,"column":2}}},"branchMap":{"1":{"line":60,"type":"if","locations":[{"start":{"line":60,"column":8},"end":{"line":60,"column":8}},{"start":{"line":60,"column":8},"end":{"line":60,"column":8}}]},"2":{"line":63,"type":"if","locations":[{"start":{"line":63,"column":12},"end":{"line":63,"column":12}},{"start":{"line":63,"column":12},"end":{"line":63,"column":12}}]}},"code":["(function () { YUI.add('aui-form-field-required', function (A, NAME) {","","/**"," * The Form Builder Field Base Component"," *"," * @module aui-form-field"," * @submodule aui-form-field-required"," */","","var CSS_FIELD_REQUIRED = A.getClassName('form', 'field', 'required'),","    CSS_FIELD_TITLE = A.getClassName('form', 'field', 'title');","","/**"," * An augmentation class which adds the required funcionality to form fields."," *"," * @class A.FormFieldRequired"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.FormFieldRequired = function() {};","","A.FormFieldRequired.prototype = {","    TPL_REQUIRED: '<span class=\"' + CSS_FIELD_REQUIRED + '\">*</span>',","","    /**","     * Constructor for the `A.FormFieldRequired` component. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this._uiSetRequired(this.get('required'));","","        this.after({","            requiredChange: this._afterRequiredChange","        });","    },","","    /**","     * Fired after the `required` attribute is set.","     *","     * @method _afterRequiredChange","     * @protected","     */","    _afterRequiredChange: function() {","        this._uiSetRequired(this.get('required'));","    },","","    /**","     * Updates the ui according to the value of the `required` attribute.","     *","     * @method _uiSetRequired","     * @param {String} required","     * @protected","     */","    _uiSetRequired: function(required) {","        var titleNode = this.get('content').one('.' + CSS_FIELD_TITLE);","","        if (required) {","            titleNode.append(this.TPL_REQUIRED);","        } else {","            if (titleNode.one('.' + CSS_FIELD_REQUIRED)) {","                titleNode.one('.' + CSS_FIELD_REQUIRED).remove(true);","            }","        }","    }","};","","","/**"," * Static property used to define the default attribute configuration"," * for the `A.FormFieldRequired`."," *"," * @property ATTRS"," * @type Object"," * @static"," */","A.FormFieldRequired.ATTRS = {","    /**","     * Flag indicating if this field is required.","     *","     * @attribute required","     * @default false","     * @type {Boolean}","     */","    required: {","        validator: A.Lang.isBoolean,","        value: false","    }","};","","}, '3.1.0-deprecated.4', {\"requires\": [\"aui-form-field\"]});","","}());"]};
}
var __cov_0mFI3J52xdms5K$OAOly_g = __coverage__['build/aui-form-field-required/aui-form-field-required.js'];
__cov_0mFI3J52xdms5K$OAOly_g.s['1']++;YUI.add('aui-form-field-required',function(A,NAME){__cov_0mFI3J52xdms5K$OAOly_g.f['1']++;__cov_0mFI3J52xdms5K$OAOly_g.s['2']++;var CSS_FIELD_REQUIRED=A.getClassName('form','field','required'),CSS_FIELD_TITLE=A.getClassName('form','field','title');__cov_0mFI3J52xdms5K$OAOly_g.s['3']++;A.FormFieldRequired=function(){__cov_0mFI3J52xdms5K$OAOly_g.f['2']++;};__cov_0mFI3J52xdms5K$OAOly_g.s['4']++;A.FormFieldRequired.prototype={TPL_REQUIRED:'<span class="'+CSS_FIELD_REQUIRED+'">*</span>',initializer:function(){__cov_0mFI3J52xdms5K$OAOly_g.f['3']++;__cov_0mFI3J52xdms5K$OAOly_g.s['5']++;this._uiSetRequired(this.get('required'));__cov_0mFI3J52xdms5K$OAOly_g.s['6']++;this.after({requiredChange:this._afterRequiredChange});},_afterRequiredChange:function(){__cov_0mFI3J52xdms5K$OAOly_g.f['4']++;__cov_0mFI3J52xdms5K$OAOly_g.s['7']++;this._uiSetRequired(this.get('required'));},_uiSetRequired:function(required){__cov_0mFI3J52xdms5K$OAOly_g.f['5']++;__cov_0mFI3J52xdms5K$OAOly_g.s['8']++;var titleNode=this.get('content').one('.'+CSS_FIELD_TITLE);__cov_0mFI3J52xdms5K$OAOly_g.s['9']++;if(required){__cov_0mFI3J52xdms5K$OAOly_g.b['1'][0]++;__cov_0mFI3J52xdms5K$OAOly_g.s['10']++;titleNode.append(this.TPL_REQUIRED);}else{__cov_0mFI3J52xdms5K$OAOly_g.b['1'][1]++;__cov_0mFI3J52xdms5K$OAOly_g.s['11']++;if(titleNode.one('.'+CSS_FIELD_REQUIRED)){__cov_0mFI3J52xdms5K$OAOly_g.b['2'][0]++;__cov_0mFI3J52xdms5K$OAOly_g.s['12']++;titleNode.one('.'+CSS_FIELD_REQUIRED).remove(true);}else{__cov_0mFI3J52xdms5K$OAOly_g.b['2'][1]++;}}}};__cov_0mFI3J52xdms5K$OAOly_g.s['13']++;A.FormFieldRequired.ATTRS={required:{validator:A.Lang.isBoolean,value:false}};},'3.1.0-deprecated.4',{'requires':['aui-form-field']});
