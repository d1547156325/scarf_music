define(["../../template",""],function(s){return s("rank/urank/fuhaototaltop3Tmpl",function(s,i){"use strict";var e=this,a=e.$helpers,t=s.item,l=e.$escape,c=a.checkImg,r=a.fenFormat,o=s.data,p="";p+='<div class="u-top3 pr clearfix fuhao-top3-total" > <i class="top3-crown-month pa"></i> <div class="u-top3-bg pa"></div> ';if(t[1]){p+=' <div class="u-top3-detail u-top3-2"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';p+=l(c(t[1].user_pic,"USER_URANK_PIC_60","@w_150,o_1,q_80"));p+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">';p+=l(t[1].name);p+='</a></h3> <p class="u-store ';if(t[1].score>9999999){p+=" u-store-8"}p+='"><i class="score-bg-left"></i><i class="u-status-';p+=l(t[1].is_up);p+='"></i><i class="stroe">';p+=l(r(t[1].score));p+='</i><i class="score-bg-right"></i></p> ';if(t[1].duanwei&&t[1].level){p+=' <img src="/static/images/page/rank/urank/';p+=l(o.fsLevel[t[1].duanwei].key);p+="_";p+=l(t[1].level);p+='.png" class="fs-level fs-level-2 fs-level44" title="';p+=l(o.fsLevel[t[1].duanwei].title);p+=l(t[1].level);p+='级"/> '}p+=" </div> "}else{p+=' <div class="u-top3-detail u-top3-2"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';p+=l(c("","USER_URANK_PIC_60"));p+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> </div> '}p+=" ";if(t[0]){p+=' <div class="u-top3-detail u-top3-1"> <a href="javascript:void(0)"><img class="u-top3-pic" id="u-top3-pic" src="';p+=l(c(t[0].user_pic,"USER_URANK_PIC_60","@w_200,o_1,q_80"));p+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">';p+=l(t[0].name);p+='</a></h3> <p class="u-store ';if(t[0].score>9999999){p+=" u-store-8"}p+='"><i class="score-bg-left"></i><i class="u-status-';p+=l(t[0].is_up);p+='"></i><i class="stroe">';p+=l(r(t[0].score));p+='</i><i class="score-bg-right"></i></p> ';if(t[0].duanwei&&t[0].level){p+=' <img src="/static/images/page/rank/urank/';p+=l(o.fsLevel[t[0].duanwei].key);p+="_";p+=l(t[0].level);p+='.png" class="fs-level fs-level-1 fs-level44" title="';p+=l(o.fsLevel[t[0].duanwei].title);p+=l(t[0].level);p+='级"/> '}p+=" </div> "}else{p+=' <div class="u-top3-detail u-top3-1"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';p+=l(c("","USER_URANK_PIC_60"));p+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> </div> '}p+=" ";if(t[2]){p+=' <div class="u-top3-detail u-top3-3"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';p+=l(c(t[2].user_pic,"USER_URANK_PIC_60","@w_150,o_1,q_80"));p+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">';p+=l(t[2].name);p+='</a></h3> <p class="u-store ';if(t[2].score>9999999){p+=" u-store-8"}p+='"><i class="score-bg-left"></i><i class="u-status-';p+=l(t[2].is_up);p+='"></i><i class="stroe">';p+=l(r(t[2].score));p+='</i><i class="score-bg-right"></i></p> ';if(t[2].duanwei&&t[2].level){p+=' <img src="/static/images/page/rank/urank/';p+=l(o.fsLevel[t[2].duanwei].key);p+="_";p+=l(t[2].level);p+='.png" class="fs-level fs-level-3 fs-level44" title="';p+=l(o.fsLevel[t[2].duanwei].title);p+=l(t[2].level);p+='级"/> '}p+=" </div> "}else{p+=' <div class="u-top3-detail u-top3-3"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';p+=l(c("","USER_URANK_PIC_60"));p+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> <p class="u-store "><i class="score-bg-left"></i><i class="u-status-"></i><i class="stroe">0</i><i class="score-bg-right"></i></p> </div> '}p+=" </div>";return new String(p)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/