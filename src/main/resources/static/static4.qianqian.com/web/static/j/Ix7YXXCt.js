define(["../../template",""],function(t){return t("rank/jinlirank/uweektop3Tmpl",function(t,a){"use strict";var i=this,s=i.$helpers,p=i.$escape,e=t.data,o=t.item,r=s.checkImg,l=s.fenFormat,c="";c+='<div class="u-top3 pr clearfix u-top3-week" > <div class="top3-week-title pa"> <h3>U榜第';c+=p(e.week_nums);c+="期周榜</h3> <i>";c+=p(e.getXDate(e.time_range));c+='</i> </div> <div class="u-top3-bg pa"></div> <a href="javascript:void(0)" class="top3-to-list" data-period="';c+=p(e.week_nums);c+='" data-billtype="week" title="本期周榜火热进行中">去本期榜单</a> ';if(o.top3[1]){o.top3[1].period=e.period;c+=' <div class="u-top3-detail u-top3-2"> <a href="/redrank/artist/';c+=p(o.top3[1].whid);c+='"><img class="u-top3-pic" src="';c+=p(r(o.top3[1].pic_list[0],"USER_URANK_PIC_60","@w_150,o_1,q_80"));c+='" alt=""></a> <h3><a href="/redrank/artist/';c+=p(o.top3[1].whid);c+='" class="u-top3-title to">';c+=p(o.top3[1].name);c+='</a></h3> <p class="u-store "><i class="u-status-';c+=p(o.top3[1].is_up);c+='"></i><i class="stroe">';c+=p(l(o.top3[1].up_score));c+="</i></p> </div> "}else{c+=' <div class="u-top3-detail u-top3-2"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';c+=p(r("","USER_URANK_PIC_60"));c+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> </div> '}c+=" ";if(o.top3[0]){o.top3[0].period=e.period;c+=' <div class="u-top3-detail u-top3-1"> <a href="/redrank/artist/';c+=p(o.top3[0].whid);c+='"><img class="u-top3-pic" id="u-top3-pic" src="';c+=p(r(o.top3[0].pic_list[0],"USER_URANK_PIC_60","@w_200,o_1,q_80"));c+='" alt=""></a> <h3><a href="/redrank/artist/';c+=p(o.top3[0].whid);c+='" class="u-top3-title to">';c+=p(o.top3[0].name);c+='</a></h3> <p class="u-store "><i class="u-status-';c+=p(o.top3[0].is_up);c+='"></i><i class="stroe">';c+=p(l(o.top3[0].up_score));c+="</i></p> </div> "}else{c+=' <div class="u-top3-detail u-top3-1"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';c+=p(r("","USER_URANK_PIC_60"));c+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> </div> '}c+=" ";if(o.top3[2]){o.top3[2].period=e.period;c+=' <div class="u-top3-detail u-top3-3"> <a href="/redrank/artist/';c+=p(o.top3[2].whid);c+='"><img class="u-top3-pic" src="';c+=p(r(o.top3[2].pic_list[0],"USER_URANK_PIC_60","@w_150,o_1,q_80"));c+='" alt=""></a> <h3><a href="/redrank/artist/';c+=p(o.top3[2].whid);c+='" class="u-top3-title to">';c+=p(o.top3[2].name);c+='</a></h3> <p class="u-store "><i class="u-status-';c+=p(o.top3[2].is_up);c+='"></i><i class="stroe">';c+=p(l(o.top3[2].up_score));c+="</i></p> </div> "}else{c+=' <div class="u-top3-detail u-top3-3"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';c+=p(r("","USER_URANK_PIC_60"));c+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> </div> '}c+=" </div>";return new String(c)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/