define(["../../template",""],function(i){return i("rank/redrank/redUserInfoTmpl",function(i,a){"use strict";var s=this,l=s.$helpers,r=i.i,t=i.item,e=i.picListLength,n=s.$escape,o=l.checkImg,c="";c+='<div class="wanghong-pics fl"> <div class="mui-slider"> <a class="control-left" href="javascript:void(0)"><i></i><em></em></a> <a class="control-right" href="javascript:void(0)"><i></i><em></em></a> <div class="mui-slider-scroll-wrap"> <ul class="mui-slider-scroll-container" id="js-random-focus"> ';for(var r in t.pic_list){var e=t.pic_list.length;c+=' <li class="js-random-first" data-title="千千音乐" data-origin-id=\'0\'> <img src="';c+=n(t.pic_list[r]);c+='" class="" alt="千千音乐"/> </li> '}c+=' </ul> </div> <div class="mui-slider-controller" style="margin-right:-';c+=n(e*6+5);c+='px"> <div class="slider-page slider-right"> <div class="slider-page-inner"> ';for(var r in t.pic_list){c+=' <a href="javascript:void(0)" class="page ';if(r==1){c+=" on "}c+='"><i></i></a> '}c+='  </div> </div> </div> </div> </div> <div class="ubang-detail-star fl"> <h2 class="star-name pr">';c+=n(t.name);if(t.vip_status=="gold"){c+='<img class="star-name-icon" src="../../../../static3.qianqian.com/web/static/i/QSHjufCE.png"/*tpa=http://static3.qianqian.com/web/static/i/QSHjufCE.png*/ alt="';c+=n(t.name);c+='">'}c+='</h2> <div class="fensi friend-btn-hook" data-fid="';c+=n(t.do_friend);c+='"> ';if(t.fri_num>9999){t.fri_num=(t.fri_num/1e4).toFixed(2)+" 万"}c+=" <span>粉丝：";c+=n(t.fri_num);c+="</span> ";if(t.fri_relations==0||t.fri_relations==3){c+=' <a href="javascript:void(0);" class="follow follow-hook follow-style" data-fid="';c+=n(t.userid);c+='" title="关注"><i></i>关注</a> '}else if(t.fri_relations==1){c+=' <a href="javascript:void(0);" class="followed followed-hook follow-style" data-fid="';c+=n(t.userid);c+='"><i></i>已关注</a> '}else if(t.fri_relations==2){c+=' <a href="javascript:void(0);" class="allfollowed allfollowed-hook follow-style" data-fid="';c+=n(t.userid);c+='"><i></i>互相关注</a> '}c+=' </div> <div class="xingyunchi fl pr"> <a href="javascript:void(0)" class="up-history" title="Up值历史记录">Up值历史记录</a> <h4>幸运池</h4> <span><i class=\'xingyunchi-value\'>';c+=n(t.poll_num);c+='</i>/2000</span> <a href="javascript:void(0)" class="xingyunchi-zan"><span class="xingyunchi-zan-text pa">赞</span><i class="xingyunchi-zan-value pa">';c+=n(t.zan_num);c+='</i></a> </div> </div> <div class="ubang-top fr pr"> <div class="ubang-top-bg"> <h4>Top</h4> <h5>';c+=n(t.top_score);c+='</h5> </div> <div class="ubang-top-list pa ubang-top-list';c+=n(t.supporter_list.length);c+='"> ';for(var r=0;r<t.supporter_list.length;r++){c+=' <a href="javascript:void(0)" class="ubang-top-user pr top';c+=n(r+1);c+='"> <img class="ubang-top-user-pic" src="';c+=n(o(t.supporter_list[r],"USER_PIC_40"));c+=n();c+='" alt="" /> <img src="/static/images/page/rank/redrank/icon_wangguan';c+=n(r+1);c+='.png" class="ubang-top-user-icon pa" alt="" /> </a> '}c+=' </div> <div class="top-num pr"> <img src="/static/images/page/rank/redrank/state_up';c+=n(t.is_up);c+='.png" class="top-num-state" alt="" /> ';if(t.score>9999){t.score=(t.score/1e4).toFixed(2)+" 万"}c+=' <span class="top-num-text">';c+=n(t.score);c+='</span> <a href="javascript:void(0)" class="add-top-num">';if(t.is_shouhu==1){c+="继续守护"}else{c+="成为守护"}c+="</a> </div> </div> ";return new String(c)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/