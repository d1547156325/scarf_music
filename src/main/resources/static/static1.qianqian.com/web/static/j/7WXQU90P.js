define(["../../template",""],function(i){return i("rank/urank/fuhaolistTmpl",function(i,e){"use strict";var s=this,l=s.$helpers,t=i.k,a=i.item,r=i.list,c=s.$escape,n=l.checkImg,v=i.data,p=l.fenFormat,f="";for(var t=0;t<a.length;t++){f+=" ";if(a[t].key>=3){r=a[t];f+=' <li class="clearfix"> <div class="urank-list-append-bg"></div> <div class="list-num">';f+=c(r.key+1);f+='</div> <a href="javascript:void(0)"><img src="';f+=c(n(r.user_pic,"USER_URANK_PIC_60","@w_88,o_1,q_80"));f+='" class="list-userpic" alt=""></a> <div class="list-info"> <h3><a href="javascript:void(0)" class="list-title to list-title-';f+=c(r.is_vip);f+='">';f+=c(r.name);f+=" </a> ";if(r.duanwei&&r.level){f+=' <img src="/static/images/page/rank/urank/';f+=c(v.fsLevel[r.duanwei].key);f+="_";f+=c(r.level);f+='.png" class="fs-level fs-level20" title="';f+=c(v.fsLevel[r.duanwei].title);f+=c(r.level);f+='级"/> '}f+=' <i class="list-title-icon-';f+=c(r.is_vip);f+='" title=\'千千音乐VIP\'></i> </h3> </div> <p class="list-store pa">贡献值：';f+=c(p(r.score));f+="</p> </li> "}f+=" "}f+=" ";return new String(f)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/