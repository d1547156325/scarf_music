define(["../../template",""],function(s){return s("rank/urank/upHistoryTmpl",function(s,i){"use strict";var t=this,r=t.$helpers,a=s.i,e=s.item,l=t.$escape,n=t.$string,p=r.timeFormat,o="";o+='<div class="up-history-box pop-init"> <i class="close-up-history"></i> <div class="up-history-list-box"> <ul class=\'up-history-list\'> ';for(var a in e){o+=' <li> <div class="up-history-bg"></div> <div class="up-history-content clearfix"> <span class="up-history-value fl">+';o+=l(e[a].score);o+='</span> <span class="up-history-text fl">UP值</span> <span class="up-history-time fl">';o+=n(p(e[a].create_time));o+="</span> </div> </li> "}o+=" </ul> </div> </div>";return new String(o)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/