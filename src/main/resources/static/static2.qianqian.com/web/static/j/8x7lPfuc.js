define(["../template",""],function(a){return a("songpage/maybelovelastTmpl",function(a,e){"use strict";var s=this,t=s.$helpers,i=s.$escape,o=a.item,l=t.checkImg,n="";n+='<div class="love-img"> <div class="live-cir-zhibo"></div> <a href="';n+=i(o.playUrl);n+='" target="_blank"> <img src="';n+=i(l(o.avatar_middle,"USER_PIC_60","@w_120,o_1,q_80"));n+='" alt=""> <div class="aboutsonglist-hui"></div> <div class="love-hot"> <span class="love-hot-ico iconfont">&#xe627;</span> <span class="love-hot-num"> ';if(o.hot>9999){o.hot=(o.hot/1e4).toFixed(2)+" 万"}n+=" ";n+=i(o.hot);n+='</span> </div> </a> </div> <div class="love-foot overdd"> <span class="foot-name overdd"><a href="';n+=i(o.playUrl);n+='" target="_blank">';n+=i(o.name);n+="</a></span> </div> </div> ";return new String(n)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/