define(["../../template",""],function(s){return s("rank/redrank/fhlist",function(s,a){"use strict";var i=this,n=i.$helpers,e=s.r,t=s.i,c=s.fhlist,o=s.item,p=s.j,r=s.name,l=s.score,d=s.user_pic,m=i.$escape,v=n.checkImg,g=s.loadmore,f="";if(e.error_code==22001){f+=' <div class=" fh-wenan">这里才是展示你实力的地方，快来成为第一个富豪吧!</div> '}else{f+=" ";for(t=0;t<c.length;t++){o=c}f+=" ";for(var p=0;p<3;p++){o=c;if(!o[p]){o[p]={name:"虚位以待",score:0,user_pic:"../../../../static4.qianqian.com/web/static/i/fNcDgmms.jpg"/*tpa=http://static4.qianqian.com/web/static/i/fNcDgmms.jpg*/}}if(o[p].score>9999){o[p].score=(o[p].score/1e4).toFixed(2)+"万 "}}f+=' <div class="topthree-wraper"> <div class="top top2 fh-top2"> <i class="wangguan"> </i> <div class="img-wraper img-wraper2"> <img src="';f+=m(v(o[1].user_pic,"USER_PIC_60"));f+='" alt=""> </div> <div class="bottom to"> <p class="bottom-name to">';f+=m(o[1].name);f+='</p> <p class="bottom-fen"> <span class="num">';f+=m(o[1].score);f+='</span><span class="fen">分</span> </p> </div> </div> <div class="top top1"> <i class="wangguan"> </i> <div class="img-wraper img-wraper1"> <img src="';f+=m(v(o[0].user_pic,"USER_PIC_60"));f+='" alt=""> </div> <div class="bottom to"> <p class="bottom-name to bottom-name1-weitiao">';f+=m(o[0].name);f+='</p> <p class="bottom-fen bottom-fen1 bottom-fen1-weitiao">  <span class="num">';f+=m(o[0].score);f+='</span><span class="fen">分</span> </p> </div> </div> <div class="top top3"> <i class="wangguan"> </i> <div class="img-wraper img-wraper3"> <img src="';f+=m(v(o[2].user_pic,"USER_PIC_60"));f+='" alt=""> </div> <div class="bottom to"> <p class="bottom-name to">';f+=m(o[2].name);f+='</p> <p class="bottom-fen">  <span class="num">';f+=m(o[2].score);f+='</span><span class="fen">分</span> </p> </div> </div> </div> <div class="u-bang fh-bang clearfix"> <div class="u-content"> <i class="bg-left"></i><i class="bg-right"></i> ';for(t=3;t<c.length;t++){o=c[t];f+=' <div class="u-wrap"> <div class="content content-box content-num ">';f+=m(t+1);f+='<div class="content-box-bg pa"></div></div> <div class="content content-box content-all fh-content-all"> <div class="content-box-bg pa"></div> <div class="img-wrap"><img src="';f+=m(v(o.user_pic,"USER_PIC_60"));f+='"></div> <div class="name-wrap to"> <p class="name fh-name to">';f+=m(o.name);f+='</p> </div> <div class="fh-gongxainzhi"> ';if(o.score>9999){o.score=(o.score/1e4).toFixed(2)+"万 "}f+=" <span>贡献值是：</span><span>";f+=m(o.score);f+="分</span> </div> </div> </div> "}f+=" ";if(g==0){f+=' <div class="last-line none">没有更多数据了~</div> '}f+=' <p class="fudong"></p> </div> </div> '}return new String(f)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/