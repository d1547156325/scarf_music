define(["../../template",""],function(t){return t("rank/jinlirank/albummonthtop3Tmpl",function(t,a){"use strict";var i=this,s=i.$helpers,p=i.$escape,o=t.data,l=t.item,e=s.checkImg,r="";r+='<div class="u-top3 pr clearfix u-top3-album-month album-top3-month" > <div class="top3-month-title pa"> <h3>';r+=p(o.year);r+="年U榜第";r+=p(o.mon_nums);r+="期月榜</h3> <i>销量榜第";r+=p(o.mon_nums);r+='期 , 等你来征服！</i> </div> <i class="top3-crown-month pa"></i> <div class="u-top3-bg pa"></div> <a href="javascript:void(0)" class="top3-to-list" data-period="';r+=p(o.mon_nums);r+='" data-billtype="month" title="去本期榜单">去本期榜单</a> ';if(l.top3[1]){r+=' <div class="u-top3-detail u-top3-2"> <i class="album-top-icon2 pa"></i> <a href="/redrank/artist/';r+=p(l.top3[1].artist_id);r+='"><img class="u-top3-pic" src="';r+=p(e(l.top3[1].album_pic,"USER_URANK_PIC_60","@w_150,o_1,q_80"));r+='" alt=""></a> <h3><a href="/redrank/artist/';r+=p(l.top3[1].artist_id);r+='" class="u-top3-title to">';r+=p(l.top3[1].album_title);r+='</a></h3> <p class="u-store"><i class="u-status-';r+=p(l.top3[1].is_up);r+='"></i><i class="stroe">';r+=p(o.billTypeText);r+="销量：";r+=p(l.top3[1].nums);r+="</i></p> </div> "}else{r+=' <div class="u-top3-detail u-top3-2"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';r+=p(e("","USER_URANK_PIC_60"));r+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> </div> '}r+=" ";if(l.top3[0]){r+=' <div class="u-top3-detail u-top3-1"> <i class="album-top-icon1 pa"></i> <a href="/redrank/artist/';r+=p(l.top3[0].artist_id);r+='"><img class="u-top3-pic" id="u-top3-pic" src="';r+=p(e(l.top3[0].album_pic,"USER_URANK_PIC_60","@w_200,o_1,q_80"));r+='" alt=""></a> <h3><a href="/redrank/artist/';r+=p(l.top3[0].artist_id);r+='" class="u-top3-title to">';r+=p(l.top3[0].album_title);r+='</a></h3> <p class="u-store "><i class="u-status-';r+=p(l.top3[0].is_up);r+='"></i><i class="stroe">';r+=p(o.billTypeText);r+="销量：";r+=p(l.top3[0].nums);r+="</i></p> </div> "}else{r+=' <div class="u-top3-detail u-top3-1"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';r+=p(e("","USER_URANK_PIC_60"));r+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> </div> '}r+=" ";if(l.top3[2]){r+=' <div class="u-top3-detail u-top3-3"> <i class="album-top-icon3 pa"></i> <a href="/redrank/artist/';r+=p(l.top3[2].artist_id);r+='"><img class="u-top3-pic" src="';r+=p(e(l.top3[2].album_pic,"USER_URANK_PIC_60","@w_150,o_1,q_80"));r+='" alt=""></a> <h3><a href="/redrank/artist/';r+=p(l.top3[2].artist_id);r+='" class="u-top3-title to">';r+=p(l.top3[2].album_title);r+='</a></h3> <p class="u-store "><i class="u-status-';r+=p(l.top3[2].is_up);r+='"></i><i class="stroe">';r+=p(o.billTypeText);r+="销量：";r+=p(l.top3[2].nums);r+="</i></p> </div> "}else{r+=' <div class="u-top3-detail u-top3-3"> <a href="javascript:void(0)"><img class="u-top3-pic" src="';r+=p(e("","USER_URANK_PIC_60"));r+='" alt=""></a> <h3><a href="javascript:void(0)" class="u-top3-title to">虚位以待</a></h3> </div> '}r+=" </div>";return new String(r)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/