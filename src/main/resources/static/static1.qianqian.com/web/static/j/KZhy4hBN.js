define(["../template",""],function(e){return e("feed/details",function(e,i){"use strict";var s=this,a=s.$helpers,n=s.$escape,d=e.title,t=e.author,c=a.dateFormat,o=e.time,f=a.fenFormat,l=e.review_num,p=s.$string,r=e.content,v=e.feed_id,m=e.user_id,u=e.is_liked,h="";h+=' <div class="feed-head"> 资讯详情 <i class="icon-close iconfont" c-tj=\'{"page":"widget", "pos":"feed","sub":"cancle_pop"}\'>&#xe618;</i> </div> <div class="feed-warp"> <h2>';h+=n(d);h+='</h2> <div class="feed-opts clearfix"> <div class="feed-opts-left"> <span class="name">来源：';h+=n(t);h+='</span> <span><i class="icon-date iconfont">&#xe62e;</i>';h+=n(c(o,"yyyy年MM月dd日 hh:mm"));h+='</span> </div> <div class="feed-opts-right"> <span><i class="icon-browse iconfont">&#xe62a;</i>';h+=n(f(l));h+='</span><em>|</em> <i class="icon-report iconfont" c-tj=\'{"page":"widget", "pos":"feed","sub":"report"}\'>&#xe60b;</i> </div> </div> <div class="feed-content"> <p>';h+=p(r);h+='</p> </div> </div> <div class="feed-footer feed-item" data-feedid="';h+=n(v);h+='" data-userid="';h+=n(m);h+='"> <span class="zan add-zan ';h+=n(u==1?"icon-like-ard":"");h+='"> <i class="icon-zan iconfont">&#xe630;</i> <i class="icon-zaned iconfont">&#xe609;</i> <i class="num-zan">0</i> </span> </div> ';return new String(h)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/