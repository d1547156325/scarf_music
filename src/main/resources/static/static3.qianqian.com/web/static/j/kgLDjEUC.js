define(["../../template","./historyTmpl","./fensitop3Tmpl"],function(s){return s("rank/urank/ulisttop3Tmpl",function(s,i){"use strict";var t=this,a=t.$helpers,e=function(a,e){e=e||s;var r=t.$include(a,e,i);d+=r;return d},r=s.data,l=t.$escape,o=s.item,p=a.checkImg,c=a.fenFormat,u=s.list,d="";e("./historyTmpl",{data:r});d+=' <div class="u-top3 pr clearfix u-top3-list" > <i class="top3-crown-';d+=l(r._data.opation.bill_type);d+=' pa"></i> <div class="u-top3-bg pa"></div> ';if(o[1]){o[1].period=r.period;d+=' <div class="u-top3-detail u-top3-2"> <a href="/redrank/artist/';d+=l(o[1].whid);d+='"><img class="u-top3-pic" src="';d+=l(p(o[1].pic_list[0],"USER_URANK_PIC_60","@w_150,o_1,q_80"));d+='" alt=""></a> <h3><a href="/redrank/artist/';d+=l(o[1].whid);d+='" class="u-top3-title to">';d+=l(o[1].name);d+='</a></h3> <p class="u-store ';if(o[1].up_score>9999999){d+=" u-store-8"}d+='"><i class="score-bg-left"></i><i class="u-status-';d+=l(o[1].is_up);d+='"></i><i class="stroe">';d+=l(c(o[1].up_score));d+='</i><i class="score-bg-right"></i></p> ';e("./fensitop3Tmpl",{data:o[1].supporter_list,list:o[1]});d+=' <a href="/redrank/artist/';d+=l(o[1].whid);d+='" class="u-btn u-btn1"> ';if(r._data.opation.period>=r._data.totalPeriod){d+="打榜"}else{d+="去打榜"}d+=" </a> </div> "}else{d+=' <div class="u-top3-detail u-top3-2"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';d+=l(p("","USER_URANK_PIC_60"));d+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> <div class="ubang-topfensi-list pa"></div> </div> '}d+=" ";if(o[0]){o[0].period=r.period;d+=' <div class="u-top3-detail u-top3-1"> <a href="/redrank/artist/';d+=l(o[0].whid);d+='"><img class="u-top3-pic" id="u-top3-pic" src="';d+=l(p(o[0].pic_list[0],"USER_URANK_PIC_60","@w_200,o_1,q_80"));d+='" alt=""></a> <h3><a href="/redrank/artist/';d+=l(o[0].whid);d+='" class="u-top3-title to">';d+=l(o[0].name);d+='</a></h3> <p class="u-store ';if(o[0].up_score>9999999){d+=" u-store-8"}d+='"><i class="score-bg-left"></i><i class="u-status-';d+=l(o[0].is_up);d+='"></i><i class="stroe">';d+=l(c(o[0].up_score));d+='</i><i class="score-bg-right"></i></p> ';e("./fensitop3Tmpl",{data:o[0].supporter_list,list:o[0]});d+=' <a href="/redrank/artist/';d+=l(o[0].whid);d+='" class="u-btn u-btn1"> ';if(r._data.opation.period>=r._data.totalPeriod){d+="打榜"}else{d+="去打榜"}d+=" </a> </div> "}else{d+=' <div class="u-top3-detail u-top3-1"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';d+=l(p("","USER_URANK_PIC_60"));d+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> <div class="ubang-topfensi-list pa"></div> </div> '}d+=" ";if(o[2]){o[2].period=r.period;d+=' <div class="u-top3-detail u-top3-3"> <a href="/redrank/artist/';d+=l(o[2].whid);d+='"><img class="u-top3-pic" src="';d+=l(p(o[2].pic_list[0],"USER_URANK_PIC_60","@w_150,o_1,q_80"));d+='" alt=""></a> <h3><a href="/redrank/artist/';d+=l(o[2].whid);d+='" class="u-top3-title to">';d+=l(o[2].name);d+='</a></h3> <p class="u-store ';if(o[2].up_score>9999999){d+=" u-store-8"}d+='"><i class="score-bg-left"></i><i class="u-status-';d+=l(o[2].is_up);d+='"></i><i class="stroe">';d+=l(c(o[2].up_score));d+='</i><i class="score-bg-right"></i></p> ';e("./fensitop3Tmpl",{data:o[2].supporter_list,list:o[2]});d+=' <a href="/redrank/artist/';d+=l(o[2].whid);d+='" class="u-btn u-btn1"> ';if(r._data.opation.period>=r._data.totalPeriod){d+="打榜"}else{d+="去打榜"}d+=" </a> </div> "}else{d+=' <div class="u-top3-detail u-top3-3"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';d+=l(p("","USER_URANK_PIC_60"));d+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> <div class="ubang-topfensi-list pa"></div> </div> '}d+=" </div>";return new String(d)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/