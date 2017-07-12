if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/json-parse-shim/json-parse-shim.js']) {
   __coverage__['build/json-parse-shim/json-parse-shim.js'] = {"path":"build/json-parse-shim/json-parse-shim.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":46}}},"2":{"name":"(anonymous_2)","line":104,"loc":{"start":{"line":104,"column":23},"end":{"line":104,"column":36}}},"3":{"name":"(anonymous_3)","line":121,"loc":{"start":{"line":121,"column":14},"end":{"line":121,"column":39}}},"4":{"name":"(anonymous_4)","line":122,"loc":{"start":{"line":122,"column":19},"end":{"line":122,"column":36}}},"5":{"name":"(anonymous_5)","line":155,"loc":{"start":{"line":155,"column":15},"end":{"line":155,"column":36}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":183,"column":46}},"2":{"start":{"line":51,"column":0},"end":{"line":140,"column":6}},"3":{"start":{"line":105,"column":8},"end":{"line":105,"column":74}},"4":{"start":{"line":122,"column":8},"end":{"line":137,"column":10}},"5":{"start":{"line":123,"column":12},"end":{"line":123,"column":35}},"6":{"start":{"line":124,"column":12},"end":{"line":135,"column":13}},"7":{"start":{"line":125,"column":16},"end":{"line":134,"column":17}},"8":{"start":{"line":126,"column":20},"end":{"line":133,"column":21}},"9":{"start":{"line":127,"column":24},"end":{"line":127,"column":43}},"10":{"start":{"line":128,"column":24},"end":{"line":132,"column":25}},"11":{"start":{"line":129,"column":28},"end":{"line":129,"column":44}},"12":{"start":{"line":131,"column":28},"end":{"line":131,"column":41}},"13":{"start":{"line":136,"column":12},"end":{"line":136,"column":45}},"14":{"start":{"line":139,"column":8},"end":{"line":139,"column":73}},"15":{"start":{"line":155,"column":0},"end":{"line":176,"column":2}},"16":{"start":{"line":156,"column":4},"end":{"line":158,"column":5}},"17":{"start":{"line":157,"column":8},"end":{"line":157,"column":16}},"18":{"start":{"line":163,"column":4},"end":{"line":163,"column":57}},"19":{"start":{"line":166,"column":4},"end":{"line":173,"column":5}},"20":{"start":{"line":172,"column":8},"end":{"line":172,"column":53}},"21":{"start":{"line":175,"column":4},"end":{"line":175,"column":40}},"22":{"start":{"line":180,"column":0},"end":{"line":180,"column":27}}},"branchMap":{"1":{"line":124,"type":"if","locations":[{"start":{"line":124,"column":12},"end":{"line":124,"column":12}},{"start":{"line":124,"column":12},"end":{"line":124,"column":12}}]},"2":{"line":124,"type":"binary-expr","locations":[{"start":{"line":124,"column":16},"end":{"line":124,"column":21}},{"start":{"line":124,"column":25},"end":{"line":124,"column":50}}]},"3":{"line":126,"type":"if","locations":[{"start":{"line":126,"column":20},"end":{"line":126,"column":20}},{"start":{"line":126,"column":20},"end":{"line":126,"column":20}}]},"4":{"line":128,"type":"if","locations":[{"start":{"line":128,"column":24},"end":{"line":128,"column":24}},{"start":{"line":128,"column":24},"end":{"line":128,"column":24}}]},"5":{"line":139,"type":"cond-expr","locations":[{"start":{"line":139,"column":47},"end":{"line":139,"column":65}},{"start":{"line":139,"column":68},"end":{"line":139,"column":72}}]},"6":{"line":156,"type":"if","locations":[{"start":{"line":156,"column":4},"end":{"line":156,"column":4}},{"start":{"line":156,"column":4},"end":{"line":156,"column":4}}]},"7":{"line":166,"type":"if","locations":[{"start":{"line":166,"column":4},"end":{"line":166,"column":4}},{"start":{"line":166,"column":4},"end":{"line":166,"column":4}}]}},"code":["(function () { YUI.add('json-parse-shim', function (Y, NAME) {","","/**"," * <p>The JSON module adds support for serializing JavaScript objects into"," * JSON strings and parsing JavaScript objects from strings in JSON format.</p>"," *"," * <p>The JSON namespace is added to your YUI instance including static methods"," * Y.JSON.parse(..) and Y.JSON.stringify(..).</p>"," *"," * <p>The functionality and method signatures follow the ECMAScript 5"," * specification.  In browsers with native JSON support, the native"," * implementation is used.</p>"," *"," * <p>The <code>json</code> module is a rollup of <code>json-parse</code> and"," * <code>json-stringify</code>.</p>"," *"," * <p>As their names suggest, <code>json-parse</code> adds support for parsing"," * JSON data (Y.JSON.parse) and <code>json-stringify</code> for serializing"," * JavaScript data into JSON strings (Y.JSON.stringify).  You may choose to"," * include either of the submodules individually if you don't need the"," * complementary functionality, or include the rollup for both.</p>"," *"," * @module json"," * @main json"," * @class JSON"," * @static"," */","","/**"," * Provides Y.JSON.parse method to accept JSON strings and return native"," * JavaScript objects."," *"," * @module json"," * @submodule json-parse"," * @for JSON"," * @static"," */","","","    /**","     * Replace certain Unicode characters that JavaScript may handle incorrectly","     * during eval--either by deleting them or treating them as line","     * endings--with escape sequences.","     * IMPORTANT NOTE: This regex will be used to modify the input if a match is","     * found.","     *","     * @property _UNICODE_EXCEPTIONS","     * @type {RegExp}","     * @private","     */","var _UNICODE_EXCEPTIONS = /[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,","","","    /**","     * First step in the safety evaluation.  Regex used to replace all escape","     * sequences (i.e. \"\\\\\", etc) with '@' characters (a non-JSON character).","     *","     * @property _ESCAPES","     * @type {RegExp}","     * @private","     */","    _ESCAPES = /\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g,","","    /**","     * Second step in the safety evaluation.  Regex used to replace all simple","     * values with ']' characters.","     *","     * @property _VALUES","     * @type {RegExp}","     * @private","     */","    _VALUES  = /\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,","","    /**","     * Third step in the safety evaluation.  Regex used to remove all open","     * square brackets following a colon, comma, or at the beginning of the","     * string.","     *","     * @property _BRACKETS","     * @type {RegExp}","     * @private","     */","    _BRACKETS = /(?:^|:|,)(?:\\s*\\[)+/g,","","    /**","     * Final step in the safety evaluation.  Regex used to test the string left","     * after all previous replacements for invalid characters.","     *","     * @property _UNSAFE","     * @type {RegExp}","     * @private","     */","    _UNSAFE = /[^\\],:{}\\s]/,","","    /**","     * Replaces specific unicode characters with their appropriate \\unnnn","     * format. Some browsers ignore certain characters during eval.","     *","     * @method escapeException","     * @param c {String} Unicode character","     * @return {String} the \\unnnn escapement of the character","     * @private","     */","    _escapeException = function (c) {","        return '\\\\u'+('0000'+(+(c.charCodeAt(0))).toString(16)).slice(-4);","    },","","    /**","     * Traverses nested objects, applying a reviver function to each (key,value)","     * from the scope if the key:value's containing object.  The value returned","     * from the function will replace the original value in the key:value pair.","     * If the value returned is undefined, the key will be omitted from the","     * returned object.","     *","     * @method _revive","     * @param data {MIXED} Any JavaScript data","     * @param reviver {Function} filter or mutation function","     * @return {MIXED} The results of the filtered data","     * @private","     */","    _revive = function (data, reviver) {","        var walk = function (o,key) {","            var k,v,value = o[key];","            if (value && typeof value === 'object') {","                for (k in value) {","                    if (value.hasOwnProperty(k)) {","                        v = walk(value, k);","                        if (v === undefined) {","                            delete value[k];","                        } else {","                            value[k] = v;","                        }","                    }","                }","            }","            return reviver.call(o,key,value);","        };","","        return typeof reviver === 'function' ? walk({'':data},'') : data;","    };","","/**"," * Parse a JSON string, returning the native JavaScript representation."," *"," * @param s {string} JSON string data"," * @param reviver {function} (optional) function(k,v) passed each key value"," *          pair of object literals, allowing pruning or altering values"," * @return {MIXED} the native JavaScript representation of the JSON string"," * @throws SyntaxError"," * @method parse"," * @static"," */","// JavaScript implementation in lieu of native browser support.  Based on","// the json2.js library from http://json.org","Y.JSON.parse = function (s,reviver) {","    if (typeof s !== 'string') {","        s += '';","    }","","    // Replace certain Unicode characters that are otherwise handled","    // incorrectly by some browser implementations.","    // NOTE: This modifies the input if such characters are found!","    s = s.replace(_UNICODE_EXCEPTIONS, _escapeException);","","    // Test for any remaining invalid characters","    if (!_UNSAFE.test(s.replace(_ESCAPES,'@').","                        replace(_VALUES,']').","                        replace(_BRACKETS,''))) {","","        // Eval the text into a JavaScript data structure, apply any","        // reviver function, and return","        return _revive(eval('(' + s + ')'), reviver);","    }","","    throw new SyntaxError('JSON.parse');","};","","// Property available for testing if the implementation being used","// is native or a shim","Y.JSON.parse.isShim = true;","","","}, 'patched-v3.18.1', {\"requires\": [\"json-parse\"]});","","}());"]};
}
var __cov_Dl9yF0Bjg9Ae7qtDfrrGiQ = __coverage__['build/json-parse-shim/json-parse-shim.js'];
__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['1']++;YUI.add('json-parse-shim',function(Y,NAME){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.f['1']++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['2']++;var _UNICODE_EXCEPTIONS=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_ESCAPES=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,_VALUES=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,_BRACKETS=/(?:^|:|,)(?:\s*\[)+/g,_UNSAFE=/[^\],:{}\s]/,_escapeException=function(c){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.f['2']++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['3']++;return'\\u'+('0000'+(+c.charCodeAt(0)).toString(16)).slice(-4);},_revive=function(data,reviver){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.f['3']++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['4']++;var walk=function(o,key){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.f['4']++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['5']++;var k,v,value=o[key];__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['6']++;if((__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['2'][0]++,value)&&(__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['2'][1]++,typeof value==='object')){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['1'][0]++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['7']++;for(k in value){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['8']++;if(value.hasOwnProperty(k)){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['3'][0]++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['9']++;v=walk(value,k);__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['10']++;if(v===undefined){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['4'][0]++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['11']++;delete value[k];}else{__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['4'][1]++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['12']++;value[k]=v;}}else{__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['3'][1]++;}}}else{__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['1'][1]++;}__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['13']++;return reviver.call(o,key,value);};__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['14']++;return typeof reviver==='function'?(__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['5'][0]++,walk({'':data},'')):(__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['5'][1]++,data);};__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['15']++;Y.JSON.parse=function(s,reviver){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.f['5']++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['16']++;if(typeof s!=='string'){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['6'][0]++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['17']++;s+='';}else{__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['6'][1]++;}__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['18']++;s=s.replace(_UNICODE_EXCEPTIONS,_escapeException);__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['19']++;if(!_UNSAFE.test(s.replace(_ESCAPES,'@').replace(_VALUES,']').replace(_BRACKETS,''))){__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['7'][0]++;__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['20']++;return _revive(eval('('+s+')'),reviver);}else{__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.b['7'][1]++;}__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['21']++;throw new SyntaxError('JSON.parse');};__cov_Dl9yF0Bjg9Ae7qtDfrrGiQ.s['22']++;Y.JSON.parse.isShim=true;},'patched-v3.18.1',{'requires':['json-parse']});
