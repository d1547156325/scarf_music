define(function(){var r=r||{};void function(){var e={};e.cutStr=function(r,e,t,n){var a;n=n||12;e=Math.round(e*12/n);r=r||"";r=r.toString();if(r.length*12<=e){return r}var u=/[^\x00-\xff]/g;var f=r.replace(u,"W");var i=new Array(12,6,6,6,6,6,6,6,6,4,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,4,5,9,7,12,8,3,5,5,7,8,4,4,4,5,7,7,7,7,7,7,7,7,7,7,4,4,9,9,9,6,11,8,7,7,8,7,6,8,8,4,5,7,6,9,8,9,7,9,7,7,8,8,8,12,7,8,7,5,5,5,9,7,7,6,7,6,7,7,4,7,7,2,3,6,2,10,7,7,7,7,4,5,5,7,6,10,6,6,5,6,5,6,9,6);var v=0;var o=r.length;for(var c=0;c<r.length;c++){v+=Number(i[Number(f.charCodeAt(c))])||12;if(v>=e){o=c;break}}if(v>=e){e-=12;for(var g=o-1;g>0;g--){v-=Number(i[Number(f.charCodeAt(g))])||12;if(v<=e){o=g+1;break}}a=r.substring(0,o)+(t||"...")}else{a=r.substring(0,o)}return a};e.getP=function(r,e){e=e||12;var t=/[^\x00-\xff]/g;var n=r.replace(t,"W");var a=new Array(12,6,6,6,6,6,6,6,6,4,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,4,5,9,7,12,8,3,5,5,7,8,4,4,4,5,7,7,7,7,7,7,7,7,7,7,4,4,9,9,9,6,11,8,7,7,8,7,6,8,8,4,5,7,6,9,8,9,7,9,7,7,8,8,8,12,7,8,7,5,5,5,9,7,7,6,7,6,7,7,4,7,7,2,3,6,2,10,7,7,7,7,4,5,5,7,6,10,6,6,5,6,5,6,9,6);var u=0;for(var f=0;f<r.length;f++){u+=Number(a[Number(n.charCodeAt(f))])||12}return Math.round(u*e/12)};r.cutString=e}();return{cutString:r.cutString}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/