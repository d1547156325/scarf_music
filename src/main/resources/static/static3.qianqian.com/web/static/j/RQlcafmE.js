define(["../../template",""],function(a){return a("rank/redrank/dayweektotal",function(a,s){"use strict";var i=this,n=i.$helpers,d=a.i,v=a.allnums,l=a.bang,t=a.bill,c=i.$escape,e=a.nums,b="";b+=" ";for(var d=1;d<=v;d++){b+=" "}b+=' <div class="bang-wrapper"> ';if(l=="ubang"){b+=' <div class="bang d-bang visit">日排行榜</div> <div class="bang wk-bang">周排行榜</div> '}b+=" ";if(l=="zhuanjibang"){b+=' <div class="bang d-bang visit">日销量榜</div> <div class="bang wk-bang">周销量榜</div> '}b+=" ";if(l=="fuhaobang"){b+=' <div class="bang d-bang visit">日排行榜</div> <div class="bang wk-bang">周排行榜</div> '}b+=" ";if(t[2]=="month"){b+=' <div class="bang m-bang">月销量榜</div> '}else{b+=' <div class="bang all-bang">总排行榜</div> '}b+=' <div class="date"> <span class="icon-left"></span> <span class="date-content" data-id="';b+=c(e);b+='">2017第';b+=c(e);b+='期</span> <span class="icon-right"></span> <span class="icon-date"></span> </div> <div class="qishu"> <div class="qishu-wrapper"> <i class="qishu-btn"></i> ';for(var d=1;d<=v;d++){b+=' <div class="qishu-content" data-id="';b+=c(d);b+='">第';b+=c(d);b+="期</div> "}b+=" </div> </div> </div> ";return new String(b)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/