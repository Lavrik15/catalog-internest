(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,a,t){e.exports=t(312)},150:function(e,a,t){},174:function(e,a,t){},293:function(e,a,t){},310:function(e,a,t){},312:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),o=(t(150),t(152),t(52)),s=t(53),i=t(57),m=t(54),u=t(56),d=t(38),E=t(126),h=t.n(E),p=t(317),b=t(319),f=(t(174),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Sort"},l.a.createElement(p.a,{action:{icon:"search"},placeholder:"Search...",className:"Sort__search"}),l.a.createElement("div",{className:"Sort__btn-group"},l.a.createElement(b.a,{className:"ui icon button",role:"button"},l.a.createElement("i",{className:"sort alphabet down icon"})),l.a.createElement(b.a,{className:"ui icon button",role:"button"},l.a.createElement("i",{className:"dollar sign icon"})),l.a.createElement("button",{className:"ui icon button",role:"button"},l.a.createElement("i",{className:"percent icon"}))),l.a.createElement("div",{className:"Sort__Range"},l.a.createElement(p.a,{type:"number",min:"0",placeholder:"\u043c\u0438\u043d (\u0440\u0443\u0431.)"}),l.a.createElement(p.a,{type:"number",min:"0",placeholder:"\u043c\u0430\u043a\u0441 (\u0440\u0443\u0431.)"})))}}]),a}(n.Component)),v=t(58),g=t(318),y=t(320),w=t(125),j=(t(293),function(e){return Object(v.sortBy)(e,function(e){return e.data.discount})}),C=function(e){var a=e.goods,t=(e.sortType,j(a));return console.log(t),l.a.createElement(g.a,{className:"Table",celled:!0},l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Row,null,l.a.createElement(g.a.HeaderCell,null,"id"),l.a.createElement(g.a.HeaderCell,null,"title"),l.a.createElement(g.a.HeaderCell,null,"image"),l.a.createElement(g.a.HeaderCell,null,"price"),l.a.createElement(g.a.HeaderCell,null,"sale"))),l.a.createElement(g.a.Body,null,t.map(function(e){console.log(t);var a=e.data;return l.a.createElement(g.a.Row,{key:a.id},l.a.createElement(g.a.Cell,null,a.id),l.a.createElement(g.a.Cell,null,a.title),l.a.createElement(g.a.Cell,null,l.a.createElement("img",{className:"Table__image",src:a.base_url,alt:""})),l.a.createElement(g.a.Cell,null,a.price),l.a.createElement(g.a.Cell,null,a.discount,"%"))})),l.a.createElement(g.a.Footer,null,l.a.createElement(g.a.Row,null,l.a.createElement(g.a.HeaderCell,{colSpan:"5"},l.a.createElement(y.a,{floated:"right",pagination:!0},l.a.createElement(y.a.Item,{as:"a",icon:!0},l.a.createElement(w.a,{name:"chevron left"})),l.a.createElement(y.a.Item,{as:"a"},"1"),l.a.createElement(y.a.Item,{as:"a"},"2"),l.a.createElement(y.a.Item,{as:"a"},"3"),l.a.createElement(y.a.Item,{as:"a"},"4"),l.a.createElement(y.a.Item,{as:"a",icon:!0},l.a.createElement(w.a,{name:"chevron right"})))))))},N=(t(310),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={goods:null,sortType:"none"},t.setGoods=t.setGoods.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchGoods()}},{key:"fetchGoods",value:function(){var e=this;h()({method:"get",url:"./shop.json",timeout:1e4}).then(function(a){return e.setGoods(a.data)}).catch(function(a){return e.setState({error:a})})}},{key:"setGoods",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.state,a=e.goods,t=e.sortType;return l.a.createElement("div",{className:"App"},a?l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(C,{goods:a,sotrType:t})):l.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,2,1]]]);
//# sourceMappingURL=main.b80b04ec.chunk.js.map