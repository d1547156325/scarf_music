define(["../../template",""],function(a){return a("rank/redrank/zjlist",function(a,s){"use strict";var i=this,t=i.$helpers,n=a.r,r=a.i,e=a.zjlist,c=a.item,l=a.j,d=a.name,o=a.score,m=a.user_pic,p=i.$escape,v=t.checkImg,b=t.jsonStringify,g="";if(n.error_code==22001){g+=' <div class=" fh-wenan">专辑榜秀逗了(￣口￣)!! </div> '}else{g+=" ";for(r=0;r<e.length;r++){c=e}g+=" ";for(var l=0;l<3;l++){c=e;if(!c[l]){c[l]={name:"虚位以待",score:0,user_pic:"../i/fNcDgmms.jpg"/*tpa=http://static4.qianqian.com/web/static/i/fNcDgmms.jpg*/}}if(c[l].nums>9999){c[l].nums=(c[l].nums/1e4).toFixed(2)+"万 "}}g+=' <div class="topthree-wraper"> <div class="top top2"> <i class="wangguan"> </i> <div class="img-wraper img-wraper2"> <a href="/redrank/artist/';g+=p(c[1].artist_id);g+='" > <img src="';g+=p(v(c[1].album_pic,"USER_PIC_60"));g+='" alt=""> </a> </div> <div class="bottom"> <p class="song-namewrap"> <p class="to toname"> <a href="/redrank/artist/';g+=p(c[1].artist_id);g+=' " class="song-name">';g+=p(c[1].album_title);g+='</a> </p> </p> <p class="bottom-name to"> <a href="/redrank/artist/';g+=p(c[1].artist_id);g+='" class="bottom-name" >';g+=p(c[1].artist_name);g+='</a> </p> <p class="bottom-fen">  <span class="num">';g+=p(c[1].nums);g+='</span><span class="fen">张</span> </p> <a href="javascript:void(0)" class="bottom-btn-buyzj buy-zj" data-id="';g+=p(c[1].album_id);g+='" >购买专辑&nbsp;￥';g+=p(c[1].price);g+='</a> </div> </div> <div class="top top1"> <i class="wangguan"> </i> <div class="img-wraper img-wraper1"> <a href="/redrank/artist/';g+=p(c[0].artist_id);g+='" > <img src="';g+=p(v(c[0].album_pic,"USER_PIC_60"));g+='" alt=""> </a> </div> <div class="bottom"> <p class="to toname"> <a href="/redrank/artist/';g+=p(c[0].artist_id);g+='" class="song-name">';g+=p(c[0].album_title);g+='</a> </p> <p class="bottom-name to"> <a href="/redrank/artist/';g+=p(c[0].artist_id);g+='" class="bottom-name">';g+=p(c[0].artist_name);g+='</a> </p> <p class="bottom-fen bottom-fen1"> <span class="num">';g+=p(c[0].nums);g+='</span><span class="fen">张</span> </p> <a href="javascript:void(0)" class="bottom-btn-buyzj buy-zj" data-id="';g+=p(c[0].album_id);g+='" >购买专辑&nbsp;￥';g+=p(c[0].price);g+='</a> </div> </div> <div class="top top3"> <i class="wangguan"> </i> <div class="img-wraper img-wraper3"> <a href="/redrank/artist/';g+=p(c[2].artist_id);g+='" > <img src="';g+=p(v(c[2].album_pic,"USER_PIC_60"));g+='" alt=""> </a> </div> <div class="bottom"> <p class="to toname"> <a href="/redrank/artist/';g+=p(c[2].artist_id);g+='" class="song-name">';g+=p(c[2].album_title);g+='</a> </p> <p class="bottom-name to"> <a href="/redrank/artist/';g+=p(c[2].artist_id);g+='" class="bottom-name">';g+=p(c[2].artist_name);g+='</a> </p> <p class="bottom-fen">  <span class="num">';g+=p(c[2].nums);g+='</span><span class="fen">张</span> </p> <a href="javascript:void(0)" class="bottom-btn-buyzj buy-zj" data-id="';g+=p(c[2].album_id);g+='" >购买专辑&nbsp;￥';g+=p(c[2].price);g+='</a> </div> </div> </div>  <div class="zj-bang clearfix"> <div class="zj-content"><i class="bg-left"></i><i class="bg-right"></i> ';for(r=3;r<e.length;r++){c=e[r];g+=' <div class="zj-wrap"> <div class="zj-common content-box zj-num ">';g+=p(r+1);g+='<div class="content-box-bg pa"></div></div> <div class="zj-common content-box zj-all "> <div class="content-box-bg pa"></div> <div class="img-wrap"> <a href="/redrank/artist/';g+=p(c.artist_id);g+='" > <img src="';g+=p(v(c.album_pic,"USER_PIC_60"));g+='" alt=""> </a> </div> <div class="song-info-wrap"> <a href="/redrank/artist/';g+=p(c.artist_id);g+='" class="song to">';g+=p(c.album_title);g+='</a> <a href="/redrank/artist/';g+=p(c.artist_id);g+='" class="name to">';g+=p(c.artist_name);g+='</a> <p class="three-btn" data-album=\'';g+=p(b(c));g+='\'> <span class="play" ></span> <span class="collect" ></span> <span class="share" ></span> </p> </div> ';if(c.nums>9999){c.nums=(c.nums/1e4).toFixed(2)+"万 "}g+=' <span class="sale">已售';g+=p(c.nums);g+='张</span> </div> <div class="zj-common content-box three-img"> <div class="content-box-bg pa"></div> <div class="name-wrap"> <div class="wangguan-wrap"> ';for(var l=0;l<c.supporter_list.length;l++){g+=' <em class="wangguan wangguan';g+=p(l+1);g+='"></em> '}g+=' </div> <div class="icon-img-wrap"> ';for(var l=0;l<c.supporter_list.length;l++){g+=' <span class="icon-img icon-img';g+=p(2-l);g+='" data-id="';g+=p(c.album_id);g+='"><img src="';g+=p(v(c.supporter_list[l],"USER_PIC_40"));g+='" alt="" class="imgfind" data-id="';g+=p(c.album_id);g+='"></span> '}g+=' </div> </div> </div> <div class="zj-common content-box zj-btn "> <div class="content-box-bg pa"></div> <a href="javascript:void(0)" class="dabang buy-zj" data-id="';g+=p(c.album_id);g+='" >购买专辑&nbsp;￥';g+=p(c.price);g+="</a> </div> </div> "}g+=" ";if(n.have_more==0){g+=' <div class="last-line none">没有更多数据了~</div> '}g+=' <p class="fudong"></p> </div> </div> '}g+=" ";return new String(g)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/