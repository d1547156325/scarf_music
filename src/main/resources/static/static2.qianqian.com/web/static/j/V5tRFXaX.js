define(["../template",""],function(i){return i("dynamic/dynamicTopicTmpl",function(i,c){"use strict";var s=this,t=s.$helpers,a=s.$escape,p=t.checkImg,e=i.item,n=i.u,d=i.user,o="";o+=' <div class="dynamic-topic clearfix"> <div class="dynamic-topic-inside pr"> <img src="';o+=a(p(e.topic.pic_700x340,"TOPIC_PIC_700"));o+='" alt="" class="dynamic-topic-pic" > <a href="/discuss/detail/';o+=a(e.msgid);o+='" class="dynamic-topic-link pa"></a> <div class="dynamic-topic-bg pa"></div> ';if(e.topic.userlist){o+=' <div class="dynamic-topic-text pa"> <h2 class="f20 dynamic-topic-title">';o+=a(e.topic.topic_title);o+='</h2> <p class="f14 dynamic-topic-desc"><i class="topic-icon18"></i>';o+=a(e.topic.pv_nums);o+="</p> </div> "}else{o+=' <div class="dynamic-topic-text dynamic-topic-text-middle pa"> <h2 class="f20 dynamic-topic-title">';o+=a(e.topic.topic_title);o+='</h2> <p class="f14 dynamic-topic-desc"><i class="topic-icon18"></i>';o+=a(e.topic.pv_nums);o+="</p> </div> "}o+=" ";if(e.topic.userlist){o+=' <div class="dynamic-topic-v pa"> ';for(var n in e.topic.userlist){d=e.topic.userlist[n];o+=' <a href="/user?nickname=';o+=a(d.username);o+='"> <img src="';o+=a(d.userpic);o+='" alt="" class="dynamic-topic-v-pic"> <span class="to dynamic-topic-v-name">';o+=a(d.username);o+="</span> </a> "}o+=" </div> "}o+=" </div> </div> ";return new String(o)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/