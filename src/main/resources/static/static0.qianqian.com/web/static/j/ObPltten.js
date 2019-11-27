define(["../template","../dynamic/dynamicTmpl"],function(e){return e("uuser/message_list",function(e,t){"use strict";var s=this,i=s.$helpers,n=s.$escape,a=e.key,c=e.list,l=e.i,o=e.item,r=e.comment,d=e.source,p=e.url,m=e.ldata,_=i.checkImg,u=i.cutString,f=s.$string,g=i.timeFormat,y=i.jsonStringify,v=e.sourceStr,h=i.userReplace,b=e.str,k=e.plucls,I=e.param,x=function(i,n){n=n||e;var a=s.$include(i,n,t);S+=a;return S},S="";S+='<ul class="message-list ';S+=n(a);S+="-nomessage";S+=n(c.length);S+='"> ';for(l=0;l<c.length;l++){o=c[l];r=o.comment_info;d=o.source_info;p="";if(o.source_type==0){p="/song/"+d.content.content_id}else if(o.source_type==1){p="/songlist/"+d.content.content_id}else if(o.source_type==2){p="/album/"+d.content.content_id}else if(o.source_type==3){p="/artist/"+d.content.content_id}else if(o.source_type==4){if(o.msg_type==3){m=d}else{m=r}switch(m.pid){case 1:p="/songlist/"+m.thread_id;break;case 2:p="/song/"+m.thread_id;break;case 3:p="/album/"+m.thread_id;break;case 4:p="/dynamic/detail/"+m.thread_id;break;case 5:p="/dynamic/detail/"+m.thread_id;break;case 6:break;case 7:p="/artist/"+m.thread_id;break}}else if(o.source_type==5){p="/dynamic/detail/"+o.source_id}else if(o.source_type==6){p="/discuss/detail/"+o.source_id}else if(o.source_type==8){p="/h5pc/spec_detail?id="+d.content.content_id+"&columnid="+d.content.column_id}S+=' <li class="link clearfix" data-link="';S+=n(p);S+='"> <div class="user-img pr"> <img src="';S+=n(_(r.author.userpic,"USER_PIC_60"));S+='" /> ';if(r.author&&r.author.flag[0]>0){S+=' <i class="vip-info vip';S+=n(r.author.flag[0]);S+='" ';if(r.author.flag[0]==1){S+="title='千千音乐普通VIP'"}else{S+="title='千千音乐白金VIP'"}S+=" ></i> "}else if(r.author&&r.author.flag[2]==1){S+=" <i class=\"vip-info renzheng\" title='千千音乐认证'></i> "}else if(r.author&&r.author.flag[1]==1){S+=" <i class=\"vip-info daren\" title='千千音乐认证'></i> "}S+=' </div> <div class="text-wrap"> <div class="head-text"> <div class="user-info"><a target="_blank" href="/user?nickname=';S+=n(r.author.username);S+='" title="';S+=n(r.author.username);S+='">';S+=n(u(r.author.username,100));S+='</a></div> <div class="user-btn"> <span class="sa">';S+=f(g(o.ctime));S+="</span> ";if(o.msg_type==1||o.msg_type==4){S+=" ";if(!d.status){S+=' <a href="javascript:;" class="icon-blue icon-reply reply-hook" data-item="';S+=n(y(o));S+='">回复</a> '}S+=" "}S+=' </div> </div> <div class="content-text comment-user common-face-content">  ';v="";if(o.source_type==0){v+="歌曲"}else if(o.source_type==1){v+="歌单"}else if(o.source_type==2){v+="专辑"}else if(o.source_type==3){v+="歌手"}else if(o.source_type==4){v+="评论"}else if(o.source_type==5||o.source_type==6){v+="动态"}else if(o.source_type==7){v+="文本"}else if(o.source_type==8){v+="文章"}S+=" ";if(o.msg_type==1){S+=" ";if(r.comment){S+=' <em class="nodel">评论：</em> ';S+=f(h(r.comment,r.msg_users));S+=" "}else{S+=" ";if(o.source_type==5||o.source_type==6){S+=" ";if(d.msg_parent){S+=' <em class="nodel">转发：</em> ';S+=f(h(d.msg,d.msg_users));S+=" "}S+=" "}S+=" "}S+=" "}else if(o.msg_type==3){S+=" ";b="";if(o.op_type==1){b+="赞了你的"}else if(o.op_type==2){b+="收藏了你的"}else if(o.op_type==3){b+="推荐了你的"}else if(o.op_type==4){b+="作者删除了你收藏的"}S+=" ";S+=n(b+v);S+=" "}else if(o.msg_type==4){S+=" ";S+=f(h(r.comment,r.msg_users));S+=" "}S+=' </div> <div class="reply-text"> <span class="replay-text-arrow"></span> <div class="reply-text-content comment-user common-face-content result-line"> ';if(d.msg_parent&&!d.msg_parent.status||!d.msg_parent&&!d.status){S+=" ";if(o.msg_type==1){S+=" ";if(o.source_type==0){S+=' <div class="song left"> <div class="song-img left"> <img src="';S+=n(_(d.content.pic,"SONGLIST_PIC_150"));S+='"> <a href="javascript:;" class="play song-play-hook" data-songid="';S+=n(d.content.content_id);S+='"></a> </div> <div class="song-text left"> <div class="song-title"><a target="_blank" href="/song/';S+=n(d.content.content_id);S+='">';S+=n(d.content.title);S+='</a>单曲</div> <div class="song-artist"><a href="/artist/';S+=n(d.content.ting_uid);S+='">';S+=f(d.content.artist_name);S+="</a></div> </div> </div> "}else if(o.source_type==1){S+=' <div class="songlist left" > <div class="songlist-img left"> <img src="';S+=n(_(d.content.pic,"SONGLIST_PIC_150"));S+='"> <a href="javascript:;" class="play songlist-play-hook" data-listid="';S+=n(d.content.content_id);S+='"></a> </div> <div class="songlist-text left"> <span class="songlist-tag">歌单</span> <span class="songlist-title"><a target="_blank" href="/songlist/';S+=n(d.content.content_id);S+='">';S+=n(d.content.title);S+="</a></span> </div> </div> "}else if(o.source_type==2){S+=' <div class="album left"> <div class="album-img left"> <img src="';S+=n(_(d.content.pic,"SONGLIST_PIC_150"));S+='"> <a href="javascript:;" class="play album-play-hook" data-albumid="';S+=n(d.content.content_id);S+='"></a> </div> <div class="album-text left"> <span class="album-tag">专辑</span> <span class="album-title"><a target="_blank" href="/album/';S+=n(d.content.content_id);S+='">';S+=n(d.content.title);S+='</a> - <a target="_blank" href="/artist/';S+=n(d.content.ting_uid);S+='">';S+=n(d.content.artist_name);S+="</a></span> </div> </div> "}else if(o.source_type==3){S+=' <div class="artist left"> <div class="artist-img left"><img src="';S+=n(_(d.content.pic,"USER_PIC_60"));S+='"></div> <div class="artist-text left"><span class="artist-title"><a target="_blank" href="/artist/';S+=n(d.content.ting_uid);S+='">';S+=n(d.content.artist_name);S+="</a></span></div> </div> "}else if(o.source_type==4){S+=" ";S+=f(h(d.comment,d.msg_users));S+=" "}else if(o.source_type==5||o.source_type==6){S+=" ";k=" ";if(d.msg_parent&&r.comment){k="reply-second";S+=" 转发：";S+=f(h(d.msg,d.msg_users));S+=" "}else{k="reply-one"}S+=" ";d=d.msg_parent?d.msg_parent:d;d.msgid=o.source_id;d.hideCount=true;I={item:d,plucls:k};S+=" ";x("../dynamic/dynamicTmpl",I);S+=" "}else if(o.source_type==8){S+=' <div class="special left"> <div class="special-img left"><img src="';S+=n(_(d.content.pic,"TOPIC_PIC_268"));S+='"></div> <div class="special-text left"> <div class="special-title"><a href="http://static0.qianqian.com/h5pc/spec_detail?id=%27;S+=n(d.content.content_id);S+="&columnid=";S+=n(d.content.column_id);S+='">';S+=n(d.content.title);S+='</a></div> <div class="special-artist"><span>专栏：<a href="/column/detail/';S+=n(d.content.column_id);S+='">';S+=n(d.content.column_title);S+='</a></span><span>by <a href="/user?nickname=';S+=n(d.content.author.username);S+='">';S+=n(d.content.author.username);S+="</a></span></div> </div> </div> "}S+=" "}else if(o.msg_type==3||o.msg_type==4){S+=" ";if(d.msgtype==4){S+=" 我转发的";S+=n(v);S+="： "}else{S+=" 我的";S+=n(v);S+="： "}S+=" <br/>  ";if(o.source_type==4){S+=" ";S+=f(h(d.comment,d.msg_users));S+=" "}else if(o.source_type==5||o.source_type==6){S+="  ";if(d.msgtype==1){S+=" ";if(d.content.content_type==0){S+=" 单曲：";S+=n(d.content.title);S+=" - ";S+=n(d.content.artist_name);S+=" "}else if(d.content.content_type==1){S+=" 歌单：";S+=n(d.content.title);S+=" "}else if(d.content.content_type==2){S+=" 专辑：";S+=n(d.content.title);S+=" "}else if(d.content.content_type==3){S+=" 艺人：";S+=n(d.content.artist_name);S+=" "}else if(d.content.content_type==5){S+=" 文章：";S+=n(d.content.title);S+=" "}S+=" "}else if(d.msgtype==4){S+=" ";S+=n(d.msg);S+=" "}S+=" "}else{S+=" ";S+=n(d.content.title);S+=" "}S+=" "}S+=" "}else{S+=' <em class="nodel">';S+=f(v);S+="已被删除</em> "}S+=' <div style="clear:both;"></div>  </div> </div> </div>  <div class="message-edit-tmpl"></div> </li> '}S+=" </ul>";return new String(S)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/