define(["../../template",""],function(s){return s("rank/urank/daBangTaiTmpl",function(s,a){"use strict";var i=this,t=i.$helpers,l=s.item,n=s.i,e=s.list,p=i.$escape,r=t.checkImg,c=t.jsonStringify,u=s.j,o="";o+=" ";if(l){o+=" ";for(var n=0;n<l.length;n++){e=l[n];o+=' <li class="dabangtai-t clearfix" ';o+=p(l.length);o+='> <div class="urank-list-append-bg-t"></div> <a href="javascript:void(0)"><img src="';o+=p(r(e.album_pic,"USER_URANK_PIC_60","@w_88,o_1,q_80"));o+='" class="list-userpic" alt=""></a> <div class="list-info"> <h3 class="h3-dabangtai"><a href="javascript:void(0)" class="list-title list-title-';o+=p(e.vip_status);o+='">';o+=p(e.title);o+=' <i class="list-title-icon-';o+=p(e.vip_status);o+='" title=\'千千音乐VIP\'></i></a></h3> <p class="list-store">';o+=p(e.artist_name);o+='<i class="u-status-';o+=p(e.is_up);o+='"></i> </p> <p class="three-btn" data-album=\'';o+=p(c(e));o+='\'> <span class="play" ></span> <span class="collect" ></span> <span class="share" ></span> </p> </div> <span class="sale-num">已售';o+=p(e.num);o+="</span> ";if(e.supporter_list&&e.supporter_list.length>=1){o+=' <div class="ubang-topfensi-list pa"> ';for(var u=0;u<e.supporter_list.length;u++){o+=' <a href="javascript:void(0)" class="ubang-topfensi-user pa topfensi';o+=p(u+1);o+='"> <img class="topfensi-user-pic" src="';o+=p(r(e.supporter_list[u],"USER_URANK_PIC_60","@w_34,o_1,q_80"));o+='" alt="" /> <img src="/static/images/page/rank/urank/icon_wangguan';o+=p(u+1);o+='.png" class="topfensi-user-icon pa" alt="" /> </a> '}o+=" </div> "}o+=' <a href="javascript:void(0)" class="u-btn u-btn2 buy-zj" data-id=\'';o+=p(e.album_id);o+="'>购买</a> </li> "}o+=" "}o+=" ";return new String(o)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/