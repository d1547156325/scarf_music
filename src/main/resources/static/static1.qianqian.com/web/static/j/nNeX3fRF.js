define(["../template",""],function(e){return e("dynamic/addFriendStarTmpl",function(e,i){"use strict";var s=this,l=s.$helpers,a=e.i,t=e.list,n=e.item,r=s.$escape,f=e.sex,d=e.level,c=s.$string,o=l.getAbstract,v="";v+='<ul class="message-list star-list"> ';for(a=0;a<t.length;a++){n=t[a];v+=' <li> <div class="user-img"> <a href="/user?nickname=';v+=r(n.username);v+='" target="_blank"> <img src="';v+=r(n.userpic);v+='" /> ';if(n&&n.flag[0]>0){v+=' <i class="vip-info vip';v+=r(n.flag[0]);v+='" ';if(n.flag[0]==1){v+="title='千千音乐普通VIP'"}else{v+="title='千千音乐白金VIP'"}v+=" ></i> "}else if(n.flag[2]==1){v+=" <i class=\"vip-info renzheng\" title='千千音乐认证'></i> "}else if(n.flag[1]==1){v+=" <i class=\"vip-info daren\" title='千千音乐认证'></i> "}v+=' </a> </div> <div class="text-wrap"> <div class="head-text"> <div class="user-info"> ';if(n.sex=="1"){f="sex-boy"}else if(n.sex=="2"){f="sex-girl"}else{f=""}v+=' <a target="_blank" href="/user?nickname=';v+=r(n.username);v+='">';v+=r(n.username);v+='</a><i class="sex ';v+=r(f);v+='"></i> ';if(n.level>0){v+=' <i class="level">lv';v+=r(d);v+="</i> "}v+=' </div> </div> <!-- <div class="plu-text"> <div class="user-active"> <span>动态：';v+=r(n.dynamic_num);v+="</span><b></b> <span>关注：";v+=r(n.friend_num);v+="</span><b></b> <span>粉丝：";v+=r(n.follow_num);v+='</span> </div> </div> --> <div class="content-text comment-user common-face-content to"> ';if(n.flag[2]==1){v+=" ";v+=c(n.renzheng_info);v+=" "}else if(n.desc!=""){v+=" ";v+=c(n.desc);v+=" "}else if(n.flag[1]==1){v+=" ";v+=c(n.daren_info);v+=" "}else{v+=" ";var u=o(n);if(u!=""){v+=" ";v+=c(u);v+=" "}else{v+=" 这个人很神秘 "}v+=" "}v+=' </div> <div class="user-btn"> ';if(n.isFriend==0){v+=' <a href="javascript:;" class="follow follow-hook" data-fid="';v+=r(n.userid);v+='" title="关注"><i></i>关注</a> '}else if(n.isFriend==1){v+=' <a href="javascript:;" class="followed followed-hook" data-fid="';v+=r(n.userid);v+='" title="取消关注"><i></i>已关注</a> '}else if(n.isFriend==2){v+=' <a href="javascript:;" class="allfollowed allfollowed-hook" data-fid="';v+=r(n.userid);v+='" title="取消关注"><i></i>互相关注</a> '}v+=" </div> </div> </li> "}v+=" </ul>";return new String(v)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/