(this["webpackJsonplia-amakiir"]=this["webpackJsonplia-amakiir"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(10),r=s.n(c),l=(s(15),s(5)),n=s(6),d=s(3),h=s(9),o=s(8),j=s(7),b=(s(16),"pounce: if it charges can make a full attack"),u="improved grab: if it hits, can grapple w/o provoking AoO",p=[{name:"Half-Elf",size:"medium",speed:20,STR:11,DEX:12,CON:12,naturalArmor:9,attack:"club (1d6) | silver dagger (1d4) [crits on 19] | sling (1d4)",fullAttack:"charge: 2x speed, +2 melee, -2 AC, +2 bull rush",specialAttacks:["rhino hide armor: charge attack damage bonus (2d6)"],spaceReach:"5ft/5ft",skills:{},CR:100,link:"https://www.d20srd.org/srd/races.htm#halfElves"},{name:"Eagle",size:"small",speed:10,flySpeed:80,STR:10,DEX:15,CON:12,naturalArmor:2,attack:"talons (1d4)",fullAttack:"2 talons (1d4), bite (1d4)",specialAttacks:[],spaceReach:"5ft/5ft",skills:{spot:8},CR:.5,link:"http://www.d20srd.org/srd/monsters/eagle.htm"},{name:"Megaraptor",size:"large",speed:60,STR:21,DEX:15,CON:21,naturalArmor:5,attack:"talons (2d6+5)",fullAttack:"talons (2d6+5), 2 foreclaws (1d4+2), bite (1d8+2)",specialAttacks:[b],spaceReach:"10ft/5ft",skills:{hide:8,jump:8,listen:8,spot:8,survival:8,survivalInNature:8},CR:6,link:"http://www.d20srd.org/srd/monsters/dinosaur.htm#megaraptor"},{name:"Dire Bear",size:"large",speed:40,STR:31,DEX:13,CON:19,naturalArmor:6,attack:"claw (2d4+10)",fullAttack:"2 claws (2d4+10), bite (2d8+5)",specialAttacks:[u],spaceReach:"10ft/5ft",skills:{},CR:7,link:"http://www.d20srd.org/srd/monsters/direBear.htm"},{name:"Dire Tiger",size:"large",speed:40,STR:27,DEX:15,CON:17,naturalArmor:5,attack:"claw (2d4+8)",fullAttack:"2 claws (2d4+8), bite (2d6+4)",specialAttacks:[b,u,"rake: 2 claw attacks while grappling (2d4+4)"],spaceReach:"10ft/5ft",skills:{hide:4,moveSilently:4,hideInTallGrass:8},CR:8,link:"http://www.d20srd.org/srd/monsters/direTiger.htm"},{name:"Giant Octopus",size:"large",speed:20,swimSpeed:30,STR:20,DEX:15,CON:13,naturalArmor:6,attack:"tentacle (1d4+5)",fullAttack:"8 tentacles (1d4+5), bite (1d8+2)",specialAttacks:[u,"constrict: on a successful grapple, squeeze (2d8+6)"],spaceReach:"10ft/10ft (20ft w/ tentacles)",skills:{hide:4,escapeArtist:10,swim:8},CR:8,link:"http://www.d20srd.org/srd/monsters/octopusGiant.htm"},{name:"",size:"",speed:0,flySpeed:0,STR:0,DEX:0,CON:0,naturalArmor:0,attack:"",fullAttack:"",specialAttacks:"",spaceReach:"5ft/5ft",skills:{},CR:0,link:""}],O=s(20),f=s(0);var m=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={level:8,abilities:{STR:11,DEX:12,CON:12,INT:11,WIS:16,CHA:9},form:e.form,AC:21,skillBonus:{}},a.changeState=a.changeState.bind(Object(d.a)(a)),a}return Object(n.a)(s,[{key:"changeState",value:function(e){var t=A(e);console.log("wild shaping to "+t.name);var s=JSON.parse(JSON.stringify(this.state.abilities));s.STR=t.STR,s.DEX=t.DEX,s.CON=t.CON,this.setState({abilities:s,form:t.name,skillBonus:t.skills}),this.props.handleCookie(t.name)}},{key:"openDoc",value:function(){window.open("https://docs.google.com/document/d/1Nqd2e5jN7umJwu0_1pBcgzvONexMfg231x-4pcBv4pU/edit#heading=h.9rom2cpesa89")}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"charSheet",children:[Object(f.jsx)("h1",{onClick:this.openDoc,children:"Lia Amakiir"}),Object(f.jsx)(x,{state:this.state}),Object(f.jsx)(k,{changeState:this.changeState,form:this.state.form}),Object(f.jsx)(g,{abilities:this.state.abilities}),Object(f.jsx)(v,{abilities:this.state.abilities}),Object(f.jsx)(S,{form:this.state.form,abilities:this.state.abilities}),Object(f.jsx)(w,{abilities:this.state.abilities,bonus:this.state.skillBonus})]})}}]),s}(i.a.Component);function x(e){var t=A(e.state.form),s=C(e.state.abilities.DEX),a=11+t.naturalArmor+s,i=11+t.naturalArmor,c=11+s,r=C(e.state.abilities.CON),l="";return t.flySpeed&&(l+="; Fly: "+t.flySpeed),t.swimSpeed&&(l+="; Swim: "+t.swimSpeed),Object(f.jsxs)("table",{className:"header",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:Object(f.jsxs)("th",{colSpan:"2",children:["Lvl ",e.state.level,Object(f.jsx)("a",{href:"https://www.d20srd.org/srd/classes/druid.htm",children:"Druid"})]})})}),Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:["Size: ",t.size]}),Object(f.jsxs)("td",{children:["Space/Reach: ",t.spaceReach]})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{onClick:function(){window.open("https://docs.google.com/spreadsheets/d/17tFSotVkqZibHmsRqxpLjVVpUEzBzfbAp5TxtKpov5M/edit#gid=0")},children:Object(f.jsxs)("span",{className:"underlined",children:["HP Max: ",47+r*e.state.level]})}),Object(f.jsxs)("td",{children:["AC: ",a," (T: ",c,", FF: ",i,")"]})]}),Object(f.jsx)("tr",{children:Object(f.jsxs)("td",{colSpan:"2",children:["Speed: ",t.speed," ",l]})})]})]})}var k=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={selected:e.form},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.props.changeState(this.state.selected)}},{key:"handleChange",value:function(e){this.setState({selected:e.target.value}),this.props.changeState(e.target.value)}},{key:"render",value:function(){var e=p.map((function(e){return Object(f.jsx)("option",{value:e.name,children:e.name},e.name)})),t=A(this.props.form);return Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Wild Shape: "}),Object(f.jsx)("select",{defaultValue:this.props.form,onChange:this.handleChange,children:e}),Object(f.jsx)("a",{className:"link",href:t.link,children:"[ d20srd ]"})]})}}]),s}(i.a.Component);function g(e){return Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:function(){var t=[];for(var s in e.abilities)t.push(Object(f.jsx)("th",{children:s},s));return t}()})}),Object(f.jsx)("tbody",{children:Object(f.jsx)("tr",{children:function(){var t=[];for(var s in e.abilities){var a=e.abilities[s];t.push(Object(f.jsxs)("td",{className:"abilities",children:[a,Object(f.jsx)("div",{className:"modifier",children:C(a)})]},s))}return t}()})})]})}function v(e){var t=6+C(e.abilities.CON)+1,s=2+C(e.abilities.DEX)+1,a=6+C(e.abilities.WIS)+1;return Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"FORT"}),Object(f.jsx)("th",{children:"REF"}),Object(f.jsx)("th",{children:"WILL"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t}),Object(f.jsx)("td",{children:s}),Object(f.jsx)("td",{children:a})]})})]})}function S(e){var t=A(e.form),s=t.specialAttacks.map((function(e){var t=e.split(":"),s=Object(j.a)(t,2),a=s[0],i=s[1];return Object(f.jsxs)("li",{children:[Object(f.jsxs)("span",{className:"specialName",children:[a,": "]}),i]},a)})),a="(+6/+1)",i="",c=C(e.abilities.STR),r=c;if("Half-Elf"!==e.form){var l=0;switch(t.size){case"small":r+=-4,l=1;break;case"large":r+=4,l=-1}var n=6+c+l;i=a="(+"+n+"/+"+(n-5)+")"}return Object(f.jsxs)("div",{children:[Object(f.jsx)("table",{className:"attacks",children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{children:["Attack: ",a,":"]}),Object(f.jsx)("td",{children:t.attack})]}),Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{children:["Full: ",i]}),Object(f.jsx)("td",{children:t.fullAttack})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:Object(f.jsx)("a",{href:"http://www.d20srd.org/srd/combat/specialAttacks.htm#grappleChecks",children:"Special:"})}),Object(f.jsx)("td",{children:Object(f.jsx)("ul",{children:s})})]})]})}),Object(f.jsxs)("p",{children:["*Grapple = (+6/+1) + ",r]})]})}function w(e){var t={};for(var s in e.abilities)t[s]=C(e.abilities[s]);var a=t.STR,i=t.DEX,c=t.CON,r=t.INT,l=t.WIS,n=t.CHA,d={concentration:[6,0,c,!0],craft:[0,0,r,!0],diplomacy:[0,2,n,!0],gatherInfo:[0,2,n,!1],handleAnimal:[6,0,n,!0],heal:[5,0,l,!0],knowledgeNature:[8,7,r,!0],listen:[2,1,l,!1],professionSailing:[1,0,l,!0],ride:[0,2,i,!0],search:[0,1,r,!1],spellcraft:[2,0,r,!0],spot:[8,1,l,!0],survival:[5,5,l,!0],survivalInNature:[5,7,l,!0]},h={appraise:[0,0,r,!1],balance:[0,0,i,!1],bluff:[0,0,n,!1],climb:[0,0,a,!1],disguise:[0,0,n,!1],escapeArtist:[0,0,i,!1],forgery:[0,0,r,!1],hide:[0,0,i,!1],intimidate:[0,0,n,!1],jump:[0,0,a,!1],moveSilently:[0,0,i,!1],openLock:[0,0,i,!1],senseMotive:[0,0,l,!1],sleightOfHand:[0,0,i,!1],swim:[0,0,a,!0]};function o(t){var s=[];for(var a in t){var i=t[a][0]+t[a][1]+t[a][2],c="";e.bonus[a]&&(i+=e.bonus[a],c="animalSkill");var r=t[a][3]?"classSkill":"";s.push(Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{className:r,children:a}),Object(f.jsx)("td",{className:c,children:i})]},a))}return s}return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Skills"}),Object(f.jsxs)("div",{className:"skills",children:[Object(f.jsx)("table",{children:Object(f.jsx)("tbody",{children:o(h)})}),Object(f.jsx)("table",{children:Object(f.jsx)("tbody",{children:o(d)})})]})]})}function C(e){return Math.floor((e-10)/2)}function A(e){return p.find((function(t){return t.name===e}))}var N=function(){var e=Object(O.a)(["user"]),t=Object(j.a)(e,2),s=t[0],a=t[1],i=s.user?s.user:"Half-Elf";return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(m,{form:i,handleCookie:function(e){a("user",e,{path:"/"})}})})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),R()}},[[18,1,2]]]);
//# sourceMappingURL=main.5d84b15c.chunk.js.map