(this["webpackJsonpquiz-admin"]=this["webpackJsonpquiz-admin"]||[]).push([[0],{183:function(e,t,a){e.exports=a.p+"static/media/Albicy_240x240.ca67f48b.jpg"},184:function(e,t,a){e.exports=a.p+"static/media/Voron_240x240.8836abf4.jpg"},185:function(e,t,a){e.exports=a.p+"static/media/Ponkr_240x240.4110abcc.jpg"},186:function(e,t,a){e.exports=a.p+"static/media/Renf_240x240.72131066.jpg"},187:function(e,t,a){e.exports=a.p+"static/media/Khvo_240x240.9c283299.jpg"},188:function(e,t,a){e.exports=a.p+"static/media/Holli_240x240.784d97d7.jpg"},189:function(e,t,a){e.exports=a.p+"static/media/Abro_240x240.53559671.jpg"},190:function(e,t,a){e.exports=a.p+"static/media/Zub_240x240.1dad6f51.jpg"},191:function(e,t,a){e.exports=a.p+"static/media/Poni_240x240.e6ab6ed5.jpg"},192:function(e,t,a){e.exports=a.p+"static/media/Tom_240x240.82c182d1.jpg"},193:function(e,t,a){e.exports=a.p+"static/media/Tru_240x240.001ce0de.jpg"},194:function(e,t,a){e.exports=a.p+"static/media/Iver_240x240.a2c9df28.jpg"},195:function(e,t,a){e.exports=a.p+"static/media/Ayon_240x240.cfedbe27.jpg"},196:function(e,t,a){e.exports=a.p+"static/media/Pukh_240x240.b701f28d.jpg"},213:function(e,t,a){e.exports=a(411)},237:function(e,t,a){},409:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(85),l=a(51),s=a(412),u=a(141),m=(a(218),a(69)),d=a(70),h=a(75),p=a(71),f=a(76),g=a(86),v=a(209),E=a(9),y=a(33),b=a(415),x=a(414),M=a(417),w=a(413),I=a(416),S=a(12),C=a.n(S),j=a(182),k=a.n(j),T=function(e){return k()().transform(e.replace(/\s+/g,"-").toUpperCase()).toUpperCase()},F=a(143),D=a(78),O=a.n(D),_="https://zen-quiz-api.herokuapp.com",A=r.a.createContext(!0);function R(e){return function(t){return r.a.createElement(A.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{context:a}))}))}}var H=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={rivals:[],matches:[]},a.fetchRivals=function(){O.a.get("".concat(_,"/rival")).then((function(e){return a.setState({rivals:e.data})})).catch((function(e){return console.log(e)}))},a.fetchMatches=function(){O.a.get("".concat(_,"/match")).then((function(e){return a.setState({matches:e.data})})).catch((function(e){return console.log(e)}))},a.createRival=function(e,t,n,r){O.a.post("".concat(_,"/rival/create"),{id:e,name:t,logo:n}).then((function(e){var t=e.data;return a.setState((function(e){return{rivals:[t].concat(Object(F.a)(e.rivals))}}))})).catch((function(e){return console.log(e)})).finally((function(){return r&&r()}))},a.createMatch=function(e,t,n,r,c){O.a.post("".concat(_,"/match/create"),{id:e,rivalId:t,place:n,startDateTime:r}).then((function(e){var t=e.data;return a.setState((function(e){return{matches:[t].concat(Object(F.a)(e.matches))}}))})).catch((function(e){return console.log(e)})).finally((function(){return c&&c()}))},a.setMatchResults=function(e,t,n,r,c,o,i){O.a.post("".concat(_,"/match/").concat(e,"/update"),{firstFive:t,score:n,twoScore:r,threeScore:c,tossing:o}).then((function(t){var n=t.data;return a.setState((function(t){var a=t.matches,r=a.findIndex((function(t){return t.id===e}));return a[r]=n,{matches:a}}))})).catch((function(e){return console.log(e)})).finally((function(){return i&&i()}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchMatches(),this.fetchRivals()}},{key:"render",value:function(){return r.a.createElement(A.Provider,{value:{state:this.state,fetchMatches:this.fetchMatches,fetchRivals:this.fetchRivals,createRival:this.createRival,createMatch:this.createMatch,setMatchResults:this.setMatchResults}},this.props.children)}}]),t}(n.Component),q=a(183),P=a.n(q),z=a(184),N=a.n(z),Y=a(185),V=a.n(Y),K=a(186),B=a.n(K),J=a(187),L=a.n(J),U=a(188),W=a.n(U),G=a(189),Z=a.n(G),$=a(190),Q=a.n($),X=a(191),ee=a.n(X),te=a(192),ae=a.n(te),ne=a(193),re=a.n(ne),ce=a(194),oe=a.n(ce),ie=a(195),le=a.n(ie),se=a(196),ue=a.n(se),me="\u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a",de=[{id:1,name:"\u042d\u043d\u0434\u0440\u044e \u0410\u043b\u044c\u0431\u0438\u0441\u0438",number:6,role:me,age:29,height:178,weight:77,country:"\u0424\u0440\u0430\u043d\u0446\u0438\u044f",photo:P.a,images:[]},{id:2,name:"\u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u043e\u0440\u043e\u043d\u043e\u0432",number:18,role:me,age:33,height:194,weight:95,country:"\u0420\u043e\u0441\u0441\u0438\u044f",photo:N.a,images:[]},{id:3,name:"\u0410\u043d\u0442\u043e\u043d \u041f\u043e\u043d\u043a\u0440\u0430\u0448\u043e\u0432",number:7,role:me,age:33,height:200,weight:93,country:"\u0420\u043e\u0441\u0441\u0438\u044f",photo:V.a,images:[]},{id:4,name:"\u0410\u043b\u0435\u043a\u0441 \u0420\u0435\u043d\u0444\u0440\u043e",number:12,role:me,age:33,height:191,weight:80,country:"\u0421\u0428\u0410",photo:B.a,images:[]},{id:5,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0425\u0432\u043e\u0440\u043e\u0441\u0442\u043e\u0432",number:13,role:me,age:30,height:190,weight:84,country:"\u0420\u043e\u0441\u0441\u0438\u044f",photo:L.a,images:[]},{id:6,name:"\u041e\u0441\u0442\u0438\u043d \u0425\u043e\u043b\u043b\u0438\u043d\u0437",number:9,role:me,age:27,height:193,weight:86,country:"\u0421\u0428\u0410",photo:W.a,images:[]},{id:7,name:"\u0422\u0438\u043c \u0410\u0431\u0440\u043e\u043c\u0430\u0439\u0442\u0438\u0441",number:21,role:me,age:30,height:203,weight:107,country:"\u0421\u0428\u0410",photo:Z.a,images:[]},{id:8,name:"\u0410\u043d\u0434\u0440\u0435\u0439 \u0417\u0443\u0431\u043a\u043e\u0432",number:20,role:me,age:28,height:205,weight:100,country:"\u0420\u043e\u0441\u0441\u0438\u044f",photo:Q.a,images:[]},{id:9,name:"\u041c\u0430\u0442\u0435\u0443\u0448 \u041f\u043e\u043d\u0438\u0442\u043a\u0430",number:25,role:me,age:26,height:198,weight:95,country:"\u041f\u043e\u043b\u044c\u0448\u0430",photo:ee.a,images:[]},{id:10,name:"\u0423\u0438\u043b\u043b \u0422\u043e\u043c\u0430\u0441",number:10,role:me,age:33,height:203,weight:104,country:"\u0421\u0428\u0410",photo:ae.a,images:[]},{id:11,name:"\u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432 \u0422\u0440\u0443\u0448\u043a\u0438\u043d",number:16,role:me,age:26,height:201,weight:103,country:"\u0420\u043e\u0441\u0441\u0438\u044f",photo:re.a,images:[]},{id:12,name:"\u041a\u043e\u043b\u0442\u043e\u043d \u0410\u0439\u0432\u0435\u0440\u0441\u043e\u043d",number:4,role:me,age:30,height:213,weight:116,country:"\u0421\u0428\u0410",photo:oe.a,images:[]},{id:13,name:"\u0413\u0443\u0441\u0442\u0430\u0432\u043e \u0410\u0439\u043e\u043d",number:34,role:me,age:34,height:208,weight:113,country:"\u041c\u0435\u043a\u0441\u0438\u043a\u0430",photo:le.a,images:[]},{id:14,name:"\u0410\u043d\u0442\u043e\u043d \u041f\u0443\u0448\u043a\u043e\u0432",number:14,role:me,age:30,height:208,weight:100,country:"\u0420\u043e\u0441\u0441\u0438\u044f",photo:ue.a,images:[]}],he=(a(237),g.a.Option),pe="DD.MM.YYYY HH:MM",fe={ADD_MATCH:"ADD_MATCH",EDIT_MATCH:"EDIT_MATCH"},ge=R(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={activeModal:null,selectedMatch:null,isMatchPosting:!1},a.renderColumns=function(){return[{title:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a",dataIndex:"rival",render:function(e,t){var n=a.props.context.state.rivals.find((function(e){return e.id===t.rivalId}));return r.a.createElement(r.a.Fragment,null,n&&n.name)}},{title:"\u041d\u0430\u0447\u0430\u043b\u043e \u043c\u0430\u0442\u0447\u0430",dataIndex:"startDateTime",render:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,C()(t.startDateTime).format(pe)))}},{title:"\u041c\u0435\u0441\u0442\u043e",dataIndex:"place"},{title:"\u0421\u0447\u0435\u0442",dataIndex:"score",render:function(e,t){var a=t.score;return a&&a.length?r.a.createElement("div",{style:{textAlign:"center",color:"#fff",background:a[0]>a[1]?"green":"red",borderRadius:"7px"}},r.a.createElement("span",null,a[0])," : ",r.a.createElement("span",null,a[1])):r.a.createElement(r.a.Fragment,null)}},{title:"\u0421\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u044f \u043f\u044f\u0442\u0435\u0440\u043a\u0430",dataIndex:"firstFive",width:"10%",render:function(e,t){var a=t.firstFive;return a&&a.length?r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(v.a,null,de.find((function(t){return t.id===e})).name)}))):r.a.createElement(r.a.Fragment,null)}},{title:"\u0414\u0432\u0430 \u043e\u0447\u043a\u0430",dataIndex:"twoScore",render:function(e,t){var a=t.twoScore;return a&&r.a.createElement(v.a,null,de.find((function(e){return e.id===a})).name)}},{title:"\u0422\u0440\u0438 \u043e\u0447\u043a\u0430",dataIndex:"threeScore",render:function(e,t){var a=t.threeScore;return a&&r.a.createElement(v.a,null,de.find((function(e){return e.id===a})).name)}},{title:"\u0412\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043d\u0438\u0435",dataIndex:"tossing",render:function(e,t){var a=t.score,n=t.tossing;return a&&a.length?r.a.createElement(E.a,{theme:"twoTone",type:n?"check-circle":"close-circle",twoToneColor:n?"#52c41a":"red",style:{fontSize:"28px"}}):r.a.createElement(r.a.Fragment,null)}},{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",dataIndex:"operation",render:function(e,t){return t.score&&t.score.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{type:"primary",onClick:function(){return a.setState({activeModal:fe.EDIT_MATCH,selectedMatch:t.id})}},"\u041e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"))}}]},a.onModalClose=function(){a.setState({activeModal:null})},a.CreateMatchForm=b.a.create({name:"CreateMatchForm"})((function(e){var t=e.form,n=t.getFieldDecorator,c=t.validateFields,o=a.props.context,i=o.createMatch,l=o.state.rivals;return r.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),a.setState({isMatchPosting:!0}),c((function(e,t){var n=t.rivalId,r=t.place,c=t.startDateTime;if(!e){var o=T("".concat(l.find((function(e){return e.id===n})).name).concat(C()(c).format("DD-MM-YY-HH-MM-SS")));i(o,n,r,c,(function(){return a.setState({isMatchPosting:!1,activeModal:null})}))}}))},className:"create-match"},r.a.createElement(b.a.Item,null,n("rivalId",{rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430"}]})(r.a.createElement(g.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u043f\u0435\u0440\u0438\u043d\u043a\u0430",showSearch:!0,optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},l.map((function(e){var t=e.id,a=e.name;return r.a.createElement(he,{key:t,value:t},a)}))))),r.a.createElement(b.a.Item,null,n("startDateTime",{rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u0430\u0442\u0447\u0430!"}]})(r.a.createElement(x.a,{style:{width:"100%"},format:pe,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043c\u044f",showTime:!0}))),r.a.createElement(b.a.Item,null,n("place",{rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}]})(r.a.createElement(M.a,{type:"text",placeholder:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u0430\u0442\u0447\u0430"}))),r.a.createElement(b.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit",className:"login-form-button",block:!0},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u0430\u0442\u0447")))})),a.MatchResultsForm=b.a.create({name:"MatchResultsForm"})((function(e){var t=e.form,n=t.getFieldDecorator,c=t.validateFields,o=t.setFields,i=a.props.context,l=i.setMatchResults,s=i.state,u=s.rivals,m=s.matches,d=a.state.selectedMatch,h=m.find((function(e){return e.id===d})),p=u.find((function(e){return e.id===h.rivalId}));return r.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),a.setState({isMatchPosting:!0}),c((function(e,t){var n=t.firstFive,r=t.clubScore,c=t.rivalScore,i=t.twoScore,s=t.threeScore,u=t.tossing,m=n.map((function(e){return parseInt(e)})),h=[parseInt(r),parseInt(c)];5===n.length?e||l(d,m,h,parseInt(i),parseInt(s),!!u,(function(){return a.setState({isMatchPosting:!1,activeModal:null})})):o({firstFive:{value:n,errors:[new Error("\u041d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c 5 \u0438\u0433\u0440\u043e\u043a\u043e\u0432")]}})}))},className:"create-match"},r.a.createElement(b.a.Item,null,r.a.createElement(M.a,{disabled:!0,value:p.name})),r.a.createElement(b.a.Item,null,r.a.createElement(M.a,{disabled:!0,value:h.place})),r.a.createElement(b.a.Item,null,r.a.createElement(M.a,{disabled:!0,value:C()(h.startDateTime).format(pe)})),r.a.createElement(b.a.Item,{label:"\u0421\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u044f \u043f\u044f\u0442\u0435\u0440\u043a\u0430"},n("firstFive",{rules:[{required:!0,message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0443\u044e \u043f\u044f\u0442\u0435\u0440\u043a\u0443"}]})(r.a.createElement(g.a,{placeholder:"\u0421\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u044f \u043f\u044f\u0442\u0435\u0440\u043a\u0430",mode:"tags"},de.map((function(e){return r.a.createElement(he,{key:e.id},e.name)}))))),r.a.createElement(b.a.Item,{label:"\u041a\u0442\u043e \u0432\u044b\u0438\u0433\u0440\u0430\u043b \u0432\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043d\u0438\u0435"},n("tossing",{rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u0442\u043e \u0432\u044b\u0438\u0433\u0440\u0430\u043b \u0432\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043d\u0438\u0435"}]})(r.a.createElement(g.a,{type:"text",placeholder:"\u0412\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0438\u0433\u0440\u0430\u043b\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430"},r.a.createElement(he,{key:0},"\u0417\u0435\u043d\u0438\u0442"),r.a.createElement(he,{key:1},p.name)))),r.a.createElement(b.a.Item,{label:"\u041a\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u043c \u0437\u0430\u0431\u0438\u043b \u0434\u0432\u0443\u0445\u043e\u0447\u043a\u043e\u0432\u044b\u0439"},n("twoScore",{rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u043c \u0437\u0430\u0431\u0438\u043b \u0434\u0432\u0430 \u043e\u0447\u043a\u0430"}]})(r.a.createElement(g.a,{placeholder:"\u041f\u0435\u0440\u0432\u044b\u043c \u0437\u0430\u0431\u0438\u043b \u0434\u0432\u0430 \u043e\u0447\u043a\u0430"},de.map((function(e){return r.a.createElement(he,{key:e.id},e.name)}))))),r.a.createElement(b.a.Item,{label:"\u041a\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u043c \u0437\u0430\u0431\u0438\u043b \u0442\u0440\u0435\u0445\u043e\u0447\u043a\u043e\u0432\u044b\u0439"},n("threeScore",{rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u043c \u0437\u0430\u0431\u0438\u043b \u0434\u0432\u0430 \u043e\u0447\u043a\u0430"}]})(r.a.createElement(g.a,{placeholder:"\u041f\u0435\u0440\u0432\u044b\u043c \u0437\u0430\u0431\u0438\u043b \u0434\u0432\u0430 \u043e\u0447\u043a\u0430"},de.map((function(e){return r.a.createElement(he,{key:e.id},e.name)}))))),r.a.createElement(b.a.Item,{label:"\u0421\u0447\u0435\u0442"},r.a.createElement(M.a.Group,{compact:!0},n("clubScore",{rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}]})(r.a.createElement(M.a,{type:"number",placeholder:"\u0417\u0435\u043d\u0438\u0442",style:{width:"50%"}})),n("rivalScore",{rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}]})(r.a.createElement(M.a,{type:"number",placeholder:p.name,style:{width:"50%"}})))),r.a.createElement(b.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit",className:"login-form-button",block:!0},"\u041e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")))})),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeModal,a=this.props.context.state.matches,n=this.CreateMatchForm,c=this.MatchResultsForm;return r.a.createElement("div",{className:"rivals"},r.a.createElement(w.a,{dataSource:a,columns:this.renderColumns(),rowKey:function(e){return e.id}}),r.a.createElement(y.a,{type:"primary",onClick:function(){return e.setState({activeModal:fe.ADD_MATCH})},style:{marginTop:15}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement(I.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0430\u0442\u0447",visible:t===fe.ADD_MATCH,onCancel:this.onModalClose,footer:!1},r.a.createElement(n,null)),r.a.createElement(I.a,{title:"\u0418\u0442\u043e\u0433\u0438 \u043c\u0430\u0442\u0447\u0430",visible:t===fe.EDIT_MATCH,onCancel:this.onModalClose,footer:!1},r.a.createElement(c,null)))}}]),t}(r.a.Component)),ve=(a(409),R(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={isVisibleModal:!1,name:"",logo:""},a.columns=function(){return[{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",key:"name"},{title:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",dataIndex:"logo",key:"logo",render:function(e){return r.a.createElement("img",{src:e,alt:e,width:70})}},{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{style:{marginRight:15}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))}}]},a.onModalClose=function(){a.setState({isModalVisible:!1,name:"",logo:""})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isModalVisible,n=t.name,c=t.logo,o=this.props.context.createRival,i=this.props.context.state.rivals;return r.a.createElement("div",{className:"rivals"},r.a.createElement(w.a,{dataSource:i,columns:this.columns()}),r.a.createElement(y.a,{type:"primary",onClick:function(){return e.setState({isModalVisible:!0})},style:{marginTop:15}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement(I.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430",visible:a,onOk:function(){return o(T(n),n,c,e.onModalClose)},onCancel:this.onModalClose},r.a.createElement(M.a,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",onChange:function(t){return e.setState({name:t.target.value})},style:{marginBottom:15}}),r.a.createElement(M.a,{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043b\u043e\u0433\u043e\u0442\u0438\u043f",onChange:function(t){return e.setState({logo:t.target.value})}})))}}]),t}(r.a.Component))),Ee=s.a.Header,ye=s.a.Content,be=s.a.Footer,xe=u.a.Item,Me=function(){return r.a.createElement(s.a,null,r.a.createElement(Ee,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo"}),r.a.createElement(u.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["matches"],defaultOpenKeys:["matches"],style:{lineHeight:"64px"}},r.a.createElement(xe,{key:"matches"},r.a.createElement(i.b,{to:"/matches"},"\u041c\u0430\u0442\u0447\u0438")),r.a.createElement(xe,{key:"rivals"},r.a.createElement(i.b,{to:"/rivals"},"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0438")))),r.a.createElement(ye,{style:{padding:"0 50px",marginTop:64}},r.a.createElement("div",{style:{padding:24,marginTop:30,background:"#fff",minHeight:360}},r.a.createElement(l.a,{path:"/matches",exact:!0,component:ge}),r.a.createElement(l.a,{path:"/rivals",exact:!0,component:ve}))),r.a.createElement(be,{style:{textAlign:"center"}},"tweek4000@yandex.ru \xa92019"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(i.a,null,r.a.createElement(H,null,r.a.createElement(Me,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[213,1,2]]]);
//# sourceMappingURL=main.662a16dd.chunk.js.map