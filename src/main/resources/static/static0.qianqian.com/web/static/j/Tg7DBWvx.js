(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){var n=require("jquery");module.exports=e(n)}else{e(window.jQuery||window.Zepto||window.$)}})(function(e){"use strict";e.fn.serializeJSON=function(n){var r,t,i,a,s,u,l,o,f,p,c;r=e.serializeJSON;t=this;i=r.setupOpts(n);a=t.serializeArray();r.readCheckboxUncheckedValues(a,i,t);s={};e.each(a,function(e,n){u=n.name;l=n.value;o=r.extractTypeAndNameWithNoType(u);f=o.nameWithNoType;p=o.type;if(!p)p=r.tryToFindTypeFromDataAttr(u,t);r.validateType(u,p,i);if(p!=="skip"){c=r.splitInputNameIntoKeysArray(f);l=r.parseValue(l,u,p,i);r.deepSet(s,c,l,i)}});return s};e.serializeJSON={defaultOptions:{checkboxUncheckedValue:undefined,parseNumbers:false,parseBooleans:false,parseNulls:false,parseAll:false,parseWithFunction:null,customTypes:{},defaultTypes:{string:function(e){return String(e)},number:function(e){return Number(e)},"boolean":function(e){var n=["false","null","undefined","","0"];return n.indexOf(e)===-1},"null":function(e){var n=["false","null","undefined","","0"];return n.indexOf(e)===-1?e:null},array:function(e){return JSON.parse(e)},object:function(e){return JSON.parse(e)},auto:function(n){return e.serializeJSON.parseValue(n,null,null,{parseNumbers:true,parseBooleans:true,parseNulls:true})},skip:null},useIntKeysAsArrayIndex:false},setupOpts:function(n){var r,t,i,a,s,u;u=e.serializeJSON;if(n==null){n={}}i=u.defaultOptions||{};t=["checkboxUncheckedValue","parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","customTypes","defaultTypes","useIntKeysAsArrayIndex"];for(r in n){if(t.indexOf(r)===-1){throw new Error("serializeJSON ERROR: invalid option '"+r+"'. Please use one of "+t.join(", "))}}a=function(e){return n[e]!==false&&n[e]!==""&&(n[e]||i[e])};s=a("parseAll");return{checkboxUncheckedValue:a("checkboxUncheckedValue"),parseNumbers:s||a("parseNumbers"),parseBooleans:s||a("parseBooleans"),parseNulls:s||a("parseNulls"),parseWithFunction:a("parseWithFunction"),typeFunctions:e.extend({},a("defaultTypes"),a("customTypes")),useIntKeysAsArrayIndex:a("useIntKeysAsArrayIndex")}},parseValue:function(n,r,t,i){var a,s;a=e.serializeJSON;s=n;if(i.typeFunctions&&t&&i.typeFunctions[t]){s=i.typeFunctions[t](n)}else if(i.parseNumbers&&a.isNumeric(n)){s=Number(n)}else if(i.parseBooleans&&(n==="true"||n==="false")){s=n==="true"}else if(i.parseNulls&&n=="null"){s=null}if(i.parseWithFunction&&!t){s=i.parseWithFunction(s,r)}return s},isObject:function(e){return e===Object(e)},isUndefined:function(e){return e===void 0},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},optionKeys:function(e){if(Object.keys){return Object.keys(e)}else{var n,r=[];for(n in e){r.push(n)}return r}},readCheckboxUncheckedValues:function(n,r,t){var i,a,s,u,l;if(r==null){r={}}l=e.serializeJSON;i="input[type=checkbox][name]:not(:checked):not([disabled])";a=t.find(i).add(t.filter(i));a.each(function(t,i){s=e(i);u=s.attr("data-unchecked-value");if(u){n.push({name:i.name,value:u})}else{if(!l.isUndefined(r.checkboxUncheckedValue)){n.push({name:i.name,value:r.checkboxUncheckedValue})}}})},extractTypeAndNameWithNoType:function(e){var n;if(n=e.match(/(.*):([^:]+)$/)){return{nameWithNoType:n[1],type:n[2]}}else{return{nameWithNoType:e,type:null}}},tryToFindTypeFromDataAttr:function(e,n){var r,t,i,a;r=e.replace(/(:|\.|\[|\]|\s)/g,"\\$1");t='[name="'+r+'"]';i=n.find(t).add(n.filter(t));a=i.attr("data-value-type");return a||null},validateType:function(n,r,t){var i,a;a=e.serializeJSON;i=a.optionKeys(t?t.typeFunctions:a.defaultOptions.defaultTypes);if(!r||i.indexOf(r)!==-1){return true}else{throw new Error("serializeJSON ERROR: Invalid type "+r+" found in input name '"+n+"', please use one of "+i.join(", "))}},splitInputNameIntoKeysArray:function(n){var r,t;t=e.serializeJSON;r=n.split("[");r=e.map(r,function(e){return e.replace(/\]/g,"")});if(r[0]===""){r.shift()}return r},deepSet:function(n,r,t,i){var a,s,u,l,o,f;if(i==null){i={}}f=e.serializeJSON;if(f.isUndefined(n)){throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined")}if(!r||r.length===0){throw new Error("ArgumentError: param 'keys' expected to be an array with least one element")}a=r[0];if(r.length===1){if(a===""){n.push(t)}else{n[a]=t}}else{s=r[1];if(a===""){l=n.length-1;o=n[l];if(f.isObject(o)&&(f.isUndefined(o[s])||r.length>2)){a=l}else{a=l+1}}if(s===""){if(f.isUndefined(n[a])||!e.isArray(n[a])){n[a]=[]}}else{if(i.useIntKeysAsArrayIndex&&f.isValidArrayIndex(s)){if(f.isUndefined(n[a])||!e.isArray(n[a])){n[a]=[]}}else{if(f.isUndefined(n[a])||!f.isObject(n[a])){n[a]={}}}}u=r.slice(1);f.deepSet(n[a],u,t,i)}}}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/