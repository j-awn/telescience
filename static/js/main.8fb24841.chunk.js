(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){e.exports=n.p+"static/media/space.d4bd4642.png"},5415:function(e,t,n){e.exports=n(5549)},5548:function(e,t,n){},5549:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),i=n.n(r),c=n(15),l=n(2),s=n(25),u=n(23),m=n(16),p=n(18),d=n(20),g=n(130),h=n.n(g),f=function(e){var t=e.selectedMap,n=e.image,a=function(e){var t={cogmap1:"https://goonhub.com/images/maps/cogmap/z1",cogmap2:"https://goonhub.com/images/maps/cogmap2/z1",faintSignal:"https://goonhub.com/images/maps/cogmap2/z3",oshan:"https://goonhub.com/images/maps/oshan/z1",clarion:"https://goonhub.com/images/maps/clarion/z1",destiny:"https://goonhub.com/images/maps/destiny/z1",atlas:"https://goonhub.com/images/maps/atlas/z1",horizon:"https://goonhub.com/images/maps/horizon/z1",donut3:"https://raw.githubusercontent.com/j-awn/telescience/master/public/donut3",mushroom:"https://raw.githubusercontent.com/j-awn/telescience/master/public/mushroom",manta:"https://goonhub.com/images/maps/manta/z1",kondaru:"https://goonhub.com/images/maps/kondaru/z1",donut2:"https://goonhub.com/images/maps/donut2/z1",fleet:"https://goonhub.com/images/maps/bellerophon%20fleet/z1"};return t[e]?t[e]:t.cogmap1}(t);return o.a.createElement("div",{onDragStart:function(e){return e.preventDefault()}},function(){for(var e=[],t=0;t<8;t++)for(var n=0;n<8;n++)e.push("".concat(t,",").concat(n));return e}().map(function(e){return o.a.createElement("img",{className:n,key:e,alt:e,src:"".concat(a,"/").concat(e,".png")})}))},v=Object(c.withStyles)(function(e){return{main:{marginTop:-48+e.spacing.unit},line:{fontSize:e.typography.caption.fontSize},list:{maxHeight:"297px",overflow:"auto"},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.math,r=Object(a.useState)(!1),i=Object(p.a)(r,2),c=i[0],s=i[1];return o.a.createElement(l.k,{className:t.main},o.a.createElement(l.t,{onClick:function(){return s(!c)},align:"center",variant:"overline",className:t.headerText},"expedition locations",o.a.createElement(l.f,{disabled:!0,className:c?t.arrow:t.arrowShift},o.a.createElement(d.d,null))),o.a.createElement(l.b,{in:c},o.a.createElement(l.t,{component:"div",variant:"body2",className:t.list},o.a.createElement("ul",null,[{name:"meat station",location:[209,23]},{name:"solar observatory",location:[99,85]},{name:"lava moon",location:[88,106]},{name:"mars",location:[191,135]},{name:"ice moon",location:[15,150]},{name:"biodome",location:[120,164]},{name:"unknown",location:[131,212]},{name:"unknown",location:[236,223]}].map(function(e){var a=Object(p.a)(n.modifiers,2),r=a[0],i=a[1],c=Object(p.a)(n.divisors,2),l=c[0],s=c[1];return e.location[0]=e.location[0]/l+r,e.location[1]=e.location[1]/s+i,o.a.createElement("li",{key:"".concat(e.name,"_").concat(e.location.toString())},o.a.createElement("p",{className:t.line},e.name.toUpperCase()),"X: ".concat(e.location[0],", Y: ").concat(e.location[1]))})))))}),E=Object(c.withStyles)(function(e){return{paper:{position:"relative",marginTop:e.spacing.unit,marginRight:e.spacing.unit},textField:{margin:e.spacing.unit,width:"calc(100% - ".concat(2*e.spacing.unit,"px)")}}})(function(e){var t=e.classes,n=e.selectMap,a=e.selectedMap;return o.a.createElement(l.k,{className:t.paper},o.a.createElement(l.e,{className:t.textField},o.a.createElement(l.m,{MenuProps:t.menu,native:!0,value:a,onChange:function(e){var t=e.target.value;return n(t)}},o.a.createElement("option",{value:"cogmap1"},"Cogmap 1"),o.a.createElement("option",{value:"cogmap2"},"Cogmap 2"),o.a.createElement("option",{value:"faintSignal"},"Debris Field"),o.a.createElement("option",{value:"oshan"},"Oshan"),o.a.createElement("option",{value:"clarion"},"Clarion"),o.a.createElement("option",{value:"destiny"},"Destiny"),o.a.createElement("option",{value:"atlas"},"Atlas"),o.a.createElement("option",{value:"horizon"},"Horizon"),o.a.createElement("option",{value:"donut3"},"Donut 3"),o.a.createElement("option",{value:"mushroom"},"Mushroom"),o.a.createElement("option",{value:"manta"},"Manta"),o.a.createElement("option",{value:"kondaru"},"Kondaru"),o.a.createElement("option",{value:"donut2"},"Donut 2"),o.a.createElement("option",{value:"fleet"},"Bellerophon Fleet"))))}),b=Object(c.withStyles)(function(e){return{paper:{position:"relative",marginTop:2*e.spacing.unit,marginRight:e.spacing.unit},headerText:{marginRight:6*e.spacing.unit},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},listHeight:{maxHeight:442-4*e.spacing.unit,overflowY:"auto"}}})(function(e){var t=e.classes,n=e.centerCoords,r=e.zoom,i=e.favorites,c=e.modFavorites,s=e.math,g=e.selectedMap,h=Object(a.useState)(!1),f=Object(p.a)(h,2),v=f[0],E=f[1],b=Object(a.useState)(!1),O=Object(p.a)(b,2),w=O[0],j=O[1];return Object(a.useEffect)(function(){return i[g].length>=1&&!v&&!w?E(!0):i[g].length<1?E(!1):void 0},[e]),o.a.createElement(l.k,{className:t.paper},o.a.createElement(l.t,{className:t.headerText,"aria-owns":v?"favorites-menu":void 0,"aria-haspopup":"true",variant:"overline",align:"center",onClick:function(){return i[g].length?(j(!0),E(!v)):E(!1)}},o.a.createElement(l.f,{disabled:!0,className:v?t.arrow:t.arrowShift},o.a.createElement(d.d,null)),"Favorites"),o.a.createElement(l.b,{in:v},o.a.createElement(l.h,{id:"favorites-menu",className:t.listHeight},i[g].map(function(e,t){return o.a.createElement(l.i,{key:"".concat(e.location,"_key")},o.a.createElement(l.s,{value:e.name,onChange:function(e){var n=e.target.value;return c(function(e){return e[g][t].name=n,Object(m.a)({},e)})},FormHelperTextProps:{style:{textAlign:"center"}},helperText:"Real: [".concat(e.location.toString(),"] ----- Console: [").concat(e.location[0]/s.divisors[0]+s.modifiers[0],",").concat(e.location[1]/s.divisors[1]+s.modifiers[1],"]"),InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},o.a.createElement(l.f,{onClick:function(){return n(r,[0,0],e.location)},"aria-label":"go to"},o.a.createElement(d.e,null))),endAdornment:o.a.createElement(l.g,{position:"end"},o.a.createElement(l.f,{onClick:function(){return 1===i.length&&E(!1),c(function(t){return Object(m.a)({},t,Object(u.a)({},g,t[g].filter(function(t){return t!==e})))})},"aria-label":"delete"},o.a.createElement(d.a,null)))}}))}))))}),O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Help, I'm stuck!"),o.a.createElement("hr",null),o.a.createElement("p",null,"Send two Space GPS's through the teleporter at the console coord values, and record their actual position under GPS coord."),o.a.createElement("p",null,'When you\'re done, you can close the math table by clicking the "DO TELESCIENCE MATH" header.'),o.a.createElement("p",null,"ALT + WASD, Arrow Keys, or Numpad to navigate via keyboard."),o.a.createElement("p",null,"Right click anywhere to add favorites."),o.a.createElement("p",null,"Stuck? Check the SS13 wiki on","\t",o.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://wiki.ss13.co/Telescience#Decoding_the_teleporter",rel:"noopener noreferrer",target:"_blank"},"decoding the teleporter")),o.a.createElement("p",null,"Need more info?","\t",o.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://github.com/j-awn/telescience",rel:"noopener noreferrer",target:"_blank"},"Click here"),"\t","for a detailed readme."))},w=function(e){var t=e.classes,n=e.open,a=e.anchorEl,r=e.onClose,i=e.anchorOrigin;return o.a.createElement(l.l,{className:t.popOver,"aria-label":"Math help",id:"math-tips",open:n,anchorEl:a,onClose:r,anchorOrigin:i},o.a.createElement(l.t,{variant:"caption",className:t.popOverText},o.a.createElement(O,null)))},j=Object(c.withStyles)(function(e){return{textField:{width:75},main:{zIndex:2,position:"fixed",marginLeft:e.spacing.unit,marginTop:e.spacing.unit,width:257},resultsPos:{zIndex:2,position:"relative",marginTop:e.spacing.unit},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit},popOver:{marginLeft:e.spacing.unit},popOverText:{margin:e.spacing.unit,maxWidth:257+30*e.spacing.unit},goto:{zIndex:2,transform:"translate(102px, -127px)"},rightPanel:{position:"absolute",zIndex:2,top:0,right:0,width:300},helpButton:{position:"fixed",bottom:0,right:0,marginBottom:2*e.spacing.unit,marginRight:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.selectedTile,r=e.centerCoords,i=e.selectMap,c=e.selectedMap,s=e.zoom,g=e.favorites,h=e.modFavorites,f=Object(a.useState)(null),O=Object(p.a)(f,2),j=O[0],y=O[1],k=Object(a.useState)(!0),x=Object(p.a)(k,2),C=x[0],S=x[1],T=Object(a.useState)({input:[100,50],actualX:[6,7],actualY:[49,51]}),N=Object(p.a)(T,2),I=N[0],M=N[1],A=I.actualX[1]-I.actualX[0],z=I.actualY[1]-I.actualY[0],F=I.input[0]-I.actualX[0]/A,P=I.input[1]-I.actualY[0]/z;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:t.main},o.a.createElement(l.k,null,o.a.createElement(l.t,{className:t.headerText,onClick:function(){return S(!C)},variant:"overline",align:"center",id:"tableTitle"},"Do telescience math",o.a.createElement(l.f,{disabled:!0,className:C?t.arrow:t.arrowShift},o.a.createElement(d.d,null))),o.a.createElement(l.b,{in:C},o.a.createElement(l.n,{padding:"dense"},o.a.createElement(l.q,null,o.a.createElement(l.r,null,o.a.createElement(l.p,{align:"center"},"Console coord"),o.a.createElement(l.p,{align:"center"},"GPS coord"))),o.a.createElement(l.o,{"data-testid":"telescience-gps"},o.a.createElement(l.r,null,o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return D(e,"input",0)},value:I.input[0],InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"X1"),"data-testid":"input-1-0"}})),o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return D(e,"actualX",0)},value:I.actualX[0],InputProps:{"data-testid":"actual-x-0"}}))),o.a.createElement(l.r,null,o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return D(e,"input",1)},value:I.input[1],InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"Y1"),"data-testid":"input-1-1"}})),o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return D(e,"actualY",0)},value:I.actualY[0],InputProps:{"data-testid":"actual-y-0"}}))),o.a.createElement(l.r,null,o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,value:I.input[0]+1,disabled:!0,InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"X2"),"data-testid":"input-2-0"}})),o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return D(e,"actualX",1)},value:I.actualX[1],InputProps:{"data-testid":"actual-x-1"}}))),o.a.createElement(l.r,null,o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,value:I.input[1]+1,disabled:!0,InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"Y2"),"data-testid":"input-2-1"}})),o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return D(e,"actualY",1)},value:I.actualY[1],InputProps:{"data-testid":"actual-y-1"}}))))))),o.a.createElement(l.k,{className:t.resultsPos},o.a.createElement(l.t,{className:t.headerText,variant:"overline",align:"center",id:"tableTitle"},"Real Coordinates"),o.a.createElement(l.n,{padding:"dense"},o.a.createElement(l.o,null,o.a.createElement(l.r,null,o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,value:n[0],onChange:function(t){var n=parseInt(t.target.value);return n||(n=0),e.transform(function(e){return Object(m.a)({},e,{selectedTile:[n,e.selectedTile[1]]})})},InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"X"),"data-testid":"selected-x"}})),o.a.createElement(l.p,null,o.a.createElement(l.s,{className:t.textField,value:n[1],onChange:function(t){var n=parseInt(t.target.value);return n||(n=0),e.transform(function(e){return Object(m.a)({},e,{selectedTile:[e.selectedTile[0],n]})})},InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"Y"),"data-testid":"selected-y"}}))))),o.a.createElement(l.t,{variant:"overline",align:"center"},"Console Coordinates"),o.a.createElement(l.n,{padding:"dense"},o.a.createElement(l.o,null,o.a.createElement(l.r,null,o.a.createElement(l.p,null,o.a.createElement(l.s,{disabled:!0,className:t.textField,value:n[0]/A+F,InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"X"),"data-testid":"console-x"}})),o.a.createElement(l.p,null,o.a.createElement(l.s,{disabled:!0,className:t.textField,value:n[1]/z+P,InputProps:{startAdornment:o.a.createElement(l.g,{position:"start"},"Y"),"data-testid":"console-y"}})))))),o.a.createElement(w,{classes:t,open:Boolean(j),anchorEl:j,onClose:function(){return y(null)},anchorOrigin:{vertical:"top",horizontal:"right"}}),o.a.createElement(l.f,{tabIndex:-1,className:t.goto,onClick:function(){return r()}},o.a.createElement(d.f,null)),o.a.createElement(v,{math:{divisors:[A,z],modifiers:[F,P]}})),o.a.createElement("div",{className:t.rightPanel},o.a.createElement(E,{selectMap:i,selectedMap:c}),o.a.createElement(b,{zoom:s,centerCoords:r,favorites:g,selectedMap:c,modFavorites:h,math:{divisors:[A,z],modifiers:[F,P]}}),o.a.createElement(l.d,{className:t.helpButton,onClick:function(e){var t=e.currentTarget;y(t)}},o.a.createElement(d.b,{style:{height:"100%",width:"100%",transform:"scale(1.21, 1.21)"}}))));function D(e,t,n){var a=parseInt(e.target.value);return a||(a=0),M(function(e){var o=e[t];return o[n]=a,Object(m.a)({},e,Object(u.a)({},t,o))})}}),y=Object(c.withStyles)(function(e){return{main:{backgroundImage:"url(".concat(h.a,")"),display:"block",width:9600,height:9600},image:{verticalAlign:"middle",width:1200,height:1200},imageUnclicked:{cursor:"grab"},imageClicked:{cursor:"grabbing"},noClick:{userSelect:"none"}}})(function(e){var t=e.classes,n=Object(a.useState)({initial:[0,0],mouse:[0,0],pos:[-2200,-2e3],selectedTile:[139,192]}),r=Object(p.a)(n,2),i=r[0],c=r[1],g=Object(a.useState)("cogmap1"),h=Object(p.a)(g,2),v=h[0],E=h[1],b=Object(a.useState)({cogmap1:[{name:"Telescience",location:[112,123]},{name:"AI core",location:[137,146]},{name:"Captain's Locker",location:[85,166]}],cogmap2:[{name:"Telescience",location:[104,120]},{name:"AI core",location:[190,220]}],faintSignal:[{name:"NASSA suit",location:[262,70]},{name:"Phaser",location:[285,162]}],oshan:[{name:"AI Core",location:[196,160]},{name:"Telescience",location:[181,174]}],clarion:[{name:"AI Core",location:[133,99]},{name:"Telescience",location:[153,107]}],destiny:[{name:"AI Core",location:[154,141]},{name:"Telescience",location:[174,104]}],atlas:[{name:"AI Core",location:[154,141]},{name:"Telescience",location:[144,180]}],samedi:[],horizon:[{name:"AI Core",location:[114,119]},{name:"Telescience",location:[235,154]}],donut3:[],mushroom:[{name:"AI Core",location:[185,40]},{name:"Telescience",location:[134,103]}],manta:[{name:"AI Core",location:[145,169]},{name:"Telescience",location:[169,128]}],kondaru:[{name:"AI Core",location:[213,160]},{name:"Telescience",location:[123,92]}],donut2:[{name:"AI Core",location:[241,73]},{name:"Telescience",location:[251,208]}],fleet:[{name:"AI Core",location:[128,98]},{name:"Telescience",location:[114,69]}]}),O=Object(p.a)(b,2),w=O[0],y=O[1],k=Object(a.useState)(7),x=Object(p.a)(k,2),C=x[0],S=x[1],T=C/10,N=Object(a.useState)(!1),I=Object(p.a)(N,2),M=I[0],A=I[1],z=Object(a.useState)(!1),F=Object(p.a)(z,2),P=F[0],D=F[1],X=Object(a.useState)({mouse:[0,0],target:null}),Y=Object(p.a)(X,2),W=Y[0],L=Y[1];Object(a.useEffect)(function(){var e=function(){var e=localStorage.getItem("telescienceFavorites");if(!e)return!1;e=JSON.parse(e);var t=Object.keys(e),n=Object.keys(w);if(t.length!==n.length||JSON.stringify(t)!==JSON.stringify(n)){var a=n.filter(function(e){return!t.includes(e)}),o=t.filter(function(e){return!n.includes(e)});a.length&&a.forEach(function(t){var n={};n[t]=w[t],e=Object(m.a)({},e,n)}),o.length&&o.forEach(function(n){var a={};t.pop.apply(t,Object(s.a)(o)),t.forEach(function(t){a[t]=e[t]}),e=a})}return e}();e&&y(e)},[]),Object(a.useEffect)(function(){var e;"string"!==typeof(e=w)&&(e=JSON.stringify(e)),localStorage.setItem("telescienceFavorites",e)},[JSON.stringify(w)]);var H={divStyle:{transformOrigin:"0 0",transform:"translate3D(".concat(i.pos[0],"px, ").concat(i.pos[1],"px, 0) scale(").concat(T,")")},selectorStyle:Object(m.a)({zIndex:1,position:"fixed"},_(i.selectedTile))};return o.a.createElement("div",{className:t.noClick,onKeyDown:function(e){return function(e){if(P){var t=e.key;if(e.altKey){if("5"===t||" "===t)return U(C);var n={w:[0,1],a:[-1,0],s:[0,-1],d:[1,0],ArrowUp:[0,1],ArrowLeft:[-1,0],ArrowDown:[0,-1],ArrowRight:[1,0],1:[-1,-1],2:[0,-1],3:[1,-1],4:[-1,0],6:[1,0],7:[-1,1],8:[0,1],9:[1,1],"+":2,"-":-2};if(Object.keys(n).includes(t)){var a=n[t];if("+"===t||"-"===t){if("+"===t&&C>=15)return;if("-"===t&&C<=3)return;return S(C+a),U(C+a)}return U(C,a),c(function(e){return Object(m.a)({},e,{selectedTile:[e.selectedTile[0]+a[0],e.selectedTile[1]+a[1]]})})}}}}(e)},tabIndex:0},"oshan"===v&&function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.a.createElement(o.a.Fragment,null,t.map(function(e,t){return e.pos||(e.pos=[150+t,151+t]),e.pos[0]--,e.pos[1]=300-e.pos[1],o.a.createElement("a",{key:"easteregg#".concat(t+1),style:{color:"inherit"},href:e.link,rel:"noopener noreferrer",target:"_blank"},o.a.createElement(d.c,{style:Object(m.a)({},q.apply(void 0,Object(s.a)(e.pos)),{color:e.color})}))}))}({link:0===Math.round(Math.random())?"https://www.youtube.com/watch?v=6E5m_XtCX3c":"https://youtu.be/3PgwDlbdew8?t=10",pos:[150,150]},{link:"https://youtu.be/XqZsoesa55w?t=12",pos:[3,4],color:"#6D7373"}),o.a.createElement(j,{selectedTile:i.selectedTile,centerCoords:U,selectMap:E,selectedMap:v,zoom:C,favorites:w,modFavorites:y,transform:c}),o.a.createElement("div",{onMouseLeave:function(){return A(!1),D(!1)},onMouseEnter:function(){return D(!0)},onContextMenu:K,onClick:function(e){var t=e.clientX,n=e.clientY;if(e.shiftKey){var a=R.apply(void 0,Object(s.a)(B(t,n)));navigator.clipboard.writeText("".concat(a[0]," ").concat(a[1]))}if(i.mouse[0]===t&&i.mouse[1]===n)return c(function(e){return Object(m.a)({},e,{selectedTile:R.apply(void 0,Object(s.a)(B(t,n)))})})},onMouseDown:function(e){A(!0);var t=e.clientX,n=e.clientY;return c(function(e){return Object(m.a)({},e,{mouse:[t,n],initial:B(t,n,1)})})},onMouseUp:function(){return A(!1)},onMouseMove:function(e){if(M){var t=e.clientX,n=e.clientY;return c(function(e){return Object(m.a)({},e,{pos:B(t,n,1,e.initial)})})}},onWheel:J},o.a.createElement("div",{className:t.main,style:H.divStyle},o.a.createElement(f,{image:"".concat(t.image," ").concat(t.noClick," ").concat(M?t.imageClicked:t.imageUnclicked),selectedMap:v})),w[v].length>0&&w[v].map(function(e){return o.a.createElement("svg",{key:"".concat(e.location.toString(),"_SVG"),onContextMenu:function(t){return t.stopPropagation(),t.preventDefault(),y(function(t){return Object(m.a)({},t,Object(u.a)({},v,t[v].filter(function(t){return t!==e})))})},style:Object(m.a)({zIndex:1,position:"fixed"},_(e.location)),className:"".concat(t.noClick," ").concat(t.imageUnclicked),width:32*T,height:32*T},o.a.createElement("rect",{width:"".concat(32*T,"px"),height:"".concat(32*T,"px"),stroke:"#39FF14",fill:"transparent",strokeWidth:"4"}))})),o.a.createElement(function(e){return o.a.createElement("svg",{onClick:e.onClick,onWheel:e.onWheel?e.onWheel:J,onMouseDown:e.mouseDown,onMouseEnter:function(){return D(!0)},onContextMenu:e.onContextMenu?e.onContextMenu:function(e){return e.preventDefault()},className:"".concat(t.noClick," ").concat(t.imageUnclicked),width:32*T,height:32*T,style:e.style},o.a.createElement("rect",{width:"".concat(32*T,"px"),height:"".concat(32*T,"px"),stroke:e.color,fill:"transparent",strokeWidth:"4"}))},{color:"white",style:H.selectorStyle,onClick:function(e){var t=e.clientX,n=e.clientY;if(!e.shiftKey)return c(function(e){return Object(m.a)({},e,{selectedTile:[1,1]})});var a=R.apply(void 0,Object(s.a)(B(t,n)));navigator.clipboard.writeText("".concat(a[0]," ").concat(a[1]))},onContextMenu:K}),o.a.createElement(l.j,{MenuListProps:{disablePadding:!0},open:Boolean(W.target),anchorEl:W.target,anchorPosition:{top:W.mouse[1],left:W.mouse[0]},anchorReference:"anchorPosition",onContextMenu:function(e){return e.preventDefault(),G()},onClose:function(){return G()}},o.a.createElement(l.a,{size:"small",onClick:function(e){return G(),y(function(e){return e[v].push({name:"Favorite #".concat(e[v].length+1),location:R.apply(void 0,Object(s.a)(B(W.mouse[0],W.mouse[1])))}),e})}},"favorite")));function R(e,t){return[1+(e-e%32)/32,300-(t-t%32)/32]}function _(e,t){if(!t&&"object"===typeof e){var n=e,a=Object(p.a)(n,2);e=a[0],t=a[1]}return{left:32*(e-1)*T+i.pos[0],top:32*-(t-300)*T+i.pos[1]}}function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.pos;return[e-a[0],t-a[1]].map(function(e){return e/n})}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!M){var n=e.deltaY,a=e.clientX,o=e.clientY;if(n>0){if(2===C)return;S(C-t)}else{if(15===C)return;S(C+t)}var r=(n>0?C-t:C+t)/10,i=B(a,o),l=Object(p.a)(i,2),s=l[0],u=l[1];return c(function(e){return Object(m.a)({},e,{pos:[-s*r+a,-u*r+o]})})}}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments.length>2?arguments[2]:void 0,a=n||i.selectedTile;S(e);var o=e/10,r=32*(a[0]-1+t[0])*o,l=32*-(a[1]-303+t[1])*o,s=window.innerWidth/2,u=window.innerHeight/2;return c(function(e){return Object(m.a)({},e,{pos:[-r+s,-l+u]})})}function K(e){e.preventDefault();var t=e.clientX,n=e.clientY,a=e.target;return L(function(e){return Object(m.a)({},e,{target:a,mouse:[t,n]})})}function G(){return L(function(e){return Object(m.a)({},e,{target:null})})}function q(e,t){return{zIndex:2,position:"absolute",left:32*e*T+i.pos[0],top:32*t*T+i.pos[1],width:32*T,height:32*T}}}),k=Object(c.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),x=function(e){return o.a.createElement(c.MuiThemeProvider,{theme:k},o.a.createElement(l.c,null),o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(5548);i.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5415,1,2]]]);
//# sourceMappingURL=main.8fb24841.chunk.js.map