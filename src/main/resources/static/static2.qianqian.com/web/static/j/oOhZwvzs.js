define(["../template",""],function(a){return a("common/face",function(a,e){"use strict";var s=this,c=s.$helpers,i=a.p,n=a.pageList,t=a.ul,l=s.$escape,o=a.i,f=a.item,r=a.reverseConf,m=a.npage,p=a.page,v="";v+=' <div class="common-face-style common-face-content"> <div class="common-face-loading"></div> <div class="common-face-wrap"> ';for(i=0;i<n.length;i++){t=n[i];v+=' <ul class="common-face-list face-';v+=l(i+1);v+='"> ';for(o=0;o<t.list.length;o++){f=t.list[o];v+=' <li class="face-hook"><a href="javascript:;" class="';v+=l(f);v+='" data-face="';v+=l(r[f]);v+='"></a></li> '}v+=" </ul> "}v+=' </div> <div class="common-face-page"><a href="javascript:;" class="left"></a><span><b class="npage-hook">';v+=l(m);v+="</b>/<b>";v+=l(p);v+='</b></span><a href="javascript:;" class="right"></a></div> </div> ';return new String(v)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/