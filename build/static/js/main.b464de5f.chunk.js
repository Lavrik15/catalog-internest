(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,a,t){e.exports=t(311)},148:function(e,a,t){},172:function(e,a,t){},292:function(e,a,t){},309:function(e,a,t){},311:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),r=t.n(c),o=(t(148),t(150),t(52)),i=t(53),m=t(57),s=t(54),u=t(56),d=t(38),E=t(124),h=t.n(E),b=t(316),p=t(318),f=(t(172),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Sort"},l.a.createElement(b.a,{action:{icon:"search"},placeholder:"Search...",className:"Sort__search"}),l.a.createElement(p.a,{className:"ui icon button",role:"button"},l.a.createElement("i",{className:"sort alphabet down icon"})),l.a.createElement(p.a,{className:"ui icon button",role:"button"},l.a.createElement("i",{className:"dollar sign icon"})),l.a.createElement("button",{className:"ui icon button",role:"button"},l.a.createElement("i",{className:"percent icon"})),l.a.createElement("div",{className:"Sort__Range"},l.a.createElement(b.a,{type:"number",min:"0",placeholder:"\u043c\u0438\u043d (\u0440\u0443\u0431.)"}),l.a.createElement(b.a,{type:"number",min:"0",placeholder:"\u043c\u0430\u043a\u0441 (\u0440\u0443\u0431.)"})))}}]),a}(n.Component)),v=t(317),g=t(319),w=t(123),j=(t(292),function(e){var a=e.goods;return l.a.createElement(v.a,{className:"Table",celled:!0},l.a.createElement(v.a.Header,null,l.a.createElement(v.a.Row,null,l.a.createElement(v.a.HeaderCell,null,"id"),l.a.createElement(v.a.HeaderCell,null,"title"),l.a.createElement(v.a.HeaderCell,null,"image"),l.a.createElement(v.a.HeaderCell,null,"price"),l.a.createElement(v.a.HeaderCell,null,"sale"))),l.a.createElement(v.a.Body,null,a.map(function(e){var a=e.data;return l.a.createElement(v.a.Row,null,l.a.createElement(v.a.Cell,null,a.id),l.a.createElement(v.a.Cell,null,a.title),l.a.createElement(v.a.Cell,null,l.a.createElement("img",{className:"Table__image",src:a.base_url,alt:""})),l.a.createElement(v.a.Cell,null,a.price),l.a.createElement(v.a.Cell,null,a.discount,"%"))})),l.a.createElement(v.a.Footer,null,l.a.createElement(v.a.Row,null,l.a.createElement(v.a.HeaderCell,{colSpan:"5"},l.a.createElement(g.a,{floated:"right",pagination:!0},l.a.createElement(g.a.Item,{as:"a",icon:!0},l.a.createElement(w.a,{name:"chevron left"})),l.a.createElement(g.a.Item,{as:"a"},"1"),l.a.createElement(g.a.Item,{as:"a"},"2"),l.a.createElement(g.a.Item,{as:"a"},"3"),l.a.createElement(g.a.Item,{as:"a"},"4"),l.a.createElement(g.a.Item,{as:"a",icon:!0},l.a.createElement(w.a,{name:"chevron right"})))))))}),C=(t(309),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={goods:null},t.setGoods=t.setGoods.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchGoods()}},{key:"fetchGoods",value:function(){var e=this;h()({method:"get",url:"/shop.json",timeout:1e4}).then(function(a){return e.setGoods(a.data)}).catch(function(a){return e.setState({error:a})})}},{key:"setGoods",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.state.goods;return l.a.createElement("div",{className:"App"},e?l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(j,{goods:e})):l.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,2,1]]]);
//# sourceMappingURL=main.b464de5f.chunk.js.map