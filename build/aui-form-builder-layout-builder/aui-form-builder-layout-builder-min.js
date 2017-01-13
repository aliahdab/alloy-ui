YUI.add("aui-form-builder-layout-builder",function(e,t){var n=e.getClassName("form","builder","choose","col","move"),r=e.getClassName("form","builder","choose","col","move","target"),i=e.getClassName("form","builder","field"),s=e.getClassName("form","builder","field","move","button"),o=e.getClassName("form","builder","field","move","target"),u=e.getClassName("form","builder","field","move","target","invalid"),a=e.getClassName("form","builder","field","moving"),f=e.getClassName("form","builder","layout"),l=e.getClassName("layout","builder","move","cancel"),c=e.getClassName("layout","builder","move","col","target"),h=e.getClassName("layout","builder","move","row","target"),p=e.getClassName("layout","builder","move","target"),d=e.getClassName("form","builder","remove","row","modal");e.FormBuilderLayoutBuilder=function(){},e.FormBuilderLayoutBuilder.prototype={initializer:function(){this._initRemoveConfirmationModal(),this.after({render:this._afterLayoutBuilderRender,"layout-row:colsChange":this._afterLayoutBuilderColsChange})},destructor:function(){this._layoutBuilder&&this._layoutBuilder.destroy(),this._removeConfirmationModal.destroy()},_addColMoveButton:function(e,t){var n=e.all("."+s);n.setData("node-col",e),n.setData("node-row",t),this._renderEmptyColumns()},_addColMoveTarget:function(e){var t=e.get("node"),n;t.addClass(r),n=t.all("."+o),n.setData("col",e)},_afterLayoutBuilderColsChange:function(){var e=this.getActiveLayout();this._checkLastRow(e)},_afterLayoutBuilderMoveEnd:function(){this._detachCancelMoveRowEvents(),this._enableAddFields(),this._fieldToolbar.set("disabled",!1),this._pageManager.enablePaginations()},_afterLayoutBuilderMoveStart:function(t){t.moveElement instanceof e.LayoutRow&&this._bindMoveRowEvents(),this._disableAddFields(),this._fieldToolbar.set("disabled",!0),this._pageManager.disablePaginations()},_afterLayoutBuilderRender:function(){var t;this._layoutBuilder=new e.LayoutBuilder({addColMoveButton:e.bind(this._addColMoveButton,this),addColMoveTarget:e.bind(this._addColMoveTarget,this),clickColMoveTarget:e.bind(this._clickColMoveTarget,this),clickRemoveRow:e.bind(this._clickRemoveRow,this),container:this.get("contentBox").one("."+f),layout:this.getActiveLayout(),removeColMoveButtons:e.bind(this._removeColMoveButtons,this),removeColMoveTargets:e.bind(this._removeColMoveTargets,this),strings:this.get("strings")}),this._layoutBuilder.after("layout-builder:moveStart",e.bind(this._afterLayoutBuilderMoveStart,this)),this._layoutBuilder.after("layout-builder:moveEnd",e.bind(this._afterLayoutBuilderMoveEnd,this)),t=this._layoutBuilder.get("chooseColMoveTarget"),this._layoutBuilder.set("chooseColMoveTarget",e.bind(this._chooseColMoveTarget,this,t)),this._eventHandles.push(this._fieldToolbar.on("onToolbarHasAddedToField",e.bind(this._onFormBuilderToolbarHasAddedToField,this))),this._removeLayoutCutColButtons()},_bindMoveRowEvents:function(){this._cancelMoveRowsHandles=[e.one(e.config.doc).on("click",e.bind(this._onClickOutsideMoveRowTarget,this))]},_checkLastRow:function(e){var t,n,r,i;n=this._getLastRow(e),t=n.get("cols"),t.length>1||!this._isColumnEmpty(t[0])?this._createLastRow(e):(i=e.get("rows"),r=i[i.length-2],r&&(t=r.get("cols"),t.length===1&&this._isColumnEmpty(t[0])&&e.removeRow(r))),this._getLastRow(e).set("removable",!1)},_chooseColMoveTarget:function(t,n,r){var s=n.ancestor("."+i),f=this.getActiveLayout(),l;this._fieldBeingMoved=s.getData("field-instance"),this._fieldListBeingMoved=r.get("value"),this._fieldBeingMovedCol=r,s.addClass(a),s.all("."+o).addClass(u),l=s.previous("."+o),l&&l.addClass(u),l=s.next("."+o),l&&l.addClass(u),t(n,r),this._addColMoveTarget(r),f.normalizeColsHeight(f.get("node").all(".row")),this._selectFirstValidMoveTarget(),this._cancelMoveFieldHandles=[e.one(e.config.doc).on("click",e.bind(this._onClickOutsideMoveColTarget,this)),e.one(e.config.doc).on("key",e.bind(this._onEscKeyPressMoveTarget,this),"down:27")]},_clickColMoveTarget:function(t){var n=this.getActiveLayout(),r=this._fieldBeingMoved.get("content").ancestor("."+i),s,o=t.getData("nested-field-parent"),u=this._fieldToolbar.getItem("."+l);u&&u.removeClass(l),r?r.getData("field-instance").removeNestedField(this._fieldBeingMoved):(s=this.getFieldRow(this._fieldBeingMoved),this._fieldListBeingMoved.removeField(this._fieldBeingMoved)),this._enableAddFields(),o?this._addNestedField(o,this._fieldBeingMoved,t.getData("nested-field-index")):t.getData("col").get("value").addField(this._fieldBeingMoved,t.getData("field-list-index")),this._removeLayoutCutColButtons(),n.normalizeColsHeight(new e.NodeList(this.getFieldRow(this._fieldBeingMoved))),this._detachCancelMoveFieldEvents()},_clickRemoveRow:function(e){var t=e.get("cols"),n,r;for(r=0;r<t.length;r++){n=t[r].get("value");if(n&&n.get("fields").length)return this._removeConfirmationModal.show(),this._removingRow=e,!1}return!0},_createLastRow:function(t){var n=new e.LayoutRow,r=t.get("rows");t.addRow(r.length,n)},_detachCancelMoveRowEvents:function(){(new e.EventHandle(this._cancelMoveRowsHandles)).detach()},_detachCancelMoveFieldEvents:function(){(new e.EventHandle(this._cancelMoveFieldHandles)).detach()},_disableAddFields:function(){this.getActiveLayout().get("rows").forEach(function(e){e.get("cols").forEach(function(e){e.get("value").set("enableAddFields",!1)})})},_enableAddFields:function(){this.getActiveLayout().get("rows").forEach(function(e){e.get("cols").forEach(function(e){e.get("value").set("enableAddFields",!0)})})},_forceRemoveRow:function(){this.getActiveLayout().removeRow(this._removingRow),this._removeConfirmationModal.hide()},_getLastRow:function(e){var t=e.get("rows");return t[t.length-1]},_initRemoveConfirmationModal:function(){var t=(new e.Modal({bodyContent:this.get("strings").removeRowModal,centered:!0,cssClass:d,headerContent:this.get("strings").modalHeader,modal:!0,resizable:!1,visible:!1,zIndex:4})).render();t.addToolbar([{cssClass:"btn-primary",label:this.get("strings").confirmRemoveRow,on:{click:e.bind(this._forceRemoveRow
,this)},render:!0},{label:this.get("strings").cancelRemoveRow,on:{click:function(){t.hide()}},render:!0}]),this._removeConfirmationModal=t},_isColumnEmpty:function(e){return!e.get("value")||!e.get("value").get("fields").length},_onClickOutsideMoveColTarget:function(e){var t=e.target,n=this._fieldToolbar.getItem("."+l);n&&n.removeClass(l);if(!t.hasClass(p)||!t.hasClass(c))this._layoutBuilder.cancelMove(),this._detachCancelMoveFieldEvents()},_onClickOutsideMoveRowTarget:function(e){var t=e.target;t.hasClass(h)||this._layoutBuilder.cancelMove()},_onEscKeyPressMoveTarget:function(){var e=this._fieldToolbar.getItem("."+l);e&&e.removeClass(l),this._layoutBuilder.cancelMove(),this._detachCancelMoveFieldEvents()},_onFormBuilderToolbarHasAddedToField:function(e){this._setMoveButtonData(e.colNode)},_removeColMoveButtons:function(){this.get("contentBox").all("."+n).removeClass(n)},_removeColMoveTargets:function(){var e=this.get("contentBox"),t=this.getActiveLayout();e.all("."+r).removeClass(r),e.all("."+a).removeClass(a),e.all("."+u).removeClass(u),t.normalizeColsHeight(t.get("node").all(".row"))},_removeLayoutCutColButtons:function(){this._layoutBuilder.get("removeColMoveButtons")()},_selectFirstValidMoveTarget:function(){var t=e.one("."+o+":not(."+u+")");t.focus()},_setMoveButtonData:function(e){var t=this._fieldToolbar.getItem(".layout-builder-move-cut-button");t.setData("layout-row",e.ancestor(".row").getData("layout-row")),t.setData("node-col",e)}}},"3.1.0-deprecated.4",{requires:["aui-classnamemanager","aui-layout-builder","aui-modal","base","node-base"],skinnable:!0});
