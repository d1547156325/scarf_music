define(["../../template","./historyTmpl","./fensitop3Tmpl"],function(s){return s("rank/jinlirank/ulisttop3Tmpl",function(s,i){"use strict";var t=this,a=t.$helpers,e=function(a,e){e=e||s;var r=t.$include(a,e,i);u+=r;return u},r=s.data,l=t.$escape,o=s.item,p=a.checkImg,c=a.fenFormat,d=s.list,u="";e("./historyTmpl",{data:r});u+=' <div class="u-top3 pr clearfix u-top3-list" > <i class="top3-crown-';u+=l(r._data.opation.bill_type);u+=' pa"></i> <div class="u-top3-bg pa"></div> ';if(o[1]){o[1].period=r.period;u+=' <div class="u-top3-detail u-top3-2"> <a href="/redrank/artist/';u+=l(o[1].whid);u+='"><img class="u-top3-pic" src="';u+=l(p(o[1].pic_list[0],"USER_URANK_PIC_60","@w_150,o_1,q_80"));u+='" alt=""></a> <h3><a href="/redrank/artist/';u+=l(o[1].whid);u+='" class="u-top3-title to">';u+=l(o[1].name);u+='</a></h3> <p class="u-store ';if(o[1].up_score>9999999){u+=" u-store-8"}u+='"><i class="score-bg-left"></i><i class="u-status-';u+=l(o[1].is_up);u+='"></i><i class="stroe">';u+=l(c(o[1].up_score));u+='</i><i class="score-bg-right"></i></p> ';e("./fensitop3Tmpl",{data:o[1].supporter_list,list:o[1]});u+=' <a href="/redrank/artist/';u+=l(o[1].whid);u+='" class="u-btn u-btn1"> ';if(r._data.opation.period>=r._data.totalPeriod){u+="打榜"}else{u+="去打榜"}u+=" </a> </div> "}else{u+=' <div class="u-top3-detail u-top3-2"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';u+=l(p("","USER_URANK_PIC_60"));u+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> <div class="ubang-topfensi-list pa"></div> </div> '}u+=" ";if(o[0]){o[0].period=r.period;u+=' <div class="u-top3-detail u-top3-1"> <a href="/redrank/artist/';u+=l(o[0].whid);u+='"><img class="u-top3-pic" id="u-top3-pic" src="';u+=l(p(o[0].pic_list[0],"USER_URANK_PIC_60","@w_200,o_1,q_80"));u+='" alt=""></a> <h3><a href="/redrank/artist/';u+=l(o[0].whid);u+='" class="u-top3-title to">';u+=l(o[0].name);u+='</a></h3> <p class="u-store ';if(o[0].up_score>9999999){u+=" u-store-8"}u+='"><i class="score-bg-left"></i><i class="u-status-';u+=l(o[0].is_up);u+='"></i><i class="stroe">';u+=l(c(o[0].up_score));u+='</i><i class="score-bg-right"></i></p> ';e("./fensitop3Tmpl",{data:o[0].supporter_list,list:o[0]});u+=' <a href="/redrank/artist/';u+=l(o[0].whid);u+='" class="u-btn u-btn1"> ';if(r._data.opation.period>=r._data.totalPeriod){u+="打榜"}else{u+="去打榜"}u+=" </a> </div> "}else{u+=' <div class="u-top3-detail u-top3-1"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';u+=l(p("","USER_URANK_PIC_60"));u+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> <div class="ubang-topfensi-list pa"></div> </div> '}u+=" ";if(o[2]){o[2].period=r.period;u+=' <div class="u-top3-detail u-top3-3"> <a href="/redrank/artist/';u+=l(o[2].whid);u+='"><img class="u-top3-pic" src="';u+=l(p(o[2].pic_list[0],"USER_URANK_PIC_60","@w_150,o_1,q_80"));u+='" alt=""></a> <h3><a href="/redrank/artist/';u+=l(o[2].whid);u+='" class="u-top3-title to">';u+=l(o[2].name);u+='</a></h3> <p class="u-store ';if(o[2].up_score>9999999){u+=" u-store-8"}u+='"><i class="score-bg-left"></i><i class="u-status-';u+=l(o[2].is_up);u+='"></i><i class="stroe">';u+=l(c(o[2].up_score));u+='</i><i class="score-bg-right"></i></p> ';e("./fensitop3Tmpl",{data:o[2].supporter_list,list:o[2]});u+=' <a href="/redrank/artist/';u+=l(o[2].whid);u+='" class="u-btn u-btn1"> ';if(r._data.opation.period>=r._data.totalPeriod){u+="打榜"}else{u+="去打榜"}u+=" </a> </div> "}else{u+=' <div class="u-top3-detail u-top3-3"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';u+=l(p("","USER_URANK_PIC_60"));u+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> <div class="ubang-topfensi-list pa"></div> </div> '}u+=" </div>";return new String(u)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/