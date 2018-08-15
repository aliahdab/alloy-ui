if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-field-text/aui-form-field-text.js']) {
   __coverage__['build/aui-form-field-text/aui-form-field-text.js'] = {"path":"build/aui-form-field-text/aui-form-field-text.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":34,"loc":{"start":{"line":34,"column":17},"end":{"line":34,"column":28}}},"3":{"name":"(anonymous_3)","line":49,"loc":{"start":{"line":49,"column":14},"end":{"line":49,"column":25}}},"4":{"name":"(anonymous_4)","line":65,"loc":{"start":{"line":65,"column":29},"end":{"line":65,"column":40}}},"5":{"name":"(anonymous_5)","line":75,"loc":{"start":{"line":75,"column":22},"end":{"line":75,"column":33}}},"6":{"name":"(anonymous_6)","line":86,"loc":{"start":{"line":86,"column":23},"end":{"line":86,"column":45}}},"7":{"name":"(anonymous_7)","line":99,"loc":{"start":{"line":99,"column":16},"end":{"line":99,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":164,"column":88}},"2":{"start":{"line":9,"column":0},"end":{"line":14,"column":94}},"3":{"start":{"line":25,"column":0},"end":{"line":161,"column":3}},"4":{"start":{"line":35,"column":8},"end":{"line":35,"column":56}},"5":{"start":{"line":37,"column":8},"end":{"line":40,"column":11}},"6":{"start":{"line":50,"column":8},"end":{"line":50,"column":42}},"7":{"start":{"line":52,"column":8},"end":{"line":52,"column":55}},"8":{"start":{"line":54,"column":8},"end":{"line":54,"column":41}},"9":{"start":{"line":56,"column":8},"end":{"line":56,"column":42}},"10":{"start":{"line":66,"column":8},"end":{"line":66,"column":56}},"11":{"start":{"line":76,"column":8},"end":{"line":76,"column":42}},"12":{"start":{"line":87,"column":8},"end":{"line":87,"column":76}},"13":{"start":{"line":89,"column":8},"end":{"line":89,"column":59}},"14":{"start":{"line":100,"column":8},"end":{"line":100,"column":80}},"15":{"start":{"line":102,"column":8},"end":{"line":102,"column":28}},"16":{"start":{"line":104,"column":8},"end":{"line":111,"column":9}},"17":{"start":{"line":106,"column":16},"end":{"line":106,"column":52}},"18":{"start":{"line":107,"column":16},"end":{"line":107,"column":22}},"19":{"start":{"line":109,"column":16},"end":{"line":109,"column":50}},"20":{"start":{"line":110,"column":16},"end":{"line":110,"column":22}},"21":{"start":{"line":113,"column":8},"end":{"line":113,"column":56}}},"branchMap":{"1":{"line":104,"type":"switch","locations":[{"start":{"line":105,"column":12},"end":{"line":107,"column":22}},{"start":{"line":108,"column":12},"end":{"line":110,"column":22}}]}},"code":["(function () { YUI.add('aui-form-field-text', function (A, NAME) {","","/**"," * The Form Field Text Component"," *"," * @module aui-form-field-text"," */","","var CSS_FIELD_TEXT = A.getClassName('form', 'builder', 'field', 'text'),","    CSS_FIELD_TEXT_CONTENT = A.getClassName('form', 'builder', 'field', 'text', 'content'),","    CSS_FIELD_TEXT_INPUT = A.getClassName('form', 'builder', 'field', 'text', 'input'),","","    TPL_MULTILINE = '<textarea class=\"' + CSS_FIELD_TEXT_INPUT + ' form-control\" rows=\"3\">',","    TPL_SINGLE_LINE = '<input type=\"text\" class=\"' + CSS_FIELD_TEXT_INPUT + ' form-control\">';","","/**"," * A base class for `A.FormFieldText`."," *"," * @class A.FormFieldText"," * @extends A.FormField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.FormFieldText = A.Base.create('form-field-text', A.FormField, [A.FormFieldRequired], {","    TPL_FIELD_CONTENT: '<div class=\"' + CSS_FIELD_TEXT_CONTENT + '\"></div>',","","    /**","     * Constructor for the `A.FormFieldText`. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this._uiSetPlaceholder(this.get('placeholder'));","","        this.after({","            placeholderChange: this._afterPlaceholderChange,","            typeChange: this._afterTypeChange","        });","    },","","    /**","     * Create the DOM structure for the `A.FormFieldText`. Lifecycle.","     *","     * @method renderUI","     * @protected","     */","    renderUI: function() {","        var content = this.get('content');","","        A.FormFieldText.superclass.renderUI.call(this);","","        content.addClass(CSS_FIELD_TEXT);","","        this._uiSetType(this.get('type'));","    },","","    /**","     * Fired after the `placeholder` attribute is set.","     *","     * @method _afterPlaceholderChange","     * @protected","     */","    _afterPlaceholderChange: function() {","        this._uiSetPlaceholder(this.get('placeholder'));","    },","","    /**","     * Fired after the `type` attribute is set.","     *","     * @method _afterTypeChange","     * @protected","     */","    _afterTypeChange: function() {","        this._uiSetType(this.get('type'));","    },","","    /**","     * Updates the ui according to the value of the `placeholder` attribute.","     *","     * @method _uiSetPlaceholder","     * @param {String} placeholder","     * @protected","     */","    _uiSetPlaceholder: function(placeholder) {","        var inputNode = this.get('content').one('.' + CSS_FIELD_TEXT_INPUT);","","        inputNode.setAttribute('placeholder', placeholder);","    },","","    /**","     * Updates the ui according to the value of the `type` attribute.","     *","     * @method _uiSetType","     * @param {String} type","     * @protected","     */","    _uiSetType: function(type) {","        var contentNode = this.get('content').one('.' + CSS_FIELD_TEXT_CONTENT);","","        contentNode.empty();","","        switch (type) {","            case 0:","                contentNode.append(TPL_SINGLE_LINE);","                break;","            case 1:","                contentNode.append(TPL_MULTILINE);","                break;","        }","","        this._uiSetPlaceholder(this.get('placeholder'));","    }","}, {","    /**","     * Static property used to define the default attribute configuration","     * for the `A.FormFieldText`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * Id to reference form data after a form is submitted.","         *","         * @attribute name","         * @default ''","         * @type String","         */","        name: {","            validator: A.Lang.isString,","            value: ''","        },","","        /**","         * Predefined value to text input.","         *","         * @attribute placeholder","         * @default ''","         * @type String","         */","        placeholder: {","            validator: A.Lang.isString,","            value: ''","        },","","        /**","         * Determine the type of text input.","         *","         * @attribute type","         * @default 0","         * @type {Number}","         */","        type: {","            validator: A.Lang.isNumber,","            value: 0","        }","    }","});","","","}, '3.1.0-deprecated.46', {\"requires\": [\"aui-form-field-required\"], \"skinnable\": true});","","}());"]};
}
var __cov_5QUEQD8vAJOfZlpEKW65kw = __coverage__['build/aui-form-field-text/aui-form-field-text.js'];
__cov_5QUEQD8vAJOfZlpEKW65kw.s['1']++;YUI.add('aui-form-field-text',function(A,NAME){__cov_5QUEQD8vAJOfZlpEKW65kw.f['1']++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['2']++;var CSS_FIELD_TEXT=A.getClassName('form','builder','field','text'),CSS_FIELD_TEXT_CONTENT=A.getClassName('form','builder','field','text','content'),CSS_FIELD_TEXT_INPUT=A.getClassName('form','builder','field','text','input'),TPL_MULTILINE='<textarea class="'+CSS_FIELD_TEXT_INPUT+' form-control" rows="3">',TPL_SINGLE_LINE='<input type="text" class="'+CSS_FIELD_TEXT_INPUT+' form-control">';__cov_5QUEQD8vAJOfZlpEKW65kw.s['3']++;A.FormFieldText=A.Base.create('form-field-text',A.FormField,[A.FormFieldRequired],{TPL_FIELD_CONTENT:'<div class="'+CSS_FIELD_TEXT_CONTENT+'"></div>',initializer:function(){__cov_5QUEQD8vAJOfZlpEKW65kw.f['2']++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['4']++;this._uiSetPlaceholder(this.get('placeholder'));__cov_5QUEQD8vAJOfZlpEKW65kw.s['5']++;this.after({placeholderChange:this._afterPlaceholderChange,typeChange:this._afterTypeChange});},renderUI:function(){__cov_5QUEQD8vAJOfZlpEKW65kw.f['3']++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['6']++;var content=this.get('content');__cov_5QUEQD8vAJOfZlpEKW65kw.s['7']++;A.FormFieldText.superclass.renderUI.call(this);__cov_5QUEQD8vAJOfZlpEKW65kw.s['8']++;content.addClass(CSS_FIELD_TEXT);__cov_5QUEQD8vAJOfZlpEKW65kw.s['9']++;this._uiSetType(this.get('type'));},_afterPlaceholderChange:function(){__cov_5QUEQD8vAJOfZlpEKW65kw.f['4']++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['10']++;this._uiSetPlaceholder(this.get('placeholder'));},_afterTypeChange:function(){__cov_5QUEQD8vAJOfZlpEKW65kw.f['5']++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['11']++;this._uiSetType(this.get('type'));},_uiSetPlaceholder:function(placeholder){__cov_5QUEQD8vAJOfZlpEKW65kw.f['6']++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['12']++;var inputNode=this.get('content').one('.'+CSS_FIELD_TEXT_INPUT);__cov_5QUEQD8vAJOfZlpEKW65kw.s['13']++;inputNode.setAttribute('placeholder',placeholder);},_uiSetType:function(type){__cov_5QUEQD8vAJOfZlpEKW65kw.f['7']++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['14']++;var contentNode=this.get('content').one('.'+CSS_FIELD_TEXT_CONTENT);__cov_5QUEQD8vAJOfZlpEKW65kw.s['15']++;contentNode.empty();__cov_5QUEQD8vAJOfZlpEKW65kw.s['16']++;switch(type){case 0:__cov_5QUEQD8vAJOfZlpEKW65kw.b['1'][0]++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['17']++;contentNode.append(TPL_SINGLE_LINE);__cov_5QUEQD8vAJOfZlpEKW65kw.s['18']++;break;case 1:__cov_5QUEQD8vAJOfZlpEKW65kw.b['1'][1]++;__cov_5QUEQD8vAJOfZlpEKW65kw.s['19']++;contentNode.append(TPL_MULTILINE);__cov_5QUEQD8vAJOfZlpEKW65kw.s['20']++;break;}__cov_5QUEQD8vAJOfZlpEKW65kw.s['21']++;this._uiSetPlaceholder(this.get('placeholder'));}},{ATTRS:{name:{validator:A.Lang.isString,value:''},placeholder:{validator:A.Lang.isString,value:''},type:{validator:A.Lang.isNumber,value:0}}});},'3.1.0-deprecated.46',{'requires':['aui-form-field-required'],'skinnable':true});
