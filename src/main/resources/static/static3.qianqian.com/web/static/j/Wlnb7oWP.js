define(["../../template",""],function(e){return e("rank/urank/fuhaototalTmpl",function(e,i){"use strict";var s=this,l=s.$helpers,t=e.k,a=e.item,r=e.list,n=s.$escape,c=l.checkImg,v=e.data,p=l.fenFormat,f="";for(var t=0;t<a.length;t++){f+=" ";if(a[t].key>=3){r=a[t];f+=' <li class="clearfix"> <div class="urank-list-append-bg"></div> <div class="list-num">';f+=n(r.key+1);f+='</div> <a href="javascript:void(0)"><img src="';f+=n(c(r.user_pic,"USER_URANK_PIC_60","@w_88,o_1,q_80"));f+='" class="list-userpic" alt=""></a> <div class="list-info"> <h3><a href="javascript:void(0)" class="list-title to list-title-';f+=n(r.is_vip);f+='" title="';f+=n(r.name);f+='">';f+=n(r.name);f+="</a> ";if(r.duanwei&&r.level){f+=' <img src="/static/images/page/rank/urank/';f+=n(v.fsLevel[r.duanwei].key);f+="_";f+=n(r.level);f+='.png" class="fs-level fs-level20" title="';f+=n(v.fsLevel[r.duanwei].title);f+=n(r.level);f+='级"/> '}f+=' <i class="list-title-icon-';f+=n(r.is_vip);f+='" title=\'千千音乐VIP\'></i></h3> </div> <p class="list-store pa">贡献值：';f+=n(p(r.score));f+="</p> </li> "}f+=" "}f+=" ";return new String(f)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/