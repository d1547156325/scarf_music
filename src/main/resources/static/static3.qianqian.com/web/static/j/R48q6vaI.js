define(["../../template","./fensitop3Tmpl"],function(i){return i("rank/jinlirank/albummonthTmpl",function(i,t){"use strict";var s=this,a=s.$helpers,e=i.k,l=i.item,r=i.list,p=i.data,n=s.$escape,c=a.checkImg,o=function(a,e){e=e||i;var l=s.$include(a,e,t);d+=l;return d},d="";for(var e=0;e<l.length;e++){r=l[e];r.period=p.period||r.period;d+=' <li class="clearfix" data-period="';d+=n(r.period);d+='" data-billtype="month"> <div class="urank-list-append-bg"></div> <a href="javascript:void(0)"><img src="';d+=n(c(r.pic,"USER_URANK_PIC_60","@w_88,o_1,q_80"));d+='" class="list-userpic" alt=""></a> <div class="list-info"> <h3><a href="javascript:void(0)" class="list-title list-title-';d+=n(r.vip_status);d+="\" title='千千音乐VIP'>";d+=n(r.title);d+=' <i class="list-title-icon-';d+=n(r.vip_status);d+='"></i></a></h3> <p class="list-date">';d+=n(r.time_range);d+='</p> <p class="list-store">';d+=n(p.billTypeText);d+="销量：";d+=n(r.score);d+='<i class="u-status-';d+=n(r.is_up);d+='"></i> </p> </div> ';o("./fensitop3Tmpl",{data:r.top_fans_pic||r.supporter_list,list:r});d+=" </li> "}return new String(d)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/