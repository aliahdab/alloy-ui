YUI.add("aui-arraysort",function(e,t){var n=e.ArraySort;e.mix(n,{compareIgnoreWhiteSpace:function(e,t,r,i){var s;return i=i||n.compare,e===""&&t===""?s=0:e===""?s=1:t===""?s=-1:s=i.apply(this,arguments),s},stableSort:function(e,t){var n,r=e.length;for(n=0;n<r;n++)e[n]={index:n,value:e[n]};e.sort(function(n,r){var i=t.call(e,n.value,r.value);return i===0?n.index-r.index:i});for(n=0;n<r;n++)e[n]=e[n].value}})},"3.0.3-deprecated.84",{requires:["arraysort"]});
