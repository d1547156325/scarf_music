define(["../../template",""],function(a){return a("rank/jinlirank/ranksearchTmpl",function(a,s){"use strict";var i=this,r=i.$helpers,t=a.item,l=a.artist,e=a.k,c=a.artists,n=i.$escape,d=r.checkImg,h=a.album,u=a.i,v=a.albums,m="";m+='<div class="ranksearch"> <div class="search-wrap"> <div class="sorry-suggest-wrep"></div> ';if(!t.search_result){m+=' <p class="sorry-suggest">对不起，没有找到您需要的艺人或专辑，Ta们比较受欢迎，要不去看看</p> '}m+=" ";if(l.length){m+=' <h2>歌手</h2> <ul class="search-artist"> ';for(var e=0;e<l.length;e++){c=l[e];m+=' <li class="clearfix"> <div class="pic"><img src="';m+=n(d(c.artistpic,"USER_URANK_PIC_60","@w_32,o_1,q_80"));m+='" alt=""></div> <div class="name"> <p class="author-name">';m+=n(c.artistname);m+='</p>  </div> <div class="dabang">打榜</div> <a href="/redrank/artist/';m+=n(c.artistid);m+='" target="_blank"></a> </li> '}m+=" </ul> "}m+=" ";if(h.length){m+=' <h2>专辑</h2> <ul class="search-album"> ';for(var u=0;u<h.length;u++){v=h[u];m+=' <li class="clearfix"> <div class="pic"><img src="';m+=n(d(v.albumpic,"USER_URANK_PIC_60","@w_32,o_1,q_80"));m+='" alt=""></div> <div class="name"> <p class="author-name">';m+=n(v.albumname);m+='</p> <p class="author-num">';m+=n(v.artistname);m+='</p> </div>  <div class="buy">购买</div> <a href="/redrank/artist/';m+=n(v.artistid);m+='" target="_blank"></a> </li> '}m+=" </ul> "}m+=" </div> </div> ";return new String(m)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/