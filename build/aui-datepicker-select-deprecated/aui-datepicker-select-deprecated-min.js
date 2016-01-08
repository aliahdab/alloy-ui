YUI.add("aui-datepicker-select-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isString,s=n.isBoolean,o=n.isValue,u=n.isNumber,a=n.isDate,f=n.toInt,l=e.DataType,c=l.DateMath,h=function(t){return e.one(t)},p=function(){return e.Node.create(Et)},d=function(){return e.Node.create(St)},v=e.config.doc,m="appendOrder",g="",y="body",b="boundingBox",w="button",E="buttonNode",S="buttonitem",x="calendar",T="change",N="clearfix",C="content",k="contentBox",L="data-auiComponentID",A="datepicker",O="day",M="dayNode",_="dayNodeName",D="disabled",P="display",H=".",B="helper",j="keypress",F="locale",I="maxDate",q="minDate",R="month",U="monthNode",z="monthNodeName",t="name",W="nullableDay",X="nullableMonth",V="nullableYear",$="option",J="populateDay",K="populateMonth",Q="populateYear",G="select",Y="selectionMode",Z="selectWrapperNode",et="selected",tt="selectedDates",nt=" ",rt="srcNode",it="trigger",st="wrapper",ot="year",ut="yearNode",at="yearNodeName",ft="yearRange",lt=e.getClassName,ct=lt(S),ht=lt(A),pt=lt(A,w,st),dt=lt(A,O),vt=lt(A,P),mt=lt(A,P,C),gt=lt(A,R),yt=lt(A,G,st),bt=lt(A,ot),wt=lt(B,N),Et="<button />",St="<select></select>",xt="<option></option>",Tt='<div class="'+pt+'"></div>',Nt="<div class="+yt+"></div>",Ct=e.Component.create({NAME:A,ATTRS:{appendOrder:{validator:r,value:["m","d","y"]},buttonNode:{setter:h,valueFn:p},calendar:{setter:"_setCalendar"},dayNode:{setter:h,valueFn:d},dayNodeName:{valueFn:function(){return this.get(M).get(t)||O}},locale:{validator:"isString",value:"en"},monthNode:{setter:h,valueFn:d},monthNodeName:{valueFn:function(){return this.get(U).get(t)||R}},nullableDay:{value:!1},nullableMonth:{value:!1},nullableYear:{value:!1},populateDay:{value:!0},populateMonth:{value:!0},populateYear:{value:!0},selectWrapperNode:{valueFn:function(){return e.Node.create(Nt)}},trigger:{setter:function(t){return t instanceof e.NodeList?t:n.isString(t)?e.all(t):new e.NodeList(t)},valueFn:function(){return e.NodeList.create(Tt)}},yearNode:{setter:h,valueFn:d},yearNodeName:{valueFn:function(){return this.get(ut).get(t)||ot}},yearRange:{validator:r,valueFn:function(){var e=(new Date).getFullYear();return[e-10,e+10]}}},HTML_PARSER:{buttonNode:H+ct,dayNode:H+dt,monthNode:H+gt,selectWrapperNode:H+yt,trigger:H+pt,yearNode:H+bt},EXTENDS:e.Component,prototype:{bindUI:function(){var e=this;e._bindSelectEvents(),e.after("calendar:selectionChange",e._afterSelectionChange)},destructor:function(){var e=this;e.datePicker.destroy()},renderUI:function(){var e=this;e._renderElements(),e._renderTriggerButton(),e._renderCalendar()},syncUI:function(){var e=this;e._populateSelects(),e._syncSelectsUI()},getCurrentDate:function(e,t,n){var r=this,i=r._normalizeYearMonth(),s=i.day+f(n),o=i.month+f(t),u=i.year+f(e),a=r.getDaysInMonth(i.year,o);return s>a&&(s=a),c.getDate(u,o,s)},_afterSelectionChange:function(e){var t=this,n=e.newSelection;n.length&&t._syncSelectsUI(n[n.length-1])},_bindSelectEvents:function(){var e=this,t=e.get(Z).all(G);t.on(T,e._onSelectChange,e),t.on(j,e._onSelectChange,e)},_getAppendOrder:function(){var e=this,t=e.get(m),n=e.get("id"),r={d:e.get(M),m:e.get(U),y:e.get(ut)},i=r[t[0]],s=r[t[1]],o=r[t[2]];return i.setAttribute(L,n),s.setAttribute(L,n),o.setAttribute(L,n),[i,s,o]},_getDaysInMonth:function(e,t){var n=this,r=n._normalizeYearMonth(e,t);return c.getDaysInMonth(r.year,r.month)},_getLocaleMap:function(){var e=this;return l.Date.Locale[e.get(F)]},_normalizeYearMonth:function(e,t,n){var r=this,i=r.calendar.get(tt),s=i.length?i[0]:new Date;return o(n)||(n=s.getDate()),o(t)||(t=s.getMonth()),o(e)||(e=s.getFullYear()),{year:e,month:t,day:n}},_onSelectChange:function(e){var t=this,n=e.currentTarget||e.target,r=n.test(H+gt),i=t.get(M).val(),s=t.get(U).val(),o=t.get(ut).val(),u=i>-1,a=s>-1,f=o>-1;if(a&&f){var l=t._getDaysInMonth(o,s);i>l&&(i=l)}var c=new Date(o,s,i);!u||!a||!f?t.calendar._clearSelection():t.calendar.set(tt,c),r&&(t._uiSetCurrentMonth(),u&&t._selectCurrentDay(c))},_populateDays:function(){var e=this;e.get(J)&&e._populateSelect(e.get(M),1,e._getDaysInMonth(),null,null,e.get(W))},_populateMonths:function(){var e=this,t=e._getLocaleMap(),n=t.B;e.get(K)&&e._populateSelect(e.get(U),0,n.length-1,n,null,e.get(X))},_populateSelect:function(t,n,r,i,s,o){var u=0,a=n,f=e.Node.getDOMNode(t);t.empty(),i=i||[],s=s||[],o&&(f.options[0]=new Option(g,-1),u++);while(a<=r){var l=s[a]||a,c=i[a]||a;f.options[u]=new Option(c,a),u++,a++}},_populateSelects:function(){var e=this;e._populateDays(),e._populateMonths(),e._populateYears();var t=e.get(U).all($),n=e.get(ut).all($),r=t.size()-1,i=n.size()-1,s=t.item(0).val(),o=n.item(0).val(),u=t.item(r).val(),a=n.item(i).val(),f=e._getDaysInMonth(a,u),l=new Date(o,s,1),c=new Date(a,u,f);e.calendar.set(I,c),e.calendar.set(q,l)},_populateYears:function(){var e=this,t=e.get(ft);e.get(Q)&&e._populateSelect(e.get(ut),t[0],t[1],null,null,e.get(V))},_renderCalendar:function(){var t=this,n={calendar:t.get(x),trigger:t.get(it).item(0)},r=(new e.DatePicker(n)).render();r.addTarget(t),t.datePicker=r,t.calendar=r.calendar},_renderElements:function(){var n=this,r=n.get(b),i=n.get(k),s=n.get(M),o=n.get(U),u=n.get(ut);s.addClass(dt),o.addClass(gt),u.addClass(bt),r.addClass(vt),r.addClass(wt),i.addClass(mt),o.set(t,n.get(z)),u.set(t,n.get(at)),s.set(t,n.get(_));if(!o.inDoc(e.config.doc)){var a=n.get(Z),f=n._getAppendOrder(),l=e.one(v.createTextNode(nt));a.append(f[0]),a.append(l.clone()),a.append(f[1]),a.append(l),a.append(f[2]),i.append(a)}},_renderTriggerButton:function(){var t=this,n=t.get(it).item(0);t._buttonItem=new e.ButtonItem({boundingBox:t.get(E),icon:x}),t.get(k).append(n),n.setAttribute(L,t.get("id")),n.test(H+pt)&&t._buttonItem.render(n)},_selectCurrentDay:function(e){var t=this;t.get(M).val(String(e.getDate()))},_selectCurrentMonth:function(e){var t=this;t.get(U).val(String(e.getMonth())),t._uiSetCurrentMonth()},_selectCurrentYear:function(e){var t=this;t.get(ut).val(String(e.getFullYear()))},_setCalendar:function(t){var n=this;return e.merge({selectedDates
:new Date},t||{})},_syncSelectsUI:function(e){var t=this,n=t.calendar.get(tt);e=e||(n.length?n[0]:new Date),t._selectCurrentMonth(e),t._selectCurrentDay(e),t._selectCurrentYear(e)},_uiSetCurrentMonth:function(e){var t=this;t._populateDays()},_uiSetDisabled:function(e){var t=this;Ct.superclass._uiSetDisabled.apply(t,arguments),t.get(M).set("disabled",e),t.get(U).set("disabled",e),t.get(ut).set("disabled",e),t.datePicker.set(D,e),t._buttonItem.set(D,e),t._buttonItem.StateInteraction.set(D,e)}}});e.DatePickerSelect=Ct},"3.0.3-deprecated.7",{requires:["aui-datepicker-base-deprecated","aui-button-item-deprecated"],skinnable:!0});
